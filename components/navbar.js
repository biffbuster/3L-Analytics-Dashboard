import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import navlogo from '../assets/images/Eyes.gif'
import opensea from '../assets/images/opensea1.png'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import Logo from '../assets/images/3l_logo.png'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  const renderThemeChange = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
    // return (
    //   <Button>
    //     <svg
    //       class="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    //       ></path>
    //     </svg>
    //   </Button>
    // )
  }

  return (
    <nav className=" w-100 p-1 px-2  navbar dark:text-white dark:bg-black navbar-expand-lg navbar-light position-fixed top-0 start-0">
      <div className="container-fluid">
        <Link href="/" passHref>
          <div className="navbarBrand">
            <Image src={Logo} alt="Brand" width={200} height={70} />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav navItems  text-center px-3">
            <Link href="/" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/'
                      ? 'btn-active btn '
                      : 'btn-nonactive btn  '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-5
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[30px]
                   dark:hover:bg-black
                   dark:border-[1px]

                   dark:hover:text-white
                   "
                  >
                    {' '}
                    Home
                  </span>
                </button>
              </a>
            </Link>
            <Link href="/holders" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/holders'
                      ? 'btn-active btn'
                      : 'btn-nonactive btn  '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-3
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[30px]
                   dark:hover:bg-black
                   dark:border-[1px]
                   dark:hover:text-white"
                  >
                    {' '}
                    Holders
                  </span>
                </button>
              </a>
            </Link>
            <Link href="/sales" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/sales'
                      ? 'btn-active btn dark:btn-active1'
                      : 'btn-nonactive btn dark:btn-nonactive1 '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-5
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[30px]
                   dark:hover:bg-black
                   dark:border-[1px]
                   dark:hover:text-white"
                  >
                    {' '}
                    Sales
                  </span>
                </button>
              </a>
            </Link>

            <Link href="/traits" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/traits'
                      ? 'btn-active btn'
                      : 'btn-nonactive btn'
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-5
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[30px]
                   dark:hover:bg-black
                   dark:border-[1px]
                   dark:hover:text-white"
                  >
                    {' '}
                    Traits
                  </span>
                </button>
              </a>
            </Link>

            <Link href="/building" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/building'
                      ? 'btn-active btn'
                      : 'btn-nonactive btn  '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-3
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[30px]
                   dark:hover:bg-black
                   dark:border-[1px]
                   dark:hover:text-white"
                  >
                    {' '}
                    Building
                  </span>
                </button>
              </a>
            </Link>

            
          </ul>
          <div className="social-media  order-lg-last">
            <p className="mb-0 d-flex">
              <a
                href="https://3landersnft.com"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:animate-spin">
                  <i className="bi bi-browser-edge"></i>
                </span>
              </a>
              <a
                href="https://twitter.com/3LandersNFT"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:animate-spin">
                  <i className="bi bi-twitter"></i>
                </span>
              </a>
              <a
                href="https://discord.com/invite/3Landers"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:animate-spin">
                  <i className="bi bi-discord"></i>
                </span>
              </a>
              <a
                href="https://opensea.io/collection/3landers"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:animate-spin">
                  <Image src={opensea} alt="Brand" width={40} height={40} />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      {renderThemeChange()}
    </nav>
  )
}

export default Navbar
