import { ArrowRight, Code2, Zap, Layout, GitBranch } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-serif font-bold">DevMastery</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition">
              Benefits
            </a>
            <a href="#specs" className="text-sm font-medium hover:text-primary transition">
              Specifications
            </a>
            <a href="#howto" className="text-sm font-medium hover:text-primary transition">
              How-to
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">
              Contact Us
            </a>
          </div>
          <button className="px-6 py-2 rounded-full bg-sage-500 text-white font-medium text-sm hover:bg-sage-600 transition">
            Learn More
          </button>
        </nav>
      </header>

      {/* Hero Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Fast Performance</h3>
            <p className="text-sm text-muted-foreground">Optimize your code with proven techniques to achieve lightning-fast load times.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Clean Architecture</h3>
            <p className="text-sm text-muted-foreground">Build scalable applications with maintainable, modular code structures.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Layout className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">Master cross-platform development that works seamlessly on all devices.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Best Practices</h3>
            <p className="text-sm text-muted-foreground">Learn industry standards and proven patterns from experienced developers.</p>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="w-full h-80 md:h-96 bg-gradient-to-b from-slate-300 to-slate-200 overflow-hidden">
        <div className="w-full h-full bg-cover bg-center" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,120,140);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(120,140,160);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22400%22 fill=%22url(%23grad)%22/%3E%3C/svg%3E')"
        }} />
      </section>

      {/* See the Big Picture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">See the Big Picture</h2>
            <p className="text-muted-foreground mb-8">Master the fundamentals and apply them across your entire development workflow. From architecture to implementation, understand the full scope of professional development.</p>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">01</div>
                <p className="font-medium">Master Core Concepts: Understand JavaScript, TypeScript, and modern frameworks deeply.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">02</div>
                <p className="font-medium">Build Real Projects: Apply your knowledge by creating production-ready applications.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">03</div>
                <p className="font-medium">Optimize Performance: Learn techniques to reduce load times and improve user experience.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">04</div>
                <p className="font-medium">Stay Current: Keep up with evolving technologies and best practices in web development.</p>
              </div>
            </div>
            <button className="mt-8 px-6 py-2 rounded-full bg-sage-100 text-sage-700 font-medium text-sm hover:bg-sage-200 transition inline-flex items-center gap-2">
              Discover More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-beige-200 rounded-2xl h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-64 h-64 opacity-20">
                <circle cx="150" cy="150" r="80" fill="currentColor" />
                <circle cx="150" cy="100" r="60" fill="currentColor" />
                <circle cx="150" cy="50" r="40" fill="currentColor" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <div className="text-6xl font-bold text-sage-600">3D</div>
              <p className="text-sage-600 font-medium">Web Dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DevMastery? Section */}
      <section id="benefits" className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-sage-600 mb-2">SELECT</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Why Choose DevMastery?</h2>
            <p className="text-muted-foreground mt-4">You need a comprehensive platform that grows with your skills. That's why we built DevMastery with a developer-first approach.</p>
          </div>

          <div className="mb-12 text-center">
            <button className="px-6 py-2 rounded-full bg-sage-100 text-sage-700 font-medium text-sm hover:bg-sage-200 transition inline-flex items-center gap-2">
              Discover More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border">
            <div className="pt-8">
              <h3 className="font-serif font-bold text-lg mb-6">DevMastery</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Structured learning paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Interactive code editor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Real-time feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Expert guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Community support</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <h3 className="font-serif font-bold text-lg mb-6">CodeTrack</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">Limited tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Code snippets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">No personalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">Documentation only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Forum discussions</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <h3 className="font-serif font-bold text-lg mb-6">WebAcademy</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">Slow pace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">Outdated content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold">✓</span>
                  <span className="text-sm">Certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">Poor UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold">✗</span>
                  <span className="text-sm text-muted-foreground">No mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 rounded-2xl h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-64 h-64">
                <defs>
                  <radialGradient id="sphereGrad" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(200,200,200,0.4)" />
                  </radialGradient>
                </defs>
                <circle cx="150" cy="150" r="120" fill="url(#sphereGrad)" stroke="#999" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div>
            <blockquote className="mb-8">
              <p className="font-serif text-2xl md:text-3xl font-bold leading-relaxed mb-6">
                "DevMastery transformed my understanding of web development. The structured approach and real-time feedback helped me build production applications faster than I ever thought possible."
              </p>
              <div>
                <p className="font-bold">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">Senior Frontend Engineer</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Map Your Success Section */}
      <section id="howto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-start mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Map Your Success</h2>
          <button className="px-6 py-2 rounded-full bg-sage-100 text-sage-700 font-medium text-sm hover:bg-sage-200 transition hidden md:inline-flex items-center gap-2">
            Discover More <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-5xl font-serif font-bold text-muted mb-4">01</div>
            <h3 className="font-bold text-lg mb-2">Assess Your Level</h3>
            <p className="text-muted-foreground">Start with our diagnostic assessment to understand your current skills and identify growth areas.</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-bold text-muted mb-4">02</div>
            <h3 className="font-bold text-lg mb-2">Follow Structured Path</h3>
            <p className="text-muted-foreground">Complete curated learning modules tailored to your goals and experience level.</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-bold text-muted mb-4">03</div>
            <h3 className="font-bold text-lg mb-2">Build Real Projects</h3>
            <p className="text-muted-foreground">Apply your knowledge by developing production-grade projects with guidance and feedback.</p>
          </div>
        </div>

        {/* Step Image */}
        <div className="w-full h-64 md:h-80 bg-gradient-to-b from-blue-300 to-blue-200 rounded-xl overflow-hidden">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 300%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,150,200);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(120,170,220);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22300%22 fill=%22url(%23grad)%22/%3E%3C/svg%3E')"
          }} />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Level Up?</h2>
        <p className="text-muted-foreground mb-8 text-lg">Join thousands of developers who have transformed their careers with DevMastery.</p>
        <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold text-base hover:bg-sage-700 transition inline-flex items-center gap-2">
          Start Learning Now <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Trusted By Section */}
      <section className="bg-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-lg font-bold">TechCorp</div>
            <div className="text-lg font-bold">CloudBase</div>
            <div className="text-lg font-bold">DataFlow</div>
            <div className="text-lg font-bold">WebSync</div>
            <div className="text-lg font-bold">DevStack</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-sm font-medium text-sage-600 mb-2">BENEFITS</p>
          <h2 className="font-serif text-4xl font-bold">We've Mastered Web Development</h2>
          <p className="text-muted-foreground mt-4">DevMastery provides real insights, without the overwhelming complexity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Rapid Learning</h3>
            <p className="text-sm text-muted-foreground">Master concepts faster with interactive lessons and hands-on projects.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Expert Guidance</h3>
            <p className="text-sm text-muted-foreground">Learn from industry professionals with years of real-world experience.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Best Practices</h3>
            <p className="text-sm text-muted-foreground">Discover industry standards and modern development techniques.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Layout className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Portfolio Ready</h3>
            <p className="text-sm text-muted-foreground">Build real projects you can showcase to potential employers and clients.</p>
          </div>
        </div>
      </section>

      {/* Browse Everything Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Browse Everything.</h2>
        <div className="bg-gray-800 rounded-2xl overflow-hidden h-96 md:h-[500px] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800" />
          <div className="relative z-10 text-center">
            <div className="text-gray-400 font-medium">Interactive Learning Dashboard</div>
            <p className="text-gray-500 text-sm mt-2">Explore all courses, projects, and resources</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Benefits</h4>
              <a href="#benefits" className="text-sm text-gray-400 hover:text-white transition block">Fast Learning</a>
              <a href="#benefits" className="text-sm text-gray-400 hover:text-white transition block">Expert Guidance</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Specifications</h4>
              <a href="#specs" className="text-sm text-gray-400 hover:text-white transition block">Features</a>
              <a href="#specs" className="text-sm text-gray-400 hover:text-white transition block">Pricing</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition block">Contact Us</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition block">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 DevMastery. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
