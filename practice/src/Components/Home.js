import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isAuthenticated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleClick = ()=>{
      navigate("/signup")
    }

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#0f172a',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    dynamicBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      transition: 'all 1s ease',
      opacity: 0.4,
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
        rgba(99,102,241,0.15), rgba(236,72,153,0.1), rgba(16,185,129,0.08), transparent 60%)`
    },
    blob1: {
      position: 'absolute',
      top: '80px',
      left: '40px',
      width: '256px',
      height: '256px',
      backgroundColor: '#8b5cf6',
      opacity: 0.1,
      borderRadius: '50%',
      filter: 'blur(48px)',
      animation: 'blob 8s infinite'
    },
    blob2: {
      position: 'absolute',
      bottom: '80px',
      right: '80px',
      width: '320px',
      height: '320px',
      backgroundColor: '#f472b6',
      opacity: 0.08,
      borderRadius: '50%',
      filter: 'blur(48px)',
      animation: 'blob 8s infinite',
      animationDelay: '2s'
    },
    blob3: {
      position: 'absolute',
      top: '50%',
      left: '25%',
      width: '128px',
      height: '128px',
      backgroundColor: '#60a5fa',
      opacity: 0.12,
      borderRadius: '50%',
      filter: 'blur(32px)',
      animation: 'blob 8s infinite',
      animationDelay: '4s'
    },
    nav: {
      position: 'relative',
      zIndex: 20,
      padding: '24px'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '32px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #c084fc, #fb7185)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      color: '#d1d5db'
    },
    navLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    mainContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: '0 24px'
    },
    contentContainer: {
      maxWidth: '1024px',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 'bold',
      lineHeight: '1.1',
      marginBottom: '16px',
      background: 'linear-gradient(to right, #c084fc, #fb7185, #60a5fa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
      marginTop: '8px',
      color: '#9ca3af',
      fontWeight: 'normal'
    },
    description: {
      maxWidth: '768px',
      margin: '32px auto',
      fontSize: '1.125rem',
      color: '#d1d5db',
      lineHeight: '1.75'
    },
    highlight: {
      fontWeight: '600'
    },
    pinkHighlight: {
      color: '#fb7185',
      fontWeight: '600'
    },
    blueHighlight: {
      color: '#818cf8',
      fontWeight: '600'
    },
    greenHighlight: {
      color: '#34d399',
      fontWeight: '600'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      margin: '48px 0',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    featureCard: {
      padding: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(8px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    featureIcon: {
      fontSize: '48px',
      marginBottom: '12px'
    },
    featureTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: 'white',
      marginBottom: '8px'
    },
    featureDescription: {
      fontSize: '14px',
      color: '#9ca3af'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      marginTop: '32px'
    },
    primaryButton: {
      width: '100%',
      maxWidth: '200px',
      padding: '16px 32px',
      background: 'linear-gradient(to right, #9333ea, #ec4899)',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '600',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 25px rgba(147, 51, 234, 0.25)'
    },
    secondaryButton: {
      width: '100%',
      maxWidth: '200px',
      padding: '16px 32px',
      backgroundColor: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(8px)',
      color: 'white',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    trustSection: {
      marginTop: '48px',
      paddingTop: '32px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    trustText: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '16px'
    },
    trustIndicators: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px',
      opacity: 0.5,
      flexWrap: 'wrap'
    },
    stars: {
      fontSize: '32px'
    },
    rating: {
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Dynamic Background */}
      <div style={styles.dynamicBackground} />

      {/* Floating Elements */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      <div style={styles.blob3}></div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>iNote</div>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.contentContainer}>
          {/* Hero Title */}
          <div>
            <h1 style={styles.heroTitle}>
              Welcome to iNote
            </h1>
            <div style={styles.subtitle}>
              ✨ Your Digital Notebook
            </div>
          </div>

          {/* Description */}
          <div style={styles.description}>
            <p>
              Capture your <span style={styles.pinkHighlight}>thoughts</span>, 
              organize your <span style={styles.blueHighlight}>ideas</span>, 
              and unleash your <span style={styles.greenHighlight}>creativity</span> 
              — all in one beautiful, intuitive space.
            </p>
          </div>

          {/* Feature Highlights */}
          <div style={styles.featuresGrid}>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
            >
              <div style={styles.featureIcon}>📝</div>
              <h3 style={styles.featureTitle}>Easy Writing</h3>
              <p style={styles.featureDescription}>Simple, distraction-free interface for your thoughts</p>
            </div>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
            >
              <div style={styles.featureIcon}>🗂️</div>
              <h3 style={styles.featureTitle}>Smart Organization</h3>
              <p style={styles.featureDescription}>Automatically organize and find your notes</p>
            </div>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
            >
              <div style={styles.featureIcon}>☁️</div>
              <h3 style={styles.featureTitle}>Cloud Sync</h3>
              <p style={styles.featureDescription}>Access your notes anywhere, anytime</p>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div style={styles.trustSection}>
            <p style={styles.trustText}>Trusted by thousands of creators</p>
            <div style={styles.trustIndicators}>
              <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
              <div style={styles.rating}>4.9/5 rating</div>
              <div style={styles.rating}>10k+ users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @media (min-width: 640px) {
          .button-container {
            flex-direction: row;
          }
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;