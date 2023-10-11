dataList = {
  1: {
    browserName: "Opera",
    versionNumber: 62,
    greaterVersions: false,
  },
  2: {
    browserName: "IEMobile",
    versionNumber: "11",
    greaterVersions: false,
  },
  3: {
    browserName: "Chrome",
    versionNumber: 116,
    greaterVersions: true,
  },
  4: {
    browserName: "FireFox",
    versionNumber: "71",
    greaterVersions: true,
  },
  5: {
    browserName: "Edge",
    versionNumber: "80",
    greaterVersions: true,
  },
  6: {
    browserName: "Safari",
    versionNumber: "17",
    greaterVersions: false,
  },
};

function getBrowserInfo() {
  let userAgent = navigator.userAgent;
  let browserInfo = {
    browserName: "",
    browserVersion: "",
  };
  //handle versions with decimals returned as string
  function removeDecimals(str) {
    if (str !== "" && str !== null) {
      const indexOfDecimal = str.indexOf(".");
      if (indexOfDecimal !== -1) {
        // remove everything after it decimal point
        return parseInt(str.slice(0, indexOfDecimal));
      } else {
        // No decimal point found, return the original string
        return parseInt(str);
      }
    }
  }

  // Detect Opera
  if (/OPR/.test(userAgent)) {
    browserInfo.browserName = "Opera";
    browserInfo.browserVersion = userAgent.substring(
      userAgent.indexOf("OPR") + 4
    );
  }
  // Detect Chrome
  else if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
    browserInfo.browserName = "Chrome";
    browserInfo.browserVersion = userAgent.substring(
      userAgent.indexOf("Chrome") + 7
    );
  }
  // Detect Edge
  else if (/Edg/.test(userAgent)) {
    browserInfo.browserName = "Edge";
    browserInfo.browserVersion = userAgent.substring(
      userAgent.indexOf("Edg") + 4
    );
  }
  // Detect Firefox
  else if (/Firefox/.test(userAgent)) {
    browserInfo.browserName = "FireFox";
    browserInfo.browserVersion = userAgent.substring(
      userAgent.indexOf("Firefox") + 8
    );
  }
  // Detect Safari
  else if (/Safari/.test(userAgent)) {
    browserInfo.browserName = "Safari";
    browserInfo.browserVersion = userAgent.substring(
      userAgent.indexOf("Version") + 8
    );
  }

  browserInfo.browserVersion = removeDecimals(browserInfo.browserVersion);
  console.log(
    `currently running ${browserInfo.browserName} version: ${browserInfo.browserVersion}`
  );

  return browserInfo;
}

function checkBrowserInfoInDataList() {
  const browserInfo = getBrowserInfo();

  for (const key in dataList) {
    const entry = dataList[key];
    // debugger;
    if (
      entry.browserName === browserInfo.browserName &&
      entry.versionNumber > browserInfo.browserVersion
    ) {
      return `${entry.browserName} found but version is outdated, current  ${browserInfo.browserVersion} needed:  ${entry.versionNumber} `;
    }
    if (
      entry.browserName === browserInfo.browserName &&
      entry.versionNumber <= browserInfo.browserVersion
    ) {
      return `${entry.browserName} found, current  ${browserInfo.browserVersion}  need version:  ${entry.versionNumber} `;
    }
  }
  console.log("909090");
  return null; // Return null if the browser info is not found in dataList
}

const result = checkBrowserInfoInDataList();

if (result !== null) {
  console.log(result);
} else {
  console.log(result + " Browser info not found in dataList.");
}
