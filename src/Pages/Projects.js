import Macron from '../Assets/macron.webp'
import Portfolio from '../Assets/portfolio.webp'

const Projects = () => {
    return (
        <>
            <div id="projects" className="text-color bg-backgroundOne w-full h-fit p-10 flex flex-col justify-center items-center pt-20">
                <div className="text-headingColor font-bold font-sans text-3xl flex">
                    PROJECTS
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row'>
                    <div className='m-3 lg:m-10 bg-backgroundTwo w-80 md:w-80 lg:w-96 rounded-lg'>
                        <img src={Portfolio} alt='Portfolio' className='w-full h-52 lg:h-64' />
                        <div className='p-5 font-bold text-base lg:text-lg h-fit md:h-20 lg:h-20'>Academic Project Information Management System</div>
                        <p className='px-5 text-colorHeaderFooter h-fit md:h-36 lg:h-24'>
                            Developed an online project management system to create a convenient and easy-to-use
                            application for students as well as teachers, to keep track of all activities regarding the project
                        </p>
                        <div className='mx-5 my-4'>
                            <a href="https://ieeexplore.ieee.org/document/9544565" target="_blank" rel="noreferrer" className='px-3 py-1 text-headingColor hover:bg-backgroundOne font-bold'>READ MORE</a>
                        </div>
                    </div>
                    <div className='m-3 lg:m-10 bg-backgroundTwo w-80 md:w-80 lg:w-96 rounded-lg'>
                        <img src={Macron} alt='Food' className='w-full h-52 lg:h-64' />
                        <div className='p-5 font-bold text-base lg:text-lg h-fit md:h-20 lg:h-20'>Online Food Order</div>
                        <p className='px-5 text-colorHeaderFooter h-fit md:h-36 lg:h-24'>
                            Developed a restaurant website that offers menu, cart feature and seamless integration with payment gateway
                        </p>
                        <div className='mx-5 my-4'>
                            <a href="https://github.com/vidyaarumugam/Restaurant-Website" target="_blank" rel="noreferrer" className='px-3 py-1 text-headingColor hover:bg-backgroundOne font-bold'>VIEW CODE</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;