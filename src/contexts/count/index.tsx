import { useState, createContext } from "react";

const CountContext = createContext({
  count: 0,
  plusCount: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CountProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, plusCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
