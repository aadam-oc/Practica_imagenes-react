import { useState } from "react";

const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        options: ["WebGL", "Canvas API", "Intersection Observer"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext()", "getImageData()", "setTimeout()"],
        answer: "getImageData()",
    },
    {
        question: "¿Qué método se utiliza para dibujar un rectángulo en un canvas?",
        options: ["fillRect()", "drawRect()", "createRect()"],
        answer: "fillRect()",
    },
    {
        question: "¿Cuál es el formato de color por defecto en canvas?",
        options: ["RGB", "RGBA", "HEX"],
        answer: "RGBA",
    },
    {
        question: "¿Qué método se utiliza para limpiar una parte del canvas?",
        options: ["clearRect()", "eraseRect()", "removeRect()"],
        answer: "clearRect()",
    },
];

const TestEjercicio3 = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test de Manipulación de Imágenes</h2>
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

export default TestEjercicio3;