import { motion } from 'framer-motion'

export default function TechSkills ({ technology, custom }) {

    console.log(technology)

    const projectVariant = {

        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    const transition = {
        duration: 0.7,
        delay: custom * 0.2
    }

    const handleImageLoad = (e) => {

        e.target.style.opacity = '1'

    }

    return (
        <motion.div
            className="justify-center w-20 h-20 bg-gray-300 rounded-full shadow-custom-blue hover:saturate-200 hover:filter transition duration-500"
            initial="hidden"
            whileInView="visible"
            variants={projectVariant}
            transition={transition}
            viewport={{ once: true, amount: 0.5 }}>
            <img
                className="w-16 h-16 mx-auto my-2"
                src={`/tech/${technology.icon}.png`} alt={`Imagen de ${technology.name}`}
                onLoad={handleImageLoad}
                style={{ opacity: '0' }}
            />
        </motion.div>
    )

}
