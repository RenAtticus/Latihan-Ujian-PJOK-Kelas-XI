(() => {
  const MAX_QUESTIONS = 50;
  const MAX_HP = 3;
  const WARN_LIMIT = 2;
  const QUESTION_TIME = 300; // 5 menit
  const POINTS_PER_QUESTION = 2;

  const questionBank = [
  {
    "topic": "Senam lantai",
    "question": "Tujuan utama pemanasan sebelum senam lantai adalah ...",
    "answers": [
      {
        "text": "Mempersiapkan otot dan sendi",
        "correct": true
      },
      {
        "text": "Membuat tubuh cepat lelah",
        "correct": false
      },
      {
        "text": "Menurunkan kelentukan tubuh",
        "correct": false
      },
      {
        "text": "Mengurangi koordinasi gerak",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Manfaat kayang bagi tubuh adalah ...",
    "answers": [
      {
        "text": "Melatih kelentukan tubuh",
        "correct": true
      },
      {
        "text": "Mengecilkan kapasitas paru-paru",
        "correct": false
      },
      {
        "text": "Mengurangi keseimbangan",
        "correct": false
      },
      {
        "text": "Melemahkan otot lengan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Gerakan mengguling ke depan dengan posisi badan membulat disebut ...",
    "answers": [
      {
        "text": "Guling depan",
        "correct": true
      },
      {
        "text": "Meroda",
        "correct": false
      },
      {
        "text": "Kayang",
        "correct": false
      },
      {
        "text": "Lenting tangan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Posisi dagu saat melakukan guling depan adalah ...",
    "answers": [
      {
        "text": "Menempel ke dada",
        "correct": true
      },
      {
        "text": "Mendongak ke atas",
        "correct": false
      },
      {
        "text": "Miring ke kanan",
        "correct": false
      },
      {
        "text": "Tegak bebas",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Tujuan utama gerakan guling depan adalah ...",
    "answers": [
      {
        "text": "Melatih keluwesan dan koordinasi gerak tubuh",
        "correct": true
      },
      {
        "text": "Meningkatkan berat badan",
        "correct": false
      },
      {
        "text": "Mengurangi keseimbangan",
        "correct": false
      },
      {
        "text": "Menghilangkan kekuatan otot",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Rangkaian guling depan dan guling lenting menuntut ...",
    "answers": [
      {
        "text": "Kelentukan dan koordinasi",
        "correct": true
      },
      {
        "text": "Kekuatan rahang",
        "correct": false
      },
      {
        "text": "Kecepatan baca",
        "correct": false
      },
      {
        "text": "Daya ingat angka",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Gerakan meroda dilakukan ke arah ...",
    "answers": [
      {
        "text": "Samping",
        "correct": true
      },
      {
        "text": "Depan lurus",
        "correct": false
      },
      {
        "text": "Belakang lurus",
        "correct": false
      },
      {
        "text": "Atas lurus",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Gerakan guling lenting berasal dari kombinasi ...",
    "answers": [
      {
        "text": "Guling depan dan tolakan kaki/tangan",
        "correct": true
      },
      {
        "text": "Jalan santai dan lompat jauh",
        "correct": false
      },
      {
        "text": "Meroda dan sprint",
        "correct": false
      },
      {
        "text": "Push up dan sit up",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Posisi awal jongkok pada guling lenting memudahkan ...",
    "answers": [
      {
        "text": "Tolakan ke depan dan ke atas",
        "correct": true
      },
      {
        "text": "Tidur di lantai",
        "correct": false
      },
      {
        "text": "Mengecilkan langkah",
        "correct": false
      },
      {
        "text": "Membuat tubuh diam",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Saat mendarat pada peti lompat, posisi badan yang benar adalah ...",
    "answers": [
      {
        "text": "Seimbang dan lutut sedikit menekuk",
        "correct": true
      },
      {
        "text": "Jatuh ke belakang",
        "correct": false
      },
      {
        "text": "Tegak kaku tanpa menekuk lutut",
        "correct": false
      },
      {
        "text": "Miring bebas",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Langkah kaki ke depan dan ke belakang pada senam irama bertujuan melatih ...",
    "answers": [
      {
        "text": "Irama dan koordinasi gerak",
        "correct": true
      },
      {
        "text": "Kekuatan gigi",
        "correct": false
      },
      {
        "text": "Daya ingat warna",
        "correct": false
      },
      {
        "text": "Panjang lengan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Langkah samping pada senam irama dilakukan dengan arah ...",
    "answers": [
      {
        "text": "Ke kanan atau ke kiri",
        "correct": true
      },
      {
        "text": "Hanya ke depan",
        "correct": false
      },
      {
        "text": "Hanya ke belakang",
        "correct": false
      },
      {
        "text": "Melingkar tanpa arah",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Langkah ke depan pada senam irama berarti ...",
    "answers": [
      {
        "text": "Melangkah maju mengikuti irama",
        "correct": true
      },
      {
        "text": "Berjalan mundur",
        "correct": false
      },
      {
        "text": "Diam di tempat",
        "correct": false
      },
      {
        "text": "Melompat bebas tanpa tempo",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Galoppas dalam senam irama berarti ...",
    "answers": [
      {
        "text": "Langkah lompat",
        "correct": true
      },
      {
        "text": "Langkah silang",
        "correct": false
      },
      {
        "text": "Langkah diam",
        "correct": false
      },
      {
        "text": "Langkah berat",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Kruispas berarti ...",
    "answers": [
      {
        "text": "Langkah silang",
        "correct": true
      },
      {
        "text": "Langkah ganda ke depan",
        "correct": false
      },
      {
        "text": "Langkah melingkar",
        "correct": false
      },
      {
        "text": "Langkah menyamping kecil",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Huppelpas dalam senam irama berarti ...",
    "answers": [
      {
        "text": "Langkah loncat",
        "correct": true
      },
      {
        "text": "Langkah seret",
        "correct": false
      },
      {
        "text": "Langkah ganti",
        "correct": false
      },
      {
        "text": "Langkah diam",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Langkah yang paling mudah dipelajari pada senam irama biasanya adalah ...",
    "answers": [
      {
        "text": "Langkah dasar sederhana",
        "correct": true
      },
      {
        "text": "Gerakan salto",
        "correct": false
      },
      {
        "text": "Putaran penuh di udara",
        "correct": false
      },
      {
        "text": "Loncat bebas tanpa hitungan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Istilah gerak lemah gemulai pada senam irama menekankan ...",
    "answers": [
      {
        "text": "Keindahan dan keluwesan",
        "correct": true
      },
      {
        "text": "Kekakuan tubuh",
        "correct": false
      },
      {
        "text": "Gerak kasar",
        "correct": false
      },
      {
        "text": "Gerak secepat mungkin",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Hal yang perlu diperhatikan dalam senam dansa adalah ...",
    "answers": [
      {
        "text": "Kesesuaian gerak dengan irama",
        "correct": true
      },
      {
        "text": "Menahan napas terus-menerus",
        "correct": false
      },
      {
        "text": "Gerak asal cepat",
        "correct": false
      },
      {
        "text": "Pandangan ke bawah terus",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Yang diperlukan dalam melakukan senam irama adalah ...",
    "answers": [
      {
        "text": "Musik, koordinasi, dan kelenturan",
        "correct": true
      },
      {
        "text": "Bola dan gawang",
        "correct": false
      },
      {
        "text": "Raket dan shuttlecock",
        "correct": false
      },
      {
        "text": "Papan skor",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Tujuan latihan kebugaran jasmani adalah ...",
    "answers": [
      {
        "text": "Meningkatkan kondisi fisik",
        "correct": true
      },
      {
        "text": "Membuat tubuh malas bergerak",
        "correct": false
      },
      {
        "text": "Mengurangi stamina",
        "correct": false
      },
      {
        "text": "Menambah rasa kantuk",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Bentuk latihan kelincahan yang umum adalah ...",
    "answers": [
      {
        "text": "Shuttle run",
        "correct": true
      },
      {
        "text": "Duduk diam",
        "correct": false
      },
      {
        "text": "Membaca buku",
        "correct": false
      },
      {
        "text": "Tidur telentang",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Tujuan dari program latihan kondisi fisik adalah ...",
    "answers": [
      {
        "text": "Meningkatkan kebugaran dan kemampuan gerak",
        "correct": true
      },
      {
        "text": "Membuat tubuh lemah",
        "correct": false
      },
      {
        "text": "Mengurangi daya tahan",
        "correct": false
      },
      {
        "text": "Membuat otak kosong",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Hal yang mampu meningkatkan kebugaran jasmani seseorang adalah ...",
    "answers": [
      {
        "text": "Latihan teratur dan pola hidup sehat",
        "correct": true
      },
      {
        "text": "Begadang setiap hari",
        "correct": false
      },
      {
        "text": "Makan sembarang dan malas gerak",
        "correct": false
      },
      {
        "text": "Tidak pernah olahraga",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Langkah-langkah dalam melakukan latihan keseimbangan harus dilakukan dengan ...",
    "answers": [
      {
        "text": "Kontrol tubuh yang baik",
        "correct": true
      },
      {
        "text": "Gerak liar tanpa fokus",
        "correct": false
      },
      {
        "text": "Lari sekencang mungkin",
        "correct": false
      },
      {
        "text": "Mata selalu terpejam tanpa aturan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Istilah lain dari lari di alam terbuka adalah ...",
    "answers": [
      {
        "text": "Cross country",
        "correct": true
      },
      {
        "text": "Sprint lane",
        "correct": false
      },
      {
        "text": "Free jump",
        "correct": false
      },
      {
        "text": "Step run",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Tujuan shuttle run adalah melatih ...",
    "answers": [
      {
        "text": "Kelincahan",
        "correct": true
      },
      {
        "text": "Kekuatan suara",
        "correct": false
      },
      {
        "text": "Kelenturan leher saja",
        "correct": false
      },
      {
        "text": "Tinggi badan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Istilah lain dari interval training adalah ...",
    "answers": [
      {
        "text": "Latihan berselang",
        "correct": true
      },
      {
        "text": "Latihan diam",
        "correct": false
      },
      {
        "text": "Latihan acak",
        "correct": false
      },
      {
        "text": "Latihan ringan selamanya",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Istilah lain dari gerakan squat thrust adalah ...",
    "answers": [
      {
        "text": "Burpee sederhana / squat thrust",
        "correct": true
      },
      {
        "text": "Push ball",
        "correct": false
      },
      {
        "text": "Side hop",
        "correct": false
      },
      {
        "text": "Jump sit",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Pada orang kategori normal, intensitas latihan kebugaran jasmani sebaiknya ...",
    "answers": [
      {
        "text": "Sedang dan bertahap",
        "correct": true
      },
      {
        "text": "Maksimal terus-menerus",
        "correct": false
      },
      {
        "text": "Hampir nol",
        "correct": false
      },
      {
        "text": "Tanpa pengaturan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Istilah lain dari kebugaran jasmani adalah ...",
    "answers": [
      {
        "text": "Physical fitness",
        "correct": true
      },
      {
        "text": "Body contest",
        "correct": false
      },
      {
        "text": "Skill attack",
        "correct": false
      },
      {
        "text": "Muscle game",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Tujuan utama dari kebugaran jasmani adalah ...",
    "answers": [
      {
        "text": "Memudahkan aktivitas sehari-hari",
        "correct": true
      },
      {
        "text": "Membuat tubuh sering sakit",
        "correct": false
      },
      {
        "text": "Mengurangi energi",
        "correct": false
      },
      {
        "text": "Menghambat gerak",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Bentuk latihan untuk meningkatkan daya tahan otot tungkai adalah ...",
    "answers": [
      {
        "text": "Squat atau lunge",
        "correct": true
      },
      {
        "text": "Melempar buku",
        "correct": false
      },
      {
        "text": "Duduk manis",
        "correct": false
      },
      {
        "text": "Menutup mata",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Tujuan lari bolak-balik 5-10 meter adalah meningkatkan ...",
    "answers": [
      {
        "text": "Kelincahan tubuh",
        "correct": true
      },
      {
        "text": "Kekuatan jari",
        "correct": false
      },
      {
        "text": "Daya lihat",
        "correct": false
      },
      {
        "text": "Panjang langkah statis",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "HIV menyerang sistem ...",
    "answers": [
      {
        "text": "Kekebalan tubuh",
        "correct": true
      },
      {
        "text": "Pencernaan",
        "correct": false
      },
      {
        "text": "Peredaran udara",
        "correct": false
      },
      {
        "text": "Otot wajah",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Penyebab HIV/AIDS adalah ...",
    "answers": [
      {
        "text": "Virus",
        "correct": true
      },
      {
        "text": "Bakteri",
        "correct": false
      },
      {
        "text": "Jamur",
        "correct": false
      },
      {
        "text": "Protozoa",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Penularan HIV dapat terjadi melalui ...",
    "answers": [
      {
        "text": "Berbagi jarum suntik",
        "correct": true
      },
      {
        "text": "Berjabat tangan",
        "correct": false
      },
      {
        "text": "Makan satu meja",
        "correct": false
      },
      {
        "text": "Berkeringat saat olahraga",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Kelompok yang berisiko terkena HIV lebih tinggi adalah ...",
    "answers": [
      {
        "text": "Pengguna jarum suntik bergantian",
        "correct": true
      },
      {
        "text": "Orang yang rajin belajar",
        "correct": false
      },
      {
        "text": "Anak yang suka membaca",
        "correct": false
      },
      {
        "text": "Pemain sepak bola",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Cara kerja HIV menyerang tubuh manusia adalah ...",
    "answers": [
      {
        "text": "Merusak sistem kekebalan tubuh",
        "correct": true
      },
      {
        "text": "Memperkuat sel darah putih",
        "correct": false
      },
      {
        "text": "Menambah kepadatan tulang",
        "correct": false
      },
      {
        "text": "Membentuk otot baru",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Infeksi oportunistik adalah ...",
    "answers": [
      {
        "text": "Infeksi yang muncul saat daya tahan tubuh lemah",
        "correct": true
      },
      {
        "text": "Infeksi karena olahraga berat",
        "correct": false
      },
      {
        "text": "Infeksi dari makanan pedas",
        "correct": false
      },
      {
        "text": "Infeksi karena kurang tidur satu malam",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Bentuk-bentuk penyakit menular termasuk ...",
    "answers": [
      {
        "text": "HIV/AIDS, TBC, dan influenza",
        "correct": true
      },
      {
        "text": "Miopia, rabun jauh, dan silinder",
        "correct": false
      },
      {
        "text": "Pegal linu, kram, dan capek",
        "correct": false
      },
      {
        "text": "Bau badan, pusing, dan lapar",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Ciri-ciri anak yang tergolong tidak sehat adalah ...",
    "answers": [
      {
        "text": "Mudah lelah dan nafsu makan menurun",
        "correct": true
      },
      {
        "text": "Aktif dan bugar",
        "correct": false
      },
      {
        "text": "Tidur cukup dan semangat",
        "correct": false
      },
      {
        "text": "Gerak lincah dan stabil",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Salah satu alasan orang menggunakan obat-obatan terlarang adalah ...",
    "answers": [
      {
        "text": "Pengaruh lingkungan dan rasa ingin coba-coba",
        "correct": true
      },
      {
        "text": "Agar tubuh makin sehat",
        "correct": false
      },
      {
        "text": "Supaya nilai ujian otomatis naik",
        "correct": false
      },
      {
        "text": "Untuk menambah konsentrasi jangka panjang",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Cara merawat kondisi tubuh sesudah beraktivitas berat adalah ...",
    "answers": [
      {
        "text": "Istirahat dan minum cukup",
        "correct": true
      },
      {
        "text": "Langsung begadang",
        "correct": false
      },
      {
        "text": "Tidak makan sama sekali",
        "correct": false
      },
      {
        "text": "Maksa latihan lagi",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Teknik dasar menggiring bola pada permainan bola tangan adalah ...",
    "answers": [
      {
        "text": "Mendorong bola dengan kontrol ke lantai",
        "correct": true
      },
      {
        "text": "Menendang bola ke udara",
        "correct": false
      },
      {
        "text": "Menangkap bola terus",
        "correct": false
      },
      {
        "text": "Melempar bola ke belakang",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Ciri korban HIV/AIDS sebagian besar adalah ...",
    "answers": [
      {
        "text": "Orang dengan perilaku berisiko tinggi",
        "correct": true
      },
      {
        "text": "Anak yang rajin belajar",
        "correct": false
      },
      {
        "text": "Atlet yang disiplin",
        "correct": false
      },
      {
        "text": "Orang yang selalu minum air putih",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Cara penularan HIV/AIDS pada kalangan remaja bisa terjadi melalui ...",
    "answers": [
      {
        "text": "Pergaulan bebas dan penggunaan jarum bergantian",
        "correct": true
      },
      {
        "text": "Berkeringat saat lari",
        "correct": false
      },
      {
        "text": "Berbagi buku pelajaran",
        "correct": false
      },
      {
        "text": "Berjabat tangan",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Tes antigen pada penderita HIV/AIDS memiliki kelebihan utama berupa ...",
    "answers": [
      {
        "text": "Mendeteksi infeksi lebih cepat",
        "correct": true
      },
      {
        "text": "Menyembuhkan total",
        "correct": false
      },
      {
        "text": "Mengubah virus jadi bakteri",
        "correct": false
      },
      {
        "text": "Membuat tubuh kebal selamanya",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Hal-hal yang terjadi pada fase ke-4 bagi seseorang yang tertular HIV/AIDS adalah ...",
    "answers": [
      {
        "text": "Kekebalan tubuh makin turun dan gejala makin berat",
        "correct": true
      },
      {
        "text": "Tubuh langsung sembuh total",
        "correct": false
      },
      {
        "text": "Tidak ada perubahan sama sekali",
        "correct": false
      },
      {
        "text": "AIDS berubah jadi flu biasa",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Hal yang berisiko mengakibatkan seseorang tertular HIV/AIDS adalah ...",
    "answers": [
      {
        "text": "Hubungan seksual tidak aman",
        "correct": true
      },
      {
        "text": "Mandi pagi",
        "correct": false
      },
      {
        "text": "Makan sayur",
        "correct": false
      },
      {
        "text": "Olahraga rutin",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Seorang peserta didik menempelkan dagu ke dada, lalu kedua tangan diletakkan di matras dan tubuh digulingkan ke depan. Gerakan yang dimaksud adalah ...",
    "answers": [
      {
        "text": "Guling depan",
        "correct": true
      },
      {
        "text": "Meroda",
        "correct": false
      },
      {
        "text": "Kayang",
        "correct": false
      },
      {
        "text": "Sikap lilin",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Setelah dagu ditempelkan ke dada pada gerakan guling depan, langkah berikutnya adalah ...",
    "answers": [
      {
        "text": "Menggulingkan badan ke depan",
        "correct": true
      },
      {
        "text": "Meluruskan kaki ke samping",
        "correct": false
      },
      {
        "text": "Menahan tubuh di atas tangan",
        "correct": false
      },
      {
        "text": "Membuka kaki selebar mungkin",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Pada gerakan guling depan, bagian tubuh yang pertama kali menyentuh matras setelah tangan adalah ...",
    "answers": [
      {
        "text": "Tengkuk",
        "correct": true
      },
      {
        "text": "Tumit",
        "correct": false
      },
      {
        "text": "Siku",
        "correct": false
      },
      {
        "text": "Punggung bawah",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Seorang siswa memutar tubuh ke samping dengan tumpuan tangan bergantian, lalu kedua kaki terbuka saat tubuh melewati atas. Gerakan itu disebut ...",
    "answers": [
      {
        "text": "Meroda",
        "correct": true
      },
      {
        "text": "Guling depan",
        "correct": false
      },
      {
        "text": "Kayang",
        "correct": false
      },
      {
        "text": "Guling lenting",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Saat melakukan meroda, arah gerak tubuh adalah ...",
    "answers": [
      {
        "text": "Ke samping",
        "correct": true
      },
      {
        "text": "Ke depan lurus",
        "correct": false
      },
      {
        "text": "Ke belakang lurus",
        "correct": false
      },
      {
        "text": "Berputar di tempat tanpa tumpuan tangan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Seorang peserta didik membusungkan dada ke atas, kedua tangan dan kaki bertumpu pada lantai, lalu punggung melengkung. Gerakan tersebut adalah ...",
    "answers": [
      {
        "text": "Kayang",
        "correct": true
      },
      {
        "text": "Guling depan",
        "correct": false
      },
      {
        "text": "Sikap lilin",
        "correct": false
      },
      {
        "text": "Meroda",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Dalam pembelajaran senam, guru meminta siswa untuk melakukan gerakan dari posisi jongkok lalu tubuh didorong hingga melenting. Gerakan yang dimaksud adalah ...",
    "answers": [
      {
        "text": "Guling lenting",
        "correct": true
      },
      {
        "text": "Kayang",
        "correct": false
      },
      {
        "text": "Sikap pesawat",
        "correct": false
      },
      {
        "text": "Lompat harimau",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Pada guling lenting dari posisi jongkok, tolakan kaki dan tangan bertujuan untuk ...",
    "answers": [
      {
        "text": "Mendorong tubuh ke depan dan ke atas",
        "correct": true
      },
      {
        "text": "Membuat tubuh diam",
        "correct": false
      },
      {
        "text": "Mengurangi kelenturan",
        "correct": false
      },
      {
        "text": "Menurunkan pusat keseimbangan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Seorang siswa mendarat setelah lompat jongkok pada peti lompat. Sikap yang benar saat mendarat adalah ...",
    "answers": [
      {
        "text": "Seimbang dengan lutut sedikit menekuk",
        "correct": true
      },
      {
        "text": "Badan jatuh ke belakang",
        "correct": false
      },
      {
        "text": "Lutut lurus kaku",
        "correct": false
      },
      {
        "text": "Badan condong ke kanan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam lantai",
    "question": "Saat menumpu pada peti lompat, tangan sebaiknya ...",
    "answers": [
      {
        "text": "Menekan kuat dan stabil",
        "correct": true
      },
      {
        "text": "Dilepas sesaat sebelum tumpuan",
        "correct": false
      },
      {
        "text": "Ditekuk ke belakang",
        "correct": false
      },
      {
        "text": "Digenggam di dada",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Peserta didik melangkah ke depan dan ke belakang mengikuti hitungan musik. Gerakan dasar yang dimaksud adalah ...",
    "answers": [
      {
        "text": "Langkah depan-belakang",
        "correct": true
      },
      {
        "text": "Meroda",
        "correct": false
      },
      {
        "text": "Kayang",
        "correct": false
      },
      {
        "text": "Guling depan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Dalam senam irama, langkah ke samping dilakukan untuk melatih ...",
    "answers": [
      {
        "text": "Koordinasi dan ritme gerak",
        "correct": true
      },
      {
        "text": "Kekuatan rahang",
        "correct": false
      },
      {
        "text": "Daya tahan mata",
        "correct": false
      },
      {
        "text": "Kemampuan menangkap bola",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Seorang siswa melakukan langkah silang mengikuti irama. Nama gerakan itu adalah ...",
    "answers": [
      {
        "text": "Kruispas",
        "correct": true
      },
      {
        "text": "Galoppas",
        "correct": false
      },
      {
        "text": "Huppelpas",
        "correct": false
      },
      {
        "text": "Cross country",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Gerakan yang tampak seperti langkah lompat ringan dan berulang disebut ...",
    "answers": [
      {
        "text": "Galoppas",
        "correct": true
      },
      {
        "text": "Kruispas",
        "correct": false
      },
      {
        "text": "Langkah rapat",
        "correct": false
      },
      {
        "text": "Langkah diam",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Gerakan loncat kecil yang ritmis dalam senam irama disebut ...",
    "answers": [
      {
        "text": "Huppelpas",
        "correct": true
      },
      {
        "text": "Meroda",
        "correct": false
      },
      {
        "text": "Squat thrust",
        "correct": false
      },
      {
        "text": "Peti lompat",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Dalam senam irama, gerak tubuh harus tampak ...",
    "answers": [
      {
        "text": "Lemah gemulai dan indah",
        "correct": true
      },
      {
        "text": "Kaku dan keras",
        "correct": false
      },
      {
        "text": "Lambat tanpa irama",
        "correct": false
      },
      {
        "text": "Asal kuat",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Guru menilai senam irama dari kesesuaian gerak dengan musik. Unsur yang dinilai terutama adalah ...",
    "answers": [
      {
        "text": "Irama",
        "correct": true
      },
      {
        "text": "Tinggi badan",
        "correct": false
      },
      {
        "text": "Jumlah langkah lari",
        "correct": false
      },
      {
        "text": "Kecepatan membaca",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Untuk melakukan senam irama dengan baik, siswa perlu menyiapkan ...",
    "answers": [
      {
        "text": "Kelenturan, koordinasi, dan musik",
        "correct": true
      },
      {
        "text": "Bola, net, dan peluit",
        "correct": false
      },
      {
        "text": "Raket, shuttlecock, dan lapangan",
        "correct": false
      },
      {
        "text": "Peti lompat dan matras",
        "correct": false
      }
    ]
  },
  {
    "topic": "Senam irama",
    "question": "Di kelas senam irama, guru meminta gerakan paling sederhana agar mudah dipelajari. Gerakan tersebut biasanya adalah ...",
    "answers": [
      {
        "text": "Langkah dasar sederhana",
        "correct": true
      },
      {
        "text": "Salto",
        "correct": false
      },
      {
        "text": "Guling lenting",
        "correct": false
      },
      {
        "text": "Meroda",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Raka ingin lebih lincah saat bermain futsal. Latihan yang paling sesuai untuk tujuannya adalah ...",
    "answers": [
      {
        "text": "Shuttle run",
        "correct": true
      },
      {
        "text": "Duduk diam",
        "correct": false
      },
      {
        "text": "Tidur siang",
        "correct": false
      },
      {
        "text": "Membaca buku",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Sinta ingin meningkatkan daya tahan otot tungkai. Latihan yang dapat dipilih adalah ...",
    "answers": [
      {
        "text": "Squat atau lunge",
        "correct": true
      },
      {
        "text": "Menonton video",
        "correct": false
      },
      {
        "text": "Berdiri tanpa gerak",
        "correct": false
      },
      {
        "text": "Menulis catatan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Seorang siswa melakukan lari bolak-balik sejauh 5 sampai 10 meter karena ingin melatih perubahan arah dengan cepat. Latihan itu bermanfaat untuk ...",
    "answers": [
      {
        "text": "Kelincahan",
        "correct": true
      },
      {
        "text": "Kekuatan pergelangan tangan",
        "correct": false
      },
      {
        "text": "Ketajaman pendengaran",
        "correct": false
      },
      {
        "text": "Kesehatan gigi",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Dalam pelajaran PJOK, guru menjelaskan bahwa kebugaran jasmani memudahkan siswa melakukan aktivitas sehari-hari tanpa cepat lelah. Pernyataan itu menunjukkan tujuan ...",
    "answers": [
      {
        "text": "Kebugaran jasmani",
        "correct": true
      },
      {
        "text": "Permainan bola tangan",
        "correct": false
      },
      {
        "text": "Gerak irama",
        "correct": false
      },
      {
        "text": "Senam lantai",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Latihan yang dilakukan secara berselang, dengan jeda istirahat di antara beban latihan, disebut ...",
    "answers": [
      {
        "text": "Interval training",
        "correct": true
      },
      {
        "text": "Cross country",
        "correct": false
      },
      {
        "text": "Shuttle run",
        "correct": false
      },
      {
        "text": "Long jump",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Seorang peserta didik berlari di alam terbuka mengikuti lintasan jauh. Istilah lain dari latihan tersebut adalah ...",
    "answers": [
      {
        "text": "Cross country",
        "correct": true
      },
      {
        "text": "Squat thrust",
        "correct": false
      },
      {
        "text": "Kruispas",
        "correct": false
      },
      {
        "text": "Huppelpas",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Saat melakukan latihan keseimbangan, seorang siswa berdiri pada satu kaki dengan tubuh dikendalikan agar tidak jatuh. Hal yang terutama dilatih adalah ...",
    "answers": [
      {
        "text": "Kontrol tubuh",
        "correct": true
      },
      {
        "text": "Daya baca",
        "correct": false
      },
      {
        "text": "Kekuatan suara",
        "correct": false
      },
      {
        "text": "Panjang lengan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Andi ingin meningkatkan kelincahan tubuhnya. Ia disarankan melakukan latihan ...",
    "answers": [
      {
        "text": "Shuttle run dan lari bolak-balik",
        "correct": true
      },
      {
        "text": "Tidur lebih lama",
        "correct": false
      },
      {
        "text": "Duduk santai",
        "correct": false
      },
      {
        "text": "Mengurangi gerak",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Latihan squat thrust sering juga disebut sebagai ...",
    "answers": [
      {
        "text": "Burpee sederhana",
        "correct": true
      },
      {
        "text": "Lari ringan",
        "correct": false
      },
      {
        "text": "Langkah silang",
        "correct": false
      },
      {
        "text": "Kayang",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Pada orang dengan kondisi normal, latihan kebugaran sebaiknya dilakukan dengan intensitas ...",
    "answers": [
      {
        "text": "Sedang dan bertahap",
        "correct": true
      },
      {
        "text": "Maksimal tanpa henti",
        "correct": false
      },
      {
        "text": "Sangat ringan sekali",
        "correct": false
      },
      {
        "text": "Tanpa aturan",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Istilah yang digunakan untuk kebugaran jasmani dalam bahasa Inggris adalah ...",
    "answers": [
      {
        "text": "Physical fitness",
        "correct": true
      },
      {
        "text": "Body action",
        "correct": false
      },
      {
        "text": "Sport power",
        "correct": false
      },
      {
        "text": "Motor game",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Tujuan utama latihan kebugaran jasmani adalah ...",
    "answers": [
      {
        "text": "Membantu tubuh tetap siap beraktivitas",
        "correct": true
      },
      {
        "text": "Membuat tubuh mudah cedera",
        "correct": false
      },
      {
        "text": "Mengurangi daya tahan",
        "correct": false
      },
      {
        "text": "Menurunkan semangat bergerak",
        "correct": false
      }
    ]
  },
  {
    "topic": "Kebugaran jasmani",
    "question": "Untuk meningkatkan daya tahan otot tungkai, latihan yang sesuai adalah ...",
    "answers": [
      {
        "text": "Squat dan lunge",
        "correct": true
      },
      {
        "text": "Melempar bola ke atas",
        "correct": false
      },
      {
        "text": "Membaca tanpa bergerak",
        "correct": false
      },
      {
        "text": "Tidur sambil duduk",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "HIV menyerang bagian tubuh yang berkaitan dengan ...",
    "answers": [
      {
        "text": "Sistem kekebalan tubuh",
        "correct": true
      },
      {
        "text": "Sistem pencernaan",
        "correct": false
      },
      {
        "text": "Sistem pernapasan",
        "correct": false
      },
      {
        "text": "Sistem gerak",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Salah satu cara penularan HIV yang benar adalah ...",
    "answers": [
      {
        "text": "Berbagi jarum suntik",
        "correct": true
      },
      {
        "text": "Berjabat tangan",
        "correct": false
      },
      {
        "text": "Berbagi bangku kelas",
        "correct": false
      },
      {
        "text": "Minum air putih bersama",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Seorang remaja harus menghindari perilaku berisiko karena HIV lebih mudah menular melalui ...",
    "answers": [
      {
        "text": "Pergaulan bebas dan penggunaan jarum bergantian",
        "correct": true
      },
      {
        "text": "Berdiri di bawah sinar matahari",
        "correct": false
      },
      {
        "text": "Belajar kelompok",
        "correct": false
      },
      {
        "text": "Makan sayur dan buah",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Infeksi oportunistik adalah infeksi yang muncul ketika ...",
    "answers": [
      {
        "text": "Daya tahan tubuh menurun",
        "correct": true
      },
      {
        "text": "Tubuh sedang sehat sekali",
        "correct": false
      },
      {
        "text": "Otot menjadi sangat kuat",
        "correct": false
      },
      {
        "text": "Tulang bertambah panjang",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Tes antigen pada HIV memiliki kelebihan utama karena ...",
    "answers": [
      {
        "text": "Dapat mendeteksi infeksi lebih cepat",
        "correct": true
      },
      {
        "text": "Langsung menyembuhkan pasien",
        "correct": false
      },
      {
        "text": "Menggantikan obat",
        "correct": false
      },
      {
        "text": "Membuat virus hilang seketika",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Pada fase lanjut HIV, kondisi tubuh biasanya ...",
    "answers": [
      {
        "text": "Kekebalan tubuh makin turun",
        "correct": true
      },
      {
        "text": "Membaik tanpa pengobatan",
        "correct": false
      },
      {
        "text": "Langsung normal",
        "correct": false
      },
      {
        "text": "Menjadi lebih kuat sendiri",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Salah satu alasan seseorang terjerumus memakai obat-obatan terlarang adalah ...",
    "answers": [
      {
        "text": "Pengaruh lingkungan dan rasa ingin coba-coba",
        "correct": true
      },
      {
        "text": "Agar tubuh kebal penyakit",
        "correct": false
      },
      {
        "text": "Supaya lari lebih cepat",
        "correct": false
      },
      {
        "text": "Agar daya tahan tubuh naik",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Sesudah beraktivitas berat, tubuh perlu ...",
    "answers": [
      {
        "text": "Istirahat dan minum cukup",
        "correct": true
      },
      {
        "text": "Dipaksa latihan lagi",
        "correct": false
      },
      {
        "text": "Langsung begadang",
        "correct": false
      },
      {
        "text": "Tidak diberi cairan",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Kelompok yang memiliki risiko lebih tinggi terkena HIV adalah ...",
    "answers": [
      {
        "text": "Orang dengan perilaku berisiko tinggi",
        "correct": true
      },
      {
        "text": "Orang yang rajin olahraga",
        "correct": false
      },
      {
        "text": "Anak yang suka membaca",
        "correct": false
      },
      {
        "text": "Siswa yang disiplin belajar",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Ciri umum anak yang tergolong tidak sehat adalah ...",
    "answers": [
      {
        "text": "Mudah lelah dan nafsu makan menurun",
        "correct": true
      },
      {
        "text": "Semangat dan aktif",
        "correct": false
      },
      {
        "text": "Tidur cukup",
        "correct": false
      },
      {
        "text": "Bugar dan lincah",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Salah satu bentuk penyakit menular adalah ...",
    "answers": [
      {
        "text": "TBC",
        "correct": true
      },
      {
        "text": "Miopia",
        "correct": false
      },
      {
        "text": "Astigmatisme",
        "correct": false
      },
      {
        "text": "Rabun dekat",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Cara penularan HIV pada kalangan remaja dapat terjadi melalui ...",
    "answers": [
      {
        "text": "Hubungan seksual tidak aman",
        "correct": true
      },
      {
        "text": "Berbagi buku pelajaran",
        "correct": false
      },
      {
        "text": "Makan bersama",
        "correct": false
      },
      {
        "text": "Olahraga pagi",
        "correct": false
      }
    ]
  },
  {
    "topic": "HIV/AIDS",
    "question": "Seorang siswa ingin tahu mengapa HIV berbahaya. Jawaban yang tepat adalah karena HIV ...",
    "answers": [
      {
        "text": "Merusak sistem kekebalan tubuh",
        "correct": true
      },
      {
        "text": "Membuat tubuh lebih tinggi",
        "correct": false
      },
      {
        "text": "Menguatkan semua organ",
        "correct": false
      },
      {
        "text": "Menyembuhkan infeksi",
        "correct": false
      }
    ]
  }
];

  const byTopic = questionBank.slice();
  const totalAvailable = byTopic.length;
  const useCount = Math.min(MAX_QUESTIONS, totalAvailable);

  const els = {
    startScreen: document.getElementById('startScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultScreen: document.getElementById('resultScreen'),
    startBtn: document.getElementById('startBtn'),
    shufflePreviewBtn: document.getElementById('shufflePreviewBtn'),
    restartBtn: document.getElementById('restartBtn'),
    backHomeBtn: document.getElementById('backHomeBtn'),
    questionText: document.getElementById('questionText'),
    answerList: document.getElementById('answerList'),
    statQuestion: document.getElementById('statQuestion'),
    statScore: document.getElementById('statScore'),
    statHp: document.getElementById('statHp'),
    statWarn: document.getElementById('statWarn'),
    statTime: document.getElementById('statTime'),
    progressBar: document.getElementById('progressBar'),
    timerBar: document.getElementById('timerBar'),
    questionStatus: document.getElementById('questionStatus'),
    topicTag: document.getElementById('topicTag'),
    finalScore: document.getElementById('finalScore'),
    resultText: document.getElementById('resultText'),
    warnBanner: document.getElementById('warnBanner'),
  };

  const state = {
    questions: [],
    index: 0,
    score: 0,
    hp: MAX_HP,
    warnings: 0,
    timeLeft: QUESTION_TIME,
    timer: null,
    locked: false,
    started: false,
    devtoolsHits: 0,
  };

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const randomSubset = (arr, count) => shuffle(arr).slice(0, count);

  function resetState() {
    clearInterval(state.timer);
    state.questions = randomSubset(byTopic, useCount);
    state.index = 0;
    state.score = 0;
    state.hp = MAX_HP;
    state.warnings = 0;
    state.timeLeft = QUESTION_TIME;
    state.locked = false;
    state.started = false;
    state.devtoolsHits = 0;
    updateStats();
  }

  function updateStats() {
    els.statQuestion.textContent = `${Math.min(state.index + 1, state.questions.length)}/${state.questions.length}`;
    els.statScore.textContent = state.score;
    els.statHp.textContent = state.hp;
    els.statWarn.textContent = `${state.warnings}/${WARN_LIMIT}`;
    els.statTime.textContent = state.timeLeft;
    els.progressBar.style.width = `${(state.index / state.questions.length) * 100}%`;
    els.timerBar.style.width = `${(state.timeLeft / QUESTION_TIME) * 100}%`;
    els.warnBanner.style.display = state.warnings > 0 ? 'block' : 'none';
  }

  function showScreen(screen) {
    els.startScreen.classList.add('hide');
    els.quizScreen.classList.add('hide');
    els.resultScreen.classList.add('hide');
    screen.classList.remove('hide');
  }

  function startExam() {
    resetState();
    state.started = true;
    showScreen(els.quizScreen);
    renderQuestion();
  }

  function renderQuestion() {
    clearInterval(state.timer);
    if (state.index >= state.questions.length) {
      finishExam();
      return;
    }

    const q = state.questions[state.index];
    els.questionText.textContent = q.question;
    els.topicTag.textContent = q.topic;
    els.questionStatus.textContent = 'Pilih jawaban yang paling tepat.';
    els.answerList.innerHTML = '';

    const answers = shuffle(q.answers);
    answers.forEach((ans) => {
      const btn = document.createElement('button');
      btn.className = 'answer';
      btn.textContent = ans.text;
      btn.addEventListener('click', () => {
        if (state.locked) return;
        state.locked = true;
        handleAnswer(ans.correct, btn);
      });
      els.answerList.appendChild(btn);
    });

    state.timeLeft = QUESTION_TIME;
    updateStats();

    state.timer = setInterval(() => {
      if (!state.started) return;
      state.timeLeft -= 1;
      updateStats();

      if (state.timeLeft <= 0) {
        clearInterval(state.timer);
        state.locked = true;
        els.questionStatus.textContent = 'Waktu habis. Nilai soal ini 0.';
        setTimeout(() => {
          nextQuestion(false, true);
        }, 650);
      }
    }, 1000);
  }

  function handleAnswer(isCorrect, clickedBtn) {
    clearInterval(state.timer);
    const buttons = [...els.answerList.querySelectorAll('.answer')];
    const q = state.questions[state.index];
    buttons.forEach((btn, idx) => {
      if (q.answers.find(a => a.text === btn.textContent && a.correct)) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      state.score += POINTS_PER_QUESTION;
      els.questionStatus.textContent = 'Benar. Lanjut.';
      clickedBtn.classList.add('correct');
    } else {
      state.hp -= 1;
      els.questionStatus.textContent = 'Salah. HP berkurang.';
      clickedBtn.classList.add('wrong');
      if (state.hp <= 0) {
        updateStats();
        setTimeout(() => {
          alert('HP habis. Ujian diulang dari awal.');
          backToStart(true);
        }, 500);
        return;
      }
    }

    updateStats();
    setTimeout(() => nextQuestion(isCorrect, false), 700);
  }

  function nextQuestion() {
    state.index += 1;
    state.locked = false;
    updateStats();
    if (state.index >= state.questions.length) {
      finishExam();
      return;
    }
    renderQuestion();
  }

  function finishExam() {
    clearInterval(state.timer);
    state.started = false;
    showScreen(els.resultScreen);
    els.finalScore.textContent = `${state.score}/100`;

    let verdict = 'Lumayan. Masih ada harapan.';
    if (state.score >= 90) verdict = 'Bagus. Minimal otaknya ikut hadir.';
    else if (state.score >= 70) verdict = 'Cukup. Jangan sombong dulu.';
    else if (state.score >= 50) verdict = 'Nanggung. Ulang lagi biar waras.';
    else verdict = 'Parah. Ini bukan belajar, ini survive mode.';

    els.resultText.textContent = `${verdict} Kamu menjawab ${state.score / 2} dari ${state.questions.length} soal dengan benar.`;
  }

  function backToStart(forceReset = false) {
    clearInterval(state.timer);
    if (forceReset) resetState();
    state.started = false;
    showScreen(els.startScreen);
    els.warnBanner.style.display = state.warnings > 0 ? 'block' : 'none';
  }

  function addWarning(reason) {
    if (!state.started) return;
    state.warnings += 1;
    updateStats();
    els.questionStatus.textContent = `Warning: ${reason}`;

    if (state.warnings >= WARN_LIMIT) {
      setTimeout(() => {
        alert('Dilarang curang. Ujian dikembalikan ke menu awal.');
        backToStart(true);
      }, 300);
      return;
    }
  }

  function suspiciousActivity(reason) {
    if (!state.started) return;
    addWarning(reason);
  }

  function detectDevtools() {
    if (!state.started) return;
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      state.devtoolsHits += 1;
      if (state.devtoolsHits >= 2) {
        suspiciousActivity('Devtools terdeteksi.');
      }
    }
  }

  function previewShuffle() {
    const preview = shuffle(byTopic).slice(0, 5).map((q, i) => `${i + 1}. ${q.question}`).join('\n');
    alert('Contoh acakan bank soal:\n\n' + preview);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) suspiciousActivity('Keluar tab / aplikasi.');
  });

  window.addEventListener('blur', () => {
    if (state.started) suspiciousActivity('Fokus berpindah.');
  });

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    suspiciousActivity('Klik kanan.');
  });

  document.addEventListener('copy', (e) => {
    e.preventDefault();
    suspiciousActivity('Copy terdeteksi.');
  });

  document.addEventListener('paste', (e) => {
    e.preventDefault();
    suspiciousActivity('Paste terdeteksi.');
  });

  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
      (e.ctrlKey && ['u', 'U'].includes(e.key)) ||
      (e.ctrlKey && ['s', 'S'].includes(e.key))
    ) {
      e.preventDefault();
      suspiciousActivity('Shortcut terlarang.');
    }
  });

  setInterval(detectDevtools, 1000);

  els.startBtn.addEventListener('click', startExam);
  els.restartBtn.addEventListener('click', startExam);
  els.backHomeBtn.addEventListener('click', () => backToStart(true));
  els.shufflePreviewBtn.addEventListener('click', previewShuffle);

  resetState();
  showScreen(els.startScreen);

})();