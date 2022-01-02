import StationList from 'components/Station/StationList'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center min-h-screen justify-center p-2">
      <StationList />
    </div>
  )
}
