"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const body = document.body;

  const loader = document.getElementById("pageLoader");
  const header = document.getElementById("siteHeader");
  const languageSelector = document.getElementById("languageSelector");
  const menuButton = document.getElementById("mobileMenuButton");
  const navigation = document.getElementById("mainNavigation");
  const yearElement = document.getElementById("currentYear");

  const translations = {
    en: {
      pageTitle: "Modern Square Academy Med",
      navHome: "Home",
      navPrograms: "Programs",
      navAbout: "About us",
      navContact: "Contact",
      login: "Log in",
      getStarted: "Get started",

      eyebrow: "THE NEXT DIMENSION OF MEDICAL EDUCATION",
      heroTitle: 'Medical knowledge.<br><span>Without limits.</span>',
      heroDescription:
        "Discover a smarter way to learn medicine through structured courses, scientific resources and a learning experience designed for the next generation.",
      explorePrograms: "Explore programs",
      discoverAcademy: "Discover the academy",
      heroProof: "Learn. Understand. Advance.",
      cardScientific: "Scientific learning",
      cardScientificSub: "Knowledge in focus",
      cardProgress: "Your next chapter",
      cardProgressSub: "Starts here",
      heroBottomLeft: "A NEW APPROACH TO LEARNING",
      scrollExplore: "SCROLL TO EXPLORE",

      programsKicker: "YOUR LEARNING JOURNEY",
      programsTitle: 'Knowledge that moves<br><span>you forward.</span>',
      programsDescription:
        "Explore educational resources designed to help you build knowledge, strengthen your understanding and progress with confidence.",
      programLabel: "MEDICAL EDUCATION",
      programTitle: "Your medical learning journey starts here.",
      programDescription:
        "Discover structured courses, educational resources and scientific learning materials.",
      comingSoon: "FIRST COURSES COMING SOON",

      aboutKicker: "THE MODERN SQUARE VISION",
      aboutTitle: 'More than learning.<br><span>A way forward.</span>',
      aboutDescription:
        "Modern Square Academy Med is an educational initiative dedicated to making medical knowledge more accessible, organized and engaging through a contemporary learning experience.",
      learnMore: "Discover our vision",

      contactKicker: "YOUR NEXT STEP",
      contactTitle: 'Ready to learn<br><span>something new?</span>',
      contactDescription:
        "Begin your journey with Modern Square Academy Med.",
      joinAcademy: "Join the academy",
      footerTagline: "Learn. Understand. Advance.",

      menuOpen: "Open navigation",
      menuClose: "Close navigation"
    },

    fr: {
      pageTitle: "Modern Square Academy Med",
      navHome: "Accueil",
      navPrograms: "Formations",
      navAbout: "À propos",
      navContact: "Contact",
      login: "Connexion",
      getStarted: "Commencer",

      eyebrow: "UNE NOUVELLE DIMENSION DE LA FORMATION MÉDICALE",
      heroTitle: 'Le savoir médical.<br><span>Sans limites.</span>',
      heroDescription:
        "Découvrez une nouvelle façon d'apprendre la médecine grâce à des formations structurées, des ressources scientifiques et une expérience conçue pour la nouvelle génération.",
      explorePrograms: "Explorer les formations",
      discoverAcademy: "Découvrir l'académie",
      heroProof: "Apprendre. Comprendre. Avancer.",
      cardScientific: "Apprentissage scientifique",
      cardScientificSub: "Le savoir au centre",
      cardProgress: "Votre prochain chapitre",
      cardProgressSub: "Commence ici",
      heroBottomLeft: "UNE NOUVELLE APPROCHE DE L'APPRENTISSAGE",
      scrollExplore: "DÉFILER POUR EXPLORER",

      programsKicker: "VOTRE PARCOURS D'APPRENTISSAGE",
      programsTitle: 'Le savoir pour<br><span>aller plus loin.</span>',
      programsDescription:
        "Explorez des ressources pédagogiques pour développer vos connaissances, approfondir votre compréhension et progresser avec confiance.",
      programLabel: "FORMATION MÉDICALE",
      programTitle: "Votre parcours d'apprentissage médical commence ici.",
      programDescription:
        "Découvrez des formations structurées, des ressources pédagogiques et des supports scientifiques.",
      comingSoon: "PREMIÈRES FORMATIONS BIENTÔT DISPONIBLES",

      aboutKicker: "LA VISION MODERN SQUARE",
      aboutTitle: 'Plus qu’apprendre.<br><span>Aller plus loin.</span>',
      aboutDescription:
        "Modern Square Academy Med est une initiative éducative qui vise à rendre les connaissances médicales plus accessibles, mieux organisées et plus engageantes grâce à une expérience d'apprentissage contemporaine.",
      learnMore: "Découvrir notre vision",

      contactKicker: "VOTRE PROCHAINE ÉTAPE",
      contactTitle: 'Prêt à apprendre<br><span>quelque chose de nouveau ?</span>',
      contactDescription:
        "Commencez votre parcours avec Modern Square Academy Med.",
      joinAcademy: "Rejoindre l'académie",
      footerTagline: "Apprendre. Comprendre. Avancer.",

      menuOpen: "Ouvrir la navigation",
      menuClose: "Fermer la navigation"
    },

    ar: {
      pageTitle: "Modern Square Academy Med",
      navHome: "الرئيسية",
      navPrograms: "الدورات",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      login: "تسجيل الدخول",
      getStarted: "ابدأ الآن",

      eyebrow: "جيل جديد من التعليم الطبي",
      heroTitle: 'المعرفة الطبية.<br><span>بلا حدود.</span>',
      heroDescription:
        "اكتشف طريقة أكثر تطورًا لتعلّم الطب من خلال دورات منظمة وموارد علمية وتجربة تعليمية مصممة للجيل الجديد.",
      explorePrograms: "اكتشف الدورات",
      discoverAcademy: "اكتشف الأكاديمية",
      heroProof: "تعلّم. افهم. تطوّر.",
      cardScientific: "تعلّم علمي",
      cardScientificSub: "المعرفة في المقدمة",
      cardProgress: "خطوتك القادمة",
      cardProgressSub: "تبدأ من هنا",
      heroBottomLeft: "مقاربة جديدة للتعلّم",
      scrollExplore: "اكتشف المزيد",

      programsKicker: "رحلتك التعليمية",
      programsTitle: 'معرفة تدفعك<br><span>نحو التقدّم.</span>',
      programsDescription:
        "اكتشف موارد تعليمية تساعدك على بناء معارفك وتعميق فهمك والتقدّم بثقة.",
      programLabel: "التعليم الطبي",
      programTitle: "رحلتك في التعلّم الطبي تبدأ من هنا.",
      programDescription:
        "اكتشف دورات منظمة وموارد تعليمية ومراجع علمية تساعدك في رحلتك الدراسية.",
      comingSoon: "الدورات الأولى قريبًا",

      aboutKicker: "رؤية مودرن سكوير",
      aboutTitle: 'أكثر من مجرد تعلّم.<br><span>نحو مستقبل أفضل.</span>',
      aboutDescription:
        "Modern Square Academy Med مبادرة تعليمية تهدف إلى جعل المعرفة الطبية أكثر سهولة وتنظيمًا وتفاعلية، من خلال تجربة تعليمية عصرية.",
      learnMore: "اكتشف رؤيتنا",

      contactKicker: "خطوتك القادمة",
      contactTitle: 'هل أنت مستعد لتعلّم<br><span>شيء جديد؟</span>',
      contactDescription:
        "ابدأ رحلتك التعليمية مع Modern Square Academy Med.",
      joinAcademy: "انضم إلى الأكاديمية",
      footerTagline: "تعلّم. افهم. تطوّر.",

      menuOpen: "فتح قائمة التنقل",
      menuClose: "إغلاق قائمة التنقل"
    }
  };

  function setLanguage(language) {
    const selectedLanguage = translations[language]
      ? language
      : "en";

    const dictionary = translations[selectedLanguage];

    html.lang = selectedLanguage;
    html.dir = selectedLanguage === "ar" ? "rtl" : "ltr";

    document.title = dictionary.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });

    if (languageSelector) {
      languageSelector.value = selectedLanguage;
    }

    if (menuButton) {
      menuButton.setAttribute(
        "aria-label",
        navigation?.classList.contains("is-open")
          ? dictionary.menuClose
          : dictionary.menuOpen
      );
    }

    try {
      localStorage.setItem("ms-academy-language", selectedLanguage);
    } catch (error) {
      // The selected language still works if local storage is unavailable.
    }
  }

  if (languageSelector) {
    languageSelector.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }

  let initialLanguage = "en";

  try {
    const savedLanguage = localStorage.getItem("ms-academy-language");

    if (savedLanguage && translations[savedLanguage]) {
      initialLanguage = savedLanguage;
    }
  } catch (error) {
    // Use English if local storage is unavailable.
  }

  setLanguage(initialLanguage);

  function closeMenu() {
    if (!menuButton || !navigation) return;

    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    body.classList.remove("menu-open");

    const language = html.lang || "en";

    menuButton.setAttribute(
      "aria-label",
      translations[language].menuOpen
    );
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
      body.classList.toggle("menu-open", !isOpen);

      const language = html.lang || "en";

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? translations[language].menuOpen
          : translations[language].menuClose
      );
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        closeMenu();
      }
    });
  }

  function updateHeader() {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  function hideLoader() {
    if (loader) {
      loader.classList.add("is-hidden");
    }
  }

  if (document.readyState === "complete") {
    window.setTimeout(hideLoader, 250);
  } else {
    window.addEventListener("load", () => {
      window.setTimeout(hideLoader, 250);
    }, { once: true });
  }

  // Prevent the loader from blocking the page if loading takes too long.
  window.setTimeout(hideLoader, 2500);
});
