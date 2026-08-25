# syntax=docker/dockerfile:1

FROM golang:1.26-bookworm AS test
WORKDIR /workspace
COPY go.mod ./
RUN go mod download
COPY . .
CMD ["go", "test", "./..."]
