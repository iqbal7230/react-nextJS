# Next.js State Management Assignment
it demonstrates different state management techniques in **Next.js (App Router)**:

- useReducer – GET, ADD, DELETE Products  
- useContext – Global Loader Management  
- Redux Toolkit – Fetch Quotes API  

---



# 1.  useReducer – Product Management

### Route: `/products`

### API Used
```
https://dummyjson.com/products
```

### Features
- Fetch products
- Add product locally
- Delete product locally

---

# 2. useContext – Global Loader

### File: `context/LoaderContext.tsx`

### Purpose
Provide global loading state across the application.


---

# 3. Redux Toolkit – Fetch Quotes

###  Route: `/quotes`

### API Used
```
https://dummyjson.com/quotes
```

---


# 🧠 When to Use What?

| Tool | Best For |
|------|----------|
| useReducer | Complex local component state |
| useContext | Global simple state (theme, loader) |
| Redux Toolkit | Large scale app with shared global state |

---


# Learning Outcome

After completing this project, you will understand:

- How `useReducer` manages complex component state
- How `useContext` avoids prop drilling
- How Redux Toolkit simplifies async API handling
- Differences between local state and global state
- Scalable state management patterns in Next.js
