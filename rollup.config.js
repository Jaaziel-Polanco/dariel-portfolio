import url from "@rollup/plugin-url";

export default {
  input: "src/index.js", // Archivo principal de entrada
  output: {
    file: "dist/bundle.js", // Archivo de salida
    format: "es", // Formato del bundle (puede ser 'es', 'cjs', etc.)
  },
  plugins: [
    url({
      include: ["**/*.png", "**/*.jpg", "**/*.jpeg"], // Archivos estáticos
      limit: 0, // Desactiva la conversión a base64
    }),
  ],
};
