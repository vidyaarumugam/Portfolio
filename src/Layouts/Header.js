// import {Link} from 'react-router-dom';
import Toggle from '../Components/Toggle';

const Header = () => {
    return(
    <div className="flex w-full font-medium bg-backgroundHeaderFooter text-colorHeaderFooter">
        <div className='flex justify-end w-full mr-10'>
        <a href='/' className='m-3 hover:text-hoverColor'>Home</a>
        <a href='/' className='m-3 hover:text-hoverColor'>About</a>
        <a href="/" className='m-3 hover:text-hoverColor'>Career</a>
        <a href="/" className='m-3 hover:text-hoverColor'>Experience</a>
        <a href="/" className='m-3 hover:text-hoverColor'>Projects</a>
        <a href="/" className='m-3 hover:text-hoverColor'>Skills</a>
        <a href="/" className='m-3 hover:text-hoverColor'>Awards</a>
        <a href="/" className='m-3 hover:text-hoverColor'>Contact</a>
        <Toggle/>

        </div>
  
    </div>)

}

export default Header;