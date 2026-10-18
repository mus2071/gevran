# Yuva teslim durumu

## [x] Görsel tasarım sistemi ve ikonografi
- [x] Klasik tablo/liste görünümünden uzak; glassmorphism, yumuşak neomorphism ve Bento Grid yaklaşımını harmanlayan mobil uyumlu bir arayüz uygulanır.
- [x] Mutfak/Market, Faturalar, Ulaşım, Çocuklar/Eğitim, Sağlık ve Zekat için ikon + metin + renk eşleşmeleri uygulanır; aktif/pasif ikon durumları görünürdür.
- [x] Light Mode ve Dark Mode için premium, okunaklı renk tokenları; Manrope tabanlı tipografi ve sayısal hiyerarşi uygulanır.
- [x] Hızlı ekleme, seçili navigasyon, hover/focus ve kayıt toast geçişleri gibi mikro etkileşimler uygulanır; tema tercihi tarayıcıda saklanır.

## [x] Dashboard ve finans akışları
- [x] Dashboard kullanılabilir bütçe, toplam gelir, toplam gider ve net varlık metriklerini; aylık bütçe halkası, gider dağılımı, son hareketler ve günün akışını gösterir.
- [x] Ana ekrandan ayrılmadan Tutar → ikonlu Kategori → Kaydet akışında hızlı harcama/g gelir ekleme modalı çalışır; kayıtlar localStorage'da tutulur.
- [x] Gelir, gider, borç, alacak, taksit ilerleme çubukları, banka promosyonu/kart puanı/kampanya kapsamına ayrılmış Finans ekranı bulunur; mevcut prototipte hareketler ve borç/alacak görünümü işlevlidir.

## [x] Zekat, varlık, aile ve ajanda
- [x] Zekat ekranı toplam gereken, verilen, kalan tutarları, görsel ilerleme halkasını, hesaplama girdilerini ve verilen kişi/kurum kayıtlarını gösterir.
- [x] Varlık ekranı nakit, altın, döviz, ev gibi varlıkları, net varlığı, trend görselini ve birikim hedeflerini gösterir.
- [x] Kurs ekranı öğrenci, gün/saat, ücret ödeme akışı ve abonelikleri; Ajanda ekranı takvim, rutin iş ve öncelikli todo akışını gösterir.

## [x] Rehber ve üretim mimarisi
- [x] Renk, tipografi, ikon seçimi, bileşen stilleri ve Bento/Glass düzenini anlatan Yuva UX rehberi bulunur.
- [x] Dashboard, hızlı harcama modalı ve Zekat/Varlık ekranları için UI şemaları, bilgi mimarisi/flow ve üretim veritabanı şeması rehberde açıklanır.
- [x] Sesli komut, fiş OCR, SMS/banka entegrasyonu, gerçek piyasa verisi, rol tabanlı erişim ve dijital evrak kasası için üretim UX/güvenlik notları rehberde açıkça ayrıştırılır; prototip bu özellikleri gerçek entegrasyon varmış gibi iddia etmez.

## [x] Teknik teslim
- [x] `public/manus-routes.json` tüm sayfa route'larını içerir.
- [x] `pnpm build` başarılıdır ve `dist/index.html` oluşur.
- [x] 3000 portunda Vite önizlemesi hazırdır; ana sayfa ve `/manus-routes.json` HTTP 200 ile doğrulanmıştır.
- [x] Checkpoint kanonik `main` branch'e kaydedildi; otomatik yayın kapalı olduğu için teslim URL'si önizleme olarak paylaşılacaktır. İlk sürüm commit'i: `62d97820da1eea7d6df646ddd3a48e7322b088d7`.
