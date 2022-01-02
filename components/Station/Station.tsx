import { useAtom } from 'jotai'
import React from 'react'
import { abbrAtom } from 'store/atoms'
import StationTimes from './StationTimes'

const Station = ({ abbr, name }: typeof Station) => {
  const [abbrState, setAbbrState] = useAtom(abbrAtom)
  return (
    <div
      className="hover:cursor-pointer hover:text-altblue text-4xl"
      onClick={() => {
        setAbbrState(abbr)
      }}
    >
      {name}
      <div className="text-lg" hidden={abbr !== abbrState}>
        <StationTimes abbr={abbr} />
      </div>
    </div>
  )
}

export default Station
