import { useEffect, useState } from "react"

type WindowSize = {
    height: number
    width: number,
}

function useWindowSize(): WindowSize {
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const callback = () => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', callback)

        return () => {
            window.removeEventListener('resize', callback)
        }
    }, [])

    return {
        height,
        width,
    }
}

export default useWindowSize
