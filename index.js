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
alert('pog')

