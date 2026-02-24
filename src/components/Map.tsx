import { useNavigate } from "react-router-dom";
import hondurasData from "@svg-country-maps/honduras";

const svgIdToDepartmentId: Record<string, string> = {
  atlantida: "atlantida",
  cortes: "cortes",
  yoro: "yoro",
};

export default function Map() {
  const navigate = useNavigate();


  const mapData = hondurasData as any;

  if (!mapData?.locations) {
    console.error("Mapa no cargado:", hondurasData);
    return <p>No se pudo cargar el mapa</p>;
  }

  const handleClick = (locationId: string) => {
    const departmentId = svgIdToDepartmentId[locationId];
    if (!departmentId) return;
    navigate(`/departamento/${departmentId}`);
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 30 }}>
      <h1 style={{ textAlign: "center", marginBottom: 40, color: "#333" }}>
        Mapa Interactivo de Honduras
      </h1>

      <svg
        viewBox={mapData.viewBox}
        style={{ width: "100%", height: "auto", border: "1px solid #ddd", borderRadius: 8 }}
      >
        {mapData.locations.map((region: any) => {
          const isClickable = svgIdToDepartmentId[region.id];

          return (
            <path
              key={region.id}
              id={region.id}
              d={region.path}
              fill={isClickable ? "#d4e6f1" : "#e0e0e0"}
              stroke="#fff"
              strokeWidth={2}
              onClick={() => handleClick(region.id)}
              style={{
                cursor: isClickable ? "pointer" : "default",
                transition: "fill 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (isClickable) {
                  e.currentTarget.style.fill = "#4a90e2";
                }
              }}
              onMouseLeave={(e) => {
                if (isClickable) {
                  e.currentTarget.style.fill = "#d4e6f1";
                }
              }}
            >
              <title>{region.name}</title>
            </path>
          );
        })}
      </svg>

      <p style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
        Haz clic en Cortés, Atlántida o Yoro para ver más información
      </p>
    </div>
  );
}