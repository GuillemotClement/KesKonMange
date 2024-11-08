import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center border-t py-2 px-6">
            <div className="">
                <p>Copyright &copy; 2024</p>
                <p>Make by love by <a href="" target="_blanck">Clément Guillemot</a></p>
            </div>
            <ul className="flex gap-x-2">
                <li><a href="" target="_blanck"><FaGithub/></a></li>
                <li><a href="" target="_blanck"><FaLinkedin/></a></li>
                <li><a href="" target="_blanck"><FaInstagram/></a></li>
            </ul>
        </footer>
    );
}