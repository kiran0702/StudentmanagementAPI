import 'dotenv/config';
import express from 'express';
import schoolRoutes from './routes/schoolRoutes.js';

const app = express();
app.use(express.json());

// Friendly root route with tester guide
app.get("/", (req, res) => {
  res.send(`
    <h1>✅ School Management API is Live</h1>
    <p>Welcome, Tester! This API allows you to add schools and list them by proximity to a location.</p>
    
    <h3>📌 Endpoints:</h3>
    <ul>
      <li>
        <strong>POST /addSchool</strong><br/>
        Add a new school.<br/>
        <em>Example URL:</em> <code>https://your-live-url/addSchool</code><br/>
        <em>JSON Body:</em>
        <pre>{
  "name": "Green Valley High School",
  "address": "123 Elm Street, New Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}</pre>
      </li>
      <li>
        <strong>GET /listSchools</strong><br/>
        List schools sorted by distance from given location.<br/>
        Pass <code>latitude</code> and <code>longitude</code> as query parameters.<br/>
        <em>Example URL:</em>
        <code>https://your-live-url/listSchools?latitude=30.7333&longitude=76.7794</code>
      </li>
    </ul>

    <p>✔️ Tip: Use Postman or a browser (for GET) to test the endpoints.</p>
  `);
});

// Use School routes
app.use("/", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
