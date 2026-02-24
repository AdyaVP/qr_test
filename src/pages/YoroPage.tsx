import { useNavigate } from "react-router-dom";

export default function YoroPage() {
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    padding: "10px 20px",
                    marginBottom: 30,
                    backgroundColor: "#4a90e2",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: 16,
                }}
            >
                ← Volver al Mapa
            </button>

            <h1 style={{ color: "#333", marginBottom: 20 }}>Yoro</h1>

            <div style={{ lineHeight: 1.8, color: "#555" }}>
                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Información General</h2>
                <p>
                    Yoro es un departamento del centro-norte de Honduras. Su capital es la ciudad de Yoro,
                    famosa por el fenómeno de la "Lluvia de Peces".
                </p>

                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Características</h2>
                <ul>
                    <li><strong>Capital:</strong> Yoro</li>
                    <li><strong>Población:</strong> Aproximadamente 570,000 habitantes</li>
                    <li><strong>Economía:</strong> Agricultura (café, granos básicos), ganadería</li>
                    <li><strong>Ubicación:</strong> Centro-norte de Honduras</li>
                </ul>

                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Lugares de Interés</h2>
                <ul>
                    <li>Parque Nacional Montaña de Yoro</li>
                    <li>Fenómeno de la Lluvia de Peces</li>
                    <li>Cataratas de Pulhapanzak</li>
                    <li>Reserva Biológica El Cajón</li>
                </ul>

                <div style={{
                    marginTop: 40,
                    padding: 20,
                    backgroundColor: "#f0f8ff",
                    borderRadius: 8,
                    border: "1px solid #4a90e2"
                }}>
                    <p style={{ margin: 0, fontStyle: "italic" }}>
                        Aquí puedes agregar más información específica sobre Yoro, como eventos culturales,
                        gastronomía típica, datos históricos, y más.
                    </p>
                </div>
            </div>
        </div>
    );
}
