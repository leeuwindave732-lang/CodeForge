import { ArrowRight, Code2, Zap, Layout, GitBranch, Star, Database, Palette, Cpu } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-serif font-bold">DevMastery</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium hover:text-sage-600 transition">
              Benefits
            </a>
            <a href="#specs" className="text-sm font-medium hover:text-sage-600 transition">
              Specifications
            </a>
            <a href="#howto" className="text-sm font-medium hover:text-sage-600 transition">
              How-to
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-sage-600 transition">
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
            <h3 className="font-serif font-bold text-base">Amplify Insights</h3>
            <p className="text-sm text-muted-foreground">Unlock data-driven decisions with comprehensive analytics revealing key opportunities for strategic development growth.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Control Your Global Presence</h3>
            <p className="text-sm text-muted-foreground">Manage and track production environments, ensuring consistent operations and streamlined performance everywhere.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Remove Language Barriers</h3>
            <p className="text-sm text-muted-foreground">Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Visualize Growth</h3>
            <p className="text-sm text-muted-foreground">Generate precise, visually compelling reports that illustrate your growth trajectory across regions.</p>
          </div>
        </div>
      </section>

      {/* Full Width Mountain Image */}
      <section className="w-full h-80 md:h-96 bg-gradient-to-b from-blue-500 to-blue-400 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=400&fit=crop" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* See the Big Picture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">See the Big Picture</h2>
            <p className="text-muted-foreground mb-8">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">01</div>
                <p className="font-medium">Spot Trends in Seconds: No more digging through numbers.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">02</div>
                <p className="font-medium">Get Everyone on the Same Page: Share easy-to-understand reports with your team.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">03</div>
                <p className="font-medium">Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-sage-600 mb-2">04</div>
                <p className="font-medium">Your Global Snapshot: Get a quick, clear overview of your entire operation.</p>
              </div>
            </div>
            <button className="mt-8 px-6 py-2 rounded-full bg-sage-100 text-sage-700 font-medium text-sm hover:bg-sage-200 transition inline-flex items-center gap-2">
              Discover More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-beige-300 rounded-2xl h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-48 flex items-center justify-center">
                {/* Cylinder mockup */}
                <div className="absolute w-20 h-32 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-lg" />
                <div className="absolute w-16 h-24 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-lg ml-12 -mb-4" />
                <div className="absolute w-12 h-20 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-lg ml-20 -mb-8" />
                <div className="absolute w-10 h-16 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-lg ml-28 -mb-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DevMastery? Section */}
      <section id="benefits" className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-sage-600 mb-2">SELECT</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Why Choose Area?</h2>
            <p className="text-muted-foreground mt-4">You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.</p>
          </div>

          <div className="mb-12 text-center">
            <button className="px-6 py-2 rounded-full bg-sage-100 text-sage-700 font-medium text-sm hover:bg-sage-200 transition inline-flex items-center gap-2">
              Discover More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-6">Area</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Ultra-fast browsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Advanced AI insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Seamless integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Advanced AI insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Full UTF-8 support</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6">WebSurge</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Fast browsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">Basic AI recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">Restricts customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-600 font-bold text-lg">✓</span>
                  <span className="text-sm">Basic AI insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">Potential display errors</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6">HyperView</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">Moderate speeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">No AI assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">Steep learning curve</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">No AI assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold text-lg">✗</span>
                  <span className="text-sm text-muted-foreground">Partial UTF-8 support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-400 rounded-2xl h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop" 
              alt="Spheres" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <blockquote className="mb-8">
              <p className="font-serif text-2xl md:text-3xl font-bold leading-relaxed mb-6">
                "I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it."
              </p>
              <div>
                <p className="font-bold">John Smith</p>
                <p className="text-sm text-muted-foreground">Head of Data</p>
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
            <h3 className="font-bold text-lg mb-2">Get Started</h3>
            <p className="text-muted-foreground">With our intuitive setup, you're up and running in minutes.</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-bold text-muted mb-4">02</div>
            <h3 className="font-bold text-lg mb-2">Customize and Configure</h3>
            <p className="text-muted-foreground">Adapt Area to your specific requirements and preferences.</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-bold text-muted mb-4">03</div>
            <h3 className="font-bold text-lg mb-2">Grow Your Business</h3>
            <p className="text-muted-foreground">Make informed decisions to exceed your goals.</p>
          </div>
        </div>

        {/* Step Image */}
        <div className="w-full h-64 md:h-80 bg-gradient-to-b from-teal-500 to-teal-400 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1400&h=400&fit=crop" 
            alt="Ocean waves" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Connect with us</h2>
        <p className="text-muted-foreground mb-8">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
        <button className="px-8 py-3 rounded-full bg-sage-600 text-white font-bold text-base hover:bg-sage-700 transition">
          Learn More
        </button>
      </section>

      {/* Trusted By Section */}
      <section className="bg-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">Trusted by:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <div className="text-lg font-bold">⚡</div>
            <div className="text-lg font-bold">🔧</div>
            <div className="text-lg font-bold">📊</div>
            <div className="text-lg font-bold">🚀</div>
            <div className="text-lg font-bold">💡</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-sm font-medium text-sage-600 mb-2">BENEFITS</p>
          <h2 className="font-serif text-4xl font-bold">We've cracked the code.</h2>
          <p className="text-muted-foreground mt-4">Area provides real insights, without the data overload.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Amplify Insights</h3>
            <p className="text-sm text-muted-foreground">Unlock data-driven decisions with comprehensive analytics revealing key opportunities for regional growth.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Control Your Global Presence</h3>
            <p className="text-sm text-muted-foreground">Manage and track satellite offices, ensuring consistent operations and streamlined everywhere.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Remove Language Barriers</h3>
            <p className="text-sm text-muted-foreground">Adapt to diverse markets with built-in localization for clear communication and enhanced experience.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-base">Visualize Growth</h3>
            <p className="text-sm text-muted-foreground">Generate precise, visually compelling reports that illustrate growth trajectory across regions.</p>
          </div>
        </div>
      </section>

      {/* Browse Everything Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Browse everything.</h2>
        <div className="bg-gray-700 rounded-2xl overflow-hidden h-96 md:h-[500px] flex items-center justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop" 
            alt="Dashboard" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent flex items-center justify-center">
            <div className="text-center">
              <p className="text-white font-serif text-3xl font-bold mb-4">78% Efficiency Improvements</p>
              <p className="text-gray-300">See how our clients boost their productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Benefits</h4>
              <a href="#benefits" className="text-sm text-gray-400 hover:text-white transition block">Amplify Insights</a>
              <a href="#benefits" className="text-sm text-gray-400 hover:text-white transition block">Control Presence</a>
              <a href="#benefits" className="text-sm text-gray-400 hover:text-white transition block">Visualize Growth</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Specifications</h4>
              <a href="#specs" className="text-sm text-gray-400 hover:text-white transition block">How-to</a>
              <a href="#specs" className="text-sm text-gray-400 hover:text-white transition block">Features</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition block">Contact Us</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-sage-500 rounded flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-gray-400">© Area - 2025</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Benefits</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Specifications</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">How-to</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
