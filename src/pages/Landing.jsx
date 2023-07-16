import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import SocialMediaIcons from '../utils/SocialMediaIcons'

export default function Landing ({ setSelectedPage }) {

    const mediumScreens = useMediaQuery('(min-width: 1060px)')

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            <div className="md:order-2 flex justify-center basis-3/5 z-10 my-16 md:mt-32">
                {mediumScreens
                    ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img
                                className="hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                                src="/assets/profile-image.webp"
                                alt="profile"
                            />
                        </div>
                    )
                    : (
                        <img
                            className="hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[400px]"
                            src="/assets/profile-image.png"
                            alt="profile"
                        />
                    )}
            </div>
            <div className="z-30 basis-3/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Hi, I'm {''}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[35px] before:-top-[120px] before:z-[-1]">
                            stimp
                        </span>
                    </p>
                    <p className=" mt-20 mb-7 text-base text-center md:text-start font-quicksand">
                    I'm Jorge, a front-end developer experienced in React, ES6+, HTML, CSS, Redux, TypeScript, and Webpack. Skilled in UI/UX, responsive design, and advanced CSS. Also familiar with React Native for mobile development. Committed to high-quality code and performance. Positive attitude, strong work ethic.
                    </p>
                </motion.div>

                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <AnchorLink
                        className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 ease-in-out'
                        onClick={() => setSelectedPage('contact')}
                        href='#contact'
                    >
                        Contact Me
                    </AnchorLink>

                    <AnchorLink
                        className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                        onClick={() => setSelectedPage('contact')}
                        href='#contact'
                    >
                        <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'>
                            Let's Talk
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }} >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )

}
