import { motion } from 'framer-motion'

export default function Project ({ project, custom }) {

    const projectVariant = {

        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    const transition = {
        duration: 0.3,
        delay: custom * 0.2
    }

    const overlayStyles = 'absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center p-16 text-deep-blue'

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={projectVariant}
            transition={transition}
            viewport={{ once: true, amount: 0.5 }}
            className="relative">
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair font-semibold'>{project.title}</p>
                <p className='mt-7 font-opensans'>{project.description}</p>
                <div className='flex justify-center w-full mt-4 text-center'>
                    <a href={project.link1} target='_blank' rel='noreferrer' className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 font-semibold hover:bg-blue hover:text-white transition duration-500 ease-in-out w-1/2 cursor-pointer'>View demo</a>
                    <a href={project.link1} target='_blank' rel='noreferrer' className='bg-deep-blue hover:text-red transition duration-500 flex items-center justify-center font-playfair w-1/2 text-white cursor-pointer'>View code</a>
                </div>
            </div>
            <img width='400px' height='400px' src={`/assets/${project.icon}.webp`} alt={`Imagen del proyecto ${project.title}`} className='h-[400px] w-[400px] object-cover'/>
        </motion.div>
    )

}
