import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@keepseen.com",
      link: "mailto:info@keepseen.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Business Street, City, Country",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM - 6PM",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Ready to elevate your business? We're here to help. Reach out and let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In *</Label>
                <select 
                  id="service" 
                  required
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="it">IT Consultancy</option>
                  <option value="events">Event Organization</option>
                  <option value="marketing">Marketing Services</option>
                  <option value="all">All Services</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                We're here to answer any questions you may have. Feel free to reach out through any of these channels.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span>{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link !== "#" ? (
                      <a 
                        href={info.link} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{info.details}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-border overflow-hidden">
              <div className="h-64 bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">Map View</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What services do you offer?",
                a: "We provide IT consultancy, event organization, and marketing services to help businesses grow and succeed."
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope and complexity. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "Do you work with startups?",
                a: "Absolutely! We work with businesses of all sizes, from startups to established enterprises."
              },
              {
                q: "What is your pricing structure?",
                a: "We offer customized pricing based on your specific needs. Contact us for a detailed quote tailored to your project."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
