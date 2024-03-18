import { NextResponse } from "next/server";

// CORS
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  // 1
  // if (request.url.includes("/api/")) {
  // }

  // 2
  // const regex = new RegExp("/api/*");
  // if (regex.test(request.url)) {
  // }

  const origin = request.headers.get("origin");
  console.log("\"origin\":",origin);

  // Next.js default configuration is to allow all OPTION request, 204
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  console.log("Middleware!");

  console.log(request.method, request.url);

  return NextResponse.next();
}

// 3
export const config = {
  matcher: "/api/:path*",
};
