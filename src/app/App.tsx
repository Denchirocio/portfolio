import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}