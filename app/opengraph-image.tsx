import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#080808",
          color: "#F0EDE8",
          fontFamily: "serif",
          border: "1px solid #1C1C1C",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "999px",
              border: "1px solid #1C1C1C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            ▲
          </div>
          <div style={{ fontSize: 30, letterSpacing: "0.02em" }}>Oblivion Collective</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: 74, lineHeight: 1.03, maxWidth: 980 }}>
            Creative Direction for Bold Brands
          </div>
          <div style={{ fontSize: 30, color: "#C8FF00", letterSpacing: "0.08em" }}>
            WE FINISH WHAT OTHERS FEAR TO START
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
