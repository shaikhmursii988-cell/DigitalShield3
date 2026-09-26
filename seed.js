const bcrypt = require('bcryptjs');

/**
 * Initial Seed Data for Local Database
 */
function getInitialSeedData() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync("Shield@2026", salt);

  return {
    users: [
      {
        id: "user_demo_01",
        name: "Alex Turner",
        email: "alex@digitalshield.io",
        username: "alex",
        password: hashedPassword,
        role: "user",
        createdAt: new Date().toISOString(),
        quizAttempts: []
      }
    ],
    quizQuestions: [
      {
        id: 1,
        question: "What makes a password cryptographically strong and resilient against brute-force attacks?",
        options: [
          "Using a simple sequential number pattern like '123456' or '987654'",
          "Using common dictionary words like 'password' or 'admin'",
          "Using your first name combined with your birth year like 'Alex1998'",
          "A long passphrase (12+ chars) combining uppercase, lowercase, numbers, and symbols"
        ],
        correct: 3,
        explanation: "Strong passwords have high entropy (length and complexity). Long mixed passphrases take supercomputers billions of years to crack."
      },
      {
        id: 2,
        question: "What is the safest immediate action if you receive a suspicious email asking for urgent account verification?",
        options: [
          "Click the verification link right away to avoid account suspension",
          "Do not click links or download attachments; verify via official website or delete/report it",
          "Reply with your password and username to confirm your identity",
          "Forward the email to all your coworkers to test their reaction"
        ],
        correct: 1,
        explanation: "Phishing emails create artificial urgency. Never click embedded links; always navigate directly to the verified official platform."
      },
      {
        id: 3,
        question: "What is Two-Factor Authentication (2FA) and why is it essential?",
        options: [
          "Entering the exact same password twice when logging in",
          "Requiring two separate passwords created on the same day",
          "An extra security layer requiring a secondary verification method (e.g. OTP, Authenticator app)",
          "A system that logs you out every 2 minutes automatically"
        ],
        correct: 2,
        explanation: "2FA ensures that even if an attacker steals your password, they cannot gain access without your physical second factor."
      },
      {
        id: 4,
        question: "What does 'HTTPS' with a padlock icon in your browser's address bar signify?",
        options: [
          "The website is 100% immune to all computer viruses",
          "Communication between your browser and the website server is encrypted via TLS/SSL",
          "The website is operated by authorized security intelligence",
          "You are browsing in incognito mode without saving history"
        ],
        correct: 1,
        explanation: "HTTPS encrypts the data in transit, preventing eavesdroppers from intercepting passwords, credit cards, and personal messages."
      },
      {
        id: 5,
        question: "Why is conducting financial transactions on free public Wi-Fi without a VPN dangerous?",
        options: [
          "Public Wi-Fi discharges your device battery twice as fast",
          "Attackers on the same unencrypted network can execute Man-in-the-Middle (MitM) packet sniffing",
          "Public Wi-Fi reduces your internet browsing bandwidth limit",
          "Banks block internet connections originating from coffee shops"
        ],
        correct: 1,
        explanation: "Unsecured public networks allow attackers on the same network to intercept unencrypted traffic and spoof malicious login portals."
      },
      {
        id: 6,
        question: "What constitutes your 'Digital Footprint' on the internet?",
        options: [
          "The physical fingerprint scanner hardware on your smartphone",
          "The brand of mouse and keyboard attached to your computer",
          "The permanent trail of data, social posts, browsing history, and IP logs left by your online activity",
          "The storage capacity of your local hard drive disk"
        ],
        correct: 2,
        explanation: "Your digital footprint is permanently recorded across web servers, search engines, and data brokers. Careful hygiene is vital for privacy."
      },
      {
        id: 7,
        question: "How often should you apply operating system security patches and app updates?",
        options: [
          "Never, because updates always introduce system bugs",
          "Once every 5 years when you purchase a brand new computer",
          "Promptly or enable auto-updates, as patches fix newly discovered software vulnerabilities",
          "Only after your device has been locked by malicious software"
        ],
        correct: 2,
        explanation: "Online attackers reverse-engineer disclosed vulnerabilities. Prompt patching closes known backdoors before attackers exploit them."
      },
      {
        id: 8,
        question: "What is 'Social Engineering' in the context of online security attacks?",
        options: [
          "Building social media applications using programming languages",
          "Psychological manipulation of individuals into divulging confidential information or granting access",
          "Configuring hardware firewalls and router switches",
          "Designing ergonomic keyboards for computer engineers"
        ],
        correct: 1,
        explanation: "Social engineering targets human psychology (trust, fear, urgency) rather than software bugs to compromise security perimeters."
      },
      {
        id: 9,
        question: "What is the safest practice before clicking on a shortened URL (e.g., bit.ly / tinyurl) sent by an unknown contact?",
        options: [
          "Click it immediately to see where it redirects",
          "Share it on social media to ask if anyone knows it",
          "Use a URL expander / link scanner tool or inspect the destination header before opening",
          "Change your computer wallpaper to cyan"
        ],
        correct: 2,
        explanation: "Shortened links often mask malicious phishing domains or drive-by malware downloads. Always expand or inspect them first."
      },
      {
        id: 10,
        question: "Which of the following is a dangerous oversharing habit on public social media?",
        options: [
          "Posting photos of your boarding pass, house keys, or answers to security questions (pets/hometown)",
          "Sharing an educational article about digital safety tips",
          "Changing your account privacy settings to 'Friends Only'",
          "Using a random avatar instead of a personal photo"
        ],
        correct: 0,
        explanation: "Boarding passes contain scannable barcodes with personal data, and details like hometowns or pet names give away account recovery answers."
      }
    ],
    learningModules: [
      {
        id: "social-media",
        title: "Social Media Safety & Oversharing",
        icon: "🌐",
        tag: "Identity & Social Defense",
        overview: "Social media platforms are prime targets for reconnaissance by identity thieves, online scammers, and spear-phishers.",
        checklist: [
          "Review privacy settings quarterly: Keep profiles restricted to verified friends only.",
          "Never post travel itineraries or boarding pass barcodes while away from home.",
          "Beware of quizzes asking for your first car, mother's maiden name, or pet names (these harvest password recovery answers).",
          "Enable Login Alerts to be notified whenever someone attempts to log in from a new device."
        ]
      },
      {
        id: "digital-footprint",
        title: "Digital Footprint & Data Permanence",
        icon: "👣",
        tag: "Data Privacy & Footprint",
        overview: "Every website visit, comment, search query, and photo upload contributes to a permanent dossier that data brokers compile and sell.",
        checklist: [
          "Search your name periodically on search engines to monitor what personal data is publicly visible.",
          "Delete old, inactive online accounts and revoke third-party app access permissions.",
          "Use privacy-respecting search engines and configure browsers to delete third-party tracking cookies.",
          "Opt-out of data broker listings (PeopleFinder, WhitePages) to limit public lookup."
        ]
      },
      {
        id: "phishing",
        title: "Phishing Awareness & Zero-Trust Verification",
        icon: "🎣",
        tag: "Threat Neutralization",
        overview: "Over 90% of successful data breaches begin with a phishing lure disguised as a legitimate notification from a bank, employer, or delivery service.",
        checklist: [
          "Check the sender's true domain carefully (e.g. support@paypa1-security.com vs paypal.com).",
          "Look for artificial urgency ('Account Suspended in 24 Hours!').",
          "Never enter login credentials on websites reached directly via email or SMS links.",
          "Always navigate directly to the verified service bookmark or official app."
        ]
      },
      {
        id: "passwords",
        title: "Password Cryptography & Vaults",
        icon: "🔐",
        tag: "Authentication & Cryptography",
        overview: "Password reuse is the single biggest cause of credential stuffing breaches. One leaked database can compromise all your linked accounts.",
        checklist: [
          "Adopt a dedicated Password Manager (Bitwarden, 1Password, KeePass) to generate 16+ character unique passwords.",
          "Use passphrases of 4+ random words (e.g. 'Cosmic-Tandem-Velvet-Shield-99!').",
          "Activate Hardware Security Keys (FIDO2 / YubiKey) or Authenticator Apps for sensitive services.",
          "Never store plain-text passwords in unencrypted notes or browser memory."
        ]
      },
      {
        id: "privacy",
        title: "Online Privacy & End-to-End Encryption",
        icon: "🛡️",
        tag: "Network & Traffic Security",
        overview: "Protecting your internet traffic from ISP tracking, unencrypted eavesdropping, and targeted advertising profiling.",
        checklist: [
          "Always check for HTTPS with valid TLS/SSL certificates on every web portal.",
          "Use a verified No-Logs Virtual Private Network (VPN) when connected to untrusted networks.",
          "Prefer messaging apps with end-to-end encryption (Signal, WhatsApp) over standard SMS.",
          "Disable microphone, camera, and precise location permissions for apps that don't strictly require them."
        ]
      },
      {
        id: "tips",
        title: "Online Safety Proactive Habits",
        icon: "⚡",
        tag: "System Fortification",
        overview: "Essential daily habits and protective measures to keep your operating systems, devices, and backups fully resilient.",
        checklist: [
          "Maintain the 3-2-1 backup rule: 3 copies of important data, 2 different media types, 1 offsite/cloud copy.",
          "Enable automatic security patch updates on Windows, macOS, Android, and iOS.",
          "Lock your screen every time you step away from your workstation (Win + L / Cmd + Ctrl + Q).",
          "Be skeptical of USB thumb drives found in public places (BadUSB exploits)."
        ]
      }
    ]
  };
}

module.exports = { getInitialSeedData };
