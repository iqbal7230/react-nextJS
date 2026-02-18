# Next.js Page Router – Data Fetching Examples Assignment

It includes:

- Client-Side Fetching (CSR)
- Server-Side Rendering (SSR) with `getServerSideProps`
- Static Site Generation (SSG) with `getStaticProps`
- Dynamic Routes with `getStaticPaths`
- Incremental Static Regeneration (ISR)

---

API Used:
```
https://jsonplaceholder.typicode.com/posts
```

---

# 🔥 Implementations

---

## 1 Client-Side Fetching (CSR)

**File:** `pages/client-posts.tsx`

- Fetches data using `useEffect`
- Runs in the browser
- Not SEO-friendly
- Suitable for dashboards or user-specific content

**Route:**
```
/client-posts
```

---

## 2 Server-Side Rendering (SSR)

**File:** `pages/ssr-posts/[id].tsx`

- Uses `getServerSideProps`
- Runs on every request
- SEO-friendly
- Ideal for frequently changing data

**Example Route:**
```
/ssr-posts/1
```

---

## 3 Static Site Generation (SSG)

**File:** `pages/ssg-post/[id].tsx`

- Uses `getStaticPaths`
- Uses `getStaticProps`
- Pages generated at build time
- SEO-friendly
- Best for blogs and marketing pages

**Example Route:**
```
/ssg-post/1
```

---

## 4️⃣ Incremental Static Regeneration (ISR)

Implemented inside `getStaticProps`:

```ts
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { post },
    revalidate: 10, // Page regenerates every 10 seconds
  };
};
```

ISR allows updating static pages without rebuilding the entire application.

---

# 📊 Comparison Table

| Method | Runs On | SEO | Best Use Case |
|--------|---------|------|--------------|
| CSR | Browser | ❌ | Dashboards |
| SSR | Every request | ✅ | Real-time data |
| SSG | Build time | ✅ | Blogs |
| ISR | Revalidation interval | ✅ | Content updated occasionally |

---
