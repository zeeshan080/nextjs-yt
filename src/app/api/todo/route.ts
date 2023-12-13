import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  return NextResponse.json({ message: "todo created successfully! " });
}
