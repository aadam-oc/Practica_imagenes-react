import LazyImage from "./LazyImage";
const Ejercicio2 = () => {
    const images = [
        "https://niixer.com/wp-content/uploads/2022/03/aperWebP.webp",
        "https://sb.kaleidousercontent.com/67418/992x558/7632960ff9/people.png",
        "https://i0.wp.com/www.tesseractspace.com/blog/wp-content/uploads/2019/04/guardar-webp-como-ong-jpeg.jpg?fit=1010%2C537&ssl=1",
    ];
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Ejercicio 2: Lazy
                Loading en Imágenes</h1>
            <p className="mb-4">
                Las siguientes imágenes solo se cargarán cuando sean visibles
                en la pantalla.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
export default Ejercicio2;