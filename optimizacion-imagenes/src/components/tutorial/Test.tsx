import { useState } from "react";

const questions = [
  { question: "¿Cuál es el formato más eficiente para imágenes en la web?", options: ["JPEG", "PNG", "WebP", "AVIF"], answer: "AVIF" },
  { question: "¿Qué herramienta permite diseñar interfaces web?", options: ["Photoshop", "Figma", "GIMP"], answer: "Figma" },
  { question: "¿Qué significa CSS?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "¿Cuál es el propósito de React?", options: ["Desarrollo de aplicaciones móviles", "Desarrollo de interfaces de usuario", "Desarrollo de servidores"], answer: "Desarrollo de interfaces de usuario" },
  { question: "¿Qué es TypeScript?", options: ["Un lenguaje de programación", "Un framework", "Una biblioteca"], answer: "Un lenguaje de programación" },
];

const Test = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleSelect = (index: number, option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
    alert(`Has respondido correctamente ${correct} de ${questions.length}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test Final</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`mr-2 px-4 py-2 mt-2 rounded ${selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => handleSelect(i, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <button onClick={checkAnswers} className="bg-green-500 text-white px-6 py-2 mt-4 rounded">
        Verificar respuestas
      </button>
    </div>
  );
};

export default Test;
