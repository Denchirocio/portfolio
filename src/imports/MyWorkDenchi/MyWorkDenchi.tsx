import { Link } from "react-router";
import FadeIn from "../../app/components/FadeIn";
import OtherProjectCard from "../../app/components/OtherProjectCard";

// Hero mockup (captured screenshot of the laptop+phone collage)
import imgHeroMockup from "./screenshots/hero-mockup.png";

// Other projects thumbnails (from Payana folder — same images)
import imgThumbChatty from "../MyWorkPayana/3c02e76a688120a3f55c7c6d42881902b6c378ed.png";
import imgThumbBookup from "../MyWorkPayana/d5ed68bd0967246ce849d44538ce6c3524e9ddde.png";
import imgThumbGruya  from "../MyWorkPayana/4fdfe813fda517a1ae897d9aee28c140791d9525.png";
import imgGetInTouch  from "../MyWorkPayana/Get in touch.png";

const CHEVRON = "M0.75 8.75L4.75 4.75L0.75 0.75";


// ── Shared ────────────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-black text-center w-[min-content]">
      <p className="leading-[normal]">{children}</p>
    </div>
  );
}

function Body700({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[16px] sm:text-[20px] text-black w-full max-w-[700px] text-center">{children}</p>
  );
}

// ── Breadcrumb ────────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]">
            <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
              <div className="absolute inset-[-9.38%_-18.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 9.5">
                  <path d={CHEVRON} stroke="#3F3F46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <div className="content-stretch flex items-center justify-center py-[10px] relative rounded-[100px] shrink-0">
          <Link to="/" className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] no-underline not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap hover:opacity-70 transition-opacity">Home</Link>
        </div>
        <div className="content-stretch flex items-center justify-center py-[10px] relative rounded-[100px] shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">/</p>
        </div>
        <div className="content-stretch flex items-center justify-center py-[10px] relative rounded-[100px] shrink-0">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Denchi No Nihongo</p>
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] lg:gap-[127px] items-start justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full md:w-[572px]">
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <Breadcrumb />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[normal] not-italic relative shrink-0 text-[32px] sm:text-[48px] lg:text-[64px] text-black w-full">
            <p className="leading-[normal]">Denchi No Nihongo</p>
          </div>
          <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0">
            <div className="bg-[#ffabe7] content-stretch flex h-[30px] items-center justify-center px-[16px] py-[10px] relative rounded-[24px] shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">PERSONAL PROJECT</p>
            </div>
            <div className="bg-[#688cf8] content-stretch flex h-[30px] items-center justify-center px-[16px] py-[10px] relative rounded-[24px] shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">CLAUDE</p>
            </div>
            <div className="bg-[#c8e793] content-stretch flex h-[30px] items-center justify-center px-[16px] py-[10px] relative rounded-[24px] shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">IA</p>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[20px] text-black w-full">
          <span className="leading-[32px]">An application designed </span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px]">to reinforce Japanese through a practical and interactive experience</span>
          <span className="leading-[32px]">, allowing users to study vocabulary, grammar, kana writing, and listening comprehension </span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px]">in one place.</span>
        </p>
      </div>
      <img
        src={imgHeroMockup}
        alt="Denchi No Nihongo shown on laptop and phone"
        className="w-[220px] sm:w-full sm:max-w-[476px] h-auto shrink-0 mx-auto md:mx-0"
      />
    </div>
  );
}

// ── Overview ──────────────────────────────────────────────────────────────────

function Overview() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <div className="h-[61px] relative shrink-0 w-[90px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain size-full" src="/Overview.png" />
      </div>
      <SectionTitle>Overview</SectionTitle>
      <Body700>
        This project was born from my own personal goal of preparing for the JLPT N5 Japanese exam and realizing that there wasn't a single app capable of providing all the study material I needed in a dynamic and engaging way. Most tools focused only on isolated aspects of learning, so the idea behind this project was to create a more complete experience that combines grammar, vocabulary, kana practice, listening exercises, and interactive activities in one place.
      </Body700>
    </div>
  );
}

// ── Problem + My Role ─────────────────────────────────────────────────────────

