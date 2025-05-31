import { useState } from "react";
import { Card } from "@/components/ui/card";
import { RegisterForm } from "@/components/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import authService from "@/services/authService";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(name: string, email: string, password: string) {
    setLoading(true);
    try {
      await authService.register({
        name,
        email,
        password,
        // Como groupId é obrigatório no backend, usar um valor padrão temporário
        // Em uma implementação real, o usuário deveria escolher um grupo ou ter um atribuído
        groupId: "default"
      });
      toast.success("Cadastro realizado com sucesso!");
      navigate("/feed");
    } catch (error: unknown) {
      const errorMessage = 
        error instanceof Error ? error.message : "Erro ao cadastrar usuário";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <Card className="w-full max-w-sm p-0 border-none rounded-3xl shadow-xl bg-white/5 backdrop-blur-md transition hover:shadow-2xl hover:-translate-y-1 duration-300">
        <div className="w-full p-6 sm:p-8 flex flex-col items-center rounded-3xl">
          <h1
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-violet-400 to-blue-600
            bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-[0_2px_8px_rgba(90,90,255,0.18)] 
            transition-transform hover:scale-105 duration-200"
          >
            FeedBackz
          </h1>
          <span className="flex items-center gap-2 mb-7 text-sm text-violet-100 font-medium">
            <Sparkles className="h-4 w-4 text-violet-300 animate-pulse" />
            Crie sua conta para acessar a plataforma.
          </span>
          <RegisterForm onRegister={handleRegister} loading={loading} />
          <div className="w-full flex items-center my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-40" />
          </div>
          <span className="mt-0 text-sm text-gray-300 text-center">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-violet-400 hover:text-pink-300 font-semibold hover:underline transition">
              Entrar
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
}
