"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BusinessCard() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [instagramId, setInstagramId] = useState("")

  const handleCall = () => {
    window.location.href = "tel:09212982911"
  }

  const handleWhatsAppChannel = () => {
    window.open("https://whatsapp.com/channel/0029VaJmgrrEQIaone0J3a1s", "_blank")
  }

  const handleTelegram = () => {
    window.open("https://t.me/erfanvocal", "_blank")
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/eneivl", "_blank")
  }

  const handleLocation = () => {
    window.open("https://www.google.com/maps/place/@/data=!4m2!3m1!1s0x3f920685817b3c6b:0xed87611b0b224792", "_blank")
  }

  const handleContactForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfkf0Ub4tCw-ysY375--BPMlNWqOzv29KcNWQFOFIkb-gK_7A/viewform?usp=header",
      "_blank",
    )
  }

  const handleWhatsAppSend = () => {
    const message = `سلام عرفان جان
من ${name} هستم
شماره تماس : ${phone}
آیدی اینستاگرام : ${instagramId}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/989212982911?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-sm mx-auto space-y-6" style={{ aspectRatio: "9/16" }}>
        {/* Profile Section */}
        <div className="text-center space-y-4 pt-8">
          <div className="relative w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full border-3 border-green-400 p-1">
              <Image
                src="/erfan-profile.jpg"
                alt="عرفان عبادی"
                width={120}
                height={120}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-green-400" style={{ fontFamily: "Lalezar, cursive" }}>
            عرفان عبادی
          </h1>
        </div>

        {/* Contact Options */}
        <div className="border-2 border-green-400 rounded-2xl p-6 space-y-5 mx-4">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-3 text-green-400 w-full hover:bg-green-400/10 p-2 rounded-lg transition-colors"
          >
            <Image src="/phone-icon.png" alt="تلفن" width={20} height={20} />
            <span className="text-lg" style={{ fontFamily: "Lalezar, cursive" }}>
              شماره تماس
            </span>
          </button>

          <button
            onClick={handleWhatsAppChannel}
            className="flex items-center justify-center gap-3 text-green-400 w-full hover:bg-green-400/10 p-2 rounded-lg transition-colors"
          >
            <Image src="/whatsapp-icon.png" alt="واتساپ" width={20} height={20} />
            <span className="text-lg" style={{ fontFamily: "Lalezar, cursive" }}>
              واتساپ
            </span>
          </button>

          <button
            onClick={handleTelegram}
            className="flex items-center justify-center gap-3 text-green-400 w-full hover:bg-green-400/10 p-2 rounded-lg transition-colors"
          >
            <Image src="/telegram-icon.png" alt="تلگرام" width={20} height={20} />
            <span className="text-lg" style={{ fontFamily: "Lalezar, cursive" }}>
              تلگرام
            </span>
          </button>

          <button
            onClick={handleInstagram}
            className="flex items-center justify-center gap-3 text-green-400 w-full hover:bg-green-400/10 p-2 rounded-lg transition-colors"
          >
            <Image src="/instagram-icon.png" alt="اینستاگرام" width={20} height={20} />
            <span className="text-lg" style={{ fontFamily: "Lalezar, cursive" }}>
              اینستاگرام
            </span>
          </button>

          <button
            onClick={handleLocation}
            className="flex items-center justify-center gap-3 text-green-400 w-full hover:bg-green-400/10 p-2 rounded-lg transition-colors"
          >
            <Image src="/location-icon.png" alt="موقعیت" width={20} height={20} />
            <span className="text-lg" style={{ fontFamily: "Lalezar, cursive" }}>
              لوکیشن من
            </span>
          </button>

          <button
            onClick={handleContactForm}
            className="flex items-center justify-center gap-3 text-green-400 w-full hover:bg-green-400/10 p-2 rounded-lg transition-colors"
          >
            <Image src="/form-icon.png" alt="فرم" width={20} height={20} />
            <span className="text-lg" style={{ fontFamily: "Lalezar, cursive" }}>
              فرم اطلاعات شما
            </span>
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mx-4">
          <Input
            placeholder="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-2 border-green-400 rounded-2xl h-14 text-green-400 placeholder:text-green-400/70 text-center text-lg focus:border-green-300 focus:ring-green-400"
            style={{ fontFamily: "Lalezar, cursive" }}
            dir="rtl"
          />

          <Input
            placeholder="شماره تماس"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            inputMode="numeric"
            className="bg-transparent border-2 border-green-400 rounded-2xl h-14 text-green-400 placeholder:text-green-400/70 text-center text-lg focus:border-green-300 focus:ring-green-400"
            style={{ fontFamily: "Lalezar, cursive" }}
            dir="rtl"
          />

          <Input
            placeholder="آیدی اینستاگرام"
            value={instagramId}
            onChange={(e) => setInstagramId(e.target.value)}
            inputMode="text"
            className="bg-transparent border-2 border-green-400 rounded-2xl h-14 text-green-400 placeholder:text-green-400/70 text-center text-lg focus:border-green-300 focus:ring-green-400"
            style={{ fontFamily: "Lalezar, cursive" }}
            dir="rtl"
          />
        </div>

        {/* WhatsApp Send Button */}
        <div className="mx-4 pb-8">
          <Button
            onClick={handleWhatsAppSend}
            disabled={!name || !phone || !instagramId}
            className="w-full bg-green-400 hover:bg-green-500 text-black font-bold text-lg h-14 rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "Lalezar, cursive" }}
          >
            <Image src="/whatsapp-button-icon.png" alt="واتساپ" width={24} height={24} />
            <span className="text-black">ارسال در واتساپ</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
