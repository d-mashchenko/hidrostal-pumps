const productsHeroData = {
  title: 'Hidrostal Produkte',
  subtitle:
    'Die Wirkungsgrade der Hidrostal Pumpen sind deutlich höher als jene von vergleichbaren Produkten. Die Förderkennlinien sind steil mit einer gleichmässigen Leistungsaufnahme und ermöglichen eine kosteneffiziente Anpassung des Pumpbetriebes an die individuelle Förderaufgabe, insbesondere bei Betrieb mit frequenzgesteuerter Drehzahlregulierung. Die Spezialisten von Hidrostal können aus über 500 Standardausführungen das optimale Produkt anbieten. Sollte keines davon passen, kann Hidrostal spezifische Lösungen in enger Abstimmung und Kooperation mit dem Kunden entwickeln.',
  image:
    'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_90/k-line-breit.png',
  cards: [
    {
      title: 'Die originale verstopfungsfreie Pumpe',
      description:
        'Das Pumpen von problematischen, empfindlichen Flüssigkeiten ist der Ursprung der Hidrostal Gruppe. Bis heute sind unsere Pumplösungen für unübertroffene Verstopfungsfreiheit optimiert. Dies erreichen wir durch die grössten Kugeldurchgänge auf dem Markt in Kombination mit der bekannten hydraulischen Form unserer einflügeligen Schraubenzentrifugallaufräder ohne Sattel.',
    },
    {
      title: 'Überlegene hydraulische Eigenschaften',
      description:
        'Unsere Pumpenhydraulik hat einige sehr spezifische Eigenschaften, die für viele Anwendungen unerlässlich sind. Neben den hohen Wirkungsgraden bei grossem freiem Durchgang und der schonenden Förderung (geringe Scherkräfte), ist die Förderkurve sehr stabil und steil zusammen mit einer flachen Leistungskurve, was für die Anlagensteuerung sehr wichtig ist. Nicht zuletzt macht die hervorragende NPHSr-Eigenschaft die Hidrostal-Schraubenzentrifugalpumpe zu einer unersetzlichen Komponente für viele Anwendungen.',
    },
    {
      title: 'Breite Palette an Optionen und Materialien',
      description:
        'Unsere Produkte bieten eine breite Palette von Optionen und Werkstoffen. Mit unserem hauseigenen Giesserei-Netzwerk sind wir in der Lage, eine breite Palette von Materialien in konstanter Qualität zu liefern. Zusätzlich bieten wir eine unübertroffene Vielfalt an Optionen bei Gleitringdichtungen, Schutzsensoren, Anschlusssteckern und Kabeltypen. Und das alles immer mit einem breiten Spektrum an Motorspannungen und -frequenzen sowie verschiedenen Explosionsschutznormen.',
    },
  ],
};

export const ProductsHero = () => {
  return (
    <section className="section bg-[url('/img/hidrostal-worldwide.jpeg')] bg-cover">
      <div className='default-content text-white text-center'>
        <div>
          <h2 className='title'>{productsHeroData.title}</h2>
          <h4 className='text-xl'>{productsHeroData.subtitle}</h4>
        </div>
        <img
          className='my-10'
          src={productsHeroData.image}
          alt={productsHeroData.title}
        />
        <div className='grid grid-cols-3 gap-10'>
          {productsHeroData.cards.map((card) => (
            <div className='text-start  backdrop-blur-md p-5'>
              <h3 className='text-2xl mb-10'>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
