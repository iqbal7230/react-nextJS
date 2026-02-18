# Next.js App Router – Data Fetching Assignement

It includes:
- Client-Side Fetching
- Server Components
- Incremental Static Regeneration (ISR)
- Dynamic Routes using `generateStaticParams`
- Static and Dynamic Rendering in App Router

---

API Used:
```
https://jsonplaceholder.typicode.com/posts
```

---

# Implementations

---

## 1 Client-Side Fetching

 `app/client-post/page.tsx`

- Uses `"use client"`
- Uses `useEffect`
- Runs in the browser
- Not SEO-friendly
- Suitable for dashboards or interactive pages

**Route:**
```
/client-post
```

---

## 2 Server Components (Default in App Router)

`app/server-post/page.tsx`

- No `"use client"` needed
- Fetch runs on the server
- SEO-friendly
- No client-side JavaScript bundle added

**Route:**
```
/server-post
```

Server Components are the default behavior in the App Router.

---

## 3 ISR (Incremental Static Regeneration)

 `app/isr-post/[id]/page.tsx`

Uses:

- `generateStaticParams()`
- `export const revalidate = 10`


### What happens?

- Pages are generated at build time
- After 10 seconds, Next.js revalidates in the background
- No full rebuild required

**Route:**
```
/isr-post/1
```

---

#  Rendering Comparison

| Feature | Client Component | Server Component | ISR |
|----------|------------------|------------------|------|
| Runs On | Browser | Server | Server |
| SEO Friendly | ❌ | ✅ | ✅ |
| JavaScript Sent to Client | Yes | No | Minimal |
| Best For | Interactive UI | Data fetching | Content updates occasionally |

---
