import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Education = () => {
    return (
        <>
            <div id="education" className="text-color bg-backgroundTwo w-full h-screen p-10 flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    EDUCATION
                </div>
                <div className="flex flex-row w-full">
                    <div className="bg-backgroundOne p-10 m-3 w-2/6 flex flex-col justify-center items-center rounded-lg">
                        <div><SchoolIcon sx={{ fontSize: 50 }} className='text-iconColor mx-5 my-3'/></div>
                        <div>
                            Bachelor of Engineering (Computer)
                        </div>
                        <div>Mumbai University</div>
                        <div>2021</div>
                    </div>
                    <div className="bg-backgroundOne p-10 m-3 w-2/6 flex flex-col justify-center items-center rounded-lg">
                    <div><StarIcon sx={{ fontSize: 50 }} className='text-iconColor mx-5 my-3'/></div>
                        <div>
                            HSC
                        </div>
                        <div>Maharashtra State Board</div>
                        <div>2017</div>
                    </div>
                    <div className="bg-backgroundOne p-10 m-3 w-2/6 flex flex-col justify-center items-center rounded-lg">
                    <div><LibraryBooksIcon sx={{ fontSize: 50 }} className='text-iconColor mx-5 my-3'/></div>
                        <div>
                            SSC
                        </div>
                        <div>Maharashtra State Board</div>
                        <div>2015</div>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Education;