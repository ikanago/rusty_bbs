use actix_web::{web, App, HttpServer};
use std::io;

mod handler;

#[actix_rt::main]
async fn main() -> io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/submit", web::post().to(handler::handle_receive_post))
            .route("/", web::get().to(handler::hello))
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
