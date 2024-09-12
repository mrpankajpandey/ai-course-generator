import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
// console.log(process.env.DATABASE_URL);

const sql = neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

export const db = drizzle(sql);

