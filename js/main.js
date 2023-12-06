AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#kanji_marker");
        const bun_chan = document.querySelector("#bunchan");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            bun_chan.setAttribute('color', '#FF9500');
        });
}});
