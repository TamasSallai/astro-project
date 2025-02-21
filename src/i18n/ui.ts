import type { UILangKey } from './utils'

export const languages = {
  en: 'EN',
  hu: 'HU',
} as const

export const defaultLang = 'hu'

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
    'contact-form.submit': 'Send',

    // Not Found Section
    'not-found-section.title': '404 | Page not found.',
    'not-found-section.description':
      'Unfortunately, this page cannot be found. It may have been removed, its name may have changed, or it might be temporarily unavailable.',
    'not-found-section.back': 'Back to Homepage',
  },
  hu: {
    // Navigation
    'nav.home': 'Főoldal',
    'nav.about': 'Rólunk',
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
    'contact-form.submit': 'Küldés',

    // Not Found Section
    'not-found-section.title': '404 | Az oldal nem található.',
    'not-found-section.description':
      'Sajnos ez az oldal nem található. Lehetséges, hogy az oldalt eltávolítottuk, megváltozott a neve, vagy ideiglenesen nem elérhető.',
    'not-found-section.back': 'Vissza a főoldalra',
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
  {
    key: 'nav.projects',
    href: '/projects',
  },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.contact', href: '/contact' },
]
