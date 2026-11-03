import React from "react";
import { 
  Shield, 
  Code, 
  Cpu, 
  ShoppingCart, 
  ChevronRight, 
  GraduationCap, 
  Briefcase,
  LucideIcon 
} from "lucide-react";

// --- Types ---
interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  icon: LucideIcon;
  points: string[];
  // We store specific color classes to ensure Tailwind scans them correctly
  colors: {
    timelineBg: string; // The circle background
    roleText: string;   // The role title color
    bulletIcon: string; // The chevron color
  };
}

interface EducationItem {
  degree: string;
  school: string;
  date: string;
  borderColor: string; // e.g., "border-red-600"
}

// --- Data ---
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Best Buy",
    role: "Tech Advisor",
    date: "October 2026 - Present",
    icon: Code,
    colors: { timelineBg: "bg-blue-600", roleText: "text-blue-600", bulletIcon: "text-blue-600" },
    points: [
      "Assisted customers with technology solutions, providing expert guidance and support to ensure optimal product performance and customer satisfaction.",
      "Organized and maintained inventory of technology products, ensuring availability and proper stock levels to meet customer demand.",
      "Familiarized myself with Best Buy's product offerings and technology solutions to provide informed recommendations to customers.",
      "Regularly offered Best Buy's memberships and credit card options to customers, enhancing their overall shopping experience and loyalty.",
    ]
  },
  {
    company: "Dean's Cards",
    role: "Office Assistant", // Updated from Cybersecurity Analyst to match resume
    date: "July 2025 - August 2026",
    icon: Shield,
    colors: { timelineBg: "bg-red-600", roleText: "text-red-600", bulletIcon: "text-red-600" },
    points: [
      "Satisfied customer needs and inquiries over the phone and in person.",
      "Routinely organized and cleaned the office and kitchen space for optimal work conditions.",
      "Maximized website efficiency by regularly updating incoming product listings and repairing technical errors.",
      "Trained new employees on office procedures and best practices.",
      "Familiarized myself with Dean's Cards' products and sorting system to better help customers and fellow employees."
    ]
  },
  {
    company: "Curiosity Advertising",
    role: "Marketing Intern",
    date: "Jan 2024 - May 2024",
    icon: Code,
    colors: { timelineBg: "bg-green-700", roleText: "text-green-700", bulletIcon: "text-green-700" },
    points: [
      "Assisted in the development and execution of marketing campaigns to increase brand visibility and customer engagement.",
      "Efficiently scheduled meetings and coordinated calendars for professional and client interactions, and filming dates.", 
      "Achieved regular client satisfaction through effective communication and timely delivery of marketing materials.",
      "Assisted production on sets and supported all departments during filming."
    ]
  },
  {
    company: "Average Joe Films",
    role: "Assistant Director", // Updated from Software Developer to match resume
    date: "October 2024 - August 2026",
    icon: Cpu,
    colors: { timelineBg: "bg-cyan-600", roleText: "text-cyan-600", bulletIcon: "text-cyan-600" },
    points: [
      "Assisted the director in planning and executing film production schedules.",
      "Coordinated with various departments to ensure smooth operations on set.",
      "Helped manage cast and crew logistics, including scheduling and transportation.",
      "Secured locations, equipment, catering, transportation, and other necessary resources for film production."
    ]
  },
  {
    company: "TG Studios",
    role: "Administrative Assistant", // Updated from Cybersecurity Engineering to match resume
    date: "August 2022 - April 2025",
    icon: Shield,
    colors: { timelineBg: "bg-cyan-600", roleText: "text-cyan-600", bulletIcon: "text-cyan-600" },
    points: [
      "Assisted in the day-to-day administrative operations of the studio, including scheduling, correspondence, and record-keeping.",
      "Coordinated with various departments to ensure smooth workflow and effective communication.",
      "Managed office supplies, equipment, and other resources to support the studio's operations.",
      "Provided support for special projects and events as needed.",
      "Handled personal and professional delivery and pickup operations efficiently."
    ]
  },
  {
    company: "Cindependent Film Festival",
    role: "Event Assistant",
    date: "September 2023 - September 2025",
    icon: ShoppingCart,
    colors: { timelineBg: "bg-red-600", roleText: "text-red-600", bulletIcon: "text-red-600" },
    points: [
      "Assisted in the planning and execution of film festival events, ensuring smooth operations and attendee satisfaction.",
      "Coordinated with various departments and vendors to manage event logistics, including scheduling, transportation, and catering.",
      "Provided support for special projects and promotional activities as needed.",
      "Attended front desk and organization booths to welcome and inform incoming attendees."
    ]
  }
];

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Arts and Science in Digital Media Collaboration",
    school: "University of Cincinnati",
    date: "August 2022 - April 2026",
    borderColor: "border-red-600"
  },
  {
    degree: "Certificate in Screenwriting",
    school: "University of Cincinnati",
    date: "August 2022 - April 2026",
    borderColor: "border-gray-800"
  },
  {
    degree: "Certificate in Directing",
    school: "University of Cincinnati",
    date: "August 2022 - April 2026",
    borderColor: "border-gray-800"
  }
];

// --- Component ---
export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl animate-slide-up p-4">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">
          My professional journey and education, starting with the most recent.
        </p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Work Experience
        </h2>
        
        {/* Timeline Container */}
        <div className="border-l-2 border-gray-200 ml-3 space-y-16 pl-8 relative pb-2">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative group">
              {/* Timeline Icon */}
              <div className={`absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm ${job.colors.timelineBg}`}>
                <job.icon className="w-3.5 h-3.5 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
              <div className={`${job.colors.roleText} font-medium mb-1`}>{job.role}</div>
              <div className="text-sm text-gray-500 mb-4">{job.date}</div>
              
              <ul className="space-y-3">
                {job.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3 text-gray-600">
                    <ChevronRight className={`w-5 h-5 shrink-0 mt-0.5 ${job.colors.bulletIcon}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION_DATA.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg border-l-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 ${edu.borderColor}`}
            >
              <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
              <div className="text-gray-700 font-medium">{edu.school}</div>
              <div className="text-sm text-gray-400 mt-2">{edu.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
