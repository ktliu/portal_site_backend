import { NextResponse } from "next/server";

const allowedOrigins = ["http://localhost:3000", process.env.WEBSITE_ORIGIN];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function middleware(request) {
  const origin = request.headers.get("origin") ?? "";
  const isAllowedOrigin = allowedOrigins.some((allowedOrigin) =>
    origin.startsWith(allowedOrigin)
  );
  const isPreflight = request.method === "OPTIONS";

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
      ...corsOptions,
    };
    return new NextResponse(null, { headers: preflightHeaders, status: 200 });
  }

  if (!isAllowedOrigin) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
