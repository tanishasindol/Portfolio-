// ===== TYPING EFFECT =====

const typingText = document.querySelector(".hero h3");

if (typingText) {
  const words = [
    "Web Developer & Designer",
    "Creative Developer",
    "Frontend Developer"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (!deleting) {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    
    setTimeout(typeEffect, deleting ? 60 : 100);
  }
  
  typeEffect();
}
// ===== BACK TO TOP BUTTON =====

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
// ===== RESET NAVBAR POSITION =====

window.addEventListener("load", function() {
  const navLinks = document.querySelector(".nav-links");
  
  if (navLinks) {
    navLinks.scrollLeft = 0;
  }
});
// ===== SCROLL REVEAL =====

const revealElements = document.querySelectorAll(
  ".section, .skill-card, .project-card, .certificate-card, .info-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(function(element) {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
// ===== ANIMATED SKILL BARS =====

const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        
        skillBars.forEach(function(bar) {
          bar.classList.add("animate");
        });
        
        skillObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3
  }
);

if (skillSection) {
  skillObserver.observe(skillSection);
}
// ===== CURSOR GLOW =====

const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", function(event) {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
  cursorGlow.style.opacity = "1";
});

document.addEventListener("mouseleave", function() {
  cursorGlow.style.opacity = "0";
});
// ===== SCROLL PROGRESS BAR =====

const scrollProgress = document.createElement("div");
scrollProgress.className = "scroll-progress";
document.body.appendChild(scrollProgress);

window.addEventListener("scroll", function() {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  const progress = pageHeight > 0 ?
    (scrollTop / pageHeight) * 100 :
    0;
  
  scrollProgress.style.width = progress + "%";
});
// ===== FLOATING BACKGROUND PARTICLES =====

const particleCount = 25;

for (let i = 0; i < particleCount; i++) {
  
  const particle = document.createElement("div");
  
  particle.className = "particle";
  
  particle.style.left = Math.random() * 100 + "vw";
  
  particle.style.animationDuration =
    (8 + Math.random() * 10) + "s";
  
  particle.style.animationDelay =
    Math.random() * 10 + "s";
  
  particle.style.transform =
    `scale(${0.5 + Math.random() * 1})`;
  
  document.body.appendChild(particle);
}
// ===== ACTIVE NAVBAR LINK =====

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  
  let currentSection = "";
  
  sections.forEach(function(section) {
    
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
    
  });
  
  navLinks.forEach(function(link) {
    
    link.classList.remove("active");
    
    const linkTarget = link.getAttribute("href");
    
    if (linkTarget === "#" + currentSection) {
      link.classList.add("active");
    }
    
  });
}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);
// ===== CUSTOM ANIMATED CURSOR =====

if (window.innerWidth > 768) {
  
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  
  const cursorRing = document.createElement("div");
  cursorRing.className = "custom-cursor-ring";
  
  document.body.appendChild(cursorRing);
  document.body.appendChild(cursor);
  
  document.addEventListener("mousemove", function(event) {
    
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
    
    cursorRing.style.left = event.clientX + "px";
    cursorRing.style.top = event.clientY + "px";
    
  });
  
  const hoverElements = document.querySelectorAll(
    "a, button, input, textarea, .project-card, .skill-card, .certificate-card"
  );
  
  hoverElements.forEach(function(element) {
    
    element.addEventListener("mouseenter", function() {
      cursor.classList.add("hover");
      cursorRing.classList.add("hover");
    });
    
    element.addEventListener("mouseleave", function() {
      cursor.classList.remove("hover");
      cursorRing.classList.remove("hover");
    });
    
  });
}
// ===== INTERACTIVE PROJECT CARD TILT =====

if (window.innerWidth > 768) {
  
  const projectCards = document.querySelectorAll(".project-card");
  
  projectCards.forEach(function(card) {
    
    card.addEventListener("mousemove", function(event) {
      
      const rect = card.getBoundingClientRect();
      
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.transform =
        `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-7px)`;
      
      card.style.setProperty(
        "--mouse-x",
        `${x}px`
      );
      
      card.style.setProperty(
        "--mouse-y",
        `${y}px`
      );
      
    });
    
    card.addEventListener("mouseleave", function() {
      
      card.style.transform = "";
      
    });
    
  });
  
}
/* ===== CERTIFICATE POPUP ===== */

function openCertificate(type) {
  
  const modal = document.getElementById("certificateModal");
  const icon = document.getElementById("certificateModalIcon");
  const title = document.getElementById("certificateModalTitle");
  const provider = document.getElementById("certificateModalProvider");
  const status = document.getElementById("certificateModalStatus");
  const description = document.getElementById("certificateModalDescription");
  
  if (type === "cybersecurity") {
    
    icon.textContent = "🛡️";
    title.textContent = "Fundamentals of Cybersecurity";
    provider.textContent = "Cisco Networking Academy";
    status.textContent = "Completed ✓";
    description.textContent =
      "Successfully completed the Fundamentals of Cybersecurity course.";
    
  }
  
  else if (type === "python") {
    
    icon.textContent = "🐍";
    title.textContent = "Python";
    provider.textContent = "Certificate";
    status.textContent = "Coming Soon";
    description.textContent =
      "A Python certification will be added here soon.";
    
  }
  
  else if (type === "web") {
    
    icon.textContent = "🌐";
    title.textContent = "Web Development";
    provider.textContent = "Certificate";
    status.textContent = "Coming Soon";
    description.textContent =
      "A Web Development certification will be added here soon.";
    
  }
  
  modal.classList.add("show");
  
  document.body.style.overflow = "hidden";
}


