import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  attendees?: number;
  image?: string;
  status: "upcoming" | "past";
}

const EventCard = ({ title, description, date, location, attendees, image, status }: EventCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={status === "upcoming" ? "default" : "secondary"}>
            {status === "upcoming" ? "Upcoming" : "Past Event"}
          </Badge>
          {attendees && (
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{attendees}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <Button 
          variant={status === "upcoming" ? "default" : "outline"} 
          className="w-full"
          disabled={status === "past"}
        >
          {status === "upcoming" ? "Register Now" : "View Details"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
