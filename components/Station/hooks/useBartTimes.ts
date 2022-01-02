import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Bart, Times, UseBartProps } from 'interfaces'
import { abbrAtom } from 'store/atoms'
import { useAtom } from 'jotai'

export const useBartTimes = ({ urlExtention }: UseBartProps): string | [] => {
  const [stateAtom, setStateAtom] = useAtom(abbrAtom)
  const { isLoading, error, data, isSuccess } = useQuery<Times<[]>, Error>(
    stateAtom,
    () =>
      axios(`https://api.bart.gov/api/${urlExtention}`).then((res) => res.data)
  )

  if (isLoading) return 'loading..'

  if (error) return 'error'
  const {
    station: {
      0: { etd },
    },
  } = data.root

  return etd
}
