# ChoThueTot.vn (Staymap) — Tài Liệu Bàn Giao Chuẩn (Handoff Spec)

- **Repository:** `https://github.com/quinguyen-design/test-AI-Staymap` (nhánh `main`)
- **Phạm vi bàn giao đã duyệt:**
  1. **Hero Map** (`.site-header-hero.hero-is-map`)
  2. **Banner VIP Đặc Quyền** (`.sv1-luxury-stage` / `#sv1CardContainer`)
  3. **Trang Đăng Tin 4 Bước** (`#postModalBackdrop`)

---

## 1. Quy Chuẩn Chung (Bắt Buộc Tuân Thủ)

- **Typography:** Font `Roboto` cho toàn bộ UI, nút, input và Leaflet map.
- **Tabluar Numerals:** Bắt buộc `font-variant-numeric: tabular-nums` trên toàn bộ giá thuê, diện tích, điện/nước, SĐT.
- **Màu thương hiệu:** Cam `#f15a22` / `#f37201`, Đen Slate `#0f172a`.
- **Nền trang (Anti-AI-Gradient):**
  - Cấm dùng nền chuyển sắc cam/vàng loang mờ (`radial-gradient` / `linear-gradient` màu kem/cam) phía sau các khối nội dung.
  - Xen kẽ sạch sẽ từ trên xuống: **Trắng (`#ffffff`) → Xám trắng (`#f4f6f9`) → Trắng (`#ffffff`) → Xám trắng (`#f4f6f9`)** phân tách bằng `border-top: 1px solid #e2e8f0`.

---

## 2. Hero Map (`.site-header-hero.hero-is-map`)

