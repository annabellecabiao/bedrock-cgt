// App.tsx
import AppRouter from "./router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={AppRouter} />;
}

