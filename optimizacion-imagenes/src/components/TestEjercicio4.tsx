import { useState } from "react";
const questions = [
    {
        question: "¿Qué formato es ideal para exportar iconos desde Figma?",
        options: ["JPEG", "PNG", "SVG"],
        answer: "SVG",
    },
    {
        question: "¿Qué plugin permite exportar código JSX desde Figma?",
        options: ["Tailwind CSS for Figma", "Anima for Figma", "SVGExport"],
        answer: "Anima for Figma",
    },
    {
        question: "¿Cuál es la mejor manera de organizar componentes en React?",
        options: ["En un solo archivo", "Dividir en componentes pequeños", "Usar clases"],
        answer: "Dividir en componentes pequeños",
    },
    {
        question: "¿Qué hook se utiliza para manejar el estado en un componente funcional?",
        options: ["useEffect", "useState", "useContext"],
        answer: "useState",
    },
    {
        question: "¿Qué propiedad de CSS se utiliza para cambiar el color de fondo?",
        options: ["color", "background-color", "border-color"],
        answer: "background-color",
    },
];
const TestEjercicio4 = () => {
    const [selectedAnswers, setSelectedAnswers] =
        useState<string[]>(Array(questions.length).fill(""));
    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };
    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans ===
            questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de
    ${questions.length}`);
    };
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Test sobre Figma y
                React</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded ${selectedAnswers[i] === opt ? "bg-blue-500 text-white"
                                : "bg-gray-300"
                                }`}
                            onClick={() => handleSelect(i, opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ))}
            <button onClick={checkAnswers} className="bg-green-500 textwhite px-6 py-2 mt-4 rounded">
                Verificar respuestas
            </button>
        </div>
    );
};
export default TestEjercicio4;