# Get the next bart times

An app with minimal ui to just display the real time departures for each station. Scroll and click. Built with Next.js, Typescript, Tailwind, React-Query and Jotai. If you do stumble into this, I'm still learning development so any feedback is more than welcome.

## Screenshot

<img src='https://i.imgur.com/778xDH5.png' width='250' alt='screenshot of project' />


# Tech
I wont go into too much detail about Next, TypeScript and Tailwind, but I will mention a few things about using React-Query and Jotai

## React Query and Data Fetching
React Query is awesome. I don't fully understand all of the ins and outs just yet, but I can definitely appreciate its simultaneous granularity and ease of use. The Bart API consists of several Rest endpoints, so to get data about any given aspect of bart required two separate requests. I had to one, get the list of stations to display, and then two with the station abbreviation I had to fetch each corresponding real time departure but from two separate endpoints. With react-query this was relatively straightforward; I fetched the list and then mapped over the results passing down the abbreviation from each station into a station component.


``{typeof stationList === 'object'
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
          : 'Loading...'}``
         

<br/>

## This is where Jotai comes in for state management

Within the Station component I set the abbreviation state based on the Station component that is clicked. Also within the Station component is a StationTimes component that is hidden unless the stations abbreviation matches the abbreviation state, which is initialized to an empty string (initially rendering them all closed). This allows me to keep one station open at a time because whenever you click on a different station, the abbreviation state changes and rerenders the individual components, reevaluating the conditional. 


``` const Station = ({ abbr, name }: typeof Station) => {
  const [abbrState, setAbbrState] = useAtom(abbrAtom)
  return (
    <div
      className="hover:cursor-pointer hover:text-altblue text-4xl"
      onClick={() => {
        setAbbrState(abbr)
      }}
    >
      {name}
      <div
        className="text-lg transition-opacity duration-1000"
        hidden={abbr !== abbrState}
      >
        <StationTimes abbr={abbr} />
      </div>
    </div>
  )
}

export default Station
```
<br/>

## Using the React Query key for effective caching
Initially when you first open a station it makes a request for the times based on its abbreviation. This created a new query instance (as is identifiable by its query key), which is cached. Every subsequent click references this instance and has the data readily available. The reasoning behind this method was this: I intended to make the app such that the app only requested the data that was needed, and if that app had already made an initial request that it wouldnt make any other unecessary requests. If you play around in the app you'll notice that if you switch back and forth between stations you've clicked on the loading is near instantanous. While this is far from perfect, especially since the design implies some issues I'll mention later, it does give the user a good UX if they are comparing several stations. Instead of having to click twice to open and then only close on a second click, a user can just click back and forth and the results they are looking for is readily available as if it had been open the whole time. 
<br/>
Also I was able to utilize the granularity of React Query to only request the station list once (although to be honest after monitoring it, sometimes it does request it twice at an interval, but I haven't seen any more than that) and to only make requests for the Stations which were clicked on at a 30 second interval, a trade off accounting for if the user clicked on the station one second after the real time departure changed. 

## The main issue
Honestly I really like this architecture. I was happy with what I was able to achieve, especially given the amount of thought I put into it. There is at least one glaring error though, at least one particular one that has been bothering me. Because the StationTimes component is nested in the Station component initially 50 of them are rendered, albeit all with empty strings. To curb this innefficiency, I set the "retry" option to false, so React Query only makes one unnecessary request for a station with the abbreviation of ''. If there are any other logic issues I missed please reach out, I am always looking to improve. 

