import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(3deg); }
                    75% { transform: translateY(10px) rotate(-3deg); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1); }
                    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.2); }
                }
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes orbit {
                    from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
                }
                .notfound-star {
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    background: white;
                    border-radius: 50%;
                }
                .notfound-btn:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.5) !important;
                }
                .notfound-link:hover {
                    color: #c4b5fd !important;
                }
            `}</style>

            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 30%, #16082a 60%, #0d1117 100%)",
                position: "relative",
                overflow: "hidden",
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}>

                {/* Stars background */}
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="notfound-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}

                {/* Nebula glow blobs */}
                <div style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
                    top: "-100px",
                    right: "-100px",
                    filter: "blur(60px)",
                }} />
                <div style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
                    bottom: "-50px",
                    left: "-80px",
                    filter: "blur(60px)",
                }} />

                {/* Main content */}
                <div style={{
                    textAlign: "center",
                    zIndex: 10,
                    padding: "2rem",
                    animation: "fade-in-up 0.8s ease-out both",
                }}>

                    {/* Floating astronaut/planet area */}
                    <div style={{
                        position: "relative",
                        width: "200px",
                        height: "200px",
                        margin: "0 auto 2rem",
                        animation: "float 6s ease-in-out infinite",
                    }}>
                        {/* Planet */}
                        <div style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #6d28d9 0%, #4f46e5 50%, #2563eb 100%)",
                            margin: "40px auto 0",
                            position: "relative",
                            boxShadow: "inset -20px -10px 40px rgba(0,0,0,0.4), 0 0 60px rgba(139, 92, 246, 0.3)",
                        }}>
                            {/* Planet ring */}
                            <div style={{
                                position: "absolute",
                                width: "180px",
                                height: "40px",
                                border: "2px solid rgba(196, 181, 253, 0.3)",
                                borderRadius: "50%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) rotateX(75deg)",
                            }} />
                            {/* Crater details */}
                            <div style={{
                                position: "absolute",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.08)",
                                top: "25px",
                                left: "30px",
                            }} />
                            <div style={{
                                position: "absolute",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.06)",
                                top: "60px",
                                left: "70px",
                            }} />
                        </div>
                        {/* Orbiting moon */}
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "16px",
                            height: "16px",
                            marginTop: "-8px",
                            marginLeft: "-8px",
                            animation: "orbit 8s linear infinite",
                        }}>
                            <div style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
                                boxShadow: "0 0 10px rgba(148, 163, 184, 0.5)",
                            }} />
                        </div>
                    </div>

                    {/* 404 text */}
                    <h1 style={{
                        fontSize: "clamp(5rem, 15vw, 10rem)",
                        fontWeight: 800,
                        lineHeight: 1,
                        margin: "0 0 0.5rem",
                        background: "linear-gradient(135deg, #c4b5fd, #818cf8, #60a5fa, #c4b5fd)",
                        backgroundSize: "300% 300%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "gradient-shift 4s ease infinite",
                        letterSpacing: "-0.04em",
                        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    }}>
                        404
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                        margin: "0 0 0.75rem",
                        letterSpacing: "-0.02em",
                    }}>
                        Lost in Space
                    </p>
                    <p style={{
                        fontSize: "1.05rem",
                        color: "#94a3b8",
                        margin: "0 0 2.5rem",
                        maxWidth: "420px",
                        lineHeight: 1.6,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}>
                        The page you&apos;re looking for has drifted into the void.
                        Let&apos;s navigate you back to familiar territory.
                    </p>

                    {/* Glassmorphism card with buttons */}
                    <div style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "20px",
                        padding: "2rem",
                        maxWidth: "400px",
                        margin: "0 auto",
                        animation: "pulse-glow 4s ease-in-out infinite",
                    }}>
                        {/* Go Home button */}
                        <Link href="/" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.85rem 2rem",
                            background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                            color: "white",
                            borderRadius: "12px",
                            textDecoration: "none",
                            fontSize: "1rem",
                            fontWeight: 600,
                            transition: "all 0.3s ease",
                            boxShadow: "0 8px 30px rgba(139, 92, 246, 0.35)",
                            letterSpacing: "-0.01em",
                        }} className="notfound-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            Back to Home
                        </Link>

                        {/* Separator */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            margin: "1.25rem 0",
                            color: "#475569",
                            fontSize: "0.8rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        }}>
                            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                            or
                            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                        </div>

                        {/* Secondary links */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1.5rem",
                        }}>
                            <Link href="/dashboard" className="notfound-link" style={{
                                color: "#94a3b8",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                transition: "color 0.2s ease",
                            }}>
                                Dashboard
                            </Link>
                            <Link href="/products" className="notfound-link" style={{
                                color: "#94a3b8",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                transition: "color 0.2s ease",
                            }}>
                                Products
                            </Link>
                            <Link href="/profile" className="notfound-link" style={{
                                color: "#94a3b8",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                transition: "color 0.2s ease",
                            }}>
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}