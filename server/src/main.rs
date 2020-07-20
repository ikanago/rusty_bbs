use actix_web::{web, App, HttpServer};
use std::io;

mod handler;

#[actix_rt::main]
async fn main() -> io::Result<()> {
    println!("Boot");
    HttpServer::new(|| {
        App::new()
            .route("/submit", web::post().to(handler::handle_receive_post))
            .route("/", web::get().to(handler::hello))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
