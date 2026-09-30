import { useMemo, useState } from 'react'
import { headerNavigation } from '../constants/headerData'

export function useHeader() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = useMemo(() => headerNavigation, [])

  const handleToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const handleCloseAll = () => {
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogoClick = (event) => {
    event.preventDefault()
    handleCloseAll()
    handleScrollToTop()
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return {
    navItems,
    openDropdown,
    mobileMenuOpen,
    handleToggle,
    handleCloseAll,
    handleLogoClick,
    handleScrollToTop,
    toggleMobileMenu,
  }
}
