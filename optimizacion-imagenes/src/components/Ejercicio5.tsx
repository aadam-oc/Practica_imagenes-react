import EjercicioCard from "./tutorial/EjercicioCard";
import MarkdownEditor from "./tutorial/MarkdownEditor";
import Test from "./tutorial/Test";

const ejercicios = [
  { id: 1, title: "Optimización de Imágenes", path: "/ejercicio1" },
  { id: 2, title: "Lazy Loading", path: "/ejercicio2" },
  { id: 3, title: "Manipulación con Canvas", path: "/ejercicio3" },
  { id: 4, title: "Figma a React", path: "/ejercicio4" },
];

const Ejercicio5 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tutorial Interactivo</h1>
      <p className="mb-4">
        Aquí puedes documentar y presentar los ejercicios realizados, además de realizar un test final.
      </p>

      {/* ✅ Sección con las tarjetas de los ejercicios anteriores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ejercicios.map((ejercicio) => (
          <EjercicioCard key={ejercicio.id} title={ejercicio.title} path={ejercicio.path} />
        ))}
      </div>

      {/* ✅ Editor de Markdown para escribir notas */}
      <h2 className="text-2xl font-bold mt-6">Notas del Estudiante</h2>
      <MarkdownEditor />

      {/* ✅ Test final para repasar conocimientos */}
      <h2 className="text-2xl font-bold mt-6">Test Final</h2>
      <Test />
    </div>
  );
};

export default Ejercicio5;
