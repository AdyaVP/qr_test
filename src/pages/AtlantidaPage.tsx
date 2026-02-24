import { useNavigate } from "react-router-dom";

export default function AtlantidaPage() {
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

            <h1 style={{ color: "#333", marginBottom: 20 }}>Atlántida</h1>

            <div style={{ lineHeight: 1.8, color: "#555" }}>
                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Información General</h2>
                <p>
                    Atlántida es un departamento ubicado en la costa norte de Honduras. Su capital es
                    La Ceiba, conocida como "La Novia de Honduras" y famosa por su carnaval.
                </p>

                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Características</h2>
                <ul>
                    <li><strong>Capital:</strong> La Ceiba</li>
                    <li><strong>Población:</strong> Aproximadamente 450,000 habitantes</li>
                    <li><strong>Economía:</strong> Turismo, agricultura (piña, banano), comercio</li>
                    <li><strong>Ubicación:</strong> Costa norte del Caribe hondureño</li>
                </ul>

                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Lugares de Interés</h2>
                <ul>
                    <li>Parque Nacional Pico Bonito</li>
                    <li>Refugio de Vida Silvestre Cuero y Salado</li>
                    <li>Playas de Tela</li>
                    <li>Carnaval de La Ceiba (mayo)</li>
                    <li>Cayos Cochinos</li>
                </ul>

                <div style={{
                    marginTop: 40,
                    padding: 20,
                    backgroundColor: "#f0f8ff",
                    borderRadius: 8,
                    border: "1px solid #4a90e2"
                }}>
                    <p style={{ margin: 0, fontStyle: "italic" }}>
                        Aquí puedes agregar más información específica sobre Atlántida, como eventos culturales,
                        gastronomía típica, datos históricos, y más.
                    </p>
                </div>
            </div>
        </div>
    );
}
