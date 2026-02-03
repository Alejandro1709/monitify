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
