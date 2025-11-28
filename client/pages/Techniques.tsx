import { ArrowRight, Layers, GitBranch, TestTube, Zap, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Techniques() {
  const techniques = [
    {
      name: "Component-Based Architecture",
      icon: <Layers className="w-6 h-6" />,
      description:
        "Build reusable, modular components that are easier to maintain and test.",
      benefits: ["Reusability", "Maintainability", "Scalability"],
      example: "React components, Vue components, Web components",
    },
    {
      name: "RESTful APIs",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Design APIs following REST principles for predictable, standardized endpoints.",
      benefits: ["Predictability", "Standardization", "Easy Integration"],
      example: "GET /api/users, POST /api/users, PUT /api/users/:id",
    },
    {
      name: "State Management",
      icon: <GitBranch className="w-6 h-6" />,
      description:
        "Manage application state efficiently using patterns like Redux, Context, or Zustand.",
      benefits: ["Predictability", "Debugging", "Performance"],
      example: "Redux, Context API, Zustand, Jotai",
    },
    {
      name: "Test-Driven Development",
      icon: <TestTube className="w-6 h-6" />,
      description:
        "Write tests before implementing features. Ensures code quality and reduces bugs.",
      benefits: ["Quality", "Confidence", "Documentation"],
      example: "Jest, Vitest, React Testing Library",
    },
    {
      name: "CI/CD Pipelines",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Automate testing, building, and deployment to catch issues early.",
      benefits: ["Automation", "Reliability", "Speed"],
      example: "GitHub Actions, GitLab CI, Jenkins",
    },
    {
      name: "Progressive Enhancement",
      icon: <Layers className="w-6 h-6" />,
      description:
        "Start with solid HTML foundation, then enhance with CSS and JavaScript.",
      benefits: ["Accessibility", "Resilience", "Performance"],
      example: "Basic HTML first, then CSS styling, then JS interactivity",
    },
    {
      name: "Microservices Architecture",
      icon: <GitBranch className="w-6 h-6" />,
      description:
        "Break down monolithic applications into smaller, independent services.",
      benefits: ["Scalability", "Independence", "Flexibility"],
      example: "Separate services for auth, payments, notifications",
    },
    {
      name: "Authentication & Authorization",
      icon: <Code2 className="w-6 h-6" />,
      description:
        "Implement secure user authentication and control access to resources.",
      benefits: ["Security", "User Safety", "Compliance"],
      example: "JWT, OAuth 2.0, Session-based auth",
    },
    {
      name: "Database Optimization",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Design efficient databases with proper indexing and query optimization.",
      benefits: ["Performance", "Scalability", "Cost"],
      example: "Proper indexing, query optimization, caching",
    },
    {
      name: "Error Handling & Logging",
      icon: <TestTube className="w-6 h-6" />,
      description:
        "Implement comprehensive error handling and logging for debugging.",
      benefits: ["Debugging", "Monitoring", "User Experience"],
      example: "Try-catch blocks, error boundaries, logging services",
    },
    {
      name: "Responsive Design",
      icon: <Layers className="w-6 h-6" />,
      description:
        "Design websites that work seamlessly across all device sizes.",
      benefits: ["Reach", "UX", "SEO"],
      example: "Mobile-first approach, media queries, flexible layouts",
    },
    {
      name: "Web Performance Optimization",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Optimize every aspect of your site for faster loading and better UX.",
      benefits: ["Speed", "User Satisfaction", "Conversion"],
      example: "Minification, compression, lazy loading, caching",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium mb-4">
            DEVELOPMENT TECHNIQUES
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Modern Web Development Patterns
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master industry-standard techniques and architectural patterns used
            by top companies to build scalable, maintainable applications.
          </p>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((tech, idx) => (
            <div
              key={idx}
              className="border border-border rounded-xl p-6 hover:border-sage-300 hover:shadow-lg transition group"
            >
              <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-sage-700 mb-4">
                {tech.icon}
              </div>
              <h3 className="font-serif font-bold text-lg mb-3">{tech.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {tech.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-medium mb-2 uppercase text-muted-foreground">
                  Key Benefits
                </p>
                <div className="flex flex-wrap gap-1">
                  {tech.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs bg-sage-50 text-sage-700 px-2 py-1 rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <strong>Examples:</strong> {tech.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="bg-secondary/30 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12">
            Common Architecture Patterns
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 border-l-4 border-sage-500">
              <h3 className="font-bold text-lg mb-4">
                MVC (Model-View-Controller)
              </h3>
              <p className="text-muted-foreground mb-4">
                Separates concerns into three layers: data (Model), presentation
                (View), and business logic (Controller).
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono">
                User → Controller → Model → View → User
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-sage-500">
              <h3 className="font-bold text-lg mb-4">
                MVVM (Model-View-ViewModel)
              </h3>
              <p className="text-muted-foreground mb-4">
                ViewModel bridges the Model and View, enabling two-way data
                binding and better testability.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono">
                Model ↔ ViewModel ↔ View (two-way binding)
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-sage-500">
              <h3 className="font-bold text-lg mb-4">Flux Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Unidirectional data flow: Actions → Dispatcher → Stores → Views.
                Prevents circular dependencies.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono">
                Action → Dispatcher → Store → View → Action
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-sage-500">
              <h3 className="font-bold text-lg mb-4">Layered Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Divide application into horizontal layers: Presentation,
                Business Logic, Persistence, Database.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono">
                Presentation → Business Logic → Persistence → Database
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl font-bold mb-12">
          Essential Design Patterns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 border-2 border-border hover:border-sage-300 transition">
            <h3 className="font-bold text-lg mb-4">Singleton Pattern</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ensures only one instance of a class exists throughout the
              application.
            </p>
            <code className="bg-gray-100 p-3 rounded text-xs block">
              const logger = new Logger()
            </code>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-border hover:border-sage-300 transition">
            <h3 className="font-bold text-lg mb-4">Observer Pattern</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Objects subscribe to changes and get notified automatically.
            </p>
            <code className="bg-gray-100 p-3 rounded text-xs block">
              eventEmitter.on('change', callback)
            </code>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-border hover:border-sage-300 transition">
            <h3 className="font-bold text-lg mb-4">Factory Pattern</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Creates objects without specifying exact classes.
            </p>
            <code className="bg-gray-100 p-3 rounded text-xs block">
              const user = UserFactory.create(...)
            </code>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-border hover:border-sage-300 transition">
            <h3 className="font-bold text-lg mb-4">Decorator Pattern</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Adds behavior to objects dynamically without modifying them.
            </p>
            <code className="bg-gray-100 p-3 rounded text-xs block">
              @memoize function expensive() ...
            </code>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Build Better Applications
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Master these techniques and you'll be equipped to tackle any web
          development challenge.
        </p>
        <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold hover:bg-sage-700 transition inline-flex items-center gap-2">
          Start Mastering <ArrowRight className="w-5 h-5" />
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
