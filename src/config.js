$(document).ready(function () {
    var key = "151071AIVeZsMDyt959096f11";
    $("#sendsms").click(function () {
        var numbers = $("#number").val();
        var message = $("#message").val();
        var sender = $("#sender").val();
        var data = "authkey=" + key + "&mobiles=" + numbers + "&message=" + message + "&sender=" + sender + "&route=4&country=91&response=json";
        /*$.ajax(
         {
         url: "http://my.msgwow.com/api/sendhttp.php",
         type: 'GET',
         data:data,
         crossDomain: true,
         dataType: 'jsonp',
         success: function(result){
         alert(result);
         }
         }*/
        $.ajax(
            {
                url: "http://capp-api.okhlee.com/api/sms/send?" + data,
                type: 'GET',
                success: function (result) {
                    alert(result.msg);
                }
            }
        );
    });
});