import { useEffect, useState } from 'react'
import styles from './header.module.css'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const [areInHome, setAreInHome] = useState(0)
  const [areInDestination, setAreInDestination] = useState(0)
  const [areInCrew, setAreInCrew] = useState(0)
  const [areInTec, setAreInTec] = useState(0)

  const location = useLocation()

  // Access the path from the location object
  const currentPath = location.pathname

  const handlePath = () => {
    if (currentPath === '/') {
      setAreInHome(1)
    }
    if (currentPath === '/destination') {
      setAreInDestination(1)
    }
    if (currentPath === '/crew') {
      setAreInCrew(1)
    }
    if (currentPath === '/technology') {
      setAreInTec(1)
    }
  }

  useEffect(() => {
    handlePath()
    return () => {}
  })

  return (
    <header className="nav-text text-primary flex uppercase justify-between relative items-center h-[15vh]">
      <div>
        <img src="shared/logo.svg" alt="logo" className="ps-[3rem]" />
      </div>
      <div className="flex-grow -mr-[2.5rem] ml-[4rem] h-[1px] bg-white bg-opacity-50 z-10"></div>
      <nav className="flex bg-white bg-opacity-10 px-[8rem] justify-center overflow-hidden backdrop-blur-2xl">
        <ol className="flex gap-[3rem]">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1.8,
              delay: 0.1,
            }}
          >
            <li id="home" className="h-full py-[2rem] relative">
              <a href="/" className="flex gap-[.5rem]">
                <p>
                  <b>00</b> Home
                </p>
              </a>
              <div
                className={`h-1 w-full bg-white absolute bottom-0 opacity-${areInHome} transition-all duration-300 rounded-sm`}
              ></div>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1.8,
              delay: 0.2,
            }}
          >
            <li className="h-full py-[2rem] relative">
              <a href="/destination" className="flex gap-[.5rem]">
                <p className="font-bold">01</p>Destination
              </a>
              <div
                className={`h-1 w-full bg-white absolute bottom-0 opacity-${areInDestination} transition-all duration-300 rounded-sm`}
              ></div>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1.8,
              delay: 0.3,
            }}
          >
            <li
              className={`h-full py-[2rem] relative cursor-pointer ${styles.li}`}
            >
              <a href="#" className="flex gap-[.5rem]">
                <p className="font-bold">02</p>Crew
              </a>
              <div
                className={`h-1 w-full bg-white absolute bottom-0 opacity-${areInCrew} transition-all duration-300 rounded-sm`}
              ></div>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1.8,
              delay: 0.3,
            }}
          >
            <li className="h-full py-[2rem] relative">
              <a href="#" className="flex gap-[.5rem]">
                <p className="font-bold">03</p>Technology
              </a>
              <div
                className={`h-1 w-full bg-white absolute bottom-0 opacity-${areInTec} transition-all duration-300 rounded-sm`}
              ></div>
            </li>
          </motion.div>
        </ol>
      </nav>
    </header>
  )
}

export default Header
