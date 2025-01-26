import { Link } from 'react-router-dom';
import styles from '../../style';
import Footer from '../../components/Footer';

const FrontPage = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<header className="mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}></h1>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							<section className="mb-8">
								<h1
									className={`${styles.heading1} sm:text-3xl`}
								>
									Spremni Da Optimizujete Svoj Parking
									Prostor?
								</h1>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									Naši provereni premium proizvodi smanjuju
									zauzeće prostora parking objekata,
									umnožavaju dostupna parking mesta i
									povećavaju atraktivnost i funkcionalnost
									vaše imovine zahvaljujući modernoj parking
									tehnologiji.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Efikasnija upotreba postojećeg parking
									prostora, pouzdana sigurnost, rešenja po
									meri – otkrijte prednosti naših parking
									sistema.
								</p>
							</section>
						</main>
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
				<div className={`${styles.boxWidth}`}>
					<div className={`${styles.paddingY} relative p-2`}>
						<section className="mb-8">
							<h1
								id="proizvodi"
								className={`${styles.heading1} sm:text-3xl`}
							>
								Naši proizvodi
							</h1>
							<p className={`${styles.paragraph} mt-4`}>
								Naši prilagođeni parkirni sistemi garantuju
								optimalno iskorišćenje prostora, povećanu
								sigurnost vozila i udobno korisničko iskustvo za
								stanare, posetioce i kupce.
							</p>
							<p
								className={`${styles.paragraph} mt-4 font-semibold italic`}
							>
								Ovo se odnosi kako na privatna rezidencijalna
								parkirališta, tako i na parkirališta u
								komercijalnim zgradama, velikim garažama ili
								podzemnim parkinzima.
							</p>
						</section>
						{/* Hidraulicni Sistemi */}
						<section className="mb-8">
							{/* MOBILE (below md) */}
							<div className="block w-full md:hidden">
								<img
									src="src/assets/header-produktgruppe-parker.jpg"
									className="h-auto w-full rounded-md object-cover"
								/>

								<h2 className={`${styles.heading2} mt-4`}>
									<Link to="/HidraulicniSistemi">
										Hidraulicni Sistemi
									</Link>
									<hr className="h-1 bg-accentColor" />
								</h2>
								<p>
									Prednost dupleks garaža je što omogućavaju
									udvostručenje ili utrostručenje broja
									parking mesta bez povećanja površine. Vozila
									se parkiraju jedno iznad drugog pomoću
									parking platformi, što vam omogućava da
									maksimalno iskoristite broj parking mesta
									čak i kada je prostor ograničen. Na osnovu
									modela, naše dupleks garaže su dostupne sa
									ili bez jame, za nezavisno ili zavisno
									parkiranje, i sa dva ili tri nivoa. U
									zavisnosti od dostupnog prostora, možete
									izabrati između duplih platformi koje
									obezbeđuju dva parking mesta jedno pored
									drugog po nivou, ili jednostrukih platformi
									sa jednim parking mestom po nivou.
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBase2072i">
											MultiBase 2072i
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBase2078i">
											MultiBase 2078i
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBase2042">
											MultiBase 2042
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBaseG63">
											MultiBase G63
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBaseU10">
											MultiBase U10
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBaseU20">
											MultiBase U20
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/SingleVario2061">
											SingleVario 2061
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBase2072iSpecial">
											MultiBase 2072i - platforme za osobe
											sa posebnim potrebama
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/SingleVario2061Outdoor">
											SingleVario 2061 Za Spoljnu Upotrebu
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBase2072iOutdoor">
											MultiBase 2072i Za Spoljnu Upotrebu
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MultiBaseG63Outdoor">
											MultiBase G63 Za Spoljnu Upotrebu
										</Link>
									</li>
								</ul>
							</div>

							{/* TABLET AND UP (md+) */}
							<div className="hidden w-full md:flex">
								<div className="flex flex-col pr-4 md:w-1/2 lg:w-[60%]">
									<img
										src="src/assets/header-produktgruppe-parker.jpg"
										className="h-auto w-full rounded-md object-cover"
									/>
									<div className="mt-4">
										<p>
											Prednost dupleks garaža je što
											omogućavaju udvostručenje ili
											utrostručenje broja parking mesta
											bez povećanja površine. Vozila se
											parkiraju jedno iznad drugog pomoću
											parking platformi, što vam omogućava
											da maksimalno iskoristite broj
											parking mesta čak i kada je prostor
											ograničen. Na osnovu modela, naše
											dupleks garaže su dostupne sa ili
											bez jame, za nezavisno ili zavisno
											parkiranje, i sa dva ili tri nivoa.
											U zavisnosti od dostupnog prostora,
											možete izabrati između duplih
											platformi koje obezbeđuju dva
											parking mesta jedno pored drugog po
											nivou, ili jednostrukih platformi sa
											jednim parking mestom po nivou.
										</p>
									</div>
								</div>

								<div className="md:w-1/2 lg:w-[40%]">
									<h2
										className={`${styles.heading2} group relative cursor-pointer transition duration-300 hover:text-accentColor`}
									>
										<Link to="/HidraulicniSistemi">
											Hidraulicni Sistemi
										</Link>
										<span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accentColor transition-all duration-300 group-hover:w-full"></span>
										<span className="absolute right-2 top-0 translate-x-2 transform text-accentColor opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
											&rarr;
										</span>
										<hr className="h-[3px] bg-accentColor group-hover:w-0" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBase2072i">
												MultiBase 2072i
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBase2078i">
												MultiBase 2078i
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBase2042">
												MultiBase 2042
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBaseG63">
												MultiBase G63
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBaseU10">
												MultiBase U10
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBaseU20">
												MultiBase U20
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/SingleVario2061">
												SingleVario 2061
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBase2072iSpecial">
												MultiBase 2072i - platforme za
												osobe sa posebnim potrebama
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/SingleVario2061Outdoor">
												SingleVario 2061 Za Spoljnu
												Upotrebu
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBase2072iOutdoor">
												MultiBase 2072i Za Spoljnu
												Upotrebu
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MultiBaseG63Outdoor">
												MultiBase G63 Za Spoljnu
												Upotrebu
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</section>
						{/* Poluautomatski Sistemi */}
						<section className="mb-8 mt-16">
							{/* MOBILE (below md) */}
							<div className="block w-full md:hidden">
								<img
									src="src/assets/header-produktgruppe-halbautomatische-parksysteme.jpg"
									className="h-auto w-full rounded-md object-cover"
								/>

								<h2 className={`${styles.heading2} mt-4`}>
									<Link to="/PoluautomackiSistemi">
										Poluautomatski Sistemi
									</Link>
									<hr className="h-1 bg-accentColor" />
								</h2>
								<p>
									Način na koji ovi sistemi funkcionišu je
									jednako pametan kao i jednostavan. Korisnik
									direktno vozi u zonu sistema i poziva
									pokretnu parking platformu na kojoj zatim
									parkira svoje vozilo. Iza zaključanih
									električnih kliznih vrata, platforma zatim
									transportuje vozilo vertikalno ili
									horizontalno do dostupnog parking mesta
									unutar sistema. Kada je vreme za odlazak,
									korisnik može povratiti svoje vozilo
									pritiskom na dugme ili putem elektronskih
									operativnih sistema kao što je SmartApp.
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/TrendVario6100">
											TrendVario 6100
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/TrendVario6100plus">
											Trend Vario 6100+
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/TrendVario6200plus">
											Trend Vario 6200+
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/TrendVario6300">
											Trend Vario 6300
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/TrendVario6300plus">
											Trend Vario 6300+
										</Link>
									</li>
								</ul>
							</div>

							{/* TABLET AND UP (md+) */}
							<div className="hidden w-full md:flex">
								<div className="md:w-1/2 lg:w-[40%]">
									<h2
										className={`${styles.heading2} group relative cursor-pointer transition duration-300 hover:text-accentColor`}
									>
										<Link to="/PoluautomackiSistemi">
											Poluautomatski Sistemi
										</Link>
										<span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accentColor transition-all duration-300 group-hover:w-full"></span>
										<span className="absolute right-2 top-0 translate-x-2 transform text-accentColor opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
											&rarr;
										</span>
										<hr className="h-[3px] bg-accentColor group-hover:w-0" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/TrendVario6100">
												TrendVario 6100
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/TrendVario6100plus">
												Trend Vario 6100+
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/TrendVario6200plus">
												Trend Vario 6200+
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/TrendVario6300">
												Trend Vario 6300
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/TrendVario6300plus">
												Trend Vario 6300+
											</Link>
										</li>
									</ul>
								</div>

								<div className="flex flex-col pr-4 md:w-1/2 lg:w-[60%]">
									<img
										src="src/assets/header-produktgruppe-halbautomatische-parksysteme.jpg"
										className="h-auto w-full rounded-md object-cover"
									/>
									<div className="mt-4">
										<p>
											Način na koji ovi sistemi
											funkcionišu je jednako pametan kao i
											jednostavan. Korisnik direktno vozi
											u zonu sistema i poziva pokretnu
											parking platformu na kojoj zatim
											parkira svoje vozilo. Iza
											zaključanih električnih kliznih
											vrata, platforma zatim transportuje
											vozilo vertikalno ili horizontalno
											do dostupnog parking mesta unutar
											sistema. Kada je vreme za odlazak,
											korisnik može povratiti svoje vozilo
											pritiskom na dugme ili putem
											elektronskih operativnih sistema kao
											što je SmartApp.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/* Automatski Sistemi */}
						<section className="mb-8 mt-16">
							{/* MOBILE (below md) */}
							<div className="block w-full md:hidden">
								<img
									src="src/assets/header-produktgruppe-vollautomatische-parksysteme.jpg"
									className="h-auto w-full rounded-md object-cover"
								/>

								<h2 className={`${styles.heading2} mt-4`}>
									<Link to="/AutomatskiSistemi">
										Automatski Sistemi
									</Link>
									<hr className="h-1 bg-accentColor" />
								</h2>
								<p>
									Od traženja parking mesta do ulaska i
									izlaska iz sistema, naša moderna tehnologija
									parkiranja automatizuje sve procese
									parkiranja. Korisnik jednostavno parkira
									svoje vozilo u prijemnoj kabini i ostavlja
									ostalo sistemu za parkiranje. Ne može biti
									lakše.
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR2C">
											MasterVario R2C
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR2L">
											MasterVario R2L
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR3C">
											MasterVario R3C
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR3L">
											MasterVario R3L
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioF2">
											MasterVario F2
										</Link>
									</li>
								</ul>
							</div>

							{/* TABLET AND UP (md+) */}
							<div className="hidden w-full md:flex">
								<div className="flex flex-col pr-4 md:w-1/2 lg:w-[60%]">
									<img
										src="src/assets/header-produktgruppe-vollautomatische-parksysteme.jpg"
										className="h-auto w-full rounded-md object-cover"
									/>
									<div className="mt-4">
										<p>
											Od traženja parking mesta do ulaska
											i izlaska iz sistema, naša moderna
											tehnologija parkiranja automatizuje
											sve procese parkiranja. Korisnik
											jednostavno parkira svoje vozilo u
											prijemnoj kabini i ostavlja ostalo
											sistemu za parkiranje. Ne može biti
											lakše.
										</p>
									</div>
								</div>

								<div className="md:w-1/2 lg:w-[40%]">
									<h2
										className={`${styles.heading2} group relative cursor-pointer transition duration-300 hover:text-accentColor`}
									>
										<Link to="/AutomatskiSistemi">
											Automatski Sistemi
										</Link>
										<span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accentColor transition-all duration-300 group-hover:w-full"></span>
										<span className="absolute right-2 top-0 translate-x-2 transform text-accentColor opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
											&rarr;
										</span>
										<hr className="h-[3px] bg-accentColor group-hover:w-0" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MasterVarioR2C">
												MasterVario R2C
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MasterVarioR2L">
												MasterVario R2L
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MasterVarioR3C">
												MasterVario R3C
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MasterVarioR3L">
												MasterVario R3L
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/MasterVarioF2">
												MasterVario F2
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</section>
						{/* Parking Palete */}
						<section className="mb-8 mt-16">
							{/* MOBILE (below md) */}
							<div className="block w-full md:hidden">
								<img
									src="src/assets/header-produktgruppe-paletten.jpg"
									className="h-auto w-full rounded-md object-cover"
								/>

								<h2 className={`${styles.heading2} mt-4`}>
									<Link to="/ParkingPalete">
										Palete za Parking
									</Link>
									<hr className="h-1 bg-accentColor" />
								</h2>
								<p>
									Parking paleti od KLAUS Multiparking koriste
									premijum tehnologiju parkiranja kako bi
									stvorili parking prostore u skučenim
									oblastima gde je konvencionalno parkiranje
									nemoguće. Naši park tableti se mogu pomerati
									kako uzdužno, tako i poprečno, što omogućava
									efikasnije korišćenje dostupnog prostora.
									Automatskim rotiranjem oko svoje ose, naši
									park diskovi olakšavaju proces parkiranja i
									izlaska.
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/ParkBoardPE">
											ParkBoard PE
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/ParkBoardPH">
											ParkBoard PH
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/ParkBoardPQ">
											ParkBoard PQ
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/ParkDiscD450">
											ParkDisc D450
										</Link>
									</li>
								</ul>
							</div>

							{/* TABLET AND UP (md+) */}
							<div className="hidden w-full md:flex">
								<div className="md:w-1/2 lg:w-[40%]">
									<h2
										className={`${styles.heading2} group relative cursor-pointer transition duration-300 hover:text-accentColor`}
									>
										<Link to="/ParkingPalete">
											Palete za Parking
										</Link>
										<span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accentColor transition-all duration-300 group-hover:w-full"></span>
										<span className="absolute right-2 top-0 translate-x-2 transform text-accentColor opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
											&rarr;
										</span>
										<hr className="h-[3px] bg-accentColor group-hover:w-0" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/ParkBoardPE">
												ParkBoard PE
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/ParkBoardPH">
												ParkBoard PH
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/ParkBoardPQ">
												ParkBoard PQ
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/ParkDiscD450">
												ParkDisc D450
											</Link>
										</li>
									</ul>
								</div>

								<div className="flex flex-col pr-4 md:w-1/2 lg:w-[60%]">
									<img
										src="src/assets/header-produktgruppe-paletten.jpg"
										className="h-auto w-full rounded-md object-cover"
									/>
									<div className="mt-4">
										<p>
											Parking paleti od KLAUS Multiparking
											koriste premijum tehnologiju
											parkiranja kako bi stvorili parking
											prostore u skučenim oblastima gde je
											konvencionalno parkiranje nemoguće.
											Naši park tableti se mogu pomerati
											kako uzdužno, tako i poprečno, što
											omogućava efikasnije korišćenje
											dostupnog prostora. Automatskim
											rotiranjem oko svoje ose, naši park
											diskovi olakšavaju proces parkiranja
											i izlaska.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/* Dodatna Oprema */}
						<section className="mb-8 mt-16">
							{/* MOBILE (below md) */}
							<div className="block w-full md:hidden">
								<img
									src="src/assets/header-zubehoer.jpg"
									className="h-auto w-full rounded-md object-cover"
								/>

								<h2 className={`${styles.heading2} mt-4`}>
									<Link to="/DodatnaOprema">
										Dodatna Oprema
									</Link>
									<hr className="h-1 bg-accentColor" />
								</h2>
								<p>
									Ekskluzivna dodatna oprema koja će
									maksimalno iskoristiti svoje parking mesto.
									Bez obzira da li tražite bolji premaz
									platforme ili želite da napunite svoj
									električni automobil u svom parking sistemu
									- imamo rešenje za sve.
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR2C">
											MasterVario R2C
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR2L">
											MasterVario R2L
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR3C">
											MasterVario R3C
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioR3L">
											MasterVario R3L
										</Link>
									</li>
									<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
										<Link to="/MasterVarioF2">
											MasterVario F2
										</Link>
									</li>
								</ul>
							</div>

							{/* TABLET AND UP (md+) */}
							<div className="hidden w-full md:flex">
								<div className="flex flex-col pr-4 md:w-1/2 lg:w-[60%]">
									<img
										src="src/assets/header-zubehoer.jpg"
										className="h-auto w-full rounded-md object-cover"
									/>
									<div className="mt-4">
										<p>
											Ekskluzivna dodatna oprema koja će
											maksimalno iskoristiti svoje parking
											mesto. Bez obzira da li tražite
											bolji premaz platforme ili želite da
											napunite svoj električni automobil u
											svom parking sistemu - imamo rešenje
											za sve.
										</p>
									</div>
								</div>

								<div className="md:w-1/2 lg:w-[40%]">
									<h2
										className={`${styles.heading2} group relative cursor-pointer transition duration-300 hover:text-accentColor`}
									>
										<Link to="/DodatnaOprema">
											Dodatna Oprema
										</Link>
										<span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accentColor transition-all duration-300 group-hover:w-full"></span>
										<span className="absolute right-2 top-0 translate-x-2 transform text-accentColor opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
											&rarr;
										</span>
										<hr className="h-[3px] bg-accentColor group-hover:w-0" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/EParking">
												E-Parking
											</Link>
										</li>
										<li className="font-medium text-[#FF6F00] transition-all duration-300 ease-in-out hover:text-gray-700">
											<Link to="/SmartHome">
												SmartHome
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</section>

						{/* Oslonite se na KLAUS Multiparking, vodećeg dobavljača i proizvođača parking sistema sa više od 60 godina iskustva. Naši parking sistemi se koriste širom Nemačke i olakšavaju ulazak i izlazak iz velikih parking objekata zahvaljujući inteligentnim tehnologijama. KLAUS Multiparking - Vaš pouzdan partner za inovativna rešenja parkiranja sa preko 60 godina iskustva. */}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default FrontPage;
