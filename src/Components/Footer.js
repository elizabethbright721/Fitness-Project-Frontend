import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-dk-blue sm:text-center dark:text-gray-400">© 2023 <a href="https://LABL247.com/" className="hover:underline">Live A Better Life 24-7</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/About" className="mr-4 hover:underline md:mr-6">About</Link>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )

}

export default Footer;