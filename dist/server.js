import path from "path";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
// import routes
import authRoutes from "./routes/authRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
// import middlewares
import ErrorMiddleware from "./middlewares/errorMiddleware.js";
// express appclear
const app = express();
// __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, './public')));
// dot env
dotenv.config({ path: '.env' });
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// routes
app.get('/', (req, res) => res.send('Welcome to Node JS!'));
app.use('/api/v1', authRoutes);
app.use('/api/v1', tokenRoutes);
app.use('/api/v1', adminRoutes);
// error middleware
app.use(ErrorMiddleware);
// server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server listening on port 8000');
});
