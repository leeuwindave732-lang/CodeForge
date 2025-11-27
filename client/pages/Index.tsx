import {
  ArrowRight,
  Code2,
  Zap,
  BookOpen,
  Lightbulb,
  Target,
  CheckCircle,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-serif font-bold">CodeForge</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/languages"
              className="text-sm font-medium hover:text-sage-600 transition"
            >
              Languages
            </Link>
            <Link
              to="/tips"
              className="text-sm font-medium hover:text-sage-600 transition"
            >
              Tips & Tricks
            </Link>
            <Link
              to="/techniques"
              className="text-sm font-medium hover:text-sage-600 transition"
            >
              Techniques
            </Link>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-sage-600 transition"
            >
              Contact
            </a>
          </div>
          <button className="px-6 py-2 rounded-full bg-sage-500 text-white font-medium text-sm hover:bg-sage-600 transition">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Web Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Learn the skills to build modern, scalable web applications. From
            HTML & CSS to React, Node.js, and beyond. Level up your development
            career today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold hover:bg-sage-700 transition inline-flex items-center gap-2">
              Start Learning <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-sage-300 text-sage-600 font-bold hover:bg-sage-50 transition">
              Explore Resources
            </button>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-lg">Frontend Mastery</h3>
            <p className="text-sm text-muted-foreground">
              Master HTML, CSS, JavaScript, React, and modern UI frameworks to
              build beautiful, responsive interfaces.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-lg">
              Backend Development
            </h3>
            <p className="text-sm text-muted-foreground">
              Learn Node.js, databases, APIs, authentication, and server-side
              architecture for full-stack applications.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-lg">
              Performance & Optimization
            </h3>
            <p className="text-sm text-muted-foreground">
              Optimize load times, reduce bundle sizes, implement caching, and
              master web performance best practices.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-lg">
              Industry Best Practices
            </h3>
            <p className="text-sm text-muted-foreground">
              Learn testing, version control, security, accessibility, and
              professional development workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Browse Everything - MOVED UP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
          Explore Our Learning Platform
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Browse comprehensive courses, tutorials, and resources on every aspect
          of modern web development.
        </p>

        <div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-2xl overflow-hidden h-96 md:h-[500px] flex flex-col items-center justify-center relative border border-sage-200">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10 text-center">
            <Code2 className="w-20 h-20 text-sage-600 mx-auto mb-4 opacity-80" />
            <h3 className="font-serif text-3xl font-bold text-sage-900 mb-2">
              Interactive Learning Experience
            </h3>
            <p className="text-sage-700 font-medium">
              Hands-on projects, real-world scenarios, and expert-led tutorials
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="benefits" className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-sage-600 mb-2">
              LEARNING PATHS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              What You'll Master
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Structured curriculum designed to take you from beginner to
              professional web developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-sage-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="font-serif font-bold text-lg">
                  Core Technologies
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">HTML5 & semantic markup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">CSS3 & responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">JavaScript fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">React & modern frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">TypeScript for type safety</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-sage-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="font-serif font-bold text-lg">
                  Backend & Databases
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Node.js & Express servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">RESTful API design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">SQL & database design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Authentication & security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Deployment & DevOps basics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-sage-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="font-serif font-bold text-lg">
                  Professional Skills
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Git & version control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Testing & debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Web accessibility (a11y)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">Collaborative development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl font-bold mb-12">
          Your Learning Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-8 border-2 border-sage-200 hover:border-sage-400 transition">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-sage-600">1</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-3">Fundamentals</h3>
            <p className="text-sm text-muted-foreground mb-4">
              HTML, CSS, JavaScript basics. Build static sites and understand
              the web platform.
            </p>
            <p className="text-xs font-medium text-sage-600">4-6 weeks</p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-sage-200 hover:border-sage-400 transition">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-sage-600">2</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-3">
              Frontend Advanced
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              React, TypeScript, state management. Build interactive web
              applications.
            </p>
            <p className="text-xs font-medium text-sage-600">6-8 weeks</p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-sage-200 hover:border-sage-400 transition">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-sage-600">3</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-3">
              Backend Essentials
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Node.js, Express, databases. Build robust backend services and
              APIs.
            </p>
            <p className="text-xs font-medium text-sage-600">6-8 weeks</p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-sage-200 hover:border-sage-400 transition">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-sage-600">4</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-3">
              Professional Dev
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Testing, deployment, best practices. Build production-ready
              applications.
            </p>
            <p className="text-xs font-medium text-sage-600">Ongoing</p>
          </div>
        </div>
      </section>

      {/* Why Choose CodeForge */}
      <section className="bg-sage-50 py-20 border-y border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Why Choose CodeForge?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading education platform trusted by thousands of
              developers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Lightbulb className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from experienced developers working at top companies
                  with years of real-world expertise.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Target className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Project-Based Learning
                </h3>
                <p className="text-muted-foreground">
                  Build real applications throughout the course. Create a
                  portfolio you can showcase to employers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Rocket className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Career Ready</h3>
                <p className="text-muted-foreground">
                  Gain skills that directly translate to job opportunities.
                  Cover topics employers are looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Start Your Coding Journey Today
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of developers building amazing web applications. From
          beginner to expert in structured learning paths.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold hover:bg-sage-700 transition inline-flex items-center gap-2">
            Begin Learning <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-sage-600 text-sage-600 font-bold hover:bg-sage-50 transition">
            View Course Catalog
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-sage-500 rounded flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif font-bold text-lg">CodeForge</span>
              </div>
              <p className="text-sm text-gray-400">
                Master web development through hands-on learning and expert
                instruction.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Learning</h4>
              <Link
                to="/languages"
                className="text-sm text-gray-400 hover:text-white transition block mb-2"
              >
                Languages
              </Link>
              <Link
                to="/tips"
                className="text-sm text-gray-400 hover:text-white transition block mb-2"
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
                className="text-sm text-gray-400 hover:text-white transition block mb-2"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block mb-2"
              >
                Tutorials
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block"
              >
                Blog
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block mb-2"
              >
                Forums
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition block mb-2"
              >
                Discord
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
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 CodeForge. Master Web Development. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
