//Sadə və mürəkkəb ədədlər

// let eded = +prompt("ədəd daxil edin :");
// for (i = 1; i <= eded; i++) {
//   if (eded % i == 0 && i != 1) {
//     if (eded > i) {
//       console.log(`${eded} ədədi mürəkkəb ədəddir`);
//       break;
//     }
//     if (eded == i) {
//       console.log(`${eded} ədədi sadə ədəddir`);
//     }
//   }
// }



//Mükəmməl ədəddirmi?

// let eded = +prompt("ədəd daxil edin :");
// let sub = 0;
// for (i = 1; i < eded; i++) {
//   if (eded % i == 0) sub += i;
// }
// if (eded === sub && eded !=0) {
//   console.log(`${eded} mükəmməl ədəddir`);
// } else {
//   console.log(`${eded} mükəmməl ədəd deyil`);
// }



//Araliqdaki mükəmməl ədədlər

// let bas = +prompt("Birinci ədədi daxil edin :");
// let son = +prompt("Ikinci ədədi daxil edin :");
// let sub = 0;
// console.log("verilən araliqdaki mükəmməl ədədləd");
// for (j = bas; j < son; j++) {
//   sub = 0;
//   for (i = 1; i < j; i++) {
//     if (j % i == 0) sub += i;
//   }
//   if (j === sub) {
//     console.log(sub);
//   }
// }



//Aralıqdaki sadə ədədlər

// let bas = +prompt("Birinci ədədi daxil edin :");
// let son = +prompt("Ikinci ədədi daxil edin :");

// console.log("Verilən aralıqdaki sadə ədədlər:");
// for (j = bas; j < son; j++) {
//   for (i = 1; i <= j; i++) {
//     if (j % i == 0 && i != 1) {
//       if (j > i) {
//         break;
//       }
//       if (j == i) {
//         console.log(j);
//       }
//     }
//   }
// }



//Aralıqdaki sonu 7 ilə bitən ədədlər

// let bas = +prompt("Birinci ədədi daxil edin :");
// let son = +prompt("Ikinci ədədi daxil edin :");

// console.log("Verilən aralıqdaki sonu 7 ilə bitən ədədlər:");
// for (i = bas; i <= son; i++) {
//   if (i.toString().endsWith("7")) {
//     console.log(i);
//   }
// }
