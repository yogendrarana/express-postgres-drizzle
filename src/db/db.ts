import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

// import schemas
import { userSchema } from "./schema/userSchema.js";
import { orderSchema } from "./schema/orderSchema.js";
import { productSchema } from "./schema/productSchema.js";
import { orderToProductSchema } from "./schema/orderToProduct.js";
import { refreshTokenSchema } from "./schema/refreshTokenSchema.js";


// import relations
import { userRelations } from "./schema/userSchema.js";
import { orderRelations } from "./schema/orderSchema.js";
import { productRelations } from "./schema/productSchema.js";
import { orderToProductRelations } from "./schema/orderToProduct.js";
import { refreshTokenRelations } from "./schema/refreshTokenSchema.js";

// create pool connection
const pool = new pg.Pool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "hobby",
});

// create drizzle instance
export const db = drizzle(pool, {
    schema: {
        userSchema,
        userRelations,
        refreshTokenSchema,
        refreshTokenRelations,
        orderSchema,
        orderRelations,
        productSchema,
        productRelations,
        orderToProductSchema,
        orderToProductRelations,
    },
});