import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
    const [text, setText] = useState<string>(() => {
        return localStorage.getItem("tutorialContent") || "Escribe aquí tus notas...";
    });

    useEffect(() => {
        localStorage.setItem("tutorialContent", text);
    }, [text]);

    // ✅ Función para subir imágenes
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setText((prev) => prev + `\n\n![Imagen subida](${reader.result})`);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="mt-4  bg-black-100">
            <h3 className="text-lg font-bold">Editor de Notas</h3>

            {/* ✅ Botón para subir imágenes */}
            <input type="file" onChange={handleImageUpload} className="mb-4 border p-2  bg-black-100" />

            {/* ✅ Área de texto para escribir en Markdown */}
            <textarea
                className="w-full h-40 border p-2  bg-black-100"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* ✅ Vista previa del Markdown */}
            <h3 className="text-lg font-bold mt-4 bg-black-100">Vista Previa</h3>
            <div className="p-4 border bg-black-100">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;
