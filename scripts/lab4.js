/**
 * 
 * @param {*} num1 First number to add. 
 * @param {*} num2 Second number to add. 
 * @param {*} add Boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        // Changed to let since we're reassigning it
        let result = 0;
        result = num1 + num2;
        return result;
    }
    else {
        // Return false when add is false
        return false;
    }
}

/**
 * 
 * @param {*} prices An array of the original prices.
 * @param {*} discount A number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    // Check if prices array is empty
    if (prices.length === 0) {
        return false;
    }
    
    const discounted = [];
    const length = prices.length;
    
    for(let i = 0; i < length; i++) {
        // Calculate discounted price for current item only
        const discountedPrice = prices[i] * (1 - discount);
        // Add to array
        discounted.push(discountedPrice);
    }
    
    return discounted;
}

module.exports = {sumValues, discountPrices};
