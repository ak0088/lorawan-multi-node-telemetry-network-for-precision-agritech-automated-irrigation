import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    project: 'LoRaWAN Multi-Node Telemetry Network for Precision Agritech & Automated Irrigation',
    domain: 'Internet of Things (IoT) & Embedded',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[LoRaWAN Multi-Node Telemetry Network for Precision Agritech & Automated Irrigation] Server operational on port ${PORT}`);
});
