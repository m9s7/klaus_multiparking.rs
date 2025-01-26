import Footer from '../../components/Footer';
import styles from '../../style';
import { DownloadButton } from '../../components';

import doc1 from './../../assets/infosheet-electronic-operating-systems-en.pdf';

const SmartHome = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src="src\assets\header-elektronische-bediensysteme.jpg"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-10 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									SMART HOME
								</span>
							</h1>
							<h2 className={`${styles.heading2} mt-4`}>
								Elektronski operativni sistemi
							</h2>

							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								SmartHome, elektronski operativni sistem KLAUS
								Multiparkinga, omogućava udobno parkiranje i
								isparkiravanje. Čak se i našim TrendVario
								polu-automatskim sistemom za parkiranje može
								lako upravljati preko pametnog telefona.
							</p>
							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Ovo je omogućeno aplikacijom „Park & Smile Air“,
								koja je besplatna za iOS i Android. SmartApp se
								može koristiti na bilo kom broju mobilnih
								telefona.
							</p>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							{/* SmartApp */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/smart-app-handy-mit-icon-300x200.jpg"
										className="h-auto w-full object-cover"
									/>
									<h2 className={`${styles.heading2} mt-4`}>
										SmartApp
										<hr className="h-1 bg-accentColor" />
									</h2>
									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										Kompletna verzija uključujući
										SmartPortable i SmartChip
									</p>
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>Dijaloški prikaz</li>
										<li>
											Daljinski upravljač (samo za
											električna vrata)
										</li>
										<li>
											Uključuje infracrvene i
											radio/baterije prijemnike
										</li>
										<li>
											Jedan daljinski upravljač po parking
											mestu
										</li>
										<li>
											Uključuje Bluetooth / baterijsku
											lampu
										</li>
										<li>
											Jedna QR kod kartica sa pristupm
											aplikaciji “Park & ​​Smile Air”
										</li>
									</ul>
									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										Aplikacije za IOS i Android besplatne
									</p>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/smart-app-handy-mit-icon-300x200.jpg"
											className="h-auto w-full object-cover"
										/>
									</div>

									<div className="md:w-1/2 lg:w-[70%]">
										<h2
											className={`${styles.heading2} mt-4`}
										>
											SmartApp
											<hr className="h-1 bg-accentColor" />
										</h2>
										<p
											className={`${styles.paragraph} mt-4 font-medium`}
										>
											Kompletna verzija uključujući
											SmartPortable i SmartChip
										</p>
										<ul
											className={`${styles.paragraph} custom-list mt-4`}
										>
											<li>Dijaloški prikaz</li>
											<li>
												Daljinski upravljač (samo za
												električna vrata)
											</li>
											<li>
												Uključuje infracrvene i
												radio/baterije prijemnike
											</li>
											<li>
												Jedan daljinski upravljač po
												parking mestu
											</li>
											<li>
												Uključuje Bluetooth / baterijsku
												lampu
											</li>
											<li>
												Jedna QR kod kartica sa pristupm
												aplikaciji “Park & ​​Smile Air”
											</li>
										</ul>
										<p
											className={`${styles.paragraph} mt-4 font-medium`}
										>
											Aplikacije za IOS i Android
											besplatne
										</p>
									</div>
								</div>
							</section>

							{/* SmartPortable */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/smart-portable-fernbedienung-mit-icon-300x200.jpg"
										className="h-auto w-full object-cover"
									/>
									<h2 className={`${styles.heading2} mt-4`}>
										SmartPortable
										<hr className="h-1 bg-accentColor" />
									</h2>
									<p
										className={`${styles.paragraph} mt-4 font-medium`}
									>
										Verzija sa SmartChip-om
									</p>
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>Dijaloški prikaz</li>
										<li>
											Dva SmartChip-a po parking mestu
										</li>
										<li>
											Daljinski upravljač (samo za
											električna vrata)
										</li>
										<li>
											Uključuje Bluetooth / baterijsku
											lampu
										</li>
										<li>
											Jedan daljinski upravljač po parking
											mestu
										</li>
									</ul>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="md:w-1/2 lg:w-[70%]">
										<h2 className={`${styles.heading2}`}>
											SmartPortable
											<hr className="h-1 bg-accentColor" />
										</h2>

										<p
											className={`${styles.paragraph} mt-4 font-medium`}
										>
											Verzija sa SmartChip-om
										</p>
										<ul
											className={`${styles.paragraph} custom-list mt-4`}
										>
											<li>Dijaloški prikaz</li>
											<li>
												Dva SmartChip-a po parking mestu
											</li>
											<li>
												Daljinski upravljač (samo za
												električna vrata)
											</li>
											<li>
												Uključuje Bluetooth / baterijsku
												lampu
											</li>
											<li>
												Jedan daljinski upravljač po
												parking mestu
											</li>
										</ul>
									</div>
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/smart-portable-fernbedienung-mit-icon-300x200.jpg"
											className="h-auto w-full object-cover"
										/>
									</div>
								</div>
							</section>

							{/* SmartChip */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/smart-chip-konsole-mit-icon-300x200.jpg"
										className="h-auto w-full object-cover"
									/>
									<h2 className={`${styles.heading2} mt-4`}>
										SmartChip
										<hr className="h-1 bg-accentColor" />
									</h2>
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>Dijaloški prikaz</li>
										<li>
											Dva SmartChip-a po parking mestu
										</li>
									</ul>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/smart-chip-konsole-mit-icon-300x200.jpg"
											className="h-auto w-full object-cover"
										/>
									</div>

									<div className="md:w-1/2 lg:w-[70%]">
										<h2
											className={`${styles.heading2} mt-4`}
										>
											SmartChip
											<hr className="h-1 bg-accentColor" />
										</h2>
										<ul
											className={`${styles.paragraph} custom-list mt-4`}
										>
											<li>Dijaloški prikaz</li>
											<li>
												Dva SmartChip-a po parking mestu
											</li>
										</ul>
									</div>
								</div>
							</section>

							<section className="mb-8">
								<hr className="h-1 bg-accentColor" />

								<div className="mt-4">
									<DownloadButton
										href={doc1}
										text="Preuzmi brošuru: Elektronski operativni sistemi"
									/>
								</div>
							</section>
						</main>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default SmartHome;
