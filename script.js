// ====================================
// CONTADOR DE TEMPO DO AMOR
// ====================================

// DATA EDITÁVEL: Altere para a data correta (30 de abril do ano desejado)
// Formato: Ano, Mês (0-11, onde 0 = janeiro, 3 = abril), Dia, Hora, Minuto, Segundo
const dataInicioAmor = new Date(2025, 3, 30, 0, 0, 0) // 30 de abril de 2024

function atualizarContador() {
  const agora = new Date()
  const diferenca = agora - dataInicioAmor

  // Calcular dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

  // Atualizar os elementos na página
  document.getElementById("days").textContent = dias
  document.getElementById("hours").textContent = horas
  document.getElementById("minutes").textContent = minutos
  document.getElementById("seconds").textContent = segundos
}

// Atualizar o contador imediatamente e depois a cada segundo
atualizarContador()
setInterval(atualizarContador, 1000)

// ====================================
// NAVEGAÇÃO SUAVE
// ====================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ====================================
// INTERATIVIDADE - REVELAR MENSAGENS
// ====================================

const revealButton = document.getElementById("revealBtn")
const messages = document.querySelectorAll(".message, .final-message")

let mensagensReveladas = false

revealButton.addEventListener("click", function () {
  if (!mensagensReveladas) {
    mensagensReveladas = true

    // Esconder o botão com animação
    this.style.opacity = "0"
    this.style.transform = "scale(0.8)"

    setTimeout(() => {
      this.style.display = "none"
    }, 300)

    // Revelar cada mensagem progressivamente
    messages.forEach((message) => {
      const delay = Number.parseInt(message.getAttribute("data-delay")) || 0

      setTimeout(() => {
        message.classList.remove("hidden")
      }, delay)
    })
  }
})

// ====================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ====================================

// Observador de interseção para animar elementos quando aparecem na tela
const observador = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  {
    threshold: 0.1,
  },
)

// Aplicar animação aos itens da timeline e galeria
document.querySelectorAll(".timeline-item, .gallery-item").forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(30px)"
  item.style.transition = "all 0.8s ease"
  observador.observe(item)
})

// ====================================
// EFEITO PARALLAX SUAVE NOS CORAÇÕES
// ====================================

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hearts = document.querySelectorAll(".heart")

  hearts.forEach((heart, index) => {
    const speed = 0.5 + index * 0.1
    heart.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
  })
})

console.log("💕 Site feito com amor por Thiago! 💕")
