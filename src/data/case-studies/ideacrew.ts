import type { CaseStudy } from "@/types/case-study";

export const ideacrewCaseStudy: CaseStudy = {
  slug: "ideacrew",
  title: "IDEACREW",
  subtitle:
    "A Centralized Platform for Finding Projects and Building Student Teams",
  summary:
    "A web-based collaboration platform that helps Computer Science students discover project opportunities, find teammates based on relevant skills, and manage project applications in one place.",
  category: "Final-year Capstone Project",
  status: "Deployed full-stack academic prototype",

  overview: [
    {
      label: "Timeline",
      value: "November 2025 – May 2026",
    },
    {
      label: "Role",
      value: "UX/UI Designer & Full-Stack Developer",
    },
    {
      label: "Team",
      value: "Individual Project",
    },
    {
      label: "Platform",
      value: "Responsive Web Application",
    },
    {
      label: "Tools",
      value:
        "Figma, Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, PostgreSQL",
    },
    {
      label: "Status",
      value: "Deployed full-stack academic prototype",
    },
  ],

  background: {
    id: "background",
    eyebrow: "The Background",
    title: "Project opportunities existed—but they were difficult to find.",
    paragraphs: [
      "Project announcements were usually shared across disconnected communication channels such as LINE groups, Facebook groups, Discord servers, and private chats.",
      "These channels were useful for communication, but they were not designed for structured project discovery or recruitment.",
      "Students could not search by skills, roles, or interests, while project owners had no central workflow for reviewing applicants and managing team capacity.",
    ],
  },

  problem: {
    id: "problem",
    eyebrow: "The Problem",
    title:
      "There was no structured and reliable way to discover and manage student project opportunities.",
    bullets: [
      "Opportunities were easy to miss.",
      "Posts could not be searched by skills, roles, or interests.",
      "Students could not clearly track application status.",
      "Project owners managed candidates across scattered conversations.",
      "Administrators lacked a central moderation workflow.",
    ],
  },

  goals: {
    id: "goals",
    eyebrow: "Project Goals",
    title: "Create one trusted place for project discovery and recruitment.",
    bullets: [
      "Help students discover suitable projects and apply for relevant roles.",
      "Help project owners publish structured information and manage applicants.",
      "Provide administrators with a clear approval workflow.",
      "Connect students, skills, and project opportunities in one platform.",
    ],
  },

  role: {
    id: "role",
    eyebrow: "My Role",
    title: "I owned the end-to-end design and development process.",
    bullets: [
      "Explored the existing recruitment problem",
      "Gathered and analyzed requirements",
      "Defined product scope and user roles",
      "Created information architecture and user flows",
      "Designed wireframes and high-fidelity interfaces",
      "Built responsive student and administrator interfaces",
      "Designed and connected the Supabase/PostgreSQL database",
      "Implemented project, application, membership, and approval workflows",
      "Integrated TU Account authentication",
      "Implemented route protection and permission checks",
      "Tested the main workflows",
      "Deployed the application on Vercel",
    ],
  },

  discovery: {
    id: "discovery",
    eyebrow: "Discovery and Requirements",
    title: "The product direction came from recurring workflow problems.",
    bullets: [
      "My own experience as a Computer Science student",
      "Existing project announcements across student communication channels",
      "Conversations with students about project discovery and team formation",
      "Requirements and feedback from my project advisor",
      "Information from faculty staff about project verification",
      "Feedback received during project presentations",
    ],
  },

  insights: [
    {
      title: "Opportunities existed, but students could not reliably find them",
      finding:
        "Project announcements were spread across multiple groups and platforms.",
      response:
        "Create a centralized Project Discovery experience with search and filtering.",
    },
    {
      title: "Roles and skills needed to be structured",
      finding:
        "Recruitment posts often lacked clear positions, required skills, and team capacity.",
      response:
        "Allow project owners to define positions, skills, qualifications, and capacity.",
    },
    {
      title: "Applicants needed visibility after applying",
      finding:
        "Applications made through chat did not provide consistent status or history.",
      response:
        "Create application tracking, status updates, history, and notifications.",
    },
    {
      title: "Trust required moderation",
      finding:
        "Unverified projects could contain incomplete or inappropriate information.",
      response:
        "Require administrator approval before a project becomes public.",
    },
    {
      title: "One student could have multiple responsibilities",
      finding: "A student could own one project while applying to another.",
      response:
        "Use one contextual student account and keep administrator access separate.",
    },
  ],

  informationArchitecture: {
    description:
      "The platform was organized around the tasks each user needed to complete.",
    groups: [
      {
        title: "Student Navigation",
        items: [
          "Discover Projects",
          "Project Detail",
          "Create Project",
          "My Projects",
          "Application History",
          "Notifications",
          "Profile",
        ],
      },
      {
        title: "Project Owner Functions",
        items: [
          "View created projects",
          "Check approval status",
          "Edit project information",
          "Review applicants",
          "Accept or reject applicants",
          "View project members",
          "Monitor recruitment progress",
          "Close recruitment",
        ],
      },
      {
        title: "Administrator Navigation",
        items: [
          "Admin Login",
          "Dashboard",
          "Pending Project Requests",
          "Project Review",
          "Approval and Rejection",
          "Category Management",
          "Skill Management",
        ],
      },
    ],
  },

  userFlows: [
    {
      title: "TU Account Login",
      steps: [
        "Enter TU username and password",
        "Send credentials to the TU Login API route",
        "Verify credentials with the university API",
        "Find or create the student profile in Supabase",
        "Update profile information",
        "Enter the authenticated platform",
      ],
    },
    {
      title: "Create and Publish a Project",
      steps: [
        "Enter project details, roles, skills, and capacity",
        "Validate the information",
        "Save the project with pending approval status",
        "Administrator reviews the submission",
        "Approve or reject the project",
        "Approved project appears in Project Discovery",
      ],
    },
    {
      title: "Discover and Apply to a Project",
      steps: [
        "Browse or filter available projects",
        "Open the project detail page",
        "Review open positions and required skills",
        "Select a position",
        "Submit an application message",
        "Create the application with pending status",
        "Notify the project owner",
      ],
    },
    {
      title: "Review and Manage Applicants",
      steps: [
        "Open the applicant list",
        "Review profile, skills, and application message",
        "Accept or reject the application",
        "Update application status",
        "Add accepted applicant as a project member",
        "Update capacity and recruitment status",
        "Send a notification",
      ],
    },
  ],

  systemStates: {
    id: "system-states",
    eyebrow: "Designing for System States",
    title: "The interface had to reflect real business logic.",
    bullets: [
      "Pending administrator review",
      "Approved",
      "Rejected",
      "Open for recruitment",
      "Partially filled",
      "Fully filled",
      "Closed",
    ],
    paragraphs: [
      "The Apply button is hidden when recruitment is closed.",
      "Pending projects do not appear in public discovery.",
      "Accepted applicants become project members.",
      "Recruitment closes automatically when all positions are filled.",
    ],
  },

  designSystem: {
    id: "design-system",
    eyebrow: "Design System",
    title: "A component-based system connected Figma and implementation.",
    bullets: [
      "Buttons",
      "Form controls",
      "Search and filters",
      "Project cards",
      "Status badges",
      "Dialogs and modals",
      "Navigation",
      "Tables and lists",
      "Notifications",
      "Empty states",
      "Loading and error states",
    ],
  },

  technical: {
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Zod",
      "React Hook Form",
      "Git",
      "GitHub",
      "Vercel",
    ],
    architecture:
      "UI → Action or API Route → Service → Repository → Supabase Database",
    dataAreas: [
      "User profiles",
      "Projects",
      "Project positions",
      "Position skills",
      "Applications",
      "Project members",
      "Notifications",
      "Project categories",
      "Profile links",
      "Project approval status",
    ],
  },

  authentication: {
    id: "authentication",
    eyebrow: "Authentication and Permissions",
    title: "Student and administrator access were intentionally separated.",
    bullets: [
      "Students sign in through TU Account",
      "Administrators use a separate login flow and session",
      "Routes under /admin require a valid administrator session",
      "Only project owners can manage their projects",
      "Owners cannot apply to their own projects",
      "Duplicate applications are blocked",
      "Closed projects cannot receive applications",
      "Full positions cannot accept additional members",
    ],
  },

  challenges: [
    {
      title: "Managing Multiple Roles",
      challenge:
        "A student could be both an applicant and a project owner, while administrators required separate access.",
      decision:
        "Use one contextual student account and keep administrator authentication separate.",
      result:
        "Students can discover, apply, and manage projects without switching accounts.",
    },
    {
      title: "Keeping Recruitment Data Consistent",
      challenge:
        "Accepting an applicant affects application status, membership, capacity, project status, and notifications.",
      decision:
        "Separate business logic into service and repository layers and validate capacity before acceptance.",
      result: "Application, membership, and recruitment states remain aligned.",
    },
    {
      title: "Connecting Design with Real System Logic",
      challenge:
        "The interface had to represent real approval, application, and recruitment states.",
      decision:
        "Define permissions and system states before finalizing interface actions.",
      result:
        "Users see actions that match their permissions and the current project state.",
    },
  ],

  testing: {
    id: "testing",
    eyebrow: "Testing and Iteration",
    title: "The main workflows were tested during development.",
    bullets: [
      "TU Account login",
      "Profile creation and editing",
      "Project discovery",
      "Project creation",
      "Administrator approval",
      "Project application",
      "Applicant acceptance and rejection",
      "Notifications",
      "Project status updates",
      "Responsive layouts",
    ],
    paragraphs: [
      "Testing was conducted on a limited scale as part of an academic project.",
      "I do not claim statistically significant improvements in conversion, satisfaction, or task completion.",
    ],
  },

  outcome: {
    id: "outcome",
    eyebrow: "Outcome",
    title: "The concept became a deployed full-stack academic prototype.",
    bullets: [
      "TU Account authentication",
      "Student profiles and skills",
      "Project discovery and filtering",
      "Structured project creation",
      "Administrator moderation",
      "Position-based applications",
      "Application history",
      "Applicant management",
      "Project membership",
      "Notifications",
      "Recruitment capacity tracking",
      "Automatic project closure",
      "Responsive interfaces",
    ],
    paragraphs: [
      "The application was deployed on Vercel as an academic prototype.",
      "It is not an official university platform.",
    ],
  },

  learnings: {
    id: "learnings",
    eyebrow: "What I Learned",
    title: "Strong UX decisions need to reflect system behavior.",
    bullets: [
      "UX decisions must reflect permissions, states, and data relationships",
      "Complex workflows need clear states",
      "Technical knowledge improves design decisions",
      "End-to-end ownership requires prioritization",
    ],
  },

  nextSteps: {
    id: "next-steps",
    eyebrow: "Next Steps",
    title: "How I would continue improving the platform.",
    bullets: [
      "Conduct structured usability testing with more participants",
      "Improve accessibility across major workflows",
      "Add product analytics and usage tracking",
      "Develop a teammate recommendation system",
      "Integrate automated university verification",
      "Test performance with larger datasets and concurrent users",
      "Add richer communication tools",
      "Refine mobile interactions",
    ],
  },

  reflection: {
    id: "reflection",
    eyebrow: "Reflection",
    title: "A strong digital product is more than a polished interface.",
    paragraphs: [
      "It requires understanding the user’s problem, structuring complex information, defining system behavior, managing technical constraints, and ensuring that every interaction can be implemented reliably.",
      "This project represents how I work across UX/UI design and full-stack development to turn an idea into a functional product.",
    ],
  },
};
