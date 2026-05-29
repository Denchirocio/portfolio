import { useSEO } from "../hooks/useSEO";
import MyWorkPayanaImport from "../../imports/MyWorkPayana/MyWorkPayana";

export default function MyWorkPayana() {
  useSEO({ title: "Payana — Finance & IA", description: "Redesign of Payana's main platform, creating scalable UX solutions for complex financial workflows." });
  return <MyWorkPayanaImport />;
}