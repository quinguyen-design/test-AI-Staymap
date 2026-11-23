# Hướng Dẫn Trình Bày Hình Ảnh — Trang Tin Chi Tiết (ChoThueTot.vn)

*(Tài liệu đặc tả phần hiển thị hình ảnh trong trang chi tiết tin đăng, trích xuất chuẩn từ mã nguồn `app.js` và `styles.css`.)*

---

## 0. Hành Vi Hiển Thị Đầu Trang Khi Click Vào Tin

- Khi click vào tin (`openPropertyDetailView(propId)`), bản đồ đầu trang (`#heroMap` cao `540px`) vẫn giữ nguyên ở đầu trang và tự động zoom đến vị trí tin đăng cùng các ghim lân cận (`updateMapPins("all", item.id)`), phía dưới là toàn bộ phần `#view-detail` (Breadcrumb, Tiêu đề, Khung ảnh chi tiết và Cột liên hệ).

---

## 1. Cấu Trúc Tổng Thể Phần Hình Ảnh (2 Thành Phần)

Khối hiển thị hình ảnh (`.pd-carousel-wrap`) gồm 2 phần xếp dọc:
1. **Khung Ảnh Chính (`.pd-carousel-stage`):** Hiển thị trọn vẹn 100% cả ảnh ngang lẫn ảnh dọc (`object-fit: contain`) trên nền mờ đồng bộ theo ảnh hiện tại.
2. **Dải Ảnh Thu Nhỏ Phía Dưới (`.pd-carousel-thumbs`):** Chỉ hiển thị khi tin có từ 2 ảnh trở lên (`galleryList.length > 1`), **căn giữa theo chiều ngang** (`justify-content: center`).

---

## 2. Quy Chuẩn Khung Ảnh Chính (`.pd-carousel-stage`)

- **Kích thước & Khung:**
  - Desktop: `width: 100%`, `height: 360px`, `border-radius: 16px`, `overflow: hidden`, `background: #0f172a`.
  - Mobile (`≤ 768px`): `height: 250px`.
- **Kỹ thuật 2 lớp ảnh (Hiển thị đủ 100% không cắt xén ảnh dọc/ngang):**
  - **Lớp 1 — Nền mờ đồng màu (`.pd-carousel-ambient`, `z-index: 1`):** Dùng chính ảnh đang xem, `object-fit: cover`, `inset: -20px`, `filter: blur(22px) brightness(0.42)`, `transform: scale(1.08)`, `pointer-events: none`.
  - **Lớp 2 — Ảnh chính sắc nét (`.pd-carousel-img`, `z-index: 2`):** `max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; cursor: zoom-in; transition: opacity 0.2s ease;`.
  - Khi bấm vào ảnh chính → mở modal phóng to toàn màn hình (`openPropertyGalleryModal(propId, idx)`).

---

## 3. Các Thành Phần Phủ Trên Khung Ảnh (`z-index: 4`)

1. **Góc trên – trái (`.pd-carousel-badges`, `top: 12px; left: 12px;`):**
   - Hiển thị Badge Hạng Tin (`.lc-vip-tag`, ví dụ `ĐẶC QUYỀN`, `TOP 1`,...) và Sticker nổi bật (`.sticker-pill`, nếu có), khoảng cách `gap: 6px`.
2. **Góc trên – phải (`.pd-carousel-top-right`, `top: 12px; right: 12px;`):**
   - **Bộ đếm số ảnh (`.pd-carousel-counter`):** Dạng pill bo tròn `99px`, nền tối mờ `rgba(15, 23, 42, 0.78)` + `backdrop-filter: blur(6px)`, chữ trắng `11.5px`, `font-variant-numeric: tabular-nums` (ví dụ `1 / 6`).
   - **Nút phóng to (`.pd-carousel-expand`):** Hình tròn `30×30px`, nền `rgba(15, 23, 42, 0.78)`, icon expand `12px`, bấm để mở modal xem ảnh lớn.
3. **2 Nút Điều Hướng Trái / Phải (`.pd-carousel-nav.prev` / `.next`):**
   - Chỉ hiển thị khi có từ 2 ảnh trở lên (`galleryList.length > 1`).
   - Căn giữa theo chiều dọc (`top: 50%; transform: translateY(-50%)`), cách mép trái/phải `12px`.
   - Hình tròn `38×38px`, nền `rgba(15, 23, 42, 0.72)`, viền `rgba(255, 255, 255, 0.25)`, icon trắng `15px`.
   - Hover: đổi sang nền cam thương hiệu (`var(--ctt-orange)` / `#f15a22`).

---

## 4. Dải Thumbnail Phía Dưới (`.pd-carousel-thumbs`)

- **Bố cục:** `display: flex; justify-content: center; gap: 8px; overflow-x: auto; margin-top: 10px;`
- **Mỗi ô thumbnail (`.pd-carousel-thumb`):**
  - Desktop: `78×54px`, `border-radius: 10px`, `border: 2px solid transparent`, `opacity: 0.68`, ảnh bên trong `object-fit: cover`.
  - Mobile (`≤ 768px`): `66×46px`.
  - Trạng thái đang chọn (`.active`) hoặc hover: `opacity: 1`, viền cam `border-color: var(--ctt-orange)`.
- **Tương tác đồng bộ khi chuyển ảnh (`stepDetailCarousel` / `goToDetailCarousel`):**
  - Cập nhật đồng thời `src` của cả `#pdCarouselMainImg` và lớp nền mờ `#pdCarouselAmbient`.
  - Cập nhật bộ đếm `#pdCarouselCounter` (`idx + 1 / total`).
  - Bật class `.active` cho thumbnail tương ứng.

---

## 5. Vị Trí Tham Chiếu Trong Mã Nguồn

- **HTML Render (JS):** `openPropertyDetailView()` trong [app.js](app.js#L3544-L3577)
- **CSS:** `.pd-carousel-*` trong [styles.css](styles.css#L5670-L5820) và căn giữa thumbnail ở [styles.css](styles.css#L7264-L7267)
