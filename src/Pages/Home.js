import Header from "../Layouts/Header";
import Typewriter from "typewriter-effect"

const Home = () => {

    return (
        <>
            <Header />
            <div id="home" className='flex flex-col text-color bg-backgroundOne w-full h-screen flex justify-center items-center'>
                <p className="text-3xl">
                    I'm Vidya Arumugam
                </p>
                <div className="text-5xl m-5">
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
        </>
    )
}

export default Home;