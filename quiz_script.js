window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

console.log("link!!!")

const sec1 = document.getElementById("sec1");
const sectext = document.getElementById("sec1-1");
const sec1_1 = document.getElementById("sec1-2");
const sec1_2 = document.getElementById("sec1-3");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const sec6 = document.getElementById("sec6");
const sec7 = document.getElementById("sec7");
const sec8 = document.getElementById("sec8");
const sec9 = document.getElementById("sec9");
const sec10 = document.getElementById("sec10");

const sec11 = document.getElementById("sec11");
const sec12 = document.getElementById("sec12");
const sec13 = document.getElementById("sec13");
const sec14 = document.getElementById("sec14");
const sec15 = document.getElementById("sec15");
const sec16 = document.getElementById("sec16");

function funcname(){
  var Name = document.getElementById("textf").value;
  console.log(Name);
  sec1.classList.add("hide")
  sec1_1.classList.remove("hide")
}

// คุณมีช่วงเวลาในใจแล้วหรือไม่
function funcyes(){
  sec1_1.classList.add("hide")
  sec1_2.classList.remove("hide")
}
function funcno(){
  sec1_1.classList.add("hide")
  funscene();
}
    

function funscene(){
  sectext.classList.remove("hide")
  setTimeout(function(){scene(); }, 5000);
  
}
function scene(){
  sectext.classList.add("hide")
  sec2.classList.remove("hide")
}

// <คุณนับถือเทพเจ้าหรือไม่ ?------------------------->
function funca1(){
  sec2.classList.add("hide")
  sec3.classList.remove("hide")
}

function funca2(){
  sec2.classList.add("hide")
  sec4.classList.remove("hide")
}

// <คุณสนใจอะไรมากที่สุด ?------------------------->
function funca3(){
  sec3.classList.add("hide")
  sec10.classList.remove("hide")
}

function funca4(){
  sec3.classList.add("hide")
  sec10.classList.remove("hide")

}

// <คุณสนใจในด้านใด ?------------------------->
  function funca5(){
  sec4.classList.add("hide")
  sec5.classList.remove("hide")

}

function funca6(){
  sec4.classList.add("hide")
  sec6.classList.remove("hide")

}

function funca7(){
  sec4.classList.add("hide")
  sec7.classList.remove("hide")
}

// <เลือกสังคมที่อยากรู้------------------------->
function funca8(){
  sec5.classList.add("hide")
  sec11.classList.remove("hide")
}

  function funca9(){
  sec5.classList.add("hide")
  sec16.classList.remove("hide")
}

function funca10(){
  sec5.classList.add("hide")
  sec15.classList.remove("hide")
}

// <ศิลปะที่คุณสนใจ------------------------->

function funca11(){
  sec6.classList.add("hide")
  sec12.classList.remove("hide")
 
}

function funca12(){
  sec6.classList.add("hide")
  sec13.classList.remove("hide")
 
}

function funca13(){
    sec6.classList.add("hide")
    sec14.classList.remove("hide")
    
}

function funca14(){
    sec6.classList.add("hide")
    sec12.classList.remove("hide")
     
}

// <เลือกสถานะเศรษฐกิจที่สนใจ------------------------->

function funca15(){
    sec7.classList.add("hide")
    sec8.classList.remove("hide")
}

function funca16(){
    sec7.classList.add("hide")
    sec9.classList.remove("hide")
}

// <คุณชอบประเทศอะไร------------------------->
function funca17(){
    sec8.classList.add("hide")
    sec14.classList.remove("hide")

 
  
}
function funca18(){
    sec8.classList.add("hide")
    sec16.classList.remove("hide")
}

// <เลือกเหตุการณ์ที่คุณกำลังสนใจ------------------------->
function funca19(){
    sec9.classList.add("hide")
    sec13.classList.remove("hide")
   
  
}
function funca20(){
    sec9.classList.add("hide")
    sec11.classList.remove("hide")
 
  
}
function funca21(){
    sec9.classList.add("hide")
    sec15.classList.remove("hide")
}


function b1(){
  sec3.classList.add("hide")
  sec2.classList.remove("hide")
}
function b2(){
  sec4.classList.add("hide")
  sec2.classList.remove("hide")
}
function b3(){
  sec5.classList.add("hide")
  sec4.classList.remove("hide")
}
function b4(){
  sec6.classList.add("hide")
  sec4.classList.remove("hide")
}
function b5(){
  sec7.classList.add("hide")
  sec4.classList.remove("hide")
}
function b6(){
  sec8.classList.add("hide")
  sec7.classList.remove("hide")
}
function b7(){
  sec9.classList.add("hide")
  sec7.classList.remove("hide")
}
function b8(){
  sec1_2.classList.add("hide")
  sec1_1.classList.remove("hide")
}





function an(){
  location.href = "Ancient.html"
}

function med(){
  location.href = "Medieval.html"
}
function re(){
  location.href = "Renaissance.html"
}
function ba(){
  location.href = "Baroque.html"
}
function roco(){
    location.href = "Rococo.html"
  }
  function ro(){
    location.href = "Romanticism.html"
  }
  function real(){
    location.href = "Realism.html"
  }

function back(){
  location.href = "quiz.html"
}

    
