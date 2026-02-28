export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-bold">✂️ BarberFood</h1>

      <div className="flex gap-3">
        <a
          href="/cadastrar/barbearia"
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          ➕ Adicionar Barbearia
        </a>

        <button className="px-4 py-2 border rounded-md">
          ❤️ Doar
        </button>
      </div>
    </header>
  );
}