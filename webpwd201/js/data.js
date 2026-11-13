// FLASK WEB MASTERY - ASSESSMENT BANK (250 QUESTIONS)
// Auto-generated from python-web-flask-250-qa-with-answers-inline.docx

const CHAPTERS_DATA = [
  {
    "id": "ch1",
    "docTitle": "Chapter 1: Web Application Basics",
    "title": "Chương 1: Tổng quan Ứng dụng Web",
    "engTitle": "Web Application Basics",
    "icon": "🌐",
    "badge": "22 câu",
    "summary": "Kiến trúc Web (Client-Server, Request-Response), Phân biệt Trang web tĩnh (Static Web) vs Ứng dụng Web (Web App), Mô hình MPA (Multi-Page App) vs SPA (Single-Page App), Giao thức HTTP/HTTPS, Kiến trúc Monolithic vs Microservices, Cấu trúc URL/URI, Web Server vs Application Server.",
    "keyTakeaways": [
      "World Wide Web do Tim Berners-Lee sáng tạo năm 1989.",
      "Static Website hiển thị nội dung tĩnh cố định; Web Application tập trung xử lý tương tác động của người dùng và lưu trữ dữ liệu.",
      "MPA (Multi-Page Application): Server kết xuất HTML (SSR), mỗi thao tác chuyển trang khiến trình duyệt tải lại toàn bộ tài liệu (full reload). Rất tốt cho SEO.",
      "SPA (Single-Page Application): Tải 1 file HTML gốc ban đầu, client-side JS (React/Vue/Angular) gọi API lấy JSON và cập nhật DOM linh hoạt không cần reload trang.",
      "Client gửi HTTP Request (Headers + Body), Server xử lý và trả về HTTP Response (Status Code + Headers + Payload).",
      "Monolithic: Toàn bộ module nằm chung 1 codebase/tiến trình duy nhất, dễ phát triển ban đầu nhưng khó scale độc lập. Microservices: Chia nhỏ thành các dịch vụ độc lập giao tiếp qua mạng (HTTP/gRPC)."
    ]
  },
  {
    "id": "ch2",
    "docTitle": "Chapter 2: Routes & View Functions",
    "title": "Chương 2: Routes & View Functions",
    "engTitle": "Routes & View Functions",
    "icon": "🛣️",
    "badge": "23 câu",
    "summary": "Định tuyến trong Flask với @app.route(), View Functions, URL Dynamic Parameters & Converters (string, int, float, path, uuid), Phương thức HTTP (GET, POST, PUT, DELETE), Hàm url_for(), redirect(), abort(), Đối tượng request toàn cục (request.args, request.form, request.json).",
    "keyTakeaways": [
      "Routing ánh xạ URL request đến view function xử lý bằng decorator `@app.route('/url')`.",
      "URL Converters mặc định là `<string:var>` (không chứa dấu gạch chéo `/`). Các converter khác: `<int:id>`, `<float:price>`, `<path:subpath>` (chấp nhận dấu gạch chéo), `<uuid:uid>`.",
      "Mặc định route chỉ nhận phương thức `GET`. Để nhận thêm POST, phải khai báo: `@app.route('/login', methods=['GET', 'POST'])`.",
      "`url_for('function_name', param=val)` tạo URL động theo tên view function, tránh hardcode URL.",
      "`redirect(url)` trả về HTTP 302 chuyển hướng; `abort(status_code)` dừng thực thi và ném mã lỗi HTTP (vd: 404, 403).",
      "`request.args` lấy query parameters từ URL (`?key=value`); `request.form` lấy dữ liệu form POST (application/x-www-form-urlencoded); `request.get_json()` / `request.json` parse dữ liệu body JSON."
    ]
  },
  {
    "id": "ch3",
    "docTitle": "Chapter 3: Templates in Flask Applications",
    "title": "Chương 3: Jinja2 Templates",
    "engTitle": "Templates in Flask Applications",
    "icon": "📄",
    "badge": "22 câu",
    "summary": "Template Engine Jinja2, render_template(), Cú pháp biểu thức {{ expr }} và thẻ lệnh {% tag %}, Kế thừa giao diện (Template Inheritance: {% extends %}, {% block %}), Bộ lọc (Filters: |safe, |length, |upper, |default), Vòng lặp & Biến loop (loop.index, loop.first), Context Processors, Phòng chống XSS tự động.",
    "keyTakeaways": [
      "Flask sử dụng Jinja2 làm template engine mặc định, lưu trong thư mục `templates/`.",
      "Cú pháp: `{{ variable }}` để in giá trị; `{% statement %}` để điều khiển logic (if, for, block); `{# comment #}` để ghi chú.",
      "Kế thừa template: Template con dùng `{% extends 'base.html' %}` và ghi đè nội dung trong các khối `{% block content %}...{% endblock %}`.",
      "Jinja2 mặc định tự động escape HTML để chống tấn công Cross-Site Scripting (XSS). Để cho phép render HTML thô an toàn, dùng filter `{{ data | safe }}`.",
      "Biến vòng lặp `loop`: `loop.index` (chỉ số từ 1), `loop.index0` (chỉ số từ 0), `loop.first` (true nếu là phần tử đầu), `loop.last` (true nếu là phần tử cuối).",
      "`@app.context_processor` cho phép inject các biến hoặc hàm dùng chung vào tất cả template mà không cần truyền thủ công ở từng `render_template()`."
    ]
  },
  {
    "id": "ch4",
    "docTitle": "Chapter 4: Web Forms in Flask Applications",
    "title": "Chương 4: Web Forms & Flask-WTF",
    "engTitle": "Web Forms in Flask Applications",
    "icon": "📝",
    "badge": "23 câu",
    "summary": "Xử lý Form HTML, Thư viện WTForms & Flask-WTF, Lớp FlaskForm, Các loại trường (StringField, PasswordField, SubmitField, BooleanField), Validators (DataRequired, Email, Length, EqualTo), Bảo vệ CSRF Token (SECRET_KEY, form.hidden_tag()), Kiểm tra form với validate_on_submit().",
    "keyTakeaways": [
      "Flask-WTF tích hợp thư viện WTForms vào Flask, yêu cầu cấu hình `app.config['SECRET_KEY']` để sinh CSRF token an toàn.",
      "Mỗi form kế thừa từ lớp `flask_wtf.FlaskForm`, định nghĩa các trường như `StringField`, `PasswordField`, `SubmitField`.",
      "Validators: `DataRequired()` bắt buộc nhập, `Email()` kiểm tra định dạng email, `Length(min=..., max=...)`, `EqualTo('password')` kiểm tra khớp mật khẩu.",
      "Trong template, bắt buộc gọi `{{ form.hidden_tag() }}` hoặc `{{ form.csrf_token }}` để render thẻ input ẩn chứa CSRF token chống tấn công giả mạo yêu cầu (Cross-Site Request Forgery).",
      "Trong view function, `if form.validate_on_submit():` kiểm tra cả 2 điều kiện: phương thức là POST và tất cả validator đều hợp lệ."
    ]
  },
  {
    "id": "ch5_1",
    "docTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "title": "Chương 5.1: Cơ sở dữ liệu với Pyodbc",
    "engTitle": "Database Basics with Pyodbc",
    "icon": "🗄️",
    "badge": "20 câu",
    "summary": "Kết nối RDBMS (SQL Server, MySQL) qua ODBC driver với thư viện pyodbc, Cấu trúc Connection String (DRIVER, SERVER, DATABASE, UID, PWD), Đối tượng Connection & Cursor, Thực thi truy vấn (execute, fetchone, fetchall), Truy vấn tham số hóa (Parameterized queries) phòng ngừa SQL Injection, Transaction (commit, rollback).",
    "keyTakeaways": [
      "pyodbc là thư viện Python kết nối cơ sở dữ liệu quan hệ qua giao diện chuẩn Open Database Connectivity (ODBC).",
      "Connection String chứa: `DRIVER={ODBC Driver...};SERVER=...;DATABASE=...;UID=...;PWD=...` hoặc `Trusted_Connection=yes`.",
      "Đối tượng `cursor`: dùng `cursor.execute(sql, params)` để chạy lệnh. `cursor.fetchone()` trả về 1 dòng, `cursor.fetchall()` trả về danh sách tất cả các dòng.",
      "Chống SQL Injection: Luôn sử dụng dấu chấm hỏi `?` làm placeholder tham số hóa (vd: `cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))`), TUYỆT ĐỐI không nối chuỗi thủ công.",
      "Với các thao tác ghi (INSERT, UPDATE, DELETE), bắt buộc gọi `conn.commit()` để lưu thay đổi vĩnh viễn vào CSDL, hoặc `conn.rollback()` nếu xảy ra lỗi."
    ]
  },
  {
    "id": "ch5_2",
    "docTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "title": "Chương 5.2: ORM với Flask-SQLAlchemy",
    "engTitle": "Database & ORM - SQLAlchemy",
    "icon": "⚡",
    "badge": "25 câu",
    "summary": "Mô hình ORM (Object-Relational Mapping), Khởi tạo Flask-SQLAlchemy, Định nghĩa Model (db.Model, db.Column, db.Integer, db.String), Primary Key & Foreign Key (db.ForeignKey), Quan hệ 1-N & N-N (db.relationship, backref, cascade), Các thao tác CRUD (db.session.add, commit, delete, query.filter_by, get).",
    "keyTakeaways": [
      "ORM ánh xạ các bảng CSDL thành các class Python và các hàng thành các đối tượng (objects), giúp lập trình viên thao tác không cần viết raw SQL.",
      "Khai báo Model kế thừa từ `db.Model`. Khóa chính khai báo `db.Column(db.Integer, primary_key=True)`.",
      "Khóa ngoại khai báo `db.Column(db.Integer, db.ForeignKey('table_name.id'))`.",
      "Quan hệ giữa các bảng được tạo bằng `db.relationship('ClassName', backref='...', lazy=True)`.",
      "CRUD: Thêm mới dùng `db.session.add(obj)`; Xóa dùng `db.session.delete(obj)`; Xác nhận lưu vào DB dùng `db.session.commit()`; Hủy giao dịch dùng `db.session.rollback()`.",
      "Truy vấn: `Model.query.get(id)`, `Model.query.filter_by(status='active').first()`, `Model.query.filter(Model.age >= 18).all()`."
    ]
  },
  {
    "id": "ch6",
    "docTitle": "Chapter 6: Basic Authentication & Session",
    "title": "Chương 6: Authentication & Session",
    "engTitle": "Basic Authentication & Session",
    "icon": "🔐",
    "badge": "23 câu",
    "summary": "Xác thực (Authentication) vs Phân quyền (Authorization), Flask Session (client-side signed cookie mã hóa bằng SECRET_KEY), Băm mật khẩu một chiều an toàn (Werkzeug security: generate_password_hash, check_password_hash), Thư viện Flask-Login (LoginManager, UserMixin, login_user, logout_user, @login_required, current_user).",
    "keyTakeaways": [
      "Authentication (AuthN) trả lời câu hỏi 'Bạn là ai?'; Authorization (AuthZ) trả lời câu hỏi 'Bạn được phép làm gì?'.",
      "TUYỆT ĐỐI không lưu mật khẩu dạng plain text. Sử dụng `werkzeug.security.generate_password_hash(pwd)` để băm mật khẩu và `check_password_hash(hash, pwd)` để kiểm tra.",
      "Flask Session lưu trữ dữ liệu phía client trong cookie được ký mã hóa bằng `app.secret_key` (người dùng đọc được nhưng không sửa đổi giả mạo được).",
      "Flask-Login quản lý phiên đăng nhập: User Model cần kế thừa `UserMixin` (cung cấp các thuộc tính `is_authenticated`, `is_active`, `is_anonymous`, `get_id()`).",
      "`@login_required` bảo vệ view function, người chưa đăng nhập sẽ bị chuyển hướng đến `login_view` chỉ định.",
      "`current_user` đại diện cho tài khoản người dùng đang đăng nhập trong cả view function lẫn template."
    ]
  },
  {
    "id": "ch7",
    "docTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "title": "Chương 7: Phân quyền & RBAC",
    "engTitle": "Roles & Permissions (RBAC)",
    "icon": "🛡️",
    "badge": "23 câu",
    "summary": "Mô hình Phân quyền dựa trên Vai trò (Role-Based Access Control - RBAC), Thiết kế quan hệ User - Role (Many-to-Many hoặc Many-to-One), Xây dựng Custom Decorator (@admin_required, @role_required), Xử lý từ chối truy cập HTTP 403 Forbidden, Nguyên tắc đặc quyền tối thiểu (Principle of Least Privilege).",
    "keyTakeaways": [
      "RBAC gán quyền hạn (permissions) cho các vai trò (roles), sau đó gán vai trò cho người dùng (users).",
      "Mô hình linh hoạt thường dùng bảng trung gian (Association table) để tạo quan hệ nhiều - nhiều (Many-to-Many) giữa `User` và `Role`.",
      "Custom Decorators kiểm tra vai trò được viết bằng cách bọc hàm với `functools.wraps`. Nếu `current_user` không đủ vai trò, trả về mã lỗi `abort(403)` (Forbidden).",
      "Phân biệt: 401 Unauthorized nghĩa là 'Chưa đăng nhập / Chưa xác thực'; 403 Forbidden nghĩa là 'Đã đăng nhập nhưng không có quyền truy cập tài nguyên này'.",
      "Nguyên tắc đặc quyền tối thiểu (Least Privilege): Chỉ cấp quyền vừa đủ cho vai trò đó thực hiện công việc, không cấp thừa."
    ]
  },
  {
    "id": "ch8",
    "docTitle": "Chapter 8: Web Features & Best Practices",
    "title": "Chương 8: Web Features & Best Practices",
    "engTitle": "Web Features & Best Practices",
    "icon": "⭐",
    "badge": "23 câu",
    "summary": "Flask Blueprints tổ chức ứng dụng quy mô lớn dạng mô-đun, Mô hình khởi tạo ứng dụng Application Factory (hàm create_app), Quản lý cấu hình nhiều môi trường (Development, Testing, Production Configs), Thông báo chớp nhoáng (flash, get_flashed_messages), Tải file an toàn lên server (secure_filename, kiểm tra đuôi mở rộng).",
    "keyTakeaways": [
      "Blueprint giúp chia nhỏ ứng dụng lớn thành các module độc lập (vd: auth, admin, blog, api), có tiền tố URL riêng (`url_prefix='/api'`).",
      "Application Factory Pattern: Gom việc cấu hình và khởi tạo app vào trong 1 hàm `def create_app(config_name):` giúp dễ dàng test và triển khai nhiều phiên bản độc lập.",
      "Cấu hình ứng dụng nên chia thành các class kế thừa: `Config` gốc, `DevelopmentConfig`, `TestingConfig`, `ProductionConfig`.",
      "`flash(message, category)` lưu thông báo ngắn vào session và tự động xóa sau lần hiển thị kế tiếp với `get_flashed_messages(with_categories=True)`.",
      "Khi xử lý upload file: Luôn dùng `werkzeug.utils.secure_filename(file.filename)` để lọc các ký tự nguy hiểm (như `../../etc/passwd`) và giới hạn dung lượng với `MAX_CONTENT_LENGTH`."
    ]
  },
  {
    "id": "ch9",
    "docTitle": "Chapter 9: REST API with Flask",
    "title": "Chương 9: RESTful API với Flask",
    "engTitle": "REST API with Flask",
    "icon": "🚀",
    "badge": "23 câu",
    "summary": "Nguyên lý kiến trúc REST (Stateless, Client-Server, Tài nguyên định danh qua URI), Ánh xạ HTTP Methods với CRUD (GET, POST, PUT, PATCH, DELETE), Định dạng phản hồi JSON (hàm jsonify, HTTP Status Codes chuẩn: 200, 201, 204, 400, 401, 403, 404, 500), CORS (Flask-CORS), Xác thực API với JWT (Flask-JWT-Extended, Bearer Token).",
    "keyTakeaways": [
      "REST là kiến trúc phi trạng thái (Stateless): Server không lưu session của client giữa các request; mỗi request phải chứa đầy đủ thông tin xác thực.",
      "HTTP Methods chuẩn: GET (đọc), POST (tạo mới - trả về 201 Created), PUT (thay thế toàn bộ tài nguyên), PATCH (cập nhật 1 phần), DELETE (xóa - trả về 204 No Content hoặc 200 OK).",
      "Trả về JSON trong Flask: `jsonify({'key': 'val'}), status_code`.",
      "Các mã HTTP quan trọng: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request - lỗi cú pháp/dữ liệu đầu vào), 401 (Unauthorized - thiếu token), 403 (Forbidden - không đủ quyền), 404 (Not Found), 500 (Internal Server Error).",
      "CORS (Cross-Origin Resource Sharing): Cần cài đặt `flask_cors.CORS(app)` để trình duyệt cho phép frontend từ domain khác gọi API.",
      "JWT (JSON Web Token): Gồm 3 phần phân tách bằng dấu chấm: Header.Payload.Signature. Gửi trong HTTP Header: `Authorization: Bearer <token>`."
    ]
  },
  {
    "id": "ch10",
    "docTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "title": "Chương 10: Decorator & Error Handling",
    "engTitle": "Decorator, Middleware & Error Handling",
    "icon": "⚙️",
    "badge": "12 câu",
    "summary": "Cơ chế Python Decorators trong Flask (bảo toàn metadata với functools.wraps), Xử lý lỗi tùy biến (@app.errorhandler: 404 Not Found, 500 Internal Error), Mô hình WSGI Middleware, Các Hook vòng đời của HTTP Request (@before_request, @after_request, @teardown_request).",
    "keyTakeaways": [
      "Decorators cho phép can thiệp trước hoặc sau khi hàm được gọi. Luôn dùng `@functools.wraps(f)` để giữ nguyên tên hàm `__name__` và docstring của view function gốc trong Flask.",
      "Custom Error Pages: Dùng `@app.errorhandler(404)` để trả về trang template đẹp mắt hoặc JSON lỗi thay vì trang lỗi mặc định của server.",
      "Vòng đời Request Hooks: `@app.before_request` chạy trước mọi request; `@app.after_request` chạy sau khi view trả về response (có thể sửa đổi response headers); `@app.teardown_request` luôn chạy khi kết thúc request kể cả khi xảy ra exception (thường dùng để dọn dẹp tài nguyên).",
      "WSGI Middleware bọc ngoài ứng dụng Flask ở tầng WSGI để can thiệp môi trường `environ` trước khi đến Flask hoặc xử lý header phản hồi."
    ]
  },
  {
    "id": "ch11",
    "docTitle": "Chapter 11: Testing & Deployment",
    "title": "Chương 11: Testing & Deployment",
    "engTitle": "Testing & Deployment",
    "icon": "🚢",
    "badge": "11 câu",
    "summary": "Kiểm thử tự động với unittest / pytest, Sử dụng Flask Test Client (app.test_client()), Cơ sở dữ liệu in-memory trong kiểm thử (sqlite:///:memory:), Máy chủ ứng dụng sản xuất WSGI (Gunicorn, uWSGI, Waitress), Mô hình Reverse Proxy với Nginx, Tắt Debug Mode trong Production, Biến môi trường (.env).",
    "keyTakeaways": [
      "Kiểm thử: Dùng `app.test_client()` để mô phỏng HTTP requests (GET, POST) gửi tới ứng dụng mà không cần khởi chạy web server thật.",
      "Trong kiểm thử, nên cấu hình CSDL tách biệt (thường dùng SQLite in-memory: `sqlite:///:memory:`) để test chạy cực nhanh và độc lập.",
      "Development server đi kèm của Flask (`flask run`) là single-threaded, KHÔNG ĐƯỢC dùng trong môi trường thực tế (Production).",
      "Triển khai Production cần WSGI HTTP Server chuyên dụng như Gunicorn (trên Linux) hoặc Waitress (trên Windows).",
      "Nginx đóng vai trò Reverse Proxy đứng phía trước: xử lý kết nối SSL/HTTPS, phục vụ static files siêu tốc, cân bằng tải (Load Balancing) và bảo vệ máy chủ WSGI phía sau.",
      "BẮT BUỘC tắt `DEBUG = False` trong Production để tránh lộ thông tin nhạy cảm và Interactive Debugger Console (lỗ hổng RCE nghiêm trọng)."
    ]
  }
];

