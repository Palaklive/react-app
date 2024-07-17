import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from "vite-jsconfig-paths";
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
