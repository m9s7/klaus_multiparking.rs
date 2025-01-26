import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MultiBase2078i/header-produkt-multibase-2078i.jpg';
import NEU_schemaclip_multibase_2078i_IMG from './../../assets/NEU_schemaclip-multibase-2078i.gif';
import variationsImg from './../../assets/products/MultiBase2078i/multibase-2078i-table-en.jpg';

import doc1 from './../../assets/products/MultiBase2078i/58741450.pdf';
import doc2 from './../../assets/products/MultiBase2078i/58794940.pdf';
import doc3 from './../../assets/products/E-Plug-In.pdf';
import zip1 from './../../assets/products/MultiBase2078i/MultiBase-2078i-V2-DWG.zip';
import zip2 from './../../assets/products/MultiBase2078i/MultiBase-2078i-V2-DXF.zip';
import zip3 from './../../assets/products/MultiBase2078i/MultiBase-2078i-BIM.zip';
import Footer from '../../components/Footer';

const MultiBase2078i = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MultiBase 2078i slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									MultiBase 2078i
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
									MultiBase 2078i je najefikasniji sistem za
									parkiranje kada je u pitanju ušteda
									prostora.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									U poređenju sa MultiBase 2072i zahteva do
									30cm manju visinu prostora za ugradnju
									parking sistema menjanjem nagiba platforme.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Zbog pozicije stubova, vrata automobila se
									mogu široko otvoriti i time omogućiti lakši
									ulazak i izlazak iz vozila.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Omogućava parkiranje vozila visine do 215cm.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Sa elektro-hidrauličnim sinhronizacionim
									sistemom, Multibase 2078i je ekološki
									prihvatljiviji, zahteva manje održavanja i
									sveukupno je ekonomičniji od prethodnih
									sistema sa mehaničkom sinhronizacijom.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Možete unaprediti vaš MultiBase 2078i sa
									našom dodatnom opremom.
								</p>

								{/* <p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									Sa elektro-hidrauličnim sinhronizacionim
									sistemom, Multibase 2078i je
									<span className="rounded bg-accentColor">
										{' '}
										ekološki prihvatljiviji, zahteva manje
										održavanja i sveukupno je ekonomičniji{' '}
									</span>
									od prethodnih sistema sa mehaničkom
									sinhronizacijom.
								</p> */}
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
										Singl Platforma (SP) za 2 vozila ili
										Dabl Platforma (DP) za 4 vozila
									</li>
									<li>
										Ukupna visina za standardni tip: 335cm
									</li>
									<li>
										Dubina jame za standardni tip: 180/185cm
									</li>
									<li>Visina vozila: 150cm do 215cm</li>
									<li>Dužina vozila: 500cm do 520cm</li>
									<li>
										Širina platforme za standardni tip:
										230/460cm, opciono do maksimalno:
										270/540cm
									</li>
									<li>
										Nosivost: 2.000kg po parking mestu,
										opciono maksimalno: 2.600kg za SP/DP ili
										maksimalno 3.000kg SP
									</li>
									<li>
										Horizontalni pristup gornjim nivoima za
										parkiranje, pristup donjim nivoima za
										parkiranje je pod blagim nagibom
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
										src={NEU_schemaclip_multibase_2078i_IMG}
										alt="animation graphic scheme multibase 2078i"
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
									<img src={variationsImg}></img>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									MultiBase 2078i Preuzimanja
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
										text="E-PLUG-IN.PDF"
									></DownloadButton>
									<DownloadButton
										href={zip1}
										text="MultiBase-2078i-V2-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="MultiBase-2078i-V2-DXF.zip"
									></DownloadButton>
									<DownloadButton
										href={zip3}
										text="MultiBase-2078i-BIM.zip"
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

export default MultiBase2078i;
