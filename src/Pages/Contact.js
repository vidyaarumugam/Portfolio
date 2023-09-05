import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../Services/Theme';

const Contacts = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            message: message
        }
        toast('Sent Successfully');
    }

    const { mode } = useContext(ThemeContext)

    return (
        <>
            <div id="contacts" className="text-color bg-backgroundTwo w-full h-screen p-10 flex flex-col justify-center items-center">
                <div className="text-headingColor font-bold font-sans text-3xl flex mb-10">
                    CONTACT ME
                </div>
                <div className="bg-backgroundOne p-10 w-11/12 lg:w-7/12 rounded-lg">
                    <form onSubmit={submitHandler} className="flex flex-col items-center">
                        <input type="text" placeholder="Name*" required value={name} onChange={(e) => setName(e.target.value)} className="p-3 bg-backgroundTwo m-3 w-11/12" />
                        <input type="email" placeholder="Email*" required value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 bg-backgroundTwo m-3 w-11/12" />
                        <textarea type="text" rows="5" placeholder="Your Message*" required value={message} onChange={(e) => setMessage(e.target.value)} className="p-3 w-11/12 bg-backgroundTwo m-3" />
                        <button type="submit" className="p-2 bg-backgroundTwo mt-3 w-28 border-2 font-bold border-backgroundTwo hover:border-white">SEND</button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme={mode}
                pauseOnHover
            />
        </>
    )
}

export default Contacts;