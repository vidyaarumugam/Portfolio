import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    EmojiEvents,
    WorkspacePremium,
    Star
}
    from '@mui/icons-material';

const Achievements = () => {
    const data = [
        {
            icon: <EmojiEvents fontSize="inherit" sx={{color:"#ada029"}} />,
            type: 'RECOGNITION',
            award: [
                [{ name: '1st Rank in 2nd Year B.E' }, { name: 'Contextual Master Award at TCS' }, { name: 'On the Spot (Team) [3] Award at TCS' }],
                [{ name: '1st Rank in Final Year B.E' }, { name: 'Learning Achievement Award at TCS' }, { name: 'On the Spot Award at TCS' }],

            ]
        },
        {
            icon: <WorkspacePremium fontSize="inherit" sx={{color: "#ada029"}} />,
            type: 'MICROSOFT CERTIFICATION',
            award: [
                [{ name: 'Azure Fundamentals' },
                { name: 'Azure Data Engineer Associate' },
                { name: 'Azure Cosmos DB Developer Specialty' }
                ],
                [{ name: 'Azure Data Fundamentals' },
                { name: 'Azure AI Fundamentals' },
                { name: 'MTA: Introduction to Programming Using Python' }]
            ]
        },
        {
            icon: <WorkspacePremium fontSize="inherit" sx={{color: "#ada029"}} />,
            type: 'HACKERRANK CERTIFICATION',
            award: [
                { name: 'React' },
                { name: 'Cascading Style Sheets (CSS)' },
                { name: 'JavaScript' },
                { name: 'Python' },
                { name: 'Problem Solving' },
                { name: 'Rest API' },
                { name: 'Structured Query Language (SQL)' },
                { name: 'Java' }

            ]
        }
    ]
    return (
        <>
            <div id="achievements" className="text-color bg-backgroundOne w-full h-screen p-10 flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    ACHIEVEMENTS
                </div>
                <div className="w-8/12">
                    <Carousel showThumbs={false} autoPlay="true" interval={3000} infiniteLoop={true} showArrows={false} showStatus={false}>
                        {data.map((element, index) => {
                            return (
                                <div className="flex justify-center h-full">
                                    <div key={index} className="w-full flex items-center flex-col bg-backgroundTwo p-5 rounded-lg">
                                        <div style={{ "fontSize": 45 }} className="material-symbols-rounded w-20 h-20 rounded-full bg-backgroundOne">
                                            {element.icon}
                                        </div>
                                        <div className="text-headingColor font-mono font-bold text-2xl my-3 mb-5">
                                            {element.type}
                                        </div>
                                        <div className="row flex flex-wrap mb-3 mx-8">
                                            {element.award.map((element1, index1) => {
                                                if (Array.isArray(element1)) {
                                                    return <div className="column" key={index1}>
                                                        {element1.map((element2, index2) => <div key={index2} className="flex flex-row leading-relaxed text-start p-2 mx-2 mb-3 bg-backgroundOne rounded-lg items-center">
                                                            <Star sx={{ fontSize: "medium" }} className="mr-1" />{element2.name}
                                                        </div>
                                                        )}
                                                    </div>
                                                }
                                                return <div className="leading-relaxed p-2 mx-2 mb-5 bg-backgroundOne rounded-lg">
                                                    {element1.name}
                                                </div>

                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Achievements;