function openTab(evt, cityName) {
  let i, tabcontent, tablinks,firstTab;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


  $(window).load(function() {
    setTimeout(function(){
        $(".loader").fadeOut("slow");
        $('.main').css('opacity','1');
    }, 3000);
 
});