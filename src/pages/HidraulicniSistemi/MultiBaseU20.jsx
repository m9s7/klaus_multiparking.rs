import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MultiBaseU20/multibase-u20-unterflur.png';
import NEU_schemaclip_multibase_U20_IMG from './../../assets/NEU_schemaclip-multibase-u20.gif';

import variationsImg1 from './../../assets/products/MultiBaseU20/multibase-u20-table-en.jpg';

import doc1 from './../../assets/products/MultiBaseU20/58851740.pdf';
import doc2 from './../../assets/products/MultiBaseU20/58864840.pdf';
import zip1 from './../../assets/products/MultiBaseU20/MultiBase-U20-DWG.zip';
import zip2 from './../../assets/products/MultiBaseU20/MultiBase-U20-DXF.zip';
import doc3 from './../../assets/products/MultiBaseU10/multibase-u10-u20.pdf';

const MultiBaseU20 = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MultiBase U20 slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									MultiBase U20
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
									MultiBase U20 može učiniti da dva automobila
									nestanu pod zemljom.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Umesto da se izdigne iznad površine,
									MultiBase U20 sistem podzemnog parkinga se
									spušta pod zemlju za dva nivoa. Gornja
									platforma je nivo sa zemljom kada je
									spuštena. Po celom sistemu se može voziti,
									omogućavajući stvaranje dodatnog parking
									prostora samo iz jednog prilaza.
									Alternativno, možete pretvoriti vašu baštu u
									nevidljivu garažu i povećati vrednost vaše
									imovine. U svakom slučaju, do dva vozila
									mogu biti bezbedno i praktično smeštena.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Iskoristite maksimalno vaše parking prostore
									uz naše premium dodatke.
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
										Singl Platforma U20 (SP) za 2 vozila
									</li>
									<li>
										Dubina jame za standardni tip: 425/430cm
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
										U ravni sa zemljom i može se voziti po
										platformi
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
							{/* https://youtu.be/W7-du9Btwwo */}
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
										src={NEU_schemaclip_multibase_U20_IMG}
										alt="animation graphic scheme multibase U20"
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
									MultiBase U20 Vizuelizacija
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/W7-du9Btwwo"
									title="YouTube video player"
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
										<img
											src={variationsImg1}
											className="h-auto w-full object-contain"
										/>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									MultiBase U20 Preuzimanja
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
										text="MultiBase-U20-V2-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="MultiBase-U20-V2-DXF.zip"
									></DownloadButton>
									<DownloadButton
										href={doc3}
										text="MultiBase-u20-u20.pdf"
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

export default MultiBaseU20;
