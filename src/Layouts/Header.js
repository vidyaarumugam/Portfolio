// import {Link} from 'react-router-dom';
import Toggle from '../Components/Toggle';

const Header = () => {
    return(
    <div className="flex w-full font-medium bg-slate-800 text-gray-400">
        <div className='flex justify-end w-full mr-10'>
        <a href='/' className='m-3 hover:text-gray-200'>Home</a>
        <a href='/' className='m-3 hover:text-gray-200'>About</a>
        <a href="/" className='m-3 hover:text-gray-200'>Career</a>
        <a href="/" className='m-3 hover:text-gray-200'>Experience</a>
        <a href="/" className='m-3 hover:text-gray-200'>Projects</a>
        <a href="/" className='m-3 hover:text-gray-200'>Skills</a>
        <a href="/" className='m-3 hover:text-gray-200'>Awards</a>
        <a href="/" className='m-3 hover:text-gray-200'>Contact</a>
        <Toggle/>

        </div>
  
    </div>)

}

export default Header;