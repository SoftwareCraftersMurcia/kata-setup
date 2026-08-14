# syntax=docker/dockerfile:1

FROM php:8.5-cli-bookworm AS base
WORKDIR /workspace
RUN apt-get update && apt-get install -y --no-install-recommends git unzip libzip-dev \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*
COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer

FROM base AS dependencies
COPY composer.json composer.lock ./
RUN composer install --no-interaction --prefer-dist --no-progress

FROM dependencies AS test
COPY . .
CMD ["composer", "test"]
