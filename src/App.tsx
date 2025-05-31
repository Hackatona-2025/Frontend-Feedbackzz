import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from 'sonner'; // Importa o Toaster

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </>
  );
}
