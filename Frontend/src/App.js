import routes from "./Routes";
import { useRoutes } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  const router = useRoutes(routes);

  return <CartContextProvider>{router}</CartContextProvider>;
}

export default App;
