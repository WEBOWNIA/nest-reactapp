# CRUD Application using Next.js, NextAuth.js, Prisma, Tailwind CSS, and tRPC
This repository contains a CRUD (Create, Read, Update, Delete) application built using Next.js, NextAuth.js, Prisma, Tailwind CSS, and tRPC. The application allows users to perform basic CRUD operations on certain data.

## How to Get Started
To get started with the application, follow the steps below:

1. Clone the repository:
```
git clone https://github.com/WEBOWNIA/nest-reactapp.git
cd <repository_directory>
```
2. Install the dependencies:
```
npm install
```

3. Set up the database:
Make sure you have a PostgreSQL database available for use. Configure the database connection by creating a .env file in the root directory and adding the necessary environment 

### Variables:
```
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database_name?schema=public"
```
Replace your_username, your_password, and your_database_name with your actual PostgreSQL credentials.

1. Run database migrations:
```
npx prisma migrate dev
```
This will apply the database migrations and create the necessary tables in the database.

2. Start the development server:
```
npm run dev
```
The application will be running at http://localhost:3000. You can access it in your web browser.

### Technologies Used
The application is built using the following technologies:

1. Next.js: A React framework for server-side rendering and building web applications.
2. NextAuth.js: An authentication library for Next.js applications.
3. Prisma: A modern ORM (Object-Relational Mapping) tool for working with databases.
4. Tailwind CSS: A utility-first CSS framework for rapid UI development.
5. tRPC: A TypeScript-based RPC (Remote Procedure Call) framework for building APIs.

### Folder Structure
The repository's folder structure is organized as follows:

### graphql
```
- public/          # Public assets (images, etc.)
- pages/           # Next.js pages and API routes
- components/      # Reusable React components
- prisma/          # Prisma schema and database setup
- styles/          # Tailwind CSS configuration and custom styles
- trpc/            # tRPC API endpoints and utilities
- .env             # Environment variables
- .gitignore       # Git ignore rules
- next.config.js   # Next.js configuration file
- package.json     # npm package configuration
- README.md        # This file
Contributing
Contributions to the project are welcome! If you find any issues or have improvements to suggest, feel free to open a pull request.
```
## License
The project is licensed under the MIT License.