import { useSEO } from "../hooks/useSEO";
import MyWorkChattyImport from "../../imports/MyWorkChatty/MyWorkChatty";

export default function MyWorkChatty() {
  useSEO({ title: "Chatty — UX/UI Redesign", description: "User-centered redesign of Chatty, focusing on usability, clarity, and seamless interactions." });
  return <MyWorkChattyImport />;
}