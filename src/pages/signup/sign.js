const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  //   console.log(event)
  const formData = new FormData(form)

  const user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    pass: formData.get("pass"),
  }
  console.log("user:", user)

  setTimeout(() => {
    window.location.replace("../login/login.html")
  }, 1000)
})
