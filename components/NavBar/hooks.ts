import { useState } from "react";

export function toggleNavOpen(navOpen: boolean): [boolean, (arg0: boolean) => void] {
  const [isNavOpen, setIsNavOpenState] = useState(navOpen)

  function setIsNavOpen(shouldOpenNav: boolean) {
    if (shouldOpenNav) {
      document.body.classList.add('scroll-lock')
      setIsNavOpenState(true)
    } else {
      document.body.classList.remove('scroll-lock')
      setIsNavOpenState(false)
    }
  }

  return [isNavOpen, setIsNavOpen]
}
