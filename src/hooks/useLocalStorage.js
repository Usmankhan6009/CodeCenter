import { useEffect, useState } from 'react'

const PREFIX = 'code-center-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    /*Getting value from local storage*/
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    
    useEffect(() => {
        /*Saving value on local storage*/
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
