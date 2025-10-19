import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Console warning for security
console.log(
  "%cStop!",
  "color: red; font-size: 60px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);"
);

console.log(
  "%cThis is a browser feature intended for developers.",
  "font-size: 18px; font-weight: bold;"
);

console.log(
  "%cIf someone told you to copy-paste something here to enable a feature or \"hack\" someone's account, it is a scam and will give them access to your information.",
  "font-size: 16px;"
);

console.log(
  "%cFor more information about self-XSS scams, visit: https://en.wikipedia.org/wiki/Self-XSS",
  "font-size: 14px; color: #0066cc;"
);

console.log(
  "%c💻 If you're a developer and want to collaborate, feel free to reach out!",
  "font-size: 14px; color: #00aa00; font-weight: bold; margin-top: 10px;"
);

createRoot(document.getElementById("root")!).render(<App />);
