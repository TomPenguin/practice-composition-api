import { reactive, readonly } from "@vue/composition-api";
import { Todo } from "./types/todo";
import TodoModel from './TodoModel'

const todos = reactive<Todo[]>([]);

const addTodo = (title: string) => todos.push(TodoModel.create(title))

const removeTodo = (id: Todo["id"]) => {
  const todoIndex = todos.findIndex(t => t.id === id)
  todos.splice(todoIndex, 1)
}

const toggleTodo = (id: Todo["id"]) => {
  const todo = todos.find(t => t.id === id)
  if (!todo) return
  TodoModel.toggle(todo)
}

export const useTodoStore = () => {
  return {
    todos: readonly(todos),
    addTodo,
    removeTodo,
    toggleTodo
  };
};
