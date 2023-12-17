"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import EditTodo from "./EditTodo";

type Props = {
  todoList: any;
  getTodo: () => void;
};

export default function ViewTodo({ todoList, getTodo }: Props) {
  const handleDelete = (id: string) => async () => {
    const response = await fetch(`/api/todo`, {
      method: "DELETE",
      body: JSON.stringify({ todoId: id }),
    });
    const res = await response.json();
    getTodo();
  };

  return todoList.map((item: any, index: number) => (
    <div className="mt-6" key={index}>
      <div className="px-5 py-3 bg-slate-900 text-white flex justify-between items-center rounded-sm">
        <div>
          <span className="text-sm">{item.title}</span>
        </div>
        <div className="flex gap-3">
          <EditTodo getTodo={getTodo} id = {item.id} title= {item.title}/>
          <Button variant={"destructive"} onClick={handleDelete(item.id)}>
            <Trash2 size={18} className="pr-1" /> Delete
          </Button>
        </div>
      </div>
    </div>
  ));
}
