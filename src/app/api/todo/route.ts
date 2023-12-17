import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db } from "@/drizzle/drizzle";
import { todos } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const rows = await db.select().from(todos);
  //const { rows } = await sql`select * from todos`;
  //console.log("rows--", rows);

  return NextResponse.json({ message: rows });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const title = req.todoItem;

  const rows = await db.insert(todos).values({ title });
  //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

  return NextResponse.json({ message: "todo created successfully! " });
}

export async function DELETE(request: NextRequest) {

  const req = await request.json();
  const id = req.todoId;
  const rows = await db.delete(todos).where(eq(todos.id,id));
  //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

  return NextResponse.json({ message: "todo deleted successfully! " });
}

export async function PUT(request: NextRequest) {

  const req = await request.json();
  const id = req.todoId;
  const title = req.todoTitle;
  const rows = await db.update(todos).set({title}).where(eq(todos.id,id));
  //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

  return NextResponse.json({ message: "todo updated successfully! " });
}