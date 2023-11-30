/*

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

For example, suppose the Elves finish writing their items' Calories and end up with the following list:

1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
This list represents the Calories of the food carried by five Elves:

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
The second Elf is carrying one food item with 4000 Calories.
The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
The fifth Elf is carrying one food item with 10000 Calories.
In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

*/
// @ts-nocheck
import fs from 'fs'

// fs.readFile( 'input.txt', ( err, data ) => {
//     let elves: number[] = [];
//     let k = 0;

//     for ( let i = 0; i < data.length; i++ ) {
//         // if character is new line 
//         if ( data[i] === 10 ) {
//             k++;
//             break;
//         } else {
//             elves[k][data[i]];

//             // elves[0] = [1,2,3]
//             // elves[1] = [2,3,4]
//         }
//     }

// } )



function findMaxCal( caloriesList: string[] ) {
    let maxCal = 0
    let currentCal = 0

    for ( const calories of caloriesList ) {
        if ( calories === '' ) {
            maxCal = Math.max( maxCal, currentCal )
            currentCal = 0
        } else {
            currentCal += parseInt( calories )
        }
    }
    maxCal = Math.max( maxCal, currentCal )
    return maxCal
}

function readCal(filePath: string): string[] {
    try {
        const data = fs.readFileSync( filePath, 'utf-8' )
        return data.split( '\n' )
    } catch ( err ) {
        console.error( err )
        return []
}}

const filePath = 'input.txt'
const caloriesList = readCal( filePath )
console.log( findMaxCal( caloriesList ) )

/*
--- Part Two ---
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

const top = [];

function findTopThreeCal( caloriesList: string[] ) {
    let elfCal: number[] = [];
    let currentCal = 0

    for (const calories of caloriesList) {
        if (calories === '') {
            if (currentCal > 0) {
                elfCal.push(currentCal)
            }
            currentCal = 0;
        } else {
            currentCal += parseInt(calories)
        }
    }
    if (currentCal > 0) {
        elfCal.push(currentCal)
    }
    elfCal.sort((a: number, b: number) => b - a)
    return elfCal.slice(0, 3).reduce((a: number, b: number) => a + b)
}

console.log(findTopThreeCal(caloriesList))