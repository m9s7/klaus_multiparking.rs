import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/MultiBase2072iSpecial/multibase-2072i-behindertenstellplatz.png';
import gif from './../../assets/NEU_schemaclip-multibase-2072i.gif';

import variationsImg1 from './../../assets/products/MultiBase2072iSpecial/multibase-2072i-limited-mobility-en.png';

import doc1 from './../../assets/products/MultiBase2072iSpecial/58729630.pdf';
import doc2 from './../../assets/products/MultiBase2072iSpecial/Supplement-product-data.pdf';

const MultiBase2072iSpecial = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="MultiBase 2072i Za Osobe sa Posebnim Potrebma"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
                                    MultiBase 2072i Za Osobe sa Posebnim Potrebma
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
									PARKING MESTO ZA OSOBE SA POSEBNIM POTREBAMA
								</h2>
                                <p className={`${styles.paragraph} mt-4`}>
                                    U Nemačkoj, parking mesta prilagođena osobama sa invaliditetom moraju biti širine 350 cm u skladu sa nemačkim GaVo propisima i preporukama DIN 18040 „Izgradnja pristupačnih objekata - Principi dizajna“.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
                                    MultiBase 2072i platforma za parkiranje za osobe sa posebnim potrebama je kreirana za ljude sa ograničenom pokretljivošću i ima poseban dizajn koji uključuje AluLongLife prevlaku, po kojoj se može voziti i hodati.
								</p>
                                <p className={`${styles.paragraph} mt-4`}>
                                    Kontrolna tabla obezbeđuje da se kontrolni ključ može izvaditi samo kada se gornje parking mesto za ljude sa posebnim potrebama pomeri u ulazni položaj.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>Za sa posebnim potrebama se može koristiti samo gornje parking mesto sa širinom od 350cm</li>
                                    <li>Ova platforma mora biti horizontalna do makasimalno 1° nagiba</li>
                                    <li>Poseban dizajn koji uključuje AluLongLife prevlaku, po kojoj se može voziti i hodati</li>
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
									</ul>
									<img
										className="mb-12 mt-4 md:w-1/3 md:max-w-none"
										src={gif}
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
                                    <img src={variationsImg1}></img>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
                                    MultiBase 2072i Za Osobe sa Posebnim Potrebma Preuzimanja
									<hr className="h-1 bg-accentColor"></hr>
								</h2>
								<div className="flex flex-col gap-6 py-4 lg:flex-row lg:flex-wrap">
									<DownloadButton
										href={doc1}
										text="Podatci o proizvodu (metrike)"
									></DownloadButton>
									<DownloadButton
										href={doc2}
										text="Dodatni podaci o proizvodu.pdf"
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

export default MultiBase2072iSpecial;
