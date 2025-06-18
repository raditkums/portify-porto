function back() {
	document.getElementById('welcome').classList.add('hidden'); // Ensure welcome is hidden
	document.getElementById('profileLinks').classList.remove('hidden'); // Show profile links
	document.getElementById('profileDetails').classList.add('hidden'); // Hide profile details
}

// Fungsi untuk menampilkan bagian profil setelah mengklik start
function startPortfolio() {
	document.getElementById('welcome').classList.add('hidden');
	document.getElementById('profileLinks').classList.remove('hidden');
	document.getElementById('profileDetails').classList.add('hidden');
}

// Data profil untuk setiap member
const profiles = {
	joanne: {
		name: 'Joanne Asher Li',
		description:
			'Saat ini menjadi mahasiswa tahun ketiga di Universitas Binus yang mengambil jurusan Akuntansi dan Sistem Informasi, dengan minat yang semakin besar pada bagaimana sistem informasi membentuk dan mendukung operasi bisnis. Memiliki dasar dalam akuntansi membantu dalam memahami pentingnya akurasi dan struktur, sementara mempelajari tentang desain sistem dan aliran data telah memicu apresiasi yang lebih dalam terhadap peran teknologi dalam meningkatkan efisiensi dan pengambilan keputusan. Senang bekerja di lingkungan yang terorganisasi dan bersemangat dalam mengaitkan wawasan teknis dengan kebutuhan bisnis.',
		education: 'Bina Nusantara University Accounting and Information Systems', // Simplified to string for easier template use
		achievements: ['Relawan Teach for Indonesia', 'Aktivis FARCO 2023'],
		certifications: ['Data Analytics', 'Microsoft Excel', 'Power BI'],
		organizational1: 'Teach for Indonesia (TFI) - Mathematics Volunteer Tutor',
		desc1:
			'Mengajarkan matematika dasar kepada siswa sekolah dasar kelas 2 sebagai bagian dari program bimbingan belajar masyarakat yang diselenggarakan oleh Universitas Binus. Bekerja sama dengan sesama mahasiswa relawan dari berbagai jurusan untuk memberikan dukungan pendidikan gratis bagi anak-anak yang tinggal di sekitar area kampus.',
		organizational2: 'Entrepreneurship Project - BIFEST (Binus Festival)',
		desc2:
			'Berkolaborasi dengan tim untuk mengembangkan dan memamerkan produk bernama LensGO, aplikasi terkait kacamata, sebagai bagian dari proyek kewirausahaan universitas. Terlibat dalam perencanaan, pembuatan, dan penyajian konsep selama festival.',
		skills1: 'Microsoft Office 365',
		skills2: 'Figma',
		skills3: 'Time Management',
		skills4: 'Teamwork',
		skills5: 'Indonesian',
		skills6: 'English',
		email: 'joanne.a2004@gmail.com',
		phone: '+62 895-2021-9480',
		image: 'joanne.jpg', // Ensure this path is correct
		socialMedia: {
			// Standardized social media object
			linkedin: 'https://www.linkedin.com/in/joanneasherl04/',
			instagram: 'https://www.instagram.com/joanneasherl/',
		},
	},
	ingrid: {
		name: 'Ingrid Marbella Sumar',
		description:
			'Saat ini saya adalah mahasiswa tahun ke-3 jurusan Sistem Informasi dan Akuntansi di Universitas Bina Nusantara, dengan minat yang kuat dalam menggabungkan teknologi, desain, dan akuntansi untuk mendorong solusi bisnis yang efisien. Dilengkapi dengan keterampilan analitis yang solid, pengetahuan dasar dalam Desain UI/UX, Pemasaran Digital, dan pemahaman yang mendalam tentang prinsip-prinsip Akuntansi, saya ingin menerapkan keahlian saya dalam proyek-proyek dunia nyata. Saya juga antusias untuk mendapatkan pengalaman industri yang berharga melalui magang, yang akan memungkinkan saya untuk lebih memperluas keterampilan dan perspektif saya.',
		education: 'Bina Nusantara University Accounting and Information Systems',
		achievements: ['Relawan Teach for Indonesia', 'Aktivis FARCO 2023'],
		certifications: ['Data Analytics', 'Microsoft Excel', 'Power BI'],
		organizational1: 'Bina Nusantara University - Freshmen Leader',
		desc1:
			'Sebagai Freshmen Leader di Universitas Bina Nusantara, saya memimpin dan membimbing mahasiswa baru, membantu mereka beradaptasi dengan kehidupan kampus. Saya menyelenggarakan berbagai acara yang mengembangkan keterampilan saya dalam koordinasi acara, manajemen tim, dan komunikasi. Pengalaman ini juga memperkuat kemampuan berbicara di depan publik, pemecahan masalah, dan kemampuan beradaptasi saya, yang semuanya berharga untuk mengelola proyek pemasaran digital dan melaksanakan kampanye yang sukses.',
		organizational2: 'Entrepreneurship Project - BIFEST (Binus Festival)',
		desc2:
			'Dalam proyek BIFEST (Binus Festival), saya bergabung dengan tim yang mengembangkan dan memamerkan LensGO, sebuah aplikasi terkait kacamata. Saya terlibat dalam perencanaan, pembuatan, dan penyajian konsep produk selama festival berlangsung, yang mengasah kerja sama tim, kreativitas, dan keterampilan komunikasi efektif saya dalam menyajikan ide produk.',
		skills1: 'Social Media Marketing',
		skills2: 'Content Creation',
		skills3: 'Data Analysis',
		skills4: 'E-commerce Marketing',
		skills5: 'Brand Strategy',
		skills6: 'Web Design',
		email: 'ingridmarbella1594@gmail.com',
		phone: '+62 816-211-108',
		image: 'ingrid.jpg', // Ensure this path is correct
		socialMedia: {
			// Added social media for Ingrid (example, fill with real links)
			linkedin: 'https://www.linkedin.com/in/ingridmarbellasumar/',
			instagram: 'https://www.instagram.com/ingriddd_ms/',
		},
	},
	vannesia: {
		name: 'Vannesia Melati May',
		description:
			'Mahasiswa tahun ketiga di Program Studi Sistem Informasi dan Akuntansi di BINUS University dengan pengalaman dalam kegiatan relawan perpajakan, serta aktif di organisasi kemahasiswaan. Memiliki kemampuan yang baik dalam manajemen waktu, negosiasi, komunikasi, dan penggunaan perangkat lunak akuntansi. Terbukti mampu bekerja secara kolaboratif maupun mandiri dengan komitmen tinggi terhadap hasil yang optimal.',
		education: 'Bina Nusantara University Accounting and Information Systems',
		achievements: ['Aktivis KMK bagian acara', 'Relawan Pajak 2024'],
		certifications: ['Data Analytics', 'Microsoft Excel'],
		organizational1: 'Aktivis Divisi Acara, KMK Binus University',
		desc1:
			'Berkoordinasi dalam menyusun rundown, konsep PPT dan games setiap hari Jumat untuk acara KMK Jumat',
		organizational2: 'Entrepreneurship Project - BIFEST (Binus Festival)',
		desc2:
			'Dalam proyek BIFEST (Binus Festival), saya bergabung dengan tim yang mengembangkan dan memamerkan LensGO, sebuah aplikasi terkait kacamata. Saya terlibat dalam perencanaan, pembuatan, dan penyajian konsep produk selama festival berlangsung, yang mengasah kerja sama tim, kreativitas, dan keterampilan komunikasi efektif saya dalam menyajikan ide produk.',
		skills1: 'Microsoft Office 365',
		skills2: 'Figma',
		skills3: 'SQL',
		skills4: 'Visual Paradigm',
		skills5: 'Mekari Journal',
		skills6: 'HTML and Java Programming',
		email: 'vmelatimay@gmail.com',
		phone: '+62 822-5838-7844',
		image: 'vannesia.jpg', // Ensure this path is correct
		socialMedia: {
			// Added social media for Vannesia (example, fill with real links)
			linkedin: 'https://www.linkedin.com/in/vannesia-melati-may-b7a1572a5/',
			instagram: 'https://www.instagram.com/vannesiamay/',
		},
	},
	raditya: {
		name: 'Raditya Kumara Salim',
		description: 'Halo, aku Raditya! Mahasiswa AIS Binusian 26.',
		education: 'Bina Nusantara University Accounting and Information Systems',
		achievements: ['Aktif di BinusTV, mengelola program media kampus'],
		certifications: ['Web Development', 'Data Science'],
		organizational1: 'Aktivis Produksi, BINUS TV Club',
		desc1: 'Menyusun konsep konten program acara Binus TV Club',
		organizational2: 'Entrepreneurship Project - BIFEST (Binus Festival)',
		desc2:
			'Dalam proyek BIFEST (Binus Festival), saya bergabung dengan tim yang mengembangkan dan memamerkan LensGO, sebuah aplikasi terkait kacamata. Saya terlibat dalam perencanaan, pembuatan, dan penyajian konsep produk selama festival berlangsung, yang mengasah kerja sama tim, kreativitas, dan keterampilan komunikasi efektif saya dalam menyajikan ide produk.',
		skills1: 'Microsoft Office 365',
		skills2: 'Figma',
		skills3: 'SQL',
		skills4: 'Visual Paradigm',
		skills5: 'Mekari Journal',
		skills6: 'HTML and Java Programming',
		email: 'broradit22@gmail.com',
		phone: '+62 858-9969-9958',
		image: 'raditya.jpg', // Ensure this path is correct
		socialMedia: {
			// Standardized this to use a socialMedia object
			instagram: 'https://www.instagram.com/raditkums_/', // Example link
			linkedin: 'https://www.linkedin.com/in/raditya-kumara-salim-3035b133b/', // Example link
		},
	},
};

