import React from "react"

const PodcastsContext = React.createContext({
    Podcasts: [],
    PodcastDetails: []
})

export const PodcastsProvider = PodcastsContext.Provider

export default PodcastsContext