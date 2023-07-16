/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

export default function CardSkills ({ skill }) {

    return (
        <Tilt className="md:w-1/3 mt-10">
            <motion.div
                className='w-full bg-gradient-rainblue p-[2px] shadow-lg rounded-lg'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div
                    options={{
                        max: 25,
                        scale: 0.9,
                        speed: 450
                    }}
                    className='bg-deep-blue shadow-custom-blue rounded-lg py-5 px-6 min-h-[284px] '
                >
                    <div className="relative h-32 z-10">
                        <p className="font-playfair font-semibold text-5xl mb-3">
                            {skill.id}
                        </p>
                        <p className='font-playfair font-semibold text-3xl z-20'>{skill.title}</p>
                        <div className={`w-1/2 md:w-3/4 h-32 ${skill.bg} absolute right-0 top-0 z-[-1]`} />
                    </div>
                    <p className='mt-5 break-words font-opensans'>{skill.description}</p>
                </div>
            </motion.div>
        </Tilt>
    )

}
