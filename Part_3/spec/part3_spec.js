describe("flattenAndSortDescendingRecursive", function() {
  it("returns flattened, removes non-numeric values, and sort in descending order", function() {
    const inputArray = [9, "twelve", [3, 6, [4, 6, [7, "one", [8, 2, 10]]]]];
    const resultArray = flattenAndSortDescendingRecursive(inputArray);
    
    expect(resultArray).toEqual([10, 9, 8, 7, 6, 6, 4, 3, 2]);
  });

  it("returns an array with no numeric values", function() {
    const inputArray = ["one", "two", "three"];
    const resultArray = flattenAndSortDescendingRecursive(inputArray);

    expect(resultArray).toEqual([]);
  });

  it("reutns a flat array of numbers", function() {
    const inputArray = [5, 3, 8, 1];
    const resultArray = flattenAndSortDescendingRecursive(inputArray);

    expect(resultArray).toEqual([8, 5, 3, 1]);
  });

  it("returns a deeply nested array with no numeric values", function() {
    const inputArray = [[[[["zero"]]]]];
    const resultArray = flattenAndSortDescendingRecursive(inputArray);

    expect(resultArray).toEqual([]);
  });


  it("returns an empty array", function() {
    const inputArray = [];
    const resultArray = flattenAndSortDescendingRecursive(inputArray);

    expect(resultArray).toEqual([]);
  });

});


describe("flattenAndSortDescendingIterative", function() {
  it("returns flattened array, removes non-numeric values, and sort in descending order", function() {
    const inputArray = [9, "twelve", [3, 6, [4, 6, [7, "one", [8, 2, 10]]]]];
    const resultArray = flattenAndSortDescendingIterative(inputArray);
    
    expect(resultArray).toEqual([10, 9, 8, 7, 6, 6, 4, 3, 2]);
  });

  

  it("return an array with no numeric values", function() {
    const inputArray = ["one", "two", "three"];
    const resultArray = flattenAndSortDescendingIterative(inputArray);

    expect(resultArray).toEqual([]);
  });

  it("reutn a flat array of numbers", function() {
    const inputArray = [5, 3, 8, 1];
    const resultArray = flattenAndSortDescendingIterative(inputArray);

    expect(resultArray).toEqual([8, 5, 3, 1]);
  });

  it("return a deeply nested array with no numeric values", function() {
    const inputArray = [[[[["zero"]]]]];
    const resultArray = flattenAndSortDescendingIterative(inputArray);

    expect(resultArray).toEqual([]);
  });


  it("return an empty array", function() {
    const inputArray = [];
    const resultArray = flattenAndSortDescendingIterative(inputArray);

    expect(resultArray).toEqual([]);
  });
});

