
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Update document title with SOS Vet branding
document.title = 'SOS Vet Rabat - Veterinary Clinic in Morocco';

// Favicon as emoticon
const setFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';

  // Use import.meta.env.BASE_URL for proper path resolution in production and development
  const baseUrl = import.meta.env.BASE_URL || '/';
  link.href = `${baseUrl}/logo.png`;

  document.head.appendChild(link);
};

setFavicon();

createRoot(document.getElementById("root")!).render(<App />);
