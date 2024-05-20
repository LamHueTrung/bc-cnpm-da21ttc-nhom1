# csn-da21ttc-lamhuetrung-sistern-nodejs

# HỆ THỐNG QUẢN LÝ SINH VIÊN THỰC TẬP CỦA BỘ MÔN CÔNG NGHỆ THÔNG TIN <br>

### PHẦN BACK-END

### SỬ DỤNG HOSTING RENDER.COM, LINK BACK-END: https://sistern-v1.onrender.com

  <pre>
    ## TIẾN TRÌNH CÔNG VIỆC <br>
    - Hoàn thành code xây dựng API xác thực người dùng <br>

   - Hoàn thành code Xây dựng API lấy danh sách tin tức <br>

   - Hoàn thành code Xây dựng API lấy danh sách, đăng ký đơn thực tập <br> 

   - Hoàn thành code Xây dựng API thêm, cập nhật thông tin, trạng thái sinh viên <br>

   - Hoàn thành code xây dựng API thêm, lấy thông tin báo cáo sinh viên <br>

   - Hoàn thành code xây dựng API thêm, cập nhật thông tin đợt thực tập, công việc thực tập cho Admin <br>
 
   - Hoàn thành code Xây dựng API thêm, cập nhật thông tin công ty <br>

   - Hoàn thành code xây dựng API thêm, cập nhật thông tin cán bộ hướng dẫn <br>

   - Hoàn thành code xây dựng API lấy danh sách công ty <br>
   
    - Hoàn thành Kiểm tra, fix bugs và tối ưu hóa hiệu suất trên toàn bộ API<br>
     ## Mô tả: Cần cài đặt các thư viên sau: <br>
        "body-parser": "^1.20.2",<br>
        "cors": "^2.8.5",<br>
        "csvtojson": "^2.0.10",<br>
        "date-fns": "^2.30.0",<br>
        "document": "^0.4.7",<br>
        "express": "^4.18.2",<br>
        "fast-csv": "^4.3.6",<br>
        "mongoose": "^6.12.3",<br>
        "multer": "^1.4.5-lts.1",<br>
        "path": "^0.12.7",<br>
        "pdf-lib": "^1.17.1",<br>
        "pdfjs-dist": "^4.0.269",<br>
        "prettier": "^3.0.3",<br>
        "xlsx": "^0.18.5",<br>
        "nodemon": "^3.0.1"<br>
      File Config/db/index.js đây là file cấu hình kết nối đến mongoDB. Đầu tiên cần require thư viện mongoose vào để tương tác với MongoDb một cách thuận tiện. Tạo ra hàm connect để kết nối, sử dụng mongoose.connect() để cấu hình kết nối và sử dụng module.exports = { connect } xuất hàm connect ra để có thể sử dụng nó ở bất kỳ đâu trong ứng dụng. <br>
      Trong thư mục Models chứa các file BaoCao.js,	CanBoHuongDan.js, CongTy.js, DotThucTap.js, GiaoVien.js,	SinhVien.js, 	Taikhoan.js, ThongTinCongBo.js, ThucTap.js, 	TinTuc.js để tạo ra models cho các đối tượng trong cần xử lý trong cơ sở dữ liệu. Thực hiện require mongoose sử dụng để tương tác với cơ sở dữ liệu MongoDB từ ứng dụng Node.js của mình. Định nghĩa Schema để mô tả cấu trúc dữ liệu cho đối tượng trong cơ sở dữ liệu MongoDB. Tạo models từ schema Model này sẽ làm việc như một interface giữa ứng dụng Node.js của bạn và cơ sở dữ liệu MongoDB, cho phép bạn thực hiện các thao tác như tìm kiếm, thêm mới, cập nhật, xoá dữ liệu và nhiều thao tác khác. Xuất model để có thể sử dụng nó ở bất kỳ đâu trong ứng dụng của mình.  <br>
      Trong mục controllers chứa các file CongTyController.js, DotThucTapController.js, GiaoVienController.js, SinhVienController.js, TaiKhoanController.js, ThongTinCongBoController.js, ThucTapController.js, TinTucController.js để xử lý các yêu cầu CRUD từ giao diện người dùng. <br>
      Trong thư mục routes chứa file AdminRoutes.js, CongTyRoutes.js, DangKyRoutes.js, GiaoVienRoutes.js, SinhVienRoutes.js qui định các đường dẫn đến các xử lý được viết trong Controllers. Để sử dụng các hàm xử lý được viết trong controllers cần require các file đó ra gán vào biến và gọi đến các hàm được viết trong file đó bằng cách sử dụng toán tử “.”. <br>
      Thư mục uploads chứa các file báo cáo của sinh viên nộp lên trong quá trình thực tập.<br>
      File index,js khi chạy dự án file index sẽ được tự động thực hiện. Chính vì thế, để sử dụng các thư viện đã cài đặt và các đường dẫn xử lý cần require và định nghĩa ở đây.
<br>
