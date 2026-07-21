# 🔐 React Login System with Protected Routes

A beginner-friendly React application demonstrating authentication, protected routing, nested routing, and responsive UI using React Router DOM and Tailwind CSS.

---

## 📌 Features

- 🔑 Login Authentication
- 🛡️ Protected Routes (Navigation Guard)
- 🧭 Nested Routing using `Outlet`
- 🏠 Home Page
- ℹ️ About Page
- 📞 Contact Page
- 🧭 Responsive Navigation Bar
- 🚪 Logout Functionality
- ❌ 404 Page Not Found
- ⏳ Automatic Redirect to Login after 3 seconds on invalid routes
- 🎨 Responsive UI built with Tailwind CSS

---

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM (v7.18.1)
- Tailwind CSS
- JavaScript (ES6+)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProtectedLayout.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔑 Login Credentials

Username:

```
Mahad
```

Password:

```
123
```

---

## 🚀 Authentication Flow

1. User opens the Login page.
2. User enters the username and password.
3. Credentials are validated.
4. If valid:
   - `setIsLoggedIn(true)` is called.
   - User is redirected to the Home page.
5. Protected routes are only accessible when the user is logged in.
6. Clicking **Logout**:
   - Sets the login state to `false`.
   - Redirects the user back to the Login page.

---

## 🛡️ Protected Routes

The following pages are protected:

- Home
- About
- Contact

If a user is not logged in, they are automatically redirected to the Login page.

---

## 🧭 Navigation

The application includes a responsive navigation bar with:

- Home
- About
- Contact
- Logout

The navbar is only visible after successful login.

---

## ❌ 404 Page

If the user enters an invalid URL:

- A "404 Page Not Found" message is displayed.
- After 3 seconds, the user is automatically redirected to the Login page.

---

## 🎨 UI Features

- Responsive Layout
- Tailwind CSS Styling
- Centered Login Card
- Navigation Bar
- Cards with Shadows
- Rounded Corners
- Hover Effects
- Smooth Transitions

---

## 📚 React Concepts Practiced

- Functional Components
- JSX
- Props
- State Management (`useState`)
- Side Effects (`useEffect`)
- React Router
- BrowserRouter
- Routes
- Route
- Link
- Navigate
- useNavigate
- Outlet
- Protected Layout
- Nested Routing
- Conditional Rendering
- Event Handling

## 🎯 Learning Objectives

This project was built to practice:

- React fundamentals
- Routing with React Router DOM
- Protected Routes
- Nested Routes
- Authentication flow
- Tailwind CSS
- Component-based architecture
- Responsive UI Design
