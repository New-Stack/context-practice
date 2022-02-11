import React, { createContext, Dispatch, FC, useReducer } from "react";

interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

const initialTodos: TodoType[] = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

type Action =
  | { type: "CREATE"; todo: TodoType }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

type TodoDispatchType = Dispatch<Action>;

const todoReducer = (state: TodoType[], action: Action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
