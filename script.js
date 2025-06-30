// Form data object
const formData = {
  name: "",
  phone: "",
  instagram: "",
}

// Get form elements
const nameInput = document.getElementById("name-input")
const phoneInput = document.getElementById("phone-input")
const instagramInput = document.getElementById("instagram-input")

// Add event listeners for input changes
nameInput.addEventListener("input", (e) => {
  formData.name = e.target.value
})

phoneInput.addEventListener("input", (e) => {
  formData.phone = e.target.value
})

instagramInput.addEventListener("input", (e) => {
  formData.instagram = e.target.value
})

// Handle Enter key navigation
nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    phoneInput.focus()
  }
})

phoneInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    instagramInput.focus()
  }
})

instagramInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendWhatsApp()
  }
})

// Send WhatsApp message function
function sendWhatsApp() {
  // Validate form data
  if (!formData.name || !formData.phone || !formData.instagram) {
    alert("لطفاً تمام فیلدها را پر کنید")
    return
  }

  // Create message
  const message = `سلام عرفان جان

من ${formData.name} هستم

شماره تماس : ${formData.phone}

آیدی اینستاگرام : ${formData.instagram}`

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/989212982911?text=${encodeURIComponent(message)}`

  // Open WhatsApp
  window.open(whatsappUrl, "_blank")
}

// Add smooth scrolling and animations
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation
  const businessCard = document.querySelector(".business-card")
  businessCard.style.opacity = "0"
  businessCard.style.transform = "translateY(20px)"

  setTimeout(() => {
    businessCard.style.transition = "all 0.6s ease"
    businessCard.style.opacity = "1"
    businessCard.style.transform = "translateY(0)"
  }, 100)
})

// Add touch feedback for mobile
document.querySelectorAll(".contact-item, .whatsapp-button").forEach((element) => {
  element.addEventListener("touchstart", function () {
    this.style.transform = "scale(0.95)"
  })

  element.addEventListener("touchend", function () {
    this.style.transform = "scale(1)"
  })
})
