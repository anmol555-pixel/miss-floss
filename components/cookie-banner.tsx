"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable in some environments
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie-consent", "declined");
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            padding: "16px",
          }}
        >
          <div
            style={{
              maxWidth: "768px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 8px 40px rgba(15,23,42,0.18)",
              border: "1px solid #e2e8f0",
              padding: "20px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <p
                style={{
                  flex: 1,
                  minWidth: "200px",
                  fontSize: "14px",
                  color: "#475569",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                We use cookies to improve your experience and analyze traffic. See our{" "}
                <Link
                  href="/privacy"
                  style={{ color: "#0d9488", textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                <button
                  onClick={handleDecline}
                  style={{
                    height: "40px",
                    padding: "0 20px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#475569",
                    background: "transparent",
                    border: "1px solid #cbd5e1",
                    borderRadius: "999px",
                    cursor: "pointer",
                  }}
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  style={{
                    height: "40px",
                    padding: "0 20px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    background: "#0d9488",
                    border: "none",
                    borderRadius: "999px",
                    cursor: "pointer",
                    boxShadow: "0 2px 10px rgba(13,148,136,0.35)",
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
