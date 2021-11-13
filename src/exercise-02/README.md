## _Calculate the number of diagonals in a polyhedron_

Problem: You must find the number of diagonals in any polygon greater than 4 sides.

Solution 1: Apply this mathematical formula to solve the problem, the formula determines the number of internal diagonals and divides it by 2 to count the diagonals only once, then add the number of sides to the number of diagonals already calculated.
The equation: \frac{\mathrm{n(n-3)}}{\2}+n

```javascript
let diagonals = (sides * (sides - 3) / 2) + sides
```
