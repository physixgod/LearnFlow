
# LearnFlow

## 1. Project Overview

### Description:
LearnFlow is an innovative learning platform designed to support informal learners, empowering individuals who may not have access to formal education to enhance their skills. The platform features an intuitive interface, dynamic content delivery, and seamless enrollment functionality, offering a comprehensive and engaging learning experience.

### Inspiration:
LearnFlow was conceived to provide a global platform with accessible and curated educational resources, all within a single application. It’s open to all learners, regardless of background or skill level, offering opportunities for growth in the rapidly evolving world of AI and beyond.

## 2. Features

- **Personalized Recommendations:** Take a quiz to receive customized course suggestions based on your skills and interests.
- **Course Exploration:** Browse through a variety of courses with detailed descriptions, durations, difficulty levels, and enroll in the ones that best suit your learning goals.
- **Community Support:** Engage with experienced learners, ask questions, share knowledge, and contribute to building a collaborative and supportive learning environment.

## 3. Technology Stack

- **Frontend:** Angular, Bootstrap 5
- **Backend:** NestJS
- **Database:** MongoDB
- **API Integration:** Reddit

## 4. Installation and Usage

### Prerequisites:
Ensure the following tools are installed:
- Node.js (v16 or later)
- Angular CLI (v15 or later)
- NestJS CLI
- MongoDB running via a cloud service like MongoDB Atlas

### Installation Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/physixgod/tunihack.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd tunihack
   ```

3. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

4. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

5. **Configure MongoDB:**
   - Set up a MongoDB database on MongoDB Atlas.
   - Update the `.env` file in the backend with your MongoDB connection string.

6. **Start the Backend:**
   ```bash
   npm run start:dev
   ```

7. **Start the Frontend:**
   ```bash
   ng serve
   ```

8. **Access the Application:**
   Open your browser and go to `http://localhost:4200`.

## 5. Usage Instructions

- **Explore the Home Page:** Navigate to the home page to discover key features.
- **Take a Quiz:** Use the "Don't Know Where to Start?" button to take a quiz. Based on your answers, the system will suggest relevant courses.
- **Learn About Us:** Visit the "Who Are We?" section to learn more about our mission and goals.
- **Explore Advantages:** Check the "Why Choose Us?" section for the full list of platform benefits.
- **Browse Courses:** Click "Courses" to see all available educational content.
- **Contact Support:** If you need help, use the "Contact" section to reach out to the support team.
- **Community Engagement:** Use the "Community" page to ask questions and connect with others.

## 6. Demo URL
Watch the [demo video](https://youtu.be/VHHhrb-4xJY?si=irs-hZ2yN59RVVkC) to get a quick overview of the platform.

## 7. Team Members

- **Mostfa Jenhani:** Frontend Developer
- **Ahmed Chakroun:** Frontend Developer
- **Louam Lemjid:** Backend Developer
- **Mohamed Aziz Trabelsi:** Backend Developer

## 8. Challenges Faced

- **Integrating Reddit API:** Building a community section using Reddit’s API posed several technical challenges.
- **Recommendation System:** Developing an effective, personalized recommendation system based on quiz results was a complex task.

## 9. Future Improvements

- **User Authentication & Profiles:** Implement user login and profiles for personalized course recommendations.
- **Video Previews & Progress Tracking:** Add course previews and progress tracking for a more interactive experience.
- **Instructor-Student Chat System:** Implement real-time chat functionality between instructors and students.
- **Rewarding System:** Introduce a reward mechanism to motivate continuous learning progress.

## 10. Template Information

This project uses a template provided by TemplateMo and distributed by ThemeWagon. The original template is free for personal and commercial use, provided proper attribution is given.

- **Copyright:** 2020 by Grad School
- **Template Design:** TemplateMo
- **Distributed By:** ThemeWagon

## 11. Acknowledgments

- A big thank you to our mentors and peers for their constant support and valuable feedback during development.
- Special thanks to the open-source community for providing essential resources and tools that made this project possible.
