
# Career Connect

## Project Overview
**Career Connect** is a full-stack web application designed to bridge the gap between job seekers and employers, streamlining the application process and reducing communication delays. It enables two user types—job seekers and employers—to create tailored accounts and access role-specific features.

## Features
- **User Types**: Job seekers can create profiles, apply for jobs with a single click, and manage applications. Employers can post job listings and manage applicant interactions.
- **Streamlined Interface**: Intuitive UI built with React, enhanced by Bootstrap and Sass.
- **Real-time Notifications**: Integrated using socket.io to ensure timely updates.

## Technologies Used
- **Frontend**: React with Vite, Bootstrap, and SCSS.
- **Backend**: Flask framework.
- **Database**: MySQL managed with XAMPP.
- **Development Tools**: Notion for planning, DrawSQL for database design, and Postman for API testing.

## Project Architecture
The project is modular with clear separation between client, server, and general configuration.

1. **Client (Frontend)**: Handles user interface and experience.
2. **Server (Backend)**: Manages authentication, data handling, and user requests.
3. **Database**: Stores user data, job listings, and application status.

## Installation Guide
1. **Frontend Setup**:
   ```bash
   cd client
   npm install
   npm install react-icons
   ```
2. **Backend Setup**:
   - Create and activate a virtual environment.
   - Install dependencies with:
     ```bash
     pip install -r general/requirements.txt
     ```

## Future Enhancements
- Expand job matching algorithm.
- Implement advanced analytics for employers.
- Enhance user engagement with feedback loops.
