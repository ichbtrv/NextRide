# Get the next bart times

An app with minimal ui to just display the real time departures for each station. Scroll and click. Built with Next.js, Typescript, Tailwind, React-Query and Jotai. If you do stumble into this, I'm still learning development so any feedback is more than welcome.

## Screenshot

<img src='https://i.imgur.com/778xDH5.png' alt='screenshot of project' />


# Tech
I wont go into too much detail about Next, TypeScript and Tailwind, but I will mention a few things about using React-Query and Jotai

## React Query and Data Fetching
React Query is awesome. I don't fully understand all of the ins and outs just yet, but I can definitely appreciate its simultaneous granularity and ease of use. The Bart API consists of several Rest endpoints, so to get data about any given aspect of bart required two separate requests. I had to one, get the list of stations to display, and then two with the station abbreviation I had to fetch each corresponding real time departure but from two separate endpoints. With react-query this was relatively straightforward; I fetched the list and then mapped over the results passing down the abbreviation from each station into a station component.

` {typeof stationList === 'object'
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
          `
