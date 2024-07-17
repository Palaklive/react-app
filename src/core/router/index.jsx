import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/core/Layout";
import Home from "@/pages/home";
import Counter from "@/pages/counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "Counter",
    element: (
      <Layout>
        <Counter />
      </Layout>
    ),
  },
]);

export default router;
