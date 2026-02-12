# React - State and Props (Day 2) Assignment

Each component focuses on mentioned Question such as counters, parent-child communication, todo state handling, and UI toggling.

---

## Project Structure
```
src/
│
├── App.jsx 
├── main.jsx 
│
└── components/
    ├── Counter.jsx 
    ├── CounterActions.jsx 
    ├── Parent.jsx 
    ├── TodoList.jsx 
    └── ToggleAuth.jsx 
```

---

## Component Overview

### Counter.jsx
A basic counter component that demonstrates:

- `useState` hook usage  
- Updating UI on button click  
- Increment button  
- Decrement button  
- Simple state increment logic  

---

###  Parent.jsx
A parent component that stores a message inside its state.

**Purpose**
- Demonstrates how state store message in a parent component  
- Can be changed on click   

---

### TodoList.jsx
A simple Todo List component that maintains a list of todos.

**Features**
- Add new todos  
- Render dynamic lists  
- State stored as an array  

---

### ToggleAuth.jsx
A component that switches between **Login** and **Logout** views.

**Features**
- Toggle button  
- Conditional rendering  

**Concepts Covered**
- Boolean state  
- Ternary rendering  
- UI switching  

---

## How to Run the Project

```bash
npm install
npm run dev