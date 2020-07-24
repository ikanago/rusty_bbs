use crate::db;
use crate::model::NewPost;
use crate::DBPool;
use actix_web::{error, web, HttpResponse, Result};
use chrono::Utc;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Register {
    text: String,
}

pub async fn ping() -> String {
    "Pong\n".to_string()
}

/// Handle incoming requests with user's post.
pub async fn handle_receive_post(
    form: web::Form<Register>,
    db_pool: web::Data<DBPool>,
) -> Result<HttpResponse> {
    dbg!(&form);
    let db_connection = db_pool.get().map_err(error::ErrorInternalServerError)?;
    let post = NewPost {
        text: form.text.clone(),
        timestamp: Utc::now().naive_utc(),
    };
    let inserted_post =
        db::insert_post(&db_connection, &post).map_err(error::ErrorInternalServerError)?;
    Ok(HttpResponse::Ok().json(inserted_post))
}

/// Handle incoming requests to get current posts.
pub async fn handle_get_posts(db_pool: web::Data<DBPool>) -> Result<HttpResponse> {
    let db_connection = db_pool.get().map_err(error::ErrorInternalServerError)?;
    let load_count = 10;
    let posts =
        db::load_posts(&db_connection, load_count).map_err(error::ErrorInternalServerError)?;
    Ok(HttpResponse::Ok().json(posts))
}
