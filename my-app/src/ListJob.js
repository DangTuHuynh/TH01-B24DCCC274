import { useState } from "react";

function ListJob() {
  const [jobs, setJobs] = useState([])
  const [input, setInput] = useState("")

  const add = () => {
    if (input.trim() === "") return
    setJobs([...jobs, input])
    setInput("")
  }

  const JobDelete = (index) => {
    setJobs(jobs.filter((_, i) => i !== index))
  }

  return (
    <div style={{padding: 20}}>
        <div>
            <b>Bài 3: Danh sách công việc</b>Có một input để nhập công việc mới và nút Thêm. Danh sách công việc được lưu trong state (mảng). Hiển thị danh sách công việc ra màn hình. Mỗi công việc có nút Xóa.
        </div>
      <input type="text" value={input} onChange={a => setInput(a.target.value)} placeholder="Nhập công việc..."
        style={{ marginRight: 8 }}
      />
      <button onClick={add}>Thêm</button>
      <ul>
        {jobs.map((job, idx) => (
          <li key={idx} style={{ marginTop: 8 }}>
            {job}
            <button onClick={() => JobDelete(idx)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListJob;