import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ThemeContext } from '../Services/Theme';

function Toggle() {

    const { mode, setMode} = useContext(ThemeContext);

    const toggleHandler = () => {
        if (mode === "dark")
            setMode("light")
        else
            setMode("dark")
    }
    
    return (
                <div className="border-2 w-18 border-colorHeaderFooter h-8 m-3 rounded-2xl">
                    <div onClick={toggleHandler} className='flex flex-row w-16 mt-0.5'>
                        <div  className={`border-2 w-5 mt-0.5 transition-all duration-300 absolute border-none h-5 rounded-full bg-colorHeaderFooter ${mode === "dark" ? 'ml-1' : 'ml-9'} `}></div>
                        <div className='flex flex-row justify-evenly w-16'>
                            <LightModeIcon className={`text-colorHeaderFooter ${mode === "dark" ? 'invisible' : 'visible'}`} />
                            <DarkModeIcon className={`text-colorHeaderFooter ${mode === "light" ? 'invisible' : 'visible'}`} />
                        </div>
                    </div>
                </div>
    )
}

export default Toggle;