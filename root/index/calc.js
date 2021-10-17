
function onClick1() {
  let f1 = document.getElementsByName("field1");
 let f2 = document.getElementsByName("field2");
 let r = document.getElementById("result2");
 if(parseInt(f1[0].value) * parseInt(f2[0].value)>0){
 var result = parseInt(f1[0].value) * parseInt(f2[0].value);
 }else{
 alert("Error");
 }
 r.innerHTML = result;
 let с = document.getElementById("button1");
 return false;
}
function onClick2() {
  let f1 = document.getElementsByName("field1");
  let f2 = document.getElementsByName("field2");
  let r = document.getElementById("result2");
  r.innerHTML = None;
  f1.innerHTML = None;
  f2.innerHTML = None;
  return false;
}
let radios = document.getElementById("myradios");
let check = document.getElementById("check-1");
radios.style.display = "none";
check.style.display = "none";
let r = document.getElementById("result1");
var result = "5000";
r.innerHTML = result;

window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("myselect");
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("myradios");
    let check = document.getElementById("check-1");
    // Можно использовать getElementsByClassName()
    if (select.value == "1") {
      radios.style.display = "none";
      check.style.display = "none";
      let r = document.getElementById("result1");
      var result = "5000";
      r.innerHTML = result;
    }
    else if (select.value == "2") {
      radios.style.display = "block";
      check.style.display = "none";
      let r = document.getElementById("result1");
      var result = "Выберите тип сайта";
      r.innerHTML = result;
    }
    else if(select.value == "3") {
      radios.style.display = "none";
      check.style.display = "block";
      let r = document.getElementById("result1");
      var result = "100000";
      r.innerHTML = result;
    }
  });

  let r = document.querySelectorAll(".myradios input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      if(r.value == "r1"){
        let r = document.getElementById("result1");
        var result = "10000";
        r.innerHTML = result;
      }else if (r.value == "r2") {
        let r = document.getElementById("result1");
        var result = "30000";
        r.innerHTML = result;
      }else if (r.value == "r3") {
        let r = document.getElementById("result1");
        var result = "50000";
        r.innerHTML = result;
      }
    });
  });

  let c = document.getElementsByName("check-1");
  c[0].addEventListener("change", function(event) {
    if(this.checked){
      let r = document.getElementById("result1");
      var result = "150000";
      r.innerHTML = result;
    }else{
      let r = document.getElementById("result1");
      var result = "100000";
      r.innerHTML = result;
    }
  });

});
