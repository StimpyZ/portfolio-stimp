import { motion } from 'framer-motion'
import LineGradient from '../utils/LineGradient'
import Project from '../components/Project'
import { container, projects } from '../constants'

export default function Projects () {

    return (
        <section id="projects" className="py-48">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5 uppercase">
                        My <span className="text-red">pro</span>jects
                    </p>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className='mt-10 mb-10 font-opensans text-xl'>These are some of my projects</p>
            </motion.div>

            <div className='flex justify-center'>
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3 }}
                    variants={container}
                >
                    <div className='flex justify-center text-center items-center w-full max-h-[400px] text-2xl font-playfair font-semibold bg-red'>
                        BEAUTIFUL USER INTERFACES
                    </div>

                    {projects.map((project, index) => (
                        <Project key={project.title} project={project} custom={index} />
                    ))}

                    <div className='flex justify-center text-center items-center w-full max-h-[400px] text-2xl font-playfair font-semibold bg-blue'>
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )

}
