import styles from '../../style';

import bannerIMG from './../../assets/historie-klaus-multiparking.jpg';

import Footer from '../../components/Footer';

const Kontakt = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MasterVarioR2C"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									O Nama
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
									Partnerstvo sa KLAUS Multiparkingom
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Više od 60 godina, kompanija KLAUS
									Multiparking je jedna od vodećih proizvođača
									sistema za parkiranje automobila u Nemačkoj,
									zastupljena u više od 80 zemalja širom
									sveta.
								</p>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									Od 2016. godine firma "Max Parking"
									generalni je zastupnik Nemačke kompanije
									KLAUS Multiparking za teritoriju Republike
									Srbije I regiona.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Bavimo se distribucijom, ugradnjom I
									servisiranjem parking Sistema.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									KLAUS Multiparking je sinonim ne samo za
									parking sisteme vrhunskog kvaliteta, već i
									za garantovanu pouzdanost zahvaljujući preko
									60 godina iskustva i globalno priznate
									ekspertize u ovoj oblasti.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading1}`}>
									Kontakt
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Max Parking
								</p>
								<p className={`${styles.paragraph} mt-2`}>
									<a
										href="https://www.google.com/maps/search/?api=1&query=Susedgradska+25,+Rakovica,+11090+Beograd"
										target="_blank"
										rel="noopener noreferrer"
									>
										Susedgradska 25, Rakovica, 11090 Beograd
									</a>
								</p>
								<p className={`${styles.paragraph} mt-2`}>
									Email:{' '}
									<a href="mailto:info@multiparking.rs">
										info@multiparking.rs
									</a>
								</p>
								<p className={`${styles.paragraph} mt-2`}>
									Tel:{' '}
									<a href="tel:+381658778398">
										+381 65 8778 398
									</a>
								</p>
							</section>
						</main>
					</div>
				</div>
			</div>

			<Footer></Footer>
		</>
	);
};

export default Kontakt;
