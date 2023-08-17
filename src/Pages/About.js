import Photo from "../Assets/mypic.jpg"

const About = () => {
    return (<div id="contact" className="bg-backgroundTwo w-full h-screen text-color flex justify-center items-center p-10">
        <div className="m-10 w-fit">
            <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                ABOUT ME
            </div>
            <div className="flex flex-row">
                <div className="leading-7 tracking-wide text-lg">
                    I'm Vidya Arumugam, a 23 year old Front End Developer & Data Governance Analyst based in Mumbai, India.
                    Currently working in one of the top Big Tech (India) Company.
                    As a developer, I am in a perpetual state of learning and growth.
                    Each project is an opportunity to challenge myself, refine my skills, and deliver software solutions that merge functionality with elegance.
                </div>

            </div>
        </div>

        <div className="m-5 flex justify-center items-center">
            <img alt="Laptop" src={Photo} className="w-4/6"/>
        </div>
    </div>)

}

export default About;