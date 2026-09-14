import { useMemo, useState } from 'react'
import { headerNavigation } from '../constants/headerData'

export function useHeader() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const navItems = useMemo(() => headerNavigation, [])

  const handleToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const handleCloseAll = () => setOpenDropdown(null)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogoClick = (event) => {
    event.preventDefault()
    handleCloseAll()
    handleScrollToTop()
  }

  return {
    navItems,
    openDropdown,
    handleToggle,
    handleCloseAll,
    handleLogoClick,
    handleScrollToTop,
  }
}
