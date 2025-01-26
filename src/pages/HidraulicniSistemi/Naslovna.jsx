import Footer from './../../components/Footer';
import styles from './../../style';
import { Link } from 'react-router-dom';

import img1 from './../../assets/header-produktgruppe-parker.jpg';

import gif1 from './../../assets/NEU_schemaclip-multibase-2072i.gif';
import gif2 from './../../assets/NEU_schemaclip-multibase-2078i.gif';
import gif3 from './../../assets/NEU_schemaclip-multibase-2042.gif';
import gif4 from './../../assets/NEU_schemaclip-multibase-g63.gif';
import gif5 from './../../assets/NEU_schemaclip-multibase-u10.gif';
import gif6 from './../../assets/NEU_schemaclip-multibase-u20.gif';
import gif7 from './../../assets/NEU_schemaclip-singlevario-2061.gif';

import gif8 from './../../assets/NEU_schemaclip-multibase-2072i.gif';
import gif9 from './../../assets/NEU_schemaclip-singlevario-2061-outdoor.gif';
import gif10 from './../../assets/NEU_schemaclip-multibase-2072i-outdoor.gif';
import gif11 from './../../assets/NEU_schemaclip-multibase-g63-outdoor.gif';

const Naslovna = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="relative w-full">
						<img
							src={img1}
							alt="Duplex Garaže i Dvostruki Parkeri iz KLAUS
                                            Multiparkinga slika"
							className="h-auto w-full object-cover"
						></img>
						<header className="-mt-10 flex flex-col justify-center text-black">
							<h1 className={`${styles.heading1} p-2`}>
								<span className="rounded bg-accentColor px-1 py-1">
									Duplex Garaže i Dvostruki Parkeri iz KLAUS
									Multiparkinga
								</span>
							</h1>

							<p
								className={`${styles.paragraph} mt-4 p-2 font-medium`}
							>
								Unutar naših duplex garaža koje štede prostor,
								može se parkirati do šest automobila jedan iznad
								drugog, čak i na najužem prostoru. Dostupne su
								različite verzije koje mogu zadovoljiti vaše
								individualne zahteve - sa ili bez jame. Mobilne
								parking platforme omogućavaju vam povećanje
								broja parking mesta unutar iste površine,
								smanjenje troškova i oslobađanje dodatnog
								prostora, uz fleksibilno i sigurno parkiranje.
							</p>
						</header>
						<main className="p-2">
							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Šta je Duplex Garaža?
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Prednost dupleks garaža je što omogućavaju
									udvostručenje ili utrostručenje broja
									parking mesta bez povećanja površine. Vozila
									se parkiraju jedno iznad drugog pomoću
									parking platformi, što vam omogućava da
									maksimalno iskoristite broj parking mesta
									čak i kada je prostor ograničen. Na osnovu
									modela, naše dupleks garaže su dostupne sa
									ili bez jame, za nezavisno ili zavisno
									parkiranje, i sa dva ili tri nivoa. U
									zavisnosti od dostupnog prostora, možete
									izabrati između duplih platformi koje
									obezbeđuju dva parking mesta jedno pored
									drugog po nivou, ili jednostrukih platformi
									sa jednim parking mestom po nivou.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Prednosti Duplex Garaža Klaus Multiparkinga
								</h2>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										“Proizvedeno u Nemačkoj“ rešenje koje
										nudi najbolji odnos cene i kvaliteta.
									</li>
									<li>
										U zavisnosti od modela broj parking
										mesta može da se duplira (
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBase2072i"
										>
											MultiBase 2072i
										</Link>
										,{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBase2078i"
										>
											MultiBase 2078i
										</Link>
										,{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBase2042"
										>
											MultiBase 2042
										</Link>
										,{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBaseU20"
										>
											MultiBase U20
										</Link>
										,{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/SingleVario2061"
										>
											SingleVario 2061
										</Link>{' '}
										ili utrostruči (
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBaseG63"
										>
											MultiBase G63
										</Link>
										). U slučaju ograničenog prostora
										takodje nudimo platformu za jedan
										automobil (
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBaseU10"
										>
											MultiBase U10
										</Link>
										).
									</li>
									<li>
										Vrhunski proizvodi od vodećeg
										proizvođača i dobavljača parking rešenja
										sa višedecenijskim iskustvom.
									</li>
									<li>
										Efikasno proširenje parking kapaciteta
										za stambene i poslovne zgrade - kao
										sistemi za parkiranje na otvorenom ili u
										podzemnim i višespratnim parkiralištima.
									</li>
									<li>
										Takođe se može naknadno ugraditi u
										zavisnosti od strukturnih uslova (
										<Link
											style={{ color: '#FF6F00' }}
											to="/SingleVario2061"
										>
											SingleVario 2061
										</Link>
										).
									</li>
									<li>
										Stručna podrška i pomoć prilikom
										planiranja i izvođenja pojedinačnih
										projekata.
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Koja je Svrha Duplex Garaža?
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Naše dupleks garaže se uglavnom koriste tamo
									gde ograničen prostor zahteva efikasniju
									upotrebu dostupne parking površine. Sa našim
									modelima dvostrukih parkera, možete
									ekonomično i efikasno udvostručiti ili
									utrostručiti broj parking mesta i imati
									koristi od parking površine sa smanjenom
									površinom. Naše dupleks garaže vam pružaju
									dodatni prostor koji možete koristiti u
									druge svrhe. Sistemom se upravlja putem
									upravljačke jedinice i kontrolnog ključa.
									Ako se kontrolni ključ ukloni tokom procesa
									parkiranja, sistem se pouzdano i sigurno
									zaustavlja.
								</p>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Koja je Razlika Između Duplex Garaže i
									Duplog Parkera?
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Iako pojmovi &quot;dupleks garaža&quot;,
									&quot;dvostruki parker&quot;, &quot;podizni
									parker&quot;, &quot;sistem višestrukog
									parkiranja&quot; i &quot;dupleks
									parker&quot; zvuče kao različite tehnologije
									parkiranja, one su jednostavno različite
									oznake tipova koje koriste različiti
									proizvođači. Dvostruki parkeri, dupleks
									parkeri i dupleks garaže stoga imaju istu
									svrhu - da udvostruče broj parking mesta
									putem inovativnih parking rešenja.
								</p>
								<iframe
									className="mt-4 aspect-video w-full"
									src="https://www.youtube.com/embed/yLKrZnFqYUg"
									title="PARKER MULTIBASE 2072i - Ganz groß auch auf kleinstem Raum!"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Klaus Multiparking Nudi Sledeće Duplex
									Garaže
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Prilikom izbora dupleks garaže može se
									napraviti razlika između različitih tipova i
									načina rada. Kada je u pitanju odluka koja
									je pogodna za vaš projekat, to će zavisiti
									od vaših specifičnih zahteva i strukturalnih
									uslova na mestu instalacije.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									U KLAUS Multiparking asortimanu naći ćete
									sledeće tipove dupleks garaža:
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										<strong>Nezavisno parkiranje:</strong>{' '}
										Slobodnim parking platformama može se
										pristupiti nezavisno i jednostavno.
									</li>
									<li>
										<strong>Zavisno parkiranje:</strong>{' '}
										Donje parking mesto mora biti prazno da
										bi se parking platforma spustila.
									</li>
									<li>
										<strong>Dva ili tri nivoa:</strong> Do
										šest vozila može se parkirati jedno
										iznad drugo.
									</li>
									<li>
										<strong>
											Dvostruka platforma (DP):
										</strong>{' '}
										Pruža do dva parking mesta jedno pored
										drugog po nivou.
									</li>
									<li>
										<strong>
											Jednostruka platforma (SP):
										</strong>{' '}
										Pruža jedno parking mesto po nivou.
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Šta je Multibase Model?
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									MultiBase je najnovija generacija sistema
									dupleks garaža iz KLAUS Multiparkinga. Sa
									MultiBase-om dobijate ekonomično rešenje
									koje pruža maksimalan mogući broj parking
									mesta kako bi se rešili postojeći problemi
									kapaciteta. To podrazumeva vertikalno
									udvostručavanje ili utrostručavanje broja
									parking mesta unutar iste površine.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									MultiBase modeli su pogodni za:
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										Porodične kuće i stambene zgrade sa ili
										bez garaža
									</li>
									<li>
										Proširenja kapaciteta u stambenim i
										poslovnim zgradama, kao i u podzemnim i
										višespratnim parkinzima
									</li>
									<li>
										Sistemi za parkiranje na otvorenom, sa
										ili bez garaže, u unutrašnjim dvorištima
										i baštama
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Naši Parkeri Ukratko:
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Bilo da se radi o dupleks garaži ili duploj
									garaži : Naši parkeri nude rešenja koja
									štede prostor za urbane prostore i svaku
									oblast primene. Iskoristite prednosti naših
									efikasnih i isplativih rešenja za smanjenje
									vaše potrebe za prostorom.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									Naš asortiman proizvoda uključuje:
								</p>
								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MultiBase2072i"
									>
										MultiBase 2072i
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Omogućava horizontalno
												parkiranje na svim nivoima
												parkiranja (za optimalno
												iskorišćenje prostora,
												automobili se parkiraju
												horizontalno jedan iznad drugog
												podizanjem i spuštanjem parking
												nivoa horizontalno)
											</li>
											<li>
												Udvostručava broj parking mesta
												putem jednostruke platforme (2
												automobila) ili dvostruke
												platforme (4 automobila)
											</li>
											<li>
												Za nezavisno parkiranje sa jamom
											</li>
											<li>
												Maksimalna udobnost i komfor
												prilikom ulaska/izlaska iz
												vozila
											</li>
											<li>
												Maksimalna visina automobila 215
												cm
											</li>
											<li>
												Takođe dostupno kao sistem na
												otvorenom
											</li>
											<li>
												Maksimalno opterećenje: 2,6 t sa
												jednostrukom
												platformom/dvostrukom platformom
												ili 3,0 t sa jednostrukom
												platformom
											</li>
											<li>
												Kompatibilno{' '}
												<Link
													style={{ color: '#FF6F00' }}
													to="/DodatnaOprema"
												>
													sa stanicama za punjenje
													električnih vozila
												</Link>{' '}
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												stambene i poslovne zgrade,
												hotele, kao i porodične kuće i
												stambene zgrade.
											</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src={gif1}
										loading="lazy"
									/>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MultiBase2078i"
									>
										MultiBase 2078i
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Udvostručava broj dostupnih
												parking mesta putem jednostruke
												platforme (2 automobila) ili
												dvostruke platforme (4
												automobila)
											</li>
											<li>
												Ušteda prostora zahvaljujući
												potrebnoj visini za instalaciju
												nižom za 30 cm
											</li>
											<li>Za nezavisno parkiranje</li>
											<li>
												Udoban ulazak i izlazak
												zahvaljujući izbočenim čeličnim
												stubovima
											</li>
											<li>
												Za automobile do 215 cm visine
											</li>
											<li>
												Maksimalno opterećenje: 2,6 t sa
												jednostrukom
												platformom/dvostrukom platformom
												ili 3,0 t sa jednostrukom
												platformom
											</li>
											<li>
												Posebno ekološka i
												niskoodržavajuća opcija
												zahvaljujući
												elektro-hidrauličnom sistem za
												sinhronizaciju kontrole
											</li>
											<li>
												Kompatibilno{' '}
												<Link
													style={{ color: '#FF6F00' }}
													to="/DodatnaOprema"
												>
													sa stanicama za punjenje
													električnih vozila
												</Link>{' '}
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												stambene i poslovne zgrade, kao
												i porodične kuće i stambene
												zgrade.
											</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src={gif2}
										loading="lazy"
									/>
								</div>

								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MultiBase2042"
									>
										MultiBase 2042
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Udvostručuje broj parking mesta
												u okviru iste površine
											</li>
											<li>
												Posebno štedi prostor sa malom
												dubinom jame i visinom ugradnje
											</li>
											<li>Za nezavisno parkiranje</li>
											<li>
												Dostupan sa jednostrukom
												platformom (2 automobila) ili
												dvostrukom platformom (4
												automobila)
											</li>
											<li>
												Maksimalna visina automobila 154
												cm
											</li>
											<li>
												Maksimalno opterećenje: 2,0 t po
												parking mestu
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												stambene i poslovne zgrade kao i
												porodične kuće i stambene
												zgrade.
											</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src={gif3}
										loading="lazy"
									/>
								</div>
								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MultiBaseG63"
									>
										MultiBase G63
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Utrostručuje dostupan prostor za
												parkiranje (do 6 parking mesta)
											</li>
											<li>Za nezavisno parkiranje</li>
											<li>
												Horizontalno parkiranje na svim
												nivoima parkiranja
											</li>
											<li>
												Sa jednostrukom platformom (3
												automobila) ili dvostrukom
												platformom (6 automobila)
											</li>
											<li>
												Maksimalna visina vozila 170 cm
											</li>
											<li>
												Takođe pogodno kao sistem na
												otvorenom
											</li>
											<li>
												Maksimalno opterećenje: maks.
												2.0 t po parking mestu ili
												opciono maks. 2.5 t na
												jednostrukoj platformi
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												stambene i poslovne zgrade,
												hotele, kao i porodične kuće i
												stambene zgrade.
											</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src={gif4}
										loading="lazy"
									/>
								</div>
								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/MultiBaseU10"
									>
										MultiBase U10
									</Link>{' '}
									/{' '}
									<Link
										style={{ color: '#FF6F00' }}
										to="/MultiBaseU20"
									>
										MultiBase U20
									</Link>{' '}
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Skoro nevidljiv jer je skoro
												potpuno potopljen u zemlju
											</li>
											<li>
												Vizuelne opcije dizajna za
												gornju parking platformu (npr.
												popločavanje ili zelenilo)
											</li>
											<li>
												Gornja platforma je nivu sa
												zemljom (može se voziti preko
												nje)
											</li>
											<li>
												MultiBase U10 jedna platforma za
												1 automobil, MultiBase U20 jedna
												platforma za 2 automobila
											</li>
											<li>
												Horizontalni pristup parking
												nivoima
											</li>
											<li>
												Povećava vrednost imovine kroz
												dodatni koristan prostor
											</li>
											<li>Za nezavisno parkiranje</li>
											<li>
												Maksimalna visina vozila 200 cm
											</li>
											<li>
												Maksimalno opterećenje: 2.0 t po
												parking mestu, opciono 2.6 t
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												zelene površine u stambenim i
												poslovnim kompleksima, hotele,
												kao i porodične kuće i stambene
												zgrade.
											</li>
										</ul>
									</div>
									<div className="mb-12 mt-4 lg:w-2/5">
										<img
											className="h-auto object-contain"
											src={gif5}
											loading="lazy"
										/>
										<img
											className="h-auto object-contain"
											src={gif6}
											loading="lazy"
										/>
									</div>
								</div>
								<h3
									className={`${styles.heading3} mt-4 text-accentColor underline`}
								>
									<Link
										style={{ color: '#FF6F00' }}
										to="/SingleVario2061"
									>
										SingleVario 2061
									</Link>
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Udvostručuje parking mesta u
												dvospratnoj garaži
											</li>
											<li>Montaža bez jame</li>
											<li>Podesivo po visini</li>
											<li>Za zavisno parkiranje</li>
											<li>
												Sa jednom platformom za 2
												automobila
											</li>
											<li>
												Maksimalna visina vozila 200 cm
											</li>
											<li>
												Rastojanje između platformi
												moguće podešavati
											</li>
											<li>
												Horizontalni pristup parking
												nivoima
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												stambene i poslovne zgrade,
												hotele, porodične kuće i
												stambene zgrade, kao i naknadnu
												ugradnju.
											</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src={gif7}
										loading="lazy"
									/>
								</div>
								<h3 className={`${styles.heading3} mt-4`}>
									<span className="text-accentColor underline">
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBase2072iSpecial"
										>
											MultiBase 2072i
										</Link>
									</span>{' '}
									- platforme za osobe sa posebnim potrebama
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Gornja parking platforma
												označena je kao parking mesto za
												osobe sa invaliditetom u skladu
												sa nemačkim propisima koji
												regulišu parking objekte
												(&quot;GaVO&quot;) i DIN 18025
												&quot;Konstrukcija bez barijera
												- principi planiranja&quot;
												(širina korisne platforme: 350
												cm)
											</li>
											<li>
												Visokokvalitetna{' '}
												<Link
													style={{ color: '#FF6F00' }}
													to="/DodatnaOprema"
												>
													AluLongLife
												</Link>{' '}
												površina koja je lakša za
												hodanje i pristupanje
											</li>
											<li>
												Za horizontalni pristup parking
												nivoima
											</li>
											<li>
												Poseban kontrolni uređaj
												osigurava da se kontrolni ključ
												može ukloniti samo kada je
												gornje parking mesto za osobe sa
												invaliditetom u poziciji ulaska
											</li>
											<li>
												<strong>Pogodno za:</strong>{' '}
												garaže kuća i stambenih zgrada,
												poslovne zgrade i stambene ili
												poslovne zgrade.
											</li>
										</ul>
									</div>
									<img
										className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
										src={gif8}
										loading="lazy"
									/>
								</div>
								<h3 className={`${styles.heading3} mt-4`}>
									<span className="text-accentColor underline">
										<Link
											style={{ color: '#FF6F00' }}
											to="/SingleVario2061Outdoor"
										>
											SingleVario 2061 Spolja
										</Link>
									</span>{' '}
									/{' '}
									<span className="text-accentColor underline">
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBase2072iOutdoor"
										>
											MultiBase 2072i Spolja
										</Link>
									</span>{' '}
									/{' '}
									<span className="text-accentColor underline">
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBaseG63Outdoor"
										>
											MultiBase G63 Spolja
										</Link>
									</span>{' '}
								</h3>
								<div className="lg:flex lg:w-full lg:flex-row lg:flex-nowrap lg:items-start lg:gap-4">
									<div className="mt-4 lg:w-3/5">
										<ul
											className={`${styles.paragraph} custom-list`}
										>
											<li>
												Ovi odabrani modeli dostupni su
												kao sistemi za spoljnu upotrebu
												(npr. u dvorištu ili bašti)
											</li>
											<li>
												Robustna, otporna tehnologija
												koja je zaštićena od vremenskih
												uslova
											</li>
											<li>
												Nije potrebna skupa izgradnja
												garaže
											</li>
											<li>
												Udvostručuje ili utrostručuje
												broj parking mesta na otvorenom
											</li>
											<li>
												Za zavisno ili nezavisno
												parkiranje, u zavisnosti od
												modela
											</li>
										</ul>
									</div>
									<div className="items-center lg:flex lg:w-2/5 lg:flex-col">
										<div className="lg:flex lg:flex-row">
											<img
												className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
												src={gif9}
												loading="lazy"
											/>
											<img
												className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
												src={gif10}
												loading="lazy"
											/>
										</div>
										<img
											className="mb-12 mt-4 h-auto object-contain lg:w-2/5"
											src={gif11}
											loading="lazy"
										/>
									</div>
								</div>
							</section>

							<section className="mb-8">
								<h2 className={`${styles.heading2}`}>
									Prednosti i Mane Duplex Garaže Na Ukratko
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Garantovane prednosti:</strong>
								</p>
								<ul
									className={`${styles.paragraph} custom-list mt-4`}
								>
									<li>
										Udvostručuje ili utrostručuje broj
										parking mesta
									</li>
									<li>
										Brže dobijanje dozvole za planiranje
										zahvaljujući poštovanju zakonskih
										zahteva za broj parking mesta
									</li>
									<li>
										Ušteda vremena - nema potrebe za
										traženjem parking mesta
									</li>
									<li>
										Svi mehanički komponenti sistema su
										profesionalno testirani, sigurni i
										pouzdani
									</li>
									<li>
										Različite visine automobila mogu biti
										smeštene sa dvostrukim parkerima
									</li>
									<li>
										Povećan prihod - više parking mesta
										unutar iste površine
									</li>
									<li>
										Nema zakonskih taksi za parking mesta
										(ušteda troškova)
									</li>
									<li>
										Sa{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBaseU10"
										>
											MultiBase U10
										</Link>{' '}
										/{' '}
										<Link
											style={{ color: '#FF6F00' }}
											to="/MultiBaseU20"
										>
											MultiBase U20
										</Link>{' '}
										&quot;nevidljiva&quot; parking mesta
									</li>
									<li>
										Verzija prilagođena potrebama korisnika
										sa invaliditetom takođe dostupna
									</li>
									<li>
										Brza i profesionalna korisnička podrška
										KLAUS Multiparkinga
									</li>
								</ul>
								<p className={`${styles.paragraph} mt-4`}>
									Kao vodeći proizvođač i dobavljač modernih
									sistema parkiranja, KLAUS Multiparking je
									vaš pouzdan partner. Nudimo više od 60
									godina iskustva kao i inovativna rešenja za
									parkiranje za različite veličine parcela. A
									budući da se naši parking sistemi koriste
									širom sveta, možete se osloniti na
									neprevaziđenu kvalitet i funkcionalnost kako
									za velike tako i za male parking prostore.
								</p>
							</section>
							{/* DO OVDE GOTOVO  */}

							<section>
								<h2 className={`${styles.heading2}`}>
									Procedura Instalacije Duplex Garaže
								</h2>
								<p className={`${styles.paragraph} mt-4`}>
									Već ste se odlučili za dupleks garažu KLAUS
									Multiparking-a? Onda možete računati na naše
									pouzdane usluge - od faze planiranja do
									realizacije projekta. Naš proces za
									instalaciju naših dvostrukih parkera je
									sledeći:
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 1: </strong>Pružamo
									profesionalnu podršku za planiranje tokom
									faze realizacije projekta. U tu svrhu,
									sarađujemo sa arhitektima, projektantima i
									izvođačima radova.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 2: </strong>Dobijate našu
									potvrdu porudžbine nakon što obradimo vašu
									narudžbinu.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 3: </strong>Pregled planiranja
									i tehnička obrada dostupnih planova.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 4: </strong>Utvrđujemo mere i
									proveravamo sve dimenzije kako bismo rešili
									eventualne tehničke nedoumice. Nakon toga
									sledi tehnička konfiguracija sistema.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 5: </strong>Čim se sistem
									aktivira, počinje naš proizvodni proces
									&quot;Made in Germany&quot;.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 6: </strong>Komponente sistema
									se proizvode i sistem se šalje. Nakon toga
									sledi sigurna i brza dostava na lokaciju
									instalacije.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 7: </strong>Sistem se
									profesionalno instalira.
								</p>
								<p className={`${styles.paragraph} mt-4`}>
									<strong>Korak 8: </strong>Po završetku
									montaže, sistem se može pustiti u rad.
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

export default Naslovna;
