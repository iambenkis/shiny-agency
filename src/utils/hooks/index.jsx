import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context'

export const useFetch = (url) => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        console.log('react', response)
      } catch (error) {
        setError(true)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
