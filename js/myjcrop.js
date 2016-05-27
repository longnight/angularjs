$(document).ready(function () {


$("#file").change(function(){
  picture(this);
});
$("#form").submit(function(e){
  e.preventDefault();
  //Get cropped image base64 string
  var base64 = $("#png").val();
  //Remove base64 string value from #png input to prevent it form being sent
  $("#png").val("");
  //Get formdata
  formData = new FormData($(this)[0]);
  //Convert base64 string to file blob
  var blob = dataURLtoBlob(base64);
  //Add file blob to the form data
  formData.append("cropped_image[]", blob);
  $.ajax({
    url: "http://liyuwiki.com",
    type: "POST",
    data: formData,
    contentType: false,
    cache: false,
    processData: false,
    success: function(data){
          alert("Succes");
        },
    error: function(data){
          alert("Error");
        },
    complete: function(data) {
          //Add base64 string value back to #png input
          $("#png").val(base64);
        }
  });
});
var picture_width;
var picture_height;
var crop_max_width = 300;
var crop_max_height = 300;
function picture(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#jcrop, #preview").html("").append("<img src=\""+e.target.result+"\" alt=\"\" />");
      picture_width = $("#preview img").width();
      picture_height = $("#preview img").height();
      $("#jcrop  img").Jcrop({
        onChange: canvas,
        onSelect: canvas,
        boxWidth: crop_max_width,
        boxHeight: crop_max_height
      });
    }
    reader.readAsDataURL(input.files[0]);
  }
}
function canvas(coords){
  var imageObj = $("#jcrop img")[0];
  var canvas = $("#canvas")[0];
  canvas.width  = coords.w;
  canvas.height = coords.h;
  var context = canvas.getContext("2d");
  context.drawImage(imageObj, coords.x, coords.y, coords.w, coords.h, 0, 0, canvas.width, canvas.height);
  png();
}
function png() {
  var png = $("#canvas")[0].toDataURL('image/png');
  $("#png").val(png);
}
function dataURLtoBlob(dataURL) {
  var BASE64_MARKER = ';base64,';
  if(dataURL.indexOf(BASE64_MARKER) == -1) {
    var parts = dataURL.split(',');
    var contentType = parts[0].split(':')[1];
    var raw = decodeURIComponent(parts[1]);

    return new Blob([raw], {type: contentType});
  }
  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);
  for(var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {type: contentType});
}







})