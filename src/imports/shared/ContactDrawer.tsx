import { useState, useRef, useEffect } from "react";

function Face({ filled, error }: { filled: boolean; error?: boolean }) {
  if (error) return <span className="text-[16px] text-[#FF6465] select-none">:(</span>;
  if (filled) return <span className="text-[16px] text-[#12D778] select-none">:)</span>;
  return null;
}

function SelectField({ name, placeholder, options, value, onChange, error }: {
  name: string; placeholder: string; options: string[];
  value: string; onChange: (name: string, value: string) => void; error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const filtered = query ? options.filter((o) => o.toLowerCase().includes(query.toLowerCase())) : options;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) { setOpen(false); setQuery(""); }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (opt: string) => { onChange(name, opt); setQuery(""); setOpen(false); };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); setOpen(true);
    if (!e.target.value) onChange(name, "");
  };

  return (
    <div ref={ref} className="relative w-full">
      <div className={`w-full border rounded-[8px] px-[16px] py-[14px] flex items-center justify-between bg-white transition-colors ${error ? "border-[#FF6465]" : open ? "border-black" : "border-[#d6d1d1]"}`}>
        <input ref={inputRef} value={open ? query : value} onChange={handleInputChange} onFocus={() => setOpen(true)} placeholder={placeholder}
          className="flex-1 bg-transparent outline-none font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black placeholder-[#aaa] min-w-0" />
        <div className="flex items-center gap-[8px] shrink-0 ml-[8px]">
          <Face filled={!!value} error={error} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-200 cursor-pointer ${open ? "rotate-180" : ""}`}
            onClick={() => { setOpen(!open); inputRef.current?.focus(); }}>
            <path d="M4 6l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white border border-[#d6d1d1] rounded-[8px] mt-[4px] z-10 shadow-md overflow-y-auto max-h-[220px]">
          {filtered.length > 0 ? filtered.map((opt) => (
            <button key={opt} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => handleSelect(opt)}
              className="w-full text-left px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black hover:bg-[#f8f8f8] transition-colors cursor-pointer">
              {opt}
            </button>
          )) : <p className="px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#aaa]">No results</p>}
        </div>
      )}
    </div>
  );
}

const emptyForm = { name: "", email: "", linkedin: "", role: "", currentlyWorking: "", topic: "", linkedinContact: "", schedule: "", timezone: "" };

export function ContactDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [success, setSuccess] = useState(false);

  const handleClose = () => { setForm(emptyForm); setErrors({}); setStatus("idle"); setSuccess(false); onClose(); };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false });
  };
  const handleSelect = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: false });
  };
  const handleSubmit = async () => {
    const required = Object.keys(emptyForm);
    const newErrors: Record<string, boolean> = {};
    required.forEach((f) => { if (!form[f as keyof typeof form].trim()) newErrors[f] = true; });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "672fbd3f-d7a5-49e2-8a30-d95d200ba268",
          subject: "New UX Talk Request — Denchi Portfolio",
          from_name: form.name, name: form.name, email: form.email,
          linkedin: form.linkedin, role: form.role, currently_working: form.currentlyWorking,
          topic: form.topic, linkedin_contact: form.linkedinContact, schedule: form.schedule, timezone: form.timezone,
        }),
      });
      if (res.ok) { setSuccess(true); setStatus("idle"); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-[60] backdrop-enter" onClick={handleClose} />
      <div className="fixed top-0 right-0 h-full w-[560px] bg-white z-[70] flex flex-col shadow-2xl drawer-enter">
        <button onClick={handleClose} className="absolute top-[20px] right-[24px] text-black text-[20px] leading-none cursor-pointer bg-transparent border-none z-10" aria-label="Close">✕</button>

        {/* ERROR */}
        {status === "error" && (
          <div className="flex-1 flex flex-col items-center justify-center gap-[16px] px-[40px]">
            <p className="font-['Monomakh',sans-serif] text-[36px] text-black leading-normal bg-[#FFB3B3] px-[12px] py-[2px] text-center">Something went wrong</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black text-center">Don't get frustrated, we can do it!</p>
            <button onClick={() => setStatus("idle")} className="mt-[8px] bg-black text-white font-['Inter:Regular',sans-serif] font-normal text-[18px] px-[32px] py-[12px] rounded-[100px] hover:bg-[#333] transition-colors cursor-pointer border-none">Try again!</button>
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div className="flex-1 flex flex-col items-center justify-center gap-[16px] px-[40px]">
            <p className="font-['Monomakh',sans-serif] text-[36px] text-black leading-normal bg-[rgba(223,169,234,0.6)] px-[12px] py-[2px] text-center">You are all set!</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black text-center">I'll reach you soon. Talk to you!</p>
            <button onClick={handleClose} className="mt-[8px] bg-black text-white font-['Inter:Regular',sans-serif] font-normal text-[18px] px-[32px] py-[12px] rounded-[100px] hover:bg-[#333] transition-colors cursor-pointer border-none">Back to home</button>
          </div>
        )}

        {/* FORM */}
        {!success && status !== "error" && (
          <>
            <div className="px-[40px] pt-[24px] pb-[16px] shrink-0">
              <div className="flex gap-[8px] items-center mb-[8px]">
                <span className="bg-[rgba(223,169,234,0.6)] font-['Monomakh',sans-serif] text-[32px] text-black px-[10px] py-[2px] leading-normal">Complete</span>
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[28px] text-black">your info</span>
              </div>
              <div className="flex gap-[8px] items-center">
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[24px] text-black">so I can contact you!...</span>
                <span className="bg-[#ebfaaa] font-['Monomakh',sans-serif] text-[28px] text-black px-[10px] py-[2px] leading-normal whitespace-nowrap">Let's talk</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-[40px] py-[8px] flex flex-col gap-[8px]">
              {[
                { name: "name", placeholder: "Name & surname *" },
                { name: "email", placeholder: "E-mail *" },
                { name: "linkedin", placeholder: "LinkedIn *" },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-[4px]">
                  <div className="relative">
                    <input name={f.name} value={form[f.name as keyof typeof form]} onChange={handleInput} placeholder={f.placeholder}
                      className={`w-full border rounded-[8px] px-[16px] pr-[40px] py-[14px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black placeholder-[#aaa] outline-none transition-colors ${errors[f.name] ? "border-[#FF6465]" : "border-[#d6d1d1] focus:border-black"}`} />
                    <div className="absolute right-[14px] top-1/2 -translate-y-1/2">
                      <Face filled={!!form[f.name as keyof typeof form]} error={errors[f.name]} />
                    </div>
                  </div>
                  {errors[f.name] && <span className="text-[#FF6465] text-[12px] font-['Inter:Regular',sans-serif] pl-[4px]">This field is required</span>}
                </div>
              ))}

              {[
                { name: "role", placeholder: "Role *", options: ["Product Designer", "UX/UI Designer", "UX Designer", "Developer", "QA", "Other"] },
                { name: "currentlyWorking", placeholder: "Are you currently working? *", options: ["Yes, full-time", "Yes, freelancing", "No, I'm looking", "No, studying"] },
                { name: "topic", placeholder: "What would you like to talk about? *", options: ["UX / Product Design", "Career advice", "Collaboration on a project", "Mentorship", "Just chatting", "Other"] },
                { name: "linkedinContact", placeholder: "Are you comfortable being contacted via LinkedIn? *", options: ["Yes, go ahead!", "I prefer email", "Either works for me"] },
                { name: "schedule", placeholder: "What time works best for you? *", options: ["Morning (9am – 12pm)", "Afternoon (12pm – 5pm)", "Evening (5pm – 8pm)", "Flexible"] },
                { name: "timezone", placeholder: "What's your time zone? *", options: ["GMT-12 (Baker Island)","GMT-11 (Samoa, Niue)","GMT-10 (Hawaii)","GMT-9:30 (Marquesas Islands)","GMT-9 (Alaska)","GMT-8 (PST — Los Angeles, Vancouver)","GMT-7 (MST — Denver, Phoenix)","GMT-6 (CST — Mexico City, Chicago)","GMT-5 (EST — New York, Toronto, Bogotá, Lima)","GMT-4:30 (Venezuela)","GMT-4 (AST — Halifax, Caracas)","GMT-3:30 (Newfoundland)","GMT-3 (Buenos Aires, São Paulo, Montevideo)","GMT-2 (South Georgia)","GMT-1 (Azores, Cape Verde)","GMT+0 (London, Lisbon, Reykjavik)","GMT+1 (Madrid, Paris, Berlin, Rome, Lagos)","GMT+2 (Cairo, Athens, Johannesburg, Helsinki)","GMT+3 (Moscow, Istanbul, Nairobi, Riyadh)","GMT+3:30 (Tehran)","GMT+4 (Dubai, Baku, Tbilisi)","GMT+4:30 (Kabul)","GMT+5 (Karachi, Tashkent)","GMT+5:30 (Mumbai, Kolkata, Chennai)","GMT+5:45 (Kathmandu)","GMT+6 (Dhaka, Almaty)","GMT+6:30 (Yangon)","GMT+7 (Bangkok, Jakarta, Hanoi)","GMT+8 (Beijing, Singapore, Perth, Manila)","GMT+8:45 (Eucla)","GMT+9 (Tokyo, Seoul, Yakutsk)","GMT+9:30 (Adelaide, Darwin)","GMT+10 (Sydney, Melbourne, Vladivostok)","GMT+10:30 (Lord Howe Island)","GMT+11 (Solomon Islands, New Caledonia)","GMT+12 (Auckland, Fiji, Kamchatka)","GMT+12:45 (Chatham Islands)","GMT+13 (Tonga, Samoa)","GMT+14 (Line Islands)"] },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-[4px]">
                  <SelectField name={f.name} placeholder={f.placeholder} options={f.options} value={form[f.name as keyof typeof form]} onChange={handleSelect} error={errors[f.name]} />
                  {errors[f.name] && <span className="text-[#FF6465] text-[12px] font-['Inter:Regular',sans-serif] pl-[4px]">This field is required</span>}
                </div>
              ))}
            </div>

            <div className="px-[40px] py-[12px] shrink-0 border-t border-[#ebebeb]">
              <div className="flex justify-end gap-[12px]">
                <button onClick={handleClose} className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black border border-black px-[16px] h-[44px] flex items-center rounded-[100px] hover:bg-black hover:text-white transition-colors cursor-pointer bg-transparent whitespace-nowrap">Cancel</button>
                <button onClick={handleSubmit} disabled={status === "loading"} className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-white bg-black px-[16px] h-[44px] flex items-center rounded-[100px] hover:bg-[#333] transition-colors cursor-pointer border-none whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === "loading" ? "Sending..." : "Send response"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
