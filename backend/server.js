import dotenv from "dotenv";
import express from 'express';
import schoolRoutes from './routes/schoolRoutes.js';
dotenv.config()
const app = express();
app.use(express.json());

// Use routes
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
