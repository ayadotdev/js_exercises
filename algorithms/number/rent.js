function rentalCarCost(d) {
    const everyDayRent = 40;
    let totalPrice = d * everyDayRent;
    const discount1 = 20;
    const discount2 = 50;

    if (d >= 3 && d < 7) {
        totalPrice -= discount1;;
    }
    else if (d >= 7) {
        totalPrice -= discount2;;
    }

    return totalPrice;
}

console.log(rentalCarCost(3))