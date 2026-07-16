import { Link } from "react-router";
import imgBannerBlog from "./Bannerblog.png";
import { posts } from "./posts";

const imgSpeechBalloon = "https://www.figma.com/api/mcp/asset/3498e7d1-cf65-4c99-8b2c-54172ccb0d44";

function BlogCard({ post, isFirst }: { post: typeof posts[0]; isFirst: boolean }) {
  const inner = (
    <div className="flex flex-col gap-[16px] items-start shrink-0 w-full max-w-[360px] mx-auto">
      {/* Image + date row */}
      <div className="flex items-start justify-between w-full">
        {/* Rotated date */}
        <div className="flex h-[300px] items-center justify-center w-[19px] shrink-0">
          <div className="-rotate-90 flex-none">
            <p className="font-['Inter:Regular',sans-serif] font-semibold text-[14px] text-black whitespace-nowrap">
              {post.date}
            </p>
          </div>
        </div>

        {/* Thumbnail */}
        <div className={`relative shrink-0 size-[300px] border ${isFirst ? "border-[#dfa9ea]" : "border-black"} overflow-hidden`}>
          {post.image && (
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
              src={post.image}
            />
          )}
          {/* First post overlay */}
          {isFirst && (
            <div className="absolute bg-white border border-black left-[80px] top-[50px] w-[180px] h-[180px] flex flex-col justify-center p-[16px]">
              <p className="font-['Inter:Regular',sans-serif] text-[20px] text-black leading-normal mb-[8px]">
                Yes, that's also
              </p>
              <p className="font-['EB_Garamond',serif] text-[56px] text-black leading-none">
                UX.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[12px] w-full">
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] text-black leading-normal">
          {post.title}
        </h2>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#7a7a7a] leading-normal">
          {post.description}
        </p>
      </div>
    </div>
  );

  return post.slug
    ? <Link to={`/blog/${post.slug}`} className="no-underline group">{inner}</Link>
    : inner;
}

export default function Blog() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero banner (desktop) / simple title (mobile) */}
      <img src={imgBannerBlog} alt="Blog banner" fetchPriority="high" decoding="async" className="hidden sm:block w-full object-cover shrink-0" />
      <p className="sm:hidden font-['EB_Garamond',serif] leading-[normal] not-italic text-[28px] text-black text-center pt-[32px] px-[24px]">Blog</p>

      {/* Blog posts grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[48px] px-[24px] sm:px-[48px] lg:px-[80px] py-[60px]">
        {posts.map((post) => {
          if ((post as any).hidden) return null;
          return <BlogCard key={post.id} post={post} isFirst={post === posts[0]} />;
        })}
      </div>
    </div>
  );
}
