import { useEffect, useState, useRef } from "react"
import { supabase } from "../supabase"

export const Scan = () => {
  const [numero, setNumero] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(false)
  const hasRun = useRef(false)

  useEffect(() => {
    // Guard to prevent double execution from StrictMode
    if (hasRun.current) return
    hasRun.current = true

    const incrementar = async () => {
      try {
        const { data, error } = await supabase.rpc("increment_qr")

        if (error) {
          console.error("Error incrementando:", error)
          setError(true)
          return
        }

        setNumero(data)
        setShowModal(true)
      } catch (err) {
        console.error("Error de conexión:", err)
        setError(true)
      }
    }

    incrementar()
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {/* Background page */}
      <div style={styles.background}>
        <div style={styles.logoContainer}>
          <span style={styles.logoIcon}>🇭🇳</span>
          <h1 style={styles.logoText}>Hondureando</h1>
        </div>
        <p style={styles.subtitle}>Descubre la belleza de Honduras</p>
      </div>

      {/* Modal overlay */}
      {showModal && numero !== null && (
        <div style={styles.overlay} onClick={closeModal}>
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Confetti decorations */}


            <h1 style={styles.modalTitle}>¡Felicidades!</h1>

            <div style={styles.numberBadge}>
              <span style={styles.numberLabel}>Usuario #</span>
              <span style={styles.number}>{numero}</span>
            </div>

            <p style={styles.modalMessage}>
              en entrar a <strong style={styles.brandName}>Hondureando</strong>
            </p>

            <button style={styles.closeButton} onClick={closeModal}>
              ¡Genial, continuar!
            </button>
          </div>
        </div>
      )}

      {/* Loading state */}
      {!showModal && numero === null && !error && (
        <div style={styles.overlay}>
          <div style={styles.loadingContainer}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Registrando tu visita...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.celebrationIcon}>⚠️</div>
            <h1 style={{ ...styles.modalTitle, color: '#e74c3c' }}>Error de conexión</h1>
            <p style={styles.modalMessage}>
              No pudimos registrar tu visita. Por favor intenta de nuevo.
            </p>
            <button
              style={styles.closeButton}
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>
          </div>
        </div>
      )}

      {/* Inline keyframe styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        @keyframes modalSlideIn {
          0% { opacity: 0; transform: scale(0.7) translateY(30px); }
          60% { transform: scale(1.03) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(52, 152, 219, 0.3); }
          50% { box-shadow: 0 0 40px rgba(52, 152, 219, 0.6); }
        }

        @keyframes bounceIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
        }

        @keyframes spinLoader {
          to { transform: rotate(360deg); }
        }

        @keyframes numberCount {
          0% { opacity: 0; transform: scale(0.5); }
          50% { transform: scale(1.3); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  background: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0c2340 0%, #1a4a7a 30%, #2980b9 60%, #48c9b0 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px',
  },
  logoIcon: {
    fontSize: '56px',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
  },
  logoText: {
    fontSize: '48px',
    fontWeight: 900,
    color: '#ffffff',
    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
    letterSpacing: '-1px',
    margin: 0,
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 400,
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'overlayFadeIn 0.3s ease',
    padding: '20px',
    boxSizing: 'border-box',
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '48px 40px 40px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    animation: 'modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  confetti1: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    fontSize: '28px',
    animation: 'float 3s ease-in-out infinite',
    opacity: 0.7,
  },
  confetti2: {
    position: 'absolute',
    top: '30px',
    right: '25px',
    fontSize: '24px',
    animation: 'float2 2.5s ease-in-out infinite 0.5s',
    opacity: 0.6,
  },
  confetti3: {
    position: 'absolute',
    bottom: '60px',
    right: '30px',
    fontSize: '26px',
    animation: 'float 4s ease-in-out infinite 1s',
    opacity: 0.5,
  },
  celebrationIcon: {
    fontSize: '64px',
    marginBottom: '16px',
    animation: 'bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both',
  },
  modalTitle: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#1a1a2e',
    margin: '0 0 24px 0',
    letterSpacing: '-0.5px',
    fontFamily: "'Inter', sans-serif",
  },
  numberBadge: {
    background: 'linear-gradient(135deg, #2980b9 0%, #48c9b0 100%)',
    borderRadius: '16px',
    padding: '20px 32px',
    marginBottom: '16px',
    animation: 'pulseGlow 2s ease-in-out infinite',
    display: 'inline-block',
  },
  numberLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.85)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '4px',
    fontFamily: "'Inter', sans-serif",
  },
  number: {
    display: 'block',
    fontSize: '56px',
    fontWeight: 900,
    color: '#ffffff',
    animation: 'numberCount 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both',
    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
    fontFamily: "'Inter', sans-serif",
  },
  modalMessage: {
    fontSize: '18px',
    color: '#555',
    margin: '16px 0 28px 0',
    lineHeight: 1.5,
    fontFamily: "'Inter', sans-serif",
  },
  brandName: {
    background: 'linear-gradient(135deg, #2980b9, #48c9b0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
    fontSize: '20px',
  },
  closeButton: {
    background: 'linear-gradient(135deg, #2980b9 0%, #48c9b0 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '14px',
    padding: '16px 40px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(41, 128, 185, 0.4)',
    width: '100%',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.5px',
  },
  loadingContainer: {
    textAlign: 'center',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid rgba(255,255,255,0.2)',
    borderTopColor: '#48c9b0',
    borderRadius: '50%',
    animation: 'spinLoader 0.8s linear infinite',
    margin: '0 auto 20px',
  },
  loadingText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
  },
}