function ProblemAndRole() {
  return (
    <div className="flex flex-col md:flex-row gap-[40px] items-start justify-center relative shrink-0 w-full">
      {/* Problem */}
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full md:w-[570px]">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
          <div className="h-[74px] relative shrink-0 w-[80px]">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain size-full" src="/Problem.png" />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center w-full">
            <p className="leading-[normal]">Problem</p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[16px] text-black w-full">Around 80% of Japanese study material is spread across different books and disconnected resources.</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[16px] text-black w-full">Most Japanese learning apps fail to provide all the necessary content in a single place to properly prepare for the JLPT N5 exam.</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[16px] text-black w-full">Only a small percentage of these apps are truly free, and even then, the learning experience often lacks enough depth and engagement to study consistently without getting bored.</p>
      </div>
      {/* My Role */}
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full md:w-[570px]">
        <div className="content-stretch flex flex-col gap-[24px] h-[146px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[80px]">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain size-full" src="/My role.png" />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center w-full">
            <p className="leading-[normal]">My role</p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px]">UX Researcher: </span>
          <span className="leading-[32px]">Analyze user behaviors, frustrations, and study habits to understand how students learn Japanese and identify opportunities to improve the overall learning experience.</span>
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px]">UX/UI Designer: </span>
          <span className="leading-[32px]">Design a simple, engaging, and mobile-first learning experience focused on accessibility, usability, and motivation for Japanese students.</span>
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px]">Developer: </span>
          <span className="leading-[32px]">Build a fast, scalable, and responsive PWA experience capable of supporting interactive lessons, progress tracking, and future mobile expansion.</span>
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px]">Tester: </span>
          <span className="leading-[32px]">Continuously validate flows, identify bugs, and test the product across web and mobile devices to ensure a smooth and reliable experience for users.</span>
        </p>
      </div>
    </div>
  );
}

// ── Carrusel ──────────────────────────────────────────────────────────────────

function Carrusel() {
  return (
    <div className="w-full shrink-0">
      <img
        loading="lazy"
        decoding="async"
        alt="App screens"
        style={{
          display: "block",
          position: "relative",
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        src="/carrusel.png"
      />
    </div>
  );
}

// ── Our Process ───────────────────────────────────────────────────────────────

function OurProcess() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[48px] text-black text-center w-[min-content]">
        <p className="leading-[normal]">{`Our process (Me & Claude)`}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] text-black w-full">Throughout the creation of the app, I worked closely with Claude to brainstorm ideas, structure features, refine flows, and challenge decisions — turning the process into a collaborative experiment between product design, learning, and artificial intelligence.</p>
    </div>
  );
}

// ── Our Users ─────────────────────────────────────────────────────────────────

