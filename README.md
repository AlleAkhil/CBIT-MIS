# CBIT-MIS

CBIT-MIS (Management Information System) is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This system is designed to efficiently manage the infrastructure of labs, seminar halls, classrooms, washrooms, and other facilities within an institution. The application provides a user-friendly interface that simplifies the process of tracking and maintaining the infrastructure, ensuring optimal usage and upkeep of resources.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Super Interface:** Intuitive and user-friendly interface for managing various facilities.
- **Facility Management:** Track and manage the status of labs, seminar halls, classrooms, and washrooms.
- **Maintenance Requests:** Submit and track maintenance requests for any infrastructure issues.
- **Reporting:** Generate reports on the usage and condition of facilities.
- **User Roles:** Different roles for admins and users with appropriate permissions.
- **Real-time Updates:** Instant updates on the status of maintenance requests and facility conditions.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS, Bootstrap

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/CBIT-MIS.git
   cd CBIT-MIS
   ```

2. **Install dependencies:**

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application:**

   ```bash
   # Run the backend server
   cd backend
   npm start

   # Run the frontend server
   cd ../frontend
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Usage

1. **Admin Login:**

   - Login with admin credentials to manage the entire infrastructure.
   - Add, update, or delete facilities and handle maintenance requests.

2. **User Interface:**
   - Explore the dashboard for a comprehensive overview of facility statuses.
   - Submit reports or maintenance requests directly from the interface.
