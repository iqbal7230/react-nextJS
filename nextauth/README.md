## Authentication and Authorization Assignment

### Environment Variables

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=a_random_secret_string
NEXTAUTH_URL=http://localhost:3000
```

### Assignment Questions & Implementation Status

Below are the assignment requirements and how they have been fulfilled in this project:

- **Create a simple google login feature using NextAuth.js library.**
  - Implemented using `next-auth/providers/google` in `app/api/auth/[...nextauth]/route.ts`.
- **Create a Login and Dashboard page.**
  - The root page (`app/page.tsx`) serves as the Login page.
  - The Dashboard page is located at `app/dashboard/page.tsx`.
- **After login user should navigate to Dashboard page.**
  - Handled via Next.js `useRouter` hook in the root page component after successful authentication.
- **For logged in user, redirect to dashboard after 5 seconds with text “Already logged in, Redirecting you in {seconds}” (seconds should be live here: 5, 4, 3…)**
  - Implemented using a React `useEffect` hook and a state variable (`countdown`) on the root page. The timer decrements every second and redirects to `/dashboard` when it reaches 0.
- **Client Secret and Client Id should be in .env file.**
  - The `NextAuth` config reads `process.env.GOOGLE_CLIENT_ID` and `process.env.GOOGLE_CLIENT_SECRET`.
- **In dashboard page, fetch list of users using jsonplaceholder dummy API and show there with good UI. (https://jsonplaceholder.typicode.com/users)**
  - The Dashboard (`app/dashboard/page.tsx`) is a Next.js Server Component that fetches data directly from the API and renders a clean, minimal UI using Tailwind CSS grid layouts.
- **Add a logout button in the dashboard page.**
  - Implemented as a separate `Client Component` (`components/LogoutButton.tsx`) using NextAuth's `signOut()` method, which redirects the user back to the login page.

