const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'

export const getPodcasts = async (limit, genre) => {
  try {
    const url = `${corsAnywhere}https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      }),
    })
    const data = await response.json()

    return data
  } catch (error) {}
}

export const getPodcastData = async (id, limit) => {
  try {
    const url = `${corsAnywhere}https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      }),
    })
    const data = await response.json()

    return data
  } catch (error) {}
}