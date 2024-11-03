import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/ParkingBoardPE/header-produkt-paletten-parkboard-pe.jpg';

import NEU_schemaclip_multibase_2072i_IMG from './../../assets/products/ParkingBoardPE/NEU_schemaclip-parkboard-pe.gif';

import variationsImg1 from './../../assets/products/ParkingBoardPE/barkboard-pe-en.png';

import doc1 from './../../assets/products/ParkingBoardPE/58416990.pdf';
import zip1 from './../../assets/products/ParkingBoardPE/ParkBoard-PE-PH-DWG.zip';
import zip2 from './../../assets/products/ParkingBoardPE/ParkBoard-PE-PH-DXF.zip';

const ParkBoardPE = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="ParkBoard PE"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									ParkBoard PE
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
									Jednostavna parking paleta{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									ParkBoard PE palete pomeraju pojedinačne
									automobile po dužini.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Paletni sistemi efikasnije koriste prostor u
									parking garaži, na primer. Pritiskom na
									dugme, parking palete se pomeraju duž šina
									pomoću elektromotora, čime se omogućava
									pristup željenom parking mestu. Na ovaj
									način mogu se stvoriti dodatna parking mesta
									na nekorišćenim površinama i u prilaznim
									trakama.
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									ParkBoard PE parking palete se mogu pomerati
									po dužini i dostupne su za pojedinačna
									vozila. Takođe se mogu naknadno ugraditi u
									postojeće garaže
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Svaka paleta je za po jedno vozilo</li>
									<li>Palete se kreću duž šina</li>
									<li>
										Dimenzije vozila: širina max. 190 cm,
										dužina max. 500 cm, visina 10 cm niže od
										plafona
									</li>
									<li>
										{' '}
										Nosivost: 2.000 kg po parking mestu,
										opciono max. 2.300 kg
									</li>
									<li>
										{' '}
										Moguća dodatna oprema, u zavisnosti od
										lokalnih uslova
									</li>
									<li>Zaštita platforme: StandardGrip</li>
									<li>Nezavisno parkiranje</li>
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
											U stambenim i poslovnim objektima
										</li>
										<li>
											Za uvećanje parking mesta u
											stambenim i poslovnim objektima
										</li>
										<li>
											Za povećanje kapaciteta u podzemnim
											garažama na pr. hoteli
										</li>
										<li>
											{' '}
											Više parking mesta za salone
											automobila, kompanije za
											iznajmljivanje automobila,
											kolekcionare automobila
										</li>
									</ul>
									<img
										className="mb-12 mt-4 md:w-1/3 md:max-w-none"
										src={NEU_schemaclip_multibase_2072i_IMG}
										alt="animation graphic scheme multibase 2072i outdoor"
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
									ParkBoard PE Vizuelizacija
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/qozolNcRVj8"
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
										<img
											src={variationsImg1}
											className="h-auto w-full object-contain"
										/>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									ParkBoard PE Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podaci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={zip1}
										text="ParkBoard-PE-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="ParkBoard-PE-DXF.zip"
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

export default ParkBoardPE;
