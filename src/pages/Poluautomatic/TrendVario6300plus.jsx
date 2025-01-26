import { DownloadButton } from './../../components';
import styles from './../../style';

import bannerIMG from './../../assets/products/TrendVario6300plus/header-produkt-trendvario-6300_.jpg';

import variationsImg1 from './../../assets/products/TrendVario6300plus/trendvario-6300plus-table-en.jpg';
import variationsImg2 from './../../assets/products/TrendVario6300plus/trendvario-kombinationen.jpg';
import variationsImg3 from './../../assets/products/TrendVario6300plus/trendvario-komibnationen.jpg';

import doc1 from './../../assets/products/TrendVario6300plus/58965780.pdf';
import doc2 from './../../assets/products/TrendVario6300plus/58986470.pdf';
import doc3 from './../../assets/products/TrendVario6100plus/Semi-Automatic-Parking-Systems.pdf';
import doc4 from './../../assets/products/TrendVario6100/E-Plug-In.pdf';
import zip1 from './../../assets/products/TrendVario6300plus/TrendVario-6300+-DWG.zip';
import zip2 from './../../assets/products/TrendVario6300plus/TrendVario-6300+-DXF.zip';
import zip3 from './../../assets/products/TrendVario6300plus/TrendVario-6300-6300plus-BIM.zip';
import doc5 from './../../assets/products/TrendVario6100/Fire-protection-information_EN.pdf';

import Footer from './../../components/Footer';

import ImageComponent from './../../components/DoorTypesComponent';

import doorImg0 from './../../assets/products/DoorTypes/v-gate-trendvario-vertikaltor.jpg';

import doorImg1 from './../../assets/products/DoorTypes/tore-alulochblech-300x200px.jpg';
import doorImg2 from './../../assets/products/DoorTypes/tore-stahlsickenblech-300x200px.jpg';
import doorImg3 from './../../assets/products/DoorTypes/tore-drahtgitter-verzinkt-300x200px.jpg';
import doorImg4 from './../../assets/products/DoorTypes/tore-holzfuellung-300x200px.jpg';
import doorImg5 from './../../assets/products/DoorTypes/tore-aluglattblech-300x200px.jpg';
import doorImg6 from './../../assets/products/DoorTypes/tore-sicherheitsglas-300x200px.jpg';
import { Link } from 'react-router-dom';

