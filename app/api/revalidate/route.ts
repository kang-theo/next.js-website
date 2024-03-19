// On-demand revalidate, after adding new post, access the following url to trigger revalidate,
// Then you will see the refreshed post list.
// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=TokenExampleCanBeGeneratedInNode

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}
