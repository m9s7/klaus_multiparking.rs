import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MultiBase2042/header-produkt-multibase2042.jpg';
import NEU_schemaclip_multibase_2042_IMG from './../../assets/NEU_schemaclip-multibase-2042.gif';

import variationsImg from './../../assets/products/MultiBase2042/multibase-2042-155-295-en.png';

import doc1 from './../../assets/products/MultiBase2042/58391370.pdf';
import zip1 from './../../assets/products/MultiBase2042/MultiBase-2042-DWG.zip';
import zip2 from './../../assets/products/MultiBase2042/MultiBase-2042-DXF.zip';

const MultiBase2042 = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MultiBase 2042 slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									MultiBase 2042 
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
									PREMIUM PARKER KOJI NAJVIŠE ŠTEDI PROSTORA
								</h2>
                                <p className={`${styles.paragraph} mt-4`}>
                                    MultiBase 2042 je jedan od najboljih sistema za parkiranje kada je u pitanju ušteda prostora. Pruža efikasno rešenje kada je visina prostora ili dubina jame predvidjena za ugradnju sistema mala.
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
                                    <li>Singl Platforma (SP) za 2 vozila ili Dabl Platforma (DP) za 4 vozila</li>
                                    <li>Ukupna visina za standardni tip: 310cm</li>
                                    <li>Dubina jame za standardni tip: 150/155cm</li>
                                    <li>Visina vozila: 150cm do 154cm</li>
                                    <li>Dužina vozila: 500cm do 520cm</li>
                                    <li>Širina platforme za standardni tip: 230/460cm, opciono do maksimalno: 270/500cm</li>
                                    <li>Nosivost: 2.000kg po parking mestu</li>
                                    <li>Pristup svim nivoima parkiranja je pod blagim nagibom</li>
                                    <li>Vozne ploče: StandardGrip, opciono AluLongLife ili EasyWalk</li>
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
									</ul>
									<img
										className="mb-12 mt-4 md:w-1/3 md:max-w-none"
										src={NEU_schemaclip_multibase_2042_IMG}
										alt="animation graphic scheme multibase 2042"
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
									Reference
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Varijacije
									<hr className="h-1 bg-accentColor"></hr>
                                    <img src={variationsImg}></img>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									MultiBase 2042 Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podatci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={zip1}
										text="MultiBase-2042-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="MultiBase-2042-DXF.zip"
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

export default MultiBase2042;
