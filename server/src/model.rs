use crate::schema::*;
use chrono::NaiveDateTime;
use diesel::Queryable;
use serde::Serialize;

#[derive(Clone, Debug, Serialize, PartialEq, Queryable)]
pub struct Post {
    pub id: i64,
    pub text: String,
    pub timestamp: NaiveDateTime,
}

#[derive(Clone, Debug, Eq, PartialEq, Hash, Insertable)]
#[table_name = "posts"]
pub struct NewPost {
    pub text: String,
    pub timestamp: NaiveDateTime,
}
