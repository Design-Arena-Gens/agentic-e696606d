'use client';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '20px'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          animation: 'fadeIn 1s ease-in'
        }}>
          <h1 style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Hi! 👋
          </h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: '0.9',
            marginBottom: '2rem'
          }}>
            Welcome to your autonomous agent
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <p style={{
              fontSize: '1.1rem',
              margin: '0'
            }}>
              Built and deployed automatically ✨
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
