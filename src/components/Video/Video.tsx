import './Video.scss'
import herbal from '../../assets/video/herbal.mp4'
import spgtel from '../../assets/video/spgtel.mp4'
import rentHome from '../../assets/video/rentHome.mp4'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Video = () => {

    const { name } = useParams()
    const [video, setVideo] = useState("")

    useEffect(() => {
        switch (name) {
            case "herbal":
                setVideo(herbal)
                break;
            case "spgtel":
                setVideo(spgtel)
                break;
            case "rentHome":
                setVideo(rentHome)
                break;
            default:
                setVideo(rentHome)
                break;
        }
    }, [])

    return (
        <div className="main-video">
            <video src={video} controls></video>
        </div>
    )

}