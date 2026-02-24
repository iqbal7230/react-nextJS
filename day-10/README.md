## Next.js Optimization and Performance (Day 10)

- **Fetch Memoization Logging:** Enabled logging to observe `HIT`, `MISS`, or `SKIP` caching behaviors in the terminal.
- **Server Actions & Cache Purging:** Implemented `revalidateTag` within a Server Action to purge cached data on demand.
- **Dynamic Imports:** Used `next/dynamic` to lazy-load a Popup component, reducing the initial client bundle size.
- **Image Optimization:** Utilized `next/image` with remote patterns to load and display images from a dummy API (`picsum.photos`).
- **Custom Font Optimization:** Integrated Google Fonts using `next/font/google` (`Roboto`) for optimized font loading.
- **Bundle Analysis:** Configured `@next/bundle-analyzer` to inspect and understand the application's bundle size.

### Bundle Analyzer

To review the bundle size of the project:

```bash
npm run analyze
```

This will generate interactive HTML reports detailing the client, edge, and node.js chunks in the `.next/analyze` directory.
