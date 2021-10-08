import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"

const Video = ({ video }) => {
    return (
        <Card>
            <p className="text-left px-2">
                Posted by: {video.userProfile.name}
            </p>
            <CardBody>
                <iframe
                    className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                <p>
                    <Link to={`/videos/${video.id}`}>
                        <strong>{video.title}</strong>
                    </Link>
                </p>

                <p>{video.description}</p>
                <p>
                    <strong>Comments:</strong>{" "}
                    {video.comments?.map((comment) => {
                        return (
                            <p>
                                <b>
                                    <i>{comment.userProfile.name}</i>
                                </b>
                                : {comment.message}
                            </p>
                        )
                    })}
                </p>
            </CardBody>
        </Card>
    )
}

export default Video
