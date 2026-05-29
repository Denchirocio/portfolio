import { useSEO } from "../hooks/useSEO";
import BlogImport from "../../imports/Blog/Blog";

export default function Blog() {
  useSEO({ title: "Blog", description: "Notes and thoughts on UX Design, product thinking, and the creative process." });
  return <BlogImport />;
}