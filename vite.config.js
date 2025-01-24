import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"], // Permite incluir imágenes JPG
  assetsInclude: ["**/*.jpg"], // Permite incluir imágenes JPG
  assetsInclude: ["**/*.png"], // Asegúrate de incluir archivos PNG como activos
  assetsInclude: ["**/*.PNG"], // Asegúrate de incluir archivos PNG como activos
});
