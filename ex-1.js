let isOver18 = true;
let hasCriminalBlacklist = true;
//Reassign
hasCriminalBlacklist = false;

let isAllow = true;
isAllow = isOver18 && !hasCriminalBlacklist;

// Start coding here

console.log(isAllow);
