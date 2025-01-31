import { DownloadButton } from './../../components';
import styles from './../../style';

import bannerIMG from './../../assets/products/MasterVarioF2/mastervario-flaechensystem-f2.jpg';

import variationsImg1 from './../../assets/products/MasterVarioF2/mastervario-vollautomatisches-parksystem-f2.jpg';
import variationsImg2 from './../../assets/products/MasterVarioF2/mastervario-f2-vollautomatisches-parksystem.jpg';

import doc1 from './../../assets/products/MasterVarioF2/58645050.pdf';
import doc2 from './../../assets/products/MasterVarioR3C/58645060.pdf';
import doc3 from './../../assets/products/MasterVarioR2C/Fully-automatic-parking-systems.pdf';
import doc4 from './../../assets/products/MasterVarioR2C/Questionnaire-Automatic-parking-systems.pdf';
import Footer from './../../components/Footer';

const MasterVarioF2 = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MasterVarioF2"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Master Vario F2
								</span>
							</h1>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							<section className="mb-8">
								<h2
									className={`${styles.heading1} sm:text-3xl`}
								>
									Kompaktan premium potpuno automatizovani
									sistem za parkiranje koji efikasno koristi
									prostor.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									MasterVario F2 pravi do 50 parking mesta po
									sistemu.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Potreban vam je veliki broj parking mesta, a
									ograničeni ste sa prostorom? Automatski
									parking sistemi KLAUS Multiparking pružaju
									nekoliko nivoa parkiranja i optimalno
									koriste površinu objekta. Sistemi mogu biti
									projektovani kao nadzemni i podzemni sistemi
									ili kao kombinacija oba. Visina vozila u oba
									sistema je slobodna, ali mora biti
									ravnomerna.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Jednoredni sistem sa liftom i horizontalnom
									prenosnom jedinicom može se projektovati sa
									do 5 nivoa u zavisnosti od broja parking
									mesta po nivou. Korišćenjem našeg
									MasterVario F2 moguće je obezbediti do 50
									parking mesta po sistemu. Pored standardnih
									dimenzija i težine automobila, moguća su i
									posebna rešenja po zahtevu. I, naravno,
									pojedinačno prilagođavanje projekta je
									takođe moguće u mnogim slučajevima.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Za 10 do 50 vozila </li>
									<li>Potrebna površina: minimalno</li>
									<li>
										Varijante sistema: nadzemni i/ili
										podzemni{' '}
									</li>
									<li>
										{' '}
										Vertikalni nivoi: do 5 parking nivoa{' '}
									</li>
									<li> Potrebna površina: minimalno </li>
									<li>
										Dimenzije vozila: dužina 520 cm, širina
										215 cm (druge dimenzije dostupne na
										zahtev), visina na zahtev, ali
										ujednačena
									</li>
									<li>
										Nosivost, standardna: 2.500 kg, veća
										nosivost na zahtev{' '}
									</li>
									<li>
										{' '}
										Lift: sa horizontalnom i vertikalnom
										transportnom jedinicom{' '}
									</li>
									<li>
										{' '}
										Upravljanje: kontrola pristupa preko
										transpondera, daljinski upravljač{' '}
									</li>
									<li>
										{' '}
										Transfer kabina: postavljena u ravni sa
										tlom ili na gornjem nivou{' '}
									</li>
									<li>
										{' '}
										Prenosna jedinica: sa horizontalnim i
										vertikalnim pomeranjem{' '}
									</li>
									<li> Rotaciona platforma: opciono </li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									PREDNOSTI ZA KORISNIKA
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Brz pristup vremenu</li>
									<li>Sigurno parkiranje vozila</li>
									<li>Zaštita od krađe i oštećenja </li>
									<li>
										{' '}
										Siguran pristup parkingu bez strmih
										rampi i mračnih ulaza{' '}
									</li>
									<li>
										{' '}
										Ukupno iskorišćen prostor je manji za
										50% u poređenju sa običnim praking
										mestima{' '}
									</li>
									<li>
										Nije potreban prostor za rampe i
										prilazne puteve
									</li>
									<li>
										Ušteda na nivou parkinga u potrebnoj
										opremi (osvetljenje, prskalice,
										ventilacija){' '}
									</li>
									<li> Smanjeno vreme izgradnje </li>
								</ul>
							</section>
							<section>
								<h2 className={`${styles.heading2}`}>
									POLJE PRIMENE
								</h2>
								<div className="md:flex md:justify-between">
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>Stambeni i poslovni objekti</li>
										<li>Dvojne kuće</li>
										<li>Poslovne zgrade</li>
										<li>Podzemni parking</li>
										<li>Parkirališta</li>
										<li>Hoteli</li>
										<li> Auto poslovanje </li>
										<li>Iznajmljivanje automobila</li>
										<li>
											{' '}
											Skladištenje klasičnih automobila
										</li>
										<li> Predstavljanje vozila</li>
									</ul>
								</div>
							</section>
						</main>
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
				<div className={`${styles.boxWidth}`}>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Varijacije
									<hr className="h-1 bg-accentColor"></hr>
									<div className="mt-4 flex flex-row flex-wrap items-start justify-center gap-4">
										<div className="max-w-[40%] flex-1">
											<img
												src={variationsImg1}
												className="h-auto w-full object-contain"
											/>
										</div>
										<div className="max-w-[40%] flex-1">
											<img
												src={variationsImg2}
												className="h-auto w-full object-contain"
											/>
										</div>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Master Vario F2 Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podaci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={doc2}
										text="Tehničke informacije"
									></DownloadButton>
									<DownloadButton
										href={doc3}
										text="automatski-sistemi.PDF"
									></DownloadButton>
									<DownloadButton
										href={doc4}
										text="automatski-sistemi-upitnik.PDF"
									></DownloadButton>
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

export default MasterVarioF2;