function showProfile(member) {
	document.getElementById('welcome').classList.add('hidden');
	document.getElementById('profileLinks').classList.add('hidden');
	document.getElementById('profileDetails').classList.remove('hidden');

	const profile = profiles[member];

	if (!profile) {
		document.getElementById('profileDetails').innerHTML =
			'<p style="color: white; text-align: center; padding: 50px;">Profil tidak ditemukan.</p>';
		return;
	}

	// Function to generate social media icons HTML
	function getSocialMediaHtml(socialMediaData) {
		let socialHtml = '';
		if (socialMediaData && socialMediaData.linkedin) {
			socialHtml += `<a href="${socialMediaData.linkedin}" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>`;
		}
		if (socialMediaData && socialMediaData.instagram) {
			socialHtml += `<a href="${socialMediaData.instagram}" target="_blank" aria-label="Instagram"><i class="bi bi-instagram"></i></a>`;
		}
		return socialHtml;
	}

	// Assign IDs to the main sections for navigation
	const html = `
        <header>
            <div class="navbar">
                <div class="logo">Portify</div>
                <nav>
                    <ul>
                        <li><a href="#beranda-section" class="nav-link">Beranda</a></li>
                        <li><a href="#beranda-section" class="nav-link">Tentang Saya</a></li>
                        <li><a href="#pengalaman-section" class="nav-link">Pengalaman Organisasi</a></li>
                        <li><a href="#skills-section" class="nav-link">Skills</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <button class="back" onclick="back()">Back To Member</button>
        <div class="main-content-wrapper section-anchor" id="beranda-section">
            <div class="profile-main-info-card">
                <img src="${profile.image}" alt="${profile.name}" class="profile-image">
                <h1>${profile.name}</h1>
                <h3>${profile.title || 'Accounting & Information Systems'}</h3>
                <section class="professional-profile-summary section-anchor" id="beranda-section">
                    <h2>Tentang Saya</h2>
                    <p class="description">${profile.description}</p>
                </section>
            </div>

            <aside class="personal-detail-column">
                <div class="card card-contact">
                    <h3><i class="fas fa-address-card"></i> Informasi Pribadi</h3>
                    <ul>
                        <li><i class="fas fa-envelope"></i> ${profile.email}</li>
                        <li><i class="fas fa-phone"></i> ${profile.phone}</li>
                    </ul>
                </div>

                <div class="card card-education">
                    <h3><i class="fas fa-graduation-cap"></i> Pendidikan</h3>
                    <ul>
                        <li>
                            <strong>${profile.education.split(' - ')[0] || profile.education}</strong><br>
                            <span>${profile.education.split(' - ')[1] || ''}</span>
                        </li>
                    </ul>
                </div>

                <div class="card card-achievements">
                    <h3><i class="fas fa-trophy"></i> Pencapaian</h3>
                    <ul>
                        ${profile.achievements.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="card card-certifications">
                    <h3><i class="fas fa-certificate"></i> Sertifikasi</h3>
                    <ul>
                        ${profile.certifications.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </aside>
        </div>

        <div class="experience-section" id="pengalaman-section">
            <h1>Pengalaman Organisasi</h1>
            <div class="experience-timeline">
                <div class="experience-card">
                    <h2>${profile.organizational1}</h2>
                    <p class="description">${profile.desc1}</p>
                </div>
                <div class="experience-card">
                    <h2>${profile.organizational2}</h2>
                    <p class="description">${profile.desc2}</p>
                </div>
            </div>
        </div>

        <div class="skills-section section-anchor" id="skills-section">
            <h1>Skills</h1>
            <div class="skills-grid">
                <div class="skill-card 1">
                    <div class="skill-card-header">
                        <div class="icon-wrapper">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3>${profile.skills1}</h3>
                    </div>
                </div>
                <div class="skill-card 2">
                    <div class="skill-card-header">
                        <div class="icon-wrapper">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h3>${profile.skills2}</h3>
                    </div>
                </div>
                <div class="skill-card 3">
                    <div class="skill-card-header">
                        <div class="icon-wrapper">
                            <i class="fas fa-database"></i>
                        </div>
                        <h3>${profile.skills3}</h3>
                    </div>
                </div>
                <div class="skill-card 4">
                    <div class="skill-card-header">
                        <div class="icon-wrapper">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h3>${profile.skills4}</h3>
                    </div>
                </div>
                <div class="skill-card 5">
                    <div class="skill-card-header">
                        <div class="icon-wrapper">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>${profile.skills5}</h3>
                    </div>
                </div>
                <div class="skill-card 6">
                    <div class="skill-card-header">
                        <div class="icon-wrapper">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h3>${profile.skills6}</h3>
                    </div>
                </div>

                <div class="card-card-social-media">
                    <h3><i class="bi bi-share-alt"></i> Ikuti saya di:</h3>
                    <div class="social-icons-in-card">
                        ${getSocialMediaHtml(profile.socialMedia)}
                    </div>
                </div>

                <div class="contact-card message-form">
                    <h2>Kirim Pesan</h2>
                    <form id="contactForm">
                        <div>
                            <label for="fullName">Nama Lengkap</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Masukkan nama lengkap Anda" required>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="nama@email.com" required>
                        </div>
                        <div>
                            <label for="message">Pesan</label>
                            <textarea id="message" name="message" placeholder="Ceritakan tentang proyek atau kolaborasi yang Anda inginkan..." required></textarea>
                        </div>
                        <button type="submit">Kirim Pesan <i class="bi bi-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    `;

	document.getElementById('profileDetails').innerHTML = html;

// 	// OPTIONAL: Smooth scroll for all nav-link clicks
// 	document.querySelectorAll('.nav-link').forEach((link) => {
//      link.addEventListener('click', function (e) {
//         const targetId = this.getAttribute('href').replace('#', '');
//         const targetSection = document.getElementById(targetId);
//         if (targetSection) {
//             e.preventDefault();
//             const navbarHeight = document.querySelector('header').offsetHeight;
//             const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
//             const offsetPosition = elementPosition - navbarHeight - 10;
//             window.scrollTo({
//             top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   });
// });

	// Event listener untuk form contact agar muncul SweetAlert saat submit
	document.getElementById('profileDetails').addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'contactForm') {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Pesan Berhasil Dikirim!',
            text: 'Terima kasih telah menghubungi. Kami akan segera membalas pesan Anda.',
            confirmButtonText: 'OK'
        });
        e.target.reset();
    }
});
}
