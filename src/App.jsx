import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/UI/Layout";
import PageRoutes from "./routes/PageRoutes";
import store from "./store/IndexReducers";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <PageRoutes />
      </Layout>
    </Provider>
  );
}

export default App;
