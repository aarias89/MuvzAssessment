# Muvz Assessment

# Coding Challenges

## Part 1

Given this page: [Our Team | Traffic Safety Store](https://www.trafficsafetystore.com/about/team). Rewrite the image grid to use flexbox. It currently uses bootstrap 3 styles
The max number of images per row should be 4.
The grid should be responsive

## Part 2

Write a Javascript function that given a list of browser versions, would determine whether the current browser matches a predefined list of browsers and versions. An example if that list is below

```
dataList={
  1: {
    browserName: 'Opera',
    versionNumber: 62,
    greaterVersions: false,
  },
  2: {
    browserName: 'IEMobile',
    versionNumber: '11',
    greaterVersions: false,
  },
  3: {
    browserName: 'Chrome',
    versionNumber: 116,
    greaterVersions: true,
  },
  4: {
    browserName: 'FireFox',
    versionNumber: '71',
    greaterVersions: true,
  },
  5: {
    browserName: 'Edge',
    versionNumber: '80',
    greaterVersions: true,
  },
};
```

## Part 3

Write a function to flatten this array into a single array,strip out non numeric values and sort the resulting array in descending order:
[9,"twelve",[3,6, [4,6, [7,"one", [8, 2, 10]]]]]

For this part i added a test suite , you need to navigate to the part_3 directory,
npm install
npx jasmine-browser-runner serve

UI for tests can be seen in http://localhost:8888
