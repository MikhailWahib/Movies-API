## Movies API Documentation

### Run Locally

<!-- git clone -->

```bash
git clone https://github.com/MikhailWahib/MoviesAPI/
```

```bash
cd movies-api
npm install
```

scripts:

```bash
npm run dev
npm run build
npm run start
```

### Movies

#### Base URL: https://movies-api-2kyn.onrender.com/api/v1/

- **Get All Movies**

  - **URL:** `/movies`
  - **Method:** `GET`
  - **Description:** Retrieve a list of all movies.
  - **Success Response:**
    - **Status Code:** 200 (OK)
    - **Response Body:**
      ```json
      [
      	{
      		"title": "Movie Title 1",
      		"director": "Director Name",
      		"year": 2020
      	},
      	{
      		"title": "Movie Title 2",
      		"director": "Director Name",
      		"year": 2021
      	}
      ]
      ```

- **Search Movies by Name**

  - **URL:** `/movies/search/:name`
  - **Method:** `GET`
  - **Description:** Search for movies by name.
  - **URL Parameters:**
    - `name`: The name of the movie to search for.
  - **Success Response:**
    - **Status Code:** 200 (OK)
    - **Response Body:**
      ```json
      [
      	{
      		"_id": "6546846",
      		"title": "Movie 1",
      		"year": "1994",
      		"rate": "Not Rated",
      		"duration": "2h 22m",
      		"desc": "Movie 1 Description",
      		"genre": ["Drama", "Romance"],
      		"actors": ["Actor 1", "Actor 2"],
      		"director": "Director Name",
      		"writers": ["Writer 1", "Writer 2"],
      		"rateOutOf10": "8.8",
      		"thumbnail": "thumbnail url",
      		"poster": "poster url",
      		"trailer": "trailer url"
      	}
      ]
      ```

- **Get Random Movie**
  - **URL:** `/movies/random`
  - **Method:** `GET`
  - **Description:** Retrieve a random movie from the database.
  - **Success Response:**
    - **Status Code:** 200 (OK)
    - **Response Body:**
      ```json
      {
      	"_id": "6546846",
      	"title": "Movie 1",
      	"year": "1994",
      	"rate": "Not Rated",
      	"duration": "2h 22m",
      	"desc": "Movie 1 Description",
      	"genre": ["Drama", "Romance"],
      	"actors": ["Actor 1", "Actor 2"],
      	"director": "Director Name",
      	"writers": ["Writer 1", "Writer 2"],
      	"rateOutOf10": "8.8",
      	"thumbnail": "thumbnail url",
      	"poster": "poster url",
      	"trailer": "trailer url"
      }
      ```

### Tech Stack

- **Node.js**

  - Node.js is a JavaScript runtime environment that allows developers to build scalable network applications.

- **Express**

  - Express is a web application framework for Node.js that simplifies the process of building web applications.

- **TypeScript (TS)**

  - TypeScript is used to add static typing to the JavaScript code, enhancing code quality and developer productivity.

- **Mongoose**

  - Mongoose is an Object Data Modeling (ODM) library for MongoDB and is used to define data models and interact with the MongoDB database.
