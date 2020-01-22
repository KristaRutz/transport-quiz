$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();

    var userResponses = [];

    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
      userResponses.push(workTransportationMode.toUpperCase());
    });

    console.log(userResponses);
    $("#fun-responses").show();

    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");

    });
    $('#transportation_survey').hide();
  });
});