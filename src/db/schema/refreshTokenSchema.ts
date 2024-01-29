import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { type InferInsertModel, type InferSelectModel } from "drizzle-orm";

// import schemas
import { userSchema } from "./userSchema.js";

export const refreshTokenSchema = pgTable(
    "refresh_token",

    {

        id: uuid('id').primaryKey().unique().notNull().defaultRandom(),
        userId: uuid('user_id').notNull(),
        token: text('token').notNull(),

        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().notNull(),
    }
);


// define relationships
export const refreshTokenRelations = relations(refreshTokenSchema, ({ one }) => ({
    user: one(userSchema, { fields: [refreshTokenSchema.userId], references: [userSchema.id] })
}))


// export the types
export type SelectRefreshToken = InferSelectModel<typeof refreshTokenSchema>
export type InsertRefreshToken = InferInsertModel<typeof refreshTokenSchema>