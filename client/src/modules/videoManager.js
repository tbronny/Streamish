const baseUrl = "/api/video"

export const getVideo = (id) => {
    return fetch(`${baseUrl}/getVideoByIdWithComments/${id}`).then((res) =>
        res.json()
    )
}

export const getAllVideos = () => {
    return fetch(baseUrl).then((res) => res.json())
}

export const getAllWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`).then((res) => res.json())
}

export const search = (searchTerms) => {
    return fetch(`${baseUrl}/search?q=${searchTerms}&sortDesc=true`).then(
        (res) => res.json()
    )
}

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    })
}
