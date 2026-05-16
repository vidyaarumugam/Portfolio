import Photo from "../Assets/mypic.webp"

const About = () => {
    return (<div id="about" className="bg-backgroundTwo w-full h-screen text-color flex justify-center items-center p-10">
        <div className="m-2 md:m-3 lg:m-10 lg:w-fit">
            <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                ABOUT ME
            </div>
            <div className="flex flex-row">
                <div className="leading-7 tracking-wide text-base md:text-base lg:text-lg">
                    Hi, I'm Vidya Arumugam. I'm a Data Governance Specialist and Front End Developer based in Mumbai, Maharashtra, India.
                    I currently work at a Big 4 Firm. <br></br> <br></br>
                    I have a deep passion for development and am in a constant state of learning and growth, viewing every opportunity as a chance to challenge myself, refine my expertise, and deliver meaningful, high-quality work.
                </div>
            </div>
        </div>
        <div className="m-2 hidden md:flex lg:flex md:m-3 lg:m-5 justify-center items-center">
            <img alt="Laptop" src={Photo} className="w-4/6" />
        </div>
    </div>
    )
}

export default About;