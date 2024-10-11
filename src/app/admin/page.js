"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLogin } from "@/context/LoginContext";
import Alert from "../components/Alert";
import withAuth from "./withAuth";

const Admin = () => {
    
    const { theme } = useTheme();
    const { login } = useLogin();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState({});
    const router = useRouter();

    const validateAdmin = async () => {
        if(!username && !password) {
            setAlertMessage({message: "Invalid Login", type: 'error'});
        } else  {
            const formData = new URLSearchParams();
            formData.append('username', username);
            formData.append('password', password);

            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formData
                });
                if(!response.ok) {                    
                    const data = await response.json();
                    if(!Array.isArray(data?.detail)) {
                        setAlertMessage({message: data.detail, type: 'error'});
                    } 
                    setAlertMessage({message: "Error", type: 'error'});
                } else {
                    const data = await response.json();
                    login(data['access_token']);
                    setAlertMessage({message: 'Login successful!', type: 'success'});
                    router.push('/admin/dashboard');
                }
            } catch (error) {
                setAlertMessage({ message: 'Connection issue. Please try again later.', type: 'error' });
            }
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            validateAdmin();
        }
    };

    const goToHome = () => {
        router.push('/');
    }
  
    return (
        <main>
            {Object.keys(alertMessage).length !== 0 && <Alert message={alertMessage.message} type={alertMessage.type}/>}
            <div className="flex-grow p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
                <div className="flex mb-4" onClick={goToHome}>
                    <div className="text-2xl mr-2 rounded-full"><FaArrowLeft/></div>
                    <div className="hover:underline hover:cursor-pointer">Go to Home</div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-full max-w-xs">
                        
                        <div className="mb-2 font-bold text-xl text-center">
                            Sign In
                        </div>

                        <div className="mb-4">
                            <input 
                                type="text"
                                onChange={(e => setUsername(e.target.value))}
                                onKeyDown={handleKeyDown}
                                placeholder="Username" 
                                className={`${theme === "dark" ? "bg-black border border-white" : "bg-white border border-black"} p-2 w-full rounded`}
                            />
                        </div>
                        
                        <div className="mb-4">
                            <input 
                                type="password"
                                onChange={(e => setPassword(e.target.value))}
                                onKeyDown={handleKeyDown}
                                placeholder="Password" 
                                className={`${theme === "dark" ? "bg-black border border-white" : "bg-white border border-black"} p-2 w-full rounded`}
                            />
                        </div>

                        <div>
                            <button onClick={validateAdmin} className={`${theme === "dark" ? 'bg-white text-black' : 'bg-black text-white'} p-2 w-full rounded`}>
                                Login
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    );
};

export default withAuth(Admin);
