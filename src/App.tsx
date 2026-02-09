import { ConceptCard } from "@/components/ConceptCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SetupStepCard } from "@/components/SetupStepCard";
import { Timeline } from "@/components/Timeline";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  // Section 1 - Environment Setup Data
  const setupSteps = [
    {
      title: "Install Node.js",
      goal: "Enable JavaScript to run on your local machine.",
      requiredActions: [
        "Download Node.js (LTS version)",
        "Install Node.js",
        "Verify installation using terminal",
      ],
      helpfulLinks: [
        { text: "Node.js Official Website", url: "https://nodejs.org" },
        {
          text: "Node.js Installation Guide",
          url: "https://nodejs.org/en/learn/",
        },
      ],
      validationChecklist: [
        "node -v returns a version number",
        "npm -v returns a version number",
      ],
    },
    {
      title: "Code Editor Setup",
      goal: "Set up a professional coding environment.",
      requiredActions: [
        "Download VS Code",
        "Install essential extensions",
        "Configure settings",
      ],
      helpfulLinks: [
        { text: "VS Code Download", url: "https://code.visualstudio.com" },
      ],
      validationChecklist: [
        "VS Code opens successfully",
        "Extensions are installed",
      ],
    },
    {
      title: "Terminal Basics",
      goal: "Learn essential terminal commands for development.",
      requiredActions: [
        "Open terminal",
        "Learn basic navigation",
        "Practice file operations",
      ],
      helpfulLinks: [{ text: "Terminal Tutorial", url: "#" }],
      validationChecklist: [
        "Can navigate directories",
        "Can list files",
        "Can create folders",
      ],
    },
    {
      title: "Project Bootstrap",
      goal: "Create your first JavaScript project.",
      requiredActions: [
        "Create project folder",
        "Initialize npm project",
        "Create first JS file",
      ],
      helpfulLinks: [{ text: "npm Docs", url: "https://docs.npmjs.com" }],
      validationChecklist: ["package.json exists", "First JS file runs"],
    },
  ];

  // Section 2 - Core Fundamentals Data
  const concepts = [
    {
      title: "Variables & Data Types",
      purpose: "Store and manipulate data in your programs",
      whyThisMatters:
        "Variables are the foundation of all programming - they let you store information that your program can work with.",
      whatYouNeedToKnow: [
        "Variable declaration (let, const, var)",
        "Basic data types (string, number, boolean)",
        "Type conversion basics",
      ],
      practicalUsage: [
        "Store user input",
        "Keep track of game scores",
        "Hold configuration values",
      ],
      commonMistakes: [
        "Using var instead of let/const",
        "Not initializing variables",
        "Mixing data types accidentally",
      ],
      whenToLearnMore: "After building your first interactive web page.",
    },
    {
      title: "Functions",
      purpose: "Reusable blocks of code that perform specific tasks",
      whyThisMatters:
        "Functions are the basic building blocks of any JavaScript application.",
      whatYouNeedToKnow: [
        "Function declaration",
        "Parameters",
        "Return values",
      ],
      practicalUsage: ["Handle user actions", "Process data", "Reuse logic"],
      commonMistakes: [
        "Overcomplicating function logic",
        "Forgetting to return values",
      ],
      whenToLearnMore: "After building your first backend API.",
    },
    {
      title: "Objects & Arrays",
      purpose: "Organize and structure complex data",
      whyThisMatters:
        "Objects and arrays let you work with collections of related data efficiently.",
      whatYouNeedToKnow: [
        "Object creation and properties",
        "Array methods (push, pop, map, filter)",
        "Accessing nested data",
      ],
      practicalUsage: [
        "Store user profiles",
        "Manage shopping carts",
        "Handle API responses",
      ],
      commonMistakes: [
        "Confusing objects and arrays",
        "Mutating data unexpectedly",
      ],
      whenToLearnMore: "When building your first full-stack application.",
    },
    {
      title: "Control Flow",
      purpose: "Make decisions and repeat actions in your code",
      whyThisMatters:
        "Control flow lets your program respond to different conditions and automate repetitive tasks.",
      whatYouNeedToKnow: [
        "If/else statements",
        "Switch statements",
        "For loops and while loops",
      ],
      practicalUsage: [
        "Validate user input",
        "Process lists of items",
        "Implement game logic",
      ],
      commonMistakes: ["Infinite loops", "Missing else conditions"],
      whenToLearnMore: "After building your first data processing script.",
    },
    {
      title: "Asynchronous Basics",
      purpose: "Handle operations that take time to complete",
      whyThisMatters:
        "Modern apps need to handle network requests, user interactions, and timers without freezing.",
      whatYouNeedToKnow: [
        "Callbacks basics",
        "Promises introduction",
        "Async/await syntax",
      ],
      practicalUsage: [
        "Fetch data from servers",
        "Handle user interactions",
        "Load external resources",
      ],
      commonMistakes: ["Not handling errors", "Blocking the main thread"],
      whenToLearnMore: "When building your first API client.",
    },
    {
      title: "Modules & Imports",
      purpose: "Organize code into reusable, maintainable pieces",
      whyThisMatters:
        "Modules help you build larger applications by keeping code organized and reusable.",
      whatYouNeedToKnow: [
        "Import/export syntax",
        "Default vs named exports",
        "Module structure",
      ],
      practicalUsage: [
        "Share code between files",
        "Use external libraries",
        "Organize large projects",
      ],
      commonMistakes: ["Mixing import styles", "Circular dependencies"],
      whenToLearnMore: "When your project grows beyond one file.",
    },
  ];

  // Section 3 - Vibe Code Cookbook Data
  const milestones = [
    {
      number: 1,
      title: "Run Your First JavaScript Script",
      goal: "Execute JavaScript code and see immediate results.",
      objective:
        "Experience the instant feedback loop that makes programming addictive.",
      whatYouWillBuild: [
        "A simple 'Hello World' script",
        "A basic calculator",
        "A command-line interaction",
      ],
      toolsUsed: ["Node.js", "Terminal"],
      stepByStepTasks: [
        "Create a JavaScript file",
        "Write your first console.log",
        "Run the file with Node.js",
        "Add user input handling",
      ],
      expectedOutcome: "You can write and run JavaScript code independently.",
      nextMilestoneTrigger:
        "When your script successfully runs without errors.",
    },
    {
      number: 2,
      title: "Build a Simple HTTP Server",
      goal: "Create a backend that can respond to web requests.",
      objective: "Understand how a backend server works by building one.",
      whatYouWillBuild: [
        "A basic Node.js server using Express",
        "One public API endpoint",
      ],
      toolsUsed: ["Node.js", "Express.js"],
      stepByStepTasks: [
        "Initialize a Node.js project",
        "Install Express",
        "Create a server file",
        "Define a basic route",
      ],
      expectedOutcome:
        "Server runs locally and API endpoint returns JSON data.",
      nextMilestoneTrigger:
        "Once the API can be accessed via browser or Postman.",
    },
    {
      number: 3,
      title: "Create Your First API Endpoint",
      goal: "Build a functional API that serves real data.",
      objective: "Transform your server into a data provider.",
      whatYouWillBuild: [
        "Multiple API endpoints",
        "Data storage in memory",
        "Request validation",
      ],
      toolsUsed: ["Node.js", "Express.js", "JSON"],
      stepByStepTasks: [
        "Design API structure",
        "Implement CRUD operations",
        "Add error handling",
        "Test with different requests",
      ],
      expectedOutcome: "Full API with create, read, update, delete operations.",
      nextMilestoneTrigger:
        "When all endpoints work and return proper responses.",
    },
    {
      number: 4,
      title: "Connect Frontend to Backend",
      goal: "Make your frontend talk to your backend.",
      objective: "Experience the full-stack development workflow.",
      whatYouWillBuild: [
        "HTML frontend",
        "JavaScript client code",
        "API integration",
      ],
      toolsUsed: ["HTML", "JavaScript", "Fetch API"],
      stepByStepTasks: [
        "Create HTML interface",
        "Write fetch requests",
        "Handle API responses",
        "Update UI dynamically",
      ],
      expectedOutcome: "Frontend displays data from your backend API.",
      nextMilestoneTrigger:
        "When frontend successfully shows live data from backend.",
    },
    {
      number: 5,
      title: "Build a React Interface",
      goal: "Create a modern, interactive user interface.",
      objective: "Level up to professional frontend development.",
      whatYouWillBuild: [
        "React components",
        "State management",
        "Interactive features",
      ],
      toolsUsed: ["React", "JavaScript", "CSS"],
      stepByStepTasks: [
        "Set up React project",
        "Create components",
        "Manage state",
        "Add interactivity",
      ],
      expectedOutcome: "Professional React app connected to your backend.",
      nextMilestoneTrigger:
        "When the React app is fully functional and deployed.",
    },
    {
      number: 6,
      title: "Ship a Real Project",
      goal: "Deploy your application for the world to use.",
      objective: "Complete the full development lifecycle.",
      whatYouWillBuild: [
        "Production-ready application",
        "Deployment pipeline",
        "Live project",
      ],
      toolsUsed: ["Git", "Vercel/Netlify", "Environment variables"],
      stepByStepTasks: [
        "Prepare for production",
        "Set up deployment",
        "Configure environment",
        "Go live",
      ],
      expectedOutcome: "Your application is live and accessible online.",
      nextMilestoneTrigger:
        "When your project is successfully deployed and working.",
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-background">
            <Header />
            <div className="max-w-3xl mx-auto px-4 py-8">
              {/* Header */}
              <header className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Vibe Code JS</h1>
                <p className="text-xl text-muted-foreground mb-2">
                  Learn JavaScript by Building First, Understanding Later
                </p>
                <p className="text-muted-foreground">
                  The easiest way to learn JavaScript: vibe coding with a
                  cookbook approach.
                </p>
              </header>

              {/* Section 1 - Environment Setup */}
              <section className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Environment Setup</h2>
                  <p className="text-muted-foreground">
                    Everything you need to start coding immediately
                  </p>
                </div>
                <div className="space-y-4">
                  {setupSteps.map((step, index) => (
                    <SetupStepCard key={index} {...step} />
                  ))}
                </div>
              </section>

              {/* Section 2 - Core Fundamentals */}
              <section className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Core Fundamentals</h2>
                  <p className="text-muted-foreground">
                    The minimum knowledge required to start building real
                    projects
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {concepts.map((concept, index) => (
                    <ConceptCard key={index} {...concept} />
                  ))}
                </div>
              </section>

              {/* Section 3 - Vibe Code Cookbook */}
              <section className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    Vibe Code Cookbook
                  </h2>
                  <p className="text-muted-foreground">
                    Each milestone is a practical recipe. Build first, learn
                    along the way
                  </p>
                </div>
                <Timeline milestones={milestones} />
              </section>
            </div>
            <Footer />
          </div>
        }
      />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}

export default App;
