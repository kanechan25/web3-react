import { useEffect } from 'react'

export default function useOnClickOutside(isTrigger: boolean, ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (isTrigger) {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [isTrigger, ref, handler])
}
