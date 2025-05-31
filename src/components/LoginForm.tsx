import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import authService from "@/services/authService";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onLogin?: (email: string, password: string) => Promise<void>;
  loading?: boolean;
}

export function LoginForm({ loading: propLoading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    
    try {
      setIsLoading(true);
      await authService.login({ email, password });
      toast.success("Login realizado com sucesso!");
      navigate("/feed");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Erro ao fazer login";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-200">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 bg-white/10 border-violet-500/20 text-white placeholder:text-gray-400"
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-sm font-medium text-gray-200">
            Senha
          </Label>
          <button
            type="button"
            className="text-xs text-violet-400 hover:text-pink-300 transition"
          >
            Esqueceu a senha?
          </button>
        </div>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 bg-white/10 border-violet-500/20 text-white placeholder:text-gray-400"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full h-11 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium"
        disabled={isLoading || propLoading}
      >
        {isLoading ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
}
