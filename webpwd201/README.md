# Flask Web Mastery — Ngân Hàng 250 Câu Hỏi Ôn Thi Trắc Nghiệm Chuyên Sâu

Trang web ôn thi trắc nghiệm lập trình web với **Python & Flask** bao quát toàn diện **250 câu hỏi trắc nghiệm** (kèm đáp án và lời giải thích chi tiết bằng tiếng Việt) từ 12 chương học.

Ứng dụng được thiết kế tối giản, sạch sẽ, không gây rối mắt, tối ưu hóa cho việc học thuộc và làm bài thi thử, chạy trực tiếp trên trình duyệt mà không cần cài đặt backend, **sẵn sàng để host miễn phí vĩnh viễn trên GitHub Pages**.

---

## Các Tính Năng Nổi Bật

1. **Chế Độ Học (Study Mode)**:
   - Hiển thị trực quan câu hỏi và làm nổi bật `[Đáp án đúng]`.
   - Hộp **Giải thích chi tiết (Tiếng Việt)** phân tích bản chất tại sao đáp án đó đúng và vì sao các phương án khác sai.
   - Nút ẩn/hiện giải thích linh hoạt để tự nhẩm nhớ trước khi xem lời giải.
   - Nút **Copy** nội dung câu hỏi kèm đáp án nhanh chóng.

2. **Thi Thử Trắc Nghiệm (Exam Mode)**:
   - **Tự động xáo trộn câu hỏi**: Mỗi lần vào thi thử hoặc bấm làm lại, thứ tự các câu hỏi sẽ được xáo trộn ngẫu nhiên hoàn toàn, chống học vẹt theo vị trí.
   - **Tự động ẩn và hiện giải thích**: Ban đầu lời giải thích bị ẩn hoàn toàn. Ngay sau khi bạn chọn câu trả lời (dù đúng hay sai), hệ thống sẽ lập tức hiển thị giải thích chi tiết để đối chiếu kiến thức.
   - **Nút "Làm lại chương này"**: Cho phép xóa kết quả làm bài của riêng chương đang học và xáo trộn lại thứ tự câu hỏi mới để làm lại từ đầu.
   - Tự động nhận diện câu 1 đáp án và câu 2 đáp án đúng.
   - Đồng hồ đếm thời gian làm bài (`Thời gian: 00:00`).
   - Bấm **Nộp bài thi** để nhận bảng điểm tổng kết (thang điểm 10, % chính xác, xếp loại và thời gian hoàn thành).

3. **Sổ Tay Trọng Tâm 12 Chương (Cheat Sheet)**:
   - Tóm tắt toàn bộ khái niệm cốt lõi của 12 chương (Client-Server, Jinja2, Flask-WTF, Pyodbc vs SQLAlchemy, Authentication/Session vs JWT, RBAC 401 vs 403, Blueprints, REST API, WSGI & Nginx...).

4. **Đã Lưu & Câu Làm Sai**:
   - Nút **Lưu** cho bất kỳ câu hỏi nào cần ôn lại.
   - Tab **Câu làm sai** tự động tổng hợp các câu bạn trả lời sai trong lúc thi thử để luyện lại đến khi đạt 100%.

5. **Bộ Lọc & Tìm Kiếm Thông Minh**:
   - Tìm kiếm thời gian thực theo từ khóa (vd: `session`, `csrf`, `sqlalchemy`, `404`, `pyodbc`, `jwt`, `wsgi`...).
   - Lọc theo chương (Chương 1 đến Chương 11/12).
   - Lọc theo loại câu: Lý thuyết hoặc Code / Ứng dụng.
   - Lưới 250 ô số câu hỏi ở thanh bên cho phép nhảy nhanh đến câu bất kỳ.

6. **Giao Diện Tối Giản & Lưu Tiến Độ Tự Động**:
   - Thiết kế sạch sẽ, loại bỏ icon/emoji rườm rà, tập trung 100% vào nội dung câu hỏi.
   - Hỗ trợ giao diện Sáng / Tối.
   - Tự động lưu tiến độ làm bài, danh sách câu đã lưu và kết quả vào `localStorage` của trình duyệt.

---

## Cấu Trúc Thư Mục

```text
webpwd201/
├── index.html                 # Trang chủ giao diện ứng dụng
├── css/
│   └── style.css              # Giao diện responsive, dark/light theme, typography tối giản
├── js/
│   ├── data.js                # Dữ liệu 250 câu hỏi & tóm tắt 12 chương trích xuất từ DOCX
│   └── app.js                 # Logic ứng dụng (học tập, thi thử, xáo trộn, tự động hiện giải thích, reset chương)
├── generate_data.py           # Script Python trích xuất dữ liệu từ file DOCX gốc sang data.js
├── python-web-flask-250-qa-with-answers-inline.docx  # File DOCX gốc
└── README.md                  # Hướng dẫn sử dụng & triển khai lên GitHub Pages
```

