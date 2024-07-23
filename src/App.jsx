import styles from './style';

import { Navbar } from './components';

const App = () => (
	<div className="w-full overflow-hidden bg-transparent">
		<Navbar />
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				{/*Other components*/}
				<div className={`${styles.paddingY}`}>
					{/* <p>fk off</p> */}
          <img src="src\assets\header-produktgruppe-parker.jpg" alt="Description of image" class="w-full h-auto"></img>
          
					<header className="p-6 text-black">
						<h1 className={`${styles.heading1}`}>
							Duplex Garaže i Dvostruki Parkeri iz KLAUS
							Multiparkinga
						</h1>
						<p className={`${styles.paragraph} mt-4 font-medium`}>
							Unutar naših duplex garaža koje štede prostor može
							se parkirati do šest automobila jedan iznad drugog
							čak i na najužem prostoru.
						</p>
					</header>

					<main className="p-6">
						<section className="mb-8">
							<h2 className={`${styles.heading2}`}>
								Šta je Duplex Garaža?
							</h2>
							<p className={`${styles.paragraph} mt-4`}>
								Prednost dupleks garaža je što omogućavaju
								udvostručenje ili utrostručenje broja parking
								mesta bez povećanja površine. Vozila se
								parkiraju jedno iznad drugog pomoću parking
								platformi što vam omogućava da maksimalno
								iskoristite broj parking mesta čak i kada je
								prostor ograničen.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								Prednosti Duplex Garaža Klaus Multiparkinga
							</h2>
							<ul className="mt-4 list-inside list-disc">
								<li>
									“Proizvedeno u Nemačkoj“ rešenje koje nudi
									najbolji odnos cene i kvaliteta.
								</li>
								<li>
									U zavisnosti od modela broj parking mesta
									može da se duplira (MultiBase 2072i,
									MultiBase 2078i, MultiBase 2042, MultiBase
									U20, SingleVario 2061) ili utrostruči
									(MultiBase G63).
								</li>
								<li>
									Vrhunski proizvodi od vodećeg proizvođača i
									dobavljača parking rešenja sa
									višedecenijskim iskustvom.
								</li>
								<li>
									Efikasno proširenje parking kapaciteta za
									stambene i poslovne zgrade – kao sistemi za
									parkiranje na otvorenom ili u podzemnim i
									višespratnim parkiralištima.
								</li>
								<li>
									Takođe se može naknadno ugraditi u
									zavisnosti od strukturnih uslova
									(SingleVario 2061).
								</li>
								<li>
									Stručna podrška i pomoć prilikom planiranja
									i izvođenja pojedinačnih projekata.
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								Koja je Svrha Duplex Garaža?
							</h2>
							<p className="mt-4">
								Naše dupleks garaže se uglavnom koriste tamo gde
								ograničen prostor zahteva efikasniju upotrebu
								dostupne parking površine. Sa našim modelima
								dvostrukih parkera možete ekonomično i efikasno
								udvostručiti ili utrostručiti broj parking mesta
								i imati koristi od parking površine sa smanjenom
								površinom.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								Koja je Razlika Između Duplex Garaže i Duplog
								Parkera?
							</h2>
							<p className="mt-4">
								Iako pojmovi &quot;dupleks garaža&quot;,
								&quot;dvostruki parker&quot;, &quot;podizni
								parker&quot;, &quot;sistem višestrukog
								parkiranja&quot; i &quot;dupleks parker&quot;
								zvuče kao različite tehnologije parkiranja, one
								su jednostavno različite oznake tipova koje
								koriste različiti proizvođači.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								Klaus Multiparking Nudi Sledeće Duplex Garaže
							</h2>
							<ul className="mt-4 list-inside list-disc">
								<li>
									<strong>Nezavisno parkiranje:</strong>{' '}
									Slobodnim parking platformama može se
									pristupiti nezavisno i jednostavno.
								</li>
								<li>
									<strong>Zavisno parkiranje:</strong> Donje
									parking mesto mora biti prazno da bi se
									parking platforma spustila.
								</li>
								<li>
									<strong>Dva ili tri nivoa:</strong> Do šest
									vozila može se parkirati jedno iznad drugo.
								</li>
								<li>
									<strong>Dvostruka platforma (DP):</strong>{' '}
									Pruža do dva parking mesta jedno pored
									drugog po nivou.
								</li>
								<li>
									<strong>Jednostruka platforma (SP):</strong>{' '}
									Pruža jedno parking mesto po nivou.
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								MultiBase Modeli
							</h2>
							<p className="mt-4">
								MultiBase je najnovija generacija sistema
								dupleks garaža iz KLAUS Multiparkinga.
							</p>
							<ul className="mt-4 list-inside list-disc">
								<li>
									<strong>MultiBase 2072i:</strong>{' '}
									Horizontalno parkiranje, nezavisno
									parkiranje sa jamom, pogodno za stanice za
									punjenje električnih vozila.
								</li>
								<li>
									<strong>MultiBase 2078i:</strong> Ušteda
									prostora, nezavisno parkiranje, ekološka i
									niskoodržavajuća opcija.
								</li>
								<li>
									<strong>MultiBase 2042:</strong> Posebno
									štedi prostor sa malom dubinom jame i
									visinom ugradnje, nezavisno parkiranje.
								</li>
								<li>
									<strong>MultiBase G63:</strong> Utrostručuje
									dostupan prostor za parkiranje, nezavisno
									parkiranje, pogodno za vanjsku upotrebu.
								</li>
								<li>
									<strong>MultiBase U10/U20:</strong> Skoro
									nevidljiv jer je skoro potpuno potopljen u
									zemlju, nezavisno parkiranje.
								</li>
								<li>
									<strong>SingleVario 2061:</strong>{' '}
									Udvostručuje parking mesta bez jame,
									podesivo po visini, zavisno parkiranje.
								</li>
								<li>
									<strong>Spoljašnji modeli:</strong> Robusta
									otporna tehnologija, pogodna za otvorene
									prostore.
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								Prednosti i Mane Duplex Garaže
							</h2>
							<ul className="mt-4 list-inside list-disc">
								<li>
									Udvostručuje ili utrostručuje broj parking
									mesta.
								</li>
								<li>Brže dobijanje dozvole za planiranje.</li>
								<li>
									Ušteda vremena - nema potrebe za traženjem
									parking mesta.
								</li>
								<li>
									Svi mehanički komponenti sistema su
									profesionalno testirani, sigurni i pouzdani.
								</li>
								<li>
									Povećan prihod - više parking mesta unutar
									iste površine.
								</li>
								<li>Nema zakonskih taksi za parking mesta.</li>
								<li>
									Verzija prilagođena potrebama korisnika sa
									invaliditetom.
								</li>
								<li>
									Brza i profesionalna korisnička podrška.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="font-outfit text-2xl font-bold text-accbg-accentColor">
								Procedura Instalacije Duplex Garaže
							</h2>
							<ol className="mt-4 list-inside list-decimal font-roboto">
								<li>
									Pružamo profesionalnu podršku za planiranje
									tokom faze realizacije projekta.
								</li>
								<li>Dobijate našu potvrdu porudžbine.</li>
								<li>
									Pregled planiranja i tehnička obrada
									dostupnih planova.
								</li>
								<li>
									Utvrđujemo mere i proveravamo sve dimenzije.
								</li>
								<li>
									Počinje naš proizvodni proces &quot;Made in
									Germany&quot;.
								</li>
								<li>
									Proizvodnja i sigurna dostava na lokaciju
									instalacije.
								</li>
								<li>Profesionalna instalacija.</li>
								<li>
									Sistem se može pustiti u rad po završetku
									montaže.
								</li>
							</ol>
						</section>
					</main>

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
	</div>
);

export default App;
