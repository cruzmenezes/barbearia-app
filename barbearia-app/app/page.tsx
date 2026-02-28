import Header from "./components/Header";
import BarberCard from "./components/BarberCard";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          Barbearias perto de você
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <BarberCard
            nome="Barbearia Central"
            endereco="Rua das Flores, 123"
          />
          <BarberCard
            nome="Corte Fino"
            endereco="Av. Brasil, 456"
          />
          <BarberCard
            nome="Estilo Urbano"
            endereco="Rua A, 789"
          />
        </div>
      </main>
    </>
  );
}