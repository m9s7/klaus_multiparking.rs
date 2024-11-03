import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/TrendVario6200plus/header-produkt-trendvario-6200_.jpg';

import variationsImg1 from './../../assets/products/TrendVario6200plus/trendvario-6200plus-table-de.jpg';
import variationsImg2 from './../../assets/products/TrendVario6200plus/trendvario-kombinationen.jpg';
import variationsImg3 from './../../assets/products/TrendVario6200plus/trendvario-komibnationen.jpg';

import doc1 from './../../assets/products/TrendVario6200plus/58965740.pdf';
import doc2 from './../../assets/products/TrendVario6200plus/58986430.pdf';
import doc3 from './../../assets/products/TrendVario6100plus/Semi-Automatic-Parking-Systems.pdf';
import doc4 from './../../assets/products/TrendVario6100/E-Plug-In.pdf';
import zip1 from './../../assets/products/TrendVario6200plus/TrendVario-6200+-DWG.zip';
import zip2 from './../../assets/products/TrendVario6200plus/TrendVario-6200+-DXF.zip';
import zip3 from './../../assets/products/TrendVario6200plus/TrendVario-6200plus-BIM.zip';
import doc5 from './../../assets/products/TrendVario6100/Fire-protection-information_EN.pdf';

const TrendVario6200plus = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="TrendVario6200+"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Trend Vario 6200+
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
									Premium poluautomatski sistem za parkiranje
									bez jame kroz koji se može voziti.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									TrendVario 6200+ se može kombinovati sa
									drugim TrendVario modelima{' '}
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									TrendVario 6200+ je prolazni parking sistem
									koji se može kombinovati sa TrendVario 6100,
									6100+, 6200+, 6300 i 6300+ sistemima kao
									dodatni red parking mesta. Ovakav način
									kombinovanja sistema omogućava još više
									parking mesta bez potrebe za još jednom
									prilaznom tačkom.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									TrendVario 6200+ je polu-automatski sistem
									koji parkira dva vozila jedno iznad drugog.
									Parking mesta mogu da se pomeraju
									horizontalno i vertikalno i na taj način
									dolaze na željenu poziciju.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Radi bezbednosti, sistem je obezbeđen
									vratima. Ovo ujedno štiti parkirana vozila
									od krađe i oštećenja.{' '}
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Možete unaprediti vaš TrendVario 6200+ sa
									našom dodatnom opremom.{' '}
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
										4 reda jedan iza drugog i 4 grida jedan
										pored drugog - obezbeđuje do 28 parking
										mesta{' '}
									</li>
									<li> Ukupna visina: od 330 cm </li>
									<li> Bez jame </li>
									<li>Visina vozila: 150 cm do 220 cm</li>
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
										{' '}
										Vozne ploče: StandardGrip, opciono
										AluLongLife ili EasyWalk{' '}
									</li>
									<li>
										{' '}
										Upravljanje: Pomoću čipa, daljinskog
										upravljača ili aplikacije{' '}
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
									<li> Opcije za klizna vrata: </li>
									<li>
										Postoji oko 50 različitih varijanti
										materijala i boja
									</li>
									<li>
										Dostupne opcije su: Staklo (laminirano
										sigurnosno staklo), drvo (nordijska
										smrča), aluminijum, čelik i mnoge druge{' '}
									</li>
									<li> Zamenljivi paneli i segmenti </li>
								</ul>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									TrendVario 6200+ Vizuelizacija
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/obZwMhGi7sQ"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
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
									Reference
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
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
									TrendVario 6200+ Preuzimanja
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
										text="TrendVario-6200-plus-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="TrendVario-6200-plus-DXF.zip"
									></DownloadButton>
									<DownloadButton
										href={zip3}
										text="TrendVario-6200-plus-BIM.zip"
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

export default TrendVario6200plus;
