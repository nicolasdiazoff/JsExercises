let start_date = new Date('2021-11-22 03:24:00').getTime();
let final_date = new Date('2021-11-22 03:25:00').getTime();

let diff = final_date - start_date;
let weeks = Math.round(diff / 1000 / 60 / 60 / 24 / 7);
let days = diff / (1000 * 60 * 60 * 24)
let hours = diff / (1000 * 60 * 60)
let minutes = diff / (1000 * 60)
let seconds = diff / (1000)

console.log(`${weeks} weeks ago`);
console.log(`${days} days ago`);
console.log(`${hours} hours ago`);
console.log(`${minutes} minutes ago`);
console.log(`${seconds} seconds ago`);

```javascript
for e in emoji#list()
  call append(line('$'), printf('%s (%s)', emoji#for(e), e))
endfor
```
