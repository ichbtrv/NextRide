export interface UseBartProps {
  urlExtension: string
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
