import { ArrowRight, Lightbulb, Zap, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Tips() {
  const tips = [
    {
      category: "Performance",
      icon: <Zap className="w-6 h-6" />,
      title: "Optimize Image Sizes",
      description:
        "Use modern image formats like WebP and compress images. Large images significantly slow down your site.",
      detail:
        "Serve responsive images with srcset and lazy load below-the-fold images to reduce initial load time.",
    },
    {
      category: "Performance",
      icon: <Zap className="w-6 h-6" />,
      title: "Code Splitting",
      description:
        "Split your JavaScript bundles to load only what's needed. Reduces initial load time dramatically.",
      detail:
        "Use dynamic imports and route-based code splitting with tools like webpack or Vite.",
    },
    {
      category: "Performance",
      icon: <Zap className="w-6 h-6" />,
      title: "Minify & Compress",
      description:
        "Minify CSS, JavaScript, and HTML. Enable gzip compression on your server.",
      detail:
        "Reduces file sizes by 30-50%. Always minify production builds and enable brotli compression.",
    },
    {
      category: "Development",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Use Browser DevTools",
      description:
        "Master the Chrome/Firefox DevTools for debugging. Inspect elements, check network requests, and debug JavaScript.",
      detail:
        "Learn the Inspector, Console, Network, and Performance tabs. These are essential for daily development.",
    },
    {
      category: "Development",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Console Debugging",
      description:
        "Leverage console.log(), console.table(), and breakpoints for effective debugging.",
      detail:
        "Use debugger statements and conditional breakpoints to pause execution at specific points.",
    },
    {
      category: "Development",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Responsive Design Testing",
      description:
        "Test your site on real devices, not just DevTools emulation.",
      detail:
        "Use browser stacks or physical devices. DevTools emulation doesn't catch all issues.",
    },
    {
      category: "Security",
      icon: <Shield className="w-6 h-6" />,
      title: "Sanitize User Input",
      description:
        "Never trust user input. Always sanitize and validate data on both client and server.",
      detail:
        "Prevent XSS attacks by escaping HTML, validating inputs, and using security libraries.",
    },
    {
      category: "Security",
      icon: <Shield className="w-6 h-6" />,
      title: "Use HTTPS",
      description:
        "Always use HTTPS in production. Encrypt all data in transit.",
      detail:
        "Get free SSL certificates from Let's Encrypt. HTTPS is now the standard and affects SEO.",
    },
    {
      category: "Security",
      icon: <Shield className="w-6 h-6" />,
      title: "Environment Variables",
      description: "Never hardcode API keys or sensitive data in your code.",
      detail:
        "Use .env files and environment variables. Keep secrets out of version control.",
    },
    {
      category: "Accessibility",
      icon: <Cpu className="w-6 h-6" />,
      title: "Semantic HTML",
      description:
        "Use semantic HTML elements like <header>, <nav>, <main>, and <footer>.",
      detail:
        "Improves accessibility for screen readers and helps search engines understand your content.",
    },
    {
      category: "Accessibility",
      icon: <Cpu className="w-6 h-6" />,
      title: "Alt Text for Images",
      description:
        "Always add meaningful alt text to images. Essential for accessibility and SEO.",
      detail:
        "Describe what the image shows so screen reader users understand the context.",
    },
    {
      category: "Workflow",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Version Control Best Practices",
      description: "Write clear commit messages and use branches for features.",
      detail:
        "Use descriptive commits like 'fix: resolve authentication bug' instead of 'fix stuff'.",
    },
  ];

  const categories = [
    "Performance",
    "Development",
    "Security",
    "Accessibility",
    "Workflow",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium mb-4">TIPS & TRICKS</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Accelerate Your Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential tips and tricks to write faster, cleaner, and more secure
            code. Level up your web development skills.
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="border border-border rounded-xl p-6 hover:border-sage-300 hover:shadow-lg transition group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-sage-700">
                  {tip.icon}
                </div>
                <span className="text-xs font-bold uppercase text-sage-600 bg-sage-50 px-3 py-1 rounded-full">
                  {tip.category}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {tip.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground italic">
                  {tip.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="bg-secondary/30 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12">
            Quick Wins to Implement Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border-2 border-sage-300">
              <h3 className="font-bold text-lg mb-4">⚡ Enable Caching</h3>
              <code className="bg-gray-100 p-4 rounded text-sm block mb-4 overflow-x-auto">
                Cache-Control: max-age=31536000
              </code>
              <p className="text-sm text-muted-foreground">
                Set cache headers for static assets to reduce server load.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border">
              <h3 className="font-bold text-lg mb-4">
                🎯 Use CSS Grid & Flexbox
              </h3>
              <code className="bg-gray-100 p-4 rounded text-sm block mb-4 overflow-x-auto">
                display: grid / flex
              </code>
              <p className="text-sm text-muted-foreground">
                Modern layout techniques eliminate the need for float hacks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border">
              <h3 className="font-bold text-lg mb-4">🔍 Audit Your Site</h3>
              <code className="bg-gray-100 p-4 rounded text-sm block mb-4 overflow-x-auto">
                Lighthouse DevTools
              </code>
              <p className="text-sm text-muted-foreground">
                Run Lighthouse audit to identify performance, accessibility, and
                SEO issues.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border">
              <h3 className="font-bold text-lg mb-4">📱 Mobile First</h3>
              <code className="bg-gray-100 p-4 rounded text-sm block mb-4 overflow-x-auto">
                @media (min-width: 768px)
              </code>
              <p className="text-sm text-muted-foreground">
                Design for mobile first, then scale up with media queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Apply These Tips to Your Next Project
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          These small changes compound over time and make you a significantly
          better developer.
        </p>
        <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold hover:bg-sage-700 transition inline-flex items-center gap-2">
          Explore More <ArrowRight className="w-5 h-5" />
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
