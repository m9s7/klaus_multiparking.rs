import logo from '../assets/Logo/Asset 5.png';

import styles from '../style';

const Footer = () => {
	return (
		<>
			<footer className="mt-8 bg-white p-10 text-white">
				<div className="flex flex-col">
					<div className="bg-white">
						<div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
							<img
								src={logo}
								className="mb-4 h-16 object-contain lg:mb-0 lg:h-24"
							></img>

							<div
								className={`${styles.heading3} flex flex-col items-center justify-center text-black lg:items-end`}
							>
								<p>Susedgradska 25, Rakovica, 11090 Beograd</p>
								<p>
									Email:{' '}
									<a
										href="mailto:info@multiparking.rs"
										className="underline"
									>
										info@multiparking.rs
									</a>
								</p>
								<p>
									Tel:{' '}
									<a
										href="tel:+381658778398"
										className="underline"
									>
										+381 65 8778 398
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="h-6 bg-accentColor"></div>
		</>
	);
};

export default Footer;
