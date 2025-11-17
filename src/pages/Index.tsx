import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "IT Consultancy",
      description: "Transform your business with cutting-edge technology solutions and expert guidance.",
      features: ["Cloud Migration", "System Architecture", "Tech Stack Optimization"],
    },
    {
      icon: Calendar,
      title: "Event Organization",
      description: "Create memorable B2C experiences that engage and inspire your audience.",
      features: ["Corporate Events", "Product Launches", "Networking Sessions"],
    },
    {
      icon: TrendingUp,
      title: "Marketing Services",
      description: "Amplify your brand visibility and reach your target audience effectively.",
      features: ["Digital Marketing", "Brand Strategy", "Content Creation"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="KEEP SEEN Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            KEEP YOUR BUSINESS <span className="text-accent">SEEN</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Multi-service agency delivering IT consultancy, event organization, and marketing excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to elevate your business and maximize visibility
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild variant="outline">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Events Organized</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose KEEP SEEN?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
            <p className="text-muted-foreground">
              We focus on delivering measurable outcomes that drive your business forward
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
            <p className="text-muted-foreground">
              Cutting-edge strategies and technologies to keep you ahead of the curve
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Partnership Approach</h3>
            <p className="text-muted-foreground">
              We work alongside you as trusted partners in your success journey
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <CTASection
          variant="gradient"
          title="Ready to Make Your Business Seen?"
          description="Let's discuss how our services can help you achieve your goals and maximize your visibility in the market."
          buttonText="Start Your Journey"
        />
      </section>
    </div>
  );
};

export default Index;
