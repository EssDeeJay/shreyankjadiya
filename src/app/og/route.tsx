import { SITE } from "@/lib/site";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedTitle = searchParams.get("title")?.trim();
  const title = requestedTitle?.slice(0, 100) || SITE.name;
  const isProfileCard = !requestedTitle;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#a3e635",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {isProfileCard ? "Shopify Plus · Full-Stack · Ecommerce" : "From the blog"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 58 : 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 1030,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d4d4d4" }}>
            {isProfileCard ? SITE.profileDescription : `By ${SITE.name}`}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a3a3a3" }}>
          shreyankjadiya.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
