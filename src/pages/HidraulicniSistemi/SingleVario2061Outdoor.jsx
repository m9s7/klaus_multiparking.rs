import { DownloadButton } from '../../components';
import styles from '../../style';

import bannerIMG from './../../assets/products/SingleVario2061Outdoor/header-singlevario-2061-outdoor.jpg';
import gif from './../../assets/NEU_schemaclip-singlevario-2061-outdoor.gif';

import variationsImg1 from './../../assets/products/SingleVario2061Outdoor/singlevario-2061-outdoor-table-en.jpg';

import doc1 from './../../assets/products/SingleVario2061Outdoor/58650190.pdf';
import doc2 from './../../assets/products/SingleVario2061Outdoor/58655490.pdf';
import Footer from '../../components/Footer';

const SingleVario2061Outdoor = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={bannerIMG}
							alt="SingleVario 2061 Za Spoljnu Upotrebu"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-6 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									SingleVario 2061 Za Spoljnu Upotrebu
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
									NAJFLEKSIBILNIJI PARKER ZA NAKNADNU UGRADNJU
									- ČAK I SPOLJA
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									SingleVario 2061 sistem za spoljnu upotrebu
									je opremljen tehnologijom protiv vremenskih
									nepogoda, tako da uz ovaj sistem možete
									uštedeti vreme i novac koji je potreban za
									izgradnju garaže.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									SingleVario 2061 sistem za spoljnu upotrebu
									je jednostavan i ekonomičan način stvaranja
									dva parking mesta od jednog.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Budući da je sistem napravljen bez jame,
									može se koristiti za povećanje parking
									prostora kod postojećih porodičnih ili
									poslovnih zgrada.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Ovaj sistem se može prilagoditi već
									postojećem prostoru i različitim visinama
									vozila. Donji automobil je potrebno uvek
									ukloniti pre spuštanja gornjeg automobila.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Sistem je idealno rešenje ukoliko se gornja
									platforma koristi za duže-vremenska
									parkiranja, a donji prostor za kraća
									parkiranja.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SPECIFIKACIJA:
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>Zavisno parkiranje</li>
									<li>Singl Platforma (SP) za 2 vozila</li>
									<li>
										Ukupna visina za standardni tip: 330cm
									</li>
									<li>Bez jame</li>
									<li>Visina vozila: 150cm do 200cm</li>
									<li>Dužina vozila: 500cm do 520cm</li>
									<li>
										Razmak između platformi moguće je
										menjati naknadno
									</li>
									<li>
										Širina platforme za standardni tip:
										230cm, opciono do maksimalno: 270cm
									</li>
									<li>
										Nosivost: 2.000kg po gornjem parking
										mestu, opciono maksimalno: 2.600kg (SP),
										nema ograničene kilaže za donje parking
										mesto (za države gde snežno opterećenje
										ne mora biti uzeto u obzir)
									</li>
									<li>
										Horizontalni pristup svim nivoima
										parkiranja
									</li>
									<li>Moguća naknadna ugradnja</li>
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
									Varijacije
									<hr className="h-1 bg-accentColor"></hr>
									<img src={variationsImg1}></img>
								</h2>
							</section>
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SingleVario 2061 Za Spoljnu Upotrebu
									Preuzimanja
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
			<Footer></Footer>
		</>
	);
};

export default SingleVario2061Outdoor;
