(() => {
  const triggers = [...document.querySelectorAll("[data-menu-trigger]")]
  if (!triggers.length) return

  const close = (trigger) => {
    trigger.setAttribute("aria-expanded", "false")
    trigger.closest(".site-nav__item--has-children")?.classList.remove("is-open")
  }

  const open = (trigger) => {
    trigger.setAttribute("aria-expanded", "true")
    trigger.closest(".site-nav__item--has-children")?.classList.add("is-open")
  }

  for (const trigger of triggers) {
    trigger.addEventListener("click", () => {
      const willOpen = trigger.getAttribute("aria-expanded") !== "true"
      for (const other of triggers) {
        if (other !== trigger) close(other)
      }
      willOpen ? open(trigger) : close(trigger)
    })
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-site-nav]")) return
    for (const trigger of triggers) close(trigger)
  })

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return
    for (const trigger of triggers) close(trigger)
  })
})()
