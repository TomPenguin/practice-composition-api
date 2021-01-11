import { Todo } from "./types/todo";
import { v4 as uuid } from "uuid";

export default {
  create: (title: string) => ({
    id: uuid(),
    title,
    done: false,
    createdAt: new Date(),
  }),

  toggle: (todo: Todo) => (todo.done = !todo.done),
};
