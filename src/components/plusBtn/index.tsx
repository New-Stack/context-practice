import { useContext } from "react";
import { CountContext } from "../../contexts/count";

export const PlusBtn = () => {
  const { plusCount } = useContext(CountContext);

  return <button onClick={plusCount}>+1</button>;
};
