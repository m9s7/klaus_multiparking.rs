import { useState } from 'react';
import { navLinks } from '../constants';
import styles from '../style';

import logo from './../assets/Asset 5.png';
import close from './../assets/close.svg';
import menu from './../assets/menu.svg';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import refPdf from '../assets/reference.pdf';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleOpenPDF = () => {
		window.open(refPdf, '_blank', 'noopener,noreferrer');
	};

	return (
		<nav
			className={`${styles.paddingX} navbar flex w-full items-center justify-between border-b-8 border-b-accentColor py-3`}
		>
			<Link to="/Naslovna">
				<img
					src={logo}
					alt="multiparking logo"
					className="mr-10 h-[46px]"
				/>
			</Link>

			{/* DESKTOP */}
			<ul className="hidden flex-1 list-none items-center justify-end sm:flex">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`cursor-pointer whitespace-nowrap font-outfit text-[20px] font-normal ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}
					>
						{index === navLinks.length - 1 ? (
							<button
								onClick={handleOpenPDF}
								className="hover:underline focus:outline-none"
							>
								{nav.title}
							</button>
						) : (
							<a href={nav.link || '#'}>{nav.title}</a>
						)}
					</li>
				))}
			</ul>

			{/* MOBILE */}
			<div className="flex flex-1 items-center justify-end sm:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="h-[18px] w-[18px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} min-2-[140px] rounded-x1 sidebar absolute right-0 top-20 z-50 mx-4 my-2 bg-backgroundSecondary p-6`}
				>
					<ul className="flex flex-1 list-none flex-col items-center justify-end">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`cursor-pointer font-outfit text-[20px] font-normal ${
									index === navLinks.length - 1
										? 'mb-0'
										: 'mb-10'
								}`}
							>
								{index === navLinks.length - 1 ? (
									<button
										onClick={handleOpenPDF}
										className="hover:underline focus:outline-none"
									>
										{nav.title}
									</button>
								) : (
									<a href={nav.link || '#'}>{nav.title}</a>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
