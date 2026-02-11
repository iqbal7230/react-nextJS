# Introduction to React Assignment


# 1. Create a Simple React App (Hello World)

## Goal

Create a React application that displays:

```
Hello, World!
```

## Solution Code in this file (`App.jsx`)

```jsx
function App() {
  return <h1>Hello, World</h1>;
}

export default App;
```



# 2. How to Set Up a React Project

## Step 1 — Create Project

```bash
npm create vite@latest 

```

Choose:

```
React
JavaScript
```

## Step 2 — Install Dependencies

```bash
cd Intro-react-app
npm install
```

## Step 3 — Run Project

```bash
npm run dev
```

## How Rendering Works

In `main.jsx`, React renders the `App` component into the root DOM element.
At the end `index.html` is render on the browser


# 3. Functional vs Class Components

## Functional Component

Functional component code is in file `components/FunctionalComponent.jsx`


## Class Component

Class component code is in file `components/ClassComponent.jsx`


## Render Both in `App.jsx`

```jsx
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from ".components/ClassComponent";

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;



# 📂 Project Structure

```
src/
│
├── App.jsx
├── main.jsx
├── components/
    ├── FunctionalComponent.jsx
    └── ClassComponent.jsx
```