function OurUsers() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <div className="h-[100px] relative shrink-0 w-[80px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain size-full" src="/our users.png" />
      </div>
      <SectionTitle>Our users</SectionTitle>
      <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-start relative shrink-0 w-full">
        {/* Lucas */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full md:w-[563px]">
          <div className="[word-break:break-word] bg-white border-black border-l-[3px] border-solid content-stretch drop-shadow-[0px_4px_2px_rgba(117,117,117,0.25)] flex gap-[10px] items-center leading-[32px] not-italic p-[24px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 text-[20px] text-black w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">💁🏻‍♀️</p>
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-w-px relative">"I've tried so many Japanese apps, but I always end up switching between five different tools just to study for the JLPT N5."</p>
          </div>
          <div className="border border-[#b9b9b9] border-solid content-stretch flex flex-col items-start px-[24px] py-[32px] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[20px] text-black whitespace-pre-wrap">
                <p className="leading-[32px] mb-0">{"Lucas works full-time as a developer and studies Japanese during short breaks throughout the day. He values flexibility and wants quick study sessions he can complete from his phone without losing progress.\n\n"}</p>
                <p className="mb-0"><span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px]">Motivations</span><span className="leading-[32px]">{"\nPracticing Japanese in short, daily sessions\nImproving listening and vocabulary for the JLPT N5 exam\nUsing gamified exercises that make studying feel lighter\n\n"}</span></p>
                <p><span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px]">Frustrations</span><span className="leading-[32px]">{"\nMost apps locking useful content behind subscriptions\nNot finding enough writing and kana practice\nFeeling like many apps focus more on aesthetics than actual learning"}</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Sofia */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full md:w-[563px]">
          <div className="[word-break:break-word] bg-white border-black border-l-[3px] border-solid content-stretch drop-shadow-[0px_4px_2px_rgba(117,117,117,0.25)] flex gap-[10px] min-h-[144px] items-center leading-[32px] not-italic p-[24px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 text-[20px] text-black w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">👨🏻‍💼</p>
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-w-px relative">"I want learning Japanese to feel motivating and interactive, not like I'm reading the same grammar book over and over again."</p>
          </div>
          <div className="border border-[#b9b9b9] border-solid content-stretch flex flex-col items-start px-[24px] py-[32px] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[20px] text-black whitespace-pre-wrap">
                <p className="leading-[32px] mb-0">{"Sofia is a university student who started learning Japanese because of anime and music culture. She studies mostly at night after classes and looks for simple, visual, and interactive ways to stay consistent without feeling overwhelmed.\n\n"}</p>
                <p className="mb-0"><span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px]">Motivations</span><span className="leading-[32px]">{"\nLearning Japanese at her own pace without depending on expensive courses\nHaving all study material centralized in one app\nTracking her progress and feeling motivated through small achievements\n\n"}</span></p>
                <p><span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px]">Frustrations</span><span className="leading-[32px]">{"\nNeeding to switch between multiple apps to practice different skills\nFeeling bored with repetitive grammar exercises\nForgetting vocabulary easily after studying"}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── User Stories ──────────────────────────────────────────────────────────────

function StoryCard({ as_: as, want, soThat }: { as_: string; want: string; soThat: string }) {
  return (
    <div className="bg-white border border-[#e8e8e8] content-stretch flex flex-col items-start p-[24px] relative rounded-[8px] shrink-0 w-full md:w-[500px] drop-shadow-[0px_2px_8px_rgba(0,0,0,0.05)]">
      <p className="[word-break:break-word] font-['Work_Sans',sans-serif] font-semibold leading-[0] relative shrink-0 text-[20px] text-black">
        <span className="leading-[32px]">As a </span>
        <span className="font-normal leading-[32px]">{as}</span>
        <span className="leading-[32px]"><br />I want to </span>
        <span className="font-normal leading-[32px]">{want}</span>
        <span className="leading-[32px]"><br />So that </span>
        <span className="font-normal leading-[32px]">{soThat}</span>
      </p>
    </div>
  );
}

