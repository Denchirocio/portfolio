import { useSEO } from "../hooks/useSEO";
import AboutMeImport from "../../imports/AboutMe/AboutMe";

export default function AboutMe() {
  useSEO({ title: "About me", description: "Sr. Product Designer with 6+ years of experience in UX Research and UI Design. Based in Argentina." });
  return <AboutMeImport />;
}