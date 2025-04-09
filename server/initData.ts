import { db } from "./db";
import { 
  events, insertEventSchema,
  galleryImages, insertGalleryImageSchema,
  impactStats, insertImpactStatSchema
} from "../shared/schema";
import { z } from "zod";

/**
 * Initialize the database with sample data
 */
export async function initializeDatabase() {
  try {
    // Check if we already have data in the events table
    const existingEvents = await db.select().from(events);
    
    if (existingEvents.length > 0) {
      console.log("Database already has data. Skipping initialization.");
      return;
    }
    
    console.log("Initializing database with sample data...");

    // Insert sample events
    const sampleEvents = [
      {
        title: "City Hope Run 2023",
        description: "Join us for a 10K run to raise funds for children's education in urban slums.",
        category: "Marathon",
        date: new Date("2023-10-15"),
        location: "Central Park",
        imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3",
        registrationLink: "#register",
        featured: true
      },
      {
        title: "Life Drop Camp",
        description: "Donate blood and help save lives. One donation can save up to three lives.",
        category: "Blood Donation",
        date: new Date("2023-09-28"),
        location: "City Hospital",
        imageUrl: "https://images.unsplash.com/photo-1615461066159-fea0960485d5",
        registrationLink: "#register",
        featured: true
      },
      {
        title: "Wisdom Circle",
        description: "A companionship initiative to spend quality time with elderly community members.",
        category: "Elderly Care",
        date: new Date("2023-10-05"),
        location: "Golden Age Home",
        imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
        registrationLink: "#register",
        featured: true
      }
    ];

    // Validate and insert events
    for (const event of sampleEvents) {
      const validatedEvent = insertEventSchema.parse(event);
      await db.insert(events).values(validatedEvent);
    }

    // Insert sample impact stats
    const sampleImpactStats = [
      {
        title: "Events Conducted",
        value: "42",
        category: "primary"
      },
      {
        title: "Lives Impacted",
        value: "5,200+",
        category: "secondary"
      },
      {
        title: "Funds Raised",
        value: "₹12.5L",
        category: "tertiary"
      },
      {
        title: "Partner Organizations",
        value: "18",
        category: "primary"
      }
    ];

    for (const stat of sampleImpactStats) {
      const validatedStat = insertImpactStatSchema.parse(stat);
      await db.insert(impactStats).values(validatedStat);
    }

    // Insert sample gallery images
    const sampleGalleryImages = [
      {
        title: "Marathon participants celebrating at finish line",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
        category: "Marathon",
        featured: true
      },
      {
        title: "Blood donation camp volunteers",
        imageUrl: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
        category: "Blood Donation",
        featured: true
      },
      {
        title: "Volunteers teaching children at Anganwadi",
        imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
        category: "Anganwadi",
        featured: true
      },
      {
        title: "Elderly care program activities",
        imageUrl: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4",
        category: "Elderly Care",
        featured: true
      },
      {
        title: "Group of cyclists at cyclothon event",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
        category: "Cyclothon",
        featured: true
      },
      {
        title: "Volunteers at palliative care awareness program",
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
        category: "Palliative Care",
        featured: true
      },
      {
        title: "Children playing at supported Anganwadi",
        imageUrl: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
        category: "Anganwadi",
        featured: true
      },
      {
        title: "Team celebrating after successful fundraising event",
        imageUrl: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807",
        category: "Fundraising",
        featured: true
      }
    ];

    for (const image of sampleGalleryImages) {
      const validatedImage = insertGalleryImageSchema.parse(image);
      await db.insert(galleryImages).values(validatedImage);
    }

    console.log("Database initialization complete.");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}