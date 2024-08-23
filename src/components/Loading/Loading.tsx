import { useProgress } from "@react-three/drei"
import { useEffect } from "react"
import './Loading.scss'

export const Loading = (props: {
    loaded: boolean,
    setLoaded: () => void
}) => {

    const { progress } = useProgress()

    useEffect(() => {
        if (progress === 100) {
            props.setLoaded()
        }
    }, [progress])

    return (
        <div className="main-loading">
            <span className="progress">{progress.toFixed(0)}%</span>
            <div className="loader">
            </div>
        </div>
    )
}