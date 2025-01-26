import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MultiBaseG63Outdoor/header-produkt-multibase-g63-outdoor.jpg';
import NEU_schemaclip_multibase_G63_IMG from './../../assets/NEU_schemaclip-multibase-g63-outdoor.gif';

import variationsImg1 from './../../assets/products/MultiBaseG63Outdoor/multibase-G63-outdoor-G63-330-en.png';
import variationsImg2 from './../../assets/products/MultiBaseG63Outdoor/multibase-G63-outdoor-G63-350-en.png';
import variationsImg3 from './../../assets/products/MultiBaseG63Outdoor/multibase-G63-outdoor-G63-370-en.png';

import doc1 from './../../assets/products/MultiBaseG63Outdoor/58650230.pdf';
import doc2 from './../../assets/products/MultiBaseG63Outdoor/58655530.pdf';

const MultiBaseG63Outdoor = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MultiBase G63 Za Spoljnu Upotrebu slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									MultiBase G63 Za Spoljnu Upotrebu
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
									"CAR STACKER" među našim premijum parkinzima
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									MultiBase G63 sistem za spoljnu upotrebu je
									opremljen tehnologijom protiv vremenskih
									nepogoda, tako da uz ovaj sistem možete
									uštedeti vreme i novac koji je potreban za
									izgradnju garaže.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									MultiBase G63 sistem za spoljnu upotrebu
									utrostručuje broj parking mesta. Ovo znači
									da jedan sistem može imati do 6 parking
									mesta u veoma ograničenom prostoru.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Sva vozila su parkirana horizontalno i
									nezavisno jedna od drugih.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Možete unaprediti vaš MultiBase G63 sistem
									za spoljnu upotrebu sa našom dodatnom
									opremom.
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
										Singl Platforma (SP) za 3 vozila ili
										Dabl Platforma (DP) za 6 vozila
									</li>
									<li>
										Ukupna visina za standardni tip: 510cm
									</li>
									<li>
										Dubina jame za standardni tip: 350/355cm
									</li>
									<li>Visina vozila: 150cm do 170cm</li>
									<li>Dužina vozila: 500cm do 520cm</li>
									<li>
										Širina platforme za standardni tip:
										230/460cm, opciono do maksimalno:
										270/500cm
									</li>
									<li>
										Nosivost: 2.000kg po parking mestu,
										opciono maksimalno: 2.500kg za SP (za
										države gde snežno opterećenje ne mora
										biti uzeto u obzir).
									</li>
									<li>
										Horizontalni pristup svim nivoima
										parkiranja
									</li>
									<li>
										Vozne ploče: StandardGrip, opciono
										AluLongLife ili EasyWalk
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
											Stambene zgrade i poslovni objekti
										</li>
										<li>Porodične kuće</li>
										<li>Podzemni parking</li>
										<li>
											Parkirališta, hoteli, samostalne
											garaže
										</li>
										<li>Spoljna montaža u dvorištima</li>
									</ul>
									<img
										className="mb-12 mt-4 md:w-1/3 md:max-w-none"
										src={NEU_schemaclip_multibase_G63_IMG}
										alt="animation graphic scheme multibase G63"
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
									MultiBase G63 Preuzimanja
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

export default MultiBaseG63Outdoor;
