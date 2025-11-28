import { ArrowRight, Zap, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Languages() {
  const languages = [
    {
      name: "JavaScript",
      category: "Frontend Foundation",
      description:
        "The essential language for interactive web development. Powers everything in the browser.",
      icon: "⚡",
      popularity: 95,
      uses: ["DOM Manipulation", "Interactive Features", "Real-time Updates"],
      difficulty: "Beginner-Friendly",
    },
    {
      name: "TypeScript",
      category: "Type-Safe JavaScript",
      description:
        "Superset of JavaScript that adds static typing. Prevents bugs and improves code quality.",
      icon: "🛡️",
      popularity: 85,
      uses: ["Large Projects", "Team Development", "Enterprise Apps"],
      difficulty: "Intermediate",
    },
    {
      name: "React",
      category: "Frontend Framework",
      description:
        "Library for building interactive UIs with reusable components. Industry standard.",
      icon: "⚛️",
      popularity: 90,
      uses: ["Single Page Apps", "Component-based UI", "State Management"],
      difficulty: "Intermediate",
    },
    {
      name: "Node.js",
      category: "Backend JavaScript",
      description:
        "Run JavaScript on the server. Build full-stack applications with one language.",
      icon: "🟢",
      popularity: 88,
      uses: ["REST APIs", "Real-time Apps", "Microservices"],
      difficulty: "Intermediate",
    },
    {
      name: "Python",
      category: "Backend Development",
      description:
        "Versatile language for web backends. Great for data processing and machine learning.",
      icon: "🐍",
      popularity: 92,
      uses: ["Web Services", "Data Analysis", "Automation"],
      difficulty: "Beginner-Friendly",
    },
    {
      name: "SQL",
      category: "Database",
      description:
        "Essential for querying and managing databases. Foundational for data management.",
      icon: "📊",
      popularity: 98,
      uses: ["Data Queries", "Database Design", "Data Management"],
      difficulty: "Beginner-Friendly",
    },
    {
      name: "CSS",
      category: "Styling",
      description:
        "Style and layout your websites. Master responsive design and modern CSS features.",
      icon: "🎨",
      popularity: 100,
      uses: ["Styling", "Layouts", "Animations"],
      difficulty: "Beginner-Friendly",
    },
    {
      name: "HTML",
      category: "Markup",
      description:
        "The foundation of all web pages. Structure your content with semantic HTML.",
      icon: "📝",
      popularity: 100,
      uses: ["Page Structure", "Semantic Markup", "Accessibility"],
      difficulty: "Beginner",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium mb-4">LANGUAGES & TOOLS</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Master the Right Languages
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn which programming languages matter most for web development
            and why mastering them will accelerate your career.
          </p>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="border border-border rounded-xl p-6 hover:border-sage-300 transition group cursor-pointer"
            >
              <div className="text-4xl mb-4">{lang.icon}</div>
              <h3 className="font-serif font-bold text-lg mb-2">{lang.name}</h3>
              <p className="text-xs font-medium text-sage-600 mb-3 uppercase">
                {lang.category}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {lang.description}
              </p>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">Popularity</span>
                  <span className="text-xs font-bold text-sage-600">
                    {lang.popularity}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-sage-500 h-2 rounded-full"
                    style={{ width: `${lang.popularity}%` }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium mb-2">Key Uses:</p>
                <div className="flex flex-wrap gap-1">
                  {lang.uses.map((use) => (
                    <span
                      key={use}
                      className="text-xs bg-sage-50 text-sage-700 px-2 py-1 rounded"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="text-xs font-medium text-muted-foreground">
                  {lang.difficulty}
                </span>
                <ArrowRight className="w-4 h-4 text-sage-500 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="bg-secondary/30 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12">
            Recommended Learning Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-8 border-2 border-sage-300">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sage-600">1</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3">
                HTML & CSS Fundamentals
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start with the foundation. Learn semantic HTML and master CSS
                styling.
              </p>
              <p className="text-xs font-medium text-sage-600">⏱️ 2-3 weeks</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sage-600">2</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3">
                JavaScript Essentials
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Master JavaScript fundamentals and DOM manipulation.
              </p>
              <p className="text-xs font-medium text-sage-600">⏱️ 4-6 weeks</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sage-600">3</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3">
                React & Frontend
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Build interactive UIs with React and modern frontend tools.
              </p>
              <p className="text-xs font-medium text-sage-600">⏱️ 6-8 weeks</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sage-600">4</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3">
                Node.js & Backend
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create APIs and backend services with Node.js.
              </p>
              <p className="text-xs font-medium text-sage-600">⏱️ 6-8 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Ready to Master These Languages?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Start with HTML and CSS, then progress through JavaScript, React, and
          backend development.
        </p>
        <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold hover:bg-sage-700 transition inline-flex items-center gap-2">
          Start Learning <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Learning</h4>
              <Link
                to="/languages"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Languages
              </Link>
              <Link
                to="/tips"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Tips & Tricks
              </Link>
              <Link
                to="/techniques"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Techniques
              </Link>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Tutorials
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Community
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 DevMastery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
