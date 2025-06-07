import express from 'express';
import connectDB from '../config/database.js';
import itemRoutes from './routes/itemRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

// Error middleware
app.use(notFound);
app.use(errorHandler);

// Handler for DigitalOcean Functions
export default {
  async fetch(request, env) {
    // Create a response object that we'll return
    return await app(request);
  },
};

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
}