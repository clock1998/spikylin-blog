# Blog

Everything you need to build a your blog, powered by [`sv`](https://github.com/sveltejs/cli).

The Blog is built using SvelteKit Static Sites generator, Tailwindcss, and DaisyUI.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Configuration 

### Theme
There is a themes.ts file under src/lib. Change the array to include or exclude more themes

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
