import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/LoginForm";
import { toast } from "sonner";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    toast.success("Login realizado (mock)!");
    setLoading(false);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <Card className="w-full max-w-sm p-4 sm:p-6 shadow-2xl rounded-2xl flex flex-col items-center bg-[#334155] text-white border-none">
        <h1 className="text-2xl font-bold mb-2 text-center text-white">Entrar</h1>
        <span className="mb-6 text-sm text-gray-400 text-center">
          Bem-vindo! Faça login para continuar.
        </span>
        <LoginForm onLogin={handleLogin} loading={loading} />
      </Card>
    </div>
  );
}
