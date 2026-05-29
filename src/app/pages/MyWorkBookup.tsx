import { useSEO } from "../hooks/useSEO";
import MyWorkBookupImport from "../../imports/MyWorkBookup/MyWorkBookup";

export default function MyWorkBookup() {
  useSEO({ title: "Bookup — Accessible Bookstore", description: "Accessibility-focused experience for an online bookstore, improving navigation for diverse users." });
  return <MyWorkBookupImport />;
}