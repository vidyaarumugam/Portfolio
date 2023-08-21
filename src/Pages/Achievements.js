import Card from "../Components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    EmojiEvents,
    WorkspacePremium
}
    from '@mui/icons-material';

const Achievements = () => {
    const data = [
        { icon: <EmojiEvents />, award: 'Secured 1st Rank in Second Year and Final Year Computer Engineering' },
        { icon: <WorkspacePremium />, award: 'Microsoft Certified Azure Fundamentals (AZ900)' },
        { icon: <WorkspacePremium />, award: 'Microsoft Certified Azure Data Fundamentals (DP900)' },
        { icon: <WorkspacePremium />, award: 'Microsoft Certified Azure Fundamentals (AI900)' },
        { icon: <WorkspacePremium />, award: 'Microsoft Certified Azure Fundamentals (DP203)' },
        { icon: <WorkspacePremium />, award: 'Microsoft Certified Azure Fundamentals (DP420)' }
    ]
    return (
        <>
            <div id="achievements" className="text-color bg-backgroundOne w-full h-screen p-10 flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    ACHIEVEMENTS
                </div>
                <Carousel>
                    <div>
                        <div>   {data.map((element, index) => {
                            return (

                                <Card key={index}>
                                    <span className="material-symbols-rounded text-gray-400 mr-3">{element.icon}</span>
                                    {element.award}
                                </Card>
                            )
                        })}</div>
                    </div>
                    <div>
                        <div>Hey</div>
                    </div>
                    <div>
                        <div>Hey</div>
                    </div>
                </Carousel>

                {/* <div className="flex flex-row w-full justify-center">
                    <IconButton>
                        <ArrowBack sx={{ fontSize: 35 }} className='text-iconColor hover:text-hoverColor mx-5' />
                    </IconButton>
                    {data.map((element, index) => {
                        return (

                        <Card key={index}>
                            <span className="material-symbols-rounded text-gray-400 mr-3">{element.icon}</span>
                            {element.award}
                        </Card>
                        )
                    })}

                    <IconButton>
                        <ArrowForward sx={{ fontSize: 35 }} className='text-iconColor hover:text-hoverColor mx-5' />
                    </IconButton>
                </div> */}
            </div>
        </>
    )
}

export default Achievements;