import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import { Event } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

const UpcomingEvents = () => {
  const { data: events, isLoading, isError } = useQuery<Event[]>({
    queryKey: ['/api/events/featured'],
  });

  return (
    <section className="py-16 bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-neutral-800">Upcoming Events</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Join us in our upcoming initiatives and be part of the movement for wellness and social responsibility.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {isLoading && (
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-7 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <div className="flex justify-between items-center">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {isError && (
            <div className="w-full text-center py-8">
              <p className="text-red-500 mb-2">Failed to load upcoming events.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
                className="mt-2"
              >
                Try Again
              </Button>
            </div>
          )}

          {events && events.map((event) => (
            <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold uppercase tracking-wide rounded-full transition transform hover:-translate-y-1 hover:shadow-md">
            <Link href="/events">
              View All Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
