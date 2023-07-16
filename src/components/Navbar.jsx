import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Links from './Links'

export default function Navbar ({ isTopPage, selectedPage, setSelectedPage }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const smallScreens = useMediaQuery('(min-width: 768px)')
    const navBackground = isTopPage ? 'bg-transparent transition-colors duration-500' : 'bg-red transition-colors duration-500'

    return (
        <nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl font-bold'>stimp</h4>

                {smallScreens
                    ? (
                        <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                            <Links
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Links
                                page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Links
                                page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Links
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    )
                    : (
                        <button
                            className='rounded-full bg-red p-2'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <img src='/assets/menu-icon.svg' alt='menu'/>
                        </button>
                    )}

                {!smallScreens && isMenuOpen && (
                    <div className='fixed right-0 bottom-0 h-full bg-indigo-400 w-[300px] '>
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <img src='/assets/close-icon.svg'/>
                            </button>
                        </div>

                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            <Links
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Links
                                page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Links
                                page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Links
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )

}
