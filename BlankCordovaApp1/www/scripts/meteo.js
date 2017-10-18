

function getMeteoByCp(CP){

    console.log(CP);
    var webMethod = "http://openweathermap.org/find?";
    var webMethod = webMethod+"q="+CP;

    $.ajax({
        type: 'GET',
        url: webMethod,
        success: function (data) {
            console.log(data);
        }

    });
};