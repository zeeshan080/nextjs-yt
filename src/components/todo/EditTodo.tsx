"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PenBox, PencilIcon } from "lucide-react";

type Props = {
    getTodo: () => void;
    id : string;
    title: string;
};

export default function EditTodo({getTodo,id,title}: Props) {
  const [toggle, setToggle] = useState(false);
  const [newtitle, setNewtitle] = useState(title)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewtitle(e.currentTarget.value);
  }

  const handleEdit = (id: string, title: string) => async () => {

    const response = await fetch(`/api/todo`, {
      method: "PUT",
      body: JSON.stringify({ todoId: id, todoTitle: title }),
    });
    const res = await response.json();
    getTodo();
  };

  const toggleDaialog = () => {
    setToggle(!toggle);
  };
  return (
    <Dialog open={toggle} onOpenChange={toggleDaialog}>
      <DialogTrigger className="flex justify-center items-center gap-1 border border-[#c0c0c0] p-2 rounded-sm">
          <PencilIcon size={18} className="pr-1" /> Edit 
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo Item</DialogTitle>
        </DialogHeader>
        <div>
          <div className="p-6">
            <Input value={newtitle} onChange={(e)=>handleInputChange(e)} />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Button onClick={handleEdit(id, newtitle)}>
              <PenBox size={16} className="pr-1" /> Edit Todo
            </Button>
            <Button variant={"destructive"} onClick={toggleDaialog}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
