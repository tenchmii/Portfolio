import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the Tailwind CSS Vite plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Add the tailwindcss plugin here
});
