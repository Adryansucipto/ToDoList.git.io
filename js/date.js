function startTime() {
    const today = new Date();//inisialisasi
    //time
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    //date
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    month+=1;
    //weekday
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var hari = weekday[today.getDay()];

    //cetak element yang ditentukan
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const hari2 = document.getElementById('hari');

    time.innerHTML =  h + ":" + m + ":" + s+" ";
    date.innerHTML =  month+'/'+day+'/'+year;
    hari2.innerHTML = hari;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}

