// const soundOff = document.querySelector(".sound_off")
// const soundOn = document.querySelector(".sound_on")
// const dark = document.querySelector(".dark")
// const light = document.querySelector(".light")
// const soundBtn = document.querySelector(".sound_btn")
// const musicBtn = document.querySelector(".music_btn")
// const themeBtn = document.querySelector(".theme_btn")
// const mainBg = document.querySelector(".main")
// const musicText = musicBtn.querySelector("span")
// const themeText = themeBtn.querySelector("span")
// const soundText = soundBtn.querySelector("span")


// soundOn.style.display = "none"
// light.style.display = "none"
// themeText.textContent = "Dark"
// soundText.textContent = "Sound Off"
// musicText.textContent = "Music On"

// let song = new Audio('./s.mp3');
// let typeSound = new Audio('./type.mp3');

// let typingSound = true;
// let playSong = true;

// musicBtn.addEventListener("click", () => {

//   if (playSong) {
//     musicText.textContent = "Music Off"
//     song.play()
//     playSong = false
//   } else {
//     musicText.textContent = "Music On"
//     song.load()
//     playSong = true
//   }
// })

// soundBtn.addEventListener("click", () => {
//   if (soundOff.style.display === "none") {
//     soundOn.style.display = "none"
//     soundOff.style.display = "block"
//     soundText.textContent = "Sound Off"
//     typingSound = true
//   } else {
//     soundOff.style.display = "none"
//     soundOn.style.display = "block"
//     soundText.textContent = "Sound On"
//     typingSound = false
//   }
// })
// const typing = () => {
//   if (typingSound) {
//     typeSound.play()
//     console.log('hello');
//   }
// }


// const getStorage = JSON.parse(localStorage.getItem("theme"));

// const mode = getStorage.mode
// themeText.textContent = JSON.parse(localStorage.getItem("theme")).text
// light.style.display = JSON.parse(localStorage.getItem("theme")).light
// dark.style.display = JSON.parse(localStorage.getItem("theme")).dark

// mainBg.classList.add(mode)

// themeBtn.addEventListener("click", () => {
//   if (light.style.display === "none") {
//     storageObject = {
//       dark: "none",
//       light: "block",
//       text: "Light",
//       mode: "dark_on"
//     }
//     localStorage.setItem("theme", JSON.stringify(storageObject))
//     dark.style.display = JSON.parse(localStorage.getItem("theme")).dark
//     light.style.display = JSON.parse(localStorage.getItem("theme")).light
//     themeText.textContent = JSON.parse(localStorage.getItem("theme")).text
//     mainBg.classList.remove("dark_off")
//     mainBg.classList.add(JSON.parse(localStorage.getItem("theme")).mode)
//   } else {
//     storageObject = {
//       dark: "block",
//       light: "none",
//       text: "Dark",
//       mode: "dark_off"
//     }
//     localStorage.setItem("theme", JSON.stringify(storageObject))
//     light.style.display = JSON.parse(localStorage.getItem("theme")).light
//     dark.style.display = JSON.parse(localStorage.getItem("theme")).dark
//     themeText.textContent = JSON.parse(localStorage.getItem("theme")).text
//     mainBg.classList.remove("dark_on")
//     mainBg.classList.add(JSON.parse(localStorage.getItem("theme")).mode)
//   }
// })











// function fa(){

//     document.getElementById("textarea1").style.fontWeight="bold";
  
//   }
  // function fb(){
  
  //   document.getElementById("textarea1").style.fontStyle = "italic";
  
  // }
  // function fc(){
  
  //   document.getElementById("textarea1").style.textAlign = "left";
  
  // }
  // function fd(){
  
  //   document.getElementById("textarea1").style.textAlign = "center";
  
  // }
  // function fe(){
  
  //   document.getElementById("textarea1").style.textAlign = "right";
  
  // }
  
//   function fg(){
  
//     document.getElementById("content").style.textTransform = "uppercase";
  
//   }
//   function fh(){
  
//     document.getElementById("content").style.textTransform = "lowercase";
  
//   }
//   function fi(){
  
//     document.getElementById("content").style.textTransform = "capitalize";
  
//   }
  function fj(e){
  
    document.getElementById("content").style.fontWeight = "normal";
    document.getElementById("content").style.textAlign = "left";
    document.getElementById("content").style.fontStyle = "normal";
    document.getElementById("content").style.textTransform = "capitalize";
    document.getElementById("content").textContent=" ";

  
  
  }
  
  function fk() {
    const content = document.getElementById("content").value;
    var save = document.createElement("a");
    save.setAttribute("href", "data:text/plain;charset=umenttttf-8," + encodeURI(content));
    save.setAttribute("download", content.slice(0, 17) + ".txt");
  
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
  }

  
function formatDoc(cmd, value=null) {
	if(value) {
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
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})


// const showCode = document.getElementById('show-code');
// let active = false;

// showCode.addEventListener('click', function () {
// 	showCode.dataset.active = !active;
// 	active = !active
// 	if(active) {
// 		content.textContent = content.innerHTML;
// 		content.setAttribute('contenteditable', false);
// 	} else {
// 		content.innerHTML = content.textContent;
// 		content.setAttribute('contenteditable', true);
// 	}
// })



// const filename = document.getElementById('filename');

// function fileHandle(value) {
// 	if(value === 'new') {
// 		content.innerHTML = '';
// 		filename.value = 'untitled';
// 	} else if(value === 'txt') {
// 		const blob = new Blob([content.innerText])
// 		const url = URL.createObjectURL(blob)
// 		const link = document.createElement('a');
// 		link.href = url;
// 		link.download = `${filename.value}.txt`;
// 		link.click();
// 	} else if(value === 'pdf') {
// 		html2pdf(content).save(filename.value);
// 	}
// }