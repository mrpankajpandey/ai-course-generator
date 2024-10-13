# AI Course Generator :rocket:

## Overview :mag:
An AI-powered platform for creating and managing online courses. Built using **Next.js** and integrated with **Clerk** for authentication, **Gemini API** for AI-generated content, and **Firebase** for file storage, this platform allows users to create, track, and manage their courses, while administrators can oversee user and course management.

## Features :sparkles:

- **User Authentication** :lock:
    - Managed via Clerk.
    - Users can sign up, log in, and manage their profiles securely.
    - Ensures secure access to the platform.

- **Admin Dashboard** :bar_chart: 
    - Special access for administrators.
    - Admins can manage users and courses.
    - Provides tools for overseeing platform activities.

- **Course Creation** :books: 
    - Users can generate and manage their own courses.
    - Utilizes AI for content creation.
    - Simplifies the process of course development.

- **File Storage** :floppy_disk: 
    - Courses and media are stored in Firebase.
    - Ensures reliable and scalable storage solutions.
    - Facilitates easy access and management of course materials.

- **AI Integration** :robot: 
    - Content is generated with the Gemini API.
    - Enhances course content with AI-generated materials.
    - Provides dynamic and engaging learning experiences.

- **Responsive UI** :iphone: 
    - Optimized for both desktop and mobile devices.
    - Ensures a seamless user experience across different devices.
    - Adapts to various screen sizes for better accessibility.

- **Progress Tracking** :chart_with_upwards_trend: 
    - Displays user course progress.
    - Helps users keep track of their learning journey.
    - Provides insights into course completion and performance.

- **Role-based Management** :busts_in_silhouette: 
    - Different views for admin and regular users.
    - Ensures appropriate access and functionality based on user roles.
    - Enhances security and user experience by tailoring features to roles.


## Technologies Used

| Technology      | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Next.js 14.x**| A framework for server-side rendering and static site generation.           |
| **Clerk**       | Manages authentication and user profiles securely.                          |
| **Gemini API**  | Generates AI-powered course content.                                        |
| **Firebase**    | Provides file storage and database management.                              |
| **Tailwind CSS**| A utility-first CSS framework for styling.                                  |
| **React Icons** | A library of icons for React applications.                                  |
| **Vercel**      | A platform for hosting and deploying web applications.                      |



## Installation :wrench:

- **Clone the repository**

   ```bash
    git clone https://github.com/mrpankajpandey/ai-course-generator.git
   ```
- **Navigate to the project directory**

   ```bash
    cd ai-course-generator
   ```
- **Install the dependencies**

   ```bash
    npm install
   ```
- **Create a `.env.local` file in the root directory and add the following environment variables**

   ```javascript
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    GEMINI_API_KEY=<your-gemini-api-key>
    FIREBASE_API_KEY=<your-firebase-api-key>
    FIREBASE_PROJECT_ID=<your-firebase-project-id>
    DATABASE_URL=<your-database-url>
   ```
- **Run the development server**

   ```bash
    npm run dev
   ```

## Live Demo :globe_with_meridians:

<a href="https://mrpankajpandey-ai-course.vercel.app/">
    <img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />
</a>

## Contribution Guidelines :raising_hand: 

We welcome contributions to improve the platform. Here are the steps to get started:

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.

### 2. Clone Your Fork

Clone your forked repository to your local machine using the following command:

```bash
git clone https://github.com/<your-username>/ai-course-generator.git
```

### 3. Create a Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature-or-bugfix-name
```

### 4. Make Changes

Make your changes to the codebase. Ensure your code follows the project's coding standards and passes all tests.

### 5. Commit Your Changes

Commit your changes with a descriptive commit message:

```bash
git add .
git commit -m "Description of the feature or fix"
```

### 6. Push to Your Fork

Push your changes to your forked repository:

```bash
git push origin feature-or-bugfix-name
```

### 7. Create a Pull Request

Go to the original repository and click the "New Pull Request" button. Select your branch and submit the pull request for review.

### 8. Review Process

Your pull request will be reviewed by the maintainers. Please be responsive to any feedback or requests for changes.

### 9. Merge

Once approved, your pull request will be merged into the main branch. Congratulations on your contribution!

>[!TIP]
>**Follow [CONTRIBUTING.md](https://github.com/mrpankajpandey/ai-course-generator/blob/main/CONTRIBUTING.md) for detailed guidelines**

