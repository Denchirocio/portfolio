import { useSEO } from "../hooks/useSEO";
import HomeImport from "../../imports/Home/Home";

export default function Home() {
  useSEO({ title: "Portfolio", description: "Sr. Product Designer passionate about UX Research, UX/UI Design and development. Explore my work." });
  return <HomeImport />;
}
