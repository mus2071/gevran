# Yuva — Aile Bütçesi ve Yaşam Asistanı

## Uygulama yaklaşımı

Kullanıcının istediği web sitesi ve ekli UX/mimari rehber doğrultusunda etkileşimli, mobil uyumlu React + TypeScript + Vite uygulaması hazırlanacak. Ana ekran, gelir/gider, borç ve alacaklar, varlıklar, zekat ve sadaka, aile/kurslar, ajanda, abonelikler ve evrak kasası tek bir yan navigasyondan erişilecek. Rehber ekranında tasarım sistemi, kritik ekran şemaları, bilgi mimarisi, SQL veri modeli önerisi ve veri girişini azaltan UX çözümleri bulunacak.

Bu teslim, **örnek verili ve tarayıcıda kalıcı veri tutan etkileşimli prototiptir**. Harcama/gelir ekleme, arama, kategori ve dönem filtreleri, varlık/kurs/abonelik/görev ekleme, görev tamamlama, zekat hesabı ve ödeme kaydı, doküman yükleme/önizleme ve tema değiştirme çalışacaktır. Gerçek bankaya veya cihaza erişiliyormuş gibi gösterilmeyecek. Canlı kurlar yerine kullanıcı tarafından düzenlenebilir demo değerler kullanılacak. Tarayıcı konuşma tanıma varsa sesli giriş desteklenecek; SMS, banka bağlantısı, OCR, sunucu bildirimleri ve gerçek çok kullanıcılı rol yetkisi rehberde entegrasyon gerektiren sonraki üretim kapsamı olarak açıkça ayrılacak. Ortak aile rolleri bir arayüz önerisidir, kimlik doğrulama veya güvenlik sınırı değildir. Dijital evraklar IndexedDB ile bu cihazda saklanır; güvenli bulut kasası olarak sunulmaz.

Sunucu/veritabanı bu rehber ve prototip için zorunlu değildir; önerilen üretim şeması ve hane bazlı rol modeli ayrıca sunulacak. Hassas gerçek veri girilmemesi için örnek veri modu görünür olacak. Yönetilen proje, 3000 portunda Vite önizleme ve statik dist çıktısı kullanır. pnpm sabitlenir; otomatik TypeScript/CSS tanılaması yapılandırılır. Derleme ve salt okunur bağımsız kod incelemesi ardından kanonik main branch'e checkpoint kaydedilir. Otomatik yayın kapalı olduğundan teslim önizleme olarak yapılır.

## Görsel tasarım sistemi

- **Tasarım akımı:** Kullanıcının Bento Grid, cam yüzeyler ve yumuşak neomorphism yönlendirmesine uyumlu sıcak editorial-fintech; verinin rahatça okunması için cam etkisi başlık/özel kartlarda kontrollü kullanılır.
- **Temel ilkeler:** Sakin yüzeyler, net sayısal hiyerarşi, tek tıkla erişilebilir işler, modüller arasında tutarlı renk/ikon eşleşmesi.
- **Renk felsefesi:** Kırık beyaz #F7F8FA sakin zemin, beyaz #FFFFFF kartlar, koyu #242638 metin, Yuva moru #7563DB seçili eylemler, yeşil #4EA58D gelir ve güven, amber #D69B47 hatırlatma, mercan #DD807D gider. Koyu mod #171923 zemin, #222532 yüzey, #F3F2FA metin ve #A99AF4 vurgu.
- **Düzen:** 224px ince sabit yan panel, üstte arama/bildirim/kişi; geniş içeriğin üstünde selamlama ve ay seçici. Dört metrik kart, asimetrik bütçe akışı/dağılım kartları, altta işlem akışı/ajanda. Dar görünümde yatay mobil navigasyon ve tek sütun; veri yoğunluğu katmanlı.
- **İmza elemanları:** Yuvarlatılmış mor ev/yuvaya benzeyen marka simgesi, ince segmentli halkalar, hafif noktalı grafik kılavuzları, lavanta hızlı işlem alanları.
- **Etkileşim:** Ana ekranı terk etmeden tutar → ikonlu kategori → kaydet; arka planda özetler anında hesaplanır. Karta/eşleşen satıra dokunma ilgili modüle geçer. ESC modalı kapatır, klavye odağı korunur. Hızlı ekleme butonu her sayfada aynı yerde kalır.
- **Animasyon:** 180–240ms opacity/translate, 150ms buton geri bildirimi, kayıt için kısa onay ve konfetisiz/sade başarı alternatifi; reduced-motion tercihi tüm hareketleri kaldırır. Kullanıcı kart sürükle-bırak düzenini yerel saklama ile korur.
- **Tipografi:** Manrope gövde ve kontroller; büyük değerlerde ağırlık 650–750 ve tabular-nums; başlıklar 28–32px, bölüm 16px, gövde 13–14px, yardımcı metin 11–12px. Türkçe karakterler desteklenir.
- **Marka özü:** Ailesinin parasına ve zamanına tek bir sakin yerden hâkim olmak isteyenler için, hayatı tabloya sıkıştırmayan aile asistanı. Sıcak, dingin, özenli.
- **Marka sesi:** Kısa, destekleyici ve yargılamayan: “Ailenin bugününe, yarınına.” / “Küçük bir kayıt, büyük bir rahatlık.”
- **Wordmark ve logo:** Üç yumuşak çatı/yuva çizgisinin tek kapı etrafında birleştiği küçük mor simge; küçük harfli, sıkı harf aralıklı “yuva” wordmark ve mor nokta.
- **İmza rengi:** #7563DB Yuva moru.

## İkonografi

Lucide vektör ailesi: 20px genel navigasyon, 18px satır, 24px kategori. 1.7px stroke; aktif durumda lavanta arka plan ve mor ikon, pasif durumda gri ikon. Kategori simgeleri metinle birlikte bulunur; renk tek anlam taşıyıcı değildir. Market ShoppingBasket, faturalar Receipt, ulaşım Car, eğitim GraduationCap, sağlık HeartPulse, sigorta ShieldCheck, araç Wrench, eğlence Clapperboard, zekat MoonStar, gelir ArrowDownLeft, borç CreditCard, alacak HandCoins, fon ChartNoAxesCombined, ev House.

## Proje yapısı

- `src/App.tsx`: Uygulama kabuğu, sayfa geçişleri, global arama ve modal koordinasyonu.
- `src/data.ts`: Tipler, kategori tanımları, örnek veri ve Türkçe para/tarih yardımcıları.
- `src/store.ts`: localStorage verisi, hesaplamalar ve IndexedDB dosya saklama yardımcıları.
- `src/components/`: Yan panel, üst bar, kartlar, grafikler, modal ve veri giriş bileşenleri.
- `src/pages/`: Dashboard ve ayrı işlev modülleri; rehber sayfası.
- `src/styles.css`: Token sistemi, bileşenler, responsive ve dark-mode stilleri.
- `public/`: Logo, yerel font, favicon ve kaynakla senkron `manus-routes.json`.
- `docs/`: Tam UX/tasarım rehberi ve üretim veritabanı şeması.

## Kullanıcıya sunulacak kapsam

Minimal mor/lavanta ve sıcak beyaz tasarım; işlevli dashboard ve modüller; yerel demo saklama; doküman ve şema önerileri. Güncel piyasa verisi, gerçek banka/SMS/OCR ve gerçek aile hesabı üretim entegrasyonları olarak dürüstçe işaretlenecek. İnceleme ve derleme sonrası önizleme bağlantısı ve istenen rehber teslim edilecek.
