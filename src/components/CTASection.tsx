import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "gradient";
}

const CTASection = ({ 
  title, 
  description, 
  buttonText = "Get Started", 
  buttonLink = "/contact",
  variant = "default" 
}: CTASectionProps) => {
  return (
    <section className={`py-16 px-4 rounded-2xl ${variant === "gradient" ? "hero-gradient" : "bg-secondary"}`}>
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${variant === "gradient" ? "text-white" : ""}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 ${variant === "gradient" ? "text-white/90" : "text-muted-foreground"}`}>
          {description}
        </p>
        <Button 
          asChild 
          size="lg" 
          className={variant === "gradient" ? "bg-accent hover:bg-accent/90 text-white" : "bg-primary hover:bg-primary/90"}
        >
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
