FROM rust:slim-buster as builder

WORKDIR /builder

COPY . .

RUN cargo install --path . \
    && cargo build --release

FROM rust:slim-buster

WORKDIR /usr/app

COPY --from=builder /builder/target/release/server ./

EXPOSE 8080

CMD [ "./server" ]