const QUESTIONS_DATA = [
  {
    "id": 1,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "Who created the World Wide Web in 1989 as a system of interlinked hypertext documents accessed via the Internet?",
    "options": [
      {
        "key": "A",
        "text": "Dennis Ritchie",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Tim Berners-Lee",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Linus Torvalds",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Guido van Rossum",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Theo Chương 1, World Wide Web được Tim Berners-Lee sáng tạo vào năm 1989 nhằm giúp các nhà khoa học chia sẻ thông tin dễ dàng hơn thông qua URLs, HTTP và các siêu liên kết (hyperlinks)."
  },
  {
    "id": 2,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which of the following fundamentally differentiates an interactive Web Application from a static Website?",
    "options": [
      {
        "key": "A",
        "text": "A static website uses backend databases for dynamic user workflows, while a web application only serves read-only pages.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "A web application acts like software, focusing on user interaction, data manipulation, and dynamic business logic, whereas a static website is primarily informational.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Static websites run on Node.js runtimes, whereas web applications run solely inside client-side browser memory.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Web applications never use HTML and CSS for rendering user interfaces.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trang web tĩnh (static website) chủ yếu cung cấp thông tin cố định với tính tương tác tối thiểu; ngược lại, ứng dụng web (web application) hoạt động như một phần mềm thực thụ, tập trung vào tương tác người dùng, xử lý dữ liệu động và logic nghiệp vụ phức tạp."
  },
  {
    "id": 3,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following statements accurately describe the characteristics of a Multi-Page Application (MPA)?",
    "options": [
      {
        "key": "A",
        "text": "The browser reloads the entire page every time the user navigates or interacts with the server.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Rendering is performed on the server side (SSR), delivering fully rendered HTML to the browser.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The server only sends raw JSON data after the initial load, delegating DOM painting completely to JavaScript frameworks.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Navigation between pages never causes visual page flashes or full document requests.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Trong kiến trúc MPA (Multi-Page Application), trình duyệt tải lại toàn bộ trang mỗi khi tương tác và việc kết xuất (rendering) diễn ra hoàn toàn ở phía máy chủ (SSR) để trả về các trang HTML hoàn chỉnh cho từng request."
  },
  {
    "id": 4,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why do Multi-Page Applications (MPAs) generally exhibit superior Search Engine Optimization (SEO) compared to default Single-Page Applications (SPAs)?",
    "options": [
      {
        "key": "A",
        "text": "MPAs completely disable the browser's Document Object Model (DOM).",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Search engine crawlers easily parse the fully rendered HTML delivered directly by the server in MPAs.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "SPAs refuse connections from search engine web crawlers via HTTP 403 Forbidden.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "MPAs encrypt their URLs so search engine algorithms cannot tamper with them.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong mô hình MPA truyền thống, các trình thu thập thông tin (web crawlers) của công cụ tìm kiếm nhận trực tiếp mã HTML đã kết xuất đầy đủ từ server; trong khi SPA mặc định đòi hỏi phải thực thi JavaScript phía client mới hiển thị được nội dung, gây khó khăn cho việc lập chỉ mục SEO."
  },
  {
    "id": 5,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO use cases are best suited for building a Single-Page Application (SPA)?",
    "options": [
      {
        "key": "A",
        "text": "A content-heavy public news blog requiring the fastest possible First Contentful Paint without client JS.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An interactive SaaS dashboard featuring real-time charts, maps, and drag-and-drop workflows.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "An application designed to offer a fluid, app-like user experience where backend APIs can later be reused by mobile clients.",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "A pure read-only landing page built by a small team on an extremely tight budget.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B",
      "C"
    ],
    "explanation": "SPA cực kỳ phù hợp cho các nền tảng SaaS/bảng điều khiển tương tác cao (như kéo-thả, biểu đồ động) và kiến trúc tách rời (decoupled) cho phép tái sử dụng backend API cho ứng dụng di động."
  },
  {
    "id": 6,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary operational characteristic of the HTTP protocol that creates the 'State Management' problem in web development?",
    "options": [
      {
        "key": "A",
        "text": "HTTP is stateful, meaning the server permanently remembers client variables across browser restarts.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "HTTP is stateless, meaning each request-response pair is independent and the server does not retain memory of previous requests.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "HTTP only supports encrypted TLS connections between client and server.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "HTTP automatically synchronizes local database records with client browsers.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Về bản chất thiết kế, giao thức HTTP là phi trạng thái (stateless). Máy chủ xử lý mỗi request một cách hoàn toàn độc lập và không tự động liên kết các request liên tiếp từ cùng một người dùng nếu không áp dụng kỹ thuật quản lý trạng thái."
  },
  {
    "id": 7,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "How does HTTPS protect sensitive user information such as login credentials compared to standard HTTP?",
    "options": [
      {
        "key": "A",
        "text": "HTTPS converts POST requests into GET requests so credentials are obscured.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "HTTPS transmits requests inside an encrypted TLS/SSL tunnel, preventing network sniffers from reading plaintext credentials.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "HTTPS disables all cookies and session tracking completely.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "HTTPS stores client passwords directly in DNS cache servers.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "HTTP thuần gửi dữ liệu dạng văn bản không mã hóa qua mạng. HTTPS bọc toàn bộ giao tiếp HTTP trong một đường hầm mã hóa SSL/TLS, đảm bảo tính bảo mật và toàn vẹn dữ liệu chống lại việc nghe lén (eavesdropping)."
  },
  {
    "id": 8,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following HTTP methods are defined as idempotent according to HTTP specifications?",
    "options": [
      {
        "key": "A",
        "text": "POST",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "GET",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "PUT",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "PATCH (not guaranteed)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B",
      "C"
    ],
    "explanation": "Một phương thức là idempotent nếu việc thực thi một lần hay nhiều lần đều mang lại cùng một trạng thái hệ thống trên server. GET, HEAD, PUT và DELETE là các phương thức idempotent; trong khi POST là non-idempotent."
  },
  {
    "id": 9,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "In an HTTP message, what syntactical component separates the headers section from the body payload?",
    "options": [
      {
        "key": "A",
        "text": "A single exclamation mark (!)",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An empty blank line (CRLF CRLF)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The status code 200 OK",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A null byte character",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong cả HTTP Request và HTTP Response, một dòng trống (empty blank line - CRLF) đóng vai trò ngăn cách phần tiêu đề (headers) với phần thân dữ liệu (body/payload)."
  },
  {
    "id": 10,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which response header is issued by a web server to store stateful identifiers on the client browser?",
    "options": [
      {
        "key": "A",
        "text": "Content-Encoding",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Set-Cookie",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Host",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "User-Agent",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Header phản hồi `Set-Cookie` chỉ thị cho trình duyệt lưu trữ cookie và tự động đính kèm cookie này trong các request tiếp theo gửi đến cùng máy chủ."
  },
  {
    "id": 11,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 2,
    "type": "Theory",
    "question": "In the comparison between Session-based authentication and Token-based authentication (JWT), which TWO statements are true?",
    "options": [
      {
        "key": "A",
        "text": "Session-based systems store session data on the server and pass an identifier via cookies.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Token-based systems (JWT) require the server to store active tokens in relational databases for every request.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "JWT tokens are self-contained and signed, allowing servers to verify identity without server-side session lookups.",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "Session-based authentication is completely impossible to revoke once issued.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "C"
    ],
    "explanation": "Xác thực dựa trên session (Session-based) lưu trữ dữ liệu phiên trên server và trả về một session ID ngẫu nhiên trong cookie; trong khi xác thực dựa trên Token (JWT) lưu trạng thái và payload đã ký số ngay phía client."
  },
  {
    "id": 12,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "In the classic Three-Tier web application architecture, which layer is responsible for enforcing business rules, processing requests, and handling authentication?",
    "options": [
      {
        "key": "A",
        "text": "Presentation Layer (Frontend)",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Business Logic Layer (Backend)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Data Layer (Database)",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Network Hardware Layer",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tầng logic nghiệp vụ (Business Logic Layer / Backend) chịu trách nhiệm thực thi các quy tắc nghiệp vụ, tính toán, xác thực dữ liệu và điều phối luồng xử lý trước khi lưu hoặc xuất dữ liệu."
  },
  {
    "id": 13,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "How does the Model-View-Template (MVT) pattern in Python frameworks (such as Django/Flask) map to the traditional Model-View-Controller (MVC) pattern?",
    "options": [
      {
        "key": "A",
        "text": "The View in MVT acts as the Model in MVC, while the Template acts as the Controller.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The Model in MVT handles HTML rendering, while the Template executes database queries.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "The View in MVT handles application logic (acting like the Controller in MVC), while the Template handles presentation (acting like the View in MVC).",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "MVT completely eliminates application logic and relies exclusively on client-side browser scripts.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "C"
    ],
    "explanation": "Kiến trúc 3 lớp (3-Tier) bao gồm: Presentation Layer (Giao diện người dùng), Business Logic Layer (Xử lý nghiệp vụ backend), và Data Layer (Lưu trữ và truy xuất cơ sở dữ liệu)."
  },
  {
    "id": 14,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is client-side code (frontend JavaScript) considered an untrusted security boundary?",
    "options": [
      {
        "key": "A",
        "text": "Because web browsers do not support network sockets.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Because the code runs on the user's device and can be inspected, altered, or bypassed using developer tools and custom HTTP clients.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because frontend code automatically deletes backend database records if an error occurs.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because JavaScript cannot parse JSON payloads.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mô hình MVC phân tách phần mềm thành: Model (dữ liệu và nghiệp vụ), View (giao diện hiển thị), và Controller (tiếp nhận request và điều phối)."
  },
  {
    "id": 15,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following statements about Python virtual environments (PEP 405) are correct?",
    "options": [
      {
        "key": "A",
        "text": "A virtual environment contains its own isolated Python interpreter and site-packages directory.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Virtual environments prevent dependency conflicts between different projects on the same machine.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Activating a virtual environment recompiles the operating system kernel.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Packages installed inside an activated virtual environment are globally shared across all operating system users.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) lưu trữ dữ liệu trong các bảng có cấu trúc (bảng, hàng, cột), thực thi các ràng buộc schema và hỗ trợ các giao dịch tuân thủ nghiêm ngặt chuẩn ACID."
  },
  {
    "id": 16,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine the following command used to create a virtual environment in Python:",
    "options": [
      {
        "key": "A",
        "text": "It permanently replaces the system's global Python executable in `/usr/bin/python`.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It modifies the shell's `PATH` environment variable so that invocations of `python` and `pip` resolve to `.venv` first.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It sends an HTTP request to PyPI to download the newest Python compiler.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It deletes all existing files in the current working directory.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "NoSQL phù hợp nhất cho dữ liệu phi cấu trúc hoặc bán cấu trúc thay đổi nhanh chóng, các trường hợp yêu cầu khả năng mở rộng ngang (horizontal scaling) quy mô lớn và lưu trữ linh hoạt dạng document/key-value."
  },
  {
    "id": 17,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine the following minimal Flask application code:",
    "options": [
      {
        "key": "A",
        "text": "To specify the database password for Flask-SQLAlchemy.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To tell Flask where to look for resources like templates and static assets relative to the current module.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To automatically enable HTTPS encryption certificates.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To force the WSGI server to run on 8 CPU cores.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong kiến trúc REST, máy khách (client) và máy chủ (server) tương tác với các 'tài nguyên' (resources) thông qua các URI định danh duy nhất và các phương thức HTTP chuẩn (GET, POST, PUT, DELETE)."
  },
  {
    "id": 18,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Applied",
    "question": "Why is `if __name__ == '__main__':` used to guard `app.run(debug=True)` in a Flask application script?",
    "options": [
      {
        "key": "A",
        "text": "To ensure that the development server only starts when the script is executed directly, preventing accidental server execution when imported by a WSGI runner or test suite.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "To allow remote attackers to access administrative debug controls.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "To trigger automatic database migrations on every HTTP request.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To convert Flask into a Single-Page Application (SPA).",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Lệnh `python -m venv .venv` tạo ra một môi trường ảo Python hoàn toàn độc lập, giúp cô lập các thư viện của dự án và tránh xung đột phiên bản với môi trường Python hệ thống."
  },
  {
    "id": 19,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why must `debug=True` NEVER be deployed to a public production environment?",
    "options": [
      {
        "key": "A",
        "text": "It slows down database queries by 10 milliseconds.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The interactive debugger allows arbitrary Python code execution on the server via the browser console upon unhandled exceptions.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It automatically deletes the user's virtual environment.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It prevents the browser from loading CSS and JavaScript assets.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Biến `__name__` truyền vào `Flask(__name__)` cho phép Flask xác định đường dẫn gốc của ứng dụng để định vị chính xác thư mục chứa templates và static files."
  },
  {
    "id": 20,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements accurately contrast Monolithic architecture with Microservices architecture?",
    "options": [
      {
        "key": "A",
        "text": "Monoliths deploy all features together in a single release, whereas Microservices allow independent service deployments.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "In a Monolith, scaling requires scaling the entire application at once, whereas Microservices allow scaling only hot, resource-intensive services.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Microservices are always simpler to deploy, monitor, and maintain than Monolithic applications for small teams.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Monoliths cannot connect to relational databases.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Trong Flask, `jsonify()` tự động chuyển đổi từ điển (dict) hoặc danh sách Python thành chuỗi JSON hợp lệ và tự động thiết lập header phản hồi `Content-Type: application/json`."
  },
  {
    "id": 21,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Theory",
    "question": "During the HTTP request-response cycle, what role does a DNS (Domain Name System) server perform when a user types 'example.com' into the browser?",
    "options": [
      {
        "key": "A",
        "text": "It compiles Jinja2 template files into bytecode.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It resolves the human-readable domain name into the destination host's numerical IP address.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It checks user passwords against database hash algorithms.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It acts as a WSGI middleware layer.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để ứng dụng lắng nghe các kết nối từ bên ngoài container hoặc từ các máy khác trong mạng nội bộ, máy chủ phát triển của Flask phải được gán host là `0.0.0.0`."
  },
  {
    "id": 22,
    "chapterId": "ch1",
    "chapterTitle": "Chapter 1: Web Application Basics",
    "correctCount": 1,
    "type": "Applied",
    "question": "A web browser sends the following HTTP request header:",
    "options": [
      {
        "key": "A",
        "text": "The client is sending an encrypted password.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The client informs the server that it expects and can handle data formatted as JSON in the response.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The client instructs the server to delete the database.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The client refuses any response with HTTP status code 200.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Chế độ `debug=True` KHÔNG ĐƯỢC PHÉP bật trên production vì Werkzeug interactive debugger cho phép thực thi mã Python tùy ý từ trình duyệt thông qua mã PIN console, mở ra lỗ hổng thực thi mã từ xa (RCE) nguy hiểm."
  },
  {
    "id": 23,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary role of a 'Route' in the Flask framework?",
    "options": [
      {
        "key": "A",
        "text": "To compress static media files before delivery to the browser.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To create a mapping between a specific URL pattern and a Python view function.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To establish a direct TCP socket connection with the database engine.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To sanitize SQL strings against injection attacks.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Decorator `@app.route()` liên kết một mẫu URL với hàm view function trong Python, cho phép Flask điều phối các HTTP request khớp với đường dẫn đó."
  },
  {
    "id": 24,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "If an HTTP method is not explicitly declared in the `@app.route()` decorator, which method is allowed by default?",
    "options": [
      {
        "key": "A",
        "text": "POST",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "GET",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "PUT",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "DELETE",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Bộ chuyển đổi `<int:item_id>` đảm bảo biến chỉ chấp nhận số nguyên dương. Nếu URL chứa ký tự không phải số, Flask sẽ tự động trả về lỗi 404 Not Found."
  },
  {
    "id": 25,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the following Flask route definition:",
    "options": [
      {
        "key": "A",
        "text": "400 Bad Request",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "404 Not Found",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "405 Method Not Allowed",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "500 Internal Server Error",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "C"
    ],
    "explanation": "Bộ chuyển đổi `path` tương tự như `string` nhưng chấp nhận cả dấu gạch chéo (`/`), rất phù hợp để bắt đường dẫn tập tin phân cấp hoặc các tham số lồng nhau."
  },
  {
    "id": 26,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following are built-in URL converters provided by Flask and Werkzeug for dynamic routes?",
    "options": [
      {
        "key": "A",
        "text": "int",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "path",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "regex_match",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "datetime_iso",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Flask cung cấp các converter tích hợp sẵn: `string` (mặc định), `int` (số nguyên), `float` (số thực), `path` (chuỗi có gạch chéo) và `uuid` (chuỗi định danh duy nhất)."
  },
  {
    "id": 27,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the key difference between the `string` converter and the `path` converter in Flask dynamic routing?",
    "options": [
      {
        "key": "A",
        "text": "The `string` converter accepts numbers, while the `path` converter only accepts boolean values.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The `string` converter stops matching at forward slashes (`/`), whereas the `path` converter can capture slashes across subpaths.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The `path` converter automatically reads files from the server's hard drive.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The `string` converter encrypts the URL parameter.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Bộ chuyển đổi URL tùy chỉnh kế thừa từ `werkzeug.routing.BaseConverter` và cài đặt hàm `to_python()` để phân tích chuỗi URL thành đối tượng Python."
  },
  {
    "id": 28,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "Given the route:",
    "options": [
      {
        "key": "A",
        "text": "/page/home",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "/page/about",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "/page/admin",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "/page/contact",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "C"
    ],
    "explanation": "Mặc định, `@app.route()` chỉ tiếp nhận request GET trừ khi tham số `methods` được khai báo rõ ràng các phương thức khác như `POST`, `PUT` hoặc `DELETE`."
  },
  {
    "id": 29,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "When implementing a custom URL converter in Flask, which base class from `werkzeug.routing` is typically subclassed?",
    "options": [
      {
        "key": "A",
        "text": "BaseConverter",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "FlaskForm",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "MethodView",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Blueprint",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Khi một endpoint nhận request có phương thức HTTP không nằm trong danh sách `methods` đã đăng ký, Flask tự động trả về mã lỗi 405 Method Not Allowed."
  },
  {
    "id": 30,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a custom converter, what exception should the `to_python()` method raise if the incoming URL string fails validation and should trigger a 404 Not Found?",
    "options": [
      {
        "key": "A",
        "text": "KeyError",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "werkzeug.routing.ValidationError",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "TypeError",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "StopIteration",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`url_for()` tạo URL động dựa trên tên hàm view, giúp ngăn ngừa lỗi đứt gãy liên kết khi các mẫu đường dẫn URL được tái cấu trúc."
  },
  {
    "id": 31,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following are primary benefits of using Flask Blueprints in large web applications?",
    "options": [
      {
        "key": "A",
        "text": "They organize related routes, templates, and static files into modular, maintainable packages.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "They provide endpoint namespacing (e.g., `auth.login`), preventing view function naming collisions across modules.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "They automatically eliminate the need to run database migrations.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "They force all HTTP traffic to use web sockets.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Các tham số truyền vào `url_for()` không nằm trong định nghĩa đường dẫn sẽ tự động được nối vào cuối URL dưới dạng chuỗi truy vấn (query string: `?sort=asc&page=2`)."
  },
  {
    "id": 32,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "A blueprint is registered in `app.py` as follows:",
    "options": [
      {
        "key": "A",
        "text": "URL `/posts/42` and `url_for('post_detail', post_id=42)`",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "URL `/blog/posts/42` and `url_for('blog.post_detail', post_id=42)`",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "URL `/blog/posts/42` and `url_for('post_detail.blog', post_id=42)`",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "URL `/posts/42` and `url_for('blog/posts', post_id=42)`",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`request.args` lấy các tham số truy vấn từ chuỗi URL, trong khi `request.form` lấy dữ liệu các trường gửi lên từ biểu mẫu qua phương thức POST."
  },
  {
    "id": 33,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the default HTTP status code returned when a Flask view function returns a plain string?",
    "options": [
      {
        "key": "A",
        "text": "201 Created",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "200 OK",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "204 No Content",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "302 Found",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`request.get_json()` phân tích cú pháp dữ liệu JSON từ phần thân (body) của request, trong khi `request.args` chỉ lấy tham số từ query string trên URL."
  },
  {
    "id": 34,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Flask view functions, how can a developer customize the HTTP response status code and headers without manually constructing a `make_response()` object?",
    "options": [
      {
        "key": "A",
        "text": "By setting global variables `STATUS = 201` inside the module.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "By returning a tuple: `(response_body, status_code, headers)`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "By calling `abort(201)`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By passing headers inside the URL query string.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`request.args.get('key')` trả về giá trị mặc định là `None` nếu khóa truy vấn không tồn tại trong URL."
  },
  {
    "id": 35,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the code snippet:",
    "options": [
      {
        "key": "A",
        "text": "The JSON request body.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The URL query string parameters (e.g., `?search=python`).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The encrypted session cookie.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The multipart file attachment.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`request.args.get('page', default=1, type=int)` ép kiểu an toàn giá trị sang số nguyên và trả về default=1 nếu thiếu tham số hoặc ép kiểu thất bại."
  },
  {
    "id": 36,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "Where does `request.form` retrieve data from in Flask?",
    "options": [
      {
        "key": "A",
        "text": "The URL path converters.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The parsed body of an HTTP POST or PUT request encoded as form data.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The client's browser local storage.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The database configuration file.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mã HTTP 301 biểu thị chuyển hướng vĩnh viễn (trình duyệt sẽ lưu cache mạnh), trong khi 302 biểu thị chuyển hướng tạm thời."
  },
  {
    "id": 37,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the standard HTTP status code issued by Flask's `redirect()` helper function?",
    "options": [
      {
        "key": "A",
        "text": "200 OK",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "301 Moved Permanently",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "302 Found",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "400 Bad Request",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "C"
    ],
    "explanation": "`abort(403)` ngay lập tức chấm dứt hàm view và ném ra ngoại lệ HTTPException tương ứng với mã lỗi 403 Forbidden."
  },
  {
    "id": 38,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What does Flask's `abort()` function do when invoked inside a view function (e.g., `abort(404)`)?",
    "options": [
      {
        "key": "A",
        "text": "It shuts down the Gunicorn worker process immediately.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It raises an `HTTPException` corresponding to the provided status code, terminating request processing and delegating to error handlers.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It commits all pending database transactions.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It redirects the user to `google.com`.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mã HTTP 201 Created biểu thị rằng một tài nguyên mới đã được tạo thành công trên máy chủ."
  },
  {
    "id": 39,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What header and payload transformation does Flask's `jsonify()` function automatically perform?",
    "options": [
      {
        "key": "A",
        "text": "It sets `Content-Type: text/plain` and encrypts data with AES-256.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It serializes data to a JSON string and sets `Content-Type: application/json`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It converts data into XML format.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It converts HTML templates into PDF documents.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm view trong Flask có thể trả về một tuple theo cú pháp `(response_body, status_code, headers)`."
  },
  {
    "id": 40,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding Class-based Views (specifically `MethodView`) in Flask are correct?",
    "options": [
      {
        "key": "A",
        "text": "`MethodView` automatically dispatches incoming requests to methods named after HTTP verbs (e.g., `get()`, `post()`).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Class-based views cannot be connected to Flask routes.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "`MethodView` is especially useful for building clean, object-oriented RESTful APIs.",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "`MethodView` can only return plain text strings and cannot return JSON.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "C"
    ],
    "explanation": "Blueprints cho phép các lập trình viên module hóa ứng dụng lớn thành các thành phần chức năng độc lập, dễ bảo trì và tái sử dụng."
  },
  {
    "id": 41,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "When registering a `MethodView` class with a Flask application, which class method must be invoked to create a callable view function?",
    "options": [
      {
        "key": "A",
        "text": "`UserAPI.dispatch_request()`",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "`UserAPI.as_view('user_api')`",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "`UserAPI.register_class()`",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`UserAPI.__init__()`",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tham số đầu tiên của `Blueprint('auth', __name__)` là tên của Blueprint, được dùng làm tiền tố (prefix) định danh cho các endpoint của nó."
  },
  {
    "id": 42,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "How can a Flask view function detect whether an incoming request was initiated via asynchronous JavaScript (AJAX/XHR) in traditional setups?",
    "options": [
      {
        "key": "A",
        "text": "By checking `request.is_ajax` or inspecting `request.headers.get('X-Requested-With') == 'XMLHttpRequest'`.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "By checking if `request.method == 'CONNECT'`.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "By reading client GPU rendering metrics.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By verifying if the user has an admin session.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Các route nằm bên trong một Blueprint có tên `'auth'` được tham chiếu thông qua cú pháp tiền tố `'auth.login'` trong hàm `url_for()`."
  },
  {
    "id": 43,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary purpose of Flask's `flash()` messaging mechanism?",
    "options": [
      {
        "key": "A",
        "text": "To play Adobe Flash animations in the browser.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To record one-time feedback messages in the session that are displayed to the user on the next request and then deleted.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To write high-priority kernel alerts to `/var/log/syslog`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To refresh the browser cache automatically.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Class-Based Views (`MethodView`) tổ chức xử lý các phương thức HTTP thành các phương thức hướng đối tượng như `get()` và `post()`."
  },
  {
    "id": 44,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine the following pagination snippet using Flask-SQLAlchemy:",
    "options": [
      {
        "key": "A",
        "text": "`pagination.all_rows`",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "`pagination.items`",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "`pagination.query_result`",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`pagination.elements`",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`as_view()` chuyển đổi một lớp `MethodView` thành một hàm view có thể gọi được để đăng ký với `@app.route()` hoặc `add_url_rule()`."
  },
  {
    "id": 45,
    "chapterId": "ch2",
    "chapterTitle": "Chapter 2: Routes & View Functions",
    "correctCount": 1,
    "type": "Theory",
    "question": "In Flask 2.0+, what shortcut decorators were introduced to define routes restricted to GET and POST methods respectively?",
    "options": [
      {
        "key": "A",
        "text": "`@app.listen_get()` and `@app.listen_post()`",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "`@app.get()` and `@app.post()`",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "`@app.action('GET')` and `@app.action('POST')`",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`@app.read()` and `@app.write()`",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`request.args.get('q', 'Python')` trả về giá trị dự phòng là `'Python'` khi tham số `'q'` không được cung cấp trên URL."
  },
  {
    "id": 46,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the default template engine integrated into the Flask framework?",
    "options": [
      {
        "key": "A",
        "text": "Mako",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Jinja2",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Thymeleaf",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Handlebars",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Jinja2 là công cụ tạo mẫu (template engine) mặc định được tích hợp sẵn trong Flask."
  },
  {
    "id": 47,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "By default convention, in which directory does Flask look for template files passed to `render_template()`?",
    "options": [
      {
        "key": "A",
        "text": "In a directory named `views/` located inside `venv/`.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "In a directory named `templates/` located at the same level as the application script.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "In `/var/www/html/`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "In a directory named `static/html/`.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mặc định, hàm `render_template()` tìm kiếm các tệp template bên trong thư mục `templates/` nằm ở thư mục gốc của ứng dụng."
  },
  {
    "id": 48,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding Jinja2 delimiters are correct?",
    "options": [
      {
        "key": "A",
        "text": "`{{ ... }}` is used to print expressions and variable values into template output.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "{% ... %} is used to execute logic and control structures such as conditionals and loops.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{# ... #} creates HTML comments that are visible in the rendered browser source code.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{{ ... }} runs operating system shell commands on the server.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Trong cú pháp Jinja2, `{{ }}` dùng để xuất giá trị biến/biểu thức, `{% %}` dùng để thực thi cấu trúc điều khiển (if/for/block), và `{# #}` dùng để viết chú thích không hiển thị ra trình duyệt."
  },
  {
    "id": 49,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "How does Jinja2 protect web applications against Cross-Site Scripting (XSS) vulnerabilities by default?",
    "options": [
      {
        "key": "A",
        "text": "It blocks all network requests containing the word 'script'.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It enables auto-escaping by default, converting characters like `<`, `>`, `&`, `'`, and `\"` into safe HTML entities.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It removes all CSS styles from rendered pages.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It forces client browsers to run in incognito mode.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nội dung nằm trong cặp thẻ `{# ... #}` bị loại bỏ hoàn toàn trong quá trình kết xuất và không bao giờ xuất hiện trong mã nguồn HTML gửi về client."
  },
  {
    "id": 50,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "Inside a Jinja2 `{% for user in users %}` loop, which special variable property provides the current iteration index starting at 1?",
    "options": [
      {
        "key": "A",
        "text": "`loop.index0`",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "`loop.index`",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "`loop.counter`",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`user.index`",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Jinja2 tự động mã hóa (auto-escape) các biến trong mẫu HTML nhằm ngăn chặn tấn công Cross-Site Scripting (XSS) bằng cách chuyển đổi các ký tự như `<` và `>` thành thực thể HTML an toàn."
  },
  {
    "id": 51,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which Jinja2 template inheritance tag must always be placed as the very first statement in a child template?",
    "options": [
      {
        "key": "A",
        "text": "{% include 'header.html' %}",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "{% extends 'base.html' %}",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{% block content %}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{% import 'macros.html' %}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong tính kế thừa mẫu của Jinja2, thẻ `{% extends 'base.html' %}` bắt buộc phải được đặt ở dòng đầu tiên của tệp mẫu con để engine biết mẫu cha cần kế thừa."
  },
  {
    "id": 52,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a child template overriding a title block:",
    "options": [
      {
        "key": "A",
        "text": "It grants superuser administrative privileges to the active session.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It renders the original content of the parent template's block in place.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It reloads the page from the browser cache.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It invokes the Python `super()` constructor on the Flask app object.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Thẻ `{% block content %}` định nghĩa các khối vùng mà mẫu con có thể ghi đè (override) hoặc chèn thêm nội dung vào khung giao diện của mẫu cha."
  },
  {
    "id": 53,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is generating dynamic URLs using `url_for('static', filename='css/style.css')` preferred over hardcoding `<link href='/static/css/style.css'>`?",
    "options": [
      {
        "key": "A",
        "text": "Hardcoded URLs are blocked by web browser security policies.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "`url_for()` dynamically resolves the correct static path, handles blueprint prefixes, and appends cache-busting timestamps if configured.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Hardcoding static URLs crashes the Jinja2 compiler with a SyntaxError.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`url_for()` automatically minifies and compresses CSS stylesheets on every request.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm `super()` bên trong một block cho phép mẫu con giữ lại và kết xuất toàn bộ nội dung gốc của block đó từ mẫu cha thay vì xóa trắng."
  },
  {
    "id": 54,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine the following Jinja2 filter expression:",
    "options": [
      {
        "key": "A",
        "text": "'  FLASK WEB DEVELOPMENT  '",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "'Flask Web Development'",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "'flask web development'",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "'  Flask web development  '",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Toán tử gạch đứng `|` trong Jinja2 áp dụng các bộ lọc (filter). Nhiều bộ lọc có thể được nối chuỗi liên tiếp từ trái sang phải, ví dụ: `{{ name|trim|lower }}`."
  },
  {
    "id": 55,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "What is the result of evaluating `{{ my_var | default('N/A') }}` when `my_var` is undefined in the template context?",
    "options": [
      {
        "key": "A",
        "text": "It raises a `jinja2.exceptions.UndefinedError`.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It renders `'N/A'`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It returns an empty string `''`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It reboots the web server.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Bộ lọc `default('Anonymous')` cung cấp giá trị mặc định nếu biến đầu vào không tồn tại, có giá trị None hoặc chuỗi rỗng."
  },
  {
    "id": 56,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "How do you register a custom template filter named `reverse` in a Flask application using a decorator?",
    "options": [
      {
        "key": "A",
        "text": "@app.route('/reverse')",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "@app.template_filter('reverse')",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "@app.jinja_macro('reverse')",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@app.filter_hook('reverse')",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Bộ lọc `|safe` vô hiệu hóa cơ chế tự động mã hóa cho một biến cụ thể, báo cho Jinja2 biết chuỗi đó chứa mã HTML an toàn và đáng tin cậy."
  },
  {
    "id": 57,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding Jinja2 Macros are correct?",
    "options": [
      {
        "key": "A",
        "text": "Macros behave like reusable functions inside templates that accept arguments and return HTML markup snippets.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Macros promote the DRY (Don't Repeat Yourself) principle by eliminating repetitive code for form fields and UI widgets.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Macros can only be written in pure C language and compiled with GCC.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Macros automatically query SQL databases without view function involvement.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Để đăng ký một custom filter trong Flask, lập trình viên sử dụng decorator `@app.template_filter('filter_name')` hoặc thêm hàm vào từ điển `app.jinja_env.filters`."
  },
  {
    "id": 58,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Jinja2, how do you import macros defined in a file `templates/_macros.html` into `templates/login.html`?",
    "options": [
      {
        "key": "A",
        "text": "{% include '_macros.html' %}",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "{% import '_macros.html' as forms %}",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{% require '_macros.html' %}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "<script src='_macros.html'></script>",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Thẻ `{% include '_navbar.html' %}` chèn trực tiếp toàn bộ nội dung của tệp template con vào vị trí hiện tại của template chính."
  },
  {
    "id": 59,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "Inside a Jinja2 template loop rendering table rows, how can a developer alternate row CSS classes between 'odd' and 'even'?",
    "options": [
      {
        "key": "A",
        "text": "{{ loop.cycle('odd', 'even') }}",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "{{ loop.switch('odd', 'even') }}",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "{{ loop.alternate('odd', 'even') }}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{{ loop.step(2) }}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Macro trong Jinja2 hoạt động tương tự như một hàm trong Python, cho phép tái sử dụng các khối mã giao diện HTML lặp lại (như input fields, buttons)."
  },
  {
    "id": 60,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the purpose of the `| safe` filter in Jinja2 (e.g., `{{ raw_html | safe }}`)?",
    "options": [
      {
        "key": "A",
        "text": "It scans the variable with antivirus definitions before rendering.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It marks the string as safe, instructing Jinja2 NOT to perform automatic HTML escaping on it.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It encrypts the variable using the application's `SECRET_KEY`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It strips all JavaScript tags from the input.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để sử dụng macro từ một tệp khác, cú pháp chuẩn là `{% from '_macros.html' import render_field %}`."
  },
  {
    "id": 61,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "How can a developer automatically inject common variables (such as `current_year` or `user_settings`) into every template context across the app?",
    "options": [
      {
        "key": "A",
        "text": "By writing global variables to `os.environ` on every request.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "By registering a context processor function using `@app.context_processor` that returns a dictionary.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "By modifying Jinja2's core source code.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By setting cookies on the client's device.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong vòng lặp `{% for item in items %}`, biến đặc biệt `loop.index` bắt đầu đếm từ 1, trong khi `loop.index0` bắt đầu đếm từ 0."
  },
  {
    "id": 62,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the following Jinja2 snippet:",
    "options": [
      {
        "key": "A",
        "text": "Only when the server encounters an unhandled Python exception.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "When the `items` collection is empty or does not exist.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "After the final item in the collection has finished rendering.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Only when `items` contains boolean False values.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Thuộc tính `loop.first` trả về `True` ở lần lặp đầu tiên, và `loop.last` trả về `True` ở lần lặp cuối cùng của danh sách."
  },
  {
    "id": 63,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "What is the evaluated output of the Jinja2 expression `{{ 42.567 | round(2, 'floor') }}`?",
    "options": [
      {
        "key": "A",
        "text": "42.57",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "42.56",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "42.5",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "43.0",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Khối `{% else %}` bên trong vòng lặp `{% for %}` của Jinja2 sẽ được thực thi nếu danh sách lặp rỗng (hoặc biến không tồn tại)."
  },
  {
    "id": 64,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which Jinja2 tag is used to include the contents of another template file directly into the current template without inheritance?",
    "options": [
      {
        "key": "A",
        "text": "{% extends 'nav.html' %}",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "{% include 'nav.html' %}",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{% use 'nav.html' %}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{% block 'nav.html' %}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm trợ giúp `url_for('static', filename='css/style.css')` tự động tạo đường dẫn URL chính xác tới các tệp tĩnh nằm trong thư mục `static/` của ứng dụng."
  },
  {
    "id": 65,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following characters are converted to safe HTML entities by Jinja2's default auto-escaping?",
    "options": [
      {
        "key": "A",
        "text": "< (converted to &lt;)",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "& (converted to &amp;)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "a (converted to &alpha;)",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@ (converted to &at;)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Để tránh xung đột cú pháp với các framework frontend như Vue.js hay AngularJS (cũng dùng `{{ }}`), Jinja2 cho phép cấu hình lại `variable_start_string` và `variable_end_string`."
  },
  {
    "id": 66,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "What filter can be used in Jinja2 to truncate a long blog article excerpt to 100 characters?",
    "options": [
      {
        "key": "A",
        "text": "slice",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "truncate",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "limit",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "cut",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tham số `request`, `session`, `g` và `url_for` luôn có sẵn tự động trong mọi ngữ cảnh template của Flask mà không cần phải truyền thủ công qua `render_template()`."
  },
  {
    "id": 67,
    "chapterId": "ch3",
    "chapterTitle": "Chapter 3: Templates in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is mixing raw HTML strings inside Python view functions considered a severe software development anti-pattern?",
    "options": [
      {
        "key": "A",
        "text": "It violates the separation of concerns, makes code unmaintainable, and dramatically increases the risk of XSS injection vulnerabilities.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Python cannot concatenate strings that contain HTML tags.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Browsers reject HTML responses that were not generated by Jinja2.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It prevents WSGI servers from using multi-threading.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Hàm `@app.context_processor` trả về một từ điển các biến hoặc hàm mà lập trình viên muốn tự động inject vào tất cả các template trong ứng dụng."
  },
  {
    "id": 68,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why should sensitive data such as passwords NEVER be submitted using the HTTP GET method?",
    "options": [
      {
        "key": "A",
        "text": "GET requests are limited to exactly 16 bytes of data.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "GET appends data directly to the URL query string, exposing it in browser history, bookmarks, proxy logs, and shoulder surfing.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Web browsers automatically delete GET requests after transmission.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "GET requests require a TLS client certificate.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức HTTP GET gửi dữ liệu hiển thị trực tiếp trên URL query string, khiến dữ liệu nhạy cảm như mật khẩu bị lưu vào lịch sử duyệt web, log của máy chủ và header Referer."
  },
  {
    "id": 69,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "When a web form includes a file upload input (`<input type='file'>`), what attribute MUST be set on the parent `<form>` tag?",
    "options": [
      {
        "key": "A",
        "text": "method='GET'",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "enctype='multipart/form-data'",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "enctype='application/x-www-form-urlencoded'",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "target='_blank'",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Flask-WTF tích hợp thư viện WTForms vào Flask, cung cấp khả năng tự động bảo vệ chống CSRF, định nghĩa form bằng class và xác thực dữ liệu phía server mạnh mẽ."
  },
  {
    "id": 70,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO problems make manual form processing in raw Flask tedious and error-prone compared to using Flask-WTF?",
    "options": [
      {
        "key": "A",
        "text": "HTTP payloads are string-only, requiring manual type casting (e.g. converting '25' to integer) with try/except blocks for each field.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Handling unchecked checkboxes is tricky because browsers send nothing (None) rather than 'False'.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Flask core forbids view functions from reading `request.form`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Web forms can only be submitted over WebSocket connections.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Để kích hoạt cơ chế bảo vệ CSRF trong Flask-WTF, ứng dụng bắt buộc phải cấu hình khóa bí mật `SECRET_KEY` trong `app.config`."
  },
  {
    "id": 71,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "In a Cross-Site Request Forgery (CSRF) attack, how does an attacker exploit an authenticated user's session?",
    "options": [
      {
        "key": "A",
        "text": "By executing SQL injection payloads through DNS servers.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "By tricking the user's browser into submitting an unauthorized request to a trusted site where the user has an active session cookie.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "By stealing the server's private SSL key directly from RAM.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By intercepting unencrypted Wi-Fi packets on an HTTPS connection.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong mẫu HTML, hàm `{{ form.hidden_tag() }}` tạo ra các thẻ `<input type=\"hidden\">` chứa mã token CSRF đã được ký số an toàn."
  },
  {
    "id": 72,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which application configuration variable is mandatory in Flask to enable cryptographic signing of CSRF tokens in Flask-WTF?",
    "options": [
      {
        "key": "A",
        "text": "app.config['CSRF_SALT']",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "app.config['SECRET_KEY']",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "app.config['DATABASE_URI']",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "app.config['WTF_CSRF_TIME_LIMIT']",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trường `StringField` trong WTForms đại diện cho thẻ nhập văn bản chuẩn `<input type=\"text\">`."
  },
  {
    "id": 73,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a Jinja2 template rendering a form subclassed from `FlaskForm`, what tag must be placed inside `<form method='POST'>` to render the hidden CSRF token input?",
    "options": [
      {
        "key": "A",
        "text": "{{ form.csrf() }}",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "{{ form.hidden_tag() }}",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{{ form.security_tag() }}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{{ form.render_hidden() }}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trường `PasswordField` tự động hiển thị thẻ `<input type=\"password\">`, giúp che giấu các ký tự mật khẩu khi người dùng nhập trên màn hình."
  },
  {
    "id": 74,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the relationship between Flask, Flask-WTF, and WTForms?",
    "options": [
      {
        "key": "A",
        "text": "Flask-WTF is a standalone database engine, while WTForms is a CSS framework.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "WTForms is a pure Python form library, Flask-WTF is the glue extension integrating WTForms into Flask, and Flask is the core web framework.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Flask-WTF completely replaces Flask and runs without Python.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "WTForms is only used for client-side JavaScript validation.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Validator `DataRequired()` đảm bảo rằng trường dữ liệu không bị để trống và không chỉ chứa toàn ký tự khoảng trắng."
  },
  {
    "id": 75,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding client-side validation (HTML5 attributes and JavaScript) versus server-side validation are correct?",
    "options": [
      {
        "key": "A",
        "text": "Client-side validation is primarily for User Experience (UX), providing immediate visual feedback without page reloads.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Client-side validation can be easily bypassed by attackers using developer tools, cURL, or disabling JavaScript.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "If a form has HTML5 `required` attributes, server-side validation is completely redundant and unnecessary.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Server-side validation cannot reject invalid email formats.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Validator `Email()` kiểm tra tính hợp lệ của định dạng địa chỉ email bằng cách phân tích cú pháp chuẩn và domain."
  },
  {
    "id": 76,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the following form definition:",
    "options": [
      {
        "key": "A",
        "text": "<input type='text'>",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "<input type='password'>",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "<textarea>",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "<input type='hidden'>",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Validator `Length(min=6, max=30)` kiểm tra độ dài chuỗi ký tự nhập vào phải nằm trong khoảng từ 6 đến 30 ký tự."
  },
  {
    "id": 77,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a view function handling a form submission, what does `form.validate_on_submit()` check?",
    "options": [
      {
        "key": "A",
        "text": "It only checks if the user is logged in as an administrator.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It checks whether the request is a POST (or PUT/PATCH) AND whether all attached validators pass successfully.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It sends the user's credentials to Google for identity verification.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It drops and recreates the database tables.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Validator `EqualTo('password', message='Passwords must match')` thường được dùng để kiểm tra trường nhập lại mật khẩu phải trùng khớp hoàn toàn với trường mật khẩu chính."
  },
  {
    "id": 78,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which WTForms validator ensures that two fields in the same form (such as `password` and `confirm_password`) contain identical values?",
    "options": [
      {
        "key": "A",
        "text": "SameAs()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "EqualTo('fieldname')",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "IdenticalTo('fieldname')",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Match()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong một class Form của Flask-WTF, một custom validator cấp trường được định nghĩa bằng hàm thành viên có tên theo quy ước `validate_<field_name>(self, field)`."
  },
  {
    "id": 79,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "How do you define an inline custom validator method on a `FlaskForm` class for a field named `username`?",
    "options": [
      {
        "key": "A",
        "text": "def check_username(self):",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "def validate_username(self, field):",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "@app.validator('username')",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "def username_is_valid(field):",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để báo lỗi xác thực trong custom validator, lập trình viên phải ném ra ngoại lệ `ValidationError('Thông báo lỗi')` từ thư viện `wtforms.validators`."
  },
  {
    "id": 80,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "What exception must an inline custom validator method raise to notify WTForms that validation failed?",
    "options": [
      {
        "key": "A",
        "text": "ValueError",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "wtforms.validators.ValidationError",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "werkzeug.exceptions.BadRequest",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "KeyError",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `form.validate_on_submit()` là cách viết tắt tiện lợi kiểm tra đồng thời cả hai điều kiện: request hiện tại là POST (hoặc PUT/PATCH/DELETE) và tất cả validator đều vượt qua thành công."
  },
  {
    "id": 81,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary UX problem solved by the Post/Redirect/Get (PRG) pattern in web applications?",
    "options": [
      {
        "key": "A",
        "text": "It prevents database connections from timing out.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It prevents duplicate form submissions and annoying 'Confirm Form Resubmission' browser dialogs when a user refreshes the page.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It automatically compresses image uploads.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It bypasses CORS restrictions.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Khi `validate_on_submit()` trả về `False`, danh sách các lỗi xác thực cho từng trường được lưu trữ trong thuộc tính `field.errors` (dạng list các chuỗi thông báo lỗi)."
  },
  {
    "id": 82,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a standard Flask PRG implementation for a registration route:",
    "options": [
      {
        "key": "A",
        "text": "To handle both initial GET requests (showing the empty form) and failed POST requests (re-rendering the form with validation error messages).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Because `redirect` cannot display HTML.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "To wipe out all session cookies.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because PRG requires two consecutive redirects.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Mô hình Post/Redirect/Get (PRG) ngăn chặn hiện tượng người dùng nhấn F5 hoặc nút Reload trên trình duyệt làm gửi lại dữ liệu form (duplicate submission)."
  },
  {
    "id": 83,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "How are validation error messages for a field named `username` accessed and rendered in a Jinja2 template?",
    "options": [
      {
        "key": "A",
        "text": "{% for err in form.username.errors %}<span>{{ err }}</span>{% endfor %}",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "{{ form.errors['username'].print() }}",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "{{ request.errors.username }}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{% for err in session.errors %}{{ err }}{% endfor %}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Hàm `flash('Message', 'category')` lưu trữ thông báo tức thời vào session của người dùng, và thông báo này sẽ tự động biến mất sau khi được hiển thị ở request tiếp theo."
  },
  {
    "id": 84,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding Flask's `session` object are correct?",
    "options": [
      {
        "key": "A",
        "text": "`session` behaves like a Python dictionary and stores data across multiple requests from the same client.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "By default, Flask stores session data in a cryptographically signed cookie sent to the client.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Data stored in default Flask cookie sessions is completely encrypted and hidden from the client browser.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`session` data automatically persists forever even after the browser is closed.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Trong template Jinja2, hàm `get_flashed_messages(with_categories=True)` được dùng để lấy ra danh sách các thông báo flash kèm theo phân loại (success, danger, info) để hiển thị."
  },
  {
    "id": 85,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "When saving an uploaded file to disk in Flask, why is Werkzeug's `secure_filename()` function applied to `file.filename`?",
    "options": [
      {
        "key": "A",
        "text": "To convert the file into a JPEG image.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To strip path traversal sequences (such as `../../etc/passwd`) that could allow attackers to overwrite system files.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To encrypt the file with AES.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To upload the file directly to AWS S3.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để xử lý tải tệp lên an toàn với Flask-WTF, lập trình viên nên sử dụng trường `FileField` kết hợp với validator `FileAllowed` và `FileRequired` từ `flask_wtf.file`."
  },
  {
    "id": 86,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a template using Flask-Bootstrap, what macro renders a complete WTForms form with all inputs, labels, and CSRF tokens automatically?",
    "options": [
      {
        "key": "A",
        "text": "{{ wtf.render(form) }}",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "{{ wtf.quick_form(form) }}",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{{ wtf.auto_form(form) }}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{{ wtf.build(form) }}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm `werkzeug.utils.secure_filename()` loại bỏ các ký tự nguy hiểm và các đường dẫn điều hướng như `../`, ngăn chặn lỗ hổng Directory Traversal khi lưu tệp người dùng tải lên."
  },
  {
    "id": 87,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "How can CSRF protection be accommodated when submitting AJAX POST requests with JSON payloads?",
    "options": [
      {
        "key": "A",
        "text": "By completely disabling `SECRET_KEY`.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "By embedding the CSRF token in a `<meta name='csrf-token'>` tag and sending it in an HTTP header (such as `X-CSRFToken`) in fetch requests.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "By appending the user's plaintext password to the URL.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "AJAX requests are immune to CSRF and never require tokens.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Khi gửi form có chứa tệp đính kèm (`FileField`), thẻ `<form>` trong HTML bắt buộc phải có thuộc tính `enctype=\"multipart/form-data\"`."
  },
  {
    "id": 88,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "In WTForms, what does a custom Widget allow a developer to customize?",
    "options": [
      {
        "key": "A",
        "text": "The database table schema in MySQL.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The HTML rendering representation of a field (such as rendering a color picker `<input type='color'>` or custom slider).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The cryptographic hashing algorithm used for passwords.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The Gunicorn worker thread count.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Cấu hình `app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024` giới hạn dung lượng tải lên tối đa là 16 Megabytes; nếu vượt quá, Flask sẽ tự động trả về lỗi 413 Payload Too Large."
  },
  {
    "id": 89,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which WTForms validator should be used to enforce that a field is not submitted empty or with whitespace only?",
    "options": [
      {
        "key": "A",
        "text": "Optional()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "DataRequired()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Length(0, 0)",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "NoneOf()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Biến `request.files['avatar']` chứa đối tượng `FileStorage` đại diện cho tệp đã tải lên, cung cấp các phương thức như `.save(path)` và thuộc tính `.filename`."
  },
  {
    "id": 90,
    "chapterId": "ch4",
    "chapterTitle": "Chapter 4: Web Forms in Flask Applications",
    "correctCount": 1,
    "type": "Applied",
    "question": "In `base.html`, how are flashed messages with categories retrieved and displayed using Jinja2?",
    "options": [
      {
        "key": "A",
        "text": "{% for msg in session.flash %}{{ msg }}{% endfor %}",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "{% with messages = get_flashed_messages(with_categories=true) %}{% for category, message in messages %}<div class='alert alert-{{ category }}'>{{ message }}</div>{% endfor %}{% endwith %}",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "{{ show_flash_messages() }}",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "{% read_flash %}",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nếu CSRF token bị thiếu hoặc không hợp lệ khi submit form POST, Flask-WTF mặc định sẽ từ chối xử lý và trả về mã lỗi HTTP 400 Bad Request."
  },
  {
    "id": 91,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is `pyodbc` in the Python database ecosystem?",
    "options": [
      {
        "key": "A",
        "text": "A JavaScript front-end framework.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An open-source Python module implementing the Python DB-API 2.0 specification to connect to databases via ODBC drivers.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A NoSQL document store.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A web template engine.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "`pyodbc` là một thư viện Python mã nguồn mở cho phép các ứng dụng kết nối tới các hệ quản trị cơ sở dữ liệu thông qua chuẩn giao tiếp ODBC (Open Database Connectivity) tuân thủ DB-API 2.0."
  },
  {
    "id": 92,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 2,
    "type": "Theory",
    "question": "In Python DB-API 2.0, which TWO objects are fundamental for establishing database communication and executing queries?",
    "options": [
      {
        "key": "A",
        "text": "Connection object (manages the physical database connection and transactions).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Cursor object (executes SQL statements and traverses result sets).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Blueprint object.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Virtualenv interpreter.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Hàm `pyodbc.connect()` chấp nhận một chuỗi kết nối (Connection String) chứa các thông số như Driver, Server, Database, UID, và PWD."
  },
  {
    "id": 93,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary root cause of SQL Injection vulnerabilities in database applications?",
    "options": [
      {
        "key": "A",
        "text": "Using relational databases instead of NoSQL databases.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Constructing SQL statements by directly concatenating or interpolating untrusted user input into raw SQL strings.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Enabling database indexes on primary keys.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Executing transactions with ACID compliance.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Đối tượng `Connection` đại diện cho phiên làm việc với cơ sở dữ liệu, quản lý kết nối vật lý và các giao dịch (transaction commit/rollback)."
  },
  {
    "id": 94,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine this vulnerable code snippet:",
    "options": [
      {
        "key": "A",
        "text": "admin' OR '1'='1' --",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "<script>alert(1)</script>",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "../../../etc/passwd",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "SELECT * FROM db",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Đối tượng `Cursor` (con trỏ) được tạo từ connection thông qua `conn.cursor()`, dùng để thực thi các câu lệnh SQL và duyệt qua các tập kết quả trả về."
  },
  {
    "id": 95,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "How should the query in the previous question be rewritten using parameterized queries to completely eliminate SQL injection?",
    "options": [
      {
        "key": "A",
        "text": "cursor.execute('SELECT * FROM users WHERE username = ?', (username,))",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "cursor.execute('SELECT * FROM users WHERE username = ' + str(username))",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "cursor.execute(f'SELECT * FROM users WHERE username = {username.replace(\" \", \"\")}')",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "cursor.execute('SELECT * FROM users WHERE username = %s' % username)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức `cursor.execute(sql, params)` thực thi một câu lệnh SQL lên cơ sở dữ liệu."
  },
  {
    "id": 96,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why do parameterized queries (prepared statements) fundamentally prevent SQL injection?",
    "options": [
      {
        "key": "A",
        "text": "They compile the query structure before binding parameter values, ensuring parameters are treated strictly as data literals and never parsed as SQL commands.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "They encrypt the entire database file with a secret password.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "They prevent users from sending HTTP requests.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "They convert SQL statements into JavaScript.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức `cursor.fetchone()` truy xuất một hàng kết quả duy nhất từ con trỏ, hoặc trả về `None` nếu không còn hàng nào."
  },
  {
    "id": 97,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "After executing an `INSERT`, `UPDATE`, or `DELETE` statement via `pyodbc`, what method must be called on the connection object to persist changes to the database?",
    "options": [
      {
        "key": "A",
        "text": "cursor.save()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "cnxn.commit()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "cnxn.flush()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "cursor.close()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `cursor.fetchall()` lấy toàn bộ các hàng kết quả còn lại dưới dạng một danh sách các đối tượng Row."
  },
  {
    "id": 98,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "If an unhandled exception occurs during a multi-step database transaction in `pyodbc`, what method should be called inside the `except` block to abort all partial changes?",
    "options": [
      {
        "key": "A",
        "text": "cnxn.rollback()",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "cnxn.commit()",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "cursor.restart()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "cnxn.disconnect()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Chuẩn ACID trong cơ sở dữ liệu bao gồm 4 thuộc tính cốt lõi: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập), và Durability (Bền vững)."
  },
  {
    "id": 99,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding cursor fetch methods in DB-API 2.0 (`pyodbc`) are correct?",
    "options": [
      {
        "key": "A",
        "text": "`cursor.fetchone()` retrieves the next single row from the query result set or returns `None` when no more rows remain.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "`cursor.fetchall()` retrieves all remaining rows of a query result set as a list of tuples.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "`cursor.fetchall()` automatically deletes the fetched records from the database table.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`cursor.fetchone()` can only be called once per database connection.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Thuộc tính Atomicity (Tính nguyên tử) đảm bảo rằng tất cả các thao tác trong một giao dịch phải thành công trọn vẹn; nếu một thao tác thất bại, toàn bộ giao dịch sẽ bị hoàn tác (rollback)."
  },
  {
    "id": 100,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary motivation for transitioning from low-level raw SQL drivers (like `pyodbc`) to an Object-Relational Mapper (ORM) like SQLAlchemy?",
    "options": [
      {
        "key": "A",
        "text": "Raw SQL drivers cannot connect to relational databases.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "ORMs map database tables to Python classes and rows to objects, eliminating repetitive SQL boilerplate, improving portability, and automating parameterized statements.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Raw SQL is forbidden in Python 3.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "ORMs make applications run 100 times faster than raw SQL.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `conn.commit()` lưu vĩnh viễn tất cả các thay đổi được thực hiện trong giao dịch hiện tại vào cơ sở dữ liệu."
  },
  {
    "id": 101,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "What does the 'Trust Boundary' concept mean in the context of database security?",
    "options": [
      {
        "key": "A",
        "text": "The physical network cable connecting the database server to the router.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The line separating components or domains with different levels of trust; all data crossing it from untrusted zones must be validated and sanitized.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The firewall rule that blocks outgoing HTTP port 80 traffic.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The password complexity rules enforced by the operating system.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `conn.rollback()` hủy bỏ và hoàn tác mọi thay đổi chưa commit trong giao dịch hiện tại khi có lỗi xảy ra."
  },
  {
    "id": 102,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "An attacker targets a vulnerable route:",
    "options": [
      {
        "key": "A",
        "text": "UNION-based SQL Injection (e.g., ?id=1 UNION SELECT username, password, 1, 1 FROM users)",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Cross-Site Request Forgery",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Buffer Overflow",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Path Traversal",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Lỗ hổng SQL Injection phát sinh khi dữ liệu đầu vào không đáng tin cậy của người dùng được ghép chuỗi trực tiếp vào câu lệnh SQL thay vì sử dụng tham số hóa."
  },
  {
    "id": 103,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "In a pyodbc connection string, what parameter specifies the ODBC driver to use (for example for MySQL)?",
    "options": [
      {
        "key": "A",
        "text": "DRIVER={MySQL ODBC 8.0 Unicode Driver}",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "ENGINE=sqlalchemy",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "ORM=pyodbc",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "PROTOCOL=https",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Để ngăn chặn triệt để SQL Injection trong `pyodbc`, lập trình viên bắt buộc phải sử dụng truy vấn tham số hóa (Parameterized Queries) với dấu hỏi chấm `?` làm placeholder."
  },
  {
    "id": 104,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "What is the result of executing the following parameterized query when user input contains `admin' OR 1=1; --`?",
    "options": [
      {
        "key": "A",
        "text": "The query returns all rows from the users table.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The query searches for a user whose literal username string equals `admin' OR 1=1; --`, executing safely without injection.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The database table is immediately dropped.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The Python interpreter raises a SyntaxError.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong `cursor.execute(\"SELECT * FROM users WHERE id = ?\", (user_id,))`, cơ sở dữ liệu xử lý giá trị tham số thuần túy dưới dạng dữ liệu (literal value), loại bỏ khả năng mã độc bị thông dịch thành lệnh SQL."
  },
  {
    "id": 105,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements describe standard ACID transaction guarantees in relational databases?",
    "options": [
      {
        "key": "A",
        "text": "Atomicity ensures that all operations in a transaction succeed completely or none are applied (all-or-nothing).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Consistency ensures the database transitions from one valid state to another, preserving all schema constraints.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Isolation means databases cannot be backed up while active.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Durability means data is stored only in RAM memory.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Sau khi hoàn thành các thao tác với cơ sở dữ liệu, lập trình viên phải luôn gọi `cursor.close()` và `conn.close()` (hoặc sử dụng khối `with`) để giải phóng tài nguyên và kết nối."
  },
  {
    "id": 106,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "In pyodbc, when using a context manager on a connection object:",
    "options": [
      {
        "key": "A",
        "text": "The connection commits the transaction automatically.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "The database deletes all tables.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "The transaction is rolled back.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The connection remains open permanently.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Mô hình ORM (Object-Relational Mapping) giúp ánh xạ các bảng cơ sở dữ liệu thành các class Python và các hàng thành các đối tượng, giúp giảm thiểu việc viết mã SQL thô."
  },
  {
    "id": 107,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the main limitation of using raw SQL statements directly in application view code?",
    "options": [
      {
        "key": "A",
        "text": "Raw SQL statements cannot perform JOIN queries.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "High verbosity, repetitive CRUD mapping, and tight coupling to specific database SQL dialects, reducing database portability.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Python does not support string variables containing SQL.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Raw SQL cannot be executed over TCP/IP.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nhược điểm chính của việc sử dụng raw SQL qua `pyodbc` so với ORM là mã nguồn bị phụ thuộc chặt chẽ vào cú pháp riêng của từng hệ CSDL và tốn nhiều công sức chuyển đổi dữ liệu thủ công."
  },
  {
    "id": 108,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "In pyodbc, what does `cursor.description` contain after executing a `SELECT` statement?",
    "options": [
      {
        "key": "A",
        "text": "The full source code of the database engine.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "A sequence of 7-item tuples describing each result column (including column name, type code, display size, etc.).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The SQL query execution time in milliseconds.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The number of deleted rows.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Kỹ thuật Connection Pooling (hồ bơi kết nối) duy trì một tập hợp các kết nối cơ sở dữ liệu mở sẵn để tái sử dụng, giúp giảm đáng kể chi phí thiết lập kết nối cho từng request."
  },
  {
    "id": 109,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Theory",
    "question": "How should database connection pooling be handled in high-traffic web applications?",
    "options": [
      {
        "key": "A",
        "text": "Open one single global connection that all threads share without locks.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Use a managed connection pool (such as SQLAlchemy's pool) where connections are checked out per request and recycled.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Reboot the database server after every 100 HTTP requests.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Store all database passwords in browser localStorage.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mã lỗi `pyodbc.IntegrityError` xảy ra khi một câu lệnh SQL vi phạm các ràng buộc toàn vẹn của cơ sở dữ liệu như Foreign Key, Unique hoặc Not Null."
  },
  {
    "id": 110,
    "chapterId": "ch5_1",
    "chapterTitle": "Chapter 5.1: Database Basics with Pyodbc",
    "correctCount": 1,
    "type": "Applied",
    "question": "What method is used on a `pyodbc.Cursor` object to execute the same SQL statement repeatedly across a sequence of parameters?",
    "options": [
      {
        "key": "A",
        "text": "cursor.run_batch()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "cursor.executemany()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "cursor.repeat()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "cursor.execute_all()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Khi sử dụng `with pyodbc.connect(...) as conn:`, thư viện sẽ tự động gọi `conn.commit()` nếu khối lệnh kết thúc thành công và gọi `conn.rollback()` nếu xảy ra ngoại lệ."
  },
  {
    "id": 111,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "What are the two primary architectural layers that comprise the SQLAlchemy library?",
    "options": [
      {
        "key": "A",
        "text": "SQLAlchemy React and SQLAlchemy Angular",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "SQLAlchemy Core (low-level SQL expression language) and SQLAlchemy ORM (high-level object-relational mapping).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "SQLAlchemy HTML and SQLAlchemy CSS",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "SQLAlchemy Driver and SQLAlchemy Virtualenv",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Thư viện SQLAlchemy được cấu thành từ hai tầng kiến trúc chính: SQLAlchemy Core (quản lý kết nối, engine và biểu thức SQL) và SQLAlchemy ORM (ánh xạ hướng đối tượng cấp cao)."
  },
  {
    "id": 112,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is `app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False` widely recommended in Flask applications?",
    "options": [
      {
        "key": "A",
        "text": "It disables database transactions.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It turns off Flask-SQLAlchemy's event-based change tracking system, saving substantial memory and overhead without impacting normal SQLAlchemy behavior.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It prevents the database from storing user passwords.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It forces SQLite to run in read-only mode.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Flask-SQLAlchemy là tiện ích mở rộng (extension) chuẩn hóa việc tích hợp SQLAlchemy vào Flask, tự động quản lý vòng đời Session và dọn dẹp kết nối theo từng request."
  },
  {
    "id": 113,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "In SQLAlchemy ORM, what architectural design pattern does the `db.session` object implement?",
    "options": [
      {
        "key": "A",
        "text": "Observer Pattern",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Unit of Work pattern (tracking new, dirty, and deleted objects, then flushing them within a transaction).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Singleton Pattern",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Factory Method Pattern",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Biến cấu hình `SQLALCHEMY_DATABASE_URI` chỉ định chuỗi kết nối cơ sở dữ liệu (ví dụ: `sqlite:///app.db` hoặc `postgresql://user:pass@host/dbname`)."
  },
  {
    "id": 114,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the model definition:",
    "options": [
      {
        "key": "A",
        "text": "The column cannot contain duplicate values.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The column cannot contain NULL values (NOT NULL constraint).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The column must be an integer.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The column is automatically encrypted.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Cấu hình `SQLALCHEMY_TRACK_MODIFICATIONS = False` tắt hệ thống theo dõi sửa đổi đối tượng nội bộ của Flask-SQLAlchemy nhằm tiết kiệm bộ nhớ và tránh các cảnh báo hiệu năng."
  },
  {
    "id": 115,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "How do you model a One-to-Many relationship between a `Role` model and a `User` model in Flask-SQLAlchemy?",
    "options": [
      {
        "key": "A",
        "text": "Add a ForeignKey('roles.id') in User, and define relationship('User', backref='role') on Role.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Store all user IDs inside a comma-separated string in the Role table.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Create an associative table with three foreign keys.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "One-to-Many relationships cannot be modeled in SQLAlchemy.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Một model trong Flask-SQLAlchemy được định nghĩa bằng một class Python kế thừa từ lớp cơ sở `db.Model`."
  },
  {
    "id": 116,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding SQLAlchemy's `backref` argument in `db.relationship()` are correct?",
    "options": [
      {
        "key": "A",
        "text": "It automatically creates a reciprocal virtual property on the related model (e.g., user.role).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "It eliminates the need to explicitly write a second db.relationship() on the child class.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It creates a new database table named backref in SQL.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It forces all related queries to execute synchronously in the browser.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Thuộc tính `__tablename__` cho phép lập trình viên tùy chỉnh tên của bảng cơ sở dữ liệu tương ứng trong schema thay vì dùng tên class mặc định."
  },
  {
    "id": 117,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a Many-to-Many relationship (such as `Post` and `Tag`), what intermediate construct is required by relational database theory and SQLAlchemy?",
    "options": [
      {
        "key": "A",
        "text": "A Python virtual environment.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An association table (db.Table) containing foreign keys referencing both related entity tables.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A Jinja2 template filter.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A custom URL converter.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong định nghĩa cột `db.Column(db.Integer, primary_key=True)`, tham số `primary_key=True` thiết lập cột này làm khóa chính duy nhất định danh cho từng bản ghi."
  },
  {
    "id": 118,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine the following code creating a new record:",
    "options": [
      {
        "key": "A",
        "text": "It places the object into the Session's tracking set as a 'new' entity without immediately writing permanent changes to disk.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "It immediately commits the transaction and closes the database connection.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "It drops the users table.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It renders an HTML template.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Tham số `unique=True` áp đặt ràng buộc duy nhất trên cột (ví dụ như email hoặc username), ngăn chặn trùng lặp dữ liệu trên toàn bảng."
  },
  {
    "id": 119,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "How do you delete an existing record `user_obj` using Flask-SQLAlchemy?",
    "options": [
      {
        "key": "A",
        "text": "db.session.delete(user_obj) followed by db.session.commit()",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "user_obj.drop()",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "del user_obj",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "db.session.remove_row(user_obj)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Khóa ngoại `db.ForeignKey('users.id')` thiết lập liên kết quan hệ ở mức cơ sở dữ liệu tham chiếu tới cột `id` của bảng `users`."
  },
  {
    "id": 120,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "What is the difference between `User.query.filter_by(username='alice').first()` and `User.query.filter_by(username='alice').first_or_404()` in Flask-SQLAlchemy?",
    "options": [
      {
        "key": "A",
        "text": "first() automatically deletes the user if found.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "first() returns None if no record matches, whereas first_or_404() immediately calls Flask's abort(404) if no record is found.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "first_or_404() returns a list of 404 records.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "first() only works with SQLite databases.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm `db.relationship('Post', backref='author', lazy='dynamic')` định nghĩa mối quan hệ ở mức ORM cấp cao, cho phép truy cập đối tượng liên kết theo hai chiều."
  },
  {
    "id": 121,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "What limitation exists when relying solely on `db.create_all()` for schema management in existing production databases?",
    "options": [
      {
        "key": "A",
        "text": "db.create_all() cannot create tables in SQLite.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "db.create_all() only creates missing tables; it never modifies, alters, or drops columns on tables that already exist in the database.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "db.create_all() deletes all data on every application restart.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "db.create_all() requires root operating system access.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tham số `backref='author'` tự động chèn thêm một thuộc tính ảo có tên `author` vào model `Post`, trỏ ngược lại đối tượng `User` sở hữu bài viết."
  },
  {
    "id": 122,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "What database migration tool does `Flask-Migrate` wrap to manage schema evolution in Flask applications?",
    "options": [
      {
        "key": "A",
        "text": "Flyway",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Alembic",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Liquibase",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Docker",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tham số `lazy='dynamic'` biến thuộc tính quan hệ thành một đối tượng truy vấn (Query object) chưa thực thi, cho phép áp dụng tiếp các bộ lọc `.filter()` hoặc `.order_by()` trước khi truy xuất."
  },
  {
    "id": 123,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which Flask-Migrate CLI command initializes the `migrations/` directory structure in a new project?",
    "options": [
      {
        "key": "A",
        "text": "flask db start",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "flask db init",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "flask db create",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "flask db setup",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để biểu diễn mối quan hệ Nhiều - Nhiều (Many-to-Many), lập trình viên phải định nghĩa một bảng phụ trợ trung gian (Association Table) chứa hai khóa ngoại trỏ tới hai bảng chính."
  },
  {
    "id": 124,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "After modifying a model in Python code, which command automatically generates a migration script by comparing models with the current database schema?",
    "options": [
      {
        "key": "A",
        "text": "flask db upgrade",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "flask db migrate -m 'commit message'",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "flask db sync",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "flask db alter",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mẫu thiết kế Unit of Work do `db.session` cài đặt chịu trách nhiệm ghi nhận tất cả các thay đổi đối tượng trong phiên làm việc và đồng bộ hóa chúng xuống DB trong một giao dịch duy nhất."
  },
  {
    "id": 125,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which command applies pending migration scripts to update the database schema to the latest version?",
    "options": [
      {
        "key": "A",
        "text": "flask db commit",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "flask db upgrade",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "flask db push",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "flask db run",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mẫu thiết kế Identity Map đảm bảo rằng mỗi bản ghi trong cơ sở dữ liệu chỉ được ánh xạ tới duy nhất một đối tượng Python trong phạm vi của Session hiện tại."
  },
  {
    "id": 126,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which command rolls back the database schema to the previous migration version?",
    "options": [
      {
        "key": "A",
        "text": "flask db downgrade",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "flask db revert",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "flask db rollback",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "flask db undo",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức `db.session.add(user)` đưa đối tượng mới vào trạng thái chờ (pending) trong Session để chuẩn bị thêm vào cơ sở dữ liệu."
  },
  {
    "id": 127,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why should the `migrations/` directory always be committed to version control (e.g. Git)?",
    "options": [
      {
        "key": "A",
        "text": "Because it contains the production database passwords.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Because migration scripts represent the historical timeline of schema changes required to reproduce database structure across development, testing, and production environments.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because Git requires database files to compile code.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because it stores temporary user sessions.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `db.session.commit()` đẩy tất cả các thao tác thêm, sửa, xóa đang chờ trong Session vào cơ sở dữ liệu và xác nhận giao dịch thành công."
  },
  {
    "id": 128,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "How does SQLAlchemy ORM prevent SQL injection when executing queries like `User.query.filter_by(username=user_input).first()`?",
    "options": [
      {
        "key": "A",
        "text": "It converts all string inputs to uppercase letters.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Under the hood, SQLAlchemy generates parameterized queries, passing user_input as bound parameter data rather than concatenating it into SQL syntax.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It sends all queries to an AI model for verification.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It strips all quotation marks from user input.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `db.session.rollback()` hoàn tác tất cả các thay đổi chưa được commit trong phiên làm việc, đưa các đối tượng về trạng thái trước đó."
  },
  {
    "id": 129,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "Why is implementing a `__repr__` method on core SQLAlchemy models considered a best practice?",
    "options": [
      {
        "key": "A",
        "text": "It creates a database index on the table.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It provides a clear, human-readable string representation of the object, which is invaluable for debugging, logging, and interactive flask shell sessions.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It hashes the user's password automatically.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It converts the model into an HTML form.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `db.session.delete(user)` đánh dấu đối tượng để xóa khỏi cơ sở dữ liệu khi gọi commit."
  },
  {
    "id": 130,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding SQLAlchemy's Identity Map pattern are correct?",
    "options": [
      {
        "key": "A",
        "text": "Within a single Session, loading the same table row multiple times returns the exact same Python object instance in memory.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "It prevents duplicate object representations of the same database row within an active unit of work.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It assigns a random password to each database user.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It requires all primary keys to be 128-bit UUIDs.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Truy vấn `User.query.get(user_id)` (hoặc `db.session.get(User, user_id)`) tìm kiếm bản ghi theo giá trị khóa chính và trả về `None` nếu không tìm thấy."
  },
  {
    "id": 131,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Flask-SQLAlchemy, what query modifier sorts results in descending order by a timestamp column?",
    "options": [
      {
        "key": "A",
        "text": "Post.timestamp.desc()",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Post.timestamp.reverse()",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Post.timestamp.down()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Post.timestamp.backward()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức `.filter_by(username='alice').first_or_404()` tự động kích hoạt hàm `abort(404)` nếu kết quả truy vấn không tìm thấy bản ghi nào."
  },
  {
    "id": 132,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "In a One-to-Many relationship, what does setting `lazy='dynamic'` on `db.relationship()` accomplish?",
    "options": [
      {
        "key": "A",
        "text": "It executes queries over WebSockets.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Instead of immediately loading all related items as a list, it returns a query object, allowing further filtering and pagination before execution.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It automatically commits database transactions every second.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It disables foreign key integrity checks.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lệnh `db.create_all()` tạo tất cả các bảng cơ sở dữ liệu dựa trên các class kế thừa `db.Model` nếu các bảng đó chưa tồn tại trong cơ sở dữ liệu."
  },
  {
    "id": 133,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Flask-SQLAlchemy, how is an interactive command-line environment configured with the application context launched?",
    "options": [
      {
        "key": "A",
        "text": "python -m idle",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "flask shell",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "flask run --cli",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "python manage.py terminal",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Alembic là công cụ di chuyển dữ liệu (database migration) chính thức được sử dụng bởi Flask-Migrate để quản lý và theo dõi sự thay đổi của schema."
  },
  {
    "id": 134,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary role of `db.session.rollback()` in error handling?",
    "options": [
      {
        "key": "A",
        "text": "It downgrades Flask to an earlier version.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It cancels all uncommitted modifications in the current session, restoring the session to a clean state after an exception occurs.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It deletes the database file from disk.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It redirects the client to HTTP 404.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lệnh `flask db init` khởi tạo thư mục môi trường migration có tên `migrations/` chứa các tệp kịch bản và cấu hình của dự án."
  },
  {
    "id": 135,
    "chapterId": "ch5_2",
    "chapterTitle": "Chapter 5.2: Database & ORM - SQLAlchemy",
    "correctCount": 1,
    "type": "Theory",
    "question": "When configuring SQLite with Flask-SQLAlchemy on Unix-based systems, what does the connection URI `sqlite:////tmp/test.db` specify (note the four slashes)?",
    "options": [
      {
        "key": "A",
        "text": "An in-memory temporary database.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An absolute file path `/tmp/test.db`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A relative path inside the current working folder.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A remote SQLite cloud cluster.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lệnh `flask db migrate -m \"message\"` tự động phát hiện sự khác biệt giữa các Model và CSDL thực tế để sinh ra tệp kịch bản nâng cấp (migration script), và `flask db upgrade` áp dụng các thay đổi đó vào CSDL."
  },
  {
    "id": 136,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the fundamental conceptual difference between Authentication and Authorization in web security?",
    "options": [
      {
        "key": "A",
        "text": "Authentication asks 'WHAT can you do?', while Authorization asks 'WHO are you?'.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Authentication verifies identity ('WHO are you?'), while Authorization determines permissions and access rights ('WHAT can you do?').",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Authentication happens on the client, while Authorization happens on DNS servers.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Authentication only applies to mobile devices, while Authorization applies to browsers.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Authentication (Xác thực) là quá trình xác minh danh tính của người dùng (bạn là ai), trong khi Authorization (Phân quyền) là quá trình xác định quyền hạn người dùng được phép thực hiện những hành động gì."
  },
  {
    "id": 137,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is storing user passwords in plaintext in a database considered a catastrophic security violation?",
    "options": [
      {
        "key": "A",
        "text": "Plaintext strings use too much disk space.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Any database compromise immediately exposes all user credentials to attackers, enabling credential stuffing, insider abuse, and legal liability under data privacy regulations.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Relational databases cannot index plaintext passwords.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Python cannot compare plaintext strings.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mật khẩu tuyệt đối không bao giờ được lưu trữ dưới dạng văn bản thuần (plaintext) hoặc mã hóa có thể đảo ngược hai chiều, mà bắt buộc phải được băm một chiều an toàn bằng thuật toán chuyên dụng."
  },
  {
    "id": 138,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is cryptographic password hashing different from encryption?",
    "options": [
      {
        "key": "A",
        "text": "Hashing is a one-way mathematical function designed so that the original plaintext cannot be recovered, whereas encryption is two-way and reversible with a decryption key.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Encryption cannot be decrypted, while hashing is easily decoded.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Hashing only works on numbers, while encryption works on text.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Hashing requires an internet connection.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Mã hóa (Encryption) là phép biến đổi hai chiều có thể giải mã lại bằng khóa bí mật; trong khi Băm (Hashing) là hàm một chiều không thể đảo ngược từ chuỗi băm trở lại văn bản gốc."
  },
  {
    "id": 139,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the purpose of adding a cryptographic 'salt' to passwords before hashing?",
    "options": [
      {
        "key": "A",
        "text": "To compress the password into a 4-byte integer.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To ensure that identical passwords produce completely different hash outputs, defending against precomputed Rainbow Table attacks.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To allow administrators to recover lost passwords.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To speed up the hashing algorithm.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Muối mật khẩu (Salt) là một chuỗi ngẫu nhiên được thêm vào mật khẩu trước khi băm, giúp đảm bảo hai mật khẩu giống hệt nhau sẽ tạo ra hai giá trị băm hoàn toàn khác biệt, vô hiệu hóa các cuộc tấn công bằng Rainbow Tables."
  },
  {
    "id": 140,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Werkzeug (`werkzeug.security`), which two functions are standard for generating and validating password hashes in Flask?",
    "options": [
      {
        "key": "A",
        "text": "hash_password() and verify_password()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "generate_password_hash() and check_password_hash()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "make_hash() and test_hash()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "encrypt_password() and decrypt_password()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm `generate_password_hash(password)` của thư viện Werkzeug sử dụng thuật toán PBKDF2/Scrypt kèm salt ngẫu nhiên để sinh ra chuỗi băm an toàn."
  },
  {
    "id": 141,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO session cookie security flags are critical for defending authentication tokens in production web applications?",
    "options": [
      {
        "key": "A",
        "text": "HttpOnly (prevents client-side JavaScript from accessing the cookie, mitigating cookie theft via XSS).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Secure (ensures the cookie is only transmitted over encrypted HTTPS connections).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "AllowAllDomains (broadcasts session cookies to all external third-party websites).",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "NoExpire (ensures sessions never expire).",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Hàm `check_password_hash(hash, password)` trích xuất thuật toán và salt từ chuỗi băm để băm mật khẩu người dùng nhập vào và so sánh an toàn theo thời gian hằng số (constant-time)."
  },
  {
    "id": 142,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the role of the `SameSite` attribute on session cookies (e.g., `SameSite=Lax` or `Strict`)?",
    "options": [
      {
        "key": "A",
        "text": "It specifies the database collation order.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It restricts cookies from being sent along with cross-site requests, providing strong defense against Cross-Site Request Forgery (CSRF).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It disables the browser's back button.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It forces users to enter their password twice.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Cờ `HttpOnly` trên session cookie ngăn chặn mã JavaScript chạy phía trình duyệt truy cập vào cookie, giúp bảo vệ phiên làm việc khỏi các cuộc tấn công đánh cắp cookie qua lỗ hổng XSS."
  },
  {
    "id": 143,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary extension used in Flask applications to manage user sessions, login state, and route protection?",
    "options": [
      {
        "key": "A",
        "text": "Flask-WTF",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Flask-Login",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Flask-Migrate",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Flask-Admin",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Cờ `Secure` đảm bảo rằng cookie phiên chỉ được phép truyền qua các kết nối được mã hóa bằng giao thức HTTPS, ngăn chặn việc đánh cắp trên mạng không an toàn."
  },
  {
    "id": 144,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "When defining a `User` model for integration with Flask-Login, what mixin class from `flask_login` can be inherited to provide default implementations of `is_authenticated`, `is_active`, `is_anonymous`, and `get_id()`?",
    "options": [
      {
        "key": "A",
        "text": "LoginModelMixin",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "UserMixin",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "AuthMixin",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "SessionMixin",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Cờ `SameSite='Lax'` (hoặc `'Strict'`) hạn chế trình duyệt gửi kèm cookie trong các yêu cầu liên trang (cross-site requests), cung cấp khả năng phòng vệ chống lại các cuộc tấn công CSRF."
  },
  {
    "id": 145,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "What decorator must be attached to a callback function to teach Flask-Login how to load a user instance from the ID stored in the session cookie?",
    "options": [
      {
        "key": "A",
        "text": "@app.load_user",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "@login_manager.user_loader",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "@user.session_load",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@auth.get_user",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lớp `LoginManager` từ tiện ích mở rộng `Flask-Login` đóng vai trò trung tâm điều phối toàn bộ các cơ chế xác thực và quản lý phiên người dùng trong Flask."
  },
  {
    "id": 146,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which function is called in Flask-Login to formally log a user in and store their user ID in the session?",
    "options": [
      {
        "key": "A",
        "text": "auth_user(user)",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "login_user(user, remember=False)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "create_session(user)",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "start_user_session(user)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lớp `UserMixin` của Flask-Login cung cấp các cài đặt mặc định cho 4 thuộc tính và phương thức bắt buộc: `is_authenticated`, `is_active`, `is_anonymous`, và `get_id()`."
  },
  {
    "id": 147,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "What proxy object does Flask-Login provide in views and templates to access the currently logged-in user?",
    "options": [
      {
        "key": "A",
        "text": "g.user_object",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "current_user",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "session.user",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "request.user",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Decorator `@login_manager.user_loader` định nghĩa một hàm callback nhận vào định danh `user_id` từ session cookie để tải đối tượng người dùng tương ứng từ cơ sở dữ liệu."
  },
  {
    "id": 148,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "What decorator from Flask-Login is applied to view functions to prevent unauthenticated access?",
    "options": [
      {
        "key": "A",
        "text": "@require_auth",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "@login_required",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "@protect_route",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@auth_only",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm `login_user(user, remember=True)` thiết lập phiên đăng nhập cho người dùng trong session và tùy chọn tạo cookie 'Remember Me' dài hạn."
  },
  {
    "id": 149,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "In an authentication system, what is an 'Open Redirect' vulnerability during login?",
    "options": [
      {
        "key": "A",
        "text": "A failure of the database to close TCP connections.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An attacker tricks the login form into redirecting users to an untrusted external malicious site via an unvalidated ?next=https://evil.com query parameter.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A redirect from HTTP to HTTPS.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A route returning HTTP status code 404.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm `logout_user()` xóa thông tin định danh phiên đăng nhập hiện tại của người dùng khỏi session."
  },
  {
    "id": 150,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "How can an application prevent Open Redirect vulnerabilities when redirecting to the `next` parameter?",
    "options": [
      {
        "key": "A",
        "text": "By converting next_page to integer.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "By verifying that url_parse(next_page).netloc == '' (ensuring it is a relative URL within the same origin) or validating with is_safe_url() before redirecting.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "By disabling redirects across the entire application.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By hashing the next_page string with MD5.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Decorator `@login_required` bảo vệ các view function, tự động chặn người dùng ẩn danh chưa đăng nhập và chuyển hướng họ về trang đăng nhập đã cấu hình trong `login_manager.login_view`."
  },
  {
    "id": 151,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the security purpose of configuring `login_manager.session_protection = 'strong'` in Flask-Login?",
    "options": [
      {
        "key": "A",
        "text": "It permanently deletes user accounts if they enter an incorrect password.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It monitors changes to the client's User-Agent string and IP address; if changes are detected, it invalidates the session to prevent session hijacking.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It forces passwords to be at least 32 characters long.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It disables cookie expiration entirely.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Biến ngữ cảnh toàn cục `current_user` do Flask-Login cung cấp đại diện cho người dùng đang đăng nhập trong request hiện tại (hoặc đối tượng AnonymousUserMixin nếu chưa đăng nhập)."
  },
  {
    "id": 152,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "In web application authentication, what does the concept of a 'Fresh Login' mean?",
    "options": [
      {
        "key": "A",
        "text": "A brand new account created within the last 5 minutes.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "A session where the user has recently and directly entered their primary credentials, as opposed to an automated login via a persistent 'Remember Me' cookie.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A user logging in from a newly purchased smartphone.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A login performed over HTTP without SSL.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Thuộc tính `current_user.is_authenticated` trả về `True` nếu người dùng đã đăng nhập hợp lệ và `False` đối với người dùng ẩn danh."
  },
  {
    "id": 153,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which decorator from Flask-Login is applied to sensitive endpoints (such as `/change-password`) to require a fresh credential verification rather than a 'remember me' cookie?",
    "options": [
      {
        "key": "A",
        "text": "@fresh_login_required",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "@strict_auth",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "@password_required",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@reauthenticate",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Biến query string `next` (ví dụ: `/login?next=%2Fdashboard`) lưu đường dẫn mà người dùng dự định truy cập trước khi bị chặn bởi `@login_required`, cho phép chuyển hướng họ về đúng trang sau khi đăng nhập."
  },
  {
    "id": 154,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which Python library is commonly used in Flask applications to generate cryptographically signed, time-limited verification tokens for email confirmation and password resets?",
    "options": [
      {
        "key": "A",
        "text": "random",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "itsdangerous (URLSafeTimedSerializer)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "pickle",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "math",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lỗ hổng Open Redirect xảy ra khi ứng dụng chuyển hướng người dùng tới giá trị URL trong tham số `next` mà không kiểm tra xem URL đó có trỏ tới tên miền độc hại bên ngoài hay không."
  },
  {
    "id": 155,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "In an OAuth 2.0 Authorization Code flow, what is the security function of the `state` parameter generated during the initial authorization redirect?",
    "options": [
      {
        "key": "A",
        "text": "It compresses the access token.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It prevents Cross-Site Request Forgery (CSRF) by ensuring the callback response received by the application corresponds to the request initiated from that exact user session.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It stores the user's password in plain text.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It specifies the user's country state.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để phòng chống Open Redirect, lập trình viên sử dụng hàm `url_parse(next_page).netloc` để đảm bảo địa chỉ chuyển hướng là đường dẫn tương đối nội bộ và không chứa domain ngoài."
  },
  {
    "id": 156,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding OAuth 2.0 Authorization Code Flow are correct?",
    "options": [
      {
        "key": "A",
        "text": "The client application exchanges the authorization code for an access token directly via a server-to-server request, keeping the client secret hidden from the browser.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "The user's password for the third-party identity provider is shared with and stored by the client application.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "The redirect URI must be strictly pre-registered with the identity provider to prevent code interception attacks.",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "OAuth 2.0 does not use HTTP or HTTPS.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "C"
    ],
    "explanation": "Giao thức OAuth 2.0 cho phép người dùng cấp quyền cho ứng dụng của bên thứ ba truy cập tài nguyên của họ (như tài khoản Google, GitHub) mà không cần phải tiết lộ mật khẩu."
  },
  {
    "id": 157,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "When implementing a 'Forgot Password' workflow, why should the application display the identical feedback message: 'If that email exists in our system, a reset link has been sent' regardless of whether the email was found?",
    "options": [
      {
        "key": "A",
        "text": "Because Flask cannot execute `if/else` statements.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To prevent User Enumeration attacks, where malicious actors probe the form to discover valid registered email addresses.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To conserve database bandwidth.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because email servers reject different messages.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong luồng OAuth 2.0 Authorization Code Flow, sau khi người dùng đồng ý cấp quyền, máy chủ xác thực sẽ trả về một mã ủy quyền tạm thời (Authorization Code) thông qua URL chuyển hướng callback."
  },
  {
    "id": 158,
    "chapterId": "ch6",
    "chapterTitle": "Chapter 6: Basic Authentication & Session",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which function is called in Flask-Login to terminate a user's session and remove authentication cookies upon logout?",
    "options": [
      {
        "key": "A",
        "text": "logout_user()",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "session.destroy()",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "clear_auth()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "kill_login()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Client backend sau đó gửi mã Authorization Code kèm `client_id` và `client_secret` lên máy chủ OAuth để đổi lấy Access Token an toàn qua kênh bảo mật server-to-server."
  },
  {
    "id": 159,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "In access control architecture, what is Role-Based Access Control (RBAC)?",
    "options": [
      {
        "key": "A",
        "text": "A model where resource access is determined strictly by the time of day.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An approach where permissions are assigned to specific roles representing organizational job functions, and users are assigned appropriate roles to inherit those permissions.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A system where all users share the same master password.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A database indexing algorithm.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mô hình RBAC (Role-Based Access Control) tổ chức quyền hạn theo các vai trò (như Admin, Editor, User). Người dùng được gán vào các vai trò, giúp tách biệt việc quản lý người dùng với việc cấp phát quyền riêng lẻ."
  },
  {
    "id": 160,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "How does Role-Based Access Control (RBAC) differ from Discretionary Access Control (DAC) and Mandatory Access Control (MAC)?",
    "options": [
      {
        "key": "A",
        "text": "In DAC, the resource owner controls access; in MAC, central security clearance labels enforce access; in RBAC, permissions are mediated through organizational roles.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "DAC is only for databases, MAC is only for hardware, and RBAC is only for JavaScript.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "RBAC gives all permissions to every user by default.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "MAC allows users to transfer permissions to anyone.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Broken Access Control (Kiểm soát truy cập bị hỏng) đứng vị trí số 1 trong danh sách OWASP Top 10 các rủi ro bảo mật ứng dụng web nghiêm trọng nhất."
  },
  {
    "id": 161,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "According to the OWASP Top 10, which category was ranked as the #1 most critical web application security risk?",
    "options": [
      {
        "key": "A",
        "text": "Broken Access Control",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Security Misconfiguration",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Cryptographic Failures",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Identification and Authentication Failures",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Lỗ hổng IDOR (Insecure Direct Object Reference) xảy ra khi ứng dụng cho phép người dùng truy cập hoặc chỉnh sửa tài nguyên của người khác chỉ bằng cách thay đổi giá trị ID trên URL hoặc request."
  },
  {
    "id": 162,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider this route implementation:",
    "options": [
      {
        "key": "A",
        "text": "Missing function-level access control: any logged-in user (even standard readers) can delete arbitrary users because it checks authentication but completely lacks role authorization.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "SQL injection vulnerability in `get_or_404`.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Cross-Site Scripting in `delete_user`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Buffer overflow in integer conversion.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Kỹ thuật Bit flags sử dụng các lũy thừa của 2 (1, 2, 4, 8, 16) để biểu diễn các quyền hạn độc lập, cho phép kiểm tra và gán quyền cực kỳ hiệu quả bằng các toán tử bitwise (AND, OR)."
  },
  {
    "id": 163,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is an Insecure Direct Object Reference (IDOR) vulnerability?",
    "options": [
      {
        "key": "A",
        "text": "An application exposes internal object references (such as database IDs in the URL) and accesses records without verifying that the requesting user owns or has permission to view that object.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "A server crashes due to null pointer dereferencing in C extensions.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "A failure of Jinja2 to render CSS files.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "An unencrypted database connection string.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Toán tử gán OR từng bit `role.permissions |= Permission.WRITE` được sử dụng để bổ sung thêm một quyền hạn mới vào vai trò mà không làm mất các quyền sẵn có."
  },
  {
    "id": 164,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements accurately contrast Horizontal Privilege Escalation with Vertical Privilege Escalation?",
    "options": [
      {
        "key": "A",
        "text": "Horizontal privilege escalation occurs when a user accesses data or resources belonging to another user with the same privilege level (e.g. Author A editing Author B's draft).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Vertical privilege escalation occurs when a standard user accesses administrative or higher-privileged functions (e.g. regular member accessing admin deletion panels).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Horizontal escalation only affects mobile apps, while vertical escalation only affects desktop browsers.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Vertical privilege escalation is legal under software copyright laws.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Phép toán AND từng bit `(user.role.permissions & Permission.ADMIN) == Permission.ADMIN` được sử dụng để kiểm tra xem người dùng có sở hữu một quyền cụ thể hay không."
  },
  {
    "id": 165,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "What HTTP status code MUST be returned when an authenticated user attempts to access a resource for which they lack sufficient permissions?",
    "options": [
      {
        "key": "A",
        "text": "401 Unauthorized",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "403 Forbidden",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "404 Not Found",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "500 Internal Server Error",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Một decorator kiểm tra phân quyền tùy chỉnh nhận vào tham số (như tên role hoặc permission) bắt buộc phải có cấu trúc 3 tầng hàm lồng nhau (outer decorator -> factory -> wrapper)."
  },
  {
    "id": 166,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "What are the four foundational building blocks of an RBAC architecture in web applications?",
    "options": [
      {
        "key": "A",
        "text": "Users, Roles, Permissions, and Sessions",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "HTML, CSS, JavaScript, and WebSockets",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "GET, POST, PUT, and DELETE",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "CPUs, RAM, Disks, and Networks",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Decorator `@functools.wraps(f)` bắt buộc phải được áp dụng trên hàm wrapper để bảo toàn siêu dữ liệu gốc của hàm view như `__name__` và `__doc__`, giúp Flask định tuyến chính xác."
  },
  {
    "id": 167,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the following Bit Flag permissions implementation:",
    "options": [
      {
        "key": "A",
        "text": "3",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "7",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "14",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "31",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nguyên tắc 'Deny by Default' (Mặc định từ chối) quy định rằng mọi quyền truy cập vào tài nguyên đều bị chặn mặc định trừ khi người dùng được cấp quyền một cách rõ ràng."
  },
  {
    "id": 168,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "Using the `Permission` bit flags above, which bitwise expression checks whether a role's `permissions` integer contains the `WRITE` permission?",
    "options": [
      {
        "key": "A",
        "text": "(role.permissions & Permission.WRITE) == Permission.WRITE",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "(role.permissions | Permission.WRITE) == 0",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "role.permissions + Permission.WRITE == 4",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "role.permissions ^ Permission.WRITE == 0",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Kiểm tra quyền sở hữu tài nguyên (Resource Ownership) bắt buộc view function phải xác minh `item.user_id == current_user.id` trước khi cho phép thực hiện thao tác cập nhật hoặc xóa."
  },
  {
    "id": 169,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is storing permissions as integer Bit Flags advantageous for application models?",
    "options": [
      {
        "key": "A",
        "text": "Bit flags bypass the operating system firewall.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "They provide compact, efficient storage (a single integer column rather than dozens of booleans) and microsecond bitwise operations for checking and combining rights.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "They prevent all database deadlocks.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "They eliminate the need for SQL databases.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để trả về lỗi khi người dùng không đủ quyền truy cập, ứng dụng web nên sử dụng mã trạng thái chuẩn HTTP 403 Forbidden."
  },
  {
    "id": 170,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a User model integrating RBAC, what is the standard implementation of `user.can(perm)`?",
    "options": [
      {
        "key": "A",
        "text": "def can(self, perm): return self.role is not None and self.role.has_permission(perm)",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "def can(self, perm): return True",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "def can(self, perm): return self.password == perm",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "def can(self, perm): return perm in request.form",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Mã HTTP 401 Unauthorized biểu thị rằng người dùng chưa được xác thực (chưa đăng nhập), trong khi HTTP 403 Forbidden biểu thị người dùng đã đăng nhập nhưng không có đủ thẩm quyền."
  },
  {
    "id": 171,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is the 'Deny by Default' principle essential when designing authorization systems?",
    "options": [
      {
        "key": "A",
        "text": "It means all users are banned from logging in.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "All actions and endpoints are considered forbidden unless an explicit permission or policy grants access, ensuring that forgotten checks fail securely.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It rejects all incoming HTTP GET requests.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It forces developers to write blacklists of unauthorized IP addresses.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mô hình ABAC (Attribute-Based Access Control) đưa ra quyết định cấp quyền dựa trên sự kết hợp động giữa các thuộc tính của người dùng, thuộc tính tài nguyên, hành động và ngữ cảnh môi trường (thời gian, địa điểm IP)."
  },
  {
    "id": 172,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is hiding action buttons in client-side HTML templates (e.g. `{% if current_user.is_admin() %}<button>Delete</button>{% endif %}`) INSUFFICIENT on its own for security?",
    "options": [
      {
        "key": "A",
        "text": "Because search engine crawlers will index the delete button anyway.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Because client-side hiding is purely for User Experience (UX); an attacker can inspect code, unhide elements, or send direct HTTP requests unless the server enforces authorization.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because Jinja2 cannot evaluate `if` statements.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because buttons cannot trigger POST requests.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong thiết kế cơ sở dữ liệu RBAC, bảng `users` liên kết với bảng `roles` thông qua một khóa ngoại `role_id` (quan hệ Một - Nhiều) nếu mỗi người dùng chỉ giữ một vai trò duy nhất."
  },
  {
    "id": 173,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary technical problem that occurs if a custom Flask decorator omits `@functools.wraps(func)`?",
    "options": [
      {
        "key": "A",
        "text": "The Python interpreter runs out of memory.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The decorated function's `__name__` becomes 'wrapper', causing endpoint namespace collisions and crashing Flask during route registration or `url_for()` lookups.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The database drops all foreign keys.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The HTTP response is automatically converted to XML.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nếu hệ thống cho phép một người dùng đồng thời đảm nhận nhiều vai trò khác nhau, cấu trúc DB yêu cầu một bảng trung gian liên kết Nhiều - Nhiều giữa `users` và `roles`."
  },
  {
    "id": 174,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "When constructing a decorator that accepts arguments (such as `@role_required('admin')`), why is a three-layer nested function structure required in Python?",
    "options": [
      {
        "key": "A",
        "text": "Layer 1 accepts the argument (`'admin'`), Layer 2 accepts the target function (`func`), and Layer 3 is the runtime `wrapper(*args, **kwargs)` that replaces the original function.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Python enforces a 3-function minimum on all decorators.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Layer 1 creates a thread, Layer 2 creates a process, and Layer 3 creates a socket.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To allow the decorator to communicate with three different databases.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Các quyền hạn (Permissions) nên được kiểm tra ở mức chi tiết (fine-grained) trong mã nguồn thay vì kiểm tra tên Role cứng (coarse-grained) để hệ thống linh hoạt khi thêm bớt vai trò."
  },
  {
    "id": 175,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "Examine the following three-layer authorization decorator:",
    "options": [
      {
        "key": "A",
        "text": "The route executes normally.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Execution halts at `if not current_user.is_authenticated:` and raises HTTP 401 Unauthorized.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The user is granted temporary guest privileges.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The server crashes with a TypeError.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Lập trình viên có thể tạo các hàm helper tiện ích trong User model như `can(permission)` và `is_administrator()` để làm gọn mã kiểm tra quyền trong view và template."
  },
  {
    "id": 176,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the recommended order when stacking multiple decorators on a Flask route?",
    "options": [
      {
        "key": "A",
        "text": "`@app.route` at the very bottom, business logic at the top.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "`@app.route` at the very top (outermost), followed by `@login_required` (cheap auth check), followed by authorization checks (role/ownership), and caching at the bottom.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Decorator order has zero effect on execution flow.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`@login_required` must be placed above `@app.route`.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong Jinja2 template, các nút hành động nguy hiểm (như Xóa, Sửa) nên được bọc trong khối điều kiện `{% if current_user.can(Permission.DELETE) %}` để chỉ hiển thị cho người có thẩm quyền."
  },
  {
    "id": 177,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "How can an application prevent Horizontal Privilege Escalation when an author edits a blog post (`/posts/<int:id>/edit`)?",
    "options": [
      {
        "key": "A",
        "text": "Verify resource ownership: check that `post.author_id == current_user.id` (or `current_user.is_admin()`) before permitting edits, aborting with 403 if mismatched.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Disable all post editing features.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Make all blog post IDs negative numbers.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Rely on client-side CSS to hide the edit link.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Chỉ ẩn nút bấm trên giao diện mà không kiểm tra phân quyền ở backend là một sai lầm bảo mật nghiêm trọng, vì kẻ tấn công vẫn có thể gửi request HTTP trực tiếp tới endpoint."
  },
  {
    "id": 178,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "How can database queries be written to enforce resource ownership at the query level?",
    "options": [
      {
        "key": "A",
        "text": "posts = Post.query.all()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "posts = Post.query.filter_by(author=current_user).all()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "posts = Post.query.filter(Post.id > 0).all()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "posts = db.session.query(User).all()",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Biến ngữ cảnh toàn cục `g` trong Flask là đối tượng cục bộ theo request, rất thích hợp để lưu trữ thông tin quyền hạn hoặc người dùng đã xác thực trong suốt vòng đời của một request."
  },
  {
    "id": 179,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding audit logging of access control decisions are correct?",
    "options": [
      {
        "key": "A",
        "text": "Both successful administrative operations and rejected authorization attempts should be logged with user ID, role, action, target resource, and timestamp.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Audit logs allow security teams to detect brute-force permission probing, account takeover, and compliance violations.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Audit logs should include plaintext user passwords.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Audit logging eliminates the need for database backups.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Để ngăn chặn leo quyền ngang (Horizontal Privilege Escalation), hệ thống phải kiểm tra xem người dùng hiện tại có thực sự sở hữu bản ghi dữ liệu mà họ đang cố gắng thao tác hay không."
  },
  {
    "id": 180,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a unit test verifying role access with Flask's test client, what assertion verifies that an unauthorized role is blocked?",
    "options": [
      {
        "key": "A",
        "text": "self.assertEqual(response.status_code, 403)",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "self.assertEqual(response.status_code, 200)",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "self.assertIsNone(response.data)",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "self.assertTrue(response.is_json)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Để ngăn chặn leo quyền dọc (Vertical Privilege Escalation), hệ thống phải ngăn cấm người dùng thông thường gọi các chức năng quản trị hoặc tự ý nâng quyền của chính mình."
  },
  {
    "id": 181,
    "chapterId": "ch7",
    "chapterTitle": "Chapter 7: Roles & Permissions (RBAC)",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the Principle of Least Privilege in web application authorization?",
    "options": [
      {
        "key": "A",
        "text": "Assigning users only the minimal permissions strictly necessary to accomplish their required responsibilities.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Granting all employees administrator privileges to minimize access requests.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Allowing all database queries to execute without WHERE clauses.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Disabling authentication on local development environments.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Khi người dùng vi phạm kiểm soát truy cập hoặc cố gắng tấn công leo quyền, sự kiện đó phải được ghi lại (audit log) kèm thông tin định danh và thời gian để phục vụ điều tra bảo mật."
  },
  {
    "id": 182,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "According to the Single Responsibility Principle (SRP) of SOLID, why should a `User` database model NOT contain an `email_welcome_letter()` method?",
    "options": [
      {
        "key": "A",
        "text": "Because Python classes cannot send network packets.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Because the model's sole responsibility is representing user data and persistence; handling email protocols belongs to a separate dedicated `EmailService`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because SQLAlchemy forbids methods on models.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because emails must be sent from client-side JavaScript.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nguyên lý Single Responsibility Principle (SRP) của SOLID quy định một class chỉ nên có một lý do duy nhất để thay đổi. Model `User` chỉ nên quản lý dữ liệu thực thể, không nên ôm đồm việc gửi email kết nối mạng."
  },
  {
    "id": 183,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "In production web applications, why must 'Identity' data, 'Authentication' data, and 'Profile' data be architecturally distinguished?",
    "options": [
      {
        "key": "A",
        "text": "Identity is legal/private (e.g. real name, tax ID), Authentication is security secrets (password hashes), and Profile is public/customizable (bio, avatar, username).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "They are stored in three different physical computers across the world.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Profile data is always encrypted with AES-512, while authentication data is plaintext.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Web browsers can only process one data type per user.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức `user.ping()` cập nhật trường thời gian `last_seen = datetime.utcnow()` mỗi khi người dùng có tương tác, giúp hệ thống theo dõi trạng thái hoạt động trực tuyến."
  },
  {
    "id": 184,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Applied",
    "question": "How can user activity (e.g., `last_seen` timestamp) be updated automatically on every authenticated request without duplicating code across every view?",
    "options": [
      {
        "key": "A",
        "text": "By calling `user.ping()` inside a global `@app.before_request` hook.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "By polling the server every millisecond from an infinite while loop.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "By modifying Jinja2's core parsing grammar.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By requiring users to submit a timestamp form on every click.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Hàm hook `@app.before_request` là vị trí lý tưởng nhất để tự động gọi `current_user.ping()` nhằm cập nhật thời gian hoạt động của người dùng trước khi thực thi view function."
  },
  {
    "id": 185,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the primary performance benefit of caching rendered Markdown as HTML in a `body_html` column in the database?",
    "options": [
      {
        "key": "A",
        "text": "It converts relational data into NoSQL format.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Converting Markdown to HTML consumes CPU cycles; converting once on create/update and caching the result avoids costly conversion overhead on every page view.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It prevents database connections from expiring.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It automatically compresses JPEG avatars.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Khi cho phép người dùng nhập văn bản định dạng Markdown, ứng dụng bắt buộc phải sử dụng thư viện `bleach` để làm sạch (sanitize) mã HTML sinh ra, loại bỏ các thẻ độc hại như `<script>` để chống XSS."
  },
  {
    "id": 186,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is the Python library `bleach` used when allowing users to submit Markdown or rich text?",
    "options": [
      {
        "key": "A",
        "text": "To bleach and whiten avatar image backgrounds.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To sanitize HTML against a strict whitelist of allowed tags and attributes, stripping dangerous scripts and event handlers (e.g., `onerror=`) to prevent XSS.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To compress HTML files for faster network transit.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To validate email syntax.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Danh sách các thẻ HTML cho phép (whitelist) trong `bleach.clean()` chỉ định rõ ràng những thẻ định dạng nào (ví dụ: `<b>`, `<i>`, `<p>`, `<a>`) được phép giữ lại trong văn bản hiển thị."
  },
  {
    "id": 187,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why do HTML sanitization approaches based on 'Blacklists' (blocking `<script>` tags) almost always fail?",
    "options": [
      {
        "key": "A",
        "text": "Attackers can bypass blacklists using uppercase variations (`<SCRIPT>`), alternative tags with event handlers (`<img onerror=...>`), nested tags, or encoded payloads.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Blacklists use too much RAM memory.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Modern web browsers ignore HTML tags entirely.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Python does not support string search operations.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phân trang theo vị trí (Offset Pagination: `LIMIT ... OFFSET ...`) có hạn chế lớn về hiệu năng khi duyệt tới các trang rất sâu vì cơ sở dữ liệu vẫn phải quét qua toàn bộ các hàng trước đó."
  },
  {
    "id": 188,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding Offset-based pagination versus Cursor-based pagination are correct?",
    "options": [
      {
        "key": "A",
        "text": "Offset-based pagination (`LIMIT x OFFSET y`) degrades in performance on large datasets because the database must scan and discard all preceding offset rows.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Cursor-based pagination utilizes an indexed column (such as timestamp or ID) as a bookmark, maintaining consistent performance regardless of dataset size.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Cursor-based pagination allows users to jump directly to any arbitrary page number (e.g. jumping to page 500).",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Offset-based pagination cannot be used in relational databases.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Phân trang theo con trỏ (Cursor / Keyset Pagination) sử dụng chỉ mục của bản ghi cuối cùng (ví dụ: `WHERE id > last_seen_id LIMIT 20`) giúp truy vấn luôn đạt tốc độ ổn định bất kể độ sâu của trang."
  },
  {
    "id": 189,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "How is a self-referential Many-to-Many relationship (such as user Followers/Following) modeled in SQLAlchemy?",
    "options": [
      {
        "key": "A",
        "text": "By creating an association table containing two foreign keys (`follower_id` and `followed_id`), both referencing the `users.id` primary key.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "By storing all followed usernames in a text file.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Self-referential relationships are impossible in relational databases.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By creating 100 separate User tables.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức `query.paginate(page=page, per_page=per_page, error_out=False)` của Flask-SQLAlchemy trả về một đối tượng `Pagination` tiện lợi hỗ trợ duyệt trang."
  },
  {
    "id": 190,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider the following follower helper method:",
    "options": [
      {
        "key": "A",
        "text": "Idempotency (calling `follow()` repeatedly produces the same end state without duplicate records).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Polymorphism",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Reflection",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Asynchronous concurrency",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Đối tượng `Pagination` cung cấp các thuộc tính như `.items` (danh sách bản ghi trang hiện tại), `.has_next`, `.has_prev`, `.page`, và `.pages` (tổng số trang)."
  },
  {
    "id": 191,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Applied",
    "question": "In the blog platform described in Chapter 8, why does a User automatically follow themselves upon registration (`self.follow(self)`)?",
    "options": [
      {
        "key": "A",
        "text": "To prevent other users from viewing their profile.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To ensure that a user's personalized timeline of 'followed posts' seamlessly includes their own authored articles alongside those of users they follow.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To satisfy Flask-Login's `UserMixin` requirements.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To encrypt the user's password.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mối quan hệ người theo dõi (Follower / Following) là một mối quan hệ nhiều-nhiều tự tham chiếu (Self-Referential Many-to-Many) trên cùng một bảng `users`."
  },
  {
    "id": 192,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Flask, when a view function needs to set a client cookie (such as saving a user preference like `show_followed`), why must `make_response()` be used?",
    "options": [
      {
        "key": "A",
        "text": "Because cookies are HTTP response headers, requiring an explicit Response object to invoke `.set_cookie()`.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Because `redirect` cannot be returned directly in Python.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "To convert the cookie into a session variable.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To delete the user's browser cache.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Bảng trung gian `followers` lưu trữ hai cột khóa ngoại: `follower_id` (người nhấn theo dõi) và `followed_id` (người được theo dõi), cả hai đều trỏ về `users.id`."
  },
  {
    "id": 193,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "When comparing Client-side Cookies versus Server-side Sessions for storing data, which rule of thumb is correct?",
    "options": [
      {
        "key": "A",
        "text": "Use client cookies for non-sensitive UI preferences (theme, timeline toggle); use server sessions for sensitive authentication credentials and state.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Always store credit card numbers and passwords in unencrypted cookies.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Sessions should be stored on the client, and cookies on the database server.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Cookies cannot store strings longer than 2 characters.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Để lấy bài viết từ tất cả những người mà một người dùng đang theo dõi, ORM thực hiện phép JOIN giữa bảng `Post` với bảng phụ `followers` dựa trên điều kiện `followed_id == Post.user_id`."
  },
  {
    "id": 194,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "In the 12-Factor App methodology (Factor III: Config), how should application configuration and credentials be managed?",
    "options": [
      {
        "key": "A",
        "text": "Hardcoded in constants at the top of `app.py`.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Committed directly to public Git repositories in plain text.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Stored in environment variables, strictly separated from codebase source control.",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "Printed to the browser console.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "C"
    ],
    "explanation": "Cookie tùy chọn giao diện (như Dark Mode hoặc Ngôn ngữ) có thể được thiết lập bằng phương thức `response.set_cookie('theme', 'dark', max_age=30*24*3600)`."
  },
  {
    "id": 195,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "According to the 12-Factor App (Factor VI: Processes), how should web application processes execute in production?",
    "options": [
      {
        "key": "A",
        "text": "As stateful processes keeping session data in local server RAM memory.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "As completely stateless processes, persisting any shared state to backing datastores (like databases or Redis caches).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Inside the browser rendering engine.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "As single-threaded cron jobs.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để đọc lại tùy chọn giao diện do trình duyệt gửi lên trong các request sau, view function truy cập biến `request.cookies.get('theme', 'light')`."
  },
  {
    "id": 196,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is SQLite unsuitable for high-traffic concurrent production web applications, making PostgreSQL preferred?",
    "options": [
      {
        "key": "A",
        "text": "SQLite cannot store strings.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "SQLite uses file-level locking for writes, meaning concurrent write operations block each other and cause timeouts under load; PostgreSQL provides robust row-level concurrency.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "PostgreSQL is only compatible with PHP.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "SQLite does not support SQL syntax.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nguyên tắc cấu hình của phương pháp luận 12-Factor App quy định rằng tất cả các cấu hình nhạy cảm và thông số thay đổi giữa các môi trường (Dev, Prod) phải được lưu trữ trong biến môi trường (Environment Variables)."
  },
  {
    "id": 197,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "In a production architecture comprising Nginx and Gunicorn, what role does Nginx perform as a Reverse Proxy?",
    "options": [
      {
        "key": "A",
        "text": "It executes Python view functions and database migrations.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It handles SSL/TLS termination, serves static assets (CSS, JS, images) directly from disk, provides rate limiting, and forwards dynamic requests to Gunicorn.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It stores database rows in memory.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It compiles Jinja2 templates into Python bytecode.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Thư viện `python-dotenv` tự động đọc các cặp khóa-giá trị từ tệp `.env` trong thư mục gốc và nạp chúng vào biến môi trường hệ thống (`os.environ`)."
  },
  {
    "id": 198,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the recommended rule of thumb for determining the number of Gunicorn worker processes on a server?",
    "options": [
      {
        "key": "A",
        "text": "Exactly 1 worker regardless of hardware.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "(2 x CPU Cores) + 1",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "1000 workers per CPU Core",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Equal to the total number of registered users.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tệp `.env` chứa thông tin nhạy cảm (mật khẩu, API keys) tuyệt đối không bao giờ được commit vào hệ thống quản lý phiên bản Git, mà phải được thêm vào tệp `.gitignore`."
  },
  {
    "id": 199,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "In Blue-Green deployment strategy, how is zero-downtime deployment achieved?",
    "options": [
      {
        "key": "A",
        "text": "By turning off the server for 2 hours during the night.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "By maintaining two identical production environments; new code is deployed and verified on 'Green' while traffic hits 'Blue', followed by an instantaneous load balancer cutover to 'Green'.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "By running database migrations directly inside client browsers.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By deleting all existing user accounts.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức `os.environ.get('SECRET_KEY', 'fallback-dev-key')` cho phép đọc cấu hình một cách linh hoạt, sử dụng giá trị mặc định cho môi trường phát triển cục bộ."
  },
  {
    "id": 200,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why should a production web application implement an automated `/health` endpoint?",
    "options": [
      {
        "key": "A",
        "text": "To allow search engines to download user profiles.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To allow load balancers and monitoring systems to continuously verify database connectivity and core service availability, alerting on failures before users notice.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To display medical advice to users.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To restart the operating system automatically.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Việc xử lý các tác vụ tốn nhiều thời gian (như gửi email hàng loạt hoặc xử lý video) trực tiếp trong view function sẽ làm tắc nghẽn worker của server, gây treo request của người dùng."
  },
  {
    "id": 201,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "In the Three-Layer Architecture of a modern web application, which layer is responsible for formatting data, applying branding, and rendering the final user interface?",
    "options": [
      {
        "key": "A",
        "text": "Data Layer (Database)",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Business Logic Layer (Routes)",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Presentation Layer (Templates/UI)",
        "isCorrect": true
      },
      {
        "key": "D",
        "text": "Operating System Kernel",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "C"
    ],
    "explanation": "Để xử lý các tác vụ nền không đồng bộ (background tasks) trong ứng dụng Flask, kiến trúc chuẩn là sử dụng hàng đợi tác vụ như Celery kết hợp với Redis hoặc RabbitMQ."
  },
  {
    "id": 202,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "What does the YAGNI principle stand for in software engineering?",
    "options": [
      {
        "key": "A",
        "text": "You Always Get New Insights",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "You Aren't Gonna Need It (avoid over-engineering features based on speculative future requirements)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Yield All Global Network Interfaces",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Your Architecture Generates New Interfaces",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Flask Signal (như `request_started`, `template_rendered`) triển khai mẫu thiết kế Observer (Publish/Subscribe), cho phép các thành phần gửi thông báo sự kiện mà không bị ràng buộc phụ thuộc lẫn nhau."
  },
  {
    "id": 203,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why does Chapter 8 recommend restricting comment formatting to basic character markup (`<b>`, `<i>`, `<code>`, `<a>`) while allowing broader structural tags on blog posts?",
    "options": [
      {
        "key": "A",
        "text": "Because comments cannot be stored in SQL tables.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To maintain visual hierarchy—posts are primary content with rich formatting, while comments are secondary feedback with simpler formatting, reducing visual clutter and abuse.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because browsers crash if comments contain images.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To speed up internet routers.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Cơ chế Full-Text Search (tìm kiếm toàn văn) sử dụng bảng chỉ mục từ vựng (Inverted Index) để tìm kiếm từ khóa nhanh chóng trong các cột văn bản dài, vượt trội so với câu lệnh `LIKE '%query%'` chậm chạp."
  },
  {
    "id": 204,
    "chapterId": "ch8",
    "chapterTitle": "Chapter 8: Web Features & Best Practices",
    "correctCount": 1,
    "type": "Theory",
    "question": "In the 12-Factor App methodology (Factor XI: Logs), how should applications handle log output?",
    "options": [
      {
        "key": "A",
        "text": "Write logs directly to hardcoded local file paths like `/var/log/app.log` without rotation.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Treat logs as unbuffered event streams written directly to `stdout`/`stderr`, allowing the execution environment to capture, aggregate, and route them.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Store logs in client cookies.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Never produce any log messages.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Khái niệm Soft Delete (Xóa mềm) sử dụng một cột cờ hiệu (ví dụ: `is_deleted = db.Column(db.Boolean, default=False)`) để ẩn bản ghi khỏi người dùng mà không thực sự xóa vĩnh viễn khỏi DB."
  },
  {
    "id": 205,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "Who originally defined the architectural principles of REST (Representational State Transfer) in a 2000 doctoral dissertation?",
    "options": [
      {
        "key": "A",
        "text": "Guido van Rossum",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Roy Fielding",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Tim Berners-Lee",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Brendan Eich",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Kiến trúc REST (Representational State Transfer) được Roy Fielding định nghĩa lần đầu tiên vào năm 2000 trong luận án tiến sĩ của ông."
  },
  {
    "id": 206,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following are among the six defining architectural constraints of REST?",
    "options": [
      {
        "key": "A",
        "text": "Stateless communication (the server stores no client context between requests; each request contains all necessary data).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Client-Server separation (clients and servers evolve independently, separated by a uniform interface).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Mandatory storage of all data in XML documents.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Persistent TCP socket connections for every resource.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "6 ràng buộc kiến trúc cốt lõi của REST bao gồm: Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, và Code-on-Demand (tùy chọn)."
  },
  {
    "id": 207,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "In RESTful URL design, how should endpoints be structured conceptually?",
    "options": [
      {
        "key": "A",
        "text": "URLs represent resources using nouns (e.g. `/api/posts/`), while HTTP methods indicate the actions (GET, POST, PUT, DELETE).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "URLs must encode actions as verbs (e.g. `/api/getPost?id=1` and `/api/deletePost`).",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "All endpoints must be named after database SQL tables with `.php` extensions.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Endpoints should only accept GET requests.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Ràng buộc Stateless (Phi trạng thái) trong REST yêu cầu mỗi request từ client phải chứa đầy đủ toàn bộ thông tin cần thiết để server hiểu và xử lý, máy chủ không lưu ngữ cảnh client giữa các request."
  },
  {
    "id": 208,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "How do standard HTTP verbs map to fundamental CRUD database operations in REST APIs?",
    "options": [
      {
        "key": "A",
        "text": "GET maps to Delete, POST maps to Read, PUT maps to Create, DELETE maps to Update.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "POST maps to Create, GET maps to Read, PUT maps to Update/Replace, DELETE maps to Delete.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "GET maps to Create, POST maps to Update, DELETE maps to Read.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "All CRUD operations map to POST.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong thiết kế RESTful URL, danh từ số nhiều (plural nouns: ví dụ `/api/v1/articles`) được sử dụng để đại diện cho tài nguyên, thay vì sử dụng động từ."
  },
  {
    "id": 209,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a RESTful Flask endpoint creating a new resource, what HTTP status code and response payload should be returned upon successful creation?",
    "options": [
      {
        "key": "A",
        "text": "Status `200 OK` with an empty string.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Status `201 Created` with the newly created resource representation (often including a `Location` header).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Status `204 No Content`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Status `302 Found`.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức HTTP GET được dùng để truy xuất danh sách hoặc chi tiết tài nguyên, và tuyệt đối không được gây ra tác dụng phụ (side-effects) làm thay đổi trạng thái dữ liệu trên server."
  },
  {
    "id": 210,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the standard HTTP status code returned when a DELETE operation succeeds and returns no response body?",
    "options": [
      {
        "key": "A",
        "text": "200 OK",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "204 No Content",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "404 Not Found",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "202 Accepted",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức HTTP POST được dùng để gửi dữ liệu lên server nhằm tạo mới một tài nguyên con bên dưới collection tài nguyên đó."
  },
  {
    "id": 211,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a Flask API view function, how do you parse an incoming JSON payload sent in the request body?",
    "options": [
      {
        "key": "A",
        "text": "request.form.to_dict()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "request.get_json()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "request.args.get('json')",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "json.loads(request.url)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức HTTP PUT được dùng để thay thế toàn bộ (replace/full update) tài nguyên đích bằng payload gửi lên."
  },
  {
    "id": 212,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What does AJAX (Asynchronous JavaScript and XML) enable in modern web applications?",
    "options": [
      {
        "key": "A",
        "text": "It allows web browsers to communicate asynchronously with backend APIs in the background and update parts of the DOM dynamically without reloading the entire page.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "It replaces Python on the server with XML.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "It encrypts all hard drives on the client computer.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It forces web browsers to reload on every keystroke.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Phương thức HTTP PATCH được dùng để cập nhật cục bộ một phần (partial update) các trường của tài nguyên mà không cần gửi lại toàn bộ đối tượng."
  },
  {
    "id": 213,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is CORS (Cross-Origin Resource Sharing)?",
    "options": [
      {
        "key": "A",
        "text": "A Python module that converts SQL to JSON.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "A browser security mechanism that restricts web pages on one origin (domain/protocol/port) from making requests to a different origin unless the server explicitly permits it via headers.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A database replication protocol.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "An operating system firewall.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Phương thức HTTP DELETE được dùng để xóa hoàn toàn tài nguyên được chỉ định trên server."
  },
  {
    "id": 214,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "How is CORS enabled across all routes in a Flask application using the `flask_cors` extension?",
    "options": [
      {
        "key": "A",
        "text": "app.config['CORS'] = True",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "from flask_cors import CORS; CORS(app)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "app.wsgi_app = CORS()",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "pip install cors-all",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mã trạng thái HTTP 204 No Content thường được trả về khi một thao tác (như xóa DELETE hoặc cập nhật) thành công nhưng không cần trả về bất kỳ dữ liệu nào trong response body."
  },
  {
    "id": 215,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What are the three distinct structural parts of a JSON Web Token (JWT), separated by dots?",
    "options": [
      {
        "key": "A",
        "text": "Host, Path, Query",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Header, Payload, Signature",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "User, Password, Salt",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Status, Headers, Body",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mã HTTP 400 Bad Request biểu thị rằng dữ liệu payload gửi lên từ client không hợp lệ hoặc sai định dạng cú pháp JSON."
  },
  {
    "id": 216,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is stored in the Payload portion of a JWT?",
    "options": [
      {
        "key": "A",
        "text": "The hashing algorithm and token type.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Claims (user identity, roles, expiration timestamp `exp`, etc.).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The database root password.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The server's compiled binary code.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Mã HTTP 404 Not Found biểu thị rằng tài nguyên được yêu cầu theo URI không tồn tại trên hệ thống."
  },
  {
    "id": 217,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is it CRITICAL not to store sensitive information (such as plaintext passwords or credit cards) in a JWT payload?",
    "options": [
      {
        "key": "A",
        "text": "Because JWT tokens are compressed with gzip.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Because the payload is merely Base64Url-encoded—it is NOT encrypted, meaning anyone in possession of the token can easily decode and read its contents.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because JSON does not support numbers.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because the token expires in 1 second.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Chính sách CORS (Cross-Origin Resource Sharing) là cơ chế bảo mật của trình duyệt ngăn chặn các trang web gửi yêu cầu AJAX tới một domain khác trừ khi server trả về các header cho phép phù hợp."
  },
  {
    "id": 218,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "In `flask_jwt_extended`, which decorator is placed on API routes to ensure requests contain a valid JWT access token?",
    "options": [
      {
        "key": "A",
        "text": "@login_required",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "@jwt_required()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "@token_protect",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@auth_bearer",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tiện ích mở rộng `Flask-CORS` giúp ứng dụng Flask dễ dàng cấu hình và tự động đính kèm các header `Access-Control-Allow-Origin` cho các route API."
  },
  {
    "id": 219,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "How must a client transmit a JWT token to access a `@jwt_required()` protected route?",
    "options": [
      {
        "key": "A",
        "text": "In the URL path: `/api/user/<token>`",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "In the HTTP request header: `Authorization: Bearer <token>`",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "In an email subject line",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "In the DNS host header",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "JSON Web Token (JWT) là chuẩn mở đại diện cho thông tin định danh dưới dạng một chuỗi nhỏ gọn, khép kín và được ký số an toàn."
  },
  {
    "id": 220,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 2,
    "type": "Theory",
    "question": "In a secure JWT architecture, why are Access Tokens paired with Refresh Tokens?",
    "options": [
      {
        "key": "A",
        "text": "Access tokens have a short lifespan (e.g. 15 minutes) to limit exposure if stolen.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Refresh tokens have a longer lifespan and are used exclusively to obtain a fresh access token without requiring the user to re-enter credentials.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Access tokens are stored in the database, while refresh tokens are stored in memory.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Refresh tokens bypass all authorization checks.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Cấu trúc chuẩn của một chuỗi JWT bao gồm 3 phần được phân tách bằng dấu chấm: Header, Payload, và Signature (`header.payload.signature`)."
  },
  {
    "id": 221,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "Which extension is commonly used in Flask to protect API endpoints against denial-of-service (DoS) and brute-force abuse by limiting request frequency?",
    "options": [
      {
        "key": "A",
        "text": "Flask-Limiter",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Flask-WTF",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Flask-Migrate",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Flask-Admin",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Tiện ích mở rộng `flask_jwt_extended` cung cấp các decorator như `@jwt_required()` và các hàm như `create_access_token()` để quản lý xác thực API không trạng thái."
  },
  {
    "id": 222,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why is API versioning (e.g. `/api/v1/posts` and `/api/v2/posts`) considered an essential API design best practice?",
    "options": [
      {
        "key": "A",
        "text": "Because Python code cannot run without version numbers.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "To ensure backward compatibility: existing mobile apps and third-party integrations can continue operating on `v1` while new breaking features are introduced on `v2`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "To force users to purchase software upgrades every month.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "To change the database engine from SQL to NoSQL.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong yêu cầu HTTP gửi lên API, client truyền JWT qua header chuẩn `Authorization: Bearer <token>`."
  },
  {
    "id": 223,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "How do you extract the authenticated identity from an active JWT token inside a `@jwt_required()` protected view function?",
    "options": [
      {
        "key": "A",
        "text": "current_user.get_jwt()",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "get_jwt_identity()",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "request.jwt['sub']",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "session.get('jwt_user')",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Access Token thường có thời gian hết hạn ngắn (15-60 phút) để giảm thiểu rủi ro khi bị lộ, trong khi Refresh Token có thời hạn dài hơn (vài ngày đến vài tuần) dùng để xin cấp mới Access Token."
  },
  {
    "id": 224,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the difference between HTTP `PUT` and HTTP `PATCH` in RESTful APIs?",
    "options": [
      {
        "key": "A",
        "text": "PUT completely replaces the entire resource at the target URI, whereas PATCH performs a partial modification of specific fields.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "PUT deletes the resource, while PATCH creates it.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "PUT only works on images, while PATCH only works on text.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "There is zero difference; they are exact aliases.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Kỹ thuật Rate Limiting (giới hạn tần suất) sử dụng tiện ích `Flask-Limiter` để giới hạn số lượng request tối đa mà một IP hoặc client có thể gửi trong một khoảng thời gian, ngăn chặn tấn công DoS và quét dò dữ liệu."
  },
  {
    "id": 225,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Applied",
    "question": "What HTTP status code should be returned when a client attempts to access a resource with a JWT token that has expired?",
    "options": [
      {
        "key": "A",
        "text": "401 Unauthorized",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "403 Forbidden",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "200 OK",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "500 Internal Server Error",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Khi client vượt quá số lượng request cho phép trong khoảng thời gian quy định, API sẽ trả về mã lỗi chuẩn HTTP 429 Too Many Requests."
  },
  {
    "id": 226,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which standard format is widely used for creating interactive, machine-readable API documentation and client SDKs?",
    "options": [
      {
        "key": "A",
        "text": "OpenAPI / Swagger",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Markdown table format",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "CSV export",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "HTML framesets",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Chuẩn OpenAPI (trước đây là Swagger) cung cấp định dạng chuẩn hóa bằng YAML hoặc JSON để mô tả tài liệu giao diện, thông số và phản hồi của toàn bộ REST API."
  },
  {
    "id": 227,
    "chapterId": "ch9",
    "chapterTitle": "Chapter 9: REST API with Flask",
    "correctCount": 1,
    "type": "Theory",
    "question": "What HTTP status code should a REST API return if a client sends invalid JSON or omits mandatory fields in a POST request?",
    "options": [
      {
        "key": "A",
        "text": "200 OK",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "400 Bad Request",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "404 Not Found",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "500 Internal Server Error",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Việc quản lý phiên bản API (API Versioning) thông qua tiền tố URL (ví dụ: `/api/v1/...` và `/api/v2/...`) đảm bảo rằng các thay đổi mới không làm đứt gãy các ứng dụng client đang chạy phiên bản cũ."
  },
  {
    "id": 228,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "In Python, what is a 'Closure' that enables decorators to function?",
    "options": [
      {
        "key": "A",
        "text": "A database transaction commit.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "An inner function that captures and remembers the variables from its enclosing outer scope even after the outer function has finished executing.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "A network socket disconnect.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "A method that terminates a thread.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Một Closure trong Python xảy ra khi một hàm lồng bên trong giữ lại quyền truy cập vào các biến thuộc phạm vi của hàm cha bao bọc nó ngay cả khi hàm cha đã thực thi xong, tạo nền tảng cho decorator hoạt động."
  },
  {
    "id": 229,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the structural relationship between WSGI Middleware, Flask Request Hooks, and Route Decorators in the request lifecycle?",
    "options": [
      {
        "key": "A",
        "text": "Middleware (outermost layer) -> Hooks (middle layer) -> Decorators (innermost layer wrapping view functions).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Decorators (outermost) -> Middleware (middle) -> Hooks (innermost).",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Hooks wrap the WSGI server, while Middleware only wraps templates.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "They all execute at the exact same time.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Cú pháp decorator `@my_decorator` trước một hàm tương đương với phép gán `my_function = my_decorator(my_function)`."
  },
  {
    "id": 230,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Applied",
    "question": "How is custom WSGI middleware attached to a Flask application object in Python?",
    "options": [
      {
        "key": "A",
        "text": "app.wsgi_app = CustomMiddleware(app.wsgi_app)",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "app.add_middleware(CustomMiddleware)",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "app.middleware = CustomMiddleware",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "app.use(CustomMiddleware)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Hàm hook `@app.before_request` đăng ký một hàm được tự động thực thi trước mỗi khi có bất kỳ request nào được điều phối đến view function."
  },
  {
    "id": 231,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "What does Werkzeug's `ProxyFix` middleware do for a Flask app running behind Nginx?",
    "options": [
      {
        "key": "A",
        "text": "It blocks all proxy servers from connecting.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It inspects `X-Forwarded-For`, `X-Forwarded-Proto`, and `X-Forwarded-Host` headers to ensure `request.remote_addr`, `request.scheme`, and `request.host` reflect the real client rather than the reverse proxy's local IP.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It fixes corrupt proxy passwords.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It compiles Python scripts into C extensions.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Hàm hook `@app.after_request` nhận vào đối tượng `response`, được thực thi sau khi view function chạy xong (nếu không có ngoại lệ chưa bắt), và bắt buộc phải trả về một đối tượng response."
  },
  {
    "id": 232,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the purpose of Werkzeug's `DispatcherMiddleware`?",
    "options": [
      {
        "key": "A",
        "text": "It mounts multiple independent WSGI/Flask applications under different URL prefix paths (e.g. `/` for main app, `/admin` for admin app, `/api` for API app).",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "It sends emails to system administrators.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "It balances database read replicas.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It replaces Jinja2 with React.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Hàm hook `@app.teardown_request` luôn luôn được gọi ở cuối mỗi request ngay cả khi xảy ra ngoại lệ, rất thích hợp để đóng kết nối cơ sở dữ liệu hoặc giải phóng tài nguyên."
  },
  {
    "id": 233,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO statements regarding Flask built-in request hooks are correct?",
    "options": [
      {
        "key": "A",
        "text": "Functions decorated with `@app.before_request` execute before every incoming request.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Functions decorated with `@app.after_request` receive the Response object and MUST return that Response object (or a new one).",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "`@app.teardown_request` only runs if no exception occurred during the request.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`@app.before_request` runs outside the Flask application context.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Một WSGI Middleware là một lớp bao bọc lấy ứng dụng WSGI, đóng vai trò chặn giữa máy chủ web và ứng dụng Flask để xử lý hoặc chuyển đổi request và response trước khi tới ứng dụng."
  },
  {
    "id": 234,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Applied",
    "question": "When should `@app.teardown_request` be used instead of `@app.after_request`?",
    "options": [
      {
        "key": "A",
        "text": "For registering route URL paths.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "For resource cleanup (such as closing database connections or removing temporary files) because it is guaranteed to execute at the end of the request even if an unhandled exception was raised.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "For setting cookies.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "For rendering HTML templates.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Middleware `ProxyFix` của Werkzeug điều chỉnh lại các thuộc tính HTTP headers (như `X-Forwarded-For`, `X-Forwarded-Proto`) khi Flask chạy phía sau một Reverse Proxy như Nginx để ứng dụng nhận diện đúng IP và giao thức của client."
  },
  {
    "id": 235,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Applied",
    "question": "In Flask, how is a custom error handler registered for HTTP 404 Not Found errors?",
    "options": [
      {
        "key": "A",
        "text": "@app.route('/404')",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "@app.errorhandler(404)",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "@app.catch_404",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "@app.exception(404)",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Decorator `@app.errorhandler(404)` cho phép lập trình viên bắt lỗi và trả về một trang HTML tùy chỉnh hoặc phản hồi JSON có cấu trúc khi xảy ra lỗi 404 thay vì trang lỗi mặc định của Flask."
  },
  {
    "id": 236,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Applied",
    "question": "Consider a custom error handler:",
    "options": [
      {
        "key": "A",
        "text": "Because otherwise Flask defaults the returned HTTP response status code to 200 OK.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Because Jinja2 cannot find the template without it.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "To trigger a database rollback.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because Python functions cannot return HTML.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Để kích hoạt một bộ xử lý lỗi từ trong view function, lập trình viên gọi hàm `abort(status_code)`."
  },
  {
    "id": 237,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "Why should internal stack traces NEVER be displayed to end users in production HTTP 500 error responses?",
    "options": [
      {
        "key": "A",
        "text": "Because stack traces contain too many emojis.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Because stack traces leak internal server implementation details (file paths, library versions, database queries, and credentials) that attackers can exploit to craft targeted attacks.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Because browsers refuse to render text longer than 10 lines.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Because stack traces consume too much internet bandwidth.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để tạo một bộ xử lý lỗi cấp toàn cục cho tất cả các Blueprint trong ứng dụng, lập trình viên sử dụng decorator `@app.errorhandler` (hoặc `@blueprint.app_errorhandler`)."
  },
  {
    "id": 238,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the difference between `@bp.errorhandler` and `@bp.app_errorhandler` on a Flask Blueprint?",
    "options": [
      {
        "key": "A",
        "text": "`@bp.errorhandler` only catches errors raised within that specific blueprint's routes, while `@bp.app_errorhandler` registers a global handler affecting the entire application.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "`@bp.errorhandler` is for mobile apps, while `@bp.app_errorhandler` is for web apps.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "They are identical aliases.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "`@bp.app_errorhandler` deletes the blueprint.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Đối tượng ghi nhật ký tích hợp sẵn `app.logger` của Flask (dựa trên module chuẩn `logging` của Python) hỗ trợ các mức độ ghi log: DEBUG, INFO, WARNING, ERROR, và CRITICAL."
  },
  {
    "id": 239,
    "chapterId": "ch10",
    "chapterTitle": "Chapter 10: Decorator, Middleware & Error Handling",
    "correctCount": 1,
    "type": "Theory",
    "question": "What information should be excluded from application logging to protect user privacy and security?",
    "options": [
      {
        "key": "A",
        "text": "HTTP status codes",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "Plaintext passwords, payment/credit card details, and personal authentication tokens.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Request timestamps",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "HTTP method names",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Nguyên tắc bảo mật khi ghi log quy định rằng các dữ liệu nhạy cảm của người dùng như mật khẩu, mã token bí mật và thông tin thẻ thanh toán tuyệt đối không bao giờ được ghi vào log."
  },
  {
    "id": 240,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Applied",
    "question": "How does Flask's built-in Test Client simulate HTTP requests without running a live HTTP server in unit tests?",
    "options": [
      {
        "key": "A",
        "text": "It opens a physical TCP socket on port 5000.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It invokes the application WSGI callable directly in memory, constructing mock WSGI environments and capturing responses without network overhead.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It connects to a remote selenium grid.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It recompiles the Python interpreter.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Test Client tích hợp sẵn của Flask (`app.test_client()`) sử dụng framework kiểm thử của Werkzeug để kích hoạt trực tiếp ứng dụng WSGI trong cùng tiến trình mà không cần mở kết nối mạng hay gán cổng port."
  },
  {
    "id": 241,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a unit test simulating a form submission redirect with `test_client`, what argument instructs the client to automatically follow HTTP 302 redirects?",
    "options": [
      {
        "key": "A",
        "text": "auto_navigate=True",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "follow_redirects=True",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "redirect=True",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "chain=True",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Tham số `follow_redirects=True` trong `client.get('/login', follow_redirects=True)` yêu cầu Test Client tự động gửi tiếp request theo các mã chuyển hướng 301/302 cho tới khi nhận được mã phản hồi cuối cùng."
  },
  {
    "id": 242,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Theory",
    "question": "What does Code Coverage analysis (e.g. using `coverage.py`) measure in a software test suite?",
    "options": [
      {
        "key": "A",
        "text": "The speed of internet downloads.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "The percentage and specific lines of application source code that are executed during test runs, identifying untested routes and logic.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "The monetary cost of web hosting.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "The number of comments in source code.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Để kiểm tra tính hợp lệ của việc xác thực trong unit test mà không gửi qua giao diện web, lập trình viên có thể sử dụng context manager `with client.session_transaction() as sess:` để trực tiếp gán giá trị vào session."
  },
  {
    "id": 243,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO reasons explain why Flask's built-in development server (`flask run`) must NEVER be used to serve live production traffic?",
    "options": [
      {
        "key": "A",
        "text": "It is single-threaded and not designed to handle high-concurrency workloads, causing request queuing and freezing under load.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "It lacks robust process management, crash isolation, timeout protections, and native SSL/TLS support.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It cannot run on Linux operating systems.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It automatically deletes all database records upon shutdown.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Khi viết unit test cho các model cơ sở dữ liệu, việc cấu hình `SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'` cho phép tạo CSDL tạm thời trên RAM, giúp các ca kiểm thử chạy siêu tốc và độc lập hoàn toàn với dữ liệu thực."
  },
  {
    "id": 244,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is Docker's primary benefit in web application deployment?",
    "options": [
      {
        "key": "A",
        "text": "It automatically writes all application unit tests.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It packages the application, runtime, system libraries, and dependencies into portable, isolated containers that run identically across development, testing, and production.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It replaces relational databases with flat files.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It accelerates CPU clock speeds.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Công cụ `coverage.py` đo lường tỷ lệ bao phủ mã nguồn (Code Coverage), cho biết phần trăm các dòng lệnh trong mã nguồn đã được thực thi và kiểm tra trong suốt quá trình chạy test."
  },
  {
    "id": 245,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Theory",
    "question": "In a containerized environment, what tool allows defining and running multi-container Docker applications (such as Flask web app, PostgreSQL database, and Redis) using a single YAML file?",
    "options": [
      {
        "key": "A",
        "text": "Docker Compose",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Virtualenv",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Git",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Pip",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Máy chủ phát triển tích hợp của Flask (`app.run()`) là máy chủ đơn luồng hoặc hạn chế, không được thiết kế cho môi trường production vì thiếu khả năng xử lý tải đồng thời và không đảm bảo an toàn bảo mật."
  },
  {
    "id": 246,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Applied",
    "question": "In a production deployment workflow, how should database schema migrations be executed automatically?",
    "options": [
      {
        "key": "A",
        "text": "By running `flask db upgrade` during the deployment script or release phase before serving user traffic.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "By dropping all tables and running `db.create_all()`.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "By modifying database records manually in production with SQL.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "By restarting the server 10 times.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Trong môi trường Production, ứng dụng Flask cần chạy trên một WSGI Server chuyên dụng như Gunicorn hoặc uWSGI kết hợp với Nginx đóng vai trò Reverse Proxy xử lý SSL/TLS và tệp tĩnh."
  },
  {
    "id": 247,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Theory",
    "question": "Which software tool is widely utilized for real-time error tracking and application crash monitoring in production Flask applications?",
    "options": [
      {
        "key": "A",
        "text": "Sentry (`sentry-sdk[flask]`)",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "SQLite",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Gunicorn",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Jinja2",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Quy tắc kinh nghiệm để tính toán số lượng worker phù hợp cho Gunicorn là `workers = (2 * CPU_CORES) + 1` để tối ưu hóa hiệu suất xử lý I/O và CPU."
  },
  {
    "id": 248,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the N+1 query problem in SQLAlchemy, and how is it resolved?",
    "options": [
      {
        "key": "A",
        "text": "It is when a query returns N+1 columns; resolved by deleting columns.",
        "isCorrect": false
      },
      {
        "key": "B",
        "text": "It occurs when an application executes 1 query for a parent collection and then N separate queries for each related child item; resolved by eager loading with `joinedload()` or `selectinload()`.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "It is a failure of the server to boot; resolved by rebooting.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "It only occurs in SQLite.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "B"
    ],
    "explanation": "Trong Dockerfile dành cho ứng dụng Flask, chỉ thị `EXPOSE 5000` đóng vai trò tài liệu hóa cổng mà container sẽ lắng nghe khi chạy."
  },
  {
    "id": 249,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 1,
    "type": "Theory",
    "question": "What is the difference between Vertical Scaling (Scale Up) and Horizontal Scaling (Scale Out)?",
    "options": [
      {
        "key": "A",
        "text": "Vertical scaling increases hardware capacity (CPU, RAM) on a single server, whereas Horizontal scaling adds more server instances or containers behind a load balancer.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Vertical scaling is for web apps; Horizontal scaling is for desktop apps.",
        "isCorrect": false
      },
      {
        "key": "C",
        "text": "Horizontal scaling requires shutting down the database permanently.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Vertical scaling adds more physical internet cables.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A"
    ],
    "explanation": "Lệnh `docker-compose up` khởi chạy đồng thời tất cả các dịch vụ (như Flask web, PostgreSQL database, Redis cache) được định nghĩa trong tệp cấu hình `docker-compose.yml`."
  },
  {
    "id": 250,
    "chapterId": "ch11",
    "chapterTitle": "Chapter 11: Testing & Deployment",
    "correctCount": 2,
    "type": "Theory",
    "question": "Which TWO of the following are essential production security best practices for Flask deployments?",
    "options": [
      {
        "key": "A",
        "text": "Always set `DEBUG = False` and load `SECRET_KEY` and database credentials strictly from environment variables.",
        "isCorrect": true
      },
      {
        "key": "B",
        "text": "Ensure Nginx or a reverse proxy handles SSL/TLS certificates and static files, while Gunicorn runs isolated multi-process workers.",
        "isCorrect": true
      },
      {
        "key": "C",
        "text": "Enable public directory browsing in `/static/`.",
        "isCorrect": false
      },
      {
        "key": "D",
        "text": "Display full Python tracebacks on error pages so users can report bugs.",
        "isCorrect": false
      }
    ],
    "correctKeys": [
      "A",
      "B"
    ],
    "explanation": "Các nguyên tắc bảo mật trọng yếu khi triển khai Flask trên Production bao gồm: luôn thiết lập `DEBUG = False`, nạp `SECRET_KEY` từ biến môi trường, sử dụng Nginx để xử lý HTTPS và chạy Gunicorn với các worker độc lập."
  }
];