/* Close popup */

function closeCertificate() {
  
  const modal = document.getElementById("certificateModal");
  
  modal.classList.remove("show");
  
  document.body.style.overflow = "";
}


/* Close when clicking outside */

document.addEventListener("click", function(event) {
  
  const modal = document.getElementById("certificateModal");
  
  if (event.target === modal) {
    closeCertificate();
  }
  
});


/* Close with Escape key */

document.addEventListener("keydown", function(event) {
  
  if (event.key === "Escape") {
    closeCertificate();
  }
  
});
/* ===== PROJECT DETAILS POPUP ===== */

function openProject(type) {
  
  const modal = document.getElementById("projectModal");
  const icon = document.getElementById("projectModalIcon");
  const title = document.getElementById("projectModalTitle");
  const description = document.getElementById("projectModalDescription");
  const tech = document.getElementById("projectModalTech");
  const features = document.getElementById("projectModalFeatures");
  const link = document.getElementById("projectModalLink");
  
  /* Portfolio Website */
  
  if (type === "portfolio") {
    
    icon.textContent = "💻";
    
    title.textContent = "Portfolio Website";
    
    description.textContent =
      "A responsive personal portfolio website designed to showcase my skills, projects, certificates and contact information.";
    
    tech.innerHTML =
      "<span>HTML</span>" +
      "<span>CSS</span>" +
      "<span>JavaScript</span>";
    
    features.innerHTML =
      "<h4>Key Features</h4>" +
      "<ul>" +
      "<li>Responsive design</li>" +
      "<li>Interactive animations</li>" +
      "<li>Projects and certificates showcase</li>" +
      "<li>Contact section</li>" +
      "</ul>";
    
    link.href =
      "https://tanishasindol.github.io/Portfolio-/";
    
  }
  
  
  /* Attendance Tracker */
  
  else if (type === "attendance") {
    
    icon.textContent = "📊";
    
    title.textContent = "Attendance Tracker";
    
    description.textContent =
      "A simple student-focused web application for recording attendance and understanding attendance requirements.";
    
    tech.innerHTML =
      "<span>HTML</span>" +
      "<span>CSS</span>" +
      "<span>JavaScript</span>";
    
    features.innerHTML =
      "<h4>Key Features</h4>" +
      "<ul>" +
      "<li>Track student attendance</li>" +
      "<li>Calculate attendance percentage</li>" +
      "<li>Simple and user-friendly interface</li>" +
      "<li>Student-focused design</li>" +
      "</ul>";
    
    link.href = "#";
    
  }
  
  
  /* Cyber Fraud Detection */
  
  else if (type === "fraud") {
    
    icon.textContent = "🔐";
    
    title.textContent = "Cyber Fraud Detection";
    
    description.textContent =
      "A cybersecurity project focused on understanding online fraud patterns and creating awareness about common cyber fraud techniques.";
    
    tech.innerHTML =
      "<span>Python</span>" +
      "<span>Machine Learning</span>";
    
    features.innerHTML =
      "<h4>Key Features</h4>" +
      "<ul>" +
      "<li>Understand common cyber fraud patterns</li>" +
      "<li>Explore fraud detection concepts</li>" +
      "<li>Cybersecurity awareness</li>" +
      "<li>Security-focused project</li>" +
      "</ul>";
    
    link.href = "#";
    
  }
  
  modal.classList.add("show");
  
  document.body.style.overflow = "hidden";
}


/* Close popup */

function closeProject() {
  
  const modal = document.getElementById("projectModal");
  
  modal.classList.remove("show");
  
  document.body.style.overflow = "";
  
}


/* Close when clicking outside */

document.addEventListener("click", function(event) {
  
  const modal = document.getElementById("projectModal");
  
  if (event.target === modal) {
    closeProject();
  }
  
});


/* Close with Escape */

document.addEventListener("keydown", function(event) {
  
  if (event.key === "Escape") {
    closeProject();
  }
  
});
/* ===== PROJECT DETAILS POPUP ===== */

