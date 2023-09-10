import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work } from '@mui/icons-material';

const Experience = () => {

    const timeline = [
        {
            id: 1,
            date: 'JUL 2021 - Present',
            role: 'Developer',
            company: 'Tata Consultancy Services, Mumbai - India'
        },
        {
            id: 2,
            date: 'DEC 2019 - JAN 2020',
            role: 'Web Development Intern',
            company: 'Shah & Anchor Kutchhi Engineering College, Mumbai - India'
        },
        {
            id: 3,
            date: 'AUG 2019 - OCT 2019',
            role: 'Web Development Intern',
            company: 'The Horizon Technologies, Mumbai - India'
        },
    ];

    return (
        <>
            <div id="experience" className="text-color bg-backgroundOne w-full h-fit md:h-screen lg:h-fit p-10 flex flex-col justify-center items-center pt-20">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    EXPERIENCE
                </div>
                <VerticalTimeline>
                    {timeline.map((e) => {
                        return <VerticalTimelineElement key={e.id} className="vertical-timeline-element--work"
                            contentStyle={{ background: "var(--background-two)", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  var(--background-two)' }}
                            iconStyle={{ background: 'var(--background-two)', color: '#fff' }}
                            icon={<Work sx={{ color: "#AAC8A7" }} />}
                        >
                            <div className="text-headingColor font-mono text-xl md:text-2xl lg:text-2xl my-2">{e.role}</div>
                            <div className=" text-color">{e.date}</div>
                            <div className='text-colorHeaderFooter'>{e.company}</div>
                        </VerticalTimelineElement>
                    })}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Experience;