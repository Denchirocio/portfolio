import { useSEO } from "../hooks/useSEO";
import MyWorkDenchiImport from "../../imports/MyWorkDenchi/MyWorkDenchi";

export default function MyWorkDenchi() {
  useSEO({ title: "Denchi No Nihongo — Japanese PWA", description: "Mobile-first PWA to reinforce Japanese through vocabulary, kana, kanji and listening exercises." });
  return <MyWorkDenchiImport />;
}