# Taskly - ToDo Web Application

A simple and intuitive single-page to-do application built with React. Manage your tasks efficiently with create, update, and delete functionality - no login required!

## Features

-   **Task Management** - Create, update, and delete tasks easily.
-   **Dual View Layout** - Home view with split-screen editing and Tasks view with complete list.
-   **Task Details** - Each task includes title, description, and creation date.
-   **Status Tracking** - Mark tasks as complete or incomplete.
-   **Status Toggle** - Backtrack completed tasks to incomplete if needed.
-   **No Authentication** - Start using immediately without signup.
-   **localStorage Persistence** - Tasks automatically saved to browser's localStorage.
-   **Clean Interface** - Simple and intuitive user experience.

## Demo

🔗 [Live Demo on Netlify](https://mytasklytodo.netlify.app)

## Tech Stack

-   **React** - UI Library & Component Architecture
-   **CSS3** - Styling & Layout
-   **localStorage** - Client-Side Data Persistence
-   **Netlify** - Hosting & Deployment

## Installation

### Prerequisites

-   Node.js 14.0 or higher.
-   npm (Node Package Manager).

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Balsha98/Repository-Taskly.git
```

2. Navigate to the project directory:

```bash
cd Repository-Taskly/taskly
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit:

```
http://localhost:3000
```

## Usage

### Home View

1. **View Tasks**: See all your tasks listed on the left side.
2. **Select a Task**: Click on any task to open the editing board on the right.
3. **Edit Task**: Update the title and description in the editing board.
4. **Save Changes**: Click save to update the task.
5. **Delete Task**: Remove unwanted tasks with the delete button.

### Tasks View

1. **View All Tasks**: See a comprehensive list of all tasks.
2. **Task Status**: Tasks are organized by complete/incomplete status.
3. **Quick Overview**: Get a bird's-eye view of your task progress.

### Creating a New Task

1. Click the "Add New Task +" button.
2. Enter a title for your task (required).
3. Add a description (required).
4. Click "Confirm Task" to save.
5. Task automatically receives a creation date timestamp.

## Project Structure

```
Repository-Taskly/
│
├── taskly/             # Main application directory.
│   │
│   ├── public/         # Static files.
│   │
│   └── source/            # Source files.
│       │
│       ├── assets/     # Application assets.
│       │   │
│       │   ├── css/    # Stylesheets.
│       │   │
│       │   ├── javascript/
│       │   │   ├── components/ # React components.
│       │   │   └── helpers/    # Helper modules.
│       │   │
│       │   └── media/
│       │       ├── icons/      # Icon files.
│       │       └── images/     # Image files.
│       │
│       └── index.js    # Application entry point.
│
└── README.md           # Project documentation.
```

## How It Works

-   Tasks are stored in browser's localStorage.
-   Data persists across sessions.
-   No backend or database required.
-   Each task includes:
    -   Unique ID.
    -   Title.
    -   Description.
    -   Creation date.
    -   Completion status.

## Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to GitHub.
2. Connect your repository to Netlify.
3. Set build command: `npm run build`.
4. Set publish directory: `taskly/build`.
5. Deploy!

## Let's Connect

If you enjoyed this project or have any questions, feel free to reach out!

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:balsa.bazovic@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/balsha-bazovich)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Balsha98)

⭐ If you found this project helpful, please consider giving it a star!
