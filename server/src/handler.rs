use actix_web::{web, HttpResponse, HttpRequest};
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Register {
    text: String,
}

pub async fn hello() -> String {
    dbg!("Request");
    "hello\n".to_string()
}

/// Handle incoming requests with user's post.
pub async fn handle_receive_post(form: web::Form<Register>) -> HttpResponse {
    dbg!(form);
    HttpResponse::Ok().finish()
}

/// Handle incoming requests to get current posts.
pub async fn handle_get_posts(req: HttpRequest) -> HttpResponse {
    unimplemented!();
}
