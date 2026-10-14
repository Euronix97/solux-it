/* Solux IT: one HTML page, two languages. No external translation service. */
(() => {
  "use strict";
  const EN = {
  "IT-Service & digitale Lösungen": "IT support & digital solutions",
  "Solux IT – IT-Service & digitale Lösungen": "Solux IT – IT support & digital solutions",
  "PC & Netzwerk · Websites & Apps · Automatisierung & KI-Assistenten": "PC & networks · Websites & apps · Automation & AI assistants",
  "Rechtliche Angaben und Kontakt zu Solux IT – IT-Service & digitale Lösungen in Wiehl.": "Legal information and contact details for Solux IT – IT support & digital solutions in Wiehl.",
  "SOLUX IT / IT-Service & digitale Lösungen": "SOLUX IT / IT support & digital solutions",
  "Solux IT Wiehl | IT-Service & digitale Lösungen": "Solux IT Wiehl | IT support & digital solutions",
  "Unsere Leistungen im Überblick": "Our services at a glance",
  "PC & Netzwerk": "PC & networks",
  "Websites & Apps": "Websites & apps",
  "Automatisierung & KI-Assistenten": "Automation & AI assistants",
  "Solux IT hilft bei Computer- und Netzwerkproblemen, entwickelt Websites, Apps und Onlineshops und vereinfacht wiederkehrende Aufgaben mit Automatisierung und KI-Assistenten. Persönlich, verständlich und passend zu Ihrem Vorhaben.": "Solux IT helps with computer and network problems, develops websites, apps and online shops, and simplifies recurring tasks with automation and AI assistants. Personal, clear and tailored to your project.",
  "© 2026 Solux IT – IT-Service & digitale Lösungen": "© 2026 Solux IT – IT support & digital solutions",
  "KI-AGENTEN EINFACH ERKLÄRT": "AI AGENTS EXPLAINED SIMPLY",
  "Ein digitaler Helfer.": "A digital assistant.",
  "Für Ihre täglichen Aufgaben.": "For your everyday tasks.",
  "Ein KI-Agent ist ein digitaler Helfer, den ich für bestimmte Aufgaben einrichte. Er kann zum Beispiel E-Mails nach ihrem Inhalt sortieren, wichtige Angaben heraussuchen und eine passende Antwort vorbereiten. Sie legen fest, was er selbst erledigen darf und wann Sie entscheiden.": "An AI agent is a digital assistant that I set up for specific tasks. For example, it can organise emails by their content, pick out important details and prepare a suitable reply. You decide what it may handle itself and when you make the decision.",
  "Ein Kunde schreibt Ihnen": "A customer emails you",
  "Zum Beispiel: „Ich brauche eine neue Website.“ Die Nachricht landet wie gewohnt in Ihrem Postfach.": "For example: “I need a new website.” The message arrives in your inbox as usual.",
  "Der KI-Agent sortiert die Anfrage": "The AI agent organises the enquiry",
  "Er kann die Nachricht dem Thema „Website“ zuordnen und Angaben wie Name, Wünsche und Zeitplan zusammenstellen. Unklare Anfragen legt er Ihnen zur Prüfung vor.": "It can assign the message to the “Website” topic and collect details such as the name, requirements and timeline. Unclear enquiries are passed to you for review.",
  "Die passende Rückmeldung wird vorbereitet": "A suitable response is prepared",
  "Der Agent kann einen passenden Fragebogen oder eine Antwort vorbereiten. Wenn Sie es ausdrücklich so einrichten lassen, kann er festgelegte Rückfragen auch automatisch verschicken. Angebote und Preise geben Sie selbst frei.": "The agent can prepare a suitable questionnaire or reply. If you explicitly have it configured this way, it can also send predefined follow-up questions automatically. You approve quotes and prices yourself.",
  "So müssen Sie nicht jede Nachricht von Hand sortieren oder immer dieselben Fragen tippen. Welche Aufgaben Ihr Helfer übernimmt, klären wir gemeinsam. KI kann sich irren; deshalb planen wir passende Prüfungen ein. KI-Agenten und automatischer Versand werden nach dem benötigten Umfang separat angeboten.": "This saves you from sorting every message by hand or typing the same questions repeatedly. We agree together which tasks your assistant handles. AI can make mistakes, so we include suitable checks. AI agents and automatic sending are quoted separately according to the required scope.",
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
  "Anfrage kommt an": "Enquiry arrives",
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
  "Häufige Fragen.": "Frequently asked questions.",
  "Klare Antworten.": "Clear answers.",
  "Welchen Arbeitsschritt würden Sie gerne vereinfachen? Beschreiben Sie uns Ihren Ablauf.": "Which task would you like to simplify? Tell us about your process.",
  "Ablauf besprechen →": "Discuss your process →",
  "Was kann automatisiert werden?": "What can be automated?",
  "Wiederkehrende Aufgaben mit klaren Eingaben und Regeln eignen sich besonders gut. Ob E-Mail, Formular, Tabelle oder CRM: Entscheidend sind die verfügbaren Schnittstellen. Wir prüfen den konkreten Ablauf vorab.": "Recurring tasks with clear inputs and rules are particularly suitable. Whether email, forms, spreadsheets or a CRM, available interfaces are key. We review the specific process in advance.",
  "Brauche ich n8n oder Make bereits?": "Do I need n8n or Make already?",
  "Nein. Wir besprechen, welcher Dienst und welches Betriebsmodell passen. Konten, Abos oder ein Hosting werden nach Ihrer Zustimmung eingerichtet beziehungsweise von Ihnen bereitgestellt.": "No. We discuss a suitable service and operating model. Accounts, subscriptions or hosting are set up with your approval or provided by you.",
  "Sind KI-Agenten und automatische Antworten möglich?": "Are AI agents and automatic replies possible?",
  "Je nach Anforderungen und verfügbaren Diensten können KI-Schritte ergänzt werden. Zum Einstieg empfehlen wir Entwürfe mit menschlicher Freigabe. Automatisches Antworten benötigt zusätzlich Regeln gegen doppelte Antworten, Spam und Antwortschleifen.": "AI steps can be added depending on requirements and available services. We recommend starting with drafts for human approval. Automatic replies also require rules to prevent duplicate replies, spam and reply loops.",
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
  "Reparaturen · 59 € / Stunde": "Repairs · €59 / hour",
  "Abrechnung im 15-Minuten-Takt. Werkstattdiagnose 29 €, bei beauftragter Reparatur angerechnet. Anfahrt und Ersatzteile nach vorheriger Absprache.": "Billed in 15-minute increments. Workshop diagnosis €29, credited if you commission the repair. Travel and replacement parts agreed in advance.",
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
  "Fernwartung & IT-Hilfe": "Remote IT support",
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
  "Neugeräte & Datenumzug": "Device setup & data migration",
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
  "Fernwartung, Vor-Ort-Hilfe und größere Projekte haben unterschiedliche Anforderungen. Den passenden Aufwand und mögliche Anfahrt besprechen wir vorab mit Ihnen.": "Remote support, on-site assistance and larger projects have different requirements. We discuss the work involved and any travel costs with you in advance.",
  "Aufwand anfragen": "Ask about the scope",
  "Hilfe bei Software, E-Mail, Updates und Einstellungen.": "Help with software, email, updates and settings.",
  "Vor Ort & Werkstatt": "On-site & workshop",
  "Diagnose, Hardware, Reparaturen und Einrichtung.": "Diagnostics, hardware, repairs and setup.",
  "Individuelle Lösungen": "Custom solutions",
  "Netzwerk und Gerätemigration.": "Networks and device migration.",
  "Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.": "No VAT is shown pursuant to section 19 of the German VAT Act (UStG).",
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
  "Auswahl eingesetzter Technologien. Marken gehören ihren jeweiligen Inhabern; keine Aussage über offizielle Partnerschaften.": "A selection of technologies in use. Trademarks belong to their respective owners; no official partnerships are implied.",
  "Ihre IT. Ihre Ideen. Persönlich umgesetzt.": "Your IT. Your ideas. Personally delivered.",
  "Beschreiben Sie Ihr Problem oder Ihre Projektidee. Wir melden uns mit einer ersten Einschätzung zum nächsten Schritt.": "Describe your problem or project idea. We will get back to you with an initial assessment of the next step.",
  "Wobei brauchen Sie Hilfe oder was möchten Sie umsetzen?": "What do you need help with, or what would you like to create?",
  "Ihre IT.": "Your IT.",
  "Ihre Ideen.": "Your ideas.",
  "Persönlich umgesetzt.": "Personally delivered.",
  "Beschreiben Sie Ihr Problem oder Ihre Projektidee und wie wir Sie erreichen können.": "Describe your problem or project idea and how We can reach you.",
  "Über Marcel Bux | Solux IT Wiehl": "About Marcel Bux | Solux IT Wiehl",
  "DER MENSCH HINTER SOLUX IT": "THE PERSON BEHIND SOLUX IT",
  "Marcel Bux.": "Marcel Bux.",
  "Ihr direkter Ansprechpartner.": "Your direct point of contact.",
  "Wir unterstützen Sie bei Technikproblemen und digitalen Vorhaben – mit verständlichen Erklärungen, klaren Absprachen und einem persönlichen Blick auf Ihre Situation.": "We help with technical problems and digital projects, with clear explanations, straightforward agreements and personal attention to your situation.",
  "Kontakt aufnehmen →": "Get in touch →",
  "Kurz über uns": "About us at a glance",
  "Standort": "Location",
  "Aktuell": "Currently",
  "Unser Ansatz": "Our approach",
  "Persönlich. Verständlich. Schritt für Schritt.": "Personal. Clear. Step by step.",
  "ÜBER UNS": "ABOUT US",
  "Technik verstehen.": "Understand technology.",
  "Menschen weiterhelfen.": "Help people move forward.",
  "Hinter Solux IT stehe ich, Marcel Bux. Technik interessiert mich schon lange. Mir ist wichtig, dass eine Lösung nicht nur funktioniert, sondern dass Sie auch verstehen, was gemacht wurde und warum.": "We are Marcel Bux, the person behind Solux IT. Technology has interested me for a long time. A solution should work, and you should also understand what was done and why.",
  "Für meine Arbeit nutzen wir passende Werkzeuge und bei Bedarf KI-Unterstützung. Sie hilft mir zum Beispiel beim Strukturieren von Aufgaben oder beim Entwickeln von Lösungen. Die Ergebnisse prüfen wir selbst – KI ersetzt keine sorgfältige Arbeit.": "We use suitable tools and AI assistance where helpful, for example to structure tasks or develop solutions. We check the results myself: AI does not replace careful work.",
  "Wir sagen Ihnen offen, was ich übernehmen kann und wo eine andere Lösung oder zusätzliche Unterstützung sinnvoll ist. Umfang und mögliche Kosten klären wir mit Ihnen, bevor die Arbeit beginnt.": "We are open about what We can take on and when another solution or additional support would make sense. We clarify the scope and possible costs with you before work begins.",
  "SO ARBEITEN WIR": "HOW WE WORK",
  "Erst zuhören.": "Listen first.",
  "Dann sinnvoll lösen.": "Then find a suitable solution.",
  "Direkter Kontakt": "Direct contact",
  "Sie sprechen direkt mit mir. Wir fragen nach, was Sie brauchen, und erkläre die nächsten Schritte ohne unnötige Fachbegriffe.": "You speak directly with me. We ask what you need and explain the next steps without unnecessary jargon.",
  "Klare Absprachen": "Clear agreements",
  "Wir besprechen Aufwand und Leistungsumfang vorab. Wenn sich etwas ändert, stimmen wir das mit Ihnen ab.": "We discuss the effort and scope in advance. If anything changes, we agree it with you.",
  "Lösungen für Ihren Alltag": "Solutions for your daily work",
  "Ob PC, Netzwerk, Website oder KI-Assistent: Entscheidend ist, dass die Lösung zu Ihrem Bedarf passt und im Alltag nutzbar ist.": "Whether a PC, network, website or AI assistant, the solution should fit your needs and be usable in everyday work.",
  "PERSÖNLICH IN WIEHL": "PERSONAL SUPPORT IN WIEHL",
  "Was möchten Sie lösen oder umsetzen?": "What would you like to solve or create?",
  "Mein Standort ist Wiehl im Oberbergischen Kreis. Vor-Ort-Termine stimmen wir mit Ihnen ab; Fernwartung und digitale Projekte lassen sich je nach Anliegen auch aus der Ferne bearbeiten.": "We are based in Wiehl in the Oberbergischer Kreis. On-site appointments are arranged with you; remote support and digital projects can also be handled remotely depending on your needs.",
  "Anliegen besprechen →": "Discuss your needs →",
  "Unsere Leistungen ansehen →": "View our services →",
  "Über uns": "About us",
  "Über uns | Solux IT Wiehl": "About us | Solux IT Wiehl",
  "Solux IT aus Wiehl: Wir bauen gemeinsam persönlichen IT-Service und digitale Lösungen auf. Inhaber ist Marcel Bux.": "Solux IT in Wiehl: we are building personal IT support and digital solutions together. The owner is Marcel Bux.",
  "DIE MENSCHEN HINTER SOLUX IT": "THE PEOPLE BEHIND SOLUX IT",
  "Solux IT.": "Solux IT.",
  "Persönlich für Sie da.": "Personal support for you.",
  "Solux IT im Überblick": "Solux IT at a glance",
  "Marcel Bux": "Marcel Bux",
  "Wir bauen Solux IT gemeinsam auf. Marcel Bux ist Inhaber und Ihr Ansprechpartner. Uns ist wichtig, dass eine Lösung nicht nur funktioniert, sondern dass Sie auch verstehen, was gemacht wurde und warum.": "We are building Solux IT together. Marcel Bux is the owner and your point of contact. A solution should work, and you should also understand what was done and why.",
  "Für unsere Arbeit nutzen wir passende Werkzeuge und bei Bedarf KI-Unterstützung. Sie hilft zum Beispiel beim Strukturieren von Aufgaben oder beim Entwickeln von Lösungen. Die Ergebnisse prüfen wir selbst – KI ersetzt keine sorgfältige Arbeit.": "We use suitable tools and AI assistance where helpful, for example to structure tasks or develop solutions. We check the results ourselves: AI does not replace careful work.",
  "Wir sagen Ihnen offen, was wir übernehmen können und wo eine andere Lösung oder zusätzliche Unterstützung sinnvoll ist. Umfang und mögliche Kosten klären wir mit Ihnen, bevor die Arbeit beginnt.": "We are open about what we can take on and when another solution or additional support would make sense. We clarify the scope and possible costs with you before work begins.",
  "Sie haben einen direkten Ansprechpartner. Wir fragen nach, was Sie brauchen, und erklären die nächsten Schritte ohne unnötige Fachbegriffe.": "You have a direct point of contact. We ask what you need and explain the next steps without unnecessary jargon.",
  "Unser Standort ist Wiehl im Oberbergischen Kreis. Vor-Ort-Termine stimmen wir mit Ihnen ab; Fernwartung und digitale Projekte lassen sich je nach Anliegen auch aus der Ferne bearbeiten.": "We are based in Wiehl in the Oberbergischer Kreis. On-site appointments are arranged with you; remote support and digital projects can also be handled remotely depending on your needs.",
  "Wiederkehrende Aufgaben dürfen einfacher werden. Wir verbinden Ihre bestehenden Werkzeuge mit n8n oder Make – und ergänzen KI dort, wo sie Ihnen sinnvoll Arbeit abnimmt.": "Make recurring tasks easier. We connect your existing tools with n8n or Make and add AI where it can usefully reduce your workload.",
  "Ein KI-Agent ist ein digitaler Helfer, den wir für bestimmte Aufgaben einrichten. Er kann zum Beispiel E-Mails nach ihrem Inhalt sortieren, wichtige Angaben heraussuchen und eine passende Antwort vorbereiten. Sie legen fest, was er selbst erledigen darf und wann Sie entscheiden.": "An AI agent is a digital assistant that we set up for specific tasks. For example, it can organise emails by their content, pick out important details and prepare a suitable reply. You decide what it may handle itself and when you make the decision.",
  "Sie haben schon eine Idee? Erzählen Sie uns davon.": "Already have an idea? Tell us about it.",
  "Marcel Bux und Oscar Oblong hinter Solux IT: praktische IT-Erfahrung, Anwendungsentwicklung und persönlicher IT-Service mit dem Kunden im Mittelpunkt.": "Meet Marcel Bux and Oscar Oblong behind Solux IT: practical IT experience, application development and personal IT support focused on the customer.",
  "Wir haben es uns zur Aufgabe gemacht, IT-Service für jeden zugänglich zu machen – für Privatpersonen, Selbstständige und Unternehmen. Sie als Kunde und eine passende Lösung stehen bei uns immer im Vordergrund.": "We have made it our mission to make IT support accessible to everyone: home users, freelancers and businesses. You as the customer and a suitable solution always come first.",
  "Inhaber · mehrjährige praktische Erfahrung in der IT": "Owner · several years of practical IT experience",
  "Anwendungsentwickler": "Application developer",
  "Hinter Solux IT stehen Marcel Bux und Oscar Oblong. Wir verbinden praktische IT-Erfahrung mit Anwendungsentwicklung und nehmen uns Zeit, Ihr Anliegen zu verstehen. Unser Ziel ist eine Lösung, die zu Ihnen passt und Ihnen im Alltag weiterhilft.": "Solux IT brings together Marcel Bux and Oscar Oblong. We combine practical IT experience with application development and take the time to understand your needs. Our aim is a solution that suits you and helps in everyday life.",
  "Marcel ist Inhaber von Solux IT und bringt mehrjährige praktische Erfahrung in der IT mit. Im Umgang mit PCs und Technik hat er sich viel Wissen durch die praktische Arbeit angeeignet.": "Marcel is the owner of Solux IT and brings several years of practical IT experience. He has gained extensive knowledge of PCs and technology through hands-on work.",
  "Oscar ist Anwendungsentwickler und ergänzt unsere Zusammenarbeit mit seinem Wissen über Software und die Entwicklung von Anwendungen. So betrachten wir technische Probleme und digitale Projekte aus unterschiedlichen Perspektiven.": "Oscar is an application developer and contributes his knowledge of software and application development. This allows us to approach technical problems and digital projects from different perspectives.",
  "Ihr Anliegen steht bei uns im Mittelpunkt. Wir hören zu, erklären verständlich und suchen eine passende Lösung. Was wir übernehmen können, welchen Umfang die Arbeit hat und welche Kosten entstehen, besprechen wir offen mit Ihnen.": "Your needs come first. We listen, explain clearly and look for a suitable solution. We openly discuss what we can take on, the scope of the work and the costs involved.",
  "Sie im Mittelpunkt.": "You come first.",
  "Eine passende Lösung.": "A suitable solution.",
  "Bitte geben Sie Ihren Namen ein.": "Please enter your name.",
  "Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an, unter der wir Sie erreichen können.": "Please enter a phone number or email address where we can reach you.",
  "Bitte beschreiben Sie kurz Ihr Anliegen.": "Please briefly describe your enquiry.",
  "Eine kurze Beschreibung reicht. Bitte senden Sie keine Passwörter, Zugangscodes oder Zahlungsdaten.": "A short description is enough. Please do not send passwords, access codes or payment details.",
  "SO GEHT ES WEITER": "WHAT HAPPENS NEXT",
  "Wir melden uns und klären Ihr Anliegen.": "We get in touch and clarify your enquiry.",
  "Wir stimmen Vorgehen, Umfang und mögliche Kosten ab.": "We agree the approach, scope and possible costs.",
  "Die Arbeit beginnt erst nach Ihrer Zustimmung.": "Work starts only after your approval.",
  "Ihre Anfrage ist unverbindlich und noch kein Auftrag.": "Your enquiry is non-binding and does not place an order.",
  "Anfrage stellen": "Send an enquiry",
  "Die Werkzeuge hinter unseren Lösungen – für persönlichen IT-Support, digitale Projekte und automatisierte Abläufe.": "The tools behind our solutions — for personal IT support, digital projects and automated workflows.",
  "Bitte Thema wählen": "Please choose a topic",
  "PC & Laptop": "PC & laptop",
  "Anderes Anliegen / noch unsicher": "Other enquiry / not sure yet",
  "Welches Gerät oder Problem betrifft es? Was möchten Sie erreichen?": "Which device or problem is involved? What would you like to achieve?",
  "Was möchten Sie automatisieren? Welche Programme nutzen Sie bisher?": "What would you like to automate? Which tools do you currently use?",
  "Was möchten Sie umsetzen? Welche Inhalte oder Funktionen haben Sie im Sinn?": "What would you like to create? What content or features do you have in mind?",
  "UNSERE LEISTUNGEN": "OUR SERVICES",
  "Was brauchen Sie?": "What do you need?",
  "Wir finden den passenden Weg.": "We find a suitable way forward.",
  "Hilfe für Ihre vorhandene Technik oder eine neue digitale Idee: Wählen Sie den Bereich, der zu Ihrem Anliegen passt.": "Help with your existing technology or a new digital idea: choose the area that fits your needs.",
  "7 LEISTUNGEN": "7 SERVICES",
  "Leistungsbereiche": "Service areas",
  "IT-Problem lösen →": "Solve an IT problem →",
  "Digitales Projekt starten →": "Start a digital project →",
  "IT-Service": "IT support",
  "Wenn Ihr PC, WLAN oder Arbeitsplatz Unterstützung braucht.": "When your PC, Wi-Fi or workstation needs support.",
  "Digitale Lösungen": "Digital solutions",
  "Websites, Anwendungen und KI-Assistenten für Ihre Ideen und Abläufe.": "Websites, applications and AI assistants for your ideas and processes.",
  "Ein einfacher Ablauf mit n8n oder Make. KI-Agenten, automatischer E-Mail-Versand und komplexere Aufgaben erhalten ein individuelles Angebot.": "One simple process using n8n or Make. AI agents, automatic email sending and more complex tasks are quoted individually.",
  "für einen einfachen Ablauf": "for one simple process",
  "Persönlicher IT-Service in Wiehl: PC, WLAN, Fernwartung, Websites, Apps, Onlineshops und Automatisierung mit KI-Assistenten. Beschreiben Sie Ihr Anliegen.": "Personal IT support in Wiehl: PCs, Wi-Fi, remote support, websites, apps, online shops and automation with AI assistants. Tell us what you need.",
  "Was Sie für Fernwartung brauchen": "What you need for remote support",
  "Ihr Gerät muss starten und mit dem Internet verbunden sein. Wir stimmen den Termin und das benötigte Programm vorher mit Ihnen ab und starten den Zugriff gemeinsam. Wenn Ihr PC nicht mehr startet, besprechen wir eine andere passende Lösung.": "Your device needs to start and connect to the internet. We agree the appointment and required software in advance, and start the connection together. If your PC no longer starts, we discuss another suitable option.",
  "Inhalte, Freigabe & Übergabe": "Content, approval & handover",
  "Hilfreich sind Ihre Ziele, vorhandene Texte und Bilder sowie gewünschte Funktionen. Fehlende Inhalte besprechen wir gemeinsam. Rückmeldungen sammeln Sie möglichst in einer abgestimmten Liste; eine Korrekturrunde umfasst diese gebündelten Änderungen am Entwurf.": "Your goals, existing copy and images, and desired features are helpful. We discuss missing content together. Please collect feedback in one agreed list; a revision round covers those consolidated changes to the draft.",
  "Vor der Veröffentlichung prüfen wir die vereinbarte Lösung gemeinsam. Im Angebot legen wir fest, welche Dateien, Zugänge und Einweisung Sie erhalten und wer später Inhalte und Pflege übernimmt.": "Before publication, we review the agreed solution together. The quote specifies which files, account access and guidance you receive, and who handles future content and maintenance.",
  "Einfacher Ablauf · ab 290 €": "Simple process · from €290",
  "KI-Agenten und automatischer E-Mail-Versand erhalten ein individuelles Angebot. Hosting, n8n- oder Make-Abos, KI-/API-Nutzung und laufende Betreuung sind nicht im Einstiegspreis enthalten.": "AI agents and automatic email sending are quoted individually. Hosting, n8n or Make subscriptions, AI/API usage and ongoing support are not included in the entry price.",
  "KI-Agenten und automatischer E-Mail-Versand erhalten ein individuelles Angebot. Hosting, n8n- oder Make-Abos, KI-/API-Nutzung und laufende Betreuung sind nicht im Einstiegspreis enthalten. Benötigte Dienste und mögliche laufende Kosten stimmen wir vor dem Start ab.": "AI agents and automatic email sending are quoted individually. Hosting, n8n or Make subscriptions, AI/API usage and ongoing support are not included in the entry price. We agree the required services and any recurring costs before starting.",
  "Automatisierung entdecken": "Explore automation",
  "Anfragen": "Enquire",
  "Ablauf besprechen": "Discuss your process",
  "Preise & Leistungsumfang": "Prices & scope",
  "Zur Startseite": "Back to home",
  "Kontakt aufnehmen": "Get in touch",
  "Unsere Leistungen ansehen": "View our services",
  "IT-Problem lösen": "Solve an IT problem",
  "Digitales Projekt starten": "Start a digital project",
  "ANFRAGEN": "GET IN TOUCH",
  "EINORDNEN": "ASSESS",
  "LÖSEN": "RESOLVE",
  "LEISTUNG": "SERVICE",
  "Illustratives Motiv: Automatisierung von E-Mail-Anfragen am Computer": "Illustrative image: automating email enquiries at a computer",
  "INTERAKTIVES BEISPIEL": "INTERACTIVE EXAMPLE",
  "So hilft ein": "How an",
  "KI-Agent.": "AI agent helps.",
  "Eine erfundene Kundenanfrage – Schritt für Schritt. Es werden keine Nachrichten versendet.": "A fictional customer enquiry, step by step. No messages are sent.",
  "„Wir möchten eine neue Website. Können Sie uns helfen?“": "“We would like a new website. Can you help us?”",
  "Anfrage wird zugeordnet": "Enquiry is categorised",
  "Der Helfer erkennt das Thema Website und sammelt die wichtigen Angaben.": "The assistant identifies the website topic and collects the important details.",
  "Antwortentwurf entsteht": "A reply is drafted",
  "„Gerne. Welche Inhalte und Funktionen wünschen Sie sich?“": "“Of course. What content and features would you like?”",
  "Sie prüfen und entscheiden": "You review and decide",
  "Sie prüfen den Entwurf und geben die Antwort frei. Es wird nichts ohne Ihre Freigabe verschickt.": "You review the draft and approve the reply. Nothing is sent without your approval.",
  "Demo starten": "Start demo",
  "Zurücksetzen": "Reset",
  "Dies ist ein Beispiel mit menschlicher Freigabe. Funktionen, Zugänge und Kosten stimmen wir für Ihr Projekt gemeinsam ab.": "This example includes human approval. We agree on features, access and costs together for your project.",
  "Eingang": "Inbox",
  "Zuordnung": "Classification",
  "Antwortentwurf": "Reply draft",
  "Ihre Freigabe": "Your approval",
  "E-MAIL EINGEGANGEN": "EMAIL RECEIVED",
  "Eine neue Anfrage.": "A new enquiry.",
  "Die Nachricht kommt wie gewohnt in Ihrem Postfach an. Ab hier kann der eingerichtete Ablauf übernehmen.": "The message arrives in your inbox as usual. The configured workflow can take over from here.",
  "Auslöser: eine neue Kundenanfrage": "Trigger: a new customer enquiry",
  "WICHTIGE ANGABEN ERKANNT": "KEY DETAILS IDENTIFIED",
  "Aus Text wird Übersicht.": "Text becomes a clear overview.",
  "Der KI-Helfer ordnet das Anliegen ein und bereitet die Angaben für den nächsten Schritt vor.": "The AI assistant categorises the request and prepares the details for the next step.",
  "Anliegen": "Request",
  "Neue Unternehmenswebsite": "New business website",
  "Gewünschte Inhalte": "Requested content",
  "Leistungen & Kontaktformular": "Services & contact form",
  "Noch zu klären": "To clarify",
  "Umfang, Zeitplan & Budget": "Scope, timeline & budget",
  "ZUR PRÜFUNG VORBEREITET": "PREPARED FOR REVIEW",
  "Die erste Antwort steht.": "The first reply is ready.",
  "Entwurf · noch nicht versendet": "Draft · not sent",
  "Hallo Lena, vielen Dank für Ihre Anfrage. Gerne besprechen wir Ihre neue Website. Wie viele Seiten planen Sie und wann möchten Sie starten?": "Hello Lena, thank you for your enquiry. We would be happy to discuss your new website. How many pages are you planning, and when would you like to start?",
  "Sie ergänzen persönliche Details, bevor eine Antwort verschickt wird.": "You add personal details before a reply is sent.",
  "DIE ENTSCHEIDUNG BLEIBT BEI IHNEN": "YOU KEEP CONTROL",
  "Sie haben das letzte Wort.": "You have the final say.",
  "Prüfen, anpassen, freigeben: Der Helfer bereitet vor. Sie entscheiden, ob die Antwort passt.": "Review, edit, approve: the assistant prepares the work. You decide whether the reply is right.",
  "Anliegen nachvollziehbar zugeordnet": "Request categorised clearly",
  "Antwort als Entwurf vorbereitet": "Reply prepared as a draft",
  "Kein Angebot ohne Ihre Entscheidung": "No quote without your decision",
  "Freigabe simulieren": "Simulate approval",
  "WENIGER ROUTINE. MEHR ÜBERBLICK.": "LESS ROUTINE. MORE CLARITY.",
  "Eine Anfrage.": "One enquiry.",
  "Ein klarer nächster Schritt.": "A clear next step.",
  "Erleben Sie an einem Beispiel, wie ein KI-Helfer aus einer Nachricht eine vorbereitete Antwort macht. Ihre Freigabe bleibt der entscheidende Schritt.": "See how an AI assistant turns a message into a prepared reply. Your approval remains the decisive step.",
  "Kundenanfragen organisieren": "Organise customer enquiries",
  "Interaktives Beispiel": "Interactive example",
  "Schritte der Beispielanfrage": "Example enquiry steps",
  "Beispielnachricht": "Example message",
  "DIE ANFRAGE": "THE ENQUIRY",
  "Fiktive Kundin": "Fictional customer",
  "Website für unser Unternehmen": "Website for our business",
  "Hallo, wir möchten eine neue Website mit unseren Leistungen und einem Kontaktformular. Können Sie uns dabei helfen?": "Hello, we would like a new website with our services and a contact form. Can you help us with that?",
  "Beispieldaten · keine echte E-Mail": "Example data · not a real email",
  "Zurück": "Back",
  "Weiter zur Zuordnung": "Continue to classification",
  "Dies ist eine interaktive Veranschaulichung. Es wird keine KI aufgerufen und keine E-Mail versendet. Den tatsächlichen Ablauf, erforderliche Dienste und Kosten stimmen wir für Ihr Projekt ab.": "This is an interactive illustration. No AI is called and no email is sent. We agree on the actual workflow, required services and costs for your project.",
  "BEISPIEL EINER FEHLERPRÜFUNG": "EXAMPLE TROUBLESHOOTING",
  "Erst prüfen. Dann gezielt verbessern.": "Check first. Then improve.",
  "Autostart & Hintergrundprogramme": "Startup & background programs",
  "Freier Speicher & Laufwerkszustand": "Available storage & drive condition",
  "Temperaturen & Systemauslastung": "Temperatures & system load",
  "Wir unterscheiden zwischen Softwareproblemen und möglichen Hardwareursachen. Erst nach der Prüfung empfehlen wir die passenden nächsten Schritte.": "We distinguish software problems from possible hardware causes. After checking, we recommend suitable next steps.",
  "Die Ursache Schritt für Schritt eingrenzen.": "Narrow down the cause step by step.",
  "Stromversorgung & Anschlüsse": "Power supply & connections",
  "Startverhalten & Fehlermeldungen": "Startup behaviour & error messages",
  "Hardwareprüfung nach Absprache": "Hardware checks by agreement",
  "Ein schwarzer Bildschirm bedeutet nicht automatisch einen Defekt. Wir prüfen zunächst die einfachen Ursachen und besprechen weitere Arbeiten vorab.": "A black screen does not automatically mean a fault. We check simple causes first and discuss further work in advance.",
  "Kühlung und Belastung betrachten.": "Review cooling and workload.",
  "Lüftungswege & sichtbare Verschmutzung": "Airflow & visible dust",
  "Lüfterverhalten & Temperaturen": "Fan behaviour & temperatures",
  "Auslastung bei typischer Nutzung": "Load during typical use",
  "Wir prüfen, ob Einstellungen, Reinigung oder weitere Arbeiten sinnvoll sind. Ob eine Reparatur wirtschaftlich ist, klären wir gemeinsam.": "We check whether settings, cleaning or further work would help. We discuss whether a repair is worthwhile together.",
  "Schematische Wohnung, kein gemessener WLAN-Plan": "Schematic home, not a measured Wi-Fi map",
  "Wohnzimmer": "Living room",
  "Router": "Router",
  "Arbeitszimmer": "Office",
  "Beispielbereich": "Example area",
  "Flur": "Hallway",
  "Schlafzimmer": "Bedroom",
  "Entfernung und Wände können stören.": "Distance and walls can interfere.",
  "Ein Router im Wohnzimmer erreicht nicht jeden Raum gleich gut. Wir prüfen Aufstellort, bauliche Gegebenheiten und die tatsächlichen Verbindungen.": "A router in the living room may not reach every room equally well. We check its position, the building layout and the actual connections.",
  "Mesh-Punkt": "Mesh point",
  "Abdeckung passend zur Wohnung planen.": "Plan coverage for your home.",
  "Ein sinnvoll platzierter Mesh-Punkt kann die Reichweite verbessern. Anzahl, Standort und eine mögliche Kabelverbindung hängen von Ihren Räumen und Geräten ab.": "A well-placed mesh point can improve coverage. The number, position and possible wired connections depend on your rooms and devices.",
  "BEISPIEL EINER SITZUNG": "EXAMPLE SESSION",
  "Freigabe durch Sie": "Permission from you",
  "Sie geben den Zugriff bewusst frei.": "You explicitly allow access.",
  "Wir vereinbaren einen Termin und erklären den Verbindungsaufbau. Die Sitzung beginnt erst mit Ihrer Zustimmung. Passwörter senden Sie uns nicht per E-Mail.": "We arrange a time and explain how to connect. The session starts only with your agreement. Do not send passwords by email.",
  "Problem gemeinsam ansehen": "Review the problem together",
  "Sie sehen, was wir machen.": "You can see what we do.",
  "Wir besprechen die Fehlermeldung und prüfen gemeinsam die passenden Einstellungen. Sie bleiben dabei und können den Zugriff beenden.": "We discuss the error and check relevant settings together. You remain present and can end access.",
  "Ergebnis prüfen & Sitzung beenden": "Check the result & end the session",
  "Zum Schluss testen wir gemeinsam.": "We test together at the end.",
  "Wir prüfen, ob die vereinbarten Schritte geholfen haben, erklären das Ergebnis und beenden die Fernwartung. Falls mehr nötig ist, besprechen wir die nächsten Schritte.": "We check whether the agreed steps helped, explain the result and end the remote session. If more work is needed, we discuss next steps.",
  "Bisheriger PC": "Previous PC",
  "Neuer PC": "New PC",
  "Mitnehmen, was Sie benötigen.": "Bring the files you need.",
  "Dokumente, Fotos und ausgewählte Ordner können von zugänglichen, funktionsfähigen Geräten übernommen werden. Was mitkommt und wohin es gehört, legen wir vorher fest.": "Documents, photos and selected folders can be transferred from accessible, functioning devices. We agree beforehand what to transfer and where it belongs.",
  "Programme brauchen oft eine neue Installation.": "Programs often need a fresh installation.",
  "Installierte Programme lassen sich nicht immer einfach kopieren. Wir prüfen benötigte Installationen, vorhandene Lizenzen und passende Einstellungen.": "Installed programs cannot always simply be copied. We check required installations, available licences and appropriate settings.",
  "Sie behalten die Kontrolle über Ihre Zugänge.": "You keep control of account access.",
  "E-Mail, Browser und weitere Konten richten wir nach Absprache ein. Anmeldungen und Zwei-Faktor-Freigaben nehmen Sie selbst vor. Passwörter gehören nicht ins Anfrageformular.": "We set up email, browsers and other accounts as agreed. You sign in and complete two-factor approvals yourself. Do not put passwords in the enquiry form.",
  "DARAUF ACHTEN WIR": "WHAT WE LOOK FOR",
  "Zuverlässig für die täglichen Aufgaben.": "Reliable for daily tasks.",
  "Flüssiges Arbeiten im Browser & Office": "Smooth browsing & office work",
  "SSD und ausreichend Arbeitsspeicher": "SSD and sufficient memory",
  "Passende Anschlüsse & guter Bildschirm": "Suitable ports & a good display",
  "Wir achten auf sinnvolle Ausstattung statt auf die größte Zahl im Datenblatt. Auch Lautstärke, Bedienkomfort und Ihr Budget spielen eine Rolle.": "We focus on useful specifications rather than the biggest numbers on a spec sheet. Noise, comfort and your budget matter too.",
  "Ein Gerät, das zu Ihrem Alltag passt.": "A device that fits your day.",
  "Gewicht & Größe": "Weight & size",
  "Akkulaufzeit bei Ihrer Nutzung": "Battery life for your use",
  "Tastatur, Ladegerät & Anschlüsse": "Keyboard, charger & ports",
  "Ein mobiler Rechner muss nicht nur schnell sein. Wir vergleichen Ausstattung und praktische Eigenschaften anhand Ihrer typischen Nutzung.": "A mobile computer needs more than speed. We compare specifications and practical qualities against your typical use.",
  "Mehr Spielraum für anspruchsvolle Aufgaben.": "More headroom for demanding tasks.",
  "Anforderungen Ihrer Programme": "Requirements of your software",
  "Arbeitsspeicher & Erweiterbarkeit": "Memory & upgrade options",
  "Leistung, Kühlung & Speicherplatz": "Performance, cooling & storage",
  "Ob Entwicklung, virtuelle Maschinen oder andere Projekte: Wir klären erst die Anforderungen. Danach empfehlen wir eine passende Ausstattung.": "Whether development, virtual machines or other projects, we clarify the requirements first, then recommend suitable specifications.",
  "KLAR. PERSÖNLICH. DIGITAL.": "CLEAR. PERSONAL. DIGITAL.",
  "Ihr Unternehmen.\nEin klarer Auftritt.": "Your business.\nA clear presence.",
  "GESTALTUNGSBEISPIEL": "DESIGN EXAMPLE",
  "Kollektion": "Collection",
  "Leuchte": "Lamp",
  "Vase": "Vase",
  "Stuhl": "Chair",
  "Produkte übersichtlich präsentieren": "Present products clearly",
  "Ihre Projekte": "Your projects",
  "Website planen": "Plan website",
  "In Arbeit": "In progress",
  "Inhalte abstimmen": "Agree on content",
  "Offen": "Open",
  "Entwurf prüfen": "Review design",
  "Geplant": "Planned",
  "Ein Auftritt mit klarer Orientierung.": "A presence with clear navigation.",
  "Leistungen, Informationen und Kontaktmöglichkeiten werden verständlich angeordnet. Gestaltung und Inhalte richten sich nach Ihrem Unternehmen.": "Services, information and ways to get in touch are arranged clearly. Design and content are tailored to your business.",
  "Produkte zeigen. Kaufwege durchdenken.": "Show products. Plan the buying journey.",
  "Wir besprechen Produktdarstellung, die passende Shop-Plattform sowie benötigte Zahlungs- und Versandoptionen. Der konkrete Umfang wird vorher vereinbart.": "We discuss product presentation, the right shop platform and required payment and shipping options. The specific scope is agreed beforehand.",
  "Eine Oberfläche für Ihre Aufgaben.": "An interface for your tasks.",
  "Wenn eine klassische Website nicht reicht, planen wir passende Anwendungsfunktionen. Nutzer, Daten und Schnittstellen klären wir vor der Umsetzung.": "When a standard website is not enough, we plan suitable application features. We clarify users, data and integrations before implementation.",
  "PC ist langsam": "Slow PC",
  "PC startet nicht": "PC will not start",
  "Gerät wird heiß": "Device runs hot",
  "EINBLICK IN UNSERE ARBEIT": "A LOOK AT OUR WORK",
  "Was macht Ihr PC gerade?": "What is your PC doing?",
  "Wählen Sie ein typisches Problem und sehen Sie, wie wir eine Prüfung angehen.": "Choose a typical problem and see how we approach troubleshooting.",
  "Beispiel auswählen": "Choose an example",
  "Die Beispiele ersetzen keine Diagnose. Arbeiten und mögliche Kosten stimmen wir vorab ab.": "These examples do not replace a diagnosis. We agree on work and possible costs in advance.",
  "Nur ein Router": "One router",
  "Mit geplantem Mesh": "With planned mesh",
  "Gutes WLAN beginnt mit dem Standort.": "Good Wi-Fi starts with placement.",
  "Vergleichen Sie zwei schematische Situationen. So wird verständlich, weshalb ein zusätzlicher Punkt sinnvoll sein kann.": "Compare two schematic situations to see why an additional access point may help.",
  "Die Darstellung ist eine Illustration, keine Messung oder Zusage für eine bestimmte Reichweite.": "This is an illustration, not a measurement or a promise of a specific range.",
  "Verbindung": "Connection",
  "Gemeinsam prüfen": "Check together",
  "Abschluss": "Finish",
  "So läuft eine Fernwartung ab.": "How a remote session works.",
  "Gehen Sie den Ablauf in Ruhe durch – von Ihrer Freigabe bis zum gemeinsamen Abschlusstest.": "Explore the process at your pace, from granting access to testing together at the end.",
  "Dies ist eine Veranschaulichung. Es wird keine Verbindung hergestellt und kein Gerät geprüft.": "This is an illustration. No connection is established and no device is checked.",
  "Dateien": "Files",
  "Programme": "Programs",
  "Konten & Zugänge": "Accounts & access",
  "Was zieht auf Ihren neuen PC mit?": "What moves to your new PC?",
  "Dateien, Programme und Konten brauchen unterschiedliche Schritte. Sehen Sie, worauf es jeweils ankommt.": "Files, programs and accounts need different steps. Explore what matters for each.",
  "Umzug zugänglicher Daten nach Prüfung. Keine Datenrettung oder Datensicherung als eigenständige Leistung.": "Transfer of accessible data after review. No data recovery or backup as a standalone service.",
  "Alltag & Büro": "Everyday & office",
  "Unterwegs": "On the go",
  "Entwicklung & Projekte": "Development & projects",
  "Der passende PC beginnt bei Ihnen.": "The right PC starts with you.",
  "Wählen Sie ein Nutzungsprofil. Wir zeigen, welche Kriterien bei der Beratung in den Vordergrund rücken.": "Choose a usage profile to see which criteria matter most in our advice.",
  "Die Beispiele sind keine konkrete Kaufempfehlung. Gerätewahl, Anforderungen und Budget besprechen wir individuell.": "These examples are not specific purchase recommendations. We discuss devices, requirements and budget individually.",
  "Website": "website",
  "Onlineshop": "Online shop",
  "Webanwendung": "Web application",
  "Welche digitale Lösung passt zu Ihrer Idee?": "Which digital solution fits your idea?",
  "Wechseln Sie zwischen drei Gestaltungsbeispielen. So sehen Sie, wie sich Website, Shop und Anwendung unterscheiden.": "Switch between three design examples to see how websites, shops and applications differ.",
  "Die Vorschauen sind Gestaltungsbeispiele ohne echte Shop- oder Anwendungsfunktionen. Individuelle Funktionen erhalten ein abgestimmtes Angebot.": "These are design examples without actual shop or application features. Individual features are covered by an agreed quote.",
  "Ihr Unternehmen. Ein klarer Auftritt.": "Your business.\nA clear presence.",
  "Autostart – schematisches Beispiel": "Startup – schematic example",
  "Benötigte Programme": "Required programs",
  "Starten automatisch": "Start automatically",
  "Bleiben aktiv": "Remain enabled",
  "Unnötige Zusatzprogramme": "Unnecessary extra programs",
  "Starten ebenfalls mit": "Also start automatically",
  "Autostart deaktiviert": "Startup disabled",
  "Router im Wohnzimmer": "Router in living room",
  "Wände & Entfernung": "Walls & distance",
  "Verbindung schwach": "Weak connection",
  "Besser angebunden": "Better connected",
  "Mesh-Punkt passend platziert": "Mesh point positioned appropriately",
  "E-Mail-Einrichtung – Beispiel": "Email setup – example",
  "Ihr E-Mail-Konto": "Your email account",
  "Einrichtung unvollständig": "Setup incomplete",
  "Einstellungen korrigiert": "Settings corrected",
  "Gemeinsamer Funktionstest": "Test together",
  "Ausgewählte Dateien": "Selected files",
  "Dateien liegen noch auf dem alten PC": "Files are still on the old PC",
  "Dateien am vereinbarten Ort übernommen": "Files transferred to the agreed location",
  "Unterwegs arbeiten": "Work on the go",
  "Gewicht & Akku vergleichen": "Compare weight & battery",
  "Office & E-Mail nutzen": "Use office tools & email",
  "Leistung passend auswählen": "Choose suitable performance",
  "Eigene Wünsche & Budget": "Your needs & budget",
  "Passende Auswahl besprechen": "Discuss suitable options",
  "Ihr Logo": "Your logo",
  "IHR UNTERNEHMEN": "YOUR BUSINESS",
  "Ihre Texte": "Your copy",
  "Leistungen klar präsentieren": "Present services clearly",
  "Ihre Kontaktdaten": "Your contact details",
  "AUSGANGSLAGE": "STARTING POINT",
  "Viele Programme starten gleichzeitig.": "Many programs start at once.",
  "UNSER ANSATZ": "OUR APPROACH",
  "Wir prüfen, welche Programme wirklich gebraucht werden.": "We check which programs are actually needed.",
  "BEISPIELERGEBNIS": "EXAMPLE RESULT",
  "Unnötige Autostarts sind reduziert.": "Unnecessary startup programs are reduced.",
  "SO KANN UNSERE HILFE AUSSEHEN": "WHAT OUR HELP CAN LOOK LIKE",
  "Was bringt eine gezielte PC-Prüfung?": "What does targeted troubleshooting do?",
  "Beispiel: Unnötige Programme bremsen den Start.": "Example: unnecessary programs slow startup.",
  "Beispiel starten": "Start example",
  "Anhalten": "Pause",
  "Ein mögliches Beispiel, keine Diagnose Ihres PCs und keine Zusage für eine bestimmte Geschwindigkeit.": "One possible example, not a diagnosis of your PC or a promise of a specific speed.",
  "Ein Router erreicht nicht jeden Raum gleich gut.": "One router does not reach every room equally well.",
  "Wir prüfen Räume und planen einen passenden Standort.": "We review the rooms and plan a suitable location.",
  "Ein Mesh-Punkt ergänzt die Verbindung.": "A mesh point supplements the connection.",
  "Warum kann ein Mesh-Punkt helfen?": "Why can a mesh point help?",
  "Beispiel: Im Arbeitszimmer kommt wenig WLAN an.": "Example: Wi-Fi coverage in the office is weak.",
  "Schematische Darstellung. Die tatsächliche Abdeckung hängt von Räumen, Geräten und Messungen vor Ort ab.": "Schematic illustration. Actual coverage depends on rooms, devices and on-site measurements.",
  "Die Einrichtung ist noch unvollständig.": "Setup is incomplete.",
  "Mit Ihrer Freigabe prüfen wir gemeinsam die Einstellungen.": "With your permission, we check the settings together.",
  "Die Einrichtung ist angepasst und wird gemeinsam getestet.": "Setup is adjusted and tested together.",
  "Wie hilft Fernwartung konkret?": "How does remote support help?",
  "Beispiel: Ein E-Mail-Konto ist nicht richtig eingerichtet.": "Example: an email account is not set up correctly.",
  "Nur eine Veranschaulichung: Es wird keine Verbindung hergestellt. Manche Probleme benötigen einen Vor-Ort-Termin.": "Illustration only: no connection is established. Some issues require an on-site appointment.",
  "Die Dateien befinden sich auf dem bisherigen Gerät.": "Files are on the previous device.",
  "Wir übernehmen die vorher vereinbarten, zugänglichen Dateien.": "We transfer the accessible files agreed beforehand.",
  "Die übernommenen Dateien werden am neuen PC geprüft.": "Transferred files are checked on the new PC.",
  "Wie kommen Ihre Dateien auf den neuen PC?": "How do your files reach the new PC?",
  "Beispiel: Ausgewählte Dokumente sollen mit umziehen.": "Example: selected documents need to move with you.",
  "Voraussetzung sind zugängliche, funktionsfähige Geräte. Keine Datenrettung oder Datensicherung als eigenständige Leistung.": "Devices must be accessible and functioning. No data recovery or backup as a standalone service.",
  "Sie bringen Wünsche und ein Budget mit.": "You bring your needs and budget.",
  "Wir übersetzen Ihre Nutzung in passende Auswahlkriterien.": "We turn your usage into suitable selection criteria.",
  "Sie erhalten eine nachvollziehbare Empfehlung.": "You receive a clear, reasoned recommendation.",
  "Wie finden wir ein passendes Gerät?": "How do we find a suitable device?",
  "Beispiel: Sie suchen einen Laptop für unterwegs und Büroarbeit.": "Example: you need a laptop for mobile and office work.",
  "Eine beispielhafte Beratung, keine automatische Geräteempfehlung. Die Auswahl besprechen wir individuell.": "An example consultation, not an automatic device recommendation. We discuss the choice individually.",
  "Ihre Inhalte sind noch nicht als Website angeordnet.": "Your content is not yet arranged as a website.",
  "Wir gestalten eine klare Struktur und passende Darstellung.": "We design a clear structure and suitable presentation.",
  "Ein verständlicher Website-Entwurf entsteht.": "A clear website draft takes shape.",
  "Wie wird aus Inhalten eine Website?": "How does content become a website?",
  "Beispiel: Logo, Texte und Kontakt brauchen einen klaren Auftritt.": "Example: your logo, copy and contact details need a clear presentation.",
  "Die Vorschau ist ein Gestaltungsbeispiel. Apps und Onlineshops planen wir entsprechend ihren eigenen Funktionen.": "This preview is a design example. Apps and online shops are planned around their own features.",
  "System": "System",
  "Apps": "Apps",
  "Konten": "Accounts",
  "Autostart verwalten": "Manage startup apps",
  "Welche Programme starten beim Anmelden?": "Which programs start when you sign in?",
  "Windows-Sicherheit": "Windows Security",
  "Bleibt aktiviert": "Stays enabled",
  "Musik-App": "Music app",
  "Aktiviert": "Enabled",
  "Deaktiviert": "Disabled",
  "Spiele-Launcher": "Game launcher",
  "Nicht benötigtes Zusatzprogramm": "Unneeded extra program",
  "Nur nicht benötigte Autostarts werden angepasst.": "Only unneeded startup apps are adjusted.",
  "Autostart-Apps · Beispielansicht": "Startup apps · example view",
  "Posteingang": "Inbox",
  "Gesendet": "Sent",
  "Entwürfe": "Drafts",
  "Konto noch nicht eingerichtet": "Account not set up yet",
  "Servereinstellungen prüfen": "Check server settings",
  "Einrichtung gemeinsam getestet": "Setup tested together",
  "Im Beispiel ist das Konto eingerichtet.": "In this example, the account is set up.",
  "Einstellungen gemeinsam prüfen …": "Checking settings together …",
  "E-Mail · Beispielansicht": "Email · example view",
  "Persönliche Dateien": "Personal files",
  "Dokumente": "Documents",
  "Bilder": "Pictures",
  "Projektdateien": "Project files",
  "Vereinbarter Zielordner": "Agreed destination folder",
  "Die ausgewählten Dateien fehlen hier noch.": "The selected files are not here yet.",
  "Ausgewählte Dateien übernehmen …": "Transferring selected files …",
  "Vorschau Ihres Projekts": "Your project preview",
  "Logo": "Logo",
  "Leistungstexte": "Service copy",
  "Kontaktdaten": "Contact details",
  "Leistungen · Kontakt": "Services · Contact",
  "PERSÖNLICH. KLAR. ERREICHBAR.": "PERSONAL. CLEAR. ACCESSIBLE.",
  "Ihre Leistungen. Ein klarer Auftritt.": "Your services.\nA clear presence.",
  "Verständliche Informationen und ein direkter Weg zum Kontakt.": "Clear information and a direct way to get in touch.",
  "Inhalte strukturieren und gestalten …": "Structuring and designing content …",
  "Website-Vorschau · Gestaltungsbeispiel": "Website preview · design example",
  "Illustrative Szene: WLAN-Prüfung in einem Wohnraum": "Illustrative scene: checking Wi-Fi in a home",
  "Arbeitsplatz: WLAN instabil": "Workspace: unstable Wi-Fi",
  "Verbindung gezielt verbessert": "Connection improved through targeted work",
  "Passender Mesh-Standort": "Suitable mesh location",
  "Standort und Verbindung prüfen …": "Checking placement and connection …",
  "Illustrative Szene: gemeinsame Beratung zu einem Laptop": "Illustrative scene: discussing a laptop together",
  "Welcher Laptop passt zu mir?": "Which laptop is right for me?",
  "Ihre Nutzung entscheidet.": "Your usage decides.",
  "Mobil: Gewicht & Akku": "Mobile: weight & battery",
  "Büro: Leistung & Bildschirm": "Office: performance & display",
  "Budget: sinnvolle Ausstattung": "Budget: useful specifications",
  "Wünsche und Anforderungen gemeinsam klären …": "Clarifying needs and requirements together …",
  "Illustrative Fotoszene: zwei Laptops bei einem Datenumzug": "Illustrative photographic scene: two laptops during file migration",
  "BISHERIGER PC": "PREVIOUS PC",
  "NEUER PC": "NEW PC",
  "Hier liegen Ihre Dateien.": "Your files are here.",
  "Für die Übernahme vorbereitet.": "Prepared for the transfer.",
  "Dateien übernommen und geprüft.": "Files transferred and checked.",
  "Illustrative, KI-generierte Fotoszene. Voraussetzung sind zugängliche, funktionsfähige Geräte. Keine Datenrettung oder Datensicherung als eigenständige Leistung.": "Illustrative AI-generated photographic scene. Devices must be accessible and functioning. No data recovery or backup as a standalone service.",
  "Gerät startet nicht": "Device will not start",
  "Stromversorgung prüfen": "Check power supply",
  "Bereit zum Arbeiten": "Ready to work",
  "Start gemeinsam prüfen": "Check startup together",
  "Anschluss sitzt nicht vollständig": "Connector is not fully seated",
  "Anschluss korrigiert": "Connection corrected",
  "Wohnbereich": "Living area",
  "Arbeitsplatz": "Workspace",
  "Verbindung instabil": "Unstable connection",
  "Ein zusätzlicher Standort verbindet die Bereiche.": "An additional location connects the areas.",
  "E-Mail-Einstellungen": "Email settings",
  "Serveradresse": "Server address",
  "imap.strato.d": "imap.strato.d",
  "imap.strato.de": "imap.strato.de",
  "Eine Angabe stimmt noch nicht.": "One detail is not correct yet.",
  "Funktion gemeinsam testen": "Test the function together",
  "Ihr Zugriff bleibt unter Ihrer Kontrolle.": "Access remains under your control.",
  "Projekt.pdf": "Project.pdf",
  "Quelldatei bleibt erhalten": "Source file remains available",
  "Zielordner": "Destination folder",
  "Projektunterlagen": "Project documents",
  "Was Sie brauchen": "What you need",
  "Gewicht & Akku": "Weight & battery",
  "Büro & E-Mail": "Office & email",
  "Passende Leistung": "Suitable performance",
  "Vereinbartes Budget": "Agreed budget",
  "Sinnvolle Ausstattung": "Useful specifications",
  "Passend zur Nutzung": "Fits the intended use",
  "Website-Entwurf": "Website draft",
  "Ihre Leistungen.": "Your services.",
  "Klar präsentiert.": "Presented clearly.",
  "Informationen und Kontakt an einem Ort.": "Information and contact in one place.",
  "Ihr Unternehmen": "Your business",
  "Neue Kundenanfrage": "New customer enquiry",
  "Wir brauchen eine neue": "We need a new",
  "mit Kontaktformular.": "with a contact form.",
  "Lena · Beispielanfrage": "Lena · example enquiry",
  "Hallo Lena, gerne besprechen": "Hello Lena, we would be happy",
  "wir Ihre neue Website.": "to discuss your new website.",
  "Welche Inhalte wünschen Sie?": "What content would you like?",
  "Noch nicht versendet": "Not sent",
  "Webprojekt": "Web project",
  "Ihre Prüfung und Freigabe": "Your review and approval",
  "Problem ansehen": "See the problem",
  "Anschluss prüfen": "Check connection",
  "Gezielt korrigieren": "Make a targeted correction",
  "Ergebnis testen": "Test the result",
  "Der Laptop startet nicht.": "The laptop will not start.",
  "Wir grenzen die Ursache ein und prüfen den Anschluss.": "We narrow down the cause and check the connection.",
  "Im Beispiel wird der Anschluss richtig eingesetzt.": "In this example, the connector is seated correctly.",
  "Wir prüfen gemeinsam, ob das Gerät wieder startet.": "We check together whether the device starts again.",
  "UNSERE ARBEIT SICHTBAR GEMACHT": "OUR WORK MADE VISIBLE",
  "Erst die Ursache. Dann die Lösung.": "First the cause. Then the solution.",
  "Beispiel: Ein Laptop startet nicht, weil der Stromanschluss nicht richtig sitzt.": "Example: a laptop will not start because its power connection is not seated correctly.",
  "Ablauf ansehen": "Watch the process",
  "Schritt für Schritt": "Step by step",
  "Illustratives Beispiel, keine Diagnose Ihres Geräts. Prüfungen, weitere Arbeiten und Kosten stimmen wir vorab ab.": "Illustrative example, not a diagnosis of your device. We agree on checks, further work and costs in advance.",
  "Ausgangslage": "Starting point",
  "Räume prüfen": "Review the rooms",
  "Standort ergänzen": "Add a location",
  "Verbindung prüfen": "Check the connection",
  "Am Arbeitsplatz kommt keine stabile Verbindung an.": "The workspace does not receive a stable connection.",
  "Wir betrachten Standort, Wände und den Verbindungsweg.": "We examine placement, walls and the connection path.",
  "Ein passender Mesh-Punkt wird eingeplant.": "A suitable mesh point is planned.",
  "Der zusätzliche Standort verbindet die Bereiche im Beispiel.": "In this example, the additional location connects the areas.",
  "Sehen, wo die Verbindung fehlt.": "See where the connection is missing.",
  "Beispiel: Der Arbeitsplatz ist vom Router zu weit entfernt.": "Example: the workspace is too far from the router.",
  "Schematische Darstellung, keine gemessene Reichweite. Ob Mesh, Kabel oder eine andere Lösung passt, prüfen wir vor Ort.": "Schematic illustration, not a measured range. We check on site whether mesh, a cable or another solution fits.",
  "Ihr Einverständnis": "Your consent",
  "Fehler finden": "Find the error",
  "Angabe korrigieren": "Correct the detail",
  "Gemeinsam testen": "Test together",
  "Sie geben die gemeinsame Fernwartung bewusst frei.": "You explicitly authorise the remote support session.",
  "Wir erkennen die unvollständige Serveradresse.": "We identify the incomplete server address.",
  "Die Adresse wird im Beispiel vervollständigt.": "The address is completed in this example.",
  "Wir testen die E-Mail-Funktion und beenden die Sitzung.": "We test the email function and end the session.",
  "Eine Einstellung. Ein sichtbarer Unterschied.": "One setting. A visible difference.",
  "Beispiel: In einem E-Mail-Konto fehlt ein Zeichen in der Serveradresse.": "Example: an email account has a missing character in its server address.",
  "Nur eine Veranschaulichung. Es wird kein Zugriff hergestellt und keine E-Mail gesendet. Zugangsdaten werden nie im Formular abgefragt.": "Illustration only. No access is established and no email is sent. Credentials are never requested in the form.",
  "Auswählen": "Select",
  "Übernahme vorbereiten": "Prepare the transfer",
  "Datei übernehmen": "Transfer the file",
  "Am Ziel prüfen": "Check at the destination",
  "Wir legen fest, welche zugänglichen Dateien mitkommen.": "We agree which accessible files to transfer.",
  "Die Beispieldatei wird für die Übernahme ausgewählt.": "The example file is selected for transfer.",
  "Dieselbe Datei erscheint im vereinbarten Zielordner.": "The same file appears in the agreed destination folder.",
  "Die übernommene Datei wird auf dem neuen PC geöffnet.": "The transferred file is opened on the new PC.",
  "Dieselbe Datei. Am neuen Arbeitsplatz.": "The same file. At your new workspace.",
  "Verfolgen Sie eine Beispieldatei vom bisherigen PC bis zum Öffnen auf dem neuen Gerät.": "Follow an example file from the previous PC to opening it on the new device.",
  "Nur eine animierte Veranschaulichung, keine echte Übertragung. Zugängliche, funktionsfähige Geräte sind Voraussetzung. Keine Datenrettung oder Datensicherung als eigenständige Leistung.": "Animated illustration only, not an actual transfer. Accessible, functioning devices are required. No data recovery or backup as a standalone service.",
  "Wünsche klären": "Clarify needs",
  "Mobilität betrachten": "Review mobility",
  "Ausstattung vergleichen": "Compare specifications",
  "Empfehlung begründen": "Explain the recommendation",
  "Wir beginnen bei Ihrer Nutzung und Ihrem Budget.": "We start with your usage and budget.",
  "Für unterwegs betrachten wir Gewicht und Akku.": "For mobile work, we consider weight and battery life.",
  "Büroaufgaben und Budget bestimmen die sinnvolle Ausstattung.": "Office tasks and budget determine useful specifications.",
  "Wir besprechen, warum ein Gerät zu Ihrer Nutzung passt.": "We discuss why a device fits your usage.",
  "Ihre Wünsche werden zur Auswahl.": "Your needs become selection criteria.",
  "Beispiel: Ein Laptop soll unterwegs und im Büro gut passen.": "Example: a laptop needs to suit mobile and office work.",
  "Die Geräte sind illustrative Beispiele, keine konkrete Modell- oder Preisempfehlung. Wir beraten passend zu Ihren Anforderungen.": "Devices are illustrative examples, not specific model or price recommendations. Advice is tailored to your requirements.",
  "Struktur planen": "Plan the structure",
  "Auftritt gestalten": "Design the presence",
  "Kontakt ermöglichen": "Enable contact",
  "Mobil anpassen": "Adapt for mobile",
  "Wir ordnen Inhalte und Funktionen sinnvoll an.": "We arrange content and features clearly.",
  "Typografie und Bilder geben dem Entwurf eine klare Gestaltung.": "Typography and images give the draft a clear design.",
  "Eine verständliche Kontaktmöglichkeit wird ergänzt.": "A clear way to get in touch is added.",
  "Dieselben Inhalte werden auch auf einem schmalen Bildschirm dargestellt.": "The same content is displayed on a narrow screen too.",
  "Vom Entwurf zum klaren Auftritt.": "From a draft to a clear presence.",
  "Dieselben Inhalte erhalten Gestaltung, eine Kontaktmöglichkeit und eine mobile Darstellung.": "The same content gains design, a way to get in touch and a mobile presentation.",
  "Gestaltungsbeispiel ohne echte Anfrage-, Shop- oder App-Funktion. Den konkreten Umfang planen wir gemeinsam.": "Design example without actual enquiry, shop or app functionality. We plan the specific scope together.",
  "Nachricht kommt an": "Message arrives",
  "Thema erkennen": "Identify the topic",
  "Antwort vorbereiten": "Prepare a reply",
  "Sie geben frei": "You approve",
  "Eine neue Website-Anfrage liegt vor.": "A new website enquiry arrives.",
  "Der Begriff Website führt zur Zuordnung Webprojekt.": "The word website leads to the web project category.",
  "Die erkannten Angaben fließen in einen passenden Entwurf ein.": "The identified details feed into a suitable reply draft.",
  "Der Ablauf wartet auf Ihre Prüfung und Freigabe.": "The workflow waits for your review and approval.",
  "Eine Anfrage wird zum nächsten Schritt.": "An enquiry becomes the next step.",
  "Sehen Sie, wie aus derselben Nachricht eine Zuordnung und ein Antwortentwurf entstehen.": "See how the same message leads to a category and a reply draft.",
  "Lokale Beispielanimation: keine echte KI-Auswertung und kein Versand. KI-Agenten und automatische Antworten werden nach benötigtem Umfang separat angeboten.": "Local example animation: no actual AI processing or sending. AI agents and automatic replies are quoted separately according to the required scope.",
  "Informationen und Kontakt": "Information and contact",
  "an einem Ort.": "in one place.",
  "IT-Hilfe oder ein digitales Projekt?": "IT help or a digital project?",
  "So geht es nach Ihrer Anfrage weiter.": "What happens after your enquiry.",
  "Preise und Leistungsumfang.": "Prices and scope of services.",
  "IT-Service in Wiehl und Umgebung. Wir helfen bei Computer- und Netzwerkproblemen, entwickeln Websites, Apps und Onlineshops und vereinfachen wiederkehrende Aufgaben. Persönlich und verständlich – vor Ort oder per Fernwartung nach Absprache.": "IT support in Wiehl and the surrounding area. We help with computer and network problems, develop websites, apps and online shops, and simplify recurring tasks. Personal, clear support – on site or remotely by arrangement.",
  "Wir klären zuerst Ihr Anliegen und erklären die nächsten Schritte samt Aufwand.": "We first clarify your needs and explain the next steps and the work involved.",
  "Geräte und Aufrüstungen passend zu Ihrer Nutzung und Ihrem Budget auswählen.": "Choose devices and upgrades to suit your usage and budget.",
  "Technik auswählen, die zu Ihnen passt.": "Choose technology that suits your needs.",
  "Ihr Anliegen klären und das Vorgehen abstimmen.": "Clarify your needs and agree on the next steps.",
  "Computerprobleme gezielt prüfen.": "Check computer problems carefully.",
  "Ein langsamer oder ausgefallener Rechner muss nicht sofort ersetzt werden. Wir prüfen die Ursache und besprechen mit Ihnen, ob Reparatur, Aufrüstung oder ein neues Gerät sinnvoll ist.": "A slow or failed computer does not necessarily need replacing. We check the cause and discuss whether repair, an upgrade or a new device makes sense.",
  "Wiederkehrende Aufgaben einfacher erledigen.": "Make recurring tasks easier.",
  "KI-Agenten verständlich erklärt.": "AI agents explained clearly.",
  "Was ein KI-Agent übernehmen kann": "What an AI agent can handle",
  "IT-Hilfe direkt am Bildschirm.": "IT help directly on your screen.",
  "WLAN und Netzwerk passend einrichten.": "Set up Wi-Fi and networking to suit your needs.",
  "Websites, Apps und Shops nach Ihrem Bedarf.": "Websites, apps and shops tailored to your needs.",
  "Den neuen PC startklar machen.": "Get your new PC ready to use.",
  "monochrom angepasst": "adapted to monochrome",
  "Hilfe bei Software, E-Mail und Einstellungen. Abrechnung in 30-Minuten-Einheiten – kurze Einsätze werden nicht pauschal als volle Stunde berechnet.": "Help with software, email and settings. Billed in 30-minute units – short sessions are not automatically charged as a full hour.",
  "Reparatur, Einrichtung und WLAN-Hilfe. Abrechnung im 15-Minuten-Takt – kurze Einsätze werden nicht pauschal als volle Stunde berechnet. Zuzüglich vereinbarter Anfahrt.": "Repairs, setup and Wi-Fi support. Billed in 15-minute units – short visits are not automatically charged as a full hour. Agreed travel charges apply separately.",
  "IT-Service & digitale Lösungen in Wiehl": "IT support & digital solutions in Wiehl",
  "Wir helfen bei PC- und WLAN-Problemen und setzen Websites, Apps und Automatisierungen um. Persönlich, verständlich und nach Absprache vor Ort oder per Fernwartung.": "We help with PC and Wi-Fi problems and build websites, apps and automations. Personal, clear support – on site or remotely by arrangement.",
  "Vorher abgestimmt": "Agreed beforehand",
  "Vorgehen und mögliche Kosten klären wir mit Ihnen.": "We agree the approach and potential costs with you."
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
      success: 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns schnellstmöglich bei Ihnen.',
      error: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@solux-it.de.',
      unknown: 'Die Übermittlung konnte nicht bestätigt werden. Bitte prüfen Sie vor einer erneuten Anfrage oder schreiben Sie an info@solux-it.de.'
    },
    en: {
      sending: 'Sending your enquiry …',
      success: 'Thank you! Your enquiry has been sent successfully. We will get back to you as soon as possible.',
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
    if (current === 'error' || current === 'unknown') {
      const link = document.createElement('a');
      link.href = 'mailto:info@solux-it.de';
      link.textContent = document.documentElement.lang === 'en' ? 'Email us' : 'E-Mail schreiben';
      output.append(document.createTextNode(' '), link);
    }
  }
  document.addEventListener('solux:languagechange', () => forms.forEach(render));
  forms.forEach(form => {
    if (!form.querySelector('.form-status') || !window.fetch || !window.AbortController) return;
    let pending = false;
    form.addEventListener('input', event => {
      if (event.target.setCustomValidity) event.target.setCustomValidity('');
    });
    document.addEventListener('solux:languagechange', () => {
      form.querySelectorAll('input,textarea').forEach(field => field.setCustomValidity(''));
    });
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (pending) return;
      const english = document.documentElement.lang === 'en';
      const fields = ['name', 'kontakt', 'nachricht'].map(name => form.querySelector('[name="' + name + '"]'));
      fields.forEach(field => {
        if (!field) return;
        const value = field.value.trim();
        let message = '';
        if (!value) {
          message = field.name === 'name' ? (english ? 'Please enter your name.' : 'Bitte geben Sie Ihren Namen ein.')
            : field.name === 'kontakt' ? (english ? 'Please enter a phone number or email address where we can reach you.' : 'Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an, unter der wir Sie erreichen können.')
            : (english ? 'Please briefly describe your enquiry.' : 'Bitte beschreiben Sie kurz Ihr Anliegen.');
        } else if (field.name === 'kontakt') {
          const valid = value.includes('@') ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : value.replace(/\D/g, '').length >= 6;
          if (!valid) message = english ? 'Please check your phone number or email address.' : 'Bitte prüfen Sie Ihre Telefonnummer oder E-Mail-Adresse.';
        }
        field.setCustomValidity(message);
      });
      if (!form.reportValidity()) return;
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
        ['name', 'kontakt', 'nachricht'].forEach(name => {
          if (typeof payload[name] === 'string') payload[name] = payload[name].trim();
        });
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
        const output = form.querySelector('.form-status');
        if (output) {
          output.tabIndex = -1;
          output.focus({preventScroll: true});
          if (output.getBoundingClientRect) {
            const bounds = output.getBoundingClientRect();
            if (bounds.bottom > window.innerHeight || bounds.top < 0) {
              const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              output.scrollIntoView({block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth'});
            }
          }
        }
      }
    });
  });
})();

