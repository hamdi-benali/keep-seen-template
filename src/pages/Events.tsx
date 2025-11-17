import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Digital Transformation Summit 2025",
      description: "Join industry leaders discussing the future of digital transformation and emerging technologies.",
      date: "March 15, 2025",
      location: "Convention Center, City",
      attendees: 500,
      image: event1,
      status: "upcoming" as const,
    },
    {
      title: "Marketing Innovation Workshop",
      description: "Hands-on workshop exploring innovative marketing strategies and tools for modern businesses.",
      date: "April 8, 2025",
      location: "Business Hub, Downtown",
      attendees: 150,
      image: event2,
      status: "upcoming" as const,
    },
    {
      title: "Tech Networking Evening",
      description: "Connect with tech professionals, entrepreneurs, and investors in a relaxed networking environment.",
      date: "May 20, 2025",
      location: "Rooftop Venue, City Center",
      attendees: 200,
      status: "upcoming" as const,
    },
  ];

  const pastEvents = [
    {
      title: "Annual Business Excellence Awards 2024",
      description: "Celebrated outstanding achievements in business innovation and leadership.",
      date: "December 10, 2024",
      location: "Grand Hotel Ballroom",
      attendees: 800,
      image: event1,
      status: "past" as const,
    },
    {
      title: "Cloud Computing Conference 2024",
      description: "Explored latest trends in cloud technology and digital infrastructure.",
      date: "November 5, 2024",
      location: "Tech Center, Business District",
      attendees: 600,
      image: event2,
      status: "past" as const,
    },
    {
      title: "Startup Pitch Competition 2024",
      description: "Emerging startups presented innovative solutions to investors and industry experts.",
      date: "October 15, 2024",
      location: "Innovation Hub",
      attendees: 300,
      status: "past" as const,
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Intensive training on advanced digital marketing techniques and analytics.",
      date: "September 22, 2024",
      location: "Training Center",
      attendees: 120,
      status: "past" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Join us at our upcoming events or explore highlights from past gatherings. 
            We create meaningful experiences that connect, educate, and inspire.
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-20 container mx-auto px-4">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
            <TabsTrigger value="upcoming" className="text-base">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past" className="text-base">Past Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Register now to secure your spot at our upcoming events
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Past Events</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore highlights from our successfully executed events
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Types We Organize</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate workshops to large-scale conferences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🎤", title: "Conferences", desc: "Industry-leading conferences with expert speakers" },
              { emoji: "💼", title: "Corporate Events", desc: "Professional business gatherings and meetings" },
              { emoji: "🎓", title: "Workshops", desc: "Interactive learning and skill-building sessions" },
              { emoji: "🤝", title: "Networking", desc: "Connect professionals and foster relationships" },
            ].map((category, index) => (
              <div key={index} className="bg-background p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{category.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Attend Our Events?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Learn from Experts",
              desc: "Gain insights from industry leaders and experienced professionals"
            },
            {
              title: "Network & Connect",
              desc: "Build valuable relationships with peers and potential partners"
            },
            {
              title: "Stay Updated",
              desc: "Keep up with the latest trends, tools, and best practices"
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <CTASection
          variant="gradient"
          title="Want to Organize an Event?"
          description="Let us help you create a memorable event experience that achieves your objectives and exceeds expectations."
          buttonText="Plan Your Event"
        />
      </section>
    </div>
  );
};

export default Events;
