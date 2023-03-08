import React from "react"

const PodcastsContext = React.createContext({
    Podcasts: []
})

export const PodcastsProvider = PodcastsContext.Provider

export default PodcastsContext