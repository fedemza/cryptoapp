import CryptoApp from "./routes/CryptoApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CryptoApp />
    </Provider>
  );
}

export default App;
