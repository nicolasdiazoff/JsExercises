## _Calculate time interval_

Problem: You must calculate the amount of time elapsed from a start date to an end date.

Solution 1: Divide the number of milliseconds by the number of days or weeks I need, then round the number.
```javascrikt
let diff = final_date - start_date;
let weeks = Math.round(diff / 1000 / 60 / 60 / 24 / 7);
```

