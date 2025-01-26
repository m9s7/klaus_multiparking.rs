import { DownloadButton } from './../../components';
import styles from './../../style';

import bannerIMG from './../../assets/products/ParkingBoardPQ/header-produkt-paletten-parkboard-pq.jpg';

import NEU_schemaclip_multibase_2072i_IMG from './../../assets/products/ParkingBoardPQ/NEU_schemaclip-parkboard-pq.gif';

import variationsImg1 from './../../assets/products/ParkingBoardPQ/parkboard-pq-en.png';

import doc1 from './../../assets/products/ParkingBoardPQ/58623230.pdf';
import doc2 from './../../assets/products/ParkingBoardPQ/58655650.pdf';
import zip1 from './../../assets/products/ParkingBoardPQ/ParkBoard-PQ-DWG.zip';
import zip2 from './../../assets/products/ParkingBoardPQ/ParkBoard-PQ-DXF.zip';
import Footer from './../../components/Footer';

const ParkBoardPQ = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="ParkBoard PQ"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									ParkBoard PQ
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
									Parking paleta koja savršeno dopunjuje druge
									parking sisteme.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									ParkBoard PQ palete pomeraju pojedinačne
									automobile poprečno.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Ovaj sistem paleta pomera automobile
									poprečno. Pritiskom na dugme, snažan
									elektromotor pomera parking palete duž šina,
									omogućavajući tako pristup željenom parking
									mestu. Ovo omogućava da se prostori kao što
									su pristupne trake u garaži koriste kao
									dodatna parking mesta na inteligentan način.
									ParkBoard PQ paleta za parkiranje se može
									pomerati poprečno i dostupna je za
									pojedinačna vozila.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Takođe se može naknadno ugraditi u postojeće
									podzemne parkinge.{' '}
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Svaka paleta je za po dva vozila</li>
									<li>Palete se kreću duž šina</li>
									<li>
										Dimenzije vozila: širina max. 206 cm,
										dužina max. 500 cm, visina 10 cm niže od
										plafona{' '}
									</li>
									<li>
										{' '}
										Nosivost: 2.000 kg po parking mestu,
										opciono max. 2.300 kg{' '}
									</li>
									<li>
										{' '}
										Moguća dodatna oprema, u zavisnosti od
										lokalnih uslova{' '}
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
									ParkBoard PQ Vizuelizacija
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
									ParkBoard PQ Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podaci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={doc2}
										text="Specifikacije tendera"
									></DownloadButton>
									<DownloadButton
										href={zip1}
										text="ParkBoard-PQ-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="ParkBoard-PQ-DXF.zip"
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

export default ParkBoardPQ;
