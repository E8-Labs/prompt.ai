import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
let savvyActive = false
const navAnchor = document.querySelector("nav")
const navFooterAnchor = document.querySelector("[data-headlessui-state]")
const toggleAnchor = navFooterAnchor?.parentNode
const mainAnchor = document.querySelector("main")
const applicationAnchor = mainAnchor?.querySelector('[role="presentation"]')

if (!navAnchor || !applicationAnchor || !toggleAnchor) {
  // TODO: Handle this better...

  throw new Error("Anchor elements cannot be found")
}

const toggleContainer = document.createElement("div")
toggleContainer.style.display = "flex"
toggleContainer.style.justifyContent = "space-between"
toggleContainer.style.gap = "16px"
toggleContainer.style.padding = "8px 12px"

const toggleIcon = document.createElement("img")
toggleIcon.src = "toggle-icon.png"
toggleIcon.alt = "Prompt Savvy Toggle Icon"
toggleIcon.style.height = "24px"
toggleIcon.style.width = "24px"

const toggleText = document.createElement("span")
toggleText.innerText = "Extension Active"
toggleText.style.color = "white"
toggleText.style.fontSize = "14px"

const toggleButton = document.createElement("button")
toggleButton.style.borderRadius = "50px"
toggleButton.style.display = "flex"
toggleButton.style.justifyContent = "flex-start"
toggleButton.style.background = "#343540"
toggleButton.style.height = "20px"
toggleButton.style.width = "36px"
toggleButton.style.minWidth = "36px"
toggleButton.style.padding = "2px"
toggleButton.style.outline = "none"
toggleButton.style.transition = "0.3s ease-in-out"
toggleButton.onclick = toggleSavvy

const toggleButtonSelection = document.createElement("div")
toggleButtonSelection.style.borderRadius = "50%"
toggleButtonSelection.style.background = "white"
toggleButtonSelection.style.height = "14px"
toggleButtonSelection.style.width = "14px"
toggleButtonSelection.style.minWidth = "14px"

toggleButton.appendChild(toggleButtonSelection)
toggleContainer.appendChild(toggleIcon)
toggleContainer.appendChild(toggleText)
toggleContainer.appendChild(toggleButton)
toggleAnchor?.prepend(toggleContainer)

function toggleSavvy() {
  savvyActive = !savvyActive

  if (savvyActive) {
    // Add logo
    const logo = document.createElement("h3")
    logo.id = "savvy-logo"
    logo.style.color = "white"
    logo.style.margin = "40px 0 20px"
    logo.innerText = "Prompt.ai"
    navAnchor?.prepend(logo)

    // Add main application
    const root = document.createElement("div")
    root.id = "savvy-root"

    applicationAnchor!.appendChild(root)

    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )

    // Change toggle button styles
    toggleButton.style.justifyContent = "flex-end"
    toggleButton.style.background = "#00C28C"

    console.log("It's Savvy")

    return
  }

  // Remove logo
  const savvyLogo = document.querySelector("#savvy-logo")
  if (savvyLogo) navAnchor!.removeChild(savvyLogo)

  // Remove main application
  const savvyRoot = document.querySelector("#savvy-root")
  if (savvyRoot) applicationAnchor!.removeChild(savvyRoot)

  // Change toggle button styles
  toggleButton.style.justifyContent = "flex-start"
  toggleButton.style.background = "#343540"

  console.log("Make it Savvy!")
}