function UserStories() {
  const rows = [
    [
      { as_: "Japanese student,", want: "have vocabulary easily available", soThat: "I can learn it quickly." },
      { as_: "Japanese student,", want: "understand basic grammar", soThat: "I can build sentences correctly." },
    ],
    [
      { as_: "Japanese student,", want: "practice kana writing", soThat: "I can read and write more naturally." },
      { as_: "Japanese student,", want: "listen to pronunciation exercises", soThat: "I can improve my listening skills." },
    ],
    [
      { as_: "Japanese student,", want: "track my study progress", soThat: "I can stay motivated while learning." },
      { as_: "Japanese student,", want: "complete short daily lessons", soThat: "I can study even with limited time." },
    ],
    [
      { as_: "Japanese student,", want: "study from my phone at any time", soThat: "I can practice Japanese wherever I am." },
      { as_: "a Japanese student,", want: "to practice with JLPT-style exams", soThat: "I can feel more prepared for the test." },
    ],
  ];

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-black w-full">
        <div className="flex flex-col font-['EB_Garamond',serif] justify-end relative shrink-0 text-[48px] text-center w-full">
          <p className="leading-[normal]">User storys</p>
        </div>
        <div className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
          <p className="leading-[32px] mb-0">
            For this project, user stories became one of the main tools to help us understand how people would actually interact with the product in their daily lives. Instead of focusing only on features, we focused on real needs, frustrations, motivations, and study habits.{"\n\n"}
          </p>
          <p className="leading-[32px]">
            By building these profiles, we were able to design flows and experiences around actual user behavior — understanding why someone studies Japanese, what blocks their consistency, and what could make learning feel more engaging and accessible. This helped us make more human-centered decisions throughout the entire product design process.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-[24px] items-start relative shrink-0 w-full">
            {row.map((s) => <StoryCard key={s.want} {...s} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    { name: "Dashboard", desc: "The home screen works as a quick overview of the user's learning journey, showing current level, progress, streaks, and study metrics to encourage consistency and motivation." },
    { name: "Exam System", desc: "A dedicated section for mock exams and practice tests inspired by the JLPT N5 structure, allowing users to track results and preparation progress." },
    { name: "Kana Practice", desc: "A focused module for learning and practicing both Hiragana and Katakana through interactive exercises." },
    { name: "Vocabulary", desc: "A section designed to study essential Japanese vocabulary, likely organized by categories or difficulty levels." },
    { name: "Kanji Study", desc: "A feature centered on basic kanji learning, including meanings, readings, and recognition practice." },
    { name: "Writing Exercises", desc: "Interactive activities aimed at improving Japanese writing skills and character memorization." },
    { name: "Listening Practice", desc: "Audio-based exercises created to reinforce pronunciation and listening comprehension." },
    { name: "Mobile-PWA", desc: "The entire experience was designed as a mobile-first Progressive Web App (PWA), allowing users to study Japanese anytime and anywhere through a fast, accessible, and app-like experience directly from their phones." },
    { name: "Profile", desc: "A profile area that centralizes user information, progress tracking, and potentially learning statistics and achievements." },
  ];

  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[48px] items-center not-italic relative shrink-0 text-black w-full">
      <div className="flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] min-w-full relative shrink-0 text-[48px] text-center w-[min-content]">
        <p className="leading-[normal]">Features</p>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full max-w-[1100px]">
        {features.map(({ name, desc }) => (
          <div key={name} className="flex flex-col md:flex-row gap-[8px] md:gap-[24px] items-start justify-center relative shrink-0 w-full">
            <div className="flex flex-col font-['EB_Garamond',serif] justify-center leading-[0] relative shrink-0 text-[28px] sm:text-[40px] w-full md:w-[304px]">
              <p className="leading-[normal]">{name}</p>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[32px] min-w-px relative text-[16px] sm:text-[20px]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Design? Claude Did It First ───────────────────────────────────────────────

function ClaudeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <SectionTitle>Design...? Claude did it first!</SectionTitle>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] text-black w-full">As a Product Designer, admitting this might not be the easiest thing — but around <strong>70% of this app was designed alongside Claude</strong>. Instead of using AI only as a support tool, I turned it into part of my creative and product process: brainstorming ideas, challenging flows, organizing features, refining UX decisions, and helping transform rough concepts into something much more tangible.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] text-black w-full">What surprised me the most wasn't just the speed, but how efficient the collaboration became. It allowed me to iterate faster, explore more possibilities, and spend less time stuck on blank-page moments — focusing more on product thinking and user experience rather than just execution.</p>
      <div className="w-full relative shrink-0">
        <img loading="lazy" decoding="async" alt="Claude and me working together" className="w-full object-contain rounded-[16px]" src="/Claude&me.png" />
      </div>
    </div>
  );
}

// ── Tools ─────────────────────────────────────────────────────────────────────

function Tools() {
  const tools = [
    { name: "Vercel", desc: "We use Vercel as the main deployment platform because it allows us to publish updates quickly, test changes in real time, and maintain a fast and optimized web experience. Since the project started as a mobile-first PWA, having a simple and scalable deployment workflow was essential." },
    { name: "Github", desc: "GitHub became the central place to manage the project structure, version control, and collaboration between iterations. It allowed us to track changes, experiment safely, and organize the evolution of the product while working alongside AI-assisted development workflows." },
    { name: "V.S Code", desc: "Visual Studio Code was the primary development environment used throughout the project. It allowed us to integrate different tools, work directly with the codebase, test interfaces quickly, and connect AI-powered workflows in a much more practical and dynamic way." },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-black w-full">
        <div className="flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] relative shrink-0 text-[48px] text-center w-full">
          <p className="leading-[normal]">Tools</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          Before starting to work on the product itself, I first had to learn how to integrate different tools in order to begin translating ideas into actual screens, flows, and functional integrations.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {tools.map(({ name, desc }) => (
          <div key={name} className="border border-[#b9b9b9] border-solid flex flex-col md:flex-row gap-[16px] md:gap-[64px] items-start md:items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] not-italic relative shrink-0 text-[32px] sm:text-[48px] text-black w-full md:w-[140px]">
              <p className="leading-[normal]">{name}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[32px] min-w-px not-italic relative text-[16px] sm:text-[20px] text-black">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Working Together ──────────────────────────────────────────────────────────

function WorkingTogether() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-black w-full">
        <div className="flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] relative shrink-0 text-[48px] text-center w-full">
          <p className="leading-[normal]">Working together</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          As Claude continued working on the product's codebase, my role became heavily focused on testing and validating the experience over and over again — identifying bugs, inconsistencies, and usability issues across both web and mobile environments.
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          At the same time, even though Claude was generating many of the interfaces, I worked in parallel inside Figma refining screens that didn't fully match the design direction I had in mind. This created a much more collaborative workflow between AI and design, where I could iterate visually while improving overall consistency and usability.
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          To make the process even more efficient, Claude was already connected to Figma through MCP integrations and custom skills. Instead of rebuilding interfaces manually, I could simply provide prompts or updated references, allowing Claude to replicate and adapt my designs directly into the product workflow.
        </p>
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <img loading="lazy" decoding="async" alt="Figma workflow" className="w-full object-contain" src="/Figma.png" />
      </div>
    </div>
  );
}

// ── Finally the Designs ───────────────────────────────────────────────────────

function FinalDesigns() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <SectionTitle>Finally the designs... YAY!</SectionTitle>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] text-black w-full">What I'm about to show next is how Claude and I collaborated throughout the design process. The AI would generate an initial interface or concept, and from there I would refine, adjust, and iterate on the experience — either directly in Figma or through the product's code itself.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] text-black w-full">Instead of replacing the design process, AI became part of it: accelerating exploration, helping visualize ideas faster, and allowing me to focus more deeply on product decisions, usability, and visual consistency.</p>
      <div className="w-full relative shrink-0">
        <img loading="lazy" decoding="async" alt="Final designs" className="w-full object-contain" src="/Pantalla diseños.png" />
      </div>
    </div>
  );
}

// ── Testing ───────────────────────────────────────────────────────────────────

function Testing() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <SectionTitle>Testing (All the time)</SectionTitle>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] text-black w-full">The application was continuously tested throughout the entire development process, primarily by me, allowing for constant iteration and bug fixing across both web and mobile experiences. At the same time, early versions of the product were shared with a small group of users to gather feedback and validate usability decisions.</p>
      <div className="w-full relative shrink-0">
        <img loading="lazy" decoding="async" alt="Testing screens" className="w-full object-contain" src="/testing.png" />
      </div>
    </div>
  );
}

