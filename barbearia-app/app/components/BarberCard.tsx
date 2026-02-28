type BarberCardProps = {
  nome: string;
  endereco: string;
};

export default function BarberCard({ nome, endereco }: BarberCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
        <span className="text-gray-500">Foto</span>
      </div>

      <h2 className="font-semibold text-lg">{nome}</h2>
      <p className="text-sm text-gray-600">{endereco}</p>

      <button className="mt-3 w-full bg-black text-white py-2 rounded-md">
        Ver detalhes
      </button>
    </div>
  );
}