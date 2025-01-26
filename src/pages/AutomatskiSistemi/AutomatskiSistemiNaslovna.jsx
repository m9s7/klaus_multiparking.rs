import Footer from '../../components/Footer';
import styles from '../../style';
import { Link } from 'react-router-dom';

const AutomatskiSistemiNaslovna = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src="src\assets\header-produktgruppe-vollautomatische-parksysteme.jpg"
							alt="Duplex Garaže i Dvostruki Parkeri iz KLAUS
                                            Multiparkinga slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-10 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									AUTOMATSKI PARKING SISTEMI KLAUS
									MULTIPARKINGA
								</span>
							</h1>

							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Automatski parking sistemi KLAUS Multiparkinga
								nude praktične, potpuno automatizovane procese
								parkiranja bez pristupnih traka ili rampi.
								Korišćenjem automatskog parking sistema imaćete
								koristi od maksimalnog iskorišćavanja dostupnog
								parking prostora zahvaljujući najsavremenijim
								tehnologijama parkiranja. Ovi sistemi uvećavaju
								broj parking mesta unutar iste površine,
								smanjuju troškove izgradnje, povećavaju prihode
								od parking objekata i povećavaju vrednost
								imovine.
							</p>
						</header>
					</div>
					<div className={`${styles.paddingY} relative`}>
						<main className="p-2">
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									ŠTA SU AUTOMATSKI SISTEMI PARKINGA?
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Automatski parking sistemi KLAUS
									Multiparkinga nude vrhunsku udobnost
									parkiranja, "Napravljeno u Nemačkoj". Od
									traženja parking mesta do ulaska i izlaska
									iz sistema, naša moderna tehnologija
									parkiranja automatizuje sve procese
									parkiranja. Korisnik jednostavno parkira
									svoje vozilo u prijemnoj kabini i ostavlja
									ostalo sistemu za parkiranje. Ne može biti
									lakše. Potpuno automatski parking sistemi
									vam omogućavaju da uvećavate broj parking
									mesta na istoj površini ili planirate nove
									parking prostore koji obezbeđuju maksimalnu
									efikasnost. Takođe su izuzetno praktični jer
									nisu potrebne pristupne trake niti rampe.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Iskoristite sledeće prednosti naših potpuno
									automatskih parking sistema:
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										Potpuno automatsko parkiranje i
										isparkiravanje - nema više gubljenja
										vremena tražeći parking mesto zbog
										neefikasnog iskorišćavanja prostora
									</li>
									<li>
										Maksimalna fleksibilnost parkiranja
										zahvaljujući optimalnom iskorišćavanju
										prostora unutar iste površine
									</li>
									<li>
										Modularni sistemi sa horizontalnim i
										vertikalnim transportnim jedinicama
									</li>
									<li>
										Visok nivo sigurnosti zahvaljujući
										zaključanim parking objektima
									</li>
									<li>
										Niže emisije CO2 zahvaljujući
										automatizovanim procesima parkiranja
									</li>
									<li>
										Poboljšana vizuelna privlačnost i
										efikasnost objekta
									</li>
									<li>
										Prijatno iskustvo parkiranja za vozače
									</li>
									<li>
										Povećana vrednost imovine, smanjeni
										troškovi izgradnje
									</li>
									<li>
										Jedini sistem bez pristupnih traka i
										rampi
									</li>
									<li>
										Prilagođena rešenja su takođe moguća u
										slučaju strukturnih ograničenja
									</li>
								</ul>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/bAzi2xqqmnM"
									title="FULLY AUTOMATIC PARKING SYSTEMS MASTERVARIO R3C - ALWAYS A PREMIUM SOLUTION"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									NAŠI AUTOMATSKI SISTEMI PARKINGA UKRATKO
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Naši potpuno automatski parking sistemi
									obezbeđuju optimalno iskorišćavanje prostora
									i omogućavaju fleksibilna rešenja tamo gde
									standardni sistemi nisu mogući. Svi modeli
									su dostupni kao nadzemne ili podzemne
									varijante, ili kao kombinacija oba,
									eliminišući potrebu za pristupnim trakama za
									vozila i rampama.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Naš asortiman proizvoda uključuje:
								</p>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MasterVarioR2C"
									>
										MasterVario R2C
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Potpuno automatski parking
												sistem, dostupan kao nadzemna
												i/ili podzemna varijanta
											</li>
											<li>Do 50 parking mesta</li>
											<li>
												Vertikalno: do 15 nivoa
												parkiranja
											</li>
											<li>
												Horizontalno: 1 do 6 parking
												mesta po nivou
											</li>
											<li>
												Fleksibilno uređenje parking
												prostora
											</li>
											<li>
												Kraće vreme izgradnje +
												maksimalno korišćenje parking
												prostora
											</li>
											<li>
												Maksimalno iskorišćavanje
												parking prostora unutar malog
												prostora
											</li>
											<li>
												Automatizovano parkiranje i
												izlazak putem ulazne kabine i
												lifta
											</li>
											<li>
												Vertikalni transport vozila
												putem lifta
											</li>
											<li>
												Opciona jedinica za okretanje u
												transfer kabini
											</li>
											<li>Automatsko merenje vozila</li>
											<li>
												Vozila su zaštićena od
												vandalizma i krađe
											</li>
											<li>
												Posebna rešenja i prilagođeni
												projekti su mogući
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												Poslovne zgrade,
												stambeno-poslovne zgrade,
												podzemne i višespratne garaže,
												prodavnice automobila, objekte
												koji se graniče sa imovinom i
												metropolitanske
												stambeno-poslovne komplekse
											</li>
										</ul>
									</div>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MasterVarioR2L"
									>
										MasterVario R2L
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Potpuno automatski parking
												sistem, dostupan kao nadzemna
												i/ili podzemna varijanta
											</li>
											<li>Do 50 parking mesta</li>
											<li>
												Do 15 vertikalnih nivoa
												parkiranja
											</li>
											<li>
												1 do 6 horizontalnih parking
												mesta po nivou
											</li>
											<li>
												Fleksibilno uređenje parking
												prostora
											</li>
											<li>
												Kratko vreme izgradnje sa
												maksimalno iskorišćenim parking
												prostorom i dodatnim
												upotrebljivim prostorom
											</li>
											<li>
												Optimalno iskorišćavanje parking
												prostora uz malu površinu
											</li>
											<li>
												Okretanje vozila unutar parking
												strukture ili kabine je moguće
												bez gubitka parking prostora
											</li>
											<li>
												Automatizovano parkiranje i
												izlazak putem transfer kabine i
												lifta
											</li>
											<li>
												Opciona jedinica za okretanje u
												transfer kabini
											</li>
											<li>
												Automatsko merenje visine vozila
											</li>

											<li>
												Vozila su zaštićena od
												vandalizma i krađe
											</li>
											<li>
												Posebna rešenja i prilagođeni
												projekti su mogući
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												Poslovne zgrade,
												stambeno-poslovne zgrade,
												podzemne i višespratne garaže,
												prodavnice automobila, objekte
												koji se graniče sa imovinom i
												metropolitanske
												stambeno-poslovne komplekse
											</li>
										</ul>
									</div>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MasterVarioR3C"
									>
										MasterVario R3C
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Sistem regalnog skladišta sa
												dodatnom osom kretanja (za do 10
												vozila, jedno iza drugog)
											</li>
											<li>
												Za duge i uske parcele i sisteme
											</li>
											<li>
												Maksimalno je moguće 50 do 60
												parking mesta po transfer kabini
												(višestruke transfer kabine su
												moguće)
											</li>
											<li>
												Do 10 vertikalnih nivoa
												parkiranja
											</li>
											<li>
												Do 30 horizontalnih parking
												mesta po nivou parkiranja
											</li>
											<li>
												Bočni lift i jedinica za
												okretanje dostupni pored
												transfer kabine i transportne
												jedinice
											</li>
											<li>
												Automatsko merenje visine vozila
											</li>
											<li>
												Vozila su zaštićena od
												vandalizma i krađe
											</li>
											<li>
												Prilagođena rešenja su moguća
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												Poslovne zgrade,
												stambeno-poslovne zgrade,
												podzemne i višespratne garaže,
												prodavnice automobila,
												stambeno-poslovne komplekse
											</li>
										</ul>
									</div>
									<iframe
										width="306"
										height="174"
										src="https://www.youtube.com/embed/bAzi2xqqmnM"
										title="FULLY AUTOMATIC PARKING SYSTEMS MASTERVARIO R3C - ALWAYS A PREMIUM SOLUTION"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerpolicy="strict-origin-when-cross-origin"
										allowfullscreen
									></iframe>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MasterVarioR3L"
									>
										MasterVario R3L
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Automatizovani sistem regalnog
												skladišta za duge i uske parcele
											</li>
											<li>
												Zahvaljujući dodatnoj osi
												kretanja, moguće je parkirati do
												10 vozila jedno iza drugog
											</li>
											<li>
												Maksimalno je moguće 50 do 60
												parking mesta po transfer kabini
												(višestruke transfer kabine su
												moguće)
											</li>
											<li>
												Do 10 vertikalnih nivoa
												parkiranja
											</li>
											<li>
												Do 30 horizontalnih parking
												mesta po nivou parkiranja
											</li>
											<li>
												Opciona bočna dizalica i
												jedinica za okretanje pored
												transfer kabine i transportne
												jedinice
											</li>
											<li>
												Visina vozila se automatski
												detektuje
											</li>
											<li>
												Vozila su zaštićena od
												vandalizma i krađe
											</li>
											<li>
												Prilagođena rešenja su moguća
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												Poslovne zgrade,
												stambeno-poslovne zgrade,
												podzemne i višespratne garaže,
												prodavnice automobila,
												stambeno-poslovne komplekse
											</li>
										</ul>
									</div>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MasterVarioF2"
									>
										MasterVario F2
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Optimalno iskorišćavanje
												prostora
											</li>
											<li>Do 50 parking mesta</li>
											<li>
												Do 5 vertikalnih nivoa
												parkiranja
											</li>
											<li>
												Jedan red sa do 4 do 8 vozila po
												nivou parkiranja je moguć
											</li>
											<li>
												Automatizovani horizontalni i
												vertikalni transport vozila
											</li>
											<li>
												Vozila su zaštićena od
												vandalizma i krađe
											</li>
											<li>Opciona prilagođena rešenja</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												Poslovne zgrade,
												stambeno-poslovne zgrade,
												podzemne i višespratne garaže,
												prodavnice automobila,
												stambeno-poslovne komplekse
											</li>
										</ul>
									</div>
								</div>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									AUTOMATSKI PARKING SISTEMI DA ODGOVARAJU
									VAŠIM ZAHTEVIMA
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Pronađite pravi sistem automatskog
									parkiranja za svoj projekat uz KLAUS
									Multiparking. Ne oklevajte – kontaktirajte
									nas danas!
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									KAKO RADE AUTOMATSKI PARKING SISTEMI?
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Automatski parking sistemi zasnovani su na
									modernoj tehnologiji parkiranja koja
									automatizuje procese štednje vremena
									prilikom parkiranja i isparkiravanja iz
									sistema. Vozila se voze u transfernu kabinu
									- automatski parking sistem brine se za
									ostalo. Korisnici tako štede dragoceno vreme
									jer nema potrebe da čekaju unutar vozila da
									se završi proces parkiranja. Vertikalne i
									horizontalne transportne jedinice i liftovi
									prevoze vozila do slobodnih parking mesta -
									i vraćaju ih u najkraćem mogućem vremenu
									kada je vreme za odlazak. Jednostavno
									upravljanje je obezbeđeno zahvaljujući
									daljinskom upravljaču i transponderima. Osim
									toga, sistem automatski detektuje dimenzije
									svakog vozila. Budući da ovi sistemi ne
									zahtevaju prilaze i rampe, dostupno je još
									više prostora.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									SVE PREDNOSTI AUTOMATSKIH PARKING SISTEMA
									KLAUS MULTIPARKINGA
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										Optimalno iskorišćavanje parking
										prostora uz maksimalnu fleksibilnost -
										čak i kada je prostor veoma ograničen.
									</li>
									<li>
										Lakša dozvola za plan, smanjenje
										troškova izgradnje.
									</li>
									<li>
										Instalacija u postojeće i nove objekte.
									</li>
									<li>
										Moderan parking sistem povećava vrednost
										objekta.
									</li>
									<li>
										Punjenje električnih vozila takođe je
										moguće pod određenim uslovima.
									</li>
									<li>
										Nisu potrebne prilazne staze ili rampe.
									</li>
									<li>
										Prilagođena rešenja za parkiranje su
										dostupna ako "standardna rešenja" nisu
										moguća.
									</li>
									<li>
										Visoko obezbeđenje zahvaljujući
										zatvorenim parking sistemima.
									</li>
									<li>
										Nema potrebe za traženjem parking mesta.
									</li>
									<li>Smanjene emisije CO2.</li>
									<li>
										Korisnički prijateljsko daljinsko
										upravljanje na osnovu transpondera.
									</li>
								</ul>
							</section>
						</main>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default AutomatskiSistemiNaslovna;
