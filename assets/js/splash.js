(() => {
  const root = document.documentElement
  const splash = document.querySelector("[data-home-splash]")

  if (!splash || root.dataset.qsgSplash === "seen") return

  let closed = false
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false

  const closeSplash = () => {
    if (closed) return
    closed = true

    root.dataset.qsgSplash = "leaving"
    splash.classList.add("is-leaving")

    const removeAfter = reduceMotion ? 120 : 520
    window.setTimeout(() => {
      splash.remove()
      root.dataset.qsgSplash = "seen"
      try {
        sessionStorage.setItem("qsg:splash-seen", "1")
      } catch (_) {
        // sessionStorage may be unavailable in hardened/private environments.
      }
    }, removeAfter)
  }

  const afterPageLoad = () => window.setTimeout(closeSplash, 1000)

  if (document.readyState === "complete") {
    afterPageLoad()
  } else {
    window.addEventListener("load", afterPageLoad, { once: true })
  }

  // Never let a slow or failed resource trap the visitor behind the splash.
  window.setTimeout(closeSplash, 8000)
})()
