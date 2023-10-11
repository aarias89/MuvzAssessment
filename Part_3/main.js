// Write a function to flatten this array into a 

// single array,

// strip out non numeric values and 

// sort the resulting array in descending order:


// const inputArray = [9, "twelve", [3, 6, [4, 6, [7, "one", [8, 2, 10]]]]];

// recursive
function flattenAndSortDescendingRecursive(arr) {
    const newArray = [];
  
    function flatten(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flatten(arr[i]);
        } else if (typeof arr[i] === 'number') {
          newArray.push(arr[i]);
        }
      }
    }
  
    flatten(arr);
  
    return newArray
      .filter(element => typeof element === 'number')
      .sort((a, b) => b - a);
  }
//   flattenAndSortDescendingRecursive(inputArray)
//   [10, 9, 8, 7, 6, 6, 4, 3, 2]


  
// iterative
function flattenAndSortDescendingIterative(arr) {
    const newArray = [];
    const spread = [...arr];
  
    while (spread.length) {
      const element = spread.pop();
      if (Array.isArray(element)) {
        spread.push(...element);
      } else if (typeof element === 'number') {
        newArray.push(element);
      }
    }
  
    return newArray
      .filter(item => typeof item === 'number')
      .sort((a, b) => b - a);
  }
  
//   flattenAndSortDescendingIterative(inputArray)
//   [10, 9, 8, 7, 6, 6, 4, 3, 2]


  
  
  
  
  
  