import axios from 'axios'
import { useQuery } from 'react-query'
import { Bart, UseBartProps, Times } from 'interfaces'

export const useBartStation = ({ urlExtension }: UseBartProps): string | [] => {
  const { isLoading, error, data, isSuccess } = useQuery<Bart<[]>, Error>(
    'bartData',
    () =>
      axios(`https://api.bart.gov/api/${urlExtension}`).then((res) => res.data),
    { cacheTime: Infinity, refetchOnMount: false }
  )

  if (isLoading) return 'loading..'

  if (error) return 'error'
  const {
    root: {
      stations: { station },
    },
  } = data

  return station
}
