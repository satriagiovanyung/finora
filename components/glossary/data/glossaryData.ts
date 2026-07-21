export interface GlossaryItem {
  id: number;
  term: string;
  definition: string;
  category:
    | "Dasar Investasi"
    | "Saham"
    | "Fundamental"
    | "Teknikal"
    | "Crypto"
    | "Reksa Dana"
    | "Obligasi"
    | "Emas"
    | "Properti"
    | "Ekonomi"
    | "AI"
    | "Penipuan Investasi";
}

export const istilahList: GlossaryItem[] = [
  // =========================================================
  // DASAR INVESTASI
  // =========================================================
  {
    id: 1,
    category: "Dasar Investasi",
    term: "Investasi",
    definition:
      "Kegiatan menempatkan dana atau aset dengan tujuan memperoleh keuntungan di masa depan.",
  },
  {
    id: 2,
    category: "Dasar Investasi",
    term: "Investor",
    definition:
      "Individu atau institusi yang menanamkan modal pada suatu instrumen investasi.",
  },
  {
    id: 3,
    category: "Dasar Investasi",
    term: "Aset",
    definition:
      "Segala sesuatu yang memiliki nilai ekonomi dan dapat dimiliki, digunakan, atau dijual untuk memperoleh manfaat.",
  },
  {
    id: 4,
    category: "Dasar Investasi",
    term: "Portofolio",
    definition:
      "Kumpulan aset investasi yang dimiliki oleh seorang investor, bisa terdiri dari saham, obligasi, reksa dana, dan instrumen lainnya.",
  },
  {
    id: 5,
    category: "Dasar Investasi",
    term: "Diversifikasi",
    definition:
      "Strategi menyebarkan investasi ke berbagai jenis aset atau instrumen untuk mengurangi risiko kerugian.",
  },
  {
    id: 23,
    category: "Dasar Investasi",
    term: "Return",
    definition:
      "Imbal hasil atau keuntungan yang diperoleh dari suatu investasi dalam periode tertentu.",
  },
  {
    id: 24,
    category: "Dasar Investasi",
    term: "Risiko Investasi",
    definition:
      "Kemungkinan terjadinya kerugian atau hasil yang tidak sesuai harapan dalam berinvestasi.",
  },
  {
    id: 25,
    category: "Dasar Investasi",
    term: "Likuiditas",
    definition:
      "Kemudahan suatu aset untuk dicairkan menjadi uang tunai tanpa mengurangi nilainya secara signifikan.",
  },
  {
    id: 26,
    category: "Dasar Investasi",
    term: "Bunga Majemuk",
    definition:
      "Bunga yang dihitung dari pokok ditambah bunga yang telah diperoleh sebelumnya, sehingga nilainya tumbuh secara eksponensial.",
  },
  {
    id: 27,
    category: "Dasar Investasi",
    term: "Capital Gain",
    definition:
      "Keuntungan yang diperoleh dari selisih harga jual yang lebih tinggi dibanding harga beli suatu aset.",
  },
  {
    id: 28,
    category: "Dasar Investasi",
    term: "Capital Loss",
    definition:
      "Kerugian yang timbul akibat harga jual suatu aset lebih rendah dibanding harga belinya.",
  },
  {
    id: 29,
    category: "Dasar Investasi",
    term: "Dividen",
    definition:
      "Bagian laba perusahaan yang dibagikan kepada pemegang saham.",
  },
  {
    id: 30,
    category: "Dasar Investasi",
    term: "Alokasi Aset",
    definition:
      "Proses membagi portofolio investasi ke berbagai kelas aset seperti saham, obligasi, dan kas sesuai profil risiko.",
  },
  {
    id: 31,
    category: "Dasar Investasi",
    term: "Horizon Investasi",
    definition:
      "Jangka waktu yang direncanakan investor untuk menahan suatu investasi sebelum mencairkannya.",
  },
  {
    id: 32,
    category: "Dasar Investasi",
    term: "Profil Risiko",
    definition:
      "Gambaran seberapa besar toleransi seorang investor terhadap risiko kerugian dalam berinvestasi.",
  },
  {
    id: 33,
    category: "Dasar Investasi",
    term: "Instrumen Investasi",
    definition:
      "Wahana atau produk yang digunakan untuk menanamkan modal, seperti saham, obligasi, reksa dana, dan emas.",
  },
  {
    id: 34,
    category: "Dasar Investasi",
    term: "Rebalancing",
    definition:
      "Proses menyesuaikan kembali komposisi portofolio agar sesuai dengan alokasi aset yang telah ditentukan.",
  },
  {
    id: 35,
    category: "Dasar Investasi",
    term: "Dollar Cost Averaging",
    definition:
      "Strategi investasi dengan menanamkan dana secara rutin dalam jumlah tetap tanpa memperhatikan harga pasar saat itu.",
  },
  {
    id: 36,
    category: "Dasar Investasi",
    term: "Lump Sum",
    definition:
      "Strategi investasi dengan menempatkan seluruh dana sekaligus di awal, bukan secara bertahap.",
  },
  {
    id: 37,
    category: "Dasar Investasi",
    term: "Passive Income",
    definition:
      "Penghasilan yang diperoleh secara berkelanjutan tanpa memerlukan usaha aktif terus-menerus, misalnya dari dividen atau sewa.",
  },
  {
    id: 38,
    category: "Dasar Investasi",
    term: "Kebebasan Finansial",
    definition:
      "Kondisi ketika seseorang memiliki cukup aset atau penghasilan pasif untuk memenuhi kebutuhan hidup tanpa bergantung pada gaji aktif.",
  },
  {
    id: 39,
    category: "Dasar Investasi",
    term: "Dana Darurat",
    definition:
      "Sejumlah uang yang disisihkan untuk menghadapi kebutuhan mendesak sebelum mulai berinvestasi.",
  },
  {
    id: 40,
    category: "Dasar Investasi",
    term: "Biaya Peluang",
    definition:
      "Nilai kesempatan yang hilang karena memilih satu opsi investasi dibanding opsi lain.",
  },
  {
    id: 41,
    category: "Dasar Investasi",
    term: "Leverage",
    definition:
      "Penggunaan dana pinjaman untuk memperbesar potensi keuntungan investasi, namun juga memperbesar risiko kerugian.",
  },
  {
    id: 42,
    category: "Dasar Investasi",
    term: "Margin",
    definition:
      "Dana jaminan yang disetor investor untuk melakukan transaksi dengan fasilitas leverage.",
  },
  {
    id: 43,
    category: "Dasar Investasi",
    term: "Hedging",
    definition:
      "Strategi melindungi nilai investasi dari risiko kerugian dengan mengambil posisi penyeimbang pada instrumen lain.",
  },
  {
    id: 44,
    category: "Dasar Investasi",
    term: "Spekulasi",
    definition:
      "Aktivitas mengambil risiko tinggi dengan harapan memperoleh keuntungan besar dalam waktu singkat.",
  },
  {
    id: 45,
    category: "Dasar Investasi",
    term: "Bearish",
    definition:
      "Kondisi pasar yang cenderung mengalami penurunan harga secara berkelanjutan.",
  },
  {
    id: 46,
    category: "Dasar Investasi",
    term: "Bullish",
    definition:
      "Kondisi pasar yang cenderung mengalami kenaikan harga secara berkelanjutan.",
  },
  {
    id: 47,
    category: "Dasar Investasi",
    term: "Volatilitas",
    definition:
      "Tingkat fluktuasi harga suatu aset dalam periode waktu tertentu.",
  },
  {
    id: 48,
    category: "Dasar Investasi",
    term: "Benchmark",
    definition:
      "Tolok ukur atau acuan untuk menilai kinerja suatu investasi, misalnya indeks pasar.",
  },
  {
    id: 49,
    category: "Dasar Investasi",
    term: "Kompounding",
    definition:
      "Proses pertumbuhan nilai investasi yang semakin cepat karena keuntungan diinvestasikan kembali secara berulang.",
  },
  {
    id: 50,
    category: "Dasar Investasi",
    term: "Manajemen Risiko",
    definition:
      "Proses mengidentifikasi, mengukur, dan mengelola risiko dalam kegiatan investasi.",
  },
  {
    id: 229,
    category: "Dasar Investasi",
    term: "CAGR",
    definition:
      "Compound Annual Growth Rate, tingkat pertumbuhan tahunan rata-rata suatu investasi selama periode tertentu, dihitung secara majemuk.",
  },
  {
    id: 230,
    category: "Dasar Investasi",
    term: "Nilai Waktu Uang",
    definition:
      "Konsep bahwa nilai uang saat ini lebih tinggi dibanding nilai nominal yang sama di masa depan karena potensi pertumbuhannya.",
  },
  {
    id: 231,
    category: "Dasar Investasi",
    term: "Kelas Aset",
    definition:
      "Pengelompokan instrumen investasi berdasarkan karakteristik serupa, seperti saham, obligasi, properti, dan kas.",
  },
  {
    id: 232,
    category: "Dasar Investasi",
    term: "Kekayaan Bersih",
    definition:
      "Selisih antara total aset yang dimiliki seseorang dengan total kewajiban atau utangnya.",
  },
  {
    id: 233,
    category: "Dasar Investasi",
    term: "Anggaran Keuangan",
    definition:
      "Rencana pengelolaan pemasukan dan pengeluaran untuk mencapai tujuan keuangan tertentu.",
  },
  {
    id: 234,
    category: "Dasar Investasi",
    term: "Tujuan Keuangan",
    definition:
      "Target finansial yang ingin dicapai seseorang dalam jangka waktu tertentu, seperti dana pensiun atau membeli rumah.",
  },
  {
    id: 235,
    category: "Dasar Investasi",
    term: "Rekening Dana Nasabah (RDN)",
    definition:
      "Rekening bank khusus yang digunakan investor untuk menampung dana transaksi efek.",
  },
  {
    id: 236,
    category: "Dasar Investasi",
    term: "Broker",
    definition:
      "Perusahaan atau individu berizin yang menjadi perantara transaksi jual beli instrumen investasi.",
  },
  {
    id: 237,
    category: "Dasar Investasi",
    term: "Rasio Sharpe",
    definition:
      "Ukuran yang membandingkan imbal hasil investasi dengan tingkat risiko yang diambil.",
  },
  {
    id: 238,
    category: "Dasar Investasi",
    term: "Herding",
    definition:
      "Kecenderungan investor mengikuti keputusan mayoritas tanpa analisis mandiri.",
  },
  {
    id: 239,
    category: "Dasar Investasi",
    term: "Bias Konfirmasi",
    definition:
      "Kecenderungan mencari informasi yang mendukung keyakinan yang sudah dimiliki dan mengabaikan informasi yang bertentangan.",
  },
  {
    id: 240,
    category: "Dasar Investasi",
    term: "Aversi Kerugian",
    definition:
      "Kecenderungan psikologis di mana rasa sakit akibat kerugian dirasakan lebih besar dibanding kesenangan atas keuntungan yang setara.",
  },

  // =========================================================
  // SAHAM
  // =========================================================
  {
    id: 6,
    category: "Saham",
    term: "Saham",
    definition:
      "Surat berharga yang menunjukkan kepemilikan atas sebagian perusahaan.",
  },
  {
    id: 7,
    category: "Saham",
    term: "IPO",
    definition:
      "Initial Public Offering, yaitu penawaran saham perdana kepada masyarakat sebelum tercatat di bursa.",
  },
  {
    id: 8,
    category: "Saham",
    term: "Lot",
    definition:
      "Satuan perdagangan saham di Bursa Efek Indonesia yang terdiri dari 100 lembar saham.",
  },
  {
    id: 9,
    category: "Saham",
    term: "Bid",
    definition:
      "Harga tertinggi yang bersedia dibayar pembeli untuk suatu saham.",
  },
  {
    id: 10,
    category: "Saham",
    term: "Ask",
    definition:
      "Harga terendah yang diminta penjual untuk melepas suatu saham.",
  },
  {
    id: 51,
    category: "Saham",
    term: "Dividen Saham",
    definition:
      "Pembagian dividen dalam bentuk saham tambahan, bukan uang tunai.",
  },
  {
    id: 52,
    category: "Saham",
    term: "Right Issue",
    definition:
      "Penawaran saham baru kepada pemegang saham lama dengan harga tertentu untuk menambah modal perusahaan.",
  },
  {
    id: 53,
    category: "Saham",
    term: "Stock Split",
    definition:
      "Pemecahan nilai nominal saham menjadi lebih kecil sehingga jumlah lembar saham beredar bertambah.",
  },
  {
    id: 54,
    category: "Saham",
    term: "Buyback Saham",
    definition:
      "Aksi perusahaan membeli kembali sahamnya sendiri yang beredar di pasar.",
  },
  {
    id: 55,
    category: "Saham",
    term: "ARA",
    definition:
      "Auto Reject Atas, batas maksimal kenaikan harga saham dalam satu hari perdagangan.",
  },
  {
    id: 56,
    category: "Saham",
    term: "ARB",
    definition:
      "Auto Reject Bawah, batas maksimal penurunan harga saham dalam satu hari perdagangan.",
  },
  {
    id: 57,
    category: "Saham",
    term: "Suspend",
    definition:
      "Penghentian sementara perdagangan suatu saham oleh otoritas bursa karena alasan tertentu.",
  },
  {
    id: 58,
    category: "Saham",
    term: "Blue Chip",
    definition:
      "Saham perusahaan besar dengan fundamental kuat, kinerja stabil, dan kapitalisasi pasar tinggi.",
  },
  {
    id: 59,
    category: "Saham",
    term: "Saham Gorengan",
    definition:
      "Istilah untuk saham dengan fundamental lemah yang harganya digerakkan secara tidak wajar oleh pihak tertentu.",
  },
  {
    id: 60,
    category: "Saham",
    term: "IHSG",
    definition:
      "Indeks Harga Saham Gabungan, indikator pergerakan harga seluruh saham yang tercatat di Bursa Efek Indonesia.",
  },
  {
    id: 61,
    category: "Saham",
    term: "Kapitalisasi Pasar",
    definition:
      "Nilai total seluruh saham beredar suatu perusahaan, dihitung dari harga saham dikali jumlah saham beredar.",
  },
  {
    id: 62,
    category: "Saham",
    term: "Free Float",
    definition:
      "Persentase saham perusahaan yang beredar bebas di publik dan dapat diperdagangkan.",
  },
  {
    id: 63,
    category: "Saham",
    term: "Saham Preferen",
    definition:
      "Jenis saham yang memberikan hak prioritas atas dividen dan aset perusahaan dibanding saham biasa.",
  },
  {
    id: 64,
    category: "Saham",
    term: "Saham Biasa",
    definition:
      "Jenis saham yang memberikan hak suara dalam RUPS namun tanpa prioritas khusus atas dividen.",
  },
  {
    id: 65,
    category: "Saham",
    term: "Delisting",
    definition:
      "Penghapusan pencatatan saham suatu perusahaan dari bursa efek.",
  },
  {
    id: 66,
    category: "Saham",
    term: "Cum Date",
    definition:
      "Tanggal terakhir investor dapat membeli saham untuk berhak memperoleh dividen atau aksi korporasi lainnya.",
  },
  {
    id: 67,
    category: "Saham",
    term: "Ex Date",
    definition:
      "Tanggal ketika saham diperdagangkan tanpa hak atas dividen atau aksi korporasi tertentu.",
  },
  {
    id: 68,
    category: "Saham",
    term: "Recording Date",
    definition:
      "Tanggal pencatatan investor yang berhak menerima dividen atau hak korporasi lainnya.",
  },
  {
    id: 69,
    category: "Saham",
    term: "Bandarmology",
    definition:
      "Analisis pergerakan transaksi saham untuk mengidentifikasi aktivitas pihak besar (bandar) di pasar.",
  },
  {
    id: 70,
    category: "Saham",
    term: "Trader",
    definition:
      "Pelaku pasar yang membeli dan menjual saham dalam jangka waktu pendek untuk mencari keuntungan dari fluktuasi harga.",
  },
  {
    id: 71,
    category: "Saham",
    term: "Investor Ritel",
    definition:
      "Individu perorangan yang berinvestasi menggunakan dana pribadi dalam jumlah relatif kecil.",
  },
  {
    id: 72,
    category: "Saham",
    term: "Investor Institusi",
    definition:
      "Lembaga seperti bank, asuransi, atau dana pensiun yang berinvestasi dalam jumlah besar.",
  },
  {
    id: 73,
    category: "Saham",
    term: "Short Selling",
    definition:
      "Strategi menjual saham yang dipinjam dengan harapan membelinya kembali di harga lebih rendah.",
  },
  {
    id: 74,
    category: "Saham",
    term: "Circuit Breaker",
    definition:
      "Penghentian sementara perdagangan bursa secara keseluruhan akibat penurunan indeks yang signifikan.",
  },
  {
    id: 75,
    category: "Saham",
    term: "Odd Lot",
    definition:
      "Transaksi saham dengan jumlah lembar di bawah satu lot atau tidak kelipatan 100 lembar.",
  },
  {
    id: 76,
    category: "Saham",
    term: "Scalping",
    definition:
      "Strategi trading dengan membuka dan menutup posisi dalam waktu sangat singkat untuk mengambil keuntungan kecil berulang kali.",
  },
  {
    id: 77,
    category: "Saham",
    term: "Swing Trading",
    definition:
      "Strategi trading dengan menahan posisi selama beberapa hari hingga minggu untuk memanfaatkan pergerakan harga jangka pendek.",
  },
  {
    id: 78,
    category: "Saham",
    term: "Sektor Saham",
    definition:
      "Pengelompokan emiten berdasarkan bidang usaha, misalnya sektor perbankan, energi, atau konsumer.",
  },
  {
    id: 79,
    category: "Saham",
    term: "Emiten",
    definition:
      "Perusahaan yang menerbitkan efek atau saham untuk diperjualbelikan kepada publik.",
  },
  {
    id: 80,
    category: "Saham",
    term: "Bursa Efek",
    definition:
      "Lembaga yang menyediakan sistem dan sarana untuk mempertemukan penawaran jual dan beli efek.",
  },
  {
    id: 241,
    category: "Saham",
    term: "Analis Saham",
    definition:
      "Profesional yang melakukan riset dan memberikan rekomendasi terkait prospek suatu saham.",
  },
  {
    id: 242,
    category: "Saham",
    term: "Target Harga",
    definition:
      "Perkiraan harga wajar suatu saham di masa depan menurut analisis seorang analis.",
  },
  {
    id: 243,
    category: "Saham",
    term: "Saham Syariah",
    definition:
      "Saham perusahaan yang kegiatan usahanya sesuai dengan prinsip syariah Islam.",
  },
  {
    id: 244,
    category: "Saham",
    term: "JII",
    definition:
      "Jakarta Islamic Index, indeks yang berisi kumpulan saham syariah paling likuid di Bursa Efek Indonesia.",
  },
  {
    id: 245,
    category: "Saham",
    term: "LQ45",
    definition:
      "Indeks yang berisi 45 saham dengan likuiditas dan kapitalisasi pasar tertinggi di Bursa Efek Indonesia.",
  },
  {
    id: 246,
    category: "Saham",
    term: "Indeks Sektoral",
    definition:
      "Indeks yang mengukur pergerakan harga saham dalam satu sektor usaha tertentu.",
  },
  {
    id: 247,
    category: "Saham",
    term: "Saham Lapis Dua",
    definition:
      "Saham perusahaan menengah dengan likuiditas dan kapitalisasi pasar di bawah blue chip.",
  },
  {
    id: 248,
    category: "Saham",
    term: "Saham Lapis Tiga",
    definition:
      "Saham perusahaan kecil dengan likuiditas rendah dan risiko fluktuasi harga tinggi.",
  },
  {
    id: 249,
    category: "Saham",
    term: "Dividen Interim",
    definition:
      "Dividen yang dibagikan sebelum tahun buku perusahaan berakhir.",
  },
  {
    id: 250,
    category: "Saham",
    term: "Dividen Final",
    definition:
      "Dividen yang dibagikan setelah laporan keuangan tahunan disetujui dalam RUPS.",
  },
  {
    id: 251,
    category: "Saham",
    term: "RUPS",
    definition:
      "Rapat Umum Pemegang Saham, forum pengambilan keputusan tertinggi dalam perusahaan yang melibatkan seluruh pemegang saham.",
  },
  {
    id: 252,
    category: "Saham",
    term: "RUPST",
    definition:
      "Rapat Umum Pemegang Saham Tahunan, RUPS yang wajib diadakan setiap tahun untuk membahas laporan keuangan dan kinerja perusahaan.",
  },
  {
    id: 253,
    category: "Saham",
    term: "Fraksi Harga",
    definition:
      "Satuan perubahan harga minimum yang diperbolehkan dalam perdagangan saham.",
  },
  {
    id: 254,
    category: "Saham",
    term: "Auto Rejection",
    definition:
      "Sistem otomatis bursa yang menolak order jual beli saham di luar batas kenaikan atau penurunan harga yang ditentukan.",
  },
  {
    id: 255,
    category: "Saham",
    term: "Papan Pencatatan",
    definition:
      "Klasifikasi saham di bursa efek berdasarkan kriteria tertentu, seperti Papan Utama, Papan Pengembangan, dan Papan Akselerasi.",
  },

  // =========================================================
  // FUNDAMENTAL
  // =========================================================
  {
    id: 14,
    category: "Fundamental",
    term: "PER",
    definition:
      "Price to Earnings Ratio, rasio harga saham dibanding laba per saham yang digunakan untuk menilai kewajaran harga saham.",
  },
  {
    id: 81,
    category: "Fundamental",
    term: "EPS",
    definition:
      "Earning Per Share, laba bersih perusahaan yang dibagi dengan jumlah saham beredar.",
  },
  {
    id: 82,
    category: "Fundamental",
    term: "ROE",
    definition:
      "Return on Equity, rasio yang mengukur kemampuan perusahaan menghasilkan laba dari modal sendiri.",
  },
  {
    id: 83,
    category: "Fundamental",
    term: "ROA",
    definition:
      "Return on Assets, rasio yang mengukur efisiensi perusahaan dalam menghasilkan laba dari total asetnya.",
  },
  {
    id: 84,
    category: "Fundamental",
    term: "DER",
    definition:
      "Debt to Equity Ratio, rasio yang membandingkan total utang perusahaan dengan modal sendiri.",
  },
  {
    id: 85,
    category: "Fundamental",
    term: "PBV",
    definition:
      "Price to Book Value, rasio harga saham dibanding nilai buku per saham.",
  },
  {
    id: 86,
    category: "Fundamental",
    term: "Laporan Keuangan",
    definition:
      "Dokumen yang berisi informasi posisi keuangan dan kinerja perusahaan dalam periode tertentu.",
  },
  {
    id: 87,
    category: "Fundamental",
    term: "Neraca",
    definition:
      "Laporan yang menggambarkan posisi aset, kewajiban, dan ekuitas perusahaan pada suatu waktu tertentu.",
  },
  {
    id: 88,
    category: "Fundamental",
    term: "Laporan Laba Rugi",
    definition:
      "Laporan yang menunjukkan pendapatan, beban, dan laba atau rugi perusahaan dalam suatu periode.",
  },
  {
    id: 89,
    category: "Fundamental",
    term: "Arus Kas",
    definition:
      "Laporan yang mencatat aliran masuk dan keluar kas perusahaan dari aktivitas operasi, investasi, dan pendanaan.",
  },
  {
    id: 90,
    category: "Fundamental",
    term: "Laba Bersih",
    definition:
      "Keuntungan yang diperoleh perusahaan setelah dikurangi seluruh biaya, beban, dan pajak.",
  },
  {
    id: 91,
    category: "Fundamental",
    term: "Laba Kotor",
    definition:
      "Selisih antara pendapatan penjualan dengan harga pokok penjualan sebelum dikurangi biaya operasional.",
  },
  {
    id: 92,
    category: "Fundamental",
    term: "Marjin Laba",
    definition:
      "Persentase laba yang diperoleh perusahaan dibandingkan dengan total pendapatan.",
  },
  {
    id: 93,
    category: "Fundamental",
    term: "Pendapatan (Revenue)",
    definition:
      "Total nilai penjualan barang atau jasa yang diperoleh perusahaan dalam suatu periode.",
  },
  {
    id: 94,
    category: "Fundamental",
    term: "Current Ratio",
    definition:
      "Rasio yang mengukur kemampuan perusahaan membayar kewajiban jangka pendek dengan aset lancarnya.",
  },
  {
    id: 95,
    category: "Fundamental",
    term: "Quick Ratio",
    definition:
      "Rasio likuiditas yang mengukur kemampuan perusahaan membayar kewajiban jangka pendek tanpa mengandalkan persediaan.",
  },
  {
    id: 96,
    category: "Fundamental",
    term: "Nilai Buku",
    definition:
      "Nilai aset bersih perusahaan yang tercatat dalam laporan keuangan per lembar saham.",
  },
  {
    id: 97,
    category: "Fundamental",
    term: "Nilai Intrinsik",
    definition:
      "Estimasi nilai sebenarnya suatu saham berdasarkan analisis fundamental, terlepas dari harga pasar saat ini.",
  },
  {
    id: 98,
    category: "Fundamental",
    term: "Valuasi",
    definition:
      "Proses menentukan nilai wajar suatu perusahaan atau aset menggunakan berbagai metode analisis.",
  },
  {
    id: 99,
    category: "Fundamental",
    term: "DCF",
    definition:
      "Discounted Cash Flow, metode valuasi yang menghitung nilai perusahaan berdasarkan proyeksi arus kas masa depan yang didiskontokan.",
  },
  {
    id: 100,
    category: "Fundamental",
    term: "Growth Stock",
    definition:
      "Saham perusahaan dengan potensi pertumbuhan laba dan pendapatan yang tinggi di masa depan.",
  },
  {
    id: 101,
    category: "Fundamental",
    term: "Value Stock",
    definition:
      "Saham yang diperdagangkan di harga lebih rendah dari nilai intrinsiknya, dianggap undervalued.",
  },
  {
    id: 102,
    category: "Fundamental",
    term: "Dividend Yield",
    definition:
      "Rasio dividen tahunan per saham dibandingkan dengan harga saham saat ini.",
  },
  {
    id: 103,
    category: "Fundamental",
    term: "Payout Ratio",
    definition:
      "Persentase laba bersih perusahaan yang dibagikan sebagai dividen kepada pemegang saham.",
  },
  {
    id: 104,
    category: "Fundamental",
    term: "Modal Kerja",
    definition:
      "Selisih antara aset lancar dan kewajiban lancar yang digunakan untuk membiayai operasional sehari-hari.",
  },
  {
    id: 105,
    category: "Fundamental",
    term: "EBITDA",
    definition:
      "Laba sebelum bunga, pajak, depresiasi, dan amortisasi, digunakan untuk menilai kinerja operasional perusahaan.",
  },
  {
    id: 106,
    category: "Fundamental",
    term: "Arus Kas Bebas",
    definition:
      "Sisa kas yang dimiliki perusahaan setelah dikurangi belanja modal, dapat digunakan untuk ekspansi atau dividen.",
  },
  {
    id: 256,
    category: "Fundamental",
    term: "Interest Coverage Ratio",
    definition:
      "Rasio yang mengukur kemampuan perusahaan membayar beban bunga utang dari laba operasionalnya.",
  },
  {
    id: 257,
    category: "Fundamental",
    term: "Marjin Operasi",
    definition:
      "Persentase laba operasional perusahaan dibandingkan dengan total pendapatan.",
  },
  {
    id: 258,
    category: "Fundamental",
    term: "Marjin Laba Bersih",
    definition:
      "Persentase laba bersih perusahaan dibandingkan dengan total pendapatan.",
  },
  {
    id: 259,
    category: "Fundamental",
    term: "WACC",
    definition:
      "Weighted Average Cost of Capital, biaya modal rata-rata tertimbang yang digunakan perusahaan dari utang dan ekuitas.",
  },
  {
    id: 260,
    category: "Fundamental",
    term: "Analisis Rasio Keuangan",
    definition:
      "Metode menilai kinerja perusahaan dengan membandingkan berbagai pos dalam laporan keuangan.",
  },
  {
    id: 261,
    category: "Fundamental",
    term: "Analisis Vertikal",
    definition:
      "Metode analisis laporan keuangan dengan membandingkan setiap pos terhadap satu pos acuan dalam periode yang sama.",
  },
  {
    id: 262,
    category: "Fundamental",
    term: "Analisis Horizontal",
    definition:
      "Metode analisis laporan keuangan dengan membandingkan pos yang sama pada beberapa periode berbeda.",
  },
  {
    id: 263,
    category: "Fundamental",
    term: "Laporan Tahunan",
    definition:
      "Dokumen komprehensif yang diterbitkan perusahaan setiap tahun berisi kinerja keuangan dan operasional.",
  },
  {
    id: 264,
    category: "Fundamental",
    term: "Catatan Atas Laporan Keuangan",
    definition:
      "Penjelasan rinci yang menyertai laporan keuangan untuk memberikan konteks tambahan atas angka yang disajikan.",
  },
  {
    id: 265,
    category: "Fundamental",
    term: "Opini Auditor",
    definition:
      "Penilaian independen akuntan publik atas kewajaran laporan keuangan suatu perusahaan.",
  },
  {
    id: 266,
    category: "Fundamental",
    term: "Laba Per Saham Dilusian",
    definition:
      "Laba per saham yang dihitung dengan asumsi seluruh efek konversi seperti opsi atau obligasi konversi telah dieksekusi.",
  },
  {
    id: 267,
    category: "Fundamental",
    term: "Interim Report",
    definition:
      "Laporan keuangan yang diterbitkan perusahaan untuk periode kurang dari satu tahun, misalnya kuartalan.",
  },

  // =========================================================
  // TEKNIKAL
  // =========================================================
  {
    id: 15,
    category: "Teknikal",
    term: "RSI",
    definition:
      "Relative Strength Index, indikator momentum untuk mengukur kondisi jenuh beli (overbought) atau jenuh jual (oversold).",
  },
  {
    id: 107,
    category: "Teknikal",
    term: "Moving Average",
    definition:
      "Indikator yang menghitung rata-rata harga suatu aset dalam periode tertentu untuk melihat arah tren.",
  },
  {
    id: 108,
    category: "Teknikal",
    term: "MACD",
    definition:
      "Moving Average Convergence Divergence, indikator yang menggunakan selisih dua moving average untuk mengukur momentum tren.",
  },
  {
    id: 109,
    category: "Teknikal",
    term: "Support",
    definition:
      "Level harga di mana tekanan beli cenderung menahan penurunan harga lebih lanjut.",
  },
  {
    id: 110,
    category: "Teknikal",
    term: "Resistance",
    definition:
      "Level harga di mana tekanan jual cenderung menahan kenaikan harga lebih lanjut.",
  },
  {
    id: 111,
    category: "Teknikal",
    term: "Candlestick",
    definition:
      "Grafik yang menampilkan pergerakan harga pembukaan, penutupan, tertinggi, dan terendah dalam periode tertentu.",
  },
  {
    id: 112,
    category: "Teknikal",
    term: "Tren",
    definition:
      "Arah pergerakan harga suatu aset dalam periode waktu tertentu, bisa naik, turun, atau mendatar.",
  },
  {
    id: 113,
    category: "Teknikal",
    term: "Uptrend",
    definition:
      "Kondisi pasar yang menunjukkan pola pergerakan harga yang cenderung naik secara konsisten.",
  },
  {
    id: 114,
    category: "Teknikal",
    term: "Downtrend",
    definition:
      "Kondisi pasar yang menunjukkan pola pergerakan harga yang cenderung turun secara konsisten.",
  },
  {
    id: 115,
    category: "Teknikal",
    term: "Sideways",
    definition:
      "Kondisi pasar di mana harga bergerak mendatar tanpa arah tren yang jelas.",
  },
  {
    id: 116,
    category: "Teknikal",
    term: "Volume Perdagangan",
    definition:
      "Jumlah lembar saham atau unit aset yang diperdagangkan dalam periode waktu tertentu.",
  },
  {
    id: 117,
    category: "Teknikal",
    term: "Fibonacci Retracement",
    definition:
      "Alat analisis teknikal yang menggunakan rasio Fibonacci untuk memprediksi level support dan resistance potensial.",
  },
  {
    id: 118,
    category: "Teknikal",
    term: "Bollinger Bands",
    definition:
      "Indikator yang menggunakan pita atas dan bawah di sekitar moving average untuk mengukur volatilitas harga.",
  },
  {
    id: 119,
    category: "Teknikal",
    term: "Golden Cross",
    definition:
      "Sinyal bullish yang terjadi ketika moving average jangka pendek memotong ke atas moving average jangka panjang.",
  },
  {
    id: 120,
    category: "Teknikal",
    term: "Death Cross",
    definition:
      "Sinyal bearish yang terjadi ketika moving average jangka pendek memotong ke bawah moving average jangka panjang.",
  },
  {
    id: 121,
    category: "Teknikal",
    term: "Gap",
    definition:
      "Celah harga yang terjadi ketika harga pembukaan berbeda signifikan dari harga penutupan sebelumnya.",
  },
  {
    id: 122,
    category: "Teknikal",
    term: "Breakout",
    definition:
      "Kondisi ketika harga menembus level support atau resistance yang sebelumnya menahan pergerakan harga.",
  },
  {
    id: 123,
    category: "Teknikal",
    term: "Pullback",
    definition:
      "Pergerakan harga sementara yang berlawanan arah dengan tren utama sebelum melanjutkan tren tersebut.",
  },
  {
    id: 124,
    category: "Teknikal",
    term: "Head and Shoulders",
    definition:
      "Pola grafik yang menandakan potensi pembalikan tren, ditandai tiga puncak dengan puncak tengah paling tinggi.",
  },
  {
    id: 125,
    category: "Teknikal",
    term: "Double Top",
    definition:
      "Pola grafik yang menunjukkan potensi pembalikan tren dari naik menjadi turun setelah dua puncak harga yang sejajar.",
  },
  {
    id: 126,
    category: "Teknikal",
    term: "Double Bottom",
    definition:
      "Pola grafik yang menunjukkan potensi pembalikan tren dari turun menjadi naik setelah dua lembah harga yang sejajar.",
  },
  {
    id: 127,
    category: "Teknikal",
    term: "Stochastic Oscillator",
    definition:
      "Indikator momentum yang membandingkan harga penutupan dengan kisaran harga dalam periode tertentu untuk mengukur overbought atau oversold.",
  },
  {
    id: 128,
    category: "Teknikal",
    term: "Divergensi",
    definition:
      "Kondisi ketika pergerakan harga tidak sejalan dengan indikator teknikal, sering menjadi sinyal potensi pembalikan tren.",
  },
  {
    id: 129,
    category: "Teknikal",
    term: "Time Frame",
    definition:
      "Rentang waktu yang digunakan dalam analisis grafik, misalnya harian, mingguan, atau per jam.",
  },
  {
    id: 268,
    category: "Teknikal",
    term: "Trendline",
    definition:
      "Garis yang ditarik untuk menghubungkan titik-titik harga guna mengidentifikasi arah tren pasar.",
  },
  {
    id: 269,
    category: "Teknikal",
    term: "Channel",
    definition:
      "Area pergerakan harga yang dibatasi oleh dua garis tren sejajar, atas dan bawah.",
  },
  {
    id: 270,
    category: "Teknikal",
    term: "Fase Akumulasi",
    definition:
      "Periode ketika pihak besar mulai mengumpulkan suatu aset sebelum harga naik signifikan.",
  },
  {
    id: 271,
    category: "Teknikal",
    term: "Fase Distribusi",
    definition:
      "Periode ketika pihak besar mulai melepas kepemilikan suatu aset sebelum harga turun signifikan.",
  },
  {
    id: 272,
    category: "Teknikal",
    term: "Ichimoku Cloud",
    definition:
      "Indikator teknikal yang menggabungkan beberapa garis untuk menunjukkan tren, momentum, dan level support-resistance sekaligus.",
  },
  {
    id: 273,
    category: "Teknikal",
    term: "Parabolic SAR",
    definition:
      "Indikator yang digunakan untuk menentukan titik potensial pembalikan arah harga suatu aset.",
  },
  {
    id: 274,
    category: "Teknikal",
    term: "On Balance Volume",
    definition:
      "Indikator yang menggunakan volume perdagangan untuk mengonfirmasi kekuatan suatu tren harga.",
  },
  {
    id: 275,
    category: "Teknikal",
    term: "Elliott Wave",
    definition:
      "Teori analisis teknikal yang menjelaskan pergerakan harga dalam pola gelombang berulang.",
  },
  {
    id: 276,
    category: "Teknikal",
    term: "Pola Triangle",
    definition:
      "Pola grafik yang menunjukkan penyempitan pergerakan harga sebelum terjadi breakout ke salah satu arah.",
  },
  {
    id: 277,
    category: "Teknikal",
    term: "Pivot Point",
    definition:
      "Level harga acuan yang dihitung dari harga tertinggi, terendah, dan penutupan sebelumnya untuk memprediksi support dan resistance.",
  },

  // =========================================================
  // CRYPTO
  // =========================================================
  {
    id: 11,
    category: "Crypto",
    term: "Bitcoin",
    definition:
      "Aset kripto pertama yang menggunakan teknologi blockchain, diciptakan oleh Satoshi Nakamoto pada 2009.",
  },
  {
    id: 12,
    category: "Crypto",
    term: "Blockchain",
    definition:
      "Teknologi buku besar digital yang mencatat transaksi secara terdesentralisasi dan tidak dapat diubah.",
  },
  {
    id: 13,
    category: "Crypto",
    term: "Wallet",
    definition:
      "Dompet digital untuk menyimpan, mengirim, dan menerima aset kripto.",
  },
  {
    id: 130,
    category: "Crypto",
    term: "Altcoin",
    definition:
      "Istilah untuk seluruh aset kripto selain Bitcoin.",
  },
  {
    id: 131,
    category: "Crypto",
    term: "Ethereum",
    definition:
      "Platform blockchain yang mendukung kontrak pintar dan menjadi dasar bagi banyak aplikasi terdesentralisasi.",
  },
  {
    id: 132,
    category: "Crypto",
    term: "Stablecoin",
    definition:
      "Aset kripto yang nilainya dipatok pada aset stabil seperti dolar AS untuk mengurangi volatilitas.",
  },
  {
    id: 133,
    category: "Crypto",
    term: "NFT",
    definition:
      "Non-Fungible Token, token digital unik yang mewakili kepemilikan suatu aset digital atau fisik tertentu.",
  },
  {
    id: 134,
    category: "Crypto",
    term: "DeFi",
    definition:
      "Decentralized Finance, sistem keuangan berbasis blockchain yang beroperasi tanpa lembaga perantara seperti bank.",
  },
  {
    id: 135,
    category: "Crypto",
    term: "Mining",
    definition:
      "Proses memvalidasi transaksi blockchain dan menciptakan koin baru menggunakan daya komputasi.",
  },
  {
    id: 136,
    category: "Crypto",
    term: "Staking",
    definition:
      "Aktivitas mengunci aset kripto untuk mendukung operasional jaringan blockchain dan memperoleh imbalan.",
  },
  {
    id: 137,
    category: "Crypto",
    term: "Token",
    definition:
      "Aset digital yang dibangun di atas blockchain yang sudah ada, berbeda dengan koin yang memiliki blockchain sendiri.",
  },
  {
    id: 138,
    category: "Crypto",
    term: "Exchange Crypto",
    definition:
      "Platform yang memfasilitasi jual beli aset kripto antar pengguna.",
  },
  {
    id: 139,
    category: "Crypto",
    term: "Cold Wallet",
    definition:
      "Dompet kripto yang tidak terhubung ke internet sehingga lebih aman dari peretasan.",
  },
  {
    id: 140,
    category: "Crypto",
    term: "Hot Wallet",
    definition:
      "Dompet kripto yang terhubung ke internet sehingga lebih praktis namun lebih rentan terhadap serangan siber.",
  },
  {
    id: 141,
    category: "Crypto",
    term: "Private Key",
    definition:
      "Kode rahasia yang digunakan untuk mengakses dan mengotorisasi transaksi aset kripto dalam suatu dompet.",
  },
  {
    id: 142,
    category: "Crypto",
    term: "Smart Contract",
    definition:
      "Program komputer yang berjalan otomatis di blockchain untuk menjalankan perjanjian tanpa perantara.",
  },
  {
    id: 143,
    category: "Crypto",
    term: "Whitepaper",
    definition:
      "Dokumen resmi yang menjelaskan konsep, teknologi, dan tujuan suatu proyek kripto.",
  },
  {
    id: 144,
    category: "Crypto",
    term: "Halving",
    definition:
      "Peristiwa pengurangan separuh imbalan penambangan Bitcoin yang terjadi setiap sekitar empat tahun sekali.",
  },
  {
    id: 145,
    category: "Crypto",
    term: "Airdrop",
    definition:
      "Pembagian token kripto secara gratis kepada komunitas sebagai bagian dari strategi promosi proyek.",
  },
  {
    id: 146,
    category: "Crypto",
    term: "Gas Fee",
    definition:
      "Biaya yang dibayarkan untuk memproses transaksi di jaringan blockchain seperti Ethereum.",
  },
  {
    id: 147,
    category: "Crypto",
    term: "Web3",
    definition:
      "Konsep generasi internet baru yang berbasis teknologi blockchain dan desentralisasi.",
  },
  {
    id: 148,
    category: "Crypto",
    term: "DEX",
    definition:
      "Decentralized Exchange, platform pertukaran aset kripto yang beroperasi tanpa perantara terpusat.",
  },
  {
    id: 149,
    category: "Crypto",
    term: "HODL",
    definition:
      "Istilah dalam komunitas kripto untuk strategi menahan aset dalam jangka panjang meski harga berfluktuasi.",
  },
  {
    id: 150,
    category: "Crypto",
    term: "FOMO",
    definition:
      "Fear of Missing Out, rasa takut tertinggal yang mendorong seseorang membeli aset tanpa analisis matang.",
  },
  {
    id: 151,
    category: "Crypto",
    term: "FUD",
    definition:
      "Fear, Uncertainty, Doubt, penyebaran informasi negatif yang memicu kepanikan dan penurunan harga aset kripto.",
  },
  {
    id: 152,
    category: "Crypto",
    term: "Whale",
    definition:
      "Sebutan bagi pemilik aset kripto dalam jumlah sangat besar yang dapat memengaruhi pergerakan pasar.",
  },
  {
    id: 153,
    category: "Crypto",
    term: "Rug Pull",
    definition:
      "Modus penipuan di mana pengembang proyek kripto tiba-tiba menarik seluruh dana investor dan menghilang.",
  },
  {
    id: 154,
    category: "Crypto",
    term: "ICO",
    definition:
      "Initial Coin Offering, penawaran token kripto perdana kepada publik untuk menggalang dana proyek baru.",
  },
  {
    id: 278,
    category: "Crypto",
    term: "Layer 1",
    definition:
      "Blockchain dasar yang memiliki jaringan dan mekanisme konsensusnya sendiri, seperti Bitcoin atau Ethereum.",
  },
  {
    id: 279,
    category: "Crypto",
    term: "Layer 2",
    definition:
      "Solusi yang dibangun di atas blockchain utama untuk meningkatkan skalabilitas dan kecepatan transaksi.",
  },
  {
    id: 280,
    category: "Crypto",
    term: "Yield Farming",
    definition:
      "Strategi menempatkan aset kripto pada protokol DeFi untuk memperoleh imbal hasil tambahan.",
  },
  {
    id: 281,
    category: "Crypto",
    term: "Liquidity Pool",
    definition:
      "Kumpulan dana yang disediakan pengguna untuk mendukung transaksi di platform DeFi tanpa perantara.",
  },
  {
    id: 282,
    category: "Crypto",
    term: "DAO",
    definition:
      "Decentralized Autonomous Organization, organisasi yang dijalankan melalui aturan yang tertanam dalam smart contract tanpa otoritas terpusat.",
  },
  {
    id: 283,
    category: "Crypto",
    term: "Metaverse",
    definition:
      "Ruang virtual yang menggabungkan berbagai teknologi digital, sering terkait dengan aset kripto dan NFT.",
  },
  {
    id: 284,
    category: "Crypto",
    term: "Proof of Work",
    definition:
      "Mekanisme konsensus blockchain yang mengandalkan daya komputasi untuk memvalidasi transaksi.",
  },
  {
    id: 285,
    category: "Crypto",
    term: "Proof of Stake",
    definition:
      "Mekanisme konsensus blockchain yang memvalidasi transaksi berdasarkan jumlah aset yang dikunci oleh validator.",
  },
  {
    id: 286,
    category: "Crypto",
    term: "Tokenomics",
    definition:
      "Struktur ekonomi suatu token kripto, mencakup total pasokan, distribusi, dan mekanisme penggunaannya.",
  },
  {
    id: 287,
    category: "Crypto",
    term: "Testnet",
    definition:
      "Jaringan blockchain uji coba yang digunakan pengembang sebelum meluncurkan produk ke jaringan utama.",
  },
  {
    id: 288,
    category: "Crypto",
    term: "Mainnet",
    definition:
      "Jaringan blockchain utama yang telah beroperasi penuh dan digunakan untuk transaksi nyata.",
  },
  {
    id: 289,
    category: "Crypto",
    term: "Market Cap Crypto",
    definition:
      "Nilai total suatu aset kripto yang dihitung dari harga dikali jumlah koin yang beredar.",
  },

  // =========================================================
  // REKSA DANA
  // =========================================================
  {
    id: 16,
    category: "Reksa Dana",
    term: "NAB",
    definition:
      "Nilai Aktiva Bersih per unit penyertaan reksa dana, mencerminkan harga wajar unit reksa dana pada suatu waktu.",
  },
  {
    id: 155,
    category: "Reksa Dana",
    term: "Manajer Investasi",
    definition:
      "Pihak berizin yang mengelola dana investasi nasabah dalam bentuk reksa dana atau produk investasi lainnya.",
  },
  {
    id: 156,
    category: "Reksa Dana",
    term: "Reksa Dana Saham",
    definition:
      "Jenis reksa dana yang mengalokasikan sebagian besar dananya pada instrumen saham.",
  },
  {
    id: 157,
    category: "Reksa Dana",
    term: "Reksa Dana Pasar Uang",
    definition:
      "Jenis reksa dana yang berinvestasi pada instrumen pasar uang jangka pendek seperti deposito dan SBI.",
  },
  {
    id: 158,
    category: "Reksa Dana",
    term: "Reksa Dana Pendapatan Tetap",
    definition:
      "Jenis reksa dana yang mayoritas dananya dialokasikan pada instrumen obligasi.",
  },
  {
    id: 159,
    category: "Reksa Dana",
    term: "Reksa Dana Campuran",
    definition:
      "Jenis reksa dana yang mengalokasikan dananya pada kombinasi saham, obligasi, dan pasar uang.",
  },
  {
    id: 160,
    category: "Reksa Dana",
    term: "Unit Penyertaan",
    definition:
      "Satuan investasi yang menunjukkan kepemilikan investor atas suatu reksa dana.",
  },
  {
    id: 161,
    category: "Reksa Dana",
    term: "Biaya Pembelian",
    definition:
      "Biaya yang dikenakan kepada investor saat membeli unit penyertaan reksa dana.",
  },
  {
    id: 162,
    category: "Reksa Dana",
    term: "Biaya Penjualan Kembali",
    definition:
      "Biaya yang dikenakan kepada investor saat mencairkan atau menjual kembali unit penyertaan reksa dana.",
  },
  {
    id: 163,
    category: "Reksa Dana",
    term: "Prospektus",
    definition:
      "Dokumen resmi yang memuat informasi lengkap mengenai suatu produk reksa dana sebelum ditawarkan kepada investor.",
  },
  {
    id: 164,
    category: "Reksa Dana",
    term: "Bank Kustodian",
    definition:
      "Lembaga yang bertugas menyimpan dan mengadministrasikan aset reksa dana secara independen dari manajer investasi.",
  },
  {
    id: 165,
    category: "Reksa Dana",
    term: "Reksa Dana Indeks",
    definition:
      "Jenis reksa dana yang portofolionya disusun untuk meniru kinerja suatu indeks acuan tertentu.",
  },
  {
    id: 166,
    category: "Reksa Dana",
    term: "Reksa Dana Syariah",
    definition:
      "Jenis reksa dana yang pengelolaannya berdasarkan prinsip-prinsip syariah Islam.",
  },
  {
    id: 167,
    category: "Reksa Dana",
    term: "Reksa Dana Terproteksi",
    definition:
      "Jenis reksa dana yang memberikan proteksi terhadap nilai investasi awal investor pada saat jatuh tempo.",
  },
  {
    id: 290,
    category: "Reksa Dana",
    term: "Subscription",
    definition:
      "Proses pembelian unit penyertaan reksa dana oleh investor.",
  },
  {
    id: 291,
    category: "Reksa Dana",
    term: "Redemption",
    definition:
      "Proses pencairan atau penjualan kembali unit penyertaan reksa dana oleh investor.",
  },
  {
    id: 292,
    category: "Reksa Dana",
    term: "Cut Off Time",
    definition:
      "Batas waktu transaksi reksa dana yang menentukan harga NAB yang berlaku pada hari itu.",
  },
  {
    id: 293,
    category: "Reksa Dana",
    term: "Fund Fact Sheet",
    definition:
      "Dokumen ringkas yang memuat informasi kinerja dan komposisi portofolio suatu reksa dana.",
  },
  {
    id: 294,
    category: "Reksa Dana",
    term: "Rasio Biaya",
    definition:
      "Persentase biaya pengelolaan yang dibebankan kepada investor reksa dana dalam periode tertentu.",
  },
  {
    id: 295,
    category: "Reksa Dana",
    term: "Reksa Dana ETF",
    definition:
      "Reksa dana yang unit penyertaannya diperdagangkan di bursa efek layaknya saham.",
  },
  {
    id: 296,
    category: "Reksa Dana",
    term: "APERD",
    definition:
      "Agen Penjual Efek Reksa Dana, pihak yang memiliki izin untuk memasarkan dan menjual produk reksa dana kepada investor.",
  },
  {
    id: 297,
    category: "Reksa Dana",
    term: "Return Reksa Dana",
    definition:
      "Tingkat imbal hasil yang diperoleh investor dari kenaikan NAB suatu reksa dana dalam periode tertentu.",
  },

  // =========================================================
  // OBLIGASI
  // =========================================================
  {
    id: 17,
    category: "Obligasi",
    term: "Yield",
    definition:
      "Tingkat keuntungan yang diperoleh investor dari kepemilikan obligasi, dinyatakan dalam persentase.",
  },
  {
    id: 168,
    category: "Obligasi",
    term: "Kupon",
    definition:
      "Bunga yang dibayarkan secara berkala oleh penerbit obligasi kepada pemegangnya.",
  },
  {
    id: 169,
    category: "Obligasi",
    term: "Obligasi Pemerintah",
    definition:
      "Surat utang yang diterbitkan oleh pemerintah untuk membiayai anggaran negara.",
  },
  {
    id: 170,
    category: "Obligasi",
    term: "Obligasi Korporasi",
    definition:
      "Surat utang yang diterbitkan oleh perusahaan swasta untuk membiayai kegiatan usahanya.",
  },
  {
    id: 171,
    category: "Obligasi",
    term: "SUN",
    definition:
      "Surat Utang Negara, instrumen utang yang diterbitkan pemerintah Indonesia untuk membiayai defisit APBN.",
  },
  {
    id: 172,
    category: "Obligasi",
    term: "ORI",
    definition:
      "Obligasi Ritel Indonesia, obligasi negara yang dijual khusus kepada investor individu domestik.",
  },
  {
    id: 173,
    category: "Obligasi",
    term: "Sukuk",
    definition:
      "Obligasi syariah yang diterbitkan berdasarkan prinsip syariah tanpa unsur bunga.",
  },
  {
    id: 174,
    category: "Obligasi",
    term: "Jatuh Tempo",
    definition:
      "Tanggal ketika penerbit obligasi wajib melunasi nilai pokok kepada pemegang obligasi.",
  },
  {
    id: 175,
    category: "Obligasi",
    term: "Rating Obligasi",
    definition:
      "Penilaian tingkat risiko kredit suatu obligasi yang diberikan oleh lembaga pemeringkat.",
  },
  {
    id: 176,
    category: "Obligasi",
    term: "Zero Coupon Bond",
    definition:
      "Obligasi yang tidak membayar kupon berkala, namun dijual dengan diskon dari nilai nominalnya.",
  },
  {
    id: 177,
    category: "Obligasi",
    term: "Nilai Nominal",
    definition:
      "Nilai pokok utang yang tertera pada obligasi dan akan dibayarkan penuh saat jatuh tempo.",
  },
  {
    id: 178,
    category: "Obligasi",
    term: "Risiko Kredit",
    definition:
      "Risiko gagal bayar oleh penerbit obligasi terhadap kewajiban kupon atau pokok utang.",
  },
  {
    id: 179,
    category: "Obligasi",
    term: "Durasi Obligasi",
    definition:
      "Ukuran sensitivitas harga obligasi terhadap perubahan suku bunga pasar.",
  },
  {
    id: 298,
    category: "Obligasi",
    term: "Callable Bond",
    definition:
      "Obligasi yang memberikan hak kepada penerbit untuk melunasi utang sebelum jatuh tempo.",
  },
  {
    id: 299,
    category: "Obligasi",
    term: "Convertible Bond",
    definition:
      "Obligasi yang dapat dikonversi menjadi saham perusahaan penerbit pada syarat tertentu.",
  },
  {
    id: 300,
    category: "Obligasi",
    term: "Kurva Yield",
    definition:
      "Grafik yang menggambarkan hubungan antara yield obligasi dengan jangka waktu jatuh temponya.",
  },
  {
    id: 301,
    category: "Obligasi",
    term: "Basis Poin",
    definition:
      "Satuan pengukuran perubahan suku bunga atau yield, di mana satu basis poin setara dengan 0,01 persen.",
  },
  {
    id: 302,
    category: "Obligasi",
    term: "Pasar Sekunder Obligasi",
    definition:
      "Pasar tempat obligasi yang telah diterbitkan diperdagangkan kembali antar investor.",
  },
  {
    id: 303,
    category: "Obligasi",
    term: "Harga Bersih Obligasi",
    definition:
      "Harga obligasi tanpa memperhitungkan bunga berjalan yang belum dibayarkan.",
  },
  {
    id: 304,
    category: "Obligasi",
    term: "Harga Kotor Obligasi",
    definition:
      "Harga obligasi yang sudah termasuk bunga berjalan sejak pembayaran kupon terakhir.",
  },
  {
    id: 305,
    category: "Obligasi",
    term: "Bunga Berjalan",
    definition:
      "Bunga obligasi yang telah terakumulasi sejak tanggal pembayaran kupon terakhir hingga tanggal transaksi.",
  },

  // =========================================================
  // EMAS
  // =========================================================
  {
    id: 18,
    category: "Emas",
    term: "Buyback",
    definition:
      "Harga pembelian kembali emas oleh penjual resmi dari pemegangnya.",
  },
  {
    id: 180,
    category: "Emas",
    term: "Emas Antam",
    definition:
      "Emas batangan bersertifikat yang diproduksi oleh PT Aneka Tambang, populer sebagai instrumen investasi di Indonesia.",
  },
  {
    id: 181,
    category: "Emas",
    term: "Emas Batangan",
    definition:
      "Emas dalam bentuk batangan dengan kadar kemurnian tinggi yang digunakan sebagai instrumen investasi.",
  },
  {
    id: 182,
    category: "Emas",
    term: "Emas Perhiasan",
    definition:
      "Emas yang telah diolah menjadi produk perhiasan, umumnya memiliki nilai jual kembali lebih rendah karena biaya pembuatan.",
  },
  {
    id: 183,
    category: "Emas",
    term: "Tabungan Emas",
    definition:
      "Layanan investasi emas dengan sistem menabung yang memungkinkan pembelian emas dalam nominal kecil.",
  },
  {
    id: 184,
    category: "Emas",
    term: "Sertifikat Emas",
    definition:
      "Dokumen resmi yang menyatakan keaslian dan kadar kemurnian emas batangan.",
  },
  {
    id: 185,
    category: "Emas",
    term: "Karat",
    definition:
      "Satuan yang menunjukkan tingkat kemurnian emas, dengan 24 karat sebagai kemurnian tertinggi.",
  },
  {
    id: 186,
    category: "Emas",
    term: "Spread Harga Emas",
    definition:
      "Selisih antara harga jual dan harga beli kembali (buyback) emas.",
  },
  {
    id: 187,
    category: "Emas",
    term: "Emas Digital",
    definition:
      "Kepemilikan emas secara elektronik melalui platform daring tanpa perlu menyimpan emas fisik.",
  },
  {
    id: 306,
    category: "Emas",
    term: "Harga Spot Emas",
    definition:
      "Harga acuan emas dunia yang berlaku pada saat itu di pasar internasional.",
  },
  {
    id: 307,
    category: "Emas",
    term: "Cicilan Emas",
    definition:
      "Skema pembelian emas fisik secara bertahap melalui angsuran hingga kepemilikan penuh.",
  },
  {
    id: 308,
    category: "Emas",
    term: "Gadai Emas",
    definition:
      "Layanan pembiayaan dengan menjadikan emas sebagai jaminan untuk memperoleh pinjaman dana.",
  },
  {
    id: 309,
    category: "Emas",
    term: "Emas ETF",
    definition:
      "Produk investasi berbasis emas yang diperdagangkan di bursa efek layaknya saham.",
  },
  {
    id: 310,
    category: "Emas",
    term: "Troy Ounce",
    definition:
      "Satuan berat yang umum digunakan dalam perdagangan emas dunia, setara sekitar 31,1 gram.",
  },
  {
    id: 311,
    category: "Emas",
    term: "Kadar Emas",
    definition:
      "Persentase kandungan emas murni dalam suatu produk emas, dinyatakan dalam karat atau fineness.",
  },

  // =========================================================
  // PROPERTI
  // =========================================================
  {
    id: 19,
    category: "Properti",
    term: "KPR",
    definition:
      "Kredit Pemilikan Rumah, fasilitas pembiayaan dari bank untuk membeli rumah dengan cara mencicil.",
  },
  {
    id: 188,
    category: "Properti",
    term: "Sertifikat Hak Milik",
    definition:
      "Bukti kepemilikan tertinggi atas suatu bidang tanah yang diakui secara hukum di Indonesia.",
  },
  {
    id: 189,
    category: "Properti",
    term: "HGB",
    definition:
      "Hak Guna Bangunan, hak untuk mendirikan dan memiliki bangunan di atas tanah milik pihak lain dalam jangka waktu tertentu.",
  },
  {
    id: 190,
    category: "Properti",
    term: "Apresiasi Nilai Properti",
    definition:
      "Kenaikan nilai suatu properti seiring berjalannya waktu akibat faktor lokasi, permintaan, dan pembangunan.",
  },
  {
    id: 191,
    category: "Properti",
    term: "REI",
    definition:
      "Real Estat Indonesia, asosiasi pengembang properti yang menaungi para pelaku bisnis properti di Indonesia.",
  },
  {
    id: 192,
    category: "Properti",
    term: "Uang Muka (DP)",
    definition:
      "Pembayaran awal yang dilakukan pembeli properti sebelum sisanya dibiayai melalui kredit.",
  },
  {
    id: 193,
    category: "Properti",
    term: "Bunga Flat",
    definition:
      "Metode perhitungan bunga kredit yang besarnya tetap sama setiap periode berdasarkan pokok pinjaman awal.",
  },
  {
    id: 194,
    category: "Properti",
    term: "Bunga Efektif",
    definition:
      "Metode perhitungan bunga kredit yang dihitung berdasarkan sisa pokok pinjaman yang semakin menurun.",
  },
  {
    id: 195,
    category: "Properti",
    term: "Yield Properti Sewa",
    definition:
      "Tingkat imbal hasil yang diperoleh dari pendapatan sewa properti dibandingkan dengan nilai properti tersebut.",
  },
  {
    id: 196,
    category: "Properti",
    term: "NJOP",
    definition:
      "Nilai Jual Objek Pajak, nilai yang digunakan sebagai dasar perhitungan pajak bumi dan bangunan.",
  },
  {
    id: 197,
    category: "Properti",
    term: "BPHTB",
    definition:
      "Bea Perolehan Hak atas Tanah dan Bangunan, pajak yang dikenakan atas perolehan hak tanah dan bangunan.",
  },
  {
    id: 198,
    category: "Properti",
    term: "Flipping Properti",
    definition:
      "Strategi membeli properti dengan harga murah, merenovasinya, lalu menjualnya kembali dengan harga lebih tinggi dalam waktu singkat.",
  },
  {
    id: 312,
    category: "Properti",
    term: "Strata Title",
    definition:
      "Sertifikat kepemilikan atas unit dalam bangunan bertingkat seperti apartemen.",
  },
  {
    id: 313,
    category: "Properti",
    term: "Tenor KPR",
    definition:
      "Jangka waktu pelunasan kredit pemilikan rumah yang disepakati antara nasabah dan bank.",
  },
  {
    id: 314,
    category: "Properti",
    term: "Bunga KPR Fixed",
    definition:
      "Suku bunga KPR yang besarnya tetap selama periode tertentu di awal masa kredit.",
  },
  {
    id: 315,
    category: "Properti",
    term: "Bunga KPR Floating",
    definition:
      "Suku bunga KPR yang dapat berubah mengikuti kondisi pasar setelah periode bunga tetap berakhir.",
  },
  {
    id: 316,
    category: "Properti",
    term: "Nilai Appraisal",
    definition:
      "Penilaian independen atas harga wajar suatu properti yang dilakukan sebelum transaksi jual beli atau kredit.",
  },
  {
    id: 317,
    category: "Properti",
    term: "DIRE",
    definition:
      "Dana Investasi Real Estat, instrumen investasi kolektif yang portofolionya berupa aset properti.",
  },
  {
    id: 318,
    category: "Properti",
    term: "PPh Final Properti",
    definition:
      "Pajak penghasilan yang dikenakan atas transaksi pengalihan hak tanah dan bangunan.",
  },
  {
    id: 319,
    category: "Properti",
    term: "Agen Properti",
    definition:
      "Pihak yang membantu mempertemukan penjual dan pembeli dalam transaksi properti dengan imbalan komisi.",
  },

  // =========================================================
  // EKONOMI
  // =========================================================
  {
    id: 20,
    category: "Ekonomi",
    term: "Inflasi",
    definition:
      "Kenaikan harga barang dan jasa secara umum dan terus-menerus dalam periode tertentu.",
  },
  {
    id: 199,
    category: "Ekonomi",
    term: "Suku Bunga Acuan",
    definition:
      "Tingkat bunga yang ditetapkan bank sentral sebagai acuan bagi suku bunga perbankan dan pasar keuangan.",
  },
  {
    id: 200,
    category: "Ekonomi",
    term: "BI Rate",
    definition:
      "Suku bunga acuan yang ditetapkan oleh Bank Indonesia untuk mengendalikan inflasi dan stabilitas ekonomi.",
  },
  {
    id: 201,
    category: "Ekonomi",
    term: "Resesi",
    definition:
      "Kondisi perlambatan ekonomi yang ditandai dengan pertumbuhan ekonomi negatif selama dua kuartal berturut-turut.",
  },
  {
    id: 202,
    category: "Ekonomi",
    term: "Deflasi",
    definition:
      "Penurunan harga barang dan jasa secara umum dan terus-menerus dalam periode tertentu.",
  },
  {
    id: 203,
    category: "Ekonomi",
    term: "PDB",
    definition:
      "Produk Domestik Bruto, nilai total seluruh barang dan jasa yang dihasilkan suatu negara dalam periode tertentu.",
  },
  {
    id: 204,
    category: "Ekonomi",
    term: "Nilai Tukar",
    definition:
      "Perbandingan nilai suatu mata uang terhadap mata uang negara lain.",
  },
  {
    id: 205,
    category: "Ekonomi",
    term: "Neraca Perdagangan",
    definition:
      "Selisih antara nilai ekspor dan impor suatu negara dalam periode tertentu.",
  },
  {
    id: 206,
    category: "Ekonomi",
    term: "Kebijakan Moneter",
    definition:
      "Kebijakan bank sentral untuk mengendalikan jumlah uang beredar dan suku bunga demi menjaga stabilitas ekonomi.",
  },
  {
    id: 207,
    category: "Ekonomi",
    term: "Kebijakan Fiskal",
    definition:
      "Kebijakan pemerintah terkait pendapatan dan pengeluaran negara untuk memengaruhi kondisi perekonomian.",
  },
  {
    id: 208,
    category: "Ekonomi",
    term: "Tingkat Pengangguran",
    definition:
      "Persentase angkatan kerja yang tidak memiliki pekerjaan namun aktif mencari pekerjaan.",
  },
  {
    id: 209,
    category: "Ekonomi",
    term: "Stagflasi",
    definition:
      "Kondisi ekonomi yang ditandai dengan inflasi tinggi namun pertumbuhan ekonomi stagnan atau rendah.",
  },
  {
    id: 210,
    category: "Ekonomi",
    term: "Siklus Ekonomi",
    definition:
      "Fluktuasi aktivitas ekonomi yang berulang melalui fase ekspansi, puncak, kontraksi, dan pemulihan.",
  },
  {
    id: 320,
    category: "Ekonomi",
    term: "PMI",
    definition:
      "Purchasing Managers Index, indikator yang mengukur aktivitas sektor manufaktur atau jasa suatu negara.",
  },
  {
    id: 321,
    category: "Ekonomi",
    term: "CPI",
    definition:
      "Consumer Price Index, indeks yang mengukur perubahan harga rata-rata barang dan jasa yang dikonsumsi rumah tangga.",
  },
  {
    id: 322,
    category: "Ekonomi",
    term: "Non-Farm Payroll",
    definition:
      "Data ketenagakerjaan Amerika Serikat yang mengukur jumlah lapangan kerja baru di luar sektor pertanian.",
  },
  {
    id: 323,
    category: "Ekonomi",
    term: "Devaluasi",
    definition:
      "Kebijakan penurunan nilai tukar mata uang suatu negara secara resmi oleh otoritas moneter.",
  },
  {
    id: 324,
    category: "Ekonomi",
    term: "Revaluasi",
    definition:
      "Kebijakan peningkatan nilai tukar mata uang suatu negara secara resmi oleh otoritas moneter.",
  },
  {
    id: 325,
    category: "Ekonomi",
    term: "Cadangan Devisa",
    definition:
      "Simpanan mata uang asing dan aset likuid yang dimiliki bank sentral suatu negara.",
  },
  {
    id: 326,
    category: "Ekonomi",
    term: "Utang Luar Negeri",
    definition:
      "Kewajiban finansial suatu negara kepada kreditur asing, baik pemerintah maupun swasta.",
  },
  {
    id: 327,
    category: "Ekonomi",
    term: "Indeks Kepercayaan Konsumen",
    definition:
      "Indikator yang mengukur optimisme masyarakat terhadap kondisi ekonomi saat ini dan masa depan.",
  },

  // =========================================================
  // AI
  // =========================================================
  {
    id: 21,
    category: "AI",
    term: "Machine Learning",
    definition:
      "Cabang kecerdasan buatan yang memungkinkan komputer belajar dari data tanpa diprogram secara eksplisit.",
  },
  {
    id: 211,
    category: "AI",
    term: "Deep Learning",
    definition:
      "Cabang machine learning yang menggunakan jaringan saraf tiruan berlapis untuk mengolah data kompleks.",
  },
  {
    id: 212,
    category: "AI",
    term: "Robo Advisor",
    definition:
      "Layanan pengelolaan investasi otomatis berbasis algoritma yang memberikan rekomendasi portofolio sesuai profil risiko pengguna.",
  },
  {
    id: 213,
    category: "AI",
    term: "Algorithmic Trading",
    definition:
      "Strategi perdagangan yang menggunakan program komputer untuk mengeksekusi transaksi berdasarkan aturan tertentu secara otomatis.",
  },
  {
    id: 214,
    category: "AI",
    term: "Big Data",
    definition:
      "Kumpulan data dalam volume sangat besar yang dianalisis untuk menemukan pola dan wawasan tertentu.",
  },
  {
    id: 215,
    category: "AI",
    term: "Chatbot",
    definition:
      "Program berbasis AI yang dirancang untuk berinteraksi dan menjawab pertanyaan pengguna secara otomatis.",
  },
  {
    id: 216,
    category: "AI",
    term: "Natural Language Processing",
    definition:
      "Cabang AI yang memungkinkan komputer memahami dan memproses bahasa manusia.",
  },
  {
    id: 217,
    category: "AI",
    term: "Automated Trading",
    definition:
      "Sistem perdagangan otomatis yang menjalankan transaksi tanpa intervensi manual berdasarkan algoritma yang telah ditentukan.",
  },
  {
    id: 328,
    category: "AI",
    term: "Generative AI",
    definition:
      "Kecerdasan buatan yang mampu menghasilkan konten baru seperti teks, gambar, atau kode berdasarkan data pelatihan.",
  },
  {
    id: 329,
    category: "AI",
    term: "Large Language Model",
    definition:
      "Model AI berskala besar yang dilatih untuk memahami dan menghasilkan bahasa manusia.",
  },
  {
    id: 330,
    category: "AI",
    term: "Predictive Analytics",
    definition:
      "Teknik analisis data yang menggunakan pola historis untuk memprediksi tren atau hasil di masa depan.",
  },
  {
    id: 331,
    category: "AI",
    term: "Sentiment Analysis",
    definition:
      "Teknik AI yang menganalisis opini publik dari teks seperti berita atau media sosial untuk menilai sentimen pasar.",
  },
  {
    id: 332,
    category: "AI",
    term: "Fintech",
    definition:
      "Teknologi finansial yang menggabungkan inovasi digital dengan layanan keuangan seperti pembayaran dan investasi.",
  },
  {
    id: 333,
    category: "AI",
    term: "Neural Network",
    definition:
      "Model komputasi yang meniru cara kerja jaringan saraf manusia untuk memproses dan mempelajari data.",
  },
  {
    id: 334,
    category: "AI",
    term: "API Trading",
    definition:
      "Metode integrasi sistem yang memungkinkan aplikasi pihak ketiga mengeksekusi transaksi secara otomatis.",
  },
  {
    id: 335,
    category: "AI",
    term: "Bias Algoritma",
    definition:
      "Kecenderungan sistem AI menghasilkan keluaran yang tidak proporsional akibat data pelatihan yang tidak seimbang.",
  },

  // =========================================================
  // PENIPUAN INVESTASI
  // =========================================================
  {
    id: 22,
    category: "Penipuan Investasi",
    term: "Ponzi",
    definition:
      "Skema investasi palsu yang membayar keuntungan investor lama menggunakan dana yang disetor investor baru.",
  },
  {
    id: 218,
    category: "Penipuan Investasi",
    term: "Investasi Bodong",
    definition:
      "Investasi ilegal yang beroperasi tanpa izin resmi dari otoritas berwenang dan berpotensi merugikan masyarakat.",
  },
  {
    id: 219,
    category: "Penipuan Investasi",
    term: "Money Game",
    definition:
      "Skema yang mengiming-imingi keuntungan besar namun sebenarnya hanya mengandalkan perputaran dana anggota baru.",
  },
  {
    id: 220,
    category: "Penipuan Investasi",
    term: "Skema Piramida",
    definition:
      "Model bisnis yang mengandalkan perekrutan anggota baru secara berjenjang untuk menghasilkan keuntungan bagi anggota di atasnya.",
  },
  {
    id: 221,
    category: "Penipuan Investasi",
    term: "Arisan Online Ilegal",
    definition:
      "Modus penipuan berkedok arisan daring yang menjanjikan keuntungan tidak wajar namun berujung penggelapan dana peserta.",
  },
  {
    id: 222,
    category: "Penipuan Investasi",
    term: "Robot Trading Ilegal",
    definition:
      "Aplikasi trading otomatis tanpa izin resmi yang menjanjikan keuntungan pasti namun berpotensi menjadi modus penipuan.",
  },
  {
    id: 223,
    category: "Penipuan Investasi",
    term: "Binary Option",
    definition:
      "Produk spekulasi berisiko tinggi yang menebak arah harga aset dalam waktu singkat, umumnya ditawarkan secara ilegal di Indonesia.",
  },
  {
    id: 224,
    category: "Penipuan Investasi",
    term: "Testimoni Palsu",
    definition:
      "Kesaksian rekayasa yang digunakan pelaku penipuan investasi untuk meyakinkan calon korban bergabung.",
  },
  {
    id: 225,
    category: "Penipuan Investasi",
    term: "Return Tidak Wajar",
    definition:
      "Janji keuntungan investasi yang jauh melebihi kewajaran pasar, umumnya menjadi ciri khas investasi bodong.",
  },
  {
    id: 226,
    category: "Penipuan Investasi",
    term: "OJK",
    definition:
      "Otoritas Jasa Keuangan, lembaga yang mengawasi dan mengatur kegiatan sektor jasa keuangan di Indonesia, termasuk legalitas produk investasi.",
  },
  {
    id: 227,
    category: "Penipuan Investasi",
    term: "Legalitas Izin Usaha",
    definition:
      "Status resmi suatu entitas investasi yang telah terdaftar dan diawasi oleh otoritas berwenang seperti OJK atau Bappebti.",
  },
  {
    id: 228,
    category: "Penipuan Investasi",
    term: "Social Engineering",
    definition:
      "Teknik manipulasi psikologis yang digunakan pelaku penipuan untuk membujuk korban memberikan uang atau data pribadi.",
  },
  {
    id: 336,
    category: "Penipuan Investasi",
    term: "Phishing",
    definition:
      "Teknik penipuan digital untuk mencuri data pribadi atau keuangan korban melalui tautan atau pesan palsu.",
  },
  {
    id: 337,
    category: "Penipuan Investasi",
    term: "Bappebti",
    definition:
      "Badan Pengawas Perdagangan Berjangka Komoditi, lembaga yang mengawasi legalitas perdagangan aset kripto dan komoditi berjangka di Indonesia.",
  },
  {
    id: 338,
    category: "Penipuan Investasi",
    term: "Satgas Waspada Investasi",
    definition:
      "Satuan tugas gabungan lembaga pemerintah yang menangani dan mencegah kegiatan investasi ilegal di Indonesia.",
  },
  {
    id: 339,
    category: "Penipuan Investasi",
    term: "Skema Member Get Member",
    definition:
      "Model perekrutan anggota berjenjang yang sering digunakan sebagai kedok dalam penipuan berkedok investasi.",
  },
  {
    id: 340,
    category: "Penipuan Investasi",
    term: "Garansi Balik Modal",
    definition:
      "Janji palsu pengembalian penuh dana investasi yang sering digunakan pelaku penipuan untuk menarik korban.",
  },
  {
    id: 341,
    category: "Penipuan Investasi",
    term: "Kloning Identitas",
    definition:
      "Modus penipuan dengan menyamar sebagai institusi atau tokoh resmi untuk meyakinkan korban berinvestasi.",
  },
  {
    id: 342,
    category: "Penipuan Investasi",
    term: "Pump and Dump",
    definition:
      "Modus manipulasi harga aset dengan menaikkan harga secara artifisial sebelum dijual massal oleh pelaku.",
  },
  {
    id: 343,
    category: "Penipuan Investasi",
    term: "Money Laundering",
    definition:
      "Pencucian uang, proses menyamarkan asal-usul dana ilegal agar tampak berasal dari sumber yang sah.",
  },
];