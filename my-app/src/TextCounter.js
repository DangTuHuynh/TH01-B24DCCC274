import { useState } from "react";

function TextCounter() {
  const [text, setText] = useState("");
  const change = (e) => {setText(e.target.value)};

  return (
    <div style={{padding: 20}}>
      <div >
        <b>Bài 1: bộ đếm ký tự:</b>Tạo component TextCounter. Có một ô input để người dùng nhập văn bản. Dùng state để lưu giá trị nhập vào. Hiển thị số ký tự đã nhập ngay bên dưới. Giới hạn tối đa 100 ký tự, nếu vượt thì hiện cảnh báo màu đỏ.
      </div>
      <input type="text" value={text} onChange={change} placeholder="Nhập văn bản..."/>
      <div>
        <p>Số ký tự:{text.length}</p>
      </div>
      {text.length > 100 && (
        <p style={{color: "red"}}>Bạn đã nhập quá 100 ký tự!</p>
      )}
    </div>
  );
}

export default TextCounter;