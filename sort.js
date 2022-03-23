const cards = [3, 4, 2, "queen", "jack", 7, 5, 3, "king", "queen", 3];

// Function we will pass as an argument to .sort()
// 
function compareTwoCards(a, b) {
    
    // We will use this function within our comparison function to map all the strings into numbers that can be sorted
    function mapArrayElementsToNumbers(arrayElement) {
        switch (arrayElement) {
            // If the element is jack, queen or king, we map it to a number so it can be sorted with the other numbers
            case "jack": return 11;
            case "queen": return 12;
            case "king": return 13;
            // If the element is a number, we just leave it as it is
            default: return arrayElement;
        }
    }

    const newA = mapArrayElementsToNumbers(a);
    const newB = mapArrayElementsToNumbers(b);

    // If the mapped first element is lower than the mapped second element, we swap them by returning a positive number from the sort function
    return newA - newB;
}

// the .sort() method by default will sort an array in alphabetical order, with numbers coming before letters.
// But you can also provide a comparison function as an argument to .sort()
// The function will iterate through the array, comparing each value to the next value, and swapping them if the function returns a positive value.
cards.sort(compareTwoCards);

// This should now log the sorted array
console.log(cards);
