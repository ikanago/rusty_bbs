FROM rust:slim-buster as builder

ENV USER=root

WORKDIR /builder

RUN cargo init

COPY Cargo.toml ./

RUN cargo fetch

RUN cargo build --release

COPY . .

RUN touch src/main.rs && cat src/main.rs && cargo build --release

FROM rust:slim-buster

WORKDIR /usr/app

COPY --from=builder /builder/target/release/server ./

EXPOSE 8080

CMD [ "./server" ]
