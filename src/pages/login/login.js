const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  //   console.log(event)
  const formData = new FormData(form)

  const user = {
    email: formData.get("email"),
    pass: formData.get("pass"),
  }
  console.log("user:", user)

  setTimeout(() => {
    window.location.replace("../app/app.html")
  }, 2000)
})
