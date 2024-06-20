// Lös frågorna nedan:

// #1 Gör om den här arrayen till en ny array: [1,2,3,[4],[5]]. Pluspoäng om du lyckas göra det här på en linje
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(2)

// #2 Gör om den här arrayen till en ny array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.flatmap(x => x.join(' '))

//#3 Gör om den här hälsnings array:en ovan till en sträng istället: 'Hello young grasshopper you are learning fast!'
greeting.flatmap(x => x.join(' ')).join(' ')

//#4 Gör om den inlåsta 3:an så det istället blir: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(Infinity)

//#5 Städa upp den här mejlen så det inte finns några mellanrum i den. Ge svaret på en enda rad (gör en return på en ny sträng):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
userEmail3.trimEnd().trimStart()

//#6 Gör om nedans användares värde (Värdet är deras ID nummer) till en array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const id = Object.fromEntries(users)

//#7 Ändra outputen av arrayen så att användares IDen multipliceras med 2 -- Med en output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
uppdatertadArray = id.map((user) => [user[0], user[1] * 2])

//#8 Ändra outputen av arrayen fråga fråga #7 tillbaka till ett objekt med alla användares IDen Uppdaterade till deras nya version. Output ska vara: { user1: 36546, user2: 185666, user3: 180630 }
uppdatertadArrayFinal = Object.fromEntries(uppdatertadArray)
console.log(uppdatertadArrayFinal)