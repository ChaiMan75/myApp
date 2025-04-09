import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  contacts, type Contact, type InsertContact,
  volunteers, type Volunteer, type InsertVolunteer,
  events, type Event, type InsertEvent,
  galleryImages, type GalleryImage, type InsertGalleryImage,
  impactStats, type ImpactStat, type InsertImpactStat 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { IStorage } from "./storage";

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Subscriber operations
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const [newSubscriber] = await db
      .insert(subscribers)
      .values(subscriber)
      .returning();
    return newSubscriber;
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
  }

  // Contact operations
  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  // Volunteer operations
  async createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer> {
    const [newVolunteer] = await db
      .insert(volunteers)
      .values(volunteer)
      .returning();
    return newVolunteer;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return await db.select().from(volunteers).orderBy(desc(volunteers.createdAt));
  }

  // Event operations
  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db
      .insert(events)
      .values({
        ...event,
        date: new Date(event.date)  // Ensure date is properly formatted
      })
      .returning();
    return newEvent;
  }

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.date));
  }

  async getFeaturedEvents(): Promise<Event[]> {
    return await db
      .select()
      .from(events)
      .where(eq(events.featured, true))
      .orderBy(desc(events.date));
  }

  async getEventById(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event || undefined;
  }

  // Gallery operations
  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const [newImage] = await db
      .insert(galleryImages)
      .values(image)
      .returning();
    return newImage;
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return await db.select().from(galleryImages);
  }

  async getFeaturedGalleryImages(): Promise<GalleryImage[]> {
    return await db
      .select()
      .from(galleryImages)
      .where(eq(galleryImages.featured, true));
  }

  // Impact stats operations
  async createImpactStat(stat: InsertImpactStat): Promise<ImpactStat> {
    const [newStat] = await db
      .insert(impactStats)
      .values(stat)
      .returning();
    return newStat;
  }

  async getImpactStats(): Promise<ImpactStat[]> {
    return await db.select().from(impactStats);
  }
}