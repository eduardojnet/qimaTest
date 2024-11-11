# QIMA Project

## Requirements
Before starting the project, ensure you have the following requirements installed:

# Requirements 
* Docker
* maven 3.8.5
* npm 10.8.2
* Java 17.0.12

## Getting Started

# Setting up the Database with Docker
1)  In the project root '/qima' directory, run the following command:
```bash
docker-compose up --build
```

# Starting the Backend
1) In the backend project directory '/qima', run the following command:
```bash
mvn spring-boot:run
```

# Spring Security Configuration

This document outlines how to configure default access passwords for user authentication in a Spring Boot application using Spring Security. The default credentials can be utilized for local development and testing purposes.

## Default Security Access Passwords

The following properties can be set in your `application.properties` file to configure the default user access:

```properties
app.security.user.name=admin
app.security.user.password=admin
```

## Demo
[Watch Demo on Youtube](https://youtu.be/RIsA3FVIdf4)
