import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../shared/schema';

// Use the DATABASE_URL environment variable for the connection
const connectionString = process.env.DATABASE_URL || '';

// Create a new postgres client with the connection string
export const client = postgres(connectionString);

// Create a new drizzle instance with the client and schema
export const db = drizzle(client, { schema });