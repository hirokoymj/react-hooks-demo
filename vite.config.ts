// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import EnvironmentPlugin from 'vite-plugin-environment';

// export default defineConfig({
//   plugins: [react(), EnvironmentPlugin(['API_KEY'])],
//   base: '/',
// });
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/',
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});