---

## Cách Chạy Offline Trên Máy Tính

Không cần cài đặt thêm bất kỳ phần mềm nào:
1. Mở thư mục dự án trên máy tính của bạn.
2. Click đúp chuột vào file `index.html` để mở ngay trên trình duyệt (Chrome, Edge, Firefox, Cốc Cốc, Safari...).
3. Bạn có thể bắt đầu ôn thi ngay lập tức.

---

## Hướng Dẫn Đưa Lên GitHub Để Host Miễn Phí (GitHub Pages)

Để mọi người có thể truy cập website qua đường link internet (ví dụ: `https://ten-ban.github.io/flask-web-mastery/`), bạn chỉ cần làm theo các bước sau:

### Thực hiện trực tiếp trên trình duyệt (Không cần cài Git):

1. **Đăng nhập vào GitHub**: Truy cập [https://github.com](https://github.com) và đăng nhập tài khoản.
2. **Tạo Repository mới**:
   - Bấm vào biểu tượng dấu **`+`** ở góc trên bên phải màn hình -> chọn **New repository**.
   - Mục **Repository name**: Nhập tên (ví dụ: `flask-web-mastery` hoặc `webpwd201`).
   - Chọn chế độ **Public** (Công khai).
   - Bấm nút **Create repository**.
3. **Tải các file lên**:
   - Ở trang repository vừa tạo, bấm vào dòng chữ **"uploading an existing file"**.
   - Kéo và thả toàn bộ các file và thư mục sau vào ô tải lên:
     - `index.html`
     - Thư mục `css/` (chứa `style.css`)
     - Thư mục `js/` (chứa `data.js` và `app.js`)
     - `README.md`
   - Bấm nút xanh **Commit changes** ở dưới cùng.
4. **Kích hoạt GitHub Pages**:
   - Vào mục **Settings** (biểu tượng bánh răng) của repository đó.
   - Ở cột menu bên trái, tìm và bấm vào mục **Pages** (mục Code and automation -> Pages).
   - Tại phần **Build and deployment** -> **Branch**:
     - Chọn nhánh: **`main`** (hoặc `master`).
     - Thư mục giữ nguyên: **`/ (root)`**.
     - Bấm nút **Save**.
5. **Xem website**:
   - Sau khoảng 1 đến 2 phút, hãy tải lại trang Settings -> Pages.
   - Bạn sẽ thấy một thông báo màu xanh lá: **"Your site is live at https://<username>.github.io/<tên-repo>/"**.
   - Bấm vào đường link đó để truy cập website hoặc copy link gửi cho bạn bè cùng ôn tập.

---

## Danh Mục 12 Chương Ôn Tập

| Chương | Tiêu Đề | Số Câu | Trọng Tâm Kiến Thức |
|:---:|:---|:---:|:---|
| **Chương 1** | Web Application Basics | 22 | Client-Server, Static Web vs Web App, MPA vs SPA, Monolith vs Microservices |
| **Chương 2** | Routes & View Functions | 23 | `@app.route()`, URL converters (`<int:id>`, `<path:p>`), `request.args`, `url_for()`, `redirect()` |
| **Chương 3** | Templates in Flask Applications | 22 | Jinja2 syntax, `render_template()`, Kế thừa template (`{% extends %}`), XSS autoescape, filters |
| **Chương 4** | Web Forms in Flask Applications | 23 | WTForms, `FlaskForm`, Field Validators, CSRF protection, `validate_on_submit()` |
| **Chương 5.1** | Database Basics with Pyodbc | 20 | Kết nối ODBC, connection string, cursor (`execute`, `fetchone`), SQL Injection & parameterization |
| **Chương 5.2** | Database & ORM - SQLAlchemy | 25 | ORM mapping, `db.Model`, Primary/Foreign Key, relationships, CRUD session transactions |
| **Chương 6** | Basic Authentication & Session | 23 | Băm mật khẩu (Werkzeug), Client-side signed cookies, Flask-Login (`UserMixin`, `current_user`) |
| **Chương 7** | Roles & Permissions (RBAC) | 23 | Role-Based Access Control, Quan hệ N-N User-Role, Custom Decorator, Lỗi 403 vs 401 |
| **Chương 8** | Web Features & Best Practices | 23 | Flask Blueprints, Application Factory (`create_app`), Flash messages, Upload file an toàn |
| **Chương 9** | REST API with Flask | 23 | Nguyên lý REST Stateless, HTTP Status Codes (200, 201, 204, 400...), `jsonify()`, CORS, JWT tokens |
| **Chương 10** | Decorator, Middleware & Error Handling | 12 | Python decorators (`@functools.wraps`), `@app.errorhandler`, Request lifecycle hooks |
| **Chương 11** | Testing & Deployment | 11 | Unit test (`test_client()`), In-memory SQLite, WSGI Servers (Gunicorn, Waitress), Nginx reverse proxy |
