
"use client";
import Image from "next/image";
import { FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLogin } from '../../context/LoginContext';
import TickLogo from "../assets/transparent_tick.png"; 
import { useRouter } from "next/navigation";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const {isLoggedIn, logout} = useLogin();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.push('/admin');
  }

  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="flex items-center">
        <Image src={TickLogo} alt="Logo" width={50} height={50} />
        <div className="font-bold text-xl ml-2">AWS Practice Questions</div>
      </div>
      <div className="flex">
        <div className="text-2xl p-2 rounded-full cursor-pointer">
          {
            isLoggedIn && 
            <div>
              <FaSignOutAlt onClick={logoutUser}/>
            </div>
          }
        </div>
        <button
          onClick={toggleTheme}
          className="text-2xl p-2 rounded-full"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default Header;