// Native mobile menu remains functional without JavaScript.
(() => {
  const menus = [...document.querySelectorAll('details.mobile-nav')];
  const close = (menu, focus) => {
    if (!menu.open) return;
    menu.open = false;
    if (focus) menu.querySelector('summary').focus();
  };
  document.addEventListener('click', event => {
    menus.forEach(menu => {
      if (menu.contains(event.target)) {
        if (event.target.closest('a[href]')) close(menu, false);
      } else close(menu, false);
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') menus.forEach(menu => close(menu, true));
  });
})();

// A fine header edge gains depth once content passes underneath it.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, {passive: true});
  window.addEventListener('pageshow', update);
})();

// Repeat scroll entry after a block has fully left the viewport, with a buffer against flicker.
(() => {
  if (!('IntersectionObserver' in window) || !window.matchMedia) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;
  const main = document.querySelector('main');
  if (!main) return;
  const selectors = [
    '.section-heading', '.service-group-heading', '.service-card',
    '.proof-inner > div', '.detail-grid > div', '.process-card',
    '.process-photo-wrap', '.statement-grid > div', '.price-intro > *',
    '.rate-row', '.rate-details', '.faq-grid > div:first-child', '.faq-item',
    '.contact-copy', '.contact-form', '.service-guidance',
    '.workflow-route > li', '.service-rate > .container > div', '.workflow-related'
  ].join(',');
  const candidates = [...main.querySelectorAll(selectors)].filter(element =>
    !element.closest('.hero, .inner-hero, .legal-hero, .tech-track')
  );
  const set = new Set(candidates);
  const targets = candidates.filter(element => {
    let parent = element.parentElement;
    while (parent && parent !== main) {
      if (set.has(parent)) return false;
      parent = parent.parentElement;
    }
    return true;
  });
  const delays = new Map();
  const show = (element, instant = false) => {
    if (instant) {
      element.style.setProperty('--scroll-reveal-delay', '0ms');
      element.style.transition = 'none';
    }
    element.dataset.scrollState = 'visible';
  };
  const arm = element => {
    element.style.removeProperty('transition');
    element.style.setProperty('--scroll-reveal-delay', delays.get(element) || '0ms');
    element.dataset.scrollState = 'pending';
  };
  let observer;
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (motion.matches || !entry.isIntersecting || entry.intersectionRatio <= 0) return;
        if (entry.target.dataset.scrollState === 'pending') show(entry.target);
      });
    }, {rootMargin: '0px', threshold: [0, 0.01]});
    const groupCounts = new Map();
    targets.forEach(element => {
      const bounds = element.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const parent = element.parentElement;
      const index = groupCounts.get(parent) || 0;
      groupCounts.set(parent, index + 1);
      const delay = Math.min(index * 65, 160) + 'ms';
      delays.set(element, delay);
      element.style.setProperty('--scroll-reveal-delay', delay);
      element.classList.add('scroll-reveal');
      if (bounds.top < window.innerHeight && bounds.bottom > 0) show(element);
      else arm(element);
      observer.observe(element);
    });
  } catch (_) {
    targets.forEach(element => show(element, true));
    if (observer) observer.disconnect();
    return;
  }
  let scheduled = false;
  const resetOutside = () => {
    scheduled = false;
    if (motion.matches) return;
    const reset = [];
    // Read first, then mutate; the 40px buffer is larger than the 28px animation offset.
    // This prevents the animation itself from continually entering/leaving the observer.
    targets.forEach(element => {
      if (element.dataset.scrollState !== 'visible') return;
      if (document.activeElement && element.contains(document.activeElement)) return;
      const bounds = element.getBoundingClientRect();
      if (bounds.width && bounds.height && (bounds.bottom < -40 || bounds.top > window.innerHeight + 40)) reset.push(element);
    });
    reset.forEach(arm);
  };
  window.addEventListener('scroll', () => {
    if (scheduled || motion.matches) return;
    scheduled = true;
    window.requestAnimationFrame(resetOutside);
  }, {passive: true});
  const reduced = () => {
    if (!motion.matches) return;
    targets.forEach(element => show(element, true));
    observer.disconnect();
  };
  if (motion.addEventListener) motion.addEventListener('change', reduced);
  else if (motion.addListener) motion.addListener(reduced);
  document.addEventListener('focusin', event => {
    if (!event.target.closest) return;
    const element = event.target.closest('.scroll-reveal');
    if (element && element.dataset.scrollState === 'pending') show(element, true);
  });
  window.addEventListener('pageshow', () => {
    targets.forEach(element => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) show(element, true);
    });
    resetOutside();
  });
})();

