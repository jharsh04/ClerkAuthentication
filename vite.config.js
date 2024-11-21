/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Add the Clerk Frontend API key here
    'import.meta.env.VITE_CLERK_FRONTEND_API': JSON.stringify('https://helped-bedbug-34.clerk.accounts.dev'), // Replace with your actual Clerk frontend API key
  },
})

