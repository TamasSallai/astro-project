import { getRelativeLocaleUrl } from 'astro:i18n'
import type { UILangKey } from './utils'

export const languages = {
  en: 'EN',
  hu: 'HU',
} as const

export const defaultLang = 'hu'

const EnglishBlogUrl = getRelativeLocaleUrl('en', '/blog')

const email = import.meta.env.PUBLIC_EMAIL

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tamas Sallai. All rights reserved.',

    // Project Section Header
    'project-section.header.eyebrow': 'Projects',
    'project-section.header.title': 'Explore my creations.',
    'project-section.header.description': 'Explore and try out my latest projects.',

    // Project Card
    'project-card.cta': 'Read More',

    // Blog Section Header
    'blog-section.header.eyebrow': 'Blog',
    'blog-section.header.title': 'Technical Articles',
    'blog-section.header.description':
      'Read my latest articles about development, technology, and more.',

    // Contact Section
    'contact-section.heading': "Let's Connect!",
    'contact-section.description':
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur consectetur? Deserunt saepe explicabo neque numquam nam iure architecto reprehenderit! Ab aut corrupti enim optio magni, deleniti rerum ut? Vitae corrupti nesciunt sit qui unde delectus officiis maiores quaerat quae alias consectetur, tempore cupiditate eum iure! Quisquam omnis quibusdam molestiae.',

    // Contact Form
    'contact-form.name.label': 'Full Name',
    'contact-form.name.placeholder': 'Full Name',
    'contact-form.name.error.required': 'Please enter your name.',
    'contact-form.name.error.min': 'Your name should be at least 2 characters long.',
    'contact-form.email.label': 'E-mail Address',
    'contact-form.email.placeholder': 'example@gmail.com',
    'contact-form.email.error.required': 'Please enter your email so we can get back to you.',
    'contact-form.email.error.invalid': 'Please enter a valid email address.',
    'contact-form.phone.label': 'Phone Number',
    'contact-form.phone.placeholder': '+1 234 567 8900',
    'contact-form.company.label': 'Company Name',
    'contact-form.company.placeholder': 'Are you representing a company?',
    'contact-form.message.label': 'Message',
    'contact-form.message.placeholder': 'Tell me how can i help you.',
    'contact-form.message.error.required': 'Please enter a message so I know how I can help you.',
    'contact-form.submit': 'Send',
    'contact-form.success': "Thanks for reaching out! I'll be in touch shortly.",
    'contact-form.error': `An unexpected error occurred. Please contact me directly at ${email}`,

    // Not Found Section
    'not-found-section.title': '404 | Page not found.',
    'not-found-section.description':
      'Unfortunately, this page cannot be found. It may have been removed, its name may have changed, or it might be temporarily unavailable.',
    'not-found-section.back': 'Back to Homepage',

    // About Section
    'about-section.intro.title': 'Hello',
    'about-section.intro.p1':
      'My name is Tamás Sallai, and I’m a <strong class="clr-primary-500">Full-Stack Developer</strong> from Hungary. I build <strong class="clr-primary-500">modern websites</strong> and <strong class="clr-primary-500">complex web applications</strong>.',
    'about-section.intro.p2':
      'Software development is a diverse field, and I’m interested in many aspects of it. Over the past five years, I’ve gained experience in various areas, including frontend and backend development, database management, system design, and performance optimization.',
    'about-section.intro.p3':
      'Since I was a kid, I’ve been drawn to logic puzzles and games that let me express my creativity. You might think this means I’ve always been into programming, but I only discovered my passion for it in my mid-twenties.',
    'about-section.intro.p4':
      'I care a lot about writing <strong class="clr-primary-500">good-quality code</strong> and always work hard to ensure my work meets a high standard. Whether it’s a <strong class="clr-primary-500">responsive, accessible websites</strong> or a <strong class="clr-primary-500">well-optimized system </strong>, I put in the effort to make sure it’s reliable and performant.',

    'about-section.collab.title': 'Collaborations',
    'about-section.collab.p1':
      'Since the beginning of 2025, I’ve also been <strong class="clr-primary-500">working as a freelancer</strong> alongside my full-time job',
    'about-section.collab.p2':
      'In addition to my own projects and full-time work, I collaborate with my friends at the <strong class="clr-primary-500">SitePro</strong> team.',
    'about-section.collab.p3':
      'In my work, i build responsive, user-friendly and modern websites and web solutions based on figma designs. I also handle website optimization, develop new features, and take care of maintenance tasks.',
    'about-section.collab.p4': `If you intrested in the projects I worked on with SitePro, feel free to <a class="link" href=${EnglishBlogUrl}>check out my blog post about it!</strong>`,
  },
  hu: {
    // Navigation
    'nav.home': 'Főoldal',
    'nav.about': 'Bemutatkozás',
    'nav.blog': 'Blog',
    'nav.projects': 'Projektek',
    'nav.contact': 'Kapcsolat',

    // Footer
    'footer.navigation': 'Navigáció',
    'footer.projects': 'Projektek',
    'footer.contact': 'Kapcsolat',
    'footer.copyright': 'Sallai Tamás. Minden jog fenntartva.',

    // Project Section Header
    'project-section.header.eyebrow': 'Projektek',
    'project-section.header.title': 'Fedezd fel a munkáimat',
    'project-section.header.description': 'Fedezd fel és próbáld ki legutóbbi projektjeimet. ',

    // Project Card
    'project-card.cta': 'Bővebben',

    // Blog Section Header
    'blog-section.header.eyebrow': 'Blog',
    'blog-section.header.title': 'Szakmai cikkeim',
    'blog-section.header.description':
      'Olvasd el legutóbbi cikkeimet fejlesztésről, technológiáról és egyebekről.',

    // Contact Section
    'contact-section.heading': 'Lépjünk kapcsolatba!',
    'contact-section.description':
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur consectetur? Deserunt saepe explicabo neque numquam nam iure architecto reprehenderit! Ab aut corrupti enim optio magni, deleniti rerum ut? Vitae corrupti nesciunt sit qui unde delectus officiis maiores quaerat quae alias consectetur, tempore cupiditate eum iure! Quisquam omnis quibusdam molestiae.',

    // Contact Form
    'contact-form.name.label': 'Teljes név',
    'contact-form.name.placeholder': 'Teljes név',
    'contact-form.name.error.required': 'Kérlek add meg a neved!',
    'contact-form.name.error.min': 'A nevednek legalább 2 karakternek hosszúnak kell lennie.',
    'contact-form.email.label': 'E-mail cím',
    'contact-form.email.placeholder': 'példa@gmail.com',
    'contact-form.email.error.required':
      'Kérlek add meg az email cimedet, hogy mihamarabb visszajelezhessünk.',
    'contact-form.email.error.invalid': 'Kérlek adj meg egy érvényes e-mail címet.',
    'contact-form.phone.label': 'Telefonszám',
    'contact-form.phone.placeholder': '+36 30 123 4567',
    'contact-form.company.label': 'Cég neve',
    'contact-form.company.placeholder': 'Egy céget képviselsz?',
    'contact-form.message.label': 'Üzenet',
    'contact-form.message.placeholder': 'Mondd el, miben segíthetek.',
    'contact-form.message.error.required':
      'Kérlek írj egy üzenetet, hogy megtudjam, hogyan segíthetek.',
    'contact-form.submit': 'Küldés',
    'contact-form.success': 'Köszönöm, hogy felvette velem a kapcsolatot! Hamarosan jelentkezem.',
    'contact-form.error': `Váratlan hiba történt. Kérem írjon közvetlenül a ${email} email címre.`,

    // Not Found Section
    'not-found-section.title': '404 | Az oldal nem található.',
    'not-found-section.description':
      'Sajnos ez az oldal nem található. Lehetséges, hogy az oldalt eltávolítottuk, megváltozott a neve, vagy ideiglenesen nem elérhető.',
    'not-found-section.back': 'Vissza a főoldalra',

    // About Section
    'about-section.intro.title': 'Szia!',
    'about-section.intro.p1':
      'Sallai Tamás vagyok, egy <strong class="clr-primary-500">Full-Stack fejlesztő</strong> Magyarországról. <strong class="clr-primary-500">Modern weboldalak</strong> és <strong class="clr-primary-500">komplex webalkalmazások</strong> készítésével foglalkozok.',
    'about-section.intro.p2':
      'A szoftverfejlesztés sokoldalú és számos területe érdekel. Öt éves karrierem során betekintést nyertem a szoftverfejlesztés különböző területeibe, beleértve a frontend és backend fejlesztést, adatbázis kezelést és rendszerek tervezést, optimalizálást.',
    'about-section.intro.p3':
      ' Kisgyerek korom óta vonzottak a logikai feladványok és az olyan játékok, amelyekben megélhettem a kreativitásom. Ebből következne, hogy a programozás iránt is már fiatal korom óta érdeklődöm, viszont erre csak később, a 20-as éveim közepén jöttem rá.',
    'about-section.intro.p4':
      ' Nagyon fontosnak tartom a <strong class="clr-primary-500">jó kódminőséget</strong>, és sokat dolgozok azért, hogy a munka amit kiadok a kezeim közül magas minőségett hozzon. Jelentsen ez egy <strong class="clr-primary-500">reszponzív, akadálymentes weboldalt</strong>, vagy egy <strong class="clr-primary-500">optimalizált folyamatot</strong>.',
    'about-section.collab.title': 'Kollaborációk',
    'about-section.collab.p1':
      '2025 elejétől másodállásban <strong class="clr-primary-500">vállalkozóként is dolgozom.</strong>',
    'about-section.collab.p2':
      'A saját projektjeim és főállású munkám mellett együttműködöm barátaimmal, a <strong class="clr-primary-500">SitePro</strong> csapatával.',
    'about-section.collab.p3':
      'A munkám során kész figma designok alapján készítek <strong class="clr-primary-500">reszponzív, felhasználóbarát és technológiailag korszerű</strong> weboldalakat, webes megoldásokat. Ezen kívül foglalkozom még weblapoptimalizálással, új funkciók fejlesztésével és karbantartási feladatokkal.',
    'about-section.collab.p4':
      'Ha kíváncsi milyen projekteken dolgoztam együtt a SitePro-val, akkor <a class="link" href="/blog">olvasd el az erről szóló blog cikkemet!</a>',
  },
} as const

export interface I18nNavItem {
  key: UILangKey
  href: string
  submenu?: I18nNavItem[]
}

export const navItems: I18nNavItem[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.contact', href: '/contact' },
]
