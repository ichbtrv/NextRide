import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Bart, UseBartProps, Times } from 'interfaces'

export const useBartStation = ({ urlExtention }: UseBartProps): string | [] => {
  const { isLoading, error, data, isSuccess } = useQuery<Bart<[]>, Error>(
    'bartData',
    () =>
      axios(`https://api.bart.gov/api/${urlExtention}`).then((res) => res.data),
    { refetchInterval: 40 * 1000 }
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
