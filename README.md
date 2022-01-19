# Read with Express

Build the the **getAll** and **getOneById** controllers and practice writing SQL queries to get all kinds of data from the database.

## Setup

1. Clone the repository that you forked for the previous exercise (https://github.com/boolean-uk/boolean-uk-api-create-with-express)
2. In the root directory, type `npm install`, which installs dependencies for the project
3. Create the file `.env` in the root directory. It should contain a single line, which contains the environment variable used to specify the url from the instance created in the previous exercise.
4. Type `npm start`, which starts a development server that will reload whenever you make any changes to source files.

## Instructions

Build these routes and controllers for the **books** resource, which work with the following `fetch` requests:

- `/books/fiction` that returns fiction books
- `/books/fiction?topic=a-topic` that returns a specific topic of fiction books
- `/books/non-fiction` that return non-fiction books
- `/books/non-fiction?topic=a-topic` that returns a specific topic of non-fiction books
- `/books/author/name-of-author?order=recent` that returns a specific authors' books ordered by `publicationDate` with the most recent first (use ORDER in your SQL query)

Build these routes and controllers for the **pets** resource, which work with the following `fetch` requests:

- `/pets/types` that returns a list of pet types in the database
- `/pets/a-pet-type` that returns pets of a specific type ie. dog
- `/pets/a-pet-type?breed=a-dog-breed` that returns pets of a specific type and breed
- `/pets?microchip=false` that returns all pets without a microchip
- `/pets/a-pet-type?microchip=false` that returns pets of a specific type without a microchip

## Tips

- Use ElephantSQL to test your SQL queries and see if they are returning what you want before adding them to the code.
- Practice SQL... do as much of the sorting and filtering using SQL queries rather than Javascript.

# Challenge 1

Create other routes that you think might be useful.
