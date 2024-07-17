import { RouterProvider } from "react-router-dom";
import router from "@/core/router";
import { Provider } from "react-redux";
import store from "@/store";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
