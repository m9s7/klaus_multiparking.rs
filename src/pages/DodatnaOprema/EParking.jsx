import Footer from './../../components/Footer';
import styles from './../../style';
import { DownloadButton } from './../../components';

import img1 from './../../assets/header-eparking-eplugin-2023-06.jpg';
import img2 from './../../assets/grafik-plug-in-montagesaeule-wallbox-400x400px.jpg';

import doc1 from './../../assets/E-Plug-In.pdf';

const EParking = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={img1}
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-10 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									E-PARKING
								</span>
							</h1>
							<h2 className={`${styles.heading2} mt-4`}>
								PARKIRAJ I PUNI
							</h2>

							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Kao proizvođač inovativnih i održivih sistema za
								parkiranje, želimo da omogućimo našim klijentima
								i korisnicima lak pristup e-mobilnosti putem
								našeg projekta "E-parking". Naš cilj je
								omogućiti punjenje električnih vozila dok su
								parkirana u našim sistemima za parkiranje.
								Princip ovoga je jednako logičan koliko i
								jednostavan: potrebne zidne kutije se
								instaliraju u parking sistem kako bi vlasnici
								vozila mogli da ih pune. Po zahtevu, možemo
								opremiti naše sisteme sa neophodnim jedinicama.
							</p>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							<section className="mb-8">
								{/* MOBILE (below md) */}
								<div className="block w-full md:hidden">
									<img
										src={img2}
										className="h-auto w-full object-cover"
									/>
									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										Transformacija e-punjenja u
										e-parkiranje: možete instalirati svoju
										zidnu kutiju na naše platforme sistema
										za parkiranje opremljene našim "E-Plug
										in" rešenjem za punjenje. Ovo olakšava
										punjenje vašeg vozila dok je parkirano.
										Bez obzira kada, gde ili kako se
										platforma kreće unutar sistema, zidna
										kutija će uvek pratiti.
									</p>
									<p
										className={`${styles.paragraph} mt-4 p-2 font-medium`}
									>
										S obzirom na promenljiv položaj
										jedinice, kabl za punjenje nikada neće
										biti daleko od porta za punjenje vašeg
										električnog vozila. Zahvaljujući svom
										dizajnu, jedinica čak može biti
										montirana na uske platforme. U principu,
										E-Plug-in jedinica može biti instalirana
										na bilo kojem parking mestu unutar
										sistema za parkiranje. Štaviše, mogu se
										naknadno ugraditi i u postojeće garaže.
										Molimo vas da kontaktirate
										sertifikovanog električara kako biste
										razgovarali o opcijama za povezivanje
										naše jedinice na mrežu zgrade. Trenutno,
										E-Plug-in jedinice ne mogu biti
										instalirane u sistemima za parkiranje
										bez izuzetka. Molimo vas da kontaktirate
										naše odeljenje prodaje, koje će vam moći
										pružiti najnovije informacije. Napomena:
										KLAUS Multiparking isporučuje samo
										pripremu za punjenje "E-Plug in".
										Dodatne informacije o pripremi za
										punjenje "E-Plug in", njenoj instalaciji
										i dijagramu povezivanja za napajanje
										možete pronaći u našem brošuru "E-Plug
										in".
									</p>
									<div className="mt-4">
										<DownloadButton
											href={doc1}
											text="E-Plugin brošura"
										/>
									</div>
								</div>

								{/* TABLET AND UP (md+) */}
								<div className="hidden w-full md:flex">
									<div className="flex flex-col pr-4 md:w-1/2 lg:w-[30%]">
										<img
											src={img2}
											className="h-auto w-full object-cover"
										/>
										<div className="mt-4">
											<DownloadButton
												href={doc1}
												text="E-Plugin brošura"
											/>
										</div>
									</div>

									<div className="md:w-1/2 lg:w-[70%]">
										<p
											className={`${styles.paragraph} mt-4 p-2 font-medium`}
										>
											Transformacija e-punjenja u
											e-parkiranje: možete instalirati
											svoju zidnu kutiju na naše platforme
											sistema za parkiranje opremljene
											našim "E-Plug in" rešenjem za
											punjenje. Ovo olakšava punjenje
											vašeg vozila dok je parkirano. Bez
											obzira kada, gde ili kako se
											platforma kreće unutar sistema,
											zidna kutija će uvek pratiti.
										</p>
										<p
											className={`${styles.paragraph} mt-4 p-2 font-medium`}
										>
											S obzirom na promenljiv položaj
											jedinice, kabl za punjenje nikada
											neće biti daleko od porta za
											punjenje vašeg električnog vozila.
											Zahvaljujući svom dizajnu, jedinica
											čak može biti montirana na uske
											platforme. U principu, E-Plug-in
											jedinica može biti instalirana na
											bilo kojem parking mestu unutar
											sistema za parkiranje. Štaviše, mogu
											se naknadno ugraditi i u postojeće
											garaže. Molimo vas da kontaktirate
											sertifikovanog električara kako
											biste razgovarali o opcijama za
											povezivanje naše jedinice na mrežu
											zgrade. Trenutno, E-Plug-in jedinice
											ne mogu biti instalirane u sistemima
											za parkiranje bez izuzetka. Molimo
											vas da kontaktirate naše odeljenje
											prodaje, koje će vam moći pružiti
											najnovije informacije. Napomena:
											KLAUS Multiparking isporučuje samo
											pripremu za punjenje "E-Plug in".
											Dodatne informacije o pripremi za
											punjenje "E-Plug in", njenoj
											instalaciji i dijagramu povezivanja
											za napajanje možete pronaći u našem
											brošuru "E-Plug in".
										</p>
									</div>
								</div>
							</section>
						</main>
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
				<div className={`${styles.boxWidth}`}>
					<div className={`${styles.paddingY} relative p-2`}>
						<section className="mb-8 bg-white">
							<h2 className={`${styles.heading2}`}>
								VAŽNO ZA NAŠE KUPCE:
							</h2>
							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								<span className="text-accentColor">
									Stavke koje kupac treba da isporuči:
								</span>
							</p>
							<ul
								className={`${styles.paragraph} custom-list mt-4`}
							>
								<li>Zidna kutija (maks. 22 kW)</li>
								<li>Kabl za punjenje električnog vozila</li>
								<li>
									Upravljanje opterećenjem i električni merač,
									po potrebi
								</li>
								<li>Oznake opreme, po potrebi</li>
							</ul>
							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								<span className="text-accentColor">
									Radovi koje treba da izvrši kupac:
								</span>
							</p>
							<ul
								className={`${styles.paragraph} custom-list mt-4`}
							>
								<li>
									Povezivanje napajanja i kabla (po potrebi)
									sa transfernom kutijom.
								</li>
								<li>
									Montaža i povezivanje zidne kutije (maks. 22
									kW) na ploču za fiksiranje stuba E-Plug-in.
								</li>
								<li>
									Električno napajanje, povezivanje i
									uzemljenje, kao i testiranje odgovarajuće
									izjednačenosti potencijala bilo koje stanice
									za punjenje, moraju biti izvršeni od strane
									korisnika u skladu sa specifikacijama DIN EN
									VDE 0100.
								</li>
								<li>
									Pod-distribucija, osiguranje preopterećenja
									i kablanje do transferne kutije.
								</li>
								<li>
									Instalacija i puštanje u rad infrastrukture
									za punjenje. Testiranje izolacije i PE
									provodnika cele infrastrukture za punjenje.
								</li>
							</ul>
							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								<span className="text-accentColor">
									Tokom upotrebe:
								</span>
							</p>
							<ul
								className={`${styles.paragraph} custom-list mt-4`}
							>
								<li>
									Morate voditi računa da kabl za punjenje ne
									ometa pokretnu platformu i da bude bezbedno
									odložen nakon upotrebe.
								</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default EParking;
