import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F8F8] to-white text-gray-900">
      <header className="bg-[#FF6B35] text-white text-center py-3 font-semibold">
        PLEATiQ — Smart Pleated Design for Modern Homes
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#FF6B35]">ม่านจีบกันยุง PLEATiQ</h1>
        <p className="text-lg text-gray-700 mb-8">
          ป้องกันยุงและแมลง พร้อมดีไซน์เรียบหรูทันสมัย เหมาะกับบ้านสมัยใหม่และโครงการคุณภาพ
        </p>

        <div className="flex justify-center gap-4">
          <a href="tel:0818712970" className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg shadow">
            โทร 081-871-2970
          </a>
          <a href="https://line.me/R/ti/p/@SJ2550" className="border px-6 py-3 rounded-lg">
            แอดไลน์ @SJ2550
          </a>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">จุดเด่นของ PLEATiQ</h2>
          <ul className="text-gray-700 space-y-2 text-left max-w-md mx-auto">
            <li>✅ ดีไซน์พรีเมียม เข้ากับบ้านสมัยใหม่</li>
            <li>✅ ใช้งานลื่นมือ มาโน้มไม่ติดขัด</li>
            <li>✅ อลูมิเนียมหนา สีทน ไม่ซีดง่าย</li>
            <li>✅ ติดตั้งง่าย ไม่ซับซ้อน</li>
          </ul>
        </div>
      </main>

      <footer className="border-t py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} PLEATiQ by ส.เจริญการค้า – ศรีธาตุ อุดรธานี
      </footer>
    </div>
  )
}
