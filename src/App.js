import { CssBaseline } from "@mui/material";
import Layout from "./Component/Layout";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Layout />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