const TrendVario6300plus = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="TrendVario6300+"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Trend Vario 6300+
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
									PREMIUM POLUAUTOMATSKI “PROLAZNI” PARKING
									SISTEM SA JAMOM{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									Premium poluautomatski sistem sa 3 nivoa
									parkiranja može se kombinovati sa drugim
									TrendVario varijantama.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									TrendVario 6300+ je prolazni parking sistem
									koji se može kombinovati sa TrendVario 6100,
									6100+, 6200+, 6300 i 6300+ sistemima kao
									dodatni red parking mesta. Ovakav način
									kombinovanja sistema omogućava još više
									parking mesta bez potrebe za još jednom
									prilaznom tačkom.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									TrendVario 6300+ je polu-automatski sistem
									koji za razliku od ostalih TrendVario
									sistema parkira tri vozoila jedno iznad
									drugog, od kojih se jedno vozilo spušta u
									jamu. Parking mesta mogu da se pomeraju
									horizontalno i vertikalno i na taj način
									dolaze na željenu poziciju.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Radi bezbednosti, sistem je obezbeđen
									vratima. Ovo ujedno štiti parkirana vozila
									od krađe i oštećenja.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Poluautomatski parking sistem nudi ukupno do
									29 parking mesta.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Možete unaprediti vaš TrendVario 6300+ sa
									našom{' '}
									<Link
										style={{ color: '#FF6F00' }}
										to="/DodatnaOprema"
									>
										dodatnom opremom
									</Link>
									.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Nezavisno parkiranje</li>
									<li>
										Može se kombinovati sa TrendVario 6100,
										6100+, 6200+, 6300 i 6300+ sistemima
									</li>
									<li>
										4 reda jedan iza drugog i 15 gridova
										jedan pored drugog - obezbeđuje do 29
										parking mesta{' '}
									</li>
									<li>
										{' '}
										Ukupna visina: 335 cm do 460 cm sa
										povećanjem od po 5 cm
									</li>
									<li>
										{' '}
										Dubina jame: 200 cm do 250 cm sa
										povećanjem od po 5 cm{' '}
									</li>
									<li>Visina vozila: 150 cm do 215 cm</li>
									<li>Dužina vozila: 500 cm do 520 cm </li>
									<li>
										{' '}
										Širina platforme: 230 cm do 270 cm{' '}
									</li>
									<li>
										Nosivost: 2.000 kg po parking mestu,
										opciono: 2.600 kg ili maksimalno 3.000
										kg{' '}
									</li>
									<li>
										{' '}
										Horizontalni pristup svim nivoima
										parkiranja{' '}
									</li>
									<li>
										Vozne ploče:{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/DodatnaOprema"
										>
											StandardGrip
										</Link>
										, opciono{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/DodatnaOprema"
										>
											AluLongLife
										</Link>{' '}
										ili{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/DodatnaOprema"
										>
											EasyWalk
										</Link>{' '}
									</li>
									<li>
										Upravljanje: Pomoću{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/SmartHome"
										>
											čipa
										</Link>
										,{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/SmartHome"
										>
											daljinskog upravljača
										</Link>{' '}
										ili{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/SmartHome"
										>
											aplikacije
										</Link>
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									PRIMENA MULTIPARKING SISTEMA
								</h2>
								<div className="md:flex md:justify-between">
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>
											Stambene zgrade i poslovni objekti
										</li>
										<li> Porodične kuće</li>
										<li>Podzemni parking</li>
										<li>
											{' '}
											Parkirališta, hoteli, samostalne
											garaže
										</li>
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
									SPECIFIKACIJA VRATA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										{' '}
										Standardna vrata: KLAUS V-vrata,
										vertikalna vrata, električna vrata
									</li>
									<li>
										{' '}
										Eletrkonska klizna vrata kao opcija
									</li>
									<li>Daljinsko upravljanje kao opcija</li>
									<li>
										Okvir vrata napravljen od ekstrudiranog
										aluminijuma sa dve vertikalne središnje
										grede za vertikalna vrata i jednom
										središnjom gredom za klizna vrata
									</li>
									<li>
										{' '}
										Standardni materijal vrata: perforirana
										aluminijumska ploča{' '}
									</li>
									<li>
										{' '}
										Opcije za klizna vrata:
										<ul
											className={`${styles.paragraph} custom-list mt-4`}
										>
											<li>
												Postoji oko 50 različitih
												varijanti materijala i boja
											</li>
											<li>
												Dostupne opcije su: Staklo
												(laminirano sigurnosno staklo),
												drvo (nordijska smrča),
												aluminijum, čelik i mnoge druge{' '}
											</li>
											<li>
												{' '}
												Zamenljivi paneli i segmenti{' '}
											</li>
										</ul>
									</li>
								</ul>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									KLAUS-V VERTIKALNA VRATA:
								</h2>
								{/* className="grid grid-cols-1 gap-6 md:grid-cols-2" */}
								<div className="mt-4 flex flex-col gap-2">
									<ImageComponent
										imageUrl={doorImg0}
										heading="Perforirane aluminijumske ploče:"
										listItems={[
											'Debljina 1.5 mm, RV 5/8 E6/EV1, anodizovano, debljina sloja približno 20 μm',
											'Ventilacija: 30%',
										]}
									/>
								</div>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									VARIJANTE KLIZNIH VRATA:
								</h2>
								{/* className="grid grid-cols-1 gap-6 md:grid-cols-2" */}
								<div className="mt-4 flex flex-col gap-2">
									<ImageComponent
										imageUrl={doorImg1}
										heading="Perforirane aluminijumske ploče:"
										listItems={[
											'Debljina 2 mm, RV 5/8 E6/EV1, anodizovano, debljina sloja približno 20 μm',
											'Ventilacija: 40%',
										]}
									/>
									<ImageComponent
										imageUrl={doorImg3}
										heading="Rešetka od čelične žice:"
										listItems={[
											'Veličina mreže: 12x12 mm',
											'Debljina 2mm, galvanizovano, debljina sloja približno 20 μm',
											'Ventilacija: 70%',
										]}
									/>
									<ImageComponent
										imageUrl={doorImg2}
										heading="Običan aluminijumski lim:"
										listItems={[
											'Debljina 2 mm, E6/EV1, anodizovano, debljina sloja približno 20 μm',
										]}
									/>
									<ImageComponent
										imageUrl={doorImg5}
										heading="Čelična ploča:"
										listItems={[
											'Debljina 1 mm, (vruća galvanizacija),debljina sloja približno 20 μm',
											'Dodatni sloj u prahu',
											'Debljina sloja približno 25 μm spolja i 12 μm unutra',
											'Više RAL boja dostupno',
										]}
									/>
									<ImageComponent
										imageUrl={doorImg4}
										heading="Drvena oplata, nordijska smrča:"
										listItems={[
											'Nordijska smrča, klasa A',
											'Prethodno impregnirano (bezbojno)',
										]}
									/>
									<ImageComponent
										imageUrl={doorImg6}
										heading="Laminirano sigurnosno staklo:"
										listItems={[
											'LSG koji se sastoji od ESG 8/4 mm',
										]}
									/>
								</div>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									TrendVario 6300+ Vizuelizacija
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/CeYquxky_QI"
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
										<div className="max-w-[30%] flex-1">
											<img
												src={variationsImg1}
												className="h-auto w-full object-contain"
											/>
										</div>
										<div className="max-w-[30%] flex-1">
											<img
												src={variationsImg2}
												className="h-auto w-full object-contain"
											/>
										</div>
										<div className="max-w-[30%] flex-1">
											<img
												src={variationsImg3}
												className="h-auto w-full object-contain"
											/>
										</div>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									TrendVario 6300+ Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podaci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={doc2}
										text="tender - specifikacije"
									></DownloadButton>
									<DownloadButton
										href={doc3}
										text="poluautomatski-sistemi.PDF"
									></DownloadButton>
									<DownloadButton
										href={doc4}
										text="E-PLUG-IN.PDF"
									></DownloadButton>
									<DownloadButton
										href={zip1}
										text="TrendVario-6300-plus-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="TrendVario-6300-plus-DXF.zip"
									></DownloadButton>
									<DownloadButton
										href={zip3}
										text="TrendVario-6300-plus-BIM.zip"
									></DownloadButton>
									<DownloadButton
										href={doc5}
										text="fire-protection-information-eng.PDF"
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

export default TrendVario6300plus;
