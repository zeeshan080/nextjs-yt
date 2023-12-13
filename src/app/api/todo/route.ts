import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const { rows } = await sql`select * from todos`;

  return NextResponse.json({ message: rows });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const title = req.todoItem;

  const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;


  return NextResponse.json({ message: "todo created successfully! " });
}
