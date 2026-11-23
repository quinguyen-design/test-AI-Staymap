# ChoThueTot.vn (Staymap) — Tài Liệu Bàn Giao Kỹ Thuật Đầy Đủ (Full Spec 100%)

- **Repository chuẩn đối chiếu:** `https://github.com/quinguyen-design/test-AI-Staymap` (nhánh `main`)
- **3 tệp mã nguồn chính:** [index.html](index.html), [styles.css](styles.css), [app.js](app.js)
- **Phạm vi đặc tả đầy đủ:**
  1. Hệ thống thiết kế & Nhịp điệu nền toàn trang
  2. **Hero Map & Thanh Tìm Kiếm** (`.site-header-hero.hero-is-map`, `.site-header-nav`)
  3. **Banner VIP Đặc Quyền** (`.sv1-luxury-stage` / `#sv1CardContainer`)
  4. **Trang Đăng Tin 4 Bước + Xem Trước 1:1** (`#postModalBackdrop`)
  5. **Trang Tin Chi Tiết — Phần Hiển Thị Hình Ảnh & Hành Vi Đầu Trang** (`#view-detail`, `.pd-carousel-wrap`)

---

## 1. Hệ Thống Thiết Kế & Nhịp Điệu Nền Trang

- **Typography:** `Roboto` (`--font-sans: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`) áp dụng cho toàn bộ giao diện, nút, input và `.leaflet-container`.
- **Tabular Numerals:** Bắt buộc `font-variant-numeric: tabular-nums` (`.tabular-nums`) trên mọi giá thuê, diện tích, chi phí điện/nước, bộ đếm ảnh và số điện thoại.
- **Bảng màu thương hiệu:**
  - Cam chủ đạo: `--ctt-orange: #f15a22`, `--ctt-orange-vivid: #f37201`, `--ctt-orange-amber: #ff9d00`, `--ctt-orange-soft: #fff3eb`, `--ctt-orange-border: #ffd6be`.
  - Đen Slate: `#0f172a` (nền tối, nút SĐT, chữ tiêu đề).
  - Nền trang: Trắng `#ffffff` & Xám trắng `#f4f6f9`.
- **Quy tắc nền trang (Chống hiệu ứng gradient AI loang mờ):**
  - **Cấm dùng** `radial-gradient` / `linear-gradient` màu cam nhạt, kem, vàng loang mờ phía sau Banner VIP hoặc các tầng tin.
  - Thứ tự nền xen kẽ từ trên xuống dưới:
    1. **Banner VIP (`.sv1-luxury-stage`) + 3 Promo Banner:** Trắng `#ffffff` (`--bg-page: #ffffff`).
    2. **Khu vực Spotlight (`.lc-section.lc-spotlight-zone`):** Xám trắng `#f4f6f9` (`border-top` & `border-bottom: 1px solid #e2e8f0`).
    3. **Khu vực Featured (`.lc-section`):** Trắng `#ffffff` (`border-top: 1px solid #e2e8f0`).
    4. **Khu vực Prime (`.lc-section.lc-prime-zone`):** Xám trắng `#f4f6f9` (`border-top: 1px solid #e2e8f0`).
    5. **Kinh nghiệm BĐS & SEO Links:** Trắng `#ffffff`.

---

## 2. Hero Map & Thanh Tìm Kiếm (`.site-header-hero` & `.site-header-nav`)

