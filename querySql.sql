drop database QLChuyenBay
go
create database QLChuyenBay
go
use QLChuyenBay
go

/*QLChuyenBay*/
CREATE table [ChuyenBay]
(
	[MaChuyenBay] Integer NOT NULL IDENTITY(1, 1),
	[SoHieuChuyenBay] Varchar(10) NOT NULL,
	[DiaDiemKhoiHanh] char(4) NOT NULL,
	[DiaDiemDen] char(4) NOT NULL,
	[NgayGioKhoiHanh] Datetime NOT NULL,
	[NgayGioDen] Datetime NOT NULL,
	[TongSoVe] Smallint NOT NULL,
	[GiaVe] Integer NOT NULL,
	[SoDoGheNgoi] Varchar(10) NOT NULL,
	[KhoangCachGhe] Tinyint NOT NULL,
	[LoaiMayBay] Varchar(50) NOT NULL,
	[TrangThai] NVarchar (50) not null,
	[HangBay] varchar(10) Not Null
Primary Key ([MaChuyenBay])
) 
go

Create table [HangBay]
(
	[MaHangBay] Varchar(10) NOT NULL,
	[TenHangBay] Nvarchar(50) NOT NULL,
	[HinhAnhHangBay] Image NULL,
	[SoHanhLiXachTay] TinyInt,
	[TenDangNhap] Varchar(20) NOT NULL,
	[MatKhau] Varchar(20) NOT NULL
Primary Key ([MaHangBay])
) 
go

Create table [LoaiHangVe]
(
	[PhoThong] Integer NULL,
	[UuDaiPhoThong] Ntext NULL,
	[SoVePhoThong] Smallint NULL,
	[PhoThongDacBiet] Integer NULL,
	[UuDaiDacBiet] Ntext NULL,
	[SoVeDacBiet] Smallint NULL,
	[ThuongGia] Integer NULL,
	[UuDaiThuongGia] Ntext NULL,
	[SoVeThuongGia] Smallint NULL,
	[HangNhat] Integer NULL,
	[UuDaiHangNhat] Ntext NULL,
	[SoVeHangNhat] Smallint NULL,
	[MaChuyenBay] Integer NOT NULL,
	Primary Key ([MaChuyenBay])
) 
go

Create table [GiaHanhLiMuaThem]
(
	[SoKi] Char(10) NULL,
	[GiaTien] Integer NULL,
	[MaHangBay] varchar(10)
) 
go

/*Create Table HanhLy
(
	MaVeHangBay 1--n HanhKhach
	MaHanhKhach
	SoKy (vd: 15kg)
		Dua vao HangBay va HangVe
	GiaSoky (vd: 50.000d)
	SoLuong (vd: 2)
	GiaTien = GiaSoky * SoLuong (vd: 50.000 * 2)
	TongTien = nGiaTien
)*/

Create table DoanhThuTheoThang
(
	MaBangDoanhThu Char(10) NOT NULL,
	SoVeBanRa Integer,
	SoChuyenBay Integer,
	LoiNhuanBanVe Decimal(13,3),
	TongTienThuDuoc Decimal(13,3),
	ThangHienTai smalldatetime,
	MaHangBay Varchar(10) NOT NULL,
	Primary Key(MaBangDoanhThu)
)

Create Table ThongTinHanhKhach
(
	MaHanhKhach varchar (6) not null primary key,
	DanhXung nvarchar(10) not null,
	Ho nvarchar(200) not null,
	TenDemVaTen nvarchar (30) not null,
	NgaySinh datetime not null,
	QuocTich varchar(10) not null,
	SoHanhLiMuaThem int,
	GiaTienHanhLi decimal(13,3),
	MaNguoiLienHe varchar (6) not null,
	MaChuyenBay Integer NOT NULL IDENTITY(1, 1)
	/*SoDienThoaiHK varchar (15) not null,
	SoCMND varchar (9) not null,*/
)

