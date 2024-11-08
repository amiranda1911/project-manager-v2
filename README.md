# project-manager-v2

# Desafio 2 - Semana 08 ### Programa de Bolsas React Set/24

## Overview

This documentation provides details on the API endpoints for managing users and tasks using JSON Server. The API allows for basic CRUD operations: Create, Read, Update, and Delete.

## Run DataBase:

npm run db

## API Endpoints

### Users

The following endpoints are available for managing users:

| Method | Endpoint   | Description              |
| ------ | ---------- | ------------------------ |
| GET    | /users     | Retrieve all users       |
| GET    | /users/:id | Retrieve a specific user |
| POST   | /users     | Create a new user        |
| PUT    | /users/:id | Update an existing user  |
| PATCH  | /users/:id | Update part of a user    |
| DELETE | /users/:id | Delete a user            |

#### User Model

```json
{
      "id": "e30a",
      "first_name": "adson",
      "last_name": "Nunes",
      "email": "adson.tanajura@gmail.com",
      "job_position": "dawd",
      "password": "dawda",
      "username": "@adsonNunes",
      "creation_date": "2024-11-06T22:57:56.081Z",
      "role": "dawd",
      "avatar": "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      "social_media": {
        "twitter": "",
        "instagram": "",
        "linkedin": ""
      }
    },
```

### Tasks

The following endpoints are available for managing tasks:

| Method | Endpoint   | Description              |
| ------ | ---------- | ------------------------ |
| GET    | /tasks     | Retrieve all tasks       |
| GET    | /tasks/:id | Retrieve a specific task |
| POST   | /tasks     | Create a new task        |
| PUT    | /tasks/:id | Update an existing task  |
| PATCH  | /tasks/:id | Update part of a task    |
| DELETE | /tasks/:id | Delete a task            |

#### Task Model

```json
{
  "id": 1,
  "owner_id": "e30a",
  "priority": "Alta",
  "title": "Finalizar o relatório",
  "members": ["Alice", "Bob", "Charlie"],
  "comments_count": 5,
  "completed_tasks_count": 2,
  "progress": 40,
  "start_datetime": "2024-11-05T09:00:00Z",
  "end_datetime": "2024-11-05T12:00:00Z",
  "estimated_time": "3 horas",
  "created_by": 1
}
```

## Example Usage

### User Endpoints Example

1. **Get All Users**

   **Request:**

   ```http
   GET /users
   ```

   **Response:**

   ```json
   [
     {
       "id": 1,
       "first_name": "Alice",
       "last_name": "Smith",
       "username": "@aliceSmith",
       "creation_date": "2024-11-05T08:30:00Z",
       "email": "alice.smith@example.com",
       "password": "senhaSegura123",
       "role": "Gerente",
       "social_media": {
         "twitter": "@aliceSmith",
         "instagram": "@alice_smith",
         "linkedin": "linkedin.com/in/alice-smith"
       }
     }
   ]
   ```

2. **Create a New User**

   **Request:**

   ```http
   POST /users
   ```

   **Request Body:**

   ```json
   {
     "first_name": "Charlie",
     "last_name": "Brown",
     "username": "@charlieBrown",
     "creation_date": "2024-11-05T09:00:00Z",
     "email": "charlie.brown@example.com",
     "password": "senhaSegura789",
     "role": "Analista",
     "social_media": {
       "twitter": "@charlieBrown",
       "instagram": "@charlie_brown",
       "linkedin": "linkedin.com/in/charlie-brown"
     }
   }
   ```

### Task Endpoints Example

1. **Get All Tasks**

   **Request:**

   ```http
   GET /tasks
   ```

   **Response:**

   ```json
   [
     {
       "id": 1,
       "priority": "Alta",
       "title": "Finalizar o relatório",
       "members": ["Alice", "Bob", "Charlie"],
       "comments_count": 5,
       "completed_tasks_count": 2,
       "progress": 40,
       "start_datetime": "2024-11-05T09:00:00Z",
       "end_datetime": "2024-11-05T12:00:00Z",
       "estimated_time": "3 horas",
       "created_by": 1
     }
   ]
   ```

2. **Create a New Task**

   **Request:**

   ```http
   POST /tasks
   ```

   **Request Body:**

   ```json
   {
     "priority": "Baixa",
     "title": "Revisar o documento de especificações",
     "members": ["David", "Eve"],
     "comments_count": 0,
     "completed_tasks_count": 0,
     "progress": 0,
     "start_datetime": "2024-11-06T08:00:00Z",
     "end_datetime": "2024-11-06T10:00:00Z",
     "estimated_time": "2 horas",
     "created_by": 1
   }
   ```
