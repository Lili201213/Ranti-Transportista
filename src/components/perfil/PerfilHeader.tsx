import { usuario } from "./perfilData";

export default function PerfilHeader() {
  return (
    <div className="mb-8 rounded-2xl bg-white p-8 shadow-md">
      <div className="flex items-center gap-6">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Perfil"
          className="h-24 w-24 rounded-full border-4 border-green-600"
        />

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            {usuario.nombre}
          </h2>

          <p className="mt-2 text-gray-600">
            DNI: {usuario.dni}
          </p>

          <p className="text-gray-600">
            Celular: {usuario.celular}
          </p>

          <p className="text-gray-600">
            Código: {usuario.codigo}
          </p>

          <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            🟢 {usuario.estado}
          </span>

        </div>

      </div>
    </div>
  );
}