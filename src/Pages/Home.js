import Header from "../Layouts/Header";
import Typewriter from "typewriter-effect";


const Home = () => {

    return (
        <>
            <Header />
            <div id="home" className='text-color bg-backgroundOne w-full h-screen flex justify-center items-center'>
                <div className="flex justify-center flex-col items-center">
                    <p className="font-sacramento mb-7 text-2xl md:text-4xl lg:text-6xl">
                        Vidya Arumugam
                    </p>
                    <div className="flex flex-row text-3xl md:text-4xl lg:text-3xl my-5">
                        <p>I'm&nbsp;</p>
                        <div className="font-bold italic">
                        <Typewriter
                            options={{
                                strings: ['a Web Developer', 'a Data Governance Specialist', 'a Microsoft Purview Specialist'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000,
                                delay: 30,
                                deleteSpeed: 30
                            }}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;