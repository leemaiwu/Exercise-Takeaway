//// Recursion ////

function canWin(n) {
    if (n < 2) {
        return false
    }
    let stoneTakes = [2, 3, 5]

    for (let i = 0; i < stoneTakes.length; i++) {
        let take = stoneTakes[i]

        if (n - take >= 0) {
            let recursiveCallResult = canWin(n - take)
            if (recursiveCallResult === false) {
                return true
            }
        }
    }
    return false
}

console.log(canWin(2))


//// Not Recursion ////

function canWin2(n) {
    if (n % 7 < 2) {
        return flase
    } else {
        return true
    }
}

console.log(canWin2(2))