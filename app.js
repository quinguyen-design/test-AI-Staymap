/* ==========================================================================
   CHOTHUETOT.VN — v3.0 NEXT-GEN LUXURY & TECH ENGINE (app.js)
   Authentic ChoThueTot Data, Real MapTiler Interactive Hero Map,
   3D VIP Exclusive Banner Slider (.sv1), Spotlight/Featured/Prime Grids,
   6-Tier Pricing & VietQR Wallet + Smart Post Listing Modal
   ========================================================================== */

function formatPhone433(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 10)}`;
  }
  if (digits.length === 11) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 11)}`;
  }
  return String(raw || "").trim() || "0906 344 877";
}

// 1. BANNER ĐẶC QUYỀN (.sv1) — 10 EXCLUSIVE VIP SHOWCASE SLIDES
const VIP_EXCLUSIVE_SLIDES = [
  {
    id: 9999,
    slug: "/cho-thue-can-ho-chung-cu-p-an-khanh-tp-ho-chi-minh/can-ho-2pn-masteri-thao-dien-full-noi-that-cao-cap-view-th-gia-14-5-trieu-id9999",
    title: "CĂN HỘ 2PN MASTERI THẢO ĐIỀN FULL NỘI THẤT CAO CẤP — VIEW SÔNG SÀI GÒN",
    price: "14.5 Triệu",
    unit: "| Tháng",
    location: "Phường An Khánh (Thủ Đức), TP. Hồ Chí Minh",
    desc: "Căn hộ 2PN – 2WC tầng 12 hướng Đông Nam thoáng mát, đầy đủ nội thất cao cấp (Sofa da, Smart TV, máy giặt sấy riêng). 2 phút ra Metro An Phú & Vincom Mega Mall.",
    area: "72m²",
    beds: "2 PN",
    baths: "2 WC",
    elec: "3.8k/kWh",
    water: "25k/m³",
    phone: "0908 686 999",
    phoneMasked: "0908 686 ***",
    lat: 10.8022,
    lng: 106.7418,
    photos: [
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp"
    ]
  },
  {
    id: 2078,
    slug: "/cho-thue-phong-tro-phuong-cau-kieu/kiot-cho-thue-khu-dan-cu-sam-uat-gan-cho-2078",
    title: "KIOT & STUDIO ĐẶC QUYỀN KHU DÂN CƯ SẦM UẤT GẦN CHỢ PHÚ NHUẬN — PHAN XÍCH LONG",
    price: "7.6 Triệu",
    unit: "| Tháng",
    location: "Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh",
    desc: "Không gian Kiot kết hợp Studio cao cấp ngay trục sầm uất Phan Xích Long – Cầu Kiệu. Mặt tiền thoáng rộng, lối đi riêng 24/24, trang bị sẵn nội thất chuẩn khách sạn, khóa vân tay 2 lớp, PCCC tự động.",
    area: "38m²",
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.500đ/kWh",
    water: "100k/người",
    phone: "0906 344 877",
    phoneMasked: "0906 344 ***",
    lat: 10.7982,
    lng: 106.6845,
    photos: [
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp"
    ]
  },
  {
    id: 4170,
    slug: "/cho-thue-can-ho-chung-cu-phuong-nhieu-loc/phong-cao-cap-30m2-full-tien-nghi-gan-cau-le-van-sy-4170",
    title: "PENTHOUSE MINI & CĂN HỘ DỊCH VỤ BAN CÔNG VIEW KÊNH NHIÊU LỘC — LÊ VĂN SỸ",
    price: "6.5 Triệu",
    unit: "| Tháng",
    location: "Phường Nhiêu Lộc (Quận 3), TP. Hồ Chí Minh",
    desc: "Căn hộ dịch vụ 30m² thiết kế Indochine hiện đại, ban công đón gió mát rượi ngay cầu Lê Văn Sỹ. Full nội thất cao cấp: Smart TV 55 inch, tủ lạnh Inverter, máy giặt sấy riêng, thang máy tốc độ cao.",
    area: "30m²",
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.800đ/kWh",
    water: "100k/người",
    phone: "0909 882 456",
    phoneMasked: "0909 882 ***",
    lat: 10.7875,
    lng: 106.6789,
    photos: [
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp"
    ]
  },
  {
    id: 4208,
    slug: "/cho-thue-bai-dat-kho-xuong-phuong-tan-hung/cho-thue-kho-dien-tich-khung-500m-ngay-tan-quy-quan-7-4208",
    title: "TÒA NHÀ SHOWROOM & KHO XƯỞNG CHUẨN QUỐC TẾ 500M² NGAY TÂN HƯNG — QUẬN 7",
    price: "45 Triệu",
    unit: "| Tháng",
    location: "Phường Tân Hưng (Quận 7), TP. Hồ Chí Minh",
    desc: "Mặt bằng kho xưởng & showroom diện tích khủng 500m² ngay trung tâm Tân Quy – Tân Hưng Quận 7. Trần cao 8.5m, nền bê tông chịu lực, điện 3 pha hạ trạm riêng, đường container 40 feet ra vào 24/24.",
    area: "500m²",
    beds: "2 VP",
    baths: "3 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    phone: "0918 779 333",
    phoneMasked: "0918 779 ***",
    lat: 10.7438,
    lng: 106.7052,
    photos: [
      "https://chothuetot.vn/assets/images/properties/album_1791022210_7592.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791022894_6188.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791021309_7046.webp"
    ]
  },
  {
    id: 4169,
    slug: "/cho-thue-can-ho-chung-cu-p-cau-kieu-tp-ho-chi-minh/phong-studio-ban-cong-thoang-full-noi-that-tai-phan-xich-long-id4169",
    title: "STUDIO BAN CÔNG THOÁNG FULL NỘI THẤT TRUNG TÂM PHAN XÍCH LONG",
    price: "5.8 Triệu",
    unit: "| Tháng",
    location: "Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh",
    desc: "Phòng Studio 32m² ban công rộng đón nắng tự nhiên, hẻm xe hơi thông thoáng ngay khu ẩm thực Phan Xích Long. Giờ giấc tự do, bảo vệ 24/7, thang máy tốc độ cao.",
    area: "32m²",
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.8k/kWh",
    water: "100k/Tháng",
    phone: "0906 344 877",
    phoneMasked: "0906 344 ***",
    lat: 10.7915,
    lng: 106.7045,
    photos: [
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp"
    ]
  },
  {
    id: 1117,
    slug: "/cho-thue-nha-nguyen-can-1117",
    title: "NHÀ NGUYÊN CĂN MẶT TIỀN 3 TẦNG SÂN VƯỜN RỘNG — PHÙ HỢP Ở & LÀM VĂN PHÒNG",
    price: "22 Triệu",
    unit: "| Tháng",
    location: "Phường Thạnh Mỹ Tây (Bình Thạnh), TP. Hồ Chí Minh",
    desc: "Nhà nguyên căn 1 trệt 2 lầu thiết kế hiện đại, sân để được ô tô và 10 xe máy. Gần Landmark 81, cầu Sài Gòn, thuận tiện làm văn phòng công ty, studio chụp ảnh hoặc gia đình đông thành viên.",
    area: "120m²",
    beds: "4 PN",
    baths: "4 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    phone: "0933 551 888",
    phoneMasked: "0933 551 ***",
    lat: 10.7991,
    lng: 106.7182,
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4154,
    slug: "/cho-thue-can-ho-chung-cu-4154",
    title: "DUPLEX FULL KÍNH PANORAMA VIEW CÔNG VIÊN — NỘI THẤT PHONG CÁCH BẮC ÂU",
    price: "9.2 Triệu",
    unit: "| Tháng",
    location: "Phường Tân Định (Quận 1), TP. Hồ Chí Minh",
    desc: "Căn hộ Duplex trần cao 4.2m cửa kính tràn viền cực sáng, cách công viên Lê Văn Tám chỉ 200m. Trang bị bếp từ, máy hút mùi, máy giặt riêng trong phòng, dọn vào ở ngay.",
    area: "45m²",
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.8k/kWh",
    water: "120k/Người",
    phone: "0903 712 456",
    phoneMasked: "0903 712 ***",
    lat: 10.7896,
    lng: 106.6914,
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 1120,
    slug: "/cho-thue-mat-bang-van-phong-1120",
    title: "MẶT BẰNG KINH DOANH & VĂN PHÒNG ĐẠI DIỆN GÓC 2 MẶT TIỀN SẦM UẤT",
    price: "28 Triệu",
    unit: "| Tháng",
    location: "Phường Bến Thành (Quận 1), TP. Hồ Chí Minh",
    desc: "Mặt bằng góc 2 mặt tiền vỉa hè rộng 6m, lượng khách vãng lai cực lớn, sẵn hệ thống đèn ray, máy lạnh âm trần và cửa kính cường lực. Phù hợp showroom, cafe flagship, spa cao cấp.",
    area: "95m²",
    beds: "1 Sảnh",
    baths: "2 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    phone: "0912 440 668",
    phoneMasked: "0912 440 ***",
    lat: 10.7725,
    lng: 106.6981,
    photos: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4209,
    slug: "/cho-thue-homestay-airbnb-4209",
    title: "HOMESTAY & SERVICED APARTMENT PHONG CÁCH RESORT — CÓ HỒ BƠI SÂN THƯỢNG",
    price: "11.5 Triệu",
    unit: "| Tháng",
    location: "Phường Thảo Điền (Thủ Đức), TP. Hồ Chí Minh",
    desc: "Không gian nghỉ dưỡng giữa lòng Thảo Điền với hồ bơi vô cực tầng thượng, phòng gym miễn phí, dọn phòng 2 lần/tuần. Hỗ trợ thuê ngắn hạn hoặc dài hạn linh hoạt.",
    area: "52m²",
    beds: "1 PN",
    baths: "1 WC",
    elec: "4.0k/kWh",
    water: "Miễn phí",
    phone: "0988 901 234",
    phoneMasked: "0988 901 ***",
    lat: 10.8045,
    lng: 106.7332,
    photos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2078,
    slug: "/cho-thue-phong-tro-hanoi-vip-10",
    title: "CĂN HỘ STUDIO BAN CÔNG HỒ TÂY — NỘI THẤT GỖ SỒI TỰ NHIÊN CAO CẤP",
    price: "8.8 Triệu",
    unit: "| Tháng",
    location: "Phường Quảng An (Tây Hồ), TP. Hà Nội",
    desc: "Studio 42m² cách mặt Hồ Tây chỉ 100m, ban công thoáng nhìn ra vườn cây xanh mát. Nội thất gỗ sồi tự nhiên, bồn tắm nằm thư giãn, thang máy & bảo vệ 24/24.",
    area: "42m²",
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "100k/Người",
    phone: "0904 667 890",
    phoneMasked: "0904 667 ***",
    lat: 21.0645,
    lng: 105.8225,
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=80",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp"
    ]
  }
];

// 2. AUTHENTIC LISTINGS FOR SPOTLIGHT, FEATURED, PRIME & CATEGORIES
const PROPERTIES = [
  // --- MẪU BÀI ĐĂNG ĐẦY ĐỦ 100% THÔNG SỐ (ID #9999) ---
  {
    id: 9999,
    tier: "spotlight",
    mapTier: "banner",
    zoneId: 1,
    vipBadge: "✦ ĐẶC QUYỀN",
    badge: "✦ ĐẶC QUYỀN",
    badgeClass: "tag-dacquyen",
    sticker: "hot",
    category: "can-ho-chung-cu",
    categoryLabel: "Căn Hộ Chung Cư",
    project: "Masteri Thảo Điền",
    title: "Căn hộ 2PN Masteri Thảo Điền full nội thất cao cấp, view thoáng mát",
    price: 14.5,
    priceMillion: 14.5,
    priceText: "14.5 Triệu",
    deposit: "2 Tháng",
    ward: "P. An Khánh",
    city: "TP. Hồ Chí Minh",
    fullAddress: "159 Xa Lộ Hà Nội, Phường An Khánh (Thủ Đức), TP. Hồ Chí Minh",
    area: 72,
    beds: "2 PN",
    baths: "2 WC",
    elec: "3.8k/kWh",
    water: "25k/m³",
    otherCost: "200k",
    internet: "250k",
    laundry: "50k/1 Lần",
    trash: "30k",
    parking: "120k",
    maxPeople: "4",
    extraPerson: "300k",
    furniture: "Đầy đủ cao cấp",
    floors: "Tầng 12",
    direction: "Đông Nam",
    frontageRoad: "30 m²",
    roadAccess: "12 m²",
    description: "Chính chủ cho thuê căn hộ 2 phòng ngủ - 2 WC tại dự án Masteri Thảo Điền, tầng 12 thoáng mát, hướng Đông Nam đón gió tự nhiên.\n\n• Nội thất đầy đủ cao cấp: Sofa da, Smart TV, tủ lạnh Inverter, máy giặt sấy riêng, bếp từ & máy hút mùi, giường nệm cao cấp.\n• Di chuyển thuận tiện: 2 phút ra ga Metro An Phú, Vincom Mega Mall ngay dưới chân tòa nhà.\n• Minh bạch chi phí điện nước, quản lý, gửi xe ngay trong hợp đồng thuê dài hạn.",
    utilities: [
      "Trường học (BIS / ĐH Hutech)",
      "Chợ / Siêu Thị",
      "Bệnh Viện / Y Tế",
      "Công Viên",
      "Xe Bus",
      "Bank / ATM"
    ],
    services: [
      "Nhà Xe / Hầm Xe Rộng",
      "Khu Giặt / Phơi / Sấy",
      "Bảo Vệ / Camera An Ninh",
      "Hệ Thống PCCC",
      "Thang Máy",
      "Quản Lý / Kiểm Tra Khu Vực Chung"
    ],
    lat: 10.8022,
    lng: 106.7418,
    verified: true,
    isVipPin: true,
    phone: "0908 686 999",
    host: "Chính chủ Ngọc Hân",
    image: "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&auto=format&fit=crop&q=80"
    ]
  },
  // --- SPOTLIGHT TIER (TOP 1 HIỂN THỊ) ---
  {
    id: 2078,
    tier: "spotlight",
    badge: "KIM CƯƠNG • TOP 1",
    badgeClass: "tag-vip1",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "Kiot & Phòng Studio cao cấp khu dân cư sầm uất gần chợ Phú Nhuận",
    price: 7.6,
    priceText: "7.6 Triệu",
    ward: "P. Cầu Kiệu",
    city: "TP. Hồ Chí Minh",
    fullAddress: "142 Phan Xích Long, Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh",
    area: 38,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "100k/Tháng",
    deposit: "1 tháng",
    lat: 10.7995,
    lng: 106.6825,
    verified: true,
    isVipPin: true,
    phone: "0906 344 877",
    host: "Chính chủ Minh Quân",
    image: "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp"
    ]
  },
  {
    id: 4169,
    tier: "spotlight",
    badge: "SPOTLIGHT • VIP 1",
    badgeClass: "tag-vip1",
    category: "can-ho-chung-cu",
    categoryLabel: "Căn hộ, chung cư",
    title: "PHÒNG STUDIO BAN CÔNG THOÁNG FULL NỘI THẤT TẠI PHAN XÍCH LONG",
    price: 5.8,
    priceText: "5.8 Triệu",
    ward: "P. Cầu Kiệu",
    city: "TP. Hồ Chí Minh",
    fullAddress: "88 Hoa Phượng, Phường Cầu Kiệu, TP. Hồ Chí Minh",
    area: 32,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.8k/kWh",
    water: "100k/Tháng",
    deposit: "1 tháng",
    lat: 10.7915,
    lng: 106.7045,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Hệ thống Căn hộ Q-House",
    image: "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp"
    ]
  },
  {
    id: 4170,
    tier: "spotlight",
    badge: "SPOTLIGHT • VIP 1",
    badgeClass: "tag-vip1",
    category: "can-ho-chung-cu",
    categoryLabel: "Căn hộ, chung cư",
    title: "PHÒNG CAO CẤP 30m² FULL TIỆN NGHI GẦN CẦU LÊ VĂN SỸ",
    price: 6.5,
    priceText: "6.5 Triệu",
    ward: "P. Nhiêu Lộc",
    city: "TP. Hồ Chí Minh",
    fullAddress: "245 Lê Văn Sỹ, Phường Nhiêu Lộc (Quận 3), TP. Hồ Chí Minh",
    area: 30,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.8k/kWh",
    water: "100k/Tháng",
    deposit: "1 tháng",
    lat: 10.7835,
    lng: 106.6745,
    verified: true,
    isVipPin: false,
    phone: "0909 882 456",
    host: "Hoàng Gia Serviced Apt",
    image: "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp"
    ]
  },
  {
    id: 1117,
    tier: "spotlight",
    badge: "SPOTLIGHT • VIP 1",
    badgeClass: "tag-vip1",
    category: "nha-o",
    categoryLabel: "Nhà ở",
    title: "Chính chủ cho thuê nhà nguyên căn 1 trệt 2 lầu – Full nội thất mới 100%",
    price: 12.0,
    priceText: "12 Triệu",
    ward: "P. An Đông",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đường Trần Phú, Phường An Đông (Quận 5), TP. Hồ Chí Minh",
    area: 68,
    beds: "3 PN",
    baths: "3 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.7625,
    lng: 106.6685,
    verified: true,
    isVipPin: false,
    phone: "0912 554 990",
    host: "Chính chủ Cô Lan",
    image: "https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp"
    ]
  },
  {
    id: 4154,
    tier: "spotlight",
    badge: "SPOTLIGHT • HOT",
    badgeClass: "tag-vip1",
    category: "can-ho-chung-cu",
    categoryLabel: "Căn hộ, chung cư",
    title: "Khai trương 30P Studio ban công thoáng mát, Full nội thất mới tinh",
    price: 5.2,
    priceText: "5.2 Triệu",
    ward: "Xã Nhà Bè",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đường Nguyễn Hữu Thọ, Xã Nhà Bè, TP. Hồ Chí Minh",
    area: 30,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "100k/Tháng",
    deposit: "1 tháng",
    lat: 10.7124,
    lng: 106.7042,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Sunrise Apartment",
    image: "https://chothuetot.vn/assets/images/properties/album_1791013825_7889.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791013825_7889.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp"
    ]
  },
  {
    id: 1120,
    tier: "spotlight",
    badge: "SPOTLIGHT • VIP",
    badgeClass: "tag-vip1",
    category: "nha-o",
    categoryLabel: "Nhà ở",
    title: "Nhà thuê nguyên căn Nguyễn Oanh rộng rãi, vỉa hè 6m tiện mở Văn phòng",
    price: 14.0,
    priceText: "14 Triệu",
    ward: "P. Hạnh Thông",
    city: "TP. Hồ Chí Minh",
    fullAddress: "252 Nguyễn Oanh, Phường Hạnh Thông (Gò Vấp), TP. Hồ Chí Minh",
    area: 85,
    beds: "4 PN",
    baths: "3 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.8125,
    lng: 106.6785,
    verified: true,
    isVipPin: false,
    phone: "0903 711 288",
    host: "Anh Tuấn Chính Chủ",
    image: "https://chothuetot.vn/assets/images/properties/album_1791011017_2480.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791011017_2480.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp"
    ]
  },
  {
    id: 4209,
    tier: "spotlight",
    badge: "SPOTLIGHT • VIP",
    badgeClass: "tag-vip1",
    category: "mat-bang-van-phong",
    categoryLabel: "Mặt bằng, văn phòng",
    title: "Cho thuê mặt bằng kinh doanh & Showroom góc 2 mặt tiền - Chính chủ",
    price: 18.5,
    priceText: "18.5 Triệu",
    ward: "P. Tân Sơn Nhất",
    city: "TP. Hồ Chí Minh",
    fullAddress: "108 Cộng Hòa, Phường Tân Sơn Nhất (Tân Bình), TP. Hồ Chí Minh",
    area: 110,
    beds: "2 VP",
    baths: "2 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.8025,
    lng: 106.6515,
    verified: true,
    isVipPin: true,
    phone: "0906 344 877",
    host: "BĐS Thương Mại Sài Gòn",
    image: "https://chothuetot.vn/assets/images/properties/album_1791022806_6372.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791022806_6372.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791022723_3399.webp"
    ]
  },
  {
    id: 4208,
    tier: "spotlight",
    badge: "SPOTLIGHT • VIP",
    badgeClass: "tag-vip1",
    category: "bai-dat-kho-xuong",
    categoryLabel: "Bãi, Đất, Kho, Xưởng",
    title: "Cho thuê kho diện tích khủng 500m² ngay Tân Quy - Tân Hưng Quận 7",
    price: 45.0,
    priceText: "45 Triệu",
    ward: "P. Tân Hưng",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đường Nguyễn Thị Thập, Phường Tân Hưng (Quận 7), TP. Hồ Chí Minh",
    area: 500,
    beds: "2 VP",
    baths: "2 WC",
    elec: "Điện 3 pha",
    water: "Nhà nước",
    deposit: "3 tháng",
    lat: 10.7685,
    lng: 106.7125,
    verified: true,
    isVipPin: true,
    phone: "0918 779 333",
    host: "Kho Vận Nam Sài Gòn",
    image: "https://chothuetot.vn/assets/images/properties/album_1791022210_7592.webp",
    gallery: [
      "https://chothuetot.vn/assets/images/properties/album_1791022210_7592.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791022894_6188.webp"
    ]
  },

  // --- FEATURED TIER (TOP 2 NỔI BẬT) ---
  {
    id: 4165,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "Cho thuê Phòng có máy lạnh, ban công cách trường ĐH Công Thương 300m",
    price: 2.8,
    priceText: "2.8 Triệu",
    ward: "P. Tân Sơn Nhì",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Lê Trọng Tấn, Phường Tân Sơn Nhì (Tân Phú), TP. Hồ Chí Minh",
    area: 23,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "80k/Tháng",
    deposit: "1 tháng",
    lat: 10.8065,
    lng: 106.6289,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Nhà Trọ Sinh Viên Xanh",
    image: "https://chothuetot.vn/assets/images/properties/album_1791010247_4933.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791010247_4933.webp"]
  },
  {
    id: 4178,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "Phòng cho thuê quận Bình Thạnh, Chu Văn An có cửa sổ lớn thoáng mát",
    price: 4.0,
    priceText: "4 Triệu",
    ward: "P. Gia Định",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Chu Văn An, Phường Gia Định (Bình Thạnh), TP. Hồ Chí Minh",
    area: 24,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "100k/Tháng",
    deposit: "1 tháng",
    lat: 10.8112,
    lng: 106.7014,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Bình Thạnh Home",
    image: "https://chothuetot.vn/assets/images/properties/album_1791011712_1979.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791011712_1979.webp"]
  },
  {
    id: 4179,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "PHÒNG BAN CÔNG NGAY ĐH KINH TẾ ĐỐI NGOẠI, ĐỖ XUÂN HỢP, YÊN TĨNH 30M²",
    price: 4.0,
    priceText: "4 Triệu",
    ward: "P. Phước Long",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đỗ Xuân Hợp, Phường Phước Long (TP. Thủ Đức), TP. Hồ Chí Minh",
    area: 30,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "90k/Tháng",
    deposit: "1 tháng",
    lat: 10.8245,
    lng: 106.7712,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Thủ Đức Residence",
    image: "https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp"]
  },
  {
    id: 4197,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "PHÒNG MỚI XÂY THOÁNG NGAY ĐƯỜNG LÊ NGÃ - GIỜ GIẤC TỰ DO, VÂN TAY",
    price: 3.5,
    priceText: "3.5 Triệu",
    ward: "P. Tân Phú",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đường Lê Ngã, Phường Tân Phú, TP. Hồ Chí Minh",
    area: 22,
    beds: "Gác lửng",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "90k/Tháng",
    deposit: "1 tháng",
    lat: 10.7782,
    lng: 106.6345,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Chính chủ Anh Khôi",
    image: "https://chothuetot.vn/assets/images/properties/album_1791013825_7889.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791013825_7889.webp"]
  },
  {
    id: 8931,
    tier: "featured",
    badge: "FEATURED • HÀ NỘI",
    badgeClass: "tag-vip2",
    category: "can-ho-chung-cu",
    categoryLabel: "Căn hộ, chung cư",
    title: "Cho thuê căn hộ mini & Studio đường Võ Chí Công - Tây Hồ, Full đồ mới",
    price: 4.8,
    priceText: "4.8 Triệu",
    ward: "P. Nghĩa Đô",
    city: "TP. Hà Nội",
    fullAddress: "Ngõ 45 Đường Võ Chí Công, Phường Nghĩa Đô (Cầu Giấy), Hà Nội",
    area: 32,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.8k/kWh",
    water: "100k/Tháng",
    deposit: "1 tháng",
    lat: 21.0433,
    lng: 105.7944,
    verified: true,
    isVipPin: true,
    phone: "0988 712 345",
    host: "Tây Hồ Serviced Home",
    image: "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp"]
  },
  {
    id: 1122,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "nha-o",
    categoryLabel: "Nhà ở",
    title: "Nhà nguyên căn full NỘI THẤT gần Công viên Gia Định, hẻm xe hơi",
    price: 8.5,
    priceText: "8.5 Triệu",
    ward: "P. Hạnh Thông",
    city: "TP. Hồ Chí Minh",
    fullAddress: "343/1 Nguyễn Văn Công, Phường Hạnh Thông (Gò Vấp), TP. Hồ Chí Minh",
    area: 54,
    beds: "2 PN",
    baths: "2 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.8188,
    lng: 106.6763,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Chính chủ Gia Định",
    image: "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp"]
  },
  {
    id: 4210,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "mat-bang-van-phong",
    categoryLabel: "Mặt bằng, văn phòng",
    title: "Cho thuê Shophouse & Văn phòng đại diện Quận Tân Phú - TP Hồ Chí Minh",
    price: 15.0,
    priceText: "15 Triệu",
    ward: "P. Tân Phú",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Lũy Bán Bích, Phường Tân Phú, TP. Hồ Chí Minh",
    area: 130,
    beds: "2 VP",
    baths: "2 WC",
    elec: "Nhà nước",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.7852,
    lng: 106.6311,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Tân Phú Commercial",
    image: "https://chothuetot.vn/assets/images/properties/album_1791022806_6372.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791022806_6372.webp"]
  },
  {
    id: 4172,
    tier: "featured",
    badge: "FEATURED • TOP 2",
    badgeClass: "tag-vip2",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "Phòng trọ Gò Vấp đẹp mới xây sát ĐH Công Nghiệp, Phạm Văn Đồng",
    price: 3.2,
    priceText: "3.2 Triệu",
    ward: "P. An Nhơn",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Nguyễn Văn Nghi, Phường An Nhơn (Gò Vấp), TP. Hồ Chí Minh",
    area: 22,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "90k/Tháng",
    deposit: "1 tháng",
    lat: 10.8265,
    lng: 106.6889,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Gò Vấp Cozy Room",
    image: "https://chothuetot.vn/assets/images/properties/album_1791011017_2480.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791011017_2480.webp"]
  },

  // --- PRIME TIER (TOP 3 HIỆU QUẢ) ---
  {
    id: 4202,
    tier: "prime",
    badge: "PRIME • TOP 3",
    badgeClass: "tag-vip3",
    sticker: "hot",
    category: "bai-dat-kho-xuong",
    categoryLabel: "Bãi, Đất, Kho, Xưởng",
    title: "Cho thuê kho xưởng mặt tiền Thạnh Xuân - Quận 12 diện tích 600m²",
    price: 22.0,
    priceText: "22 Triệu",
    ward: "P. Thới An",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Hà Huy Giáp, Phường Thới An (Quận 12), TP. Hồ Chí Minh",
    area: 600,
    beds: "1 VP",
    baths: "2 WC",
    elec: "Điện 3 pha",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.8755,
    lng: 106.6624,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Kho Xưởng Quận 12",
    image: "https://chothuetot.vn/assets/images/properties/album_1791021309_7046.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791021309_7046.webp"]
  },
  {
    id: 4173,
    tier: "prime",
    badge: "PRIME • TOP 3",
    badgeClass: "tag-vip3",
    category: "phong-tro",
    categoryLabel: "Phòng trọ",
    title: "PHÒNG CHO THUÊ 3/71/5/1 THÀNH THÁI, P.14, Q.10 (Phường Diên Hồng)",
    price: 2.6,
    priceText: "2.6 Triệu",
    ward: "P. Diên Hồng",
    city: "TP. Hồ Chí Minh",
    fullAddress: "3/71 Thành Thái, Phường Diên Hồng (Quận 10), TP. Hồ Chí Minh",
    area: 18,
    beds: "1 PN",
    baths: "1 WC",
    elec: "3.5k/kWh",
    water: "80k/Tháng",
    deposit: "1 tháng",
    lat: 10.7712,
    lng: 106.6658,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Chính chủ Thành Thái",
    image: "https://chothuetot.vn/assets/images/properties/album_1791011107_5155.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791011107_5155.webp"]
  },
  {
    id: 4205,
    tier: "prime",
    badge: "PRIME • TOP 3",
    badgeClass: "tag-vip3",
    sticker: "hot",
    category: "bai-dat-kho-xuong",
    categoryLabel: "Bãi, Đất, Kho, Xưởng",
    title: "100k/m²_còn nhiều DT_cho thuê kho xưởng Âu Cơ quận Tân Bình",
    price: 20.0,
    priceText: "20 Triệu",
    ward: "P. Tân Bình",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đường Âu Cơ, Phường Tân Bình, TP. Hồ Chí Minh",
    area: 200,
    beds: "1 VP",
    baths: "1 WC",
    elec: "Điện 3 pha",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.7895,
    lng: 106.6412,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Kho Vận Âu Cơ",
    image: "https://chothuetot.vn/assets/images/properties/album_1791021724_2260.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791021724_2260.webp"]
  },
  {
    id: 4211,
    tier: "prime",
    badge: "PRIME • TOP 3",
    badgeClass: "tag-vip3",
    sticker: "hot",
    category: "bai-dat-kho-xuong",
    categoryLabel: "Bãi, Đất, Kho, Xưởng",
    title: "Cho thuê kho xưởng Phan Anh sát Tân Phú Tô Hiệu_8x22m trần cao 7m",
    price: 21.0,
    priceText: "21 Triệu",
    ward: "P. Bình Trị Đông",
    city: "TP. Hồ Chí Minh",
    fullAddress: "Đường Phan Anh, Phường Bình Trị Đông (Bình Tân), TP. Hồ Chí Minh",
    area: 176,
    beds: "1 VP",
    baths: "2 WC",
    elec: "Điện 3 pha",
    water: "Nhà nước",
    deposit: "2 tháng",
    lat: 10.7689,
    lng: 106.6215,
    verified: true,
    isVipPin: false,
    phone: "0906 344 877",
    host: "Kho Xưởng Phan Anh",
    image: "https://chothuetot.vn/assets/images/properties/album_1791022894_6188.webp",
    gallery: ["https://chothuetot.vn/assets/images/properties/album_1791022894_6188.webp"]
  }
];

// 3. REAL NEWS ARTICLES FROM CHOTHUETOT.VN
const NEWS_ARTICLES = [
  {
    id: 1,
    cat: "noi-bat",
    catLabel: "Cẩm nang thuê nhà",
    title: "Cẩm Nang Thuê Nhà Cuối Năm 2026: Né Bẫy Cọc Ảo, Minh Bạch Điện Nước Định Mức 4 Người & Checklist An Toàn PCCC",
    excerpt: "Tổng hợp 4 chiêu lừa đảo thuê phòng trọ, căn hộ, mặt bằng cuối năm 2026 và checklist 5 bước tự vệ: kiểm tra pháp lý chính chủ, hợp đồng điện nước...",
    img: "https://chothuetot.vn/assets/images/news/news_1794744232_3702.webp"
  },
  {
    id: 2,
    cat: "thi-truong",
    catLabel: "Thị trường TOD",
    title: "Mở Rộng Đô Thị TOD Cuối 2026: Từ Trường Thọ 63 ha, Bà Điểm 11 Ga Metro Đến Mặt Bằng Giá Thuê Dọc 3 Tuyến Đường Sắt Đô Thị",
    excerpt: "TP.HCM xúc tiến TOD Trường Thọ 63 ha, phân khu Bà Điểm 11 ga Metro hướng tới 255 km năm 2030; tác động trực tiếp đến nguồn cung căn hộ cho thuê...",
    img: "https://chothuetot.vn/assets/images/news/news_1794719022_8194.webp"
  },
  {
    id: 3,
    cat: "dau-tu",
    catLabel: "Thị trường & Đầu tư",
    title: "Đấu Giá 3.790 Căn Hộ Thủ Thiêm 18.253 Tỷ & Nhịp Chững Thứ Cấp Cuối Năm 2026: Người Thuê Nhà Hưởng Lợi Gì?",
    excerpt: "TP.HCM đấu giá 3.790 căn hộ Bình Khánh – Thủ Thiêm khởi điểm 18.253 tỷ đồng; nguồn cung căn hộ dịch vụ và chung cư cho thuê ổn định giá...",
    img: "https://chothuetot.vn/assets/images/news/news_1794704745_5015.webp"
  },
  {
    id: 4,
    cat: "phap-ly",
    catLabel: "Pháp lý VNeID",
    title: "Đăng Ký Tạm Trú Thuê Trọ Qua VNeID 2026: Hợp Đồng Có Cần Công Chứng & Mức Phạt Mới Nhất",
    excerpt: "Hướng dẫn đăng ký tạm trú thuê trọ qua VNeID mức 2 trong 3 ngày làm việc, quy định mới nhất dành cho người thuê và chủ nhà trọ...",
    img: "https://chothuetot.vn/assets/images/news/news_1794571351_1028.webp"
  }
];

// 4. REAL 6 PRICING TIERS FROM /bao-gia.html
const PRICING_TIERS = [
  {
    zoneId: 1,
    name: "Banner Đặc Quyền",
    tag: "Đặc Quyền • 50.000đ/ngày",
    desc: "Đẳng cấp chuyên nghiệp — Vị trí Slide 3D độc quyền ngay đầu trang chủ (.sv1)",
    icon: "fa-crown",
    cardClass: "super-vip",
    badge: "✦ ĐẶC QUYỀN",
    packages: [
      { days: 3, price: 150000, save: "" },
      { days: 7, price: 332500, save: "-5%" },
      { days: 15, price: 675000, save: "-10%" },
      { days: 30, price: 1200000, save: "-20%" }
    ],
    features: [
      "Hiển thị: Slide 3D Banner Đặc Quyền Trang Chủ & Top 1 Spotlight",
      "Bản đồ 3D: Ghim Vương Miện Vàng Kim nổi bật nhất",
      "Huy hiệu: ✦ ĐẶC QUYỀN (Nền đen chữ cam thương hiệu)",
      "Nhãn dán: Tùy chọn Giảm Sâu / HOT / Ưu Đãi (+1.000đ/ngày)",
      "SEO ưu tiên: Index tự động SEO Vị trí & SEO Giá thành",
      "Sửa tin: Miễn phí 3 lần đầu • Duyệt tự động tức thì"
    ]
  },
  {
    zoneId: 2,
    name: "TOP 1 Hiển Thị",
    tag: "VIP 1 • 35.000đ/ngày",
    desc: "Dành cho Môi giới chuyên nghiệp & Chủ tòa nhà CHDV muốn bứt phá khách gọi",
    icon: "fa-fire",
    cardClass: "vip1",
    badge: "✦ VIP 1",
    packages: [
      { days: 3, price: 105000, save: "" },
      { days: 7, price: 232750, save: "-5%" },
      { days: 15, price: 472500, save: "-10%" },
      { days: 30, price: 840000, save: "-20%" }
    ],
    features: [
      "Hiển thị: Khu vực Spotlight (TOP 1 Hiển Thị) Trang Chủ",
      "Bản đồ 3D: Ghim 1★ Nền trắng chữ cam nổi bật",
      "Huy hiệu: ✦ VIP 1 (Bạc ánh kim viền cam thương hiệu)",
      "Nhãn dán: Tùy chọn Giảm Sâu / HOT / Ưu Đãi (+1.000đ/ngày)",
      "SEO ưu tiên: Tối ưu đường dẫn SEO Phường/Xã & Giá thuê",
      "Sửa tin: Miễn phí 3 lần đầu • Tự động đẩy tin mỗi ngày"
    ]
  },
  {
    zoneId: 3,
    name: "TOP 2 Nổi Bật",
    tag: "VIP 2 • 25.000đ/ngày",
    desc: "Được lựa chọn nhiều nhất — Tối ưu chi phí và lượng khách liên hệ mỗi ngày",
    icon: "fa-star",
    cardClass: "popular",
    badge: "• VIP 2",
    packages: [
      { days: 3, price: 75000, save: "" },
      { days: 7, price: 166250, save: "-5%" },
      { days: 15, price: 337500, save: "-10%" },
      { days: 30, price: 600000, save: "-20%" }
    ],
    features: [
      "Hiển thị: Khu vực Featured (TOP 2 Nổi Bật) Trang Chủ",
      "Bản đồ 3D: Ghim 1★ Nền trắng chữ cam",
      "Huy hiệu: • VIP 2 (Bạc ánh kim viền cam nhạt)",
      "Nhãn dán: Tùy chọn Giảm Sâu / HOT / Ưu Đãi (+1.000đ/ngày)",
      "SEO chuẩn: Tự động tạo URL thân thiện theo vị trí & giá",
      "Sửa tin: Miễn phí 3 lần đầu • Duyệt nhanh"
    ]
  },
  {
    zoneId: 5,
    name: "TOP 3 Hiệu Quả",
    tag: "VIP 3 • 15.000đ/ngày",
    desc: "Tiết kiệm chi phí, duy trì hiển thị bền vững tại khu vực Prime Trang Chủ",
    icon: "fa-thumbs-up",
    cardClass: "pkg-4",
    badge: "VIP 3",
    packages: [
      { days: 3, price: 45000, save: "" },
      { days: 7, price: 99750, save: "-5%" },
      { days: 15, price: 202500, save: "-10%" },
      { days: 30, price: 360000, save: "-20%" }
    ],
    features: [
      "Hiển thị: Khu vực Prime (TOP 3 Hiệu Quả) Trang Chủ",
      "Bản đồ 3D: Ghim 1★ Nền trắng chữ cam",
      "Huy hiệu: VIP 3 (Bạc ánh kim tiêu chuẩn)",
      "Nhãn dán: Tùy chọn Giảm Sâu / HOT / Ưu Đãi (+1.000đ/ngày)",
      "SEO chuẩn: Liên kết danh mục & từ khóa khu vực",
      "Sửa tin: Miễn phí 3 lần đầu"
    ]
  },
  {
    zoneId: 4,
    name: "Tin Cơ Bản",
    tag: "Cơ bản • Chỉ 1.000đ/ngày",
    desc: "Dành cho chính chủ muốn duy trì tin trên Bản đồ & Danh mục với chi phí siêu rẻ",
    icon: "fa-file-lines",
    cardClass: "pkg-5",
    badge: "TIẾT KIỆM",
    packages: [
      { days: 3, price: 3000, save: "" },
      { days: 7, price: 6650, save: "-5%" },
      { days: 15, price: 13500, save: "-10%" },
      { days: 30, price: 24000, save: "-20%" }
    ],
    features: [
      "Hiển thị: Trang Danh mục, Tìm kiếm & SEO vị trí",
      "Bản đồ 3D: Có lên Bản đồ (Ghim nền trắng chữ đen)",
      "Huy hiệu VIP: Không gắn huy hiệu VIP",
      "Nhãn dán: Được phép gắn Nhãn Dán (+1.000đ/ngày)",
      "SEO chuẩn: Có URL thân thiện theo loại hình & vị trí",
      "Sửa tin: Miễn phí 3 lần đầu"
    ]
  },
  {
    zoneId: 13,
    name: "Đăng Tin Miễn Phí",
    tag: "Trải nghiệm • 0đ (3 Ngày)",
    desc: "Trải nghiệm đăng tin miễn phí 100% dành cho thành viên mới làm quen hệ thống",
    icon: "fa-gift",
    cardClass: "pkg-6",
    badge: "MIỄN PHÍ 0Đ",
    packages: [
      { days: 3, price: 0, save: "Miễn phí" }
    ],
    features: [
      "Hiển thị: Trang Danh mục & Tìm kiếm (3 ngày)",
      "Bản đồ 3D: Không hiển thị trên Bản đồ",
      "Huy hiệu VIP & Nhãn dán: Không hỗ trợ",
      "SEO cơ bản: Có đường dẫn bài viết thân thiện",
      "Nâng cấp: Có thể nâng cấp lên gói VIP bất kỳ lúc nào",
      "Chi phí: 0đ (Miễn phí hoàn toàn)"
    ]
  }
];

// Global App State
const STATE = {
  currentRoute: "/",
  sv1Index: 0,
  sv1ThumbIndex: 0,
  mapFilterCat: "all",
  mapStyle: "streets", // streets | satellite | night
  walletBalance: 550000, // Pre-loaded 550,000đ so user can test VIP package buying immediately!
  selectedZoneId: 1,
  selectedPkgIndex: 0,
  favorites: new Set([2078]),
  compareList: [], // Appears dynamically when user clicks Compare on any card
  activeLandmark: null,
  selectedViewingDate: "Ngày mai",
  selectedViewingTime: "Chiều (14:00 - 17:00)",
  searchFilter: {
    keyword: "",
    category: "all",
    city: "TP. Hồ Chí Minh",
    ward: "all",
    maxPrice: 50,
    minArea: 15
  },
  auth: {
    isLoggedIn: false,
    role: null, // "member" | "admin"
    displayName: "",
    identity: "",
    verifiedVia: ""
  },
  pendingAuthRoute: null,
  pendingPostModal: false,
  pendingPostZoneId: null
};

let heroMapInstance = null;
let heroMarkersLayer = null;
let heroTileLayer = null;
let landmarkCircleLayer = null;

const LANDMARKS = {
  "metro": { name: "Ga Metro Bến Thành - Suối Tiên", lat: 10.7755, lng: 106.6980, radius: 2600 },
  "uni-q10": { name: "Cụm ĐH Kinh Tế / Bách Khoa (Q.10)", lat: 10.7732, lng: 106.6665, radius: 2200 },
  "airport": { name: "Sân bay Tân Sơn Nhất / Etown", lat: 10.8065, lng: 106.6648, radius: 2500 },
  "pxl": { name: "Khu ẩm thực Phan Xích Long", lat: 10.7982, lng: 106.6845, radius: 2000 },
  "ten-lua": { name: "Khu Tên Lửa / Aeon Bình Tân", lat: 10.7525, lng: 106.6188, radius: 3000 }
};

// ==========================================================================
// INITIALIZATION & ROUTER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  restoreAuthSession();
  updateAuthUI();
  initHeroMap();
  updateMapFilterChipCounts();
  initMegaSearchSync();
  initStickyNav();
  initMegaSearchPanel();
  renderSv1Slider();
  renderAllHomeGrids();
  renderNewsSection("noi-bat");
  renderPricingPage();
  renderZonePackagesInModal();
  renderCompareTray();

  // Check initial URL hash or pathname
  const initialPath = window.location.hash ? window.location.hash.replace("#", "") : "/";
  navigateTo(initialPath, false);

  window.addEventListener("popstate", () => {
    const path = window.location.hash ? window.location.hash.replace("#", "") : "/";
    navigateTo(path, false);
  });
});

function toVietnameseSlug(str) {
  return String(str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPriceBracketSlug(priceMillion) {
  const p = Number(priceMillion || 0);
  if (p > 0 && p < 4) return "gia-duoi-4-trieu";
  if (p >= 4 && p <= 7) return "gia-tu-4-den-7-trieu";
  if (p > 7 && p <= 15) return "gia-tu-7-den-15-trieu";
  if (p > 15) return "gia-tren-15-trieu";
  return "gia-thoa-thuan";
}

function buildPropertySeoUrl(item) {
  const catSlugMap = {
    "phong-tro": "cho-thue-phong-tro",
    "nha-o": "cho-thue-nha-nguyen-can",
    "can-ho-chung-cu": "cho-thue-can-ho-chung-cu",
    "mat-bang-van-phong": "cho-thue-mat-bang-van-phong",
    "bai-dat-kho-xuong": "cho-thue-dat-xuong-kho-bai",
    "homestay-airbnb": "cho-thue-homestay-airbnb"
  };
  const baseCat = catSlugMap[item.category] || `cho-thue-${toVietnameseSlug(item.category)}`;
  const wardSlug = toVietnameseSlug(item.ward || "");
  const citySlug = toVietnameseSlug(item.city || "");
  const titleSlug = toVietnameseSlug(item.title || "bat-dong-san").slice(0, 58);
  const priceSlug = item.price ? `gia-${String(item.price).replace(".", "-")}-trieu` : "gia-tot";
  return `#/${baseCat}-${wardSlug}-${citySlug}/${titleSlug}-${priceSlug}-id${item.id}`;
}

function updateDocumentSeoMeta(title, desc, opts = {}) {
  const fullTitle = title ? `${title} | CHOTHUETOT.VN` : "CHOTHUETOT.VN";
  document.title = fullTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && desc) metaDesc.setAttribute("content", desc);
  const ogTitle = document.getElementById("seoOgTitle");
  if (ogTitle) ogTitle.setAttribute("content", fullTitle);
  const ogDesc = document.getElementById("seoOgDesc");
  if (ogDesc && desc) ogDesc.setAttribute("content", desc);
  const ogImage = document.getElementById("seoOgImage");
  if (ogImage) ogImage.setAttribute("content", opts.image || "https://chothuetot.vn/assets/images/logo/logo_cms_1782625511.png");
  const canonicalUrl = opts.url || `https://chothuetot.vn/${window.location.hash || ""}`;
  const canEl = document.getElementById("seoCanonicalLink");
  if (canEl) canEl.setAttribute("href", canonicalUrl);
  const ogUrl = document.getElementById("seoOgUrl");
  if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);
  const ldEl = document.getElementById("seoJsonLdScript");
  if (ldEl && opts.jsonLd) {
    ldEl.textContent = JSON.stringify(opts.jsonLd);
  }
}

function showCttNotice(title, message, durationMs = 4500) {
  let stack = document.getElementById("cttToastStack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "cttToastStack";
    stack.className = "ctt-toast-stack";
    document.body.appendChild(stack);
  }
  const card = document.createElement("div");
  card.className = "ctt-toast-card";
  card.innerHTML = `
    <div class="ctt-toast-icon"><i class="fa-solid fa-bell"></i></div>
    <div class="ctt-toast-body">
      <div class="ctt-toast-title">${title || "Thông báo ChoThueTot.vn"}</div>
      <div class="ctt-toast-msg">${message || ""}</div>
    </div>
    <button type="button" class="ctt-toast-close" aria-label="Đóng" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  stack.appendChild(card);
  if (durationMs > 0) {
    setTimeout(() => {
      if (card.parentElement) card.remove();
    }, durationMs);
  }
}

function openLegalDocModal(docKey) {
  const docs = {
    terms: {
      title: "ĐIỀU KHOẢN SỬ DỤNG — CHOTHUETOT.VN",
      body: `
        <p><strong>1. Phạm vi áp dụng:</strong> Điều khoản này quy định quyền và nghĩa vụ của Chủ nhà, Môi giới và Khách thuê khi sử dụng nền tảng bản đồ bất động sản cho thuê <strong>ChoThueTot.vn</strong>.</p>
        <p><strong>2. Minh bạch thông tin:</strong> Mọi tin đăng phải kê khai đúng giá thuê thực tế, diện tích sử dụng, biểu giá Điện - Nước (theo quy định Nhà nước hoặc đơn giá cố định) và các chi phí dịch vụ đi kèm.</p>
        <p><strong>3. Quyền lợi tài khoản Thành viên:</strong> Mỗi tin đăng sau khi xuất bản được miễn phí <strong>03 lần chỉnh sửa nội dung đầu tiên</strong> và hỗ trợ tự động tối ưu đường dẫn chuẩn SEO.</p>
        <p><strong>4. Thanh toán & Hóa đơn VAT:</strong> Mọi giao dịch nạp Ví VietQR và mua gói hiển thị VIP đều được khấu trừ minh bạch kèm thuế GTGT (VAT 8%) theo quy định hiện hành.</p>
      `
    },
    privacy: {
      title: "CHÍNH SÁCH BẢO MẬT THÔNG TIN",
      body: `
        <p><strong>1. Bảo vệ dữ liệu cá nhân:</strong> ChoThueTot.vn tuân thủ Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân. Số điện thoại Zalo và thông tin xác thực CCCD của Chủ nhà chỉ dùng để xác minh chính chủ và kết nối lịch hẹn xem nhà.</p>
        <p><strong>2. Bảo mật tài khoản & Thanh toán:</strong> Lịch sử nạp Ví VietQR và thông tin hóa đơn được mã hóa và chỉ hiển thị trong khu vực Quản lý Tài khoản của chính chủ sở hữu.</p>
        <p><strong>3. Quyền của thành viên:</strong> Thành viên có toàn quyền chỉnh sửa hồ sơ, đổi mật khẩu, ẩn tin đăng khi đã cho thuê hoặc yêu cầu hủy kích hoạt tài khoản bất cứ lúc nào.</p>
      `
    },
    rules: {
      title: "QUY ĐỊNH ĐĂNG TIN & KIỂM DUYỆT HÌNH ẢNH",
      body: `
        <p><strong>1. Quy chuẩn hình ảnh:</strong> Tin đăng phải sử dụng từ 04–09 hình ảnh thực tế của bất động sản. Nghiêm cấm sử dụng ảnh bìa có chứa logo/watermark của các nền tảng khác.</p>
        <p><strong>2. Phân hạng hiển thị:</strong> Hệ thống gồm 06 phân khu hiển thị rõ ràng: <em>Banner Đặc Quyền, TOP 1 Hiển Thị (VIP 1), TOP 2 Nổi Bật (VIP 2), TOP 3 Hiệu Quả (VIP 3), Tin Cơ Bản</em> và <em>Đăng Tin Miễn Phí</em> (Tin miễn phí không hiển thị ghim trên Bản đồ).</p>
        <p><strong>3. Chống tin ảo & Cọc ảo:</strong> Tin đăng sai lệch giá hoặc thu cọc bất minh sẽ bị hệ thống AI Pre-Check và Quản trị viên gỡ bỏ vĩnh viễn.</p>
      `
    },
    dispute: {
      title: "CƠ CHẾ GIẢI QUYẾT TRANH CHẤP & KHIẾU NẠI",
      body: `
        <p><strong>1. Tiếp nhận phản ánh:</strong> Khi phát hiện tin đăng không đúng thực tế, đã cho thuê hoặc sai biểu giá điện nước, khách thuê có thể gửi phản ánh qua Hotline/Zalo <strong>0906 344 877</strong> hoặc email <strong>Chothuetot.vn@gmail.com</strong>.</p>
        <p><strong>2. Thời gian xử lý:</strong> Bộ phận Kiểm duyệt xác minh trong vòng <strong>04–24 giờ làm việc</strong>; tạm ẩn tin đang tranh chấp và hoàn trả chi phí ngày VIP còn lại nếu lỗi thuộc về hệ thống kỹ thuật.</p>
      `
    }
  };
  const d = docs[docKey] || docs.terms;
  let modal = document.getElementById("legalDocModalBackdrop");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "legalDocModalBackdrop";
    modal.className = "ctt-modal-backdrop";
    modal.onclick = (e) => {
      if (e.target === modal) modal.classList.remove("is-open");
    };
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="ctt-modal-dialog" style="max-width:640px;">
      <div class="ctt-modal-header">
        <h3 style="font-size:16.5px;font-weight:900;color:#0f172a;margin:0;">
          <i class="fa-solid fa-scale-balanced" style="color:var(--ctt-orange);margin-right:8px;"></i>${d.title}
        </h3>
        <button type="button" onclick="document.getElementById('legalDocModalBackdrop').classList.remove('is-open')" style="width:34px;height:34px;border-radius:50%;border:1px solid #e2e8f0;background:#fff;cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="ctt-modal-body" style="font-size:13.5px;color:#334155;line-height:1.68;display:flex;flex-direction:column;gap:10px;">
        ${d.body}
        <div style="display:flex;justify-content:flex-end;margin-top:8px;">
          <button type="button" class="hsp-btn-apply" onclick="document.getElementById('legalDocModalBackdrop').classList.remove('is-open')">Đã hiểu & Đóng</button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("is-open");
}

function handleMidPromoBannerClick() {
  if (STATE.auth && STATE.auth.isLoggedIn) {
    openWalletModal();
  } else {
    openAuthModal("Đăng nhập hoặc đăng ký tài khoản để quản lý Ví đăng tin VietQR ngay hôm nay!");
  }
}

function navigateTo(route, pushHistory = true) {
  if (!route.startsWith("/")) route = "/" + route;
  if (pushHistory) {
    window.history.pushState({}, "", `#${route}`);
  }

  document.querySelectorAll(".shn-list > li").forEach((li) => li.classList.remove("active"));
  if (route === "/" || route === "/index.html") document.getElementById("nav-home")?.classList.add("active");
  else if (route.includes("bao-gia")) document.getElementById("nav-pricing")?.classList.add("active");
  else if (route.includes("tin-tuc")) document.getElementById("nav-news")?.classList.add("active");
  else if (route.includes("uu-dai")) document.getElementById("nav-promo")?.classList.add("active");
  else if (route.includes("tai-khoan")) document.getElementById("nav-member")?.classList.add("active");
  else if (route.includes("admin")) document.getElementById("nav-admin")?.classList.add("active");

  document.body.classList.remove("is-detail-view");
  document.querySelectorAll(".app-route-view").forEach((el) => (el.style.display = "none"));
  const heroEl = document.getElementById("siteHeaderHero");

  // Check if route is a Property Detail URL (ends with -id1234, -1234, or /1234)
  const detailIdMatch = route.match(/-id(\d+)$/) || route.match(/\/(\d+)$/) || route.match(/-(\d{3,6})$/);
  if (detailIdMatch && (route.includes("cho-thue") || route.includes("phong-tro") || route.includes("nha-") || route.includes("can-ho") || route.includes("mat-bang") || route.includes("kho-xuong") || route.includes("homestay"))) {
    const propId = parseInt(detailIdMatch[1], 10);
    openPropertyDetailView(propId);
    return;
  }

  if (route === "/" || route === "/index.html") {
    heroEl.classList.remove("is-compact");
    document.getElementById("view-home").style.display = "block";
    updateMapPins("all");
    updateDocumentSeoMeta(
      "Cho Thuê Tốt - Thuê Phòng Trọ, Nhà Nguyên Căn, Căn Hộ, Mặt Bằng, Kho Xưởng, HomeStay",
      "CHOTHUETOT.VN — Nền tảng cho thuê phòng trọ, nhà nguyên căn, căn hộ chung cư, mặt bằng văn phòng, kho xưởng, HomeStay/Airbnb minh bạch 100%."
    );
  } else if (
    route.includes("cho-thue") ||
    route.includes("phong-tro") ||
    route.includes("nha-o") ||
    route.includes("nha-nguyen-can") ||
    route.includes("can-ho") ||
    route.includes("mat-bang") ||
    route.includes("bai-dat") ||
    route.includes("dat-xuong") ||
    route.includes("homestay") ||
    route.includes("spotlight") ||
    route.includes("featured") ||
    route.includes("prime") ||
    route.includes("search") ||
    route.includes("tim-kiem") ||
    route.includes("khu-vuc")
  ) {
    heroEl.classList.remove("is-compact");
    openCategoryView(route);
  } else if (route.includes("bao-gia")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-pricing").style.display = "block";
    updateDocumentSeoMeta("Bảng Giá Dịch Vụ Đăng Tin BĐS & Gói VIP", "Bảng giá 6 gói đăng tin BĐS cho thuê minh bạch tại ChoThueTot.vn.");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("tin-tuc")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-news").style.display = "block";
    updateDocumentSeoMeta("Tin Tức & Cẩm Nang Thuê Nhà An Toàn 2026", "Cẩm nang thuê phòng trọ, pháp lý tạm trú VNeID và quy hoạch TOD Metro.");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("uu-dai")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-promo").style.display = "block";
    updateDocumentSeoMeta("Ưu Đãi Thành Viên & Khuyến Mãi Gói Đăng Tin VIP", "Nạp Ví đăng tin tự động VietQR 24/7 và giảm tới 20% gói VIP 30 ngày.");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("hop-tac")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-partner").style.display = "block";
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("tai-khoan")) {
    if (!STATE.auth.isLoggedIn) {
      openAuthModal("Vui lòng đăng nhập tài khoản Thành viên để quản lý tin đăng & lịch hẹn.");
      heroEl.classList.remove("is-compact");
      document.getElementById("view-home").style.display = "block";
      return;
    }
    heroEl.classList.add("is-compact");
    document.getElementById("view-member").style.display = "block";
    syncMemberSidebarAndKpis();
    switchMemberTab(STATE.activeMemberTab || "listings");
    updateDocumentSeoMeta("Quản Lý Tài Khoản & Tin Đăng Thành Viên", "Hệ thống quản lý tin đăng, lịch hẹn khách Zalo, hóa đơn VAT và công cụ SEO Link.");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("admin")) {
    if (!STATE.auth.isLoggedIn || STATE.auth.role !== "admin") {
      openAuthModal("Khu vực dành riêng cho Quản trị viên (Admin). Vui lòng đăng nhập tài khoản Admin.");
      heroEl.classList.remove("is-compact");
      document.getElementById("view-home").style.display = "block";
      return;
    }
    heroEl.classList.add("is-compact");
    document.getElementById("view-admin").style.display = "block";
    syncAdminKpis();
    switchAdminTab(STATE.activeAdminTab || "moderation");
    updateDocumentSeoMeta("Trung Tâm Quản Trị Hệ Thống Admin | ChoThueTot.vn", "Kiểm duyệt tin đăng AI, quản lý doanh thu VIP, tài khoản thành viên và cấu hình SEO.");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else {
    heroEl.classList.remove("is-compact");
    document.getElementById("view-home").style.display = "block";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initHeroMap() {
  const mapEl = document.getElementById("heroMap");
  if (!mapEl || typeof L === "undefined") return;

  heroMapInstance = L.map("heroMap", {
    zoomControl: false,
    scrollWheelZoom: false
  }).setView([10.792, 106.682], 12);

  L.control.zoom({ position: "bottomright" }).addTo(heroMapInstance);

  // Use official MapTiler Streets v2 from chothuetot.vn with automatic Carto Voyager fallback
  setMapStyle("streets");

  // Enable scroll wheel zoom on hover just like live site
  mapEl.addEventListener("mouseenter", () => heroMapInstance.scrollWheelZoom.enable());
  mapEl.addEventListener("mouseleave", () => heroMapInstance.scrollWheelZoom.disable());

  heroMarkersLayer = L.layerGroup().addTo(heroMapInstance);
  updateMapPins("all");
}

function setMapStyle(styleName, btnEl) {
  STATE.mapStyle = styleName;
  const mapEl = document.getElementById("heroMap");
  if (!heroMapInstance) return;

  if (btnEl) {
    document.querySelectorAll(".map-style-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }

  if (heroTileLayer) {
    heroMapInstance.removeLayer(heroTileLayer);
  }

  mapEl.classList.remove("map-theme-night");

  if (styleName === "satellite") {
    heroTileLayer = L.tileLayer(
      "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&hl=vi",
      { maxZoom: 20, attribution: "© ChoThueTot Satellite" }
    ).addTo(heroMapInstance);
  } else if (styleName === "night") {
    mapEl.classList.add("map-theme-night");
    heroTileLayer = L.tileLayer(
      "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=vi",
      { maxZoom: 20, attribution: "© ChoThueTot Luxury Map" }
    ).addTo(heroMapInstance);
  } else {
    heroTileLayer = L.tileLayer(
      "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=vi",
      { maxZoom: 20, attribution: "© ChoThueTot Luxury Map" }
    ).addTo(heroMapInstance);
  }
}

function filterMapCategory(cat, btnEl) {
  STATE.mapFilterCat = cat;
  if (btnEl) {
    document.querySelectorAll(".map-filter-chip").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  updateMapPins(cat);
}

function toggle3DMapMorph(btnEl) {
  const heroEl = document.getElementById("siteHeaderHero");
  if (!heroEl) return;
  heroEl.classList.toggle("is-3d-morph");
  btnEl?.classList.toggle("active", heroEl.classList.contains("is-3d-morph"));
}

function updateMapPins(catFilter = "all", focusId = null, customPool = null) {
  if (!heroMapInstance || !heroMarkersLayer) return;
  heroMarkersLayer.clearLayers();

  const sourceList = Array.isArray(customPool) ? customPool : PROPERTIES;
  const rawPool = sourceList.filter((p) => {
    if (p.isHidden) return false;
    // Hạng 6: Tin miễn phí không hiển thị trên bản đồ
    if (p.tier === "free" || p.mapTier === "free" || p.zoneId === 13) return false;
    if (catFilter === "all") return true;
    return p.category === catFilter;
  });
  const banners = rawPool.filter((p) => p.isVipPin || p.mapTier === "banner" || p.zoneId === 1).slice(0, 20);
  const vips = rawPool.filter((p) => !banners.includes(p) && p.tier !== "basic" && p.mapTier !== "basic" && p.zoneId !== 4).slice(0, 75);
  const basics = rawPool.filter((p) => p.tier === "basic" || p.mapTier === "basic" || p.zoneId === 4).slice(0, 65);
  const list = [...basics, ...vips, ...banners];
  if (focusId) {
    const focusObj = rawPool.find((p) => Number(p.id) === Number(focusId));
    if (focusObj && !list.includes(focusObj)) list.push(focusObj);
  }

  const bounds = [];

  list.forEach((item, idx) => {
    const isCurrent = focusId && Number(item.id) === Number(focusId);
    const shortCat = item.categoryLabel.split(",")[0];
    const priceDisplay = String(item.priceText || "").replace(/,/g, ".");
    const priceShort = priceDisplay.replace(" Triệu", "tr");
    const labelText = `${shortCat} - ${priceShort}`;

    const vipInfo = typeof getPropertyVipDisplay === "function" ? getPropertyVipDisplay(item) : { badgeClass: "", label: "" };
    let pinClass = "pin-basic";
    let pinIconHtml = "";
    let pinZOffset = 0;

    if (vipInfo.badgeClass === "tag-dacquyen" || item.isVipPin || item.mapTier === "banner" || item.zoneId === 1) {
      pinClass = "pin-vip-banner";
      pinIconHtml = '<i class="fa-solid fa-crown" style="color:#ff9d00;font-size:10px;"></i>';
      pinZOffset = 2000;
    } else if (vipInfo.badgeClass === "tag-vip1" || item.mapTier === "vip1" || item.zoneId === 2 || item.tier === "spotlight") {
      pinClass = "pin-vip1";
      pinIconHtml = '<i class="fa-solid fa-star" style="color:#0f172a;font-size:10px;"></i>';
      pinZOffset = 600;
    } else if (vipInfo.badgeClass === "tag-vip2" || item.mapTier === "vip2" || item.zoneId === 3 || item.tier === "featured") {
      pinClass = "pin-vip2";
      pinIconHtml = '<i class="fa-solid fa-star" style="color:#0f172a;font-size:10px;"></i>';
      pinZOffset = 400;
    } else if (vipInfo.badgeClass === "tag-vip3" || item.mapTier === "vip3" || item.zoneId === 5 || item.tier === "prime") {
      pinClass = "pin-vip3";
      pinIconHtml = '<i class="fa-solid fa-star" style="color:#0f172a;font-size:10px;"></i>';
      pinZOffset = 200;
    } else {
      pinClass = "pin-basic";
      pinIconHtml = "";
      pinZOffset = 0;
    }
    if (isCurrent) pinZOffset += 3000;

    const icon = L.divIcon({
      className: "hero-map-price-marker",
      html: `
        <div class="hmp-marker ${pinClass} ${isCurrent ? "is-current" : ""}" data-prop-id="${item.id}">
          <div class="hmp-pill">
            ${pinIconHtml}
            <span>${labelText}</span>
          </div>
          <div class="hmp-pin-tail"></div>
        </div>
      `,
      iconAnchor: [0, 0],
      popupAnchor: [0, -46]
    });

    const marker = L.marker([item.lat, item.lng], { icon, zIndexOffset: pinZOffset });
    const isBanner = vipInfo.badgeClass === "tag-dacquyen" || item.isVipPin || item.mapTier === "banner" || item.zoneId === 1;
    const bannerLocText = isBanner
      ? [item.ward, item.city].filter(Boolean).map((s) => s.toUpperCase()).join(", ")
      : "";
    const vipTagHtml = vipInfo.label
      ? `<span class="lc-vip-tag hmp-pop-vip ${vipInfo.badgeClass}">${vipInfo.label}</span>`
      : "";
    const popStickerMap = {
      urgent: { name: "Giảm Sâu", cls: "sticker-urgent", icon: "fa-bolt" },
      hot: { name: "HOT", cls: "sticker-hot", icon: "fa-fire" },
      promo: { name: "Ưu Đãi", cls: "sticker-promo", icon: "fa-gift" }
    };
    const popStObj = item.sticker ? popStickerMap[item.sticker] : null;
    const popStickerHtml = popStObj
      ? `<span class="sticker-pill ${popStObj.cls} hmp-pop-sticker"><i class="fa-solid ${popStObj.icon}"></i> ${popStObj.name}</span>`
      : "";
    marker.bindPopup(`
      <div class="hero-map-popup ${isBanner ? "is-vip-banner" : ""}" onclick="openPropertyDetailView(${item.id})" role="button" tabindex="0">
        <div class="hmp-pop-top">
          <div class="hmp-pop-thumb">
            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=80'">
            ${vipTagHtml}
          </div>
          <div class="hmp-pop-body">
            ${bannerLocText ? `<div class="hmp-pop-loc"><i class="fa-solid fa-location-dot"></i><span>${bannerLocText}</span></div>` : ""}
            <div class="hmp-pop-price tabular-nums">
              <span class="hmp-pop-price-val">${priceDisplay}</span>
              <span class="hmp-pop-price-unit">| Tháng</span>
              ${popStickerHtml}
            </div>
            <div class="hmp-pop-title">${item.title}</div>
          </div>
        </div>
        <div class="hmp-pop-footer">
          <div class="hmp-pop-specs">
            <span><i class="fa-solid fa-maximize"></i> ${item.area}&nbsp;m²</span>
            <span><i class="fa-solid fa-bed"></i> ${item.beds ?? 1}</span>
            <span><i class="fa-solid fa-bath"></i> ${item.baths ?? 1}</span>
          </div>
          <button type="button" class="hmp-pop-more" onclick="event.stopPropagation(); expandMapFromCompactPopup(${item.id});">Xem Thêm <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    `, {
      maxWidth: 356,
      className: "ctt-compact-map-popup",
      autoPanPaddingTopLeft: [24, 92],
      autoPanPaddingBottomRight: [24, 64]
    });

    marker.on("click", () => {
      const heroEl = document.getElementById("siteHeaderHero");
      if (heroEl && heroEl.classList.contains("is-expanded")) {
        setTimeout(() => marker.closePopup(), 10);
        openHeroMapLeftDrawer(item);
      }
    });

    heroMarkersLayer.addLayer(marker);
    if (item.city === "TP. Hồ Chí Minh") {
      bounds.push([item.lat, item.lng]);
    }
    if (isCurrent) {
      setTimeout(() => marker.openPopup(), 250);
    }
  });

  if (focusId) {
    const target = PROPERTIES.find((p) => p.id === focusId);
    if (target) {
      heroMapInstance.setView([target.lat, target.lng], 15, { animate: true });
    }
  } else if (catFilter !== "all" && bounds.length > 1) {
    heroMapInstance.fitBounds(bounds, { padding: [45, 45], maxZoom: 13 });
  } else {
    heroMapInstance.setView([10.786, 106.678], 13);
  }
}

// NEW UPGRADE #5: 2-Way Card <-> Map Pin Hover Sync
function highlightMapPin(propId, isHovered) {
  document.querySelectorAll(`.hmp-marker[data-prop-id="${propId}"]`).forEach((el) => {
    el.classList.toggle("is-hovered", isHovered);
  });
}

// NEW UPGRADE #6: Landmark / Metro / University Proximity Filter
function filterByLandmark(landmarkKey, btnEl) {
  const lm = LANDMARKS[landmarkKey];
  if (!lm || !heroMapInstance) return;

  STATE.activeLandmark = landmarkKey;
  document.querySelectorAll(".landmark-pill").forEach((b) => b.classList.remove("active"));
  btnEl?.classList.add("active");

  if (landmarkCircleLayer) {
    heroMapInstance.removeLayer(landmarkCircleLayer);
  }

  landmarkCircleLayer = L.circle([lm.lat, lm.lng], {
    radius: lm.radius,
    color: "#f15a22",
    weight: 2,
    fillColor: "#f37201",
    fillOpacity: 0.14
  }).addTo(heroMapInstance);

  heroMapInstance.setView([lm.lat, lm.lng], 14, { animate: true });
  const input = document.getElementById("hspSearchInput");
  if (input) input.value = `Gần ${lm.name} (< ${(lm.radius / 1000).toFixed(1)}km)`;
}

function clearLandmarkFilter() {
  STATE.activeLandmark = null;
  document.querySelectorAll(".landmark-pill").forEach((b) => b.classList.remove("active"));
  if (landmarkCircleLayer && heroMapInstance) {
    heroMapInstance.removeLayer(landmarkCircleLayer);
    landmarkCircleLayer = null;
  }
}

function closeHeroMapLeftDrawer() {
  const drawer = document.getElementById("heroMapLeftDrawer");
  if (drawer) {
    drawer.classList.remove("is-open");
    drawer.innerHTML = "";
  }
}

function openHeroMapLeftDrawer(item) {
  const drawer = document.getElementById("heroMapLeftDrawer");
  if (!drawer || !item) return;
  const isBanner = item.isVipPin || item.mapTier === "banner" || item.zoneId === 1;
  const photos = (item.gallery && item.gallery.length ? item.gallery : [item.image]).slice(0, 4);
  let cardHtml = buildListingCardHTML(item).replace(
    `onclick="openPropertyDetailView(${item.id})"`,
    `onclick="openDetailFromExpandedMap(${item.id})"`
  );
  if (isBanner && photos.length > 1) {
    cardHtml = cardHtml.replace(
      `<div class="lc-card-img">\n        <img src="`,
      `<div class="lc-card-img">\n        <img id="hmdMainImg" src="`
    );
    const thumbStrip = `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:8px 18px 0;background:#ffffff;" onclick="event.stopPropagation()">
        ${photos.map((src, idx) => `<img src="${src}" onclick="var m=document.getElementById('hmdMainImg');if(m)m.src=this.src;this.parentElement.querySelectorAll('img').forEach(function(el){el.style.borderColor='#e2e8f0';});this.style.borderColor='var(--ctt-orange)';" style="width:100%;height:42px;object-fit:cover;border-radius:7px;cursor:pointer;border:1.5px solid ${idx === 0 ? "var(--ctt-orange)" : "#e2e8f0"};">`).join("")}
      </div>
    `;
    cardHtml = cardHtml.replace(`<div class="lc-card-body"`, `${thumbStrip}<div class="lc-card-body"`);
  }
  const actionRowHtml = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:12px 18px 16px;background:#ffffff;border-top:1px solid #f1f5f9;" onclick="event.stopPropagation()">
      <a href="tel:${(item.phone || "").replace(/\D/g, "")}" class="tabular-nums" style="display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 12px;border-radius:10px;background:#0f172a;color:#fff;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap;">
        <i class="fa-solid fa-phone" style="color:var(--ctt-orange);"></i>${formatPhone433(item.phone)}
      </a>
      <button type="button" onclick="openDetailFromExpandedMap(${item.id})" style="display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 12px;border:none;border-radius:10px;background:var(--ctt-grad-brand);color:#fff;font-size:12px;font-weight:800;cursor:pointer;white-space:nowrap;">
        Xem Thêm <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;
  const enhancedCardHtml = cardHtml.replace(/<\/div>\s*$/, `${actionRowHtml}</div>`);
  drawer.innerHTML = `
    <div style="position:relative;">
      <button type="button" onclick="closeHeroMapLeftDrawer()" title="Đóng thẻ tin" style="position:absolute;top:-10px;right:-10px;width:28px;height:28px;border-radius:50%;border:2px solid #fff;background:#0f172a;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;box-shadow:0 4px 10px rgba(0,0,0,0.3);">
        <i class="fa-solid fa-xmark"></i>
      </button>
      ${enhancedCardHtml}
    </div>
  `;
  drawer.classList.add("is-open");
}

function expandMapFromCompactPopup(propId) {
  const item = PROPERTIES.find((p) => Number(p.id) === Number(propId));
  heroMapInstance?.closePopup();
  const heroEl = document.getElementById("siteHeaderHero");
  if (heroEl && !heroEl.classList.contains("is-expanded")) {
    toggleExpandHeroMap();
  }
  if (item) {
    openHeroMapLeftDrawer(item);
    setTimeout(() => {
      heroMapInstance?.invalidateSize();
      if (item.lat && item.lng) {
        heroMapInstance?.panTo([item.lat, item.lng], { animate: true });
      }
    }, 120);
  }
}

function openDetailFromExpandedMap(propId) {
  const heroEl = document.getElementById("siteHeaderHero");
  if (heroEl && heroEl.classList.contains("is-expanded")) {
    toggleExpandHeroMap();
  }
  openPropertyDetailView(propId);
}

function toggleExpandHeroMap() {
  const heroEl = document.getElementById("siteHeaderHero");
  const btnSpan = document.getElementById("expandMapBtnText");
  if (!heroEl) return;
  heroEl.classList.toggle("is-expanded");
  const expanded = heroEl.classList.contains("is-expanded");
  document.body.style.overflow = expanded ? "hidden" : "";
  if (!expanded) {
    closeHeroMapLeftDrawer();
  }
  if (btnSpan) {
    btnSpan.textContent = expanded ? "Thu gọn" : "Mở rộng";
  }
  setTimeout(() => heroMapInstance?.invalidateSize(), 100);
  setTimeout(() => heroMapInstance?.invalidateSize(), 460);
}

function focusPropertyOnHeroMap(propId) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateMapPins("all", propId);
}

// ==========================================================================
// 2. STICKY NAV & WIDE 2-COLUMN TECH MEGA-SEARCH PANEL
// ==========================================================================
function initStickyNav() {
  const hero = document.getElementById("siteHeaderHero");
  const nav = document.getElementById("siteHeaderNav");
  const spacer = document.getElementById("shnStickySpacer");
  if (!hero || !nav || !spacer) return;

  window.addEventListener("scroll", () => {
    const threshold = hero.offsetHeight;
    if (window.scrollY >= threshold) {
      nav.classList.add("is-sticky");
      spacer.style.height = nav.offsetHeight + "px";
    } else {
      nav.classList.remove("is-sticky");
      spacer.style.height = "0px";
    }
  });
}

function closeAllSegPopovers() {
  ["segLocPopover", "segCatPopover", "segPricePopover"].forEach((id) => {
    document.getElementById(id)?.classList.remove("is-open");
  });
  document.querySelectorAll(".hsp-seg-field").forEach((f) => f.classList.remove("is-active"));
}

function openSegPopover(kind, e) {
  e?.stopPropagation();
  const map = { loc: "segLocPopover", cat: "segCatPopover", price: "segPricePopover" };
  const targetId = map[kind];
  const pop = document.getElementById(targetId);
  if (!pop) return;
  const wasOpen = pop.classList.contains("is-open");
  closeAllSegPopovers();
  document.getElementById("hspMegaPanel")?.classList.remove("is-open");
  if (!wasOpen || kind === "loc") {
    if (kind === "loc") {
      renderSegLocSuggestions(document.getElementById("hspSearchInput")?.value || "");
      document.getElementById("hspSearchInput")?.focus();
    }
    pop.classList.add("is-open");
    pop.closest(".hsp-seg-field")?.classList.add("is-active");
  }
}

function renderSegLocSuggestions(query = "") {
  const pop = document.getElementById("segLocPopover");
  if (!pop) return;
  const qNorm = typeof toVietnameseSlug === "function" ? toVietnameseSlug(query) : query.trim().toLowerCase();
  const match = (txt) => !qNorm || (typeof toVietnameseSlug === "function" ? toVietnameseSlug(txt).includes(qNorm) : txt.toLowerCase().includes(qNorm));

  const cities = (typeof STUDIO_CITIES !== "undefined" ? STUDIO_CITIES : []).filter((c) => match(c.label)).slice(0, 4);
  const projects = (typeof STUDIO_PROJECTS !== "undefined" ? STUDIO_PROJECTS : []).filter((p) => match(p.label)).slice(0, 4);
  const wards = (typeof STUDIO_WARDS_BY_CITY !== "undefined" ? Object.values(STUDIO_WARDS_BY_CITY).flat() : []).filter((w) => match(w.label)).slice(0, 5);
  const streets = (typeof STUDIO_STREETS_BY_WARD !== "undefined" ? Array.from(new Set(Object.values(STUDIO_STREETS_BY_WARD).flat())) : []).filter((s) => match(s)).slice(0, 5);

  let html = "";
  if (projects.length) {
    html += `<div class="hsp-seg-group">Dự án</div>`;
    html += projects.map((p) => `<button type="button" class="hsp-seg-item" onclick="pickSegLocation('project', '${p.value.replace(/'/g, "\\'")}', '${p.label.replace(/'/g, "\\'")}')"><span><i class="fa-solid fa-building" style="color:var(--ctt-orange);margin-right:6px;"></i>${p.label}</span><small style="color:#94a3b8;">${p.ward}</small></button>`).join("");
  }
  if (wards.length) {
    html += `<div class="hsp-seg-group">Phường / Xã</div>`;
    html += wards.map((w) => `<button type="button" class="hsp-seg-item" onclick="pickSegLocation('ward', '${w.value.replace(/'/g, "\\'")}', '${w.label.replace(/'/g, "\\'")}')"><span><i class="fa-solid fa-location-dot" style="color:var(--ctt-orange);margin-right:6px;"></i>${w.label}</span></button>`).join("");
  }
  if (streets.length) {
    html += `<div class="hsp-seg-group">Tên đường</div>`;
    html += streets.map((s) => `<button type="button" class="hsp-seg-item" onclick="pickSegLocation('street', '${s.replace(/'/g, "\\'")}', '${s.replace(/'/g, "\\'")}')"><span><i class="fa-solid fa-road" style="color:#64748b;margin-right:6px;"></i>Đường ${s}</span></button>`).join("");
  }
  if (cities.length && qNorm) {
    html += `<div class="hsp-seg-group">Tỉnh / Thành phố</div>`;
    html += cities.map((c) => `<button type="button" class="hsp-seg-item" onclick="pickSegLocation('city', '${c.value.replace(/'/g, "\\'")}', '${c.label.replace(/'/g, "\\'")}')"><span><i class="fa-solid fa-map" style="color:#64748b;margin-right:6px;"></i>${c.label}</span></button>`).join("");
  }
  if (!html) {
    html = `<div style="padding:10px 12px;font-size:12px;color:#94a3b8;">Nhấn Enter hoặc nút Tìm để tìm theo từ khóa vừa nhập.</div>`;
  }
  pop.innerHTML = html;
}

function pickSegLocation(kind, val, label) {
  const input = document.getElementById("hspSearchInput");
  if (input) {
    input.value = label;
    input.dataset.pickedLabel = label;
  }
  if (kind === "city") {
    const cityEl = document.getElementById("megaCitySelect");
    if (cityEl) {
      cityEl.value = val;
      populateMegaWards();
    }
  } else if (kind === "project") {
    const projEl = document.getElementById("megaProjectSelect");
    if (projEl) {
      projEl.value = val;
      onMegaProjectChange();
    }
  } else if (kind === "ward") {
    const wardEl = document.getElementById("megaWardSelect");
    if (wardEl) {
      wardEl.value = val;
      onMegaWardChange();
    }
  } else if (kind === "street") {
    const streetEl = document.getElementById("megaStreetSelect");
    if (streetEl) streetEl.value = val;
  }
  closeAllSegPopovers();
  updateMegaLiveCount();
}

function pickSegCategory(val, label, btnEl) {
  const sel = document.getElementById("megaCatSelect");
  if (sel) sel.value = val;
  const disp = document.getElementById("segCatDisplay");
  if (disp) disp.textContent = label;
  document.querySelectorAll("#segCatPopover .hsp-seg-item").forEach((b) => b.classList.remove("active"));
  btnEl?.classList.add("active");
  closeAllSegPopovers();
  updateMegaLiveCount();
}

let MEGA_PRICE_STATE = { min: 0, max: 999, label: "Tất cả giá" };

function pickSegPriceRange(minVal, maxVal, label, btnEl) {
  MEGA_PRICE_STATE = { min: Number(minVal) || 0, max: Number(maxVal) || 999, label };
  const sel = document.getElementById("megaPriceRange");
  if (sel) {
    const key = `${MEGA_PRICE_STATE.min}-${MEGA_PRICE_STATE.max}`;
    if (Array.from(sel.options).some((o) => o.value === key)) {
      sel.value = key;
    }
  }
  const disp = document.getElementById("segPriceDisplay");
  if (disp) disp.textContent = label;
  document.querySelectorAll("#segPricePopover .hsp-seg-item").forEach((b) => b.classList.remove("active"));
  btnEl?.classList.add("active");
  closeAllSegPopovers();
  updateMegaLiveCount();
}

function applyCustomSegPrice() {
  const minRaw = parseFloat(document.getElementById("segPriceMinInput")?.value || "0");
  const maxRaw = parseFloat(document.getElementById("segPriceMaxInput")?.value || "0");
  const minVal = Number.isFinite(minRaw) && minRaw > 0 ? minRaw : 0;
  const maxVal = Number.isFinite(maxRaw) && maxRaw > 0 ? maxRaw : 999;
  if (minVal === 0 && maxVal === 999) {
    pickSegPriceRange(0, 999, "Tất cả giá", document.querySelector("#segPricePopover .hsp-seg-item"));
    return;
  }
  const label = maxVal >= 999
    ? `Trên ${minVal} Triệu`
    : (minVal > 0 ? `${minVal} - ${maxVal} Triệu` : `Dưới ${maxVal} Triệu`);
  pickSegPriceRange(minVal, maxVal, label, null);
}

function onMegaPriceSelectChange(selEl) {
  const raw = selEl?.value || "0-999";
  const [minStr, maxStr] = raw.split("-");
  const label = selEl?.options?.[selEl.selectedIndex]?.text || "Tất cả giá";
  MEGA_PRICE_STATE = { min: parseFloat(minStr) || 0, max: parseFloat(maxStr) || 999, label };
  const disp = document.getElementById("segPriceDisplay");
  if (disp) disp.textContent = label;
  updateMegaLiveCount();
}

function pickSegPrice(val, label, btnEl) {
  pickSegPriceRange(0, val >= 50 ? 999 : val, label, btnEl);
}

function initMegaSearchPanel() {
  const trigger = document.getElementById("hspFilterTrigger");
  const panel = document.getElementById("hspMegaPanel");
  const bar = document.getElementById("hspBar");

  const toggleMega = (e) => {
    e?.stopPropagation();
    closeAllSegPopovers();
    const willOpen = !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", willOpen);
    bar?.classList.toggle("is-open", willOpen);
  };

  trigger?.addEventListener("click", toggleMega);
  panel?.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    closeAllSegPopovers();
    panel?.classList.remove("is-open");
    bar?.classList.remove("is-open");
  });
}

function updateMegaSliderLabels() {
  const priceVal = parseFloat(document.getElementById("megaPriceRange")?.value || "50");
  const areaVal = parseFloat(document.getElementById("megaAreaRange")?.value || "0");
  const priceLabel = document.getElementById("megaPriceLabel");
  const areaLabel = document.getElementById("megaAreaLabel");
  if (priceLabel) priceLabel.textContent = priceVal >= 50 ? "Tất cả mức giá" : `Dưới ${priceVal} Triệu/tháng`;
  if (areaLabel) areaLabel.textContent = areaVal <= 0 ? "Tất cả diện tích" : `Từ ${areaVal} m² trở lên`;
  updateMegaLiveCount();
}

function setQuickPriceFilter(maxVal, pillEl) {
  const slider = document.getElementById("megaPriceRange");
  if (slider) slider.value = maxVal;
  if (pillEl && pillEl.parentElement) {
    pillEl.parentElement.querySelectorAll(".hsp-q-pill").forEach((p) => p.classList.remove("active"));
    pillEl.classList.add("active");
  }
  updateMegaSliderLabels();
}

function setQuickAreaFilter(minVal, pillEl) {
  const slider = document.getElementById("megaAreaRange");
  if (slider) slider.value = minVal;
  if (pillEl && pillEl.parentElement) {
    pillEl.parentElement.querySelectorAll(".hsp-q-pill").forEach((p) => p.classList.remove("active"));
    pillEl.classList.add("active");
  }
  updateMegaSliderLabels();
}

function pickMegaCat(catKey, pillEl) {
  const hiddenInput = document.getElementById("megaCatSelect");
  if (hiddenInput) hiddenInput.value = catKey || "all";
  document.querySelectorAll("#megaCatPills .hsp-q-pill").forEach((p) => p.classList.remove("active"));
  pillEl?.classList.add("active");
  updateMegaLiveCount();
}

function populateMegaCities() {
  const cityEl = document.getElementById("megaCitySelect");
  if (!cityEl || typeof STUDIO_CITIES === "undefined") return;
  const currentVal = cityEl.value || "TP. Hồ Chí Minh";
  cityEl.innerHTML =
    `<option value="all">Tất cả 34 Tỉnh / Thành</option>` +
    STUDIO_CITIES.map((c) => `<option value="${c.value}" ${c.value === currentVal ? "selected" : ""}>${c.label}</option>`).join("");
}

function populateMegaWards() {
  const city = document.getElementById("megaCitySelect")?.value || "all";
  const wardEl = document.getElementById("megaWardSelect");
  if (!wardEl) return;
  const wards = city !== "all" && STUDIO_WARDS_BY_CITY[city]
    ? STUDIO_WARDS_BY_CITY[city]
    : Object.values(STUDIO_WARDS_BY_CITY).flat();
  wardEl.innerHTML = `<option value="all">Tất cả Phường / Xã (${wards.length})</option>` +
    wards.map((w) => `<option value="${w.value}">${w.label}</option>`).join("");
  populateMegaStreets();
}

function populateMegaStreets() {
  const city = document.getElementById("megaCitySelect")?.value || "all";
  const ward = document.getElementById("megaWardSelect")?.value || "all";
  const streetEl = document.getElementById("megaStreetSelect");
  if (!streetEl) return;
  let streets = [];
  if (ward !== "all" && STUDIO_STREETS_BY_WARD[ward]) {
    streets = STUDIO_STREETS_BY_WARD[ward];
  } else if (city !== "all" && STUDIO_WARDS_BY_CITY[city]) {
    const cityWards = STUDIO_WARDS_BY_CITY[city].map((w) => w.value);
    streets = Array.from(new Set(cityWards.flatMap((w) => STUDIO_STREETS_BY_WARD[w] || [])));
  } else {
    streets = Array.from(new Set(Object.values(STUDIO_STREETS_BY_WARD).flat()));
  }
  streetEl.innerHTML = `<option value="all">Tất cả Tên Đường (${streets.length})</option>` +
    streets.map((s) => `<option value="${s}">${s}</option>`).join("");
}

function populateMegaProjects() {
  const city = document.getElementById("megaCitySelect")?.value || "all";
  const projEl = document.getElementById("megaProjectSelect");
  if (!projEl || typeof STUDIO_PROJECTS === "undefined") return;
  const projs = city !== "all" ? STUDIO_PROJECTS.filter((pr) => pr.city === city) : STUDIO_PROJECTS;
  const list = projs.length ? projs : STUDIO_PROJECTS;
  projEl.innerHTML = `<option value="all">Tất cả Dự Án (${list.length})</option>` +
    list.map((pr) => `<option value="${pr.value}">${pr.label}</option>`).join("");
}

function onMegaCityChange() {
  populateMegaWards();
  populateMegaProjects();
  updateMegaLiveCount();
}

function onMegaWardChange() {
  populateMegaStreets();
  updateMegaLiveCount();
}

function onMegaProjectChange() {
  const projVal = document.getElementById("megaProjectSelect")?.value || "all";
  if (projVal !== "all" && typeof STUDIO_PROJECTS !== "undefined") {
    const proj = STUDIO_PROJECTS.find((p) => p.value === projVal);
    if (proj) {
      const cityEl = document.getElementById("megaCitySelect");
      if (cityEl && proj.city) {
        cityEl.value = proj.city;
        populateMegaWards();
      }
      const wardEl = document.getElementById("megaWardSelect");
      if (wardEl && proj.ward) {
        wardEl.value = proj.ward;
        populateMegaStreets();
      }
      const streetEl = document.getElementById("megaStreetSelect");
      if (streetEl && proj.street) {
        streetEl.value = proj.street;
      }
    }
  }
  updateMegaLiveCount();
}

function toggleMegaAdvanced() {
  const wrap = document.getElementById("megaAdvancedWrap");
  const btn = document.getElementById("btnToggleMegaAdv");
  if (!wrap) return;
  const willShow = wrap.style.display === "none";
  wrap.style.display = willShow ? "block" : "none";
  if (btn) {
    btn.innerHTML = willShow
      ? `<i class="fa-solid fa-minus" style="font-size:10px;color:var(--ctt-orange);"></i> <span>Thu gọn</span>`
      : `<i class="fa-solid fa-plus" style="font-size:10px;color:var(--ctt-orange);"></i> <span>Lọc nâng cao (Đường, Dự án, Hướng)</span>`;
  }
}

function toggleMegaQuickChip(btnEl, kind, val) {
  if (!btnEl) return;
  const isActive = btnEl.classList.toggle("active");
  if (kind === "furniture") {
    const furnEl = document.getElementById("megaFurnitureSelect");
    if (furnEl) furnEl.value = isActive ? val : "all";
  }
  updateMegaLiveCount();
}

function getMegaFilterPayload() {
  const searchInput = document.getElementById("hspSearchInput");
  const rawKw = searchInput?.value.trim() || "";
  const kw = rawKw && rawKw === searchInput?.dataset.pickedLabel ? "" : rawKw;
  const cat = document.getElementById("megaCatSelect")?.value || "all";
  const city = document.getElementById("megaCitySelect")?.value || "all";
  const ward = document.getElementById("megaWardSelect")?.value || "all";
  const street = document.getElementById("megaStreetSelect")?.value || "all";
  const project = document.getElementById("megaProjectSelect")?.value || "all";
  const furniture = document.getElementById("megaFurnitureSelect")?.value || "all";
  const beds = document.getElementById("megaBedsSelect")?.value || "all";
  const direction = document.getElementById("megaDirectionSelect")?.value || "all";
  const minPrice = MEGA_PRICE_STATE.min || 0;
  const maxPrice = MEGA_PRICE_STATE.max || 999;
  const minArea = parseFloat(document.getElementById("megaAreaRange")?.value || "0");
  const utilities = Array.from(document.querySelectorAll("#hspMegaPanel .hsp-q-pill.active[onclick*=\"'util'\"]"))
    .map((btn) => {
      const m = (btn.getAttribute("onclick") || "").match(/'util',\s*'([^']+)'/);
      return m ? m[1] : "";
    })
    .filter(Boolean);
  return { keyword: kw, category: cat, city, ward, street, project, furniture, beds, direction, minPrice, maxPrice, priceLabel: MEGA_PRICE_STATE.label, minArea, utilities };
}

function matchesMegaFilter(p, f) {
  if (p.isHidden) return false;
  if (f.category && f.category !== "all" && p.category !== f.category) return false;
  if (f.city && f.city !== "all" && p.city !== f.city) return false;
  if (f.ward && f.ward !== "all" && p.ward !== f.ward) return false;
  if (f.street && f.street !== "all") {
    const addr = (p.fullAddress || p.title || "").toLowerCase();
    if (!addr.includes(f.street.toLowerCase())) return false;
  }
  if (f.project && f.project !== "all") {
    const txt = `${p.project || ""} ${p.fullAddress || ""} ${p.title || ""}`.toLowerCase();
    if (!txt.includes(f.project.toLowerCase())) return false;
  }
  if (f.furniture && f.furniture !== "all" && p.furniture && p.furniture !== f.furniture) return false;
  if (f.beds && f.beds !== "all") {
    const pBeds = parseInt(p.beds || "1", 10) || 1;
    if (f.beds === "4+ PN" ? pBeds < 4 : pBeds !== parseInt(f.beds, 10)) return false;
  }
  if (f.direction && f.direction !== "all" && p.direction && p.direction !== f.direction) return false;
  if (f.minPrice && f.minPrice > 0 && p.price < f.minPrice) return false;
  if (f.maxPrice && f.maxPrice < 999 && p.price > f.maxPrice) return false;
  if (f.minArea && f.minArea > 0 && p.area < f.minArea) return false;
  if (f.utilities && f.utilities.length) {
    const allTags = `${(p.utilities || []).join(" ")} ${(p.services || []).join(" ")} ${p.desc || ""}`.toLowerCase();
    for (const u of f.utilities) {
      if (!allTags.includes(u.toLowerCase().split("/")[0].trim())) return false;
    }
  }
  if (f.keyword && !f.keyword.startsWith("Gần ")) {
    const kwLow = f.keyword.toLowerCase();
    const hay = `${p.title || ""} ${p.ward || ""} ${p.fullAddress || ""}`.toLowerCase();
    if (!hay.includes(kwLow)) return false;
  }
  return true;
}

function clearSingleMegaFilter(kind, val) {
  if (kind === "project") {
    const el = document.getElementById("megaProjectSelect");
    if (el) el.value = "all";
  } else if (kind === "ward") {
    const el = document.getElementById("megaWardSelect");
    if (el) el.value = "all";
    populateMegaStreets();
  } else if (kind === "street") {
    const el = document.getElementById("megaStreetSelect");
    if (el) el.value = "all";
  } else if (kind === "category") {
    pickSegCategory("all", "Tất cả loại hình", document.querySelector("#segCatPopover .hsp-seg-item"));
    return;
  } else if (kind === "price") {
    const minIn = document.getElementById("segPriceMinInput");
    const maxIn = document.getElementById("segPriceMaxInput");
    if (minIn) minIn.value = "";
    if (maxIn) maxIn.value = "";
    pickSegPriceRange(0, 999, "Tất cả giá", document.querySelector("#segPricePopover .hsp-seg-item"));
    return;
  } else if (kind === "area") {
    const el = document.getElementById("megaAreaRange");
    if (el) el.value = "0";
  } else if (kind === "furniture") {
    const el = document.getElementById("megaFurnitureSelect");
    if (el) el.value = "all";
    document.querySelectorAll("#hspMegaPanel .hsp-q-pill[onclick*=\"'furniture'\"]").forEach((b) => b.classList.remove("active"));
  } else if (kind === "util") {
    document.querySelectorAll("#hspMegaPanel .hsp-q-pill.active[onclick*=\"'util'\"]").forEach((b) => {
      if ((b.getAttribute("onclick") || "").includes(`'${val}'`)) b.classList.remove("active");
    });
  } else if (kind === "keyword") {
    const input = document.getElementById("hspSearchInput");
    if (input) {
      input.value = "";
      delete input.dataset.pickedLabel;
    }
  }
  updateMegaLiveCount();
}

function renderActiveFilterPills(f) {
  const bar = document.getElementById("hspActivePillsBar");
  if (!bar) return;
  const pills = [];
  if (f.project && f.project !== "all") pills.push({ kind: "project", val: f.project, label: f.project });
  if (f.ward && f.ward !== "all") pills.push({ kind: "ward", val: f.ward, label: f.ward });
  if (f.street && f.street !== "all") pills.push({ kind: "street", val: f.street, label: `Đường ${f.street}` });
  if (f.category && f.category !== "all") {
    const catDisp = document.getElementById("segCatDisplay")?.textContent || f.category;
    pills.push({ kind: "category", val: f.category, label: catDisp });
  }
  if ((f.minPrice && f.minPrice > 0) || (f.maxPrice && f.maxPrice < 999)) {
    pills.push({ kind: "price", val: "price", label: f.priceLabel || `Dưới ${f.maxPrice}Tr` });
  }
  if (f.minArea && f.minArea > 0) pills.push({ kind: "area", val: f.minArea, label: `Từ ${f.minArea}m²` });
  if (f.furniture && f.furniture !== "all") pills.push({ kind: "furniture", val: f.furniture, label: `NT ${f.furniture}` });
  if (f.utilities && f.utilities.length) {
    f.utilities.forEach((u) => pills.push({ kind: "util", val: u, label: u }));
  }
  if (f.keyword) pills.push({ kind: "keyword", val: f.keyword, label: `"${f.keyword}"` });

  if (!pills.length) {
    bar.style.display = "none";
    bar.innerHTML = "";
    return;
  }
  bar.style.display = "flex";
  bar.innerHTML =
    pills
      .map(
        (pl) => `<button type="button" class="hsp-active-pill" onclick="clearSingleMegaFilter('${pl.kind}', '${String(pl.val).replace(/'/g, "\\'")}')"><span>${pl.label}</span><i class="fa-solid fa-xmark" style="font-size:10px;"></i></button>`
      )
      .join("") +
    `<button type="button" class="hsp-active-pill-clear" onclick="resetMegaSearchFilters()">Xóa tất cả</button>`;
}

function updateMegaLiveCount() {
  const badge = document.getElementById("megaLiveMatchBadge");
  if (typeof PROPERTIES === "undefined") return;
  const f = getMegaFilterPayload();
  const count = PROPERTIES.filter((p) => matchesMegaFilter(p, f)).length;
  if (badge) badge.textContent = `Xem ${count} tin phù hợp`;
  renderActiveFilterPills(f);
}

function resetMegaSearchFilters() {
  const searchInput = document.getElementById("hspSearchInput");
  if (searchInput) {
    searchInput.value = "";
    delete searchInput.dataset.pickedLabel;
  }
  const segCatDisp = document.getElementById("segCatDisplay");
  if (segCatDisp) segCatDisp.textContent = "Tất cả loại hình";
  const segPriceDisp = document.getElementById("segPriceDisplay");
  if (segPriceDisp) segPriceDisp.textContent = "Tất cả giá";
  document.querySelectorAll("#segCatPopover .hsp-seg-item, #segPricePopover .hsp-seg-item").forEach((b, idx) => b.classList.toggle("active", idx === 0));
  const catEl = document.getElementById("megaCatSelect");
  if (catEl) catEl.value = "all";
  const cityEl = document.getElementById("megaCitySelect");
  if (cityEl) cityEl.value = "TP. Hồ Chí Minh";
  populateMegaWards();
  const projEl = document.getElementById("megaProjectSelect");
  if (projEl) projEl.value = "all";
  ["megaFurnitureSelect", "megaBedsSelect", "megaDirectionSelect"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "all";
  });
  document.querySelectorAll("#hspMegaPanel .hsp-q-pill").forEach((p) => p.classList.remove("active"));
  MEGA_PRICE_STATE = { min: 0, max: 999, label: "Tất cả giá" };
  const minIn = document.getElementById("segPriceMinInput");
  const maxIn = document.getElementById("segPriceMaxInput");
  if (minIn) minIn.value = "";
  if (maxIn) maxIn.value = "";
  const priceEl = document.getElementById("megaPriceRange");
  if (priceEl) priceEl.value = "0-999";
  const areaEl = document.getElementById("megaAreaRange");
  if (areaEl) areaEl.value = "0";
  if (typeof clearLandmarkFilter === "function") clearLandmarkFilter();
  updateMegaLiveCount();
}

function initMegaSearchSync() {
  populateMegaCities();
  populateMegaWards();
  populateMegaProjects();
  updateMegaSliderLabels();
  const clearEmailAutofill = () => {
    const inp = document.getElementById("hspSearchInput");
    if (inp && inp.value && inp.value.includes("@")) {
      inp.value = "";
    }
  };
  clearEmailAutofill();
  setTimeout(clearEmailAutofill, 150);
  setTimeout(clearEmailAutofill, 500);
}

function updateMapFilterChipCounts() {
  const mapVisible = PROPERTIES.filter((p) => p.tier !== "free" && p.mapTier !== "free" && p.zoneId !== 13);
  const countMap = {
    mapCountAll: mapVisible.length,
    mapCountPhongTro: mapVisible.filter((p) => p.category === "phong-tro").length,
    mapCountCanHo: mapVisible.filter((p) => p.category === "can-ho-chung-cu").length,
    mapCountNhaO: mapVisible.filter((p) => p.category === "nha-o").length,
    mapCountMatBang: mapVisible.filter((p) => p.category === "mat-bang-van-phong").length,
    mapCountKhoXuong: mapVisible.filter((p) => p.category === "bai-dat-kho-xuong").length,
    mapCountHomestay: mapVisible.filter((p) => p.category === "homestay-airbnb").length
  };
  Object.entries(countMap).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

function executeMegaSearch() {
  STATE.searchFilter = getMegaFilterPayload();
  document.getElementById("hspMegaPanel")?.classList.remove("is-open");
  navigateTo("/search.html");
}

// ==========================================================================
// 3. 3D LUXURY "BANNER ĐẶC QUYỀN" (.sv1) SLIDER
// ==========================================================================
const SV1_CYLINDER = {
  angle: 0,
  targetAngle: null,
  paused: false,
  dragging: false,
  dragMoved: false,
  lastY: 0,
  rafId: null
};

function getSv1CylinderRadius() {
  return window.innerWidth <= 980 ? 340 : 440;
}

function updateSv1LeftAndControlsOnly() {
  const slide = VIP_EXCLUSIVE_SLIDES[STATE.sv1Index];
  const container = document.getElementById("sv1CardContainer");
  if (!container || !slide) return;

  const leftEl = container.querySelector(".sv1-left");
  if (leftEl) {
    leftEl.innerHTML = `
      <div class="sv1-verified-row">
        <span class="lc-vip-tag tag-dacquyen" style="position:static;padding:4px 11px;font-size:11px;">✦ ĐẶC QUYỀN</span>
        <span class="sv1-badge-verified"><i class="fa-solid fa-shield-check"></i> ĐÃ XÁC MINH THỰC TẾ</span>
      </div>
      <div class="sv1-loc">
        <i class="fa-solid fa-location-dot"></i>
        <span>${slide.location}</span>
      </div>
      <div class="sv1-price tabular-nums">
        ${slide.price} <span>${slide.unit}</span>
      </div>
      <a href="javascript:void(0)" onclick="openPropertyDetailView(${slide.id})" class="sv1-title">
        ${slide.title}
      </a>
      <p class="sv1-desc">${slide.desc}</p>
      <div class="sv1-specs tabular-nums">
        <span class="sv1-spec-pill"><i class="fa-solid fa-maximize"></i> ${slide.area}</span>
        <span class="sv1-spec-pill"><i class="fa-solid fa-bed"></i> ${slide.beds}</span>
        <span class="sv1-spec-pill"><i class="fa-solid fa-bath"></i> ${slide.baths}</span>
        <span class="sv1-spec-pill"><i class="fa-solid fa-bolt"></i> Điện ${slide.elec}</span>
      </div>
      <div class="sv1-cta-row">
        <a href="javascript:void(0)" onclick="openPropertyDetailView(${slide.id})" class="sv1-btn-detail">
          Xem chi tiết đặc quyền <i class="fa-solid fa-arrow-right"></i>
        </a>
        <button type="button" class="sv1-btn-map-focus" onclick="focusPropertyOnHeroMap(${slide.id})">
          <i class="fa-solid fa-map-location-dot"></i> Định vị trên bản đồ
        </button>
      </div>
    `;
  }

  const phoneBtn = document.getElementById("sv1ActivePhoneBtn");
  if (phoneBtn) {
    phoneBtn.setAttribute("onclick", `revealSv1Phone(this, '${slide.phone}')`);
    const span = phoneBtn.querySelector(".phone-text");
    if (span) span.textContent = `${slide.phoneMasked} • Bấm hiện số`;
  }

  const thumbsRow = document.getElementById("sv1ThumbsRow");
  if (thumbsRow) {
    thumbsRow.innerHTML = slide.photos
      .map(
        (imgUrl, idx) => `
        <div class="sv1-r-thumb ${idx === STATE.sv1ThumbIndex ? "active" : ""}" onclick="switchSv1Thumb(${idx})">
          <img src="${imgUrl}" alt="Thumb ${idx + 1}" onerror="this.src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&auto=format&fit=crop&q=80'">
        </div>
      `
      )
      .join("");
  }

  const total = VIP_EXCLUSIVE_SLIDES.length;
  const dotsWrap = document.querySelector(".sv1-dot-indicator");
  if (dotsWrap) {
    if (dotsWrap.children.length !== total) {
      dotsWrap.innerHTML = VIP_EXCLUSIVE_SLIDES.map(
        (_, idx) => `<button type="button" class="sv1-dot ${idx === STATE.sv1Index ? "active" : ""}" onclick="switchSv1Slide(${idx}, true)" aria-label="Slide ${idx + 1}"></button>`
      ).join("");
    } else {
      dotsWrap.querySelectorAll(".sv1-dot").forEach((dot, idx) => {
        dot.classList.toggle("active", idx === STATE.sv1Index);
      });
    }
  }
}

function startSv1CylinderLoop() {
  if (SV1_CYLINDER.rafId) return;
  const tick = () => {
    const rotor = document.getElementById("sv1OrbitRotor");
    const total = VIP_EXCLUSIVE_SLIDES.length;
    if (rotor && total > 0) {
      const step = 360 / total;
      const radius = getSv1CylinderRadius();

      if (SV1_CYLINDER.targetAngle !== null) {
        const diff = SV1_CYLINDER.targetAngle - SV1_CYLINDER.angle;
        if (Math.abs(diff) < 0.15) {
          SV1_CYLINDER.angle = SV1_CYLINDER.targetAngle;
          SV1_CYLINDER.targetAngle = null;
        } else {
          SV1_CYLINDER.angle += diff * 0.09;
        }
      } else if (!SV1_CYLINDER.paused && !SV1_CYLINDER.dragging) {
        // Xoay chậm liên tục từ dưới lên trên quanh trục ngang (X)
        SV1_CYLINDER.angle += 0.13;
      }

      rotor.style.transform = `translateZ(-${radius}px) rotateX(${SV1_CYLINDER.angle.toFixed(3)}deg)`;

      // Xác định thẻ đang hướng chính diện & ẩn nửa sau của trụ để luôn thấy ~2.5 thẻ lớn rõ nét
      const rawIdx = Math.round(SV1_CYLINDER.angle / step);
      const frontIdx = ((rawIdx % total) + total) % total;
      rotor.querySelectorAll(".sv1-3d-orbit-card").forEach((c, i) => {
        const cardRot = SV1_CYLINDER.angle - i * step;
        const rad = (cardRot * Math.PI) / 180;
        const facing = Math.cos(rad);
        c.classList.toggle("is-center", i === frontIdx);
        c.classList.toggle("is-back", facing < 0.25);
      });

      if (frontIdx !== STATE.sv1Index) {
        STATE.sv1Index = frontIdx;
        STATE.sv1ThumbIndex = 0;
        updateSv1LeftAndControlsOnly();
      }
    }
    SV1_CYLINDER.rafId = requestAnimationFrame(tick);
  };
  SV1_CYLINDER.rafId = requestAnimationFrame(tick);
}

function bindSv1OrbitInteractions(stage) {
  if (!stage || stage.dataset.orbitBound === "1") return;
  stage.dataset.orbitBound = "1";

  stage.addEventListener("mouseenter", () => {
    SV1_CYLINDER.paused = true;
  });
  stage.addEventListener("mouseleave", () => {
    SV1_CYLINDER.paused = false;
    SV1_CYLINDER.dragging = false;
  });

  stage.addEventListener("pointerdown", (e) => {
    SV1_CYLINDER.dragging = true;
    SV1_CYLINDER.dragMoved = false;
    SV1_CYLINDER.targetAngle = null;
    SV1_CYLINDER.lastY = e.clientY;
  });
  window.addEventListener("pointermove", (e) => {
    if (!SV1_CYLINDER.dragging) return;
    const dy = e.clientY - SV1_CYLINDER.lastY;
    if (Math.abs(dy) > 3) SV1_CYLINDER.dragMoved = true;
    SV1_CYLINDER.lastY = e.clientY;
    SV1_CYLINDER.angle -= dy * 0.35;
  });
  window.addEventListener("pointerup", () => {
    SV1_CYLINDER.dragging = false;
  });
}

function handleSv1OrbitCardClick(idx, propId) {
  if (SV1_CYLINDER.dragMoved) {
    SV1_CYLINDER.dragMoved = false;
    return;
  }
  if (idx === STATE.sv1Index) {
    openPropertyDetailView(propId);
  } else {
    switchSv1Slide(idx, true);
  }
}

function renderSv1Slider() {
  const slide = VIP_EXCLUSIVE_SLIDES[STATE.sv1Index];
  const container = document.getElementById("sv1CardContainer");
  if (!container || !slide) return;

  const total = VIP_EXCLUSIVE_SLIDES.length;
  const step = 360 / total;
  const radius = getSv1CylinderRadius();
  const existingCards = container.querySelectorAll(".sv1-3d-orbit-card");

  if (!container.querySelector("#sv1OrbitRotor") || existingCards.length !== total) {
    container.innerHTML = `
      <div class="sv1-left"></div>
      <div class="sv1-right">
        <div class="sv1-3d-orbit-stage" id="sv1OrbitStage">
          <div class="sv1-3d-orbit-rotor" id="sv1OrbitRotor">
            ${VIP_EXCLUSIVE_SLIDES.map((s, idx) => {
              const cardAngle = -idx * step;
              return `
                <div class="sv1-3d-orbit-card ${idx === STATE.sv1Index ? "is-center" : ""}" data-orbit-idx="${idx}" style="transform: rotateX(${cardAngle}deg) translateZ(${radius}px);" onclick="handleSv1OrbitCardClick(${idx}, ${s.id})">
                  <span class="sv1-orbit-chip"><i class="fa-solid fa-crown" style="margin-right:4px;"></i>ĐẶC QUYỀN</span>
                  <img class="sv1-orbit-photo" src="${s.photos[0]}" alt="${s.title}" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80'">
                  <div class="sv1-3d-glare"></div>
                  <div class="sv1-orbit-overlay">
                    <div style="min-width:0;">
                      <div class="sv1-orbit-price">${s.price} ${s.unit}</div>
                      <div class="sv1-orbit-title">${s.title}</div>
                    </div>
                    <span style="font-size:11px;font-weight:800;color:#ffd700;white-space:nowrap;">Xem <i class="fa-solid fa-arrow-right"></i></span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
        <button type="button" class="sv1-r-phone" id="sv1ActivePhoneBtn" onclick="revealSv1Phone(this, '${slide.phone}')">
          <span class="sv1-r-phone-icon"><i class="fa-solid fa-phone-volume"></i></span>
          <span class="phone-text">${slide.phoneMasked} • Bấm hiện số</span>
        </button>
        <div class="sv1-r-thumbs" id="sv1ThumbsRow"></div>
      </div>
    `;
    bindSv1OrbitInteractions(document.getElementById("sv1OrbitStage"));
    startSv1CylinderLoop();
  }

  // Cập nhật ảnh thumbnail của thẻ đang ở chính diện nếu người dùng bấm thumb
  const activeCardImg = container.querySelector(`.sv1-3d-orbit-card[data-orbit-idx="${STATE.sv1Index}"] img.sv1-orbit-photo`);
  if (activeCardImg) {
    activeCardImg.src = slide.photos[STATE.sv1ThumbIndex] || slide.photos[0];
  }
  updateSv1LeftAndControlsOnly();
}

function switchSv1Slide(dirOrIdx, isDirect = false) {
  const total = VIP_EXCLUSIVE_SLIDES.length;
  const step = 360 / total;
  const nextIdx = isDirect
    ? ((dirOrIdx % total) + total) % total
    : ((STATE.sv1Index + dirOrIdx) % total + total) % total;

  // Tìm góc quay ngắn nhất trên trục trụ dọc tới thẻ đích
  const currentMod = ((SV1_CYLINDER.angle % 360) + 360) % 360;
  let targetMod = nextIdx * step;
  let delta = targetMod - currentMod;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  SV1_CYLINDER.targetAngle = SV1_CYLINDER.angle + delta;

  STATE.sv1Index = nextIdx;
  STATE.sv1ThumbIndex = 0;
  const rotor = document.getElementById("sv1OrbitRotor");
  if (rotor) {
    rotor.querySelectorAll(".sv1-3d-orbit-card").forEach((c, i) => {
      c.classList.toggle("is-center", i === nextIdx);
    });
  }
  updateSv1LeftAndControlsOnly();
}

function switchSv1Thumb(thumbIdx) {
  STATE.sv1ThumbIndex = thumbIdx;
  renderSv1Slider();
}

function revealSv1Phone(btnEl, fullPhone) {
  const span = btnEl.querySelector(".phone-text");
  if (span) {
    span.innerHTML = `${fullPhone} • <span style="color:#f15a22;">Đã sao chép</span>`;
    navigator.clipboard?.writeText(fullPhone.replace(/\s+/g, ""));
  }
}

// ==========================================================================
// 4. SIGNATURE LISTING CARDS (.lc-card) FOR SPOTLIGHT, FEATURED, PRIME
//    - Decluttered top-left VIP badge (Point #1)
//    - Refined card borders & hover glow (Point #4)
//    - 2-Way Card <-> Map Pin Hover Sync (Point #5)
//    - Quick 1-click Compare button (Point #7)
// ==========================================================================
function buildListingCardHTML(item) {
  const isFav = STATE.favorites.has(item.id);
  const isComp = STATE.compareList.includes(item.id);
  const zoneClass =
    item.tier === "spotlight"
      ? "zone-spotlight"
      : item.tier === "featured"
      ? "zone-featured"
      : item.tier === "prime"
      ? "zone-prime"
      : "";

  // 4-Tier VIP Icon Hierarchy (Basic & Free have no badge)
  let cleanVipLabel = "";
  let badgeClass = "";
  if (item.zoneId === 1 || item.mapTier === "banner") {
    cleanVipLabel = "✦ ĐẶC QUYỀN";
    badgeClass = "tag-dacquyen";
  } else if (item.tier === "spotlight") {
    cleanVipLabel = "✦ VIP 1";
    badgeClass = "tag-vip1";
  } else if (item.tier === "featured") {
    cleanVipLabel = "• VIP 2";
    badgeClass = "tag-vip2";
  } else if (item.tier === "prime") {
    cleanVipLabel = "VIP 3";
    badgeClass = "tag-vip3";
  }

  const stickerMap = {
    urgent: { name: "Giảm Sâu", cls: "sticker-urgent", icon: "fa-bolt" },
    hot: { name: "HOT", cls: "sticker-hot", icon: "fa-fire" },
    promo: { name: "Ưu Đãi", cls: "sticker-promo", icon: "fa-gift" }
  };
  const stObj = item.sticker ? stickerMap[item.sticker] : null;
  const stickerHTML = stObj
    ? `<span class="sticker-pill ${stObj.cls}" style="position:absolute;bottom:calc(100% + 3px);right:0;font-size:9px;padding:1.5px 7px;line-height:1.25;border-radius:999px;white-space:nowrap;box-shadow:none;pointer-events:none;z-index:2;"><i class="fa-solid ${stObj.icon}" style="font-size:8px;"></i> ${stObj.name}</span>`
    : "";

  return `
    <div class="lc-card ${zoneClass}" onclick="openPropertyDetailView(${item.id})" onmouseenter="highlightMapPin(${item.id}, true)" onmouseleave="highlightMapPin(${item.id}, false)">
      <div class="lc-card-img">
        <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=80'">
        <div class="lc-card-badges">
          ${cleanVipLabel ? `<span class="lc-vip-tag ${badgeClass}">${cleanVipLabel}</span>` : ""}
        </div>
        <div class="lc-card-top-actions">
          <button type="button" class="lc-compare-btn ${isComp ? "active" : ""}" onclick="toggleCompare(event, ${item.id}, this)" title="So sánh phòng này">
            <i class="fa-solid fa-scale-balanced"></i>
          </button>
          <button type="button" class="lc-fav-btn ${isFav ? "active" : ""}" onclick="toggleFav(event, ${item.id}, this)" title="Lưu tin">
            <i class="fa-${isFav ? "solid" : "regular"} fa-heart"></i>
          </button>
        </div>
        <div class="lc-photo-count">
          <i class="fa-regular fa-images"></i> ${item.gallery?.length || 4}
        </div>
      </div>

      <div class="lc-card-body">
        <div class="lc-card-toprow">
          <div class="lc-card-price tabular-nums">
            ${item.priceText} <span>| Tháng</span>
          </div>
          <div style="position:relative;display:inline-flex;align-items:center;">
            ${stickerHTML}
            <span class="lc-card-type">${item.categoryLabel}</span>
          </div>
        </div>

        <div class="lc-card-title">${item.title}</div>

        <div class="lc-utility-bar demo-utility-bar">
          <span>Điện: ${item.elec}</span>
          <span>Nước: ${item.water}</span>
          <span>${(() => {
            if (item.otherCost) return `CP Khác: ${item.otherCost}`;
            const sumK = [item.internet, item.laundry, item.trash, item.parking].reduce((s, v) => {
              const n = parseFloat(String(v || "").replace(/[^0-9.]/g, ""));
              return s + (Number.isFinite(n) && n > 0 ? n : 0);
            }, 0);
            return sumK > 0 ? `CP Khác: ${Number(sumK.toFixed(2))}k` : "CP Khác: --";
          })()}</span>
        </div>

        <div class="lc-card-footer">
          <div class="lc-card-addr">
            <i class="fa-solid fa-location-dot"></i>
            <div class="lc-card-addr-text">
              <span class="lc-addr-ward">${(item.ward || "").toUpperCase()}</span>
              <span class="lc-addr-city">${(item.city || "").toUpperCase()}</span>
            </div>
          </div>

          <div class="lc-card-specs">
            <span><i class="fa-solid fa-maximize"></i> ${item.area}&nbsp;m²</span>
            <span><i class="fa-solid fa-bed"></i> ${item.beds}</span>
            <span><i class="fa-solid fa-bath"></i> ${item.baths}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAllHomeGrids() {
  const spotlightGrid = document.getElementById("spotlightGrid");
  const featuredGrid = document.getElementById("featuredGrid");
  const primeGrid = document.getElementById("primeGrid");

  if (spotlightGrid) {
    spotlightGrid.innerHTML = PROPERTIES.filter((p) => p.tier === "spotlight")
      .slice(0, 8)
      .map(buildListingCardHTML)
      .join("");
  }
  if (featuredGrid) {
    featuredGrid.innerHTML = PROPERTIES.filter((p) => p.tier === "featured")
      .slice(0, 8)
      .map(buildListingCardHTML)
      .join("");
  }
  if (primeGrid) {
    primeGrid.innerHTML = PROPERTIES.filter((p) => p.tier === "prime")
      .slice(0, 8)
      .map(buildListingCardHTML)
      .join("");
  }
}

function filterTierSection(tierName, catFilter, btnEl) {
  if (btnEl) {
    btnEl.parentElement.querySelectorAll(".lc-quick-tab").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  const targetId =
    tierName === "spotlight" ? "spotlightGrid" : tierName === "featured" ? "featuredGrid" : "primeGrid";
  const grid = document.getElementById(targetId);
  if (!grid) return;

  const filtered = PROPERTIES.filter((p) => {
    if (p.tier !== tierName) return false;
    if (catFilter === "all") return true;
    return p.category === catFilter;
  });

  grid.innerHTML = (filtered.length ? filtered : PROPERTIES.filter((p) => p.tier === tierName))
    .map(buildListingCardHTML)
    .join("");
}

function sortTierSection(tierName, sortMode) {
  const targetId =
    tierName === "spotlight" ? "spotlightGrid" : tierName === "featured" ? "featuredGrid" : "primeGrid";
  const grid = document.getElementById(targetId);
  if (!grid) return;

  const list = PROPERTIES.filter((p) => p.tier === tierName).slice();
  if (sortMode === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (sortMode === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (sortMode === "area-desc") list.sort((a, b) => b.area - a.area);

  grid.innerHTML = list.map(buildListingCardHTML).join("");
}

function toggleFav(e, propId, btnEl) {
  e.stopPropagation();
  if (STATE.favorites.has(propId)) {
    STATE.favorites.delete(propId);
    btnEl.classList.remove("active");
    btnEl.innerHTML = '<i class="fa-regular fa-heart"></i>';
  } else {
    STATE.favorites.add(propId);
    btnEl.classList.add("active");
    btnEl.innerHTML = '<i class="fa-solid fa-heart"></i>';
  }
}

// Helper: Priority Rank for 6-tier sorting (VIP Banner -> VIP 1 -> VIP 2 -> VIP 3 -> Tin thường -> Tin miễn phí)
function getTierPriorityRank(item) {
  if (item.zoneId === 1 || item.mapTier === "banner" || item.isVipPin) return 1;
  if (item.tier === "spotlight") return 2;
  if (item.tier === "featured") return 3;
  if (item.tier === "prime") return 4;
  if (item.tier === "basic") return 5;
  return 6; // free
}

// ==========================================================================
// 5. CATEGORY & SEARCH VIEW (/phong-tro.html, /nha-o.html, /search.html...)
// ==========================================================================
const SEO_WARD_LOOKUP = [
  { slug: "p-cau-kieu", ward: "P. Cầu Kiệu", city: "TP. Hồ Chí Minh" },
  { slug: "p-hanh-thong", ward: "P. Hạnh Thông", city: "TP. Hồ Chí Minh" },
  { slug: "p-gia-dinh", ward: "P. Gia Định", city: "TP. Hồ Chí Minh" },
  { slug: "p-tan-son-nhi", ward: "P. Tân Sơn Nhì", city: "TP. Hồ Chí Minh" },
  { slug: "p-dien-hong", ward: "P. Diên Hồng", city: "TP. Hồ Chí Minh" },
  { slug: "p-an-dong", ward: "P. An Đông", city: "TP. Hồ Chí Minh" },
  { slug: "p-hoa-hung", ward: "P. Hòa Hưng", city: "TP. Hồ Chí Minh" },
  { slug: "p-cau-ong-lanh", ward: "P. Cầu Ông Lãnh", city: "TP. Hồ Chí Minh" },
  { slug: "p-nhieu-loc", ward: "P. Nhiêu Lộc", city: "TP. Hồ Chí Minh" },
  { slug: "p-tan-son-nhat", ward: "P. Tân Sơn Nhất", city: "TP. Hồ Chí Minh" },
  { slug: "p-tan-phu", ward: "P. Tân Phú", city: "TP. Hồ Chí Minh" },
  { slug: "p-tan-hung", ward: "P. Tân Hưng", city: "TP. Hồ Chí Minh" },
  { slug: "p-thoi-an", ward: "P. Thới An", city: "TP. Hồ Chí Minh" },
  { slug: "p-binh-tri-dong", ward: "P. Bình Trị Đông", city: "TP. Hồ Chí Minh" },
  { slug: "p-nghia-do", ward: "P. Nghĩa Đô", city: "TP. Hà Nội" },
  { slug: "p-dong-da", ward: "P. Đống Đa", city: "TP. Hà Nội" },
  { slug: "p-cau-giay", ward: "P. Cầu Giấy", city: "TP. Hà Nội" },
  { slug: "p-hoan-kiem", ward: "P. Hoàn Kiếm", city: "TP. Hà Nội" },
  { slug: "p-thanh-xuan", ward: "P. Thanh Xuân", city: "TP. Hà Nội" }
];

const SEO_PRICE_BRACKETS = {
  "duoi-4-trieu": { label: "Dưới 4 Triệu/tháng", min: 0, max: 4 },
  "tu-4-den-7-trieu": { label: "Từ 4 - 7 Triệu/tháng", min: 4, max: 7 },
  "tu-7-den-15-trieu": { label: "Từ 7 - 15 Triệu/tháng", min: 7, max: 15 },
  "tren-15-trieu": { label: "Trên 15 Triệu/tháng", min: 15, max: 9999 }
};

function openCategoryView(route) {
  document.querySelectorAll(".app-route-view").forEach((el) => (el.style.display = "none"));
  const catView = document.getElementById("view-category");
  catView.style.display = "block";
  STATE.lastCategoryRoute = route;

  let catKey = "all";
  let catName = "Bất Động Sản Cho Thuê";
  let tierFilter = null;

  if (route.includes("phong-tro")) {
    catKey = "phong-tro";
    catName = "Phòng Trọ / CHDV";
  } else if (route.includes("nha-o") || route.includes("nha-nguyen-can")) {
    catKey = "nha-o";
    catName = "Nhà Nguyên Căn";
  } else if (route.includes("can-ho")) {
    catKey = "can-ho-chung-cu";
    catName = "Căn Hộ Chung Cư";
  } else if (route.includes("mat-bang")) {
    catKey = "mat-bang-van-phong";
    catName = "Mặt Bằng Văn Phòng";
  } else if (route.includes("bai-dat") || route.includes("dat-xuong")) {
    catKey = "bai-dat-kho-xuong";
    catName = "Đất - Xưởng, Kho - Bãi";
  } else if (route.includes("homestay")) {
    catKey = "homestay-airbnb";
    catName = "HomeStay / Airbnb";
  } else if (route.includes("spotlight")) {
    tierFilter = "spotlight";
    catName = "Spotlight — TOP 1 Hiển Thị";
  } else if (route.includes("featured")) {
    tierFilter = "featured";
    catName = "Featured — TOP 2 Nổi Bật";
  } else if (route.includes("prime")) {
    tierFilter = "prime";
    catName = "Prime — TOP 3 Hiệu Quả";
  } else if (route.includes("search")) {
    catKey = STATE.searchFilter.category || "all";
  }

  // Detect SEO Ward / City in URL
  const matchedWardObj = SEO_WARD_LOOKUP.find((w) => route.includes(w.slug));
  let seoCity = "all";
  if (matchedWardObj) seoCity = matchedWardObj.city;
  else if (route.includes("tp-ha-noi") || route.includes("ha-noi")) seoCity = "TP. Hà Nội";
  else if (route.includes("tp-ho-chi-minh")) seoCity = "TP. Hồ Chí Minh";

  // Detect SEO Price Bracket in URL
  const matchedPriceKey = Object.keys(SEO_PRICE_BRACKETS).find((k) => route.includes(k)) || "all";
  const priceBracket = matchedPriceKey !== "all" ? SEO_PRICE_BRACKETS[matchedPriceKey] : null;

  // Sync select controls with parsed SEO URL
  const priceSel = document.getElementById("catBarPrice");
  if (priceSel) priceSel.value = matchedPriceKey;
  const citySel = document.getElementById("catBarCity");
  if (citySel) citySel.value = seoCity;
  const areaSel = document.getElementById("catBarArea");
  if (areaSel && !route.includes("search")) areaSel.value = "0";

  // Build SEO H1 Title & Subtitle
  const titleParts = [`Cho Thuê ${catName}`];
  if (matchedWardObj) titleParts.push(`Tại ${matchedWardObj.ward} (${matchedWardObj.city})`);
  else if (seoCity !== "all") titleParts.push(`Tại ${seoCity}`);
  if (priceBracket) titleParts.push(`— ${priceBracket.label}`);
  if (route.includes("search") && STATE.searchFilter.keyword) {
    titleParts.push(`• Từ khóa "${STATE.searchFilter.keyword}"`);
  }

  const finalTitle = titleParts.join(" ");
  const finalSub = `Chuẩn SEO Vị Trí & Giá Thành • Xếp hạng ưu tiên từ Banner Đặc Quyền → VIP 1 → VIP 2 → VIP 3 → Tin Cơ Bản → Miễn Phí`;

  document.getElementById("catViewTitle").textContent = finalTitle;
  document.getElementById("catViewSubtitle").textContent = finalSub;
  updateDocumentSeoMeta(finalTitle, `${finalTitle}. Minh bạch giá điện nước, tổng chi phí thực tế hàng tháng và bản đồ 3D chính chủ.`);

  STATE.activeCategoryContext = {
    catKey,
    catName,
    tierFilter,
    ward: matchedWardObj ? matchedWardObj.ward : (route.includes("search") ? STATE.searchFilter.ward : "all"),
    city: seoCity !== "all" ? seoCity : (route.includes("search") ? STATE.searchFilter.city : "all"),
    priceKey: matchedPriceKey,
    isSearchRoute: route.includes("search")
  };

  renderCategoryQuickSeoBar();
  applyCategoryBarFilter(false);
}

function renderCategoryQuickSeoBar() {
  const bar = document.getElementById("catSeoQuickLinksBar");
  if (!bar) return;
  const ctx = STATE.activeCategoryContext || { catKey: "all", catName: "Bất Động Sản" };
  const baseSlug = ctx.catKey === "all" ? "cho-thue-bat-dong-san" : `cho-thue-${ctx.catKey === "nha-o" ? "nha-nguyen-can" : ctx.catKey === "bai-dat-kho-xuong" ? "dat-xuong-kho-bai" : ctx.catKey}`;

  const wardLinks = [
    { label: "Tất cả khu vực", url: `/${baseSlug}` },
    { label: "P. Cầu Kiệu", url: `/${baseSlug}-p-cau-kieu` },
    { label: "P. Hòa Hưng", url: `/${baseSlug}-p-hoa-hung` },
    { label: "P. Nhiêu Lộc", url: `/${baseSlug}-p-nhieu-loc` },
    { label: "P. Gia Định", url: `/${baseSlug}-p-gia-dinh` },
    { label: "TP. Hà Nội", url: `/${baseSlug}-tp-ha-noi` }
  ];
  const priceLinks = [
    { key: "duoi-4-trieu", label: "Dưới 4 Triệu", url: `/${baseSlug}-gia-duoi-4-trieu` },
    { key: "tu-4-den-7-trieu", label: "4 - 7 Triệu", url: `/${baseSlug}-gia-tu-4-den-7-trieu` },
    { key: "tu-7-den-15-trieu", label: "7 - 15 Triệu", url: `/${baseSlug}-gia-tu-7-den-15-trieu` },
    { key: "tren-15-trieu", label: "Trên 15 Triệu", url: `/${baseSlug}-gia-tren-15-trieu` }
  ];

  bar.innerHTML = `
    <span style="font-size:11.5px;font-weight:800;color:#0f172a;"><i class="fa-solid fa-location-dot" style="color:var(--ctt-orange);"></i> SEO Vị trí:</span>
    ${wardLinks.map((w) => `<a href="javascript:void(0)" onclick="navigateTo('${w.url}')" class="seo-price-chip">${w.label}</a>`).join("")}
    <span style="font-size:11.5px;font-weight:800;color:#0f172a;margin-left:8px;"><i class="fa-solid fa-tag" style="color:var(--ctt-orange);"></i> SEO Giá thành:</span>
    ${priceLinks.map((p) => `<a href="javascript:void(0)" onclick="navigateTo('${p.url}')" class="seo-price-chip ${ctx.priceKey === p.key ? "active" : ""}">${p.label}</a>`).join("")}
  `;
}

const CAT_PAGE_SIZE = 24;

function renderCttPaginationHTML(currentPage, totalPages, jsCallbackName) {
  if (totalPages <= 1) return "";
  const pages = [];
  const addBtn = (p, label = p, isAct = false, isDis = false) =>
    `<button type="button" class="ctt-page-btn ${isAct ? "active" : ""}" ${isDis ? "disabled" : ""} onclick="${jsCallbackName}(${p})">${label}</button>`;

  pages.push(addBtn(Math.max(1, currentPage - 1), '<i class="fa-solid fa-chevron-left"></i>', false, currentPage <= 1));
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  if (start > 1) {
    pages.push(addBtn(1, "1", currentPage === 1));
    if (start > 2) pages.push(`<span class="ctt-page-info">…</span>`);
  }
  for (let p = start; p <= end; p++) {
    pages.push(addBtn(p, String(p), p === currentPage));
  }
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push(`<span class="ctt-page-info">…</span>`);
    pages.push(addBtn(totalPages, String(totalPages), currentPage === totalPages));
  }
  pages.push(addBtn(Math.min(totalPages, currentPage + 1), '<i class="fa-solid fa-chevron-right"></i>', false, currentPage >= totalPages));
  return pages.join("");
}

function goToCategoryPage(page) {
  applyCategoryBarFilter(false, page);
  const gridEl = document.getElementById("categoryListingsGrid");
  if (gridEl) {
    const y = gridEl.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }
}

function applyCategoryBarFilter(updateUrl = true, page = 1) {
  const ctx = STATE.activeCategoryContext || { catKey: "all", catName: "Bất Động Sản", tierFilter: null, ward: "all", city: "all", priceKey: "all", isSearchRoute: false };
  const priceKey = document.getElementById("catBarPrice")?.value || "all";
  const areaMin = parseFloat(document.getElementById("catBarArea")?.value || "0");
  const cityVal = document.getElementById("catBarCity")?.value || "all";
  const bracket = priceKey !== "all" ? SEO_PRICE_BRACKETS[priceKey] : null;

  if (updateUrl) {
    const baseSlug = ctx.catKey === "all" ? "tim-kiem" : `cho-thue-${ctx.catKey === "nha-o" ? "nha-nguyen-can" : ctx.catKey === "bai-dat-kho-xuong" ? "dat-xuong-kho-bai" : ctx.catKey}`;
    const cityPart = cityVal !== "all" ? `-${toVietnameseSlug(cityVal)}` : "";
    const pricePart = priceKey !== "all" ? `-gia-${priceKey}` : "";
    window.history.replaceState({}, "", `#/${baseSlug}${cityPart}${pricePart}`);
  }

  let filtered = PROPERTIES.filter((p) => {
    if (p.isHidden) return false;
    if (ctx.tierFilter && p.tier !== ctx.tierFilter) return false;
    if (ctx.catKey !== "all" && p.category !== ctx.catKey) return false;
    if (ctx.ward && ctx.ward !== "all" && p.ward !== ctx.ward) return false;
    if (cityVal !== "all" && p.city !== cityVal) return false;
    if (bracket && (p.price < bracket.min || p.price > bracket.max)) return false;
    if (areaMin > 0 && p.area < areaMin) return false;
    if (ctx.isSearchRoute) {
      if (!matchesMegaFilter(p, { ...STATE.searchFilter, category: "all", city: "all", ward: "all" })) return false;
    }
    return true;
  });

  filtered.sort((a, b) => getTierPriorityRank(a) - getTierPriorityRank(b));

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / CAT_PAGE_SIZE));
  const safePage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  STATE.catCurrentPage = safePage;
  const pageSlice = filtered.slice((safePage - 1) * CAT_PAGE_SIZE, safePage * CAT_PAGE_SIZE);

  document.getElementById("catResultCount").textContent = `${new Intl.NumberFormat("vi-VN").format(totalItems)} tin đăng phù hợp`;
  document.getElementById("categoryListingsGrid").innerHTML = pageSlice.length
    ? pageSlice.map(buildListingCardHTML).join("")
    : `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;background:#fff;border-radius:16px;border:1px solid #e2e8f0;">
         <i class="fa-solid fa-magnifying-glass" style="font-size:32px;color:#cbd5e1;margin-bottom:10px;"></i>
         <h3 style="font-size:17px;font-weight:800;color:#0f172a;margin-bottom:6px;">Chưa có tin đăng trong phân khúc này</h3>
         <p style="font-size:13px;color:#64748b;margin-bottom:16px;">Bạn có thể bấm Đặt lại bộ lọc để xem toàn bộ danh sách tin đã xác minh.</p>
         <button type="button" class="hsp-btn-apply" onclick="resetMegaSearchFilters();navigateTo('/cho-thue-phong-tro')">Đặt lại bộ lọc & Xem tất cả</button>
       </div>`;

  const pagBar = document.getElementById("catPaginationBar");
  if (pagBar) {
    pagBar.innerHTML = renderCttPaginationHTML(safePage, totalPages, "goToCategoryPage");
  }

  const seoBox = document.getElementById("categorySeoFooterBox");
  if (seoBox) {
    const locLabel = ctx.ward && ctx.ward !== "all" ? `${ctx.ward}, ${cityVal !== "all" ? cityVal : "TP. Hồ Chí Minh"}` : (cityVal !== "all" ? cityVal : "TP. Hồ Chí Minh & Hà Nội");
    const priceLabel = bracket ? bracket.label.toLowerCase() : "mọi phân khúc giá từ bình dân đến cao cấp";
    seoBox.innerHTML = `
      <h3 style="font-size:16px;font-weight:900;color:#0f172a;margin-bottom:6px;">
        <i class="fa-solid fa-circle-info" style="color:var(--ctt-orange);margin-right:6px;"></i>
        Thông tin thị trường & Kinh nghiệm thuê ${ctx.catName} tại ${locLabel} (${priceLabel})
      </h3>
      <p style="font-size:13px;color:#475569;line-height:1.65;margin:0;">
        Danh sách <strong>${new Intl.NumberFormat("vi-VN").format(totalItems)} tin cho thuê ${ctx.catName}</strong> tại khu vực <strong>${locLabel}</strong> với mức giá <strong>${priceLabel}</strong> trên <strong>ChoThueTot.vn (Staymap.vn)</strong> đều được định vị trực tiếp trên Bản đồ 3D và công khai bảng tính chi phí Điện, Nước, Dịch vụ thực tế hàng tháng. Người thuê dễ dàng lọc theo Phường/Xã sáp nhập mới, so sánh tổng chi phí trọn gói và đặt lịch hẹn xem nhà trực tiếp qua Zalo chính chủ miễn phí 100%.
      </p>
    `;
  }

  updateMapPins(ctx.catKey, null, filtered);
}

// ==========================================================================
// 6. PROPERTY DETAIL VIEW (/cho-thue-phong-tro-phuong-cau-kieu/...-2078)
// ==========================================================================
function parseKToVnd(rawStr) {
  if (!rawStr) return 0;
  const cleaned = String(rawStr).replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  return Number.isFinite(num) && num > 0 ? Math.round(num * 1000) : 0;
}

function computePropertyMonthlyCost(item) {
  const priceNum = Number(item.price ?? item.priceMillion ?? 0);
  const baseRentVnd = Math.round(priceNum * 1000000);

  const elecStr = String(item.elec || "Nhà nước").trim();
  const isElecState = !elecStr || /nhà nước|qđ\s*vn/i.test(elecStr);
  const elecUnitVnd = isElecState ? 3000 : parseKToVnd(elecStr);
  const elecEstVnd = elecUnitVnd > 0 ? elecUnitVnd * 100 : 300000;
  const elecNote = isElecState ? "Điện (Nhà nước ~100 kWh)" : `Điện (${elecStr} × 100 kWh)`;

  const waterStr = String(item.water || "Nhà nước").trim();
  const isWaterState = !waterStr || /nhà nước|qđ\s*vn/i.test(waterStr);
  const waterEstVnd = isWaterState ? 80000 : (parseKToVnd(waterStr) || 80000);
  const waterNote = isWaterState ? "Nước (Nhà nước)" : `Nước (${waterStr})`;

  const hasCustomServiceFields = Boolean(item.internet || item.laundry || item.trash || item.parking || item.otherCost);
  const serviceEstVnd = hasCustomServiceFields
    ? parseKToVnd(item.internet) + parseKToVnd(item.laundry) + parseKToVnd(item.trash) + parseKToVnd(item.parking) + parseKToVnd(item.otherCost)
    : 150000;
  const serviceLabel = hasCustomServiceFields
    ? [
        item.internet ? `Net ${item.internet}` : "",
        item.laundry ? `Giặt ${item.laundry}` : "",
        item.trash ? `Rác ${item.trash}` : "",
        item.parking ? `Xe ${item.parking}` : "",
        item.otherCost ? `Khác ${item.otherCost}` : ""
      ].filter(Boolean).join(" + ")
    : "Wifi + Rác + Giữ xe";

  const estTotalVnd = baseRentVnd + elecEstVnd + waterEstVnd + serviceEstVnd;
  return { baseRentVnd, elecEstVnd, elecNote, waterEstVnd, waterNote, serviceEstVnd, serviceLabel, estTotalVnd };
}

function getPropertyVipDisplay(item) {
  if (item.zoneId === 1 || item.mapTier === "banner") {
    return { label: "✦ ĐẶC QUYỀN", badgeClass: "tag-dacquyen" };
  }
  if (item.tier === "spotlight") {
    return { label: "✦ VIP 1", badgeClass: "tag-vip1" };
  }
  if (item.tier === "featured") {
    return { label: "• VIP 2", badgeClass: "tag-vip2" };
  }
  if (item.tier === "prime") {
    return { label: "VIP 3", badgeClass: "tag-vip3" };
  }
  return { label: "", badgeClass: "" };
}

function openPropertyGalleryModal(propId, startIdx = 0) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (!item) return;
  const photos = item.gallery && item.gallery.length ? item.gallery : [item.image];
  let existing = document.getElementById("propertyGalleryBackdrop");
  if (!existing) {
    existing = document.createElement("div");
    existing.id = "propertyGalleryBackdrop";
    existing.className = "ctt-modal-backdrop";
    existing.onclick = (e) => {
      if (e.target === existing) existing.classList.remove("is-open");
    };
    document.body.appendChild(existing);
  }
  const activeSrc = photos[startIdx] || photos[0];
  existing.innerHTML = `
    <div class="ctt-modal-dialog" style="max-width:860px;background:#0f172a;color:#fff;border:1px solid #334155;">
      <div class="ctt-modal-header" style="background:#0f172a;border-bottom:1px solid #1e293b;padding:14px 20px;">
        <strong style="font-size:14px;color:#fff;"><i class="fa-regular fa-images" style="color:var(--ctt-orange);margin-right:6px;"></i>Hình ảnh thực tế (${photos.length} ảnh${item.videoUrl ? " + 1 Video" : ""})</strong>
        <button type="button" onclick="document.getElementById('propertyGalleryBackdrop').classList.remove('is-open')" style="width:32px;height:32px;border-radius:50%;border:1px solid #334155;background:#1e293b;color:#fff;cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div style="padding:16px 20px;">
        <div id="galLightboxStage" style="border-radius:12px;overflow:hidden;background:#020617;max-height:420px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
          <img src="${activeSrc}" style="max-width:100%;max-height:420px;object-fit:contain;" alt="Gallery">
        </div>
        <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
          ${photos.map((src, i) => `
            <button type="button" onclick="document.getElementById('galLightboxStage').innerHTML='<img src=\\'${src}\\' style=\\'max-width:100%;max-height:420px;object-fit:contain;\\'>'" style="width:76px;height:56px;border-radius:8px;overflow:hidden;border:2px solid ${i === startIdx ? "var(--ctt-orange)" : "#334155"};padding:0;cursor:pointer;flex-shrink:0;">
              <img src="${src}" style="width:100%;height:100%;object-fit:cover;" alt="Thumb ${i + 1}">
            </button>
          `).join("")}
          ${item.videoUrl ? `
            <button type="button" onclick="document.getElementById('galLightboxStage').innerHTML='<video src=\\'${item.videoUrl}\\' controls autoplay style=\\'max-width:100%;max-height:420px;\\'></video>'" style="width:96px;height:56px;border-radius:8px;border:2px solid var(--ctt-orange);background:#1e293b;color:#fff;font-size:11px;font-weight:800;cursor:pointer;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;">
              <i class="fa-solid fa-video" style="color:var(--ctt-orange);"></i>
              <span>Xem Video</span>
            </button>
          ` : ""}
        </div>
      </div>
    </div>
  `;
  existing.classList.add("is-open");
}

function copyHostPhoneNow(btnEl, phone) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phone).catch(() => {});
  }
  btnEl.innerHTML = `<i class="fa-solid fa-phone-volume"></i> ${phone} (Đã sao chép)`;
}

function openPropertyDetailView(propId) {
  const item = PROPERTIES.find((p) => p.id === Number(propId)) || PROPERTIES[0];
  const seoHashUrl = buildPropertySeoUrl(item);
  window.history.pushState({}, "", seoHashUrl);
  const fullCanonical = `https://chothuetot.vn/${seoHashUrl}`;
  updateDocumentSeoMeta(
    `${item.title} - ${item.priceText}/Tháng tại ${item.ward}`,
    `Cho thuê ${item.categoryLabel} tại ${item.fullAddress}. Giá ${item.priceText}/Tháng, diện tích ${item.area}m², điện ${item.elec}, nước ${item.water}.`,
    {
      image: item.image,
      url: fullCanonical,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "RealEstateListing",
            "name": item.title,
            "url": fullCanonical,
            "image": item.gallery && item.gallery.length ? item.gallery : [item.image],
            "description": item.description || `Cho thuê ${item.categoryLabel} tại ${item.fullAddress}`,
            "offers": {
              "@type": "Offer",
              "price": Math.round((Number(item.price) || 0) * 1000000),
              "priceCurrency": "VND",
              "availability": "https://schema.org/InStock"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": item.fullAddress,
              "addressLocality": item.ward,
              "addressRegion": item.city,
              "addressCountry": "VN"
            }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://chothuetot.vn/" },
              { "@type": "ListItem", "position": 2, "name": item.categoryLabel, "item": `https://chothuetot.vn/#/${item.category}.html` },
              { "@type": "ListItem", "position": 3, "name": item.title, "item": fullCanonical }
            ]
          }
        ]
      }
    }
  );

  document.body.classList.add("is-detail-view");
  document.querySelectorAll(".app-route-view").forEach((el) => (el.style.display = "none"));
  const detailView = document.getElementById("view-detail");
  detailView.style.display = "block";

  // Zoom Hero Map to this property and show nearby pins
  updateMapPins("all", item.id);

  const galleryList = item.gallery && item.gallery.length ? item.gallery : [item.image];
  const g1 = galleryList[0] || item.image;
  const g2 = galleryList[1] || galleryList[0] || "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp";
  const g3 = galleryList[2] || galleryList[1] || galleryList[0] || "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp";

  const vipInfo = getPropertyVipDisplay(item);
  const stickerMap = {
    urgent: { name: "Giảm Sâu", cls: "sticker-urgent", icon: "fa-bolt" },
    hot: { name: "HOT", cls: "sticker-hot", icon: "fa-fire" },
    promo: { name: "Ưu Đãi", cls: "sticker-promo", icon: "fa-gift" }
  };
  const stObj = item.sticker ? stickerMap[item.sticker] : null;
  const cleanPhoneDigits = (item.phone || "0906344877").replace(/\D/g, "");
  const formatUnitValue = (val, defaultSuffix) => {
    const raw = String(val || "").trim();
    if (!raw) return "";
    return raw.includes("/") ? raw : `${raw}${defaultSuffix}`;
  };

  // Phần A: Đặc điểm bất động sản (Bước 1, 2 & 3)
  const propertyFeatureRows = [
    { icon: "fa-tag", label: "Loại hình", value: item.categoryLabel },
    item.project ? { icon: "fa-building", label: "Dự án", value: item.project } : null,
    { icon: "fa-maximize", label: "Diện tích", value: `${item.area} m²` },
    { icon: "fa-bed", label: "Phòng ngủ", value: item.beds },
    { icon: "fa-bath", label: "Nhà vệ sinh", value: item.baths },
    item.furniture ? { icon: "fa-couch", label: "Nội thất", value: item.furniture } : null,
    item.floors ? { icon: "fa-layer-group", label: "Số tầng", value: item.floors } : null,
    item.direction ? { icon: "fa-compass", label: "Hướng nhà", value: item.direction } : null,
    item.frontageRoad ? { icon: "fa-road", label: "Mặt tiền - Lộ giới", value: item.frontageRoad } : null,
    item.roadAccess ? { icon: "fa-arrows-left-right", label: "Đường vào nhà", value: item.roadAccess } : null
  ].filter(Boolean);

  // Phần B: Chi phí sinh hoạt & Quy định ở (Bước 2)
  const livingCostRows = [
    { icon: "fa-money-bill-wave", label: "Giá thuê", value: `${item.priceText} / tháng` },
    { icon: "fa-hand-holding-dollar", label: "Tiền cọc", value: item.deposit || "Thỏa Thuận" },
    { icon: "fa-bolt", label: "Điện", value: item.elec || "Nhà nước" },
    { icon: "fa-droplet", label: "Nước", value: item.water || "Nhà nước" },
    item.internet ? { icon: "fa-wifi", label: "Internet", value: formatUnitValue(item.internet, "/Phòng") } : null,
    item.laundry ? { icon: "fa-shirt", label: "Giặt sấy", value: item.laundry } : null,
    item.trash ? { icon: "fa-trash-can", label: "Phí rác", value: formatUnitValue(item.trash, "/Phòng") } : null,
    item.parking ? { icon: "fa-motorcycle", label: "Phí xe", value: formatUnitValue(item.parking, "/Xe") } : null,
    item.otherCost ? { icon: "fa-receipt", label: "Trọn gói CP khác", value: item.otherCost } : null,
    item.maxPeople ? { icon: "fa-users", label: "Giới hạn người", value: `${item.maxPeople} người/phòng` } : null,
    item.extraPerson ? { icon: "fa-user-plus", label: "Phụ thu thêm người", value: formatUnitValue(item.extraPerson, "/Người") } : null
  ].filter(Boolean);

  const renderKvList = (rows) =>
    `<div class="pd-kv-list">${rows
      .map(
        (r) =>
          `<div class="pd-kv-row"><span class="pd-kv-label"><i class="fa-solid ${r.icon}"></i> ${r.label}</span><span class="pd-kv-val">${r.value}</span></div>`
      )
      .join("")}</div>`;

  const descriptionText =
    (item.description || item.desc || "").trim() ||
    `Cho thuê ${item.categoryLabel} tại ${item.fullAddress}. Diện tích ${item.area}m² (${item.beds}, ${item.baths}), giá thuê ${item.priceText}/tháng.`;

  const utilitiesArr = Array.isArray(item.utilities) ? item.utilities.filter(Boolean) : [];
  const servicesArr = Array.isArray(item.services) ? item.services.filter(Boolean) : [];
  const hasUtilitiesOrServices = utilitiesArr.length > 0 || servicesArr.length > 0;

  const g4 = galleryList[3] || g2;
  const g5 = galleryList[4] || g3;
  const isLongDesc = descriptionText.length > 220 || descriptionText.split("\n").length > 4;
  const defaultSchedPhone = STATE.auth?.isLoggedIn && STATE.auth?.phone ? STATE.auth.phone : "";

  detailView.innerHTML = `
    <div class="pd-container">
      <div class="pd-breadcrumb">
        <a href="javascript:void(0)" onclick="navigateTo('/')"><i class="fa-solid fa-house"></i> Trang chủ</a>
        <span>/</span>
        <a href="javascript:void(0)" onclick="navigateTo('/${item.category}.html')">${item.categoryLabel}</a>
        <span>/</span>
        <span>${(item.ward || "").toUpperCase()}, ${(item.city || "").toUpperCase()}</span>
        <span>/</span>
        <strong style="color:var(--ctt-orange);">Mã tin #${item.id}</strong>
      </div>

      <!-- Header-First (Phong cách Airbnb / Batdongsan): Tiêu đề & Địa chỉ lên trên cùng -->
      <div class="pd-top-header">
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px;">
          ${vipInfo.label ? `<span class="lc-vip-tag ${vipInfo.badgeClass}" style="position:static;">${vipInfo.label}</span>` : ""}
          ${stObj ? `<span class="sticker-pill ${stObj.cls}"><i class="fa-solid ${stObj.icon}"></i> ${stObj.name}</span>` : ""}
          <span style="background:#f1f5f9;color:#334155;padding:3px 9px;border-radius:99px;font-size:11px;font-weight:800;">${item.categoryLabel}</span>
          ${item.project ? `<span style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;padding:3px 9px;border-radius:99px;font-size:11px;font-weight:800;"><i class="fa-solid fa-building"></i> ${item.project}</span>` : ""}
        </div>
        <h1 style="font-size:22px;font-weight:900;color:#0f172a;line-height:1.3;margin:0 0 6px;">
          ${item.title}
        </h1>
        <div style="font-size:13.5px;color:#475569;font-weight:600;">
          <i class="fa-solid fa-location-dot" style="color:var(--ctt-orange);margin-right:6px;"></i>
          ${item.fullAddress}
        </div>
      </div>

      <!-- Lưới 2 Cột: Cột Trái (Carousel + Nội Dung) | Cột Phải Sticky (Giá + Liên Hệ) -->
      <div class="pd-content-grid">
        <div>
          <!-- Khung Ảnh Chuẩn (Hiển thị đủ 100% ảnh ngang & dọc + lướt qua xem + huy hiệu trên ảnh) -->
          <div class="pd-carousel-wrap" data-prop-id="${item.id}" data-idx="0">
            <div class="pd-carousel-stage" id="pdCarouselStage">
              <img class="pd-carousel-ambient" id="pdCarouselAmbient" src="${g1}" alt="" aria-hidden="true">
              <img class="pd-carousel-img" id="pdCarouselMainImg" src="${g1}" alt="${item.title}" onclick="openPropertyGalleryModal(${item.id}, Number(document.querySelector('.pd-carousel-wrap')?.dataset.idx || 0))" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80'">
              <div class="pd-carousel-badges">
                ${vipInfo.label ? `<span class="lc-vip-tag ${vipInfo.badgeClass}" style="position:static;"><i class="fa-solid fa-award" style="margin-right:4px;"></i>${vipInfo.label}</span>` : ""}
                ${stObj ? `<span class="sticker-pill ${stObj.cls}"><i class="fa-solid ${stObj.icon}"></i> ${stObj.name}</span>` : ""}
              </div>
              <div class="pd-carousel-top-right">
                <span class="pd-carousel-counter" id="pdCarouselCounter">1 / ${galleryList.length}</span>
                <button type="button" class="pd-carousel-expand" title="Phóng to toàn màn hình" onclick="openPropertyGalleryModal(${item.id}, Number(document.querySelector('.pd-carousel-wrap')?.dataset.idx || 0))">
                  <i class="fa-solid fa-expand"></i>
                </button>
              </div>
              ${galleryList.length > 1 ? `
              <button type="button" class="pd-carousel-nav prev" aria-label="Ảnh trước" onclick="stepDetailCarousel(${item.id}, -1)">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button type="button" class="pd-carousel-nav next" aria-label="Ảnh sau" onclick="stepDetailCarousel(${item.id}, 1)">
                <i class="fa-solid fa-chevron-right"></i>
              </button>` : ""}
            </div>
            ${galleryList.length > 1 ? `
            <div class="pd-carousel-thumbs" id="pdCarouselThumbs">
              ${galleryList
                .map(
                  (src, idx) => `
                <button type="button" class="pd-carousel-thumb ${idx === 0 ? "active" : ""}" onclick="goToDetailCarousel(${item.id}, ${idx})">
                  <img src="${src}" alt="Ảnh ${idx + 1}" onerror="this.src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&auto=format&fit=crop&q=80'">
                </button>`
                )
                .join("")}
            </div>` : ""}
          </div>

          <!-- 1 Trang Giấy Trắng Thống Nhất -->
          <div class="pd-unified-sheet">
          <!-- Dải thông số cốt lõi -->
          <div class="pd-sheet-section">
            <div class="pd-key-strip">
              <div class="pd-key-item is-price">
                <small>Giá thuê</small>
                <strong>${item.priceText} <span style="font-size:12px;color:#64748b;font-weight:600;">/ tháng</span></strong>
              </div>
              <div class="pd-key-item">
                <small>Tiền cọc</small>
                <strong>${item.deposit || "Thỏa Thuận"}</strong>
              </div>
              <div class="pd-key-item">
                <small>Diện tích</small>
                <strong>${item.area}&nbsp;m²</strong>
              </div>
              <div class="pd-key-item">
                <small>Phòng ngủ / WC</small>
                <strong>${item.beds} • ${item.baths}</strong>
              </div>
            </div>
          </div>

          <!-- Thông tin mô tả (Thu gọn mặc định 4 dòng + nút Xem thêm) -->
          <div class="pd-sheet-section">
            <h3 class="pd-sheet-title"><i class="fa-solid fa-align-left"></i> Thông tin mô tả</h3>
            <div id="pdDescBody" class="${isLongDesc ? "pd-desc-clamped" : ""}" style="font-size:14px;color:#334155;line-height:1.65;white-space:pre-line;">${descriptionText}</div>
            ${isLongDesc ? `
            <button type="button" class="pd-desc-toggle-btn" onclick="const el=document.getElementById('pdDescBody');const open=el.classList.toggle('pd-desc-clamped');this.innerHTML=open?'Xem thêm mô tả <i class=\\'fa-solid fa-chevron-down\\'></i>':'Thu gọn <i class=\\'fa-solid fa-chevron-up\\'></i>';">
              Xem thêm mô tả <i class="fa-solid fa-chevron-down"></i>
            </button>` : ""}
            ${item.videoUrl ? `
            <div style="margin-top:14px;">
              <video src="${item.videoUrl}" controls style="width:100%;max-height:300px;border-radius:12px;background:#0f172a;"></video>
            </div>` : ""}
          </div>

          <!-- Đặc điểm & Chi phí (2 cột key-value siêu gọn) -->
          <div class="pd-sheet-section">
            <div class="pd-kv-columns">
              <div>
                <div class="pd-kv-section-title"><i class="fa-solid fa-house-circle-check"></i> Đặc điểm bất động sản</div>
                ${renderKvList(propertyFeatureRows)}
              </div>
              <div>
                <div class="pd-kv-section-title"><i class="fa-solid fa-bolt"></i> Chi phí & Quy định ở</div>
                ${renderKvList(livingCostRows)}
              </div>
            </div>
          </div>

          ${hasUtilitiesOrServices ? `
          <!-- Tiện ích & Dịch vụ (Kiểu Airbnb Icon + Chữ thanh thoát, không viền hộp nặng mắt) -->
          <div class="pd-sheet-section">
            <div class="pd-air-cols ${utilitiesArr.length && servicesArr.length ? "" : "is-single"}">
              ${utilitiesArr.length ? `
              <div>
                <div class="pd-kv-section-title"><i class="fa-solid fa-location-crosshairs"></i> Tiện ích xung quanh</div>
                <div class="pd-air-list">
                  ${utilitiesArr.map((u) => `<div class="pd-air-item"><i class="fa-solid fa-check"></i><span>${u}</span></div>`).join("")}
                </div>
              </div>` : ""}
              ${servicesArr.length ? `
              <div>
                <div class="pd-kv-section-title"><i class="fa-solid fa-bell-concierge"></i> Dịch vụ tòa nhà</div>
                <div class="pd-air-list">
                  ${servicesArr.map((s) => `<div class="pd-air-item"><i class="fa-solid fa-circle-check"></i><span>${s}</span></div>`).join("")}
                </div>
              </div>` : ""}
            </div>
          </div>` : ""}
          </div>
        </div>

        <!-- Right Sticky Contact & Booking Sidebar -->
        <div class="pd-sticky-sidebar">
          <div class="pd-card-box" style="margin-bottom:0;">
            <div style="display:flex;align-items:center;gap:14px;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #f1f5f9;">
              <div style="width:56px;height:56px;border-radius:50%;background:var(--ctt-grad-brand);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;flex-shrink:0;">
                ${(item.host || "C").charAt(0).toUpperCase()}
              </div>
              <div style="min-width:0;">
                <div style="font-size:16px;font-weight:900;color:#0f172a;word-break:break-word;">${item.host}</div>
                <div style="font-size:12px;color:#f15a22;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Đã xác thực CCCD & Chủ nhà</div>
              </div>
            </div>

            <button type="button" onclick="copyHostPhoneNow(this, '${formatPhone433(item.phone)}')" style="width:100%;padding:14px;border-radius:14px;border:none;background:var(--ctt-grad-brand);color:#fff;font-size:15px;font-weight:900;cursor:pointer;margin-bottom:10px;box-shadow:0 10px 24px rgba(241,90,34,0.35);display:flex;align-items:center;justify-content:center;gap:10px;" class="tabular-nums">
              <i class="fa-solid fa-phone-volume"></i> ${formatPhone433(item.phone)} • Gọi ngay
            </button>

            <a href="https://zalo.me/${cleanPhoneDigits}" target="_blank" style="width:100%;padding:12px;border-radius:14px;border:1.5px solid #0f172a;background:#f8fafc;color:#0f172a;font-size:13.5px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px;text-decoration:none;">
              <img src="assets/zalo.svg" alt="Zalo" style="width:20px;height:20px;"> Nhắn Zalo nhận video phòng thực tế
            </a>

            <div class="pd-schedule-box">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <strong style="font-size:13px;color:#0f172a;"><i class="fa-regular fa-calendar-check" style="color:var(--ctt-orange);margin-right:6px;"></i>Đặt lịch hẹn xem phòng trực tiếp</strong>
                <span style="font-size:10.5px;font-weight:700;color:#f15a22;">Miễn phí 100%</span>
              </div>

              <small style="display:block;font-size:11px;color:#64748b;font-weight:700;margin-bottom:5px;">1. Chọn ngày xem phòng:</small>
              <div class="pd-sched-pills" id="schedDateGroup">
                <div class="pd-sched-pill" onclick="selectViewingSlot('date', 'Hôm nay', this)">Hôm nay</div>
                <div class="pd-sched-pill active" onclick="selectViewingSlot('date', 'Ngày mai', this)">Ngày mai</div>
                <div class="pd-sched-pill" onclick="selectViewingSlot('date', 'Cuối tuần', this)">Cuối tuần</div>
              </div>

              <small style="display:block;font-size:11px;color:#64748b;font-weight:700;margin-bottom:5px;">2. Chọn khung giờ:</small>
              <div class="pd-sched-pills" id="schedTimeGroup">
                <div class="pd-sched-pill" onclick="selectViewingSlot('time', 'Sáng (09h-11h)', this)">Sáng 9h-11h</div>
                <div class="pd-sched-pill active" onclick="selectViewingSlot('time', 'Chiều (14h-17h)', this)">Chiều 14h-17h</div>
                <div class="pd-sched-pill" onclick="selectViewingSlot('time', 'Tối (18h-20h)', this)">Tối 18h-20h</div>
              </div>

              <input type="tel" inputmode="numeric" maxlength="10" id="schedTenantPhone" value="${defaultSchedPhone}" class="hsp-select tabular-nums" style="background:#fff;margin-bottom:10px;font-size:12.5px;" placeholder="Nhập SĐT Zalo 10 số của bạn...">

              <button type="button" onclick="submitZaloViewingSchedule(${item.id})" style="width:100%;padding:11px;border-radius:12px;border:none;background:#0f172a;color:#f15a22;font-size:12.5px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
                <i class="fa-solid fa-paper-plane"></i> Gửi lịch hẹn qua Zalo Chủ Nhà
              </button>
            </div>

            <div style="margin-top:14px;padding:12px;border-radius:12px;background:#fffaf5;border:1px solid #fed7aa;font-size:12px;color:#9a3412;line-height:1.5;">
              <i class="fa-solid fa-shield-heart"></i> <strong>Khuyến cáo an toàn ChoThueTot:</strong> Tuyệt đối không chuyển khoản đặt cọc trước khi đến xem nhà trực tiếp và kiểm tra hợp đồng.
            </div>
          </div>
        </div>
      </div>

      <!-- Bất Động Sản Tương Tự -->
      <div style="margin-top:36px;padding-top:28px;border-top:1px solid #e2e8f0;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
          <div>
            <span style="font-size:11px;font-weight:800;color:var(--ctt-orange);text-transform:uppercase;letter-spacing:1px;">GỢI Ý CÙNG PHÂN KHÚC & KHU VỰC</span>
            <h3 style="font-size:20px;font-weight:900;color:#0f172a;margin:2px 0 0;">Bất Động Sản Tương Tự Dành Cho Bạn</h3>
          </div>
          <a href="javascript:void(0)" onclick="navigateTo('/cho-thue-${item.category}-${toVietnameseSlug(item.ward)}')" style="font-size:13px;font-weight:800;color:var(--ctt-orange);text-decoration:none;">
            Xem thêm tại ${item.ward} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div class="lc-grid">
          ${PROPERTIES.filter((p) => p.id !== item.id && !p.isHidden && (p.category === item.category || p.ward === item.ward))
            .slice(0, 4)
            .map(buildListingCardHTML)
            .join("")}
        </div>
      </div>
    </div>
  `;

  const scrollTop = Math.max(0, detailView.offsetTop - 92);
  window.scrollTo({ top: scrollTop, behavior: "smooth" });
}

function goToDetailCarousel(propId, idx) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (!item) return;
  const photos = item.gallery && item.gallery.length ? item.gallery : [item.image];
  if (!photos.length) return;
  const safeIdx = ((Number(idx) % photos.length) + photos.length) % photos.length;
  const wrap = document.querySelector(".pd-carousel-wrap");
  const mainImg = document.getElementById("pdCarouselMainImg");
  const ambientImg = document.getElementById("pdCarouselAmbient");
  const counterEl = document.getElementById("pdCarouselCounter");
  if (wrap) wrap.dataset.idx = String(safeIdx);
  if (mainImg) mainImg.src = photos[safeIdx];
  if (ambientImg) ambientImg.src = photos[safeIdx];
  if (counterEl) counterEl.textContent = `${safeIdx + 1} / ${photos.length}`;
  const thumbs = document.querySelectorAll("#pdCarouselThumbs .pd-carousel-thumb");
  thumbs.forEach((btn, i) => {
    btn.classList.toggle("active", i === safeIdx);
    if (i === safeIdx) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
}

function stepDetailCarousel(propId, delta) {
  const wrap = document.querySelector(".pd-carousel-wrap");
  const cur = Number(wrap?.dataset.idx || 0);
  goToDetailCarousel(propId, cur + delta);
}

function selectViewingSlot(type, val, pillEl) {
  if (type === "date") {
    STATE.selectedViewingDate = val;
    document.querySelectorAll("#schedDateGroup .pd-sched-pill").forEach((el) => el.classList.remove("active"));
  } else {
    STATE.selectedViewingTime = val;
    document.querySelectorAll("#schedTimeGroup .pd-sched-pill").forEach((el) => el.classList.remove("active"));
  }
  pillEl.classList.add("active");
}

function submitZaloViewingSchedule(propId) {
  const item = PROPERTIES.find((p) => p.id === Number(propId)) || PROPERTIES[0];
  const phoneEl = document.getElementById("schedTenantPhone");
  const phone = (phoneEl?.value || "").replace(/\D/g, "").trim();
  if (!/^0(3|5|7|8|9)\d{8}$/.test(phone)) {
    showCttNotice("Số điện thoại chưa hợp lệ", "Vui lòng nhập đúng Số Điện Thoại 10 số (bắt đầu 03/05/07/08/09) để chủ nhà xác nhận lịch hẹn.");
    phoneEl?.focus();
    return;
  }
  showCttNotice(
    "Đã tạo lịch hẹn xem phòng qua Zalo",
    `• Mã tin: #${item.id} (${item.ward}, ${item.city})\n` +
      `• Thời gian hẹn: ${STATE.selectedViewingDate} — ${STATE.selectedViewingTime}\n` +
      `• SĐT khách thuê: ${formatPhone433(phone)}\n` +
      `• Chủ nhà (${item.host} - ${formatPhone433(item.phone)}) đã nhận thông báo từ ChoThueTot.vn!`
  );
}

// ==========================================================================
// 7. KINH NGHIỆM BẤT ĐỘNG SẢN (.experience-section)
// ==========================================================================
function renderNewsSection(catFilter = "noi-bat", btnEl = null) {
  if (btnEl) {
    document.querySelectorAll(".experience-section .tab-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  const grid = document.getElementById("homeNewsGrid");
  const fullNewsGrid = document.getElementById("fullNewsPageGrid");
  const list =
    catFilter === "noi-bat"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((n) => n.cat === catFilter).concat(NEWS_ARTICLES).slice(0, 4);

  const html = list
    .map(
      (n) => `
    <div class="news-card" onclick="navigateTo('/tin-tuc.html')">
      <div class="news-img">
        <img src="${n.img}" alt="${n.title}" onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80'">
      </div>
      <div class="news-body">
        <span class="news-cat-tag">${n.catLabel}</span>
        <h4 class="news-title">${n.title}</h4>
        <p class="news-excerpt">${n.excerpt}</p>
      </div>
    </div>
  `
    )
    .join("");

  if (grid) grid.innerHTML = html;
  if (fullNewsGrid) fullNewsGrid.innerHTML = html + html;
}

// ==========================================================================
// 8. 3D LUXURY PRICING PAGE (/bao-gia.html) & VIETQR WALLET MODAL
// ==========================================================================
function renderPricingPage() {
  const grid = document.getElementById("pricingCardsGrid");
  if (!grid) return;

  grid.innerHTML = PRICING_TIERS.map(
    (t) => `
    <div class="p-card-v3 ${t.cardClass}">
      ${t.badge ? `<div class="p-badge">${t.badge}</div>` : ""}
      <div class="p-head">
        <span class="p-icon-top">
          <i class="fa-solid ${t.icon}"></i>
        </span>
        <h3>${t.name}</h3>
        <div class="p-price-tag">${t.tag}</div>
        <p class="p-desc" style="font-size:13px;opacity:0.85;">${t.desc}</p>
      </div>

      <ul class="p-features-list">
        ${t.features.map((f) => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
      </ul>

      <div style="background:rgba(241,90,34,0.06);border-radius:12px;padding:10px 12px;margin-bottom:16px;font-size:12px;">
        <div style="font-weight:800;margin-bottom:6px;color:var(--ctt-orange);">Bảng giá theo gói ngày:</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;" class="tabular-nums">
          ${t.packages
            .map(
              (p) => `
            <div style="display:flex;justify-content:space-between;background:rgba(255,255,255,0.85);color:#1e293b;padding:4px 8px;border-radius:6px;font-weight:700;">
              <span>${p.days} ngày ${p.save ? `<small style="color:#f15a22;">(${p.save})</small>` : ""}</span>
              <strong style="color:var(--ctt-orange);">${new Intl.NumberFormat("vi-VN").format(p.price)}đ</strong>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <button type="button" class="p-btn-main" onclick="openPostModalWithZone(${t.zoneId})">
        CHỌN GÓI & ĐĂNG TIN NGAY
      </button>
    </div>
  `
  ).join("");
}

// ==========================================================================
// 9. POST LISTING MODAL (#modalProperty) & ZONE PACKAGE SELECTOR + LIVE PREVIEW
// ==========================================================================
const VIP_ROI_METRICS = {
  1: { calls: "68 lượt gọi & Zalo/tuần", boost: "8.5x", fillTime: "Lấp phòng trong 48h (94%)", badge: "BANNER ĐẶC QUYỀN", badgeClass: "tag-vip1" },
  2: { calls: "46 lượt gọi & Zalo/tuần", boost: "6.2x", fillTime: "Lấp phòng trong 3 ngày", badge: "SPOTLIGHT • TOP 1", badgeClass: "tag-vip1" },
  3: { calls: "32 lượt gọi & Zalo/tuần", boost: "4.5x", fillTime: "Lấp phòng trong 5 ngày", badge: "FEATURED • TOP 2", badgeClass: "tag-vip2" },
  10: { calls: "19 lượt gọi & Zalo/tuần", boost: "2.8x", fillTime: "Lấp phòng trong 7 ngày", badge: "PRIME • TOP 3", badgeClass: "tag-vip3" },
  4: { calls: "8 lượt gọi/tuần", boost: "1.2x", fillTime: "Duy trì ổn định dài hạn", badge: "TIN CƠ BẢN", badgeClass: "tag-vip3" },
  13: { calls: "4 lượt gọi/3 ngày", boost: "1.0x", fillTime: "Gói trải nghiệm dùng thử", badge: "TIN MIỄN PHÍ", badgeClass: "tag-vip3" }
};

function openPostModal() {
  document.getElementById("postModalBackdrop")?.classList.add("is-open");
  updateWalletUI();
  renderZonePackagesInModal();
  updateLivePostPreview();
}

function closePostModal() {
  document.getElementById("postModalBackdrop")?.classList.remove("is-open");
}

function openPostModalWithZone(zoneId) {
  STATE.selectedZoneId = zoneId;
  STATE.selectedPkgIndex = 0;
  openPostModal();
}

function renderZonePackagesInModal() {
  const container = document.getElementById("modalZonePackagesGrid");
  if (!container) return;

  container.innerHTML = PRICING_TIERS.map((tier) => {
    const isSelected = tier.zoneId === STATE.selectedZoneId;
    return `
      <div class="zone-pkg-card ${isSelected ? "selected" : ""}" onclick="selectZoneInModal(${tier.zoneId})">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <strong style="font-size:14px;color:#0f172a;"><i class="fa-solid ${tier.icon}" style="color:var(--ctt-orange);margin-right:6px;"></i>${tier.name}</strong>
          <input type="radio" name="zone_radio" ${isSelected ? "checked" : ""} style="accent-color:var(--ctt-orange);">
        </div>
        <div style="font-size:11.5px;color:#64748b;margin-bottom:8px;">${tier.tag}</div>

        <div class="duration-pills">
          ${tier.packages
            .map((pkg, idx) => {
              const activePill = isSelected && idx === STATE.selectedPkgIndex;
              return `
              <div class="dur-pill ${activePill ? "active" : ""}" onclick="selectDurationInModal(event, ${tier.zoneId}, ${idx})">
                ${pkg.save ? `<span class="dur-save-badge">${pkg.save}</span>` : ""}
                <div style="font-size:11.5px;font-weight:800;color:#0f172a;">${pkg.days} Ngày</div>
                <div style="font-size:10.5px;font-weight:800;color:var(--ctt-orange);" class="tabular-nums">${new Intl.NumberFormat("vi-VN").format(pkg.price)}đ</div>
              </div>
            `;
            })
            .join("")}
        </div>
      </div>
    `;
  }).join("");

  updateSelectedPackageSummary();
  updateLivePostPreview();
}

function selectZoneInModal(zoneId) {
  STATE.selectedZoneId = zoneId;
  STATE.selectedPkgIndex = 0;
  renderZonePackagesInModal();
}

function selectDurationInModal(e, zoneId, pkgIdx) {
  e.stopPropagation();
  STATE.selectedZoneId = zoneId;
  STATE.selectedPkgIndex = pkgIdx;
  renderZonePackagesInModal();
}

function updateSelectedPackageSummary() {
  const tier = PRICING_TIERS.find((t) => t.zoneId === STATE.selectedZoneId) || PRICING_TIERS[0];
  const pkg = tier.packages[STATE.selectedPkgIndex] || tier.packages[0];
  const summaryEl = document.getElementById("postModalSummaryText");
  if (summaryEl) {
    summaryEl.innerHTML = `Gói đang chọn: <strong style="color:var(--ctt-orange);">${tier.name} (${pkg.days} Ngày)</strong> — Thành tiền: <strong style="color:#0f172a;font-size:16px;" class="tabular-nums">${new Intl.NumberFormat("vi-VN").format(pkg.price)} VNĐ</strong>`;
  }

  // Update Real-Time VIP ROI Social Proof Banner
  const roiEl = document.getElementById("vipRoiSocialProof");
  const roi = VIP_ROI_METRICS[tier.zoneId] || VIP_ROI_METRICS[1];
  if (roiEl) {
    roiEl.innerHTML = `
      <div class="vip-roi-stat">
        <i class="fa-solid fa-chart-line" style="font-size:18px;color:var(--ctt-orange);"></i>
        <div>
          <div>Hiệu quả thực tế gói <strong>${tier.name}</strong>: Trung bình <strong>${roi.calls}</strong> (Gấp <strong>${roi.boost}</strong> tin thường)</div>
          <small style="color:#9a3412;">⚡ Tốc độ chốt khách thống kê: <strong>${roi.fillTime}</strong></small>
        </div>
      </div>
      <span style="padding:4px 10px;border-radius:99px;background:#fff;border:1px solid #fdba74;font-size:11px;font-weight:800;color:var(--ctt-orange);white-space:nowrap;">
        Đề xuất tối ưu
      </span>
    `;
  }
}

// NEW UPGRADE #9: Live Card Preview inside Post Listing Modal
function updateLivePostPreview() {
  const previewEl = document.getElementById("postLiveCardPreview");
  if (!previewEl) return;

  const title = document.getElementById("postTitleInput")?.value || "Căn hộ Studio Ban Công Thoáng Mát Full Nội Thất";
  const price = document.getElementById("postPriceInput")?.value || "5.8 Triệu";
  const area = document.getElementById("postAreaInput")?.value || "32";
  const elec = document.getElementById("postElecInput")?.value || "3.500đ";
  const water = document.getElementById("postWaterInput")?.value || "100k/ng";
  const ward = document.getElementById("postWardSelect")?.value || "P. Cầu Kiệu";
  const roi = VIP_ROI_METRICS[STATE.selectedZoneId] || VIP_ROI_METRICS[1];

  previewEl.innerHTML = `
    <div class="lc-card zone-spotlight" style="pointer-events:none;">
      <div class="lc-card-img">
        <img src="https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp" alt="Preview">
        <div class="lc-card-badges">
          <span class="lc-vip-tag ${roi.badgeClass}">
            <i class="fa-solid fa-crown"></i> ${roi.badge}
          </span>
        </div>
        <div class="lc-photo-count"><i class="fa-regular fa-images"></i> 6</div>
      </div>
      <div class="lc-card-body">
        <div class="lc-card-toprow">
          <div class="lc-card-price tabular-nums">${price} <span>| Tháng</span></div>
          <span class="lc-card-type">Căn hộ, Studio</span>
        </div>
        <div class="lc-card-title">${title}</div>
        <div class="lc-utility-bar">
          <span><i class="fa-solid fa-bolt"></i> Điện: ${elec}</span>
          <span><i class="fa-solid fa-droplet"></i> Nước: ${water}</span>
        </div>
        <div class="lc-card-footer">
          <div class="lc-card-addr">
            <i class="fa-solid fa-location-dot"></i>
            <div class="lc-card-addr-text">
              <span class="lc-addr-ward">${ward}</span>
              <span class="lc-addr-city">TP. Hồ Chí Minh</span>
            </div>
          </div>
          <div class="lc-card-specs">
            <span><i class="fa-solid fa-maximize"></i> ${area}&nbsp;m²</span>
            <span><i class="fa-solid fa-bed"></i> 1 PN</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function autoGenerateAIDescription() {
  const titleEl = document.getElementById("postTitleInput");
  const descEl = document.getElementById("postDescInput");
  if (titleEl) {
    titleEl.value = "Phòng Studio Ban Công Thoáng Mát Full Nội Thất Ngay Phan Xích Long";
  }
  if (descEl) {
    descEl.value =
      "✅ Chính chủ cho thuê phòng Studio / Căn hộ dịch vụ cao cấp mới 100%.\n" +
      "- Diện tích: 32m², có ban công rộng đón nắng gió tự nhiên.\n" +
      "- Nội thất: Máy lạnh Inverter, tủ lạnh, giường nệm cao cấp, kệ bếp nấu ăn, WC khép kín.\n" +
      "- Chi phí minh bạch: Điện 3.500đ/kWh, Nước 100.000đ/người, Giờ giấc tự do 24/24, khóa vân tay an toàn.";
  }
  updateLivePostPreview();
}

function submitNewPropertyListing() {
  const tier = PRICING_TIERS.find((t) => t.zoneId === STATE.selectedZoneId) || PRICING_TIERS[0];
  const pkg = tier.packages[STATE.selectedPkgIndex] || tier.packages[0];

  if (STATE.walletBalance < pkg.price) {
    showCttNotice("Số dư Ví chưa đủ", "Vui lòng nạp thêm qua VietQR để thanh toán gói tin.");
    openWalletModal();
    return;
  }

  STATE.walletBalance -= pkg.price;
  updateWalletUI();
  if (typeof savePortalStateStore === "function") savePortalStateStore();
  closePostModal();
  showCttNotice("Đăng tin thành công", `Gói hiển thị: ${tier.name} (${pkg.days} ngày)\nĐã trừ: ${new Intl.NumberFormat("vi-VN").format(pkg.price)}đ từ Ví đăng tin.`);
}

// ==========================================================================
// 10. NEW UPGRADE #7: FLOATING COMPARE TRAY & SIDE-BY-SIDE COMPARE MODAL
// ==========================================================================
function toggleCompare(e, propId, btnEl) {
  e.stopPropagation();
  const idx = STATE.compareList.indexOf(propId);
  if (idx > -1) {
    STATE.compareList.splice(idx, 1);
    btnEl?.classList.remove("active");
  } else {
    if (STATE.compareList.length >= 3) {
      showCttNotice("Giới hạn so sánh", "Bạn chỉ có thể so sánh tối đa 3 bất động sản cùng lúc.");
      return;
    }
    STATE.compareList.push(propId);
    btnEl?.classList.add("active");
  }
  renderCompareTray();
}

function renderCompareTray() {
  const tray = document.getElementById("compareTray");
  const itemsEl = document.getElementById("compareTrayItems");
  const countText = document.getElementById("compareTrayCountText");
  if (!tray || !itemsEl) return;

  if (STATE.compareList.length === 0) {
    tray.classList.remove("is-visible");
    return;
  }

  tray.classList.add("is-visible");
  if (countText) countText.textContent = `Đã chọn ${STATE.compareList.length}/3 phòng`;

  itemsEl.innerHTML = STATE.compareList
    .map((id) => {
      const item = PROPERTIES.find((p) => p.id === id);
      if (!item) return "";
      return `
        <div class="compare-tray-chip">
          <img src="${item.image}" alt="${item.title}">
          <div class="compare-tray-chip-info">
            <div class="compare-tray-chip-title">${item.title}</div>
            <div class="compare-tray-chip-price tabular-nums">${item.priceText}/Tháng • ${item.area}m²</div>
          </div>
          <button type="button" class="compare-tray-remove" onclick="toggleCompare(event, ${item.id})" title="Bỏ chọn">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    })
    .join("");
}

function clearCompareList() {
  STATE.compareList = [];
  document.querySelectorAll(".lc-compare-btn.active").forEach((b) => b.classList.remove("active"));
  renderCompareTray();
}

function openCompareModal() {
  const modal = document.getElementById("compareModalBackdrop");
  const body = document.getElementById("compareModalBody");
  if (!modal || !body) return;

  const selectedItems = STATE.compareList.map((id) => PROPERTIES.find((p) => p.id === id)).filter(Boolean);
  if (!selectedItems.length) return;

  body.innerHTML = `
    <table class="comp-table" style="background:#fff;">
      <thead>
        <tr>
          <th style="text-align:left;width:200px;">Tiêu chí so sánh</th>
          ${selectedItems
            .map(
              (item) => `
            <th style="width:${Math.floor(80 / selectedItems.length)}%;">
              <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
                <img src="${item.image}" alt="${item.title}" style="width:100%;max-width:200px;height:110px;object-fit:cover;border-radius:10px;">
                <div style="font-size:13px;font-weight:800;line-height:1.35;color:#fff;">${item.title}</div>
              </div>
            </th>
          `
            )
            .join("")}
        </tr>
      </thead>
      <tbody class="tabular-nums">
        <tr>
          <td class="feature-label">Giá thuê niêm yết</td>
          ${selectedItems.map((i) => `<td><strong style="font-size:18px;color:var(--ctt-orange);">${i.priceText} / tháng</strong></td>`).join("")}
        </tr>
        <tr>
          <td class="feature-label">Chi phí Điện & Nước</td>
          ${selectedItems.map((i) => `<td>Điện: <strong>${i.elec}</strong><br>Nước: <strong>${i.water}</strong></td>`).join("")}
        </tr>
        <tr style="background:#fffaf5;">
          <td class="feature-label" style="color:var(--ctt-orange);">Tổng chi phí thực tế dự kiến / tháng</td>
          ${selectedItems
            .map((i) => {
              const c = computePropertyMonthlyCost(i);
              return `<td><strong style="font-size:16px;color:#f15a22;">~ ${new Intl.NumberFormat("vi-VN").format(c.estTotalVnd)} VNĐ</strong><br><small style="color:#64748b;">(Gồm thuê + điện + nước + phí DV)</small></td>`;
            })
            .join("")}
        </tr>
        <tr>
          <td class="feature-label">Diện tích & Không gian</td>
          ${selectedItems.map((i) => `<td><strong>${i.area} m²</strong> • ${i.beds} • ${i.baths}</td>`).join("")}
        </tr>
        <tr>
          <td class="feature-label">Khu vực (Phường / Xã)</td>
          ${selectedItems.map((i) => `<td><strong>${i.ward}</strong>, ${i.city}</td>`).join("")}
        </tr>
        <tr>
          <td class="feature-label">Tiền đặt cọc</td>
          ${selectedItems.map((i) => `<td>Cọc <strong>${i.deposit}</strong></td>`).join("")}
        </tr>
        <tr>
          <td class="feature-label">Hành động</td>
          ${selectedItems
            .map(
              (i) => `
            <td>
              <button type="button" class="hsp-btn-apply" style="padding:8px 16px;font-size:12px;" onclick="closeCompareModal();openPropertyDetailView(${i.id})">
                Xem chi tiết & Đặt lịch
              </button>
            </td>
          `
            )
            .join("")}
        </tr>
      </tbody>
    </table>
  `;

  modal.classList.add("is-open");
}

function closeCompareModal() {
  document.getElementById("compareModalBackdrop")?.classList.remove("is-open");
}

// Wallet Top-Up Modal (VietQR / MoMo 24/7)
function openWalletModal() {
  document.getElementById("walletModalBackdrop")?.classList.add("is-open");
  updateWalletUI();
}

function closeWalletModal() {
  document.getElementById("walletModalBackdrop")?.classList.remove("is-open");
}

function updateWalletUI() {
  const formatted = new Intl.NumberFormat("vi-VN").format(STATE.walletBalance) + "đ";
  document.querySelectorAll(".js-wallet-balance").forEach((el) => (el.textContent = formatted));
}

function topUpWalletInstant(amount) {
  STATE.walletBalance += amount;
  updateWalletUI();
  if (typeof savePortalStateStore === "function") savePortalStateStore();
  showCttNotice(
    "Nạp Ví VietQR thành công",
    `• Số tiền nạp: +${new Intl.NumberFormat("vi-VN").format(amount)}đ\n• Số dư Ví mới: ${new Intl.NumberFormat("vi-VN").format(STATE.walletBalance)}đ`
  );
  closeWalletModal();
}

const DEFAULT_ACCOUNTS = [
  {
    identity: "0906344877",
    password: "MinhQuan@2026",
    role: "member",
    displayName: "Chính chủ Minh Quân",
    verifiedVia: "Zalo ZNS & CCCD",
    memberCode: "#CTT-8829"
  },
  {
    identity: "admin@staymap.vn",
    password: "StayMapAdmin@2026",
    role: "admin",
    displayName: "Quản trị viên StayMap",
    phone: "0906 344 877",
    verifiedVia: "Admin 2FA",
    memberCode: "#ADM-0001"
  },
  {
    identity: "quinguyen.designer@gmail.com",
    password: "Qui@1707",
    role: "admin",
    displayName: "Admin Qui Nguyen",
    phone: "0906 344 877",
    verifiedVia: "Admin 2FA",
    memberCode: "#ADM-0002"
  },
  {
    identity: "DuyQuang",
    password: "123123",
    role: "member",
    displayName: "Duy Quang",
    phone: "0909 882 456",
    verifiedVia: "Thành viên xác thực",
    memberCode: "#CTT-8830"
  }
];

function normalizeAuthIdentity(val) {
  const trimmed = (val || "").trim();
  if (!trimmed) return "";
  return trimmed.replace(/\s+/g, "").toLowerCase();
}

function getAccountsStore() {
  try {
    const raw = localStorage.getItem("ctt_accounts_v1");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const merged = parsed.slice();
        DEFAULT_ACCOUNTS.forEach((def) => {
          const defId = normalizeAuthIdentity(def.identity);
          const existing = merged.find((a) => normalizeAuthIdentity(a.identity) === defId);
          if (!existing) {
            merged.push(def);
          } else if (!existing.phone && def.phone) {
            existing.phone = def.phone;
          }
        });
        return merged;
      }
    }
  } catch (_) {}
  return DEFAULT_ACCOUNTS.slice();
}

function saveAccountsStore(list) {
  try {
    localStorage.setItem("ctt_accounts_v1", JSON.stringify(list));
  } catch (_) {}
}

function upsertAccountRecord(record) {
  const list = getAccountsStore();
  const normId = normalizeAuthIdentity(record.identity);
  const idx = list.findIndex((a) => normalizeAuthIdentity(a.identity) === normId);
  const next = { ...record, identity: normId };
  if (idx >= 0) list[idx] = next;
  else list.push(next);
  saveAccountsStore(list);
}

function getInitials(name) {
  const parts = (name || "TV").replace(/\(.*?\)/g, "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "TV";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function restoreAuthSession() {
  try {
    const raw = localStorage.getItem("ctt_auth_session") || sessionStorage.getItem("ctt_auth_session");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.isLoggedIn && (parsed.role === "member" || parsed.role === "admin")) {
      STATE.auth = parsed;
    }
  } catch (_) {}
}

function persistAuthSession(remember = true) {
  try {
    if (STATE.auth.isLoggedIn) {
      const payload = JSON.stringify(STATE.auth);
      if (remember) {
        localStorage.setItem("ctt_auth_session", payload);
        sessionStorage.removeItem("ctt_auth_session");
      } else {
        sessionStorage.setItem("ctt_auth_session", payload);
        localStorage.removeItem("ctt_auth_session");
      }
    } else {
      localStorage.removeItem("ctt_auth_session");
      sessionStorage.removeItem("ctt_auth_session");
    }
  } catch (_) {}
}

function updateAuthUI() {
  const isLoggedIn = STATE.auth.isLoggedIn;
  const isAdmin = isLoggedIn && STATE.auth.role === "admin";
  const displayName = STATE.auth.displayName || "Thành viên";
  const initials = getInitials(displayName);
  const verifiedText = STATE.auth.verifiedVia
    ? `Đã xác thực ${STATE.auth.verifiedVia}`
    : "Đã xác thực tài khoản";

  const walletPill = document.getElementById("headerWalletPill");
  const btnAuth = document.getElementById("headerBtnAuth");
  const accountWrap = document.getElementById("headerAccountWrap");
  const dropdownAdminLink = document.getElementById("dropdownAdminLink");
  const navMember = document.getElementById("nav-member");
  const navAdmin = document.getElementById("nav-admin");
  const switchAdminItem = document.getElementById("memberSwitchAdminItem");

  if (walletPill) walletPill.style.display = isLoggedIn ? "inline-flex" : "none";
  if (btnAuth) btnAuth.style.display = isLoggedIn ? "none" : "inline-flex";
  if (accountWrap) accountWrap.style.display = isLoggedIn ? "inline-flex" : "none";
  if (dropdownAdminLink) dropdownAdminLink.style.display = isAdmin ? "flex" : "none";
  if (navMember) navMember.style.display = isLoggedIn ? "" : "none";
  if (navAdmin) navAdmin.style.display = isAdmin ? "" : "none";
  if (switchAdminItem) switchAdminItem.style.display = isAdmin ? "" : "none";

  const avatarEl = document.getElementById("headerUserAvatar");
  const nameEl = document.getElementById("headerUserName");
  const ddNameEl = document.getElementById("headerDropdownFullName");
  const ddVerEl = document.getElementById("headerDropdownVerified");
  if (avatarEl) avatarEl.textContent = initials;
  if (nameEl) nameEl.textContent = displayName;
  if (ddNameEl) ddNameEl.textContent = displayName;
  if (ddVerEl) ddVerEl.textContent = verifiedText;

  // Sync Member Portal sidebar dynamically
  const mAvatar = document.getElementById("memberSidebarAvatar");
  const mName = document.getElementById("memberSidebarName");
  const mBadge = document.getElementById("memberSidebarBadge");
  const mMeta = document.getElementById("memberSidebarMeta");
  if (mAvatar) mAvatar.textContent = initials;
  if (mName) mName.textContent = displayName;
  if (mBadge) mBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${verifiedText}`;
  if (mMeta && STATE.auth.identity) {
    mMeta.textContent = `Tài khoản: ${STATE.auth.identity} • ${isAdmin ? "Quản trị viên" : "Hạng Vàng"}`;
  }
}

function toggleHeaderUserDropdown(e) {
  if (e) e.stopPropagation();
  document.getElementById("headerUserDropdown")?.classList.toggle("is-open");
}

function closeHeaderUserDropdown() {
  document.getElementById("headerUserDropdown")?.classList.remove("is-open");
}

document.addEventListener("click", (e) => {
  const wrap = document.getElementById("headerAccountWrap");
  if (wrap && !wrap.contains(e.target)) {
    closeHeaderUserDropdown();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAuthModal();
    closeHeaderUserDropdown();
  }
});

function openAuthModal(noticeText = "", mode = "login") {
  const noticeEl = document.getElementById("authModalNotice");
  if (noticeEl) {
    if (noticeText) {
      noticeEl.textContent = noticeText;
      noticeEl.style.display = "block";
    } else {
      noticeEl.textContent = "";
      noticeEl.style.display = "none";
    }
  }
  showRegError("authLoginError", "");
  showRegError("authLoginSuccess", "");
  switchAuthMode(mode);
  document.getElementById("authModalBackdrop")?.classList.add("is-open");
}

function closeAuthModal() {
  document.getElementById("authModalBackdrop")?.classList.remove("is-open");
}

function completeAuthSession(authData, remember = true) {
  const inferredPhone = authData.phone || (/^0\d{9}$/.test((authData.identity || "").replace(/\s+/g, "")) ? authData.identity.replace(/\s+/g, "") : "");
  STATE.auth = {
    isLoggedIn: true,
    role: authData.role || "member",
    displayName: authData.displayName || "Thành viên ChoThueTot",
    identity: authData.identity || "",
    phone: inferredPhone,
    verifiedVia: authData.verifiedVia || "Zalo ZNS"
  };
  REG_STATE.loginAttempts = 0;
  persistAuthSession(remember);
  updateAuthUI();
  closeAuthModal();

  if (STATE.pendingPostModal) {
    const zId = STATE.pendingPostZoneId;
    STATE.pendingPostModal = false;
    STATE.pendingPostZoneId = null;
    if (zId) openPostModalWithZone(zId);
    else openPostModal();
    return;
  }

  let nextRoute = STATE.pendingAuthRoute;
  STATE.pendingAuthRoute = null;
  if (!nextRoute) {
    nextRoute = STATE.auth.role === "admin" ? "/admin.html" : "/tai-khoan.html";
  } else if (nextRoute.includes("admin") && STATE.auth.role !== "admin") {
    nextRoute = "/tai-khoan.html";
  }
  navigateTo(nextRoute);
}

function submitStandardLogin() {
  showRegError("authLoginError", "");
  showRegError("authLoginSuccess", "");

  if (REG_STATE.loginAttempts >= 5) {
    showRegError("authLoginError", "Bạn đã nhập sai quá 5 lần. Vui lòng dùng 'Quên mật khẩu?' để đặt lại mật khẩu an toàn.");
    return;
  }

  const rawId = document.getElementById("authLoginIdentity")?.value || "";
  const pwd = document.getElementById("authLoginPassword")?.value || "";
  const remember = document.getElementById("authRememberMe")?.checked !== false;
  const normId = normalizeAuthIdentity(rawId);

  if (!normId) {
    showRegError("authLoginError", "Vui lòng nhập Số điện thoại hoặc Email đã đăng ký.");
    return;
  }
  if (!pwd) {
    showRegError("authLoginError", "Vui lòng nhập mật khẩu tài khoản.");
    return;
  }

  const accounts = getAccountsStore();
  const matched = accounts.find((a) => normalizeAuthIdentity(a.identity) === normId);
  if (!matched || matched.password !== pwd) {
    REG_STATE.loginAttempts += 1;
    showRegError(
      "authLoginError",
      `Thông tin đăng nhập hoặc mật khẩu chưa chính xác (${REG_STATE.loginAttempts}/5 lần thử).`
    );
    return;
  }

  completeAuthSession(matched, remember);
}

function submitAdminLogin() {
  showRegError("adminLoginError", "");
  if (REG_STATE.loginAttempts >= 5) {
    showRegError("adminLoginError", "Bạn đã nhập sai quá 5 lần. Vui lòng thử lại sau hoặc liên hệ Quản trị cấp cao.");
    return;
  }

  const rawId = document.getElementById("adminLoginIdentity")?.value || "";
  const pwd = document.getElementById("adminLoginPassword")?.value || "";
  const remember = document.getElementById("adminRememberMe")?.checked !== false;
  const normId = normalizeAuthIdentity(rawId);

  if (!normId) {
    showRegError("adminLoginError", "Vui lòng nhập Email hoặc tên đăng nhập Admin.");
    return;
  }
  if (!pwd) {
    showRegError("adminLoginError", "Vui lòng nhập mật khẩu quản trị.");
    return;
  }

  const accounts = getAccountsStore();
  const matched = accounts.find((a) => normalizeAuthIdentity(a.identity) === normId);
  if (!matched || matched.password !== pwd) {
    REG_STATE.loginAttempts += 1;
    showRegError(
      "adminLoginError",
      `Tài khoản hoặc mật khẩu Admin chưa chính xác (${REG_STATE.loginAttempts}/5 lần thử).`
    );
    return;
  }
  if (matched.role !== "admin") {
    showRegError(
      "adminLoginError",
      "Tài khoản này không có quyền Quản trị viên. Vui lòng dùng tab Đăng nhập thành viên."
    );
    return;
  }

  completeAuthSession(matched, remember);
}

function loginWithZaloQuick() {
  switchAuthMode("register");
  switchRegisterMethod("zalo");
  const noticeEl = document.getElementById("authModalNotice");
  if (noticeEl) {
    noticeEl.textContent = "Xác thực nhanh bằng SĐT Zalo OTP để bảo vệ tài khoản chính chủ.";
    noticeEl.style.display = "block";
  }
}

function loginWithGoogleQuick() {
  switchAuthMode("register");
  switchRegisterMethod("google");
  const noticeEl = document.getElementById("authModalNotice");
  if (noticeEl) {
    noticeEl.textContent = "Liên kết & xác thực Gmail qua Google OAuth 2.0 để đăng nhập an toàn.";
    noticeEl.style.display = "block";
  }
}

function logoutAccount() {
  STATE.auth = { isLoggedIn: false, role: null, displayName: "", identity: "", verifiedVia: "" };
  STATE.pendingAuthRoute = null;
  STATE.pendingPostModal = false;
  STATE.pendingPostZoneId = null;
  persistAuthSession(true);
  closeHeaderUserDropdown();
  updateAuthUI();
  navigateTo("/");
}

const REG_STATE = {
  zaloOtp: "",
  zaloPhone: "",
  zaloCooldown: null,
  googleCode: "",
  googleEmail: "",
  googleCooldown: null,
  forgotOtp: "",
  forgotIdentity: "",
  forgotCooldown: null,
  otpAttempts: 0,
  loginAttempts: 0
};

function switchAuthMode(mode) {
  const tabLogin = document.getElementById("authTabLogin");
  const tabReg = document.getElementById("authTabRegister");
  const tabAdmin = document.getElementById("authTabAdmin");
  const panelLogin = document.getElementById("authPanelLogin");
  const panelReg = document.getElementById("authPanelRegister");
  const panelForgot = document.getElementById("authPanelForgot");
  const panelAdmin = document.getElementById("authPanelAdmin");

  if (panelLogin) panelLogin.style.display = mode === "login" ? "block" : "none";
  if (panelReg) panelReg.style.display = mode === "register" ? "block" : "none";
  if (panelForgot) panelForgot.style.display = mode === "forgot" ? "block" : "none";
  if (panelAdmin) panelAdmin.style.display = mode === "admin" ? "block" : "none";
  if (mode === "register") {
    const gPanel = document.getElementById("regPanelGoogle");
    if (gPanel) gPanel.style.display = "flex";
  }

  const isLogin = mode === "login" || mode === "forgot";
  const isReg = mode === "register";
  const isAdmin = mode === "admin";
  if (tabLogin) {
    tabLogin.style.background = isLogin ? "#fff" : "transparent";
    tabLogin.style.color = isLogin ? "#0f172a" : "#64748b";
    tabLogin.style.boxShadow = isLogin ? "0 2px 6px rgba(15,23,42,0.08)" : "none";
  }
  if (tabReg) {
    tabReg.style.background = isReg ? "#fff" : "transparent";
    tabReg.style.color = isReg ? "#0f172a" : "#64748b";
    tabReg.style.boxShadow = isReg ? "0 2px 6px rgba(15,23,42,0.08)" : "none";
  }
  if (tabAdmin) {
    tabAdmin.style.background = isAdmin ? "#0f172a" : "transparent";
    tabAdmin.style.color = isAdmin ? "#fff" : "#64748b";
    tabAdmin.style.boxShadow = isAdmin ? "0 2px 8px rgba(15,23,42,0.2)" : "none";
  }
}

function sendForgotOtp() {
  showRegError("forgotErrorBox", "");
  const normId = normalizeAuthIdentity(document.getElementById("forgotIdentityInput")?.value || "");
  if (!normId) {
    showRegError("forgotErrorBox", "Vui lòng nhập Số điện thoại Zalo hoặc Email đã đăng ký.");
    return;
  }
  const matched = getAccountsStore().find((a) => normalizeAuthIdentity(a.identity) === normId);
  if (!matched) {
    showRegError("forgotErrorBox", "Không tìm thấy tài khoản khớp với SĐT/Email này.");
    return;
  }
  const otp = String(Math.floor(100000 + Math.random() * 900000));
  REG_STATE.forgotOtp = otp;
  REG_STATE.forgotIdentity = normId;
  const banner = document.getElementById("forgotOtpBanner");
  if (banner) {
    banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> Đã gửi mã khôi phục 6 số tới <strong>${normId}</strong>.<br><span>Mã kiểm thử khôi phục: <strong class="tabular-nums" style="font-size:13px;letter-spacing:1px;">${otp}</strong></span>`;
    banner.style.display = "block";
  }
  startOtpButtonCooldown(document.getElementById("btnSendForgotOtp"), "Gửi mã OTP", "forgotCooldown");
}

function submitForgotReset() {
  showRegError("forgotErrorBox", "");
  const normId = normalizeAuthIdentity(document.getElementById("forgotIdentityInput")?.value || "");
  const otpInput = (document.getElementById("forgotOtpInput")?.value || "").trim();
  const newPwd = document.getElementById("forgotNewPassword")?.value || "";

  if (!REG_STATE.forgotOtp || normId !== REG_STATE.forgotIdentity) {
    showRegError("forgotErrorBox", "Vui lòng bấm 'Gửi mã OTP' trước khi đặt lại mật khẩu.");
    return;
  }
  if (otpInput !== REG_STATE.forgotOtp) {
    showRegError("forgotErrorBox", "Mã xác minh 6 số chưa chính xác.");
    return;
  }
  if (!evaluatePasswordStrength(newPwd).isStrong) {
    showRegError("forgotErrorBox", "Mật khẩu mới cần ≥ 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.");
    return;
  }

  const accounts = getAccountsStore();
  const idx = accounts.findIndex((a) => normalizeAuthIdentity(a.identity) === normId);
  if (idx >= 0) {
    accounts[idx].password = newPwd;
    saveAccountsStore(accounts);
  }
  REG_STATE.loginAttempts = 0;
  switchAuthMode("login");
  const idInput = document.getElementById("authLoginIdentity");
  if (idInput) idInput.value = normId;
  showRegError("authLoginSuccess", "Đã cập nhật mật khẩu mới thành công! Bạn có thể đăng nhập ngay.");
}

function switchRegisterMethod() {
  const googlePanel = document.getElementById("regPanelGoogle");
  if (googlePanel) googlePanel.style.display = "flex";
}

function toggleAuthPassword(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPwd = input.type === "password";
  input.type = isPwd ? "text" : "password";
  if (btnEl) {
    btnEl.innerHTML = isPwd ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
  }
}

function evaluatePasswordStrength(pwd) {
  if (!pwd) return { score: 0, label: "Chưa nhập", color: "#cbd5e1", isStrong: false };
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const levels = [
    { label: "Quá yếu (<8 ký tự)", color: "#f15a22" },
    { label: "Yếu", color: "#f97316" },
    { label: "Trung bình", color: "#f15a22" },
    { label: "Mạnh (Đạt chuẩn)", color: "#f15a22" },
    { label: "Rất mạnh (2FA Ready)", color: "#f15a22" }
  ];
  return {
    score,
    label: levels[score].label,
    color: levels[score].color,
    isStrong: pwd.length >= 8 && score >= 3
  };
}

function updateRegPasswordStrength(pwd, channel) {
  const res = evaluatePasswordStrength(pwd);
  const barId = channel === "google" ? "regGoogleStrengthBar" : "regZaloStrengthBar";
  const lblId = channel === "google" ? "regGoogleStrengthLabel" : "regZaloStrengthLabel";
  const bar = document.getElementById(barId);
  const lbl = document.getElementById(lblId);
  if (bar) {
    bar.style.width = `${(res.score / 4) * 100}%`;
    bar.style.background = res.color;
  }
  if (lbl) {
    lbl.textContent = res.label;
    lbl.style.color = res.color;
  }
}

function startOtpButtonCooldown(btnEl, defaultText, timerKey) {
  if (!btnEl) return;
  if (REG_STATE[timerKey]) clearInterval(REG_STATE[timerKey]);
  let sec = 60;
  btnEl.disabled = true;
  btnEl.style.opacity = "0.65";
  btnEl.textContent = `Gửi lại (${sec}s)`;
  REG_STATE[timerKey] = setInterval(() => {
    sec -= 1;
    if (sec <= 0) {
      clearInterval(REG_STATE[timerKey]);
      REG_STATE[timerKey] = null;
      btnEl.disabled = false;
      btnEl.style.opacity = "1";
      btnEl.textContent = defaultText;
    } else {
      btnEl.textContent = `Gửi lại (${sec}s)`;
    }
  }, 1000);
}

function showRegError(elId, msg) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (msg) {
    el.textContent = msg;
    el.style.display = "block";
  } else {
    el.textContent = "";
    el.style.display = "none";
  }
}

function sendZaloRegisterOtp() {
  showRegError("regZaloError", "");
  const phoneRaw = (document.getElementById("regZaloPhone")?.value || "").replace(/\s+/g, "");
  if (!/^0(3|5|7|8|9)\d{8}$/.test(phoneRaw)) {
    showRegError("regZaloError", "Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 chữ số, bắt đầu bằng 03/05/07/08/09).");
    return;
  }
  const otp = String(Math.floor(100000 + Math.random() * 900000));
  REG_STATE.zaloOtp = otp;
  REG_STATE.zaloPhone = phoneRaw;
  REG_STATE.otpAttempts = 0;

  const banner = document.getElementById("regZaloOtpBanner");
  if (banner) {
    banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> Đã gửi mã OTP 6 số qua <strong>Zalo ZNS</strong> tới SĐT <strong>${phoneRaw}</strong> (Hiệu lực 5 phút).<br><span style="color:#f15a22;">Mã kiểm thử Zalo ZNS: <strong class="tabular-nums" style="font-size:13px;letter-spacing:1px;">${otp}</strong></span>`;
    banner.style.display = "block";
  }
  startOtpButtonCooldown(document.getElementById("btnSendZaloOtp"), "Gửi mã Zalo", "zaloCooldown");
}

function submitZaloRegister() {
  showRegError("regZaloError", "");
  const name = (document.getElementById("regZaloName")?.value || "").trim();
  const phoneRaw = (document.getElementById("regZaloPhone")?.value || "").replace(/\s+/g, "");
  const otpInput = (document.getElementById("regZaloOtpInput")?.value || "").trim();
  const pwd = document.getElementById("regZaloPassword")?.value || "";
  const agreed = document.getElementById("regZaloAgree")?.checked;

  if (name.length < 2) {
    showRegError("regZaloError", "Vui lòng nhập họ và tên chính chủ.");
    return;
  }
  if (!REG_STATE.zaloOtp || phoneRaw !== REG_STATE.zaloPhone) {
    showRegError("regZaloError", "Vui lòng bấm 'Gửi mã Zalo' để nhận mã xác thực OTP cho số điện thoại này.");
    return;
  }
  if (REG_STATE.otpAttempts >= 5) {
    showRegError("regZaloError", "Bạn đã nhập sai OTP quá 5 lần. Vui lòng yêu cầu gửi mã Zalo mới.");
    return;
  }
  if (otpInput !== REG_STATE.zaloOtp) {
    REG_STATE.otpAttempts += 1;
    showRegError("regZaloError", `Mã OTP Zalo chưa chính xác (${REG_STATE.otpAttempts}/5 lần thử).`);
    return;
  }
  if (!evaluatePasswordStrength(pwd).isStrong) {
    showRegError("regZaloError", "Mật khẩu chưa đủ mạnh: cần tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.");
    return;
  }
  if (!agreed) {
    showRegError("regZaloError", "Vui lòng đồng ý chính sách bảo mật & xác thực SĐT chính chủ.");
    return;
  }

  const newAccount = {
    identity: phoneRaw,
    password: pwd,
    role: "member",
    displayName: name,
    verifiedVia: "Zalo ZNS OTP"
  };
  upsertAccountRecord(newAccount);
  completeAuthSession(newAccount, true);
}

function sendGoogleEmailCode() {
  showRegError("regGoogleError", "");
  const email = (document.getElementById("regGoogleEmail")?.value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showRegError("regGoogleError", "Vui lòng nhập địa chỉ Email Google hợp lệ (VD: tenban@gmail.com).");
    return;
  }
  const code = String(Math.floor(100000 + Math.random() * 900000));
  REG_STATE.googleCode = code;
  REG_STATE.googleEmail = email;
  REG_STATE.otpAttempts = 0;

  const banner = document.getElementById("regGoogleCodeBanner");
  if (banner) {
    banner.innerHTML = `<i class="fa-brands fa-google"></i> Đã liên kết Google OAuth 2.0 & gửi mã xác minh 6 số tới <strong>${email}</strong>.<br><span>Mã kiểm thử Gmail: <strong class="tabular-nums" style="font-size:13px;letter-spacing:1px;">${code}</strong></span>`;
    banner.style.display = "block";
  }
  startOtpButtonCooldown(document.getElementById("btnSendGoogleCode"), "Gửi mã Gmail", "googleCooldown");
}

function submitGoogleRegister() {
  showRegError("regGoogleError", "");
  const email = (document.getElementById("regGoogleEmail")?.value || "").trim().toLowerCase();
  const name = (document.getElementById("regGoogleName")?.value || "").trim();
  const codeInput = (document.getElementById("regGoogleCodeInput")?.value || "").trim();
  const pwd = document.getElementById("regGooglePassword")?.value || "";
  const agreed = document.getElementById("regGoogleAgree")?.checked;

  if (!REG_STATE.googleCode || email !== REG_STATE.googleEmail) {
    showRegError("regGoogleError", "Vui lòng bấm 'Gửi mã Gmail' để xác minh Email Google của bạn.");
    return;
  }
  if (name.length < 2) {
    showRegError("regGoogleError", "Vui lòng nhập họ và tên hiển thị.");
    return;
  }
  if (codeInput !== REG_STATE.googleCode) {
    REG_STATE.otpAttempts += 1;
    showRegError("regGoogleError", `Mã xác minh Gmail chưa đúng (${REG_STATE.otpAttempts}/5 lần thử).`);
    return;
  }
  if (!evaluatePasswordStrength(pwd).isStrong) {
    showRegError("regGoogleError", "Mật khẩu bảo vệ cần tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.");
    return;
  }
  if (!agreed) {
    showRegError("regGoogleError", "Vui lòng đồng ý liên kết Google OAuth 2.0 & bảo mật 2 lớp.");
    return;
  }

  const newAccount = {
    identity: email,
    password: pwd,
    role: "member",
    displayName: name,
    verifiedVia: "Google OAuth 2.0"
  };
  upsertAccountRecord(newAccount);
  completeAuthSession(newAccount, true);
}

// ==========================================================================
// 11. ANIMATED 4-STEP WIZARD POST LISTING IN MODAL FRAME (#postModalBackdrop)
//     & FULL MEMBER ACCOUNT PORTAL (#view-member) + ADMIN CONTROL CENTER (#view-admin)
// ==========================================================================
const STUDIO_ZONES = [
  { id: 1, name: "Banner Đặc Quyền", badge: "✦ ĐẶC QUYỀN", badgeClass: "tag-dacquyen", zoneClass: "zone-spotlight", tier: "spotlight", mapTier: "banner", rate: 50000, desc: "Top đầu trang chủ" },
  { id: 2, name: "TOP 1 Hiển Thị", badge: "✦ VIP 1", badgeClass: "tag-vip1", zoneClass: "zone-spotlight", tier: "spotlight", mapTier: "vip1", rate: 35000, desc: "Spotlight nổi bật" },
  { id: 3, name: "TOP 2 Nổi Bật", badge: "• VIP 2", badgeClass: "tag-vip2", zoneClass: "zone-featured", tier: "featured", mapTier: "vip2", rate: 25000, desc: "Featured ưu tiên" },
  { id: 5, name: "TOP 3 Hiệu Quả", badge: "VIP 3", badgeClass: "tag-vip3", zoneClass: "zone-prime", tier: "prime", mapTier: "vip3", rate: 15000, desc: "Prime tiết kiệm" },
  { id: 4, name: "Tin Cơ Bản", badge: "", badgeClass: "", zoneClass: "", tier: "basic", mapTier: "basic", rate: 1000, desc: "Lên bản đồ chuẩn" },
  { id: 13, name: "Đăng Tin Miễn Phí", badge: "", badgeClass: "", zoneClass: "", tier: "free", mapTier: "free", rate: 0, desc: "Không lên bản đồ" }
];

const STUDIO_DURATIONS = [
  { days: 3, label: "3 ngày", off: 0 },
  { days: 7, label: "7 ngày", off: 5 },
  { days: 15, label: "15 ngày", off: 10 },
  { days: 30, label: "30 ngày", off: 20 }
];

const STUDIO_STICKERS = [
  { id: "urgent", name: "Giảm Sâu", hint: "Cần cho thuê nhanh", cls: "sticker-urgent", icon: "fa-bolt" },
  { id: "hot", name: "HOT", hint: "Thu hút sự chú ý", cls: "sticker-hot", icon: "fa-fire" },
  { id: "promo", name: "Ưu Đãi", hint: "Tìm khách hàng mới", cls: "sticker-promo", icon: "fa-gift" }
];

const STUDIO_PROMO_CODES = {
  STAYMAP10: { code: "STAYMAP10", type: "percent", value: 10, desc: "Giảm 10%" },
  WELCOME15: { code: "WELCOME15", type: "percent", value: 15, desc: "Giảm 15%" },
  VIP20: { code: "VIP20", type: "percent", value: 20, desc: "Giảm 20%" },
  CHOTHUE50K: { code: "CHOTHUE50K", type: "fixed", value: 50000, desc: "Giảm 50.000đ" }
};

function syncStudioPromoUI(isLocked) {
  const inputEl = document.getElementById("dPromoCode");
  const btnEl = document.getElementById("btnPromoAction");
  const subLabel = document.getElementById("promoSubLabel");
  if (subLabel) {
    if (isLocked) {
      subLabel.textContent = "(Đã Áp Dụng)";
      subLabel.style.color = "var(--ctt-orange)";
      subLabel.style.fontWeight = "800";
    } else {
      subLabel.textContent = "(Nếu Có)";
      subLabel.style.color = "";
      subLabel.style.fontWeight = "";
    }
  }
  if (inputEl) {
    inputEl.readOnly = Boolean(isLocked);
    inputEl.style.background = isLocked ? "#fffaf5" : "#ffffff";
    inputEl.style.borderColor = isLocked ? "var(--ctt-orange)" : "";
    inputEl.style.boxShadow = isLocked ? "0 6px 16px rgba(241, 90, 34, 0.14)" : "";
    inputEl.style.color = isLocked ? "var(--ctt-orange)" : "#0f172a";
  }
  if (btnEl) {
    if (isLocked) {
      btnEl.textContent = "HỦY";
      btnEl.className = "hsp-btn-reset";
      btnEl.style.cssText = "white-space:nowrap;padding:10px 18px;font-size:12.5px;font-weight:800;color:#f8fafc;background:rgba(15, 23, 42, 0.9);border:1px solid rgba(255, 255, 255, 0.22);border-radius:10px;";
    } else {
      btnEl.textContent = "Áp dụng";
      btnEl.className = "hsp-btn-apply";
      btnEl.style.cssText = "white-space:nowrap;padding:10px 16px;font-size:12.5px;";
    }
  }
}

function onStudioPromoInput(val) {
  if (STUDIO_STATE.promoCode) return;
  const statusEl = document.getElementById("promoCodeStatus");
  if (statusEl && !(val || "").trim()) {
    statusEl.textContent = "";
  }
}

function handleStudioPromoAction() {
  if (STUDIO_STATE.promoCode) {
    cancelStudioPromoCode();
  } else {
    applyStudioPromoCode();
  }
}

function cancelStudioPromoCode() {
  const inputEl = document.getElementById("dPromoCode");
  const statusEl = document.getElementById("promoCodeStatus");
  STUDIO_STATE.promoCode = "";
  if (inputEl) inputEl.value = "";
  if (statusEl) statusEl.textContent = "";
  syncStudioPromoUI(false);
  renderStudioPreview();
}

function applyStudioPromoCode() {
  const inputEl = document.getElementById("dPromoCode");
  const statusEl = document.getElementById("promoCodeStatus");
  const clean = (inputEl?.value || "").trim().toUpperCase();
  if (!clean) {
    STUDIO_STATE.promoCode = "";
    if (statusEl) {
      statusEl.textContent = "Vui lòng nhập mã khuyến mãi";
      statusEl.style.color = "var(--ctt-orange)";
    }
    syncStudioPromoUI(false);
    renderStudioPreview();
    return;
  }
  const promo = STUDIO_PROMO_CODES[clean];
  if (!promo) {
    STUDIO_STATE.promoCode = "";
    if (statusEl) {
      statusEl.textContent = "Mã Nhập Không Hợp Lệ";
      statusEl.style.color = "var(--ctt-orange)";
    }
    syncStudioPromoUI(false);
    renderStudioPreview();
    return;
  }
  if (inputEl) inputEl.value = clean;
  STUDIO_STATE.promoCode = clean;
  if (statusEl) {
    statusEl.textContent = "";
  }
  syncStudioPromoUI(true);
  renderStudioPreview();
}

function calcStudioCheckoutPricing(z, dur, stObj, promoCode) {
  const rawPkgTotal = z.rate * dur.days;
  const durationDiscount = Math.round(rawPkgTotal * (dur.off / 100));
  const pkgAfterDur = rawPkgTotal - durationDiscount;
  const stickerTotal = stObj ? dur.days * 1000 : 0;
  const baseBeforePromo = pkgAfterDur + stickerTotal;
  const promoObj = promoCode ? STUDIO_PROMO_CODES[promoCode] || null : null;
  let promoDiscount = 0;
  if (promoObj && baseBeforePromo > 0) {
    promoDiscount = promoObj.type === "percent"
      ? Math.round(baseBeforePromo * (promoObj.value / 100))
      : Math.min(baseBeforePromo, promoObj.value);
  }
  const totalDiscount = durationDiscount + promoDiscount;
  const subtotal = Math.max(0, baseBeforePromo - promoDiscount);
  const vatTotal = Math.round(subtotal * 0.08);
  const grandTotal = subtotal + vatTotal;
  return {
    rawPkgTotal,
    durationDiscount,
    stickerTotal,
    promoObj,
    promoDiscount,
    totalDiscount,
    subtotal,
    vatTotal,
    grandTotal
  };
}

const STUDIO_WARDS_BY_CITY = window.VN_ADMIN_2025_WARDS_BY_CITY || {};
const STUDIO_STREETS_BY_WARD = window.VN_ADMIN_2025_STREETS_BY_WARD || {};
const STUDIO_WARD_COORDS = window.VN_ADMIN_2025_WARD_COORDS || {};

const STUDIO_STATE = {
  wizardStep: 1,
  previewTab: "card",
  catKey: "phong-tro",
  catLabel: "Phòng Trọ / CHDV",
  beds: "1 PN",
  baths: "1 WC",
  deposit: "",
  furniture: "",
  houseNumber: "",
  isEditingAddress: false,
  addrMergeTimer: null,
  selectedZoneId: null,
  selectedDays: 15,
  aiAutoSync: false,
  selectedSticker: null,
  coverIndex: 0,
  photos: [],
  videoUrl: "",
  videoName: ""
};

openPostModal = function () {
  if (!STATE.auth.isLoggedIn) {
    STATE.pendingPostModal = true;
    STATE.pendingPostZoneId = null;
    openAuthModal("Vui lòng đăng nhập hoặc đăng ký tài khoản để đăng tin & lưu vào Hồ sơ Thành viên.");
    return;
  }
  document.getElementById("postModalBackdrop")?.classList.add("is-open");
  initStudioPostListing(null);
  goToModalWizardStep(1, true);
};

openPostModalWithZone = function (zoneId) {
  if (!STATE.auth.isLoggedIn) {
    STATE.pendingPostModal = true;
    STATE.pendingPostZoneId = zoneId;
    openAuthModal("Vui lòng đăng nhập hoặc đăng ký tài khoản để chọn gói tin & đăng bài.");
    return;
  }
  document.getElementById("postModalBackdrop")?.classList.add("is-open");
  initStudioPostListing(zoneId);
  goToModalWizardStep(1, true);
};

function showStudioStepError(msg) {
  const box = document.getElementById("stepValidationError");
  if (!box) return;
  if (msg) {
    box.textContent = msg;
    box.style.display = "block";
  } else {
    box.textContent = "";
    box.style.display = "none";
  }
}

function validateStudioStepBeforeNext(stepNum) {
  if (stepNum === 1) {
    const city = (document.getElementById("dCity")?.value || "").trim();
    const ward = (document.getElementById("dWard")?.value || "").trim();
    const street = (document.getElementById("dStreet")?.value || "").trim();
    const house = (STUDIO_STATE.houseNumber || "").trim();
    const host = (document.getElementById("dHost")?.value || "").trim();
    const phone = (document.getElementById("dPhone")?.value || "").trim();
    if (!city) {
      showStudioStepError("Vui lòng chọn hoặc nhập Tỉnh / Thành trước khi qua Bước 2.");
      document.getElementById("dCity")?.focus();
      return false;
    }
    if (!ward) {
      showStudioStepError("Vui lòng chọn hoặc nhập Phường / Xã trước khi qua Bước 2.");
      document.getElementById("dWard")?.focus();
      return false;
    }
    if (!street) {
      showStudioStepError("Vui lòng chọn hoặc nhập Tên Đường trước khi qua Bước 2.");
      document.getElementById("dStreet")?.focus();
      return false;
    }
    const project = getValidStudioComboValue("project");
    if (!house && !project) {
      showStudioStepError("Vui lòng nhập Địa Chỉ Chi Tiết (số nhà) trước khi qua Bước 2.");
      document.getElementById("dAddress")?.focus();
      return false;
    }
    if (!host) {
      showStudioStepError("Vui lòng nhập Tên Người Liên Hệ.");
      document.getElementById("dHost")?.focus();
      return false;
    }
    if (!/^0(3|5|7|8|9)\d{8}$/.test(phone)) {
      showStudioStepError("Vui lòng nhập đúng Số Điện Thoại Việt Nam (10 số, bắt đầu 03/05/07/08/09).");
      document.getElementById("dPhone")?.focus();
      return false;
    }
  } else if (stepNum === 2) {
    const price = parseFloat(document.getElementById("dPrice")?.value || "0");
    const area = parseFloat(document.getElementById("dArea")?.value || "0");
    if (!price || price <= 0) {
      showStudioStepError("Vui lòng nhập Giá Thuê (Triệu/Tháng) hợp lệ trước khi qua Bước 3.");
      document.getElementById("dPrice")?.focus();
      return false;
    }
    if (!area || area < 5) {
      showStudioStepError("Vui lòng nhập Diện Tích (≥ 5 m²) trước khi qua Bước 3.");
      document.getElementById("dArea")?.focus();
      return false;
    }
  } else if (stepNum === 3) {
    const title = (document.getElementById("dTitle")?.value || "").trim();
    const desc = (document.getElementById("dDesc")?.value || "").trim();
    if (title.length < 10) {
      showStudioStepError("Vui lòng nhập Tiêu Đề (hoặc bấm 'Click Ngay' để AI viết) trước khi qua Bước 4.");
      document.getElementById("dTitle")?.focus();
      return false;
    }
    if (desc.length < 15) {
      showStudioStepError("Vui lòng nhập Mô Tả Chi Tiết (hoặc bấm 'Click Ngay') trước khi qua Bước 4.");
      document.getElementById("dDesc")?.focus();
      return false;
    }
    if (STUDIO_STATE.photos.length < 4) {
      showStudioStepError(`Vui lòng tải lên tối thiểu 4 hình ảnh thực tế (hiện có ${STUDIO_STATE.photos.length}/9 hình).`);
      return false;
    }
  }
  showStudioStepError("");
  return true;
}

function goToModalWizardStep(stepNum, force = false) {
  const target = Math.max(1, Math.min(4, stepNum));
  if (!force && target > STUDIO_STATE.wizardStep) {
    for (let s = STUDIO_STATE.wizardStep; s < target; s++) {
      if (!validateStudioStepBeforeNext(s)) {
        if (s !== STUDIO_STATE.wizardStep) {
          STUDIO_STATE.wizardStep = s;
          break;
        }
        return;
      }
    }
  } else {
    showStudioStepError("");
  }

  STUDIO_STATE.wizardStep = target;
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`modalWizardSlide${i}`)?.classList.toggle("active", i === target);
  }
  document.querySelectorAll("#modalWizardTabs .subtle-step-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx + 1 === target);
  });

  const prevBtn = document.getElementById("btnModalPrev");
  const nextBtn = document.getElementById("btnModalNext");
  const counterEl = document.getElementById("modalStepCounter");
  if (prevBtn) prevBtn.style.visibility = target === 1 ? "hidden" : "visible";
  if (counterEl) counterEl.textContent = `Bước ${target} / 4`;
  if (nextBtn) {
    nextBtn.style.visibility = target === 4 ? "hidden" : "visible";
    nextBtn.innerHTML = `Tiếp theo <i class="fa-solid fa-arrow-right"></i>`;
  }
  const modalBody = document.querySelector("#postModalBackdrop .ctt-modal-body");
  if (modalBody) modalBody.scrollTop = 0;
  const modalDialog = document.querySelector("#postModalBackdrop .ctt-modal-dialog");
  if (modalDialog) modalDialog.scrollTop = 0;
  const activeSlide = document.getElementById(`modalWizardSlide${target}`);
  if (activeSlide) activeSlide.scrollTop = 0;
  document.getElementById("modalWizardTabs")?.scrollIntoView({ block: "nearest" });
}

function stepModalWizard(dir) {
  goToModalWizardStep(STUDIO_STATE.wizardStep + dir);
}

function selectStudioCategory(catKey, catLabel, btnEl) {
  STUDIO_STATE.catKey = catKey;
  STUDIO_STATE.catLabel = catLabel;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll(".post-cat-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderStudioPreview();
}

function sanitizeStudioVnPhone(inputEl) {
  const digits = (inputEl.value || "").replace(/\D/g, "").slice(0, 10);
  inputEl.value = digits;
  const isValid = /^0(3|5|7|8|9)\d{8}$/.test(digits);
  const statusEl = document.getElementById("dPhoneStatus");
  const iconEl = document.getElementById("dPhoneValidIcon");
  if (iconEl) {
    iconEl.style.display = isValid ? "inline-flex" : "none";
  }
  if (statusEl) {
    if (!digits || isValid) {
      statusEl.textContent = "";
    } else {
      statusEl.textContent = "10 số (03/05/07/08/09)";
      statusEl.style.color = "#dc2626";
    }
  }
  renderStudioPreview();
}

// Cơ sở dữ liệu 34 Tỉnh/Thành & Dự án chuẩn hóa từ data/vn_admin_units_2025.js
const STUDIO_CITIES = window.VN_ADMIN_2025_CITIES || [];
const STUDIO_PROJECTS = window.VN_ADMIN_2025_PROJECTS || [];

function getSelectedStudioProject() {
  const projectVal = getValidStudioComboValue("project");
  if (!projectVal) return null;
  return STUDIO_PROJECTS.find((p) => p.value === projectVal) || null;
}

const STUDIO_DEPOSITS = ["Miễn Cọc", "1 Tháng", "2 Tháng", "3 Tháng", "Thỏa Thuận"].map((v) => ({ value: v, label: v }));
const STUDIO_BEDS_OPTS = [
  { value: "1 PN", label: "1 Phòng Ngủ" },
  { value: "2 PN", label: "2 Phòng Ngủ" },
  { value: "3 PN", label: "3 Phòng Ngủ" },
  { value: "4 PN", label: "4 Phòng Ngủ" },
  { value: "5 PN", label: "5 Phòng Ngủ" },
  { value: "6+ PN", label: "6+ Phòng Ngủ" }
];
const STUDIO_BATHS_OPTS = [
  { value: "1 WC", label: "1 Nhà Vệ Sinh" },
  { value: "2 WC", label: "2 Nhà Vệ Sinh" },
  { value: "3 WC", label: "3 Nhà Vệ Sinh" },
  { value: "4 WC", label: "4 Nhà Vệ Sinh" },
  { value: "5 WC", label: "5 Nhà Vệ Sinh" },
  { value: "6+ WC", label: "6+ Nhà Vệ Sinh" }
];
const STUDIO_MAX_PEOPLE_OPTS = ["1 Người", "2 Người", "3 Người", "4 Người", "5 Người"].map((v) => ({ value: v, label: v }));
const STUDIO_FURNITURE_OPTS = ["Không Có", "Cơ Bản", "Đầy Đủ"].map((v) => ({ value: v, label: v }));
const STUDIO_FLOORS_OPTS = ["1 Tầng", "2 Tầng", "3 Tầng", "4 Tầng", "5 Tầng", "6+ Tầng"].map((v) => ({ value: v, label: v }));
const STUDIO_DIRECTIONS_OPTS = ["Đông", "Tây", "Nam", "Bắc", "Đông Bắc", "Đông Nam", "Tây Bắc", "Tây Nam"].map((v) => ({ value: v, label: v }));

const STUDIO_COMBO_TIMERS = {
  city: null, ward: null, street: null, project: null,
  deposit: null, beds: null, baths: null, maxPeople: null,
  furniture: null, floors: null, direction: null
};

function getStudioComboItems(kind) {
  if (kind === "city") return STUDIO_CITIES;
  if (kind === "project") {
    const city = (document.getElementById("dCity")?.value || "").trim();
    const ward = (document.getElementById("dWard")?.value || "").trim();
    let list = STUDIO_PROJECTS;
    if (city) {
      const byCity = list.filter((p) => p.city === city);
      if (byCity.length) list = byCity;
    }
    if (ward) {
      const byWard = list.filter((p) => p.ward === ward);
      if (byWard.length) list = byWard;
    }
    return list;
  }
  if (kind === "deposit") return STUDIO_DEPOSITS;
  if (kind === "beds") return STUDIO_BEDS_OPTS;
  if (kind === "baths") return STUDIO_BATHS_OPTS;
  if (kind === "maxPeople") return STUDIO_MAX_PEOPLE_OPTS;
  if (kind === "furniture") return STUDIO_FURNITURE_OPTS;
  if (kind === "floors") return STUDIO_FLOORS_OPTS;
  if (kind === "direction") return STUDIO_DIRECTIONS_OPTS;
  if (kind === "ward") {
    const city = (document.getElementById("dCity")?.value || "").trim();
    if (city && STUDIO_WARDS_BY_CITY[city]) {
      return STUDIO_WARDS_BY_CITY[city];
    }
    return Object.values(STUDIO_WARDS_BY_CITY).flat();
  }
  const city = (document.getElementById("dCity")?.value || "").trim();
  const ward = (document.getElementById("dWard")?.value || "").trim();
  let list = [];
  if (ward && STUDIO_STREETS_BY_WARD[ward]) {
    list = STUDIO_STREETS_BY_WARD[ward];
  } else if (city && STUDIO_WARDS_BY_CITY[city]) {
    const cityWards = STUDIO_WARDS_BY_CITY[city].map((w) => w.value);
    list = cityWards.flatMap((w) => STUDIO_STREETS_BY_WARD[w] || []);
  } else {
    list = Object.values(STUDIO_STREETS_BY_WARD).flat();
  }
  return Array.from(new Set(list)).map((s) => ({ value: s, label: s }));
}

function getStudioComboEls(kind) {
  const map = {
    city: ["dCity", "dCitySuggestList"],
    ward: ["dWard", "dWardSuggestList"],
    street: ["dStreet", "dStreetSuggestList"],
    project: ["dProject", "dProjectSuggestList"],
    deposit: ["dDeposit", "dDepositSuggestList"],
    beds: ["dBeds", "dBedsSuggestList"],
    baths: ["dBaths", "dBathsSuggestList"],
    maxPeople: ["dMaxPeople", "dMaxPeopleSuggestList"],
    furniture: ["dFurniture", "dFurnitureSuggestList"],
    floors: ["dFloors", "dFloorsSuggestList"],
    direction: ["dDirection", "dDirectionSuggestList"]
  };
  const [inputId, listId] = map[kind] || ["dStreet", "dStreetSuggestList"];
  return {
    inputEl: document.getElementById(inputId),
    listEl: document.getElementById(listId)
  };
}

function isValidStudioComboValue(kind, val) {
  if (!val) return false;
  return getStudioComboItems(kind).some((it) => it.value === val || it.label === val);
}

function getValidStudioComboValue(kind) {
  const { inputEl } = getStudioComboEls(kind);
  const raw = (inputEl?.value || "").trim();
  return isValidStudioComboValue(kind, raw) ? raw : "";
}

function renderStudioComboList(kind, query = "") {
  const { listEl } = getStudioComboEls(kind);
  if (!listEl) return;
  const items = getStudioComboItems(kind);
  const qNorm = toVietnameseSlug(query);
  const filtered = qNorm
    ? items.filter((it) => toVietnameseSlug(it.label).includes(qNorm) || toVietnameseSlug(it.value).includes(qNorm))
    : items;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="ctt-combo-empty">Không tìm thấy trong danh sách — Vui lòng chọn từ gợi ý.</div>`;
  } else {
    listEl.innerHTML = filtered
      .map(
        (it) => `<button type="button" class="ctt-combo-item" onmousedown="event.preventDefault();pickStudioComboItem('${kind}', '${it.value.replace(/'/g, "\\'")}')">${it.label}</button>`
      )
      .join("");
  }
  listEl.classList.add("is-open");
}

function openStudioCombo(kind) {
  clearTimeout(STUDIO_COMBO_TIMERS[kind]);
  const { inputEl } = getStudioComboEls(kind);
  const val = (inputEl?.value || "").trim();
  const isExactOption = isValidStudioComboValue(kind, val);
  if (inputEl && isExactOption) inputEl.dataset.prevValid = val;
  renderStudioComboList(kind, isExactOption ? "" : val);
}

function filterStudioCombo(kind) {
  const { inputEl } = getStudioComboEls(kind);
  renderStudioComboList(kind, inputEl?.value || "");
  syncStudioAddressDisplay();
}

function pickStudioComboItem(kind, val) {
  const { inputEl, listEl } = getStudioComboEls(kind);
  if (inputEl) {
    inputEl.value = val;
    inputEl.dataset.prevValid = val;
  }
  if (listEl) listEl.classList.remove("is-open");
  if (kind === "city") {
    const wardEl = document.getElementById("dWard");
    const streetEl = document.getElementById("dStreet");
    if (wardEl) {
      wardEl.value = "";
      wardEl.dataset.prevValid = "";
    }
    if (streetEl) {
      streetEl.value = "";
      streetEl.dataset.prevValid = "";
    }
  } else if (kind === "ward") {
    const streetEl = document.getElementById("dStreet");
    if (streetEl && !STUDIO_STREETS_BY_WARD[val]?.includes(streetEl.value)) {
      streetEl.value = "";
      streetEl.dataset.prevValid = "";
    }
  } else if (kind === "project") {
    const proj = STUDIO_PROJECTS.find((p) => p.value === val);
    if (proj) {
      const cityEl = document.getElementById("dCity");
      const wardEl = document.getElementById("dWard");
      const streetEl = document.getElementById("dStreet");
      if (cityEl && proj.city) {
        cityEl.value = proj.city;
        cityEl.dataset.prevValid = proj.city;
      }
      if (wardEl && proj.ward) {
        wardEl.value = proj.ward;
        wardEl.dataset.prevValid = proj.ward;
      }
      if (streetEl && proj.street) {
        streetEl.value = proj.street;
        streetEl.dataset.prevValid = proj.street;
      }
      STUDIO_STATE.houseNumber = "";
      STUDIO_STATE.isEditingAddress = false;
    }
  } else if (kind === "deposit") {
    STUDIO_STATE.deposit = val;
  } else if (kind === "beds") {
    STUDIO_STATE.beds = val;
  } else if (kind === "baths") {
    STUDIO_STATE.baths = val;
  } else if (kind === "maxPeople") {
    onStudioMaxPeopleChange(val);
  } else if (kind === "furniture") {
    STUDIO_STATE.furniture = val;
  }
  syncStudioAddressDisplay();
}

function onStudioRoomCountInput(kind, inputEl) {
  if (!inputEl) return;
  const digits = String(inputEl.value || "").replace(/\D/g, "");
  if (inputEl.value !== digits) inputEl.value = digits;
  const n = parseInt(digits, 10);
  if (kind === "beds") {
    STUDIO_STATE.beds = `${Number.isFinite(n) && n > 0 ? n : 1} PN`;
  } else {
    STUDIO_STATE.baths = `${Number.isFinite(n) && n > 0 ? n : 1} WC`;
  }
  renderStudioPreview();
}

function onStudioRoomCountBlur(kind, inputEl) {
  if (!inputEl) return;
  const n = parseInt(String(inputEl.value || "").replace(/\D/g, ""), 10);
  const finalN = Number.isFinite(n) && n > 0 ? n : 1;
  inputEl.value = String(finalN);
  if (kind === "beds") {
    STUDIO_STATE.beds = `${finalN} PN`;
  } else {
    STUDIO_STATE.baths = `${finalN} WC`;
  }
  renderStudioPreview();
}

let STUDIO_WATER_TIMER = null;
let STUDIO_LAUNDRY_TIMER = null;

function openStudioWaterUnitList() {
  clearTimeout(STUDIO_WATER_TIMER);
  const listEl = document.getElementById("dWaterUnitList");
  if (!listEl) return;
  const activeUnit = STUDIO_STATE.waterUnit || "nguoi";
  listEl.querySelectorAll(".ctt-combo-item").forEach((btn, idx) => {
    const unit = idx === 0 ? "m3" : "nguoi";
    btn.classList.toggle("is-active", activeUnit === unit);
  });
  listEl.classList.add("is-open");
}

function closeStudioWaterUnitDelay() {
  clearTimeout(STUDIO_WATER_TIMER);
  STUDIO_WATER_TIMER = setTimeout(() => {
    document.getElementById("dWaterUnitList")?.classList.remove("is-open");
  }, 150);
}

function selectStudioWaterUnit(unit) {
  clearTimeout(STUDIO_WATER_TIMER);
  STUDIO_STATE.waterUnit = unit;
  const labelEl = document.getElementById("dWaterUnitLabel");
  if (labelEl) {
    labelEl.textContent = unit === "m3" ? "(m³)" : "(Người)";
    labelEl.style.display = "inline";
  }
  document.getElementById("dWaterUnitList")?.classList.remove("is-open");
  const inputEl = document.getElementById("dWater");
  if (inputEl) inputEl.focus();
  renderStudioPreview();
}

function onStudioWaterInput(inputEl) {
  document.getElementById("dWaterUnitList")?.classList.remove("is-open");
  sanitizeStudioNumericK(inputEl);
}

function openStudioLaundryUnitList() {
  clearTimeout(STUDIO_LAUNDRY_TIMER);
  const listEl = document.getElementById("dLaundryUnitList");
  if (!listEl) return;
  const activeUnit = STUDIO_STATE.laundryUnit || "nguoi";
  const order = ["nguoi", "lan", "kg", "phong"];
  listEl.querySelectorAll(".ctt-combo-item").forEach((btn, idx) => {
    btn.classList.toggle("is-active", activeUnit === order[idx]);
  });
  listEl.classList.add("is-open");
}

function closeStudioLaundryUnitDelay() {
  clearTimeout(STUDIO_LAUNDRY_TIMER);
  STUDIO_LAUNDRY_TIMER = setTimeout(() => {
    document.getElementById("dLaundryUnitList")?.classList.remove("is-open");
  }, 150);
}

function selectStudioLaundryUnit(unit) {
  clearTimeout(STUDIO_LAUNDRY_TIMER);
  STUDIO_STATE.laundryUnit = unit;
  const labelMap = { nguoi: "(Người)", lan: "(1 Lần)", kg: "(Kg)", phong: "(Phòng)" };
  const labelEl = document.getElementById("dLaundryUnitLabel");
  if (labelEl) {
    labelEl.textContent = labelMap[unit] || "(Người)";
    labelEl.style.display = "inline";
  }
  document.getElementById("dLaundryUnitList")?.classList.remove("is-open");
  const inputEl = document.getElementById("dLaundry");
  if (inputEl) inputEl.focus();
  renderStudioPreview();
}

function onStudioLaundryInput(inputEl) {
  document.getElementById("dLaundryUnitList")?.classList.remove("is-open");
  sanitizeStudioNumericK(inputEl);
}

function closeStudioComboDelay(kind) {
  STUDIO_COMBO_TIMERS[kind] = setTimeout(() => {
    const { inputEl, listEl } = getStudioComboEls(kind);
    if (listEl) listEl.classList.remove("is-open");
    if (inputEl) {
      const raw = (inputEl.value || "").trim();
      if (!raw) {
        if (kind === "city") {
          inputEl.value = inputEl.dataset.prevValid || "TP. Hồ Chí Minh";
        } else {
          inputEl.dataset.prevValid = "";
        }
      } else if (!isValidStudioComboValue(kind, raw)) {
        inputEl.value = inputEl.dataset.prevValid || (kind === "city" ? "TP. Hồ Chí Minh" : "");
      } else {
        inputEl.dataset.prevValid = raw;
      }
      syncStudioAddressDisplay();
    }
  }, 150);
}

function populateStudioWards() {
  // Kept for compatibility; #dWard is now an empty searchable combo input
}

function onStudioCityChange() {
  const wardEl = document.getElementById("dWard");
  const streetEl = document.getElementById("dStreet");
  if (wardEl) wardEl.value = "";
  if (streetEl) streetEl.value = "";
  syncStudioAddressDisplay();
}

function populateStudioStreets() {
  // Kept for compatibility; #dStreet dynamically filters by #dWard
}

function getStudioStreetWithProjectNumber(street, proj) {
  if (!street) return "";
  if (proj?.streetNumber && proj.street === street) {
    return `${proj.streetNumber} ${street}`;
  }
  return street;
}

function getStudioLockedSuffix() {
  const city = getValidStudioComboValue("city");
  const ward = getValidStudioComboValue("ward");
  const street = getValidStudioComboValue("street");
  const project = getValidStudioComboValue("project");
  const projObj = project ? STUDIO_PROJECTS.find((p) => p.value === project) : null;
  const streetPart = getStudioStreetWithProjectNumber(street, projObj);
  const parts = project
    ? [project, streetPart, ward, city]
    : [street, ward, city];
  return parts.filter(Boolean).join(", ");
}

function buildStudioFullAddress() {
  const prefix = (STUDIO_STATE.houseNumber || "").trim();
  const street = getValidStudioComboValue("street");
  const project = getValidStudioComboValue("project");
  const ward = getValidStudioComboValue("ward");
  const city = getValidStudioComboValue("city");
  const projObj = project ? STUDIO_PROJECTS.find((p) => p.value === project) : null;

  if (project) {
    const streetPart = getStudioStreetWithProjectNumber(street, projObj);
    return [prefix, project, streetPart, ward, city].filter(Boolean).join(", ");
  }

  const front = [prefix, street].filter(Boolean).join(" ");
  const tail = [ward, city].filter(Boolean).join(", ");
  if (front && tail) return `${front}, ${tail}`;
  return front || tail;
}

function mergeStudioFullAddressNow() {
  const addrEl = document.getElementById("dAddress");
  const suffixEl = document.getElementById("dAddressSuffix");
  const hasPrefix = Boolean((STUDIO_STATE.houseNumber || "").trim());
  if (hasPrefix && addrEl) {
    addrEl.value = buildStudioFullAddress();
    if (suffixEl) suffixEl.textContent = "";
  }
  renderStudioPreview();
}

function syncStudioAddressDisplay() {
  const addrEl = document.getElementById("dAddress");
  const suffixEl = document.getElementById("dAddressSuffix");
  const hasProject = Boolean(getValidStudioComboValue("project"));
  if (addrEl) {
    addrEl.placeholder = "Số Nhà Chuẩn, Ghim Đúng Map - VD: 168/86";
  }
  const suffix = getStudioLockedSuffix();
  const hasPrefix = Boolean((STUDIO_STATE.houseNumber || "").trim());
  if (!STUDIO_STATE.isEditingAddress && (hasPrefix || hasProject) && addrEl) {
    addrEl.value = buildStudioFullAddress();
    if (suffixEl) suffixEl.textContent = "";
  } else {
    if (!STUDIO_STATE.isEditingAddress && !hasPrefix && !hasProject && addrEl) {
      addrEl.value = "";
    }
    if (suffixEl) {
      suffixEl.textContent = suffix ? (hasPrefix ? `, ${suffix}` : suffix) : "";
      suffixEl.classList.toggle("has-prefix", hasPrefix);
    }
  }
  renderStudioPreview();
}

function onStudioLocationChange(wardChanged = false) {
  if (wardChanged) populateStudioStreets();
  syncStudioAddressDisplay();
}

function onStudioAddressFocus() {
  clearTimeout(STUDIO_STATE.addrMergeTimer);
  STUDIO_STATE.isEditingAddress = true;
  const addrEl = document.getElementById("dAddress");
  if (addrEl) addrEl.value = STUDIO_STATE.houseNumber || "";
  syncStudioAddressDisplay();
}

function onStudioAddressInput(val) {
  STUDIO_STATE.isEditingAddress = true;
  STUDIO_STATE.houseNumber = val;
  syncStudioAddressDisplay();
  clearTimeout(STUDIO_STATE.addrMergeTimer);
  if ((val || "").trim()) {
    STUDIO_STATE.addrMergeTimer = setTimeout(() => {
      STUDIO_STATE.isEditingAddress = false;
      mergeStudioFullAddressNow();
    }, 1500);
  }
}

function onStudioAddressBlur() {
  clearTimeout(STUDIO_STATE.addrMergeTimer);
  STUDIO_STATE.isEditingAddress = false;
  syncStudioAddressDisplay();
}

function onStudioMaxPeopleChange(val) {
  const wrap = document.getElementById("extraPersonFeeWrap");
  const note = document.getElementById("extraPersonNote");
  const feeEl = document.getElementById("dExtraPerson");
  const num = parseInt(val, 10);
  const showFee = Number.isFinite(num) && num >= 1;
  if (wrap) wrap.style.visibility = showFee ? "visible" : "hidden";
  if (note && showFee) note.textContent = `(từ người thứ ${num + 1})`;
  if (!showFee && feeEl) feeEl.value = "";
  renderStudioPreview();
}

function toggleStudioSchoolCode(isChecked) {
  const wrap = document.getElementById("schoolCodeWrap");
  if (wrap) wrap.style.display = isChecked ? "block" : "none";
  if (isChecked) document.getElementById("dSchoolCode")?.focus();
  renderStudioPreview();
}

function sanitizeStudioNumericUnit(inputEl, unit) {
  const re = new RegExp(unit, "gi");
  const clean = inputEl.value.replace(re, "").replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
  inputEl.value = clean ? `${clean}${unit}` : "";
  if (clean && document.activeElement === inputEl) {
    const pos = clean.length;
    inputEl.setSelectionRange(pos, pos);
  }
  renderStudioPreview();
}

function syncStudioCostExclusion() {
  const otherEl = document.getElementById("dOtherCost");
  const subIds = ["dInternet", "dLaundry", "dTrash", "dParking"];
  const subEls = subIds.map((id) => document.getElementById(id)).filter(Boolean);
  if (!otherEl) return;

  const hasOther = Boolean(otherEl.value.replace(/k/gi, "").trim());
  const hasAnySub = subEls.some((el) => Boolean(el.value.replace(/k/gi, "").trim()));

  subEls.forEach((el) => {
    if (hasOther) {
      el.value = "";
      el.disabled = true;
      el.placeholder = "Đã chọn Trọn Gói";
      el.style.background = "#f1f5f9";
      el.style.opacity = "0.6";
      el.style.cursor = "not-allowed";
    } else {
      el.disabled = false;
      el.placeholder = "";
      el.style.background = "";
      el.style.opacity = "";
      el.style.cursor = "";
    }
  });

  if (!hasOther && hasAnySub) {
    otherEl.value = "";
    otherEl.disabled = true;
    otherEl.placeholder = "Đã nhập chi phí lẻ";
    otherEl.style.background = "#f1f5f9";
    otherEl.style.opacity = "0.6";
    otherEl.style.cursor = "not-allowed";
  } else if (!hasAnySub) {
    otherEl.disabled = false;
    otherEl.placeholder = "";
    otherEl.style.background = "";
    otherEl.style.opacity = "";
    otherEl.style.cursor = "";
  }
}

function sanitizeStudioNumericK(inputEl) {
  const clean = inputEl.value.replace(/k/gi, "").replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
  inputEl.value = clean ? `${clean}k` : "";
  if (clean && document.activeElement === inputEl) {
    const pos = clean.length;
    inputEl.setSelectionRange(pos, pos);
  }
  syncStudioCostExclusion();
  renderStudioPreview();
}

let STUDIO_DRAG_PHOTO_IDX = null;

function reorderStudioPhoto(fromIdx, toIdx) {
  if (fromIdx === null || fromIdx === toIdx) return;
  if (fromIdx < 0 || toIdx < 0 || fromIdx >= STUDIO_STATE.photos.length || toIdx >= STUDIO_STATE.photos.length) return;
  const [moved] = STUDIO_STATE.photos.splice(fromIdx, 1);
  STUDIO_STATE.photos.splice(toIdx, 0, moved);
  STUDIO_STATE.coverIndex = 0;
  renderStudioPhotosManager();
  renderStudioPreview();
}

function renderStudioPhotosManager() {
  const el = document.getElementById("demoPhotos");
  const countLbl = document.getElementById("demoPhotoCountLabel");
  if (countLbl) countLbl.textContent = `${STUDIO_STATE.photos.length}/9 hình`;
  if (!el) return;
  if (!STUDIO_STATE.photos.length) {
    el.innerHTML = `<div style="grid-column:1/-1;font-size:11.5px;color:#94a3b8;text-align:center;padding:6px 0;">Chưa có hình ảnh nào được tải lên.</div>`;
    return;
  }
  STUDIO_STATE.coverIndex = 0;
  el.innerHTML = STUDIO_STATE.photos.map((src, i) => `
    <div draggable="true"
      ondragstart="STUDIO_DRAG_PHOTO_IDX=${i};this.style.opacity='0.5';"
      ondragend="STUDIO_DRAG_PHOTO_IDX=null;this.style.opacity='1';"
      ondragover="event.preventDefault();"
      ondrop="event.preventDefault();reorderStudioPhoto(STUDIO_DRAG_PHOTO_IDX, ${i});"
      title="Giữ chuột kéo thả để đổi vị trí (Hình #1 mặc định là Ảnh Bìa)"
      style="position:relative;border-radius:10px;overflow:hidden;height:104px;cursor:grab;border:2px solid ${i === 0 ? "var(--ctt-orange)" : "#e2e8f0"};">
      <img src="${src}" style="width:100%;height:100%;object-fit:cover;pointer-events:none;">
      <span style="position:absolute;top:4px;left:4px;background:rgba(15,23,42,0.75);color:#fff;font-size:10px;font-weight:800;padding:1px 6px;border-radius:4px;">#${i + 1}</span>
      ${i === 0 ? '<span style="position:absolute;bottom:4px;left:4px;background:var(--ctt-orange);color:#fff;font-size:10px;font-weight:800;padding:2px 7px;border-radius:4px;">Bìa</span>' : ""}
      <button type="button" onclick="removeStudioPhoto(${i}, event)" title="Xóa ảnh" style="position:absolute;top:4px;right:4px;width:20px;height:20px;border-radius:50%;border:none;background:rgba(15,23,42,0.78);color:#fff;font-size:11px;line-height:1;cursor:pointer;">×</button>
    </div>
  `).join("");
}

function removeStudioPhoto(idx, e) {
  if (e) e.stopPropagation();
  STUDIO_STATE.photos.splice(idx, 1);
  STUDIO_STATE.coverIndex = 0;
  renderStudioPhotosManager();
  renderStudioPreview();
}

function handleStudioPhotoUpload(input) {
  const files = Array.from(input.files || []);
  if (!files.length) return;
  const remaining = Math.max(0, 9 - STUDIO_STATE.photos.length);
  if (remaining === 0) {
    showCttNotice("Giới hạn hình ảnh", "Mỗi tin đăng chỉ được tải tối đa 9 hình ảnh.");
    input.value = "";
    return;
  }
  files.slice(0, remaining).forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (STUDIO_STATE.photos.length < 9) {
        STUDIO_STATE.photos.push(e.target.result);
        renderStudioPhotosManager();
        renderStudioPreview();
      }
    };
    reader.readAsDataURL(file);
  });
  input.value = "";
}

function handleStudioVideoUpload(input) {
  const file = input.files && input.files[0];
  const lbl = document.getElementById("demoVideoLabel");
  if (file) {
    STUDIO_STATE.videoUrl = URL.createObjectURL(file);
    STUDIO_STATE.videoName = file.name;
    if (lbl) lbl.textContent = `Đã chọn video: ${file.name}`;
  } else {
    STUDIO_STATE.videoUrl = "";
    STUDIO_STATE.videoName = "";
    if (lbl) lbl.textContent = "Tải Video Ngắn Từ Máy (MP4, MOV)";
  }
  renderStudioPreview();
}

function formatStudioAiFee(val, unitSuffix) {
  const clean = (val || "").trim();
  if (!clean) return "";
  const withK = /k$/i.test(clean) ? clean : `${clean}k`;
  return unitSuffix ? `${withK}/${unitSuffix}` : withK;
}

function formatStudioAiDim(val, fallbackUnit = "m") {
  const clean = (val || "").trim();
  if (!clean) return "";
  return /(m2|m²|m)$/i.test(clean) ? clean : `${clean}${fallbackUnit}`;
}

function buildStudioAiDraft() {
  const city = getValidStudioComboValue("city") || document.getElementById("dCity")?.value || "";
  const ward = getValidStudioComboValue("ward") || document.getElementById("dWard")?.value || "";
  const street = getValidStudioComboValue("street") || document.getElementById("dStreet")?.value || "";
  const project = getValidStudioComboValue("project") || document.getElementById("dProject")?.value || "";
  const fullAddr = buildStudioFullAddress() || [project, street, ward, city].filter(Boolean).join(", ");
  const area = (document.getElementById("dArea")?.value || "").trim();
  const price = (document.getElementById("dPrice")?.value || "").trim();
  const deposit = (document.getElementById("dDeposit")?.value || STUDIO_STATE.deposit || "").trim();
  const furn = document.getElementById("dFurniture")?.value || "";
  const floors = document.getElementById("dFloors")?.value || "";
  const dir = document.getElementById("dDirection")?.value || "";
  const frontage = formatStudioAiDim(document.getElementById("dFrontageRoad")?.value || "", "m");
  const road = formatStudioAiDim(document.getElementById("dRoadAccess")?.value || "", "m");
  const host = (document.getElementById("dHost")?.value || "").trim();
  const phone = (document.getElementById("dPhone")?.value || "").trim();

  const elec = formatStudioAiFee(document.getElementById("dElec")?.value || "", "kWh");
  const water = formatStudioAiFee(document.getElementById("dWater")?.value || "", "người");
  const otherCost = formatStudioAiFee(document.getElementById("dOtherCost")?.value || "", "tháng");
  const internet = formatStudioAiFee(document.getElementById("dInternet")?.value || "", "phòng");
  const laundry = formatStudioAiFee(document.getElementById("dLaundry")?.value || "", "người");
  const trash = formatStudioAiFee(document.getElementById("dTrash")?.value || "", "phòng");
  const parking = formatStudioAiFee(document.getElementById("dParking")?.value || "", "xe/người/tháng");
  const maxPeople = (document.getElementById("dMaxPeople")?.value || "").replace(/\D/g, "");
  const extraPerson = formatStudioAiFee(document.getElementById("dExtraPerson")?.value || "", "người/tháng");

  const utils = Array.from(document.querySelectorAll("#postModalBackdrop .util-chk:checked")).map((c) => c.value);
  if (document.getElementById("chkSchool")?.checked) {
    const sc = (document.getElementById("dSchoolCode")?.value || "").trim();
    utils.unshift(sc ? `gần Trường học (${sc})` : "gần Trường học");
  }
  const svcs = Array.from(document.querySelectorAll("#postModalBackdrop .svc-chk:checked")).map((c) => c.value);

  const variant = Number(STUDIO_STATE.aiVariant || 0) % 5;
  const catLower = STUDIO_STATE.catLabel.toLowerCase();
  const isCommercial = STUDIO_STATE.catKey === "mat-bang" || STUDIO_STATE.catKey === "kho-xuong";
  const locFocus = project || (street ? `Đường ${street}` : ward);
  const locShort = project || (street ? `${street}, ${ward}` : ward);
  const priceShort = price ? `Giá ${price}Tr/Th` : "Giá Tốt";
  const areaShort = area ? `${area}m²` : "";
  const furnShort = furn && furn !== "Không Có" ? `NT ${furn}` : "";
  const bedsTag = !isCommercial && STUDIO_STATE.beds && STUDIO_STATE.beds !== "1 PN" ? STUDIO_STATE.beds : "";
  const highlightSpec = [
    areaShort,
    furn && furn !== "Không Có" ? `Nội Thất ${furn}` : "",
    bedsTag
  ].filter(Boolean).join(" ");

  const titlePools = [
    [
      [`Cho Thuê ${STUDIO_STATE.catLabel}`, locFocus ? `${locFocus}, ${ward}` : ward, highlightSpec, price ? `Giá Chỉ ${price} Triệu/Tháng` : "Chính Chủ Giá Tốt"].filter(Boolean).join(" • "),
      [`Cho Thuê ${STUDIO_STATE.catLabel}`, locShort, areaShort, furnShort, priceShort].filter(Boolean).join(" • ")
    ],
    [
      [STUDIO_STATE.catLabel, bedsTag, locFocus ? `${locFocus}, ${ward}` : ward, areaShort, price ? `Chỉ ${price}Tr/Tháng` : "Chính Chủ"].filter(Boolean).join(" • "),
      [`Chính Chủ Thuê ${STUDIO_STATE.catLabel}`, locShort, areaShort, priceShort].filter(Boolean).join(" • ")
    ],
    [
      [furn === "Đầy Đủ" ? "Full Nội Thất" : "Vị Trí Đẹp", `${STUDIO_STATE.catLabel}`, locFocus, areaShort, price ? `${price} Triệu/Tháng` : "Giá Tốt"].filter(Boolean).join(" • "),
      [`${STUDIO_STATE.catLabel} Đẹp`, locShort, areaShort, priceShort].filter(Boolean).join(" • ")
    ],
    [
      [`[Chính Chủ] ${STUDIO_STATE.catLabel}`, locShort, areaShort, price ? `${price}Tr/Th` : "Dọn Vào Ngay"].filter(Boolean).join(" • "),
      [`${STUDIO_STATE.catLabel} Trung Tâm`, locShort, priceShort].filter(Boolean).join(" • ")
    ],
    [
      [`Cần Thuê Nhanh ${STUDIO_STATE.catLabel}`, locFocus, areaShort, furnShort, price ? `Chỉ ${price} Triệu` : "Giá Tốt"].filter(Boolean).join(" • "),
      [`Ưu Đãi ${STUDIO_STATE.catLabel}`, locShort, areaShort, priceShort].filter(Boolean).join(" • ")
    ]
  ];
  const activePool = titlePools[variant];
  const fallbackTitles = [
    [`Cho Thuê ${STUDIO_STATE.catLabel}`, street || ward, areaShort, priceShort].filter(Boolean).join(" • "),
    [`Cho Thuê ${STUDIO_STATE.catLabel}`, ward, priceShort].filter(Boolean).join(" • ")
  ];
  const allCandidates = [...activePool, ...fallbackTitles];
  const bestTitle = allCandidates.find((c) => c.length <= 70) || allCandidates[allCandidates.length - 1].slice(0, 70);

  const titleEl = document.getElementById("dTitle");
  if (titleEl) titleEl.value = bestTitle;
  updateStudioTitleCount();

  const hookByCat = {
    "Phòng Trọ / CHDV": [
      "không gian riêng tư, sạch sẽ và yên tĩnh, rất phù hợp cho nhân viên văn phòng hoặc sinh viên ở lâu dài",
      "môi trường sống văn minh, giờ giấc tự do và tách biệt hoàn toàn, vào ở thoải mái như nhà mình",
      "thiết kế gọn gàng, đón ánh sáng tự nhiên và đảm bảo an ninh tốt mỗi ngày",
      "vị trí thuận tiện đi làm, đi học, không chung chủ và sinh hoạt cực kỳ thoải mái",
      "phòng mới đẹp, thoáng mát, tối ưu từng mét vuông sử dụng cho người ở hiện đại"
    ],
    "Nhà Nguyên Căn": [
      "không gian rộng rãi và riêng tư tuyệt đối, thích hợp cho gia đình sinh sống hoặc kết hợp làm văn phòng công ty",
      "nhà thoáng sáng, công năng linh hoạt để vừa ở gia đình vừa kinh doanh online hoặc mở studio",
      "kết cấu chắc chắn, khu dân cư an ninh yên tĩnh và thuận tiện di chuyển ra các trục đường chính",
      "mặt bằng nhà gọn đẹp, dễ bố trí theo nhu cầu gia đình nhiều thế hệ hoặc nhóm chuyên gia",
      "không gian sinh hoạt tách biệt từng tầng, đáp ứng trọn vẹn nhu cầu an cư lâu dài"
    ],
    "Căn Hộ Chung Cư": [
      "thiết kế hiện đại, thoáng sáng tự nhiên và an ninh thẻ từ 24/7, mang lại trải nghiệm sống tiện nghi ngay khi dọn vào",
      "tầm nhìn thoáng đãng, cộng đồng cư dân văn minh và thừa hưởng trọn vẹn tiện ích nội khu cao cấp",
      "căn hộ bố trí hợp lý, tách biệt khu sinh hoạt chung và phòng ngủ yên tĩnh",
      "không gian chuẩn nghỉ dưỡng giữa lòng phố thị, chỉ cần xách vali vào là tận hưởng ngay",
      "lựa chọn lý tưởng cho gia đình trẻ hoặc chuyên gia tìm nơi ở đẳng cấp, an toàn"
    ],
    "Mặt Bằng Văn Phòng": [
      "vị trí dễ nhận diện, mặt bằng vuông vức thuận tiện bố trí showroom, spa, cửa hàng hoặc văn phòng giao dịch",
      "tọa lạc trên trục giao thông sầm uất, dễ đón khách và tối ưu hiệu quả nhận diện thương hiệu",
      "không gian chuyên nghiệp, dễ thiết kế layout làm việc hoặc trưng bày sản phẩm theo nhận diện riêng",
      "khu vực tập trung nhiều văn phòng và cư dân, thuận lợi tiếp cận nguồn khách hàng sẵn có",
      "mặt bằng sáng thoáng, sẵn sàng bàn giao để doanh nghiệp triển khai vận hành ngay"
    ],
    "Đất - Xưởng, Kho - Bãi": [
      "khuôn viên thông thoáng, giao thông thuận tiện cho xe tải ra vào và sẵn sàng đưa vào vận hành ngay",
      "mặt bằng rộng rãi, cao ráo sạch sẽ, đáp ứng tốt nhu cầu lưu trữ hàng hóa hoặc sản xuất",
      "vị trí kết nối giao thương thuận lợi, tối ưu chi phí vận chuyển và bốc xếp hằng ngày",
      "hạ tầng hoàn chỉnh, diện tích dễ quy hoạch khu kho chứa và khu điều hành riêng biệt",
      "không gian rộng mở, phù hợp làm kho trung chuyển, xưởng gia công hoặc bãi tập kết"
    ],
    "HomeStay / Airbnb": [
      "phong cách bài trí tinh tế, ấm cúng và đầy đủ tiện nghi nghỉ dưỡng ngay khu vực trung tâm",
      "góc decor chụp ảnh đẹp, check-in linh hoạt và chỉ mất vài phút di chuyển ra các điểm ăn uống nổi tiếng",
      "không gian ấm áp như ở nhà, đầy đủ tiện nghi cho kỳ lưu trú ngắn hoặc dài ngày",
      "thiết kế có gu riêng, yên tĩnh nhưng vẫn nằm sát nhịp sống sôi động của khu vực",
      "trải nghiệm lưu trú thoải mái, riêng tư và tiện lợi cho khách du lịch lẫn khách công tác"
    ]
  };
  const catHooks = hookByCat[STUDIO_STATE.catLabel] || ["vị trí thuận tiện đi lại, sẵn sàng bàn giao ngay"];
  const catHook = catHooks[variant % catHooks.length];

  const paragraphs = [];

  // Đoạn 1: Mở đầu tự nhiên, 5 văn phong khác nhau
  const addrPhrase = fullAddr ? `tại ${fullAddr}` : (ward ? `tại khu vực ${ward}` : "tại khu vực trung tâm");
  const introTemplates = [
    `Chính chủ đang cần cho thuê ${catLower} ${addrPhrase} — ${catHook}.`,
    `Nếu anh/chị đang tìm ${catLower} ${addrPhrase}, đây là lựa chọn rất đáng cân nhắc với ${catHook}.`,
    `Cần cho thuê nhanh ${catLower} ${addrPhrase}, nổi bật với ${catHook}.`,
    `Giới thiệu ${catLower} chuẩn đẹp ${addrPhrase}: ${catHook}.`,
    `Gửi đến anh/chị căn ${catLower} mới cập nhật ${addrPhrase} — ${catHook}.`
  ];
  paragraphs.push(introTemplates[variant]);

  // Đoạn 2: Thông số, kết cấu, nội thất & giao thông
  const layoutBits = [];
  if (area) layoutBits.push(`diện tích sử dụng ${area}m²`);
  if (isCommercial) {
    layoutBits.push(`mặt bằng thông suốt kèm ${STUDIO_STATE.baths}`);
  } else {
    layoutBits.push(`bố trí ${STUDIO_STATE.beds}, ${STUDIO_STATE.baths}`);
  }
  if (floors) layoutBits.push(`kết cấu ${floors.toLowerCase()}`);
  if (dir) layoutBits.push(`hướng ${dir} đón gió tự nhiên`);

  const spaceOpeners = [
    `Không gian có ${layoutBits.join(", ")}.`,
    `Thông số thực tế gồm ${layoutBits.join(", ")}.`,
    `Tổng thể được thiết kế với ${layoutBits.join(", ")}.`,
    `Điểm cộng về không gian: ${layoutBits.join(", ")}.`,
    `Chi tiết mặt bằng sở hữu ${layoutBits.join(", ")}.`
  ];
  let spaceSentence = spaceOpeners[variant];
  if (!isCommercial) {
    if (furn === "Đầy Đủ") {
      spaceSentence += variant % 2 === 0
        ? " Nội thất đã được trang bị đầy đủ từ A-Z, anh/chị chỉ cần xách vali vào ở ngay."
        : " Trang bị sẵn trọn bộ nội thất tiện nghi, giúp tiết kiệm tối đa chi phí mua sắm ban đầu.";
    } else if (furn === "Cơ Bản") {
      spaceSentence += variant % 2 === 0
        ? " Đã có sẵn các hạng mục nội thất cơ bản, rất dễ bài trí thêm theo gu riêng."
        : " Bàn giao nội thất cơ bản gọn đẹp, linh hoạt bổ sung theo nhu cầu sử dụng thực tế.";
    } else if (furn === "Không Có") {
      spaceSentence += " Hiện trạng bàn giao trống suốt, thuận tiện để tự do thiết kế và sắp xếp đồ đạc.";
    }
  }
  if (frontage || road) {
    const roadBits = [
      frontage ? `mặt tiền lộ giới ${frontage}` : "",
      road ? `đường vào rộng ${road}` : ""
    ].filter(Boolean).join(", ");
    spaceSentence += ` Lợi thế ${roadBits} giúp việc di chuyển, đậu xe và vận chuyển hằng ngày cực kỳ thuận tiện.`;
  }
  if (!isCommercial && maxPeople) {
    spaceSentence += ` Phù hợp tối đa ${maxPeople} người ở${extraPerson ? ` (phụ thu thêm ${extraPerson} từ người thứ ${maxPeople})` : " để đảm bảo sinh hoạt thoải mái"}.`;
  }
  paragraphs.push(spaceSentence);

  // Đoạn 3: Tiện ích xung quanh & Dịch vụ tòa nhà
  const lifestyleSentences = [];
  if (utils.length) {
    const utilOpeners = [
      `Xung quanh kết nối nhanh chóng tới các tiện ích thiết yếu như ${utils.join(", ")}.`,
      `Trong bán kính vài phút di chuyển có đầy đủ ${utils.join(", ")}, rất thuận tiện sinh hoạt hằng ngày.`,
      `Vị trí liền kề ${utils.join(", ")}, giúp tiết kiệm đáng kể thời gian đi lại.`,
      `Tiện ích ngoại khu phong phú với ${utils.join(", ")} ngay gần nhà.`,
      `Từ đây dễ dàng tiếp cận ${utils.join(", ")} chỉ trong ít phút.`
    ];
    lifestyleSentences.push(utilOpeners[variant]);
  } else if (project) {
    lifestyleSentences.push(`Cư dân tại ${project} được hưởng trọn hạ tầng đồng bộ, công viên cây xanh và tiện ích mua sắm - ẩm thực ngay nội khu.`);
  }
  if (svcs.length) {
    const svcOpeners = [
      `Khu vực được vận hành chu đáo với ${svcs.join(", ")}, đảm bảo sự an tâm và tiện lợi mỗi ngày.`,
      `Đi kèm đầy đủ dịch vụ quản lý gồm ${svcs.join(", ")} hoạt động ổn định.`,
      `Tòa nhà hỗ trợ sẵn ${svcs.join(", ")}, mang lại sự yên tâm tuyệt đối khi sinh sống.`,
      `Hạ tầng dịch vụ đồng bộ: ${svcs.join(", ")}.`,
      `An ninh và tiện nghi được chăm chút kỹ với ${svcs.join(", ")}.`
    ];
    lifestyleSentences.push(svcOpeners[variant]);
  }
  if (lifestyleSentences.length) {
    paragraphs.push(lifestyleSentences.join(" "));
  }

  // Đoạn 4: Giá thuê, cọc & chi phí minh bạch (chuẩn đơn vị k)
  const priceIntro = price
    ? `Giá thuê hiện tại là ${price} triệu/tháng${deposit ? ` (đặt cọc ${deposit.toLowerCase()})` : ""}.`
    : `${deposit ? `Tiền cọc ${deposit.toLowerCase()}, giá thuê thương lượng trực tiếp.` : "Giá thuê hợp lý cho khách thiện chí."}`;

  const feeParts = [
    elec ? `điện ${elec}` : "điện Nhà nước",
    water ? `nước ${water}` : "nước Nhà nước"
  ];
  if (otherCost) {
    feeParts.push(`trọn gói các chi phí dịch vụ khác ${otherCost}`);
  } else {
    if (internet) feeParts.push(`internet ${internet}`);
    if (laundry) feeParts.push(`giặt sấy ${laundry}`);
    if (trash) feeParts.push(`phí rác ${trash}`);
    if (parking) feeParts.push(`phí gửi xe ${parking}`);
  }
  const feeIntros = [
    `${priceIntro} Mọi chi phí sinh hoạt đều công khai minh bạch ngay từ đầu: ${feeParts.join(", ")}.`,
    `${priceIntro} Các khoản phí hằng tháng rõ ràng, không phát sinh ẩn: ${feeParts.join(", ")}.`,
    `${priceIntro} Chi tiết chi phí đi kèm gồm ${feeParts.join(", ")}.`,
    `${priceIntro} Hợp đồng rõ ràng, quy định cụ thể: ${feeParts.join(", ")}.`,
    `${priceIntro} Mức phí sinh hoạt hợp lý: ${feeParts.join(", ")}.`
  ];
  paragraphs.push(feeIntros[variant]);

  // Đoạn 5: Lời mời xem nhà chân thành
  const contactWho = host ? `trực tiếp cho ${host}` : "trực tiếp với chính chủ";
  const contactPhone = phone ? ` qua SĐT/Zalo ${phone}` : "";
  const closingTemplates = [
    `Anh/chị quan tâm vui lòng liên hệ ${contactWho}${contactPhone} để hẹn lịch xem thực tế và trao đổi thêm nhé!`,
    `Nếu phù hợp nhu cầu, anh/chị nhắn Zalo hoặc gọi ${contactWho}${contactPhone} để xem thực tế bất cứ lúc nào ạ!`,
    `Liên hệ ngay ${contactWho}${contactPhone} để giữ căn đẹp và thương lượng điều kiện tốt nhất.`,
    `Mời anh/chị gọi hoặc nhắn Zalo ${contactWho}${contactPhone} — hỗ trợ xem trực tiếp linh hoạt trong ngày.`,
    `Rất mong được đón tiếp anh/chị đến xem thực tế; vui lòng kết nối ${contactWho}${contactPhone} để đặt lịch hẹn.`
  ];
  paragraphs.push(closingTemplates[variant]);

  const descEl = document.getElementById("dDesc");
  if (descEl) descEl.value = paragraphs.join("\n\n");
}

function updateStudioAiButtonUI() {
  const btn = document.getElementById("btnAiAutoWrite");
  if (!btn) return;
  if (STUDIO_STATE.aiAutoSync) {
    const idx = (Number(STUDIO_STATE.aiVariant || 0) % 5) + 1;
    btn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> <span>Đổi Bài AI (${idx}/5)</span>`;
  } else {
    btn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> <span>Click Ngay</span>`;
  }
}

function generateStudioAISeo() {
  if (!STUDIO_STATE.aiAutoSync) {
    STUDIO_STATE.aiVariant = 0;
  } else {
    STUDIO_STATE.aiVariant = ((STUDIO_STATE.aiVariant || 0) + 1) % 5;
  }
  STUDIO_STATE.aiAutoSync = true;
  updateStudioAiButtonUI();
  buildStudioAiDraft();
  renderStudioPreview();
}

function updateStudioTitleCount() {
  const titleEl = document.getElementById("dTitle");
  const countEl = document.getElementById("demoTitleCountLabel");
  if (!titleEl) return;
  if (titleEl.value.length > 70) {
    titleEl.value = titleEl.value.slice(0, 70);
  }
  const len = titleEl.value.length;
  if (countEl) {
    countEl.textContent = `${len}/70 ký tự`;
    countEl.style.color = len >= 70 ? "var(--ctt-orange)" : "#64748b";
  }
}

function onStudioManualContentEdit() {
  if (STUDIO_STATE.aiAutoSync) {
    STUDIO_STATE.aiAutoSync = false;
    updateStudioAiButtonUI();
  }
  updateStudioTitleCount();
  renderStudioPreview();
}

function renderStudioZoneCleanSelector() {
  const grid = document.getElementById("demoZonesGrid");
  if (!grid) return;
  grid.innerHTML = STUDIO_ZONES.map((z) => `
    <button type="button" class="zone-pkg-card ${STUDIO_STATE.selectedZoneId === z.id ? "selected" : ""}" onclick="pickStudioZone(${z.id})" style="text-align:left;">
      <strong style="font-size:12.5px;color:#0f172a;display:block;">${z.name}</strong>
      <div class="tabular-nums" style="font-size:12px;font-weight:800;color:var(--ctt-orange);">${z.rate === 0 ? "0đ (Miễn phí)" : new Intl.NumberFormat("vi-VN").format(z.rate) + "đ/ngày"}</div>
      <small style="font-size:10.5px;color:#64748b;">${z.desc}</small>
    </button>
  `).join("");
}

function pickStudioZone(id) {
  STUDIO_STATE.selectedZoneId = id;
  if (id === 13) {
    STUDIO_STATE.selectedDays = 3;
    STUDIO_STATE.selectedSticker = null;
    STUDIO_STATE.promoCode = "";
    const promoEl = document.getElementById("dPromoCode");
    if (promoEl) promoEl.value = "";
    const promoStatusEl = document.getElementById("promoCodeStatus");
    if (promoStatusEl) promoStatusEl.textContent = "";
    syncStudioPromoUI(false);
  } else {
    STUDIO_STATE.selectedDays = 15;
  }
  const promoWrap = document.getElementById("promoCodeWrap");
  if (promoWrap) promoWrap.style.display = id === 13 ? "none" : "block";
  renderStudioZoneCleanSelector();
  const hint = document.getElementById("zonePickHint");
  const durWrap = document.getElementById("durationSectionWrap");
  if (hint) hint.style.display = "none";
  if (durWrap) durWrap.classList.add("is-visible");
  renderStudioDurations();
  renderStudioStickers();
  renderStudioPreview();
}

function renderStudioDurations() {
  const z = STUDIO_ZONES.find((x) => x.id === STUDIO_STATE.selectedZoneId);
  const grid = document.getElementById("demoDurationGrid");
  if (!z || !grid) return;
  const availableDurations = z.id === 13 ? STUDIO_DURATIONS.filter((d) => d.days === 3) : STUDIO_DURATIONS;
  if (z.id === 13) STUDIO_STATE.selectedDays = 3;
  grid.innerHTML = availableDurations.map((dur) => {
    const total = Math.round(z.rate * dur.days * (1 - dur.off / 100));
    return `
      <button type="button" class="zone-pkg-card ${STUDIO_STATE.selectedDays === dur.days ? "selected" : ""}" onclick="STUDIO_STATE.selectedDays=${dur.days};renderStudioDurations();renderStudioStickers();renderStudioPreview();" style="text-align:left;">
        <strong style="font-size:12.5px;color:#0f172a;display:block;margin-bottom:3px;">${dur.label}</strong>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:4px;flex-wrap:wrap;">
          <span class="tabular-nums" style="font-size:12px;font-weight:800;color:var(--ctt-orange);">${total === 0 ? "0đ" : new Intl.NumberFormat("vi-VN").format(total) + "đ"}</span>
          ${dur.off ? `<span class="tabular-nums" style="background:linear-gradient(135deg,#f15a22,#ff9d00);color:#ffffff;font-size:10px;font-weight:800;padding:1px 6px;border-radius:5px;line-height:1.4;">-${dur.off}%</span>` : ""}
        </div>
      </button>
    `;
  }).join("");
}

function pickStudioSticker(id) {
  if (STUDIO_STATE.selectedZoneId === 13) return;
  STUDIO_STATE.selectedSticker = STUDIO_STATE.selectedSticker === id ? null : id;
  renderStudioStickers();
  renderStudioPreview();
}

function renderStudioStickers() {
  const noSticker = STUDIO_STATE.selectedZoneId === 13;
  const wrap = document.getElementById("stickerSectionWrap");
  if (wrap) wrap.style.display = noSticker ? "none" : "block";
  const promoWrap = document.getElementById("promoCodeWrap");
  if (promoWrap) promoWrap.style.display = noSticker ? "none" : "block";
  if (noSticker) return;

  const totalSticker = STUDIO_STATE.selectedDays * 1000;
  const grid = document.getElementById("demoStickerGrid");
  if (!grid) return;
  grid.innerHTML = STUDIO_STICKERS.map((st) => `
    <button type="button" class="sticker-card ${STUDIO_STATE.selectedSticker === st.id ? "selected" : ""}" onclick="pickStudioSticker('${st.id}')">
      <span class="sticker-pill ${st.cls}" style="margin-bottom:6px;"><i class="fa-solid ${st.icon}"></i> ${st.name}</span>
      <div class="tabular-nums" style="font-size:11.5px;font-weight:700;color:#475569;">+${new Intl.NumberFormat("vi-VN").format(totalSticker)}đ</div>
      <div style="font-size:10.5px;color:#64748b;margin-top:3px;line-height:1.3;">${st.hint}</div>
    </button>
  `).join("");
}

function switchStudioPreviewTab(tabName, btnEl) {
  STUDIO_STATE.previewTab = tabName;
  document.querySelectorAll("#postModalBackdrop .post-prev-tab").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderStudioPreview();
}

function initStudioPostListing(preselectedZoneId = null) {
  STUDIO_STATE.editingPropId = null;
  STUDIO_STATE.houseNumber = "";
  STUDIO_STATE.isEditingAddress = false;
  STUDIO_STATE.deposit = "1 Tháng";
  STUDIO_STATE.furniture = "";
  STUDIO_STATE.beds = "1 PN";
  STUDIO_STATE.baths = "1 WC";
  STUDIO_STATE.aiAutoSync = false;
  STUDIO_STATE.selectedSticker = null;
  STUDIO_STATE.selectedDays = 15;
  STUDIO_STATE.coverIndex = 0;
  STUDIO_STATE.photos = [];
  STUDIO_STATE.videoUrl = "";
  STUDIO_STATE.videoName = "";
  STUDIO_STATE.selectedZoneId = preselectedZoneId || null;
  STUDIO_STATE.promoCode = "";
  const promoEl = document.getElementById("dPromoCode");
  if (promoEl) promoEl.value = "";
  const promoStatusEl = document.getElementById("promoCodeStatus");
  if (promoStatusEl) promoStatusEl.textContent = "";
  syncStudioPromoUI(false);
  const vLbl = document.getElementById("demoVideoLabel");
  if (vLbl) vLbl.textContent = "Tải Video Ngắn Từ Máy (MP4, MOV)";
  populateStudioWards();

  const hostEl = document.getElementById("dHost");
  if (hostEl) hostEl.value = STATE.auth.displayName || "Chính chủ Minh Quân";
  const phoneEl = document.getElementById("dPhone");
  if (phoneEl) {
    let accountPhone = STATE.auth.phone || "";
    if (!accountPhone && STATE.auth.identity) {
      const normId = normalizeAuthIdentity(STATE.auth.identity);
      const matchedAcc = getAccountsStore().find((a) => normalizeAuthIdentity(a.identity) === normId);
      if (matchedAcc?.phone) {
        accountPhone = matchedAcc.phone;
        STATE.auth.phone = accountPhone;
      } else if (/^0\d{9}$/.test(normId)) {
        accountPhone = normId;
        STATE.auth.phone = accountPhone;
      }
    }
    phoneEl.value = accountPhone;
    sanitizeStudioVnPhone(phoneEl);
  }
  ["dPrice", "dArea", "dElec", "dWater", "dOtherCost", "dInternet", "dLaundry", "dTrash", "dParking", "dExtraPerson", "dTitle", "dDesc", "dFrontageRoad", "dRoadAccess", "dAddress", "dSchoolCode"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  syncStudioCostExclusion();
  updateStudioTitleCount();
  ["dWard", "dStreet", "dMaxPeople", "dFurniture", "dFloors", "dDirection", "dProject"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
      if (el.dataset) el.dataset.prevValid = "";
    }
  });
  const depInitEl = document.getElementById("dDeposit");
  if (depInitEl) {
    depInitEl.value = "1 Tháng";
    depInitEl.dataset.prevValid = "1 Tháng";
  }
  const cityEl = document.getElementById("dCity");
  if (cityEl) {
    cityEl.value = "TP. Hồ Chí Minh";
    cityEl.dataset.prevValid = "TP. Hồ Chí Minh";
  }
  const bedsEl = document.getElementById("dBeds");
  if (bedsEl) bedsEl.value = "1";
  const bathsEl = document.getElementById("dBaths");
  if (bathsEl) bathsEl.value = "1";
  STUDIO_STATE.waterUnit = "nguoi";
  const waterUnitEl = document.getElementById("dWaterUnitLabel");
  if (waterUnitEl) {
    waterUnitEl.textContent = "(Người)";
    waterUnitEl.style.display = "inline";
  }
  STUDIO_STATE.laundryUnit = "nguoi";
  const laundryUnitEl = document.getElementById("dLaundryUnitLabel");
  if (laundryUnitEl) {
    laundryUnitEl.textContent = "(Người)";
    laundryUnitEl.style.display = "inline";
  }
  const agreeEl = document.getElementById("agreePostTerms");
  if (agreeEl) agreeEl.checked = false;
  document.querySelectorAll("#postModalBackdrop .util-chk, #postModalBackdrop .svc-chk, #chkSchool").forEach((c) => {
    c.checked = false;
  });
  const schoolWrap = document.getElementById("schoolCodeWrap");
  if (schoolWrap) schoolWrap.style.display = "none";
  const extraWrap = document.getElementById("extraPersonFeeWrap");
  if (extraWrap) extraWrap.style.visibility = "hidden";

  populateStudioStreets();
  syncStudioAddressDisplay();
  updateStudioAiButtonUI();
  renderStudioPhotosManager();
  renderStudioZoneCleanSelector();

  if (STUDIO_STATE.selectedZoneId) {
    const hint = document.getElementById("zonePickHint");
    const durWrap = document.getElementById("durationSectionWrap");
    if (hint) hint.style.display = "none";
    if (durWrap) durWrap.classList.add("is-visible");
    renderStudioDurations();
    renderStudioStickers();
  } else {
    const hint = document.getElementById("zonePickHint");
    const durWrap = document.getElementById("durationSectionWrap");
    if (hint) hint.style.display = "block";
    if (durWrap) durWrap.classList.remove("is-visible");
  }

  renderStudioPreview();
}

function renderStudioPreview() {
  if (STUDIO_STATE.aiAutoSync) {
    buildStudioAiDraft();
  }
  const city = (document.getElementById("dCity")?.value || "").trim();
  const ward = (document.getElementById("dWard")?.value || "").trim();
  const fullAddr = document.getElementById("dAddress")?.value.trim() || [ward, city].filter(Boolean).join(", ");
  const price = document.getElementById("dPrice")?.value.trim() || "--";
  const area = document.getElementById("dArea")?.value.trim() || "--";
  const elecRaw = (document.getElementById("dElec")?.value || "").replace(/k/gi, "").trim();
  const waterRaw = (document.getElementById("dWater")?.value || "").replace(/k/gi, "").trim();
  const otherRaw = (document.getElementById("dOtherCost")?.value || "").replace(/k/gi, "").trim();
  const subFeesSumK = ["dInternet", "dLaundry", "dTrash", "dParking"].reduce((sum, id) => {
    const val = parseFloat((document.getElementById(id)?.value || "").replace(/k/gi, "").trim());
    return sum + (Number.isFinite(val) && val > 0 ? val : 0);
  }, 0);
  const elec = elecRaw ? `${elecRaw}k/kWh` : "Nhà nước";
  const waterUnitSuffix = STUDIO_STATE.waterUnit === "m3" ? "/m³" : "/Người";
  const water = waterRaw ? `${waterRaw}k${waterUnitSuffix}` : "Nhà nước";
  const otherCost = otherRaw
    ? `${otherRaw}k`
    : (subFeesSumK > 0 ? `${Number(subFeesSumK.toFixed(2))}k` : "--");
  const title = document.getElementById("dTitle")?.value.trim() || "Chưa nhập tiêu đề tin đăng";
  const desc = document.getElementById("dDesc")?.value.trim() || "Chưa nhập mô tả chi tiết...";
  const phone = document.getElementById("dPhone")?.value.trim() || "Chưa nhập SĐT";
  const coverPhoto = STUDIO_STATE.photos[STUDIO_STATE.coverIndex] || STUDIO_STATE.photos[0];
  const z = STUDIO_ZONES.find((x) => x.id === STUDIO_STATE.selectedZoneId);
  const badgeText = z ? z.badge : "✦ VIP 1";
  const badgeClass = z ? z.badgeClass : "tag-vip1";
  const zoneClass = z ? z.zoneClass : "zone-spotlight";

  const stObj = STUDIO_STICKERS.find((s) => s.id === STUDIO_STATE.selectedSticker);
  const stickerHTML = stObj
    ? `<span class="sticker-pill ${stObj.cls}" style="position:absolute;bottom:calc(100% + 3px);right:0;font-size:9px;padding:1.5px 7px;line-height:1.25;border-radius:999px;white-space:nowrap;box-shadow:none;pointer-events:none;z-index:2;"><i class="fa-solid ${stObj.icon}" style="font-size:8px;"></i> ${stObj.name}</span>`
    : "";

  let html = "";
  if (STUDIO_STATE.previewTab === "card") {
    html = `
      <div style="max-width:350px;margin:0 auto;">
        <div class="lc-card ${zoneClass}" style="cursor:default;">
          <div class="lc-card-img">
            ${coverPhoto
              ? `<img src="${coverPhoto}" alt="${title}">`
              : `<div style="width:100%;height:100%;min-height:190px;background:#f1f5f9;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#94a3b8;font-size:12px;gap:6px;"><i class="fa-regular fa-image" style="font-size:26px;"></i><span>Chưa có hình ảnh</span></div>`}
            <div class="lc-card-badges">
              ${badgeText ? `<span class="lc-vip-tag ${badgeClass}">${badgeText}</span>` : ""}
            </div>
            <div class="lc-photo-count">
              <i class="fa-regular fa-images"></i> ${STUDIO_STATE.photos.length}
            </div>
          </div>
          <div class="lc-card-body" style="padding-top:20px;">
            <div class="lc-card-toprow">
              <div class="lc-card-price tabular-nums">${price} Triệu <span>| Tháng</span></div>
              <div style="position:relative;display:inline-flex;align-items:center;">
                ${stickerHTML}
                <span class="lc-card-type">${STUDIO_STATE.catLabel}</span>
              </div>
            </div>
            <div class="lc-card-title">${title}</div>
            <div class="lc-utility-bar demo-utility-bar">
              <span>Điện: ${elec}</span>
              <span>Nước: ${water}</span>
              <span>CP Khác: ${otherCost}</span>
            </div>
            <div class="lc-card-footer">
              <div class="lc-card-addr">
                <i class="fa-solid fa-location-dot"></i>
                <div class="lc-card-addr-text">
                  <span class="lc-addr-ward">${(ward || "CHỌN PHƯỜNG/XÃ").toUpperCase()}</span>
                  <span class="lc-addr-city">${(city || "CHỌN TỈNH/THÀNH").toUpperCase()}</span>
                </div>
              </div>
              <div class="lc-card-specs">
                <span><i class="fa-solid fa-maximize"></i> ${area}&nbsp;m²</span>
                <span><i class="fa-solid fa-bed"></i> ${STUDIO_STATE.beds}</span>
                <span><i class="fa-solid fa-bath"></i> ${STUDIO_STATE.baths}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (STUDIO_STATE.previewTab === "sv1") {
    html = `
      <div style="background:#fffaf5;border:1.5px solid #fed7aa;border-radius:18px;padding:16px;">
        <div style="display:flex;gap:6px;margin-bottom:6px;">
          <span class="sv1-badge-vip" style="font-size:10px;padding:3px 9px;"><i class="fa-solid fa-crown"></i> ĐẶC QUYỀN VIP</span>
          <span class="sv1-badge-verified" style="font-size:10px;padding:3px 9px;">ĐÃ XÁC MINH</span>
        </div>
        <div style="font-size:11.5px;font-weight:700;color:#64748b;margin-bottom:4px;">
          <i class="fa-solid fa-location-dot" style="color:var(--ctt-orange);"></i> ${fullAddr}
        </div>
        <div style="font-size:26px;font-weight:900;color:var(--ctt-orange);line-height:1.1;margin-bottom:6px;" class="tabular-nums">
          ${price} Triệu <span style="font-size:13px;color:#64748b;font-weight:600;">| Tháng</span>
        </div>
        <div style="font-size:14.5px;font-weight:900;color:#0f172a;line-height:1.35;margin-bottom:6px;">${title}</div>
        <p style="font-size:11.5px;color:#475569;line-height:1.45;margin-bottom:10px;">${desc}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;" class="tabular-nums">
          <span class="sv1-spec-pill" style="font-size:11px;padding:4px 9px;"><i class="fa-solid fa-maximize"></i> ${area} m²</span>
          <span class="sv1-spec-pill" style="font-size:11px;padding:4px 9px;"><i class="fa-solid fa-bed"></i> ${STUDIO_STATE.beds}</span>
          <span class="sv1-spec-pill" style="font-size:11px;padding:4px 9px;"><i class="fa-solid fa-bath"></i> ${STUDIO_STATE.baths}</span>
        </div>
        <div style="position:relative;border-radius:14px;overflow:hidden;height:175px;border:2px solid #fff;box-shadow:0 10px 24px rgba(0,0,0,0.15);background:#f1f5f9;">
          ${coverPhoto
            ? `<img src="${coverPhoto}" alt="${title}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:12px;">Chưa có hình ảnh</div>`}
          <div style="position:absolute;bottom:8px;left:8px;background:#0f172a;color:#fff;padding:5px 12px;border-radius:99px;font-size:11.5px;font-weight:800;border:1px solid #ffd700;">
            <i class="fa-solid fa-phone" style="color:var(--ctt-orange);"></i> ${phone}
          </div>
        </div>
      </div>
    `;
  } else {
    const prevUtils = Array.from(document.querySelectorAll("#postModalBackdrop .util-chk:checked")).map((c) => c.value);
    if (document.getElementById("chkSchool")?.checked) {
      const sc = (document.getElementById("dSchoolCode")?.value || "").trim();
      prevUtils.unshift(sc ? `Trường học (${sc})` : "Trường học");
    }
    const prevSvcs = Array.from(document.querySelectorAll("#postModalBackdrop .svc-chk:checked")).map((c) => c.value);

    const projectVal = (typeof getValidStudioComboValue === "function" ? getValidStudioComboValue("project") : document.getElementById("dProject")?.value) || "";
    const hostVal = document.getElementById("dHost")?.value.trim() || "Chưa nhập người liên hệ";
    const otherRawVal = (document.getElementById("dOtherCost")?.value || "").replace(/k/gi, "").trim();
    const internetVal = (document.getElementById("dInternet")?.value || "").replace(/k/gi, "").trim();
    const laundryVal = (document.getElementById("dLaundry")?.value || "").replace(/k/gi, "").trim();
    const trashVal = (document.getElementById("dTrash")?.value || "").replace(/k/gi, "").trim();
    const parkingVal = (document.getElementById("dParking")?.value || "").replace(/k/gi, "").trim();
    const maxPeopleVal = document.getElementById("dMaxPeople")?.value.trim() || "";
    const extraPersonVal = (document.getElementById("dExtraPerson")?.value || "").replace(/k/gi, "").trim();
    const laundryUnitText = ({ nguoi: "Người", lan: "1 Lần", kg: "Kg", phong: "Phòng" }[STUDIO_STATE.laundryUnit || "nguoi"]);

    const prevCostBits = [
      `Điện: <strong>${elec}</strong>`,
      `Nước: <strong>${water}</strong>`,
      otherRawVal ? `CP Khác: <strong>${otherRawVal}k</strong>` : "",
      internetVal ? `Internet: <strong>${internetVal}k/Phòng</strong>` : "",
      laundryVal ? `Giặt sấy: <strong>${laundryVal}k/${laundryUnitText}</strong>` : "",
      trashVal ? `Phí rác: <strong>${trashVal}k/Phòng</strong>` : "",
      parkingVal ? `Phí xe: <strong>${parkingVal}k/Xe</strong>` : "",
      maxPeopleVal ? `Giới hạn: <strong>${maxPeopleVal} người</strong>` : "",
      extraPersonVal ? `Phụ thu: <strong>${extraPersonVal}k/Người</strong>` : ""
    ].filter(Boolean);

    const furnVal = document.getElementById("dFurniture")?.value.trim() || "";
    const floorsVal = document.getElementById("dFloors")?.value.trim() || "";
    const dirVal = document.getElementById("dDirection")?.value.trim() || "";
    const frontageVal = document.getElementById("dFrontageRoad")?.value.trim() || "";
    const roadVal = document.getElementById("dRoadAccess")?.value.trim() || "";
    const prevFeatureBits = [
      furnVal ? `Nội thất: <strong>${furnVal}</strong>` : "",
      floorsVal ? `Số tầng: <strong>${floorsVal}</strong>` : "",
      dirVal ? `Hướng: <strong>${dirVal}</strong>` : "",
      frontageVal ? `Mặt tiền: <strong>${frontageVal}</strong>` : "",
      roadVal ? `Đường vào: <strong>${roadVal}</strong>` : ""
    ].filter(Boolean);

    html = `
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:12px;max-height:430px;overflow-y:auto;">
        <div style="font-size:10.5px;color:#64748b;margin-bottom:6px;">Trang chủ › ${STUDIO_STATE.catLabel} › ${(ward || "PHƯỜNG/XÃ").toUpperCase()}</div>
        <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;margin-bottom:6px;">
          ${badgeText ? `<span class="lc-vip-tag ${badgeClass}" style="position:static;font-size:9.5px;">${badgeText}</span>` : ""}
          ${stObj ? `<span class="sticker-pill ${stObj.cls}" style="font-size:9px;"><i class="fa-solid ${stObj.icon}"></i> ${stObj.name}</span>` : ""}
          <span style="background:#e2e8f0;color:#334155;padding:2px 7px;border-radius:99px;font-size:9.5px;font-weight:800;">${STUDIO_STATE.catLabel}</span>
          ${projectVal ? `<span style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;padding:2px 7px;border-radius:99px;font-size:9.5px;font-weight:800;">${projectVal}</span>` : ""}
        </div>
        <h4 style="font-size:14px;font-weight:900;color:#0f172a;line-height:1.35;margin-bottom:4px;">${title}</h4>
        <div style="font-size:11px;color:#475569;margin-bottom:8px;"><i class="fa-solid fa-location-dot" style="color:var(--ctt-orange);"></i> ${fullAddr}</div>
        <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:6px;margin-bottom:10px;">
          ${coverPhoto
            ? `<img src="${coverPhoto}" style="width:100%;height:110px;object-fit:cover;border-radius:10px;">`
            : `<div style="width:100%;height:110px;background:#e2e8f0;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#64748b;font-size:11px;">Chưa có ảnh</div>`}
          <div style="display:grid;grid-template-rows:1fr 1fr;gap:6px;">
            ${STUDIO_STATE.photos[1] ? `<img src="${STUDIO_STATE.photos[1]}" style="width:100%;height:52px;object-fit:cover;border-radius:8px;">` : `<div style="background:#e2e8f0;border-radius:8px;"></div>`}
            ${STUDIO_STATE.photos[2] ? `<img src="${STUDIO_STATE.photos[2]}" style="width:100%;height:52px;object-fit:cover;border-radius:8px;">` : `<div style="background:#e2e8f0;border-radius:8px;"></div>`}
          </div>
        </div>
        <div style="display:grid;gap:8px;font-size:11.5px;color:#334155;">
          <div style="background:#fffaf5;border:1px solid #fed7aa;border-radius:10px;padding:8px 10px;" class="tabular-nums">
            <strong style="color:var(--ctt-orange);font-size:15px;">${price} Triệu/tháng</strong> • Cọc ${STUDIO_STATE.deposit || "Thỏa Thuận"} • ${area} m² • ${STUDIO_STATE.beds} • ${STUDIO_STATE.baths}
          </div>
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px 10px;">
            <div style="font-size:10.5px;font-weight:800;color:#0f172a;margin-bottom:4px;">CHI PHÍ SINH HOẠT & QUY ĐỊNH</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px 12px;font-size:11px;">${prevCostBits.map((b) => `<span>${b}</span>`).join("")}</div>
          </div>
          ${prevFeatureBits.length ? `
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px 10px;">
            <div style="font-size:10.5px;font-weight:800;color:#0f172a;margin-bottom:4px;">ĐẶC ĐIỂM BẤT ĐỘNG SẢN</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px 12px;font-size:11px;">${prevFeatureBits.map((b) => `<span>${b}</span>`).join("")}</div>
          </div>` : ""}
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px 10px;">
            <div style="font-size:10.5px;font-weight:800;color:#0f172a;margin-bottom:4px;">MÔ TẢ CHI TIẾT${STUDIO_STATE.videoUrl ? " • CÓ VIDEO" : ""}</div>
            <div style="color:#475569;white-space:pre-line;line-height:1.45;font-size:11px;">${desc}</div>
          </div>
          ${prevUtils.length || prevSvcs.length ? `
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px 10px;">
            <div style="font-size:10.5px;font-weight:800;color:#0f172a;margin-bottom:4px;">TIỆN ÍCH & DỊCH VỤ</div>
            ${prevUtils.length ? `<div style="margin-bottom:4px;font-size:10.5px;"><strong>Tiện ích:</strong> ${prevUtils.join(", ")}</div>` : ""}
            ${prevSvcs.length ? `<div style="font-size:10.5px;"><strong>Dịch vụ:</strong> ${prevSvcs.join(", ")}</div>` : ""}
          </div>` : ""}
          <div style="background:#0f172a;color:#fff;border-radius:10px;padding:8px 10px;display:flex;justify-content:space-between;align-items:center;font-size:11px;">
            <span><strong>${hostVal}</strong></span>
            <span style="color:var(--ctt-orange);font-weight:800;" class="tabular-nums"><i class="fa-solid fa-phone"></i> ${phone}</span>
          </div>
        </div>
      </div>
    `;
  }

  const previewBox = document.getElementById("demoLivePreviewBox");
  if (previewBox) previewBox.innerHTML = html;

  const breakdownEl = document.getElementById("previewPriceBreakdown");
  if (breakdownEl) {
    if (!z) {
      breakdownEl.innerHTML = `<div style="text-align:center;color:#64748b;">Chưa chọn gói hiển thị (Vui lòng chọn khu vực ở Bước 4).</div>`;
    } else {
      const dur = STUDIO_DURATIONS.find((x) => x.days === STUDIO_STATE.selectedDays) || STUDIO_DURATIONS[1];
      const pricing = calcStudioCheckoutPricing(z, dur, stObj, STUDIO_STATE.promoCode);
      const fmt = (n) => (n === 0 ? "0đ" : new Intl.NumberFormat("vi-VN").format(n) + "đ");
      const discountNotes = [];
      if (pricing.durationDiscount > 0) {
        discountNotes.push(`Giảm ${dur.off}% gói ${dur.label}: -${fmt(pricing.durationDiscount)}`);
      }
      if (pricing.promoDiscount > 0 && pricing.promoObj) {
        discountNotes.push(`Mã ${pricing.promoObj.code}: -${fmt(pricing.promoDiscount)}`);
      }
      const discountNoteHtml = discountNotes.length
        ? `<div style="font-size:11px;color:var(--ctt-orange);margin-top:1px;">(${discountNotes.join(" + ")})</div>`
        : `<div style="font-size:11px;color:#94a3b8;margin-top:1px;">(Chưa có % giảm ngày hoặc mã khuyến mãi)</div>`;
      breakdownEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span>Gói hiển thị: <strong>${z.name}</strong> (${dur.label})</span>
          <strong class="tabular-nums">${fmt(pricing.rawPkgTotal)}</strong>
        </div>
        ${stObj ? `
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span>Nhãn Dán: <strong>${stObj.name}</strong> (${dur.label} × 1k)</span>
          <strong class="tabular-nums">+${fmt(pricing.stickerTotal)}</strong>
        </div>` : ""}
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;gap:8px;">
          <div>
            <span>Ưu đãi giảm giá:</span>
            ${discountNoteHtml}
          </div>
          <strong class="tabular-nums" style="color:${pricing.totalDiscount > 0 ? "var(--ctt-orange)" : "#64748b"};white-space:nowrap;">${pricing.totalDiscount > 0 ? `-${fmt(pricing.totalDiscount)}` : "0đ"}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span>Thuế VAT (8%):</span>
          <strong class="tabular-nums">${fmt(pricing.vatTotal)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;padding-top:6px;border-top:1px solid #e2e8f0;font-size:14px;">
          <strong style="color:#0f172a;">Tổng thanh toán:</strong>
          <strong class="tabular-nums" style="font-size:17px;color:var(--ctt-orange);">${pricing.grandTotal === 0 ? "0đ (Miễn phí)" : fmt(pricing.grandTotal)}</strong>
        </div>
      `;
    }
  }
}

function publishStudioListingNow() {
  if (!validateStudioStepBeforeNext(1)) { goToModalWizardStep(1, true); return; }
  if (!validateStudioStepBeforeNext(2)) { goToModalWizardStep(2, true); return; }
  if (!validateStudioStepBeforeNext(3)) { goToModalWizardStep(3, true); return; }

  const z = STUDIO_ZONES.find((x) => x.id === STUDIO_STATE.selectedZoneId);
  if (!z) {
    showStudioStepError("Vui lòng chọn 1 trong 6 khu vực hiển thị ở Bước 4 trước khi xác nhận.");
    goToModalWizardStep(4, true);
    return;
  }
  if (!document.getElementById("agreePostTerms")?.checked) {
    showCttNotice("Chưa xác nhận Điều khoản", "Vui lòng tick đồng ý với Điều khoản đăng tin của ChoThueTot.vn ở Bước 4.");
    return;
  }

  const editingId = Number(STUDIO_STATE.editingPropId) || 0;
  const existingProp = editingId > 0 ? PROPERTIES.find((p) => p.id === editingId) : null;
  const dur = STUDIO_DURATIONS.find((x) => x.days === STUDIO_STATE.selectedDays) || STUDIO_DURATIONS[1];
  const stObj = STUDIO_STICKERS.find((s) => s.id === STUDIO_STATE.selectedSticker);
  const pricing = calcStudioCheckoutPricing(z, dur, stObj, STUDIO_STATE.promoCode);
  const isFreeEditEligible = Boolean(
    existingProp &&
    (existingProp.freeEditsLeft ?? 3) > 0 &&
    (existingProp.zoneId || 0) === z.id &&
    (existingProp.sticker || null) === (STUDIO_STATE.selectedSticker || null)
  );
  const vatTotal = isFreeEditEligible ? 0 : pricing.vatTotal;
  const grandTotal = isFreeEditEligible ? 0 : pricing.grandTotal;

  if (STATE.walletBalance < grandTotal) {
    showCttNotice(
      "Số dư Ví chưa đủ",
      `Số dư hiện tại (${new Intl.NumberFormat("vi-VN").format(STATE.walletBalance)}đ) chưa đủ thanh toán ${new Intl.NumberFormat("vi-VN").format(grandTotal)}đ (gồm VAT 8%). Vui lòng nạp thêm vào Ví.`
    );
    openWalletModal();
    return;
  }

  if (grandTotal > 0) {
    STATE.walletBalance -= grandTotal;
    updateWalletUI();
    PORTAL_DATA.transactions.unshift({
      code: `#VIP-${Math.floor(10000 + Math.random() * 89999)}`,
      time: "Vừa xong",
      desc: `${existingProp ? `Nâng cấp/Sửa tin #${existingProp.id} — ` : "Đăng "}gói ${z.name} (${dur.label})${stObj ? ` + Nhãn ${stObj.name}` : ""}${pricing.promoObj ? ` + Mã ${pricing.promoObj.code}` : ""} + VAT 8%`,
      amount: -grandTotal,
      type: "debit",
      vat: vatTotal,
      status: "Đã xuất hóa đơn VAT"
    });
  }

  const newId = existingProp ? existingProp.id : PROPERTIES.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;
  const priceNum = parseFloat(document.getElementById("dPrice")?.value || "6.5");
  const coverPhoto = STUDIO_STATE.photos[STUDIO_STATE.coverIndex] || STUDIO_STATE.photos[0];
  const elecRaw = (document.getElementById("dElec")?.value || "").replace(/k/gi, "").trim();
  const waterRaw = (document.getElementById("dWater")?.value || "").replace(/k/gi, "").trim();
  const otherRaw = (document.getElementById("dOtherCost")?.value || "").replace(/k/gi, "").trim();
  const internetRaw = (document.getElementById("dInternet")?.value || "").replace(/k/gi, "").trim();
  const laundryRaw = (document.getElementById("dLaundry")?.value || "").replace(/k/gi, "").trim();
  const trashRaw = (document.getElementById("dTrash")?.value || "").replace(/k/gi, "").trim();
  const parkingRaw = (document.getElementById("dParking")?.value || "").replace(/k/gi, "").trim();
  const extraPersonRaw = (document.getElementById("dExtraPerson")?.value || "").replace(/k/gi, "").trim();

  const wardVal = document.getElementById("dWard")?.value || "P. Cầu Kiệu";
  const cityVal = document.getElementById("dCity")?.value || "TP. Hồ Chí Minh";
  const projObj = getSelectedStudioProject();
  const baseCoords = projObj?.coords || STUDIO_WARD_COORDS[wardVal] || [10.7965, 106.6825];
  const jitter = projObj?.coords ? 0 : ((newId % 7) - 3) * 0.0008;

  const utilitiesList = Array.from(document.querySelectorAll("#postModalBackdrop .util-chk:checked")).map((c) => c.value);
  if (document.getElementById("chkSchool")?.checked) {
    const sc = (document.getElementById("dSchoolCode")?.value || "").trim();
    utilitiesList.unshift(sc ? `Trường học (${sc})` : "Trường học");
  }
  const servicesList = Array.from(document.querySelectorAll("#postModalBackdrop .svc-chk:checked")).map((c) => c.value);

  const newProp = {
    id: newId,
    tier: z.tier,
    mapTier: z.mapTier,
    zoneId: z.id,
    vipBadge: z.badge || z.name,
    badge: z.badge || z.name,
    badgeClass: z.badgeClass,
    sticker: STUDIO_STATE.selectedSticker,
    category: STUDIO_STATE.catKey,
    categoryLabel: STUDIO_STATE.catLabel,
    title: (document.getElementById("dTitle")?.value.trim() || "CĂN HỘ MỚI ĐĂNG").slice(0, 70),
    desc: document.getElementById("dDesc")?.value.trim() || "",
    description: document.getElementById("dDesc")?.value.trim() || "",
    project: getValidStudioComboValue("project") || "",
    price: priceNum,
    priceMillion: priceNum,
    priceText: `${priceNum} Triệu`,
    city: cityVal,
    ward: wardVal,
    fullAddress: buildStudioFullAddress() || `${wardVal}, ${cityVal}`,
    area: parseInt(document.getElementById("dArea")?.value || "35", 10),
    beds: STUDIO_STATE.beds,
    baths: STUDIO_STATE.baths,
    elec: elecRaw ? `${elecRaw}k/kWh` : "Nhà nước",
    water: waterRaw ? `${waterRaw}k${STUDIO_STATE.waterUnit === "m3" ? "/m³" : "/Người"}` : "Nhà nước",
    otherCost: otherRaw ? `${otherRaw}k` : "",
    internet: internetRaw ? `${internetRaw}k` : "",
    laundry: laundryRaw ? `${laundryRaw}k/${({ nguoi: "Người", lan: "1 Lần", kg: "Kg", phong: "Phòng" }[STUDIO_STATE.laundryUnit || "nguoi"])}` : "",
    trash: trashRaw ? `${trashRaw}k` : "",
    parking: parkingRaw ? `${parkingRaw}k` : "",
    maxPeople: document.getElementById("dMaxPeople")?.value || "",
    extraPerson: extraPersonRaw ? `${extraPersonRaw}k` : "",
    furniture: document.getElementById("dFurniture")?.value || "",
    floors: document.getElementById("dFloors")?.value || "",
    direction: document.getElementById("dDirection")?.value || "",
    frontageRoad: document.getElementById("dFrontageRoad")?.value.trim() || "",
    roadAccess: document.getElementById("dRoadAccess")?.value.trim() || "",
    utilities: utilitiesList,
    services: servicesList,
    deposit: STUDIO_STATE.deposit || "Thỏa Thuận",
    lat: Number((baseCoords[0] + jitter).toFixed(4)),
    lng: Number((baseCoords[1] - jitter).toFixed(4)),
    verified: true,
    isVipPin: z.id === 1,
    phone: formatPhone433(document.getElementById("dPhone")?.value || "0906 344 877"),
    host: document.getElementById("dHost")?.value || "Chính chủ Minh Quân",
    image: coverPhoto,
    gallery: STUDIO_STATE.photos.slice(),
    videoUrl: STUDIO_STATE.videoUrl || "",
    videoName: STUDIO_STATE.videoName || "",
    freeEditsLeft: existingProp
      ? Math.max(0, (existingProp.freeEditsLeft ?? 3) - (isFreeEditEligible ? 1 : 0))
      : 3
  };

  if (existingProp) {
    Object.assign(existingProp, newProp);
    if (typeof saveListingOverrideRecord === "function") {
      saveListingOverrideRecord(existingProp.id, newProp);
    }
  } else {
    PROPERTIES.unshift(newProp);
  }
  STUDIO_STATE.editingPropId = null;

  try {
    const saved = JSON.parse(localStorage.getItem("ctt_user_listings_v1") || "[]");
    const nextSaved = [newProp, ...(Array.isArray(saved) ? saved.filter((x) => x && x.id !== newProp.id) : [])].slice(0, 40);
    localStorage.setItem("ctt_user_listings_v1", JSON.stringify(nextSaved));
  } catch (e) {}
  if (typeof savePortalStateStore === "function") savePortalStateStore();

  if (z.id === 1 && typeof VIP_EXCLUSIVE_SLIDES !== "undefined" && Array.isArray(VIP_EXCLUSIVE_SLIDES)) {
    const slideObj = {
      id: newId,
      location: newProp.fullAddress,
      price: String(priceNum),
      unit: "Triệu | Tháng",
      title: newProp.title,
      desc: newProp.description || `${newProp.categoryLabel} tại ${newProp.fullAddress}`,
      area: `${newProp.area} m²`,
      beds: newProp.beds,
      baths: newProp.baths,
      elec: newProp.elec,
      water: newProp.water,
      phone: newProp.phone,
      phoneFull: newProp.phone,
      phoneMasked: newProp.phone.length >= 7 ? `${newProp.phone.slice(0, 4)} ${newProp.phone.slice(4, 7)} ***` : newProp.phone,
      photos: newProp.gallery.length >= 3 ? newProp.gallery.slice(0, 3) : [coverPhoto, coverPhoto, coverPhoto]
    };
    const existSlideIdx = VIP_EXCLUSIVE_SLIDES.findIndex((s) => Number(s.id) === Number(newId));
    if (existSlideIdx >= 0) VIP_EXCLUSIVE_SLIDES[existSlideIdx] = slideObj;
    else VIP_EXCLUSIVE_SLIDES.unshift(slideObj);
    STATE.sv1Index = 0;
    STATE.sv1ThumbIndex = 0;
    renderSv1Slider();
  }
  renderAllHomeGrids();
  updateMapPins("all", newId);
  updateMapFilterChipCounts();
  initMegaSearchSync();
  closePostModal();

  showCttNotice(
    existingProp ? `Đã cập nhật tin #${newId}` : `Đăng tin thành công (#${newId})`,
    existingProp
      ? `• Gói hiển thị: ${z.name}\n• Quyền sửa miễn phí còn lại: ${newProp.freeEditsLeft}/3 lần\n• Chi phí phát sinh: ${new Intl.NumberFormat("vi-VN").format(grandTotal)}đ`
      : `• Gói hiển thị: ${z.name} (${dur.label})\n• Tổng thanh toán (gồm VAT 8%): ${new Intl.NumberFormat("vi-VN").format(grandTotal)}đ\n• Đang mở Trang Chi Tiết Bài Viết vừa xuất bản!`
  );

  openPropertyDetailView(newId);
}

// ==========================================================================
// 12. DATA NORMALIZATION, SEO GALLERY ENRICHMENT, MEMBER PORTAL & ADMIN CENTER
// ==========================================================================
const PORTAL_DATA = {
  memberFilter: "all",
  adminSearchKw: "",
  adminCatFilter: "all",
  adminTierFilter: "all",
  appointments: [
    { id: 101, guestName: "Nguyễn Hoàng Nam", guestPhone: "0908612489", propId: 2078, propTitle: "Kiot & Phòng Studio cao cấp Phan Xích Long", slot: "Ngày mai • Chiều (14h-17h)", status: "pending" },
    { id: 102, guestName: "Trần Thanh Thảo", guestPhone: "0938119204", propId: 4169, propTitle: "Phòng Studio ban công thoáng Phan Xích Long", slot: "Cuối tuần • Sáng (09h-11h)", status: "pending" },
    { id: 103, guestName: "Lê Minh Khôi", guestPhone: "0914882310", propId: 4170, propTitle: "Penthouse Mini & CHDV View Kênh Nhiêu Lộc", slot: "Hôm nay • Tối (18h-20h)", status: "confirmed" }
  ],
  transactions: [
    { code: "#VQR-99241", time: "18/11/2026 09:15", desc: "Nạp Ví tự động qua VietQR 24/7", amount: 500000, type: "credit", vat: 0, status: "Hoàn tất tự động" },
    { code: "#VIP-88102", time: "17/11/2026 14:20", desc: "Đăng gói Banner Đặc Quyền (7 ngày) + Nhãn HOT + VAT 8% cho tin #2078", amount: -366660, type: "debit", vat: 27160, status: "Đã xuất hóa đơn VAT" }
  ]
};

// Enrich all mock PROPERTIES with 4-photo galleries, 4-tier VIP badges, stickers, and 2 HomeStay/Airbnb listings
(function enrichPropertiesAndPortals() {
  const importedBatches = [
    window.IMPORTED_CHOTHUETOT_LISTINGS,
    window.IMPORTED_CHOTHUETOT_4000_A,
    window.IMPORTED_CHOTHUETOT_4000_B
  ];
  const existingIds = new Set(PROPERTIES.map((p) => p.id));
  importedBatches.forEach((batch) => {
    if (Array.isArray(batch) && batch.length > 0) {
      batch.forEach((item) => {
        if (!existingIds.has(item.id)) {
          existingIds.add(item.id);
          PROPERTIES.push(item);
        }
      });
    }
  });
  try {
    const userSaved = JSON.parse(localStorage.getItem("ctt_user_listings_v1") || "[]");
    if (Array.isArray(userSaved) && userSaved.length > 0) {
      userSaved.slice().reverse().forEach((item) => {
        if (item && item.id && !existingIds.has(item.id)) {
          item.phone = formatPhone433(item.phone);
          existingIds.add(item.id);
          PROPERTIES.unshift(item);
        }
      });
    }
  } catch (e) {}
  const poolPhotos = [
    "https://chothuetot.vn/assets/images/properties/album_1791010714_7391.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791011814_9782.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791013825_7889.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791011017_2480.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791022806_6372.webp",
    "https://chothuetot.vn/assets/images/properties/album_1791022210_7592.webp"
  ];

  // Add 2 authentic HomeStay / Airbnb listings if not present
  if (!PROPERTIES.some((p) => p.category === "homestay-airbnb")) {
    PROPERTIES.push(
      {
        id: 8921,
        tier: "spotlight",
        zoneId: 2,
        badge: "✦ VIP 1",
        badgeClass: "tag-vip1",
        sticker: "hot",
        category: "homestay-airbnb",
        categoryLabel: "HomeStay / Airbnb",
        title: "HomeStay Indochine Studio Full Nội Thất View Kênh Nhiêu Lộc — Lê Văn Sỹ",
        price: 8.5,
        priceText: "8.5 Triệu",
        ward: "P. Nhiêu Lộc",
        city: "TP. Hồ Chí Minh",
        fullAddress: "118 Lê Văn Sỹ, P. Nhiêu Lộc, TP. Hồ Chí Minh",
        area: 42,
        beds: "1 PN",
        baths: "1 WC",
        elec: "Nhà nước",
        water: "Nhà nước",
        deposit: "1 Tháng",
        furniture: "Đầy Đủ",
        floors: "1 Tầng",
        direction: "Đông Nam",
        lat: 10.7862,
        lng: 106.6798,
        verified: true,
        isVipPin: false,
        phone: "0906 344 877",
        host: "Chính chủ Minh Quân",
        image: poolPhotos[2],
        gallery: [poolPhotos[2], poolPhotos[0], poolPhotos[1], poolPhotos[3]]
      },
      {
        id: 8922,
        tier: "featured",
        zoneId: 3,
        badge: "• VIP 2",
        badgeClass: "tag-vip2",
        sticker: "promo",
        category: "homestay-airbnb",
        categoryLabel: "HomeStay / Airbnb",
        title: "Căn Hộ Airbnb 2PN Ban Công Rộng Sát Phan Xích Long — Nhận Khách Ngắn & Dài Hạn",
        price: 11.5,
        priceText: "11.5 Triệu",
        ward: "P. Cầu Kiệu",
        city: "TP. Hồ Chí Minh",
        fullAddress: "68 Hoa Sứ, P. Cầu Kiệu, TP. Hồ Chí Minh",
        area: 55,
        beds: "2 PN",
        baths: "2 WC",
        elec: "Nhà nước",
        water: "100k",
        deposit: "1 Tháng",
        furniture: "Đầy Đủ",
        floors: "1 Tầng",
        direction: "Nam",
        lat: 10.7978,
        lng: 106.6849,
        verified: true,
        isVipPin: false,
        phone: "0906 344 877",
        host: "Duy Quang",
        image: poolPhotos[3],
        gallery: [poolPhotos[3], poolPhotos[4], poolPhotos[5], poolPhotos[1]]
      }
    );
  }

  const stickerSampleById = { 2078: "hot", 4169: "promo", 4170: "urgent", 4175: "hot", 4181: "promo" };

  PROPERTIES.forEach((p, idx) => {
    if (p.id === 2078) p.zoneId = 1;
    const vip = getPropertyVipDisplay(p);
    p.badge = vip.label || "Tin Cơ Bản";
    p.badgeClass = vip.badgeClass || "";
    if (!p.sticker && stickerSampleById[p.id]) {
      p.sticker = stickerSampleById[p.id];
    }
    if (!Array.isArray(p.gallery) || p.gallery.length < 4) {
      const start = p.image || poolPhotos[idx % poolPhotos.length];
      p.gallery = [
        start,
        poolPhotos[(idx + 1) % poolPhotos.length],
        poolPhotos[(idx + 2) % poolPhotos.length],
        poolPhotos[(idx + 3) % poolPhotos.length]
      ];
    }
    if (typeof p.freeEditsLeft !== "number") {
      p.freeEditsLeft = 3;
    }
  });

  // Restore saved listing overrides (Admin tier/sticker edits, hide/show, edits, deletes)
  try {
    const ovRaw = localStorage.getItem("ctt_listing_overrides_v1");
    if (ovRaw) {
      const ovMap = JSON.parse(ovRaw) || {};
      if (Array.isArray(ovMap.__deletedIds) && ovMap.__deletedIds.length) {
        const delSet = new Set(ovMap.__deletedIds.map(Number));
        for (let i = PROPERTIES.length - 1; i >= 0; i--) {
          if (delSet.has(Number(PROPERTIES[i].id))) PROPERTIES.splice(i, 1);
        }
      }
      PROPERTIES.forEach((p) => {
        const patch = ovMap[String(p.id)];
        if (patch && typeof patch === "object") {
          Object.assign(p, patch);
        }
      });
      if (Array.isArray(ovMap.__boostedIds) && ovMap.__boostedIds.length) {
        ovMap.__boostedIds.slice().reverse().forEach((bId) => {
          const idx = PROPERTIES.findIndex((p) => Number(p.id) === Number(bId));
          if (idx > 0) {
            const [item] = PROPERTIES.splice(idx, 1);
            PROPERTIES.unshift(item);
          }
        });
      }
    }
  } catch (_) {}

  // Chuẩn hóa tên Tỉnh/Thành cũ trong kho tin mẫu cho khớp 34 đơn vị hành chính mới (không trộn địa chỉ cũ vào form Đăng Tin)
  PROPERTIES.forEach((p) => {
    if (p.city === 'TP. Bắc Ninh') p.city = 'Tỉnh Bắc Ninh';
    if (p.city === 'TP. Đồng Nai') p.city = 'Tỉnh Đồng Nai';
  });

  // Restore saved portal wallet balance, transactions, and appointments
  try {
    const psRaw = localStorage.getItem("ctt_portal_state_v1");
    if (psRaw) {
      const ps = JSON.parse(psRaw);
      if (typeof ps.walletBalance === "number") STATE.walletBalance = ps.walletBalance;
      if (Array.isArray(ps.transactions) && ps.transactions.length) PORTAL_DATA.transactions = ps.transactions;
      if (Array.isArray(ps.appointments) && ps.appointments.length) PORTAL_DATA.appointments = ps.appointments;
    }
  } catch (_) {}
})();

function savePortalStateStore() {
  try {
    localStorage.setItem(
      "ctt_portal_state_v1",
      JSON.stringify({
        walletBalance: STATE.walletBalance,
        transactions: PORTAL_DATA.transactions.slice(0, 50),
        appointments: PORTAL_DATA.appointments.slice(0, 50)
      })
    );
  } catch (_) {}
}

function saveListingOverrideRecord(propId, patchObj, isDeleted = false) {
  try {
    const ovMap = JSON.parse(localStorage.getItem("ctt_listing_overrides_v1") || "{}");
    if (isDeleted) {
      const del = Array.isArray(ovMap.__deletedIds) ? ovMap.__deletedIds : [];
      if (!del.includes(Number(propId))) del.push(Number(propId));
      ovMap.__deletedIds = del;
      delete ovMap[String(propId)];
    } else if (patchObj && typeof patchObj === "object") {
      ovMap[String(propId)] = { ...(ovMap[String(propId)] || {}), ...patchObj };
    }
    localStorage.setItem("ctt_listing_overrides_v1", JSON.stringify(ovMap));
  } catch (_) {}
}

function getMemberOwnedProperties() {
  let savedIds = new Set();
  try {
    const userSaved = JSON.parse(localStorage.getItem("ctt_user_listings_v1") || "[]");
    if (Array.isArray(userSaved)) {
      userSaved.forEach((x) => { if (x && x.id) savedIds.add(Number(x.id)); });
    }
  } catch (_) {}
  const authName = (STATE.auth?.displayName || "").trim().toLowerCase();
  const owned = PROPERTIES.filter((p) => {
    if (savedIds.has(Number(p.id))) return true;
    if (authName && String(p.host || "").toLowerCase() === authName) return true;
    return false;
  });
  const baseTen = PROPERTIES.slice(0, 10);
  const combined = [...owned];
  baseTen.forEach((p) => {
    if (!combined.some((x) => x.id === p.id)) combined.push(p);
  });
  return combined.slice(0, 20);
}

// Hook topUpWalletInstant & submitZaloViewingSchedule to record into PORTAL_DATA
const _origTopUpWallet = topUpWalletInstant;
topUpWalletInstant = function (amount) {
  PORTAL_DATA.transactions.unshift({
    code: `#VQR-${Math.floor(10000 + Math.random() * 89999)}`,
    time: "Vừa xong",
    desc: `Nạp Ví tự động VietQR 24/7`,
    amount: amount,
    type: "credit",
    vat: 0,
    status: "Hoàn tất tự động"
  });
  _origTopUpWallet(amount);
  if (document.getElementById("view-member")?.style.display === "block" && STATE.activeMemberTab === "wallet") {
    switchMemberTab("wallet");
  }
};

const _origSubmitZaloSched = submitZaloViewingSchedule;
submitZaloViewingSchedule = function (propId) {
  const item = PROPERTIES.find((p) => p.id === Number(propId)) || PROPERTIES[0];
  const phoneEl = document.getElementById("schedTenantPhone");
  const phone = (phoneEl?.value || "").replace(/\D/g, "").trim();
  if (/^0(3|5|7|8|9)\d{8}$/.test(phone)) {
    PORTAL_DATA.appointments.unshift({
      id: Date.now(),
      guestName: STATE.auth?.isLoggedIn ? STATE.auth.displayName : "Khách thuê đặt lịch",
      guestPhone: phone,
      propId: item.id,
      propTitle: item.title,
      slot: `${STATE.selectedViewingDate} • ${STATE.selectedViewingTime}`,
      status: "pending"
    });
  }
  _origSubmitZaloSched(propId);
};

function syncMemberSidebarAndKpis() {
  const name = STATE.auth?.displayName || "Chính chủ Minh Quân";
  const code = STATE.auth?.memberCode || "#CTT-8829";
  const roleLabel = STATE.auth?.role === "admin" ? "Quản trị viên Admin" : "Hạng Vàng Chính Chủ";
  const verifiedVia = STATE.auth?.verifiedVia || "CCCD & SĐT Zalo";

  const avEl = document.getElementById("memberSidebarAvatar");
  if (avEl) avEl.textContent = getInitials(name);
  const nameEl = document.getElementById("memberSidebarName");
  if (nameEl) nameEl.textContent = name;
  const badgeEl = document.getElementById("memberSidebarBadge");
  if (badgeEl) badgeEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> Đã xác thực ${verifiedVia}`;
  const metaEl = document.getElementById("memberSidebarMeta");
  if (metaEl) metaEl.textContent = `Mã: ${code} • ${roleLabel}`;

  const myProps = getMemberOwnedProperties();
  const vipCount = myProps.filter((p) => p.tier === "spotlight" || p.tier === "featured" || p.tier === "prime").length;
  const navCnt = document.getElementById("memberNavCountListings");
  if (navCnt) navCnt.textContent = String(myProps.length);
  const apptCnt = document.getElementById("memberNavCountAppts");
  if (apptCnt) apptCnt.textContent = `${PORTAL_DATA.appointments.filter((a) => a.status === "pending").length} mới`;

  const kpiActive = document.getElementById("memberKpiActive");
  if (kpiActive) {
    kpiActive.innerHTML = `${String(myProps.filter((p) => !p.isHidden).length).padStart(2, "0")} <span style="font-size:12px;color:#059669;font-weight:700;">(${vipCount} Tin VIP)</span>`;
  }
}

function openEditListingModal(propId) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (!item) return;
  openPostModal();
  STUDIO_STATE.editingPropId = item.id;
  selectStudioCategory(item.category || "phong-tro", item.categoryLabel || "Phòng trọ / CHDV", document.querySelector(`#postModalBackdrop .post-cat-btn[data-cat="${item.category}"]`));
  STUDIO_STATE.beds = item.beds || "1 PN";
  STUDIO_STATE.baths = item.baths || "1 WC";
  STUDIO_STATE.deposit = item.deposit || "1 Tháng";
  STUDIO_STATE.photos = (item.gallery && item.gallery.length ? item.gallery : [item.image]).slice();
  STUDIO_STATE.selectedZoneId = item.zoneId || (item.tier === "spotlight" ? 2 : item.tier === "featured" ? 3 : item.tier === "prime" ? 5 : 4);
  STUDIO_STATE.selectedSticker = item.sticker || null;

  const cityEl = document.getElementById("dCity");
  if (cityEl) {
    cityEl.value = item.city || "TP. Hồ Chí Minh";
    cityEl.dataset.prevValid = cityEl.value;
    populateStudioWards();
  }
  const wardEl = document.getElementById("dWard");
  if (wardEl) {
    wardEl.value = item.ward || "P. Cầu Kiệu";
    wardEl.dataset.prevValid = wardEl.value;
    populateStudioStreets();
  }
  const streetEl = document.getElementById("dStreet");
  const rawFrontPart = ((item.fullAddress || "").split(",")[0] || "").trim();
  const houseMatch = rawFrontPart.match(/^((?:Số\s+)?\d+[A-Za-z0-9/\-]*)\s+(.+)$/i);
  const extractedHouse = houseMatch ? houseMatch[1].replace(/^Số\s+/i, "").trim() : "";
  const rawStreetPart = houseMatch ? houseMatch[2].trim() : rawFrontPart;
  const cleanStreet =
    item.street ||
    (typeof window.sanitizeExtractedStreetName === "function" ? window.sanitizeExtractedStreetName(rawStreetPart) : "") ||
    (STUDIO_STREETS_BY_WARD[item.ward]?.[0]) ||
    "Phan Xích Long";
  if (streetEl) {
    streetEl.value = cleanStreet;
    streetEl.dataset.prevValid = streetEl.value;
  }
  const projEl = document.getElementById("dProject");
  if (projEl) {
    projEl.value = item.project || "";
    projEl.dataset.prevValid = projEl.value;
  }
  STUDIO_STATE.houseNumber = extractedHouse || "142";
  STUDIO_STATE.isEditingAddress = false;
  syncStudioAddressDisplay();
  const hostEl = document.getElementById("dHost");
  if (hostEl) hostEl.value = item.host || STATE.auth.displayName || "Chính chủ Minh Quân";
  const phoneEl = document.getElementById("dPhone");
  if (phoneEl) {
    phoneEl.value = (item.phone || "0906344877").replace(/\D/g, "");
    sanitizeStudioVnPhone(phoneEl);
  }
  const priceEl = document.getElementById("dPrice");
  if (priceEl) priceEl.value = item.price || 7.5;
  const areaEl = document.getElementById("dArea");
  if (areaEl) areaEl.value = item.area || 35;
  const depEl = document.getElementById("dDeposit");
  if (depEl) {
    depEl.value = item.deposit || "1 Tháng";
    depEl.dataset.prevValid = depEl.value;
  }
  const bedsEl = document.getElementById("dBeds");
  if (bedsEl) bedsEl.value = String(parseInt(item.beds || "1", 10) || 1);
  const bathsEl = document.getElementById("dBaths");
  if (bathsEl) bathsEl.value = String(parseInt(item.baths || "1", 10) || 1);

  const cleanNumVal = (v) => (/nhà nước/i.test(String(v || "")) ? "" : String(v || "").replace(/[^0-9.]/g, ""));
  const elecEl = document.getElementById("dElec");
  if (elecEl) elecEl.value = cleanNumVal(item.elec);
  const waterEl = document.getElementById("dWater");
  if (waterEl) waterEl.value = cleanNumVal(item.water);
  if (/m³|m3|khối/i.test(String(item.water || ""))) selectStudioWaterUnit("m3");
  else selectStudioWaterUnit("nguoi");

  const otherEl = document.getElementById("dOtherCost");
  if (otherEl) otherEl.value = cleanNumVal(item.otherCost);
  const netEl = document.getElementById("dInternet");
  if (netEl) netEl.value = cleanNumVal(item.internet);
  const launEl = document.getElementById("dLaundry");
  if (launEl) launEl.value = cleanNumVal(item.laundry);
  const launStr = String(item.laundry || "");
  if (/1\s*lần|lan/i.test(launStr)) selectStudioLaundryUnit("lan");
  else if (/kg/i.test(launStr)) selectStudioLaundryUnit("kg");
  else if (/phòng|phong/i.test(launStr)) selectStudioLaundryUnit("phong");
  else selectStudioLaundryUnit("nguoi");
  const trashEl = document.getElementById("dTrash");
  if (trashEl) trashEl.value = cleanNumVal(item.trash);
  const parkEl = document.getElementById("dParking");
  if (parkEl) parkEl.value = cleanNumVal(item.parking);

  const itemUtils = Array.isArray(item.utilities) ? item.utilities : [];
  const itemSvcs = Array.isArray(item.services) ? item.services : [];
  document.querySelectorAll("#postModalBackdrop .util-chk").forEach((chk) => {
    chk.checked = itemUtils.includes(chk.value);
  });
  const schoolEntry = itemUtils.find((u) => String(u).startsWith("Trường học"));
  const chkSchoolEl = document.getElementById("chkSchool");
  const schoolWrapEl = document.getElementById("schoolCodeWrap");
  const schoolInputEl = document.getElementById("dSchoolCode");
  if (chkSchoolEl) chkSchoolEl.checked = Boolean(schoolEntry);
  if (schoolWrapEl) schoolWrapEl.style.display = schoolEntry ? "block" : "none";
  if (schoolInputEl) {
    const mSchool = String(schoolEntry || "").match(/\(([^)]+)\)/);
    schoolInputEl.value = mSchool ? mSchool[1] : "";
  }
  document.querySelectorAll("#postModalBackdrop .svc-chk").forEach((chk) => {
    chk.checked = itemSvcs.includes(chk.value);
  });

  const maxPEl = document.getElementById("dMaxPeople");
  if (maxPEl) {
    maxPEl.value = item.maxPeople || "";
    onStudioMaxPeopleChange(maxPEl.value);
  }
  const extraPEl = document.getElementById("dExtraPerson");
  if (extraPEl) extraPEl.value = cleanNumVal(item.extraPerson);
  const furnEl = document.getElementById("dFurniture");
  if (furnEl) furnEl.value = item.furniture || "";
  const flEl = document.getElementById("dFloors");
  if (flEl) flEl.value = item.floors || "";
  const dirEl = document.getElementById("dDirection");
  if (dirEl) dirEl.value = item.direction || "";
  const frontEl = document.getElementById("dFrontageRoad");
  if (frontEl) frontEl.value = item.frontageRoad || "";
  const roadEl = document.getElementById("dRoadAccess");
  if (roadEl) roadEl.value = item.roadAccess || "";

  const titleEl = document.getElementById("dTitle");
  if (titleEl) titleEl.value = (item.title || "").slice(0, 70);
  const descEl = document.getElementById("dDesc");
  if (descEl) descEl.value = item.description || item.desc || `Chính chủ cho thuê ${item.title} tại ${item.fullAddress}.`;

  updateStudioTitleCount();
  renderStudioPhotosManager();
  pickStudioZone(STUDIO_STATE.selectedZoneId);
  renderStudioPreview();
}

function boostMemberListingNow(propId) {
  const idx = PROPERTIES.findIndex((p) => p.id === Number(propId));
  if (idx < 0) return;
  const [item] = PROPERTIES.splice(idx, 1);
  PROPERTIES.unshift(item);
  try {
    const ovMap = JSON.parse(localStorage.getItem("ctt_listing_overrides_v1") || "{}");
    const bList = Array.isArray(ovMap.__boostedIds) ? ovMap.__boostedIds.filter((x) => Number(x) !== Number(propId)) : [];
    bList.unshift(Number(propId));
    ovMap.__boostedIds = bList.slice(0, 30);
    localStorage.setItem("ctt_listing_overrides_v1", JSON.stringify(ovMap));
  } catch (_) {}
  renderAllHomeGrids();
  updateMapPins("all", item.id);
  switchMemberTab("listings");
  showCttNotice(
    `Đã đẩy tin #${item.id} lên đầu bảng`,
    "Tin đăng đã được ưu tiên lên vị trí số 1 và làm mới ghim trên Bản đồ."
  );
}

function toggleHideMemberListing(propId) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (!item) return;
  item.isHidden = !item.isHidden;
  saveListingOverrideRecord(item.id, { isHidden: item.isHidden });
  renderAllHomeGrids();
  updateMapPins("all");
  syncMemberSidebarAndKpis();
  switchMemberTab("listings");
  showCttNotice(
    item.isHidden ? `Đã ẩn tin #${item.id}` : `Đã hiển thị lại tin #${item.id}`,
    item.isHidden ? "Tin đăng đã tạm ẩn khỏi trang chủ và bản đồ." : "Tin đăng đã hoạt động trở lại trên hệ thống."
  );
}

function confirmMemberAppointment(apptId) {
  const appt = PORTAL_DATA.appointments.find((a) => String(a.id) === String(apptId));
  if (appt) {
    appt.status = "confirmed";
    savePortalStateStore();
  }
  syncMemberSidebarAndKpis();
  switchMemberTab("appointments");
  showCttNotice("Đã xác nhận lịch hẹn Zalo", `Đã chốt lịch xem phòng với khách ${appt ? appt.guestName : ""}.`);
}

function copyPropertySeoLink(propId, btnEl) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (!item) return;
  const fullUrl = `${window.location.origin}/${buildPropertySeoUrl(item)}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullUrl).catch(() => {});
  }
  if (btnEl) {
    const oldHtml = btnEl.innerHTML;
    btnEl.innerHTML = `<i class="fa-solid fa-check" style="color:#059669;"></i> Đã copy SEO Link`;
    setTimeout(() => { btnEl.innerHTML = oldHtml; }, 1800);
  }
}

function filterMemberListings(mode, btnEl) {
  PORTAL_DATA.memberFilter = mode;
  switchMemberTab("listings");
}

function saveMemberProfileSettings() {
  const nameVal = document.getElementById("memProfileName")?.value.trim() || "";
  const phoneVal = document.getElementById("memProfilePhone")?.value.replace(/\D/g, "").trim() || "";
  const emailVal = document.getElementById("memProfileEmail")?.value.trim() || "";
  const newPwd = document.getElementById("memProfileNewPwd")?.value || "";

  if (!nameVal) {
    showCttNotice("Thiếu thông tin", "Vui lòng nhập Họ và tên hiển thị.");
    return;
  }
  STATE.auth.displayName = nameVal;
  if (phoneVal) STATE.auth.phone = formatPhone433(phoneVal);
  if (emailVal) STATE.auth.email = emailVal;

  const store = getAccountsStore();
  const idx = store.findIndex((a) => normalizeAuthIdentity(a.identity) === normalizeAuthIdentity(STATE.auth.identity || STATE.auth.phone || STATE.auth.email));
  if (idx >= 0) {
    store[idx].displayName = nameVal;
    if (newPwd && newPwd.length >= 6) {
      store[idx].password = newPwd;
    }
    saveAccountsStore(store);
  }
  try {
    localStorage.setItem("ctt_auth_session", JSON.stringify(STATE.auth));
  } catch (_) {}

  updateAuthUI();
  syncMemberSidebarAndKpis();
  showCttNotice(
    "Đã lưu hồ sơ tài khoản",
    `Đã cập nhật thông tin cho "${nameVal}"${newPwd && newPwd.length >= 6 ? " (Đã đổi mật khẩu mới)" : ""}.`
  );
}

function switchMemberTab(tabName, btnEl) {
  STATE.activeMemberTab = tabName;
  if (btnEl) {
    document.querySelectorAll("#view-member .portal-nav-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  syncMemberSidebarAndKpis();
  const container = document.getElementById("memberPortalMainContent");
  if (!container) return;

  if (tabName === "listings") {
    const allMyProps = getMemberOwnedProperties();
    const fMode = PORTAL_DATA.memberFilter || "all";
    const myProps = allMyProps.filter((p) => {
      if (fMode === "vip") return p.tier === "spotlight" || p.tier === "featured" || p.tier === "prime";
      if (fMode === "active") return !p.isHidden;
      if (fMode === "hidden") return Boolean(p.isHidden);
      return true;
    });

    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:12px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Quản Lý Danh Sách Tin Đăng Của Bạn (${String(myProps.length).padStart(2, "0")} tin)</h3>
            <small style="color:#64748b;">Tích hợp tự động URL chuẩn SEO (Loại hình + Vị trí + Giá) • Miễn phí 3 lần sửa tin đầu tiên</small>
          </div>
          <button type="button" class="hsp-btn-apply" onclick="STUDIO_STATE.editingPropId=null;openPostModal()">
            <i class="fa-solid fa-plus"></i> Đăng tin mới ngay
          </button>
        </div>

        <div class="portal-filter-bar">
          <button type="button" class="portal-filter-pill ${fMode === "all" ? "active" : ""}" onclick="filterMemberListings('all')">Tất cả (${allMyProps.length})</button>
          <button type="button" class="portal-filter-pill ${fMode === "vip" ? "active" : ""}" onclick="filterMemberListings('vip')">Tin VIP (${allMyProps.filter((p) => p.tier !== "basic" && p.tier !== "free").length})</button>
          <button type="button" class="portal-filter-pill ${fMode === "active" ? "active" : ""}" onclick="filterMemberListings('active')">Đang hiển thị (${allMyProps.filter((p) => !p.isHidden).length})</button>
          <button type="button" class="portal-filter-pill ${fMode === "hidden" ? "active" : ""}" onclick="filterMemberListings('hidden')">Đã ẩn / Đã cho thuê (${allMyProps.filter((p) => p.isHidden).length})</button>
        </div>

        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Bất động sản & Đường dẫn SEO</th>
              <th>Hạng gói & Nhãn</th>
              <th>Hiệu quả (Xem / Gọi)</th>
              <th>Quyền sửa miễn phí</th>
              <th>Thao tác quản lý</th>
            </tr>
          </thead>
          <tbody>
            ${myProps
              .map((p, idx) => {
                const vip = getPropertyVipDisplay(p);
                const seoUrl = buildPropertySeoUrl(p);
                return `
              <tr style="${p.isHidden ? "opacity:0.55;background:#f8fafc;" : ""}">
                <td>
                  <div style="display:flex;align-items:center;gap:12px;">
                    <img src="${p.image}" alt="${p.title}" style="width:72px;height:52px;border-radius:8px;object-fit:cover;flex-shrink:0;">
                    <div style="min-width:0;">
                      <strong style="color:#0f172a;display:block;font-size:13px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">#${p.id} • ${p.title}</strong>
                      <div>
                        <span style="color:var(--ctt-orange);font-weight:800;font-size:12.5px;">${p.priceText}/Tháng</span>
                        <small style="color:#64748b;"> • ${p.area}m² • ${p.ward}, ${p.city}</small>
                      </div>
                      <small style="display:block;color:#059669;font-family:monospace;font-size:10.5px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${seoUrl.replace("#", "")}</small>
                    </div>
                  </div>
                </td>
                <td>
                  ${vip.label ? `<span class="lc-vip-tag ${vip.badgeClass}" style="position:static;display:inline-block;font-size:10px;padding:3px 9px;">${vip.label}</span>` : `<span style="padding:3px 8px;border-radius:99px;background:#f1f5f9;color:#475569;font-size:11px;font-weight:700;">Tin Cơ Bản</span>`}
                  <small style="display:block;color:${p.isHidden ? "#dc2626" : "#059669"};font-size:11px;font-weight:700;margin-top:4px;">${p.isHidden ? "Đã ẩn / Đã thuê" : `Đang chạy • Còn ${15 - (idx % 5) * 2} ngày`}</small>
                </td>
                <td>
                  <strong>${1120 - idx * 115} lượt xem</strong>
                  <small style="display:block;color:#059669;font-weight:700;">${42 - idx * 4} lượt gọi & Zalo</small>
                </td>
                <td>
                  <span style="color:#059669;font-weight:800;">Còn ${p.freeEditsLeft ?? 3}/3 lần</span>
                </td>
                <td>
                  <div style="display:flex;gap:5px;flex-wrap:wrap;">
                    <button type="button" onclick="boostMemberListingNow(${p.id})" style="padding:5px 9px;border-radius:8px;border:1px solid var(--ctt-orange);background:var(--ctt-orange-soft);color:var(--ctt-orange);font-size:11px;font-weight:800;cursor:pointer;" title="Đẩy tin lên đầu trang">
                      <i class="fa-solid fa-arrow-up-from-bracket"></i> Đẩy Top
                    </button>
                    <button type="button" onclick="openEditListingModal(${p.id})" style="padding:5px 9px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11px;font-weight:700;cursor:pointer;" title="Sửa nội dung & gói VIP">
                      <i class="fa-regular fa-pen-to-square"></i> Sửa
                    </button>
                    <button type="button" onclick="copyPropertySeoLink(${p.id}, this)" style="padding:5px 9px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11px;font-weight:700;cursor:pointer;" title="Copy đường dẫn SEO">
                      <i class="fa-solid fa-link"></i> SEO Link
                    </button>
                    <button type="button" onclick="toggleHideMemberListing(${p.id})" style="padding:5px 9px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#64748b;font-size:11px;font-weight:700;cursor:pointer;">
                      ${p.isHidden ? "Hiện lại" : "Ẩn tin"}
                    </button>
                    <button type="button" onclick="openPropertyDetailView(${p.id})" style="padding:5px 9px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#0f172a;font-size:11px;font-weight:700;cursor:pointer;">
                      Xem
                    </button>
                  </div>
                </td>
              </tr>
            `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "appointments") {
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:6px;">Lịch Hẹn Xem Phòng Từ Khách Thuê Qua Zalo (${String(PORTAL_DATA.appointments.length).padStart(2, "0")} lịch)</h3>
        <p style="font-size:13px;color:#64748b;margin-bottom:16px;">Đồng bộ trực tiếp khi khách thuê bấm "Gửi lịch hẹn qua Zalo Chủ Nhà" trên Trang Bài Viết của bạn</p>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Khách đặt hẹn</th>
              <th>Bất động sản</th>
              <th>Thời gian hẹn xem</th>
              <th>Trạng thái</th>
              <th>Phản hồi Zalo</th>
            </tr>
          </thead>
          <tbody>
            ${PORTAL_DATA.appointments.map((a) => `
              <tr>
                <td><strong>${a.guestName}</strong><br><small class="tabular-nums" style="color:#0284c7;">SĐT Zalo: ${formatPhone433(a.guestPhone)}</small></td>
                <td><a href="javascript:void(0)" onclick="openPropertyDetailView(${a.propId})" style="color:#0f172a;font-weight:700;text-decoration:none;">#${a.propId} • ${a.propTitle}</a></td>
                <td><strong>${a.slot}</strong></td>
                <td>
                  ${a.status === "confirmed"
                    ? `<span style="padding:4px 9px;border-radius:99px;background:#ecfdf5;color:#059669;font-size:11px;font-weight:800;">Đã chốt lịch</span>`
                    : `<span style="padding:4px 9px;border-radius:99px;background:#fef3c7;color:#b45309;font-size:11px;font-weight:800;">Chờ xác nhận</span>`}
                </td>
                <td>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <button type="button" onclick="confirmMemberAppointment('${a.id}')" class="hsp-btn-apply" style="padding:6px 12px;font-size:11.5px;${a.status === "confirmed" ? "background:#059669;" : ""}">
                      ${a.status === "confirmed" ? "Đã xác nhận ✓" : "Xác nhận hẹn"}
                    </button>
                    <a href="https://zalo.me/${a.guestPhone.replace(/\D/g, "")}" target="_blank" style="color:#0284c7;font-weight:800;font-size:12px;text-decoration:none;">Chat Zalo</a>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "wallet") {
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Lịch Sử Giao Dịch Ví Đăng Tin & Hóa Đơn Thuế VAT (8%)</h3>
            <small style="color:#64748b;">Tự động cộng tiền tức thì khi nạp VietQR và khấu trừ minh bạch kèm VAT 8% khi xuất bản tin đăng</small>
          </div>
          <button type="button" class="hsp-btn-apply" onclick="openWalletModal()"><i class="fa-solid fa-qrcode"></i> Nạp thêm Ví</button>
        </div>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Mã GD</th>
              <th>Thời gian</th>
              <th>Nội dung giao dịch</th>
              <th>Thuế VAT (8%)</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            ${PORTAL_DATA.transactions.map((t) => `
              <tr>
                <td><strong>${t.code}</strong></td>
                <td>${t.time}</td>
                <td>${t.desc}</td>
                <td>${t.vat ? new Intl.NumberFormat("vi-VN").format(t.vat) + "đ" : "-"}</td>
                <td><strong style="color:${t.type === "credit" ? "#059669" : "#ef4444"};">${t.type === "credit" ? "+" : ""}${new Intl.NumberFormat("vi-VN").format(t.amount)}đ</strong></td>
                <td><span style="color:#059669;font-weight:800;">${t.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "seo-tools") {
    const myProps = PROPERTIES.slice(0, 6);
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="margin-bottom:16px;">
          <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Công Cụ Tối Ưu SEO Link, SEO Vị Trí & SEO Giá Thành Cho Tin Đăng</h3>
          <small style="color:#64748b;">Mỗi tin đăng tự động sinh 3 lớp đường dẫn thân thiện (SEO Bài viết, SEO Phường/Xã, SEO Phân khúc giá) giúp lên Top Google nhanh chóng</small>
        </div>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Mã & Tiêu đề tin</th>
              <th>SEO Vị trí (Phường/Xã)</th>
              <th>SEO Giá thành</th>
              <th>Đường dẫn thân thiện (Friendly URL)</th>
              <th>Chia sẻ nhanh</th>
            </tr>
          </thead>
          <tbody>
            ${myProps.map((p) => {
              const seoUrl = buildPropertySeoUrl(p);
              const wardUrl = `/cho-thue-${p.category}-${toVietnameseSlug(p.ward)}`;
              const priceUrl = `/cho-thue-${p.category}-${getPriceBracketSlug(p.price)}`;
              return `
                <tr>
                  <td><strong>#${p.id}</strong> • ${p.title.slice(0, 38)}...</td>
                  <td><a href="javascript:void(0)" onclick="navigateTo('${wardUrl}')" class="pd-seo-tag-pill">${p.ward}</a></td>
                  <td><a href="javascript:void(0)" onclick="navigateTo('${priceUrl}')" class="pd-seo-tag-pill">${p.priceText}/Tháng</a></td>
                  <td><code style="font-size:11px;color:#059669;background:#f0fdf4;padding:4px 8px;border-radius:6px;display:inline-block;max-width:310px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${seoUrl.replace("#", "")}</code></td>
                  <td>
                    <button type="button" onclick="copyPropertySeoLink(${p.id}, this)" class="hsp-btn-apply" style="padding:6px 12px;font-size:11.5px;">
                      <i class="fa-solid fa-copy"></i> Copy Link
                    </button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else {
    const curName = STATE.auth?.displayName || "Chính chủ Minh Quân";
    const curPhone = formatPhone433(STATE.auth?.phone || "0906 344 877");
    const curEmail = STATE.auth?.email || (STATE.auth?.identity?.includes("@") ? STATE.auth.identity : "thanhvien@staymap.vn");
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:16px;">Thông Tin Hồ Sơ Tài Khoản & Bảo Mật Mật Khẩu</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:760px;">
          <div>
            <label class="post-field-label">Họ và tên hiển thị trên Bài viết *</label>
            <input type="text" id="memProfileName" class="post-input" value="${curName}">
          </div>
          <div>
            <label class="post-field-label">Số điện thoại & Zalo nhận khách *</label>
            <input type="tel" id="memProfilePhone" class="post-input tabular-nums" value="${curPhone}">
          </div>
          <div>
            <label class="post-field-label">Email nhận hóa đơn VAT & thông báo</label>
            <input type="email" id="memProfileEmail" class="post-input" value="${curEmail}">
          </div>
          <div>
            <label class="post-field-label">Đổi mật khẩu mới (Để trống nếu giữ nguyên)</label>
            <input type="password" id="memProfileNewPwd" class="post-input" placeholder="Nhập mật khẩu mới ≥ 6 ký tự...">
          </div>
          <div style="grid-column:1/-1;">
            <label class="post-field-label">Trạng thái định danh Chính chủ & Quyền tài khoản</label>
            <div style="padding:10px 14px;border-radius:10px;background:#ecfdf5;border:1px solid #a7f3d0;color:#059669;font-weight:800;font-size:13px;">
              <i class="fa-solid fa-shield-check"></i> Đã xác thực (${STATE.auth?.verifiedVia || "Thành viên xác thực"}) • Quyền: ${(STATE.auth?.role || "member").toUpperCase()}
            </div>
          </div>
        </div>
        <button type="button" class="hsp-btn-apply" style="margin-top:18px;" onclick="saveMemberProfileSettings()">
          <i class="fa-solid fa-floppy-disk"></i> Lưu thay đổi hồ sơ
        </button>
      </div>
    `;
  }
}

// ==========================================================================
// ADMIN CONTROL CENTER (5 FULL MODULES)
// ==========================================================================
function syncAdminKpis() {
  const accounts = getAccountsStore();
  const activeProps = PROPERTIES.filter((p) => !p.isHidden);
  const kpiActive = document.getElementById("adminKpiActiveVip");
  if (kpiActive) kpiActive.textContent = `${activeProps.length} tin`;
  const kpiUsers = document.getElementById("adminKpiUsers");
  if (kpiUsers) kpiUsers.textContent = `${String(accounts.length).padStart(2, "0")} tài khoản`;
  const titleEl = document.getElementById("adminSidebarTitle");
  if (titleEl && STATE.auth?.displayName) titleEl.textContent = STATE.auth.displayName.toUpperCase();
}

function adminChangeListingTier(propId, newZoneIdStr) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  const z = STUDIO_ZONES.find((x) => x.id === Number(newZoneIdStr));
  if (!item || !z) return;
  item.zoneId = z.id;
  item.tier = z.tier;
  item.mapTier = z.mapTier;
  item.badge = z.badge || z.name;
  item.badgeClass = z.badgeClass;
  item.isVipPin = z.id === 1;
  saveListingOverrideRecord(item.id, {
    zoneId: item.zoneId,
    tier: item.tier,
    mapTier: item.mapTier,
    badge: item.badge,
    badgeClass: item.badgeClass,
    isVipPin: item.isVipPin
  });
  renderAllHomeGrids();
  updateMapPins("all");
  updateMapFilterChipCounts();
  initMegaSearchSync();
  switchAdminTab(STATE.activeAdminTab || "moderation");
  showCttNotice("Đã đổi hạng gói VIP", `Tin #${item.id} đã chuyển sang gói "${z.name}".`);
}

function adminChangeListingSticker(propId, stickerVal) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (!item) return;
  item.sticker = stickerVal || null;
  saveListingOverrideRecord(item.id, { sticker: item.sticker });
  renderAllHomeGrids();
  switchAdminTab(STATE.activeAdminTab || "moderation");
  showCttNotice("Đã cập nhật nhãn dán", `Tin #${item.id}: ${item.sticker ? `Nhãn ${item.sticker.toUpperCase()}` : "Đã gỡ nhãn dán"}.`);
}

function adminDeleteListingNow(propId) {
  const idx = PROPERTIES.findIndex((p) => p.id === Number(propId));
  if (idx < 0) return;
  PROPERTIES.splice(idx, 1);
  saveListingOverrideRecord(propId, null, true);
  renderAllHomeGrids();
  updateMapPins("all");
  updateMapFilterChipCounts();
  initMegaSearchSync();
  syncAdminKpis();
  switchAdminTab(STATE.activeAdminTab || "all-listings");
  showCttNotice("Đã xóa tin đăng", `Mã tin #${propId} đã được gỡ khỏi hệ thống.`);
}

function approveAdminListing(propId, btnEl) {
  const item = PROPERTIES.find((p) => p.id === Number(propId));
  if (item) {
    item.verified = true;
    saveListingOverrideRecord(item.id, { verified: true });
  }
  btnEl.innerHTML = '<i class="fa-solid fa-check-double"></i> Đã duyệt lên sóng';
  btnEl.style.background = "#0f172a";
  btnEl.style.color = "#ffd700";
  showCttNotice("Đã duyệt tin đăng", `Mã tin #${propId} đã được xác thực lên sóng.`);
}

function adminCreateAccountNow() {
  const idVal = (document.getElementById("admNewIdentity")?.value || "").trim();
  const nameVal = (document.getElementById("admNewName")?.value || "").trim();
  const pwdVal = (document.getElementById("admNewPwd")?.value || "").trim();
  const roleVal = document.getElementById("admNewRole")?.value || "member";
  if (!idVal || !nameVal || !pwdVal) {
    showCttNotice("Thiếu thông tin", "Vui lòng nhập đầy đủ Tên đăng nhập/Email/SĐT, Họ tên hiển thị và Mật khẩu.");
    return;
  }
  upsertAccountRecord({
    identity: idVal,
    password: pwdVal,
    role: roleVal,
    displayName: nameVal,
    verifiedVia: roleVal === "admin" ? "Admin 2FA" : "Admin cấp phát",
    memberCode: roleVal === "admin" ? `#ADM-${Math.floor(100 + Math.random() * 899)}` : `#CTT-${Math.floor(1000 + Math.random() * 8999)}`
  });
  syncAdminKpis();
  switchAdminTab("users");
  showCttNotice("Đã tạo tài khoản mới", `Tài khoản "${idVal}" (${roleVal.toUpperCase()}) đã sẵn sàng đăng nhập.`);
}

function goToAdminListingsPage(page) {
  PORTAL_DATA.adminListingsPage = Number(page) || 1;
  switchAdminTab("all-listings");
}

function adminToggleUserRole(identity) {
  const list = getAccountsStore();
  const idx = list.findIndex((a) => normalizeAuthIdentity(a.identity) === normalizeAuthIdentity(identity));
  if (idx < 0) return;
  list[idx].role = list[idx].role === "admin" ? "member" : "admin";
  saveAccountsStore(list);
  switchAdminTab("users");
}

function switchAdminTab(tabName, btnEl) {
  STATE.activeAdminTab = tabName;
  if (btnEl) {
    document.querySelectorAll("#view-admin .portal-nav-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  syncAdminKpis();
  const container = document.getElementById("adminPortalMainContent");
  if (!container) return;

  if (tabName === "moderation") {
    const queue = PROPERTIES.slice(0, 6);
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Hàng Đợi Kiểm Duyệt Tin Đăng, Đổi Hạng VIP & Gắn Nhãn Dán</h3>
            <small style="color:#64748b;">Admin có thể đổi hạng gói hiển thị (6 khu vực) hoặc gắn Nhãn Dán trực tiếp cho bất kỳ tin nào</small>
          </div>
          <span style="padding:6px 14px;border-radius:99px;background:#ecfdf5;color:#059669;font-size:12px;font-weight:800;">
            <i class="fa-solid fa-robot"></i> AI Pre-Check: Hoạt động 100%
          </span>
        </div>

        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Tin đăng</th>
              <th>Chủ nhà / SĐT</th>
              <th>Đổi Gói Hiển Thị (6 Khu vực)</th>
              <th>Nhãn Dán</th>
              <th>Quyết định của Admin</th>
            </tr>
          </thead>
          <tbody>
            ${queue.map((p) => {
              const curZoneId = p.zoneId || (p.tier === "spotlight" ? 2 : p.tier === "featured" ? 3 : p.tier === "prime" ? 5 : 4);
              return `
                <tr id="adminModRow${p.id}">
                  <td>
                    <div style="display:flex;align-items:center;gap:12px;">
                      <img src="${p.image}" alt="${p.title}" style="width:68px;height:48px;border-radius:8px;object-fit:cover;">
                      <div>
                        <strong style="color:#0f172a;display:block;font-size:13px;max-width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">#${p.id} • ${p.title}</strong>
                        <span style="color:var(--ctt-orange);font-weight:800;font-size:12.5px;">${p.priceText}/Tháng • ${p.area}m²</span>
                        <small style="color:#64748b;"> • ${p.ward}, ${p.city}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <strong>${p.host}</strong>
                    <small style="display:block;color:#64748b;">${p.phone}</small>
                  </td>
                  <td>
                    <select class="post-input" style="padding:6px 8px;font-size:12px;" onchange="adminChangeListingTier(${p.id}, this.value)">
                      ${STUDIO_ZONES.map((z) => `<option value="${z.id}" ${curZoneId === z.id ? "selected" : ""}>${z.name}</option>`).join("")}
                    </select>
                  </td>
                  <td>
                    <select class="post-input" style="padding:6px 8px;font-size:12px;" onchange="adminChangeListingSticker(${p.id}, this.value)">
                      <option value="" ${!p.sticker ? "selected" : ""}>-- Không nhãn --</option>
                      <option value="hot" ${p.sticker === "hot" ? "selected" : ""}>HOT</option>
                      <option value="urgent" ${p.sticker === "urgent" ? "selected" : ""}>Giảm Sâu</option>
                      <option value="promo" ${p.sticker === "promo" ? "selected" : ""}>Ưu Đãi</option>
                    </select>
                  </td>
                  <td>
                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                      <button type="button" onclick="approveAdminListing(${p.id}, this)" style="padding:7px 12px;border-radius:8px;border:none;background:#059669;color:#fff;font-size:11.5px;font-weight:800;cursor:pointer;">
                        <i class="fa-solid fa-check"></i> Duyệt
                      </button>
                      <button type="button" onclick="openEditListingModal(${p.id})" style="padding:7px 10px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11.5px;font-weight:700;cursor:pointer;">
                        Sửa
                      </button>
                      <button type="button" onclick="openPropertyDetailView(${p.id})" style="padding:7px 10px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11.5px;font-weight:700;cursor:pointer;">
                        Xem
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "all-listings") {
    const kw = (PORTAL_DATA.adminSearchKw || "").toLowerCase();
    const catF = PORTAL_DATA.adminCatFilter || "all";
    const list = PROPERTIES.filter((p) => {
      if (catF !== "all" && p.category !== catF) return false;
      if (kw && !String(p.id).includes(kw) && !p.title.toLowerCase().includes(kw) && !p.ward.toLowerCase().includes(kw)) return false;
      return true;
    });
    const adminPageSize = 30;
    const totalAdminPages = Math.max(1, Math.ceil(list.length / adminPageSize));
    const curAdminPage = Math.min(Math.max(1, Number(PORTAL_DATA.adminListingsPage) || 1), totalAdminPages);
    PORTAL_DATA.adminListingsPage = curAdminPage;
    const pageRows = list.slice((curAdminPage - 1) * adminPageSize, curAdminPage * adminPageSize);

    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Quản Lý Toàn Bộ Tin Đăng Trên Hệ Thống (${new Intl.NumberFormat("vi-VN").format(list.length)}/${new Intl.NumberFormat("vi-VN").format(PROPERTIES.length)} tin)</h3>
            <small style="color:#64748b;">Tra cứu theo mã tin, tiêu đề, khu vực • Hiển thị trang ${curAdminPage}/${totalAdminPages} (${adminPageSize} tin/trang)</small>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <input type="text" class="post-input" style="width:220px;padding:7px 12px;font-size:12.5px;" placeholder="Tìm mã tin, tên đường, phường..." value="${PORTAL_DATA.adminSearchKw || ""}" oninput="PORTAL_DATA.adminSearchKw=this.value;PORTAL_DATA.adminListingsPage=1;switchAdminTab('all-listings')">
            <select class="post-input" style="width:180px;padding:7px 10px;font-size:12.5px;" onchange="PORTAL_DATA.adminCatFilter=this.value;PORTAL_DATA.adminListingsPage=1;switchAdminTab('all-listings')">
              <option value="all" ${catF === "all" ? "selected" : ""}>Tất cả 6 loại hình</option>
              <option value="phong-tro" ${catF === "phong-tro" ? "selected" : ""}>Phòng Trọ / CHDV</option>
              <option value="nha-o" ${catF === "nha-o" ? "selected" : ""}>Nhà Nguyên Căn</option>
              <option value="can-ho-chung-cu" ${catF === "can-ho-chung-cu" ? "selected" : ""}>Căn Hộ Chung Cư</option>
              <option value="mat-bang-van-phong" ${catF === "mat-bang-van-phong" ? "selected" : ""}>Mặt Bằng Văn Phòng</option>
              <option value="bai-dat-kho-xuong" ${catF === "bai-dat-kho-xuong" ? "selected" : ""}>Đất - Xưởng, Kho - Bãi</option>
              <option value="homestay-airbnb" ${catF === "homestay-airbnb" ? "selected" : ""}>HomeStay / Airbnb</option>
            </select>
          </div>
        </div>

        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Mã & Bất động sản</th>
              <th>Danh mục & Vị trí</th>
              <th>Giá & Điện/Nước</th>
              <th>Hạng VIP</th>
              <th>Thao tác Admin</th>
            </tr>
          </thead>
          <tbody>
            ${pageRows.map((p) => {
              const vip = getPropertyVipDisplay(p);
              return `
                <tr>
                  <td>
                    <strong style="color:#0f172a;display:block;font-size:13px;max-width:260px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">#${p.id} • ${p.title}</strong>
                    <small style="color:#059669;font-family:monospace;font-size:10.5px;">${buildPropertySeoUrl(p).replace("#", "").slice(0, 48)}...</small>
                  </td>
                  <td>
                    <strong>${p.categoryLabel}</strong>
                    <small style="display:block;color:#64748b;">${p.ward}, ${p.city}</small>
                  </td>
                  <td>
                    <strong style="color:var(--ctt-orange);">${p.priceText}/Tháng</strong>
                    <small style="display:block;color:#64748b;">${p.elec} • ${p.water}</small>
                  </td>
                  <td>
                    ${vip.label ? `<span class="lc-vip-tag ${vip.badgeClass}" style="position:static;font-size:10px;padding:3px 8px;">${vip.label}</span>` : `<span style="font-size:11px;color:#64748b;">Cơ bản</span>`}
                  </td>
                  <td>
                    <div style="display:flex;gap:5px;">
                      <button type="button" onclick="openEditListingModal(${p.id})" style="padding:5px 9px;border-radius:7px;border:1px solid #cbd5e1;background:#fff;font-size:11px;font-weight:700;cursor:pointer;">Sửa</button>
                      <button type="button" onclick="openPropertyDetailView(${p.id})" style="padding:5px 9px;border-radius:7px;border:1px solid #cbd5e1;background:#fff;font-size:11px;font-weight:700;cursor:pointer;">Xem</button>
                      <button type="button" onclick="adminDeleteListingNow(${p.id})" style="padding:5px 9px;border-radius:7px;border:1px solid #fecaca;background:#fef2f2;color:#dc2626;font-size:11px;font-weight:700;cursor:pointer;">Xóa</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
        <div class="ctt-pagination-bar">${renderCttPaginationHTML(curAdminPage, totalAdminPages, "goToAdminListingsPage")}</div>
      </div>
    `;
  } else if (tabName === "revenue") {
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:14px;">Báo Cáo Doanh Thu Theo 6 Gói Hiển Thị, Nhãn Dán & Thuế VAT 8% (Tháng 11/2026)</h3>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Hạng gói & Dịch vụ</th>
              <th>Đơn giá chuẩn</th>
              <th>Số tin đang chạy</th>
              <th>Doanh thu trước thuế</th>
              <th>Thuế VAT (8%)</th>
              <th>Tổng thu (Gồm VAT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="lc-vip-tag tag-dacquyen" style="position:static;font-size:10px;padding:3px 9px;">✦ ĐẶC QUYỀN</span> <strong>Banner Đặc Quyền (.sv1)</strong></td>
              <td>50.000đ/ngày</td>
              <td>18 tin VIP</td>
              <td>60.000.000đ</td>
              <td>4.800.000đ</td>
              <td><strong style="color:var(--ctt-orange);">64.800.000đ</strong></td>
            </tr>
            <tr>
              <td><span class="lc-vip-tag tag-vip1" style="position:static;font-size:10px;padding:3px 9px;">✦ VIP 1</span> <strong>TOP 1 Hiển Thị (Spotlight)</strong></td>
              <td>35.000đ/ngày</td>
              <td>94 tin VIP</td>
              <td>53.935.000đ</td>
              <td>4.315.000đ</td>
              <td><strong>58.250.000đ</strong></td>
            </tr>
            <tr>
              <td><span class="lc-vip-tag tag-vip2" style="position:static;font-size:10px;padding:3px 9px;">• VIP 2</span> <strong>TOP 2 Nổi Bật (Featured)</strong></td>
              <td>25.000đ/ngày</td>
              <td>136 tin VIP</td>
              <td>38.333.000đ</td>
              <td>3.067.000đ</td>
              <td><strong>41.400.000đ</strong></td>
            </tr>
            <tr>
              <td><span class="lc-vip-tag tag-vip3" style="position:static;font-size:10px;padding:3px 9px;">VIP 3</span> <strong>TOP 3 Hiệu Quả (Prime)</strong></td>
              <td>15.000đ/ngày</td>
              <td>94 tin VIP</td>
              <td>15.000.000đ</td>
              <td>1.200.000đ</td>
              <td><strong>16.200.000đ</strong></td>
            </tr>
            <tr>
              <td><strong>5. Tin Cơ Bản & Nhãn Dán (1.000đ/ngày)</strong></td>
              <td>1.000đ/ngày</td>
              <td>412 tin</td>
              <td>5.370.000đ</td>
              <td>430.000đ</td>
              <td><strong>5.800.000đ</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "users") {
    const accounts = getAccountsStore();
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="margin-bottom:18px;padding:16px;background:#f8fafc;border-radius:14px;border:1px solid #e2e8f0;">
          <h4 style="font-size:14.5px;font-weight:900;color:#0f172a;margin:0 0 10px;"><i class="fa-solid fa-user-plus" style="color:var(--ctt-orange);margin-right:6px;"></i>Tạo Nhanh Tài Khoản Thành Viên / Admin Mới</h4>
          <div style="display:grid;grid-template-columns:1.2fr 1.2fr 1fr 0.8fr auto;gap:10px;align-items:center;">
            <input type="text" id="admNewIdentity" class="post-input" placeholder="Tên đăng nhập / SĐT / Email">
            <input type="text" id="admNewName" class="post-input" placeholder="Họ tên hiển thị (VD: Duy Quang)">
            <input type="text" id="admNewPwd" class="post-input" placeholder="Mật khẩu">
            <select id="admNewRole" class="post-input">
              <option value="member">Thành viên (Member)</option>
              <option value="admin">Quản trị viên (Admin)</option>
            </select>
            <button type="button" class="hsp-btn-apply" style="padding:10px 16px;white-space:nowrap;" onclick="adminCreateAccountNow()">
              <i class="fa-solid fa-plus"></i> Tạo tài khoản
            </button>
          </div>
        </div>

        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:14px;">Danh Sách Tài Khoản Hệ Thống (${accounts.length} tài khoản)</h3>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Tài khoản (Identity)</th>
              <th>Tên hiển thị</th>
              <th>Mã định danh</th>
              <th>Quyền hạn (Role)</th>
              <th>Phương thức xác thực</th>
              <th>Thao tác phân quyền</th>
            </tr>
          </thead>
          <tbody>
            ${accounts.map((acc) => `
              <tr>
                <td><strong>${acc.identity}</strong></td>
                <td><strong>${acc.displayName}</strong></td>
                <td><span style="font-family:monospace;color:#64748b;">${acc.memberCode || "#CTT-8888"}</span></td>
                <td>
                  <span style="padding:4px 10px;border-radius:99px;background:${acc.role === "admin" ? "#0f172a" : "#ecfdf5"};color:${acc.role === "admin" ? "#ffd700" : "#059669"};font-size:11px;font-weight:800;">
                    ${acc.role === "admin" ? "ADMIN TOÀN QUYỀN" : "THÀNH VIÊN"}
                  </span>
                </td>
                <td><span style="color:#059669;font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${acc.verifiedVia || "Đã xác thực"}</span></td>
                <td>
                  <button type="button" onclick="adminToggleUserRole('${acc.identity}')" style="padding:6px 11px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11.5px;font-weight:700;cursor:pointer;">
                    <i class="fa-solid fa-repeat"></i> Đổi sang ${acc.role === "admin" ? "Member" : "Admin"}
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "post-schema") {
    const catStats = [
      { key: "phong-tro", label: "Phòng Trọ / CHDV" },
      { key: "nha-o", label: "Nhà Nguyên Căn" },
      { key: "can-ho-chung-cu", label: "Căn Hộ Chung Cư" },
      { key: "mat-bang-van-phong", label: "Mặt Bằng Văn Phòng" },
      { key: "bai-dat-kho-xuong", label: "Đất - Xưởng, Kho - Bãi" },
      { key: "homestay-airbnb", label: "HomeStay / Airbnb" }
    ].map((c) => ({
      ...c,
      count: PROPERTIES.filter((p) => p.category === c.key).length
    }));
    const totalWards = Object.values(STUDIO_WARDS_BY_CITY).flat().length;
    const totalStreets = Array.from(new Set(Object.values(STUDIO_STREETS_BY_WARD).flat())).length;
    const promoList = Object.values(STUDIO_PROMO_CODES);
    const fmtVnd = (n) => (n === 0 ? "0đ" : new Intl.NumberFormat("vi-VN").format(n) + "đ");

    container.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;" class="tabular-nums">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 16px;">
          <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Bước 1 • Loại Hình & Địa Bàn</div>
          <div style="font-size:22px;font-weight:900;color:#0f172a;margin:4px 0;">6 Loại • ${STUDIO_CITIES.length} Tỉnh/TP</div>
          <div style="font-size:11.5px;color:var(--ctt-orange);font-weight:700;">${totalWards} Phường • ${totalStreets} Đường • ${STUDIO_PROJECTS.length} Dự Án</div>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 16px;">
          <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Bước 2 • Giá & Chi Phí</div>
          <div style="font-size:22px;font-weight:900;color:#0f172a;margin:4px 0;">12 Trường Dữ Liệu</div>
          <div style="font-size:11.5px;color:var(--ctt-orange);font-weight:700;">Giá, Cọc, PN/WC, Điện/Nước, Phụ Thu</div>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 16px;">
          <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Bước 3 • AI, Media & Tiện Ích</div>
          <div style="font-size:22px;font-weight:900;color:#0f172a;margin:4px 0;">5 Mẫu AI • 4–9 Ảnh</div>
          <div style="font-size:11.5px;color:var(--ctt-orange);font-weight:700;">6 Tiện Ích • 6 Dịch Vụ • 5 Thông Số</div>
        </div>
        <div style="background:#0f172a;border:1px solid #1e293b;border-radius:14px;padding:14px 16px;color:#fff;">
          <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;">Bước 4 • Gói Tin & Khuyến Mãi</div>
          <div style="font-size:22px;font-weight:900;color:#fff;margin:4px 0;">${STUDIO_ZONES.length} Khu Vực • ${promoList.length} Mã KM</div>
          <div style="font-size:11.5px;color:var(--ctt-orange);font-weight:700;">4 Mốc Ngày • 3 Nhãn Dán • VAT 8%</div>
        </div>
      </div>

      <div class="portal-table-card" style="margin-bottom:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
          <div>
            <h3 style="font-size:16.5px;font-weight:900;color:#0f172a;">1. Nhóm Phân Loại Bất Động Sản, Địa Bàn 34 Tỉnh/TP & Dự Án (Bước 1)</h3>
            <small style="color:#64748b;">Tổng hợp 6 danh mục tin, ${STUDIO_CITIES.length} Tỉnh/TP (NQ 202/2025/QH15), ${totalWards} Phường/Xã mới, ${totalStreets} Tên Đường và ${STUDIO_PROJECTS.length} Dự án chung cư chuẩn tọa độ GPS</small>
          </div>
          <span style="padding:4px 10px;border-radius:99px;background:linear-gradient(135deg,#f15a22,#ff9d00);color:#fff;font-size:11px;font-weight:800;">Tổng ${PROPERTIES.length} tin đang hiển thị</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1.2fr;gap:14px;">
          <table class="portal-table tabular-nums">
            <thead>
              <tr>
                <th>Loại Hình BĐS (6)</th>
                <th>Slug URL</th>
                <th style="text-align:right;">Số Tin</th>
              </tr>
            </thead>
            <tbody>
              ${catStats.map((c) => `
                <tr>
                  <td><strong>${c.label}</strong></td>
                  <td><code style="font-size:11px;color:#475569;background:#f8fafc;padding:2px 6px;border-radius:5px;">/${c.key}</code></td>
                  <td style="text-align:right;"><strong style="color:var(--ctt-orange);">${c.count}</strong></td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div style="max-height:320px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:10px;">
            <table class="portal-table tabular-nums" style="margin:0;">
              <thead style="position:sticky;top:0;background:#f8fafc;z-index:1;">
                <tr>
                  <th>Dự Án Chuẩn (${STUDIO_PROJECTS.length})</th>
                  <th>Địa Chỉ Gốc Đồng Bộ</th>
                  <th>Tọa Độ Map</th>
                </tr>
              </thead>
              <tbody>
                ${STUDIO_PROJECTS.map((pr) => `
                  <tr>
                    <td><strong>${pr.label}</strong></td>
                    <td style="font-size:12px;color:#475569;">${pr.streetNumber} ${pr.street}, ${pr.ward}, ${pr.city}</td>
                    <td style="font-size:11px;color:#64748b;">${pr.coords.join(", ")}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div class="portal-table-card" style="margin-bottom:0;">
          <h3 style="font-size:16px;font-weight:900;color:#0f172a;margin-bottom:4px;">2. Nhóm Giá Thuê, Kết Cấu & Chi Phí (Bước 2)</h3>
          <small style="color:#64748b;display:block;margin-bottom:12px;">Gom toàn bộ thông số tài chính, đặt cọc và chi phí sinh hoạt minh bạch</small>
          <table class="portal-table tabular-nums">
            <thead>
              <tr>
                <th>Nhóm Mục</th>
                <th>Trường Dữ Liệu & Tùy Chọn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Giá & Diện Tích</strong></td>
                <td style="font-size:12px;color:#334155;">Giá Thuê (Triệu/Tháng) • Diện Tích (m²) • Tiền Cọc (${STUDIO_DEPOSITS.map((x) => x.label).join(", ")})</td>
              </tr>
              <tr>
                <td><strong>Kết Cấu Phòng</strong></td>
                <td style="font-size:12px;color:#334155;">Phòng Ngủ (nhập số trực tiếp, mặc định 1) • Nhà Vệ Sinh (nhập số trực tiếp, mặc định 1)</td>
              </tr>
              <tr>
                <td><strong>Chi Phí Cơ Bản</strong></td>
                <td style="font-size:12px;color:#334155;">Điện (k/kWh hoặc Nhà nước) • Nước (k/Người, k/m³ hoặc Nhà nước)</td>
              </tr>
              <tr>
                <td><strong>Chi Phí Khác</strong></td>
                <td style="font-size:12px;color:#334155;"><strong>Trọn Gói Chi Phí Khác</strong> (loại trừ 4 mục lẻ) hoặc tách: Internet, Giặt Sấy (Người/1 Lần/Kg/Phòng), Phí Rác, Phí Xe (Xe/Người)</td>
              </tr>
              <tr>
                <td><strong>Giới Hạn Người</strong></td>
                <td style="font-size:12px;color:#334155;">1–5 Người/Phòng • Phụ thu thêm người (diễn giải từ người thứ N+1)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="portal-table-card" style="margin-bottom:0;">
          <h3 style="font-size:16px;font-weight:900;color:#0f172a;margin-bottom:4px;">3. Nhóm Nội Dung AI, Thông Số & Tiện Ích (Bước 3)</h3>
          <small style="color:#64748b;display:block;margin-bottom:12px;">Cấu trúc bài đăng tự động cập nhật, hình ảnh kéo thả và danh mục tiện ích</small>
          <table class="portal-table tabular-nums">
            <thead>
              <tr>
                <th>Nhóm Mục</th>
                <th>Chi Tiết Cấu Hình</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AI Copywriter</strong></td>
                <td style="font-size:12px;color:#334155;">Tiêu Đề (≤ 70 ký tự) • Mô Tả 5 đoạn • <strong>5 mẫu văn phong AI</strong> tự viết lại theo dữ liệu thực</td>
              </tr>
              <tr>
                <td><strong>Thông Số BĐS</strong></td>
                <td style="font-size:12px;color:#334155;">Nội Thất (${STUDIO_FURNITURE_OPTS.map((x) => x.label).join(", ")}) • Số Tầng (1–6+ Tầng) • Hướng Nhà (8 hướng) • Mặt Tiền / Đường Vào (m²)</td>
              </tr>
              <tr>
                <td><strong>Hình Ảnh & Video</strong></td>
                <td style="font-size:12px;color:#334155;">4–9 Hình ảnh (lưới 3 cột, kéo thả đổi thứ tự, ảnh #1 là Bìa) • Video ngắn (MP4)</td>
              </tr>
              <tr>
                <td><strong>Tiện Ích (6)</strong></td>
                <td style="font-size:12px;color:#334155;">Trường Học (Tên Trường / Mã Trường), Chợ / Siêu Thị, Bệnh Viện / Y Tế, Công Viên, Xe Bus, Bank / ATM</td>
              </tr>
              <tr>
                <td><strong>Dịch Vụ (6)</strong></td>
                <td style="font-size:12px;color:#334155;">Nhà Xe / Hầm Xe Rộng, Khu Giặt / Phơi / Sấy, Bảo Vệ / Camera An Ninh, Hệ Thống PCCC, Thang Máy, Quản Lý Khu Vực Chung</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="portal-table-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
          <div>
            <h3 style="font-size:16.5px;font-weight:900;color:#0f172a;">4. Nhóm Gói Hiển Thị, Ngày Đăng, Nhãn Dán & Mã Khuyến Mãi (Bước 4)</h3>
            <small style="color:#64748b;">Tổng hợp bảng giá 6 khu vực, 4 mốc ngày (mặc định 15 ngày), 3 nhãn dán và 4 mã khuyến mãi đang kích hoạt</small>
          </div>
          <span style="padding:4px 10px;border-radius:99px;background:#0f172a;color:#fff;font-size:11px;font-weight:800;">Công thức: (Gói + Nhãn − Ưu đãi) + VAT 8%</span>
        </div>
        <div style="display:grid;grid-template-columns:1.25fr 1fr;gap:14px;">
          <table class="portal-table tabular-nums">
            <thead>
              <tr>
                <th>6 Khu Vực Hiển Thị</th>
                <th>Đơn Giá / Ngày</th>
                <th>Nhãn Badge</th>
                <th>Mô Tả</th>
              </tr>
            </thead>
            <tbody>
              ${STUDIO_ZONES.map((z) => `
                <tr>
                  <td><strong>${z.name}</strong></td>
                  <td><strong style="color:var(--ctt-orange);">${fmtVnd(z.rate)}</strong></td>
                  <td><span style="font-size:10.5px;font-weight:800;padding:2px 7px;border-radius:5px;background:#f8fafc;border:1px solid #e2e8f0;color:#0f172a;">${z.badge || "Thường"}</span></td>
                  <td style="font-size:11.5px;color:#64748b;">${z.desc}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div style="display:flex;flex-direction:column;gap:12px;">
            <table class="portal-table tabular-nums">
              <thead>
                <tr>
                  <th>Mốc Ngày</th>
                  <th>Ưu Đãi</th>
                  <th>Ghi Chú</th>
                </tr>
              </thead>
              <tbody>
                ${STUDIO_DURATIONS.map((d) => `
                  <tr>
                    <td><strong>${d.label}</strong></td>
                    <td>${d.off ? `<span style="background:linear-gradient(135deg,#f15a22,#ff9d00);color:#fff;font-size:10.5px;font-weight:800;padding:1px 7px;border-radius:5px;">-${d.off}%</span>` : `<span style="color:#64748b;font-size:11.5px;">0%</span>`}</td>
                    <td style="font-size:11.5px;color:#64748b;">${d.days === 15 ? "Mặc định gói trả phí" : d.days === 3 ? "Mặc định tin miễn phí" : "Tùy chọn"}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>

            <table class="portal-table tabular-nums">
              <thead>
                <tr>
                  <th>Mã Khuyến Mãi</th>
                  <th>Mức Giảm</th>
                  <th>Nhãn Dán (1.000đ/ngày)</th>
                </tr>
              </thead>
              <tbody>
                ${promoList.map((pr, idx) => `
                  <tr>
                    <td><strong style="color:var(--ctt-orange);">${pr.code}</strong></td>
                    <td style="font-size:12px;font-weight:700;color:#0f172a;">${pr.desc}</td>
                    <td style="font-size:11.5px;color:#475569;">${STUDIO_STICKERS[idx] ? `${STUDIO_STICKERS[idx].name} — ${STUDIO_STICKERS[idx].hint}` : "—"}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  } else {
    const seoRoutes = [
      { type: "SEO Loại hình + Vị trí", url: "/cho-thue-phong-tro-p-cau-kieu", title: "Cho Thuê Phòng Trọ / CHDV Tại P. Cầu Kiệu (TP. Hồ Chí Minh)", status: "Indexed • 100/100" },
      { type: "SEO Loại hình + Giá thành", url: "/cho-thue-phong-tro-gia-duoi-4-trieu", title: "Cho Thuê Phòng Trọ / CHDV — Dưới 4 Triệu/tháng", status: "Indexed • 100/100" },
      { type: "SEO Nhà nguyên căn + Vị trí", url: "/cho-thue-nha-nguyen-can-p-hoa-hung", title: "Cho Thuê Nhà Nguyên Căn Tại P. Hòa Hưng (TP. Hồ Chí Minh)", status: "Indexed • 100/100" },
      { type: "SEO Căn hộ + Giá thành", url: "/cho-thue-can-ho-chung-cu-gia-tu-4-den-7-trieu", title: "Cho Thuê Căn Hộ Chung Cư — Từ 4 - 7 Triệu/tháng", status: "Indexed • 100/100" },
      { type: "SEO HomeStay / Airbnb", url: "/cho-thue-homestay-airbnb-p-nhieu-loc", title: "Cho Thuê HomeStay / Airbnb Tại P. Nhiêu Lộc (TP. Hồ Chí Minh)", status: "Indexed • 100/100" },
      { type: "SEO Khu vực Hà Nội", url: "/cho-thue-can-ho-chung-cu-tp-ha-noi", title: "Cho Thuê Căn Hộ Chung Cư Tại TP. Hà Nội", status: "Indexed • 100/100" }
    ];
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="margin-bottom:16px;">
          <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Quản Trị Hệ Thống SEO Link, SEO Vị Trí & SEO Giá Thành</h3>
          <small style="color:#64748b;">Tất cả Landing Page danh mục, phường/xã sáp nhập, khoảng giá và bài viết đều có cấu trúc URL không dấu thân thiện</small>
        </div>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Phân nhóm SEO</th>
              <th>Đường dẫn thân thiện (Friendly URL)</th>
              <th>Thẻ H1 & Meta Title tự động</th>
              <th>Điểm chuẩn SEO</th>
              <th>Kiểm tra</th>
            </tr>
          </thead>
          <tbody>
            ${seoRoutes.map((r) => `
              <tr>
                <td><strong>${r.type}</strong></td>
                <td><code style="font-size:11.5px;color:#059669;background:#f0fdf4;padding:4px 8px;border-radius:6px;">#${r.url}</code></td>
                <td>${r.title}</td>
                <td><span style="color:#059669;font-weight:800;"><i class="fa-solid fa-circle-check"></i> ${r.status}</span></td>
                <td>
                  <button type="button" onclick="navigateTo('${r.url}')" class="hsp-btn-apply" style="padding:6px 12px;font-size:11.5px;">
                    Mở trang SEO
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
}
