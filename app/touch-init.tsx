"use client"

import { useEffect } from "react"

export default function TouchInit() {
    useEffect(() => {
        document.addEventListener("touchstart", () => { }, { passive: true })
    }, [])

    return null
}