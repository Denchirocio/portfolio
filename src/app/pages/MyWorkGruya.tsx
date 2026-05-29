import { useSEO } from "../hooks/useSEO";
import MyWorkGruyaImport from "../../imports/MyWorkGruya/MyWorkGruya";

export default function MyWorkGruya() {
  useSEO({ title: "Gruya — Meeting Room App", description: "Conceptual mobile app designed to simplify the process of booking coworking spaces." });
  return <MyWorkGruyaImport />;
}