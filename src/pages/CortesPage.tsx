import { useNavigate } from "react-router-dom";

export default function CortesPage() {
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

            <h1 style={{ color: "#333", marginBottom: 20 }}>Cortés</h1>

            <div style={{ lineHeight: 1.8, color: "#555" }}>
                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Información General</h2>
                <p>
                    Cortés es uno de los dieciocho departamentos de Honduras. Su capital es San Pedro Sula,
                    la segunda ciudad más grande del país y el principal centro industrial y comercial.
                </p>

                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Características</h2>
                <ul>
                    <li><strong>Capital:</strong> San Pedro Sula</li>
                    <li><strong>Población:</strong> Aproximadamente 1.8 millones de habitantes</li>
                    <li><strong>Economía:</strong> Centro industrial, comercial y manufacturero</li>
                    <li><strong>Ubicación:</strong> Región norte de Honduras</li>
                </ul>

                <h2 style={{ color: "#4a90e2", marginTop: 30 }}>Lugares de Interés</h2>
                <ul>
                    <li>Parque Nacional Cusuco</li>
                    <li>Museo de Antropología e Historia</li>
                    <li>Catedral de San Pedro Sula</li>
                    <li>Playas de Puerto Cortés</li>
                </ul>

                <div style={{
                    marginTop: 40,
                    padding: 20,
                    backgroundColor: "#f0f8ff",
                    borderRadius: 8,
                    border: "1px solid #4a90e2"
                }}>
                    <p style={{ margin: 0, fontStyle: "italic" }}>
                        Aquí puedes agregar más información específica sobre Cortés, como eventos culturales,
                        gastronomía típica, datos históricos, y más.
                    </p>
                </div>
            </div>
        </div>
    );
}
