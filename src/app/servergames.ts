import { Servergame } from './servergame';

export interface Servergames {
  count: number
  next: string
  previous: any
  results: Servergame[]
  seo_title: string
  seo_description: string
  seo_keywords: string
  seo_h1: string
  noindex: boolean
  nofollow: boolean
  description: string
  filters: Filters
  nofollow_collections: string[]
}

export interface Filters {
  years: Year[]
}

export interface Year {
  from: number
  to: number
  filter: string
  decade: number
  years: Year2[]
  nofollow: boolean
  count: number
}

export interface Year2 {
  year: number
  count: number
  nofollow: boolean
}