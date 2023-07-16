import { useEffect, useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './components/Navbar'
import DotGroup from './utils/DotGroup'
import Landing from './pages/Landing'
import LineGradient from './utils/LineGradient'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App () {

    const [selectedPage, setSelectedPage] = useState('home')
    const [isTopPage, setIsTopPage] = useState(true)
    const mediumScreens = useMediaQuery('(min-width: 1060px)')

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY === 0) setIsTopPage(true)
            if (window.scrollY !== 0) setIsTopPage(false)

        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (

        <div className='bg-deep-blue'>
            <Navbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopPage={isTopPage}
            />

            <div className='w-5/6 mx-auto md:h-full'>
                {mediumScreens && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}

                <Landing setSelectedPage={setSelectedPage}/>
            </div>
            <LineGradient />

            <div className='w-5/6 mx-auto md:hfull'>
                <Skills />
            </div>

            <LineGradient />

            <div className='w-5/6 mx-auto md:hfull'>
                <Projects />
            </div>

            <LineGradient />

            <div className='w-5/6 mx-auto md:hfull'>
                <Contact />
            </div>
            <Footer/>
        </div>

    )

}

export default App