// ── Play Store ────────────────────────────────────────────────────────────────

function PlayStore() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-black w-full">
        <div className="flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] relative shrink-0 text-[48px] text-center w-full">
          <p className="leading-[normal]">We allready have the app.. And now what?</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          I set myself a bigger goal: to provide this application to more people who want to review and reinforce their Japanese in a simple and accessible way.
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          So I started researching what steps would be necessary to eventually publish the application on the Play Store. I already have a developer account set up, but I still feel that Denchi.app needs much more work, refinement, and testing before even considering opening a real beta version on any app marketplace.
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-full">
          If that ever becomes a reality in the near future, let me show you how Denchi.app could be presented so that any user could easily discover and download it.
        </p>
      </div>
      <div className="w-full relative shrink-0">
        <img loading="lazy" decoding="async" alt="Play Store" className="w-full object-contain" src="/Playstore.png" />
      </div>
    </div>
  );
}

// ── Want to Explore ───────────────────────────────────────────────────────────

function WantToExplore() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond',serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[28px] sm:text-[48px] text-black text-center w-full">
        <p className="leading-[normal]">Want to explore Denchi.app?</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[16px] sm:text-[20px] text-black w-full">
        Take a closer look at how the app was imagined to feel, look, and behave as a real product experience — from the first interaction to the way users would discover it on the Play Store. Be kind...<span className="font-['Inter:Bold',sans-serif] font-bold">{` it's still a beta`}</span>. Don't forget that 💛
      </p>
      {/* Phone mockup with video */}
      <div className="relative shrink-0">
        <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(106,106,106,0.25)] flex items-center p-[10px] relative rounded-[32px]">
          <div className="w-[240px] sm:w-[319.515px] aspect-[319.515/622.065] relative rounded-[32px] shrink-0 overflow-hidden">
            <video
              src="/Video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0">
        <div className="[word-break:break-word] bg-black border border-black border-solid content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center not-italic px-[16px] py-[10px] relative rounded-[100px] shrink-0 text-[20px] whitespace-nowrap">
          <p className="leading-[normal] relative shrink-0 text-black">📹</p>
          <a className="block leading-[0] relative shrink-0 text-white no-underline hover:opacity-80 transition-opacity" href="https://denchinonihongo.app/" target="_blank" rel="noopener noreferrer">
            <p className="cursor-pointer decoration-solid leading-[normal] underline">Try yourself</p>
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Conclusions ───────────────────────────────────────────────────────────────

