# 🧠 AI Course Generator

An AI-powered platform for creating and managing online courses. Built using **Next.js** and integrated with **Clerk** for authentication, **Gemini API** for AI-generated content, and **Firebase** for file storage, this platform allows users to create, track, and manage their courses, while administrators can oversee user and course management.

![Screenshot 2024-10-10 191005](https://github.com/user-attachments/assets/c504a57c-0c20-4fca-b083-ac78f8625deb)
![Screenshot 2024-10-10 191023](https://github.com/user-attachments/assets/8a5badbf-8473-4eae-b954-088291ee003c)
![Screenshot 2024-10-10 191037](https://github.com/user-attachments/assets/6a20e06a-2a32-4614-8db9-adec722171b2)


## 📋 Index

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Live Demo](#live-demo)
6. [Contributing](#contributing-to-ai-course-generator)

## ✨ Features

- **User Authentication**: Managed via Clerk (Login, Registration).
- **Admin Dashboard**: Special access for admins to manage users and courses.
- **Course Creation**: Users can generate and manage their own courses using AI.
- **File Storage**: Courses and media are stored in Firebase.
- **AI Integration**: Content is generated with the Gemini API.
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Progress Tracking**: Displays user course progress.
- **Role-based Management**: Different views for admin and regular users.

## 🛠 Technologies Used

- **Next.js 14.x**: Server-side rendering and static generation framework.
- **Clerk**: Authentication and user management.
- **Gemini API**: For AI-generated course content.
- **Firebase**: File storage and database management.
- **Tailwind CSS**: A utility-first CSS framework.
- **React Icons**: Icon library.
- **Vercel**: Hosting and deployment platform.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mrpankajpandey/ai-course-generator.git

   ```bash
    git clone https://github.com/mrpankajpandey/ai-course-generator.git
   ```

2. ## Environment Variables
   ```bash
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    GEMINI_API_KEY=<your-gemini-api-key>
    FIREBASE_API_KEY=<your-firebase-api-key>
    FIREBASE_PROJECT_ID=<your-firebase-project-id>
    DATABASE_URL=<your-database-url>

   ```

# Live Demo
 ## Check out the live version of the project here: [AI Course Generator](https://mrpankajpandey-ai-course.vercel.app/)

 # Contributing to AI Course Generator [CONTRIBUTING.md](https://github.com/mrpankajpandey/ai-course-generator/blob/main/CONTRIBUTING.md)
