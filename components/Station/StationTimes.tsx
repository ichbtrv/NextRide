import { DepartureInterface } from 'interfaces'
import { useAtom } from 'jotai'
import React from 'react'
import { abbrAtom } from 'store/atoms'
import { useBartTimes } from './hooks/useBartTimes'
import Station from './Station'

const StationTimes = ({ abbr }: typeof Station): JSX.Element | null => {
  const [stateAtom, _setStateAtom] = useAtom(abbrAtom)
  const urlExtension = `etd.aspx?cmd=etd&key=MW9S-E7SL-26DU-VV8V&json=y&orig=${stateAtom}`

  const realTimeDepartures: string | undefined | string[] | DepartureInterface =
    useBartTimes({
      urlExtension,
    })

  if (
    typeof realTimeDepartures === 'object' &&
    typeof realTimeDepartures !== 'undefined'
  ) {
    return (
      <div>
        {realTimeDepartures.flatMap((departure) => {
          return (
            <div className="flex ">
              <div className="w-44">{departure['destination']} </div>
              <div className="flex">
                <p>Min: </p>

                {departure['estimate'].map((time) => (
                  <div key={time['id']} className="px-1 ">
                    {' '}
                    {time.minutes},
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  } else if (typeof realTimeDepartures === 'string') {
    return <>Loading</>
  } else {
    return <div>No Train Data Available</div>
  }
}

export default StationTimes
