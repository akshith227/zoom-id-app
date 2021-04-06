# The Zoom ID app
### This app looks at the time and day and logs into the correct zoom meeting itself, with **no human input required**.

All you must do is input your schedule with the correct syntax into the timetable.json file.

>For example, one period would look like ["Period Name", "Meeting Id", "Password"]

You should also input the time boundaries for each "period" in the timetable.json file as well.

>For example, period 1's time boundaries would look like "1": [x1, y1], where x1 is the starting time and y1 is the ending time.
>
>The format for time is as follows: 7 am is 700, 7:40 am is 740, 9:20 am is 920, 1:30pm is 1330 etc.

Make sure the exe file and timetable.json file are in the same directory, and all that is left to do is assign the exe file to a keyboard shortcut(video link will be available), and pressing this keyboard shortcut at any time will log you in to your zoom meeting immediately. The meeting password will be copied to your clipboard too, so as soon as the "Enter Password" Zoom prompt is visible, just press Ctrl V and the Enter key.

The need for opening your email, finding, copying and pasting the required email id and password is eliminated, and personally, the time taken to log in to a meeting was reduced from about 30 seconds to just 4!