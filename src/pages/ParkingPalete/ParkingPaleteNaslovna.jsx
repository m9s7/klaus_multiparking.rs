import Footer from '../../components/Footer';
import styles from '../../style';
import { Link } from 'react-router-dom';

const ParkingPaleteNaslovna = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src="src\assets\header-produktgruppe-paletten.jpg"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-10 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									PALETE ZA PARKING KLAUS MULTIPARKING
								</span>
							</h1>

							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Parking paleti od KLAUS Multiparking koriste
								premijum tehnologiju parkiranja kako bi stvorili
								parking prostore u skučenim oblastima gde je
								konvencionalno parkiranje nemoguće. Naši park
								tableti se mogu pomerati kako uzdužno, tako i
								poprečno, što omogućava efikasnije korišćenje
								dostupnog prostora. Automatskim rotiranjem oko
								svoje ose, naši park diskovi olakšavaju proces
								parkiranja i izlaska. Sa KLAUS Multiparking-om,
								možete se osloniti na vodećeg proizvođača "Made
								in Germany" parking sistema.
							</p>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									KLAUS MULTIPARKING PALETE PRAVE DODATNO
									PARKING MESTO
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Parking palete od KLAUS Multiparking-a
									zasnovane su na sistemu koji je jednostavan
									koliko je i efikasan - klizne platforme koje
									stvaraju dodatni parking ili prostor za
									okretanje u skučenim područjima.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Otkrijte sledeće koristi naših Park tabla i
									Park diskova:
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										Mogu se pomerati uzdužno ili poprečno
										kako bi se stvorili dodatni parking
										prostori
									</li>
									<li>
										ParkDiskovi se okreću oko svoje ose kako
										bi se maksimizirao kapacitet parkinga
									</li>
									<li>
										Lako se nadograđuju (posebno u skučenim
										podzemnim garažama i parkinzima)
									</li>
									<li>Nije potreban rov za nadogradnju</li>
									<li>
										Optimizovane opcije parkiranja - nema
										više traženja parking mesta!
									</li>
									<li>
										Mogu se kombinovati sa drugim parking
										sistemima od KLAUS Multiparking-a (npr.
										našim poluautomatskim parking sistemima
										sa našim ParkTablama PQ)
									</li>
									<li>
										Dodatna udobnost i praktičnost
										zahvaljujući laganom manevrisanju pri
										parkiranju/okretanju
									</li>
								</ul>
								<p className={`${styles.paragraph} mt-4`}>
									Smanjite troškove i eliminišite probleme sa
									KLAUS Multiparking parking paletom! Kao
									vodeći proizvođač parking sistema "Made in
									Germany", nudimo parking rešenja koja
									garantuju optimalno korišćenje prostora i
									sigurno, automatizovano parkiranje.
									Zahvaljujući više od 60 godina iskustva,
									vodićemo vas kroz svaki korak procesa
									planiranja - od pronalaženja idealnog
									parking sistema do stvarne implementacije
									vašeg projekta.
								</p>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/qozolNcRVj8"
									title="KLAUS Multiparking Parking pallets. Creating parking space in unused areas."
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									NAŠE PALETE ZA PARKING UKRATKO
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Naše premijum parking palete mogu se
									ekonomično nadograditi kako bi se
									optimizovale vaše opcije parkiranja putem
									dodatnih, fleksibilnih parking prostora - u
									podzemnim prostorima, na prizemlju i na
									gornjim spratovima.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Naš asortiman proizvoda uključuje:
								</p>
								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/ParkBoardPE"
									>
										ParkBoard PE
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Mogu se pomerati uzdužno kako bi
												se stvorio jedan dodatni parking
												prostor
											</li>
											<li>
												Jedno vozilo po parking
												platformi
											</li>
											<li>
												Posebno pogodno za podzemne
												garaže i parkirališta
											</li>
											<li>
												Praktično upravljanje dugmićima
											</li>
											<li>
												Tih sistem zahvaljujući
												elektromotorima
											</li>
											<li>Može se nadograditi</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src="src\assets\NEU_schemaclip-parkboard-pe.gif "
										alt="animation graphic scheme multibase 2072i"
										loading="lazy"
									/>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/ParkBoardPH"
									>
										ParkBoard PH
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Mogu se pomerati uzdužno za dva
												dodatna parking prostora
											</li>
											<li>
												Dva vozila po parking platformi
											</li>
											<li>
												Idealno za podzemne garaže i
												parking garaže
											</li>
											<li>Upravljanje dugmićima</li>
											<li>
												Tihi sistem zahvaljujući
												elektromotorima
											</li>
											<li>Može se nadograditi</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src="src\assets\NEU_schemaclip-parkboard-ph.gif"
										loading="lazy"
									/>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/ParkBoardPQ"
									>
										ParkBoard PQ
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Mogu se pomerati bočno kako bi
												se stvorio jedan dodatni parking
												prostor
											</li>
											<li>
												Jedno vozilo po parking
												platformi
											</li>
											<li>
												Idealno za pristupne staze u
												parking garažama i višespratnim
												parking objektima
											</li>
											<li>
												Kontrola preko izbornog panela
											</li>
											<li>Tihi električni motor</li>
											<li>Može se nadograditi</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src="src\assets\NEU_schemaclip-parkboard-pq.gif"
										loading="lazy"
									/>
								</div>
								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/ParkDiscD450"
									>
										ParkDisc D450
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Rotira se oko svoje ose za
												automatsko okretanje na licu
												mesta
											</li>
											<li>
												Pomoć pri parkiranju i
												manevrisanju koja štedi prostor
											</li>
											<li>
												Dostupno kao nadzemna ili
												podzemna konstrukcija
											</li>
											<li>
												Prečnik i nosivost mogu biti
												prošireni
											</li>
											<li>Može se nadograditi</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src="src\assets\NEU_schemaclip-parkdisc-d450.gif"
										loading="lazy"
									/>
								</div>
							</section>
						</main>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ParkingPaleteNaslovna;
