import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MultiBaseU10/multibase-u10.png';
import NEU_schemaclip_multibase_U10_IMG from './../../assets/NEU_schemaclip-multibase-u10.gif';

import variationsImg1 from './../../assets/products/MultiBaseU10/multibase-U10-table-en.jpg';

import doc1 from './../../assets/products/MultiBaseU10/58852620.pdf';
import doc2 from './../../assets/products/MultiBaseU10/58864820.pdf';
import zip1 from './../../assets/products/MultiBaseU10/MultiBase-U10-DWG.zip';
import zip2 from './../../assets/products/MultiBaseU10/MultiBase-U10-DXF.zip';
import doc3 from './../../assets/products/MultiBaseU10/multibase-u10-u20.pdf';

const MultiBaseU10 = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MultiBase U10 slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									MultiBase U10
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
									NEVIDLJIV SISTEM PODNOG PARKINGA
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									MultiBase U10 pruža mogućnost da vaš auto
									bude parkiran pod zemljom.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Umesto dizanja auta u vis, ovaj sistem ga
									spušta ispod zemlje. Kada se sistem spusti,
									gornja ploča je u nivou sa zemljom, i tako
									dobijate još jedno mesto za parkiranje koje
									možete urediti kako god vi želite.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Možete unaprediti vaš MultiBase U10 sa našom
									dodatnom opremom.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>Nezavisno parkiranje</li>
									<li>
										Singl Platforma U10 (SP) za 1 vozilo
									</li>
									<li>
										Dubina jame za standardni tip: 250/255cm
									</li>
									<li>Visina vozila: 165cm do 200cm</li>
									<li>Dužina vozila: 500cm do 520cm</li>
									<li>
										Širina platforme za standardni tip:
										230/460cm, opciono do maksimalno:
										270/540cm
									</li>
									<li>
										Nosivost: 2.000kg po parking mestu,
										opciono maksimalno: 2.600kg (SP)
									</li>
									<li>
										Horizontalni pristup svim nivoima
										parkiranja
									</li>
									<li>
										Vozne ploče: AluLongLife, opciono
										EasyWalk
									</li>
									<li>
										Gornja ploča se može uklopiti sa
										okolinom; ispuna gornje ploče kao i
										odabir materijala je u obavezi
										investitora (asfalt, trava, beton drvo i
										dr.)
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									PRIMENA multiparking sistema
								</h2>
								<div className="md:flex md:justify-between">
									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>
											Montaža u dvorištima ili na zelenim
											površinama stambenih i poslovnih
											zgrada, porodičnih kuća ili hotela
										</li>
									</ul>
									<img
										className="mb-12 mt-4 md:w-1/3 md:max-w-none"
										src={NEU_schemaclip_multibase_U10_IMG}
										alt="animation graphic scheme multibase U10"
										loading="lazy"
									/>
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
										<img
											src={variationsImg1}
											className="h-auto w-full object-contain"
										/>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									MultiBase U10 Preuzimanja
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
										href={zip1}
										text="MultiBase-U10-V2-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="MultiBase-U10-V2-DXF.zip"
									></DownloadButton>
									<DownloadButton
										href={doc3}
										text="MultiBase-u10-u20.pdf"
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

export default MultiBaseU10;
