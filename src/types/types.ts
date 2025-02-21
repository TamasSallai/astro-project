import type { MarkdownHeading } from 'astro'

export interface ISection {
  showHeader?: boolean
}

export interface INavItem {
  href: string
  label: string
  submenu?: INavItem[]
  isButton?: boolean
}

export interface IProjectCard {
  index?: number
  image: string
  title: string
  description: string
  ctaText: string
  projectUrl: string
  githubUrl: string
  demoUrl: string
  pubDate: string
}

export interface ITOCHeading extends MarkdownHeading {
  subheadings: ITOCHeading[]
}

export interface IContactFormFields {
  name: string
  email: string
  phone: string
  company: string
  message: string
}
