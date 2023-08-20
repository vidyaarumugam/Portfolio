import React from "../Assets/React.svg.webp";
import Html from "../Assets/HTML.webp";
import Css from "../Assets/CSS3.svg.webp";
import JavaScript from "../Assets/JavaScript.webp";
import Bootstrap from "../Assets/Bootstrap.svg.webp";
import Tailwind from "../Assets/Tailwind-css.webp";
import Php from "../Assets/Php.svg.webp";
import RestApi from "../Assets/RestApi.webp";
import Python from "../Assets/Python.svg.webp";
import MySQL from "../Assets/MySQL.webp";
import Oracle from "../Assets/Oracle.webp";
import Azure from "../Assets/Azure.svg.webp";
import Purview from "../Assets/Purview.webp";
import Git from "../Assets/Git.webp";
import Jira from "../Assets/Jira.webp";
import Powershell from "../Assets/Powershell.webp";

const Skills = () => {
    return (
        <>
            <div id="skills" className="text-color bg-backgroundTwo w-full h-screen p-10 flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    SKILLS
                </div>
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={React} alt="React" className="h-20"/>
                        <span className="m-3 font-mono text-xl">React</span>

                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Html} alt="HTML" className="h-20"/>
                        <span className="m-3 font-mono text-xl">HTML</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Css} alt="CSS" className="h-20"/>
                        <span className="m-3 font-mono text-xl">CSS</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={JavaScript} alt="JavaScript" className="h-20"/>
                        <span className="m-3 font-mono text-xl">JavaScript</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Bootstrap} alt="Bootstrap" className="h-20"/>
                        <span className="m-3 font-mono text-xl">Bootstrap</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Tailwind} alt="Tailwind CSS" className="h-16"/>
                        <span className="m-3 font-mono text-xl text-center mt-7">Tailwind CSS</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Python} alt="Python" className="h-20"/>
                        <span className="m-3 font-mono text-xl">Python3</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Azure} alt="Azure" className="h-20"/>
                        <span className="m-3 font-mono text-xl text-center">Microsoft Azure</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={RestApi} alt="Rest API" className="h-20" />
                        <span className="m-3 font-mono text-xl">Rest API</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Php} alt="PHP" className="h-20"/>
                        <span className="m-3 font-mono text-xl">PHP</span>
                    </div>                   
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={MySQL} alt="MySQL" className="h-20"/>
                        <span className="m-3 font-mono text-xl">MySQL</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Oracle} alt="Oracle" className="h-20"/>
                        <span className="m-3 font-mono text-xl mt-3">Oracle</span>
                    </div>
                    
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Purview} alt="Microsoft Purview" className="h-16"/>
                        <span className="m-3 font-mono text-xl text-center mt-7">Microsoft Purview</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Git} alt="Git" className="h-20"/>
                        <span className="m-3 font-mono text-xl">Git</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Jira} alt="JIRA" className="h-20"/>
                        <span className="m-3 font-mono text-xl">JIRA</span>
                    </div>
                    <div className="m-5 h-30 w-28 flex items-center flex-col">
                        <img src={Powershell} alt="Azure Powershell" className="h-20"/>
                        <span className="m-3 font-mono text-xl text-center">Azure Powershell</span>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Skills;