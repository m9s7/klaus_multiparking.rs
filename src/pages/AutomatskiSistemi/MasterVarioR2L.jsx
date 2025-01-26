import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MasterVarioR2L/header-produkt-mastervario-r2l.jpg';

import variationsImg1 from './../../assets/products/MasterVarioR2L/mastervario-r2l-towersystem.jpg';
import variationsImg2 from './../../assets/products/MasterVarioR2L/mastervario-towersystem-r2l.jpg';

import doc1 from './../../assets/products/MasterVarioR2L/58671850.pdf';
import doc2 from './../../assets/products/MasterVarioR2L/58645060.pdf';
import doc3 from './../../assets/products/MasterVarioR2C/Fully-automatic-parking-systems.pdf';
import doc4 from './../../assets/products/MasterVarioR2C/Questionnaire-Automatic-parking-systems.pdf';
import Footer from '../../components/Footer';

const MasterVarioR2L = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MasterVarioR2L"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Master Vario R2L
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
									PREMIUM POTPUNO AUTOMATSKI SISTEM PARKIRANJA
									KOJI IMA VERTIKALNI PRISTUP.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									MasterVario R2L može da smesti više
									automobila na malom prostoru.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Ovaj automatski "Toranj Sistem" KLAUS
									Multiparking-a je uvek pravi izbor ako je
									dostupan mali prostor. Umesto da ide u
									širinu, "Toranj sistem" ide u visinu ili u
									dubinu – lift transportuje vaše vozilo do
									slobodnog parking mesta, gde ga bezbedno
									parkira. Sa 15 nivoa parkiranja i 1 do 6
									parking mesta po nivou, svaki sistem može da
									obezbedi do 50 parking mesta na izuzetno
									maloj površini.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									MasterVario R2L je vrhunsko rešenje za
									kratko vreme pristupa u slučaju minimalnog
									prostora. Dodatna rotaciona platforma unutar
									transfer kabine omogućava udobno parkiranje
									i izlazak. Od standardnih automobila do SUV
									vozila - MasterVario R2L prepoznaje visinu
									vašeg vozila i pronalazi odgovarajuće
									parking mesto za njega.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Pored sistema za standardne dimenzije i
									težine automobila, na zahtev su dostupna i
									posebna rešenja. Naravno, u mnogim
									slučajevima, sistem se može prilagoditi
									vašim individualnim zahtevima.{' '}
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Za max. 50 vozila</li>
									<li>Potreban prostor: minimalno</li>
									<li>
										Varijante sistema: nadzemni i/ili
										podzemni{' '}
									</li>
									<li>
										{' '}
										Vertikalni nivoi: do 15 parking nivoa{' '}
									</li>
									<li>
										{' '}
										Horizontalni nivoi: 1-6 parking mesta po
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
										tri reda, desno i/ili levo od lifta,
										bočno parkiranje{' '}
									</li>
									<li>
										{' '}
										Lift: za vertikalni transport vozila do
										željenih nivoa parkiranja i za prenos
										vozila u skladište{' '}
									</li>
									<li>
										{' '}
										Operacija: kontrola pristupa preko čipa,
										daljinski upravljač{' '}
									</li>
									<li>
										{' '}
										Transfer kabina: postavljena u ravni sa
										tlom ili na nižem nivou{' '}
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
									Master Vario R2L Preuzimanja
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

export default MasterVarioR2L;
