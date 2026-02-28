"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Servico = {
  nome: string;
  preco: string;
  duracao: string;
};

export default function CadastroBarbearia() {
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [servicoAtual, setServicoAtual] = useState<Servico>({
    nome: "",
    preco: "",
    duracao: "",
  });

  function handleFotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFotoPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  function adicionarServico() {
    if (!servicoAtual.nome || !servicoAtual.preco) return;
    setServicos([...servicos, servicoAtual]);
    setServicoAtual({ nome: "", preco: "", duracao: "" });
  }

  return (
    <div className="max-w-2xl mx-auto p-4 relative">
      
      {/* --- CABEÇALHO CORRIGIDO --- */}
      <div className="flex items-center justify-between mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold">Cadastro de Barbearia</h1>
        
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-sm font-medium"
        >
          <span>Voltar</span>
          <ArrowLeft size={18} className="rotate-180" /> {/* Inverti a seta para apontar para "fora" ou mantive a lógica de saída */}
        </Link>
      </div>
      {/* --------------------------- */}

      {/* Foto */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-700">Foto da Barbearia</label>
        <div className="flex items-center gap-4">
            {fotoPreview ? (
            <img
                src={fotoPreview}
                alt="Preview"
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
            />
            ) : (
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-400">
                <span className="text-gray-500 text-xs">Sem foto</span>
            </div>
            )}
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleFotoChange}
                className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer"
            />
        </div>
      </div>

      {/* Dados da Barbearia */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        <input
          type="text"
          placeholder="Nome da barbearia"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
        />
        <input
          type="text"
          placeholder="Endereço"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
        />
        <div className="grid grid-cols-2 gap-4">
            <input
            type="text"
            placeholder="Cidade"
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
            />
            <input
            type="text"
            placeholder="WhatsApp"
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
            />
        </div>
      </div>

      {/* Serviços */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Serviços oferecidos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <input
            type="text"
            placeholder="Serviço"
            value={servicoAtual.nome}
            onChange={(e) => setServicoAtual({ ...servicoAtual, nome: e.target.value })}
            className="border p-3 rounded-md w-full"
          />
          <input
            type="number"
            placeholder="Preço (R$)"
            value={servicoAtual.preco}
            onChange={(e) => setServicoAtual({ ...servicoAtual, preco: e.target.value })}
            className="border p-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Duração (min)"
            value={servicoAtual.duracao}
            onChange={(e) => setServicoAtual({ ...servicoAtual, duracao: e.target.value })}
            className="border p-3 rounded-md w-full"
          />
        </div>

        <button
          type="button"
          onClick={adicionarServico}
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          + Adicionar Serviço na Lista
        </button>

        {/* Lista de serviços */}
        {servicos.length > 0 && (
          <div className="mt-6 space-y-2">
            {servicos.map((servico, index) => (
              <div key={index} className="flex justify-between items-center border bg-gray-50 p-3 rounded-md">
                <span className="font-medium">{servico.nome}</span>
                <div className="text-gray-600 text-sm">
                    <span className="mr-4">R$ {servico.preco}</span>
                    <span>{servico.duracao} min</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botão final */}
      <button className="w-full bg-black text-white py-4 rounded-md mt-10 font-bold hover:bg-zinc-900 transition shadow-lg">
        Finalizar Cadastro da Barbearia
      </button>
    </div>
  );
}