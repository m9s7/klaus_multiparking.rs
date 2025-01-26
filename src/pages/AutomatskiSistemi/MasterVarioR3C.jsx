import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MasterVarioR3C/master-vario-r3c-regalsystem.jpg';

import variationsImg1 from './../../assets/products/MasterVarioR3C/mastervario-r3c-regalsystem.jpg';
import variationsImg2 from './../../assets/products/MasterVarioR3C/mastervario-regalsystem-r3c.jpg';

import doc1 from './../../assets/products/MasterVarioR3C/58645040.pdf';
import doc2 from './../../assets/products/MasterVarioR3C/58645060.pdf';
import doc3 from './../../assets/products/MasterVarioR2C/Fully-automatic-parking-systems.pdf';
import doc4 from './../../assets/products/MasterVarioR2C/Questionnaire-Automatic-parking-systems.pdf';
import Footer from '../../components/Footer';

const MasterVarioR3C = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MasterVarioR3C"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Master Vario R3C
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
									Vrhunski potpuno automatizovani parking
									sistem za dugačke i uske prostore.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									MasterVario R3C – regalni sistem za do 60
									parking mesta.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Paletni sistemi imaju sličan dizajn kao
									visoko reglano skladište i imaju dodatnu
									pokretnu osu u poređenju sa Toranj sistemom.
									Paletni sistem je stoga idealan za uske i
									dugačke prostorije ili zgrade. Paletni
									sistem može biti nadzemni, podzemni ili
									kombinacija oba. MasterVario R3C paletni
									sistem ima iste fleksibilne kvalitete kao i
									Tower system, ali jednumizuzetnu prednost:
									zbog dodatnih pokreta po osi, jedinica za
									smeštaj i preuzimanje vozila može
									rasporediti do deset vozila jedno iza
									drugoga. Može biti dizajniran kao
									jednostruki, dvostruki ili trostruki.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Svaki nivo parkinga ima do 30 parking
									mesta.U ovom potpuno automatizovanom sistemu
									parkiranja maksimalni broj parking mesta je
									od 50-60 vozila po sistemu kako bi se
									osigurala brzina pristupa. MasterVario R3 je
									pravi izbor za izdužene prostorije. Od
									standardnog do SUV vozila MasterVario R3C
									prepoznaje visinu vašeg vozila i nalazi
									odgovarajuće mesto za njega.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Pored sistema za standardne dimenzije i
									težine vozila, na zahtev su dostupna i
									posebna rešenja. Naravno u mnogim
									slučajevima sistem se može prilagoditi vašim
									individualnim zahtevima projekta.{' '}
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										{' '}
										Za max . 50 – 60 vozila po sistemu i/ili
										transfer kabini
									</li>
									<li>Potreban prostor po nivou: izdužen</li>
									<li>
										Varijante sistema: nadzemni i/ili
										podzemni{' '}
									</li>
									<li>
										{' '}
										Vertikalni nivoi: do 10 parking nivoa{' '}
									</li>
									<li>
										{' '}
										Horizontalni nivoi: 30 parking mesta po
										nivou{' '}
									</li>
									<li>
										Dimenzije vozila: dužina: 520 cm,
										širina: 215 cm (druge dimenzije su
										moguće kao opcija) visina po
										potrebi,moguće su i dve različite visine
										vozila
									</li>
									<li>
										Nosivost, standardna: 2.500 kg, veća
										nosivost na zahtev{' '}
									</li>
									<li>
										{' '}
										Raspored parking mesta: jedan, dva ili
										tri reda desno i / ili levo od jedinice
										za skladištenje i preuzimanje, 20 vozila
										jedno pored drugog, bočno parkiranje{' '}
									</li>
									<li>
										{' '}
										Rukovanje : kontrola pristupa putem čipa
										, daljinski upravljač{' '}
									</li>
									<li>
										{' '}
										Transfer kabina: postavljena u ravni sa
										tlom ili na donjem nivou{' '}
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
									<li> Optimalno vreme pristupa</li>
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
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									POLJE PRIMENE
								</h2>
								<div className="md:flex md:justify-between">
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>
											U stambenim i poslovnim objektima u
											velikim gradovima
										</li>
										<li>
											{' '}
											Za uvećanje parking mesta u
											stambenim i poslovnim objektima{' '}
										</li>
										<li>
											Za povećanje kapaciteta u podzemnim
											garažama na pr. hoteli
										</li>
										<li>
											{' '}
											Više parking mesta za salone
											automobila, rent a car agencije,
											kolekcionare automobila
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
									Master Vario R3C Vizuelizacija
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/bAzi2xqqmnM"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/qJgMonIu9_Q"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/ZSqNXR3ptfE"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Varijacije
									<hr className="h-1 bg-accentColor"></hr>
									<div className="flex flex-row flex-wrap items-start justify-center gap-4">
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
									Master Vario R3C Preuzimanja
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

export default MasterVarioR3C;
