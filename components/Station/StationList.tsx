import { atom, useAtom } from 'jotai'
import { abbrAtom } from 'store/atoms'

import { useBartStation } from './hooks/useBartStation'
import Station from './Station'
import StationTimes from './StationTimes'

const StationList = () => {
  const urlExtention = 'stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'

  const [abbr, setAbbr] = useAtom(abbrAtom)
  const stationList: string | [] = useBartStation({ urlExtention })
  console.log(stationList)
  return (
    <div className="font-Suisse mt-8">
      <div>
        {typeof stationList === 'object'
          ? stationList.map((obj) => {
              return (
                <>
                  <Station
                    key={obj['name']}
                    abbr={obj['abbr']}
                    name={obj['name']}
                  />
                </>
              )
            })
          : 'Loading...'}
      </div>
    </div>
  )
}

export default StationList
