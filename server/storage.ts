import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  contacts, type Contact, type InsertContact,
  volunteers, type Volunteer, type InsertVolunteer,
  events, type Event, type InsertEvent,
  galleryImages, type GalleryImage, type InsertGalleryImage,
  impactStats, type ImpactStat, type InsertImpactStat
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  // User operations (from default template)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Subscriber operations
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscribers(): Promise<Subscriber[]>;

  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Volunteer operations
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;

  // Event operations
  createEvent(event: InsertEvent): Promise<Event>;
  getEvents(): Promise<Event[]>;
  getFeaturedEvents(): Promise<Event[]>;
  getEventById(id: number): Promise<Event | undefined>;

  // Gallery operations
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  getGalleryImages(): Promise<GalleryImage[]>;
  getFeaturedGalleryImages(): Promise<GalleryImage[]>;

  // Impact stats operations
  createImpactStat(stat: InsertImpactStat): Promise<ImpactStat>;
  getImpactStats(): Promise<ImpactStat[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribersMap: Map<number, Subscriber>;
  private contactsMap: Map<number, Contact>;
  private volunteersMap: Map<number, Volunteer>;
  private eventsMap: Map<number, Event>;
  private galleryImagesMap: Map<number, GalleryImage>;
  private impactStatsMap: Map<number, ImpactStat>;
  
  // Counters for IDs
  private userCounter: number;
  private subscriberCounter: number;
  private contactCounter: number;
  private volunteerCounter: number;
  private eventCounter: number;
  private galleryImageCounter: number;
  private impactStatCounter: number;

  constructor() {
    this.users = new Map();
    this.subscribersMap = new Map();
    this.contactsMap = new Map();
    this.volunteersMap = new Map();
    this.eventsMap = new Map();
    this.galleryImagesMap = new Map();
    this.impactStatsMap = new Map();
    
    this.userCounter = 1;
    this.subscriberCounter = 1;
    this.contactCounter = 1;
    this.volunteerCounter = 1;
    this.eventCounter = 1;
    this.galleryImageCounter = 1;
    this.impactStatCounter = 1;

    // Initialize with example data
    this.initializeData();
  }

  // User operations (from default template)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Subscriber operations
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.subscribersMap.values()).find(
      s => s.email === subscriber.email
    );
    
    if (existingSubscriber) {
      return existingSubscriber;
    }
    
    const id = this.subscriberCounter++;
    const newSubscriber: Subscriber = { 
      ...subscriber, 
      id, 
      createdAt: new Date() 
    };
    
    this.subscribersMap.set(id, newSubscriber);
    return newSubscriber;
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribersMap.values());
  }

  // Contact operations
  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactCounter++;
    const newContact: Contact = { 
      ...contact, 
      id, 
      createdAt: new Date() 
    };
    
    this.contactsMap.set(id, newContact);
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contactsMap.values());
  }

  // Volunteer operations
  async createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer> {
    // Check if email already exists
    const existingVolunteer = Array.from(this.volunteersMap.values()).find(
      v => v.email === volunteer.email
    );
    
    if (existingVolunteer) {
      return existingVolunteer;
    }
    
    const id = this.volunteerCounter++;
    const newVolunteer: Volunteer = { 
      ...volunteer, 
      id, 
      createdAt: new Date() 
    };
    
    this.volunteersMap.set(id, newVolunteer);
    return newVolunteer;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return Array.from(this.volunteersMap.values());
  }

  // Event operations
  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.eventCounter++;
    const newEvent: Event = { 
      ...event, 
      id 
    };
    
    this.eventsMap.set(id, newEvent);
    return newEvent;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.eventsMap.values());
  }

  async getFeaturedEvents(): Promise<Event[]> {
    return Array.from(this.eventsMap.values())
      .filter(event => event.featured);
  }

  async getEventById(id: number): Promise<Event | undefined> {
    return this.eventsMap.get(id);
  }

  // Gallery operations
  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const id = this.galleryImageCounter++;
    const newImage: GalleryImage = { 
      ...image, 
      id 
    };
    
    this.galleryImagesMap.set(id, newImage);
    return newImage;
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImagesMap.values());
  }

  async getFeaturedGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImagesMap.values())
      .filter(image => image.featured);
  }

  // Impact stats operations
  async createImpactStat(stat: InsertImpactStat): Promise<ImpactStat> {
    const id = this.impactStatCounter++;
    const newStat: ImpactStat = { 
      ...stat, 
      id 
    };
    
    this.impactStatsMap.set(id, newStat);
    return newStat;
  }

  async getImpactStats(): Promise<ImpactStat[]> {
    return Array.from(this.impactStatsMap.values());
  }

  // Initialize with example data
  private initializeData(): void {
    // Sample events
    this.createEvent({
      title: "City Hope Run 2023",
      description: "Join us for a 10K run to raise funds for children's education in urban slums.",
      category: "Marathon",
      date: new Date("2023-10-15"),
      location: "Central Park",
      imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3",
      registrationLink: "#register",
      featured: true
    });

    this.createEvent({
      title: "Life Drop Camp",
      description: "Donate blood and help save lives. One donation can save up to three lives.",
      category: "Blood Donation",
      date: new Date("2023-09-28"),
      location: "City Hospital",
      imageUrl: "https://images.unsplash.com/photo-1615461066159-fea0960485d5",
      registrationLink: "#register",
      featured: true
    });

    this.createEvent({
      title: "Wisdom Circle",
      description: "A companionship initiative to spend quality time with elderly community members.",
      category: "Elderly Care",
      date: new Date("2023-10-05"),
      location: "Golden Age Home",
      imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
      registrationLink: "#register",
      featured: true
    });

    // Sample impact stats
    this.createImpactStat({
      title: "Events Conducted",
      value: "42",
      category: "primary"
    });

    this.createImpactStat({
      title: "Lives Impacted",
      value: "5,200+",
      category: "secondary"
    });

    this.createImpactStat({
      title: "Funds Raised",
      value: "₹12.5L",
      category: "tertiary"
    });

    this.createImpactStat({
      title: "Partner Organizations",
      value: "18",
      category: "primary"
    });

    // Sample gallery images
    this.createGalleryImage({
      title: "Marathon participants celebrating at finish line",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
      category: "Marathon",
      featured: true
    });

    this.createGalleryImage({
      title: "Blood donation camp volunteers",
      imageUrl: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
      category: "Blood Donation",
      featured: true
    });

    this.createGalleryImage({
      title: "Volunteers teaching children at Anganwadi",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
      category: "Anganwadi",
      featured: true
    });

    this.createGalleryImage({
      title: "Elderly care program activities",
      imageUrl: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4",
      category: "Elderly Care",
      featured: true
    });

    this.createGalleryImage({
      title: "Group of cyclists at cyclothon event",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
      category: "Cyclothon",
      featured: true
    });

    this.createGalleryImage({
      title: "Volunteers at palliative care awareness program",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      category: "Palliative Care",
      featured: true
    });

    this.createGalleryImage({
      title: "Children playing at supported Anganwadi",
      imageUrl: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
      category: "Anganwadi",
      featured: true
    });

    this.createGalleryImage({
      title: "Team celebrating after successful fundraising event",
      imageUrl: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807",
      category: "Fundraising",
      featured: true
    });
  }
}

// Use the DatabaseStorage implementation instead of MemStorage
import { DatabaseStorage } from "./databaseStorage";

// Initialize database with sample data
import { initializeDatabase } from "./initData";

// Create database storage instance
export const storage = new DatabaseStorage();

// Initialize the database with sample data
// Comment this out in production
initializeDatabase().catch(console.error);
