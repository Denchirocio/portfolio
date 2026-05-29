import { useSEO } from "../hooks/useSEO";
import BlogPostImport from "../../imports/Blog/BlogPost";

export default function BlogPost() {
  useSEO({ title: "Blog" });
  return <BlogPostImport />;
}