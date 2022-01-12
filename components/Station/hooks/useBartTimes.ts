import axios from 'axios'

import { useQuery } from 'react-query'
import { Times, UseBartProps } from 'interfaces'
import { abbrAtom } from 'store/atoms'
import { useAtom } from 'jotai'

export const useBartTimes = ({ urlExtension }: UseBartProps): string | [] => {
  const [stateAtom, setStateAtom] = useAtom(abbrAtom)
  const { isLoading, error, data } = useQuery<Times<[]>, Error>(
    //clicked station as Query Key
    stateAtom,
    () =>
      axios(`https://api.bart.gov/api/${urlExtension}`).then((res) => res.data),
    //refetch interval set to 30 seconds to account for time of click
    //and to optimize amount of refetches
    {
      refetchInterval: 30000,
      //by the query will retry to fetch the data but because no station has
      //been clicked it will return with a 400
      retry: false,
    }
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
