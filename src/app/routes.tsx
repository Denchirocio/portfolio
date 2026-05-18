import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyWorkPayana from "./pages/MyWorkPayana";
import MyWorkChatty from "./pages/MyWorkChatty";
import MyWorkGruya from "./pages/MyWorkGruya";
import MyWorkBookup from "./pages/MyWorkBookup";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/payana", Component: MyWorkPayana },
      { path: "/chatty", Component: MyWorkChatty },
      { path: "/gruya", Component: MyWorkGruya },
      { path: "/bookup", Component: MyWorkBookup },
      { path: "/about", Component: AboutMe },
      { path: "/blog", Component: Blog },
    ],
  },
]);
