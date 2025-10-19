import React from "react";

// PLEATiQ Landing Page Mockup
// Notes:
// - Uses Tailwind utility classes only (no external assets required)
// - Replace placeholder images with real installation photos when ready
// - Buttons use tel: and LINE deep links for quick contact

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </section>
);

const Tag = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
    {children}
  </span>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
  </svg>
);

const LineIcon = () => (
  <svg viewBox="0 0 36 36" className="w-5 h-5" fill="currentColor" aria-hidden>
    <path d="M18 3C9.716 3 3 8.82 3 15.97c0 4.02 2.19 7.6 5.6 9.98.18.12.3.33.3.56v3.7c0 .63.68 1.02 1.23.72l4.3-2.34c.17-.08.35-.12.53-.12.68.06 1.38.09 2.06.09 8.284 0 15-5.82 15-12.97C32 8.82 25.284 3 18 3z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
    <path d="M9 16.2l-3.5-3.6L4 14l5 5 11-11-1.5-1.5z"/>
  </svg>
);

const FeatureCard = ({ title, desc }) => (
  <div className="rounded-2xl p-5 border shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-md transition">
    <div className="flex items-center gap-2 mb-2 text-gray-800">
      <CheckIcon />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const ProductCard = ({ title, badge, desc }) => (
  <div className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
    <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center">
      <div className="w-5/6 h-4/6 rounded-xl bg-white/80 border grid grid-cols-12 overflow-hidden">
        {/* Mock window with pleated screen */}
        <div className="col-span-6 border-r relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 [background-size:200%_100%] animate-pulse"/>
          <div className="absolute inset-y-4 left-3 right-3 grid grid-cols-6 gap-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="bg-slate-300/70 h-full rounded-sm" />
            ))}
          </div>
        </div>
        <div className="col-span-6 relative">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(157,214,223,0.5),rgba(255,255,255,0.7))]" />
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(#000 1px, transparent 1px)", backgroundSize:"12px 12px"}}/>
        </div>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full border">{badge}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{desc}</p>
      <div className="flex gap-2">
        <a href="tel:0818712970" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#FF6B35] text-white text-sm shadow">
          <PhoneIcon /> โทรเลย
        </a>
        <a href="https://line.me/R/ti/p/@SJ2550" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border text-sm">
          <LineIcon /> แอดไลน์
        </a>
      </div>
    </div>
  </div>
);
function PriceCalculator() {
  const PRICES = {
    "บานเดี่ยว": { "สีขาว": 990, "สีดำ": 1190, "สีไม้สักน้ำตาลเข้ม": 1290, "สีไม้สักน้ำตาลอ่อน": 1290, "สีเทาซาฮาร่า": 1290,"สีเทาซาฮาร่าเงิน": 1290,"สีอลูมิเนียม": 1290, "สีน้ำตาล": 1290, "สีน้ำตาลแดง": 1290 },
    "บานคู่": { "สีขาว": 1350, "สีดำ": 1450,"สีไม้สักน้ำตาลเข้ม": 1550, "สีไม้สักน้ำตาลอ่อน": 1550, "สีเทาซาฮาร่า": 1550,"สีเทาซาฮาร่าเงิน": 1550,"สีอลูมิเนียม": 1550, "สีน้ำตาล": 1550, "สีน้ำตาลแดง": 1550 },
    "บานอิสระ": { "สีขาว": 1550, "สีดำ": 1650, "สีไม้สักน้ำตาลเข้ม": 1750, "สีไม้สักน้ำตาลอ่อน": 1750, "สีเทาซาฮาร่า": 1750,"สีเทาซาฮาร่าเงิน": 1750,"สีอลูมิเนียม": 1750, "สีน้ำตาล": 1750, "สีน้ำตาลแดง": 1750 },
  };

  const [width, setWidth] = React.useState(100);
  const [height, setHeight] = React.useState(200);
  const [type, setType] = React.useState("บานเดี่ยว");
  const [color, setColor] = React.useState("สีขาว");

  const sqm = (width * height) / 10000;
  const price = PRICES[type][color] * sqm;
  const fmt = (n) => n.toLocaleString("th-TH", { minimumFractionDigits: 2 });

  return (
    <Section id="calculator" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          คำนวณราคา <span className="text-[#FF6B35]">มุ้งจีบ PLEATiQ</span>
        </h2>
        <p className="text-gray-600 mt-2">
          กรอกขนาด <b>กว้าง × สูง (ซม.)</b> เพื่อดูราคาประมาณ
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input */}
        <div className="border rounded-2xl bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">กว้าง (ซม.)</label>
              <input
                type="number"
                min="1"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">สูง (ซม.)</label>
              <input
                type="number"
                min="1"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">ชนิดบาน</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                {Object.keys(PRICES).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">สี</label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                {Object.keys(PRICES["บานเดี่ยว"]).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="border rounded-2xl bg-white p-6 shadow-sm text-center">
          <h3 className="font-semibold text-lg mb-3">ราคารวมโดยประมาณ</h3>
          <div className="text-4xl font-bold text-[#FF6B35] mb-2">{fmt(price)} บาท</div>
          <p className="text-gray-500 text-sm">
            (พื้นที่ {fmt(sqm)} ตร.ม. × ราคา {PRICES[type][color]} บาท/ตร.ม.)
          </p>
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
            <a href="https://line.me/R/ti/p/@SJ2550" className="inline-flex items-center rounded-xl px-5 py-2 bg-[#FF6B35] text-white shadow">
              ส่งขนาดนี้ให้ร้านประเมินจริง
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F8F8] to-white text-gray-900">
      {/* Top Ribbon */}
      <div className="w-full bg-[#FF6B35] text-white text-center text-xs tracking-wide py-2">PLEATiQ — Smart Pleated Design for Modern Homes</div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">Q</div>
            <div>
              <div className="font-semibold text-lg leading-none">PLEATiQ</div>
              <div className="text-xs text-gray-500">by ส.เจริญการค้า — ศรีธาตุ อุดรธานี</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70">จุดเด่น</a>
            <a href="#products" className="hover:opacity-70">สินค้า</a>
            <a href="#gallery" className="hover:opacity-70">ตัวอย่างงาน</a>
            <a href="#contact" className="hover:opacity-70">ติดต่อ</a>
            <a href="tel:0818712970" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#FF6B35] text-white shadow">
              <PhoneIcon /> 081-871-2970
            </a>
          </div>
        </Section>
      </nav>

      {/* Hero */}
      <Section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Tag>PLEATED SCREEN</Tag>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">มุ้งจีบดีไซน์ชาญฉลาด <span className="text-[#FF6B35]">โปร่ง สวย ดูแพง</span></h1>
            <p className="mt-4 text-gray-600 md:text-lg leading-relaxed">
              ป้องกันยุงและแมลง พร้อมรับลมธรรมชาติอย่างมีสไตล์ ระบบรางเรียบ แข็งแรง ใช้งานลื่นมือ และดูแลง่าย เหมาะกับบ้านสมัยใหม่ คอนโด และโครงการคุณภาพ
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://line.me/R/ti/p/@SJ2550" className="inline-flex items-center gap-2 rounded-xl px-4 py-3 bg-[#FF6B35] text-white shadow text-sm">
                <LineIcon /> ขอใบเสนอราคา
              </a>
              <a href="#gallery" className="inline-flex items-center gap-2 rounded-xl px-4 py-3 border text-sm">ดูตัวอย่างงาน</a>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-2"><CheckIcon/> อลูมิเนียมหนา / ตาข่ายไฟเบอร์เกรดพรีเมียม</div>
              <div className="flex items-center gap-2"><CheckIcon/> บริการวัดหน้างาน ติดตั้ง และรับประกัน</div>
              <div className="flex items-center gap-2"><CheckIcon/> มีอะไหล่และบริการหลังการขาย</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center">
                {/* Mock hero window */}
                <div className="w-5/6 h-5/6 rounded-xl bg-white/80 border grid grid-cols-12 overflow-hidden">
                  <div className="col-span-5 border-r relative">
                    <div className="absolute inset-y-6 left-3 right-3 grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="bg-slate-300/70 rounded-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-7 relative">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(157,214,223,0.55),rgba(255,255,255,0.85))]" />
                    <div className="absolute bottom-3 right-3 text-[10px] px-2 py-1 rounded-full border bg-white/80">PLEATiQ Mockup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">ทำไมต้อง <span className="text-[#FF6B35]">PLEATiQ</span> ?</h2>
          <p className="text-gray-600 mt-2">โฟกัสที่ประสบการณ์ใช้งานจริง ทั้งความสวยงาม ความแข็งแรง และบริการ</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <FeatureCard title="สวย เรียบ หรู" desc="ดีไซน์มินิมอล เข้ากับบ้านสมัยใหม่ ใช้สีและผิวสัมผัสที่ดูแพง" />
          <FeatureCard title="ใช้งานลื่นมือ" desc="รางเนี้ยบ สไลด์นิ่ม บานไม่ตก ไม่ล้มง่าย มีตัวกันกระแทก" />
          <FeatureCard title="วัสดุพรีเมียม" desc="อลูมิเนียมหนา สีอโนไดซ์ ตาข่ายไฟเบอร์กลาสเกรดสูง" />
          <FeatureCard title="เซอร์วิสมืออาชีพ" desc="วัดหน้างาน ออกแบบ ติดตั้ง พร้อมรับประกัน และมีอะไหล่แท้" />
          <FeatureCard title="ดูแลรักษาง่าย" desc="ถอดล้างง่าย ไม่ขึ้นสนิม ระบายอากาศดี ลดฝุ่นและแมลง" />
          <FeatureCard title="รองรับหลายขนาด" desc="ประตู หน้าต่าง ช่องแสง ทางเข้าลานซักล้าง และงานสั่งทำพิเศษ" />
        </div>
      </Section>

      {/* Products */}
      <Section id="products" className="py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">สินค้า</h2>
            <p className="text-gray-600">เลือกแบบที่เหมาะกับพื้นที่และสไตล์บ้านของคุณ</p>
          </div>
          <a href="https://line.me/R/ti/p/@SJ2550" className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 border text-sm"><LineIcon/> ปรึกษาฟรี</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <ProductCard title="PLEATiQ Window" badge="หน้าต่าง" desc="มุ้งจีบสำหรับหน้าต่าง เปิดรับลม โปร่งตา เหมาะกับห้องนั่งเล่นและห้องนอน" />
          <ProductCard title="PLEATiQ Door" badge="ประตู" desc="เหมาะกับประตูออกลานซักล้าง/ระเบียง บานใหญ่ แข็งแรง เดินผ่านสะดวก" />
          <ProductCard title="PLEATiQ Custom" badge="สั่งทำพิเศษ" desc="งานขนาดพิเศษ มุมเฉียง แนวเอียง หรือบานคู่ เราออกแบบและติดตั้งให้" />
        </div>
      </Section>
{/* Calculator */}
<PriceCalculator />

      {/* Gallery (placeholders) */}
      <Section id="gallery" className="py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">ตัวอย่างงานติดตั้ง</h2>
        <p className="text-gray-600 mb-6">นำภาพผลงานจริงมาใส่ในส่วนนี้เพื่อเพิ่มความน่าเชื่อถือ (ตอนนี้เป็นภาพตัวอย่างกราฟิก)</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl border bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center text-xs text-gray-500">ภาพผลงาน {i+1}</div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-14">
        <div className="rounded-3xl border p-8 md:p-10 bg-white shadow-sm grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">พร้อมติดตั้งมุ้งจีบคุณภาพที่บ้านคุณ?</h3>
            <p className="text-gray-600 mt-2">แชทหาราคา นัดวัดหน้างานได้เลย ทีมงานมืออาชีพดูแลครบตั้งแต่ต้นจนจบ</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="tel:0818712970" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-[#FF6B35] text-white shadow"><PhoneIcon/> โทร 081-871-2970</a>
            <a href="https://line.me/R/ti/p/@SJ2550" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border"><LineIcon/> LINE @SJ2550</a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t mt-10">
        <Section id="contact" className="py-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-2">PLEATiQ</div>
              <p className="text-gray-600">Smart Pleated Design for Modern Homes</p>
            </div>
            <div>
              <div className="font-semibold mb-2">ที่อยู่ & การติดต่อ</div>
              <p className="text-gray-600">ร้านส.เจริญการค้า — ต.ศรีธาตุ อ.ศรีธาตุ จ.อุดรธานี</p>
              <p className="text-gray-600">โทร 081-871-2970 • LINE @SJ2550</p>
            </div>
            <div>
              <div className="font-semibold mb-2">บริการ</div>
              <ul className="text-gray-600 space-y-1">
                <li>วัดหน้างาน & ออกแบบ</li>
                <li>ติดตั้งโดยช่างมืออาชีพ</li>
                <li>รับประกัน & บริการหลังการขาย</li>
              </ul>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} PLEATiQ by ส.เจริญการค้า</div>
        </Section>
      </footer>
    </div>
  );
}