// Solux motion update: native details fallback, interruptible open AND close.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('details.faq-item, details.rate-details').forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    let animation = null;
    let expanded = details.open;
    const settle = () => {
      if (animation) animation.cancel();
      animation = null;
      details.open = expanded;
      details.style.overflow = '';
      summary.setAttribute('aria-expanded', String(expanded));
      const icon = summary.querySelector('[aria-hidden="true"]');
      if (icon && /^[+−–-]$/.test(icon.textContent.trim())) icon.textContent = expanded ? '−' : '+';
    };
    settle();
    summary.addEventListener('click', event => {
      event.preventDefault();
      const from = details.getBoundingClientRect().height;
      if (animation) animation.cancel();
      expanded = !expanded;
      details.open = true;
      summary.setAttribute('aria-expanded', String(expanded));
      const icon = summary.querySelector('[aria-hidden="true"]');
      if (icon && /^[+−–-]$/.test(icon.textContent.trim())) icon.textContent = expanded ? '−' : '+';
      const to = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + (parseFloat(getComputedStyle(details).borderTopWidth) || 0) + (parseFloat(getComputedStyle(details).borderBottomWidth) || 0);
      if (reduce.matches || !details.animate) { settle(); return; }
      details.style.overflow = 'hidden';
      animation = details.animate([{height: `${from}px`}, {height: `${to}px`}], {duration: 240, easing: 'cubic-bezier(.2,.7,.2,1)'});
      animation.onfinish = settle;
    });
    const preferenceChanged = () => { if (reduce.matches) settle(); };
    if (reduce.addEventListener) reduce.addEventListener('change', preferenceChanged);
    document.addEventListener('solux:languagechange', settle);
    window.addEventListener('resize', settle);
  });
})();

