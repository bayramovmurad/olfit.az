import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className="flex items-center w-full justify-between p-5 text-white bg-black bg-opacity-50 fixed">

            <Link className="flex" to="/">
                <img src="./assets/images/logo.png" width={20} height={20} alt="" />
                <h1 className="font-bold text-2xl">OLFIT</h1>
            </Link>

            <ul className="flex gap-x-5">
                <li>
                    <Link to="/">
                        ANA SEHIFE
                    </Link>
                </li>
                <li>
                    <Link to="/exercises">
                        IDMANLAR
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        BLOG
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        HAQQIMIZDA
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        ELAQE
                    </Link>
                </li>
            </ul>
            <div className="flex gap-x-4">
                <button><MdDarkMode size={20} /></button>
                <button><FaShoppingCart size={20} /></button>
                <select className="bg-transparent outline-none">
                    <option value="">
                        RU
                    </option>
                    <option value="">
                        AZ
                    </option>
                </select>
                <button>DAXIL OL</button>
            </div>
        </nav>
    )
}
export default Navbar