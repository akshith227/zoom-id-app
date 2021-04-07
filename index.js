while (true){
    numberOfPeriods = prompt('Enter number of periods per day: ')
    if (!(isNaN(parseInt(numberOfPeriods)))) {
        break;
    }
}
numberOfPeriods = parseInt(numberOfPeriods)
numberOfDays = 0;
while (true){
    numberOfDays = prompt('Enter number of days: ')
    if (!(isNaN(parseInt(numberOfDays)))) {
        break;
    }
}
numberOfDays = parseInt(numberOfDays)
alert('Now enter each day in order in the format Monday/Tuesday/Wednesday/Thursday/Friday, or Wednesday/Thursday/Friday etc')
x = 0
while (true){
    days = prompt("Enter the days in order, separated by a '/'")
    days = days.split("/");
    for (let index = 0; index < days.length; index++) {
        const day = days[index];
        if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday' || day == 'Saturday' || day == 'Sunday'){
            x++;
        }
    }
    if (x == numberOfDays) {
        break;
    } else {
        alert('Please use the correct format and spelling.')
        x = 0;
    }
}
alert('You can now fill in the timetable.')
//number of rows = numberOfDays * numberOfPeriods
//each row should have <td> <td> with filled in value of day and period number, and <td> meeting id with text input box and <td> with password text input
//each input td can have unique id which when submit button clicked, array can collect all values using document.getElementById.value
//data conversion to json be done later.
numberOfRows = numberOfDays * numberOfPeriods
x = 1
y=1
z=0
//x=row
//y=period
//z=day
tableContent = ""
console.log(numberOfPeriods)
while(x<=numberOfRows) {
    day = days[z]
    bg_colours = ["#baffcd","#d3d3d3","#add8e6","#ffbaba","#CDCDCD","#faffba","#afeeee"]
    row = `<tr style="background-color:${bg_colours[z]};"><td>${day}</td><td>${y}</td><td><form class="ui form"><input type="text" name="${day}-${y}-id" required placeholder="Meeting ID"></form></td><td><form class="ui form"><input type="text" name="${day}-${y}-pwd" required placeholder="Password"></form></td></tr>`
    tableContent = tableContent + row
    x++;
    y++;
    if(y>numberOfPeriods) {
        y=1;
        z++;
    }
}
tbody = document.getElementById("main_content")
tbody.innerHTML = tableContent
ids_passwords = []
function getIDS(){
    period = 1
    days.forEach(day => {
        while (period<=numberOfPeriods){
            id_name = `${day}-${period}-id`
            pwd_name = `${day}-${period}-pwd`
            ids_passwords.push([id_name, pwd_name])
            period++
        }
        period = 1
    });
}
ids_passwords.forEach(id_password => {
    
});
//5 days 8 periods
//day 1 = 8 rows, da
