// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true; // ผู้ซื้อสินค้ามียอดซื้อทั้งหมดในเดือนที่แล้วมากกว่า 4000 บาท
let isWeekday = true; // ซื้อสินค้าเป็นวันจันทร์ ถึง วันศุกร์
let hasBoughtProductFromITCategory = true; // ผู้ซื้อสินค้าเคยซื้อสินค้าในหมวดหมู่ IT
let hasAttendedDiscountEvent = true; //ผู้ซื้อสินค้าเคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อนหน้านี้
let isPlatinum = true; // ผู้ซื้อสินค้าเป็นสมาชิกในระดับ Platinum
// John
lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

let hasPromotion = ((lastMonthPaidMoreThan4000 && isWeekday) && (!hasBoughtProductFromITCategory && !hasAttendedDiscountEvent)) || isPlatinum //ผู้ซื้อสินค้ามีสิทธิได้รับโปรโมชั่นส่วนลด

console.log(hasPromotion);


// //สมมุติว่าเราเขียนโปรแกรมในการตรวจสอบสิทธิโปรโมชั่นส่วนลดของผู้ซื้อสินค้า โดยผู้ซื้อสินค้าจะได้รับโปรโมชั่นถ้าข้อใดข้อหนึ่งต่อไปนี้เป็นจริง (ไม่จำเป็นต้องเป็นจริงทั้งสองข้อ)

// กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์ และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
// กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum
// ผู้ซื้อสินค้าคนหนึ่งชื่อว่า John มีคุณสมบัติดังนี้

// มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
// ไปซื้อของวันศุกร์
// ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
// เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
// เป็น Member ระดับ Gold
// ให้ Reassign ค่าของ lastMonthPaidMoreThan4000, isWeekday, hasBoughtProductFromITCategory, hasAttendedDiscountEvent และ isPlatinum ตามของคุณสมบัติของ John

// ให้ Reassign ค่าของ hasPromotion เป็น Expression ของ Variable อื่นๆ ตามเงื่อนไขข้างต้น หลังจากนั้นลอง console.log ค่าของ hasPromotion เพื่อดูว่า John มีสิทธิได้รับโปรโมชั่นส่วนลดหรือไม่