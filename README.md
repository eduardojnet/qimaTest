<<<<<<< HEAD
# qimaTest
=======
# QIMA Project

This is a product management system developed with a software architecture based on **Spring Boot** for the backend and **Angular** for the frontend. This project aims to provide an intuitive interface for adding, editing, deleting, and listing products while utilizing good development practices and responsive design.

## Features
- **Product Management**: Easily add, edit, and remove products.
- **Search and Filtering**: Filter products by name, price, and other criteria.
- **Sorting**: Reorganize the product list by different columns (ascending and descending).
- **User-Friendly Interface**: Modern and responsive design for a better user experience.

## Tech Stack
- **Frontend**: Angular, CSS
- **Backend**: Spring Boot, Spring Security, Java, Mockito for unit tests.
- **Database**: Uses Docker to manage database (Postgres) dependencies.
- **Package Management**: Maven for the backend, npm for the frontend.

## Requirements
Before starting the project, ensure you have the following requirements installed:

* Docker
* maven 3.8.5
* npm 10.8.2
* Java 17.0.12

## Getting Started

# Setting up the Database with Docker
1) In the backend project directory '/qima', run the following command:
```bash
docker-compose up --build
```

# Starting the Backend
1) In the same directory above
```bash
mvn spring-boot:run
```

# Starting the Frontend
1) In the frontend project directory '/product-app', run the following command to start the Angular server:
```bash
ng serve
```

# Spring Security Configuration

This document outlines how to configure default access passwords for user authentication in a Spring Boot application using Spring Security. The default credentials can be utilized for local development and testing purposes.

## Default Security Access Passwords

The following properties can be set in your `application.properties` file to configure the default user access:

```properties
app.security.user.name=admin
app.security.user.password=admin
```

## Running Unit tests
On backend main directory run

```properties
mvn test
```
