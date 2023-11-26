import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

//////////////
// users
//////////////
export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({
      autoIncrement: true,
    }),
    email: text("email").notNull(),
    password: text("password"),
    avatar: text("avatar"),
    name: text("name"),
  },
  (users) => ({
    emailIdx: uniqueIndex("emailIdx").on(users.email),
  })
);

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

//////////////
// teams
//////////////
export const teams = sqliteTable("teams", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  name: text("name").notNull(),
  avatar: text("avatar"),
});

export const usersToTeams = sqliteTable("usersToTeams", {
  userId: integer("userId")
    .notNull()
    .references(() => users.id),
  teamId: integer("teamId")
    .notNull()
    .references(() => teams.id),
});

//////////////
// warehouses
//////////////


