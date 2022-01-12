import { useBartStation } from './hooks/useBartStation'
import Station from './Station'

const StationList = () => {
  const urlExtension = 'stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'

  const stationList: string | [] = useBartStation({ urlExtension })

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
