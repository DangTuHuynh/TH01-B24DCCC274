import {useState} from "react";

function RegisterForm() {
  const [form, setForm] = useState({name: "", email: "", password: ""})
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      alert("nhập đầy đủ thông tin!")
      return
    }
    setSubmitted(form)
  }

  return (
    <div style={{padding: 20}}>
      <div>
        <b>Bài 5: form đăng ký:</b>Tạo form gồm: Tên, Email, Mật khẩu. Kiểm tra nếu để trống trường nào thì báo lỗi. Khi bấm Đăng ký, hiển thị thông tin vừa nhập bên dưới.
      </div>
      <form onSubmit={handleSubmit}>
        <div>
            <input
              name="name"
              placeholder="Nhập tên"
              value={form.name}
              onChange={handleChange}
            />
            <br/>
            <input
              name="email"
              placeholder="Nhập email"
              value={form.email}
              onChange={handleChange}
            />
            <br/>
            <input
              name="password"
              placeholder="Nhập password"
              value={form.password}
              onChange={handleChange}
            />
        </div>
        <button type="submit" style={{marginTop: 10}}>Đăng ký</button>
      </form>

      {submitted && (
        <div style={{marginTop: 20}}>
          <h4>Thông tin đã đăng ký:</h4>
          <div>Tên: {submitted.name}</div>
          <div>Email: {submitted.email}</div>
          <div>Mật khẩu: {submitted.password}</div>
        </div>
      )}
    </div>
  )
}

export default RegisterForm;