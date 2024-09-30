// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = 4001;
isWeekday = "Friday";
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

hasPromotion = (lastMonthPaidMoreThan4000 > 4000 && 
                (isWeekday == "Monday" || isWeekday == "Tueday" || isWeekday == "Wednesday" || isWeekday == "Thursday" || isWeekday == "Friday") && 
                !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) ||
                isPlatinum;

console.log(hasPromotion);
