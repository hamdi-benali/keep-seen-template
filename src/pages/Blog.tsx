import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Digital Transformation in 2025",
    excerpt: "Explore emerging trends and technologies reshaping how businesses operate and compete in the digital age. From AI integration to cloud-native solutions, discover what's next.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "Technology",
    author: "Sarah Johnson",
  };

  const blogPosts = [
    {
      title: "10 Essential Marketing Strategies for Growing Businesses",
      excerpt: "Proven marketing tactics that help small and medium businesses increase brand visibility and drive growth.",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      category: "Marketing",
      author: "David Martinez",
    },
    {
      title: "How to Plan a Successful Corporate Event",
      excerpt: "A comprehensive guide to organizing corporate events that engage attendees and achieve your business objectives.",
      date: "Jan 8, 2025",
      readTime: "5 min read",
      category: "Events",
      author: "Emma Williams",
    },
    {
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud safely and efficiently.",
      date: "Jan 5, 2025",
      readTime: "10 min read",
      category: "Technology",
      author: "Michael Chen",
    },
    {
      title: "Brand Visibility in the Digital Age",
      excerpt: "Learn how to make your brand stand out in crowded digital marketplaces and capture audience attention.",
      date: "Dec 28, 2024",
      readTime: "7 min read",
      category: "Marketing",
      author: "David Martinez",
    },
    {
      title: "The ROI of IT Consultancy Services",
      excerpt: "Understanding the tangible benefits and returns of investing in professional IT consultancy for your business.",
      date: "Dec 20, 2024",
      readTime: "6 min read",
      category: "Technology",
      author: "Michael Chen",
    },
    {
      title: "Event Marketing: Maximizing Attendee Engagement",
      excerpt: "Strategies and tactics to boost engagement before, during, and after your business events.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Events",
      author: "Emma Williams",
    },
  ];

  const categories = ["All", "Technology", "Marketing", "Events", "Business"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert insights, tips, and trends in IT consultancy, event organization, and marketing
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center bg-secondary rounded-2xl p-8">
          <div>
            <div className="inline-block px-3 py-1 bg-accent text-white text-sm font-medium rounded-full mb-4">
              {featuredPost.category}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{featuredPost.title}</h3>
            <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>{featuredPost.date}</span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
              <span>•</span>
              <span>By {featuredPost.author}</span>
            </div>
            <Button size="lg">Read Full Article</Button>
          </div>
          <div className="h-80 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="text-6xl">📰</span>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, tips, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 my-20">
        <CTASection
          title="Need Expert Guidance?"
          description="Our team is ready to help you navigate digital transformation, plan successful events, or amplify your marketing efforts."
          buttonText="Consult With Us"
        />
      </section>
    </div>
  );
};

export default Blog;
