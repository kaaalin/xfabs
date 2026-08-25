# X-FAB AI Sales Intelligence Prototype

Interactive frontend prototype with three independent routes:

- `/lead-qualification`
- `/account-management-assistant`
- `/prospecting`

## Upload to GitHub and deploy on Vercel

1. Extract this ZIP.
2. Upload the **contents** of the extracted folder to the root of a GitHub repository.
3. Import that repository into Vercel.
4. Leave the framework preset as **Next.js** and deploy.

The package intentionally uses the stable webpack production builder and does
not require Tailwind, PostCSS, Vite, Cloudflare Workers, or a database.

No environment variables, database, authentication, or external APIs are required.

The root URL opens the lead-qualification experience, and the header navigation links to all three sections.
