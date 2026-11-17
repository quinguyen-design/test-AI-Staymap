/* ==========================================================================
   CHOTHUETOT.VN — v3.0 NEXT-GEN LUXURY & TECH ENGINE (app.js)
   Authentic ChoThueTot Data, Real MapTiler Interactive Hero Map,
   3D VIP Exclusive Banner Slider (.sv1), Spotlight/Featured/Prime Grids,
   6-Tier Pricing & VietQR Wallet + Smart Post Listing Modal
   ========================================================================== */

// 1. BANNER ĐẶC QUYỀN (.sv1) — 3 EXCLUSIVE VIP SHOWCASE SLIDES
const VIP_EXCLUSIVE_SLIDES = [
  {
    id: 2078,
    slug: "/cho-thue-phong-tro-phuong-cau-kieu/kiot-cho-thue-khu-dan-cu-sam-uat-gan-cho-2078",
    title: "KIOT & STUDIO ĐẶC QUYỀN KHU DÂN CƯ SẦM UẤT GẦN CHỢ PHÚ NHUẬN — PHAN XÍCH LONG",
    price: "7.6 Triệu",
    unit: "| Tháng",
    location: "Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh",
    desc: "Không gian Kiot kết hợp Studio cao cấp ngay trục sầm uất Phan Xích Long – Cầu Kiệu. Mặt tiền thoáng rộng, lối đi riêng 24/24, trang bị sẵn nội thất chuẩn khách sạn, khóa vân tay 2 lớp, PCCC tự động. Phù hợp vừa ở vừa kinh doanh showroom/studio.",
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
    desc: "Căn hộ dịch vụ 30m² thiết kế Indochine hiện đại, ban công đón gió mát rượi ngay cầu Lê Văn Sỹ. Full nội thất cao cấp: Smart TV 55 inch, tủ lạnh Inverter, máy giặt sấy riêng, thang máy tốc độ cao, hầm xe rộng rãi.",
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
    desc: "Mặt bằng kho xưởng & showroom diện tích khủng 500m² ngay trung tâm Tân Quy – Tân Hưng Quận 7. Trần cao 8.5m, nền bê tông chịu lực, điện 3 pha hạ trạm riêng, đường xe container 40 feet ra vào 24/24 không cấm giờ.",
    area: "500m²",
    beds: "2 VP",
    baths: "3 WC",
    elec: "Giá nhà nước",
    water: "Giá nhà nước",
    phone: "0918 779 333",
    phoneMasked: "0918 779 ***",
    lat: 10.7438,
    lng: 106.7052,
    photos: [
      "https://chothuetot.vn/assets/images/properties/album_1791022210_7592.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791022894_6188.webp",
      "https://chothuetot.vn/assets/images/properties/album_1791021309_7046.webp"
    ]
  }
];

