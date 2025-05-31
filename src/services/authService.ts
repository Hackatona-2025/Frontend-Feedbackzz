import api from './api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  groupId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  groupId?: string;
  description?: string;
  coins?: number;
}

interface ApiResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
}

const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await api.post<ApiResponse<User>>('/users/login', credentials);
    
    if (response.data.statusCode !== 200 || !response.data.data) {
      throw new Error(response.data.message || 'Falha no login');
    }
    
    const user = response.data.data;
    
    // Como o backend não gera token, vamos criar um token simulado
    // Em produção, o backend deveria gerar um token JWT
    const mockToken = btoa(JSON.stringify({ userId: user.id, email: user.email }));
    
    // Armazena o token e informações do usuário
    localStorage.setItem('token', mockToken);
    localStorage.setItem('user', JSON.stringify(user));
    
    return user;
  },
  
  async register(data: RegisterData): Promise<User> {
    // O backend espera um campo isAdmin do tipo Role (USER ou ADMIN)
    const response = await api.post<ApiResponse<User>>('/users', {
      ...data,
      isAdmin: 'USER' // Valor enum Role.USER definido no backend
    });
    
    if (response.data.statusCode !== 200 || !response.data.data) {
      throw new Error(response.data.message || 'Falha no registro');
    }
    
    const user = response.data.data;
    
    // Como o backend não gera token, vamos criar um token simulado
    const mockToken = btoa(JSON.stringify({ userId: user.id, email: user.email }));
    
    // Armazena o token e informações do usuário
    localStorage.setItem('token', mockToken);
    localStorage.setItem('user', JSON.stringify(user));
    
    return user;
  },
  
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
  
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
};

export default authService; 