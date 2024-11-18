# Career Connect

Career Connect is a comprehensive platform designed to bridge the gap between job seekers and employers. The project aims to streamline the hiring process, reduce ghosting, and simplify job applications, ensuring effective communication and better outcomes for both parties.

## Features

- **Job Seeker Features**:
  - Profile creation and management.
  - Search for job opportunities.
  - Track application status.

- **Employer Features**:
  - Post job listings.
  - Manage applications.
  - Communicate with potential hires.

- **Streamlined Communication**:
  - Real-time messaging between job seekers and employers.
  - Notification system to keep users updated.

- **User-friendly Design**:
  - Intuitive and responsive UI for a seamless experience.
  - Styled with Bootstrap and Sass for modern aesthetics.

## Tech Stack

Career Connect was built using the following technologies:

- **Frontend**:
  - React with Vite for fast and dynamic web applications.
  - Bootstrap and Sass for responsive and customizable styling.

- **Backend**:
  - Flask for the API and server-side logic.
  - Socket.io for real-time messaging functionality.

- **Database**:
  - MySQL on Xampp for structured and efficient data management.

- **Tools**:
  - Notion for project planning and collaboration.
  - DrawSQL for database schema design.
  - Postman for API testing and debugging.

## Challenges Faced

During development, the team encountered and overcame the following challenges:

- **Authentication Issues**: Implemented secure and reliable login/logout functionality.
- **Styling Complexities**: Integrated Bootstrap and Sass for flexible styling, ensuring compatibility across devices.
- **Socket.io Integration**: Enabled real-time communication to reduce delays in interactions.
- **Directory Management**: Organized project files for scalability and maintainability.

## Installation and Setup

To run Career Connect locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Saidakhmad77/Career_Connect.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Career_Connect
   ```

3. **Frontend Setup**:
   - Navigate to the `frontend` folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Backend Setup**:
   - Navigate to the `backend` folder.
   - Create and activate a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate   # On Windows: venv\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Flask server:
     ```bash
     flask --app app run --debug
     ```

5. **Database Setup**:
   - Import the provided SQL schema file (`careerconnect.sql`) into your MySQL database.
   - Update the database credentials in the backend configuration file.

6. **Access the Application**:
   - Open your browser and navigate to the provided localhost URL.

## Team and Contributions

This project was developed by a dedicated team of six members. Each member contributed to various aspects, including frontend, backend, database, and overall project management. Special focus was given to effective teamwork and addressing challenges collaboratively.

## Future Improvements

- Enhance security and user authentication mechanisms.
- Add advanced filtering and recommendation features for job searches.
- Integrate third-party APIs for job postings and user profiles.
- Improve scalability for larger user bases.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in accordance with the license terms.

## Contact

For questions or suggestions, feel free to reach out to the team or raise an issue on the repository. We appreciate your feedback and contributions!
