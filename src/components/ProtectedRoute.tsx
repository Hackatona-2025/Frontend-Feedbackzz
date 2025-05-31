import { Navigate, Outlet } from 'react-router-dom';
import authService from '@/services/authService';

interface ProtectedRouteProps {
  requireAdmin?: boolean;
}

export function ProtectedRoute({ requireAdmin = false }: ProtectedRouteProps) {
  const isAuthenticated = authService.isAuthenticated();
  const currentUser = authService.getCurrentUser();
  
  // Se não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Se a rota exigir privilégios de admin e o usuário não for admin
  if (requireAdmin && currentUser?.role !== 'ADMIN') {
    return <Navigate to="/feed" replace />;
  }
  
  // Se estiver autenticado (e for admin, se necessário), permite o acesso
  return <Outlet />;
} 