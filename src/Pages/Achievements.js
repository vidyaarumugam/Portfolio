import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AZ900 from '../Assets/AZ900.webp';
import AI900 from '../Assets/AI900.webp';
import DP900 from '../Assets/DP900.webp';
import DP203 from '../Assets/DP203.webp'
import DP420 from '../Assets/DP420.webp';
import {
    EmojiEvents,
    WorkspacePremium,
    Star
}
    from '@mui/icons-material';

const Achievements = () => {
    const data = [
        {
            icon: <WorkspacePremium fontSize="inherit" sx={{ color: "#ada029" }} />,
            type: 'MICROSOFT CERTIFICATION',
            award: [
                { image: AZ900 },
                { image: DP203 },
                { image: DP900 },
                { image: AI900 },
                { image: DP420 }
            ]
        },
        {
            icon: <WorkspacePremium fontSize="inherit" sx={{ color: "#ada029" }} />,
            type: 'HACKERRANK CERTIFICATION',
            award: [
                { name: 'React' },
                { name: 'JavaScript' },
                { name: 'Cascading Style Sheets (CSS)' },
                { name: 'Python' },
                { name: 'Rest API' },
                { name: 'Java' },
                { name: 'Problem Solving' },
                { name: 'Structured Query Language (SQL)' },
                
            ]
        },
        {
            icon: <EmojiEvents fontSize="inherit" sx={{ color: "#ada029" }} />,
            type: 'RECOGNITION',
            award: [
                [{ name: '1st Rank in 2nd Year B.E' }, { name: 'Contextual Master Award at TCS' }, { name: 'On the Spot (Team) [3] Award at TCS' }],
                [{ name: '1st Rank in Final Year B.E' }, { name: 'Learning Achievement Award at TCS' }, { name: 'On the Spot Award at TCS' }],
            ]
        }
    ]
    return (
        <>
            <div id="achievements" className="text-color bg-backgroundOne w-full h-fit md:h-screen lg:h-screen py-10 px-3 md:px-10 lg:px-10 flex flex-col justify-center items-center pt-16 md:pt-0 lg:pt-0">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    ACHIEVEMENTS
                </div>
                <div className="w-11/12 lg:w-8/12">
                    <Carousel showThumbs={false} autoPlay="true" interval={3000} infiniteLoop={true} showArrows={false} showStatus={false}>
                        {data.map((element, index) => {
                            return (
                                <div key={index} className="flex justify-center h-full">
                                    <div className="w-full flex items-center flex-col bg-backgroundTwo py-3 rounded-lg">
                                        <div style={{ "fontSize": 45 }} className="material-symbols-rounded flex justify-center items-center w-20 h-20 rounded-full bg-backgroundOne">
                                            {element.icon}
                                        </div>
                                        <div className="text-headingColor font-mono font-bold text-lg md:text-2xl lg:text-2xl my-3 mb-5">
                                            {element.type}
                                        </div>
                                        <div className="row flex flex-wrap justify-center mb-3 mx-2 md:mx-8 lg:mx-8">
                                            {element.award.map((element1, index1) => {

                                                if (Array.isArray(element1)) {
                                                    return <div className="column" key={index1}>
                                                        {element1.map((element2, index2) => <div key={index2} className="flex flex-row leading-relaxed text-start p-2 mx-2 mb-3 bg-backgroundOne rounded-lg items-center">
                                                            <Star sx={{ fontSize: "medium" }} className="mr-1" />{element2.name}
                                                        </div>
                                                        )}
                                                    </div>
                                                }
                                                else if (element1.image)
                                                    return <div key={index1} className="flex flex-row flex-wrap">
                                                        <img src={element1.image} alt={element1.image} style={{ width: 'auto' }} className="h-24 md:h-32 lg:h-32 m-2" />
                                                    </div>
                                                return <div key={index1} className="leading-relaxed p-2 mx-2 mb-5 bg-backgroundOne rounded-lg">
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