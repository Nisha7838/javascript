const date = new Date();
console.log(date.toString()); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
console.log(date.toDateString()); // Tue May 12 2020
console.log(date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
console.log(date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

console.log(date.toISOString(); // 2020-05-12T23:50:21.817Z
console.log(date.toJSON(); // 2020-05-12T23:50:21.817Z

console.log(date.toUTCString()); // Tue, 12 May 2020 23:50:21 GMT

console.log(date.toLocaleString()); // 5/12/2020, 6:50:21 PM
console.log(date.toLocaleDateString()); // 5/12/2020
console.log(date.toLocaleTimeString()); // 6:50:21 PM
