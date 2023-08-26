import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    EmojiEvents,
    WorkspacePremium
}
    from '@mui/icons-material';

const Achievements = () => {
    const data = [
        {
            icon: <EmojiEvents />,
            type: 'RECOGNITION',
            award: [
                { name: 'Secured 1st Rank in Second Year Computer Engineering' },
                { name: 'Secured 1st Rank in Final Year Computer Engineering' },
                { name: 'Contextual Master Award at TCS' },
                { name: 'On the Spot (Team) [4] Award at TCS' },
                { name: 'Learning Achievement Award at TCS' }
            ]
        },
        {
            icon: <WorkspacePremium />,
            type: 'MICROSOFT CERTIFICATION',
            award: [
                { name: 'Azure Fundamentals (AZ-900)' },
                { name: 'Azure Data Fundamentals (DP-900)' },
                { name: 'Azure AI Fundamentals (AI-900)' },
                { name: 'Azure Data Engineer Associate (DP-203)' },
                { name: 'Azure Cosmos DB Developer Specialty (DP-420)' },
                { name: 'MTA: Introduction to Programming Using Python' }
            ]
        },
        {
            icon: <WorkspacePremium />,
            type: 'HACKERRANK CERTIFICATION',
            award: [
                { name: 'React' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'Python' },
                { name: 'SQL (Intermediate)' },
                { name: 'Rest API (Intermediate)' },
                { name: 'Java' },
                { name: 'Problem Solving' }
            ]
        }
    ]
    return (
        <>
            <div id="achievements" className="text-color bg-backgroundOne w-full h-screen p-10 flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    ACHIEVEMENTS
                </div>
                <Carousel>
                    {data.map((element, index) => {
                        return (
                            <div className="flex justify-center h-full">
                                <div key={index} className="w-6/12 flex items-center flex-col bg-backgroundTwo p-10 rounded-lg shadow-2xl shadow-gray-900/95">
                                    <div className="material-symbols-rounded text-gray-400 w-20 h-20 rounded-full bg-backgroundOne">{element.icon}</div>
                                    <div className="text-headingColor font-mono font-bold text-2xl my-3">{element.type}</div>
                                    {element.award.map((element1, index1) => {
                                        return <div className="leading-relaxed">
                                            {element1.name}
                                        </div>

                                    })}
                                </div>
                            </div>
                        )
                    })}

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