# 🚀 Dev Stack Builder

Dev Stack Builder is a React-based web application that helps developers explore different technologies and build their own development stack. Users can browse technologies, add them to their stack, and remove them whenever needed.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- Lucide React
- React Toastify
- JSON Data

## ✨ Features

### 1. 🔍 Explore Technologies
Users can explore different technologies from categories such as Frontend, Backend, Database, Language, Styling, and DevOps.

### 2. ➕ Build Your Own Stack
Users can add technologies to their personal stack and remove them whenever they want. The same technology cannot be added twice.

### 3. 🔔 Notifications
The application shows notifications when a technology is added, removed, or when the user tries to add the same technology again.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to write and understand because we can describe the UI directly inside the component.

---

## 2. What is the difference between props and state?

**Props** are values passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React hook used to store and update data inside a component.

I used `useState` in `TechExplorer` to manage:

- Technology list
- Selected technologies
- Loading state
- Error state

I also used `useState` in the `Navbar` to manage the mobile menu and active navigation link.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used `useEffect` in `TechExplorer` to load the technology data from the `technologies.json` file when the component first loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which item was added, removed, or changed and update the UI efficiently.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in TechExplorer to show the loading spinner while the JSON data is loading, an error message if loading fails, and the technology list after the data loads.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props.

A child can send information back to the parent by calling a function passed through props.

In this project, TechExplorer passes a technology and the onAdd function to TechItem.

When the user clicks the Add button inside TechItem, it calls onAdd(technology), which sends the selected technology back to TechExplorer.

👨‍💻 Author
Md. Jikrul Islam Jeto

This project was developed as part of a React development assignment.