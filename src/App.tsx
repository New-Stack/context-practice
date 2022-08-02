import { CountProvider } from "./contexts/count";
import { CountLabel } from "./components/countLabel";
import { PlusBtn } from "./components/plusBtn";

// 공부 자료 아래 링크
// https://dev-yakuza.posstree.com/ko/react/context-api/

function App() {
  return (
    <CountProvider>
      <CountLabel />
      <PlusBtn />
    </CountProvider>
  );
}

export default App;
