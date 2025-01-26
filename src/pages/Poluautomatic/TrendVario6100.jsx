import { DownloadButton } from './../../components';
import styles from './../../style';

import Footer from './../../components/Footer';

import ImageComponent from './../../components/DoorTypesComponent';

import bannerIMG from './../../assets/products/TrendVario6100/header-produkt-trendvario-6100.jpg';

import variationsImg1 from './../../assets/products/TrendVario6100/trendvario-6100-table-en.jpg';

import doc1 from './../../assets/products/TrendVario6100/58965700.pdf';
import doc2 from './../../assets/products/TrendVario6100/58986390.pdf';
import doc3 from './../../assets/products/TrendVario6100/Semi-Automatic-Parking-Systems.pdf';
import doc4 from './../../assets/products/TrendVario6100/E-Plug-In.pdf';
import zip1 from './../../assets/products/TrendVario6100/TrendVario-6100+-DWG.zip';
import zip2 from './../../assets/products/TrendVario6100/TrendVario-6100+-DXF.zip';
import zip3 from './../../assets/products/TrendVario6100/TrendVario-6100-6100plus-BIM.zip';
import doc5 from './../../assets/products/TrendVario6100/Fire-protection-information_EN.pdf';

import doorImg1 from './../../assets/products/DoorTypes/tore-alulochblech-300x200px.jpg';
import doorImg2 from './../../assets/products/DoorTypes/tore-stahlsickenblech-300x200px.jpg';
import doorImg3 from './../../assets/products/DoorTypes/tore-drahtgitter-verzinkt-300x200px.jpg';
import doorImg4 from './../../assets/products/DoorTypes/tore-holzfuellung-300x200px.jpg';
import doorImg5 from './../../assets/products/DoorTypes/tore-aluglattblech-300x200px.jpg';
import doorImg6 from './../../assets/products/DoorTypes/tore-sicherheitsglas-300x200px.jpg';

import { Link } from 'react-router-dom';

const TrendVario6100 = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="TrendVario6100"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Trend Vario 6100
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
									PREMIUM POLUAUTOMATSKI PARKING SISTEM SA
									JAMOM{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									TrendVario 6100 sa izuzetno niskom visinom
									prostorija.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									TrendVario 6100 je polu-automatski sistem
									koji parkira dva vozila jedno iznad drugog,
									od kojih se jedno vozilo spušta u jamu. Kao
									rezultat toga potrebna je manja visina
									prostorije. Parking mesta mogu da se
									pomeraju horizontalno i vertikalno i na taj
									način dolaze na željenu poziciju.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Radi bezbednosti, sistem je obezbeđen
									vratima. Ovo ujedno štiti parkirana vozila
									od krađe i oštećenja.{' '}
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Možete unaprediti vaš TrendVario 6100 sa
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
										15 gridova jedan pored drugog -
										obezbeđuje do 29 parking mesta
									</li>
									<li>
										Dubina jame: 175 cm do 240 cm sa
										povećanjem od po 5 cm{' '}
									</li>
									<li>
										{' '}
										Visina vozila-donja platforma: 150 cm do
										215 cm{' '}
									</li>
									<li>
										{' '}
										Visina vozila-gornja platforma: 200 cm
										do 245 cm{' '}
									</li>
									<li>Dužina vozila: 500 cm do 530 cm</li>
									<li>Širina platforme: 230 cm do 270 cm </li>
									<li>
										{' '}
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
										Standardna vrata: klizna i/ili
										električna vrata
									</li>
									<li>Daljinsko upravljanje kao opcija</li>
									<li>
										Okvir vrata napravljen od ekstrudiranog
										aluminijuma sa vertikalnom središnjom
										gredom{' '}
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
									TrendVario 6100 Vizuelizacija
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/inZWQLpQj9M"
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
										<img
											src={variationsImg1}
											className="h-auto w-full object-contain"
										/>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									TrendVario 6100 Preuzimanja
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
										text="TrendVario-6100-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="TrendVario-6100-DXF.zip"
									></DownloadButton>
									<DownloadButton
										href={zip3}
										text="TrendVario-6100-BIM.zip"
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

export default TrendVario6100;
