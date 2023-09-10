import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Education = () => {
    return (
        <>
            <div id="education" className="text-color bg-backgroundTwo w-full h-fit md:h-screen lg:h-screen p-10 flex flex-col justify-center items-center pt-16 md:pt-0 lg:pt-0">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    EDUCATION
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center">
                    <div className="bg-backgroundOne px-5 py-10 m-3 w-5/6 lg:w-2/6 flex flex-col justify-center items-center rounded-lg">
                        <div><SchoolIcon sx={{ fontSize: 50 }} className='text-iconColor mx-5 my-3' /></div>
                        <div className='text-headingColor text-center font-mono font-bold text-lg'>
                            Bachelor of Engineering (Computer)
                        </div>
                        <div className='text-center'>Mumbai University</div>
                        <div>2021</div>
                    </div>
                    <div className="bg-backgroundOne px-5 py-10 m-3 w-5/6 lg:w-2/6 flex flex-col justify-center items-center rounded-lg">
                        <div><StarIcon sx={{ fontSize: 50 }} className='text-iconColor mx-5 my-3' /></div>
                        <div className='text-headingColor font-mono font-bold text-lg'>
                            HSC
                        </div>
                        <div className='text-center'>Maharashtra State Board</div>
                        <div>2017</div>
                    </div>
                    <div className="bg-backgroundOne px-5 py-10 m-3 w-5/6 lg:w-2/6 flex flex-col justify-center items-center rounded-lg">
                        <div><LibraryBooksIcon sx={{ fontSize: 50 }} className='text-iconColor mx-5 my-3' /></div>
                        <div className='text-headingColor font-mono font-bold text-lg'>
                            SSC
                        </div>
                        <div className='text-center'>Maharashtra State Board</div>
                        <div>2015</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;