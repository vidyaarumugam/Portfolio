import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <>
            <div className="flex bg-slate-800 w-full flex-col text-center font-medium justify-center">
                <p className='text-gray-200 text-xl mt-2'>Get In Touch</p>
                <div className='flex flex-row justify-center m-2'>
                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/vidya-arumugam/")}>
                        <LinkedInIcon sx={{ fontSize: 35 }} className='text-gray-400 mx-5 my-3' />
                    </IconButton>
                    <IconButton onClick={() => window.open("https://github.com/vidyaarumugam")}>
                        <GitHubIcon sx={{ fontSize: 35 }} className='text-gray-400 mx-5 my-3' />
                    </IconButton>
                    <IconButton onClick={() => window.open("mailto:vidyaarumugam531@gmail.com")}>
                        <MailIcon sx={{ fontSize: 35 }} className='text-gray-400 mx-5 my-3' />
                    </IconButton>
                </div>
                <hr className="w-11/12 m-auto" />
                <div className="text-sm text-gray-500 m-2">
                    Copyright &copy;2023 Vidya Arumugam
                </div>
            </div>
        </>
    )
}

export default Footer;