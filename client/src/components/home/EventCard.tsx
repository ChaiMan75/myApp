import { format } from "date-fns";
import { Event } from "@/lib/types";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

const getCategoryConfig = (category: string): { color: string, bgColor: string } => {
  switch(category.toLowerCase()) {
    case 'marathon':
      return { color: 'text-primary', bgColor: 'bg-primary/10' };
    case 'blood donation':
      return { color: 'text-red-600', bgColor: 'bg-red-50' };
    case 'elderly care':
      return { color: 'text-emerald-600', bgColor: 'bg-emerald-50' };
    case 'cyclothon':
      return { color: 'text-amber-600', bgColor: 'bg-amber-50' };
    case 'walkathon':
      return { color: 'text-purple-600', bgColor: 'bg-purple-50' };
    default:
      return { color: 'text-blue-600', bgColor: 'bg-blue-50' };
  }
};

const EventCard = ({ event }: EventCardProps) => {
  const { color, bgColor } = getCategoryConfig(event.category);
  const formattedDate = typeof event.date === 'string' 
    ? format(new Date(event.date), 'MMM dd, yyyy') 
    : format(event.date, 'MMM dd, yyyy');

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg shadow-gray-200/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-52 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge className={`absolute top-3 left-3 ${bgColor} ${color} border-0`}>
          {event.category}
        </Badge>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {formattedDate}
          </div>
          <span>•</span>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {event.location}
          </div>
        </div>
        
        <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
        
        <p className="text-gray-600 mb-5 line-clamp-2">{event.description}</p>
        
        <Button asChild variant="ghost" className={`${color} ${bgColor} border-0 hover:bg-opacity-80 w-full justify-between mt-auto group`}>
          <a href={event.registrationLink} className="flex items-center">
            <span>Register Now</span>
            <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
