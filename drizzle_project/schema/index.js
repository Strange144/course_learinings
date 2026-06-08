import { boolean, timestamp } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  isActive:boolean("isActive").default(true),
  createdAt:timestamp("createdAt").defaultNow(),
  updateAt:timestamp("updateAt").defaultNow()
});
