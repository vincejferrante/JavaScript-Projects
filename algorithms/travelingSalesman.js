//A salesman has a number of cities to visit. He wants to calculate the total number of possible paths he could take, 
//visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.


function paths(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * paths(n - 1);
    }
}
