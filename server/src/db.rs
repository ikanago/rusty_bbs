use crate::model::{NewPost, Post};
use crate::schema::posts::dsl;
use diesel::insert_into;
use diesel::prelude::*;
use diesel::result::QueryResult;

pub fn insert_post(conn: &PgConnection, new_post: &NewPost) -> QueryResult<Post> {
    let id = insert_into(dsl::posts)
        .values(new_post)
        .returning(dsl::id)
        .get_result(conn)?;
    Ok(Post {
        id,
        text: new_post.text.clone(),
        timestamp: new_post.timestamp,
    })
}

pub fn load_posts(conn: &PgConnection, count: i64) -> QueryResult<Vec<Post>> {
    dsl::posts.limit(count).load::<Post>(conn)
}
