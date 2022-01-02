export type User = {
  id: number
  name: string
}

export interface UseBartProps {
  urlExtention: string
}

export interface Station {
  key: string
  abbr: string
  name: string
}

export interface Bart<T> {
  root: {
    stations: { station }
  }
}

export interface Times<T> {
  root: {
    station?: { 0: { etd } }
  }
}

export interface DepartureInterface {
  destination: string
  estimate: string[]
}
