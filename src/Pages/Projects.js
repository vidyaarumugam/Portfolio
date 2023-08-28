import Macron from '../Assets/macron.webp'
import Portfolio from '../Assets/portfolio.webp'

const Projects = () => {
    return (
        <>
            <div id="projects" className="text-color bg-backgroundOne w-full h-screen flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex">
                    PROJECTS
                </div>
                <div className='flex flex-row'>
                    <div className='m-10 bg-backgroundTwo w-96 rounded-lg'>
                        <img src={Portfolio} alt='Portfolio' className='h-64' />
                        <div className='p-5 font-bold text-lg h-20'>Academic Project Information Management System</div>
                        <p className='px-5 text-colorHeaderFooter h-24'>
                            Developed an online project management system to create a convenient and easy-to-use
                            application for students as well as teachers, to keep track of all activities regarding the project
                        </p>
                        <div className='mx-5 my-4'>
                            <a href="https://ieeexplore.ieee.org/document/9544565" target="_blank" rel="noreferrer" className='px-3 py-1 text-headingColor hover:bg-backgroundOne font-bold'>READ MORE</a>
                        </div>
                    </div>
                    <div className='m-10 bg-backgroundTwo w-96 rounded-lg'>
                        <img src={Macron} alt='Food' className='h-64' />
                        <div className='p-5 font-bold text-lg h-20'>Online Food Order</div>
                        <p className='px-5 text-colorHeaderFooter h-24'>
                            Developed a restaurant website that offers menu, cart feature and seamless integration with payment gateway
                        </p>
                        <div className='mx-5 my-4'>
                            <a href="https://github.com/vidyaarumugam/Restaurant-Website" target="_blank" rel="noreferrer" className='px-3 py-1 text-headingColor hover:bg-backgroundOne font-bold'>VISIT CODE</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;