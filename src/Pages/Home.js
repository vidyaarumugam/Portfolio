import Header from "../Layouts/Header";
import Typewriter from "typewriter-effect"

const Home = () => {

    return (
        <>
            <Header />
            <div className='flex flex-col bg-background w-full h-screen flex justify-center items-center'>
                <p className=" text-teal-50 text-3xl">
                    I'm Vidya Arumugam
                </p>
                <div className=" text-teal-50 text-5xl m-5">
                    <Typewriter sx={{ color: 'white' }} className="text-teal-50"
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