function Conclusions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center px-[32px] py-[16px] relative rounded-[8px] shrink-0 w-full">
      <div className="h-[95px] relative shrink-0 w-[120px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain size-full" src="/conclusions.png" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-black w-full">
        <div className="flex flex-col font-['EB_Garamond',serif] justify-end min-w-full relative shrink-0 text-[40px] text-center w-[min-content]">
          <p className="leading-[normal]">Conclusions</p>
        </div>
        <div className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] sm:text-[20px] w-full max-w-[700px] whitespace-pre-wrap">
          <p className="leading-[32px] mb-0">
            This application was born from a personal problem I wanted to solve for myself. What I never imagined was how many new things I would have to learn in order to make it real — from development and databases to new tools and workflows.{"\n\n"}
          </p>
          <p className="leading-[32px] mb-0">
            But more than anything, this project completely changed the way I see AI in the creative process. For the first time, I truly felt like I was working alongside an AI as if it were an actual teammate: brainstorming ideas, building interfaces, solving problems, and iterating together in real time.{"\n\n"}
          </p>
          <p className="leading-[32px]">
            The experience was both challenging and incredibly rewarding, and the final result exceeded anything I originally imagined. I truly hope <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">DenchiNoNihongo</span> continues to grow and eventually reaches hundreds of students looking for a simple, accessible, and free way to learn Japanese.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Other Projects — exact copy from Payana ───────────────────────────────────

const WAVY = "M331.464 0.380859L312.089 4.19238H24.4297L4.10156 0.380859H331.464Z";

function LaptopCard({ img }: { img: string }) {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28.2px] place-items-start relative row-1">
      <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-0 relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
      <div className="col-1 h-[182.169px] ml-[22.87px] mt-[7.62px] pointer-events-none relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover rounded-tl-[6.098px] rounded-tr-[6.098px] size-full" src={img} />
        <div aria-hidden="true" className="absolute border-[0.762px] border-black border-solid inset-0 rounded-tl-[6.098px] rounded-tr-[6.098px]" />
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[197.41px] relative row-1 w-[335.375px]" />
      <div className="col-1 h-[4.573px] ml-0 mt-[208.85px] relative row-1 w-[335.375px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
          <path d={WAVY} id="Rectangle 5" stroke="black" strokeWidth="0.762215" />
        </svg>
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[197.41px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
    </div>
  );
}

function LaptopGroup({ img }: { img: string }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter_denchi_blur)">
              <ellipse cx="185.98" cy="150.156" fill="white" fillOpacity="0.6" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter_denchi_blur" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LaptopCard img={img} />
    </div>
  );
}

function GruyaGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter_gruya_blur)">
              <ellipse cx="185.98" cy="150.156" fill="white" fillOpacity="0.3" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter_gruya_blur" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_gruya" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {/* Laptop with purple bg + phone overlay */}
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[18px] place-items-start relative row-1">
        <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-[10.2px] relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
        <div className="bg-[#6c52b7] border-[0.762px] border-black border-solid col-1 h-[182.169px] ml-[22.87px] mt-[17.82px] relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]" />
        {/* Phone mockup */}
        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[109.69px] mt-0 place-items-start relative row-1">
          <div className="col-1 h-[202.288px] ml-[5.52px] mt-[7.36px] pointer-events-none relative rounded-[14.712px] row-1 w-[103.903px]">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover rounded-[14.712px] size-full" src={imgThumbGruya} />
            <div aria-hidden="true" className="absolute border-[0.919px] border-black border-solid inset-0 rounded-[14.712px]" />
          </div>
          <div className="border-[0.919px] border-black border-solid col-1 h-[217px] ml-0 mt-0 relative rounded-[14.712px] row-1 w-[115.856px]" />
        </div>
        <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[207.62px] relative row-1 w-[335.375px]" />
        <div className="col-1 h-[4.573px] ml-0 mt-[219.05px] relative row-1 w-[335.375px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
            <path d={WAVY} stroke="black" strokeWidth="0.762215" />
          </svg>
        </div>
        <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[207.62px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
      </div>
    </div>
  );
}

function OtherProjects() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full max-w-[1186px]">
      <div className="flex flex-col font-['Monomakh',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[40px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Other projects</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[42px] items-start relative shrink-0 w-full">
          <OtherProjectCard
            href="/chatty"
            mockup={<LaptopGroup img={imgThumbChatty} />}
            title="Chatty"
            badges={[{ label: "UX/UI", bg: "#688cf8", color: "#fff" }]}
            description="Improved Chatty through a user-centered redesign, focusing on usability, clarity, and seamless interactions."
            meta="Freelance · 2025"
          />
          <OtherProjectCard
            href="/bookup"
            mockup={<LaptopGroup img={imgThumbBookup} />}
            title="Bookup"
            badges={[
              { label: "CASE STUDY", bg: "#ffabe7" },
              { label: "Accessibility", bg: "#688cf8", color: "#fff" },
            ]}
            description="Designed an accessibility-focused experience for an online bookstore, improving navigation and usability for diverse users."
            meta="UTN Project · 2022"
          />
          <OtherProjectCard
            href="/gruya"
            mockup={<GruyaGroup />}
            title="Gruya"
            badges={[
              { label: "CASE STUDY", bg: "#ffabe7" },
              { label: "PERSONAL", bg: "#796ff1", color: "#fff" },
            ]}
            description="Designed Gruya, a meeting room booking app for a challenge, creating intuitive flows and a seamless user experience."
            meta="Case Study · 2022"
          />
        </div>
      </div>
    </div>
  );
}

function BannerFinal() {
  return (
    <a href="mailto:dn.chiapin@gmail.com?subject=Contact%20from%20your%20portfolio" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
      <img src={imgGetInTouch} alt="Get in touch" className="rounded-[8px] w-full object-cover cursor-pointer" />
    </a>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function MyWorkDenchi() {
  return (
    <div className="bg-white flex flex-col relative overflow-x-hidden" data-name="My work / Denchi">
      <div className="flex flex-col items-center gap-[64px] sm:gap-[120px] pt-[40px] pb-[64px] sm:pb-[120px] px-[16px] sm:px-[24px] w-full max-w-[1186px] mx-auto">
        <Hero />
        <FadeIn><Overview /></FadeIn>
        <FadeIn><ProblemAndRole /></FadeIn>
        <FadeIn><Carrusel /></FadeIn>
        <FadeIn><OurProcess /></FadeIn>
        <FadeIn><OurUsers /></FadeIn>
        <FadeIn><UserStories /></FadeIn>
        <FadeIn><Features /></FadeIn>
        <FadeIn><ClaudeSection /></FadeIn>
        <FadeIn><Tools /></FadeIn>
        <FadeIn><WorkingTogether /></FadeIn>
        <FadeIn><FinalDesigns /></FadeIn>
        <FadeIn><Testing /></FadeIn>
        <FadeIn><PlayStore /></FadeIn>
        <FadeIn><WantToExplore /></FadeIn>
        <FadeIn><Conclusions /></FadeIn>
        <FadeIn><OtherProjects /></FadeIn>
        <BannerFinal />
      </div>
    </div>
  );
}
