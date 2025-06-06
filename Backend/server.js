// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express';

import itemsRouter from './routes/items.js';
import PetsRouter from './routes/pets.js';
import BirdsRouter from './routes/birds.js';
import FishRouter from './routes/fishes.js';
import FoodRouter from './routes/foods.js';
import ProductRouter from './routes/products.js';
import OrderRouter from './routes/orders.js';
import CartRouter from "./routes/carts.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(clerkMiddleware()); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));

app.use('/api/items', itemsRouter);
app.use('/api/pets', PetsRouter);
app.use('/api/birds', BirdsRouter);
app.use('/api/fishes', FishRouter);
app.use('/api/foods', FoodRouter);
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);
app.use('/api/carts', CartRouter);

console.log(process.env.VITE_CLERK_PUBLISHABLE_KEY)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
