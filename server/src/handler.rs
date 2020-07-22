use crate::db;
use crate::model::NewPost;
use crate::DBPool;
use actix_web::{error, web, HttpRequest, HttpResponse, Result};
use chrono::Utc;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Register {
    text: String,
}

pub async fn hello() -> String {
    dbg!("Request");
    "Hello from Actix-web!\n".to_string()
}

/// Handle incoming requests with user's post.
pub async fn handle_receive_post(
    form: web::Form<Register>,
    db_pool: web::Data<DBPool>,
) -> Result<HttpResponse> {
    let db_connection = db_pool.get().map_err(error::ErrorInternalServerError)?;
    let post = NewPost {
        text: form.text.clone(),
        timestamp: Utc::now().naive_utc(),
    };
    db::insert_post(&db_connection, &post).map_err(error::ErrorInternalServerError)?;
    dbg!(&form);
    Ok(HttpResponse::Ok().finish())
}

/// Handle incoming requests to get current posts.
pub async fn handle_get_posts(req: HttpRequest) -> HttpResponse {
    unimplemented!();
}
