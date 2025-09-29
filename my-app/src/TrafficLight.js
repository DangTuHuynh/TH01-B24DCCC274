import React, { useState, useEffect, useRef} from "react";

const lights = ["red", "green", "yellow"];

function TrafficLight() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
  if (!auto) return;
  const id = setInterval(() => {
    setCurrent(prev => (prev + 1) % lights.length)
  }, 2000)
  return () => clearInterval(id)
}, [auto])

  const chuyenDen = () => {setCurrent((prev) => (prev + 1) % lights.length)}
  const tuDong = () => {setAuto(true)}
  const thuCong = () => {setAuto(false)}

  return (
    <div style={{padding: 20}}>
      <div>
        <b>Bài 2: Đèn giao thông: </b>Tạo component TrafficLight. Có 3 đèn: Đỏ, Vàng, Xanh. Thêm nút Chuyển đèn, mỗi lần bấbm sẽ chuyển lần lượt: Đỏ → Xanh → Vàng → Đỏ … Cho chạy tự động 2 giây đổi 1 đèn bằng setInterval.
      </div>
      <div style={{ display: "flex", flexDirection: "column"}}>
        {lights.map((color, idx) => (
          <div 
            key={color}
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              margin: 5,
              background: current === idx ? color : "rgb(85, 85, 85)",
            }}
          />
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={thuCong} disabled={!auto} style={{ marginRight: 10 }}>Thủ công</button>
        <button onClick={tuDong} disabled={auto} style={{ marginRight: 10 }}>Tự động</button>
        <button onClick={chuyenDen} disabled={auto}>Chuyển đèn</button>
      </div>
    </div>
  );
}

export default TrafficLight;