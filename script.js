function sendWhatsApp() {
  const fullName = document.getElementById("fullName").value.trim()
  const phoneNumber = document.getElementById("phoneNumber").value.trim()
  const instagramId = document.getElementById("instagramId").value.trim()

  if (!fullName || !phoneNumber || !instagramId) {
    alert("لطفاً همه فیلدها را پر کنید")
    return
  }

  const message = `سلام عرفان جان
من ${fullName} هستم
شماره تماس : ${phoneNumber}
آیدی اینستاگرام : ${instagramId}`

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/989212982911?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}

// Auto-focus and input validation
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phoneNumber")

  phoneInput.addEventListener("input", function (e) {
    // Only allow numbers
    this.value = this.value.replace(/[^0-9]/g, "")
  })

  // Add touch feedback for mobile
  const buttons = document.querySelectorAll(".contact-item, .whatsapp-btn")
  buttons.forEach((button) => {
    button.addEventListener("touchstart", function () {
      this.style.opacity = "0.7"
    })

    button.addEventListener("touchend", function () {
      this.style.opacity = "1"
    })
  })
})
