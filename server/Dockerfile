FROM ekidd/rust-musl-builder:stable as builder

WORKDIR /builder

# RUN apt update \
# # This package is necessary to avoid link error.
#     && apt install -y libpq-dev \
#     && rm -rf /var/lib/apt/lists/* \
#     && cargo init

ENV USER=rust

RUN sudo chown -R rust:rust . && cargo init --vcs none

COPY Cargo.toml ./

RUN cargo fetch

RUN cargo build --release --target x86_64-unknown-linux-musl

COPY . .

RUN sudo chown -R rust:rust . && touch src/main.rs && cargo build --release --target x86_64-unknown-linux-musl

FROM scratch

WORKDIR /usr/app

COPY --from=builder /builder/target/x86_64-unknown-linux-musl/release/server ./

EXPOSE 8080

CMD [ "./server" ]
