import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Feed from '../pages/Feed';
import AIAnalysis from '../pages/AIAnalysis';
import Profile from '../pages/Profile';
import GroupManagement from '../pages/admin/GroupManagement';
import PointsManagement from '../pages/admin/PointsManagement';
import GroupDetails from '../pages/GroupDetails';
import Store from '../pages/store/Store';
import LoginPage from '../components/LoginPage';
import RegisterPage from '@/components/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register', 
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Feed /> }, // feed é o index!
      { path: '/feed', element: <Feed /> },
      { path: '/ai-analysis', element: <AIAnalysis /> },
      { path: '/profile', element: <Profile /> },
      { path: '/group/:groupId', element: <GroupDetails /> },
      { path: '/admin/groups', element: <GroupManagement /> },
      { path: '/admin/points', element: <PointsManagement /> },
      { path: '/store', element: <Store /> },
    ],
  },
]);

