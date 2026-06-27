# Task Manager Application using React Context API and useReducer

## Introduction

In this project, you will create a simple Task Manager application using React.

The app will allow users to:

* Add tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed

You will use React Context API and useReducer to manage the task data across the application.

This project will help you understand how to manage global state and organize React applications using multiple components.

---

## Project Requirements

### 1. Context API Setup

Create a global context for task management.

* Create a Task Context.
* Wrap the entire application with a Context Provider.
* Store all task data in the global state.

---

### 2. useReducer Setup

Create a reducer to handle task operations.

The reducer should support:

* Add Task
* Complete/Uncomplete Task
* Edit Task
* Delete Task
* Clear All Tasks

Use action types and switch cases inside the reducer.

---

### 3. Components

#### TaskInput Component

This component should contain:

* Input field
* Add Task button

When the button is clicked, a new task should be added.

---

#### TaskList Component

This component should:

* Display all tasks
* Use map() to show each task

---

#### TaskItem Component

Each task should have:

* Complete button
* Edit button
* Delete button

These buttons should perform their respective actions.

---

#### TaskSummary Component

Display:

* Total number of tasks
* Number of completed tasks

---

### 4. Application Flow

1. User enters a task.
2. User clicks Add Task.
3. Task is stored in Context API.
4. Task list updates automatically.
5. User can edit, complete, or delete tasks.
6. All updates are handled using useReducer.

---

### 5. CSS Styling

#### Basic Styling

* Center the application on the page
* Style the heading
* Style the input box
* Style the task list

#### Advanced Styling

* Add hover effects to buttons
* Show completed tasks in grey color
* Style Edit and Delete buttons
* Add simple animations or transitions
* Make the application responsive

## Learning Outcome

After completing this project, you will learn:

* React Context API
* useReducer Hook
* Component-based development
* Global State Management
* Basic React Project Structure
* CSS Styling in React

## Live link:
https://react-essentials-assignment-1.vercel.app/
