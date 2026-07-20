
import PerfilHeader from "./PerfilHeader";
import PerfilMenu from "./PerfilMenu";

export default function Perfil() {
  return (
    <section className="mx-auto max-w-6xl">

      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Mi Perfil
      </h1>

      <PerfilHeader />

      <PerfilMenu />

      <div className="mt-8">
        <button
          className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          🚪 Cerrar sesión
        </button>
      </div>

    </section>
  );
}

