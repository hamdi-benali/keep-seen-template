import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to helping businesses achieve maximum visibility and success in their markets.",
    },
    {
      icon: Award,
      title: "Excellence First",
      description: "Quality and excellence are at the core of everything we do, from strategy to execution.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding and meeting your unique needs.",
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team brings energy, creativity, and dedication to every project we undertake.",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", bio: "15+ years in digital transformation" },
    { name: "Michael Chen", role: "CTO", bio: "Tech innovation expert with 20+ years experience" },
    { name: "Emma Williams", role: "Events Director", bio: "Organized 200+ successful corporate events" },
    { name: "David Martinez", role: "Marketing Head", bio: "Award-winning marketing strategist" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About KEEP SEEN</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a multi-service agency dedicated to keeping your business visible, 
            relevant, and thriving in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a simple yet powerful vision: to help businesses stay visible and 
                competitive in an ever-evolving digital landscape. KEEP SEEN was born from the 
                realization that modern businesses need more than just individual services—they 
                need integrated solutions.
              </p>
              <p>
                Over the years, we've grown from a small consultancy into a comprehensive 
                multi-service agency, offering IT consultancy, event organization, and marketing 
                services. Our approach combines technical expertise, creative thinking, and 
                strategic planning to deliver results that matter.
              </p>
              <p>
                Today, we're proud to serve businesses of all sizes, from startups to 
                established enterprises, helping them navigate digital transformation, connect 
                with their audiences, and achieve sustainable growth.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={aboutImage}
              alt="KEEP SEEN Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals committed to your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-border">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <CTASection
          title="Want to Work With Us?"
          description="Join hundreds of satisfied clients who trust KEEP SEEN to elevate their business."
          buttonText="Get Started Today"
        />
      </section>
    </div>
  );
};

export default About;
