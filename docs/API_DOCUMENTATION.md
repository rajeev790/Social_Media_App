# API Documentation

## Overview

This document provides details about the RESTful APIs available for the Social Media App. The APIs are organized into categories based on their functionality: User Management, Posts, Notifications, and Follows.

## Base URL

The base URL for all API requests is:



## Authentication

All API requests (except for public endpoints) require authentication via a token. Obtain a token by logging in using the `/auth/login/` endpoint.

## User Management

### Register a New User

- **Endpoint:** `POST /auth/register/`
- **Description:** Register a new user.
- **Request Body:**
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
    ```

### Login

- **Endpoint:** `POST /auth/login/`
- **Description:** Log in an existing user and obtain a token.
- **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
- **Response:**
    ```json
    {
      "token": "string"
    }
    ```

### Get User Profile

- **Endpoint:** `GET /users/{user_id}/`
- **Description:** Retrieve the profile information of a user.
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "id": "integer",
      "username": "string",
      "email": "string",
      "profile_picture": "string (URL)"
    }
    ```

## Posts

### Create a Post

- **Endpoint:** `POST /posts/`
- **Description:** Create a new post.
- **Request Body:**
    ```json
    {
      "title": "string",
      "content": "string",
      "image": "string (URL)"
    }
    ```
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "id": "integer",
      "title": "string",
      "content": "string",
      "image": "string (URL)",
      "created_at": "string (ISO 8601 timestamp)"
    }
    ```

### Get Posts

- **Endpoint:** `GET /posts/`
- **Description:** Retrieve a list of posts.
- **Response:**
    ```json
    [
      {
        "id": "integer",
        "title": "string",
        "content": "string",
        "image": "string (URL)",
        "created_at": "string (ISO 8601 timestamp)"
      }
    ]
    ```

### Like a Post

- **Endpoint:** `POST /posts/{post_id}/like/`
- **Description:** Like a specific post.
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "success": true
    }
    ```

### Comment on a Post

- **Endpoint:** `POST /posts/{post_id}/comment/`
- **Description:** Add a comment to a post.
- **Request Body:**
    ```json
    {
      "content": "string"
    }
    ```
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "id": "integer",
      "content": "string",
      "created_at": "string (ISO 8601 timestamp)"
    }
    ```

## Notifications

### Get Notifications

- **Endpoint:** `GET /notifications/`
- **Description:** Retrieve a list of notifications for the authenticated user.
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    [
      {
        "id": "integer",
        "type": "string",
        "message": "string",
        "created_at": "string (ISO 8601 timestamp)"
      }
    ]
    ```

## Follows

### Follow a User

- **Endpoint:** `POST /follows/{user_id}/`
- **Description:** Follow a specific user.
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "success": true
    }
    ```

### Unfollow a User

- **Endpoint:** `DELETE /follows/{user_id}/`
- **Description:** Unfollow a specific user.
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "success": true
    }
    ```

### Get Followers and Following

- **Endpoint:** `GET /follows/`
- **Description:** Retrieve lists of followers and following for the authenticated user.
- **Headers:** 
    - `Authorization: Token {token}`
- **Response:**
    ```json
    {
      "followers": [
        {
          "id": "integer",
          "username": "string"
        }
      ],
      "following": [
        {
          "id": "integer",
          "username": "string"
        }
      ]
    }
    ```

## Error Handling

Errors are returned with appropriate HTTP status codes and a JSON body containing an error message. Example:

- **Error Response:**
    ```json
    {
      "error": "string"
    }
    ```

## Contact

For questions or issues with the API, please contact [your.email@example.com](mailto:your.email@example.com).

Thank you for using the Social Media App API!
