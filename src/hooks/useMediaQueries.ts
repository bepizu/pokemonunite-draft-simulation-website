import { useEffect, useState } from "react";
import { ScreenSize } from '../types/ScreenSize'

function useMediaQueries(): ScreenSize {
    const [isSmall, setIsSmall] = useState(false)
    const [isMedium, setIsMedium] = useState(false)

    useEffect(() => {
        const smallMq = window.matchMedia(`(max-width: ${ScreenSize.SMALL}px)`);
        const mediumMq = window.matchMedia(`(min-width: ${ScreenSize.MEDIUM}px) and (max-width: ${ScreenSize.LARGE}px)`);

        setIsSmall(smallMq.matches)
        setIsMedium(mediumMq.matches)

        const smallCallback = (event: MediaQueryListEvent) => setIsSmall(event.matches)
        const mediumCallback = (event: MediaQueryListEvent) => setIsMedium(event.matches)

        smallMq.addEventListener('change', smallCallback)
        mediumMq.addEventListener('change', mediumCallback)

        return () => {
            smallMq.removeEventListener('change', smallCallback)
            mediumMq.removeEventListener('change', mediumCallback)
        }
    }, [])

    if (isSmall) return ScreenSize.SMALL
    if (isMedium) return ScreenSize.MEDIUM
    return ScreenSize.LARGE
}

export default useMediaQueries
