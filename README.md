# LoRaWAN Multi-Node Telemetry Network for Precision Agritech & Automated Irrigation

> A fault-tolerant solar-powered wireless sensor mesh capturing real-time volumetric soil water content, canopy temperature, and NPK nutrients, streaming telemetry through edge micro-controllers to an automated actuator drip-fertigation controller.

[![Domain](https://img.shields.io/badge/Domain-Internet%20of%20Things%20(IoT)%20%26%20Embedded-indigo.svg)](.)
[![Complexity](https://img.shields.io/badge/Level-Intermediate-emerald.svg)](.)
[![Platform](https://img.shields.io/badge/Platform-AGPPTPPMA-blue.svg)](.)

## 📖 Overview
A fault-tolerant solar-powered wireless sensor mesh capturing real-time volumetric soil water content, canopy temperature, and NPK nutrients, streaming telemetry through edge micro-controllers to an automated actuator drip-fertigation controller.

This project was orchestrated and structured using the **AI Guided Project Progress Tracking Platform with Planning & Mentorship Assistance (AGPPTPPMA)**.

## 🚀 Key Features
- **Modular Pipeline**: Decoupled components with clear separation of concerns.
- **Robust Error Handling**: Graceful degradation and fallback heuristics.
- **Academic Rigor**: Complete IEEE-aligned proposal, threat matrix, and milestone roadmap.
- **Automated Health Tracking**: Real-time telemetry monitoring deliverables and potential bottlenecks.

## 🛠️ Tech Stack
- **Language**: TypeScript / Node.js
- **Frontend**: React 19, Tailwind CSS, Lucide Icons
- **Backend API**: Express.js REST Gateway
- **Persistence**: SQLite (ACID compliant)
- **Intelligence**: Google Gemini 2.5 Flash API

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/lorawan-multi-node-telemetry-network-for-precision-agritech-automated-irrigation.git
cd lorawan-multi-node-telemetry-network-for-precision-agritech-automated-irrigation
npm install
```

### Environment Setup
Create a `.env` file in the root directory:
```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET=your_jwt_secret_key
```

### Run Application
```bash
# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## 📊 Milestone Roadmap
1. **Systematic Literature Review of LoRaWAN AgTech Implementations** (Phase 1: Literature Review & Requirements Engineering) — Priority: `High`
2. **Requirements Analysis and Technical Specification Document** (Phase 1: Literature Review & Requirements Engineering) — Priority: `High`
3. **Modular Architecture Design (Sensor Node & Edge Controller)** (Phase 2: Architectural Design & Prototyping) — Priority: `High`
4. **Hardware Integration & Embedded Firmware Development** (Phase 2: Architectural Design & Prototyping) — Priority: `High`
5. **Development of Telemetry Processing & Irrigation Logic** (Phase 3: System Implementation & Verification) — Priority: `High`
6. **Automated Unit and Integration Testing Suite** (Phase 3: System Implementation & Verification) — Priority: `Medium`
7. **Empirical Benchmarking (Latency, Power, Precision)** (Phase 4: Benchmarking, Validation & Documentation) — Priority: `High`
8. **Final Thesis Documentation & Project Synthesis** (Phase 4: Benchmarking, Validation & Documentation) — Priority: `High`

## 🛡️ Risk Management Matrix
1. **Power consumption optimization failure in remote, solar-powered nodes** [High] -> *Mitigation: Implement low-power sleep modes, periodic data transmission schedules, and rigorous power budget analysis before hardware assembly.*
2. **LoRaWAN packet collision and signal interference in high-density node deployment** [Medium] -> *Mitigation: Design a strategic spreading factor (SF) management protocol and implement duty cycle restrictions to prevent channel congestion.*
3. **Calibration drift of NPK and moisture sensors due to environmental exposure** [Medium] -> *Mitigation: Develop a multi-point calibration procedure using controlled lab environments and implement software-based data filtering/averaging algorithms.*
4. **Scope creep during Phase 3 (System Implementation)** [Medium] -> *Mitigation: Strict adherence to modular milestones and prioritization of the MVP (Minimum Viable Product) features over non-essential functionality.*

## 📜 License
MIT License. Developed for Academic Research and Capstone Evaluation.
