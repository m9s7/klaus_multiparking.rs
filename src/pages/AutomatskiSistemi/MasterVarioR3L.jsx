import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MasterVarioR3L/mastervario-r3l-regalsystem.png';

import variationsImg1 from './../../assets/products/MasterVarioR3L/mastervario-r3l-regalsystem.jpg';
import variationsImg2 from './../../assets/products/MasterVarioR3L/mastervario-regalsystem-r3l.jpg';

import doc1 from './../../assets/products/MasterVarioR3L/58671880.pdf';
import doc2 from './../../assets/products/MasterVarioR2C/Fully-automatic-parking-systems.pdf';
import doc3 from './../../assets/products/MasterVarioR2C/Questionnaire-Automatic-parking-systems.pdf';

const MasterVarioR3L = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MasterVarioR3L"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Master Vario R3L
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
									Premium potpuno automatizovani parking
									sistem za dugačke i uske prostore.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									MasterVario R3L – regalni sistem do 60
									parking mesta.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Paletni sistemi ima sličan dizajn kao
									reglano skladište i ima dodtnu pokretnu osu
									u odnosu na Toranj sistem. Paletni sistem je
									stoga idealan za uske i dugačke prostore ili
									zgrade. Paletni sistem može biti nadzemni,
									podzemni ili kombinacija oba. MasterVario
									R3L paletni sistem ima iste fleksibilne
									kvalitete kao i Toranj sistem, ali jednu
									izrazitu prednost: zbog dodatnih pokreta po
									osi, jedinica za smeštaj i preuzimanje
									vozila može rasporediti do deset vozila
									jedno iza drugoga. Može imati jedan, dva ili
									tri grida.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Svaki nivo parkinga može imati do 30 parking
									mesta. Da bi se obezbedilo da vreme pristupa
									ostane brzo, maksimalan broj parking mesta
									od 50 – 60 vozila po sistemu/transfer kabini
									ne bi trebalo da se prekorači, čak i za ovaj
									potpuno automatski sistem parkiranja. Model
									MasterVario R3L je savršen izbor ako imate
									izdužene prostorije. Od standardnih
									automobila do SUV-a, MasterVario R3L
									prepoznaje visinu vašeg vozila i pronalazi
									odgovarajuće parking mesto za njega
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Pored sistema za standardne dimenzije i
									težine automobila, na zahtev su dostupna i
									posebna rešenja. Naravno, u mnogim
									slučajevima, sistem se može prilagoditi
									vašim individualnim zahtevima projekta.{' '}
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
										Broj vozila: max . 50 - 60 po sistemu /
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
										Horizontalni nivoi: do 30 parking mesta
										po nivou{' '}
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
										tri reda sa do 10 vozila jedno pored
										drugog, desno i/ili levo od jedinice za
										skladištenje i preuzimanje, 10 vozila
										jedno iza drugog, uzdužno parkiranje{' '}
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
									<li>
										{' '}
										Automobili se prenose u prostor za
										skladištenje pomoću jedinice za
										skladištenje i preuzimanje sa
										horizontalnom i vertikalnom transportnom
										jedinicom i dodatnim, opcionim bočnim
										liftom{' '}
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
									Reference
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
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
									Master Vario R3L Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podaci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={doc2}
										text="automatski-sistemi.PDF"
									></DownloadButton>
									<DownloadButton
										href={doc3}
										text="automatski-sistemi-upitnik.PDF"
									></DownloadButton>
								</div>
							</section>
						</main>
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className={`${styles.paddingY} relative`}>
						<footer className="mt-8 bg-accentColor p-6 text-white">
							<p>
								KLAUS Multiparking - Vaš pouzdan partner za
								inovativna rešenja parkiranja sa preko 60 godina
								iskustva.
							</p>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
};

export default MasterVarioR3L;
