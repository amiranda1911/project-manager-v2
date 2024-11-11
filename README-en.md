# project-manager-v2

## Table of Contents
1. [Description](#description)
2. [Technologies](#technologies)
3. [Features](features)
4. [Technical Considerations](technical-considerations)
5. [authors](authors)

   

## Description

The application simulates a project management tool that helps with task organization and planning, inspired by the Kanban methodology. It allows users to create, manage, and organize tasks into different stages of progress such as "To Do", "In Progress", and "Completed". Built with **React**, **Tailwind CSS**, and **TypeScript**, the app provides a user-friendly and efficient interface for handling tasks.

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Features

* **Login Page:** Allows users to log into the application.
* **User Registration:** Users can create an account to access the system.
* **Task Creation:** Users can add new tasks to the board.
* **Kanban Board:** View tasks organized in columns according to their status (To Do, In Progress, Completed).
* **Task Priorities:** Users can assign priorities (e.g., Low, Medium, High) to tasks, helping to manage their importance.
* **Drag and Drop:** Easily reorder tasks between columns using drag-and-drop functionality.


## Technical Considerations

### 1. Project Architecture
- **Component Separation**: The project is structured with modular React components, organized by functionality, such as the Kanban layout, authentication, and task management. This approach simplifies maintenance and code reuse.
- **State Management**: Since the project involves multiple CRUD operations and session management, using local state and/or global contexts is essential to ensure that user and task data are updated efficiently.

### 2. TypeScript for Type Safety
- **Code Security**: TypeScript typing helps prevent common runtime errors, making the code safer by detecting inconsistencies during development.
- **Standardization and Maintenance**: TypeScript facilitates internal documentation and allows the team to easily understand what types of data each function and component expects, improving readability and collaboration.

### 3. Styling with Tailwind CSS
- **Productivity**: Tailwind enables responsive styling without the need to create custom classes for each component, speeding up development.
- **Visual Consistency**: Tailwind styling ensures a consistent appearance throughout the interface, aligning with a "utility-first" design approach where styling classes are applied directly in JSX.

### 4. JSON Server as a Mock Back-End
- **Mock for Local Development**: JSON Server is used to simulate a REST API, allowing for testing and development of full CRUD functionality without requiring a real server.
- **Ease of Configuration**: Chosen for its simplicity, JSON Server enables data storage for users and tasks without complex setup, ideal for prototypes or early project stages.

### 5. User Authentication
- **Simple Authentication Flow**: Implements authentication with basic credential storage, simplifying access for registered users.
- **Session Persistence**: The session is maintained for the logged-in user, managed via localStorage to ensure a continuous user experience.

## Authors

<table>
  <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/AdsonTanajura"/>
    </td>
    <td align="left">
      <a href="https://github.com/AdsonTanajura">
         <span><b>Adson Tanajura</b></span>
      </a>
      <br>
    </td>
  </tr>
   <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/Alair-Filho"/>
    </td>
    <td align="left">
      <a href="https://github.com/Alair-Filho">
         <span><b>Alair Filho</b></span>
      </a>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/amiranda1911"/>
    </td>
    <td align="left">
      <a href="https://github.com/amiranda1911">
         <span><b>Anderson Miranda</b></span>
      </a>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/SabrinaZ8"/>
    </td>
    <td align="left">
      <a href="https://github.com/SabrinaZ8">
         <span><b>Sabrina Souza</b></span>
      </a>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/ThaisRes"/>
    </td>
    <td align="left">
      <a href="https://github.com/ThaisRes">
         <span><b>Thais Sanches</b></span>
      </a>
      <br>
    </td>
  </tr>
</table>

## References



