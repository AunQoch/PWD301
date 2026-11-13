# -*- coding: utf-8 -*-
import docx
import re
import json

doc = docx.Document('python-web-flask-250-qa-with-answers-inline.docx')

chapters_info = [
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
]

chapter_map = {c["docTitle"]: c["id"] for c in chapters_info}

current_chapter = "Chapter 1: Web Application Basics"
questions = []
current_q = None

for p in doc.paragraphs:
    txt = p.text.strip()
    if not txt:
        continue
    if txt.startswith("Chapter "):
        current_chapter = txt
        continue
    
    q_match = re.match(r'^Question\s+(\d+)\s*\[(.*?)\]\s*\((.*?)\):\s*(.*)', txt)
    if q_match:
        if current_q:
            questions.append(current_q)
        q_num = int(q_match.group(1))
        c_count = 2 if '2' in q_match.group(2) else 1
        q_type = q_match.group(3).strip()
        q_text = q_match.group(4).strip()
        current_q = {
            'id': q_num,
            'chapterId': chapter_map.get(current_chapter, 'ch1'),
            'chapterTitle': current_chapter,
            'correctCount': c_count,
            'type': q_type,
            'question': q_text,
            'options': [],
            'correctKeys': [],
            'explanation': ''
        }
        continue
    
    if current_q:
        opt_match = re.match(r'^([A-D])\.\s*(.*)', txt)
        if opt_match:
            is_correct = '[ĐÁP ÁN ĐÚNG]' in txt
            opt_key = opt_match.group(1)
            opt_text = opt_match.group(2).replace('[ĐÁP ÁN ĐÚNG]', '').strip()
            current_q['options'].append({
                'key': opt_key,
                'text': opt_text,
                'isCorrect': is_correct
            })
            if is_correct:
                current_q['correctKeys'].append(opt_key)
        elif txt.startswith('► Giải thích:'):
            current_q['explanation'] = txt.replace('► Giải thích:', '').strip()
        elif current_q['explanation']:
            current_q['explanation'] += ' ' + txt

if current_q:
    questions.append(current_q)

print(f"Total questions loaded: {len(questions)}")

# Write to js/data.js
js_content = f"""// FLASK WEB MASTERY - ASSESSMENT BANK (250 QUESTIONS)
// Auto-generated from python-web-flask-250-qa-with-answers-inline.docx

const CHAPTERS_DATA = {json.dumps(chapters_info, ensure_ascii=False, indent=2)};

const QUESTIONS_DATA = {json.dumps(questions, ensure_ascii=False, indent=2)};
"""

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved js/data.js successfully!")
