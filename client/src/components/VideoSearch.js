import React from "react"
import { search } from "../modules/videoManager"
import { InputGroup, FormGroup } from "reactstrap"

const VideoSearch = ({ filteredVideos }) => {
    return (
        <>
            Video search:{" "}
            <InputGroup className="mb-3">
                <FormGroup
                    type="text"
                    className="input--wide"
                    onKeyUp={(event) =>
                        search(event.target.value).then((terms) => {
                            filteredVideos(terms)
                        })
                    }
                    placeholder="Search for an video... "
                    aria-label="Search for an video... "
                    aria-describedby="basic-addon"
                />
                <InputGroup.Text id="basic-addon">@example.com</InputGroup.Text>
            </InputGroup>
            {/* <input
                type="text"
                className="input--wide"
                onKeyUp={(event) =>
                    search(event.target.value).then((terms) => {
                        filteredVideos(terms)
                    })
                }
                placeholder="Search for an video... "
            /> */}
        </>
    )
}

export default VideoSearch
