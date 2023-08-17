import {Link} from 'react-scroll';
import Toggle from '../Components/Toggle';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

const Header = () => {
    return (
        <>
            <nav className='w-full bg-backgroundHeader text-colorHeaderFooter h-auto'>
                <div className='block lg:hidden'>
                    <IconButton>
                        <MenuIcon className='text-colorHeaderFooter'/>
                    </IconButton>
                </div>
                <div className="block lg:flex flex-grow font-medium  ">
                    <div className='flex justify-end w-full mr-10 lg:flex-grow'>
                        <Link to='home' smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Home</Link>
                        <Link to='contact' smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>About</Link>
                        <Link to="experience" smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Experience</Link>
                        <Link to="skills" smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Skills</Link>
                        <Link to="projects" smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Projects</Link>
                        <Link to="education" smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Education</Link>
                        <Link to="awards" smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Awards</Link>
                        <Link to="contacts" smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>Contact</Link>
                        <Toggle />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;