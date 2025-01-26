import Footer from '../../components/Footer';
import styles from '../../style';
import { Link } from 'react-router-dom';
import { DownloadButton } from '../../components';

import doc1 from './../../assets/Folder-AluLongLife.pdf';
import doc2 from './../../assets/Folder-BikeSafe-XS-XL.pdf';

const DodatnaOpremaNaslovna = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src="src\assets\header-zubehoer.jpg"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-10 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									NADOGRADITE SVOJ PARKING SISTEM!
								</span>
							</h1>

							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								<strong>
									Ekskluzivna dodatna oprema koja će
									maksimalno iskoristiti svoje parking mesto.
								</strong>
							</p>
							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Bez obzira da li tražite bolji premaz platforme
								ili želite da napunite svoj električni automobil
								u svom parking sistemu - imamo rešenje za sve.
							</p>
							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Sve je napravljeno prema standardima vrhunskog
								kvaliteta KLAUS Multiparking!
							</p>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							{/* ALULONGLIFE */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/AluLongLife.png"
										alt="AluLongLife"
										className="h-auto w-full object-cover"
									/>

									<h2 className={`${styles.heading2} mt-4`}>
										ALULONGLIFE
										<hr className="h-1 bg-accentColor" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>
											Posebno razvijen za upotrebu u
											parking sistemima
										</li>
										<li>
											Visokokvalitetni aluminijumski
											profil - izdržljiv, lagan i izuzetno
											stabilan
										</li>
										<li>Estetski privlačan dizajn</li>
										<li>
											Otporan na koroziju, na primer
											protiv morske vode ili baterijske
											kiseline
										</li>
										<li>
											Otporan na prljavštinu i lako se
											čisti
										</li>
										<li>
											Visoko otporan na ogrebotine i
											robustan, na primer protiv šljunka
											ili šiljaka
										</li>
										<li>
											Odlična površina za hodanje i vožnju
										</li>
										<li>
											Gotovo ravna površina, omogućava
											parkiranje bez prepreka
										</li>
										<li>
											Pokrivač površine može se dodati u
											bilo koje vreme
										</li>
										<li>
											Garancija AluLongLife od 12 godina
											(Opciono uz dodatne troškove)
										</li>
									</ul>

									<div className="mt-4">
										<DownloadButton
											href={doc1}
											text="Više o AluLongLife (pdf)"
										/>
									</div>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/AluLongLife.png"
											alt="AluLongLife"
											className="h-auto w-full object-cover"
										/>
										<div className="mt-4">
											<DownloadButton
												href={doc1}
												text="Više o AluLongLife (pdf)"
											/>
										</div>
									</div>

									<div className="md:w-1/2 lg:w-[70%]">
										<h2 className={`${styles.heading2}`}>
											ALULONGLIFE
											<hr className="h-1 bg-accentColor" />
										</h2>

										<ul
											className={`${styles.paragraph} custom-list mt-4`}
										>
											<li>
												Posebno razvijen za upotrebu u
												parking sistemima
											</li>
											<li>
												Visokokvalitetni aluminijumski
												profil - izdržljiv, lagan i
												izuzetno stabilan
											</li>
											<li>Estetski privlačan dizajn</li>
											<li>
												Otporan na koroziju, na primer
												protiv morske vode ili
												baterijske kiseline
											</li>
											<li>
												Otporan na prljavštinu i lako se
												čisti
											</li>
											<li>
												Visoko otporan na ogrebotine i
												robustan, na primer protiv
												šljunka ili šiljaka
											</li>
											<li>
												Odlična površina za hodanje i
												vožnju
											</li>
											<li>
												Gotovo ravna površina, omogućava
												parkiranje bez prepreka
											</li>
											<li>
												Pokrivač površine može se dodati
												u bilo koje vreme
											</li>
											<li>
												Garancija AluLongLife od 12
												godina (Opciono uz dodatne
												troškove)
											</li>
										</ul>
									</div>
								</div>
							</section>

							{/* EASYWALK */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/Easy-walk.png"
										className="h-auto w-full object-cover"
									/>

									<h2 className={`${styles.heading2} mt-4`}>
										EASYWALK
										<hr className="h-1 bg-accentColor" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>Vruće pocinkovan čelični profil</li>
										<li>Potpuno zatvorena površina</li>
										<li>
											Savremena površinska obloga
											platforme, pogodna za hodanje i
											vožnju
										</li>
										<li>
											Alternativa visokokvalitetnom
											AluLongLife-u (Opciono uz dodatne
											troškove)
										</li>
									</ul>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="md:w-1/2 lg:w-[70%]">
										<h2 className={`${styles.heading2}`}>
											EASYWALK
											<hr className="h-1 bg-accentColor" />
										</h2>

										<ul
											className={`${styles.paragraph} custom-list mt-4 pe-10`}
										>
											<li>
												Vruće pocinkovan čelični profil
											</li>
											<li>Potpuno zatvorena površina</li>
											<li>
												Savremena površinska obloga
												platforme, pogodna za hodanje i
												vožnju
											</li>
											<li>
												Alternativa visokokvalitetnom
												AluLongLife-u (Opciono uz
												dodatne troškove)
											</li>
										</ul>
									</div>
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/Easy-walk.png"
											className="h-auto w-full object-cover"
										/>
									</div>
								</div>
							</section>

							{/* STANDARDGRIP */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/Standardgrip.png"
										className="h-auto w-full object-cover"
									/>

									<h2 className={`${styles.heading2} mt-4`}>
										STANDARDGRIP
										<hr className="h-1 bg-accentColor" />
									</h2>

									<ul
										className={`${styles.paragraph} custom-list mt-4`}
									>
										<li>Standardni profil, bez doplate</li>
									</ul>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/Standardgrip.png"
											className="h-auto w-full object-cover"
										/>
									</div>

									<div className="md:w-1/2 lg:w-[70%]">
										<h2
											className={`${styles.heading2} mt-4`}
										>
											STANDARDGRIP
											<hr className="h-1 bg-accentColor" />
										</h2>

										<ul
											className={`${styles.paragraph} custom-list mt-4`}
										>
											<li>
												Standardni profil, bez doplate
											</li>
										</ul>
									</div>
								</div>
							</section>

							{/* E-PARKING */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/eparking.png"
										className="h-auto w-full object-cover"
									/>

									<h2 className={`${styles.heading2} mt-4`}>
										E-PARKING
										<hr className="h-1 bg-accentColor" />
									</h2>

									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										Bez obzira da li tražite bolji premaz
										platforme ili želite da napunite svoj
										električni automobil u svom parking
										sistemu - imamo rešenje za sve.
									</p>

									<h3
										className={`${styles.heading3} mt-4 text-accentColor underline`}
									>
										<Link
											style={{ color: '#FF6F00' }}
											to="/EParking"
										>
											Više o E-Parking-u
										</Link>
									</h3>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="md:w-1/2 lg:w-[70%]">
										<h2
											className={`${styles.heading2} mt-4`}
										>
											E-PARKING
											<hr className="h-1 bg-accentColor" />
										</h2>

										<p
											className={`${styles.paragraph} mt-4 p-2 pe-10 font-medium`}
										>
											Bez obzira da li tražite bolji
											premaz platforme ili želite da
											napunite svoj električni automobil u
											svom parking sistemu - imamo rešenje
											za sve.
										</p>
										<h3
											className={`${styles.heading3} mt-4 text-accentColor underline`}
										>
											<Link
												style={{ color: '#FF6F00' }}
												to="/EParking"
											>
												Više o E-Parking-u
											</Link>
										</h3>
									</div>
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/eparking.png"
											className="h-auto w-full object-cover"
										/>
									</div>
								</div>
							</section>

							{/* BIKESAFE */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/bikesafe.png"
										className="h-auto w-full object-cover"
									/>

									<h2 className={`${styles.heading2} mt-4`}>
										BIKESAFE
										<hr className="h-1 bg-accentColor" />
									</h2>

									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										Pametno korišćenje dostupnog prostora
										ako imate i bicikl ili motocikl pored
										automobila. Iskoristite maksimum iz
										KLAUS Multiparking BikeSafe, koji možete
										sami instalirati (nosač za bicikl /
										nosač za motocikl).
									</p>

									<div className="mt-4">
										<DownloadButton
											href={doc2}
											text="Više o BikeSafe (pdf)"
										/>
									</div>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/bikesafe.png"
											className="h-auto w-full object-cover"
										/>
										<div className="mt-4">
											<DownloadButton
												href={doc2}
												text="Više o BikeSafe (pdf)"
											/>
										</div>
									</div>

									<div className="md:w-1/2 lg:w-[70%]">
										<h2
											className={`${styles.heading2} mt-4`}
										>
											BIKESAFE
											<hr className="h-1 bg-accentColor" />
										</h2>

										<p
											className={`${styles.paragraph} mt-4 p-2 font-medium`}
										>
											Pametno korišćenje dostupnog
											prostora ako imate i bicikl ili
											motocikl pored automobila.
											Iskoristite maksimum iz KLAUS
											Multiparking BikeSafe, koji možete
											sami instalirati (nosač za bicikl /
											nosač za motocikl).
										</p>
									</div>
								</div>
							</section>

							{/* GUMENI UMETCI */}
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src="src/assets/gummieinlegeteile.png"
										className="h-auto w-full object-cover"
									/>

									<h2 className={`${styles.heading2} mt-4`}>
										GUMENI UMETCI
										<hr className="h-1 bg-accentColor" />
									</h2>

									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										Završite savršenu platformu sa gumenim
										umetcima kao stazama za hodanje ili
										vožnju.
									</p>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="md:w-1/2 lg:w-[70%]">
										<h2
											className={`${styles.heading2} mt-4`}
										>
											GUMENI UMETCI
											<hr className="h-1 bg-accentColor" />
										</h2>

										<p
											className={`${styles.paragraph} mt-4 p-2 pe-10 font-medium`}
										>
											Završite savršenu platformu sa
											gumenim umetcima kao stazama za
											hodanje ili vožnju.
										</p>
									</div>
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src="src/assets/gummieinlegeteile.png"
											className="h-auto w-full object-cover"
										/>
									</div>
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

export default DodatnaOpremaNaslovna;
