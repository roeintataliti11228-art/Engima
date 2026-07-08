const translations = {
  en: {
    'meta.title': 'ENIGMA | Cyber Security Portfolio',

    'sidebar.stayHidden': 'STAY HIDDEN, STAY AHEAD',

    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.services': 'SERVICES',
    'nav.projects': 'PROJECTS',
    'nav.blog': 'BLOG',
    'nav.hacks': 'ACADEMY',
    'nav.contact': 'CONTACT',

    'header.terminal': 'ACCESS TERMINAL',
    'header.menu': 'Open menu',
    'header.closeTerminal': 'Close terminal',

    'hero.welcome': 'WELCOME TO MY DOMAIN',
    'hero.tagline': 'SEE NOTHING. KNOW EVERYTHING.',
    'hero.desc': 'I am <span class="highlight">Enigma</span>. A digital phantom in the deep web. I break systems, explore the unknown, and turn vulnerabilities into knowledge.',
    'hero.explore': 'EXPLORE MORE',
    'hero.projects': 'VIEW PROJECTS',

    'svc.pentest.title': 'PENETRATION TESTING',
    'svc.pentest.desc': 'Identifying and exploiting security weaknesses in systems and networks.',
    'svc.web.title': 'WEB EXPLOITATION',
    'svc.web.desc': 'Finding and leveraging vulnerabilities in web applications and APIs.',
    'svc.bounty.title': 'BUG BOUNTY',
    'svc.bounty.desc': 'Discovering critical bugs and earning rewards from security programs.',
    'svc.research.title': 'SECURITY RESEARCH',
    'svc.research.desc': 'Deep analysis of emerging threats and zero-day vulnerability discovery.',
    'svc.social.title': 'SOCIAL ENGINEERING',
    'svc.social.desc': 'Testing human factors and psychological security vulnerabilities.',

    'about.label': '// ABOUT ME',
    'about.title': 'THE PHANTOM BEHIND THE SCREEN',
    'about.subtitle': 'Operating from the shadows of the digital underground.',
    'about.text1': 'I operate in the space between known and unknown — a ghost in the machine who maps attack surfaces others overlook. With years of experience in offensive security, I specialize in finding what shouldn\'t exist: hidden doors, forgotten endpoints, and the cracks in even the most hardened systems.',
    'about.text2': 'My work spans penetration testing, vulnerability research, and bug bounty hunting across Fortune 500 companies and critical infrastructure. Every exploit is a lesson; every breach, a blueprint for stronger defense.',
    'about.stat1': 'SYSTEMS TESTED',
    'about.stat2': 'ZERO-DAYS FOUND',
    'about.stat3': 'K BOUNTY EARNED',
    'about.stat4': 'YEARS ACTIVE',
    'about.skillsTitle': 'CORE ARSENAL',
    'about.skill1': 'Network Penetration',
    'about.skill2': 'Web Application Security',
    'about.skill3': 'Reverse Engineering',
    'about.skill4': 'Exploit Development',
    'about.skill5': 'OSINT & Reconnaissance',
    'about.skill6': 'Cryptography Analysis',

    'services.label': '// SERVICES',
    'services.title': 'WEAPONS OF CHOICE',
    'services.subtitle': 'Specialized offensive security services for those who demand the truth about their defenses.',
    'services.s1.title': 'PENETRATION TESTING',
    'services.s1.desc': 'Full-scope red team assessments simulating real-world adversaries. Network, infrastructure, and application layer testing with detailed remediation reports.',
    'services.s1.l1': 'External & Internal Network PT',
    'services.s1.l2': 'Active Directory Attacks',
    'services.s1.l3': 'Wireless Security Assessment',
    'services.s2.title': 'WEB EXPLOITATION',
    'services.s2.desc': 'Deep-dive web application security testing covering OWASP Top 10 and beyond. API security, authentication bypass, and business logic flaws.',
    'services.s2.l1': 'SQL Injection & XSS',
    'services.s2.l2': 'SSRF & IDOR Exploitation',
    'services.s2.l3': 'API Security Testing',
    'services.s3.title': 'SECURITY RESEARCH',
    'services.s3.desc': 'Zero-day discovery, malware analysis, and threat intelligence. Publishing findings responsibly to strengthen the global security community.',
    'services.s3.l1': 'Zero-Day Discovery',
    'services.s3.l2': 'Malware Reverse Engineering',
    'services.s3.l3': 'CVE Publication',
    'services.s4.title': 'SOCIAL ENGINEERING',
    'services.s4.desc': 'Human-layer security testing through phishing campaigns, vishing, and physical security assessments to expose organizational weak points.',
    'services.s4.l1': 'Phishing Simulations',
    'services.s4.l2': 'Physical Penetration',
    'services.s4.l3': 'Security Awareness Training',

    'projects.label': '// PROJECTS',
    'projects.title': 'BREACH ARCHIVE',
    'projects.subtitle': 'Selected operations and research — details redacted for operational security.',
    'projects.tag.critical': 'CRITICAL',
    'projects.tag.high': 'HIGH',
    'projects.tag.medium': 'MEDIUM',
    'projects.tag.research': 'RESEARCH',
    'projects.p1.title': 'Zero-Day Chain Exploit',
    'projects.p1.desc': 'Chained 3 vulnerabilities in enterprise VPN software achieving unauthenticated RCE. CVE-2024-XXXX assigned.',
    'projects.p1.m1': 'CVSS 9.8',
    'projects.p1.m2': 'Bounty: $45,000',
    'projects.p2.title': 'Banking API Takeover',
    'projects.p2.desc': 'OAuth misconfiguration in fintech platform allowed full account takeover via IDOR and token manipulation.',
    'projects.p2.m1': 'CVSS 8.6',
    'projects.p2.m2': 'Bounty: $28,000',
    'projects.p3.title': 'Active Directory Domination',
    'projects.p3.desc': 'Full domain compromise via Kerberoasting, DCSync, and Golden Ticket in Fortune 500 red team engagement.',
    'projects.p3.m1': 'Red Team',
    'projects.p3.m2': 'Domain Admin',
    'projects.p4.title': 'Smart Contract Audit',
    'projects.p4.desc': 'Discovered reentrancy vulnerability in DeFi protocol preventing potential $2M loss. Responsible disclosure completed.',
    'projects.p4.m1': 'Solidity',
    'projects.p4.m2': 'DeFi',
    'projects.p5.title': 'Mobile App Reverse Engineering',
    'projects.p5.desc': 'Bypassed certificate pinning and extracted API keys from obfuscated Android application used by 5M+ users.',
    'projects.p5.m1': 'Android',
    'projects.p5.m2': 'Frida',
    'projects.p6.title': 'Custom RAT Development',
    'projects.p6.desc': 'Built undetectable remote access tool for authorized red team operations. EDR evasion via direct syscalls and process hollowing.',
    'projects.p6.m1': 'C++',
    'projects.p6.m2': 'EDR Evasion',

    'blog.label': '// BLOG',
    'blog.title': 'INTEL FEED',
    'blog.subtitle': 'Field notes, exploit write-ups, and security research from the front lines.',
    'blog.cat.zeroday': 'ZERO-DAY',
    'blog.cat.web': 'WEB',
    'blog.cat.network': 'NETWORK',
    'blog.cat.osint': 'OSINT',
    'blog.b1.title': 'Exploiting a Use-After-Free in Chrome V8 Engine',
    'blog.b1.excerpt': 'Deep dive into CVE-2024-XXXX — from fuzzing to reliable exploit, achieving sandbox escape on latest Chrome build.',
    'blog.b1.link': 'READ FULL REPORT →',
    'blog.b2.title': 'Bypassing WAF with Unicode Normalization',
    'blog.b2.excerpt': 'How homoglyph attacks and encoding tricks slip past modern WAF solutions.',
    'blog.b2.link': 'READ MORE →',
    'blog.b3.title': 'Living Off The Land: PowerShell Empire',
    'blog.b3.excerpt': 'Using native Windows tools for post-exploitation without dropping binaries.',
    'blog.b3.link': 'READ MORE →',
    'blog.b4.title': 'Mapping Attack Surface with Passive Recon',
    'blog.b4.excerpt': 'Complete guide to finding hidden assets before sending a single packet.',
    'blog.b4.link': 'READ MORE →',

    'contact.label': '// CONTACT',
    'contact.title': 'ESTABLISH CONNECTION',
    'contact.subtitle': 'Encrypted channels only. All communications are monitored for security.',
    'contact.nameLabel': 'CODENAME',
    'contact.namePlaceholder': 'Enter your alias...',
    'contact.emailLabel': 'SECURE EMAIL',
    'contact.emailPlaceholder': 'you@proton.me',
    'contact.subjectLabel': 'MISSION TYPE',
    'contact.subjectDefault': 'Select operation type...',
    'contact.subject.pentest': 'Penetration Testing',
    'contact.subject.web': 'Web Exploitation',
    'contact.subject.research': 'Security Research',
    'contact.subject.consulting': 'Consulting',
    'contact.subject.other': 'Other',
    'contact.messageLabel': 'ENCRYPTED MESSAGE',
    'contact.messagePlaceholder': 'Describe your mission parameters...',
    'contact.submit': 'TRANSMIT MESSAGE',
    'contact.emailTitle': 'SECURE EMAIL',
    'contact.emailNote': 'PGP key available on request',
    'contact.terminalTitle': 'TERMINAL ACCESS',
    'contact.terminalBtn': 'Open Secure Terminal',
    'contact.terminalNote': 'End-to-end encrypted session',
    'contact.darknetTitle': 'DARKNET',
    'contact.darknetNote': 'TOR hidden service',
    'contact.status': 'STATUS: ONLINE — Accepting new missions',
    'contact.error': '[ ERROR ] All fields required.',
    'contact.success': '[ OK ] Message encrypted and transmitted successfully.',

    'footer.copyright': '© 2024 ENIGMA. ALL RIGHTS RESERVED.',

    'hacks.label': '// HACK ACADEMY',
    'hacks.title': 'LEARN THE ART OF HACKING',
    'hacks.subtitle': 'Conceptual guides to the most essential offensive security techniques — knowledge is the ultimate weapon.',
    'hacks.back': '← BACK TO ACADEMY',
    'hacks.learnBtn': 'START LEARNING',
    'hacks.level.beginner': 'BEGINNER',
    'hacks.level.intermediate': 'INTERMEDIATE',
    'hacks.h1.title': 'SQL Injection',
    'hacks.h1.desc': 'Manipulate database queries through unsanitized user input.',
    'hacks.h2.title': 'Cross-Site Scripting (XSS)',
    'hacks.h2.desc': 'Inject malicious scripts into web pages viewed by victims.',
    'hacks.h3.title': 'Phishing & Social Engineering',
    'hacks.h3.desc': 'Exploit human psychology to steal credentials and access.',
    'hacks.h4.title': 'Network Scanning (Nmap)',
    'hacks.h4.desc': 'Map networks, discover open ports and running services.',
    'hacks.h5.title': 'Password Attacks',
    'hacks.h5.desc': 'Crack, guess, and bypass authentication credentials.',
    'hacks.h6.title': 'OSINT Reconnaissance',
    'hacks.h6.desc': 'Gather intelligence from publicly available sources.',

    'terminal.line1': 'init_secure_session --auth',
    'terminal.line2': '[OK] Encrypted tunnel established via TOR',
    'terminal.line3': '[OK] Identity masked — trace route: NULL',
    'terminal.line4': 'whoami',
    'terminal.line5': 'ENIGMA — Digital Phantom / Offensive Security Researcher',
    'terminal.line6': 'status --all',
    'terminal.line7': 'Systems breached: 847 | Zero-days found: 12 | Bounties: $142K',
  },

  fa: {
    'meta.title': 'ENIGMA | پورتفولیو امنیت سایبری',

    'sidebar.stayHidden': 'مخفی بمان، جلوتر باش',

    'nav.home': 'خانه',
    'nav.about': 'درباره',
    'nav.services': 'خدمات',
    'nav.projects': 'پروژه‌ها',
    'nav.blog': 'بلاگ',
    'nav.hacks': 'آکادمی',
    'nav.contact': 'تماس',

    'header.terminal': 'دسترسی ترمینال',
    'header.menu': 'باز کردن منو',
    'header.closeTerminal': 'بستن ترمینال',

    'hero.welcome': 'به قلمرو من خوش آمدید',
    'hero.tagline': 'هیچ چیز نبین. همه چیز بدان.',
    'hero.desc': 'من <span class="highlight">Enigma</span> هستم. یک شبح دیجیتال در اعماق وب. سیستم‌ها را می‌شکنم، ناشناخته‌ها را کاوش می‌کنم و آسیب‌پذیری‌ها را به دانش تبدیل می‌کنم.',
    'hero.explore': 'کاوش بیشتر',
    'hero.projects': 'مشاهده پروژه‌ها',

    'svc.pentest.title': 'تست نفوذ',
    'svc.pentest.desc': 'شناسایی و بهره‌برداری از نقاط ضعف امنیتی در سیستم‌ها و شبکه‌ها.',
    'svc.web.title': 'نفوذ وب',
    'svc.web.desc': 'یافتن و بهره‌برداری از آسیب‌پذیری‌های اپلیکیشن‌ها و APIها.',
    'svc.bounty.title': 'شکار باگ',
    'svc.bounty.desc': 'کشف باگ‌های بحرانی و دریافت پاداش از برنامه‌های امنیتی.',
    'svc.research.title': 'تحقیق امنیتی',
    'svc.research.desc': 'تحلیل عمیق تهدیدات نوظهور و کشف آسیب‌پذیری‌های zero-day.',
    'svc.social.title': 'مهندسی اجتماعی',
    'svc.social.desc': 'آزمون عامل انسانی و آسیب‌پذیری‌های روانی-امنیتی.',

    'about.label': '// درباره من',
    'about.title': 'شبح پشت صفحه',
    'about.subtitle': 'فعالیت از سایه‌های زیرزمین دیجیتال.',
    'about.text1': 'در فضای بین شناخته‌شده و ناشناخته فعالیت می‌کنم — روحی در ماشین که سطوح حمله‌ای را نقشه‌برداری می‌کند که دیگران نادیده می‌گیرند. با سال‌ها تجربه در امنیت تهاجمی، در یافتن آنچه نباید وجود داشته باشد تخصص دارم: درهای پنهان، endpointهای فراموش‌شده و ترک‌های سیستم‌های سخت‌ترین.',
    'about.text2': 'کار من شامل تست نفوذ، تحقیق آسیب‌پذیری و شکار باگ در شرکت‌های Fortune 500 و زیرساخت‌های حیاتی است. هر exploit درسی است؛ هر نفوذ، نقشه‌ای برای دفاع قوی‌تر.',
    'about.stat1': 'سیستم تست‌شده',
    'about.stat2': 'zero-day یافت‌شده',
    'about.stat3': 'هزار دلار پاداش',
    'about.stat4': 'سال فعالیت',
    'about.skillsTitle': 'زرادخانه اصلی',
    'about.skill1': 'نفوذ شبکه',
    'about.skill2': 'امنیت وب‌اپلیکیشن',
    'about.skill3': 'مهندسی معکوس',
    'about.skill4': 'توسعه exploit',
    'about.skill5': 'OSINT و شناسایی',
    'about.skill6': 'تحلیل رمزنگاری',

    'services.label': '// خدمات',
    'services.title': 'سلاح‌های انتخابی',
    'services.subtitle': 'خدمات تخصصی امنیت تهاجمی برای کسانی که حقیقت دفاع خود را می‌خواهند.',
    'services.s1.title': 'تست نفوذ',
    'services.s1.desc': 'ارزیابی کامل red team با شبیه‌سازی مهاجمان واقعی. تست شبکه، زیرساخت و لایه اپلیکیشن با گزارش‌های جامع.',
    'services.s1.l1': 'تست نفوذ شبکه داخلی و خارجی',
    'services.s1.l2': 'حملات Active Directory',
    'services.s1.l3': 'ارزیابی امنیت بی‌سیم',
    'services.s2.title': 'نفوذ وب',
    'services.s2.desc': 'تست عمیق امنیت وب شامل OWASP Top 10 و فراتر. امنیت API، دور زدن احراز هویت و نقص منطق کسب‌وکار.',
    'services.s2.l1': 'SQL Injection و XSS',
    'services.s2.l2': 'SSRF و IDOR',
    'services.s2.l3': 'تست امنیت API',
    'services.s3.title': 'تحقیق امنیتی',
    'services.s3.desc': 'کشف zero-day، تحلیل بدافزار و اطلاعات تهدید. انتشار مسئولانه یافته‌ها برای تقویت جامعه امنیتی.',
    'services.s3.l1': 'کشف Zero-Day',
    'services.s3.l2': 'مهندسی معکوس بدافزار',
    'services.s3.l3': 'انتشار CVE',
    'services.s4.title': 'مهندسی اجتماعی',
    'services.s4.desc': 'تست لایه انسانی از طریق فیشینگ، vishing و ارزیابی امنیت فیزیکی برای افشای نقاط ضعف سازمانی.',
    'services.s4.l1': 'شبیه‌سازی فیشینگ',
    'services.s4.l2': 'نفوذ فیزیکی',
    'services.s4.l3': 'آموزش آگاهی امنیتی',

    'projects.label': '// پروژه‌ها',
    'projects.title': 'آرشیو نفوذ',
    'projects.subtitle': 'عملیات و تحقیقات منتخب — جزئیات به دلیل امنیت عملیاتی حذف شده.',
    'projects.tag.critical': 'بحرانی',
    'projects.tag.high': 'بالا',
    'projects.tag.medium': 'متوسط',
    'projects.tag.research': 'تحقیق',
    'projects.p1.title': 'Exploit زنجیره‌ای Zero-Day',
    'projects.p1.desc': 'زنجیره ۳ آسیب‌پذیری در VPN سازمانی با دستیابی به RCE بدون احراز هویت. CVE-2024-XXXX ثبت شد.',
    'projects.p1.m1': 'CVSS 9.8',
    'projects.p1.m2': 'پاداش: ۴۵,۰۰۰ دلار',
    'projects.p2.title': 'تصاحب API بانکی',
    'projects.p2.desc': 'پیکربندی نادرست OAuth در fintech امکان تصاحب کامل حساب از طریق IDOR و دستکاری token.',
    'projects.p2.m1': 'CVSS 8.6',
    'projects.p2.m2': 'پاداش: ۲۸,۰۰۰ دلار',
    'projects.p3.title': 'تسلط بر Active Directory',
    'projects.p3.desc': 'نفوذ کامل دامنه با Kerberoasting، DCSync و Golden Ticket در red team Fortune 500.',
    'projects.p3.m1': 'Red Team',
    'projects.p3.m2': 'Domain Admin',
    'projects.p4.title': 'ممیزی Smart Contract',
    'projects.p4.desc': 'کشف آسیب‌پذیری reentrancy در پروتکل DeFi و جلوگیری از ضرر ۲ میلیون دلاری. افشای مسئولانه انجام شد.',
    'projects.p4.m1': 'Solidity',
    'projects.p4.m2': 'DeFi',
    'projects.p5.title': 'مهندسی معکوس اپ موبایل',
    'projects.p5.desc': 'دور زدن certificate pinning و استخراج API key از اپ اندروید obfuscated با ۵M+ کاربر.',
    'projects.p5.m1': 'Android',
    'projects.p5.m2': 'Frida',
    'projects.p6.title': 'توسعه RAT سفارشی',
    'projects.p6.desc': 'ساخت ابزار دسترسی از راه دور غیرقابل شناسایی برای red team مجاز. evasion EDR با direct syscall.',
    'projects.p6.m1': 'C++',
    'projects.p6.m2': 'EDR Evasion',

    'blog.label': '// بلاگ',
    'blog.title': 'فید اطلاعات',
    'blog.subtitle': 'یادداشت‌های میدانی، write-upهای exploit و تحقیقات امنیتی از خط مقدم.',
    'blog.cat.zeroday': 'ZERO-DAY',
    'blog.cat.web': 'WEB',
    'blog.cat.network': 'NETWORK',
    'blog.cat.osint': 'OSINT',
    'blog.b1.title': 'Exploit کردن Use-After-Free در Chrome V8',
    'blog.b1.excerpt': 'بررسی عمیق CVE-2024-XXXX — از fuzzing تا exploit پایدار و sandbox escape در Chrome.',
    'blog.b1.link': 'خواندن گزارش کامل ←',
    'blog.b2.title': 'دور زدن WAF با Unicode Normalization',
    'blog.b2.excerpt': 'چگونه homoglyph و encoding از WAFهای مدرن عبور می‌کنند.',
    'blog.b2.link': 'ادامه مطلب ←',
    'blog.b3.title': 'Living Off The Land: PowerShell Empire',
    'blog.b3.excerpt': 'استفاده از ابزارهای native ویندوز برای post-exploitation بدون binary.',
    'blog.b3.link': 'ادامه مطلب ←',
    'blog.b4.title': 'نقشه‌برداری Attack Surface با Recon غیرفعال',
    'blog.b4.excerpt': 'راهنمای کامل یافتن دارایی‌های پنهان قبل از ارسال یک packet.',
    'blog.b4.link': 'ادامه مطلب ←',

    'contact.label': '// تماس',
    'contact.title': 'برقراری ارتباط',
    'contact.subtitle': 'فقط کانال‌های رمزنگاری‌شده. تمام ارتباطات برای امنیت پایش می‌شوند.',
    'contact.nameLabel': 'نام رمز',
    'contact.namePlaceholder': 'نام مستعار خود را وارد کنید...',
    'contact.emailLabel': 'ایمیل امن',
    'contact.emailPlaceholder': 'you@proton.me',
    'contact.subjectLabel': 'نوع ماموریت',
    'contact.subjectDefault': 'نوع عملیات را انتخاب کنید...',
    'contact.subject.pentest': 'تست نفوذ',
    'contact.subject.web': 'نفوذ وب',
    'contact.subject.research': 'تحقیق امنیتی',
    'contact.subject.consulting': 'مشاوره',
    'contact.subject.other': 'سایر',
    'contact.messageLabel': 'پیام رمزنگاری‌شده',
    'contact.messagePlaceholder': 'پارامترهای ماموریت را شرح دهید...',
    'contact.submit': 'ارسال پیام',
    'contact.emailTitle': 'ایمیل امن',
    'contact.emailNote': 'کلید PGP در صورت درخواست',
    'contact.terminalTitle': 'دسترسی ترمینال',
    'contact.terminalBtn': 'باز کردن ترمینال امن',
    'contact.terminalNote': 'نشست رمزنگاری end-to-end',
    'contact.darknetTitle': 'دارک‌نت',
    'contact.darknetNote': 'سرویس مخفی TOR',
    'contact.status': 'وضعیت: آنلاین — پذیرش ماموریت‌های جدید',
    'contact.error': '[ خطا ] تمام فیلدها الزامی هستند.',
    'contact.success': '[ تأیید ] پیام رمزنگاری و با موفقیت ارسال شد.',

    'footer.copyright': '© 2024 ENIGMA. تمامی حقوق محفوظ است.',

    'hacks.label': '// آکادمی هک',
    'hacks.title': 'یادگیری هنر هک',
    'hacks.subtitle': 'راهنمای مفهومی مهم‌ترین تکنیک‌های امنیت تهاجمی — دانش قوی‌ترین سلاح است.',
    'hacks.back': '→ بازگشت به آکادمی',
    'hacks.learnBtn': 'شروع یادگیری',
    'hacks.level.beginner': 'مبتدی',
    'hacks.level.intermediate': 'متوسط',
    'hacks.h1.title': 'SQL Injection',
    'hacks.h1.desc': 'دستکاری کوئری دیتابیس از طریق ورودی sanitize نشده.',
    'hacks.h2.title': 'Cross-Site Scripting (XSS)',
    'hacks.h2.desc': 'تزریق اسکریپت مخرب در صفحات وب قربانیان.',
    'hacks.h3.title': 'فیشینگ و مهندسی اجتماعی',
    'hacks.h3.desc': 'سوءاستفاده از روانشناسی انسان برای دزدیدن credential.',
    'hacks.h4.title': 'اسکن شبکه (Nmap)',
    'hacks.h4.desc': 'نقشه‌برداری شبکه، کشف port و سرویس‌ها.',
    'hacks.h5.title': 'حملات رمز عبور',
    'hacks.h5.desc': 'Crack، حدس و دور زدن credential احراز هویت.',
    'hacks.h6.title': 'شناسایی OSINT',
    'hacks.h6.desc': 'جمع‌آوری اطلاعات از منابع عمومی.',

    'terminal.line1': 'init_secure_session --auth',
    'terminal.line2': '[OK] تونل رمزنگاری از طریق TOR برقرار شد',
    'terminal.line3': '[OK] هویت پنهان — مسیر ردیابی: NULL',
    'terminal.line4': 'whoami',
    'terminal.line5': 'ENIGMA — شبح دیجیتال / محقق امنیت تهاجمی',
    'terminal.line6': 'status --all',
    'terminal.line7': 'سیستم‌های نفوذشده: ۸۴۷ | zero-day: ۱۲ | پاداش: ۱۴۲K دلار',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
  return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (translations[lang][key] !== undefined) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  if (!document.body.dataset.tutorial) {
    document.title = translations[lang]['meta.title'];
  }

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

window.i18n = { t, setLanguage, getLang: () => currentLang };

// Apply saved language immediately
setLanguage(currentLang);
