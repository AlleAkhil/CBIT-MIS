CBIT-MIS
CBIT-MIS (Management Information System) is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This system is designed to efficiently manage the infrastructure of labs, seminar halls, classrooms, washrooms, and other facilities within an institution. The application provides a user-friendly interface that simplifies the process of tracking and maintaining the infrastructure, ensuring optimal usage and upkeep of resources.

Table of Contents
Features
Tech Stack
Installation
Usage
API Endpoints
Contributing
License

Features:-
Super Interface: Intuitive and user-friendly interface for managing various facilities.
Facility Management: Track and manage the status of labs, seminar halls, classrooms, and washrooms.
Maintenance Requests: Submit and track maintenance requests for any infrastructure issues.
Reporting: Generate reports on the usage and condition of facilities.
User Roles: Different roles for admin and users with appropriate permissions.
Real-time Updates: Instant updates on the status of maintenance requests and facility conditions.

Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Styling: CSS, Bootstrap

Installation
Clone the repository:
git clone https://github.com/yourusername/CBIT-MIS.git
cd CBIT-MIS

Install dependencies:

# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
Set up environment variables: Create a .env file in the backend directory and add the following variables:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Run the application:

# Run the backend server
cd backend
npm start

# Run the frontend server
cd ../frontend
npm start
The application should now be running at http://localhost:3000.

Usage
Admin Login:
Login with admin credentials to manage the entire infrastructure.
Add, update, or delete facilities and handle maintenance requests.

User Interface:
Explore the dashboard for a comprehensive overview of facility statuses.
Submit reports or maintenance requests directly from the interface.
