-- Your SQL goes here

CREATE TABLE posts (
    id BIGSERIAL NOT NULL,
    text VARCHAR NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
)
