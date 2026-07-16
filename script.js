/* Qusetions */
const questions = [
  {
    text: "What GPU component does your machine rely on?",
    options: [
      { text: "Nvidia (I am okay with enabling third-party driver repositories or one-click installs).", tag: "nvidia-gpu-lenient" },
      { text: "Nvidia (I want the proprietary drivers completely pre-installed out-of-the-box).", tag: "nvidia-gpu-strict" },
      { text: "AMD or Intel (I can rely comfortably on native open-source kernel drivers).", tag: "amd-intel-gpu" },
      { text: "None / Low spec (Running on integrated chips, micro-boards, or VMs).", tag: "low-gpu" }
    ]
  },
  {
    text: "How comfortable are you using a text-based Terminal (Command Line)?",
    options: [
      { text: "I avoid it completely; I want a fully visual desktop experience.", tag: "beginner" },
      { text: "I can copy-paste commands if a guide tells me what to do.", tag: "intermediate" },
      { text: "I prefer working in the terminal over a mouse-driven interface.", tag: "advanced" }
    ]
  },
  {
    text: "How do you want your operating system installed?",
    options: [
        { text: "A standard graphical installer.(you can still configure partitions)", tag: "easy-install"},
        { text: "I want to manually configure partitions, kernel components, and files.", tag: "diy-install" }
    ]
  },
  {
    text: "What are the hardware specifications of your computer?",
    options: [
      { text: "A modern machine with plenty of RAM", tag: "heavy-hardware" },
      { text: "An old laptop or a low-resource micro-board device.", tag: "lightweight" }
    ]
  },
  {
    text: "What style of desktop layout makes you feel most at home?(Note that you usualy can easily change it if the distro supports it)",
    options: [
      { text: "A traditional Windows-style layout with a bottom panel and a menu.", tag: "windows-like" },
      { text: "A sleek, modern macOS-style layout featuring a bottom app dock.", tag: "mac-like" },
      { text: "A hyper-minimalist layout controlled completely by keyboard shortcuts.", tag: "tiling-wm" }
    ]
  },
  {
    text: "What is your primary use case for your machine?",
    options: [
      { text: "Only gaming.", tag: "gaming" },
      { text: "Server or developer.", tag: "dev-server" },
      { text: "Everyday use.", tag: "everyday" },
      { text: "Penetration testing.", tag: "security"}
    ]
  },
  {
    text: "How important is strict digital anonymity to you?",
    options: [
      { text: "Standard security(pretty enough for linux)", tag: "standard-privacy" },
      { text: "Extremely important. I want to route all network data through Tor.", tag: "extreme-privacy" }
    ]
  },
  {
    text: "What is your philosophy regarding pre-installed application software bundles?(Note that most distros are not Windows 11 like bloted)",
    options: [
      { text: "Give me a full ready suite (Office, media tools) immediately upon setup.", tag: "bloated-ready" },
      { text: "Give me an empty canvas. Let me manually select and install every package.", tag: "minimalist-base" }
    ]
  },
  {
    text: "How do you prefer your software system updates to be handled?",
    options: [
      { text: "Rock-solid stability. Packages shouldn't alter for years so nothing breaks.", tag: "stable-release" },
      { text: "Cutting-edge updates. Give me the newest version of apps immediately.", tag: "rolling-release" }
    ]
  },
  {
    text: "How do you feel about proprietary (closed-source) software tracking files?",
    options: [
      { text: "Include it if closed drivers (Nvidia/WiFi) optimize hardware utility.", tag: "mixed-source" },
      { text: "I only want 100% free and open-source software (FOSS) on my device.", tag: "pure-foss" }
    ]
  },
  {
    text: "Which core upstream distribution family tree do you prefer?(Don't forget you can skip if your not sure)",
    options: [
      { text: "Debian / Ubuntu (Massive documentation, stable package bases).", tag: "debian-base" },
      { text: "Arch Linux (Customizable rolling release, leverages the AUR framework).", tag: "arch-base" },
      { text: "Red Hat / Fedora (Enterprise-grade software standards, corporate backing).", tag: "rhel-base" },
      { text: "Independent (Unique architecture built completely from the ground up).", tag: "independent-base" }
    ]
  },
  {
    text: "Who do you want funding and supporting your OS software lifecycle?",
    options: [
      { text: "A reliable tech enterprise (like Canonical, Red Hat, or Valve).", tag: "corporate-backed" },
      { text: "A passionate, independent volunteer developer community group.", tag: "community-driven" }
    ]
  },
  {
    text: "Do you want a live portable OS running from a USB stick without writing data to your data storage drives?",
    options: [
      { text: "No, I want a permanent OS installed directly onto my local hardware drive.", tag: "standard-os" },
      { text: "Yes, an un-trackable system that runs exclusively inside volatile system RAM.", tag: "live-usb-os" }
    ]
  },
  {
    text: "What is your primary target gaming platform requirement?",
    options: [
      { text: "Handheld Console UI (Steam Deck overlays, gaming controller environments).", tag: "handheld-gaming" },
      { text: "Desktop PC Gaming (Optimized system kernel hooks, Wine/Proton layers).", tag: "desktop-gaming" },
      { text: "Non-Gamer (I do not need game engines or translation layers preloaded).", tag: "non-gaming" }
    ]
  },
  {
    text: "How do you want your core file packages organized and updated?",
    options: [
      { text: "Standard packaging systems (.deb, .rpm) matching direct updates.", tag: "standard-pkg" },
      { text: "An immutable structure controlled from one file, allowing instance rollbacks.", tag: "immutable-pkg" }
    ]
  }
];

