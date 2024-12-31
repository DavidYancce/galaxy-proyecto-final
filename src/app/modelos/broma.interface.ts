export interface IBroma {
  error: boolean
  category: string
  type: string
  setup?: string
  delivery?: string
  joke?: string
  flags: IFlags
  id: number
  safe: boolean
  lang: string
}

export interface IFlags {
  nsfw: boolean
  religious: boolean
  political: boolean
  racist: boolean
  sexist: boolean
}
