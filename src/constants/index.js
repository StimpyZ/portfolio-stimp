export const skills = [
    {
        id: '01',
        title: 'Web Development',
        description: 'Skilled web developer proficient in HTML, CSS, and JavaScript. Experienced in creating user-friendly interfaces and integrating databases. Strong understanding of design principles.',
        bg: 'bg-blue'
    },

    {
        id: '02',
        title: 'Frontend Development',
        description: 'Experienced React developer with expertise in Astro, Next.js, Tailwind CSS, and SCSS. Specializes in dynamic and scalable applications with exceptional UI/UX focus.',
        bg: 'bg-red'
    },

    {
        id: '03',
        title: 'UI/UX Design',
        description: 'Passionate UI/UX designer dedicated to creating exceptional user experiences. Skilled in design principles, user research, and effective collaboration with development teams.',
        bg: 'bg-yellow'
    }
]

export const technologies = [
    {
        name: 'HTML 5',
        icon: 'html'
    },
    {
        name: 'CSS 3',
        icon: 'css'
    },
    {
        name: 'JavaScript',
        icon: 'javascript'
    },
    {
        name: 'TypeScript',
        icon: 'typescript'
    },
    {
        name: 'React JS',
        icon: 'reactjs'
    },
    {
        name: 'Redux Toolkit',
        icon: 'redux'
    },
    {
        name: 'Tailwind CSS',
        icon: 'tailwind'
    },
    {
        name: 'Node JS',
        icon: 'nodejs'
    },
    {
        name: 'MongoDB',
        icon: 'mongodb'
    },
    {
        name: 'Git',
        icon: 'git'
    }
]

export const projects = [
    {
        title: 'Guitar Shop',
        icon: 'project1',
        description: 'Guitar e-commerce app with Strapi CMS, NextJS, and Webpack. Smooth UX, enhanced performance, and improved search engine visibility.',
        link1: 'https://github.com/StimpyZ/guitar-la-nextjs',
        link2: 'https://github.com/StimpyZ/guitar-la-nextjs'
    },

    {
        title: 'E-Commerce Platform',
        icon: 'project2',
        description: 'React e-commerce platform. Seamless shopping experience. Efficient cart management. Secure payments. Responsive and captivating.',
        link1: 'https://e-commerce-stimp.netlify.app/',
        link2: 'https://github.com/StimpyZ/e-commerce-react-app'
    },
    {
        title: 'Expense Planner',
        icon: 'project3',
        description: 'Dynamic React expense planner with captivating UI. Utilizes React Circular Progressbar and Swipeable List for efficient budget tracking.',
        link1: 'https://fastidious-hummingbird-f9c1ce.netlify.app/',
        link2: 'https://github.com/StimpyZ/planificador-gastos-react'
    },
    {
        title: 'Project Management App',
        icon: 'project4',
        description: 'Efficient MERN project management app with JWT authentication and protected routes. Seamless project creation, editing, and tracking. User-friendly experience.',
        user: 'correo2@correo.com',
        password: 'password',
        link1: 'https://admin-projectstasks.netlify.app/',
        link2: 'https://github.com/StimpyZ/administrador-proyectos-front-end'
    },
    {
        title: 'Django Dashboard',
        icon: 'project5',
        description: 'Django CRM project with CRUD operations, real-time charts, and optimized performance. Skilled in Django and JavaScript web development.',
        link1: 'https://github.com/StimpyZ/Django-dashboard',
        link2: 'https://github.com/StimpyZ/Django-dashboard'
    },
    {
        title: 'Fast Food Kiosk',
        icon: 'project6',
        description: 'Efficient Next.js app for fast food kiosks. Utilizes Tailwind CSS, SWR, Prisma, MySQL. Seamless interface, optimal performance.',
        link1: 'https://quiosco-app-production-64c1.up.railway.app/',
        link2: 'https://github.com/StimpyZ/quiosco-app'
    },
    {
        title: 'MERN CRUD App',
        icon: 'project7',
        description: 'Basic MERN CRUD app. Enables seamless data management.',
        link1: 'https://cruddocentesmern.netlify.app/',
        link2: 'https://github.com/XOP1S/CRUD_MERN'
    }
]

export const container = {
    hidden: {},
    visible: {
        transition: { straggerChildren: 0.01 }
    }
}

export const slideIn = (direction, type, delay, duration) => {

    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    }

}
