const baseUrl = "/api/video"

export const getAllVideos = () => {
    return fetch(baseUrl).then((res) => res.json())
}

export const getAllWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`).then((res) => res.json())
}

export const search = (text) => {
    return fetch(`${baseUrl}/search?q=${text}&sortDesc=${Boolean}`).then(
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
