$('.activator-left').click(function(e){
  e.preventDefault();
  alert(this.href);
  $('.frame-left').attr("src", this.href);

});

$('.activator-right').click(function(e){
  e.preventDefault();
  alert(this.href);
  $('.frame-right').attr("src", this.href);

});

function resizeIframe(iframe) {
  iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

$('.iframe-full-height').on('load', function(){
    this.style.height=this.contentDocument.body.scrollHeight +'px';
});
