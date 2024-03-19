import TodoList from "@/app/components/TodoList";
import AddTodo from "@/app/components/AddTodo";
import NavbarTodo from "../components/NavbarTodo";
import Link from "next/link";

export default async function Todos() {
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      {/* <NavbarTodo /> */}
      <TodoList />
      <AddTodo />
      <Link className="text-left text-white/50 hover:text-white" href="/">
        Go to Home page
      </Link>
    </main>
  )
}