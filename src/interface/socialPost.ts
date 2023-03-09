export interface SocialPost {
  title: string
  banner: string
  isManualApprove: boolean
  venue: string
  capacity: number
  price: number
  description: string
  privacy: string
  tags: string[]
  startAt: string

  startDate?: any
  startTime?: any
}
