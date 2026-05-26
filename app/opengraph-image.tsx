import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stoonex Services — Landscaping, Fencing, Paving & Wall Stone in Saskatoon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf7f2",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          fontFamily: "Georgia",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6b665c",
            fontWeight: 500,
          }}
        >
          Saskatoon · Since 2020
        </div>

        <div style={{ marginTop: 56, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Impact",
              fontSize: 168,
              lineHeight: 0.88,
              color: "#0f0f0f",
              textTransform: "uppercase",
              letterSpacing: -2,
              display: "flex",
            }}
          >
            Built for
          </div>
          <div
            style={{
              fontFamily: "Impact",
              fontSize: 168,
              lineHeight: 0.88,
              color: "#0f0f0f",
              textTransform: "uppercase",
              letterSpacing: -2,
              display: "flex",
              alignItems: "baseline",
              gap: 28,
            }}
          >
            <span>the</span>
            <span style={{ fontFamily: "Georgia", fontStyle: "italic", fontSize: 168, color: "#2f4a36", textTransform: "lowercase", letterSpacing: -3 }}>
              prairies.
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e7dfd2",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontFamily: "Impact",
              fontSize: 56,
              color: "#0f0f0f",
              letterSpacing: -1,
            }}
          >
            <span>STOONE</span>
            <span style={{ color: "#2f4a36" }}>X</span>
            <span style={{ marginLeft: 18, fontFamily: "Inter", fontSize: 18, letterSpacing: 3, color: "#6b665c", textTransform: "uppercase" }}>
              Services
            </span>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 18,
              letterSpacing: 3,
              color: "#0f0f0f",
              textTransform: "uppercase",
              background: "#e5ff40",
              padding: "12px 22px",
              border: "1px solid #0f0f0f",
            }}
          >
            306-222-0409
          </div>
        </div>
      </div>
    ),
    size
  );
}
