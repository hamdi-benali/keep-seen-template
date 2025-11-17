import { 
  Code, 
  Cloud, 
  Shield, 
  Zap,
  Calendar,
  Users,
  Megaphone,
  TrendingUp,
  Target,
  PenTool,
  BarChart,
  Mail
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const itServices = [
    {
      icon: Code,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions and strategies.",
      features: ["Legacy System Migration", "Process Automation", "Digital Strategy Consulting"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalability and efficiency.",
      features: ["Cloud Migration", "Infrastructure Setup", "Cost Optimization"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions.",
      features: ["Security Audits", "Threat Detection", "Compliance Management"],
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Connect your systems for seamless operations and data flow.",
      features: ["API Development", "Third-party Integration", "Workflow Automation"],
    },
  ];

  const eventServices = [
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Professional events that align with your business objectives.",
      features: ["Conferences & Seminars", "Team Building Events", "Annual Meetings"],
    },
    {
      icon: Users,
      title: "Product Launches",
      description: "Create buzz and excitement around your new products.",
      features: ["Launch Strategy", "Venue Management", "Media Coordination"],
    },
    {
      icon: Megaphone,
      title: "Networking Events",
      description: "Facilitate valuable connections within your industry.",
      features: ["Industry Meetups", "B2B Networking", "Panel Discussions"],
    },
    {
      icon: Target,
      title: "Brand Activations",
      description: "Engage your audience with immersive brand experiences.",
      features: ["Experiential Marketing", "Pop-up Events", "Interactive Installations"],
    },
  ];

  const marketingServices = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to grow your business.",
      features: ["SEO & SEM", "Social Media Marketing", "PPC Campaigns"],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging content that resonates with your target audience.",
      features: ["Copywriting", "Video Production", "Graphic Design"],
    },
    {
      icon: BarChart,
      title: "Brand Strategy",
      description: "Build a strong brand identity that stands out.",
      features: ["Brand Positioning", "Visual Identity", "Brand Guidelines"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Targeted campaigns that drive engagement and conversions.",
      features: ["Campaign Strategy", "List Management", "Analytics & Reporting"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive solutions across IT consultancy, event organization, and marketing 
            to keep your business visible and thriving.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 container mx-auto px-4">
        <Tabs defaultValue="it" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-16">
            <TabsTrigger value="it" className="text-base">IT Consultancy</TabsTrigger>
            <TabsTrigger value="events" className="text-base">Event Organization</TabsTrigger>
            <TabsTrigger value="marketing" className="text-base">Marketing Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="it" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">IT Consultancy & Digital Transformation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your business with innovative technology solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">B2C Event Organization</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create memorable experiences that engage and inspire your audience
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {eventServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Marketing & Brand Visibility</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Amplify your brand and reach your target audience effectively
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {marketingServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", desc: "Crafting tailored solutions" },
              { step: "03", title: "Execution", desc: "Bringing plans to life" },
              { step: "04", title: "Optimization", desc: "Continuous improvement" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 my-20">
        <CTASection
          variant="gradient"
          title="Ready to Elevate Your Business?"
          description="Let's discuss which services are right for you and create a customized strategy for success."
          buttonText="Schedule Consultation"
        />
      </section>
    </div>
  );
};

export default Services;
