export const languages = {
  en: 'English',
  cs: 'Česky',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Site-wide
    'site.title': 'Digital Nature',
    'site.description': 'Digital Nature Research Project',
    'site.copyright': '© 2025 Digital Forest',

    // Header
    'header.title': 'CANOPy <br> Digital Forest <br> and Psychophysical <br> Well-being',

    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.publications': 'Publications',
    'nav.team': 'Team',
    'nav.contact': 'Contact',

    // Page titles
    'page.blog.title': 'Blog',
    'page.publications.title': 'Publications',
    'page.publications.meta': 'Publications | Digital Forest',
    'page.publications.description': 'Digital forest publications',
    'page.team.title': 'Team',
    'page.team.meta': 'Team | Digital Forest',
    'page.team.description': 'Digital forest team',
    'page.about.title': 'About Digital Nature',
    'page.index.title': 'About Project',

    // Index page content
    'page.index.content': `<p>A rapidly growing body of research shows that spending time in a forest environment, also known as forest bathing or shinrin-yoku (森林浴), benefits health and well-being. Several systematic reviews based on dozens of studies have reported that forest bathing improves psychophysical stress.</p>

<p>Unfortunately, there are groups of people who are unable to visit on their own. Many people suffer from physical or cognitive disabilities limiting their free mobility and the elderly population can often feel unfit to travel far or take a walk on uneven ground. Moreover, accessing the forest can be a challenge even for physically fit people. Modern urbanization created places cut away from nature by the city sprawls from which the travel to an uncorrupted natural space can take a few hours.</p>

<p>This project investigates the potential of using virtual reality to create a forest bathing experience for people who are unable to visit on their own. It tries to best understand how digital nature works, how it differs from real nature, and how it can be used to create a satisfactory forest bathing experience.</p>`,

    // About page content
    'page.about.content': `## Our Research

Our research focuses on understanding how digital nature experiences can benefit people who are unable to access natural environments directly. Through virtual reality and other digital technologies, we aim to create immersive experiences that capture the therapeutic qualities of forest bathing.

## Why Digital Nature?

Many people face barriers to accessing natural environments:
- Physical disabilities limiting mobility
- Elderly individuals with limited travel capability
- Urban residents far from natural spaces
- Time constraints due to work or other commitments

Digital nature experiences offer a potential solution, providing accessible ways to connect with nature's restorative properties.

## Our Approach

We combine:
- Virtual reality technology
- Environmental psychology
- Nature-based therapeutic practices
- User experience design

To create meaningful digital nature experiences that support well-being and provide some of the benefits of actual forest bathing.`,
  },
  cs: {
    // Site-wide
    'site.title': 'Digitální příroda',
    'site.description': 'Výzkumný projekt Digitální příroda',
    'site.copyright': '© 2025 Digitální les',

    // Header
    'header.title': 'Vliv digitálních<br />lesů na<br />psychickou<br />pohodu',

    // Navigation
    'nav.home': 'Domů',
    'nav.blog': 'Blog',
    'nav.publications': 'Publikace',
    'nav.team': 'Tým',
    'nav.contact': 'Kontakt',

    // Page titles
    'page.blog.title': 'Blog',
    'page.publications.title': 'Publikace',
    'page.publications.meta': 'Publikace | Digitální les',
    'page.publications.description': 'Publikace projektu Digitální les',
    'page.team.title': 'Tým',
    'page.team.meta': 'Tým | Digitální les',
    'page.team.description': 'Tým projektu Digitální les',
    'page.about.title': 'O projektu Digitální příroda',
    'page.index.title': 'O projektu',

    // Index page content
    'page.index.content': `<p>Rostoucí množství výzkumů ukazuje, že pobyt v lesním prostředí, známý také jako lesní koupel nebo shinrin-yoku (森林浴), prospívá zdraví a pohodě. Několik systematických přehledů založených na desítkách studií uvádí, že lesní koupele zlepšují psychofyzický stres.</p>

<p>Bohužel existují skupiny lidí, kteří nemohou les navštívit sami. Mnoho lidí trpí fyzickým nebo kognitivním postižením, které omezuje jejich volný pohyb, a starší populace se často cítí neschopná cestovat daleko nebo chodit po nerovném terénu. Navíc přístup k lesu může být výzvou i pro fyzicky zdatné lidi. Moderní urbanizace vytvořila místa odříznutá od přírody městskou zástavbou, odkud cesta do nedotčeného přírodního prostoru může trvat několik hodin.</p>

<p>Tento projekt zkoumá potenciál využití virtuální reality k vytvoření zážitku lesní koupele pro lidi, kteří nemohou les navštívit sami. Snaží se co nejlépe porozumět tomu, jak digitální příroda funguje, jak se liší od skutečné přírody a jak ji lze využít k vytvoření uspokojivého zážitku lesní koupele.</p>`,

    // About page content
    'page.about.content': `## Náš výzkum

Náš výzkum se zaměřuje na pochopení toho, jak mohou zážitky z digitální přírody prospět lidem, kteří nemají přímý přístup k přírodnímu prostředí. Prostřednictvím virtuální reality a dalších digitálních technologií se snažíme vytvořit pohlcující zážitky, které zachycují terapeutické vlastnosti lesní koupele.

## Proč digitální příroda?

Mnoho lidí čelí bariérám v přístupu k přírodnímu prostředí:
- Fyzické postižení omezující mobilitu
- Starší osoby s omezenou schopností cestovat
- Obyvatelé měst daleko od přírodních ploch
- Časové omezení kvůli práci nebo jiným závazkům

Zážitky z digitální přírody nabízejí potenciální řešení a poskytují přístupné způsoby, jak se spojit s regeneračními vlastnostmi přírody.

## Náš přístup

Kombinujeme:
- Technologii virtuální reality
- Environmentální psychologii
- Terapeutické postupy založené na přírodě
- Design uživatelské zkušenosti

Abychom vytvořili smysluplné zážitky z digitální přírody, které podporují pohodu a poskytují některé z výhod skutečné lesní koupele.`,
  },
} as const;
