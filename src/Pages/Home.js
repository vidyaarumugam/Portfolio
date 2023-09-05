import Header from "../Layouts/Header";
import Typewriter from "typewriter-effect"

const Home = () => {

    return (
        <>
            <Header />
            <div id="home" className='flex flex-col text-color bg-backgroundOne w-full h-screen flex justify-center items-center'>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-xl md:text-2xl lg:text-3xl">
                        I'm Vidya Arumugam
                    </p>
                    <div className="text-2xl md:text-4xl lg:text-5xl my-5">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'FrontEnd Developer', 'Data Governance Analyst'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;