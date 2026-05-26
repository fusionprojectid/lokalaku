/* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function() {

  /* Language switcher
  -----------------------------------------------*/
    var languageText = {
        en: {
            navHome: 'Home',
            navAbout: 'About',
            navWhy: 'Why Us',
            navPackages: 'Destination',
            navContact: 'Contact',
            heroTitle: 'Where Every Journey Finds Its Soul',
            heroText: '<a href="https://www.instagram.com/lokalaku_trip/" rel="nofollow">LokaLaku</a> curates nature trips, cultural routes, and city explorations across Indonesia. From sunrise at Bromo to slow days in Yogyakarta and Bali, every journey is planned with local care, clear communication, and room for real stories.',
            explorePackages: 'Explore Packages',
            planWhatsapp: '<i class="fa-brands fa-whatsapp"></i> Plan via WhatsApp',
            quickRoutesTitle: '8+ Curated Routes',
            quickRoutesText: 'Bali, Bromo, Ijen, Dieng, Yogyakarta, Malang, Baluran, and Banyuwangi.',
            quickTripsTitle: 'Private & Open Trips',
            quickTripsText: 'Flexible options for families, friends, solo travelers, and international guests.',
            quickConsultTitle: 'Easy Consultation',
            quickConsultText: 'Ask routes, dates, pickup points, and custom plans directly through WhatsApp.',
            aboutTitle: 'LokaLaku Philosophy',
            aboutText: '<a href="https://www.instagram.com/lokalaku_trip/" target="_blank" rel="noopener noreferrer"><strong>LokaLaku</strong></a> embodies the spirit of exploration and discovery. Its name combines the <strong>Sanskrit word "Loka," meaning world or place, and the Javanese "Laku," meaning journey or action</strong>. Together, these names <em>reflect the idea of actively exploring the world, embracing new experiences, and connecting with the beauty, culture, and diversity of each destination.</em>',
            teamTitle: 'LokaLaku Team!',
            teamText: 'Behind every amazing trip is a team that loves what they do. From tour leaders who know the quiet corners to customer service support ready for every change of plan, we keep your adventure safe, smooth, and full of good energy.',
            whyTitle: 'Why Travel With LokaLaku?',
            whyText: 'We keep the trip personal, practical, and connected to local places, so your time on the road feels effortless without losing its sense of discovery.',
            destinationTitle: 'Travel Packages',
            destinationText: 'Explore the best tourist destinations in Malang, Yogyakarta, and Bali. Which one will be your next adventure?',
            priceLabel: 'Start from:',
            packageHint: 'Click to read detailed itinerary and book your tour now!',
            readMore: 'Read More',
            contactTitle: 'Send a Message',
            contactText: 'Want to explore these amazing spots? Drop us a message and snag awesome deals on every destination!',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'Your Email',
            messagePlaceholder: 'Your Message',
            nameLabel: 'Your Name',
            emailLabel: 'Your Email',
            messageLabel: 'Your Message',
            sendMessage: 'Send Message',
            contactWhatsapp: '<i class="fa-brands fa-whatsapp"></i> Contact via WhatsApp',
            bookWhatsapp: '<i class="fa-brands fa-whatsapp"></i> Book via WhatsApp',
            footerSlogan: 'Where Every Journey Finds Its Soul',
            whyCards: [
                ['Flexible Routes', 'Choose a ready package or ask us to adjust timing, pickup, and stops around your travel style.'],
                ['Trusted Crew', 'Local drivers and trip leaders help with routes, tickets, timing, and practical travel details.'],
                ['Clear Updates', 'Before the trip starts, you can confirm itinerary, meeting point, inclusions, and special requests.'],
                ['Real Moments', 'Balanced itineraries leave space for views, food, photos, and the small moments that make a trip stay with you.']
            ],
            teamDescriptions: [
                'Comedian traveler and part of LokaLaku marketing.',
                'Friendly tour guide who keeps the journey warm and easy.',
                'Patiently documents the customer journey.',
                'Designer who also loves exploring new places.',
                'A thoughtful tour guide who brings calm energy to the trip.',
                'The steady lead who keeps every plan organized.'
            ],
            modalItems: [
                ['Private transport (AC car, driver, and fuel)', '2 nights at 3-star hotel', 'Entrance tickets to all attractions', 'Daily breakfast', 'Free parking and tolls', 'Meeting point: Bali Airport / Hotel'],
                ['Shuttle transport and Bromo Jeep', '1 night stay near Bromo or Ijen', 'All entrance tickets', 'Local guide', 'Gas mask for Ijen', 'Meeting point: Malang / Banyuwangi'],
                ['Private AC transport', '3 nights accommodation', 'All entrance tickets', 'Jeep for Bromo and Merapi', 'Daily breakfast', 'Meeting point: Yogyakarta / Malang'],
                ['Private AC transport', '2 nights accommodation', 'All entrance tickets', 'Local guide in Yogyakarta', 'Daily breakfast', 'Meeting point: Malang'],
                ['Private AC transport for full day', 'Driver and fuel', 'Kampung Warna Warni Jodipan', 'Taman Bunga Selecta', 'Parking and toll fees', 'Meeting point: hotel in Malang'],
                ['Private AC transport', 'Driver and fuel', 'Entrance to Dieng Plateau', 'Arjuna Temple Complex', 'Sikidang Crater', 'Meeting point: Wonosobo / Yogyakarta'],
                ['Private AC transport', '2 nights accommodation', 'Borobudur and Prambanan tickets', 'Jeep for Merapi Lava Tour', 'Daily breakfast', 'Meeting point: hotel in Yogyakarta'],
                ['Private AC transport', '2 nights accommodation', 'Baluran National Park ticket', 'Bangsring Underwater', 'Local guide', 'Meeting point: Banyuwangi']
            ],
            trustLabels: ['Nature Routes', 'Local Guides', 'Private Trips', 'Clear Inclusions', 'Trip Support', 'Real Moments'],
            trustAria: 'LokaLaku trip values',
            footerBrand: 'Curated private tours and open trips across Indonesia, shaped with local care and clear communication.',
            footerAboutHeading: 'About Us',
            footerLinks: ['Our Story', 'Our Team', 'Why LokaLaku', 'Contact Us'],
            footerPackagesHeading: 'Packages',
            footerNewsletterHeading: 'Subscribe',
            footerNewsletterText: 'Get LokaLaku trip updates and seasonal route ideas.',
            newsletterPlaceholder: 'your@email.com',
            newsletterAria: 'Subscribe',
            footerContactHeading: 'Contact Us',
            footerFollowHeading: 'Follow Us',
            footerCopyright: '&copy; 2026 LokaLaku Trip. All rights reserved.',
            footerLegal: ['Privacy Policy', 'Terms & Conditions', 'Booking Help'],
            legalPages: {
                privacy: {
                    title: 'Privacy Policy',
                    intro: 'We keep your inquiry and booking information limited to what is needed to help plan your trip.',
                    sections: [
                        ['Information We Collect', 'When you contact LokaLaku Trip, we may collect your name, email, phone number, travel dates, destination interests, group size, and message details.'],
                        ['How We Use It', 'Your information is used to answer questions, prepare tour recommendations, confirm booking details, and provide customer support before or during a trip.'],
                        ['Third-Party Services', 'Our website may use services such as Formspree, WhatsApp, Instagram, YouTube embeds, Google AdSense, and Vercel tools. These services may process limited technical or contact data according to their own policies.'],
                        ['Data Sharing', 'We do not sell your personal information. We only share trip details with operational partners when needed to arrange transportation, accommodation, tickets, guides, or other requested travel services.'],
                        ['Contact', 'For privacy questions, contact us through WhatsApp or Instagram.']
                    ],
                    primary: 'Back to Homepage',
                    secondary: 'Contact WhatsApp'
                },
                terms: {
                    title: 'Terms & Conditions',
                    intro: 'Please review these basic terms before confirming a trip with our team.',
                    sections: [
                        ['Tour Information', 'Package details, prices, inclusions, meeting points, and itinerary timing may vary depending on travel date, group size, availability, weather, and local conditions.'],
                        ['Booking Confirmation', 'A booking is considered confirmed only after itinerary details, participant count, payment instructions, and pickup information are agreed with the LokaLaku Trip team.'],
                        ['Payments', 'Payment method, deposit amount, and payment deadlines will be shared during booking confirmation. Any additional personal expenses are the responsibility of each traveler.'],
                        ['Changes & Cancellations', 'Schedule changes or cancellations should be communicated as early as possible. Refunds or rescheduling options depend on transport, hotel, ticket, and partner policies.'],
                        ['Travel Responsibility', 'Travelers are responsible for arriving on time, keeping personal belongings safe, following guide instructions, and respecting local rules at each destination.']
                    ],
                    primary: 'Back to Homepage',
                    secondary: 'Ask Before Booking'
                },
                booking: {
                    title: 'Booking Help',
                    intro: 'Plan your trip faster with the information our team needs before preparing recommendations.',
                    sections: [
                        ['How To Book', 'Choose a destination package, open the detail modal, then contact us through WhatsApp or the contact form. Our team will help confirm availability and route options.'],
                        ['What To Prepare', 'Please share your destination, preferred date, number of travelers, pickup point, hotel preference, and any special requests such as family needs, photography stops, or custom routes.'],
                        ['Custom Trips', 'If the listed package does not match your schedule, ask us for a custom route. We can adjust timing, pickup point, destination order, and trip duration when possible.'],
                        ['Fastest Contact', 'WhatsApp is the fastest way to discuss trip details, especially for urgent dates, pickup questions, and route adjustments.']
                    ],
                    primary: 'View Packages',
                    secondary: 'Chat on WhatsApp'
                }
            }
        },
        id: {
            navHome: 'Beranda',
            navAbout: 'Tentang',
            navWhy: 'Kenapa Kami',
            navPackages: 'Destinasi',
            navContact: 'Kontak',
            heroTitle: 'Setiap Perjalanan Punya Cerita',
            heroText: '<a href="https://www.instagram.com/lokalaku_trip/" rel="nofollow">LokaLaku</a> merancang perjalanan alam, rute budaya, dan eksplorasi kota di Indonesia. Dari sunrise Bromo sampai hari santai di Yogyakarta dan Bali, setiap trip disiapkan dengan sentuhan lokal, komunikasi jelas, dan ruang untuk cerita yang berkesan.',
            explorePackages: 'Lihat Paket',
            planWhatsapp: '<i class="fa-brands fa-whatsapp"></i> Rencanakan via WhatsApp',
            quickRoutesTitle: '8+ Rute Pilihan',
            quickRoutesText: 'Bali, Bromo, Ijen, Dieng, Yogyakarta, Malang, Baluran, dan Banyuwangi.',
            quickTripsTitle: 'Private & Open Trip',
            quickTripsText: 'Pilihan fleksibel untuk keluarga, teman, solo traveler, dan tamu internasional.',
            quickConsultTitle: 'Konsultasi Mudah',
            quickConsultText: 'Tanyakan rute, tanggal, titik jemput, dan custom trip langsung lewat WhatsApp.',
            aboutTitle: 'Filosofi LokaLaku',
            aboutText: '<a href="https://www.instagram.com/lokalaku_trip/" target="_blank" rel="noopener noreferrer"><strong>LokaLaku</strong></a> membawa semangat menjelajah dan menemukan pengalaman baru. Namanya menggabungkan kata <strong>Sanskerta "Loka" yang berarti dunia atau tempat, dan bahasa Jawa "Laku" yang berarti perjalanan atau tindakan</strong>. Keduanya mencerminkan perjalanan aktif untuk mengenal tempat, budaya, dan keindahan setiap destinasi.',
            teamTitle: 'Tim LokaLaku!',
            teamText: 'Di balik setiap trip yang seru ada tim yang mencintai pekerjaannya. Mulai dari tour leader yang paham sudut-sudut menarik sampai support yang siap membantu perubahan rencana, kami menjaga perjalanan tetap aman, lancar, dan menyenangkan.',
            whyTitle: 'Kenapa Jalan Bersama LokaLaku?',
            whyText: 'Kami menjaga perjalanan tetap personal, praktis, dan dekat dengan cerita lokal, sehingga waktu di jalan terasa ringan tanpa kehilangan rasa petualangan.',
            destinationTitle: 'Paket Wisata',
            destinationText: 'Jelajahi destinasi terbaik di Malang, Yogyakarta, dan Bali. Mana petualangan berikutnya?',
            priceLabel: 'Mulai dari:',
            packageHint: 'Klik untuk melihat detail itinerary dan pesan paket sekarang!',
            readMore: 'Lihat Detail',
            contactTitle: 'Kirim Pesan',
            contactText: 'Ingin menjelajahi destinasi ini? Kirim pesan dan temukan penawaran terbaik untuk setiap paket.',
            namePlaceholder: 'Nama Anda',
            emailPlaceholder: 'Email Anda',
            messagePlaceholder: 'Pesan Anda',
            nameLabel: 'Nama Anda',
            emailLabel: 'Email Anda',
            messageLabel: 'Pesan Anda',
            sendMessage: 'Kirim Pesan',
            contactWhatsapp: '<i class="fa-brands fa-whatsapp"></i> Kontak via WhatsApp',
            bookWhatsapp: '<i class="fa-brands fa-whatsapp"></i> Pesan via WhatsApp',
            footerSlogan: 'Setiap Perjalanan Punya Cerita',
            whyCards: [
                ['Rute Fleksibel', 'Pilih paket yang tersedia atau minta penyesuaian waktu, titik jemput, dan destinasi sesuai gaya perjalanan.'],
                ['Tim Terpercaya', 'Driver lokal dan trip leader membantu rute, tiket, waktu perjalanan, dan kebutuhan teknis di lapangan.'],
                ['Info Jelas', 'Sebelum trip dimulai, itinerary, titik temu, fasilitas, dan permintaan khusus bisa dikonfirmasi lebih dulu.'],
                ['Momen Berkesan', 'Itinerary dibuat seimbang agar tetap ada ruang untuk pemandangan, kuliner, foto, dan cerita kecil di perjalanan.']
            ],
            teamDescriptions: [
                'Comedian traveler dan bagian dari marketing LokaLaku.',
                'Tour guide ramah yang membuat perjalanan terasa hangat dan mudah.',
                'Sabar mendokumentasikan perjalanan customer.',
                'Desainer yang juga senang menjelajahi tempat baru.',
                'Tour guide yang perhatian dan membawa suasana tenang dalam trip.',
                'Lead yang menjaga setiap rencana tetap rapi dan terarah.'
            ],
            modalItems: [
                ['Transport private (mobil AC, driver, dan BBM)', '2 malam hotel bintang 3', 'Tiket masuk semua destinasi', 'Sarapan harian', 'Parkir dan tol gratis', 'Titik temu: Bandara / hotel di Bali'],
                ['Transport shuttle dan Jeep Bromo', '1 malam menginap dekat Bromo atau Ijen', 'Semua tiket masuk', 'Pemandu lokal', 'Masker gas untuk Ijen', 'Titik temu: Malang / Banyuwangi'],
                ['Transport private AC', 'Akomodasi 3 malam', 'Semua tiket masuk', 'Jeep untuk Bromo dan Merapi', 'Sarapan harian', 'Titik temu: Yogyakarta / Malang'],
                ['Transport private AC', 'Akomodasi 2 malam', 'Semua tiket masuk', 'Pemandu lokal di Yogyakarta', 'Sarapan harian', 'Titik temu: Malang'],
                ['Transport private AC sehari penuh', 'Driver dan BBM', 'Kampung Warna Warni Jodipan', 'Taman Bunga Selecta', 'Biaya parkir dan tol', 'Titik temu: hotel di Malang'],
                ['Transport private AC', 'Driver dan BBM', 'Tiket masuk Dataran Tinggi Dieng', 'Kompleks Candi Arjuna', 'Kawah Sikidang', 'Titik temu: Wonosobo / Yogyakarta'],
                ['Transport private AC', 'Akomodasi 2 malam', 'Tiket Borobudur dan Prambanan', 'Jeep Merapi Lava Tour', 'Sarapan harian', 'Titik temu: hotel di Yogyakarta'],
                ['Transport private AC', 'Akomodasi 2 malam', 'Tiket Taman Nasional Baluran', 'Bangsring Underwater', 'Pemandu lokal', 'Titik temu: Banyuwangi']
            ],
            trustLabels: ['Rute Alam', 'Pemandu Lokal', 'Private Trip', 'Fasilitas Jelas', 'Bantuan Trip', 'Momen Nyata'],
            trustAria: 'Nilai perjalanan LokaLaku',
            footerBrand: 'Private tour dan open trip pilihan di Indonesia, dirancang dengan sentuhan lokal dan komunikasi yang jelas.',
            footerAboutHeading: 'Tentang Kami',
            footerLinks: ['Cerita Kami', 'Tim Kami', 'Kenapa LokaLaku', 'Hubungi Kami'],
            footerPackagesHeading: 'Paket',
            footerNewsletterHeading: 'Berlangganan',
            footerNewsletterText: 'Dapatkan update trip LokaLaku dan ide rute musiman.',
            newsletterPlaceholder: 'email@anda.com',
            newsletterAria: 'Berlangganan',
            footerContactHeading: 'Hubungi Kami',
            footerFollowHeading: 'Ikuti Kami',
            footerCopyright: '&copy; 2026 LokaLaku Trip. Hak cipta dilindungi.',
            footerLegal: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Bantuan Booking'],
            legalPages: {
                privacy: {
                    title: 'Kebijakan Privasi',
                    intro: 'Kami membatasi informasi pertanyaan dan booking hanya untuk kebutuhan membantu perencanaan perjalanan Anda.',
                    sections: [
                        ['Informasi yang Kami Kumpulkan', 'Saat Anda menghubungi LokaLaku Trip, kami dapat menerima nama, email, nomor telepon, tanggal perjalanan, minat destinasi, jumlah peserta, dan detail pesan.'],
                        ['Cara Kami Menggunakan Informasi', 'Informasi digunakan untuk menjawab pertanyaan, menyiapkan rekomendasi tour, mengonfirmasi detail booking, dan memberi dukungan sebelum atau selama perjalanan.'],
                        ['Layanan Pihak Ketiga', 'Website dapat menggunakan layanan seperti Formspree, WhatsApp, Instagram, embed YouTube, Google AdSense, dan tools Vercel. Layanan tersebut dapat memproses data teknis atau kontak terbatas sesuai kebijakan masing-masing.'],
                        ['Berbagi Data', 'Kami tidak menjual informasi pribadi. Detail trip hanya dibagikan kepada partner operasional bila diperlukan untuk mengatur transportasi, akomodasi, tiket, guide, atau layanan perjalanan yang diminta.'],
                        ['Kontak', 'Untuk pertanyaan privasi, hubungi kami melalui WhatsApp atau Instagram.']
                    ],
                    primary: 'Kembali ke Beranda',
                    secondary: 'Kontak WhatsApp'
                },
                terms: {
                    title: 'Syarat & Ketentuan',
                    intro: 'Mohon baca ketentuan dasar ini sebelum mengonfirmasi perjalanan bersama tim kami.',
                    sections: [
                        ['Informasi Tour', 'Detail paket, harga, fasilitas, titik temu, dan waktu itinerary dapat berubah sesuai tanggal perjalanan, jumlah peserta, ketersediaan, cuaca, dan kondisi lokal.'],
                        ['Konfirmasi Booking', 'Booking dianggap terkonfirmasi setelah itinerary, jumlah peserta, instruksi pembayaran, dan informasi penjemputan disepakati bersama tim LokaLaku Trip.'],
                        ['Pembayaran', 'Metode pembayaran, jumlah deposit, dan batas pembayaran akan disampaikan saat konfirmasi booking. Pengeluaran pribadi tambahan menjadi tanggung jawab masing-masing peserta.'],
                        ['Perubahan & Pembatalan', 'Perubahan jadwal atau pembatalan sebaiknya disampaikan sedini mungkin. Refund atau reschedule bergantung pada kebijakan transportasi, hotel, tiket, dan partner terkait.'],
                        ['Tanggung Jawab Peserta', 'Peserta bertanggung jawab hadir tepat waktu, menjaga barang pribadi, mengikuti arahan guide, dan menghormati aturan lokal di setiap destinasi.']
                    ],
                    primary: 'Kembali ke Beranda',
                    secondary: 'Tanya Sebelum Booking'
                },
                booking: {
                    title: 'Bantuan Booking',
                    intro: 'Rencanakan trip lebih cepat dengan menyiapkan informasi yang dibutuhkan tim kami.',
                    sections: [
                        ['Cara Booking', 'Pilih paket destinasi, buka detail paket, lalu hubungi kami melalui WhatsApp atau form kontak. Tim kami akan membantu memastikan ketersediaan dan pilihan rute.'],
                        ['Yang Perlu Disiapkan', 'Bagikan destinasi, tanggal pilihan, jumlah peserta, titik jemput, preferensi hotel, dan permintaan khusus seperti kebutuhan keluarga, spot foto, atau rute custom.'],
                        ['Custom Trip', 'Jika paket yang tersedia belum sesuai jadwal Anda, tanyakan rute custom. Kami dapat menyesuaikan waktu, titik jemput, urutan destinasi, dan durasi trip jika memungkinkan.'],
                        ['Kontak Tercepat', 'WhatsApp adalah cara tercepat untuk membahas detail trip, terutama untuk tanggal dekat, pertanyaan penjemputan, dan penyesuaian rute.']
                    ],
                    primary: 'Lihat Paket',
                    secondary: 'Chat WhatsApp'
                }
            }
        }
    };

    function applyLanguage(lang) {
        var text = languageText[lang] || languageText.en;
        document.documentElement.lang = lang === 'id' ? 'id' : 'en';

        $('.navbar-nav a[href$="#top"] span').text(text.navHome);
        $('.navbar-nav a[href$="#about"] span').text(text.navAbout);
        $('.navbar-nav a[href$="#why"] span').text(text.navWhy);
        $('.navbar-nav a[href$="#destination"] span').text(text.navPackages);
        $('.navbar-nav a[href$="#contact"] span').text(text.navContact);
        $('#home h1').text(text.heroTitle);
        $('#home p.wow').html(text.heroText);
        $('.hero-actions .smoothScroll').text(text.explorePackages);
        $('.hero-actions .btn-outline-light').html(text.planWhatsapp);
        $('.quick-info-item').eq(0).find('strong').text(text.quickRoutesTitle).end().find('span').text(text.quickRoutesText);
        $('.quick-info-item').eq(1).find('strong').text(text.quickTripsTitle).end().find('span').text(text.quickTripsText);
        $('.quick-info-item').eq(2).find('strong').text(text.quickConsultTitle).end().find('span').text(text.quickConsultText);
        $('#about .about-thumb h1').text(text.aboutTitle);
        $('#about .about-thumb p').html(text.aboutText);
        $('#about .section-title h1').text(text.teamTitle);
        $('#about .section-title h3').text(text.teamText);
        $('#why .section-title h1 strong').text(text.whyTitle);
        $('#why .section-title p').text(text.whyText);
        $('#destination .section-title h1 strong').text(text.destinationTitle);
        $('#destination .section-title p.text-white').text(text.destinationText);
        $('.package-price-label').text(text.priceLabel);
        $('.price-label').text(text.priceLabel);
        $('.package-small').text(text.packageHint);
        $('.package-read-more').text(text.readMore);
        $('.why-card').each(function(index) {
            if (text.whyCards[index]) {
                $(this).find('h2').text(text.whyCards[index][0]);
                $(this).find('p').text(text.whyCards[index][1]);
            }
        });
        $('#team-carousel .description').each(function(index) {
            if (text.teamDescriptions[index]) {
                $(this).text(text.teamDescriptions[index]);
            }
        });
        $('.custom-modal').each(function(modalIndex) {
            var items = text.modalItems[modalIndex];
            if (!items) return;
            $(this).find('.modal-list-wrapper li').each(function(itemIndex) {
                if (items[itemIndex]) {
                    $(this).text(items[itemIndex]);
                }
            });
        });
        $('#contact .section-title h1 strong').text(text.contactTitle);
        $('#contact .section-title p').text(text.contactText);
        $('#name').attr('placeholder', text.namePlaceholder);
        $('#email').attr('placeholder', text.emailPlaceholder);
        $('#message').attr('placeholder', text.messagePlaceholder);
        $('label[for="name"]').text(text.nameLabel);
        $('label[for="email"]').text(text.emailLabel);
        $('label[for="message"]').text(text.messageLabel);
        $('#contact button[type="submit"]').text(text.sendMessage);
        $('#contact .btn-success').html(text.contactWhatsapp);
        $('.wa-button').html(text.bookWhatsapp);
        $('.trust-label').each(function(index) {
            if (text.trustLabels[index]) {
                $(this).text(text.trustLabels[index]);
            }
        });
        $('.trust-strip').attr('aria-label', text.trustAria);
        $('.footer-brand-text').text(text.footerBrand);
        $('.footer-about-heading').text(text.footerAboutHeading);
        $('.footer-link-about').text(text.footerLinks[0]);
        $('.footer-link-team').text(text.footerLinks[1]);
        $('.footer-link-why').text(text.footerLinks[2]);
        $('.footer-link-contact').text(text.footerLinks[3]);
        $('.footer-packages-heading').text(text.footerPackagesHeading);
        $('.footer-newsletter-heading').text(text.footerNewsletterHeading);
        $('.footer-newsletter-text').text(text.footerNewsletterText);
        $('.footer-newsletter input[type="email"]').attr('placeholder', text.newsletterPlaceholder);
        $('.footer-newsletter button').attr('aria-label', text.newsletterAria);
        $('.footer-contact-heading').text(text.footerContactHeading);
        $('.footer-follow-heading').text(text.footerFollowHeading);
        $('.footer-copyright').html(text.footerCopyright);
        $('.footer-legal-privacy').text(text.footerLegal[0]);
        $('.footer-legal-terms').text(text.footerLegal[1]);
        $('.footer-legal-booking').text(text.footerLegal[2]);

        var legalPage = $('body').data('legal-page');
        var legalText = legalPage && text.legalPages[legalPage];
        if (legalText) {
            $('.legal-hero h1').text(legalText.title);
            $('.legal-hero > .container > p').last().text(legalText.intro);
            $('.legal-content h2').each(function(index) {
                if (legalText.sections[index]) {
                    $(this).text(legalText.sections[index][0]);
                }
            });
            $('.legal-content h2').each(function(index) {
                var $paragraph = $(this).next('p');
                if (legalText.sections[index] && $paragraph.length) {
                    $paragraph.text(legalText.sections[index][1]);
                }
            });
            $('.legal-actions .btn-success').text(legalText.primary);
            $('.legal-actions .btn-outline-dark').text(legalText.secondary);
        }

        $('.lang-price').each(function() {
            $(this).text($(this).data(lang === 'id' ? 'price-id' : 'price-en'));
        });

        $('.lang-btn').removeClass('active').attr('aria-pressed', 'false');
        $('.lang-btn[data-lang="' + lang + '"]').addClass('active').attr('aria-pressed', 'true');
    }

    $('.lang-btn').click(function() {
        applyLanguage($(this).data('lang'));
    });

    applyLanguage('en');

  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('a.smoothScroll[href^="#"], .navbar-default a[href^="#"]').off('click').on('click', function(event) {
            var targetId = $(this).attr('href');
            var $target = $(targetId);

            if (!$target.length) {
                return;
            }

            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $target.offset().top - 59
            }, 900);

            $(".navbar-collapse").collapse('hide');
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    if (!$('#home').length || !$.fn.vegas) {
        return;
    }

    $('body').vegas({
        slides: [
            { src: 'images/slide-img1.webp' },
            { src: 'images/slide-img2.webp' },
            { src: 'images/slide-img3.webp' },
            { src: 'images/slide-img4.webp' },
            { src: 'images/slide-img5.webp' },
            { src: 'images/slide-img6.webp' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });
  });


  /* Team carousel
  -----------------------------------------------*/
  var $teamCarousel = $("#team-carousel");
  if ($teamCarousel.length && $.fn.owlCarousel) {
      $teamCarousel.owlCarousel({
          items: 3,
          itemsMargin: 30,
          autoPlay: 3500,
          stopOnHover: false,
          navigation: false,
          pagination: true,
          paginationSpeed: 600,
          rewindNav: true,
          rewindSpeed: 800,
          slideSpeed: 500,
          itemsDesktop: [1199, 3],
          itemsDesktopSmall: [991, 2],
          itemsTablet: [767, 1],
          itemsMobile: [479, 1]
      });
  }


    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

});
