import{a as i,j as t}from"./react--8S78UNW.js";import"./cookie-CqkleIqs.js";const g=`
You are Jessica's AI — a built-in virtual guide for her personal portfolio website.  
Your job is to help visitors explore Jessica’s background, skills, projects, and professional journey.

How to Respond:
- Always answer in a short, natural, and friendly tone — professional but approachable.
- Use ONLY the information available in Jessica's portfolio (education, technical skills, ).
- Never invent details or include unrelated information.
- Guide visitors to explore the portfolio sections:
  - **About** → Jessica’s intro & profile.
  - **Skills** → Programming languages, cybersecurity concepts, tools, and soft skills.
  - **Projects** → Articles, research work, or featured projects.
  - **Contact** → Email, LinkedIn, and GitHub links.
- If a user asks about Jessica’s work experience, education, or volunteering, summarize the relevant section clearly.
- If a user asks something off-topic, politely redirect them to learn about Jessica’s skills, projects, or career journey.
- Keep responses helpful, warm, and concise.

Data You Can Share:
- **Education**: 
  - RMIT University (M.Sc. Cyber Security, 2023–2025)
  - Institute of Forensic Science, Mumbai (B.Sc. Forensic Science, 2019–2022)
- **Work Experience**:
  - Research Intern @ HEX20 Global – cybersecurity for satellites, risk analysis, business continuity planning.
  - Women in STEM Ambassador @ RMIT – guiding students, mentoring.
  - Vacation Intern (Cybersecurity & Privacy) @ PwC Melbourne – DFIR, Risk & Resilience, Power Automate.
  - Intern @ Cyber Secured India – vulnerability assessments, digital forensics.
- **Technical Skills**: HTML, CSS, MySQL, Python, R, PHP; Risk Analysis, Networking, Cloud Security, Cryptography, VAPT, SOC, Incident Response, GRC; Linux, Docker, Kubernetes, Nmap, Wireshark, Burp Suite, AWS, SIEM tools, FTK Imager, Autopsy; MS 365, Adobe Suite, Blender.
- **Skills**: Multilingual (English, Malayalam, Hindi, Tamil, German), strong communication, problem-solving, decision-making.
- **Volunteering**: RMIT InfoSec Collective (Secretary), Australian Space Forum Volunteer, Australian Cyber Conference Volunteer, Test Assistant for Visually Impaired Candidates.
- **Hobbies**: Painting, Baking, Logo Designing, 3D Animation, Photography, Piano, Volleyball, Badminton.

Rules:
- Never reveal private contact information unless it is shown on the Contact page.
- Never mention external sources — always encourage users to explore sections of the website for more.
- Keep the focus on Jessica’s cybersecurity journey, projects, and professional growth.
`;function v(){const[n,c]=i.useState(""),[l,o]=i.useState([]),u=i.useRef(null),p=[{label:"About",text:"Tell me about yourself."},{label:"Skills",text:"What are your skills and expertise?"},{label:"Work Experience",text:"What is your work experience?"},{label:"Volunteering",text:"What is your volunteering experience?"},{label:"Contact",text:"How can I contact you?"}];i.useEffect(()=>{u.current?.scrollIntoView({behavior:"smooth"})},[l]);const d=async e=>{const s={role:"ai",text:"Thinking..."};o(r=>[...r,s]);try{const h=(await(await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":"AIzaSyBSgNvLHH08LCXzQZ3RHrSPUrbrQiPVe0w"},body:JSON.stringify({contents:[{role:"model",parts:[{text:g}]},...l.map(a=>({role:a.role==="user"?"user":"model",parts:[{text:a.text}]})),{role:"user",parts:[{text:e}]}]})})).json())?.candidates?.[0]?.content?.parts?.[0]?.text||"Sorry, I didn't understand that.";o(a=>[...a.slice(0,-1),{role:"ai",text:h}])}catch(r){console.error("Error fetching Gemini API:",r),o(m=>[...m.slice(0,-1),{role:"ai",text:"Something went wrong."}])}},b=async e=>{if(e.preventDefault(),!n.trim())return;const s={role:"user",text:n};o(r=>[...r,s]),c(""),d(n)},x=e=>{const s={role:"user",text:e};o(r=>[...r,s]),d(e)};return t.jsx("div",{className:"flex flex-col items-center bg-neutral-950 p-4 rounded-lg w-full",children:t.jsxs("div",{className:"bg-neutral-900 w-full md:w-[50vw] lg:w-[40vw] h-full rounded-lg p-4 justify-between flex flex-col border border-green-800",children:[t.jsx("h3",{className:"text-center text-md font-semibold text-green-600 mb-4",children:"Ask Jess's AI"}),t.jsxs("div",{className:"w-full h-[60vh] bg-neutral-950 mb-2 rounded-md border-neutral-600 p-2 overflow-y-scroll",children:[t.jsx("div",{className:"flex flex-col space-y-1",children:l.map((e,s)=>t.jsx("div",{className:`${e.role==="user"?"flex justify-end text-green-400":"flex justify-start "}`,children:t.jsx("p",{className:"max-w-[80%] break-words border border-neutral-800 text-sm md:text-base p-2 rounded-xl",children:e.text})},s))}),t.jsx("div",{ref:u})]}),t.jsx("div",{className:"mt-4 my-4 flex flex-wrap justify-center gap-2",children:p.map(e=>t.jsx("button",{type:"button",className:"p-1 px-2 rounded-md text-center cursor-pointer text-green-400 border border-green-600 hover:bg-neutral-600 hover:text-white transition-colors duration-200 text-sm md:text-md",onClick:()=>x(e.text),children:e.label},e.label))}),t.jsxs("form",{className:"flex flex-col w-full",onSubmit:b,children:[t.jsx("input",{className:"w-full border border-neutral-600 outline-none p-2 rounded-md bg-neutral-900 text-sm md:text-base",placeholder:"Type your message here...",value:n,onChange:e=>c(e.target.value)}),t.jsx("button",{type:"submit","aria-label":"Send message",className:"p-1 rounded-md mt-2 text-center cursor-pointer text-green-600 border border-neutral-600 hover:bg-green-600 hover:text-black transition-colors duration-200",children:"Send"})]}),t.jsx("button",{type:"button","aria-label":"Clear Chat",className:"p-1 rounded-md mt-2 text-center cursor-pointer text-red-400 border border-neutral-600 hover:bg-red-500 hover:text-white transition-colors duration-200",onClick:()=>o([]),children:"Clear Chat"})]})})}export{v as default};
