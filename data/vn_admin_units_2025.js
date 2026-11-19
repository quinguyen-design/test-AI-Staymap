// Cơ sở dữ liệu Đơn Vị Hành Chính Việt Nam mới nhất (Nghị quyết 202/2025/QH15 - 34 Tỉnh/Thành phố, mô hình 2 cấp)
// Gồm 4 thành phần chuẩn hóa: Tỉnh/Thành phố -> Phường/Xã/Đặc khu -> Tên Đường -> Dự Án
(function () {
  const CITIES = [
    { value: "TP. Hồ Chí Minh", label: "TP. Hồ Chí Minh" },
    { value: "TP. Hà Nội", label: "TP. Hà Nội" },
    { value: "TP. Đà Nẵng", label: "TP. Đà Nẵng" },
    { value: "TP. Hải Phòng", label: "TP. Hải Phòng" },
    { value: "TP. Cần Thơ", label: "TP. Cần Thơ" },
    { value: "TP. Huế", label: "TP. Huế" },
    { value: "Tỉnh Đồng Nai", label: "Tỉnh Đồng Nai" },
    { value: "Tỉnh Bắc Ninh", label: "Tỉnh Bắc Ninh" },
    { value: "Tỉnh Khánh Hòa", label: "Tỉnh Khánh Hòa" },
    { value: "Tỉnh Lâm Đồng", label: "Tỉnh Lâm Đồng" },
    { value: "Tỉnh Quảng Ninh", label: "Tỉnh Quảng Ninh" },
    { value: "Tỉnh Hưng Yên", label: "Tỉnh Hưng Yên" },
    { value: "Tỉnh Tây Ninh", label: "Tỉnh Tây Ninh" },
    { value: "Tỉnh An Giang", label: "Tỉnh An Giang" },
    { value: "Tỉnh Phú Thọ", label: "Tỉnh Phú Thọ" },
    { value: "Tỉnh Ninh Bình", label: "Tỉnh Ninh Bình" },
    { value: "Tỉnh Thái Nguyên", label: "Tỉnh Thái Nguyên" },
    { value: "Tỉnh Thanh Hóa", label: "Tỉnh Thanh Hóa" },
    { value: "Tỉnh Nghệ An", label: "Tỉnh Nghệ An" },
    { value: "Tỉnh Hà Tĩnh", label: "Tỉnh Hà Tĩnh" },
    { value: "Tỉnh Quảng Trị", label: "Tỉnh Quảng Trị" },
    { value: "Tỉnh Quảng Ngãi", label: "Tỉnh Quảng Ngãi" },
    { value: "Tỉnh Gia Lai", label: "Tỉnh Gia Lai" },
    { value: "Tỉnh Đắk Lắk", label: "Tỉnh Đắk Lắk" },
    { value: "Tỉnh Đồng Tháp", label: "Tỉnh Đồng Tháp" },
    { value: "Tỉnh Vĩnh Long", label: "Tỉnh Vĩnh Long" },
    { value: "Tỉnh Cà Mau", label: "Tỉnh Cà Mau" },
    { value: "Tỉnh Lào Cai", label: "Tỉnh Lào Cai" },
    { value: "Tỉnh Tuyên Quang", label: "Tỉnh Tuyên Quang" },
    { value: "Tỉnh Lạng Sơn", label: "Tỉnh Lạng Sơn" },
    { value: "Tỉnh Sơn La", label: "Tỉnh Sơn La" },
    { value: "Tỉnh Điện Biên", label: "Tỉnh Điện Biên" },
    { value: "Tỉnh Lai Châu", label: "Tỉnh Lai Châu" },
    { value: "Tỉnh Cao Bằng", label: "Tỉnh Cao Bằng" }
  ];

  const w = (list) => list.map((name) => ({ value: name, label: name }));

  const WARDS_BY_CITY = {
    "TP. Hồ Chí Minh": w([
      // Khu vực trung tâm & các quận nội thành cũ (NQ 1685/NQ-UBTVQH15)
      "P. Sài Gòn", "P. Tân Định", "P. Bến Thành", "P. Cầu Ông Lãnh",
      "P. Bàn Cờ", "P. Xuân Hòa", "P. Nhiêu Lộc",
      "P. Vĩnh Hội", "P. Khánh Hội", "P. Xóm Chiếu",
      "P. Chợ Quán", "P. An Đông", "P. Chợ Lớn",
      "P. Bình Tiên", "P. Bình Tây", "P. Bình Phú", "P. Phú Lâm",
      "P. Tân Thuận", "P. Phú Thuận", "P. Tân Mỹ", "P. Tân Hưng",
      "P. Chánh Hưng", "P. Bình Đông", "P. Phú Định",
      "P. Vườn Lài", "P. Diên Hồng", "P. Hòa Hưng",
      "P. Minh Phụng", "P. Bình Thới", "P. Hòa Bình", "P. Phú Thọ",
      "P. Đông Hưng Thuận", "P. Trung Mỹ Tây", "P. Tân Thới Hiệp", "P. Thới An", "P. An Phú Đông",
      "P. Gia Định", "P. Bình Thạnh", "P. Bình Lợi Trung", "P. Thạnh Mỹ Tây", "P. Bình Quới",
      "P. Cầu Kiệu", "P. Phú Nhuận", "P. Đức Nhuận",
      "P. Hạnh Thông", "P. An Nhơn", "P. Gò Vấp", "P. Thông Tây Hội", "P. An Hội Tây", "P. An Hội Đông",
      "P. Tân Sơn Hòa", "P. Tân Sơn Nhất", "P. Tân Hòa", "P. Bảy Hiền", "P. Tân Bình", "P. Tân Sơn",
      "P. Tây Thạnh", "P. Tân Sơn Nhì", "P. Phú Thọ Hòa", "P. Phú Thạnh", "P. Tân Phú",
      "P. Bình Tân", "P. Bình Hưng Hòa", "P. Bình Trị Đông", "P. An Lạc", "P. Tân Tạo",
      // Khu vực Thủ Đức cũ (12 phường mới)
      "P. Hiệp Bình", "P. Tam Bình", "P. Thủ Đức", "P. Linh Xuân",
      "P. Long Bình", "P. Tăng Nhơn Phú", "P. Phước Long", "P. Long Phước",
      "P. Long Trường", "P. An Khánh", "P. Bình Trưng", "P. Cát Lái",
      // Khu vực Bình Dương cũ (sáp nhập vào TP.HCM)
      "P. Thủ Dầu Một", "P. Phú Lợi", "P. Chánh Hiệp", "P. Bình Dương",
      "P. Dĩ An", "P. Đông Hòa", "P. Tân Đông Hiệp",
      "P. Thuận An", "P. Thuận Giao", "P. Bình Hòa", "P. Lái Thiêu", "P. An Phú",
      "P. Tân Uyên", "P. Thới Hòa", "P. Bến Cát",
      // Khu vực Bà Rịa - Vũng Tàu cũ (sáp nhập vào TP.HCM)
      "P. Vũng Tàu", "P. Tam Thắng", "P. Rạch Dừa", "P. Phước Thắng",
      "P. Bà Rịa", "P. Long Hương", "P. Phú Mỹ", "Đặc khu Côn Đảo",
      // Các xã ngoại thành mới
      "X. Nhà Bè", "X. Hiệp Phước",
      "X. Bình Hưng", "X. Bình Chánh", "X. Vĩnh Lộc", "X. Tân Vĩnh Lộc", "X. Hưng Long", "X. Tân Nhựt",
      "X. Hóc Môn", "X. Bà Điểm", "X. Đông Thạnh", "X. Xuân Thới Sơn",
      "X. Củ Chi", "X. Tân An Hội", "X. An Nhơn Tây", "X. Nhuận Đức", "X. Phú Hòa Đông",
      "X. Cần Giờ", "X. Bình Khánh", "X. Thạnh An"
    ]),
    "TP. Hà Nội": w([
      // 51 Phường mới & các Xã trọng điểm (NQ 1656/NQ-UBTVQH15)
      "P. Hoàn Kiếm", "P. Cửa Nam", "P. Hồng Hà",
      "P. Ba Đình", "P. Ngọc Hà", "P. Giảng Võ",
      "P. Đống Đa", "P. Láng", "P. Ô Chợ Dừa", "P. Kim Liên", "P. Văn Miếu - Quốc Tử Giám",
      "P. Hai Bà Trưng", "P. Bạch Mai", "P. Vĩnh Tuy",
      "P. Cầu Giấy", "P. Nghĩa Đô", "P. Yên Hòa",
      "P. Thanh Xuân", "P. Khương Đình", "P. Phương Liệt",
      "P. Tây Hồ", "P. Phú Thượng",
      "P. Hoàng Mai", "P. Hoàng Liệt", "P. Vĩnh Hưng", "P. Tương Mai", "P. Định Công", "P. Lĩnh Nam", "P. Yên Sở",
      "P. Long Biên", "P. Bồ Đề", "P. Việt Hưng", "P. Phúc Lợi",
      "P. Từ Liêm", "P. Tây Mỗ", "P. Đại Mỗ", "P. Xuân Phương",
      "P. Phú Diễn", "P. Xuân Đỉnh", "P. Đông Ngạc", "P. Thượng Cát", "P. Tây Tựu",
      "P. Hà Đông", "P. Dương Nội", "P. Kiến Hưng", "P. Phú Lương", "P. Yên Nghĩa",
      "P. Sơn Tây", "P. Tùng Thiện",
      "X. Thanh Trì", "X. Thanh Liệt", "X. Gia Lâm", "X. Bát Tràng",
      "X. Đông Anh", "X. Hoài Đức", "X. An Khánh", "X. Đan Phượng", "X. Ô Diên", "X. Ba Vì"
    ]),
    "TP. Đà Nẵng": w([
      // 23 Phường mới + Đặc khu Hoàng Sa (NQ 1659/NQ-UBTVQH15)
      "P. Hải Châu", "P. Hòa Cường", "P. Thanh Khê", "P. An Khê",
      "P. An Hải", "P. Sơn Trà", "P. Ngũ Hành Sơn",
      "P. Hòa Khánh", "P. Hải Vân", "P. Liên Chiểu", "P. Cẩm Lệ", "P. Hòa Xuân",
      "P. Tam Kỳ", "P. Quảng Phú", "P. Hương Trà", "P. Bàn Thạch",
      "P. Điện Bàn", "P. Điện Bàn Đông", "P. An Thắng", "P. Điện Bàn Bắc",
      "P. Hội An", "P. Hội An Đông", "P. Hội An Tây",
      "X. Hòa Vang", "X. Bà Nà", "Đặc khu Hoàng Sa"
    ]),
    "TP. Hải Phòng": w([
      "P. Hồng Bàng", "P. Ngô Quyền", "P. Gia Viên", "P. Lê Chân", "P. An Biên",
      "P. Hải An", "P. Đông Hải", "P. Kiến An", "P. Phù Liễn",
      "P. Đồ Sơn", "P. Nam Đồ Sơn", "P. Dương Kinh", "P. An Phong",
      "P. Thủy Nguyên", "P. Thiên Hương", "P. Hòa Bình",
      "P. Hải Dương", "P. Lê Thanh Nghị", "P. Thành Đông", "P. Chí Linh",
      "Đặc khu Cát Hải", "Đặc khu Bạch Long Vĩ"
    ]),
    "TP. Cần Thơ": w([
      "P. Ninh Kiều", "P. Cái Khế", "P. Tân An", "P. An Bình",
      "P. Bình Thủy", "P. Long Tuyền", "P. Thới An Đông",
      "P. Cái Răng", "P. Hưng Phú", "P. Ô Môn", "P. Thốt Nốt", "P. Tân Lộc",
      "P. Vị Thanh", "P. Vị Tân", "P. Ngã Bảy",
      "P. Sóc Trăng", "P. Phú Lợi", "P. Vĩnh Châu"
    ]),
    "TP. Huế": w([
      "P. Thuận Hóa", "P. Phú Xuân", "P. An Cựu", "P. Vỹ Dạ", "P. Thủy Xuân",
      "P. Kim Long", "P. Hương An", "P. Dương Nỗ", "P. Thuận An",
      "P. Hương Thủy", "P. Phú Bài", "P. Hương Trà",
      "P. Phong Điền", "P. Phong Thái", "P. Phong Dinh"
    ]),
    "Tỉnh Đồng Nai": w([
      "P. Biên Hòa", "P. Trấn Biên", "P. Tam Hiệp", "P. Long Bình", "P. Hố Nai",
      "P. Trảng Dài", "P. Tam Phước", "P. Phước Tân", "P. Long Hưng",
      "P. Long Khánh", "P. Bảo Vinh", "P. Hàng Gòn",
      "P. Bình Phước", "P. Đồng Xoài", "P. Chơn Thành", "P. Bình Long", "P. An Lộc",
      "X. Long Thành", "X. An Phước", "X. Nhơn Trạch", "X. Đại Phước", "X. Phước An",
      "X. Trảng Bom", "X. Bình Minh", "X. Thống Nhất"
    ]),
    "Tỉnh Bắc Ninh": w([
      "P. Kinh Bắc", "P. Võ Cường", "P. Vũ Ninh", "P. Hạp Lĩnh", "P. Nam Sơn",
      "P. Từ Sơn", "P. Đồng Nguyên", "P. Tam Sơn", "P. Phù Khê",
      "P. Quế Võ", "P. Thuận Thành", "P. Bắc Giang", "P. Đa Mai", "P. Tân Tiến",
      "X. Yên Phong", "X. Tiên Du", "X. Đại Đồng"
    ]),
    "Tỉnh Khánh Hòa": w([
      "P. Nha Trang", "P. Bắc Nha Trang", "P. Nam Nha Trang", "P. Tây Nha Trang",
      "P. Ninh Hòa", "P. Đông Ninh Hòa", "P. Cam Ranh", "P. Cam Linh",
      "P. Phan Rang", "P. Đông Hải", "P. Bảo An", "X. Cam Lâm", "Đặc khu Trường Sa"
    ]),
    "Tỉnh Lâm Đồng": w([
      "P. Xuân Hương - Đà Lạt", "P. Lâm Viên - Đà Lạt", "P. Cam Ly - Đà Lạt", "P. Xuân Trường - Đà Lạt", "P. Lang Biang - Đà Lạt",
      "P. Bảo Lộc", "P. B'Lao",
      "P. Phan Thiết", "P. Phú Thủy", "P. Mũi Né", "P. La Gi",
      "P. Gia Nghĩa", "X. Đức Trọng", "X. Hiệp Thạnh", "Đặc khu Phú Quý"
    ]),
    "Tỉnh Quảng Ninh": w([
      "P. Hạ Long", "P. Hồng Gai", "P. Bãi Cháy", "P. Hà Tu", "P. Cao Xanh",
      "P. Cẩm Phả", "P. Cửa Ông", "P. Uông Bí", "P. Đông Triều", "P. Quảng Yên", "P. Móng Cái"
    ]),
    "Tỉnh Hưng Yên": w([
      "P. Phố Hiến", "P. Sơn Nam", "P. Mỹ Hào", "P. Đường Hào",
      "P. Thái Bình", "P. Trần Hưng Đạo", "P. Trần Lãm",
      "X. Văn Giang", "X. Nghĩa Trụ", "X. Khoái Châu", "X. Yên Mỹ"
    ]),
    "Tỉnh Tây Ninh": w([
      "P. Tân Ninh", "P. Bình Minh", "P. Ninh Thạnh", "P. Hòa Thành", "P. Trảng Bàng",
      "P. Long An", "P. Tân An", "P. Kiến Tường",
      "X. Bến Lức", "X. Đức Hòa", "X. Cần Giuộc", "X. Cần Đước"
    ]),
    "Tỉnh An Giang": w([
      "P. Long Xuyên", "P. Bình Đức", "P. Mỹ Thới", "P. Châu Đốc", "P. Tân Châu",
      "P. Rạch Giá", "P. Vĩnh Thông", "P. Hà Tiên",
      "Đặc khu Phú Quốc", "Đặc khu Thổ Châu", "Đặc khu Kiên Hải"
    ]),
    "Tỉnh Phú Thọ": w([
      "P. Việt Trì", "P. Nông Trang", "P. Thanh Miếu", "P. Phú Thọ",
      "P. Vĩnh Yên", "P. Vĩnh Phúc", "P. Phúc Yên",
      "P. Hòa Bình", "P. Kỳ Sơn", "P. Tân Hòa"
    ]),
    "Tỉnh Ninh Bình": w([
      "P. Hoa Lư", "P. Nam Hoa Lư", "P. Tây Hoa Lư", "P. Tam Điệp",
      "P. Phủ Lý", "P. Duy Tiên", "P. Kim Bảng",
      "P. Nam Định", "P. Thiên Trường", "P. Vị Khê"
    ]),
    "Tỉnh Thái Nguyên": w([
      "P. Phan Đình Phùng", "P. Linh Sơn", "P. Tích Lương", "P. Gia Sàng",
      "P. Sông Công", "P. Phổ Yên", "P. Bắc Kạn", "P. Đức Xuân"
    ]),
    "Tỉnh Thanh Hóa": w([
      "P. Hạc Thành", "P. Quảng Phú", "P. Đông Quang", "P. Hàm Rồng",
      "P. Sầm Sơn", "P. Nam Sầm Sơn", "P. Bỉm Sơn", "P. Nghi Sơn"
    ]),
    "Tỉnh Nghệ An": w([
      "P. Trường Vinh", "P. Thành Vinh", "P. Vinh Hưng", "P. Vinh Phú",
      "P. Vinh Lộc", "P. Cửa Lò", "P. Thái Hòa", "P. Hoàng Mai"
    ]),
    "Tỉnh Hà Tĩnh": w([
      "P. Thành Sen", "P. Trần Phú", "P. Hà Huy Tập", "P. Hồng Lĩnh", "P. Sông Trí", "P. Vũng Áng"
    ]),
    "Tỉnh Quảng Trị": w([
      "P. Đông Hà", "P. Nam Đông Hà", "P. Quảng Trị",
      "P. Đồng Hới", "P. Đồng Thuận", "P. Đồng Sơn", "P. Ba Đồn", "Đặc khu Cồn Cỏ"
    ]),
    "Tỉnh Quảng Ngãi": w([
      "P. Cẩm Thành", "P. Nghĩa Lộ", "P. Trương Quang Trọng", "P. Đức Phổ",
      "P. Kon Tum", "P. Đăk Cấm", "P. Đăk Bla", "Đặc khu Lý Sơn"
    ]),
    "Tỉnh Gia Lai": w([
      "P. Pleiku", "P. Hội Phú", "P. Thống Nhất", "P. Diên Hồng", "P. An Khê",
      "P. Quy Nhơn", "P. Quy Nhơn Nam", "P. Quy Nhơn Bắc", "P. An Nhơn", "P. Hoài Nhơn"
    ]),
    "Tỉnh Đắk Lắk": w([
      "P. Buôn Ma Thuột", "P. Tân An", "P. Tân Lập", "P. Thành Nhất", "P. Ea Kao", "P. Buôn Hồ",
      "P. Tuy Hòa", "P. Phú Yên", "P. Bình Kiến", "P. Đông Hòa", "P. Sông Cầu"
    ]),
    "Tỉnh Đồng Tháp": w([
      "P. Cao Lãnh", "P. Mỹ Ngãi", "P. Sa Đéc", "P. Hồng Ngự",
      "P. Mỹ Tho", "P. Đạo Thạnh", "P. Mỹ Phong", "P. Gò Công", "P. Cai Lậy"
    ]),
    "Tỉnh Vĩnh Long": w([
      "P. Long Châu", "P. Phước Hậu", "P. Tân Ngãi", "P. Tân Hạnh",
      "P. Bến Tre", "P. Sơn Đông", "P. An Hội",
      "P. Trà Vinh", "P. Nguyệt Hóa", "P. Long Đức", "P. Duyên Hải"
    ]),
    "Tỉnh Cà Mau": w([
      "P. Tân Thành", "P. An Xuyên", "P. Lý Văn Lâm", "P. Hòa Thành",
      "P. Bạc Liêu", "P. Vĩnh Trạch", "P. Hiệp Thành", "P. Giá Rai"
    ]),
    "Tỉnh Lào Cai": w([
      "P. Lào Cai", "P. Cam Đường", "P. Sa Pa",
      "P. Yên Bái", "P. Nam Cường", "P. Văn Phú", "P. Nghĩa Lộ"
    ]),
    "Tỉnh Tuyên Quang": w([
      "P. Minh Xuân", "P. An Tường", "P. Nông Tiến", "P. Bình Thuận",
      "P. Hà Giang 1", "P. Hà Giang 2"
    ]),
    "Tỉnh Lạng Sơn": w([
      "P. Lương Văn Tri", "P. Kỳ Lừa", "P. Tam Thanh", "P. Đông Kinh"
    ]),
    "Tỉnh Sơn La": w([
      "P. Tô Hiệu", "P. Chiềng An", "P. Chiềng Cơi", "P. Chiềng Sinh", "P. Mộc Châu"
    ]),
    "Tỉnh Điện Biên": w([
      "P. Điện Biên Phủ", "P. Mường Thanh", "P. Mường Lay"
    ]),
    "Tỉnh Lai Châu": w([
      "P. Tân Phong", "P. Đoàn Kết"
    ]),
    "Tỉnh Cao Bằng": w([
      "P. Thục Phán", "P. Nùng Trí Cao", "P. Tân Giang"
    ])
  };

  // Tuyến đường chuẩn sạch theo từng Phường/Xã (tuyệt đối không lẫn số nhà, hẻm, ngõ hay địa danh)
  const STREETS_BY_WARD = {
    // TP. Hồ Chí Minh
    "P. Sài Gòn": ["Nguyễn Huệ", "Lê Lợi", "Đồng Khởi", "Tôn Đức Thắng", "Hàm Nghi", "Pasteur", "Lê Duẩn", "Nguyễn Du", "Lý Tự Trọng", "Hai Bà Trưng", "Lê Thánh Tôn"],
    "P. Tân Định": ["Hai Bà Trưng", "Trần Quang Khải", "Đinh Tiên Hoàng", "Nguyễn Văn Thủ", "Điện Biên Phủ", "Nguyễn Đình Chiểu", "Võ Thị Sáu", "Hoàng Sa", "Bà Lê Chân"],
    "P. Bến Thành": ["Lê Lai", "Lê Thánh Tôn", "Nguyễn Trãi", "Phạm Ngũ Lão", "Bùi Viện", "Cống Quỳnh", "Trần Hưng Đạo", "Nam Kỳ Khởi Nghĩa", "Lý Tự Trọng"],
    "P. Cầu Ông Lãnh": ["Trần Hưng Đạo", "Nguyễn Thái Học", "Nguyễn Cư Trinh", "Cầu Ông Lãnh", "Cô Giang", "Cô Bắc", "Đề Thám", "Võ Văn Kiệt", "Nguyễn Cảnh Chân"],
    "P. Bàn Cờ": ["Nguyễn Đình Chiểu", "Điện Biên Phủ", "Cao Thắng", "Nguyễn Thiện Thuật", "Bàn Cờ", "Võ Văn Tần", "Cách Mạng Tháng 8", "Lý Thái Tổ"],
    "P. Xuân Hòa": ["Võ Thị Sáu", "Nam Kỳ Khởi Nghĩa", "Pasteur", "Phạm Ngọc Thạch", "Trần Quốc Toản", "Lý Chính Thắng", "Hai Bà Trưng", "Tú Xương", "Ngô Thời Nhiệm"],
    "P. Nhiêu Lộc": ["Lê Văn Sỹ", "Trần Quốc Thảo", "Hoàng Sa", "Trường Sa", "Lý Chính Thắng", "Nguyễn Phúc Nguyên", "Kỳ Đồng", "Trần Văn Đang"],
    "P. Vĩnh Hội": ["Hoàng Diệu", "Khánh Hội", "Bến Vân Đồn", "Vĩnh Hội", "Tôn Đản", "Đường số 41", "Đường số 45"],
    "P. Khánh Hội": ["Khánh Hội", "Bến Vân Đồn", "Hoàng Diệu", "Tôn Đản", "Nguyễn Hữu Hào", "Đoàn Văn Bơ"],
    "P. Xóm Chiếu": ["Xóm Chiếu", "Bến Vân Đồn", "Tôn Đản", "Đoàn Văn Bơ", "Nguyễn Tất Thành", "Tôn Thất Thuyết", "Lê Quốc Hưng"],
    "P. Chợ Quán": ["Trần Bình Trọng", "Nguyễn Trãi", "Trần Hưng Đạo", "An Dương Vương", "Nguyễn Văn Cừ", "Lê Hồng Phong", "Nguyễn Biểu"],
    "P. An Đông": ["An Dương Vương", "Nguyễn Trãi", "Trần Phú", "Hùng Vương", "Nguyễn Duy Dương", "Sư Vạn Hạnh", "Ngô Quyền"],
    "P. Chợ Lớn": ["Nguyễn Trãi", "Trần Hưng Đạo", "Hải Thượng Lãn Ông", "Châu Văn Liêm", "Hồng Bàng", "Phùng Hưng", "Lương Nhữ Học"],
    "P. Bình Tiên": ["Phạm Văn Chí", "Hậu Giang", "Minh Phụng", "Bình Tiên", "Võ Văn Kiệt", "Lò Gốm"],
    "P. Bình Tây": ["Hậu Giang", "Tháp Mười", "Bình Tây", "Phạm Đình Hổ", "Lê Quang Sung", "Chu Văn An"],
    "P. Bình Phú": ["Bình Phú", "Hậu Giang", "Nguyễn Văn Luông", "Đường số 10", "Đường số 23", "Kinh Dương Vương"],
    "P. Phú Lâm": ["Kinh Dương Vương", "Bà Hom", "Tân Hòa Đông", "Nguyễn Văn Luông", "Phú Lâm", "Đặng Nguyên Cẩn"],
    "P. Tân Thuận": ["Huỳnh Tấn Phát", "Nguyễn Văn Linh", "Tân Thuận", "Trần Xuân Soạn", "Bùi Văn Ba", "Lê Văn Lương", "Lưu Trọng Lư"],
    "P. Phú Thuận": ["Huỳnh Tấn Phát", "Phú Thuận", "Đào Trí", "Nguyễn Lương Bằng", "Hoàng Quốc Việt", "Gò Ô Môi"],
    "P. Tân Mỹ": ["Nguyễn Lương Bằng", "Nguyễn Văn Linh", "Tân Mỹ", "Nguyễn Thị Thập", "Hoàng Văn Thái", "Tôn Dật Tiên", "Nguyễn Văn Cừ"],
    "P. Tân Hưng": ["Nguyễn Hữu Thọ", "Nguyễn Thị Thập", "Lê Văn Lương", "Trần Xuân Soạn", "Đường D1", "Đường số 36", "Lâm Văn Bền"],
    "P. Chánh Hưng": ["Phạm Hùng", "Tạ Quang Bửu", "Dương Bá Trạc", "Chánh Hưng", "Cao Lỗ", "Bông Sao", "Đông Hồ"],
    "P. Bình Đông": ["Bến Bình Đông", "Phạm Thế Hiển", "Tạ Quang Bửu", "Quốc Lộ 50", "Bình Đông", "Trịnh Quang Nghị"],
    "P. Phú Định": ["Phạm Thế Hiển", "An Dương Vương", "Võ Văn Kiệt", "Phú Định", "Trương Đình Hội", "Hồ Học Lãm"],
    "P. Vườn Lài": ["Lý Thái Tổ", "Lê Hồng Phong", "Sư Vạn Hạnh", "Ngô Gia Tự", "Nguyễn Chí Thanh", "Hùng Vương", "Bà Hạt"],
    "P. Diên Hồng": ["Ba Tháng Hai", "Lý Thường Kiệt", "Nguyễn Tri Phương", "Thành Thái", "Đào Duy Từ", "Ngô Quyền"],
    "P. Hòa Hưng": ["Cách Mạng Tháng 8", "Sư Vạn Hạnh", "Tô Hiến Thành", "Thành Thái", "Ba Tháng Hai", "Đồng Nai", "Bắc Hải"],
    "P. Minh Phụng": ["Minh Phụng", "Ba Tháng Hai", "Hồng Bàng", "Hàn Hải Nguyên", "Lạc Long Quân", "Phó Cơ Điều"],
    "P. Bình Thới": ["Bình Thới", "Ông Ích Khiêm", "Lạc Long Quân", "Minh Phụng", "Lãnh Binh Thăng", "Âu Cơ"],
    "P. Hòa Bình": ["Hòa Bình", "Lạc Long Quân", "Âu Cơ", "Kênh Tân Hóa", "Trịnh Đình Trọng"],
    "P. Phú Thọ": ["Lý Thường Kiệt", "Lữ Gia", "Nguyễn Thị Nhỏ", "Ba Tháng Hai", "Lê Đại Hành", "Thiên Phước"],
    "P. Đông Hưng Thuận": ["Trường Chinh", "Nguyễn Văn Quá", "Đông Hưng Thuận", "Phan Văn Hớn", "Song Hành", "Quang Trung"],
    "P. Trung Mỹ Tây": ["Tô Ký", "Nguyễn Ảnh Thủ", "Quốc Lộ 22", "Dương Thị Mười", "Trung Mỹ Tây 13", "Tân Chánh Hiệp 10"],
    "P. Tân Thới Hiệp": ["Nguyễn Ảnh Thủ", "Lê Văn Khương", "Dương Thị Mười", "Tân Thới Hiệp 21", "Hiệp Thành 13"],
    "P. Thới An": ["Lê Văn Khương", "Lê Thị Riêng", "Hà Huy Giáp", "Thới An 16", "Thạnh Xuân 25", "Quốc Lộ 1A"],
    "P. An Phú Đông": ["Vườn Lài", "Hà Huy Giáp", "Quốc Lộ 1A", "An Phú Đông 9", "An Phú Đông 27", "Thạnh Lộc 19"],
    "P. Gia Định": ["Nguyễn Hữu Cảnh", "Điện Biên Phủ", "Phan Văn Trị", "Bạch Đằng", "Xô Viết Nghệ Tĩnh", "Đinh Bộ Lĩnh", "Vạn Kiếp", "Phan Đăng Lưu"],
    "P. Bình Thạnh": ["Phan Văn Trị", "Nơ Trang Long", "Chu Văn An", "Bình Lợi", "Nguyễn Xí", "Đinh Bộ Lĩnh", "Bùi Đình Túy"],
    "P. Bình Lợi Trung": ["Phạm Văn Đồng", "Bình Lợi", "Nơ Trang Long", "Lê Quang Định", "Nguyễn Văn Đậu", "Hoàng Hoa Thám"],
    "P. Thạnh Mỹ Tây": ["Điện Biên Phủ", "Nguyễn Hữu Cảnh", "Xô Viết Nghệ Tĩnh", "Ung Văn Khiêm", "Nguyễn Gia Trí", "Võ Oanh", "Ngô Tất Tố", "Đường D5"],
    "P. Bình Quới": ["Bình Quới", "Thanh Đa", "Xô Viết Nghệ Tĩnh", "Ung Văn Khiêm"],
    "P. Cầu Kiệu": ["Phan Xích Long", "Hoa Sứ", "Hoa Phượng", "Hoa Lan", "Hoa Đào", "Trường Sa", "Phan Đăng Lưu", "Vạn Kiếp", "Phùng Văn Cung"],
    "P. Phú Nhuận": ["Nguyễn Văn Trỗi", "Huỳnh Văn Bánh", "Lê Văn Sỹ", "Trần Huy Liệu", "Đặng Văn Ngữ", "Trương Quốc Dung", "Hồ Văn Huê"],
    "P. Đức Nhuận": ["Hoàng Văn Thụ", "Phổ Quang", "Nguyễn Kiệm", "Thích Quảng Đức", "Đào Duy Anh", "Hồng Hà"],
    "P. Hạnh Thông": ["Nguyễn Văn Nghi", "Quang Trung", "Phạm Văn Đồng", "Nguyễn Thái Sơn", "Lê Lợi", "Nguyễn Kiệm", "Dương Quảng Hàm"],
    "P. An Nhơn": ["Phan Văn Trị", "Dương Quảng Hàm", "Nguyễn Thái Sơn", "Lê Đức Thọ", "Nguyễn Bá Tuấn"],
    "P. Gò Vấp": ["Quang Trung", "Phan Văn Trị", "Nguyễn Oanh", "Thống Nhất", "Nguyễn Văn Lượng"],
    "P. Thông Tây Hội": ["Quang Trung", "Thống Nhất", "Lê Văn Thọ", "Nguyễn Văn Khối", "Phạm Văn Chiêu"],
    "P. An Hội Tây": ["Phan Huy Ích", "Quang Trung", "Phạm Văn Chiêu", "Bùi Quang Là", "Tân Sơn"],
    "P. An Hội Đông": ["Lê Đức Thọ", "Thống Nhất", "Phạm Văn Chiêu", "Lê Văn Thọ", "Đường số 59"],
    "P. Tân Sơn Hòa": ["Hoàng Văn Thụ", "Lê Văn Sỹ", "Phạm Văn Hai", "Nguyễn Trọng Tuyển", "Út Tịch", "Bùi Thị Xuân"],
    "P. Tân Sơn Nhất": ["Trường Sơn", "Bạch Đằng", "Hồng Hà", "Cộng Hòa", "Hoàng Văn Thụ", "Phổ Quang"],
    "P. Tân Hòa": ["Lý Thường Kiệt", "Cách Mạng Tháng 8", "Bắc Hải", "Thành Thái", "Lạc Long Quân"],
    "P. Bảy Hiền": ["Trường Chinh", "Lạc Long Quân", "Âu Cơ", "Đồng Đen", "Bàu Cát", "Nguyễn Hồng Đào"],
    "P. Tân Bình": ["Cộng Hòa", "Trường Chinh", "Hoàng Hoa Thám", "Ấp Bắc", "Nguyễn Đức Thuận", "Thân Nhân Trung"],
    "P. Tân Sơn": ["Trường Chinh", "Phan Huy Ích", "Phạm Văn Bạch", "Tân Sơn", "Cống Lở", "Trần Thái Tông"],
    "P. Tây Thạnh": ["Tây Thạnh", "Lê Trọng Tấn", "Trường Chinh", "Chế Lan Viên", "Dương Đức Hiền", "Nguyễn Hữu Tiến"],
    "P. Tân Sơn Nhì": ["Tân Sơn Nhì", "Lê Trọng Tấn", "Bờ Bao Tân Thắng", "Tân Kỳ Tân Quý", "Gò Dầu", "Trương Vĩnh Ký"],
    "P. Phú Thọ Hòa": ["Lũy Bán Bích", "Vườn Lài", "Phú Thọ Hòa", "Nguyễn Sơn", "Tân Hương", "Độc Lập"],
    "P. Phú Thạnh": ["Thoại Ngọc Hầu", "Bình Long", "Nguyễn Sơn", "Lũy Bán Bích", "Thạch Lam"],
    "P. Tân Phú": ["Âu Cơ", "Lũy Bán Bích", "Thoại Ngọc Hầu", "Hòa Bình", "Kênh Tân Hóa", "Trịnh Đình Thảo"],
    "P. Bình Tân": ["Kinh Dương Vương", "Tên Lửa", "Vành Đai Trong", "Đường số 7", "Tỉnh Lộ 10"],
    "P. Bình Hưng Hòa": ["Lê Trọng Tấn", "Bình Long", "Tân Kỳ Tân Quý", "Mã Lò", "Quốc Lộ 1A"],
    "P. Bình Trị Đông": ["Hương Lộ 2", "Bình Trị Đông", "Mã Lò", "Tỉnh Lộ 10", "Đường số 1"],
    "P. An Lạc": ["Kinh Dương Vương", "Võ Văn Kiệt", "Hồ Học Lãm", "An Dương Vương", "Tên Lửa"],
    "P. Tân Tạo": ["Tỉnh Lộ 10", "Quốc Lộ 1A", "Trần Đại Nghĩa", "Nguyễn Cửu Phú", "Lê Đình Cẩn"],
    "P. Hiệp Bình": ["Phạm Văn Đồng", "Hiệp Bình", "Quốc Lộ 13", "Kha Vạn Cân", "Đường số 23", "Đường số 48"],
    "P. Tam Bình": ["Tô Ngọc Vân", "Gò Dưa", "Tỉnh Lộ 43", "Quốc Lộ 1A", "Tam Bình"],
    "P. Thủ Đức": ["Võ Văn Ngân", "Kha Vạn Cân", "Đặng Văn Bi", "Phạm Văn Đồng", "Hoàng Diệu 2", "Lê Văn Chí"],
    "P. Linh Xuân": ["Quốc Lộ 1K", "Hoàng Cầm", "Linh Trung", "Lê Văn Chí", "Đường số 6"],
    "P. Long Bình": ["Nguyễn Xiển", "Phước Thiện", "Nguyễn Văn Tăng", "Hoàng Hữu Nam", "Vành Đai 3", "Bùi Văn Hòa", "Xa Lộ Hà Nội", "Trần Quốc Toản"],
    "P. Tăng Nhơn Phú": ["Lê Văn Việt", "Man Thiện", "Đình Phong Phú", "Lã Xuân Oai", "Xa Lộ Hà Nội", "Trương Văn Hải"],
    "P. Phước Long": ["Đỗ Xuân Hợp", "Tây Hòa", "Dương Đình Hội", "Liên Phường", "Xa Lộ Hà Nội"],
    "P. Long Phước": ["Long Phước", "Long Thuận", "Nguyễn Xiển", "Trường Lưu"],
    "P. Long Trường": ["Nguyễn Duy Trinh", "Võ Chí Công", "Lã Xuân Oai", "Trường Lưu", "Hoàng Hữu Nam"],
    "P. An Khánh": ["Mai Chí Thọ", "Xa Lộ Hà Nội", "Trần Não", "Xuân Thủy", "Thảo Điền", "Quốc Hương", "Nguyễn Cơ Thạch", "Lương Định Của", "Trần Bạch Đằng", "Lê Thước"],
    "P. Bình Trưng": ["Nguyễn Duy Trinh", "Lê Văn Thịnh", "Đồng Văn Cống", "Đường số 39", "Mai Chí Thọ", "Song Hành"],
    "P. Cát Lái": ["Đồng Văn Cống", "Nguyễn Thị Định", "Trương Văn Bang", "Mai Chí Thọ", "Lê Hiến Mai"],
    "P. Thủ Dầu Một": ["Đại lộ Bình Dương", "Yersin", "Cách Mạng Tháng 8", "Phú Lợi", "Thích Quảng Đức", "30 Tháng 4"],
    "P. Phú Lợi": ["Phú Lợi", "Đại lộ Bình Dương", "Mỹ Phước Tân Vạn", "Huỳnh Văn Lũy"],
    "P. Dĩ An": ["Nguyễn An Ninh", "Lý Thường Kiệt", "Trần Hưng Đạo", "Quốc Lộ 1K"],
    "P. Đông Hòa": ["Quốc Lộ 1K", "Trần Hưng Đạo", "Đông Hòa", "Thống Nhất"],
    "P. Thuận An": ["Đại lộ Bình Dương", "Nguyễn Trãi", "Cách Mạng Tháng 8"],
    "P. Bình Hòa": ["Quốc Lộ 13", "Tỉnh Lộ 43", "Nguyễn Du"],
    "P. Lái Thiêu": ["Cách Mạng Tháng 8", "Phan Đình Phùng", "Nguyễn Văn Tiết"],
    "P. Vũng Tàu": ["Thùy Vân", "Hạ Long", "Trương Công Định", "Lê Hồng Phong", "Nguyễn An Ninh", "Ba Cu"],
    "P. Tam Thắng": ["Nguyễn An Ninh", "Lê Hồng Phong", "30 Tháng 4", "Trần Phú", "Thi Sách"],
    "P. Bà Rịa": ["Cách Mạng Tháng 8", "Bạch Đằng", "Nguyễn Hữu Thọ", "Phạm Hùng"],
    "P. Phú Mỹ": ["Quốc Lộ 51", "Trường Chinh", "Độc Lập"],
    "X. Nhà Bè": ["Nguyễn Hữu Thọ", "Huỳnh Tấn Phát", "Lê Văn Lương", "Nguyễn Bình"],
    "X. Bình Hưng": ["Nguyễn Văn Linh", "Phạm Hùng", "Quốc Lộ 50", "Đường số 10"],
    "X. Bình Chánh": ["Quốc Lộ 1A", "Đinh Đức Thiện", "Nguyễn Hữu Trí"],
    "X. Hóc Môn": ["Lý Thường Kiệt", "Quang Trung", "Song Hành", "Nguyễn Ảnh Thủ"],
    "X. Bà Điểm": ["Phan Văn Hớn", "Nguyễn Ảnh Thủ", "Quốc Lộ 22", "Nguyễn Thị Sóc"],
    "X. Củ Chi": ["Quốc Lộ 22", "Tỉnh Lộ 8", "Nguyễn Văn Khạ"],

    // TP. Hà Nội
    "P. Hoàn Kiếm": ["Đinh Tiên Hoàng", "Hàng Đào", "Hàng Ngang", "Hàng Bông", "Lý Thái Tổ", "Tràng Thi", "Phùng Hưng"],
    "P. Cửa Nam": ["Tràng Tiền", "Hàng Bài", "Lý Thường Kiệt", "Trần Hưng Đạo", "Hai Bà Trưng", "Phan Chu Trinh", "Lê Duẩn"],
    "P. Hồng Hà": ["Trần Quang Khải", "Trần Nhật Duật", "Yên Phụ", "Bạch Đằng"],
    "P. Ba Đình": ["Điện Biên Phủ", "Đội Cấn", "Kim Mã", "Thụy Khuê", "Quán Thánh", "Phan Đình Phùng", "Hoàng Hoa Thám"],
    "P. Ngọc Hà": ["Liễu Giai", "Văn Cao", "Đội Cấn", "Kim Mã", "Đào Tấn", "Ngọc Khánh"],
    "P. Giảng Võ": ["Giảng Võ", "Láng Hạ", "Ngọc Khánh", "Thành Công", "Đê La Thành", "Cát Linh", "Huỳnh Thúc Kháng"],
    "P. Đống Đa": ["Thái Hà", "Chùa Bộc", "Tây Sơn", "Nguyễn Lương Bằng", "Yên Lãng", "Hoàng Cầu"],
    "P. Láng": ["Đường Láng", "Chùa Láng", "Nguyễn Chí Thanh", "Huỳnh Thúc Kháng", "Nguyên Hồng"],
    "P. Ô Chợ Dừa": ["Xã Đàn", "Ô Chợ Dừa", "Tôn Đức Thắng", "Đê La Thành", "Hào Nam", "Hoàng Cầu"],
    "P. Kim Liên": ["Phạm Ngọc Thạch", "Giải Phóng", "Phương Mai", "Chùa Bộc", "Đông Tác", "Lương Định Của"],
    "P. Văn Miếu - Quốc Tử Giám": ["Tôn Đức Thắng", "Quốc Tử Giám", "Nguyễn Khuyến", "Khâm Thiên", "Lê Duẩn"],
    "P. Hai Bà Trưng": ["Phố Huế", "Bà Triệu", "Bạch Đằng", "Trần Khát Chân", "Lò Đúc", "Nguyễn Công Trứ"],
    "P. Bạch Mai": ["Bạch Mai", "Trần Đại Nghĩa", "Lê Thanh Nghị", "Tạ Quang Bửu", "Đại Cồ Việt", "Minh Khai"],
    "P. Vĩnh Tuy": ["Minh Khai", "Tam Trinh", "Kim Ngưu", "Lạc Trung", "Vĩnh Tuy"],
    "P. Cầu Giấy": ["Cầu Giấy", "Xuân Thủy", "Dịch Vọng", "Trần Thái Tông", "Duy Tân", "Thành Thái", "Khúc Thừa Dụ"],
    "P. Nghĩa Đô": ["Hoàng Quốc Việt", "Nguyễn Văn Huyên", "Tô Hiệu", "Nghĩa Tân", "Phạm Văn Đồng", "Trần Cung"],
    "P. Yên Hòa": ["Trần Duy Hưng", "Trung Kính", "Yên Hòa", "Nguyễn Khang", "Mạc Thái Tổ", "Phạm Hùng"],
    "P. Thanh Xuân": ["Nguyễn Trãi", "Lê Văn Lương", "Khuất Duy Tiến", "Vũ Trọng Phụng", "Nguyễn Tuân", "Ngụy Như Kon Tum"],
    "P. Khương Đình": ["Khương Trung", "Khương Đình", "Vũ Tông Phan", "Nguyễn Xiển", "Bùi Xương Trạch"],
    "P. Phương Liệt": ["Giải Phóng", "Trường Chinh", "Phương Liệt", "Lê Trọng Tấn", "Hoàng Văn Thái"],
    "P. Tây Hồ": ["Lạc Long Quân", "Âu Cơ", "Xuân Diệu", "Trích Sài", "Thụy Khuê", "Quảng An", "Yên Phụ"],
    "P. Phú Thượng": ["Võ Chí Công", "An Dương Vương", "Nguyễn Hoàng Tôn", "Phú Thượng"],
    "P. Hoàng Mai": ["Giải Phóng", "Tân Mai", "Kim Đồng", "Tam Trinh", "Lĩnh Nam", "Trương Định"],
    "P. Hoàng Liệt": ["Giải Phóng", "Nguyễn Hữu Thọ", "Linh Đàm", "Hoàng Liệt", "Ngọc Hồi"],
    "P. Vĩnh Hưng": ["Lĩnh Nam", "Vĩnh Hưng", "Tam Trinh", "Nam Dư"],
    "P. Long Biên": ["Nguyễn Văn Cừ", "Cổ Linh", "Đàm Quang Trung", "Thạch Bàn", "Bát Khối"],
    "P. Bồ Đề": ["Nguyễn Văn Cừ", "Ngọc Lâm", "Hồng Tiến", "Bồ Đề", "Ngọc Thụy"],
    "P. Từ Liêm": ["Phạm Hùng", "Mễ Trì", "Lê Đức Thọ", "Hàm Nghi", "Nguyễn Cơ Thạch", "Trần Hữu Dực", "Lê Quang Đạo"],
    "P. Tây Mỗ": ["Đại lộ Thăng Long", "Tây Mỗ", "Lê Quang Đạo"],
    "P. Đại Mỗ": ["Tố Hữu", "Đại Mỗ", "Lê Quang Đạo", "Sa Đôi"],
    "P. Phú Diễn": ["Hồ Tùng Mậu", "Cầu Diễn", "Phú Diễn", "Hoàng Công Chất"],
    "P. Xuân Đỉnh": ["Phạm Văn Đồng", "Xuân Đỉnh", "Nguyễn Hoàng Tôn", "Đỗ Nhuận"],
    "P. Hà Đông": ["Quang Trung", "Trần Phú", "Nguyễn Khuyến", "Vạn Phúc", "Tố Hữu", "Phùng Hưng"],
    "P. Dương Nội": ["Tố Hữu", "Lê Trọng Tấn", "Dương Nội"],
    "X. Gia Lâm": ["Đa Tốn", "Trâu Quỳ", "Kiêu Kỵ", "Dương Xá"],
    "X. Đông Anh": ["Cao Lỗ", "Quốc Lộ 3", "Võ Nguyên Giáp"],

    // TP. Đà Nẵng
    "P. Hải Châu": ["Bạch Đằng", "Nguyễn Văn Linh", "Lê Duẩn", "Trần Phú", "Hùng Vương", "Ông Ích Khiêm"],
    "P. Hòa Cường": ["2 Tháng 9", "Núi Thành", "Phan Đăng Lưu", "Tiểu La", "Nguyễn Hữu Thọ"],
    "P. Thanh Khê": ["Điện Biên Phủ", "Nguyễn Tất Thành", "Hà Huy Tập", "Lê Độ"],
    "P. An Hải": ["Võ Nguyên Giáp", "Phạm Văn Đồng", "Ngô Quyền", "Trần Hưng Đạo"],
    "P. Sơn Trà": ["Hoàng Sa", "Lê Đức Thọ", "Ngô Quyền", "Yết Kiêu"],
    "P. Ngũ Hành Sơn": ["Võ Nguyên Giáp", "Trường Sa", "Lê Văn Hiến", "Châu Thị Vĩnh Tế", "Trần Thị Lý"],
    "P. Cẩm Lệ": ["Cách Mạng Tháng 8", "Ông Ích Đường", "Thăng Long"],
    "P. Hòa Xuân": ["Võ Chí Công", "Nguyễn Phước Lan", "29 Tháng 3", "Phạm Hùng"],
    "P. Hội An": ["Trần Phú", "Bạch Đằng", "Hai Bà Trưng", "Nguyễn Duy Hiệu"],
    "P. Tam Kỳ": ["Phan Châu Trinh", "Hùng Vương", "Trần Cao Vân"],

    // TP. Hải Phòng
    "P. Hồng Bàng": ["Đinh Tiên Hoàng", "Trần Hưng Đạo", "Điện Biên Phủ", "Bạch Đằng"],
    "P. Ngô Quyền": ["Lê Hồng Phong", "Cầu Đất", "Lạch Tray", "Đà Nẵng"],
    "P. Lê Chân": ["Tô Hiệu", "Nguyễn Đức Cảnh", "Trần Nguyên Hãn", "Võ Nguyên Giáp"],
    "P. Hải An": ["Lê Hồng Phong", "Ngô Gia Tự", "Cát Bi"],
    "P. Thủy Nguyên": ["Đỗ Mười", "25 Tháng 10", "Bạch Đằng"],
    "P. Hải Dương": ["Trần Hưng Đạo", "Hồng Quang", "Nguyễn Lương Bằng"],

    // TP. Cần Thơ
    "P. Ninh Kiều": ["Hòa Bình", "30 Tháng 4", "Mậu Thân", "Nguyễn Văn Cừ", "Ba Tháng Hai", "Trần Hưng Đạo"],
    "P. Cái Khế": ["Nguyễn Văn Cừ", "Cách Mạng Tháng 8", "Lê Lợi", "Trần Phú"],
    "P. Bình Thủy": ["Lê Hồng Phong", "Cách Mạng Tháng 8", "Bùi Hữu Nghĩa"],
    "P. Cái Răng": ["Quốc Lộ 1A", "Phạm Hùng", "Quang Trung"],
    "P. Hưng Phú": ["Quang Trung", "Võ Nguyên Giáp", "Lý Thái Tổ"],

    // TP. Huế
    "P. Thuận Hóa": ["Lê Lợi", "Hùng Vương", "Bến Nghé", "Đống Đa", "Hà Nội", "Nguyễn Huệ"],
    "P. Phú Xuân": ["Trần Hưng Đạo", "Lê Duẩn", "Đinh Tiên Hoàng", "Mai Thúc Loan"],
    "P. An Cựu": ["An Dương Vương", "Hùng Vương", "Bà Triệu", "Phan Chu Trinh"],
    "P. Vỹ Dạ": ["Nguyễn Sinh Cung", "Lâm Hoằng", "Phạm Văn Đồng"],

    // Tỉnh Đồng Nai
    "P. Biên Hòa": ["Phạm Văn Thuận", "Đồng Khởi", "Võ Thị Sáu", "Nguyễn Ái Quốc", "Hà Huy Giáp"],
    "P. Trấn Biên": ["Cách Mạng Tháng 8", "30 Tháng 4", "Nguyễn Ái Quốc", "Phan Trung"],
    "P. Tam Hiệp": ["Phạm Văn Thuận", "Đồng Khởi", "Bùi Văn Hòa"],
    "P. Long Hưng": ["Hương Lộ 2", "Nam Cao", "Ngô Quyền"],
    "P. Đồng Xoài": ["Quốc Lộ 14", "Phú Riềng Đỏ", "Lê Duẩn"],
    "X. Long Thành": ["Lê Duẩn", "Quốc Lộ 51", "Nguyễn Văn Cừ"],
    "X. Nhơn Trạch": ["Tôn Đức Thắng", "Nguyễn Hữu Cảnh", "Lý Thái Tổ"],

    // Tỉnh Bắc Ninh
    "P. Kinh Bắc": ["Lý Thái Tổ", "Ngô Gia Tự", "Trần Hưng Đạo", "Nguyễn Trãi"],
    "P. Võ Cường": ["Lý Thái Tổ", "Nguyễn Gia Thiều", "Lê Thái Tổ", "Ngô Gia Tự", "Huyền Quang"],
    "P. Từ Sơn": ["Lý Thánh Tông", "Trần Phú", "Minh Khai"],
    "P. Bắc Giang": ["Xương Giang", "Nguyễn Văn Cừ", "Hoàng Văn Thụ", "Lê Lợi"],

    // Tỉnh Khánh Hòa
    "P. Nha Trang": ["Trần Phú", "Lê Thánh Tôn", "Nguyễn Thị Minh Khai", "Thái Nguyên", "Yersin"],
    "P. Bắc Nha Trang": ["Phạm Văn Đồng", "2 Tháng 4", "Điện Biên Phủ"],
    "P. Nam Nha Trang": ["Lê Hồng Phong", "Nguyễn Tất Thành", "Phong Châu"],
    "P. Cam Ranh": ["Hùng Vương", "Lê Duẩn", "Nguyễn Trọng Kỷ"],

    // Tỉnh Lâm Đồng
    "P. Xuân Hương - Đà Lạt": ["Nguyễn Chí Thanh", "Phan Bội Châu", "Trần Quốc Toản", "Ba Tháng Tư", "Hồ Tùng Mậu"],
    "P. Lâm Viên - Đà Lạt": ["Trần Phú", "Hoàng Văn Thụ", "Hai Bà Trưng"],
    "P. Bảo Lộc": ["Trần Phú", "Nguyễn Văn Cừ", "Lê Hồng Phong"],
    "P. Phan Thiết": ["Trần Hưng Đạo", "Nguyễn Đình Chiểu", "Thủ Khoa Huân", "Tôn Đức Thắng"],

    // Các Tỉnh thành còn lại (đảm bảo tỉnh nào cũng có tuyến đường chuẩn)
    "P. Hạ Long": ["Trần Quốc Nghiễn", "25 Tháng 4", "Lê Thánh Tông"],
    "P. Bãi Cháy": ["Hạ Long", "Cái Lân", "Hoàng Quốc Việt"],
    "P. Phố Hiến": ["Nguyễn Văn Linh", "Điện Biên", "Tô Hiệu"],
    "X. Văn Giang": ["Đại lộ San Hô", "Đường 52m", "Thảo Nguyên"],
    "P. Tân Ninh": ["Cách Mạng Tháng 8", "30 Tháng 4", "Trần Hưng Đạo"],
    "P. Long An": ["Hùng Vương", "Nguyễn Đình Chiểu", "Trần Hưng Đạo"],
    "P. Long Xuyên": ["Trần Hưng Đạo", "Hà Hoàng Hổ", "Nguyễn Huệ"],
    "P. Rạch Giá": ["Nguyễn Trung Trực", "3 Tháng 2", "Lâm Quang Ky"],
    "Đặc khu Phú Quốc": ["Trần Hưng Đạo", "30 Tháng 4", "Nguyễn Trung Trực"],
    "P. Việt Trì": ["Đại lộ Hùng Vương", "Nguyễn Tất Thành", "Trần Phú"],
    "P. Vĩnh Yên": ["Mê Linh", "Hai Bà Trưng", "Nguyễn Tất Thành"],
    "P. Hòa Lư": ["Trần Hưng Đạo", "Đinh Tiên Hoàng", "Tràng An"],
    "P. Nam Định": ["Trần Hưng Đạo", "Hùng Vương", "Giải Phóng"],
    "P. Phan Đình Phùng": ["Hoàng Văn Thụ", "Lương Ngọc Quyến", "Cách Mạng Tháng 8"],
    "P. Hạc Thành": ["Đại lộ Lê Lợi", "Trần Phú", "Nguyễn Trãi"],
    "P. Trường Vinh": ["Quang Trung", "Lê Lợi", "Nguyễn Văn Cừ"],
    "P. Thành Sen": ["Phan Đình Phùng", "Hà Huy Tập", "Trần Phú"],
    "P. Đông Hà": ["Hùng Vương", "Lê Duẩn", "Trần Hưng Đạo"],
    "P. Đồng Hới": ["Trần Hưng Đạo", "Lý Thường Kiệt", "Quang Trung"],
    "P. Cẩm Thành": ["Quang Trung", "Hùng Vương", "Phan Bội Châu"],
    "P. Pleiku": ["Hùng Vương", "Trần Phú", "Phan Đình Phùng"],
    "P. Quy Nhơn": ["An Dương Vương", "Nguyễn Tất Thành", "Xuân Diệu"],
    "P. Buôn Ma Thuột": ["Lê Duẩn", "Phan Chu Trinh", "Nguyễn Tất Thành"],
    "P. Tuy Hòa": ["Hùng Vương", "Trần Hưng Đạo", "Độc Lập"],
    "P. Cao Lãnh": ["Nguyễn Huệ", "30 Tháng 4", "Lý Thường Kiệt"],
    "P. Mỹ Tho": ["Ấp Bắc", "Hùng Vương", "Lý Thường Kiệt"],
    "P. Long Châu": ["Phạm Hùng", "Lê Thái Tổ", "Trưng Nữ Vương"],
    "P. Bến Tre": ["Đại lộ Đồng Khởi", "Nguyễn Đình Chiểu", "Cách Mạng Tháng 8"],
    "P. Tân Thành": ["Trần Hưng Đạo", "Phan Ngọc Hiển", "Ngô Quyền"],
    "P. Bạc Liêu": ["Trần Phú", "Hai Bà Trưng", "Võ Thị Sáu"],
    "P. Lào Cai": ["Hoàng Liên", "Nhạc Sơn", "Trần Hưng Đạo"],
    "P. Yên Bái": ["Điện Biên", "Nguyễn Thái Học", "Đinh Tiên Hoàng"],
    "P. Minh Xuân": ["Quang Trung", "Bình Thuận", "17 Tháng 8"],
    "P. Lương Văn Tri": ["Bà Triệu", "Lê Lợi", "Trần Đăng Ninh"],
    "P. Tô Hiệu": ["Trường Chinh", "Chu Văn Thịnh", "Tô Hiệu"],
    "P. Điện Biên Phủ": ["Võ Nguyên Giáp", "Nguyễn Chí Thanh", "Hoàng Văn Thái"],
    "P. Tân Phong": ["Trần Phú", "Đại lộ Lê Lợi", "30 Tháng 4"],
    "P. Thục Phán": ["Kim Đồng", "Hoàng Đình Giong", "Vườn Cam"]
  };

  const WARD_COORDS = {
    "P. Sài Gòn": [10.7769, 106.7009],
    "P. Tân Định": [10.7894, 106.6911],
    "P. Bến Thành": [10.7721, 106.6983],
    "P. Cầu Ông Lãnh": [10.7654, 106.6932],
    "P. Bàn Cờ": [10.7712, 106.6815],
    "P. Xuân Hòa": [10.7815, 106.6889],
    "P. Nhiêu Lộc": [10.7852, 106.6815],
    "P. Vĩnh Hội": [10.7605, 106.7018],
    "P. Khánh Hội": [10.7582, 106.7064],
    "P. Xóm Chiếu": [10.7568, 106.7115],
    "P. Chợ Quán": [10.7574, 106.6788],
    "P. An Đông": [10.7586, 106.6702],
    "P. Chợ Lớn": [10.7524, 106.6598],
    "P. Tân Thuận": [10.7462, 106.7265],
    "P. Phú Thuận": [10.7285, 106.7342],
    "P. Tân Mỹ": [10.7294, 106.7218],
    "P. Tân Hưng": [10.7418, 106.7024],
    "P. Chánh Hưng": [10.7412, 106.6754],
    "P. Hòa Hưng": [10.7758, 106.6682],
    "P. Gia Định": [10.8012, 106.7065],
    "P. Thạnh Mỹ Tây": [10.8025, 106.7185],
    "P. Cầu Kiệu": [10.7965, 106.6825],
    "P. Phú Nhuận": [10.7942, 106.6758],
    "P. Đức Nhuận": [10.8045, 106.6782],
    "P. Hạnh Thông": [10.8225, 106.6845],
    "P. Gò Vấp": [10.8365, 106.6695],
    "P. Tân Sơn Nhì": [10.8015, 106.6285],
    "P. An Lạc": [10.7354, 106.6145],
    "P. Hiệp Bình": [10.8412, 106.7215],
    "P. Thủ Đức": [10.8512, 106.7585],
    "P. Long Bình": [10.8421, 106.8364],
    "P. An Khánh": [10.7945, 106.7346],
    "P. Bình Trưng": [10.7885, 106.7642],
    "P. Cát Lái": [10.7695, 106.7685],
    "P. Thủ Dầu Một": [10.9804, 106.6519],
    "P. Dĩ An": [10.9068, 106.7694],
    "P. Đông Hòa": [10.8845, 106.7845],
    "P. Thuận An": [10.9241, 106.7130],
    "P. Vũng Tàu": [10.3460, 107.0843],
    "P. Tam Thắng": [10.3485, 107.0942],
    "P. Hoàn Kiếm": [21.0285, 105.8542],
    "P. Ba Đình": [21.0341, 105.8372],
    "P. Ngọc Hà": [21.0365, 105.8185],
    "P. Đống Đa": [21.0124, 105.8256],
    "P. Vĩnh Tuy": [20.9985, 105.8695],
    "P. Cầu Giấy": [21.0338, 105.7945],
    "P. Nghĩa Đô": [21.0445, 105.7985],
    "P. Yên Hòa": [21.0165, 105.7942],
    "P. Thanh Xuân": [20.9956, 105.8089],
    "P. Tây Hồ": [21.0645, 105.8215],
    "P. Phú Thượng": [21.0785, 105.8045],
    "P. Từ Liêm": [21.0185, 105.7685],
    "P. Tây Mỗ": [21.0045, 105.7415],
    "X. Gia Lâm": [20.9945, 105.9425],
    "P. Hải Châu": [16.0678, 108.2208],
    "P. An Hải": [16.0585, 108.2325],
    "P. Ngũ Hành Sơn": [16.0185, 108.2515],
    "P. Hồng Bàng": [20.8589, 106.6745],
    "P. Lê Chân": [20.8285, 106.6885],
    "P. Ninh Kiều": [10.0341, 105.7875],
    "P. Thuận Hóa": [16.4637, 107.5909],
    "P. Biên Hòa": [10.9574, 106.8426],
    "P. Võ Cường": [21.1785, 106.0642],
    "P. Nha Trang": [12.2388, 109.1967],
    "P. Xuân Hương - Đà Lạt": [11.9404, 108.4583],
    "X. Văn Giang": [20.9465, 105.9685]
  };

  // Dự án chuẩn gắn đúng Tỉnh/Thành, Phường/Xã mới, Tên Đường và Tọa độ GPS
  const PROJECTS = [
    // TP. Hồ Chí Minh
    { value: "Vinhomes Central Park", label: "Vinhomes Central Park", city: "TP. Hồ Chí Minh", ward: "P. Thạnh Mỹ Tây", street: "Nguyễn Hữu Cảnh", streetNumber: "208", coords: [10.7949, 106.7219] },
    { value: "Vinhomes Golden River", label: "Vinhomes Golden River", city: "TP. Hồ Chí Minh", ward: "P. Sài Gòn", street: "Tôn Đức Thắng", streetNumber: "2", coords: [10.7865, 106.7069] },
    { value: "Grand Marina Saigon", label: "Grand Marina Saigon", city: "TP. Hồ Chí Minh", ward: "P. Sài Gòn", street: "Tôn Đức Thắng", streetNumber: "2", coords: [10.7878, 106.7076] },
    { value: "Saigon Pearl", label: "Saigon Pearl", city: "TP. Hồ Chí Minh", ward: "P. Thạnh Mỹ Tây", street: "Nguyễn Hữu Cảnh", streetNumber: "92", coords: [10.7905, 106.7186] },
    { value: "Sunwah Pearl", label: "Sunwah Pearl", city: "TP. Hồ Chí Minh", ward: "P. Thạnh Mỹ Tây", street: "Nguyễn Hữu Cảnh", streetNumber: "90", coords: [10.7892, 106.7182] },
    { value: "City Garden", label: "City Garden", city: "TP. Hồ Chí Minh", ward: "P. Thạnh Mỹ Tây", street: "Ngô Tất Tố", streetNumber: "59", coords: [10.7924, 106.7098] },
    { value: "The Marq", label: "The Marq", city: "TP. Hồ Chí Minh", ward: "P. Tân Định", street: "Nguyễn Đình Chiểu", streetNumber: "29B", coords: [10.7868, 106.6975] },
    { value: "Vinhomes Đồng Khởi", label: "Vinhomes Đồng Khởi", city: "TP. Hồ Chí Minh", ward: "P. Sài Gòn", street: "Lê Thánh Tôn", streetNumber: "72", coords: [10.7779, 106.7021] },
    { value: "Vinhomes Grand Park", label: "Vinhomes Grand Park", city: "TP. Hồ Chí Minh", ward: "P. Long Bình", street: "Nguyễn Xiển", streetNumber: "512", coords: [10.8421, 106.8364] },
    { value: "Masteri Centre Point", label: "Masteri Centre Point", city: "TP. Hồ Chí Minh", ward: "P. Long Bình", street: "Nguyễn Xiển", streetNumber: "512", coords: [10.8435, 106.8382] },
    { value: "The Global City", label: "The Global City", city: "TP. Hồ Chí Minh", ward: "P. Phước Long", street: "Đỗ Xuân Hợp", streetNumber: "1", coords: [10.7985, 106.7712] },
    { value: "The Sun Avenue", label: "The Sun Avenue", city: "TP. Hồ Chí Minh", ward: "P. Bình Trưng", street: "Mai Chí Thọ", streetNumber: "28", coords: [10.7876, 106.7484] },
    { value: "Masteri Thảo Điền", label: "Masteri Thảo Điền", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Xa Lộ Hà Nội", streetNumber: "159", coords: [10.8021, 106.7405] },
    { value: "Masteri An Phú", label: "Masteri An Phú", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Xa Lộ Hà Nội", streetNumber: "179", coords: [10.8012, 106.7428] },
    { value: "Lumière Riverside", label: "Lumière Riverside", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Xa Lộ Hà Nội", streetNumber: "259", coords: [10.8018, 106.7452] },
    { value: "Gateway Thảo Điền", label: "Gateway Thảo Điền", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Lê Thước", streetNumber: "2", coords: [10.8029, 106.7418] },
    { value: "Khu đô thị Sala", label: "Khu đô thị Sala", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Mai Chí Thọ", streetNumber: "10", coords: [10.7732, 106.7218] },
    { value: "Empire City Thủ Thiêm", label: "Empire City Thủ Thiêm", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Mai Chí Thọ", streetNumber: "2B", coords: [10.7705, 106.7124] },
    { value: "The Metropole Thủ Thiêm", label: "The Metropole Thủ Thiêm", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Nguyễn Cơ Thạch", streetNumber: "1", coords: [10.7768, 106.7135] },
    { value: "The River Thủ Thiêm", label: "The River Thủ Thiêm", city: "TP. Hồ Chí Minh", ward: "P. An Khánh", street: "Trần Bạch Đằng", streetNumber: "23", coords: [10.7815, 106.7168] },
    { value: "Estella Heights", label: "Estella Heights", city: "TP. Hồ Chí Minh", ward: "P. Bình Trưng", street: "Song Hành", streetNumber: "88", coords: [10.8005, 106.7512] },
    { value: "Lexington Residence", label: "Lexington Residence", city: "TP. Hồ Chí Minh", ward: "P. Bình Trưng", street: "Mai Chí Thọ", streetNumber: "67", coords: [10.7962, 106.7524] },
    { value: "Diamond Island", label: "Diamond Island", city: "TP. Hồ Chí Minh", ward: "P. Cát Lái", street: "Trương Văn Bang", streetNumber: "1", coords: [10.7765, 106.7462] },
    { value: "Vista Verde", label: "Vista Verde", city: "TP. Hồ Chí Minh", ward: "P. Cát Lái", street: "Đồng Văn Cống", streetNumber: "2", coords: [10.7742, 106.7568] },
    { value: "Feliz en Vista", label: "Feliz en Vista", city: "TP. Hồ Chí Minh", ward: "P. Cát Lái", street: "Đồng Văn Cống", streetNumber: "1", coords: [10.7755, 106.7574] },
    { value: "Vạn Phúc City", label: "Vạn Phúc City", city: "TP. Hồ Chí Minh", ward: "P. Hiệp Bình", street: "Quốc Lộ 13", streetNumber: "375", coords: [10.8425, 106.7115] },
    { value: "Sunrise City", label: "Sunrise City", city: "TP. Hồ Chí Minh", ward: "P. Tân Hưng", street: "Nguyễn Hữu Thọ", streetNumber: "23", coords: [10.7398, 106.7015] },
    { value: "Midtown Phú Mỹ Hưng", label: "Midtown Phú Mỹ Hưng", city: "TP. Hồ Chí Minh", ward: "P. Tân Mỹ", street: "Nguyễn Lương Bằng", streetNumber: "15", coords: [10.7228, 106.7274] },
    { value: "Eco Green Saigon", label: "Eco Green Saigon", city: "TP. Hồ Chí Minh", ward: "P. Tân Thuận", street: "Nguyễn Văn Linh", streetNumber: "107", coords: [10.7458, 106.7245] },
    { value: "Saigon South Residences", label: "Saigon South Residences", city: "TP. Hồ Chí Minh", ward: "X. Nhà Bè", street: "Nguyễn Hữu Thọ", streetNumber: "120", coords: [10.7124, 106.7018] },
    { value: "Masteri Millennium", label: "Masteri Millennium", city: "TP. Hồ Chí Minh", ward: "P. Vĩnh Hội", street: "Bến Vân Đồn", streetNumber: "132", coords: [10.7645, 106.6995] },
    { value: "The Tresor", label: "The Tresor", city: "TP. Hồ Chí Minh", ward: "P. Xóm Chiếu", street: "Bến Vân Đồn", streetNumber: "39", coords: [10.7672, 106.7035] },
    { value: "RiverGate Residence", label: "RiverGate Residence", city: "TP. Hồ Chí Minh", ward: "P. Vĩnh Hội", street: "Bến Vân Đồn", streetNumber: "151", coords: [10.7628, 106.6974] },
    { value: "Hà Đô Centrosa Garden", label: "Hà Đô Centrosa Garden", city: "TP. Hồ Chí Minh", ward: "P. Hòa Hưng", street: "Ba Tháng Hai", streetNumber: "200", coords: [10.7768, 106.6782] },
    { value: "Kingdom 101", label: "Kingdom 101", city: "TP. Hồ Chí Minh", ward: "P. Hòa Hưng", street: "Tô Hiến Thành", streetNumber: "334", coords: [10.7752, 106.6635] },
    { value: "Celadon City", label: "Celadon City", city: "TP. Hồ Chí Minh", ward: "P. Tân Sơn Nhì", street: "Bờ Bao Tân Thắng", streetNumber: "88", coords: [10.8035, 106.6185] },
    { value: "CityLand Park Hills", label: "CityLand Park Hills", city: "TP. Hồ Chí Minh", ward: "P. Gò Vấp", street: "Phan Văn Trị", streetNumber: "18", coords: [10.8342, 106.6712] },
    { value: "Golden Mansion", label: "Golden Mansion", city: "TP. Hồ Chí Minh", ward: "P. Đức Nhuận", street: "Phổ Quang", streetNumber: "119", coords: [10.8085, 106.6732] },
    { value: "Orchard Parkview", label: "Orchard Parkview", city: "TP. Hồ Chí Minh", ward: "P. Đức Nhuận", street: "Hồng Hà", streetNumber: "130", coords: [10.8112, 106.6725] },
    { value: "Akari City", label: "Akari City", city: "TP. Hồ Chí Minh", ward: "P. An Lạc", street: "Võ Văn Kiệt", streetNumber: "77", coords: [10.7285, 106.6124] },
    { value: "Mizuki Park", label: "Mizuki Park", city: "TP. Hồ Chí Minh", ward: "X. Bình Hưng", street: "Nguyễn Văn Linh", streetNumber: "1", coords: [10.7245, 106.6542] },
    { value: "The Habitat Bình Dương", label: "The Habitat Bình Dương", city: "TP. Hồ Chí Minh", ward: "P. Thuận An", street: "Đại lộ Bình Dương", streetNumber: "8", coords: [10.9245, 106.7124] },
    { value: "Astral City", label: "Astral City", city: "TP. Hồ Chí Minh", ward: "P. Thuận An", street: "Đại lộ Bình Dương", streetNumber: "28", coords: [10.9185, 106.7095] },
    { value: "Bcons City", label: "Bcons City", city: "TP. Hồ Chí Minh", ward: "P. Đông Hòa", street: "Thống Nhất", streetNumber: "15", coords: [10.8845, 106.7845] },
    { value: "The Sóng Vũng Tàu", label: "The Sóng Vũng Tàu", city: "TP. Hồ Chí Minh", ward: "P. Tam Thắng", street: "Thi Sách", streetNumber: "28", coords: [10.3485, 107.0942] },

    // TP. Hà Nội
    { value: "Vinhomes Smart City", label: "Vinhomes Smart City", city: "TP. Hà Nội", ward: "P. Tây Mỗ", street: "Đại lộ Thăng Long", streetNumber: "Km6", coords: [21.0045, 105.7415] },
    { value: "Vinhomes Ocean Park 1", label: "Vinhomes Ocean Park 1", city: "TP. Hà Nội", ward: "X. Gia Lâm", street: "Đa Tốn", streetNumber: "1", coords: [20.9945, 105.9425] },
    { value: "Vinhomes Times City", label: "Vinhomes Times City", city: "TP. Hà Nội", ward: "P. Vĩnh Tuy", street: "Minh Khai", streetNumber: "458", coords: [20.9952, 105.8685] },
    { value: "Vinhomes Royal City", label: "Vinhomes Royal City", city: "TP. Hà Nội", ward: "P. Thanh Xuân", street: "Nguyễn Trãi", streetNumber: "72A", coords: [21.0025, 105.8152] },
    { value: "Vinhomes Metropolis", label: "Vinhomes Metropolis", city: "TP. Hà Nội", ward: "P. Ngọc Hà", street: "Liễu Giai", streetNumber: "29", coords: [21.0315, 105.8142] },
    { value: "Vinhomes West Point", label: "Vinhomes West Point", city: "TP. Hà Nội", ward: "P. Từ Liêm", street: "Phạm Hùng", streetNumber: "2", coords: [21.0125, 105.7842] },
    { value: "Vinhomes Skylake", label: "Vinhomes Skylake", city: "TP. Hà Nội", ward: "P. Từ Liêm", street: "Phạm Hùng", streetNumber: "16", coords: [21.0215, 105.7812] },
    { value: "Vinhomes D'Capitale", label: "Vinhomes D'Capitale", city: "TP. Hà Nội", ward: "P. Yên Hòa", street: "Trần Duy Hưng", streetNumber: "119", coords: [21.0068, 105.7945] },
    { value: "Keangnam Landmark 72", label: "Keangnam Landmark 72", city: "TP. Hà Nội", ward: "P. Từ Liêm", street: "Phạm Hùng", streetNumber: "E6", coords: [21.0168, 105.7838] },
    { value: "Ciputra Hà Nội", label: "Ciputra Hà Nội", city: "TP. Hà Nội", ward: "P. Phú Thượng", street: "Võ Chí Công", streetNumber: "1", coords: [21.0785, 105.8045] },
    { value: "Starlake Tây Hồ Tây", label: "Starlake Tây Hồ Tây", city: "TP. Hà Nội", ward: "P. Nghĩa Đô", street: "Nguyễn Văn Huyên", streetNumber: "68", coords: [21.0545, 105.7965] },
    { value: "The Matrix One", label: "The Matrix One", city: "TP. Hà Nội", ward: "P. Từ Liêm", street: "Lê Quang Đạo", streetNumber: "1", coords: [21.0112, 105.7695] },
    { value: "Masteri West Heights", label: "Masteri West Heights", city: "TP. Hà Nội", ward: "P. Tây Mỗ", street: "Đại lộ Thăng Long", streetNumber: "2", coords: [21.0032, 105.7395] },

    // Các Tỉnh / Thành phố khác
    { value: "Vinhomes Ocean Park 2 - 3", label: "Vinhomes Ocean Park 2 - 3", city: "Tỉnh Hưng Yên", ward: "X. Văn Giang", street: "Đại lộ San Hô", streetNumber: "1", coords: [20.9465, 105.9685] },
    { value: "Khu đô thị Ecopark", label: "Khu đô thị Ecopark", city: "Tỉnh Hưng Yên", ward: "X. Văn Giang", street: "Thảo Nguyên", streetNumber: "1", coords: [20.9595, 105.9365] },
    { value: "The Monarchy Đà Nẵng", label: "The Monarchy Đà Nẵng", city: "TP. Đà Nẵng", ward: "P. An Hải", street: "Trần Hưng Đạo", streetNumber: "535", coords: [16.0585, 108.2325] },
    { value: "Sun Cosmo Residence", label: "Sun Cosmo Residence", city: "TP. Đà Nẵng", ward: "P. Ngũ Hành Sơn", street: "Trần Thị Lý", streetNumber: "1", coords: [16.0512, 108.2368] },
    { value: "Vinhomes Imperia", label: "Vinhomes Imperia", city: "TP. Hải Phòng", ward: "P. Hồng Bàng", street: "Bạch Đằng", streetNumber: "1", coords: [20.8625, 106.6645] },
    { value: "Vinhomes Marina", label: "Vinhomes Marina", city: "TP. Hải Phòng", ward: "P. Lê Chân", street: "Võ Nguyên Giáp", streetNumber: "1", coords: [20.8285, 106.6885] },
    { value: "Gold Coast Nha Trang", label: "Gold Coast Nha Trang", city: "Tỉnh Khánh Hòa", ward: "P. Nha Trang", street: "Trần Phú", streetNumber: "1", coords: [12.2452, 109.1958] },
    { value: "Aqua City", label: "Aqua City", city: "Tỉnh Đồng Nai", ward: "P. Long Hưng", street: "Hương Lộ 2", streetNumber: "1", coords: [10.8925, 106.8542] },
    { value: "Vinhomes New Center", label: "Vinhomes New Center", city: "Tỉnh Hà Tĩnh", ward: "P. Thành Sen", street: "Hà Huy Tập", streetNumber: "1", coords: [18.3345, 105.9012] }
  ];

  window.VN_ADMIN_2025_CITIES = CITIES;
  window.VN_ADMIN_2025_WARDS_BY_CITY = WARDS_BY_CITY;
  window.VN_ADMIN_2025_STREETS_BY_WARD = STREETS_BY_WARD;
  window.VN_ADMIN_2025_WARD_COORDS = WARD_COORDS;
  window.VN_ADMIN_2025_PROJECTS = PROJECTS;
})();