- **Vị trí code:** [index.html](index.html#L54-L240), [styles.css](styles.css#L87), [app.js](app.js#L1443-L1785).
- **Bản đồ đầu trang (`#siteHeaderHero`):**
  - Kích thước mặc định: `width: 100%; height: 540px; background: #0f172a;`.
  - Chế độ toàn màn hình (`.is-expanded`): `position: fixed; inset: 0; width: 100vw; height: 100vh; z-index: 950;`, bật ngăn kéo thông tin tin đăng bên trái `#heroMapLeftDrawer` (`width: 392px`, `top: 96px`, `left: 28px`).
- **Thanh Topbar nổi trên bản đồ (`.site-header-bar`):**
  - Trái: Logo chính thức `assets/logo.png` (fallback `logo_cms_1782625511.png`).
  - Phải: Pill Ví (`#headerWalletPill`, ẩn khi chưa đăng nhập), nút `ĐĂNG NHẬP` (`#headerBtnAuth`) hoặc dropdown tài khoản (`#headerAccountWrap`), nút `ĐĂNG TIN NGAY` (`.shb-btn-post` → gọi `openPostModal()`).
- **Thanh điều khiển nổi đáy bản đồ (`.hero-map-hud-bottom`):**
  - **7 chip lọc loại hình (`filterMapCategory`):**
    1. `Tất cả BĐS` (`all`)
    2. `Phòng trọ` (`phong-tro`)
    3. `Căn hộ, Studio` (`can-ho-chung-cu`)
    4. `Nhà nguyên căn` (`nha-o`)
    5. `Mặt bằng, VP` (`mat-bang-van-phong`)
    6. `Kho xưởng` (`bai-dat-kho-xuong`)
    7. `HomeStay / Airbnb` (`homestay-airbnb`)
  - **3 chế độ giao diện bản đồ (`setMapStyle`):** `Đường phố` (`streets`), `Vệ tinh` (`satellite`), `Đêm` (`night`).
  - **Nút mở rộng (`toggleExpandHeroMap`):** `Mở rộng` / `Thu gọn`.
- **Phân cấp ghim giá 6 hạng trên bản đồ (`updateMapPins`):**
  - `Banner Đặc Quyền` (`zoneId: 1`): tối đa `20` ghim.
  - `VIP 1 / VIP 2 / VIP 3`: tối đa `75` ghim.
  - `Tin Cơ Bản` (`zoneId: 4`): tối đa `65` ghim.
  - **`Đăng Tin Miễn Phí` (`zoneId: 13`): KHÔNG hiển thị trên bản đồ.**
  - Click ghim hiển thị popup xem nhanh (`.hero-map-popup`), click popup mở trang tin chi tiết (`openPropertyDetailView(id)`).
- **Sticky Nav + Segmented Search Bar (`.site-header-nav`):**
  - Trái: Nút dropdown `CHO THUÊ` liệt kê 6 danh mục loại hình.
  - Giữa: Thanh tìm kiếm 3 phân đoạn (`.hsp-bar.hsp-segmented`):
    1. `Địa điểm / Từ khóa` (`#hspSearchInput` + `#segLocPopover`, `min-width: 340px`):
       - **Chưa gõ:** Hiện sẵn nhóm **Từ khóa phổ biến** 1-click (`Full nội thất`, `Gần Metro`, `Thang máy`, `Sân vườn`, `Duplex`, `Mặt tiền`) cùng **Dự án / Phường / Tên đường**.
       - **Khi gõ (hỗ trợ không dấu, đa từ khóa):** Đếm trực tiếp số tin khớp toàn văn (`matchesKeywordAcrossListing` dò qua tiêu đề, mô tả, địa chỉ, dự án, loại hình, nội thất, hướng, điện/nước, tiện ích, dịch vụ) và đồng bộ ghim trên `#heroMap` khi tìm kiếm.
    2. `Loại hình` (`#segCatDisplay` + `#segCatPopover`).
    3. `Mức giá` + nút `Lọc` (mở Mega-Search Panel 2 cột rộng, không tràn khung 280px) + nút tìm kiếm cam.
  - Phải: Menu điều hướng (`TRANG CHỦ`, `BẢNG GIÁ`, `TIN TỨC`, `ƯU ĐÃI`).

---

## 3. Banner VIP Đặc Quyền (`.sv1-luxury-stage` / `#sv1CardContainer`)

- **Vị trí code:** [index.html](index.html#L411-L416), [app.js](app.js#L2374-L2705), [styles.css](styles.css#L7100-L7312).

### 3.1. Hình Thức Khung Tổng
- **Không có tiêu đề** `"Banner Đặc Quyền"` phía trên.
- `.sv1-luxury-stage`: `padding: 12px 0 18px; background: #ffffff;`.
- `.sv1-card-3d`: `background: #ffffff !important; border: none !important; border-radius: 0 !important; padding: 6px 0 !important; box-shadow: none !important; transform: none !important;`.
- Ẩn hoàn toàn `.sv1-card-3d::before` (`display: none !important; content: none !important;`) và `.sv1-3d-orbit-stage::before` (`display: none !important;`).
- **Không có `box-shadow` / `drop-shadow`** trên khung tổng, thẻ ảnh xoay, ô thông số và nút bấm.

### 3.2. Bố Cục Cột Trái (`.sv1-left`, rộng `35%` desktop / `100%` mobile)
Thứ tự từ trên xuống dưới (khóa chiều cao để **không nhúng** khi đổi tin):
1. **Badge:** `✦ ĐẶC QUYỀN` (`.lc-vip-tag.tag-dacquyen`).
2. **Địa chỉ (`.sv1-loc`):** `min-height: 21px`, icon pin cam + tên phường/quận/thành phố.
3. **Hàng Giá (`.sv1-price-row`, `justify-content: space-between; align-items: baseline;`):**
   - Trái: `.sv1-price` (`font-size: 34px; line-height: 1.05;`) + `| Tháng` (`14px`).
   - Phải (ngang hàng với chữ `Tháng`): `.sv1-utility-pills` gồm **3 ô**: `Điện` (`fa-bolt`), `Nước` (`fa-droplet`), `CP khác` (`fa-receipt`).
4. **Tiêu đề (`.sv1-title`):** `font-size: 19px; line-height: 1.35;`, khóa 2 dòng cố định (`min-height` & `max-height: calc(19px * 1.35 * 2)`).
5. **Mô tả (`.sv1-desc`):** `font-size: 13.5px; line-height: 1.58;`, khóa 3 dòng cố định (`min-height` & `max-height: calc(13.5px * 1.58 * 3)`).
6. **Hàng Thông Số (`.sv1-specs-row`, `justify-content: space-between;`):**
   - Trái (`.sv1-specs-left`): **3 ô** `Diện tích` (`fa-maximize`), `Phòng ngủ` (`fa-bed`), `Nhà vệ sinh` (`fa-bath`).
   - **Quy chuẩn kích thước 6 ô bằng nhau (`.sv1-equal-pill`):** Cả **3 ô Điện/Nước/CP khác** ở hàng giá và **3 ô Diện tích/PN/WC** ở hàng thông số dùng chung kích thước cố định **`74px × 29px`** (`border-radius: 8px; font-size: 10.2px; font-weight: 700; gap: 3px;`).
   - Phải: Nút **`Bản Đồ`** (`.sv1-btn-map-cell`, `height: 29px; padding: 0 13px; border-radius: 99px; background: #ffffff; border: 1px solid #cbd5e1; color: #0f172a;`), **icon `fa-map-location-dot` màu cam `var(--ctt-orange)`**.
7. **2 Nút CTA (`.sv1-cta-row`, `display: grid; grid-template-columns: 1fr 1fr; gap: 10px;`):**
   - Hai nút **bằng nhau tuyệt đối** (`height: 42px`).
   - Trái: **`Chi Tiết Tin Đặc Quyền →`** (`.sv1-btn-detail`), hover chuyển sang **nền đen `#0f172a`, chữ trắng `#ffffff`**.
   - Phải: **Nút SĐT** (`#sv1ActivePhoneBtn`), hover chuyển nền hình tròn icon `.sv1-r-phone-icon` (`28×28px`) sang **màu đen `#0f172a`, icon trắng `#ffffff`**.

### 3.3. Trục Xoay 3D & Chuyển Cảnh Mờ (`.sv1-right` / `#sv1OrbitStage`)
- **Kích thước sân khấu & thẻ:**
  - Desktop (`> 980px`): stage `height: 520px`, `pivotX = 475`, thẻ `455×290px` (`max-width: 60%`).
  - Mobile (`≤ 980px`): stage `height: 380px`, `pivotX = 275`, thẻ `295×192px` (`max-width: 58%`).
- **Tốc độ & Dừng khi rê chuột:**
  - Chạy tuyến tính theo `dt`: `baseRatePerSec = 0.24` slide/giây (**không hãm tốc ở từng tin**).
  - Rê chuột trên sân khấu ngoài thẻ ảnh: tốc độ giảm còn `0.38×`.
  - **Đưa chuột vào thẻ ảnh (`.sv1-3d-orbit-card`):** đặt `SV1_CYLINDER.cardHoverPaused = true` → **trục dừng xoay ngay lập tức**; đưa chuột ra ngoài thì xoay tiếp.
  - Kéo bằng chuột/tay (`pointerdown` → `pointermove`): `progress -= (dx + dy) * 0.0045`.
- **Công thức quỹ đạo 3D (`startSv1CylinderLoop`):**
  - Phạm vi hiển thị mượt: `absSlot <= 1.68` (ngoài phạm vi gắn `.is-back`, `opacity: 0`).
  - `arcAngle = Math.min(88, Math.abs(slotDiff * 52)) * Math.sign(slotDiff)`
  - `tx = Math.sin(rad) * pivotX`, `ty = slotDiff * (isMobile ? 106 : 158)`
  - `rotY = slotDiff * 44 + smoothMouseX * 4`, `rotX = smoothMouseY * -3`
  - `scale = Math.max(0.64, 1.06 - absSlot * 0.22)`
  - `opacity = Math.pow(Math.max(0, Math.cos((absSlot / 1.68) * (Math.PI / 2))), 0.82)`
  - CSS `.sv1-3d-orbit-card`: **chỉ `transition: border-color 0.35s ease;`** (tuyệt đối không `transition` trên `transform` hay `opacity`).
- **Hiệu ứng chuyển cảnh phần thông tin (`.sv1-left`):**
  - **1 hiệu ứng mờ duy nhất**, không `is-slide-switching`, không `triggerSv1BrandBorderSync()`:
    `fadeOpacity = centerDist <= 0.24 ? 1 : Math.max(0.22, 1 - ((centerDist - 0.24) / 0.26) * 0.78)`.
- **Thành phần trên thẻ & dưới trục:** Mỗi thẻ có 3 ảnh thumbnail nhỏ nổi ở góc dưới-phải (`switchSv1CardPhoto`), bên dưới sân khấu có dải chấm tròn `#sv1AxisDots` căn thẳng theo hàng nút CTA.

---

## 4. Trang Đăng Tin 4 Bước + Xem Trước 1:1 (`#postModalBackdrop`)

- **Vị trí code:** [index.html](index.html#L1065-L1510), [styles.css](styles.css#L3197) & [styles.css](styles.css#L4446), [app.js](app.js#L3886-L7000).
- **Khung Modal:** `max-width: 1200px`, chia 2 cột `1.32fr 1fr` (`gap: 22px`):
  - **Header modal:** Tiêu đề `"Đăng Tin Bất Động Sản Mới"`, thanh 4 bước (`1 Vị Trí`, `2 Thông Số`, `3 Nội Dung & Ảnh`, `4 Gói Tin`), pill Ví (`.js-wallet-balance`), nút đóng.
  - **Cột phải (Xem Thử Trực Tiếp 1:1):** 3 tab (`1. Thẻ Tin`, `2. Banner VIP`, `3. Trang Bài Viết`), bảng tính chi phí (`#previewPriceBreakdown`), checkbox `"Tôi đồng ý với Điều khoản đăng tin..."` (`#agreePostTerms`), nút `XÁC NHẬN TIN ĐĂNG` (`publishStudioListingNow()`).

### Bước 1 — Loại Hình & Vị Trí (`#modalWizardSlide1`)
- **Loại Hình (6 nút bắt buộc):** `Phòng Trọ / CHDV` (`phong-tro`), `Nhà Nguyên Căn` (`nha-o`), `Căn Hộ Chung Cư` (`can-ho-chung-cu`), `Mặt Bằng Văn Phòng` (`mat-bang-van-phong`), `Đất - Xưởng, Kho - Bãi` (`bai-dat-kho-xuong`), `HomeStay / Airbnb` (`homestay-airbnb`).
- **4 Combo tìm kiếm (`.ctt-combo-wrap`):** `Tỉnh / Thành *` (`#dCity`, mặc định `TP. Hồ Chí Minh`), `Phường / Xã *` (`#dWard`), `Tên Đường *` (`#dStreet`), `Dự Án` (`#dProject`).
- **Địa Chỉ Chi Tiết `*` (`#dAddress`):** Ô nhập số nhà gắn kèm hậu tố tự động `#dAddressSuffix`.
- **Liên hệ:** `Người Liên Hệ *` (`#dHost`), `Số Điện Thoại *` (`#dPhone`, 10 số VN qua `sanitizeStudioVnPhone`).

### Bước 2 — Thông Số & Chi Phí (`#modalWizardSlide2`)
- **Giá Thuê `*` (`#dPrice`, `.ctt-combo-wrap`):**
  - Nhãn `#dPriceUnitLabel` mặc định **`(Triệu / Tháng)`**.
  - Click/focus vào ô Giá Thuê xổ danh sách `#dPriceUnitList` theo đúng thứ tự: **`Ngày` → `Tháng` (chọn mặc định) → `Năm`**.
  - **Quy tắc quy đổi `< 1`:** Nếu khách nhập `0 < giá < 1` (ví dụ `0.7`), tự động chuyển sang đơn vị `đ` (**`700.000đ`**) trên `#dPriceUnitLabel`, cả 3 tab **Xem Trước** (`| Ngày` / `| Tháng` / `| Năm`) và dữ liệu khi đăng.
- **Tiền Cọc (`#dDeposit`):** Combo chọn (`Thỏa Thuận`, `1 Tháng`, `2 Tháng`, ...).
- **Thông số cơ bản:** `Diện Tích (m²) *` (`#dArea`), `Phòng Ngủ` (`#dBeds`, mặc định `1`), `Nhà Vệ Sinh` (`#dBaths`, mặc định `1`).
- **Khung chi phí 9 ô (`grid-template-columns: repeat(3, 1fr)`):**
  1. `Điện (kWh)` (`#dElec`, để trống = `Nhà nước`)
  2. `Nước` (`#dWater`, `.ctt-combo-wrap`): mặc định `(Người)`, click chọn **`Khối (m³)` | `Người`**
  3. `Trọn Gói Chi Phí Khác` (`#dOtherCost`)
  4. `Internet` (`#dInternet`, `.ctt-combo-wrap`): mặc định `(Phòng)`, click chọn **`Phòng` | `Người`**
  5. `Giặt Sấy` (`#dLaundry`, `.ctt-combo-wrap`): mặc định `(Người)`, click chọn **`Người` | `1 Lần` | `Kg` | `Phòng`**
  6. `Phí Rác` (`#dTrash`, `.ctt-combo-wrap`): mặc định `(Phòng)`, click chọn **`Phòng` | `Người`**
  7. `Phí Xe (Xe / Người)` (`#dParking`)
  8. `Giới Hạn (Người / Phòng)` (`#dMaxPeople`)
  9. `Phụ Thu` (`#extraPersonFeeWrap` / `#dExtraPerson`, ẩn mặc định, hiện khi chọn giới hạn)

### Bước 3 — Tiêu Đề, Mô Tả & Hình Ảnh (`#modalWizardSlide3`)
- **Nút AI viết bài:** `#btnAiAutoWrite` (`Click Ngay` → `generateStudioAISeo()`).
- **Nội dung:** `Tiêu Đề *` (`#dTitle`, `maxlength="70"` + bộ đếm `#demoTitleCountLabel`), `Mô Tả Chi Tiết *` (`#dDesc`).
- **Media:** Upload `4–9 ảnh` (`#dPhotoFileInput`, quản lý ở `#demoPhotos`, chọn ảnh bìa `coverIndex`) + Video MP4 tùy chọn (`#dVideoFileInput`).
- **Đặc điểm BĐS:** `Nội Thất` (`#dFurniture`), `Số Tầng` (`#dFloors`), `Hướng Nhà` (`#dDirection`), `Mặt Tiền - Lộ Giới (m²)` (`#dFrontageRoad`), `Đường Vào Nhà (m²)` (`#dRoadAccess`).
- **2 nhóm chip chọn:**
  - `Tiện Ích`: `Trường Học` (`#chkSchool` → hiện `#schoolCodeWrap` nhập Tên/Mã trường), `Chợ / Siêu Thị`, `Y Tế / BV`, `Công Viên`, `Xe Bus`, `Bank / ATM`.
  - `Dịch Vụ`: `Hầm Xe`, `Giặt / Sấy`, `An Ninh / Cam`, `PCCC`, `Thang Máy`, `Quản Lý`.

### Bước 4 — Chọn Gói Hiển Thị & Thanh Toán (`#modalWizardSlide4`)
- **6 Khu Vực (`STUDIO_ZONES`):**
  1. `Banner Đặc Quyền` (`id: 1`, `50.000đ/ngày`, badge `✦ ĐẶC QUYỀN`, Top đầu trang chủ + map)
  2. `TOP 1 Hiển Thị` (`id: 2`, `35.000đ/ngày`, badge `✦ VIP 1`, Spotlight + map)
  3. `TOP 2 Nổi Bật` (`id: 3`, `25.000đ/ngày`, badge `• VIP 2`, Featured + map)
  4. `TOP 3 Hiệu Quả` (`id: 5`, `15.000đ/ngày`, badge `VIP 3`, Prime + map)
  5. `Tin Cơ Bản` (`id: 4`, `1.000đ/ngày`, lên bản đồ chuẩn)
  6. `Đăng Tin Miễn Phí` (`id: 13`, `0đ`, không lên bản đồ)
- **4 Mức Số Ngày (`STUDIO_DURATIONS`):** `3 ngày (giảm 0%)`, `7 ngày (giảm 5%)`, `15 ngày (giảm 10%)`, `30 ngày (giảm 20%)`.
- **3 Nhãn Dán (`STUDIO_STICKERS`, `+1.000đ/ngày`):** `Giảm Sâu` (`urgent`), `HOT` (`hot`), `Ưu Đãi` (`promo`).
- **Mã Khuyến Mãi (`STUDIO_PROMO_CODES`):** `STAYMAP10` (-10%), `WELCOME15` (-15%), `VIP20` (-20%), `CHOTHUE50K` (-50.000đ).
- **Ví VietQR / MoMo:** Trừ số dư ví khi xác nhận; nếu thiếu tiền, mở modal nạp VietQR (khuyến mãi `+11%`).

---

## 5. Trang Tin Chi Tiết — Hiển Thị Hình Ảnh & Hành Vi Đầu Trang (`#view-detail`)

- **Vị trí code:** [app.js](app.js#L3387-L3577), [styles.css](styles.css#L5670-L5820) & [styles.css](styles.css#L7264-L7267).
- **Hành vi đầu trang:** Khi click vào tin (`openPropertyDetailView(propId)`), bản đồ `#heroMap` (`540px`) vẫn giữ nguyên ở đầu trang và tự động zoom đến vị trí tin đăng cùng các ghim lân cận (`updateMapPins("all", item.id)`), phía dưới là `#view-detail`.
- **Khung Ảnh Chính (`.pd-carousel-stage`):**
  - Kích thước: `100% × 360px` (Desktop), `250px` (Mobile `≤ 768px`), `border-radius: 16px`, nền `#0f172a`.
  - **2 lớp ảnh** (hiển thị đủ 100% cả ảnh ngang & dọc không cắt xén):
    - Lớp 1 (`.pd-carousel-ambient`, `z-index: 1`): chính ảnh đang xem, `object-fit: cover`, `inset: -20px`, `filter: blur(22px) brightness(0.42)`, `transform: scale(1.08)`.
    - Lớp 2 (`.pd-carousel-img`, `z-index: 2`): `object-fit: contain`, `cursor: zoom-in`, click mở modal phóng to toàn màn hình (`openPropertyGalleryModal`).
- **Thành phần phủ trên ảnh (`z-index: 4`):**
  - Góc trên–trái (`.pd-carousel-badges`): Badge hạng tin + Sticker nổi bật.
  - Góc trên–phải (`.pd-carousel-top-right`): Bộ đếm `1 / N` (`.pd-carousel-counter`, `tabular-nums`) + Nút phóng to tròn `30×30px` (`.pd-carousel-expand`).
  - Trái / Phải giữa khung (`.pd-carousel-nav.prev` / `.next`): 2 nút tròn `38×38px`, hover đổi nền cam `#f15a22` (chỉ hiện khi `galleryList.length > 1`).
- **Dải Thumbnail Phía Dưới (`.pd-carousel-thumbs`):**
  - Hiện khi có `≥ 2` ảnh, **căn giữa theo chiều ngang** (`justify-content: center`).
  - Kích thước mỗi thumbnail: `78×54px` (Desktop) / `66×46px` (Mobile), `border-radius: 10px`, ảnh `object-fit: cover`, ảnh đang chọn sáng `opacity: 1` + viền cam (`border-color: var(--ctt-orange)`).