Create Table NguoiLienHe
(
	MaNguoiLienHe varchar (6) not null primary key,
	MaNguoiDung varchar (6) not null,
	Ho nvarchar(200) not null,
	TenDemVaTen nvarchar (30) not null,
	SoDienThoai varchar(15) not null,
	Email varchar(50) not null,
	MaQuocGia varchar(10) not null,
	MaChuyenBay Integer NOT NULL IDENTITY(1, 1)
)
/*lay tu profile*/
Create Table NguoiDung
(
	MaNguoiDung varchar (6) NOT NULL Primary Key,
	DanhXung nvarchar(10) not null,
	Ho nvarchar(200) not null,
	TenDemVaTen nvarchar (30) not null,
	SoDienThoai varchar(15) not null,
	Email varchar(50) not null,
	MaQuocGia varchar(10) not null,
	NgaySinh datetime not null,
	QuocTich varchar(10) not null,
)

Create Table VeDienTu
(
	MaDatCho varchar(6) NOT NULL,
	MaKhuyenMai Char(10) NOT NULL,
	TrangThaiThanhToan NVarchar (20) not null,
	GiaVe Decimal(13,3) not null,
	MaChuyenBay Integer NOT NULL IDENTITY(1, 1),
	MaNguoiLienHe varchar (6) not null,
	Primary Key (MaDatCho, MaNguoiLienHe)
)

Create table [DiaDiem]
(
	[MaDiaDiem] Char(4),
	[TenDiaDiem] NVarchar(50),
	[TenSanBay] NVarchar(50),
	Primary Key([MaDiaDiem])
)
go

Create table [MaKhuyenMai]
(
	[MaKhuyenMai] Char(10) NOT NULL,
	[ThoiHanKhuyenMai] datetime,
	[TinhTrangMa] Char(15),
	[PhanTramGiamGia] Decimal(4,3),
	[SoTienGiamGia] Decimal(13,3),
	[SoLuongMa] Int,
	Primary Key([MaKhuyenMai])
)

Alter table [LoaiHangVe] add foreign key([MaChuyenBay]) references [ChuyenBay] ([MaChuyenBay]) on update no action on delete no action 
go
Alter table ThongTinHanhKhach add foreign key (MaChuyenBay) references ChuyenBay (MaChuyenBay)
go
Alter table ThongTinHanhKhach add foreign key (MaNguoiLienHe) references NguoiLienHe (MaNguoiLienHe)
go
Alter table NguoiLienHe add foreign key (MaNguoiDung) references NguoiDung (MaNguoiDung)
go
Alter table VeDienTu add foreign key (MaNguoiLienHe) references NguoiLienHe (MaNguoiLienHe)
go
Alter table [ChuyenBay] add foreign key([HangBay]) references [HangBay] ([MaHangBay]) on update no action on delete no action
go
Alter table DoanhThuTheoThang add foreign key (MaHangBay) references HangBay (MaHangBay)
go
Alter table [GiaHanhLiMuaThem] add foreign key([MaHangBay]) references [HangBay] ([MaHangBay]) on update no action on delete no action
go

