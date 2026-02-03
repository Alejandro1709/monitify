export type SubscriptionStatus = 'active' | 'paused' | 'cancelled'
export type BillingCycle = 'monthly' | 'annual'
export type Currency = 'USD' | 'PEN'
export type CardType = 'visa' | 'mastercard' | 'amex' | 'other'

export type SubscriptionCategory =
  | 'streaming'
  | 'music'
  | 'gaming'
  | 'productivity'
  | 'cloud'
  | 'fitness'
  | 'news'
  | 'education'
  | 'other'

export interface Subscription {
  id: string
  name: string
  logo?: string
  category: SubscriptionCategory
  amount: number
  currency: Currency
  billingCycle: BillingCycle
  status: SubscriptionStatus
  nextBillingDate: string
  cardType: CardType
  cardLastFour: string
  color: string
  createdAt: string
}

export const categoryLabels: Record<SubscriptionCategory, string> = {
  streaming: 'Streaming',
  music: 'Música',
  gaming: 'Juegos',
  productivity: 'Productividad',
  cloud: 'Almacenamiento',
  fitness: 'Fitness',
  news: 'Noticias',
  education: 'Educación',
  other: 'Otros',
}
