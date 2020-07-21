use crate::model::NewPost;
use crate::schema::posts::dsl;
use diesel::insert_into;
use diesel::prelude::*;
use diesel::result::QueryResult;

pub fn insert_post(conn: &PgConnection, post: &NewPost) -> QueryResult<i64> {
    insert_into(dsl::posts)
        .values(post)
        .returning(dsl::id)
        .get_result(conn)
}
