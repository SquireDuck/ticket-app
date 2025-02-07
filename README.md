# Ticket Management App

A simple ticket management application where users can create tickets for software, hardware, and project issues or jobs. Tickets can be assigned priorities, edited, and managed efficiently. The project is not fully flushed out yet, but the core functionality is in place.

## Features
- Create tickets for software, hardware, and project-related issues
- Assign priority levels to tickets
- Edit and update tickets

## Setup
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up MongoDB Atlas:
   - Create a MongoDB Atlas account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Set up a cluster and database.
   - Obtain the connection URI and add it to your project's environment variables.

4. Run the development server:
   ```sh
   npm run dev
   ```

## To Do
- Improve UI/UX
- Add user authentication and role-based access control
- Implement email notifications for ticket updates
- Enhance error handling
