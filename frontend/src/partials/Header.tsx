import MenuNav from "../components/MenuNav";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import MenuMobile from "../components/MenuMobile";

export default function Header() {

	const [showMenuMobile, setShowMenuMobile] = useState(false);

	function displayMenuMobile(){
		setShowMenuMobile(!showMenuMobile);
	}

	return (
		<header className="flex py-3 px-6 justify-between items-center shadow-md static">
			<div className="flex items-center">
				<MdOutlineFoodBank className="text-5xl mr-2"/>
				<p className="">KesKonMange</p>
			</div>
			<div className="hidden md:block">
				<MenuNav/>
			</div>
			<div className="md:hidden">
			<CiMenuBurger onClick={displayMenuMobile} className="border py-2 px-2 text-4xl hover:shadow-md rounded-md"/>
				{
					showMenuMobile ? <MenuMobile /> : ""
				}
			</div>
		</header>
	);
}