insert into HangBay(MaHangBay, TenHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
values ('VN', N'Vietnam Airline', 12, 'vietnamairline', 'vietnamairline123')
insert into HangBay(MaHangBay, TenHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
values ('VJ', N'Vietjet Air', 10, 'vietjetair', 'vietjetair123')
insert into HangBay(MaHangBay, TenHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
values ('QH', N'Bamboo Airways', 15, 'bambooairway', 'bambooairway123')
insert into HangBay(MaHangBay, TenHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
values ('BL', N'Pacific Airlines', 12, 'pacificairlines', 'pacificairlines123')
insert into HangBay(MaHangBay, TenHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
values ('AK', N'Air Asia', 10, 'airasia', 'airasia123')
insert into HangBay(MaHangBay, TenHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
values ('AA', N'American Airline', 12, 'americanairline', 'americanairline123')

insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('DAD', N'Đà Nẵng, Việt Nam', N'Sân bay Đà Nẵng')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('SGN', N'Sài Gòn, Việt Nam', N'Sân bay Tân Sơn Nhất')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('HAN', N'Hà Nội, Việt Nam', N'Sân bay Nội Bài')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('DLI', N'Đà Lạt, Việt Nam', N'Sân bay Liên Khương')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('SINA', N'Singapore, Singapore', N'Sân bay Singapore')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('SYD', N'Sydney, Úc', N'Sân bay quốc tế Sydney')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('BKKA', N'Bangkok, Thái Lan', N'Sân bay Bangkok')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('MNL', N'Manila, Philippines', N'Sân bay quốc tế Ninoy Aquino')
insert into DiaDiem(MaDiaDiem, TenDiaDiem, TenSanBay)
values ('OSAA', N'Osaka, Nhật Bản', N'Sân bay Osaka')

insert into ChuyenBay(SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('VN 734', N'DAD', 'SGN', '2022-10-04 00:00:00.000', '2022-12-04 02:00:00.000', 100, 850000, '3-3', 34, 'Boeing 787', N'Đã cất cánh', 'VN')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('VJ 134', N'OSAA', 'MNL', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 1000000, '3-3', 32, 'Airbus A350', N'Đã cất cánh', 'VJ')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('QH 441', N'BKKA', 'SYD', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 900000, '3-3', 30, 'Airbus A350', N'Đã cất cánh', 'QH')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('BL 7124', N'DLI', 'SINA', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 700000, '3-3', 31, 'Airbus A321', N'Đã cất cánh', 'BL')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('AA 712', N'DAD', 'MNL', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 750000, '3-3', 32, 'ATR 72-500', N'Đã cất cánh', 'AA')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('AK 652', N'MNL', 'SGN', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 650000, '3-3', 34, 'Airbus A321', N'Đã cất cánh', 'AK')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('VN 236', 'DAD', 'MNL', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 800000, '3-3', 32, 'Boeing 787', N'Đã cất cánh', 'VN')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('VJ 543', 'OSAA', 'SYD', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 865000, '3-3', 30, 'Airbus A321', N'Đã cất cánh', 'VJ')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('QH 6534', 'MNL', 'OSAA', '2022-10-04 00:00:00.000', '2022-10-04 02:00:00.000', 100, 900000, '3-3', 33, 'Boeing 787', N'Đã cất cánh', 'QH')
insert into ChuyenBay( SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
values ('QH 6514', 'MNL', 'OSAA', '2022-05-20 00:00:00.000', '2022-05-20 02:00:00.000', 100, 900000, '3-3', 33, 'Boeing 787', N'Đã cất cánh', 'QH')


create PROCEDURE [dbo].[spChuyenBay_addFlights] 
	-- Add the parameters for the stored procedure here
	@SoHieuChuyenBay Varchar(10),
	@DiaDiemKhoiHanh varchar(4),
	@DiaDiemDen varchar(4),
	@NgayGioKhoiHanh datetime,
	@NgayGioDen datetime,
	@TongSoVe smallint,
	@GiaVe int,
	@SoDoGheNgoi varchar(10),
	@KhoangCachGhe tinyint,
	@LoaiMayBay varchar(10),
	@TrangThai nvarchar(50),
	@HangBay varchar(10),
	@PhoThong Integer,
	@UuDaiPhoThong NText,
	@SoVePhoThong SmallInt,
	@PhoThongDacBiet Integer,
	@UuDaiDacBiet NText,
	@SoVeDacBiet SmallInt,
	@ThuongGia Integer,
	@UuDaiThuongGia NText,
	@SoVeThuongGia SmallInt,
	@HangNhat Integer,
	@UuDaiHangNhat NText,
	@SoVeHangNhat SmallInt
AS
BEGIN
	DECLARE @MaChuyenBay INTEGER;
	SET @MaChuyenBay = IDENT_CURRENT('ChuyenBay') + 1

	insert into ChuyenBay(SoHieuChuyenBay, DiaDiemKhoiHanh, DiaDiemDen, 
	NgayGioKhoiHanh, NgayGioDen, TongSoVe, GiaVe, SoDoGheNgoi, KhoangCachGhe, LoaiMayBay, TrangThai, HangBay)
	values (@SoHieuChuyenBay, @DiaDiemKhoiHanh, @DiaDiemDen, @NgayGioKhoiHanh, @NgayGioDen, @TongSoVe, 
	@GiaVe, @SoDoGheNgoi, @KhoangCachGhe, @LoaiMayBay, @TrangThai, @HangBay)

	insert into LoaiHangVe(PhoThong, UuDaiPhoThong, SoVePhoThong, PhoThongDacBiet, UuDaiDacBiet, SoVeDacBiet,
	ThuongGia, UuDaiThuongGia, SoVeThuongGia, HangNhat, UuDaiHangNhat, SoVeHangNhat, MaChuyenBay)
	values (@PhoThong, @UuDaiPhoThong, @SoVePhoThong, @PhoThongDacBiet, @UuDaiDacBiet, @SoVeDacBiet,
	@ThuongGia, @UuDaiThuongGia, @SoVeThuongGia, @HangNhat, @UuDaiHangNhat, @SoVeHangNhat, @MaChuyenBay)
END

create PROCEDURE dbo.spChuyenBay_updateFlights
	-- Add the parameters for the stored procedure here
	@flightId Char(10),
	@SoHieuChuyenBay Varchar(10),
	@DiaDiemKhoiHanh Nvarchar(200),
	@DiaDiemDen Nvarchar(200),
	@NgayGioKhoiHanh datetime,
	@NgayGioDen datetime,
	@TongSoVe smallint,
	@GiaVe int,
	@SoDoGheNgoi varchar(10),
	@KhoangCachGhe tinyint,
	@LoaiMayBay varchar(10),
	@TrangThai nvarchar(50),
	@HangBay nvarchar(50),
	@PhoThong Integer,
	@UuDaiPhoThong NText,
	@SoVePhoThong SmallInt,
	@PhoThongDacBiet Integer,
	@UuDaiDacBiet NText,
	@SoVeDacBiet SmallInt,
	@ThuongGia Integer,
	@UuDaiThuongGia NText,
	@SoVeThuongGia SmallInt,
	@HangNhat Integer,
	@UuDaiHangNhat NText,
	@SoVeHangNhat SmallInt
AS
BEGIN
	update ChuyenBay
	set SoHieuChuyenBay = @SoHieuChuyenBay, DiaDiemKhoiHanh = @DiaDiemKhoiHanh, DiaDiemDen = @DiaDiemDen, 
	NgayGioKhoiHanh = @NgayGioKhoiHanh, NgayGioDen = @NgayGioDen, TongSoVe = @TongSoVe, GiaVe = @GiaVe, SoDoGheNgoi = @SoDoGheNgoi,
	KhoangCachGhe = @KhoangCachGhe, LoaiMayBay = @LoaiMayBay, TrangThai = @TrangThai, HangBay = @HangBay
	where MaChuyenBay = @flightId

	update LoaiHangVe
	set PhoThong = @PhoThong, UuDaiPhoThong = @UuDaiPhoThong, SoVePhoThong = @SoVePhoThong, PhoThongDacBiet = @PhoThongDacBiet,
	UuDaiDacBiet = @UuDaiDacBiet, SoVeDacBiet = @SoVeDacBiet, ThuongGia = @ThuongGia,
	UuDaiThuongGia = @UuDaiThuongGia, SoVeThuongGia = @SoVeThuongGia, HangNhat = @HangNhat,
	UuDaiHangNhat = @UuDaiHangNhat, SoVeHangNhat = @SoVeHangNhat 
	where MaChuyenBay = @flightId
END
GO

create PROCEDURE dbo.spHangBay_addPartner 
	-- Add the parameters for the stored procedure here
	@MaHangBay Varchar(10),
	@TenHangBay nVarchar(50),
	@HinhAnhHangBay Image,
	@SoHanhLiXachTay tinyInt,
	@TenDangNhap varchar(20),
	@MatKhau varchar(20)
AS
BEGIN
	insert into HangBay(MaHangBay, TenHangBay, HinhAnhHangBay, SoHanhLiXachTay, TenDangNhap, MatKhau)
	values (@MaHangBay, @TenHangBay, @HinhAnhHangBay, @SoHanhLiXachTay, @TenDangNhap, @MatKhau)
END
GO