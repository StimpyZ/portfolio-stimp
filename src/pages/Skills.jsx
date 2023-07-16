/* eslint-disable react/no-unknown-property */
import { container, skills, technologies } from '../constants'
import LineGradient from '../utils/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import CardSkills from '../components/CardSkills'
import TechSkills from '../components/TechSkills'

export default function Skills () {

    const mediumScreens = useMediaQuery('(min-width: 1060px)')

    return (
        <section id="skills" className="pt-10 pb-16">
            <div className="md:flex md:justify-between md:gap-16 mt-24">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5 uppercase">
                        My <span className="text-red">skills</span>
                    </p>
                    <LineGradient width="w-1/3" />
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {mediumScreens
                        ? (
                            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                                <img
                                    className="z-10 w-[705px] h-[271px] object-cover"
                                    src="/assets/skills-image.jpg"
                                    alt="skills"
                                />
                            </div>
                        )
                        : (
                            <img
                                className="z-10 w-[705px] h-[271px] object-cover"
                                src="/assets/skills-image.jpg"
                                alt="skills"
                            />
                        )}
                </div>
            </div>

            <div className="md:flex md:justify-between mt-10 gap-8">
                {skills.map(skill => (
                    <CardSkills key={skill.id} skill={skill} />
                ))}
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }}
                variants={container}
                className="flex flex-wrap justify-center mt-16 gap-8">
                {technologies.map((technology, index) => (
                    <TechSkills key={technology.name} technology={technology} custom={index}/>
                ))}
            </motion.div>
        </section>
    )

}
