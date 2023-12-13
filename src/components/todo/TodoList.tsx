"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import ViewTodo from "./ViewTodo";

type Props = {};

export default function TodoList({}: Props) {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getTodo = async () => {
    setLoading(true);
    const response = await fetch("/api/todo");
    const res = await response.json();
    setTodoList(res.message);
    console.log("after loading", res);
    
    setLoading(false);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.currentTarget.value);
  };
  const handleAddTodo = async () => {
    const response = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ todoItem }),
    });

    const res = await response.json();
    getTodo();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[60%] bg-gray-200 shadow-md rounded-md p-7">
        <div className=" flex justify-center items-center gap-6 w-full">
          <div className="w-[70%]">
            <Input
              id="todoItem"
              placeholder="Enter Todo here"
              value={todoItem}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <Button onClick={handleAddTodo}>
              <PlusIcon size={18} />
              Add Todo
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center p-6">Loading...</div>
        ) : todoList.length > 0 ? (
          <ViewTodo todoList={todoList} />
        ) : (
          <div className="text-center p-6">No Todo Found!</div>
        )}
      </div>
    </div>
  );
}
