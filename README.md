# TÌM HIỂU VỀ STATE VÀ PROPS, CÁCH TẠO 1 REACTJS PROJECT
## 1. Tạo Dự Án React

### Các Bước Cài Đặt:

1. **Cài đặt các extension cần thiết**:
   - Cài đặt các extension cho trình duyệt và môi trường phát triển (như ESLint, Prettier).

2. **Cài đặt Node.js và Git SCM**:
   - Tải và cài đặt [Node.js](https://nodejs.org/) (bao gồm npm).
   - Tải và cài đặt [Git](https://git-scm.com/).

3. **Tạo dự án React (ví dụ: Calculator)**:
   ```bash
   npx create-react-app calculator-app
   cd calculator-app
   npm start

## State và Props

### **State**

- **State** là dữ liệu được quản lý bên trong một component và có thể thay đổi theo thời gian. 
  - **Lưu trữ và quản lý dữ liệu động** trong component.
  - **Có thể thay đổi** (mutable).
  - Khi **state thay đổi**, component sẽ **re-render**.
  - **Được quản lý** bởi chính component.

### **Props**

- **Props** là dữ liệu được truyền từ component cha xuống component con.
  - **Truyền dữ liệu và hành vi** từ component cha xuống component con.
  - **Chỉ đọc** (read-only) trong component con.
  - Thay đổi **props từ component cha** sẽ gây **re-render** component con.
  - **Không thể thay đổi trực tiếp** trong component con.

## React Lifecycle

Vòng đời của một component gồm 3 giai đoạn chính: **Mounting**, **Updating**, và **Unmounting**.

### **Mounting**

- **constructor()**: Khởi tạo state và binding methods.
- **render()**: Hiển thị UI.
- **componentDidMount()**: Chạy sau khi component được gắn vào DOM, thường dùng để fetch data hoặc thêm event listeners.

### **Updating**

- **shouldComponentUpdate()**: Quyết định có nên re-render hay không.
- **render()**: Cập nhật UI.
- **componentDidUpdate()**: Chạy sau khi component cập nhật, thường dùng để thực hiện side effects.

### **Unmounting**

- **componentWillUnmount()**: Chạy trước khi component bị xóa khỏi DOM, dùng để cleanup (ví dụ: hủy timers, cancel network requests).

## Chuyển Đổi Từ Class Component Sang Function Component với Hooks

Các phương thức lifecycle trên là của **class component**, nhưng giờ chúng ta sử dụng **function component** với **hooks** để quản lý state.

### **Mounting**

1. **useState**:
   - Thêm state vào functional component, thay thế cho `constructor()`.
   - Có thể khởi tạo trạng thái và truy xuất giá trị hiện tại để cập nhật hàm đó.

2. **useEffect**:
   - Thay thế cho `componentDidMount()`.
   - Chạy sau khi component được render lần đầu tiên.

### **Updating**

1. **useEffect**:
   - Thay thế cho `componentDidUpdate()`.
   - Chạy sau khi component được cập nhật lại.

### **Unmounting**

1. **useEffect**:
   - Thay thế cho `componentWillUnmount()`.
   - Chạy hàm cleanup khi component bị gỡ bỏ khỏi DOM (ví dụ: hủy timers, cancel network requests).
