import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/',
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['CLIENT_', 'SERVER_']);
  console.log(env);

  return {
    define: {
      'import.meta.env.CLIENT_CLIENT_ID': JSON.stringify(env.CLIENT_CLIENT_ID),
      'import.meta.env.SERVER_API_KEY': JSON.stringify(env.SERVER_API_KEY),
    },
    plugins: [react()],
    base: '/',
  };
});
