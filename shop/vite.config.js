import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "components"),
      "@/lib": path.resolve(__dirname, "lib"),
      "@/hooks": path.resolve(__dirname, "components/hooks"),
    },
  },
});
