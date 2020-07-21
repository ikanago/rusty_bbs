extern crate openssl;
#[macro_use]
extern crate diesel;

use actix_web::{web, App, HttpResponse, HttpServer};
use diesel::pg::PgConnection;
use diesel::r2d2::{ConnectionManager, Pool};
use std::env;
use std::io;

mod db;
mod handler;
mod model;
mod schema;

pub type DBPool = Pool<ConnectionManager<PgConnection>>;

#[actix_rt::main]
async fn main() -> io::Result<()> {
    let db_pool = create_db_pool();

    HttpServer::new(move || {
        App::new()
            .data(db_pool.clone())
            .route("/submit", web::post().to(handler::handle_receive_post))
            .route("/", web::get().to(handler::hello))
            .default_service(web::to(|| HttpResponse::NotFound()))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}

fn create_db_pool() -> DBPool {
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    Pool::builder()
        .max_size(5)
        .build(ConnectionManager::<PgConnection>::new(database_url))
        .expect("Failed to create database connection pools")
}
