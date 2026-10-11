/* Solux IT: one HTML page, two languages. No external translation service. */
(() => {
  "use strict";
  const EN = {
  "Automatisierung & Workflows →": "Automation & workflows →",
  "Automatisierung & Workflows": "Automation & workflows",
  "Illustrativer IT-Arbeitsplatz für digitale Projekte": "Illustrative IT workspace for digital projects",
  "Weniger Routine, mehr Zeit für Ihr Geschäft: Anfragen sortieren, Daten übertragen und wiederkehrende Aufgaben verbinden.": "Less routine work, more time for your business: organise enquiries, transfer data and connect recurring tasks.",
  "Automatisierung entdecken →": "Explore automation →",
  "Apps & Onlineshops": "Apps & online shops",
  "Apps und Webanwendungen nach Angebot; kleine Shops ab 1.990 €.": "Apps and web applications quoted individually; small shops from €1,990.",
  "Ein einfacher n8n- oder Make-Workflow mit klar vereinbartem Umfang. Komplexere Abläufe erhalten ein individuelles Angebot.": "One simple n8n or Make workflow with an agreed scope. More complex processes are quoted individually.",
  "ab 290 €": "from €290",
  "pro Basis-Workflow": "per basic workflow",
  "Anfragen →": "Enquire →",
  "Automatisierung & Workflows mit n8n und Make | Solux IT Wiehl": "Automation & workflows with n8n and Make | Solux IT Wiehl",
  "Automatisierung mit n8n, Make und optionaler KI-Unterstützung: Anfragen, Daten und wiederkehrende Abläufe verbinden. Persönliche Umsetzung von Solux IT aus Wiehl.": "Automation with n8n, Make and optional AI assistance: connect enquiries, data and recurring processes. Personal implementation by Solux IT in Wiehl.",
  "LEISTUNG / 07": "SERVICE / 07",
  "Wiederkehrende Aufgaben dürfen einfacher werden. Ich verbinde Ihre bestehenden Werkzeuge mit n8n oder Make – und ergänze KI dort, wo sie Ihnen sinnvoll Arbeit abnimmt.": "Make recurring tasks easier. I connect your existing tools with n8n or Make and add AI where it can usefully reduce your workload.",
  "Workflow anfragen": "Enquire about a workflow",
  "WENIGER HANDARBEIT": "LESS MANUAL WORK",
  "Ihre Werkzeuge.": "Your tools.",
  "Ein gemeinsamer Ablauf.": "One connected process.",
  "Sie kopieren dieselben Daten von einer Anwendung in die nächste oder sortieren jede Anfrage von Hand? Wir suchen einen überschaubaren Ablauf, der sich zuverlässig vereinfachen lässt. Zuerst mit klaren Regeln, bei Bedarf mit KI-Unterstützung.": "Do you copy the same data between applications or sort every enquiry by hand? We identify a manageable process that can be simplified reliably. Clear rules come first, with AI assistance if needed.",
  "Anfragen organisieren": "Organise enquiries",
  "Formulare und E-Mails übernehmen, nach Thema zuordnen und in einer Liste oder einem unterstützten CRM sammeln.": "Capture forms and emails, categorise by topic and collect them in a list or supported CRM.",
  "Daten zwischen Diensten übertragen": "Transfer data between services",
  "Informationen aus vorhandenen Formularen und Anwendungen weitergeben, ohne sie jedes Mal erneut einzugeben.": "Pass information from existing forms and applications without entering it again each time.",
  "Benachrichtigungen & Erinnerungen": "Notifications & reminders",
  "Bei einem definierten Ereignis eine Nachricht oder interne Aufgabe vorbereiten – mit gemeinsam festgelegten Regeln.": "Prepare a notification or internal task when a defined event occurs, using rules agreed together.",
  "KI sinnvoll einbinden": "Use AI where it helps",
  "Mit OpenAI oder Claude Texte zusammenfassen, Kategorien vorschlagen oder Antwortentwürfe erstellen. Unklare Ergebnisse gehen zur Prüfung an Sie.": "Use OpenAI or Claude to summarise text, suggest categories or draft replies. Uncertain results are sent to you for review.",
  "Die Beispiele zeigen mögliche Anwendungen. Ob Ihre Dienste angebunden werden können, prüfen wir vor dem Angebot anhand der verfügbaren Schnittstellen und Zugriffsrechte.": "These are examples of possible applications. Before quoting, we check whether your services can be connected using their available interfaces and access permissions.",
  "VON DER ROUTINE ZUM WORKFLOW": "FROM ROUTINE TO WORKFLOW",
  "Klein starten.": "Start small.",
  "Sauber verbinden.": "Connect carefully.",
  "SCHRITT": "STEP",
  "Ablauf & Zugänge klären": "Clarify the process and access",
  "Was startet den Ablauf, welche Daten werden benötigt und welches Ergebnis soll entstehen? Wir prüfen Dienste, Berechtigungen und Kosten.": "What triggers the workflow, what data is needed and what should happen? We review services, permissions and costs.",
  "Aufbauen & gemeinsam testen": "Build and test together",
  "Wir setzen den vereinbarten Workflow um und prüfen typische Eingaben sowie Fehlerfälle. Freigaben und der Umgang mit doppelten Ereignissen werden abgestimmt.": "We implement the agreed workflow and test typical inputs and error cases. Approval steps and handling of duplicate events are agreed together.",
  "Übergeben & Betrieb abstimmen": "Hand over and agree operation",
  "Sie erhalten eine kurze Erklärung zum Ablauf und zu den benötigten Diensten. Laufende Betreuung, Änderungen und weitere Workflows werden separat vereinbart.": "You receive a brief explanation of the workflow and required services. Ongoing support, changes and additional workflows are agreed separately.",
  "BEISPIEL: KUNDENANFRAGE": "EXAMPLE: CUSTOMER ENQUIRY",
  "Von der Nachricht": "From a message",
  "zum nächsten Schritt.": "to the next step.",
  "Anfrage kommt an": "An enquiry arrives",
  "Ein Formular oder eine E-Mail startet den Ablauf.": "A form or email triggers the workflow.",
  "Regeln ordnen zu": "Rules categorise it",
  "Bekannte Themen werden zugeordnet; KI kann bei freiem Text unterstützen.": "Known topics are categorised; AI can assist with free text.",
  "Sie behalten die Freigabe": "You keep approval control",
  "Eine Aufgabe oder ein Antwortentwurf wird vorbereitet. Unklare Fälle prüfen Sie selbst.": "A task or draft reply is prepared. You review uncertain cases yourself.",
  "Beispielhafter Ablauf, keine Zusage für ein bestimmtes System. Automatischer Versand, KI-Auswertung und weitere Schritte werden bei Bedarf gesondert angeboten.": "Illustrative process, not a commitment for a specific system. Automatic sending, AI analysis and additional steps are quoted separately where needed.",
  "TRANSPARENTE PREISE": "TRANSPARENT PRICES",
  "Einfacher Workflow · ab 290 €": "Simple workflow · from €290",
  "Ein Workflow zwischen zwei bestehenden Diensten: ein Auslöser, bis zu drei Verarbeitungsschritte und ein gemeinsam geprüfter Testfall. Sie stellen die benötigten Zugänge bereit. Komplexe Logik, individuelle Schnittstellen und zusätzliche Workflows nach Angebot.": "One workflow between two existing services: one trigger, up to three processing steps and one jointly reviewed test case. You provide the necessary account access. Complex logic, custom integrations and additional workflows are quoted separately.",
  "Nicht enthalten sind Hosting, n8n- oder Make-Abos, KI-/API-Nutzung und laufende Betreuung. Benötigte Dienste und mögliche laufende Kosten stimmen wir vor dem Start ab.": "Hosting, n8n or Make subscriptions, AI/API usage and ongoing support are not included. Required services and potential recurring costs are agreed before starting.",
  "Endpreise gemäß § 19 UStG, ohne Ausweis von Umsatzsteuer.": "Final prices under Section 19 of the German VAT Act, no VAT shown.",
  "Workflow anfragen →": "Enquire about a workflow →",
  "GUT ZU WISSEN": "GOOD TO KNOW",
  "Häufige Fragen.": "Common questions.",
  "Klare Antworten.": "Clear answers.",
  "Welchen Arbeitsschritt würden Sie gerne vereinfachen? Beschreiben Sie mir Ihren Ablauf.": "Which task would you like to simplify? Tell me about your process.",
  "Ablauf besprechen →": "Discuss your process →",
  "Was kann automatisiert werden?": "What can be automated?",
  "Wiederkehrende Aufgaben mit klaren Eingaben und Regeln eignen sich besonders gut. Ob E-Mail, Formular, Tabelle oder CRM: Entscheidend sind die verfügbaren Schnittstellen. Wir prüfen den konkreten Ablauf vorab.": "Recurring tasks with clear inputs and rules are particularly suitable. Whether email, forms, spreadsheets or a CRM, available interfaces are key. We review the specific process in advance.",
  "Brauche ich n8n oder Make bereits?": "Do I need n8n or Make already?",
  "Nein. Wir besprechen, welcher Dienst und welches Betriebsmodell passen. Konten, Abos oder ein Hosting werden nach Ihrer Zustimmung eingerichtet beziehungsweise von Ihnen bereitgestellt.": "No. We discuss a suitable service and operating model. Accounts, subscriptions or hosting are set up with your approval or provided by you.",
  "Sind KI-Agenten und automatische Antworten möglich?": "Are AI agents and automatic replies possible?",
  "Je nach Anforderungen und verfügbaren Diensten können KI-Schritte ergänzt werden. Zum Einstieg empfehle ich Entwürfe mit menschlicher Freigabe. Automatisches Antworten benötigt zusätzlich Regeln gegen doppelte Antworten, Spam und Antwortschleifen.": "AI steps can be added depending on requirements and available services. I recommend starting with drafts for human approval. Automatic replies also require rules to prevent duplicate replies, spam and reply loops.",
  "Was passiert bei Fehlern?": "What happens if a workflow fails?",
  "Wir legen vorab fest, wie ein Fehler erkannt und angezeigt wird. Bei wichtigen Schritten besprechen wir eine manuelle Alternative. Dauerhafte Überwachung und laufende Fehlerbehebung sind nur enthalten, wenn sie ausdrücklich vereinbart wurden.": "We agree in advance how errors are detected and reported. For important steps, we discuss a manual alternative. Continuous monitoring and ongoing troubleshooting are included only if expressly agreed.",
  "Wie werden Zugänge und Kundendaten behandelt?": "How are account access and customer data handled?",
  "Wir prüfen, welche Daten und Berechtigungen der Ablauf benötigt. Ob personenbezogene Daten an KI- oder Cloud-Dienste übertragen werden dürfen und welche Vereinbarungen erforderlich sind, klären wir vor dem Einsatz. Es werden keine vollständigen Postfächer pauschal an eine KI übertragen.": "We review the data and permissions needed by the workflow. Before use, we clarify whether personal data may be sent to AI or cloud services and which agreements are required. Entire inboxes are not automatically passed to AI.",
  "Was kostet die laufende Nutzung?": "What does ongoing operation cost?",
  "Das hängt von Plattform, Ausführungen, Hosting und möglicher KI-Nutzung ab. Diese Kosten sind nicht im Einstiegspreis enthalten. Zusätzliche Pflege und Änderungen werden separat vereinbart.": "This depends on the platform, number of executions, hosting and any AI usage. These costs are not included in the entry price. Additional maintenance and changes are agreed separately.",
  "Welche Aufgabe wiederholt sich, welche Dienste nutzen Sie und was soll am Ende passieren? Beschreiben Sie kurz Ihren Ablauf.": "Which task repeats, which services do you use and what should happen at the end? Briefly describe your process.",
  "Welche Aufgabe möchten Sie automatisieren? Welche Dienste nutzen Sie?": "Which task would you like to automate? Which services do you use?",
  "Wiederkehrende Aufgaben vereinfachen?": "Want to simplify recurring tasks?",
  "Unternehmenswebsite bis zu fünf Seiten ab 990 €. Apps und Webanwendungen nach individuellem Angebot. Basisumfang und laufende Kosten finden Sie in der Preisübersicht. Automatisierung ist eine eigenständige Leistung.": "Business websites with up to five pages from €990. Apps and web applications quoted individually. See the price overview for basic scope and recurring costs. Automation is a separate service.",

  "Fernwartung": "Remote support",
  "Hilfe bei Software, E-Mail und Einstellungen. Abrechnung in 30-Minuten-Einheiten.": "Help with software, email and settings. Billed in 30-minute units.",
  "je 30 Minuten": "per 30 minutes",
  "Anfragen →": "Enquire →",
  "Vor Ort & Reparatur": "On-site support & repairs",
  "Reparatur, Einrichtung und WLAN-Hilfe. Abrechnung im 15-Minuten-Takt, zuzüglich vereinbarter Anfahrt.": "Repairs, setup and Wi-Fi support. Billed in 15-minute increments, plus agreed travel costs.",
  "pro Stunde": "per hour",
  "ab 590 €": "from €590",
  "Websites": "Websites",
  "Für eine kompakte Website mit einer Seite. Weitere Pakete und Leistungsgrenzen finden Sie unten.": "For a compact single-page website. More packages and scope details are listed below.",
  "vereinbarter Projektumfang": "agreed project scope",
  "Individuell": "By agreement",
  "Apps, Shops & Automatisierung": "Apps, shops & automation",
  "Apps und Webanwendungen nach Angebot; kleine Shops ab 1.990 €, einfache Workflows ab 290 €.": "Apps and web applications quoted individually; small shops from €1,990, simple workflows from €290.",
  "nach Anforderung": "based on requirements",
  "PREISE & LEISTUNGSUMFANG": "PRICES & SCOPE",
  "Klarheit, bevor": "Clarity before",
  "es losgeht.": "we get started.",
  "Sie wissen vorher, womit Sie rechnen können. Aufwand, Leistungsumfang und mögliche Zusatzkosten besprechen wir vor dem Start. Eine Anfrage ist noch kein Auftrag.": "Know what to expect in advance. We agree the effort, scope and any additional costs before starting. An enquiry does not place an order.",
  "IT-Service: Leistungen & Anfahrt": "IT support: services & travel",
  "Werkstattdiagnose · 29 €": "Workshop diagnosis · €29",
  "Erste Fehlerprüfung nach Absprache. Bei beauftragter Reparatur wird die Diagnosepauschale angerechnet. Sie fällt auch an, wenn eine Reparatur nicht möglich oder nicht wirtschaftlich ist; weitergehende Prüfungen stimmen wir vorher ab.": "Initial fault assessment by agreement. The diagnosis fee is credited if you commission the repair. It also applies if repair is impossible or uneconomical; further testing is agreed in advance.",
  "WLAN & Router · 59 € / Stunde": "Wi-Fi & router · €59 / hour",
  "Einrichtung und Fehlersuche im 15-Minuten-Takt. Router, Repeater und weitere Hardware sind nicht enthalten.": "Setup and troubleshooting in 15-minute increments. Routers, repeaters and other hardware are not included.",
  "Neugeräte einrichten · ab 89 €": "New device setup · from €89",
  "Basiseinrichtung eines funktionsfähigen PCs oder Laptops: vorhandenes Betriebssystem einrichten, Updates und bis zu drei Standardprogramme installieren. Datenumzug, Neuinstallation, Lizenzen und zusätzliche Geräte werden separat angeboten.": "Basic setup of one working PC or laptop: configure the existing operating system, install updates and up to three standard applications. Data migration, operating system reinstallation, licences and additional devices are quoted separately.",
  "Datenumzug · nach Prüfung": "Data migration · after assessment",
  "Der Preis richtet sich nach Datenmenge, Zustand der Geräte und gewünschtem Umfang. Sie erhalten vor dem Start eine Einschätzung. Keine Datenrettung oder Datensicherung als eigenständige Leistung.": "The price depends on data volume, device condition and the agreed scope. You receive an estimate before work starts. Data recovery and backup are not offered as standalone services.",
  "IT-Kaufberatung · 29 € / 30 Minuten": "IT purchasing advice · €29 / 30 minutes",
  "Beratung zu passenden Geräten und sinnvollen Aufrüstungen. Abrechnung in 30-Minuten-Einheiten.": "Advice on suitable devices and worthwhile upgrades. Billed in 30-minute units.",
  "Anfahrt · Wiehl 10 €": "Travel · Wiehl €10",
  "Pauschale pro vereinbartem Vor-Ort-Termin innerhalb von Wiehl. Außerhalb von Wiehl stimmen wir die Anfahrt abhängig von der Entfernung vorher ab. Ersatzteile, Softwarelizenzen und zusätzliche Arbeiten werden gesondert vereinbart.": "Flat travel fee per agreed on-site appointment within Wiehl. Outside Wiehl, travel costs are agreed in advance based on distance. Replacement parts, software licences and additional work are agreed separately.",
  "Digitale Projekte: Pakete & Grenzen": "Digital projects: packages & scope",
  "Onepager · ab 590 €": "One-page website · from €590",
  "Eine responsive Seite mit bis zu fünf Inhaltsabschnitten, einem Gestaltungsentwurf und zwei gebündelten Korrekturrunden. Sie liefern fertige Texte, Bilder und rechtliche Inhalte. Keine individuellen Schnittstellen oder Anwendungsfunktionen.": "One responsive page with up to five content sections, one design proposal and two consolidated revision rounds. You provide final copy, images and legal content. Custom integrations and application features are not included.",
  "Unternehmenswebsite · ab 990 €": "Business website · from €990",
  "Bis zu fünf Seiten auf einer gemeinsamen Gestaltung, responsive Umsetzung, ein Entwurf und zwei gebündelte Korrekturrunden. Inhalte werden von Ihnen bereitgestellt; zusätzliche Seiten und Funktionen werden separat vereinbart.": "Up to five pages using a shared design, responsive implementation, one proposal and two consolidated revision rounds. You provide the content; extra pages and features are agreed separately.",
  "Kleiner Onlineshop · ab 1.990 €": "Small online shop · from €1,990",
  "Einrichtung auf einer bestehenden Shop-Plattform mit Standard-Design, bis zu fünf gelieferten Produkten und jeweils einer unterstützten Zahlungs- und Versandoption. Zwei gebündelte Korrekturrunden. Keine individuelle Warenwirtschaft oder Sonderentwicklung.": "Setup on an existing shop platform using a standard theme, up to five supplied products and one supported payment and shipping option each. Two consolidated revision rounds. Custom inventory systems and bespoke development are not included.",
  "n8n & Make · ab 290 €": "n8n & Make · from €290",
  "Ein einfacher Workflow zwischen zwei bestehenden Diensten: ein Auslöser, bis zu drei Verarbeitungsschritte und ein gemeinsam geprüfter Testfall. Zugänge werden von Ihnen bereitgestellt; komplexe Logik und individuelle Schnittstellen nach Angebot.": "One simple workflow between two existing services: one trigger, up to three processing steps and one jointly reviewed test case. You provide account access; complex logic and custom integrations are quoted separately.",
  "Apps & Webanwendungen · individuelles Angebot": "Apps & web applications · individual quote",
  "Zuerst klären wir Funktionen, Nutzer, Plattformen und Datenverarbeitung. Danach erhalten Sie ein Angebot mit definiertem Umfang und Meilensteinen.": "We first clarify features, users, platforms and data processing. You then receive a quote with a defined scope and milestones.",
  "Projektpreise gelten für den beschriebenen Basisumfang. Hosting, Domains, laufende Pflege, Plattformgebühren, Erweiterungen, API-Nutzung und App-Store-Gebühren sind nicht enthalten. Zusätzliche Leistungen werden vorab angeboten.": "Project prices cover the basic scope described above. Hosting, domains, ongoing maintenance, platform fees, extensions, API usage and app store fees are not included. Additional work is quoted in advance.",
  "Alle genannten Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.": "All stated prices are final prices. No VAT is charged or shown under Section 19 of the German VAT Act.",
  "Preise": "Prices",
  "Unverbindlich": "No obligation",
  "Automatisierung mit n8n & Make": "Automation with n8n & Make",
  "Fernwartung kostet 29 € je 30 Minuten, Vor-Ort-Hilfe und Reparaturen 59 € pro Stunde im 15-Minuten-Takt. Anfahrt, Material und zusätzliche Leistungen besprechen wir vorher. Bei Projekten legen wir Umfang und Preis im Angebot fest.": "Remote support costs €29 per 30 minutes; on-site support and repairs cost €59 per hour, billed in 15-minute increments. Travel, materials and additional work are agreed in advance. Project scope and pricing are defined in the quote.",
  "TRANSPARENTE PREISE": "TRANSPARENT PRICES",
  "Reparaturen · 59 € / Stunde": "Repairs · €59 / hour",
  "Abrechnung im 15-Minuten-Takt. Werkstattdiagnose 29 €, bei beauftragter Reparatur angerechnet. Anfahrt und Ersatzteile nach vorheriger Absprache.": "Billed in 15-minute increments. Workshop diagnosis €29, credited if you commission the repair. Travel and replacement parts agreed in advance.",
  "Endpreise gemäß § 19 UStG, ohne Ausweis von Umsatzsteuer.": "Final prices under Section 19 of the German VAT Act, no VAT shown.",
  "Preise & Leistungsumfang →": "Prices & scope →",
  "Abrechnung im 15-Minuten-Takt. Anfahrt in Wiehl 10 € pro Termin; weitere Strecken und benötigte Hardware nach Absprache.": "Billed in 15-minute increments. Travel within Wiehl €10 per appointment; longer distances and hardware agreed separately.",
  "Fernwartung · 29 € / 30 Minuten": "Remote support · €29 / 30 minutes",
  "Abrechnung in 30-Minuten-Einheiten ohne Anfahrtskosten. Umfang und voraussichtlichen Aufwand klären wir vor der Verbindung.": "Billed in 30-minute units, with no travel costs. Scope and estimated effort are agreed before connecting.",
  "Basiseinrichtung eines PCs oder Laptops. Datenumzug wird nach Prüfung separat angeboten. Den genauen Basisumfang finden Sie in der Preisübersicht.": "Basic setup of one PC or laptop. Data migration is quoted separately after assessment. See the price overview for the exact basic scope.",
  "Unabhängige Empfehlungen für Ihren Bedarf. Abrechnung in 30-Minuten-Einheiten; Anschaffung und Einrichtung sind nicht enthalten.": "Independent recommendations for your needs. Billed in 30-minute units; purchasing and setup are not included.",
  "Websites ab 590 € · Shops ab 1.990 €": "Websites from €590 · shops from €1,990",
  "Unternehmenswebsite bis zu fünf Seiten ab 990 €, einfacher n8n- oder Make-Workflow ab 290 €. Apps und Webanwendungen nach individuellem Angebot. Basisumfang und laufende Kosten finden Sie in der Preisübersicht.": "Business websites with up to five pages from €990, simple n8n or Make workflows from €290. Apps and web applications quoted individually. See the price overview for basic scope and recurring costs.",

  "Seite nicht gefunden | Solux IT": "Page not found | Solux IT",
  "FEHLER 404": "ERROR 404",
  "Hier geht es nicht weiter.": "This page could not be found.",
  "Die angeforderte Seite wurde nicht gefunden. Auf der Startseite finden Sie alle Leistungen und den direkten Kontakt.": "The requested page could not be found. Visit our home page to explore our services and get in touch.",
  "Zur Startseite →": "Back to home →",
  "Datenschutzerklärung | Solux IT": "Privacy Policy | Solux IT",
  "Zum Inhalt springen": "Skip to content",
  "Leistungen": "Services",
  "So arbeiten wir": "How we work",
  "Kontakt": "Contact",
  "IT-Hilfe anfragen": "Request IT support",
  "Zurück zur Startseite": "Back to home",
  "RECHTLICHE ANGABEN": "LEGAL INFORMATION",
  "Datenschutz": "Privacy Policy",
  "Stand: Oktober 2026": "Last updated: October 2026",
  "1. Verantwortliche Stelle": "1. Data controller",
  "Inhaber: Marcel Bux": "Owner: Marcel Bux",
  "Deutschland": "Germany",
  "E-Mail:": "Email:",
  "2. Allgemeine Hinweise": "2. General information",
  "Wir behandeln personenbezogene Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften. Personenbezogene Daten sind Angaben, mit denen Sie persönlich identifiziert werden können.": "We treat personal data as confidential and process it in accordance with applicable data protection law. Personal data is information that can be used to identify you personally.",
  "3. Hosting und Server-Logfiles": "3. Hosting and server log files",
  "Diese Website wird über Cloudflare Workers von Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA, bereitgestellt. Beim Aufruf können technisch notwendige Zugriffsdaten wie IP-Adresse, Zeitpunkt, angeforderte Seite und Browserinformationen verarbeitet werden. Die Verarbeitung dient der sicheren und stabilen Bereitstellung des Angebots auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.": "This website is hosted using Cloudflare Workers, provided by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. When you access the website, technically necessary access data such as your IP address, the time of access, the requested page and browser information may be processed. This processing serves to provide the website securely and reliably on the basis of Article 6(1)(f) GDPR.",
  "4. Kontaktformular": "4. Contact form",
  "Wenn Sie das Formular nutzen, verarbeiten wir Name, Kontaktdaten, Anliegen und Nachricht zur Bearbeitung Ihrer Anfrage. Für die Übermittlung nutzen wir Web3Forms; die Angaben werden an die im Impressum genannte E-Mail-Adresse weitergeleitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen Anfragen, sonst Art. 6 Abs. 1 lit. f DSGVO oder Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.": "When you use the form, we process your name, contact details, enquiry subject and message to handle your request. We use Web3Forms to transmit this information to the email address stated in our legal notice. The legal basis is Article 6(1)(b) GDPR for pre-contractual enquiries, otherwise Article 6(1)(f) GDPR or your consent under Article 6(1)(a) GDPR.",
  "5. Schriftarten und Animationen": "5. Fonts and animations",
  "Die Website verwendet lokale Systemschriften. Die Animationen werden durch lokal eingebundenen Programmcode ausgeführt; dabei werden über diese Funktionen keine Daten an einen zusätzlichen Dienst gesendet.": "The website uses local system fonts. Animations are implemented using locally included code; these features do not send data to any additional service.",
  "6. Ihre Rechte": "6. Your rights",
  "Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an": "Under the GDPR, you have rights of access, rectification, erasure, restriction of processing, data portability and objection. To exercise these rights, please contact",
  ". Ihnen steht außerdem ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.": ". You also have the right to lodge a complaint with a data protection supervisory authority.",
  "Persönliche IT-Hilfe für Betriebe, Selbstständige und Privatanwender.": "Personal IT support for businesses, freelancers and home users.",
  "Entdecken": "Explore",
  "Ablauf": "Our process",
  "Häufige Fragen": "Frequently asked questions",
  "PC- & Laptop-Reparatur": "PC & laptop repairs",
  "WLAN & Netzwerk": "Wi-Fi & networks",
  "Fernwartung & IT-Hilfe": "Remote support & IT help",
  "Websites, Apps & Onlineshops": "Websites, apps & online shops",
  "E-Mail schreiben": "Send an email",
  "Impressum": "Legal Notice",
  "Bildmotive sind illustrativ.": "Images are illustrative.",
  "Impressum | Solux IT": "Legal Notice | Solux IT",
  "Angaben gemäß § 5 DDG": "Information pursuant to section 5 of the German Digital Services Act (DDG)",
  "Umsatzsteuer": "VAT",
  "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen (Kleinunternehmerregelung).": "No VAT is charged or shown pursuant to section 19 of the German VAT Act (UStG), under the small business exemption.",
  "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV": "Responsible for content pursuant to section 18(2) of the German State Media Treaty (MStV)",
  "Verbraucherstreitbeilegung": "Consumer dispute resolution",
  "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.": "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
  "Solux IT Wiehl | PC-Reparatur, WLAN & IT-Service": "Solux IT Wiehl | PC repairs, Wi-Fi & IT support",
  "IT-SERVICE IN WIEHL · VOR ORT & REMOTE": "IT SUPPORT IN WIEHL · ON-SITE & REMOTE",
  "IT, die wieder": "IT that",
  "funktioniert": "works again",
  "Rechner streikt? WLAN fällt aus? Solux IT löst Technikprobleme verständlich, persönlich und ohne unnötige Umwege. Auch Websites, Webanwendungen, Apps und Onlineshops entstehen passend zu Ihrem Vorhaben.": "Computer acting up? Wi-Fi dropping out? Solux IT solves technical problems with clear advice, personal support and no unnecessary detours. We also create websites, web applications, apps and online shops tailored to your project.",
  "Leistungen ansehen": "Explore our services",
  "Persönlicher Kontakt": "Personal contact",
  "Vor Ort & Fernwartung": "On-site & remote support",
  "WEITER ENTDECKEN": "EXPLORE MORE",
  "Persönlich erreichbar": "Directly available",
  "Direkter Kontakt statt Hotline.": "Direct contact instead of a call centre.",
  "Verständlich erklärt": "Clearly explained",
  "Klare Worte für klare Entscheidungen.": "Clear advice for informed decisions.",
  "Passend gelöst": "The right solution",
  "Reparatur, Einrichtung oder Beratung.": "Repairs, setup or advice.",
  "WAS WIR FÜR SIE TUN": "WHAT WE CAN DO FOR YOU",
  "IT-Hilfe für alles,": "IT support for everything",
  "was laufen muss.": "you need to keep running.",
  "Von der ersten Fehlermeldung bis zum verlässlichen Arbeitsplatz: Wählen Sie den Bereich, der zu Ihrem Anliegen passt.": "From the first error message to a reliable workspace: choose the service that fits your needs.",
  "LEISTUNGEN / 06": "SERVICES / 06",
  "Wenn der Rechner streikt, beginnt Hilfe mit einer klaren Diagnose.": "When your computer stops working, support starts with a clear diagnosis.",
  "Leistung ansehen": "View service",
  "Stabile Verbindung für Zuhause, Büro und Homeoffice.": "Reliable connections for your home, office and remote work.",
  "Softwareprobleme klären, ohne auf einen Vor-Ort-Termin zu warten.": "Resolve software problems without waiting for an on-site appointment.",
  "Neugeräte & Datenumzug": "New devices & data migration",
  "Vom alten Rechner zum einsatzbereiten neuen Arbeitsplatz.": "From your old computer to a new workspace that is ready to use.",
  "IT-Kaufberatung": "IT purchasing advice",
  "Technik auswählen, die zu Ihrer tatsächlichen Nutzung passt.": "Choose technology that fits how you actually use it.",
  "Individuelle Websites, Webanwendungen, Apps und Onlineshops – passend zu Ihrem Vorhaben.": "Custom websites, web applications, apps and online shops tailored to your project.",
  "UNSER ANSPRUCH": "OUR APPROACH",
  "Technik sollte Ihnen helfen.": "Technology should help you.",
  "Nicht im Weg stehen.": "Not get in your way.",
  "Deshalb beginnt jede Lösung mit Zuhören. Wir erklären, was möglich ist, welche Schritte sinnvoll sind und welcher Aufwand entsteht.": "That is why every solution starts with listening. We explain what is possible, which steps make sense and what work is involved.",
  "Anliegen besprechen": "Discuss your needs",
  "SO EINFACH GEHT'S": "HOW IT WORKS",
  "Von der Frage": "From your question",
  "zur Lösung.": "to a solution.",
  "Ein klarer Ablauf hilft Ihnen, schnell zum richtigen nächsten Schritt zu kommen.": "A clear process helps you find the right next step quickly.",
  "01 / ANFRAGEN": "01 / GET IN TOUCH",
  "Problem schildern": "Describe the problem",
  "Schreiben Sie, was nicht funktioniert und wie wir Sie erreichen können.": "Tell us what is not working and how we can reach you.",
  "02 / EINORDNEN": "02 / ASSESS",
  "Weg abstimmen": "Agree on the next step",
  "Wir klären, ob Fernwartung, ein Termin oder eine nähere Prüfung sinnvoll ist.": "We establish whether remote support, an appointment or a closer inspection is the best next step.",
  "03 / LÖSEN": "03 / RESOLVE",
  "Wieder arbeiten": "Get back to work",
  "Wir setzen die vereinbarte Lösung um und erklären Ihnen das Ergebnis.": "We implement the agreed solution and explain the result.",
  "TRANSPARENZ": "TRANSPARENCY",
  "Klarheit, bevor": "Clarity before",
  "es losgeht.": "we get started.",
  "Fernwartung, Vor-Ort-Hilfe und größere Projekte haben unterschiedliche Anforderungen. Den passenden Aufwand und mögliche Anfahrt besprechen wir vorab mit Ihnen.": "Remote support, on-site assistance and larger projects have different requirements. We discuss the work involved and any travel costs with you in advance.",
  "Aufwand anfragen": "Ask about the scope",
  "Fernwartung": "Remote support",
  "Hilfe bei Software, E-Mail, Updates und Einstellungen.": "Help with software, email, updates and settings.",
  "Vor Ort & Werkstatt": "On-site & workshop",
  "Diagnose, Hardware, Reparaturen und Einrichtung.": "Diagnostics, hardware, repairs and setup.",
  "Individuelle Lösungen": "Custom solutions",
  "Netzwerk und Gerätemigration.": "Networks and device migration.",
  "Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.": "No VAT is shown pursuant to section 19 of the German VAT Act (UStG).",
  "GUT ZU WISSEN": "GOOD TO KNOW",
  "Häufige Fragen.": "Common questions.",
  "Klare Antworten.": "Clear answers.",
  "Falls Ihre Frage nicht dabei ist, schreiben Sie uns einfach.": "If your question is not listed, just get in touch.",
  "Frage stellen": "Ask a question",
  "Wie schnell bekomme ich Unterstützung?": "How soon can I get support?",
  "Bei akuten Störungen ist Fernwartung oft kurzfristig möglich. Vor-Ort-Termine stimmen wir individuell ab.": "Remote support can often be arranged at short notice for urgent problems. On-site appointments are agreed individually.",
  "Kommen Sie zu mir oder kann ich ein Gerät vorbeibringen?": "Do you visit me, or can I drop off a device?",
  "Beides ist nach Absprache möglich: Hilfe vor Ort, Fernwartung oder die Abgabe eines Geräts für zeitintensivere Reparaturen.": "Both can be arranged: on-site assistance, remote support or dropping off a device for repairs that take longer.",
  "Was passiert, wenn eine Reparatur nicht sinnvoll ist?": "What happens if a repair is not worthwhile?",
  "Dann besprechen wir den Diagnoseaufwand und eine wirtschaftlich passende Alternative, bevor weitere Arbeiten erfolgen.": "We discuss the diagnostic work and a cost-effective alternative before carrying out any further work.",
  "Wie werden Kosten berechnet?": "How are costs calculated?",
  "Aufwand und mögliche Anfahrt werden vorab besprochen. Für größere Vorhaben erhalten Sie eine individuelle Einschätzung.": "The work involved and any travel costs are discussed in advance. For larger projects, you receive an individual assessment.",
  "KONTAKT": "CONTACT",
  "Ein Problem weniger.": "One less problem.",
  "Einfach anfragen.": "Just get in touch.",
  "Beschreiben Sie kurz, was nicht funktioniert. Wir melden uns mit einer ersten Einschätzung zum nächsten Schritt.": "Briefly describe what is not working. We will get back to you with an initial assessment of the next step.",
  "Lieber direkt per E-Mail?": "Prefer to email us directly?",
  "Ihre Anfrage": "Your enquiry",
  "Ihr Name": "Your name",
  "Telefon oder E-Mail": "Phone or email",
  "Worum geht es?": "What can we help with?",
  "PC / Laptop": "PC / laptop",
  "Beratung & Sonstiges": "Advice & other enquiries",
  "Beschreiben Sie Ihr Anliegen": "Describe your enquiry",
  "Ich habe die": "I have read the",
  "Datenschutzerklärung": "privacy policy",
  "gelesen und stimme der Kontaktaufnahme zu.": "and agree to being contacted.",
  "Anfrage absenden": "Send enquiry",
  "PC- & Laptop-Reparatur in Wiehl | Solux IT": "PC & laptop repairs in Wiehl | Solux IT",
  "Alle Leistungen": "All services",
  "LEISTUNG / 01": "SERVICE / 01",
  "LEISTUNG / 02": "SERVICE / 02",
  "LEISTUNG / 03": "SERVICE / 03",
  "Fehlersuche bei Startproblemen und Abstürzen, Austausch defekter Komponenten, Reinigung und sinnvolle SSD-Upgrades.": "Troubleshooting startup problems and crashes, replacing faulty components, cleaning and worthwhile SSD upgrades.",
  "Hilfe anfragen": "Request support",
  "WORUM ES GEHT": "WHAT WE DO",
  "Eine Lösung, die": "A solution that",
  "zu Ihnen passt.": "works for you.",
  "Ein langsamer oder ausgefallener Rechner muss nicht sofort ersetzt werden. Solux IT prüft die Ursache, erklärt die Möglichkeiten und bespricht mit Ihnen, ob Reparatur, Upgrade oder ein neues Gerät sinnvoll ist.": "A slow or faulty computer does not always need replacing. Solux IT checks the cause, explains your options and helps you decide whether a repair, an upgrade or a new device makes sense.",
  "Startprobleme & Abstürze prüfen": "Investigate startup problems & crashes",
  "RAM, Akku & Laufwerk austauschen": "Replace RAM, batteries & drives",
  "Geräte reinigen & beschleunigen": "Clean devices & improve performance",
  "DER NÄCHSTE SCHRITT": "THE NEXT STEP",
  "So gehen wir": "How we",
  "vor.": "proceed.",
  "01 / SCHRITT": "01 / STEP",
  "02 / SCHRITT": "02 / STEP",
  "03 / SCHRITT": "03 / STEP",
  "Fehlerbild und Gerät beschreiben": "Describe the fault and your device",
  "Ursache eingrenzen und Aufwand besprechen": "Identify the cause and discuss the work involved",
  "Reparatur oder passende Alternative wählen": "Choose a repair or a suitable alternative",
  "Mein PC startet nicht. Was soll ich angeben?": "My PC will not start. What should I tell you?",
  "Beschreiben Sie, ob der Bildschirm schwarz bleibt, eine Fehlermeldung erscheint oder das Gerät nach dem Start wieder ausgeht. Nennen Sie möglichst auch Hersteller und Modell.": "Tell us whether the screen stays black, an error message appears or the device switches off again after starting. Please also include the manufacturer and model if possible.",
  "Lohnt sich ein SSD-Upgrade?": "Is an SSD upgrade worthwhile?",
  "Das hängt von Zustand, Alter und Nutzung des Geräts ab. Vor einem Austausch prüfen wir, ob das Upgrade wirtschaftlich sinnvoll ist.": "That depends on the condition, age and use of the device. Before replacing a drive, we check whether the upgrade is cost-effective.",
  "AUCH INTERESSANT": "YOU MAY ALSO BE INTERESTED IN",
  "Weitere": "More",
  "Leistungen.": "services.",
  "WLAN & Netzwerk in Wiehl | Solux IT": "Wi-Fi & networks in Wiehl | Solux IT",
  "WLAN optimieren, Router und Mesh einrichten sowie Netzwerkgeräte und sichere Verbindungen konfigurieren.": "Optimise Wi-Fi, set up routers and mesh systems, and configure network devices and secure connections.",
  "Ruckelnde Videokonferenzen und Funklöcher haben verschiedene Ursachen. Wir betrachten Router, Empfang, Endgeräte und die vorhandene Verkabelung, bevor wir eine Lösung empfehlen.": "Stuttering video calls and Wi-Fi dead zones can have different causes. We check your router, coverage, devices and existing cabling before recommending a solution.",
  "Fritz!Box & Mesh einrichten": "Set up Fritz!Box & mesh systems",
  "Funklöcher und Störungen untersuchen": "Investigate dead zones & connection problems",
  "VPN & Verkabelung planen": "Plan VPN connections & cabling",
  "Störung und betroffene Räume erfassen": "Identify the problem and affected rooms",
  "WLAN und Netzwerk prüfen": "Check your Wi-Fi and network",
  "Passende Einstellungen oder Hardware abstimmen": "Agree on suitable settings or hardware",
  "Brauche ich für besseres WLAN einen neuen Router?": "Do I need a new router for better Wi-Fi?",
  "Nicht unbedingt. Standort, Einstellungen oder ein sinnvoll platziertes Mesh-System können bereits helfen. Das lässt sich nach einer Prüfung beurteilen.": "Not necessarily. Changing the location or settings, or installing a well-positioned mesh system, may help. We can assess this after checking your setup.",
  "Helfen Sie auch bei Homeoffice-Verbindungen?": "Can you help with connections for working from home?",
  "Ja, sichere Homeoffice-Anbindungen und VPN gehören zu den angebotenen Netzwerkleistungen.": "Yes. Secure connections for working from home and VPN setup are part of our network services.",
  "Fernwartung & IT-Hilfe in Wiehl | Solux IT": "Remote support & IT help in Wiehl | Solux IT",
  "Hilfe bei Windows, E-Mail, Office, Druckern und anderen Softwareproblemen per Fernzugriff, sofern das Gerät erreichbar ist.": "Remote help with Windows, email, Office, printers and other software problems, provided the device can be accessed.",
  "Viele Fragen lassen sich direkt am Bildschirm klären. Für Fernwartung wird der Zugriff mit Ihnen abgestimmt; falls ein Hardwaredefekt vorliegt, besprechen wir den nächsten sinnvollen Schritt.": "Many issues can be resolved directly on screen. Remote access is arranged with you; if there is a hardware fault, we discuss the most appropriate next step.",
  "Softwarefehler eingrenzen": "Identify software problems",
  "E-Mail & Drucker einrichten": "Set up email & printers",
  "Fernzugriff per AnyDesk": "Remote access using AnyDesk",
  "Problem und Erreichbarkeit klären": "Discuss the problem and device accessibility",
  "Fernzugriff gemeinsam starten": "Start remote access together",
  "Lösung erklären und Ergebnis prüfen": "Explain the solution and check the result",
  "Welche Probleme eignen sich für Fernwartung?": "Which problems can be resolved remotely?",
  "Vor allem Software, E-Mail, Drucker und Einstellungen. Ein defektes Bauteil erfordert in der Regel Hilfe vor Ort oder in der Werkstatt.": "Mainly software, email, printers and settings. A faulty component usually requires on-site or workshop assistance.",
  "Welche Software verwenden Sie?": "Which software do you use?",
  "Für den Fernzugriff nutzen wir AnyDesk. Den Zugriff starten wir nur gemeinsam mit Ihnen.": "We use AnyDesk for remote access. We only start the connection together with you.",
  "Fehlersuche bei Startproblemen und Abstürzen, Austausch defekter Komponenten, Reinigung und sinnvolle SSD-Upgrades. Persönliche Hilfe von Solux IT aus Wiehl.": "Troubleshooting startup problems and crashes, replacing faulty components, cleaning and worthwhile SSD upgrades. Personal support from Solux IT in Wiehl.",
  "WLAN optimieren, Router und Mesh einrichten sowie Netzwerkgeräte und sichere Verbindungen konfigurieren. Persönliche Hilfe von Solux IT aus Wiehl.": "Optimise Wi-Fi, set up routers and mesh systems, and configure network devices and secure connections. Personal support from Solux IT in Wiehl.",
  "Hilfe bei Windows, E-Mail, Office, Druckern und anderen Softwareproblemen per Fernzugriff, sofern das Gerät erreichbar ist. Persönliche Hilfe von Solux IT aus Wiehl.": "Remote help with Windows, email, Office, printers and other software problems, provided the device can be accessed. Personal support from Solux IT in Wiehl.",
  "Persönliche IT-Hilfe in Wiehl: PC- und Laptop-Reparatur, WLAN, Fernwartung sowie Websites, Webanwendungen, Apps und Onlineshops. Jetzt Anliegen schildern.": "Personal IT support in Wiehl: PC and laptop repairs, Wi-Fi, remote support, websites, web applications, apps and online shops. Get in touch today.",
  "Websites, Apps & Onlineshops | Solux IT Wiehl": "Websites, apps & online shops | Solux IT Wiehl",
  "LEISTUNG / 04": "SERVICE / 04",
  "LEISTUNG / 05": "SERVICE / 05",
  "LEISTUNG / 06": "SERVICE / 06",
  "Von der ersten Idee bis zur fertigen Lösung: Websites, Webanwendungen, Apps und Onlineshops, die zu Ihren Zielen passen.": "From the first idea to the finished solution: websites, web applications, apps and online shops that fit your goals.",
  "Projekt anfragen": "Enquire about a project",
  "Ihre Idee.": "Your idea.",
  "Digital umgesetzt.": "Brought to life digitally.",
  "Ein überzeugender Webauftritt, eine Anwendung für Ihre Abläufe oder ein eigener Onlineshop: Wir klären gemeinsam, was Ihre Lösung leisten soll. Gestaltung, Funktionen und technische Umsetzung richten sich nach Ihrem Bedarf.": "An engaging website, an application for your workflows or your own online shop: together, we establish what your solution needs to do. The design, features and technical implementation are tailored to your needs.",
  "Websites: übersichtliche Unternehmensseiten und Landingpages, angepasst an Smartphone, Tablet und Desktop.": "Websites: clear business websites and landing pages designed for smartphones, tablets and desktops.",
  "Webanwendungen: individuelle Funktionen für Formulare, Buchungen, Kundenbereiche oder interne Abläufe.": "Web applications: custom features for forms, bookings, customer areas or internal workflows.",
  "Apps: passende Anwendungen für mobile Nutzung; Plattformen und Funktionsumfang stimmen wir gemeinsam ab.": "Apps: applications suited to mobile use; we agree on the platforms and features together.",
  "Onlineshops: Produktdarstellung, Warenkorb sowie abgestimmte Zahlungs- und Versandfunktionen.": "Online shops: product presentation, shopping carts and agreed payment and shipping features.",
  "Umfang, Zeitplan und Kosten besprechen wir vor dem Start. Hosting, laufende Pflege, Schnittstellen und eine mögliche Veröffentlichung in App-Stores werden je nach Projekt gesondert abgestimmt.": "We discuss the scope, timeline and costs before starting. Hosting, ongoing maintenance, integrations and any app store publication are agreed separately for each project.",
  "VON DER IDEE ZUR UMSETZUNG": "FROM IDEA TO IMPLEMENTATION",
  "So entsteht Ihr": "How we build your",
  "Projekt.": "project.",
  "Ziele & Anforderungen klären": "Define goals & requirements",
  "Was soll die Lösung können, wer nutzt sie und welche Inhalte sind vorhanden? Gemeinsam stecken wir den Rahmen ab.": "What should the solution do, who will use it and what content is already available? Together, we define the scope.",
  "Gestaltung & Funktionen abstimmen": "Agree on design & features",
  "Sie erhalten einen Entwurf. Aufbau, Bedienung und Funktionen stimmen wir vor der weiteren Umsetzung ab.": "You receive a draft design. We agree on the structure, user experience and features before continuing with implementation.",
  "Umsetzen, prüfen & veröffentlichen": "Build, test & publish",
  "Die vereinbarte Lösung wird entwickelt, auf den vorgesehenen Geräten geprüft und für den abgestimmten Betrieb vorbereitet.": "The agreed solution is developed, tested on the intended devices and prepared for the agreed operating environment.",
  "Sie haben schon eine Idee? Erzählen Sie mir davon.": "Already have an idea? Tell me about it.",
  "Projekt besprechen": "Discuss your project",
  "Was kostet eine Website, App oder ein Onlineshop?": "How much does a website, app or online shop cost?",
  "Das hängt von Umfang, Gestaltung, Funktionen und vorhandenen Inhalten ab. Nach einem ersten Gespräch erhalten Sie ein Angebot für die vereinbarte Leistung. Laufende Kosten werden gesondert besprochen.": "The cost depends on the scope, design, features and existing content. After an initial conversation, you receive a quote for the agreed work. Ongoing costs are discussed separately.",
  "Kann eine bestehende Website überarbeitet werden?": "Can an existing website be redesigned?",
  "Ja. Wir schauen uns den bisherigen Auftritt an und klären, welche Inhalte, Funktionen und Gestaltungselemente erhalten oder verbessert werden sollen.": "Yes. We review the existing website and agree on which content, features and design elements should be retained or improved.",
  "Entwickeln Sie auch Webanwendungen und mobile Apps?": "Do you also develop web applications and mobile apps?",
  "Ja. Welche technische Lösung und welche Plattformen passen, klären wir anhand Ihrer Anforderungen. Browserbasierte Anwendungen und mobile Apps unterscheiden sich bei Umsetzung, Betrieb und Veröffentlichung.": "Yes. We determine the right technical approach and platforms based on your requirements. Browser-based applications and mobile apps differ in development, operation and publication.",
  "Welche Inhalte brauche ich für einen Onlineshop?": "What content do I need for an online shop?",
  "Hilfreich sind Produktinformationen, Bilder und Angaben zu Versand und Zahlung. Wir stimmen ab, welche Inhalte und Systeme benötigt werden und wer sie bereitstellt.": "Product information, images, shipping details and payment information are helpful. We agree on the content and systems needed and who will provide them.",
  "Ihre Idee wird konkret.": "Bring your idea to life.",
  "IT-Kaufberatung in Wiehl | Solux IT": "IT purchasing advice in Wiehl | Solux IT",
  "Bestehende Hardware prüfen, sinnvolle Upgrades abwägen und passende Geräte unabhängig empfehlen.": "Review existing hardware, assess worthwhile upgrades and provide independent recommendations for suitable devices.",
  "Nicht jedes Problem verlangt neue Hardware. Wir besprechen Ihren Einsatzbereich und prüfen, welche Anschaffung oder Aufrüstung tatsächlich sinnvoll ist.": "Not every problem requires new hardware. We discuss how you use your equipment and assess which purchases or upgrades actually make sense.",
  "Bestehende Geräte bewerten": "Assess existing devices",
  "Upgrades gegen Neukauf abwägen": "Compare upgrades with buying new",
  "Sicherheitsfragen besprechen": "Discuss security questions",
  "Anforderungen und Budget besprechen": "Discuss requirements and budget",
  "Vorhandene Technik prüfen": "Review existing equipment",
  "Möglichkeiten verständlich vergleichen": "Compare your options clearly",
  "Verkaufen Sie bestimmte Geräte?": "Do you sell specific devices?",
  "Unsere Beratung orientiert sich an Ihrem Bedarf und an sinnvollen Lösungen für die vorhandene Technik.": "Our advice focuses on your needs and suitable solutions for your existing equipment.",
  "Beraten Sie auch zur IT-Sicherheit?": "Do you also provide IT security advice?",
  "Ja, ein Sicherheitscheck gegen Phishing wird als Teil der Beratung angeboten.": "Yes. A phishing security check is offered as part of our advisory service.",
  "Neugeräte & Datenumzug in Wiehl | Solux IT": "New devices & data migration in Wiehl | Solux IT",
  "Neue Geräte einrichten, Profile und Daten übertragen sowie Programme und Peripheriegeräte installieren.": "Set up new devices, transfer profiles and data, and install software and peripherals.",
  "Beim Gerätewechsel sollen Dateien, Programme und Einstellungen an ihrem Platz sein. Wir begleiten Einrichtung und Umzug, damit Sie mit dem neuen Gerät arbeiten können.": "When you change devices, you want your files, software and settings in place. We help with setup and migration so you can start using your new device.",
  "Daten & Profile übertragen": "Transfer data & profiles",
  "Windows sauber einrichten": "Set up Windows properly",
  "Drucker & Zubehör verbinden": "Connect printers & accessories",
  "Altes und neues Gerät prüfen": "Check your old and new devices",
  "Umfang des Umzugs festlegen": "Define the scope of the migration",
  "Daten übertragen und Einrichtung testen": "Transfer data and test the setup",
  "Kann ich meinen alten PC weiterverwenden?": "Can I keep using my old PC?",
  "Das prüfen wir anhand von Zustand und Anforderungen. Manchmal ist ein Upgrade sinnvoller als ein neues Gerät.": "We assess this based on its condition and your requirements. Sometimes an upgrade makes more sense than a new device.",
  "Richten Sie auch Drucker ein?": "Do you also set up printers?",
  "Ja, die Einrichtung von Druckern und anderen Peripheriegeräten gehört zum Angebot.": "Yes. Setting up printers and other peripherals is part of our service.",
  "Websites, Webanwendungen, Apps und Onlineshops von Solux IT aus Wiehl. Individuelle Planung und Umsetzung für Ihr digitales Vorhaben.": "Websites, web applications, apps and online shops from Solux IT in Wiehl. Individual planning and implementation for your digital project.",
  "Bestehende Hardware prüfen, sinnvolle Upgrades abwägen und passende Geräte unabhängig empfehlen. Persönliche Hilfe von Solux IT aus Wiehl.": "Review existing hardware, assess worthwhile upgrades and provide independent recommendations for suitable devices. Personal support from Solux IT in Wiehl.",
  "Neue Geräte einrichten, Profile und Daten übertragen sowie Programme und Peripheriegeräte installieren. Persönliche Hilfe von Solux IT aus Wiehl.": "Set up new devices, transfer profiles and data, and install software and peripherals. Personal support from Solux IT in Wiehl.",
  "Sprachauswahl": "Language selection",
  "Solux IT – Startseite": "Solux IT – Home",
  "Hauptnavigation": "Main navigation",
  "Mobilnavigation": "Mobile navigation",
  "Menü": "Menu",
  "So erreichen wir Sie": "How we can reach you",
  "Was passiert genau? Welche Fehlermeldung erscheint?": "What exactly happens? Is there an error message?",
  "Illustratives Motiv zu PC- & Laptop-Reparatur": "Illustrative image of PC and laptop repairs",
  "Illustratives Motiv zu WLAN & Netzwerk": "Illustrative image of Wi-Fi and networks",
  "Illustratives Motiv zu Fernwartung & IT-Hilfe": "Illustrative image of remote IT support",
  "Illustratives Motiv zu IT-Kaufberatung": "Illustrative image of IT purchasing advice",
  "Illustratives Motiv zu Neugeräte & Datenumzug": "Illustrative image of new device setup and data migration",
  "IT-Arbeitsplatz mit Website-Entwicklung und mobiler Shopansicht": "IT workspace with website development and a mobile shop view",
  "Ihre gewählte Sprache wird im lokalen Speicher (Local Storage) Ihres Browsers gespeichert, damit die Website Ihre Auswahl bei weiteren Besuchen berücksichtigen kann. Diese Einstellung wird nicht an einen Übersetzungsdienst übertragen. Sie können sie über die Website-Daten Ihres Browsers löschen.": "Your chosen language is saved in your browser’s local storage so the website can remember your selection on future visits. This preference is not sent to a translation service. You can remove it by clearing the website data in your browser.",
  "WERKZEUGE & TECHNOLOGIEN": "TOOLS & TECHNOLOGIES",
  "Die Werkzeuge hinter meinen Lösungen – für persönlichen IT-Support, digitale Projekte und automatisierte Abläufe.": "The tools behind my solutions — for personal IT support, digital projects and automated workflows.",
  "Animation pausieren": "Pause animation",
  "Animation fortsetzen": "Resume animation",
  "Genutzte Technologien": "Technologies in use",
  "Cloud & E-Mail": "Cloud & email",
  "Client-Support": "Client support",
  "Systemoptimierung": "System optimisation",
  "Websites & CMS": "Websites & CMS",
  "Frontend-Entwicklung": "Frontend development",
  "KI-Werkzeuge": "AI tools",
  "Workflow-Automatisierung": "Workflow automation",
  "Hardware-Diagnose & Reparatur": "Hardware diagnostics & repairs",
  "Netzwerk & WLAN-Setup": "Network & Wi-Fi setup",
  "Auswahl eingesetzter Technologien. Marken gehören ihren jeweiligen Inhabern; keine Aussage über offizielle Partnerschaften.": "A selection of technologies in use. Trademarks belong to their respective owners; no official partnerships are implied."
};
  const normalize = value => value.replace(/\s+/g, " ").trim();
  const translated = value => {
    const key = normalize(value);
    if (!Object.prototype.hasOwnProperty.call(EN, key)) return value;
    return value.match(/^\s*/)[0] + EN[key] + value.match(/\s*$/)[0];
  };
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.parentElement.closest("script,style,noscript") && normalize(node.nodeValue)) {
      textNodes.push({node, original: node.nodeValue});
    }
  }
  const attributes = [];
  document.querySelectorAll("[placeholder],[aria-label],[alt]").forEach(element => {
    ["placeholder", "aria-label", "alt"].forEach(name => {
      if (element.hasAttribute(name)) attributes.push({element, name, original: element.getAttribute(name)});
    });
  });
  document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[property="og:title"]').forEach(element => {
    attributes.push({element, name: "content", original: element.content});
  });
  const originalTitle = document.title;
  const originalLinks = [...document.querySelectorAll("a[href]")].map(element => ({element, href: element.getAttribute("href")}));
  const forms = [...document.querySelectorAll("form")];
  forms.forEach(form => {
    if (!form.querySelector('input[name="language"]')) {
      const field = document.createElement("input");
      field.type = "hidden"; field.name = "language"; form.append(field);
    }
  });

  const style = document.createElement("style");
  style.textContent = `
    .language-switch{display:flex;align-items:center;gap:2px;flex-shrink:0}
    .language-switch button{appearance:none;display:inline-flex;align-items:center;justify-content:center;min-width:40px;min-height:44px;margin:0;padding:0 6px;background:transparent;color:#526677;border:0;border-bottom:2px solid transparent;border-radius:0;font:800 12px/1 system-ui,sans-serif;letter-spacing:.06em;cursor:pointer;transition:color .2s ease,border-color .2s ease}
    .language-switch button[aria-pressed="true"]{color:#071629;border-bottom-color:#067eaf}
    .language-switch button:hover{color:#067eaf;border-bottom-color:#067eaf}
    .language-switch button:focus-visible{outline:3px solid #067eaf;outline-offset:2px}
    main>.language-switch{margin-bottom:30px}
    main>.language-switch button{color:#afc3d2}
    main>.language-switch button[aria-pressed="true"]{color:#fff;border-bottom-color:#67caff}
    @media(max-width:600px){.language-switch button{min-width:32px;padding:0 4px}.header-inner>.language-switch{margin-left:auto}.mobile-nav{margin-left:4px!important}}
    @media(prefers-reduced-motion:reduce){.language-switch button{transition:none}}
  `;
  document.head.append(style);
  const controls = document.createElement("nav");
  controls.className = "language-switch";
  const buttons = {};
  for (const code of ["de", "en"]) {
    const button = document.createElement("button");
    button.type = "button"; button.textContent = code.toUpperCase(); button.lang = code;
    button.setAttribute("aria-label", code === "de" ? "Deutsch" : "English");
    button.addEventListener("click", () => apply(code, true));
    controls.append(button); buttons[code] = button;
  }
  const header = document.querySelector(".header-inner");
  if (header) header.insertBefore(controls, header.querySelector(".mobile-nav"));
  else document.querySelector("main").prepend(controls);

  function apply(language, remember) {
    const english = language === "en";
    textNodes.forEach(({node, original}) => node.nodeValue = english ? translated(original) : original);
    attributes.forEach(({element, name, original}) => element.setAttribute(name, english ? translated(original) : original));
    document.documentElement.lang = language;
    document.title = english ? translated(originalTitle) : originalTitle;
    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.content = english ? "en_GB" : "de_DE";
    controls.setAttribute("aria-label", english ? "Language selection" : "Sprachauswahl");
    for (const code of ["de", "en"]) buttons[code].setAttribute("aria-pressed", String(code === language));
    forms.forEach(form => form.querySelectorAll('input[name="language"]').forEach(input => input.value = language));
    originalLinks.forEach(({element, href}) => {
      if (!href || href.startsWith("#")) return;
      try {
        const url = new URL(href, location.href);
        if (url.origin !== location.origin || !url.pathname.endsWith(".html")) return;
        if (english) url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
        element.setAttribute("href", english ? url.pathname + url.search + url.hash : href);
      } catch (_) { /* Keep unusual links unchanged. */ }
    });
    document.dispatchEvent(new CustomEvent("solux:languagechange", {detail: {language}}));
    if (remember) {
      try { localStorage.setItem("solux-language", language); } catch (_) {}
      try {
        const url = new URL(location.href);
        if (english) url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
        history.replaceState(null, "", url.href);
      } catch (_) {}
    }
  }
  let language = new URLSearchParams(location.search).get("lang");
  if (language !== "de" && language !== "en") {
    try { language = localStorage.getItem("solux-language"); } catch (_) {}
  }
  apply(language === "en" ? "en" : "de", false);
})();

