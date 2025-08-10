import 'dotenv/config';
import express from 'express';
import schoolRoutes from './routes/schoolRoutes.js';

const app = express();
app.use(express.json());

// Friendly root route for testers
app.get("/", (req, res) => {
  res.send("✅ School Management API is running. Use POST /addSchool and GET /listSchools endpoints.");
});

// Use School routes
app.use("/", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
