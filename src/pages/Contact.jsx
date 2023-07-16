import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import LineGradient from '../utils/LineGradient'

export default function Contact () {

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e) => {

        const isValid = await trigger()
        if (!isValid) {

            e.preventDefault()

        }

    }

    return (
        <section id="contact" className="contact py-48">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="flex justify-end w-full"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-yellow">CONTACT ME</span> TO GET
                        STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>

            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="basis-1/2 flex justify-center"
                >
                    <img src="../assets/contact-image.png" alt="contact" className='max-h-[700px] w-full object-cover'/>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="basis-1/2 mt-10 md:mt-0 p-8 bg-deep-blue-2 rounded-xl"
                >
                    <label className="font-opensans font-black text-4xl"> Send me a message</label>
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/jolerep@gmail.com"
                        method="POST"
                        className='mt-10'
                    >
                        <label className="font-opensans font-semibold text-2xl">Name</label>
                        <div className='mt-4'>
                            {errors.name && (
                                <p className="text-red">
                                    {errors.name.type === 'required' &&
                                    'This field is required.'}
                                    {errors.name.type === 'maxLength' &&
                                    'Max length is 100 char.'}
                                </p>
                            )}
                            <input
                                className="w-full bg-deep-blue rounded-xl font-semibold placeholder-slate-400 p-3 mt-1 mb-5"
                                type="text"
                                placeholder="NAME"
                                {...register('name', {
                                    required: true,
                                    maxLength: 100
                                })}
                            />
                        </div>

                        <label className="font-opensans font-semibold text-2xl mt-5">Email</label>
                        <div className='mt-4'>
                            {errors.email && (
                                <p className="text-red mt-1">
                                    {errors.email.type === 'required' &&
                                    'This field is required.'}
                                    {errors.email.type === 'pattern' &&
                                    'Invalid email address.'}
                                </p>
                            )}
                            <input
                                className="w-full bg-deep-blue rounded-xl font-semibold placeholder-slate-400 p-3 mt-1 mb-5"
                                type="text"
                                placeholder="EMAIL"
                                {...register('email', {
                                    required: true,
                                    pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })}
                            />
                        </div>

                        <label className="font-opensans font-semibold text-2xl">Message</label>
                        <div className='mt-4'>
                            {errors.message && (
                                <p className="text-red mt-1">
                                    {errors.message.type === 'required' &&
                                    'This field is required.'}
                                    {errors.message.type === 'maxLength' &&
                                    'Max length is 2000 char.'}
                                </p>
                            )}
                            <textarea
                                className="w-full bg-deep-blue rounded-xl font-semibold placeholder-slate-400 p-3 mt-1 mb-5"
                                name="message"
                                placeholder="MESSAGE"
                                rows="4"
                                cols="50"
                                {...register('message', {
                                    required: true,
                                    maxLength: 2000
                                })}
                            />
                        </div>

                        <button
                            className="p-5 bg-slate-700 font-semibold text-white mt-5 hover:bg-red rounded-xl transition duration-500 w-full"
                            type="submit"
                        >
                            SEND ME A MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )

}
