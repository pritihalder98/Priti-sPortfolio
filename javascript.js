window.onscroll = function() {scroll()};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}	

 var preloader = document.getElementById('loader');
      function preLoaderHandler(){
          preloader.style.display = 'none';
      }	

function copyNo(txt) {

  var input = document.body.appendChild(document.createElement("input"));
  input.value = txt;
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
 alert("Phone number copied");
}