- **Vị trí code:**
  - HTML: [index.html](index.html#L54) (`<header class="site-header-hero hero-is-map" id="siteHeaderHero">`)
  - CSS: [styles.css](styles.css#L87)
  - JS: [app.js](app.js#L1443) (`initHeroMap()`)
- **Tính năng bắt buộc:**
  - Chuyển đổi 3 chế độ bản đồ: `Đường phố` / `Vệ tinh` / `Đêm`.
  - Thanh lọc loại hình trực tiếp (`Tất cả BĐS`, `Phòng trọ`, `Căn hộ, Studio`, `Nhà nguyên căn`, `Mặt bằng, VP`, `Kho xưởng`, `HomeStay / Airbnb`).
  - Ghim giá 3D trên bản đồ kèm popup xem nhanh và nút mở rộng bản đồ.
  - Thanh tìm kiếm Mega-Search 2 cột (không bị tràn khung hẹp).

---

## 3. Banner VIP Đặc Quyền (`.sv1-luxury-stage` / `#sv1CardContainer`)

- **Vị trí code:**
  - HTML: [index.html](index.html#L411)
  - JS: [app.js](app.js#L2374) (`SV1_CYLINDER`, `updateSv1LeftAndControlsOnly()`, `startSv1CylinderLoop()`, `bindSv1OrbitInteractions()`)
  - CSS: [styles.css](styles.css#L1438) và phần tinh chỉnh chuẩn cuối file ([styles.css](styles.css#L7100-L7320))
- **Quy chuẩn hình thức:**
  - **Không** hiển thị tiêu đề `"Banner Đặc Quyền"` ở phía trên.
  - **Không** khung viền cam bao ngoài (`.sv1-card-3d` dùng `background: #ffffff`, `border: none`, `border-radius: 0`, `padding: 6px 0`, ẩn `::before`).
  - **Không** `box-shadow` / `drop-shadow` trên khung tổng, thẻ xoay, ô thông số và nút bấm.
  - Khoảng cách trên gọn sát header (`padding-top: 12px` trên `.sv1-luxury-stage`).
- **Quy chuẩn chuyển động:**
  - Trục xoay 3D chạy **tuyến tính đều đặn** (`0.24 slide/giây` theo `dt`), **không điểm dừng/hãm tốc ở từng tin**.
  - **Khi đưa chuột vào thẻ ảnh (`.sv1-3d-orbit-card`):** Trục xoay **dừng hẳn lại** (`cardHoverPaused = true`) để xem ảnh/bấm thumbnail; rời chuột ra thì xoay tiếp.
  - **Phần thông tin bên trái (`.sv1-left`):** Khóa chiều cao cố định (`.sv1-loc` `min-height: 21px`, `.sv1-title` 2 dòng, `.sv1-desc` 3 dòng) để **không nhúng lên/xuống**. Chỉ dùng **1 hiệu ứng chuyển cảnh mờ duy nhất** (`opacity: 1 → ~0.22 → 1`) theo tiến trình xoay, không nhấp nháy hay nhấn lại sau khi chuyển xong.
- **Quy chuẩn bố cục cột trái (`.sv1-left`):**
  1. Badge `✦ ĐẶC QUYỀN`
  2. Địa chỉ (`.sv1-loc`)
  3. **Hàng Giá (`.sv1-price-row`):** Giá (`Triệu | Tháng`) bên trái + **3 ô `Điện · Nước · CP khác`** ngang hàng với chữ `Tháng` ở góc phải.
  4. Tiêu đề (tối đa 2 dòng) + Mô tả (tối đa 3 dòng).
  5. **Hàng Thông Số (`.sv1-specs-row`):** **3 ô `Diện tích · Phòng ngủ · WC`** bên trái (cùng kích thước tuyệt đối **`74×29px`** với 3 ô Điện/Nước/CP khác ở trên, class `.sv1-equal-pill`) + **nút `Bản Đồ`** bên phải (bo tròn `99px`, nền trắng `#ffffff`, chữ đen `#0f172a`, icon cam `var(--ctt-orange)`).
  6. **2 nút CTA (`.sv1-cta-row`):** Chia đều `1fr 1fr` bằng nhau:
     - Trái: **`Chi Tiết Tin Đặc Quyền →`** (hover chuyển sang nền đen `#0f172a`, chữ trắng `#ffffff`).
     - Phải: **Nút SĐT** (hover đổi nền hình tròn icon `.sv1-r-phone-icon` sang màu đen `#0f172a`).

---

## 4. Trang Đăng Tin 4 Bước (`#postModalBackdrop`)

- **Vị trí code:**
  - HTML: [index.html](index.html#L1062)
  - CSS: [styles.css](styles.css#L3197) và [styles.css](styles.css#L4446)
  - JS: [app.js](app.js#L3886) (`openPostModal()`, `STUDIO_STATE`, `renderStudioPreview()`)
- **Quy chuẩn chi tiết từng bước:**
  - **Bước 1 (Phân loại & Địa chỉ):** Chọn loại hình BĐS, Tỉnh/Thành, Phường/Xã, Dự án/Đường, Tên người đăng, SĐT (chuẩn 10 số VN).
  - **Bước 2 (Thông Số & Chi Phí):**
    - **Giá Thuê (`#dPrice`):** Trình bày bằng `.ctt-combo-wrap` giống hệt **Nước** và **Giặt Sấy**. Nhãn hiển thị đơn vị động `#dPriceUnitLabel` (**mặc định `(Triệu / Tháng)`**). Khi click/focus vào ô Giá Thuê, xổ danh sách `#dPriceUnitList` theo đúng thứ tự: **`Ngày` → `Tháng` (mặc định active) → `Năm`**, đồng bộ đơn vị sang phần Xem Trước (`| Ngày`, `| Tháng`, `| Năm`). Nếu giá nhập **dưới 1** (ví dụ `0.7`), tự động quy đổi sang đơn vị `đ` (`700.000đ`) trên cả nhãn diễn giải, xem trước và tin đã đăng.
    - **Tiền Cọc**, **Diện Tích**, **Phòng Ngủ**, **Nhà Vệ Sinh**, **Điện / Nước (`m³` | `Người`) / Trọn Gói CP Khác / Internet / Giặt Sấy (`Người` | `1 Lần` | `Kg` | `Phòng`) / Phí Rác / Phí Xe / Giới Hạn Người**.
  - **Bước 3 (Tiêu Đề, Mô Tả & Hình Ảnh):** Giới hạn tiêu đề 70 ký tự, nút AI gợi ý nội dung (`Click Ngay`), tải tối đa 9 ảnh & chọn ảnh bìa.
  - **Bước 4 (Chọn Gói Tin & Thanh Toán):** 6 gói tin thực (`Banner Đặc Quyền`, `TOP 1 Hiển Thị`, `TOP 2 Nổi Bật`, `TOP 3 Hiệu Quả`, `Tin Cơ Bản`, `Đăng Tin Miễn Phí`), bộ tính phí minh bạch và nạp ví VietQR/MoMo (`+11%`).
