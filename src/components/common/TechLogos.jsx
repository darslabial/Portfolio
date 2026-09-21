/**
 * TechLogo
 * Renders authentic, high-fidelity SVG logos for programming languages,
 * frameworks, hardware, and engineering competencies.
 */
export default function TechLogo({ name = '', size = 18 }) {
  const normalized = name.toLowerCase();

  // 1. PHP (Iconic ElePHPant / PHP Logo)
  if (normalized.includes('php') && !normalized.includes('laravel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* ElePHPant Silhouette & Ears */}
        <path
          d="M3 14.5C3 11 5 8.5 8.5 8.5C11 8.5 13 9 14.5 9C17 9 19.5 7.5 21 9C22.2 10.2 22 13 21 14.5C20 16 19 16 18.5 18H16L16.2 16H13L12.8 18H10.5L11 15C9.5 15.2 8.5 15.5 7 16.5L6.5 19H4.2L4.8 16C3.8 15.8 3 15.2 3 14.5Z"
          fill="#777BB4"
        />
        {/* Elephant Ear */}
        <ellipse cx="9" cy="11.5" rx="2" ry="3" fill="#8892BF" />
        {/* Eye */}
        <circle cx="18" cy="11" r="0.8" fill="#FFFFFF" />
        <circle cx="18.2" cy="11" r="0.4" fill="#1C1E38" />
        {/* Trunk curve */}
        <path d="M21 12.5C21.5 13.5 21 15 20 15.5" stroke="#4F5B93" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 2. Python (Interlocking blue & yellow snakes)
  if (normalized.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Blue snake (top left) */}
        <path
          d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5V5.2H12.1V5.8H6.5C4.2 5.8 2.2 7.2 2.2 10.4C2.2 13.7 4 13.5 4 13.5H5.4V11.8C5.4 9.8 7.1 9.8 7.1 9.8H10.7C12.4 9.8 12.4 8.2 12.4 8.2V3.7C12.4 3.7 12.8 2 11.9 2ZM9.7 3.3C10.2 3.3 10.6 3.7 10.6 4.2C10.6 4.7 10.2 5.1 9.7 5.1C9.2 5.1 8.8 4.7 8.8 4.2C8.8 3.7 9.2 3.3 9.7 3.3Z"
          fill="#3776AB"
        />
        {/* Yellow snake (bottom right) */}
        <path
          d="M12.1 22C15.7 22 15.5 20.5 15.5 20.5V18.8H11.9V18.2H17.5C19.8 18.2 21.8 16.8 21.8 13.6C21.8 10.3 20 10.5 20 10.5H18.6V12.2C18.6 14.2 16.9 14.2 16.9 14.2H13.3C11.6 14.2 11.6 15.8 11.6 15.8V20.3C11.6 20.3 11.2 22 12.1 22ZM14.3 20.7C13.8 20.7 13.4 20.3 13.4 19.8C13.4 19.3 13.8 18.9 14.3 18.9C14.8 18.9 15.2 19.3 15.2 19.8C15.2 20.3 14.8 20.7 14.3 20.7Z"
          fill="#FFD438"
        />
      </svg>
    );
  }

  // 3. JavaScript
  if (normalized.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7.5 17.8C8.3 17.8 8.8 17.4 9.1 16.8L9.1 12H7.6V15.7C7.6 16.2 7.3 16.4 6.8 16.4C6.3 16.4 5.9 16.1 5.7 15.6L4.5 16.4C4.9 17.3 6.1 17.8 7.5 17.8ZM14.7 17.8C16.5 17.8 17.5 16.8 17.5 15.3C17.5 13.8 16.6 13.2 15.2 12.6C14.2 12.2 13.7 11.9 13.7 11.3C13.7 10.8 14.1 10.5 14.7 10.5C15.3 10.5 15.7 10.8 16 11.4L17.2 10.6C16.7 9.6 15.8 9.2 14.7 9.2C13.1 9.2 12.2 10.1 12.2 11.4C12.2 12.8 13 13.5 14.4 14.1C15.4 14.5 16 14.9 16 15.5C16 16.1 15.4 16.5 14.7 16.5C13.9 16.5 13.4 16.1 13 15.4L11.8 16.2C12.3 17.2 13.4 17.8 14.7 17.8Z"
          fill="#000000"
        />
      </svg>
    );
  }

  // 4. C++ (Hexagonal C++ Badge)
  if (normalized.includes('c++')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#00599C" />
        <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" fill="#004482" />
        {/* C letter */}
        <path d="M10.5 9.5C9.5 9.5 8.5 10.5 8.5 12C8.5 13.5 9.5 14.5 10.5 14.5C11.2 14.5 11.8 14.1 12.2 13.5L13.5 14.3C12.8 15.5 11.8 16 10.5 16C8 16 6.5 14.2 6.5 12C6.5 9.8 8 8 10.5 8C11.8 8 12.8 8.5 13.5 9.7L12.2 10.5C11.8 9.9 11.2 9.5 10.5 9.5Z" fill="#FFFFFF" />
        {/* ++ signs */}
        <path d="M14.5 11H15.5V10H16.5V11H17.5V12H16.5V13H15.5V12H14.5V11Z" fill="#659AD2" />
        <path d="M17.8 11H18.8V10H19.8V11H20.8V12H19.8V13H18.8V12H17.8V11Z" fill="#659AD2" />
      </svg>
    );
  }

  // 5. Arduino (Teal Infinity Loop with +/-)
  if (normalized.includes('arduino')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#00979D" />
        {/* Infinity loop */}
        <path
          d="M7.5 8C5.5 8 4 9.8 4 12C4 14.2 5.5 16 7.5 16C9.5 16 11 13.5 12 12C11 10.5 9.5 8 7.5 8ZM16.5 8C14.5 8 13 10.5 12 12C13 13.5 14.5 16 16.5 16C18.5 16 20 14.2 20 12C20 9.8 18.5 8 16.5 8Z"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Minus on left */}
        <line x1="6.5" y1="12" x2="8.5" y2="12" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        {/* Plus on right */}
        <line x1="15.5" y1="12" x2="17.5" y2="12" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16.5" y1="11" x2="16.5" y2="13" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. PostgreSQL (Official Slonik Elephant Head Logo)
  if (normalized.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1A344D" stroke="#336791" strokeWidth="0.8" />
        {/* Slonik elephant head */}
        <path
          d="M12 4C8 4 6 6.5 6 10C6 12 7 13.5 8 14.5C8 16 8 17.5 9 19L11 20L11.5 17C12 17.2 12.5 17.2 13 17C13 18.5 14 19.5 15.5 19.5C16.5 19.5 17 18.5 17 17.5C18 16.5 18.5 15 18.5 13.5C18.5 11 18 8 16 5.5C14.8 4.5 13.5 4 12 4Z"
          fill="#336791"
        />
        {/* Ear contour */}
        <path d="M12 6C9.5 6 8.5 8 8.5 11C8.5 13.5 10 14.5 11.5 14.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
        {/* Trunk & Eye */}
        <circle cx="15.5" cy="9.5" r="0.9" fill="#FFFFFF" />
        <circle cx="15.7" cy="9.5" r="0.4" fill="#0E2336" />
        <path d="M14 13.5C15 14 15.5 15 15 16.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 7. SQL (MySQL / SQLite / RDBMS)
  if (normalized.includes('sql') || normalized.includes('mysql') || normalized.includes('sqlite')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00618A" />
        {/* Cylinders */}
        <ellipse cx="12" cy="7" rx="7" ry="2.5" fill="#E48E00" />
        <path d="M5 7V12C5 13.4 8.1 14.5 12 14.5C15.9 14.5 19 13.4 19 12V7" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
        <path d="M5 12V17C5 18.4 8.1 19.5 12 19.5C15.9 19.5 19 18.4 19 17V12" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
      </svg>
    );
  }

  // 7. HTML5 & CSS3
  if (normalized.includes('html') || normalized.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* HTML5 Shield */}
        <path d="M3 3L4.8 20L12 22L19.2 20L21 3H3Z" fill="#E44D26" />
        <path d="M12 4.5V20.3L17.8 18.7L19.4 4.5H12Z" fill="#F16529" />
        <path d="M7 8H17L16.7 11.5H10.5L10.8 14.5H16.4L15.9 18L12 19.1L8.1 18L7.8 14.5H9.6L9.8 16.5L12 17.1L14.2 16.5L14.4 14.5H7L7 8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 8. Laravel (PHP)
  if (normalized.includes('laravel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#FF2D20" />
        {/* Isometric Origami Layer */}
        <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M12 4L19 8L12 12L5 8L12 4Z" fill="#FF5247" />
        <path d="M12 12L19 8V16L12 20V12Z" fill="#E0180B" />
      </svg>
    );
  }

  // 9. Vue.js / Nuxt
  if (normalized.includes('vue') || normalized.includes('nuxt')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Outer green V */}
        <path d="M2 3H6.5L12 12.5L17.5 3H22L12 21L2 3Z" fill="#42B883" />
        {/* Inner dark slate V */}
        <path d="M6.5 3H10L12 6.5L14 3H17.5L12 13L6.5 3Z" fill="#35495E" />
      </svg>
    );
  }

  // 10. Django
  if (normalized.includes('django')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        {/* White bold 'dj' logo */}
        <path
          d="M13.8 5.5H16.2V15C16.2 17.2 14.8 18.5 12.5 18.5C10.8 18.5 9.7 17.8 9.2 16.8L11 15.5C11.3 16 11.8 16.4 12.5 16.4C13.4 16.4 13.8 15.8 13.8 14.8V5.5ZM13.8 10.2C13.2 9.5 12.3 9.1 11.2 9.1C8.8 9.1 7.2 11 7.2 13.5C7.2 16.1 8.8 17.9 11.2 17.9C12.3 17.9 13.2 17.5 13.8 16.8V10.2ZM11.4 15.8C10.1 15.8 9.2 14.7 9.2 13.5C9.2 12.3 10.1 11.2 11.4 11.2C12.6 11.2 13.6 12.3 13.6 13.5C13.6 14.7 12.6 15.8 11.4 15.8Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 11. Flask
  if (normalized.includes('flask')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1C1C1C" />
        {/* Laboratory Flask */}
        <path
          d="M10 4H14V7L18.5 16C19.2 17.4 18.2 19 16.8 19H7.2C5.8 19 4.8 17.4 5.5 16L10 7V4Z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="9" y1="4" x2="15" y2="4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Liquid inside */}
        <path d="M7 16L9 12H15L17 16C17.3 16.6 16.9 17.2 16.3 17.2H7.7C7.1 17.2 6.7 16.6 7 16Z" fill="#00D8FF" />
      </svg>
    );
  }

  // 12. Android Studio / Java
  if (normalized.includes('android') || normalized.includes('java')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Android Bug Head */}
        <path d="M6 13C6 8.5 8.7 5 12 5C15.3 5 18 8.5 18 13H6Z" fill="#3DDC84" />
        <circle cx="9.5" cy="9.5" r="1.2" fill="#FFFFFF" />
        <circle cx="14.5" cy="9.5" r="1.2" fill="#FFFFFF" />
        {/* Antennas */}
        <line x1="8" y1="5.5" x2="6.5" y2="2.5" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="5.5" x2="17.5" y2="2.5" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
        {/* Base body */}
        <rect x="6" y="14.5" width="12" height="4.5" rx="2" fill="#3DDC84" />
      </svg>
    );
  }

  // 13. Git / GitHub / Gitea
  if (normalized.includes('git') || normalized.includes('gitea')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F05032" />
        {/* Git Branch Lines and Circles */}
        <circle cx="8" cy="7" r="2.2" fill="#FFFFFF" />
        <circle cx="8" cy="17" r="2.2" fill="#FFFFFF" />
        <circle cx="16" cy="11" r="2.2" fill="#FFFFFF" />
        <line x1="8" y1="9.2" x2="8" y2="14.8" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M8 12C11 12 13 11 13.8 11" stroke="#FFFFFF" strokeWidth="1.8" />
      </svg>
    );
  }

  // 14. VS Code
  if (normalized.includes('vs code') || normalized.includes('ide')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#007ACC" />
        {/* Ribbon folded effect */}
        <path d="M17.5 3L8 10.5L4 7.5L2 9L5 12L2 15L4 16.5L8 13.5L17.5 21L22 19V5L17.5 3Z" fill="#FFFFFF" />
        <path d="M17.5 3L8 10.5L17.5 18V3Z" fill="#1F9CF0" />
      </svg>
    );
  }

  // 15. ESP32 / Microcontrollers / Hardware CPU
  if (normalized.includes('esp32') || normalized.includes('microcontroller') || normalized.includes('cpu')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1A1829" stroke="#E62857" strokeWidth="1" />
        <rect x="7" y="7" width="10" height="10" rx="2" fill="#E62857" opacity="0.8" />
        <text x="12" y="14" fontFamily="sans-serif" fontSize="7" fontWeight="900" fill="#fff" textAnchor="middle">ESP</text>
        {/* Pins */}
        <line x1="4" y1="9" x2="7" y2="9" stroke="#FFD166" strokeWidth="1.2" />
        <line x1="4" y1="12" x2="7" y2="12" stroke="#FFD166" strokeWidth="1.2" />
        <line x1="4" y1="15" x2="7" y2="15" stroke="#FFD166" strokeWidth="1.2" />
        <line x1="17" y1="9" x2="20" y2="9" stroke="#FFD166" strokeWidth="1.2" />
        <line x1="17" y1="12" x2="20" y2="12" stroke="#FFD166" strokeWidth="1.2" />
        <line x1="17" y1="15" x2="20" y2="15" stroke="#FFD166" strokeWidth="1.2" />
      </svg>
    );
  }

  // 16. Sensor & Actuator / Robotics
  if (normalized.includes('sensor') || normalized.includes('actuator') || normalized.includes('robot')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E0714" stroke="rgba(255,100,140,0.3)" strokeWidth="1" />
        {/* Ultrasonic / Sensor Radar Waves */}
        <circle cx="12" cy="14" r="3" fill="#E62857" />
        <path d="M7.5 10C8.8 8.5 10.3 8 12 8C13.7 8 15.2 8.5 16.5 10" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 7C7 5 9.3 4 12 4C14.7 4 17 5 19 7" stroke="#06D6A0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 17. Computer Assembly & Repair
  if (normalized.includes('assembly') || normalized.includes('hardware') || normalized.includes('repair')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#16050C" stroke="#06D6A0" strokeWidth="1" />
        {/* PC Desktop Tower & Screwdriver */}
        <rect x="6" y="5" width="8" height="14" rx="1.5" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="8.5" y1="8" x2="11.5" y2="8" stroke="#06D6A0" strokeWidth="1" />
        <circle cx="10" cy="15" r="1" fill="#06D6A0" />
        <line x1="14" y1="18" x2="19" y2="13" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 18. OS Administration (Linux / Windows)
  if (normalized.includes('os') || normalized.includes('administration') || normalized.includes('linux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F0308" stroke="#FFD166" strokeWidth="1" />
        {/* Terminal prompt with prompt '>' */}
        <rect x="4" y="6" width="16" height="12" rx="2" fill="#1E0713" stroke="rgba(255,209,102,0.4)" strokeWidth="0.8" />
        <path d="M7 9L9.5 11.5L7 14" stroke="#06D6A0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="11" y1="14" x2="15" y2="14" stroke="#FFD166" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 19. WebSockets & APIs
  if (normalized.includes('websocket') || normalized.includes('api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1A0410" stroke="#06D6A0" strokeWidth="1" />
        {/* Lightning bolt / real-time connection */}
        <path d="M13 3L6 13H12L11 21L18 11H12L13 3Z" fill="#06D6A0" />
      </svg>
    );
  }

  // 20. Cisco & Packet Tracer
  if (normalized.includes('cisco') || normalized.includes('packet tracer')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#04273A" stroke="#00BCEB" strokeWidth="0.8" />
        {/* Cisco Bridge Wave Bars */}
        <line x1="5" y1="15" x2="5" y2="12" stroke="#00BCEB" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="7.8" y1="16.5" x2="7.8" y2="10.5" stroke="#00BCEB" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="10.6" y1="18" x2="10.6" y2="9" stroke="#00BCEB" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="13.4" y1="18" x2="13.4" y2="9" stroke="#00BCEB" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="16.2" y1="16.5" x2="16.2" y2="10.5" stroke="#00BCEB" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="19" y1="15" x2="19" y2="12" stroke="#00BCEB" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // 21. Ethernet Cabling & RJ-45 Crimping
  if (normalized.includes('cabling') || normalized.includes('crimping') || normalized.includes('rj-45')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1C0913" stroke="#06D6A0" strokeWidth="0.8" />
        {/* RJ45 Modular Connector */}
        <rect x="7" y="6" width="10" height="11" rx="2" fill="#06D6A0" opacity="0.85" />
        <line x1="9" y1="7.5" x2="9" y2="11.5" stroke="#120309" strokeWidth="1" />
        <line x1="11" y1="7.5" x2="11" y2="11.5" stroke="#120309" strokeWidth="1" />
        <line x1="13" y1="7.5" x2="13" y2="11.5" stroke="#120309" strokeWidth="1" />
        <line x1="15" y1="7.5" x2="15" y2="11.5" stroke="#120309" strokeWidth="1" />
        <rect x="9.5" y="17" width="5" height="4" rx="1" fill="#FFD166" />
      </svg>
    );
  }

  // 22. Network Security & Firewalls
  if (normalized.includes('firewall') || normalized.includes('security')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1D050D" stroke="#E62857" strokeWidth="0.8" />
        {/* Brick wall with shield */}
        <rect x="5" y="6" width="14" height="12" rx="2" fill="#E62857" opacity="0.75" />
        <line x1="5" y1="10" x2="19" y2="10" stroke="#FFFFFF" strokeWidth="0.8" />
        <line x1="5" y1="14" x2="19" y2="14" stroke="#FFFFFF" strokeWidth="0.8" />
        <line x1="9" y1="6" x2="9" y2="10" stroke="#FFFFFF" strokeWidth="0.8" />
        <line x1="15" y1="6" x2="15" y2="10" stroke="#FFFFFF" strokeWidth="0.8" />
        <line x1="12" y1="10" x2="12" y2="14" stroke="#FFFFFF" strokeWidth="0.8" />
        <line x1="8" y1="14" x2="8" y2="18" stroke="#FFFFFF" strokeWidth="0.8" />
        <line x1="16" y1="14" x2="16" y2="18" stroke="#FFFFFF" strokeWidth="0.8" />
      </svg>
    );
  }

  // 23. Subnetting & IP Architecture
  if (normalized.includes('subnet') || normalized.includes('ipv4') || normalized.includes('ip address')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#13091F" stroke="#FFD166" strokeWidth="0.8" />
        {/* CIDR subnet mask blocks */}
        <rect x="5" y="6" width="6" height="5" rx="1" fill="#FFD166" />
        <rect x="13" y="6" width="6" height="5" rx="1" fill="#FFD166" />
        <rect x="5" y="13" width="6" height="5" rx="1" fill="#06D6A0" />
        <rect x="13" y="13" width="6" height="5" rx="1" fill="#06D6A0" />
        <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 24. TCP/IP & Networking / Routers & Switches
  if (normalized.includes('tcp') || normalized.includes('network') || normalized.includes('router') || normalized.includes('switch')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#17050E" stroke="#E62857" strokeWidth="0.8" />
        {/* Network Nodes and Router links */}
        <circle cx="6" cy="12" r="2.2" fill="#06D6A0" />
        <circle cx="18" cy="7" r="2.2" fill="#FFD166" />
        <circle cx="18" cy="17" r="2.2" fill="#E62857" />
        <line x1="8" y1="12" x2="16" y2="8" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="8" y1="12" x2="16" y2="16" stroke="#FFFFFF" strokeWidth="1.2" />
      </svg>
    );
  }

  // 21. Database Normalization & Modeling
  if (normalized.includes('normalization') || normalized.includes('schema') || normalized.includes('queries')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18040F" stroke="#FFD166" strokeWidth="1" />
        {/* Relational Table Schema */}
        <rect x="5" y="6" width="6" height="5" rx="1" fill="#FFD166" opacity="0.8" />
        <rect x="13" y="13" width="6" height="5" rx="1" fill="#06D6A0" opacity="0.8" />
        <path d="M8 11V15H13" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 22. Analytical Thinking & Problem Solving
  if (normalized.includes('analytical') || normalized.includes('thinking')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#200612" stroke="#FFD166" strokeWidth="1" />
        {/* Brain Neural Spark */}
        <circle cx="12" cy="12" r="4" fill="#E62857" />
        <path d="M12 4V7M12 17V20M4 12H7M17 12H20" stroke="#FFD166" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 23. Technical Writing & Documentation
  if (normalized.includes('writing') || normalized.includes('reporting') || normalized.includes('documentation')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18050E" stroke="#06D6A0" strokeWidth="1" />
        {/* Document Sheet with Quill / Pen */}
        <path d="M6 4H15L18 7V20H6V4Z" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="9" y1="9" x2="13" y2="9" stroke="#06D6A0" strokeWidth="1" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="#06D6A0" strokeWidth="1" />
        <line x1="9" y1="15" x2="14" y2="15" stroke="#FFD166" strokeWidth="1" />
      </svg>
    );
  }

  // 24. AI Ethics & Practical Tools
  if (normalized.includes('ai') || normalized.includes('ethics')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E0714" stroke="#E62857" strokeWidth="1" />
        {/* Shield with Sparkle */}
        <path d="M12 4L18 6.5V12C18 16 15 19 12 20C9 19 6 16 6 12V6.5L12 4Z" fill="#E62857" opacity="0.3" stroke="#E62857" strokeWidth="1.2" />
        <circle cx="12" cy="11.5" r="2" fill="#FFD166" />
      </svg>
    );
  }

  // Default: Code Spark Badge
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#2A0A18" />
      <path d="M8 9L5 12L8 15M16 9L19 12L16 15M13 7L11 17" stroke="#FF4D7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
