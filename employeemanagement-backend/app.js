import express from 'express';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
