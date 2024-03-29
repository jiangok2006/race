# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

Print routes for debugging:
```
npx remix routes
```

# Learning
1. [remix-flat-routes](https://github.com/kiliman/remix-flat-routes) uses remix.config.js. This project
uses vite.config.ts which needs simple translation.

2. `npm run dev` can hot reload.

3. updating tailwind needs to manually refresh the browser to see the change (not need to restart `npm run dev`).

4. shift-command-L: multi-select editing.

5. [tremor-raw](https://raw.tremor.so/docs/getting-started/installation/remix) seems to conflict with [shadcn](https://ui.shadcn.com/docs/installation/remix). For example, termor provides UI controls (many are coming soon) other than 
visualization (I only need this). Both need to update tailwind.config.ts or
tailwind.config.js by adding theme. Both requires app file structures. Tremor has only 139 stars while shadcn has 54k. I decided to make shadcn work.

6. does shadcn need [node](https://ui.shadcn.com/docs/installation/vite)? If so, I cannot use it for cloudflare page.

7. shadcn [NavigationMenu](https://github.com/shadcn-ui/ui/issues/172) does not work.

8. I am looking daisyui but see "You need Node.js and Tailwind CSS installed." https://daisyui.com/docs/install/. Does this mean daisy UI require node.js?

9. https://github.com/jacob-ebey/remix-shadcn/tree/main is interesting.