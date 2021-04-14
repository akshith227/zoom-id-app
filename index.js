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
    row = `<tr style="background-color:${bg_colours[z]};"><td>${day}</td><td>${y}</td><td><form class="ui form"><input type="text" name="${day}-${y}-id" id="${day}-${y}-id" required placeholder="Meeting ID"></form></td><td><form class="ui form"><input type="text" name="${day}-${y}-pwd" id="${day}-${y}-pwd" required placeholder="Password"></form></td></tr>`
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
ids_passwords_input_names = []
ids_passwords_text = `"meetingids":{"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[]`
monday = []
tuesday = []
wednesday = []
thursday = []
friday = []
saturday = []
sunday = []
function getIDS(){
    period = 1
    days.forEach(day => {
        while (period<=numberOfPeriods){
            id_name = `${day}-${period}-id`
            pwd_name = `${day}-${period}-pwd`
            ids_passwords_input_names.push([id_name, pwd_name])
            period++
        }
        period = 1
    });
    ids_passwords_input_names.forEach(id_password_name => {
        day = id_password_name[0].split("-")[0]
        meeting_id = document.getElementById(id_password_name[0]).value
        pwd = document.getElementById(id_password_name[1]).value
        text = ['x', meeting_id, pwd]
        if (day=='Monday') {
            day = '1'
            monday.push(text)
        } else if (day=='Tuesday') {
            day='2'
            tuesday.push(text)
        } else if (day=='Wednesday') {
            day='3'
            wednesday.push(text)
        } else if (day=='Thursday') {
            day='4'
            thursday.push(text)
        } else if (day=='Friday') {
            day='5'
            friday.push(text)
        } else if (day=='Saturday') {
            day='6'
            saturday.push(text)
        } else if (day=='Sunday') {
            day='7'
            sunday.push(text)
        } 
    });
    convertAndSendToJSON()
}
function convertAndSendToJSON(){
    monday_json = JSON.stringify(monday)
    tuesday_json = JSON.stringify(tuesday)
    wednesday_json = JSON.stringify(wednesday)
    thursday_json = JSON.stringify(thursday)
    friday_json = JSON.stringify(friday)
    saturday_json = JSON.stringify(saturday)
    sunday_json = JSON.stringify(sunday)
    ids_passwords_text = `"meetingids":{"1":${monday_json},"2":${tuesday_json},"3":${wednesday_json},"4":${thursday_json},"5":${friday_json},"6":${saturday_json},"7":${sunday_json}`
}