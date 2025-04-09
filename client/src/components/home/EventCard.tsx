import { format } from "date-fns";
import { Event } from "@/lib/types";

interface EventCardProps {
  event: Event;
}

const getCategoryClasses = (category: string) => {
  switch(category.toLowerCase()) {
    case 'marathon':
      return 'bg-primary-light text-primary-dark';
    case 'blood donation':
      return 'bg-blue-100 text-blue-700';
    case 'elderly care':
      return 'bg-green-100 text-green-700';
    case 'cyclothon':
      return 'bg-orange-100 text-orange-700';
    case 'walkathon':
      return 'bg-purple-100 text-purple-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const EventCard = ({ event }: EventCardProps) => {
  const categoryClasses = getCategoryClasses(event.category);
  const formattedDate = typeof event.date === 'string' 
    ? format(new Date(event.date), 'MMM dd, yyyy') 
    : format(event.date, 'MMM dd, yyyy');

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 h-full">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`${categoryClasses} text-xs uppercase font-semibold px-2 py-1 rounded-full font-heading`}>
            {event.category}
          </span>
          <span className="text-neutral-600 text-sm">
            <i className="far fa-calendar-alt mr-1"></i> {formattedDate}
          </span>
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{event.title}</h3>
        <p className="text-neutral-700 mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-neutral-600 text-sm">
            <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
          </span>
          <a 
            href={event.registrationLink} 
            className="font-heading font-semibold text-primary hover:text-orange-600"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
