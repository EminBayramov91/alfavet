export const locales = ["az", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
};

export const dictionaries = {
  az: {
    nav: {
      about: "Haqqımızda",
      services: "Xidmətlər",
      gallery: "Qalereya",
      blog: "Bloq",
      contacts: "Əlaqə",
      book: "Qəbula yazıl",
      menu: "Menyu",
      close: "Bağla",
      theme: "Mövzunu dəyiş",
      language: "Dil seçimi",
    },
    hero: {
      eyebrow: "Alfavet baytarlıq klinikası",
      title: "Ev heyvanınız üçün ən yaxşı seçim",
      lead: "Bakıdakı Alfavet komandası müayinə, diaqnostika, vaksinasiya və sənədləşməni bir yerdə, əvvəlcədən yazılışla təşkil edir.",
      primary: "Qəbula yazıl",
      secondary: "Xidmətlərə bax",
    },
    aboutPage: {
      heroEyebrow: "Klinika haqqında",
      heroTitle: "Bakıda ev heyvanları üçün baytarlıq xidməti",
      heroLead:
        "Alfavet peşəkar tibbi yardım, diaqnostika və sənədləşməni bir klinikada birləşdirir ki, sahib müalicə üçün müxtəlif ünvanlara getməsin.",
      primary: "Qəbula yazıl",
      secondary: "Xidmətlərə bax",
      stats: [
        { value: "2015", label: "ildən fəaliyyət göstərir" },
        { value: "24h", label: "əksər analiz nəticələri üçün" },
        { value: "1", label: "ünvanda müayinə, diaqnostika və müalicə" },
      ],
      storyEyebrow: "Fəlsəfə",
      storyTitle: "Məqsəd sadədir: tibbi dəqiqlik və etibar hissi",
      storyText:
        "Klinika heyvanlara peşəkar tibbi yardımı qayğı və etibar atmosferində göstərmək üçün yaradılıb. Komanda yalnız müalicə etmir, həm də sahibə vəziyyəti və növbəti addımları sakit şəkildə izah edir.",
      storyBlocks: [
        {
          eyebrow: "Fəlsəfə",
          title: "Məqsəd sadədir: tibbi dəqiqlik və etibar hissi",
          description:
            "Klinika heyvanlara peşəkar tibbi yardımı qayğı və etibar atmosferində göstərmək üçün yaradılıb. Komanda yalnız müalicə etmir, həm də sahibə vəziyyəti və növbəti addımları sakit şəkildə izah edir.",
        },
        {
          eyebrow: "Qəbul",
          title: "Ayrı kabinetlər və sakit müayinə",
          description:
            "Pasiyent digər heyvanlarla təmas etmədən müayinə olunur. Bu, həm heyvanın stressini azaldır, həm də həkimə sahib ilə daha rahat danışmağa imkan verir.",
        },
        {
          eyebrow: "Diaqnostika",
          title: "Analiz, rentgen və USM eyni klinikadadır",
          description:
            "Laboratoriya, rentgen kabineti və ultrasəs müayinəsi müalicə qərarını daha sürətli və dəqiq qurmağa kömək edir.",
        },
      ],
      principles: [
        {
          title: "Ayrı kabinetlərdə qəbul",
          description: "Pasiyent digər heyvanlarla təmas etmədən müayinə olunur və həkim sahib ilə rahat danışa bilir.",
        },
        {
          title: "Diaqnostika bir yerdə",
          description: "Laboratoriya, rentgen və USM imkanları müalicə qərarını daha sürətli və dəqiq qurmağa kömək edir.",
        },
        {
          title: "Çətin hallarda səbr",
          description: "Komanda mürəkkəb klinik hallarda da pasiyentin sağlamlığı üçün ardıcıl çalışır.",
        },
      ],
      processEyebrow: "Klinikanın imkanları",
      processTitle: "Müayinə, analiz və müalicə üçün əsas imkanlar eyni məkandadır",
      process: [
        {
          title: "Laboratoriya",
          description: "Əksər analizlərin cavabı qısa müddətdə hazır olur və həkim növbəti addımı izah edir.",
        },
        {
          title: "Rentgen və USM",
          description: "Daxili orqanların və sümük strukturlarının yoxlanması üçün diaqnostik imkanlar var.",
        },
        {
          title: "Terapiya və cərrahiyyə",
          description: "Klinikada terapiya, əməliyyatlar, stomatologiya, vaksinasiya və pasport sənədləri aparılır.",
        },
      ],
      teamEyebrow: "Komanda",
      teamTitle: "Heyvanlara sevgi və məsuliyyətlə yanaşan həkimlər",
      teamLead: "Klinikada qəbul kvalifikasiyalı baytar həkimlər tərəfindən aparılır.",
      teamMembers: [
        { name: "Rüfət Abasov", role: "Baytar həkim" },
        { name: "Alla Abasova", role: "Baytar həkim" },
        { name: "Orxan Hacılı", role: "Baytar həkim" },
      ],
      ctaTitle: "Ev heyvanınız üçün növbəti addımı planlayaq",
      ctaText: "Qəbul əvvəlcədən yazılışla aparılır ki, komanda sizə və pasiyentə sakit vaxt ayıra bilsin.",
    },
    services: {
      eyebrow: "Xidmətlər",
      title: "Gündəlik baxımdan diaqnostikaya qədər",
      description:
        "Əsas istiqamətlər ilk ekranda aydın görünür, daha detallı səhifələri isə sonrakı mərhələdə ayrıca açacağıq.",
      items: [
        {
          title: "Klinik müayinə",
          description: "Ümumi vəziyyətin qiymətləndirilməsi və fərdi müalicə planı.",
        },
        {
          title: "Terapiya",
          description: "Kəskin və xroniki hallarda müşahidə və müalicə.",
        },
        {
          title: "Vaksinasiya",
          description: "Yaşa və sağlamlıq vəziyyətinə uyğun peyvənd cədvəli.",
        },
        {
          title: "Analizlərin götürülməsi",
          description: "Laborator yoxlamalar üçün nümunələrin düzgün götürülməsi.",
        },
        {
          title: "Cərrahiyyə",
          description: "Planlı əməliyyatlar və əməliyyat sonrası nəzarət.",
        },
        {
          title: "Stomatologiya",
          description: "Ağız boşluğu, diş və damaq problemlərinin müayinəsi.",
        },
        {
          title: "Çipləmə",
          description: "Ev heyvanlarının identifikasiyası üçün mikroçip tətbiqi.",
        },
        {
          title: "Rentgenologiya",
          description: "Sümük və daxili strukturların görüntülənməsi.",
        },
        {
          title: "Laborator diaqnostika",
          description: "Analiz nəticələrinə əsaslanan daha dəqiq qərarlar.",
        },
        {
          title: "Instrumental diaqnostika",
          description: "Müasir cihazlarla əlavə müayinə imkanları.",
        },
        {
          title: "Ultrasəs müayinəsi",
          description: "Qarın boşluğu və yumşaq toxumaların USM yoxlaması.",
        },
        {
          title: "Baytarlıq pasportu",
          description: "Səfər və qeydiyyat üçün lazımi sənədlərin hazırlanması.",
        },
      ],
    },
    approach: {
      eyebrow: "Yanaşma",
      title: "Klinika hissi daha sakit və etibarlı olmalıdır",
      description:
        "Yeni ana səhifə Alfavet-i daha zərif, oxunaqlı və etibarlı göstərir: az mətn, güclü vizual ritm, aydın çağırışlar.",
      items: [
        {
          title: "Sakit qəbul",
          description: "Yazılışla qəbul növbəni azaldır və heyvan üçün stressi yüngülləşdirir.",
        },
        {
          title: "Aydın diaqnostika",
          description: "Xidmətlər kartlarda qruplaşdırılıb ki, sahib nə axtardığını tez tapsın.",
        },
        {
          title: "Davamlı əlaqə",
          description: "Telefon, WhatsApp və xəritə eyni blokda toplanıb.",
        },
      ],
    },
    partners: {
      eyebrow: "Tərəfdaş brendlər",
      title: "Klinikada tanınan və etibarlı məhsullar",
    },
    galleryPage: {
      eyebrow: "Qalereya",
      title: "Klinikadan real anlar",
      lead: "Alfavet-in məkanı, pasiyentləri və gündəlik iş ritmi bir sliderdə toplanıb.",
      previous: "Əvvəlki şəkil",
      next: "Növbəti şəkil",
      slideLabel: "Şəkil",
      slides: [
        { title: "Qəbul məkanı", description: "Klinikanın gündəlik iş atmosferi." },
        { title: "Diqqətli nəzarət", description: "Pasiyentlər qəbul zamanı həkim nəzarətində olur." },
        { title: "Müayinə anı", description: "Həkim, sahib və pasiyent arasında sakit ünsiyyət." },
        { title: "Kiçik pasiyentlər", description: "Pişik balaları üçün yumşaq və diqqətli yanaşma." },
        { title: "İlk baxış", description: "Müayinə zamanı heyvanın rahatlığı əsasdır." },
        { title: "Müalicə prosesi", description: "Təyin olunan prosedurlar nəzarətlə aparılır." },
        { title: "Klinika otaqları", description: "Müayinə və diaqnostika üçün hazırlanmış məkan." },
        { title: "Səbirli baxım", description: "Hər pasiyentə fərdi yanaşma seçilir." },
        { title: "Komanda işi", description: "Həkimlərin təcrübəsi klinikanın əsas gücüdür." },
        { title: "Alfavet komandası", description: "Heyvanlara qayğı ilə yanaşan peşəkar komanda." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Tez-tez verilən suallar",
      items: [
        {
          question: "Qəbula əvvəlcədən yazılmaq lazımdır?",
          answer:
            "Bəli, qəbul əvvəlcədən yazılışla aparılır. Beləliklə komanda hər pasiyentə daha sakit və diqqətli vaxt ayıra bilir.",
        },
        {
          question: "İlk vaksini nə vaxt etdirmək olar?",
          answer:
            "Adətən ilk vaksin 6-8 həftəlik yaşdan planlanır, amma dəqiq qərar müayinə və heyvanın vəziyyətindən sonra verilir.",
        },
        {
          question: "Baytarlıq pasportu almaq mümkündür?",
          answer:
            "Bəli, klinikada baytarlıq pasportu və əlaqəli sənədlərin hazırlanması mümkündür.",
        },
        {
          question: "Sterilizasiya və kastrasiya edirsiniz?",
          answer:
            "Bəli. Əməliyyatdan əvvəl həkim müayinə və lazım olduqda əlavə analizlər təyin edir.",
        },
        {
          question: "Klinika hansı heyvanları qəbul edir?",
          answer:
            "Əsasən pişik və itlər qəbul edilir. Ekzotik və digər kiçik heyvanlar üçün əvvəlcədən zənglə dəqiqləşdirmək yaxşıdır.",
        },
      ],
    },
    contacts: {
      eyebrow: "Əlaqə",
      title: "Qəbula yazılmaq və ünvanı tapmaq",
      phone: "Telefon",
      email: "Email",
      address: "Ünvan",
      hours: "İş prinsipi",
      hoursText: "Qəbul əvvəlcədən yazılışla aparılır",
      addressText: "52, Magsud Alizade, Narimanov rayonu, Bakı, Azərbaycan",
      about: "Klinika haqqında",
      whatsapp: "WhatsApp",
      map: "Klinikanı xəritədə aç",
      resetMap: "Ünvana qayıt",
    },
    footer: {
      clinic: "Klinika",
      services: "Xidmətlər",
      contact: "Əlaqə",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      blog: "Blog",
      contacts: "Contacts",
      book: "Book a visit",
      menu: "Menu",
      close: "Close",
      theme: "Toggle theme",
      language: "Choose language",
    },
    hero: {
      eyebrow: "Alfavet veterinary clinic",
      title: "The best choice for your pet",
      lead: "Alfavet in Baku brings examination, diagnostics, vaccination and paperwork into one clear appointment-led experience.",
      primary: "Book a visit",
      secondary: "View services",
    },
    aboutPage: {
      heroEyebrow: "About the clinic",
      heroTitle: "Veterinary care for pets in Baku",
      heroLead:
        "Alfavet brings medical care, diagnostics and paperwork into one clinic, so owners do not need to visit several places for examination and treatment.",
      primary: "Book a visit",
      secondary: "View services",
      stats: [
        { value: "2015", label: "serving pets since" },
        { value: "24h", label: "for most laboratory results" },
        { value: "1", label: "address for examination, diagnostics and care" },
      ],
      storyEyebrow: "Philosophy",
      storyTitle: "The goal is simple: medical precision with a feeling of trust",
      storyText:
        "The clinic was created to provide professional medical help in an atmosphere of care and trust. The team treats patients and explains the situation clearly to owners.",
      storyBlocks: [
        {
          eyebrow: "Philosophy",
          title: "The goal is simple: medical precision with a feeling of trust",
          description:
            "The clinic was created to provide professional medical help in an atmosphere of care and trust. The team treats patients and explains the situation clearly to owners.",
        },
        {
          eyebrow: "Visits",
          title: "Separate rooms for calmer examinations",
          description:
            "Pets are examined without contact with other animals. This helps reduce stress and gives the doctor space to speak calmly with the owner.",
        },
        {
          eyebrow: "Diagnostics",
          title: "Tests, X-ray and ultrasound in one clinic",
          description:
            "A laboratory, X-ray room and ultrasound equipment help the team make faster, more precise treatment decisions.",
        },
      ],
      principles: [
        {
          title: "Separate examination rooms",
          description: "Pets are examined without contact with other animals, and the doctor can speak calmly with the owner.",
        },
        {
          title: "Diagnostics in one place",
          description: "A laboratory, X-ray room and ultrasound equipment help the team make faster, more precise decisions.",
        },
        {
          title: "Persistence in complex cases",
          description: "The team keeps working through difficult clinical situations to protect the patient's health.",
        },
      ],
      processEyebrow: "Clinic capabilities",
      processTitle: "Examination, tests and treatment are organized in one place",
      process: [
        {
          title: "Laboratory",
          description: "Most test results are ready quickly, and the doctor explains the next step.",
        },
        {
          title: "X-ray and ultrasound",
          description: "The clinic has diagnostic tools for checking internal organs and bone structures.",
        },
        {
          title: "Therapy and surgery",
          description: "The clinic handles therapy, operations, dentistry, vaccination and veterinary documents.",
        },
      ],
      teamEyebrow: "Team",
      teamTitle: "Doctors who treat animals with care and responsibility",
      teamLead: "Qualified veterinarians handle visits at the clinic.",
      teamMembers: [
        { name: "Rufat Abasov", role: "Veterinary doctor" },
        { name: "Alla Abasova", role: "Veterinary doctor" },
        { name: "Orkhan Gadjily", role: "Veterinary doctor" },
      ],
      ctaTitle: "Let's plan the next step for your pet",
      ctaText: "Visits are handled by appointment so the team can give you and your pet focused, calm time.",
    },
    services: {
      eyebrow: "Services",
      title: "From everyday care to diagnostics",
      description:
        "The first homepage pass makes the core services clear now, with deeper service pages ready to grow later.",
      items: [
        {
          title: "Clinical examination",
          description: "General health assessment and a personal care plan.",
        },
        {
          title: "Therapy",
          description: "Treatment and follow-up for acute and chronic cases.",
        },
        {
          title: "Vaccination",
          description: "Vaccination schedule matched to age and health status.",
        },
        {
          title: "Sample collection",
          description: "Careful collection for laboratory testing.",
        },
        {
          title: "Surgery",
          description: "Planned procedures with post-operative supervision.",
        },
        {
          title: "Dentistry",
          description: "Examination of teeth, gums and oral health.",
        },
        {
          title: "Microchipping",
          description: "Reliable pet identification with microchip placement.",
        },
        {
          title: "Radiology",
          description: "Imaging for bones and internal structures.",
        },
        {
          title: "Laboratory diagnostics",
          description: "More precise decisions supported by test results.",
        },
        {
          title: "Instrumental diagnostics",
          description: "Additional exams with modern clinical equipment.",
        },
        {
          title: "Ultrasound",
          description: "Ultrasound checks for soft tissue and abdominal organs.",
        },
        {
          title: "Veterinary passport",
          description: "Documents for registration, travel and vaccination history.",
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      title: "A clinic website should feel calmer and more trustworthy",
      description:
        "This first homepage direction gives Alfavet a more elegant rhythm: fewer distractions, clearer calls to action and a warmer clinical tone.",
      items: [
        {
          title: "Calmer visits",
          description: "Appointment-led flow reduces waiting and makes the visit easier for pets.",
        },
        {
          title: "Clear diagnostics",
          description: "Service cards help owners quickly understand where to start.",
        },
        {
          title: "Easy contact",
          description: "Phone, WhatsApp and map access sit together where people need them.",
        },
      ],
    },
    partners: {
      eyebrow: "Partner brands",
      title: "Recognized products used and trusted in the clinic",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Real moments from the clinic",
      lead: "A visual pass through Alfavet's space, patients and everyday clinical rhythm.",
      previous: "Previous photo",
      next: "Next photo",
      slideLabel: "Photo",
      slides: [
        { title: "Reception space", description: "The everyday atmosphere inside the clinic." },
        { title: "Careful supervision", description: "Patients stay under doctor supervision during visits." },
        { title: "Examination moment", description: "Calm communication between doctor, owner and patient." },
        { title: "Small patients", description: "A gentle approach for kittens and young pets." },
        { title: "First look", description: "Comfort matters from the first examination." },
        { title: "Treatment flow", description: "Prescribed procedures are handled with attention." },
        { title: "Clinic rooms", description: "Spaces prepared for examination and diagnostics." },
        { title: "Patient care", description: "Every patient gets an individual approach." },
        { title: "Team work", description: "The doctors' experience is the clinic's main strength." },
        { title: "Alfavet team", description: "A professional team caring for animals with attention." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Do I need to book an appointment in advance?",
          answer:
            "Yes. Visits are handled by appointment so the team can give every patient calmer, more focused attention.",
        },
        {
          question: "When can a puppy or kitten receive the first vaccine?",
          answer:
            "The first vaccine is often planned from 6-8 weeks of age, but the vet makes the final call after an examination.",
        },
        {
          question: "Can I get a veterinary passport at the clinic?",
          answer:
            "Yes. Alfavet can prepare a veterinary passport and related documents.",
        },
        {
          question: "Do you perform sterilization and castration?",
          answer:
            "Yes. The vet examines the pet first and may request tests before surgery.",
        },
        {
          question: "Which animals does the clinic accept?",
          answer:
            "The clinic mainly accepts cats and dogs. For exotic pets or other small animals, it is best to confirm by phone first.",
        },
      ],
    },
    contacts: {
      eyebrow: "Contacts",
      title: "Book a visit and find the clinic",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Visit format",
      hoursText: "Visits are handled by appointment",
      addressText: "52, Magsud Alizade, Narimanov district, Baku, Azerbaijan",
      about: "About clinic",
      whatsapp: "WhatsApp",
      map: "Open clinic in maps",
      resetMap: "Back to clinic",
    },
    footer: {
      clinic: "Clinic",
      services: "Services",
      contact: "Contact",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      services: "Услуги",
      gallery: "Галерея",
      blog: "Блог",
      contacts: "Контакты",
      book: "Записаться",
      menu: "Меню",
      close: "Закрыть",
      theme: "Переключить тему",
      language: "Выбор языка",
    },
    hero: {
      eyebrow: "Ветеринарная клиника Alfavet",
      title: "Лучший выбор для вашего питомца",
      lead: "Alfavet в Баку объединяет осмотр, диагностику, вакцинацию и оформление документов в понятный приём по записи.",
      primary: "Записаться",
      secondary: "Смотреть услуги",
    },
    aboutPage: {
      heroEyebrow: "О клинике",
      heroTitle: "Ветеринарная помощь питомцам в Баку",
      heroLead:
        "Alfavet объединяет медицинскую помощь, диагностику и оформление документов в одной клинике, чтобы владельцу не приходилось ездить в разные места для обследования и лечения.",
      primary: "Записаться",
      secondary: "Смотреть услуги",
      stats: [
        { value: "2015", label: "работаем с" },
        { value: "24h", label: "для большинства результатов анализов" },
        { value: "1", label: "адрес для осмотра, диагностики и помощи" },
      ],
      storyEyebrow: "Философия",
      storyTitle: "Цель простая: медицинская точность и доверительная атмосфера",
      storyText:
        "Клиника была основана, чтобы оказывать животным профессиональную медицинскую помощь в атмосфере заботы и доверия. Команда не только лечит, но и спокойно объясняет владельцу состояние питомца и следующие шаги.",
      storyBlocks: [
        {
          eyebrow: "Философия",
          title: "Цель простая: медицинская точность и доверительная атмосфера",
          description:
            "Клиника была основана, чтобы оказывать животным профессиональную медицинскую помощь в атмосфере заботы и доверия. Команда не только лечит, но и спокойно объясняет владельцу состояние питомца и следующие шаги.",
        },
        {
          eyebrow: "Приём",
          title: "Отдельные кабинеты и спокойный осмотр",
          description:
            "Питомец не контактирует с другими животными во время приёма. Это снижает стресс и даёт врачу возможность спокойно поговорить с владельцем.",
        },
        {
          eyebrow: "Диагностика",
          title: "Анализы, рентген и УЗИ в одной клинике",
          description:
            "Собственная лаборатория, рентген-кабинет и УЗИ помогают быстрее и точнее принимать решения по лечению.",
        },
      ],
      principles: [
        {
          title: "Отдельные кабинеты",
          description: "Питомец не контактирует с другими животными, может спокойнее пройти осмотр, а врач — поговорить с владельцем.",
        },
        {
          title: "Диагностика на месте",
          description: "Собственная лаборатория, рентген-кабинет и УЗИ помогают быстрее и точнее принимать решения.",
        },
        {
          title: "Сложные случаи",
          description: "Команда продолжает бороться за здоровье пациентов даже в непростых клинических ситуациях.",
        },
      ],
      processEyebrow: "Возможности клиники",
      processTitle: "Осмотр, анализы и лечение собраны в одном месте",
      process: [
        {
          title: "Лаборатория",
          description: "Большинство результатов анализов можно получить быстро, а врач объяснит дальнейшие действия.",
        },
        {
          title: "Рентген и УЗИ",
          description: "В клинике есть возможности для диагностики внутренних органов и костных структур.",
        },
        {
          title: "Терапия и хирургия",
          description: "В клинике проводят терапевтическое и хирургическое лечение, стоматологию, вакцинацию и оформление документов.",
        },
      ],
      teamEyebrow: "Команда",
      teamTitle: "Врачи, которые лечат с любовью и заботой",
      teamLead: "Приём в клинике ведут квалифицированные ветеринарные врачи.",
      teamMembers: [
        { name: "Абасов Руфат", role: "Ветеринарный врач" },
        { name: "Абасова Алла", role: "Ветеринарный врач" },
        { name: "Гаджилы Орхан", role: "Ветеринарный врач" },
      ],
      ctaTitle: "Спланируем следующий шаг для вашего питомца",
      ctaText: "Приём ведётся по записи, чтобы команда могла уделить вам и питомцу спокойное, внимательное время.",
    },
    services: {
      eyebrow: "Услуги",
      title: "От ежедневной заботы до диагностики",
      description:
        "На первом этапе главная сразу показывает основные направления, а детальные страницы услуг можно спокойно добавить позже.",
      items: [
        {
          title: "Клинический осмотр",
          description: "Оценка общего состояния и индивидуальный план помощи.",
        },
        {
          title: "Терапия",
          description: "Лечение и наблюдение при острых и хронических состояниях.",
        },
        {
          title: "Вакцинация",
          description: "График прививок с учётом возраста и здоровья питомца.",
        },
        {
          title: "Сбор анализов",
          description: "Аккуратный забор материалов для лабораторных исследований.",
        },
        {
          title: "Хирургия",
          description: "Плановые операции и послеоперационное наблюдение.",
        },
        {
          title: "Стоматология",
          description: "Осмотр зубов, дёсен и состояния полости рта.",
        },
        {
          title: "Чипирование",
          description: "Надёжная идентификация питомца с помощью микрочипа.",
        },
        {
          title: "Рентгенология",
          description: "Визуализация костей и внутренних структур.",
        },
        {
          title: "Лабораторная диагностика",
          description: "Более точные решения на основе результатов анализов.",
        },
        {
          title: "Инструментальная диагностика",
          description: "Дополнительные обследования на современном оборудовании.",
        },
        {
          title: "Ультразвуковое исследование",
          description: "УЗИ мягких тканей и органов брюшной полости.",
        },
        {
          title: "Ветеринарный паспорт",
          description: "Документы для регистрации, поездок и истории вакцинации.",
        },
      ],
    },
    approach: {
      eyebrow: "Подход",
      title: "Сайт клиники должен ощущаться спокойнее и надёжнее",
      description:
        "Первое направление главной делает Alfavet более элегантным: меньше шума, ясные действия, тёплый медицинский тон и хорошая читаемость.",
      items: [
        {
          title: "Спокойный приём",
          description: "Запись заранее уменьшает ожидание и снижает стресс для питомца.",
        },
        {
          title: "Понятная диагностика",
          description: "Услуги собраны в карточки, чтобы владелец быстро понял, с чего начать.",
        },
        {
          title: "Связь без поиска",
          description: "Телефон, WhatsApp и карта находятся в одном контактном блоке.",
        },
      ],
    },
    partners: {
      eyebrow: "Партнёрские бренды",
      title: "Узнаваемые продукты, которым доверяют в клинике",
    },
    galleryPage: {
      eyebrow: "Галерея",
      title: "Реальные моменты из клиники",
      lead: "Фотографии пространства Alfavet, пациентов и ежедневного ритма работы клиники.",
      previous: "Предыдущее фото",
      next: "Следующее фото",
      slideLabel: "Фото",
      slides: [
        { title: "Зона приёма", description: "Ежедневная атмосфера внутри клиники." },
        { title: "Внимательное наблюдение", description: "Пациенты во время визита находятся под контролем врача." },
        { title: "Момент осмотра", description: "Спокойная коммуникация между врачом, владельцем и пациентом." },
        { title: "Маленькие пациенты", description: "Мягкий подход к котятам и молодым питомцам." },
        { title: "Первый контакт", description: "Комфорт важен уже с первого осмотра." },
        { title: "Процесс лечения", description: "Назначенные процедуры проводятся внимательно и последовательно." },
        { title: "Кабинеты клиники", description: "Пространство подготовлено для осмотра и диагностики." },
        { title: "Забота о пациенте", description: "Для каждого пациента подбирается индивидуальный подход." },
        { title: "Командная работа", description: "Опыт врачей — одна из главных сил клиники." },
        { title: "Команда Alfavet", description: "Профессиональная команда, которая заботится о животных внимательно." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Часто задаваемые вопросы",
      items: [
        {
          question: "Нужно ли записываться заранее на приём?",
          answer:
            "Да, приём ведётся по предварительной записи. Так команда может уделить каждому пациенту спокойное и внимательное время.",
        },
        {
          question: "С какого возраста можно делать первую вакцинацию щенку или котёнку?",
          answer:
            "Обычно первую вакцинацию планируют с 6-8 недель, но финальное решение врач принимает после осмотра.",
        },
        {
          question: "Можно ли у вас получить ветеринарный паспорт?",
          answer:
            "Да, в клинике можно оформить ветеринарный паспорт и связанные с ним документы.",
        },
        {
          question: "Делаете ли вы стерилизацию и кастрацию?",
          answer:
            "Да. Перед операцией врач осматривает питомца и при необходимости назначает анализы.",
        },
        {
          question: "Какие животные принимаются в клинике?",
          answer:
            "В основном принимаются кошки и собаки. По экзотическим и другим небольшим животным лучше заранее уточнить по телефону.",
        },
      ],
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Записаться и найти клинику",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      hours: "Формат приёма",
      hoursText: "Приём ведётся по предварительной записи",
      addressText: "52, Magsud Alizade, Narimanov dist., Baku, Azerbaijan",
      about: "О клинике",
      whatsapp: "WhatsApp",
      map: "Открыть клинику на карте",
      resetMap: "К адресу",
    },
    footer: {
      clinic: "Клиника",
      services: "Услуги",
      contact: "Контакты",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
