
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Update document title
document.title = 'SOS Vet Rabat - Veterinary Clinic in Morocco';

createRoot(document.getElementById("root")!).render(<App />);
