import React from "react"
import { search } from "../modules/videoManager"

const VideoSearch = ({ filteredVideos }) => {
    return (
        <>
            Video search:{" "}
            <input
                type="text"
                className="input--wide"
                onKeyUp={(event) =>
                    search(event.target.value).then((terms) => {
                        filteredVideos(terms)
                    })
                }
                placeholder="Search for an video... "
            />
        </>
    )
}

export default VideoSearch
