// app/page.tsx
"use client";
import { useState } from "react";

export default function UIPrototype() {
  // 0 คือหน้าแรกที่คุณส่งมาล่าสุด, 1 คือหน้าเมนู
  const [view, setView] = useState(0);

  // ข้อมูลเมนูตามที่คุณต้องการ
  const menus = [
    { title: "Profile", desc: "Background & Bio", category: "Personal" },
    { title: "Portfolio", desc: "My Best Works", category: "Showcase" },
    { title: "Education", desc: "Academic History", category: "Personal" },
    { title: "Hard Skills", desc: "Tech & Languages", category: "Skills" },
    {
      title: "Soft Skills",
      desc: "Logic & Problem Solving",
      category: "Skills",
    },
    { title: "Contact", desc: "Social & Channels", category: "Core" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans tracking-tight overflow-hidden">
      {/* ----------------- หน้าแรก (ใช้ Code ล่าสุดของคุณ) ----------------- */}
      {view === 0 && (
        <div className="min-h-screen flex flex-col items-center justify-center p-10 animate-in fade-in duration-700">
          <div className="text-center mb-10">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
              Test <span className="text-gray-500">Project</span>
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-gray-800"></div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-bold">
                ทดสอบการใช้งาน
              </p>
              <div className="h-[1px] w-16 bg-gray-800"></div>
            </div>
          </div>

          <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest font-medium text-center">
            Next.js Framework & Supabase Integration
          </p>

          {/* ปุ่มที่พอกดแล้วจะไปหน้าเมนู */}
          <button
            onClick={() => setView(1)}
            className="group relative flex items-center gap-8 px-10 py-4 bg-[#111111] border border-gray-800 rounded-full transition-all hover:bg-[#1a1a1a] hover:border-gray-600 hover:scale-105 active:scale-95"
          >
            <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-gray-300 group-hover:text-white">
              Information
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-white transition-all">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-400 group-hover:text-black"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </button>

          <div className="absolute bottom-10 text-[9px] tracking-[0.5em] text-gray-700 uppercase">
            © 2026 test project github
          </div>
        </div>
      )}

      {/* ----------------- หน้าเมนู (UI Preview) ----------------- */}
      {view === 1 && (
        <div className="min-h-screen p-8 md:p-24 animate-in slide-in-from-bottom-10 duration-500">
          <div className="max-w-6xl mx-auto">
            {/* Menu Header */}
            <div className="flex justify-between items-end mb-16 border-l-2 border-gray-800 pl-6">
              <div>
                <h2 className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-2">
                  Navigation
                </h2>
                <h1 className="text-4xl font-black uppercase tracking-tight">
                  Main Menu
                </h1>
              </div>
              <button
                onClick={() => setView(0)}
                className="text-[10px] tracking-[0.4em] text-gray-600 hover:text-white uppercase pb-1 border-b border-transparent hover:border-white transition-all"
              >
                [ Close Menu ]
              </button>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {menus.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-[#0c0c0c] border border-gray-900 rounded-2xl hover:bg-[#141414] hover:border-gray-700 transition-all cursor-default"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[8px] tracking-[0.3em] text-gray-700 font-bold uppercase py-1 px-2 border border-gray-900 rounded">
                      {item.category}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-gray-800 group-hover:bg-blue-500"></div>
                  </div>

                  <h3 className="text-xl font-bold uppercase mb-1 tracking-tight group-hover:text-white text-gray-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[9px] tracking-[0.2em] text-gray-600 uppercase">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-8 border-t border-gray-900 flex flex-wrap gap-8 opacity-20 text-[8px] tracking-[0.4em] uppercase">
              <div>Status: Stable</div>
              <div>User: Admin</div>
              <div>Loc: Prachinburi, TH</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
