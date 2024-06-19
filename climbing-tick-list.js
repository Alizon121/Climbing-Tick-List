// The project in this file will involve making a tick list of climbs that you have done.
// The ticklist will be abel to register onsigh, flashes, and repeats someone has done.
// The ticklist should include the name of route, date done, and rating

let tickList = {
}

// We need to make a function that will add a climb when the tickList is empty

function addToTickList(name, climbedHow) {
    let dateClimbed = setDate("2024", "June", "22")
    let climbedRating = setRating(4);
    let repeaterCount = 0;


    if (Object.keys(tickList).length === 0 && tickList.constructor === Object) {
        // add the name to the tickList
        tickList[name] = {dateClimbed, climbedRating, climbedHow, repeaterCount}
    } 
    else {
        for (let climb in tickList) {
            if (name !== climb) {
                tickList[name] = {dateClimbed, climbedRating, climbedHow, repeaterCount}
            }
            else {
                tickList[name] = repeaterCount++
            }
        }
    }
return tickList

}

console.log(addToTickList("Charro","flash"))


// We need to make a helper function that will set a date for a climb

function setDate(year, month, day) {

   let dateInput=  new Date(`${year}, ${month}, ${day}`)
   return dateInput

}

// console.log(setDate("2024", "June", "22"))


function setRating(rating) {
if (rating >= 0 && rating <= 5) {
    return rating
} else {
    throw new Error("Rating is not valid")
}
}