/* Distros */
const distros = [
  /* DEBIAN / UBUNTU */
  { 
    name: "Ubuntu", 
    url: "https://ubuntu.com", 
    tags: ["beginner", "easy-install", "heavy-hardware", "mac-like", "everyday", "dev-server", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "debian-base", "corporate-backed", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "The world's most popular Linux distribution, perfect for beginners, developers, and enterprise servers alike." 
  },
  { 
    name: "Linux Mint", 
    url: "https://linuxmint.com", 
    tags: ["beginner", "easy-install", "lightweight", "windows-like", "everyday", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "debian-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "An elegant, modern operating system designed to work perfectly out-of-the-box, especially for those moving away from Windows." 
  },
  { 
    name: "Zorin OS", 
    url: "https://zorin.com", 
    tags: ["beginner", "easy-install", "lightweight", "windows-like", "mac-like", "everyday", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "debian-base", "corporate-backed", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A gorgeous, polished interface specifically styled to mimic the layout of Windows or macOS for a seamless transition." 
  },
  { 
    name: "Pop!_OS", 
    url: "https://system76.com", 
    tags: ["beginner", "intermediate", "easy-install", "heavy-hardware", "mac-like", "dev-server", "desktop-gaming", "standard-privacy", "stable-release", "minimalist-base", "mixed-source", "debian-base", "corporate-backed", "standard-os", "nvidia-gpu", "amd-intel-gpu", "standard-pkg"], 
    description: "Developed by System76, featuring automatic tiling windows and a separate installer built specifically with proprietary Nvidia drivers pre-baked for developers and gamers." 
  },
  { 
    name: "elementary OS", 
    url: "https://elementary.io", 
    tags: ["beginner", "easy-install", "heavy-hardware", "mac-like", "everyday", "standard-privacy", "stable-release", "minimalist-base", "pure-foss", "debian-base", "community-driven", "standard-os", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A privacy-respecting OS featuring an incredibly beautiful, custom Pantheon desktop environment inspired closely by macOS." 
  },
  { 
    name: "KDE Neon", 
    url: "https://kde.org", 
    tags: ["intermediate", "easy-install", "heavy-hardware", "windows-like", "everyday", "dev-server", "standard-privacy", "rolling-release", "minimalist-base", "mixed-source", "debian-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A fast, cutting-edge showcase of the latest KDE Plasma desktop software layouts built on top of a stable Ubuntu base core." 
  },
  { 
    name: "Linux Lite", 
    url: "https://linuxliteos.com", 
    tags: ["beginner", "easy-install", "lightweight", "windows-like", "everyday", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "debian-base", "community-driven", "standard-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "A lightweight desktop designed specifically to breathe life back into old laptops and aging computers with low system specs." 
  },
  { 
    name: "antiX", 
    url: "https://antixlinux.com", 
    tags: ["intermediate", "advanced", "easy-install", "lightweight", "windows-like", "everyday", "standard-privacy", "stable-release", "minimalist-base", "mixed-source", "debian-base", "community-driven", "standard-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "A completely systemd-free, ultra-lightweight environment engineered specifically for extremely old or low-resource hardware profiles." 
  },
  { 
    name: "Debian", 
    url: "https://debian.org", 
    tags: ["intermediate", "advanced", "easy-install", "lightweight", "heavy-hardware", "everyday", "dev-server", "standard-privacy", "stable-release", "minimalist-base", "pure-foss", "debian-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "The universal operating system. Rock-solid, purely community-driven, and the stable foundation that Ubuntu and Mint are built upon." 
  },
  { 
    name: "Kali Linux", 
    url: "https://kali.org", 
    tags: ["advanced", "easy-install", "heavy-hardware", "security", "standard-privacy", "rolling-release", "bloated-ready", "mixed-source", "debian-base", "corporate-backed", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "The premier distribution for cybersecurity professionals, penetration testers, forensic data specialists, and ethical hackers." 
  },
  { 
    name: "Tails", 
    url: "https://tails.net", 
    tags: ["intermediate", "advanced", "easy-install", "lightweight", "security", "extreme-privacy", "stable-release", "minimalist-base", "pure-foss", "debian-base", "community-driven", "live-usb-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "An amnesic, highly secure operating system designed to run entirely from USB RAM. Forces all outbound internet traffic strictly through the Tor anonymity network." 
  },
  { 
    name: "Raspberry Pi OS", 
    url: "https://raspberrypi.com", 
    tags: ["beginner", "intermediate", "easy-install", "lightweight", "everyday", "dev-server", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "debian-base", "corporate-backed", "standard-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "The official, optimized environment built specifically for learning computer programming and running on compact Raspberry Pi micro-boards." 
  },

  /* RED HAT / FEDORA / ENTERPRISE */
  { 
    name: "Fedora", 
    url: "https://fedoraproject.org", 
    tags: ["intermediate", "easy-install", "heavy-hardware", "mac-like", "everyday", "dev-server", "standard-privacy", "stable-release", "minimalist-base", "pure-foss", "rhel-base", "corporate-backed", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "Linus Torvalds' personal preference! Features highly advanced engineering, cutting-edge open software standards, and superb developer support backing." 
  },
  { 
    name: "Rocky Linux", 
    url: "https://rockylinux.org", 
    tags: ["advanced", "easy-install", "heavy-hardware", "dev-server", "standard-privacy", "stable-release", "minimalist-base", "pure-foss", "rhel-base", "community-driven", "standard-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "A direct, downstream enterprise server build designed as a 100% bug-for-bug compatible drop-in replacement for CentOS." 
  },
  { 
    name: "AlmaLinux", 
    url: "https://almalinux.org", 
    tags: ["advanced", "easy-install", "heavy-hardware", "dev-server", "standard-privacy", "stable-release", "minimalist-base", "pure-foss", "rhel-base", "community-driven", "standard-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "An enterprise-grade, completely open-source community server alternative tailored to replace CentOS with long-term corporate lifecycle stability." 
  },
  { 
    name: "openSUSE", 
    url: "https://opensuse.org", 
    tags: ["intermediate", "advanced", "easy-install", "heavy-hardware", "windows-like", "dev-server", "standard-privacy", "stable-release", "rolling-release", "bloated-ready", "mixed-source", "independent-base", "corporate-backed", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A unique, independent powerhouse OS featuring YaST—the ultimate graphical system configuration control center layout panel." 
  },

  /* ARCH LINUX */
  { 
    name: "Arch Linux", 
    url: "https://archlinux.org", 
    tags: ["advanced", "diy-install", "lightweight", "heavy-hardware", "tiling-wm", "dev-server", "standard-privacy", "rolling-release", "minimalist-base", "mixed-source", "arch-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A lightweight, independent rolling-release distribution built specifically for advanced users who want to configure everything manually from scratch." 
  },
  { 
    name: "Manjaro", 
    url: "https://manjaro.org", 
    tags: ["beginner", "intermediate", "easy-install", "heavy-hardware", "windows-like", "everyday", "desktop-gaming", "standard-privacy", "rolling-release", "bloated-ready", "mixed-source", "arch-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "standard-pkg"], 
    description: "Brings the power of Arch Linux to beginners with a graphical installer, pre-configured software panels, and out-of-the-box hardware scanning drivers." 
  },
  { 
    name: "EndeavourOS", 
    url: "https://endeavouros.com", 
    tags: ["intermediate", "advanced", "easy-install", "heavy-hardware", "tiling-wm", "dev-server", "desktop-gaming", "standard-privacy", "rolling-release", "minimalist-base", "mixed-source", "arch-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "standard-pkg"], 
    description: "The direct spiritual successor to Antergos. A terminal-focused, friendly gateway providing a clean GUI setup path to a pure Arch backend." 
  },
  { 
    name: "Garuda Linux", 
    url: "https://garudalinux.org",
    tags: ["intermediate", "easy-install", "heavy-hardware", "mac-like", "desktop-gaming", "standard-privacy", "rolling-release", "bloated-ready", "mixed-source", "arch-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "standard-pkg"],
    description: "A flashy, neon-themed distribution running an optimized Zen gaming kernel, customized Btrfs caching, and heavy pre-installed tool arrays."
  },
  {
    name: "CachyOS",
    url: "https://cachyos.org/",
    tags: ["advanced", "easy-install", "heavy-hardware", "tiling-wm", "dev-server", "desktop-gaming", "standard-privacy", "rolling-release", "minimalist-base", "mixed-source", "arch-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "standard-pkg"],
    description: "An ultra-performance Arch variant compiling package binaries specifically optimized for advanced modern x86-64 CPU architectures."
  },
    /* GAMING SPECIALIZED */
  { 
    name: "SteamOS", 
    url: "https://steampowered.com", 
    tags: ["beginner", "easy-install", "heavy-hardware", "windows-like", "desktop-gaming", "handheld-gaming", "standard-privacy", "rolling-release", "bloated-ready", "mixed-source", "arch-base", "corporate-backed", "standard-os", "amd-intel-gpu", "immutable-pkg"], 
    description: "Valve's official gaming operating system running the Steam Deck, leveraging an immutable filesystem alongside custom console translation layers." 
  },
  { 
    name: "Nobara Project", 
    url: "https://nobaraproject.org", 
    tags: ["beginner", "intermediate", "easy-install", "heavy-hardware", "windows-like", "desktop-gaming", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "rhel-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "standard-pkg"], 
    description: "Maintained by Red Hat developer 'GloriousEggroll', a modified Fedora desktop packed with pre-baked kernel tweaks and wine layers specifically for gaming." 
  },
  { 
    name: "Bazzite", 
    url: "https://bazzite.gg", 
    tags: ["beginner", "intermediate", "easy-install", "heavy-hardware", "windows-like", "desktop-gaming", "handheld-gaming", "standard-privacy", "stable-release", "bloated-ready", "mixed-source", "rhel-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "immutable-pkg"], 
    description: "An evolutionary, immutable gaming image engineered over Fedora Silverblue, offering automated game console overlays for handhelds and PCs alike." 
  },

  /* ADVANCED, IMMUTABLE & INDEPENDENT */
  { 
    name: "Solus", 
    url: "https://getsol.us", 
    tags: ["beginner", "intermediate", "easy-install", "lightweight", "windows-like", "everyday", "standard-privacy", "rolling-release", "bloated-ready", "mixed-source", "independent-base", "community-driven", "standard-os", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A completely custom, independent desktop environment running the custom Budgie UI interface, built wholly for home computing." 
  },
  { 
    name: "Alpine Linux", 
    url: "https://alpinelinux.org", 
    tags: ["advanced", "diy-install", "lightweight", "dev-server", "standard-privacy", "rolling-release", "minimalist-base", "pure-foss", "independent-base", "community-driven", "standard-os", "low-gpu", "non-gaming", "immutable-pkg"], 
    description: "A tiny, musl-libc and BusyBox powered independent distribution. Weighing only 5MB, it is the golden choice for modern Docker containers." 
  },
  { 
    name: "Slackware", 
    url: "http://slackware.com", 
    tags: ["advanced", "diy-install", "heavy-hardware", "dev-server", "standard-privacy", "stable-release", "minimalist-base", "pure-foss", "independent-base", "community-driven", "standard-os", "low-gpu", "non-gaming", "standard-pkg"], 
    description: "The oldest surviving active Linux distribution. Adheres strictly to pure Unix design ethics and manual package handling systems." 
  },
  { 
    name: "Gentoo Linux", 
    url: "https://gentoo.org", 
    tags: ["advanced", "diy-install", "lightweight", "heavy-hardware", "tiling-wm", "dev-server", "standard-privacy", "rolling-release", "minimalist-base", "pure-foss", "independent-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "standard-pkg"], 
    description: "A true compiler's playground. Users explicitly build every single software package directly from source code tailored to their exact machine components." 
  },
  { 
    name: "NixOS", 
    url: "https://nixos.org", 
    tags: ["advanced", "diy-install", "heavy-hardware", "dev-server", "standard-privacy", "rolling-release", "minimalist-base", "pure-foss", "independent-base", "community-driven", "standard-os", "nvidia-gpu", "amd-intel-gpu", "non-gaming", "immutable-pkg"], 
    description: "A highly advanced declarative OS. Your whole device architecture is typed inside one configuration script, mapping pristine, reproducible state tracking updates." 
  },
  { 
    name: "Qubes OS", 
    url: "https://qubes-os.org", 
    tags: ["advanced", "easy-install", "heavy-hardware", "security", "extreme-privacy", "stable-release", "minimalist-base", "mixed-source", "independent-base", "community-driven", "standard-os", "amd-intel-gpu", "non-gaming", "immutable-pkg"], 
    description: "A reasonably secure operating system. Uses hypervisor sandboxing virtualization to isolate apps into completely locked-down compartments called 'Qubes'." 
  }
];

/* Quiz code */
let currentQuestionIndex = 0;
let userSelections = [];

const questionCounter = document.getElementById("questionCounter");
const questionTitle = document.getElementById("questionTitle");
const optionsGrid = document.getElementById("optionsGrid");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const skipBtn = document.getElementById("skipBtn");
const quizContent = document.getElementById("quizContent");
const cardFooter = document.getElementById("cardFooter");

function initializeQuiz() {
  currentQuestionIndex = 0;
  userSelections = new Array(questions.length).fill(null);
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  /* Bar */
  questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
  questionTitle.textContent = currentQuestion.text;
  
  const percentage = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${percentage}%`;
  
  /* Navigation and Btn */
  prevBtn.disabled = currentQuestionIndex === 0;
  skipBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Skip";

  optionsGrid.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const tile = document.createElement("button");
    tile.className = "option-tile";
    tile.textContent = option.text;
    
    if (userSelections[currentQuestionIndex] === option.tag) {
      tile.classList.add("selected");
    }

    tile.addEventListener("click", () => {
      userSelections[currentQuestionIndex] = option.tag;
      advanceQuiz();
    });

    optionsGrid.appendChild(tile);
  });
}

function advanceQuiz() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateAndShowResults();
  }
}

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});

skipBtn.addEventListener("click", () => {
  userSelections[currentQuestionIndex] = null;
  advanceQuiz();
});

/* Calculation */
function calculateAndShowResults() {
  progressBar.style.width = "100%";
  
  const activeUserTags = userSelections.filter(tag => tag !== null);
  
  const userNvidiaLenient = activeUserTags.includes("nvidia-gpu-lenient");
  const userNvidiaStrict = activeUserTags.includes("nvidia-gpu-strict");
  const userNeedsExtremePrivacy = activeUserTags.includes("extreme-privacy");
  const userNeedsSecurity = activeUserTags.includes("security");

  let bestMatches = [];
  let highestScore = -1;

  distros.forEach(distro => {

    if (userNvidiaStrict && !["Pop!_OS", "Nobara Project", "Bazzite", "SteamOS", "Garuda Linux", "Manjaro"].includes(distro.name)) {
      return; 
    }

    if (userNvidiaLenient && !distro.tags.includes("nvidia-gpu")) {
      return;
    }

    if (userNeedsExtremePrivacy && !distro.tags.includes("extreme-privacy")) {
      return;
    }
    if (userNeedsSecurity && !distro.tags.includes("security")) {
      return;
    }

    /* Point */
    let score = 0;
    distro.tags.forEach(tag => {
      if (tag === "nvidia-gpu" && (userNvidiaLenient || userNvidiaStrict)) {
        score++;
      } else if (activeUserTags.includes(tag)) {
        score++;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatches = [distro]; 
    } 
    else if (score === highestScore && highestScore > -1) {
      bestMatches.push(distro);
    }
  });

  if (bestMatches.length === 0) {
    bestMatches = [distros.find(d => d.name === "Ubuntu")];
  }

  /* Result */
  let resultsHTML = `<h3 class="result-title">Your Perfect Matches:</h3>`;
  
  bestMatches.forEach(match => {
    resultsHTML += `
      <div class="match-card" style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px dashed var(--border-subtle);">
        <h4 style="font-size: 18px; color: var(--text-primary); margin-bottom: 6px;">🐧 ${match.name}</h4>
        <p class="result-desc" style="margin-bottom: 12px;">${match.description}</p>
        <a href="${match.url}" target="_blank" class="action-btn primary-btn" style="text-decoration:none; display:inline-block; text-align:center; margin-bottom: 8px;">Visit Website</a>
      </div>
    `;
  });

  resultsHTML += `<button class="action-btn" id="restartBtn" style="margin-top: 12px;">Take Quiz Again</button>`;

  quizContent.innerHTML = resultsHTML;

  if (cardFooter) cardFooter.style.display = "none";

  document.getElementById("restartBtn").addEventListener("click", () => {
    window.location.reload();
  });
}

/* Loop */
initializeQuiz();