function openProject(type) {
  
  const modal = document.getElementById("projectModal");
  const icon = document.getElementById("projectModalIcon");
  const title = document.getElementById("projectModalTitle");
  const description = document.getElementById("projectModalDescription");
  const tech = document.getElementById("projectModalTech");
  const features = document.getElementById("projectModalFeatures");
  const link = document.getElementById("projectModalLink");
  
  /* Portfolio Website */
  
  if (type === "portfolio") {
    
    icon.textContent = "💻";
    
    title.textContent = "Portfolio Website";
    
    description.textContent =
      "A responsive personal portfolio website designed to showcase my skills, projects, certificates and contact information.";
    
    tech.innerHTML =
      "<span>HTML</span>" +
      "<span>CSS</span>" +
      "<span>JavaScript</span>";
    
    features.innerHTML =
      "<h4>Key Features</h4>" +
      "<ul>" +
      "<li>Responsive design</li>" +
      "<li>Interactive animations</li>" +
      "<li>Projects and certificates showcase</li>" +
      "<li>Contact section</li>" +
      "</ul>";
    
    link.href =
      "https://tanishasindol.github.io/Portfolio-/";
    
  }
  
  /* Attendance Tracker */
  
  else if (type === "attendance") {
    
    icon.textContent = "📊";
    
    title.textContent = "Attendance Tracker";
    
    description.textContent =
      "A simple student-focused web application for recording attendance and understanding attendance requirements.";
    
    tech.innerHTML =
      "<span>HTML</span>" +
      "<span>CSS</span>" +
      "<span>JavaScript</span>";
    
    features.innerHTML =
      "<h4>Key Features</h4>" +
      "<ul>" +
      "<li>Track student attendance</li>" +
      "<li>Calculate attendance percentage</li>" +
      "<li>Simple and user-friendly interface</li>" +
      "<li>Student-focused design</li>" +
      "</ul>";
    
    link.href = "#";
    
  }
  
  /* Cyber Fraud Detection */
  
  else if (type === "fraud") {
    
    icon.textContent = "🔐";
    
    title.textContent = "Cyber Fraud Detection";
    
    description.textContent =
      "A cybersecurity project focused on understanding online fraud patterns and creating awareness about common cyber fraud techniques.";
    
    tech.innerHTML =
      "<span>Python</span>" +
      "<span>Machine Learning</span>";
    
    features.innerHTML =
      "<h4>Key Features</h4>" +
      "<ul>" +
      "<li>Understand common cyber fraud patterns</li>" +
      "<li>Explore fraud detection concepts</li>" +
      "<li>Cybersecurity awareness</li>" +
      "<li>Security-focused project</li>" +
      "</ul>";
    
    link.href = "#";
    
  }
  
  /* Open Popup */
  
  modal.classList.add("show");
  
  document.body.style.overflow = "hidden";
}


/* Close Popup */

function closeProject() {
  
  const modal = document.getElementById("projectModal");
  
  modal.classList.remove("show");
  
  document.body.style.overflow = "";
  
}


/* Close when clicking outside popup */

document.addEventListener("click", function(event) {
  
  const modal = document.getElementById("projectModal");
  
  if (event.target === modal) {
    closeProject();
  }
  
});


/* Close with Escape key */

document.addEventListener("keydown", function(event) {
  
  if (event.key === "Escape") {
    closeProject();
  }
  
});
/* ===== TOAST NOTIFICATION ===== */

function showToast(message) {
  
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");
  
  if (!toast || !toastMessage) {
    return;
  }
  
  toastMessage.textContent = message;
  
  toast.classList.add("show");
  
  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);
  
}
/* ===== MOBILE HAMBURGER MENU ===== */

document.addEventListener("DOMContentLoaded", function() {
  
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.onclick = function() {
    
    navLinks.classList.toggle("active");
    
    if (navLinks.classList.contains("active")) {
      menuToggle.innerHTML = "×";
    } else {
      menuToggle.innerHTML = "☰";
    }
    
  };
  
  const links = navLinks.querySelectorAll("a");
  
  links.forEach(function(link) {
    
    link.onclick = function() {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = "☰";
    };
    
  });
  
});
/* ===== PROJECT FILTERING ===== */

document.addEventListener("DOMContentLoaded", function() {
  
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".projects-grid .project-card");
  
  filterButtons.forEach(function(button) {
    
    button.addEventListener("click", function(event) {
      
      event.preventDefault();
      event.stopImmediatePropagation();
      
      const selectedFilter = button.dataset.filter;
      
      filterButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      
      button.classList.add("active");
      
      projectCards.forEach(function(card) {
        
        const categories = card.dataset.category || "";
        
        if (
          selectedFilter === "all" ||
          categories.includes(selectedFilter)
        ) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
        
      });
      
    });
    
  });
  
});
/* ===== THEME TOGGLE ===== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  
  themeToggle.addEventListener("click", function() {
    
    document.body.classList.toggle("light-theme");
    
    if (document.body.classList.contains("light-theme")) {
      themeToggle.textContent = "🌙";
    } else {
      themeToggle.textContent = "☀️";
    }
    
  });
  
}
/* ===== LOADING SCREEN ===== */

window.addEventListener("load", function() {
  
  const loadingScreen = document.getElementById("loadingScreen");
  
  if (loadingScreen) {
    
    setTimeout(function() {
      loadingScreen.classList.add("hide");
    }, 800);
    
  }
  
});