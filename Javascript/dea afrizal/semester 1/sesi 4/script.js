function nyalakanLampu(){
    document.getElementById("lampu-off").style.display = "none"
    const on = document.createElement("img")
    on.src = "./assets/img/on.png"
    const cetrekan = document.getElementById("cetrekan-lampu")
    cetrekan.before(on)
    cetrekan.textContent = "LAMPU NYALA!"
    document.getElementById("button-cetrekan").style.display = "none"
}