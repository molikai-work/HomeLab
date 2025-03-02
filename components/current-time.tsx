// components/current-time.tsx

"use client"

import { useState, useEffect } from "react"

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    function updateTime() {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, "0")
      const day = String(now.getDate()).padStart(2, "0")
      setCurrentTime(`${year}-${month}-${day}`)
    }

    updateTime()

    const interval = setInterval(updateTime, 86400000)

    return () => clearInterval(interval)
  }, [])

  return currentTime
}
