$(function () {
    $('.header').stickyNavbar();
});

<script>
var vid = document.getElementById("myVideo");
setPlaySpeed();

function getPlaySpeed() { 
  alert(vid.playbackRate);
} 

function setPlaySpeed() { 
  vid.playbackRate = 3;
} 
</script> 