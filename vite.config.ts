import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from 'remix-flat-routes'
import path from "path"
import react from "@vitejs/plugin-react"

installGlobals();

export default defineConfig({
  plugins: [remix(
    {
      ignoredRouteFiles: ['**/*'],
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes)
      },
    }
  ), tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});


