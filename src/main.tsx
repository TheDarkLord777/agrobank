import ReactDOM from "react-dom/client";
import AppRoute from "./routes/AppRoute.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRoute></AppRoute>
  </Provider>,
);