// Price enquiry links keep the normal anchor fallback when JavaScript is off.
document.addEventListener('click', event => {
  const link = event.target.closest('a[data-enquiry]');
  if (!link) return;
  const select = document.getElementById('kategorie');
  if (select && [...select.options].some(option => option.value === link.dataset.enquiry)) {
    select.value = link.dataset.enquiry;
    select.dispatchEvent(new Event('change', {bubbles:true}));
  }
});

// Web3Forms JSON submission: keep confirmation and errors on the bilingual site.
(() => {
  const copy = {
    de: {
      sending: 'Ihre Anfrage wird gesendet …',
      success: 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich schnellstmöglich bei Ihnen.',
      error: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@solux-it.de.',
      unknown: 'Die Übermittlung konnte nicht bestätigt werden. Bitte prüfen Sie vor einer erneuten Anfrage oder schreiben Sie an info@solux-it.de.'
    },
    en: {
      sending: 'Sending your enquiry …',
      success: 'Thank you! Your enquiry has been sent successfully. I will get back to you as soon as possible.',
      error: 'Your enquiry could not be sent. Please try again or email info@solux-it.de.',
      unknown: 'We could not confirm delivery. Please check before sending another enquiry, or email info@solux-it.de.'
    }
  };
  const forms = [...document.querySelectorAll('form[action="https://api.web3forms.com/submit"]')];
  const state = new Map();
  function render(form) {
    const output = form.querySelector('.form-status');
    const current = state.get(form);
    if (!output || !current) return;
    output.dataset.state = current;
    output.textContent = copy[document.documentElement.lang === 'en' ? 'en' : 'de'][current];
  }
  document.addEventListener('solux:languagechange', () => forms.forEach(render));
  forms.forEach(form => {
    if (!form.querySelector('.form-status') || !window.fetch || !window.AbortController) return;
    let pending = false;
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (pending || !form.reportValidity()) return;
      pending = true;
      const button = form.querySelector('button[type="submit"]');
      const wasDisabled = button ? button.disabled : false;
      if (button) button.disabled = true;
      form.setAttribute('aria-busy', 'true');
      state.set(form, 'sending'); render(form);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25000);
      try {
        const payload = Object.fromEntries(new FormData(form).entries());
        payload.language = document.documentElement.lang === 'en' ? 'en' : 'de';
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(payload), signal: controller.signal
        });
        const result = await response.json();
        if (response.ok && result.success === true) {
          state.set(form, 'success');
          form.reset();
          const language = form.querySelector('input[name="language"]');
          if (language) language.value = document.documentElement.lang === 'en' ? 'en' : 'de';
        } else {
          state.set(form, 'error');
        }
      } catch (_) {
        // A network failure may occur after delivery: do not retry automatically.
        state.set(form, 'unknown');
      } finally {
        clearTimeout(timeout);
        pending = false;
        form.removeAttribute('aria-busy');
        if (button) button.disabled = wasDisabled;
        render(form);
      }
    });
  });
})();
