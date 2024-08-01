import { useProgress } from "@react-three/drei"
import { useEffect } from "react"

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
        <>
            Loading
        </>
    )
}