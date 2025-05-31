import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface RegisterFormProps {
  onRegister: (name: string, email: string, password: string) => Promise<void>;
  loading?: boolean;
}

export function RegisterForm({ onRegister, loading }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Preencha todos os campos");
      return;
    }
    await onRegister(name, email, password);
  };

  return (
    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1 text-white">
          Nome
        </label>
        <Input
          id="name"
          type="text"
          className="bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-violet-400 focus:border-violet-400"
          placeholder="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1 text-white">
          Email
        </label>
        <Input
          id="email"
          type="email"
          className="bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-violet-400 focus:border-violet-400"
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold mb-1 text-white">
          Senha
        </label>
        <Input
          id="password"
          type="password"
          className="bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-violet-400 focus:border-violet-400"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <Button
        className="w-full mt-2 bg-gradient-to-br from-violet-500 to-blue-700 text-white font-bold hover:from-violet-600 hover:to-blue-800 transition-colors"
        type="submit"
        disabled={loading}
      >
        {loading ? "Registrando..." : "Registrar"}
      </Button>
    </form>
  );
}
