import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/ParkDiscD450/header-produkt-parkdisc-d450.jpg';

import NEU_schemaclip_multibase_2072i_IMG from './../../assets/products/ParkDiscD450/NEU_schemaclip-parkdisc-d450.gif';

import variationsImg1 from './../../assets/products/ParkDiscD450/parkdisc-d450-af-en.png';
import variationsImg2 from './../../assets/products/ParkDiscD450/parkdisc-d450-bf-en.png';

import doc1 from './../../assets/products/ParkDiscD450/58391740.pdf';
import doc2 from './../../assets/products/ParkDiscD450/58655670.pdf';
import zip1 from './../../assets/products/ParkDiscD450/ParkDisc-D450-DWG.zip';
import zip2 from './../../assets/products/ParkDiscD450/ParkDisc-D450-DXF.zip';
import Footer from '../../components/Footer';

const ParkDiscD450 = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="ParkDisc D450"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									ParkDisc D450
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
									Lako se okreće na licu mesta.{' '}
								</h2>
								<p
									className={`${styles.paragraph} mt-4 font-semibold italic`}
								>
									ParkDisc D450, čini teško pristupačna
									parking mesta prošlošću.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									Da biste uštedeli prostor, mnoge garaže vam
									ne daju mogućnost da okrenete vozilo. Ulazak
									ili izlazak sa parking mesta je često
									neophodan. Ovde je KLAUS Multiparking
									rotaciona platforma pravo rešenje. Kao pomoć
									pri parkiranju koji štede prostor, ona
									okreće vozilo oko sopstvene ose – i onda se
									lako može isparkirati u napred iz garaže.{' '}
								</p>

								<p className={`${styles.paragraph} mt-4`}>
									ParkDisc D450 je dostupan kao nadzemna i
									podna verzija, a takođe se može naknadno
									ugraditi u postojeće garaže. Na zahtev
									možemo povećati prečnik i opterećenje
									rotacione platforme.{' '}
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li> Dostupna nadzemna i podna verzija</li>
									<li>
										Dimenzije vozila: širina max. 190 cm,
										dužina max. 500 cm, visina 10 cm niže od
										plafona
									</li>
									<li>
										Nosivost: 2.500 kg po parking mestu,
										opciono moguće veće opterećenje{' '}
									</li>
									<li>
										{' '}
										Moguća dodatna oprema, u zavisnosti od
										lokalnih uslova{' '}
									</li>
									<li> Zaštita platforme: galvanizacija </li>
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
											{' '}
											Kao pomoćna platforma koja štedi
											prostor u podzemnim garažama na pr.
											hoteli, saloni automobila, agencije
											za iznajmljivanje automobila
										</li>
										<li>
											Može se korititi i kao spoljašnji
											parking sistem, na pr. u dvorištima
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
									Varijacije
									<hr className="h-1 bg-accentColor"></hr>
									<div className="flex flex-row flex-wrap items-start justify-center gap-4">
										<div className="max-w-[40%] flex-1">
											<img
												src={variationsImg1}
												className="h-auto w-full object-contain"
											/>
										</div>
										<div className="max-w-[40%] flex-1">
											<img
												src={variationsImg2}
												className="h-auto w-full object-contain"
											/>
										</div>
									</div>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									ParkDisc D450 Preuzimanja
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
										text="ParkDisc-D450-DWG.zip"
									></DownloadButton>
									<DownloadButton
										href={zip2}
										text="ParkDisc-D450-DXF.zip"
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

export default ParkDiscD450;
