import React, { useEffect } from 'react'

const useDebounceFunction = (func, delay) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      func()
    }, delay)

    return () => clearTimeout(timeout)
  }, [func, delay])
}
