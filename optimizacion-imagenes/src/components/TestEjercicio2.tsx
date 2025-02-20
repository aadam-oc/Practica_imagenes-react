import { useState } from "react";

const questions = [
    {
        question: "¿Qué hace Lazy Loading?",
        options: [
            "Carga todas las imágenes de inmediato",
            "Carga imágenes solo cuando son visibles",
            "Reduce la calidad de las imágenes",
        ],
        answer: "Carga imágenes solo cuando son visibles",
    },
    {
        question: "¿Qué API de JavaScript se usa para Lazy Loading?",
        options: ["Fetch API", "Intersection Observer", "Canvas API"],
        answer: "Intersection Observer",
    },
    {
        question: "¿Cuál es una ventaja de Lazy Loading?",
        options: [
            "Mejora la accesibilidad",
            "Reduce el tiempo de carga inicial",
            "Aumenta el tamaño de las imágenes",
        ],
        answer: "Reduce el tiempo de carga inicial",
    },
    {
        question: "¿Qué atributo HTML se usa para Lazy Loading en imágenes?",
        options: ["src", "alt", "loading"],
        answer: "loading",
    },
    {
        question: "¿Qué valor debe tener el atributo loading para habilitar Lazy Loading?",
        options: ["lazy", "eager", "auto"],
        answer: "lazy",
    },
];

const TestEjercicio2 = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test de Lazy Loading</h2>
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

export default TestEjercicio2;