import { ScreenSize } from "@/types/ScreenSize";

type ElementSizes = {
    small?: number
    medium?: number
    large?: number
}

export default function getResponsiveStyleSize(screenSize: ScreenSize, elementSizes: ElementSizes): number {
    switch (screenSize) {
        case ScreenSize.SMALL:
            return elementSizes.small || elementSizes.medium || elementSizes.large || 0
        case ScreenSize.MEDIUM:
            return elementSizes.medium || elementSizes.large || 0
        case ScreenSize.LARGE:
            return elementSizes.large || 0
    }
}
