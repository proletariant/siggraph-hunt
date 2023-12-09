AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#kanji_marker");
        const bun_chan = document.querySelector("#bunchan");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            bun_chan.setAttribute('color', '#FF9500');
        });
}});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.top = "60%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.top = "100%";
  document.body.style.backgroundColor = "white";
}
