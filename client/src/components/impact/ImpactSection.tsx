import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { ImpactStat, GalleryImage } from "@/lib/types";

const ImpactSection = () => {
  const { data: stats, isLoading: statsLoading } = useQuery<ImpactStat[]>({
    queryKey: ['/api/impact-stats'],
  });

  const { data: images, isLoading: imagesLoading } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery/featured'],
  });

  const getStatColor = (category: string) => {
    switch (category) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-green-500';
      case 'tertiary':
        return 'text-blue-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="impact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-neutral-800">Our Impact</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Through the dedication of our volunteers and partners, we've touched thousands of lives across our communities.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mb-12">
          {statsLoading ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full md:w-1/4 px-4 mb-8">
                  <div className="bg-neutral-100 rounded-lg p-6 text-center h-full">
                    <Skeleton className="h-10 w-24 mx-auto mb-2" />
                    <Skeleton className="h-5 w-36 mx-auto" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            stats?.map((stat) => (
              <div key={stat.id} className="w-full md:w-1/4 px-4 mb-8">
                <div className="bg-neutral-100 rounded-lg p-6 text-center h-full">
                  <div className={`${getStatColor(stat.category)} text-5xl font-bold font-heading mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-neutral-700 font-semibold">{stat.title}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-neutral-100 rounded-lg p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl mb-6 text-center">Gallery of Smiles and Stories</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagesLoading ? (
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="aspect-square">
                    <Skeleton className="w-full h-full rounded-lg" />
                  </div>
                ))}
              </>
            ) : (
              images?.map((image) => (
                <div key={image.id} className="aspect-square">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-lg hover:opacity-90 transition cursor-pointer"
                  />
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery" className="font-heading font-semibold text-primary hover:text-orange-600">
              View Full Gallery <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
