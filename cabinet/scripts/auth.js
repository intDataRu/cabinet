// Получем сохраненные данные
let userData = JSON.parse(localStorage.getItem("userData"))

if (userData === null) {
    location.href = "/login/"
}

// Если нету логина или пароля, перекидывает на вход
if (!userData.hasOwnProperty("login") || !userData.hasOwnProperty("password")) {
    localStorage.removeItem("userData")
    location.href = "/login/"
}

if (userData?.is_admin) {
    location.href = "/admin/"
}