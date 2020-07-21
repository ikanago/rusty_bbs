use crate::schema::*;
use chrono::NaiveDateTime;

#[derive(Clone, Debug, Eq, PartialEq, Hash, Insertable)]
#[table_name = "posts"]
pub struct NewPost {
    pub text: String,
    pub timestamp: NaiveDateTime,
}
