import React from 'react'

export default function SocialMediaIcons () {

    return (
        <div className='flex justify-center md:justify-end my-10 gap-7'>
            <a className='hover:opacity-50 transition duration-500'
                href='https://www.linkedin.com/in/jorge-sanchez-7a9663175/'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    className='w-6 h-6'
                    src='/assets/linkedin.png'
                    alt='linkedin'
                />
            </a>

            <a className='hover:opacity-50 transition duration-500'
                href='https://www.facebook.com/jorgeenrique.sanchespretelt/'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    className='w-6 h-6'
                    src='/assets/facebook.png'
                    alt='linkedin'
                />
            </a>

            <a className='hover:opacity-50 transition duration-500'
                href='https://github.com/StimpyZ'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    className='w-6 h-6'
                    src='/assets/github.png'
                    alt='linkedin'
                />
            </a>

        </div>
    )

}
