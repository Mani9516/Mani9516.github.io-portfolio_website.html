import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import javascript from '../assets/experience/javascript.png'
import SQL from '../assets/experience/SQL.png'
import Python from '../assets/experience/python.png'
import cpp from '../assets/experience/cpp.png'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: cpp,
            title: 'Cpp',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            scr: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            scr: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            scr: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            scr: python,
            title: 'Python',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            scr: sql,
            title: 'SQL',
            style: 'shadow-violet-800'
        },
        
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>This are the technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
