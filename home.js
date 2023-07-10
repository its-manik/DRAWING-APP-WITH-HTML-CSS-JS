const soundOff = document.querySelector(".sound_off")
const soundOn = document.querySelector(".sound_on")
const dark = document.querySelector(".dark")
const light = document.querySelector(".light")
const soundBtn = document.querySelector(".sound_btn")
const musicBtn = document.querySelector(".music_btn")
const themeBtn = document.querySelector(".theme_btn")
const mainBg = document.querySelector("body")
const musicText = musicBtn.querySelector("span")
const themeText = themeBtn.querySelector("span")
const soundText = soundBtn.querySelector("span")


soundOn.style.display = "none"
// light.style.display = "none"
themeText.textContent = "Dark"
soundText.textContent = "Sound Off"
musicText.textContent = "Music On"

let song = new Audio('./s.mp3');
let typeSound = new Audio('./type.mp3');

let typingSound = true;
let playSong = true;

musicBtn.addEventListener("click", () => {

  if (playSong) {
    musicText.textContent = "Music Off"
    song.play()
    playSong = false
  } else {
    musicText.textContent = "Music On"
    song.load()
    playSong = true
  }
})

soundBtn.addEventListener("click", () => {
  if (soundOff.style.display === "none") {
    soundOn.style.display = "none"
    soundOff.style.display = "block"
    soundText.textContent = "Sound Off"
    typingSound = true
  } else {
    soundOff.style.display = "none"
    soundOn.style.display = "block"
    soundText.textContent = "Sound On"
    typingSound = false
  }
})
const typing = () => {
  if (typingSound) {
    typeSound.play()
    console.log('hello');
  }
}



themeBtn.addEventListener("click", () => {
  if (dark.style.display === "none") {
    storageObject = {
      light: "none",
      dark: "block",
      text: "Dark",
      mode: "dark_on"
    }
    localStorage.setItem("theme", JSON.stringify(storageObject))
    dark.style.display = JSON.parse(localStorage.getItem("theme")).dark
    light.style.display = JSON.parse(localStorage.getItem("theme")).light
    themeText.textContent = JSON.parse(localStorage.getItem("theme")).text
    mainBg.classList.remove("dark_off")
    mainBg.classList.add(JSON.parse(localStorage.getItem("theme")).mode)
  } else {
    storageObject = {
      dark: "none",
      light: "block",
      text: "Light",
      mode: "dark_off"
    }
    localStorage.setItem("theme", JSON.stringify(storageObject))
    light.style.display = JSON.parse(localStorage.getItem("theme")).light
    dark.style.display = JSON.parse(localStorage.getItem("theme")).dark
    themeText.textContent = JSON.parse(localStorage.getItem("theme")).text
    mainBg.classList.remove("dark_on")
    mainBg.classList.add(JSON.parse(localStorage.getItem("theme")).mode)
  }
})





const getStorage = JSON.parse(localStorage.getItem("theme"));

const mode = getStorage.mode
console.log(mode, "hello");
themeText.textContent = JSON.parse(localStorage.getItem("theme")).text
light.style.display = JSON.parse(localStorage.getItem("theme")).light
dark.style.display = JSON.parse(localStorage.getItem("theme")).dark

mainBg.classList.add(mode)




function fj(e) {

  document.getElementById("content").style.fontWeight = "normal";
  document.getElementById("content").style.textAlign = "left";
  document.getElementById("content").style.fontStyle = "normal";
  document.getElementById("content").style.textTransform = "capitalize";
  document.getElementById("content").textContent = " ";

}




function formatDoc(cmd, value = null) {
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd);
  }
}

function addLink() {
  const url = prompt('Insert url');
  formatDoc('createLink', url);
}




const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
  const a = content.querySelectorAll('a');
  a.forEach(item => {
    item.addEventListener('mouseenter', function () {
      content.setAttribute('contenteditable', false);
      item.target = '_blank';
    })
    item.addEventListener('mouseleave', function () {
      content.setAttribute('contenteditable', true);
    })
  })
})



document.getElementById("download").addEventListener("click", () => {
  var element = document.getElementById('content');
  html2pdf(element);

})