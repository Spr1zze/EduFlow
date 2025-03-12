FROM php:8.2-apache

# Install the necessary extensions for MySQL/MariaDB
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Enable Apache mod_rewrite for friendly URLs (if needed)
RUN a2enmod rewrite
