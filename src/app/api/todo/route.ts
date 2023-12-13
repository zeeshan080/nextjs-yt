import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db } from "@/drizzle/drizzle";
import { todos } from "@/drizzle/schema";

export async function GET(request: NextRequest) {
  const rows = await db.select().from(todos);
  //const { rows } = await sql`select * from todos`;
  console.log("rows--", rows);

  return NextResponse.json({ message: rows });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const title = req.todoItem;

  const rows = await db.insert(todos).values({ title });
  //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

  return NextResponse.json({ message: "todo created successfully! " });
}