// 2. AUTHENTIC LISTINGS FOR SPOTLIGHT, FEATURED, PRIME & CATEGORIES
const PROPERTIES = [
  // --- SPOTLIGHT TIER (TOP 1 HIỂN THỊ) ---
  {
    id: 2078,
    tier: "spotlight",
    badge: "KIM CƯƠNG • TOP 1",
    badgeClass: "tag-top1",
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
    water: "100k/thg",
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
    badgeClass: "tag-top1",
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
    water: "100k/thg",
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
    badgeClass: "tag-top1",
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
    water: "100k/thg",
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
    badgeClass: "tag-top1",
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
    elec: "Giá nhà nước",
    water: "Giá nhà nước",
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
    badgeClass: "tag-top1",
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
    water: "100k/thg",
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
    badgeClass: "tag-top1",
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
    elec: "Giá nhà nước",
    water: "Giá nhà nước",
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
    badgeClass: "tag-top1",
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
    elec: "Giá nhà nước",
    water: "Giá nhà nước",
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
    badgeClass: "tag-top1",
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
    water: "Giá nhà nước",
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
    badgeClass: "tag-top2",
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
    water: "80k/thg",
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
    badgeClass: "tag-top2",
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
    water: "100k/thg",
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
    badgeClass: "tag-top2",
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
    water: "90k/thg",
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
    badgeClass: "tag-top2",
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
    water: "90k/thg",
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
    badgeClass: "tag-top2",
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
    water: "100k/thg",
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
    badgeClass: "tag-top2",
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
    elec: "Giá nhà nước",
    water: "Giá nhà nước",
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
    badgeClass: "tag-top2",
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
    elec: "Giá nhà nước",
    water: "Giá nhà nước",
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
    badgeClass: "tag-top2",
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
    water: "90k/thg",
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
    badgeClass: "tag-top3",
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
    water: "Giá nhà nước",
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
    badgeClass: "tag-top3",
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
    water: "80k/thg",
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
    badgeClass: "tag-top3",
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
    water: "Giá nhà nước",
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
    badgeClass: "tag-top3",
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
    water: "Giá nhà nước",
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
    tag: "Vàng • 50.000đ/ngày",
    desc: "Đẳng cấp chuyên nghiệp — Vị trí Slide VIP 1 độc quyền ngay đầu trang chủ",
    icon: "fa-crown",
    cardClass: "super-vip",
    badge: "ĐỘC QUYỀN VIP",
    packages: [
      { days: 1, price: 50000, save: "" },
      { days: 7, price: 332500, save: "-5%" },
      { days: 15, price: 675000, save: "-10%" },
      { days: 30, price: 1200000, save: "-20%" }
    ],
    features: [
      "Mục tiêu: Chuyên nghiệp & Thương hiệu lớn",
      "Hiển thị: Slide 3D Banner Trang Chủ (.sv1)",
      "List thứ tự: Hàng đầu tuyệt đối (Top 1)",
      "Sửa tin: Có (Miễn phí 3 lần đầu)",
      "Duyệt tin: Ưu tiên duyệt ngay lập tức",
      "Đẩy tin: Luôn giữ vị trí Top đầu",
      "Dán nhãn: Huy hiệu Vương Miện Vàng 3D",
      "CSKH & Voucher: Hỗ trợ 1-1 ưu tiên"
    ]
  },
  {
    zoneId: 2,
    name: "TOP 1 Hiển Thị",
    tag: "Bạc • 35.000đ/ngày",
    desc: "Dành cho Môi giới chuyên nghiệp & Chủ tòa nhà dịch vụ",
    icon: "fa-fire",
    cardClass: "vip1",
    badge: "SPOTLIGHT",
    packages: [
      { days: 1, price: 35000, save: "" },
      { days: 7, price: 232750, save: "-5%" },
      { days: 15, price: 472500, save: "-10%" },
      { days: 30, price: 840000, save: "-20%" }
    ],
    features: [
      "Mục tiêu: Hiển thị bứt phá",
      "Hiển thị: Khu vực Spotlight Trang Chủ",
      "List thứ tự: Ưu tiên cao (Top 2)",
      "Sửa tin: Có (Miễn phí 3 lần)",
      "Duyệt tin: Nhanh trong 5 phút",
      "Đẩy tin: Tự động đẩy tin mỗi ngày",
      "Dán nhãn: Nhãn Spotlight Cam Rực",
      "CSKH & Voucher: Tặng kèm mã giảm giá"
    ]
  },
  {
    zoneId: 3,
    name: "TOP 2 Nổi Bật",
    tag: "Nổi bật • 25.000đ/ngày",
    desc: "Nhiều người dùng lựa chọn nhất — Chốt khách nhanh mỗi ngày",
    icon: "fa-star",
    cardClass: "popular",
    badge: "PHỔ BIẾN NHẤT",
    packages: [
      { days: 1, price: 25000, save: "" },
      { days: 7, price: 166250, save: "-5%" },
      { days: 15, price: 337500, save: "-10%" },
      { days: 30, price: 600000, save: "-20%" }
    ],
    features: [
      "Mục tiêu: Tối ưu chi phí / Lượt gọi cao",
      "Hiển thị: Khu vực Featured Trang Chủ",
      "List thứ tự: Ưu tiên (Top 3)",
      "Sửa tin: Có (Miễn phí 3 lần)",
      "Duyệt tin: Nhanh",
      "Đẩy tin: Có đẩy tin định kỳ",
      "Dán nhãn: Nhãn Featured Nổi Bật",
      "CSKH & Voucher: Có"
    ]
  },
  {
    zoneId: 10,
    name: "TOP 3 Hiệu Quả",
    tag: "Quan tâm • 15.000đ/ngày",
    desc: "Tiết kiệm chi phí, duy trì hiển thị bền vững tại khu vực Prime",
    icon: "fa-thumbs-up",
    cardClass: "pkg-4",
    badge: "",
    packages: [
      { days: 1, price: 15000, save: "" },
      { days: 7, price: 99750, save: "-5%" },
      { days: 15, price: 202500, save: "-10%" },
      { days: 30, price: 360000, save: "-20%" }
    ],
    features: [
      "Mục tiêu: Tiết kiệm & Hiệu quả",
      "Hiển thị: Khu vực Prime Trang Chủ",
      "List thứ tự: Luôn trên tin thường",
      "Sửa tin: Có (Miễn phí 3 lần)",
      "Duyệt tin: Có",
      "Đẩy tin: Có",
      "Dán nhãn: Nhãn Prime Xanh",
      "CSKH & Voucher: Có"
    ]
  },
  {
    zoneId: 4,
    name: "Tin Cơ Bản",
    tag: "Cơ bản • Chỉ 1.000đ/ngày",
    desc: "Dành cho cá nhân chính chủ muốn duy trì tin dài hạn giá siêu rẻ",
    icon: "fa-file-lines",
    cardClass: "pkg-5",
    badge: "SIÊU TIẾT KIỆM",
    packages: [
      { days: 15, price: 14250, save: "-5%" },
      { days: 30, price: 27000, save: "-10%" },
      { days: 45, price: 38250, save: "-15%" },
      { days: 60, price: 48000, save: "-20%" }
    ],
    features: [
      "Mục tiêu: Đăng tin cơ bản chi phí thấp",
      "Hiển thị: Danh mục & Tìm kiếm",
      "List thứ tự: Tin thường",
      "Sửa tin: Có (Miễn phí 3 lần)",
      "Duyệt tin: Có",
      "Đẩy tin: Có",
      "Dán nhãn: Có (Ưu đãi xuyên suốt)",
      "CSKH & Voucher: Có"
    ]
  },
  {
    zoneId: 13,
    name: "Đăng Tin Miễn Phí",
    tag: "Dùng thử • 0đ (3 Ngày)",
    desc: "Trải nghiệm đăng tin miễn phí 100% dành cho thành viên mới",
    icon: "fa-gift",
    cardClass: "pkg-6",
    badge: "MIỄN PHÍ 0Đ",
    packages: [
      { days: 3, price: 0, save: "FREE" }
    ],
    features: [
      "Mục tiêu: Trải nghiệm nền tảng ChoThueTot",
      "Hiển thị: Trang danh mục theo khu vực",
      "Thời gian hiển thị: 3 ngày miễn phí",
      "Hỗ trợ định vị bản đồ thông minh",
      "Không cần thẻ tín dụng khi bắt đầu"
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

function navigateTo(route, pushHistory = true) {
  if (!route || route === "#") route = "/";
  STATE.currentRoute = route;
  if (pushHistory) {
    window.history.pushState({ route }, "", "#" + route);
  }

  // Update active menu state
  document.querySelectorAll(".shn-list > li").forEach((li) => li.classList.remove("active"));
  if (route === "/") document.getElementById("nav-home")?.classList.add("active");
  else if (route.includes("bao-gia")) document.getElementById("nav-pricing")?.classList.add("active");
  else if (route.includes("tin-tuc")) document.getElementById("nav-news")?.classList.add("active");
  else if (route.includes("uu-dai")) document.getElementById("nav-promo")?.classList.add("active");
  else if (route.includes("tai-khoan")) document.getElementById("nav-member")?.classList.add("active");
  else if (route.includes("admin")) document.getElementById("nav-admin")?.classList.add("active");

  // Hide all views first
  document.querySelectorAll(".app-route-view").forEach((el) => (el.style.display = "none"));
  const heroEl = document.getElementById("siteHeaderHero");

  // Route matching
  if (route === "/" || route === "/index.html") {
    heroEl.classList.remove("is-compact");
    document.getElementById("view-home").style.display = "block";
    updateMapPins("all");
  } else if (
    route.includes("phong-tro") ||
    route.includes("nha-o") ||
    route.includes("can-ho-chung-cu") ||
    route.includes("mat-bang-van-phong") ||
    route.includes("bai-dat-kho-xuong") ||
    route.includes("spotlight") ||
    route.includes("featured") ||
    route.includes("prime") ||
    route.includes("search")
  ) {
    const idMatch = route.match(/-(\d+)$/) || route.match(/\/(\d+)$/);
    if (idMatch) {
      const propId = parseInt(idMatch[1], 10);
      openPropertyDetailView(propId);
    } else {
      heroEl.classList.remove("is-compact");
      openCategoryView(route);
    }
  } else if (route.includes("bao-gia")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-pricing").style.display = "block";
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("tin-tuc")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-news").style.display = "block";
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("uu-dai")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-promo").style.display = "block";
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("hop-tac")) {
    heroEl.classList.add("is-compact");
    document.getElementById("view-partner").style.display = "block";
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("tai-khoan")) {
    if (!STATE.auth.isLoggedIn) {
      STATE.pendingAuthRoute = "/tai-khoan.html";
      heroEl.classList.remove("is-compact");
      document.getElementById("view-home").style.display = "block";
      updateMapPins("all");
      if (pushHistory) window.history.replaceState({ route: "/" }, "", "#/");
      openAuthModal("Vui lòng đăng nhập để truy cập trang Hồ sơ Thành viên.");
      return;
    }
    heroEl.classList.add("is-compact");
    document.getElementById("view-member").style.display = "block";
    switchMemberTab("listings");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("admin")) {
    if (!STATE.auth.isLoggedIn || STATE.auth.role !== "admin") {
      STATE.pendingAuthRoute = "/admin.html";
      heroEl.classList.remove("is-compact");
      document.getElementById("view-home").style.display = "block";
      updateMapPins("all");
      if (pushHistory) window.history.replaceState({ route: "/" }, "", "#/");
      openAuthModal("Khu vực nội bộ: Vui lòng đăng nhập bằng tài khoản Quản trị viên (Admin).");
      return;
    }
    heroEl.classList.add("is-compact");
    document.getElementById("view-admin").style.display = "block";
    switchAdminTab("moderation");
    setTimeout(() => heroMapInstance?.invalidateSize(), 300);
  } else if (route.includes("dang-tin")) {
    document.getElementById("view-home").style.display = "block";
    openPostModal();
  } else {
    document.getElementById("view-home").style.display = "block";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// 1. LUXURY INTERACTIVE HERO MAP (Real MapTiler Key + 3D Pins + Theme Switcher)
// ==========================================================================
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

function updateMapPins(catFilter = "all", focusId = null) {
  if (!heroMapInstance || !heroMarkersLayer) return;
  heroMarkersLayer.clearLayers();

  const list = PROPERTIES.filter((p) => {
    // Hạng 6: Tin miễn phí không hiển thị trên bản đồ
    if (p.tier === "free" || p.mapTier === "free" || p.zoneId === 13) return false;
    if (catFilter === "all") return true;
    return p.category === catFilter;
  });

  const bounds = [];

  list.forEach((item, idx) => {
    const isCurrent = focusId && Number(item.id) === Number(focusId);
    const shortCat = item.categoryLabel.split(",")[0];
    const priceShort = item.priceText.replace(" Triệu", "tr");
    const labelText = `${shortCat} - ${priceShort}`;

    // Determine exact 6-tier map pin style:
    // 1. VIP Banner (Banner Đặc Quyền): pin-vip-banner + Crown icon (like 4173)
    // 2. VIP 1, 2, 3 (Spotlight, Featured, Prime): pin-vip-star + 1★ icon + White bg, Orange text
    // 3. Tin thường (Tin Cơ Bản): pin-basic + No icon + White bg, Black text
    let pinClass = "pin-vip-star";
    let pinIconHtml = '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:10px;"></i>';

    if (item.isVipPin || item.mapTier === "banner" || item.zoneId === 1) {
      pinClass = "pin-vip-banner";
      pinIconHtml = '<i class="fa-solid fa-crown" style="color:#ffd700;font-size:10px;"></i>';
    } else if (item.tier === "basic" || item.mapTier === "basic" || item.zoneId === 4 || idx >= list.length - 4) {
      pinClass = "pin-basic";
      pinIconHtml = "";
    }

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
      iconAnchor: [0, 0]
    });

    const marker = L.marker([item.lat, item.lng], { icon });
    marker.bindPopup(`
      <div class="hero-map-popup">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=80'">
        <div class="hmp-pop-body">
          <span class="hmp-pop-badge">${item.badge}</span>
          <div class="hmp-pop-title">${item.title}</div>
          <div class="hmp-pop-loc"><i class="fa-solid fa-location-dot"></i> ${item.ward}, ${item.city}</div>
          <div class="hmp-pop-footer">
            <div class="hmp-pop-price">${item.priceText}/thg</div>
            <a href="javascript:void(0)" onclick="openPropertyDetailView(${item.id})" class="hmp-pop-link">Xem chi tiết</a>
          </div>
        </div>
      </div>
    `);

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

function toggleExpandHeroMap() {
  const heroEl = document.getElementById("siteHeaderHero");
  const btnSpan = document.getElementById("expandMapBtnText");
  heroEl.classList.toggle("is-expanded");
  const expanded = heroEl.classList.contains("is-expanded");
  if (btnSpan) {
    btnSpan.textContent = expanded ? "Thu gọn bản đồ" : "Mở rộng bản đồ 3D";
  }
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

function initMegaSearchPanel() {
  const input = document.getElementById("hspSearchInput");
  const trigger = document.getElementById("hspFilterTrigger");
  const panel = document.getElementById("hspMegaPanel");
  const bar = document.getElementById("hspBar");

  const openPanel = (e) => {
    e?.stopPropagation();
    panel.classList.add("is-open");
    bar.classList.add("is-open");
  };

  input?.addEventListener("focus", openPanel);
  trigger?.addEventListener("click", openPanel);
  panel?.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    panel?.classList.remove("is-open");
    bar?.classList.remove("is-open");
  });
}

function updateMegaSliderLabels() {
  const priceVal = document.getElementById("megaPriceRange")?.value || 25;
  const areaVal = document.getElementById("megaAreaRange")?.value || 15;
  const priceLabel = document.getElementById("megaPriceLabel");
  const areaLabel = document.getElementById("megaAreaLabel");
  if (priceLabel) priceLabel.textContent = `Dưới ${priceVal} Triệu/tháng`;
  if (areaLabel) areaLabel.textContent = `Từ ${areaVal} m² trở lên`;
}

function setQuickPriceFilter(maxVal, pillEl) {
  const slider = document.getElementById("megaPriceRange");
  if (slider) slider.value = maxVal;
  document.querySelectorAll(".hsp-q-pill").forEach((p) => p.classList.remove("active"));
  pillEl?.classList.add("active");
  updateMegaSliderLabels();
}

function updateMapFilterChipCounts() {
  const mapVisible = PROPERTIES.filter((p) => p.tier !== "free" && p.mapTier !== "free" && p.zoneId !== 13);
  const countMap = {
    mapCountAll: mapVisible.length,
    mapCountPhongTro: mapVisible.filter((p) => p.category === "phong-tro").length,
    mapCountCanHo: mapVisible.filter((p) => p.category === "can-ho-chung-cu").length,
    mapCountNhaO: mapVisible.filter((p) => p.category === "nha-o").length,
    mapCountMatBang: mapVisible.filter((p) => p.category === "mat-bang-van-phong").length,
    mapCountKhoXuong: mapVisible.filter((p) => p.category === "bai-dat-kho-xuong").length
  };
  Object.entries(countMap).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

function executeMegaSearch() {
  const kw = document.getElementById("hspSearchInput")?.value.trim() || "";
  const cat = document.getElementById("megaCatSelect")?.value || "all";
  const city = document.getElementById("megaCitySelect")?.value || "TP. Hồ Chí Minh";
  const ward = document.getElementById("megaWardSelect")?.value || "all";
  const maxPrice = parseFloat(document.getElementById("megaPriceRange")?.value || "50");
  const minArea = parseFloat(document.getElementById("megaAreaRange")?.value || "0");

  STATE.searchFilter = { keyword: kw, category: cat, city, ward, maxPrice, minArea };
  document.getElementById("hspMegaPanel")?.classList.remove("is-open");
  navigateTo("/search.html");
}

// ==========================================================================
// 3. 3D LUXURY "BANNER ĐẶC QUYỀN" (.sv1) SLIDER
// ==========================================================================
function renderSv1Slider() {
  const slide = VIP_EXCLUSIVE_SLIDES[STATE.sv1Index];
  const container = document.getElementById("sv1CardContainer");
  if (!container || !slide) return;

  const mainPhoto = slide.photos[STATE.sv1ThumbIndex] || slide.photos[0];

  container.innerHTML = `
    <div class="sv1-left">
      <div class="sv1-verified-row">
        <span class="sv1-badge-vip"><i class="fa-solid fa-crown"></i> BANNER ĐẶC QUYỀN • VIP 1</span>
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
    </div>

    <div class="sv1-right">
      <a href="javascript:void(0)" onclick="openPropertyDetailView(${slide.id})" class="sv1-r-main">
        <img id="sv1MainHeroImg" src="${mainPhoto}" alt="${slide.title}" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80'">
      </a>

      <button type="button" class="sv1-r-phone" onclick="revealSv1Phone(this, '${slide.phone}')">
        <span class="sv1-r-phone-icon"><i class="fa-solid fa-phone-volume"></i></span>
        <span class="phone-text">${slide.phoneMasked} • Bấm hiện số</span>
      </button>

      <div class="sv1-r-thumbs">
        ${slide.photos
          .map(
            (imgUrl, idx) => `
          <div class="sv1-r-thumb ${idx === STATE.sv1ThumbIndex ? "active" : ""}" onclick="switchSv1Thumb(${idx})">
            <img src="${imgUrl}" alt="Thumb ${idx + 1}" onerror="this.src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&auto=format&fit=crop&q=80'">
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // Update dots
  document.querySelectorAll(".sv1-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === STATE.sv1Index);
  });
}

function switchSv1Slide(dirOrIdx, isDirect = false) {
  if (isDirect) {
    STATE.sv1Index = dirOrIdx;
  } else {
    STATE.sv1Index = (STATE.sv1Index + dirOrIdx + VIP_EXCLUSIVE_SLIDES.length) % VIP_EXCLUSIVE_SLIDES.length;
  }
  STATE.sv1ThumbIndex = 0;
  renderSv1Slider();
}

function switchSv1Thumb(thumbIdx) {
  STATE.sv1ThumbIndex = thumbIdx;
  renderSv1Slider();
}

function revealSv1Phone(btnEl, fullPhone) {
  const span = btnEl.querySelector(".phone-text");
  if (span) {
    span.innerHTML = `${fullPhone} • <span style="color:#ffd700;">Đã sao chép</span>`;
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

      <div class="lc-card-body" style="${stObj ? "padding-top:20px;" : ""}">
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
          <span>${item.otherCost ? `Khác: ${item.otherCost}` : "Chính chủ"}</span>
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
      .map(buildListingCardHTML)
      .join("");
  }
  if (featuredGrid) {
    featuredGrid.innerHTML = PROPERTIES.filter((p) => p.tier === "featured")
      .map(buildListingCardHTML)
      .join("");
  }
  if (primeGrid) {
    primeGrid.innerHTML = PROPERTIES.filter((p) => p.tier === "prime")
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
function openCategoryView(route) {
  document.querySelectorAll(".app-route-view").forEach((el) => (el.style.display = "none"));
  const catView = document.getElementById("view-category");
  catView.style.display = "block";

  let title = "Tất cả tin cho thuê bất động sản";
  let subtitle = "Sắp xếp ưu tiên từ Banner Đặc Quyền → VIP 1 → VIP 2 → VIP 3 → Tin thường → Tin miễn phí";
  let catKey = "all";
  let tierFilter = null;

  if (route.includes("phong-tro")) {
    title = "Cho Thuê Phòng Trọ Chính Chủ, Giá Rẻ Mới Nhất 2026";
    catKey = "phong-tro";
  } else if (route.includes("nha-o")) {
    title = "Cho Thuê Nhà Ở Nguyên Căn, Hẻm Xe Hơi & Mặt Tiền";
    catKey = "nha-o";
  } else if (route.includes("can-ho-chung-cu")) {
    title = "Cho Thuê Căn Hộ Chung Cư, Studio & Duplex Cao Cấp";
    catKey = "can-ho-chung-cu";
  } else if (route.includes("mat-bang-van-phong")) {
    title = "Cho Thuê Mặt Bằng Kinh Doanh, Shophouse & Văn Phòng";
    catKey = "mat-bang-van-phong";
  } else if (route.includes("bai-dat-kho-xuong")) {
    title = "Cho Thuê Bãi Đất, Kho Xưởng Chuẩn Công Nghiệp";
    catKey = "bai-dat-kho-xuong";
  } else if (route.includes("spotlight")) {
    title = "Spotlight — Đỉnh Cao Hiển Thị, Dẫn Đầu Vị Thế";
    subtitle = "Chỉ hiển thị các tin thuộc hạng TOP 1 Spotlight (Không bao gồm tin thường & miễn phí)";
    tierFilter = "spotlight";
  } else if (route.includes("featured")) {
    title = "Featured — Nổi Bật Mỗi Ngày, Khách Chốt Thuê Ngay";
    subtitle = "Chỉ hiển thị các tin thuộc hạng TOP 2 Featured (Không bao gồm tin thường & miễn phí)";
    tierFilter = "featured";
  } else if (route.includes("prime")) {
    title = "Prime — Tiết Kiệm Chi Phí, Hiệu Quả Duy Trì";
    subtitle = "Chỉ hiển thị các tin thuộc hạng TOP 3 Prime (Không bao gồm tin thường & miễn phí)";
    tierFilter = "prime";
  } else if (route.includes("search")) {
    title = `Kết quả tìm kiếm: "${STATE.searchFilter.keyword || STATE.searchFilter.ward !== "all" ? STATE.searchFilter.ward : "Tất cả khu vực"}"`;
    catKey = STATE.searchFilter.category || "all";
  }

  document.getElementById("catViewTitle").textContent = title;
  document.getElementById("catViewSubtitle").textContent = subtitle;

  let filtered = PROPERTIES.filter((p) => {
    if (tierFilter && p.tier !== tierFilter) return false;
    if (catKey !== "all" && p.category !== catKey) return false;
    if (route.includes("search")) {
      if (STATE.searchFilter.city && STATE.searchFilter.city !== "all" && p.city !== STATE.searchFilter.city) return false;
      if (STATE.searchFilter.ward && STATE.searchFilter.ward !== "all" && p.ward !== STATE.searchFilter.ward) return false;
      if (STATE.searchFilter.maxPrice && p.price > STATE.searchFilter.maxPrice) return false;
      if (STATE.searchFilter.minArea && p.area < STATE.searchFilter.minArea) return false;
      if (
        STATE.searchFilter.keyword &&
        !STATE.searchFilter.keyword.startsWith("Gần ") &&
        !p.title.toLowerCase().includes(STATE.searchFilter.keyword.toLowerCase()) &&
        !p.ward.toLowerCase().includes(STATE.searchFilter.keyword.toLowerCase()) &&
        !p.fullAddress.toLowerCase().includes(STATE.searchFilter.keyword.toLowerCase())
      ) {
        return false;
      }
    }
    return true;
  });

  // Sort strictly by priority: VIP Banner -> VIP 1 -> VIP 2 -> VIP 3 -> Tin thường -> Tin miễn phí
  filtered.sort((a, b) => getTierPriorityRank(a) - getTierPriorityRank(b));

  document.getElementById("catResultCount").textContent = `${filtered.length} tin đăng phù hợp`;
  document.getElementById("categoryListingsGrid").innerHTML = filtered.length
    ? filtered.map(buildListingCardHTML).join("")
    : `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;background:#fff;border-radius:16px;border:1px solid #e2e8f0;">
         <i class="fa-solid fa-magnifying-glass" style="font-size:32px;color:#cbd5e1;margin-bottom:10px;"></i>
         <h3 style="font-size:17px;font-weight:800;color:#0f172a;margin-bottom:6px;">Chưa tìm thấy tin đăng khớp điều kiện lọc</h3>
         <p style="font-size:13px;color:#64748b;margin-bottom:16px;">Bạn hãy thử nới rộng khoảng giá hoặc chọn Tất cả Phường/Xã nhé.</p>
         <button type="button" class="hsp-btn-apply" onclick="navigateTo('/')">Quay lại Trang chủ</button>
       </div>`;
  updateMapPins(catKey);
}

function applyCategoryBarFilter() {
  const priceLimit = parseFloat(document.getElementById("catBarPrice")?.value || "999");
  const areaMin = parseFloat(document.getElementById("catBarArea")?.value || "0");
  const city = document.getElementById("catBarCity")?.value || "all";

  const filtered = PROPERTIES.filter((p) => {
    if (p.price > priceLimit) return false;
    if (p.area < areaMin) return false;
    if (city !== "all" && p.city !== city) return false;
    return true;
  });

  document.getElementById("catResultCount").textContent = `${filtered.length} tin đăng phù hợp`;
  document.getElementById("categoryListingsGrid").innerHTML = filtered.map(buildListingCardHTML).join("");
}

// ==========================================================================
// 6. PROPERTY DETAIL VIEW (/cho-thue-phong-tro-phuong-cau-kieu/...-2078)
// ==========================================================================
function openPropertyDetailView(propId) {
  const item = PROPERTIES.find((p) => p.id === Number(propId)) || PROPERTIES[0];
  window.history.pushState({}, "", `#/cho-thue-${item.category}/${item.id}`);

  document.querySelectorAll(".app-route-view").forEach((el) => (el.style.display = "none"));
  const detailView = document.getElementById("view-detail");
  detailView.style.display = "block";

  // Zoom Hero Map to this property and show nearby pins
  updateMapPins("all", item.id);

  const g1 = item.gallery?.[0] || item.image;
  const g2 = item.gallery?.[1] || "https://chothuetot.vn/assets/images/properties/album_1791010804_6960.webp";
  const g3 = item.gallery?.[2] || "https://chothuetot.vn/assets/images/properties/album_1791009142_8327.webp";

  const baseRentVnd = item.price * 1000000;
  const estTotalVnd = baseRentVnd + 350000 + 100000 + 150000;

  detailView.innerHTML = `
    <div class="pd-container">
      <div class="pd-breadcrumb">
        <a href="javascript:void(0)" onclick="navigateTo('/')"><i class="fa-solid fa-house"></i> Trang chủ</a>
        <span>/</span>
        <a href="javascript:void(0)" onclick="navigateTo('/${item.category}.html')">${item.categoryLabel}</a>
        <span>/</span>
        <span>${item.ward}, ${item.city}</span>
        <span>/</span>
        <strong style="color:var(--ctt-orange);">Mã tin #${item.id}</strong>
      </div>

      <!-- Collage Photo Gallery -->
      <div class="pd-gallery">
        <div class="pd-gal-main">
          <img src="${g1}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80'">
          <span class="sv1-3d-glass-tag"><i class="fa-solid fa-crown"></i> ${item.badge} • Ảnh Thực Tế Xác Minh</span>
        </div>
        <div class="pd-gal-side">
          <div class="pd-gal-item">
            <img src="${g2}" alt="Ảnh góc 2" onerror="this.src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=80'">
          </div>
          <div class="pd-gal-item">
            <img src="${g3}" alt="Ảnh góc 3" onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=80'">
            <div class="pd-view-all-photos"><i class="fa-regular fa-images"></i> + Xem tất cả 8 ảnh & Video 360°</div>
          </div>
        </div>
      </div>

      <div class="pd-content-grid">
        <!-- Left Main Info -->
        <div>
          <div class="pd-card-box">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:12px;">
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="sv1-badge-vip"><i class="fa-solid fa-crown"></i> ${item.badge}</span>
                <span class="sv1-badge-verified"><i class="fa-solid fa-shield-check"></i> Đã xác minh chính chủ</span>
              </div>
              <span style="font-size:12.5px;color:#64748b;font-weight:600;">Cập nhật: Hôm nay • Lượt xem: 1.428</span>
            </div>

            <h1 style="font-size:24px;font-weight:900;color:#0f172a;line-height:1.35;margin-bottom:10px;">
              ${item.title}
            </h1>
            <p style="font-size:14px;color:#475569;font-weight:600;margin-bottom:18px;">
              <i class="fa-solid fa-location-dot" style="color:var(--ctt-orange);margin-right:6px;"></i>
              ${item.fullAddress}
            </p>

            <div style="display:flex;align-items:baseline;justify-content:space-between;padding:18px 22px;background:#fffaf5;border:1.5px solid #fed7aa;border-radius:16px;flex-wrap:wrap;gap:16px;">
              <div>
                <div style="font-size:11.5px;font-weight:800;color:#9a3412;text-transform:uppercase;">Giá thuê niêm yết</div>
                <div class="pd-price-big">${item.priceText} <span style="font-size:16px;color:#64748b;font-weight:600;">/ tháng</span></div>
              </div>
              <div style="display:flex;gap:24px;font-variant-numeric:tabular-nums;">
                <div>
                  <div style="font-size:11px;color:#64748b;font-weight:700;">DIỆN TÍCH</div>
                  <div style="font-size:18px;font-weight:900;color:#0f172a;">${item.area}&nbsp;m²</div>
                </div>
                <div>
                  <div style="font-size:11px;color:#64748b;font-weight:700;">TIỀN CỌC</div>
                  <div style="font-size:18px;font-weight:900;color:#0f172a;">${item.deposit}</div>
                </div>
                <div>
                  <div style="font-size:11px;color:#64748b;font-weight:700;">ĐIỆN / NƯỚC</div>
                  <div style="font-size:18px;font-weight:900;color:#059669;">Minh bạch</div>
                </div>
              </div>
            </div>

            <h3 style="font-size:17px;font-weight:800;margin:24px 0 12px;">Thông số kỹ thuật & Tiện nghi</h3>
            <div class="pd-specs-grid">
              <div class="pd-spec-box"><i class="fa-solid fa-maximize"></i> <div><small style="color:#64748b;display:block;font-size:11px;">Diện tích sử dụng</small><strong>${item.area}&nbsp;m²</strong></div></div>
              <div class="pd-spec-box"><i class="fa-solid fa-bed"></i> <div><small style="color:#64748b;display:block;font-size:11px;">Không gian ngủ</small><strong>${item.beds}</strong></div></div>
              <div class="pd-spec-box"><i class="fa-solid fa-bath"></i> <div><small style="color:#64748b;display:block;font-size:11px;">Phòng vệ sinh</small><strong>${item.baths} khép kín</strong></div></div>
              <div class="pd-spec-box"><i class="fa-solid fa-bolt"></i> <div><small style="color:#64748b;display:block;font-size:11px;">Giá điện</small><strong>${item.elec}</strong></div></div>
              <div class="pd-spec-box"><i class="fa-solid fa-droplet"></i> <div><small style="color:#64748b;display:block;font-size:11px;">Giá nước</small><strong>${item.water}</strong></div></div>
              <div class="pd-spec-box"><i class="fa-solid fa-fingerprint"></i> <div><small style="color:#64748b;display:block;font-size:11px;">An ninh & Giờ giấc</small><strong>Vân tay 24/24</strong></div></div>
            </div>

            <h3 style="font-size:17px;font-weight:800;margin:26px 0 10px;">Mô tả chi tiết</h3>
            <p style="font-size:14.5px;color:#334155;line-height:1.75;">
              Chính chủ cho thuê <strong>${item.title}</strong> tại ${item.fullAddress}. Không gian thiết kế hiện đại, thoáng sáng tự nhiên, khu dân cư văn minh an ninh 24/7. Trang bị đầy đủ hệ thống PCCC đạt chuẩn, khóa vân tay, camera an ninh hành lang, khu vực để xe rộng rãi. Cam kết hình ảnh thật 100% và minh bạch toàn bộ chi phí điện, nước, dịch vụ ngay trong hợp đồng thuê.
            </p>

            <h3 style="font-size:17px;font-weight:800;margin:26px 0 12px;">Tiện ích trong bán kính 1km</h3>
            <div style="display:flex;flex-wrap:wrap;gap:10px;">
              <span class="sv1-spec-pill"><i class="fa-solid fa-graduation-cap"></i> Gần trường Đại học (400m)</span>
              <span class="sv1-spec-pill"><i class="fa-solid fa-cart-shopping"></i> Chợ & Siêu thị Co.opmart (250m)</span>
              <span class="sv1-spec-pill"><i class="fa-solid fa-hospital"></i> Bệnh viện / Phòng khám (600m)</span>
              <span class="sv1-spec-pill"><i class="fa-solid fa-tree"></i> Công viên thể thao (500m)</span>
              <span class="sv1-spec-pill"><i class="fa-solid fa-droplet-slash"></i> Khu vực cao ráo không ngập nước</span>
            </div>
          </div>

          <!-- Transparent Monthly Cost Calculator (Next-Gen Upgrade) -->
          <div class="pd-card-box" style="background:linear-gradient(135deg,#ffffff 0%,#fffaf5 100%);border-color:#fed7aa;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
              <h3 style="font-size:18px;font-weight:900;color:#0f172a;">
                <i class="fa-solid fa-calculator" style="color:var(--ctt-orange);margin-right:8px;"></i>
                Bảng tính tổng chi phí thực tế hàng tháng (Minh bạch 100%)
              </h3>
              <span class="sv1-badge-verified">Chống phí ẩn</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;" class="tabular-nums">
              <div style="padding:12px;background:#fff;border-radius:12px;border:1px solid #e2e8f0;">
                <small style="color:#64748b;font-size:11px;display:block;">Tiền thuê cố định</small>
                <strong style="font-size:15px;color:#0f172a;">${new Intl.NumberFormat("vi-VN").format(baseRentVnd)}đ</strong>
              </div>
              <div style="padding:12px;background:#fff;border-radius:12px;border:1px solid #e2e8f0;">
                <small style="color:#64748b;font-size:11px;display:block;">Điện (~100 kWh)</small>
                <strong style="font-size:15px;color:#0f172a;">350.000đ</strong>
              </div>
              <div style="padding:12px;background:#fff;border-radius:12px;border:1px solid #e2e8f0;">
                <small style="color:#64748b;font-size:11px;display:block;">Nước sinh hoạt</small>
                <strong style="font-size:15px;color:#0f172a;">100.000đ</strong>
              </div>
              <div style="padding:12px;background:#fff;border-radius:12px;border:1px solid #e2e8f0;">
                <small style="color:#64748b;font-size:11px;display:block;">Wifi + Rác + Giữ xe</small>
                <strong style="font-size:15px;color:#0f172a;">150.000đ</strong>
              </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1.5px dashed #fdba74;">
              <span style="font-size:14px;font-weight:700;color:#475569;">Tổng chi phí dự kiến trọn gói / tháng:</span>
              <strong style="font-size:24px;font-weight:900;color:var(--ctt-orange);font-variant-numeric:tabular-nums;">
                ~ ${new Intl.NumberFormat("vi-VN").format(estTotalVnd)} VNĐ/tháng
              </strong>
            </div>
          </div>
        </div>

        <!-- Right Sticky Contact & Booking Sidebar -->
        <div class="pd-sticky-sidebar">
          <div class="pd-card-box" style="margin-bottom:0;">
            <div style="display:flex;align-items:center;gap:14px;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #f1f5f9;">
              <div style="width:56px;height:56px;border-radius:50%;background:var(--ctt-grad-brand);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;">
                ${item.host.charAt(0)}
              </div>
              <div>
                <div style="font-size:16px;font-weight:900;color:#0f172a;">${item.host}</div>
                <div style="font-size:12px;color:#059669;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Đã xác thực CCCD & Chủ nhà</div>
              </div>
            </div>

            <button type="button" onclick="this.innerHTML='<i class=\\'fa-solid fa-phone-volume\\'></i> ${item.phone} (Đã sao chép)'" style="width:100%;padding:14px;border-radius:14px;border:none;background:var(--ctt-grad-brand);color:#fff;font-size:15px;font-weight:900;cursor:pointer;margin-bottom:10px;box-shadow:0 10px 24px rgba(241,90,34,0.35);display:flex;align-items:center;justify-content:center;gap:10px;">
              <i class="fa-solid fa-phone-volume"></i> ${item.phone} • Gọi ngay
            </button>

            <a href="https://zalo.me/0906344877" target="_blank" style="width:100%;padding:12px;border-radius:14px;border:1.5px solid #0068ff;background:#f0f7ff;color:#0068ff;font-size:13.5px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px;">
              <img src="assets/zalo.svg" alt="Zalo" style="width:20px;height:20px;"> Nhắn Zalo nhận video phòng thực tế
            </a>

            <!-- NEW UPGRADE #8: Standardized Zalo Schedule Viewing & Hold Room Widget -->
            <div class="pd-schedule-box">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <strong style="font-size:13px;color:#0f172a;"><i class="fa-regular fa-calendar-check" style="color:var(--ctt-orange);margin-right:6px;"></i>Đặt lịch hẹn xem phòng trực tiếp</strong>
                <span style="font-size:10.5px;font-weight:700;color:#059669;">Miễn phí 100%</span>
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

              <input type="text" id="schedTenantPhone" class="hsp-select" style="background:#fff;margin-bottom:10px;font-size:12.5px;" placeholder="Nhập SĐT Zalo của bạn để chủ nhà xác nhận...">

              <button type="button" onclick="submitZaloViewingSchedule(${item.id})" style="width:100%;padding:11px;border-radius:12px;border:none;background:#0f172a;color:#ffd700;font-size:12.5px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
                <i class="fa-solid fa-paper-plane"></i> Gửi lịch hẹn qua Zalo Chủ Nhà
              </button>
            </div>

            <div style="margin-top:14px;padding:12px;border-radius:12px;background:#fef2f2;border:1px solid #fecaca;font-size:12px;color:#991b1b;line-height:1.5;">
              <i class="fa-solid fa-shield-heart"></i> <strong>Khuyến cáo an toàn ChoThueTot:</strong> Tuyệt đối không chuyển khoản đặt cọc trước khi đến xem nhà trực tiếp và kiểm tra hợp đồng.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  window.scrollTo({ top: 380, behavior: "smooth" });
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
  const phone = document.getElementById("schedTenantPhone")?.value.trim() || "0909 xxx xxx";
  alert(
    `✅ ĐÃ TẠO LỊCH HẸN XEM PHÒNG QUA ZALO CHỦ NHÀ!\n\n` +
      `• Mã tin: #${item.id} (${item.ward}, ${item.city})\n` +
      `• Thời gian hẹn: ${STATE.selectedViewingDate} — ${STATE.selectedViewingTime}\n` +
      `• SĐT khách thuê: ${phone}\n` +
      `• Chủ nhà (${item.host} - ${item.phone}) đã nhận thông báo từ ChoThueTot.vn!`
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
              <span>${p.days} ngày ${p.save ? `<small style="color:#ef4444;">(${p.save})</small>` : ""}</span>
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
  1: { calls: "68 lượt gọi & Zalo/tuần", boost: "8.5x", fillTime: "Lấp phòng trong 48h (94%)", badge: "BANNER ĐẶC QUYỀN", badgeClass: "tag-top1" },
  2: { calls: "46 lượt gọi & Zalo/tuần", boost: "6.2x", fillTime: "Lấp phòng trong 3 ngày", badge: "SPOTLIGHT • TOP 1", badgeClass: "tag-top1" },
  3: { calls: "32 lượt gọi & Zalo/tuần", boost: "4.5x", fillTime: "Lấp phòng trong 5 ngày", badge: "FEATURED • TOP 2", badgeClass: "tag-top2" },
  10: { calls: "19 lượt gọi & Zalo/tuần", boost: "2.8x", fillTime: "Lấp phòng trong 7 ngày", badge: "PRIME • TOP 3", badgeClass: "tag-top3" },
  4: { calls: "8 lượt gọi/tuần", boost: "1.2x", fillTime: "Duy trì ổn định dài hạn", badge: "TIN CƠ BẢN", badgeClass: "tag-top3" },
  13: { calls: "4 lượt gọi/3 ngày", boost: "1.0x", fillTime: "Gói trải nghiệm dùng thử", badge: "TIN MIỄN PHÍ", badgeClass: "tag-top3" }
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
    alert("Số dư Ví đăng tin chưa đủ! Vui lòng nạp thêm qua VietQR (+11% ưu đãi) để thanh toán gói tin.");
    openWalletModal();
    return;
  }

  STATE.walletBalance -= pkg.price;
  updateWalletUI();
  closePostModal();
  alert(`🎉 ĐĂNG TIN THÀNH CÔNG!\nGói hiển thị: ${tier.name} (${pkg.days} ngày)\nĐã trừ: ${new Intl.NumberFormat("vi-VN").format(pkg.price)}đ từ Ví đăng tin.`);
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
      alert("Bạn chỉ có thể so sánh tối đa 3 bất động sản cùng lúc!");
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
            <div class="compare-tray-chip-price tabular-nums">${item.priceText}/thg • ${item.area}m²</div>
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
              const total = i.price * 1000000 + 550000;
              return `<td><strong style="font-size:16px;color:#059669;">~ ${new Intl.NumberFormat("vi-VN").format(total)} VNĐ</strong><br><small style="color:#64748b;">(Gồm thuê + điện + nước + phí DV)</small></td>`;
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

// Wallet Top-Up Modal (VietQR / MoMo +11% Bonus)
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
  const bonus = Math.round(amount * 0.11); // +11% November Promo from chothuetot.vn!
  STATE.walletBalance += amount + bonus;
  updateWalletUI();
  alert(
    `✅ NẠP VÍ VIETQR THÀNH CÔNG!\nSố tiền nạp: +${new Intl.NumberFormat("vi-VN").format(amount)}đ\nThưởng Khuyến mãi Tháng 11 (+11%): +${new Intl.NumberFormat("vi-VN").format(bonus)}đ\nSố dư Ví mới: ${new Intl.NumberFormat("vi-VN").format(STATE.walletBalance)}đ`
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
    verifiedVia: "Admin 2FA",
    memberCode: "#ADM-0001"
  }
];

function normalizeAuthIdentity(val) {
  const trimmed = (val || "").trim();
  if (!trimmed) return "";
  return trimmed.includes("@") ? trimmed.toLowerCase() : trimmed.replace(/\s+/g, "");
}

function getAccountsStore() {
  try {
    const raw = localStorage.getItem("ctt_accounts_v1");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
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
  STATE.auth = {
    isLoggedIn: true,
    role: authData.role || "member",
    displayName: authData.displayName || "Thành viên ChoThueTot",
    identity: authData.identity || "",
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
  const panelLogin = document.getElementById("authPanelLogin");
  const panelReg = document.getElementById("authPanelRegister");
  const panelForgot = document.getElementById("authPanelForgot");

  if (panelLogin) panelLogin.style.display = mode === "login" ? "block" : "none";
  if (panelReg) panelReg.style.display = mode === "register" ? "block" : "none";
  if (panelForgot) panelForgot.style.display = mode === "forgot" ? "block" : "none";

  const isReg = mode === "register";
  if (tabLogin) {
    tabLogin.style.background = !isReg ? "#fff" : "transparent";
    tabLogin.style.color = !isReg ? "#0f172a" : "#64748b";
    tabLogin.style.boxShadow = !isReg ? "0 2px 6px rgba(15,23,42,0.08)" : "none";
  }
  if (tabReg) {
    tabReg.style.background = isReg ? "#fff" : "transparent";
    tabReg.style.color = isReg ? "#0f172a" : "#64748b";
    tabReg.style.boxShadow = isReg ? "0 2px 6px rgba(15,23,42,0.08)" : "none";
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

function switchRegisterMethod(method) {
  const isGoogle = method === "google";
  const zaloBtn = document.getElementById("regMethodZaloBtn");
  const googleBtn = document.getElementById("regMethodGoogleBtn");
  const zaloPanel = document.getElementById("regPanelZalo");
  const googlePanel = document.getElementById("regPanelGoogle");

  if (zaloPanel) zaloPanel.style.display = isGoogle ? "none" : "flex";
  if (googlePanel) googlePanel.style.display = isGoogle ? "flex" : "none";

  if (zaloBtn) {
    zaloBtn.style.borderColor = isGoogle ? "#e2e8f0" : "#0284c7";
    zaloBtn.style.background = isGoogle ? "#fff" : "#f0f9ff";
    zaloBtn.style.color = isGoogle ? "#475569" : "#0369a1";
  }
  if (googleBtn) {
    googleBtn.style.borderColor = isGoogle ? "#ea4335" : "#e2e8f0";
    googleBtn.style.background = isGoogle ? "#fef2f2" : "#fff";
    googleBtn.style.color = isGoogle ? "#b91c1c" : "#475569";
  }
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
    { label: "Quá yếu (<8 ký tự)", color: "#ef4444" },
    { label: "Yếu", color: "#f97316" },
    { label: "Trung bình", color: "#f59e0b" },
    { label: "Mạnh (Đạt chuẩn)", color: "#10b981" },
    { label: "Rất mạnh (2FA Ready)", color: "#059669" }
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
    banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> Đã gửi mã OTP 6 số qua <strong>Zalo ZNS</strong> tới SĐT <strong>${phoneRaw}</strong> (Hiệu lực 5 phút).<br><span style="color:#047857;">Mã kiểm thử Zalo ZNS: <strong class="tabular-nums" style="font-size:13px;letter-spacing:1px;">${otp}</strong></span>`;
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

const STUDIO_STREETS_BY_WARD = {
  "P. Cầu Kiệu": ["Phan Xích Long", "Hoa Sứ", "Hoa Phượng", "Trường Sa", "Phan Đăng Lưu"],
  "P. Hòa Hưng": ["Cách Mạng Tháng 8", "Sư Vạn Hạnh", "Tô Hiến Thành", "Thành Thái"],
  "P. Nhiêu Lộc": ["Lê Văn Sỹ", "Trần Quốc Thảo", "Hoàng Sa", "Lý Chính Thắng"],
  "P. Gia Định": ["Nguyễn Hữu Cảnh", "Điện Biên Phủ", "Phan Văn Trị", "Bạch Đằng"]
};

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
  selectedDays: 7,
  aiAutoSync: false,
  selectedSticker: null,
  coverIndex: 0,
  photos: []
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
    const street = (document.getElementById("dStreet")?.value || "").trim();
    const house = (STUDIO_STATE.houseNumber || "").trim();
    const host = (document.getElementById("dHost")?.value || "").trim();
    const phone = (document.getElementById("dPhone")?.value || "").trim();
    if (!street) {
      showStudioStepError("Vui lòng chọn Tên Đường trước khi qua Bước 2.");
      document.getElementById("dStreet")?.focus();
      return false;
    }
    if (!house) {
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
      showStudioStepError("Vui lòng nhập đúng Số Điện Thoại / Zalo Việt Nam (10 số, bắt đầu 03/05/07/08/09).");
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
  const statusEl = document.getElementById("dPhoneStatus");
  if (statusEl) {
    if (!digits) {
      statusEl.textContent = "";
    } else if (/^0(3|5|7|8|9)\d{8}$/.test(digits)) {
      statusEl.textContent = "✓ Hợp lệ";
      statusEl.style.color = "#059669";
    } else {
      statusEl.textContent = "10 số (03/05/07/08/09)";
      statusEl.style.color = "#dc2626";
    }
  }
  renderStudioPreview();
}

function populateStudioStreets() {
  const ward = document.getElementById("dWard")?.value || "P. Cầu Kiệu";
  const streetEl = document.getElementById("dStreet");
  if (!streetEl) return;
  const list = STUDIO_STREETS_BY_WARD[ward] || ["Phan Xích Long", "Lê Văn Sỹ"];
  const prev = streetEl.value;
  streetEl.innerHTML =
    `<option value="">-- Chọn tên đường --</option>` +
    list.map((s) => `<option value="${s}">${s}</option>`).join("");
  if (list.includes(prev)) streetEl.value = prev;
}

function getStudioLockedSuffix() {
  const city = document.getElementById("dCity")?.value || "";
  const ward = document.getElementById("dWard")?.value || "";
  const street = document.getElementById("dStreet")?.value || "";
  const project = document.getElementById("dProject")?.value || "";
  const parts = [];
  if (street) parts.push(street);
  if (project) parts.push(project);
  if (ward) parts.push(ward);
  if (city) parts.push(city);
  return parts.join(", ");
}

function buildStudioFullAddress() {
  const prefix = (STUDIO_STATE.houseNumber || "").trim();
  const street = document.getElementById("dStreet")?.value || "";
  const project = document.getElementById("dProject")?.value || "";
  const ward = document.getElementById("dWard")?.value || "";
  const city = document.getElementById("dCity")?.value || "";

  const front = [prefix, street].filter(Boolean).join(" ");
  const tail = [project, ward, city].filter(Boolean).join(", ");
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
  const suffix = getStudioLockedSuffix();
  const hasPrefix = Boolean((STUDIO_STATE.houseNumber || "").trim());
  if (!STUDIO_STATE.isEditingAddress && hasPrefix && addrEl) {
    addrEl.value = buildStudioFullAddress();
    if (suffixEl) suffixEl.textContent = "";
  } else if (suffixEl) {
    suffixEl.textContent = suffix ? (hasPrefix ? `, ${suffix}` : suffix) : "";
    suffixEl.classList.toggle("has-prefix", hasPrefix);
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
  const showFee = num >= 2;
  if (wrap) wrap.style.visibility = showFee ? "visible" : "hidden";
  if (note && showFee) note.textContent = `(từ người thứ ${num})`;
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

function sanitizeStudioNumericK(inputEl) {
  const clean = inputEl.value.replace(/k/gi, "").replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
  inputEl.value = clean ? `${clean}k` : "";
  if (clean && document.activeElement === inputEl) {
    const pos = clean.length;
    inputEl.setSelectionRange(pos, pos);
  }
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
  el.innerHTML = STUDIO_STATE.photos.map((src, i) => `
    <div onclick="STUDIO_STATE.coverIndex=${i};renderStudioPhotosManager();renderStudioPreview();" style="position:relative;border-radius:10px;overflow:hidden;height:68px;cursor:pointer;border:2px solid ${i === STUDIO_STATE.coverIndex ? "var(--ctt-orange)" : "#e2e8f0"};">
      <img src="${src}" style="width:100%;height:100%;object-fit:cover;">
      ${i === STUDIO_STATE.coverIndex ? '<span style="position:absolute;bottom:3px;left:3px;background:var(--ctt-orange);color:#fff;font-size:9px;font-weight:800;padding:1px 5px;border-radius:4px;">Bìa</span>' : ""}
      <button type="button" onclick="removeStudioPhoto(${i}, event)" title="Xóa ảnh" style="position:absolute;top:3px;right:3px;width:18px;height:18px;border-radius:50%;border:none;background:rgba(15,23,42,0.75);color:#fff;font-size:10px;line-height:1;cursor:pointer;">×</button>
    </div>
  `).join("");
}

function removeStudioPhoto(idx, e) {
  if (e) e.stopPropagation();
  STUDIO_STATE.photos.splice(idx, 1);
  if (STUDIO_STATE.coverIndex >= STUDIO_STATE.photos.length) {
    STUDIO_STATE.coverIndex = Math.max(0, STUDIO_STATE.photos.length - 1);
  }
  renderStudioPhotosManager();
  renderStudioPreview();
}

function handleStudioPhotoUpload(input) {
  const files = Array.from(input.files || []);
  if (!files.length) return;
  const remaining = Math.max(0, 9 - STUDIO_STATE.photos.length);
  if (remaining === 0) {
    alert("Chỉ được tải tối đa 9 hình ảnh.");
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
  if (lbl) {
    lbl.textContent = file ? `Đã chọn video: ${file.name}` : "Tải Video Ngắn Từ Máy (MP4, MOV)";
  }
}

function buildStudioAiDraft() {
  const city = document.getElementById("dCity")?.value || "";
  const ward = document.getElementById("dWard")?.value || "";
  const street = document.getElementById("dStreet")?.value || "";
  const project = document.getElementById("dProject")?.value || "";
  const fullAddr = buildStudioFullAddress() || [street, project, ward, city].filter(Boolean).join(", ");
  const area = (document.getElementById("dArea")?.value || "").trim();
  const price = (document.getElementById("dPrice")?.value || "").trim();
  const furn = document.getElementById("dFurniture")?.value || "";
  const floors = document.getElementById("dFloors")?.value || "";
  const dir = document.getElementById("dDirection")?.value || "";
  const frontage = (document.getElementById("dFrontageRoad")?.value || "").trim();
  const road = (document.getElementById("dRoadAccess")?.value || "").trim();
  const host = (document.getElementById("dHost")?.value || "").trim();
  const phone = (document.getElementById("dPhone")?.value || "").trim();

  const elec = (document.getElementById("dElec")?.value || "").trim();
  const water = (document.getElementById("dWater")?.value || "").trim();
  const otherCost = (document.getElementById("dOtherCost")?.value || "").trim();
  const internet = (document.getElementById("dInternet")?.value || "").trim();
  const laundry = (document.getElementById("dLaundry")?.value || "").trim();
  const trash = (document.getElementById("dTrash")?.value || "").trim();
  const parking = (document.getElementById("dParking")?.value || "").trim();
  const maxPeople = document.getElementById("dMaxPeople")?.value || "";
  const extraPerson = (document.getElementById("dExtraPerson")?.value || "").trim();

  const utils = Array.from(document.querySelectorAll("#postModalBackdrop .util-chk:checked")).map((c) => c.value);
  if (document.getElementById("chkSchool")?.checked) {
    const sc = (document.getElementById("dSchoolCode")?.value || "").trim();
    utils.unshift(sc ? `gần Trường học (${sc})` : "gần Trường học");
  }
  const svcs = Array.from(document.querySelectorAll("#postModalBackdrop .svc-chk:checked")).map((c) => c.value);

  const locFocus = project || (street ? `Đường ${street}` : ward);
  const highlightSpec = [
    area ? `${area}m²` : "",
    furn && furn !== "Không Có" ? `Nội Thất ${furn}` : "",
    STUDIO_STATE.beds !== "1 PN" ? STUDIO_STATE.beds : ""
  ].filter(Boolean).join(" ");

  const seoTitle = [
    `Cho Thuê ${STUDIO_STATE.catLabel}`,
    locFocus ? `${locFocus}, ${ward}` : ward,
    highlightSpec,
    price ? `Giá Chỉ ${price} Triệu/Tháng` : "Chính Chủ Giá Tốt"
  ].filter(Boolean).join(" • ");

  const titleEl = document.getElementById("dTitle");
  if (titleEl) titleEl.value = seoTitle.slice(0, 99);

  const hookByCat = {
    "Phòng Trọ / CHDV": "không gian riêng tư, sạch sẽ, dọn vào ở ngay",
    "Nhà Nguyên Căn": "không gian rộng rãi, riêng tư tuyệt đối, phù hợp gia đình hoặc làm văn phòng",
    "Căn Hộ Chung Cư": "thiết kế hiện đại, thoáng sáng tự nhiên, tiện nghi chuẩn sống xanh",
    "Mặt Bằng Văn Phòng": "vị trí đắc địa, mặt bằng vuông vức, tối ưu nhận diện thương hiệu",
    "Đất - Xưởng, Kho - Bãi": "mặt bằng thông thoáng, giao thông thuận tiện, sẵn sàng vận hành ngay",
    "HomeStay / AirBnb": "phong cách tinh tế, đầy đủ tiện nghi nghỉ dưỡng, vị trí trung tâm"
  };
  const catHook = hookByCat[STUDIO_STATE.catLabel] || "vị trí thuận tiện, sẵn sàng bàn giao ngay";

  const lines = [];
  lines.push(`🔥 CHÍNH CHỦ CHO THUÊ ${STUDIO_STATE.catLabel.toUpperCase()} TẠI ${fullAddr ? fullAddr.toUpperCase() : "TRUNG TÂM"} — ${catHook}!`);
  lines.push(
    `• Diện tích & Bố trí: ${area ? `${area}m²` : "Rộng thoáng"} (${STUDIO_STATE.beds}, ${STUDIO_STATE.baths})` +
    `${price ? ` | Giá thuê chỉ ${price} triệu/tháng` : ""}` +
    `${STUDIO_STATE.deposit ? ` | Cọc ${STUDIO_STATE.deposit.toLowerCase()}` : ""}.`
  );

  const specBits = [
    furn ? `Nội thất ${furn.toLowerCase()}` : "",
    floors ? `Kết cấu ${floors.toLowerCase()}` : "",
    dir ? `Hướng ${dir}` : "",
    frontage ? `Mặt tiền - lộ giới ${frontage}` : "",
    road ? `Đường vào ${road}` : "",
    maxPeople ? `Giới hạn ${maxPeople} người/phòng${extraPerson ? ` (phụ thu từ người thứ ${maxPeople}: ${extraPerson})` : ""}` : ""
  ].filter(Boolean);
  if (specBits.length) lines.push(`• Điểm nổi bật: ${specBits.join(" • ")}.`);

  const costBits = [
    `Điện: ${elec || "Giá nhà nước"}`,
    `Nước: ${water || "Giá nhà nước"}`,
    otherCost ? `Trọn gói chi phí khác: ${otherCost}` : "",
    internet ? `Internet: ${internet}` : "",
    laundry ? `Giặt sấy: ${laundry}` : "",
    trash ? `Thu rác: ${trash}` : "",
    parking ? `Phí xe: ${parking}` : ""
  ].filter(Boolean);
  lines.push(`• Chi phí minh bạch: ${costBits.join(" | ")}.`);

  if (utils.length) lines.push(`• Tiện ích kết nối nhanh: ${utils.join(", ")}.`);
  if (svcs.length) lines.push(`• Dịch vụ & An ninh: ${svcs.join(", ")}.`);
  lines.push(`📞 Liên hệ ngay${host ? ` ${host}` : ""}${phone ? ` (${phone})` : ""} để xem thực tế và chốt giá tốt nhất hôm nay!`);

  const descEl = document.getElementById("dDesc");
  if (descEl) descEl.value = lines.join("\n");
}

function updateStudioAiButtonUI() {
  const btn = document.getElementById("btnAiAutoWrite");
  if (!btn) return;
  if (STUDIO_STATE.aiAutoSync) {
    btn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> <span>Đang Tự Cập Nhật</span>`;
  } else {
    btn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> <span>Click Ngay</span>`;
  }
}

function generateStudioAISeo() {
  STUDIO_STATE.aiAutoSync = true;
  updateStudioAiButtonUI();
  buildStudioAiDraft();
  renderStudioPreview();
}

function onStudioManualContentEdit() {
  if (STUDIO_STATE.aiAutoSync) {
    STUDIO_STATE.aiAutoSync = false;
    updateStudioAiButtonUI();
  }
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
  }
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
        <strong style="font-size:12.5px;color:#0f172a;display:block;">${dur.label} ${dur.off ? `<span style="color:#059669;font-size:10.5px;">(-${dur.off}%)</span>` : ""}</strong>
        <div class="tabular-nums" style="font-size:12px;font-weight:800;color:var(--ctt-orange);">${total === 0 ? "0đ" : new Intl.NumberFormat("vi-VN").format(total) + "đ"}</div>
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
  if (noSticker) return;

  const totalSticker = STUDIO_STATE.selectedDays * 1000;
  const hint = document.getElementById("stickerPriceHint");
  if (hint) {
    hint.textContent = STUDIO_STATE.selectedSticker
      ? `+${new Intl.NumberFormat("vi-VN").format(totalSticker)}đ (${STUDIO_STATE.selectedDays} ngày)`
      : `${new Intl.NumberFormat("vi-VN").format(totalSticker)}đ / ${STUDIO_STATE.selectedDays} ngày`;
  }
  const grid = document.getElementById("demoStickerGrid");
  if (!grid) return;
  grid.innerHTML = STUDIO_STICKERS.map((st) => `
    <button type="button" class="sticker-card ${STUDIO_STATE.selectedSticker === st.id ? "selected" : ""}" onclick="pickStudioSticker('${st.id}')">
      <span class="sticker-pill ${st.cls}" style="margin-bottom:6px;"><i class="fa-solid ${st.icon}"></i> ${st.name}</span>
      <div class="tabular-nums" style="font-size:11.5px;font-weight:700;color:#475569;">+${new Intl.NumberFormat("vi-VN").format(totalSticker)}đ <small style="font-weight:500;color:#94a3b8;">(1k/ngày)</small></div>
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
  STUDIO_STATE.houseNumber = "";
  STUDIO_STATE.isEditingAddress = false;
  STUDIO_STATE.deposit = "";
  STUDIO_STATE.furniture = "";
  STUDIO_STATE.beds = "1 PN";
  STUDIO_STATE.baths = "1 WC";
  STUDIO_STATE.aiAutoSync = false;
  STUDIO_STATE.selectedSticker = null;
  STUDIO_STATE.selectedDays = 7;
  STUDIO_STATE.coverIndex = 0;
  STUDIO_STATE.photos = [];
  STUDIO_STATE.selectedZoneId = preselectedZoneId || null;

  const hostEl = document.getElementById("dHost");
  if (hostEl) hostEl.value = STATE.auth.displayName || "Chính chủ Minh Quân";
  const phoneEl = document.getElementById("dPhone");
  if (phoneEl) {
    phoneEl.value = STATE.auth.phone || "";
    sanitizeStudioVnPhone(phoneEl);
  }
  ["dPrice", "dArea", "dElec", "dWater", "dOtherCost", "dInternet", "dLaundry", "dTrash", "dParking", "dExtraPerson", "dTitle", "dDesc", "dFrontageRoad", "dRoadAccess", "dAddress", "dSchoolCode"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  ["dDeposit", "dMaxPeople", "dFurniture", "dFloors", "dDirection", "dProject"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const bedsEl = document.getElementById("dBeds");
  if (bedsEl) bedsEl.value = "1 PN";
  const bathsEl = document.getElementById("dBaths");
  if (bathsEl) bathsEl.value = "1 WC";
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
  const city = document.getElementById("dCity")?.value || "TP. Hồ Chí Minh";
  const ward = document.getElementById("dWard")?.value || "P. Cầu Kiệu";
  const fullAddr = document.getElementById("dAddress")?.value.trim() || `${ward}, ${city}`;
  const price = document.getElementById("dPrice")?.value.trim() || "--";
  const area = document.getElementById("dArea")?.value.trim() || "--";
  const elecRaw = (document.getElementById("dElec")?.value || "").replace(/k/gi, "").trim();
  const waterRaw = (document.getElementById("dWater")?.value || "").replace(/k/gi, "").trim();
  const otherRaw = (document.getElementById("dOtherCost")?.value || "").replace(/k/gi, "").trim();
  const elec = elecRaw ? `${elecRaw}k` : "Nhà nước";
  const water = waterRaw ? `${waterRaw}k` : "Nhà nước";
  const otherCost = otherRaw ? `${otherRaw}k` : "--";
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
              <span>Khác: ${otherCost}</span>
            </div>
            <div class="lc-card-footer">
              <div class="lc-card-addr">
                <i class="fa-solid fa-location-dot"></i>
                <div class="lc-card-addr-text">
                  <span class="lc-addr-ward">${ward.toUpperCase()}</span>
                  <span class="lc-addr-city">${city.toUpperCase()}</span>
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
    html = `
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:14px;">
        <div style="font-size:11px;color:#64748b;margin-bottom:6px;">Trang chủ › ${STUDIO_STATE.catLabel} › ${ward}</div>
        <h4 style="font-size:15px;font-weight:900;color:#0f172a;line-height:1.35;margin-bottom:8px;">${title}</h4>
        <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:6px;margin-bottom:10px;">
          ${coverPhoto
            ? `<img src="${coverPhoto}" style="width:100%;height:120px;object-fit:cover;border-radius:10px;">`
            : `<div style="width:100%;height:120px;background:#e2e8f0;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#64748b;font-size:11.5px;">Chưa có ảnh</div>`}
          <div style="display:grid;grid-template-rows:1fr 1fr;gap:6px;">
            ${STUDIO_STATE.photos[1] ? `<img src="${STUDIO_STATE.photos[1]}" style="width:100%;height:57px;object-fit:cover;border-radius:8px;">` : `<div style="background:#e2e8f0;border-radius:8px;"></div>`}
            ${STUDIO_STATE.photos[2] ? `<img src="${STUDIO_STATE.photos[2]}" style="width:100%;height:57px;object-fit:cover;border-radius:8px;">` : `<div style="background:#e2e8f0;border-radius:8px;"></div>`}
          </div>
        </div>
        <div style="background:#fff;border-radius:10px;padding:10px;border:1px solid #e2e8f0;font-size:12px;color:#334155;">
          <strong style="color:var(--ctt-orange);font-size:16px;">${price} Triệu/tháng</strong> • ${area} m² • ${STUDIO_STATE.beds} • ${STUDIO_STATE.baths}
          <div style="margin-top:4px;color:#64748b;">${desc}</div>
        </div>
      </div>
    `;
  }

  const previewBox = document.getElementById("demoLivePreviewBox");
  if (previewBox) previewBox.innerHTML = html;

  const breakdownEl = document.getElementById("previewPriceBreakdown");
  if (breakdownEl) {
    if (!z) {
      breakdownEl.innerHTML = `<span style="color:#64748b;">Chưa chọn gói hiển thị (Vui lòng chọn khu vực ở Bước 4).</span>`;
    } else {
      const dur = STUDIO_DURATIONS.find((x) => x.days === STUDIO_STATE.selectedDays) || STUDIO_DURATIONS[1];
      const pkgTotal = Math.round(z.rate * dur.days * (1 - dur.off / 100));
      const stickerTotal = stObj ? dur.days * 1000 : 0;
      const subtotal = pkgTotal + stickerTotal;
      const vatTotal = Math.round(subtotal * 0.08);
      const grandTotal = subtotal + vatTotal;
      const fmt = (n) => (n === 0 ? "0đ" : new Intl.NumberFormat("vi-VN").format(n) + "đ");
      breakdownEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span>Gói hiển thị: <strong>${z.name}</strong> (${dur.label})</span>
          <strong class="tabular-nums">${fmt(pkgTotal)}</strong>
        </div>
        ${stObj ? `
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span>Nhãn Dán: <strong>${stObj.name}</strong> (${dur.label} × 1k)</span>
          <strong class="tabular-nums">+${fmt(stickerTotal)}</strong>
        </div>` : ""}
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span>Thuế VAT (8%):</span>
          <strong class="tabular-nums">${fmt(vatTotal)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;padding-top:6px;border-top:1px solid #e2e8f0;font-size:14px;">
          <strong style="color:#0f172a;">Tổng thanh toán:</strong>
          <strong class="tabular-nums" style="font-size:17px;color:var(--ctt-orange);">${grandTotal === 0 ? "0đ (Miễn phí)" : fmt(grandTotal)}</strong>
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
    alert("Vui lòng tick xác nhận đồng ý với Điều khoản đăng tin của ChoThueTot.vn.");
    return;
  }

  const dur = STUDIO_DURATIONS.find((x) => x.days === STUDIO_STATE.selectedDays) || STUDIO_DURATIONS[1];
  const stObj = STUDIO_STICKERS.find((s) => s.id === STUDIO_STATE.selectedSticker);
  const pkgTotal = Math.round(z.rate * dur.days * (1 - dur.off / 100));
  const stickerTotal = stObj ? dur.days * 1000 : 0;
  const subtotal = pkgTotal + stickerTotal;
  const vatTotal = Math.round(subtotal * 0.08);
  const grandTotal = subtotal + vatTotal;

  if (STATE.walletBalance < grandTotal) {
    alert(`Số dư Ví hiện tại (${new Intl.NumberFormat("vi-VN").format(STATE.walletBalance)}đ) chưa đủ để thanh toán ${new Intl.NumberFormat("vi-VN").format(grandTotal)}đ (đã gồm VAT 8%). Vui lòng nạp thêm vào Ví.`);
    openWalletModal();
    return;
  }

  STATE.walletBalance -= grandTotal;
  updateWalletUI();

  const newId = Math.max(...PROPERTIES.map((p) => p.id)) + 1;
  const priceNum = parseFloat(document.getElementById("dPrice")?.value || "6.5");
  const coverPhoto = STUDIO_STATE.photos[STUDIO_STATE.coverIndex] || STUDIO_STATE.photos[0];
  const elecRaw = (document.getElementById("dElec")?.value || "").replace(/k/gi, "").trim();
  const waterRaw = (document.getElementById("dWater")?.value || "").replace(/k/gi, "").trim();
  const otherRaw = (document.getElementById("dOtherCost")?.value || "").replace(/k/gi, "").trim();

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
    title: document.getElementById("dTitle")?.value.trim() || "CĂN HỘ MỚI ĐĂNG",
    price: priceNum,
    priceMillion: priceNum,
    priceText: `${priceNum} Triệu`,
    city: document.getElementById("dCity")?.value || "TP. Hồ Chí Minh",
    ward: document.getElementById("dWard")?.value || "P. Cầu Kiệu",
    fullAddress: buildStudioFullAddress() || "P. Cầu Kiệu, TP. Hồ Chí Minh",
    area: parseInt(document.getElementById("dArea")?.value || "35", 10),
    beds: STUDIO_STATE.beds,
    baths: STUDIO_STATE.baths,
    elec: elecRaw ? `${elecRaw}k` : "Nhà nước",
    water: waterRaw ? `${waterRaw}k` : "Nhà nước",
    otherCost: otherRaw ? `${otherRaw}k` : "",
    deposit: STUDIO_STATE.deposit || "Thỏa Thuận",
    lat: 10.7965,
    lng: 106.6825,
    verified: true,
    isVipPin: z.id === 1,
    phone: document.getElementById("dPhone")?.value || "0906344877",
    host: document.getElementById("dHost")?.value || "Chính chủ Minh Quân",
    image: coverPhoto,
    gallery: STUDIO_STATE.photos.slice()
  };

  PROPERTIES.unshift(newProp);
  renderAllHomeGrids();
  updateMapPins("all", newId);
  updateMapFilterChipCounts();
  closePostModal();

  alert(
    `🎉 ĐĂNG TIN THÀNH CÔNG (#${newId})!\n\n` +
      `• Gói hiển thị: ${z.name} (${dur.label})\n` +
      `• Tổng thanh toán (gồm VAT 8%): ${new Intl.NumberFormat("vi-VN").format(grandTotal)}đ\n` +
      `• Hệ thống đang mở Trang Chi Tiết Bài Viết vừa xuất bản của bạn!`
  );

  openPropertyDetailView(newId);
}

// ==========================================================================
// 12. MEMBER ACCOUNT PORTAL (#view-member) & ADMIN CONTROL CENTER (#view-admin)
// ==========================================================================
function switchMemberTab(tabName, btnEl) {
  if (btnEl) {
    document.querySelectorAll("#view-member .portal-nav-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  const container = document.getElementById("memberPortalMainContent");
  if (!container) return;

  if (tabName === "listings") {
    const myProps = PROPERTIES.slice(0, 5);
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Quản Lý Danh Sách Tin Đăng Của Bạn (05 tin)</h3>
            <small style="color:#64748b;">Miễn phí 3 lần sửa tin đầu tiên • Bấm Đẩy tin để lên đầu trang chủ & bản đồ</small>
          </div>
          <button type="button" class="hsp-btn-apply" onclick="openPostModal()">
            <i class="fa-solid fa-plus"></i> Đăng tin mới ngay
          </button>
        </div>

        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Bất động sản</th>
              <th>Gói hiển thị</th>
              <th>Hiệu quả (Xem / Gọi)</th>
              <th>Quyền sửa miễn phí</th>
              <th>Thao tác nhanh</th>
            </tr>
          </thead>
          <tbody>
            ${myProps
              .map(
                (p, idx) => `
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:12px;">
                    <img src="${p.image}" alt="${p.title}" style="width:68px;height:48px;border-radius:8px;object-fit:cover;">
                    <div>
                      <strong style="color:#0f172a;display:block;font-size:13px;max-width:280px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">#${p.id} • ${p.title}</strong>
                      <span style="color:var(--ctt-orange);font-weight:800;font-size:12.5px;">${p.priceText}/thg</span>
                      <small style="color:#64748b;"> • ${p.ward}, ${p.city}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span style="padding:4px 10px;border-radius:99px;background:#fff3eb;color:var(--ctt-orange);font-size:11px;font-weight:800;border:1px solid #fed7aa;">
                    ${idx === 0 ? "Banner Đặc Quyền" : p.tier.toUpperCase()}
                  </span>
                  <small style="display:block;color:#059669;font-size:11px;margin-top:3px;">Còn ${14 - idx * 2} ngày</small>
                </td>
                <td>
                  <strong>${980 - idx * 140} lượt xem</strong>
                  <small style="display:block;color:#059669;font-weight:700;">${38 - idx * 6} lượt gọi & Zalo</small>
                </td>
                <td>
                  <span style="color:#059669;font-weight:800;">Còn ${3 - (idx % 2)}/3 lần</span>
                </td>
                <td>
                  <div style="display:flex;gap:6px;flex-wrap:wrap;">
                    <button type="button" onclick="alert('Đã đẩy tin #${p.id} lên vị trí đầu bảng và làm mới ghim Bản đồ 3D!')" style="padding:6px 10px;border-radius:8px;border:1px solid var(--ctt-orange);background:var(--ctt-orange-soft);color:var(--ctt-orange);font-size:11.5px;font-weight:800;cursor:pointer;">
                      <i class="fa-solid fa-arrow-up-from-bracket"></i> Đẩy tin
                    </button>
                    <button type="button" onclick="openPostModal()" style="padding:6px 10px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11.5px;font-weight:700;cursor:pointer;">
                      <i class="fa-regular fa-pen-to-square"></i> Sửa tin
                    </button>
                    <button type="button" onclick="openPropertyDetailView(${p.id})" style="padding:6px 10px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11.5px;font-weight:700;cursor:pointer;">
                      Xem
                    </button>
                  </div>
                </td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "appointments") {
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:6px;">Lịch Hẹn Xem Phòng Từ Khách Thuê Qua Zalo (03 lịch mới)</h3>
        <p style="font-size:13px;color:#64748b;margin-bottom:16px;">Khách thuê đặt lịch trực tiếp từ trang bài viết của bạn trên ChoThueTot.vn</p>
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
            <tr>
              <td><strong>Nguyễn Hoàng Nam</strong><br><small style="color:#0284c7;">SĐT Zalo: 0908 612 489</small></td>
              <td>#2078 • Kiot & Phòng Studio Phan Xích Long</td>
              <td><strong>Ngày mai • Chiều (14:00 - 17:00)</strong></td>
              <td><span style="padding:4px 9px;border-radius:99px;background:#fef3c7;color:#b45309;font-size:11px;font-weight:800;">Chờ xác nhận</span></td>
              <td><button type="button" onclick="this.textContent='Đã xác nhận Zalo ✓';this.style.background='#059669';" class="hsp-btn-apply" style="padding:7px 14px;font-size:11.5px;">Xác nhận lịch hẹn</button></td>
            </tr>
            <tr>
              <td><strong>Trần Thanh Thảo</strong><br><small style="color:#0284c7;">SĐT Zalo: 0938 119 204</small></td>
              <td>#2079 • Căn hộ Duplex Ban Công Rộng</td>
              <td><strong>Cuối tuần • Sáng (09:00 - 11:00)</strong></td>
              <td><span style="padding:4px 9px;border-radius:99px;background:#fef3c7;color:#b45309;font-size:11px;font-weight:800;">Chờ xác nhận</span></td>
              <td><button type="button" onclick="this.textContent='Đã xác nhận Zalo ✓';this.style.background='#059669';" class="hsp-btn-apply" style="padding:7px 14px;font-size:11.5px;">Xác nhận lịch hẹn</button></td>
            </tr>
            <tr>
              <td><strong>Lê Minh Khôi</strong><br><small style="color:#0284c7;">SĐT Zalo: 0914 882 310</small></td>
              <td>#2081 • Phòng trọ gác cao Hạnh Thông</td>
              <td><strong>Hôm nay • Tối (18:00 - 20:00)</strong></td>
              <td><span style="padding:4px 9px;border-radius:99px;background:#ecfdf5;color:#059669;font-size:11px;font-weight:800;">Đã chốt xem</span></td>
              <td><a href="https://zalo.me/0906344877" target="_blank" style="color:#0284c7;font-weight:800;font-size:12px;">Mở khung chat Zalo</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "wallet") {
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Lịch Sử Giao Dịch Ví Đăng Tin & Khuyến Mãi +11%</h3>
            <small style="color:#64748b;">Tự động cộng tiền trong 3 giây qua hệ thống ngân hàng VietQR 24/7</small>
          </div>
          <button type="button" class="hsp-btn-apply" onclick="openWalletModal()"><i class="fa-solid fa-qrcode"></i> Nạp thêm Ví (+11%)</button>
        </div>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Mã GD</th>
              <th>Thời gian</th>
              <th>Nội dung giao dịch</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>#VQR-99241</strong></td>
              <td>16/11/2026 09:15</td>
              <td>Nạp Ví tự động qua VietQR (+11% Khuyến mãi Tháng 11)</td>
              <td><strong style="color:#059669;">+555.000đ</strong></td>
              <td><span style="color:#059669;font-weight:800;">Hoàn tất tự động</span></td>
            </tr>
            <tr>
              <td><strong>#VIP-88102</strong></td>
              <td>15/11/2026 14:20</td>
              <td>Đăng gói Banner Đặc Quyền (7 ngày - Giảm 5%) cho tin #2078</td>
              <td><strong style="color:#ef4444;">-332.500đ</strong></td>
              <td><span style="color:#059669;font-weight:800;">Đã xuất bản</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:16px;">Thông Tin Hồ Sơ Chủ Nhà & Xác Thực Định Danh CCCD</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:720px;">
          <div>
            <label class="post-field-label">Họ và tên hiển thị trên Bài viết</label>
            <input type="text" class="post-input" value="Chính chủ Minh Quân">
          </div>
          <div>
            <label class="post-field-label">Số điện thoại & Zalo nhận khách</label>
            <input type="text" class="post-input tabular-nums" value="0906 344 877">
          </div>
          <div>
            <label class="post-field-label">Email nhận hóa đơn & thông báo</label>
            <input type="email" class="post-input" value="minhquan.building@chothuetot.vn">
          </div>
          <div>
            <label class="post-field-label">Trạng thái xác thực Chính chủ</label>
            <div style="padding:10px 14px;border-radius:10px;background:#ecfdf5;border:1px solid #a7f3d0;color:#059669;font-weight:800;font-size:13px;">
              <i class="fa-solid fa-shield-check"></i> Đã xác thực CCCD gắn chip & SĐT Chính chủ
            </div>
          </div>
        </div>
        <button type="button" class="hsp-btn-apply" style="margin-top:18px;" onclick="alert('Đã lưu thông tin hồ sơ thành viên!')">Lưu thay đổi hồ sơ</button>
      </div>
    `;
  }
}

function switchAdminTab(tabName, btnEl) {
  if (btnEl) {
    document.querySelectorAll("#view-admin .portal-nav-btn").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  const container = document.getElementById("adminPortalMainContent");
  if (!container) return;

  if (tabName === "moderation") {
    const queue = PROPERTIES.slice(0, 4);
    container.innerHTML = `
      <div class="portal-table-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div>
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;">Hàng Đợi Kiểm Duyệt Tin Đăng & Gói VIP (AI Pre-Verified)</h3>
            <small style="color:#64748b;">Hệ thống AI đã tự động chấm điểm độ nét ảnh thật và kiểm tra trùng lặp địa chỉ</small>
          </div>
          <span style="padding:6px 14px;border-radius:99px;background:#ecfdf5;color:#059669;font-size:12px;font-weight:800;">
            <i class="fa-solid fa-robot"></i> AI Auto-Check: Bật
          </span>
        </div>

        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Tin đăng chờ duyệt</th>
              <th>Chủ nhà / SĐT</th>
              <th>Gói đăng ký</th>
              <th>Điểm AI Check</th>
              <th>Quyết định của Admin</th>
            </tr>
          </thead>
          <tbody>
            ${queue
              .map(
                (p, idx) => `
              <tr id="adminModRow${p.id}">
                <td>
                  <div style="display:flex;align-items:center;gap:12px;">
                    <img src="${p.image}" alt="${p.title}" style="width:68px;height:48px;border-radius:8px;object-fit:cover;">
                    <div>
                      <strong style="color:#0f172a;display:block;font-size:13px;max-width:270px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">#${p.id} • ${p.title}</strong>
                      <span style="color:var(--ctt-orange);font-weight:800;font-size:12.5px;">${p.priceText}/thg • ${p.area}m²</span>
                      <small style="color:#64748b;"> • ${p.ward}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <strong>${p.host}</strong>
                  <small style="display:block;color:#64748b;">${p.phone}</small>
                </td>
                <td>
                  <span style="padding:4px 10px;border-radius:99px;background:#0f172a;color:#ffd700;font-size:11px;font-weight:800;">
                    ${idx === 0 ? "Banner Đặc Quyền (50k/ngày)" : idx === 1 ? "TOP 1 Spotlight (35k/ngày)" : "TOP 2 Featured (25k/ngày)"}
                  </span>
                </td>
                <td>
                  <strong style="color:#059669;">${98 - idx}% Ảnh thật</strong>
                  <small style="display:block;color:#64748b;">Điện nước minh bạch</small>
                </td>
                <td>
                  <div style="display:flex;gap:6px;">
                    <button type="button" onclick="approveAdminListing(${p.id}, this)" style="padding:7px 12px;border-radius:8px;border:none;background:#059669;color:#fff;font-size:11.5px;font-weight:800;cursor:pointer;">
                      <i class="fa-solid fa-check"></i> Duyệt xuất bản
                    </button>
                    <button type="button" onclick="openPropertyDetailView(${p.id})" style="padding:7px 10px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;color:#334155;font-size:11.5px;font-weight:700;cursor:pointer;">
                      Xem bài
                    </button>
                  </div>
                </td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === "revenue") {
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:14px;">Báo Cáo Doanh Thu Theo 6 Gói VIP & Đối Soát VietQR (Tháng 11/2026)</h3>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Hạng gói VIP</th>
              <th>Đơn giá / Ngày</th>
              <th>Số tin đang chạy</th>
              <th>Doanh thu tháng 11</th>
              <th>Tỷ trọng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color:var(--ctt-orange);"><i class="fa-solid fa-crown"></i> 1. Banner Đặc Quyền (.sv1)</strong></td>
              <td>50.000đ/ngày</td>
              <td>18 tin VIP</td>
              <td><strong>64.800.000đ</strong></td>
              <td>34.8%</td>
            </tr>
            <tr>
              <td><strong>2. TOP 1 Hiển Thị (Spotlight)</strong></td>
              <td>35.000đ/ngày</td>
              <td>94 tin VIP</td>
              <td><strong>58.250.000đ</strong></td>
              <td>31.2%</td>
            </tr>
            <tr>
              <td><strong>3. TOP 2 Nổi Bật (Featured)</strong></td>
              <td>25.000đ/ngày</td>
              <td>136 tin VIP</td>
              <td><strong>41.400.000đ</strong></td>
              <td>22.2%</td>
            </tr>
            <tr>
              <td><strong>4. TOP 3 Hiệu Quả (Prime)</strong></td>
              <td>15.000đ/ngày</td>
              <td>94 tin VIP</td>
              <td><strong>16.200.000đ</strong></td>
              <td>8.7%</td>
            </tr>
            <tr>
              <td><strong>5. Tin Cơ Bản (1.000đ/ngày)</strong></td>
              <td>1.000đ/ngày</td>
              <td>412 tin</td>
              <td><strong>5.800.000đ</strong></td>
              <td>3.1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="portal-table-card">
        <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin-bottom:14px;">Quản Lý Chủ Nhà, Đối Tác Tòa Nhà CHDV & Xác Thực CCCD</h3>
        <table class="portal-table tabular-nums">
          <thead>
            <tr>
              <th>Thành viên / Đối tác</th>
              <th>Số điện thoại</th>
              <th>Số tin đang đăng</th>
              <th>Số dư Ví</th>
              <th>Trạng thái CCCD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Chính chủ Minh Quân</strong></td>
              <td>0906 344 877</td>
              <td>05 tin (3 VIP)</td>
              <td><strong style="color:var(--ctt-orange);">550.000đ</strong></td>
              <td><span style="color:#059669;font-weight:800;"><i class="fa-solid fa-circle-check"></i> Đã xác thực</span></td>
            </tr>
            <tr>
              <td><strong>Hệ thống CHDV Q-House</strong></td>
              <td>0944 397 969</td>
              <td>14 tin (8 VIP)</td>
              <td><strong style="color:var(--ctt-orange);">4.250.000đ</strong></td>
              <td><span style="color:#059669;font-weight:800;"><i class="fa-solid fa-circle-check"></i> Đối tác Vàng</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

function approveAdminListing(propId, btnEl) {
  btnEl.innerHTML = '<i class="fa-solid fa-check-double"></i> Đã duyệt lên sóng';
  btnEl.style.background = "#0f172a";
  btnEl.style.color = "#ffd700";
}