// Only local sections participate; cross-page navigation remains ordinary links.
(() => {
  const links = [...document.querySelectorAll('.main-nav a[href]')];
  const local = [];
  const canonical = path => path.replace(/\/index\.html$/, '/');
  links.forEach(link => {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || canonical(url.pathname) !== canonical(location.pathname)) return;
    if (!url.hash) { link.setAttribute('aria-current', 'page'); return; }
    let section;
    try { section = document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch (_) { return; }
    if (section) local.push({link, section});
  });
  if (!local.length) return;
  let queued = false;
  const update = () => {
    queued = false;
    const header = document.querySelector('.site-header');
    const edge = (header ? header.getBoundingClientRect().bottom : 0) + 100;
    let current = null;
    local.forEach(({section}) => {
      const bounds = section.getBoundingClientRect();
      if (bounds.top <= edge && bounds.bottom > edge) current = section;
    });
    local.forEach(({link,section}) => {
      if (section === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  document.addEventListener('solux:languagechange', schedule);
  update();
})();

// Seven authored scenes: a single state controls the visible action and its explanation.
(() => {
 document.querySelectorAll('[data-ax-demo]').forEach(demo => {
  const captions=[...demo.querySelectorAll('[data-ax-caption]')],stages=[...demo.querySelectorAll('[data-ax-stage]')];
  const controls=demo.querySelector('.ax-controls'),play=demo.querySelector('.ax-play'),manual=demo.querySelector('.ax-manual'),pause=demo.querySelector('.ax-pause'),status=demo.querySelector('.ax-status'),art=demo.querySelector('.ax-art');
  if(captions.length!==4||!controls||!play||!manual||!pause||!art)return;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)'),small=window.matchMedia('(max-width:650px)');
  let step=0,timer=null,paused=false,automatic=false,approved=false,remaining=2800,due=0;
  const words={de:{start:'Ablauf ansehen',next:'Weiter',replay:'Noch einmal',manual:'Schritt für Schritt',pause:'Anhalten',resume:'Fortsetzen',approve:'Freigabe simulieren',approved:'Im Beispiel freigegeben. Es wurde nichts versendet.',paused:'Animation angehalten.'},en:{start:'Watch the process',next:'Next',replay:'Play again',manual:'Step by step',pause:'Pause',resume:'Resume',approve:'Simulate approval',approved:'Approved in this example. Nothing has been sent.',paused:'Animation paused.'}};
  const stop=()=>{if(timer!==null){clearTimeout(timer);timer=null;}};
  const visualAnimations=()=>art.getAnimations?art.getAnimations({subtree:true}):[];
  const resumeVisuals=()=>visualAnimations().forEach(animation=>{if(animation.playState==='paused')animation.play();});
  const resize=()=>{art.setAttribute('viewBox',small.matches?art.dataset.mobileViewbox:'0 0 1000 480');};
  const render=(announce=false)=>{
   const w=words[document.documentElement.lang==='en'?'en':'de'];
   demo.dataset.step=String(step);demo.classList.toggle('ax-paused',paused);demo.classList.toggle('ax-approved',approved);
   captions.forEach((caption,index)=>caption.hidden=index!==step);
   stages.forEach((stage,index)=>{if(index===step)stage.setAttribute('aria-current','step');else stage.removeAttribute('aria-current');stage.classList.toggle('ax-done',index<step);});
   play.textContent=paused?w.resume:step===0?w.start:step===3?(demo.dataset.axDemo==='automation'&&!approved?w.approve:w.replay):w.next;
   manual.textContent=w.manual;manual.hidden=step!==0;pause.textContent=w.pause;pause.hidden=!automatic||paused||step===0||step===3||motion.matches;
   if(announce)status.textContent=paused?w.paused:approved?w.approved:captions[step].querySelector('p').textContent;
   if(approved)captions[3].querySelector('p').textContent=w.approved;
  };
  // Keep the original approval sentence independently of the language text walker.
  const approvalCopy={de:'Der Ablauf wartet auf Ihre Prüfung und Freigabe.',en:'The workflow waits for your review and approval.'};
  const restoreApproval=()=>{if(demo.dataset.axDemo==='automation')captions[3].querySelector('p').textContent=approvalCopy[document.documentElement.lang==='en'?'en':'de'];};
  const schedule=()=>{stop();if(!automatic||paused||motion.matches||step===0||step===3)return;due=Date.now()+remaining;timer=setTimeout(()=>advance(),remaining);};
  const advance=()=>{stop();if(step<3){step++;paused=false;remaining=step===2?3200:2800;render(true);schedule();}};
  const start=auto=>{automatic=auto&&!motion.matches;approved=false;restoreApproval();step=1;paused=false;remaining=2800;render(true);schedule();};
  play.addEventListener('click',()=>{
   if(step===0)start(true);
   else if(paused){paused=false;resumeVisuals();render(true);schedule();}
   else if(step<3)advance();
   else if(demo.dataset.axDemo==='automation'&&!approved){approved=true;render(true);}
   else{stop();step=0;approved=false;paused=false;automatic=false;restoreApproval();render(true);}
  });
  manual.addEventListener('click',()=>{start(false);play.focus();});
  const hold=()=>{if(step===0||step===3||paused||!automatic)return;if(timer!==null)remaining=Math.max(0,due-Date.now());stop();paused=true;visualAnimations().forEach(animation=>animation.pause());render(true);};
  pause.addEventListener('click',()=>{hold();play.focus();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)hold();});
  document.addEventListener('solux:languagechange',()=>{if(!approved)restoreApproval();render(Boolean(status.textContent));});
  if(motion.addEventListener)motion.addEventListener('change',()=>{hold();if(motion.matches){automatic=false;paused=false;resumeVisuals();render(true);if(document.activeElement===pause)play.focus();}});
  if(small.addEventListener)small.addEventListener('change',resize);
  demo.classList.add('ax-enhanced');controls.hidden=false;resize();render();
 });
})();
