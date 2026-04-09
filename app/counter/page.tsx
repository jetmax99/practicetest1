// app/counter/page.tsx
"use client"; // สำคัญมาก! ต้องอยู่บรรทัดแรกสุด
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10">
      <h1 className="text-xl">ระบบนับเลข</h1>
      <p className="text-3xl font-bold my-4">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        กดเพื่อเพิ่มเลข
      </button>
    </div>
  );
}
