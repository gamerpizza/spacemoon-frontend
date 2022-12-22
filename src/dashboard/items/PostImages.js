import {useState} from "react";

export function PostImages({urls}) {
    const [shown, setShown] = useState(0)
    const images = []

    let imageUrls = Object.entries(urls)

    function next() {
        /*if (shown + 1 >= imageUrls.length) {
            setShown(0)
        } else {
            setShown(shown + 1)
        }*/
    }

    for (const [url,] of imageUrls) {
        images.push(<img src={bucketAddress + url} alt={""} onClick={next}/>)
    }
    let totalImages = images.length


    return <>{totalImages > 0 ? images[shown] : <></>}</>;
}

const bucketAddress = "https://storage.googleapis.com/spacemoon-posted-media/"