function new_user() {
    username = document.getElementById("username").value
    localStorage.setItem("username",username)
    window.location = "Talking_Time_room.html"
}