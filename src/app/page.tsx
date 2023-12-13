import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <main>
      <div className="m-20">
        <div className="text-center">TODO LIST</div>
        <TodoList />
      </div>
    </main>
  );
}
