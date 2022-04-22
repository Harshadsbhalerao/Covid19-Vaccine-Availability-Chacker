$("#reset").click(function(){
    document.querySelector("#ok").reset();
})


$("#submit").click(function(event){
    event.preventDefault();
    pin = $("#pincode").val();
    date =$("#date").val();
    var pt1 = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=";
    var pt2 = "&date=";
    var link = pt1+pin+pt2+date;
    console.log("your search link api : ")
    console.log(link);

    $.get(link, {name:'link'}, function (data, textStatus, jqXHR) {
        // print data in table here

        var len = data.centers.length;
        
        console.log(data.centers)

        // Covishield data printing
        var i = 0;
        for(i = 0 ; i < len ; i++){
            $('#id').append(JSON.stringify('<br>'+data.centers[i].center_id));
            $('#name').append(JSON.stringify('<br>'+data.centers[i].name));
            $('#fee').append(JSON.stringify('<br>'+data.centers[i].fee_type));
            $('#addr').append(JSON.stringify('<br>'+data.centers[i].address));
            $('#vaccine').append(JSON.stringify('<br>'+ data.centers[i].sessions[0].vaccine));
            $('#dose1').append(JSON.stringify('<br>'+data.centers[i].sessions[0].available_capacity_dose1));
            $('#dose2').append(JSON.stringify('<br>'+data.centers[i].sessions[0].available_capacity_dose2));
        }

        // Covaxin data printing 
        var j = 0;
        for(j = 0 ; j < len ; j++){
            $('#id').append(JSON.stringify('<br>'+data.centers[j].center_id));
            $('#name').append(JSON.stringify('<br>'+data.centers[j].name));
            $('#fee').append(JSON.stringify('<br>'+data.centers[j].fee_type));
            $('#addr').append(JSON.stringify('<br>'+data.centers[j].address));
            $('#vaccine').append(JSON.stringify('<br>'+ data.centers[j].sessions[1].vaccine));
            $('#dose1').append(JSON.stringify('<br>'+data.centers[j].sessions[1].available_capacity_dose1));
            $('#dose2').append(JSON.stringify('<br>'+data.centers[j].sessions[1].available_capacity_dose2));
        }

    });
    
})

