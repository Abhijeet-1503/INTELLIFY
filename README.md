# SmartProctor-X: AI-Powered Multi-Level Proctoring

A comprehensive, enterprise-grade proctoring solution built with modern web technologies.

## Features

- **5-Level Detection Architecture**: From basic monitoring to advanced AI decision-making
- **Real-time Monitoring**: Live camera, audio, and behavioral analysis
- **Firebase Integration**: Cloud database with real-time synchronization
- **Authentication System**: Secure user management with role-based access
- **Privacy-First Design**: Local processing with minimal cloud exposure
- **Professional UI**: Modern, responsive interface built with shadcn/ui

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Backend**: Firebase (Firestore & Auth)
- **State Management**: React Query + Context API
- **Routing**: React Router

## Setup Instructions

### 1. Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore Database and Authentication
3. Get your Firebase configuration from Project Settings > General > Your apps
4. Update `.env` file with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 2. Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── contexts/           # React contexts (Auth, etc.)
├── hooks/              # Custom React hooks
├── services/           # External service integrations
├── types/              # TypeScript type definitions
└── lib/                # Utility libraries
```

## Usage

1. **Landing Page**: Visit `/` for product information
2. **Authentication**: Use `/auth` to sign up or sign in
3. **Dashboard**: Access `/dashboard` for session management
4. **Level 1 Proctoring**: Start basic proctoring at `/level1`

## Development Roadmap

### Phase 1: Foundation ✅
- [x] Firebase integration
- [x] Authentication system
- [x] Database schema design
- [x] Basic UI components

### Phase 2: Enhanced Level 1 ✅
- [x] Real-time session tracking
- [x] Database persistence
- [x] Alert system integration
- [x] Suspicion level monitoring

### Phase 3: Level 2 Implementation 🔄
- [ ] Real computer vision (face-api.js)
- [ ] Gaze tracking
- [ ] Head movement analysis
- [ ] Multi-screen detection

### Phase 4: Advanced Features 📋
- [ ] Audio analysis with speech recognition
- [ ] Environmental noise classification
- [ ] Behavioral pattern analysis
- [ ] Risk assessment algorithms

### Phase 5: Production Ready 📋
- [ ] Comprehensive testing
- [ ] Error handling and monitoring
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation completion

## Contributing

This project is being developed as part of a hackathon-to-MNC transformation. Contributions and suggestions are welcome!

## License

This project is proprietary software developed by Synaptic Overloaders.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS  
