"use client";
import React from "react";
import { Button } from "../ui/button";
import { PencilIcon, PlusIcon, Trash2 } from "lucide-react";
type Props = {
  todoList: any;
};

export default function ViewTodo({ todoList }: Props) {
  return todoList.map((item: any) => (
    <div className="mt-6" id={item.id}>
      <div className="px-5 py-3 bg-slate-900 text-white flex justify-between items-center rounded-sm">
        <div>
          <span className="text-sm">{item.title}</span>
        </div>
        <div className="flex gap-3">
          <Button variant={"secondary"}>
            <PencilIcon size={18} className="pr-1" /> Edit
          </Button>
          <Button variant={"destructive"}>
            <Trash2 size={18} className="pr-1" /> Delete
          </Button>
        </div>
      </div>
    </div>
  ));
}
