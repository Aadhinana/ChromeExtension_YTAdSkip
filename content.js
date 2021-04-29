console.log("chrome extension running!")

const interval = setInterval(() => {
  console.log("Interval setup");
  closeYTAds();
}, 1000);

const closeYTAds = () => {
  const buttonClasses = ["ytp-ad-skip-button", "ytp-ad-overlay-close-button"];
  const buttonElements = buttonClasses.map(
    (ele) => document.querySelector(`.${ele}`) || null
  );

  buttonElements.forEach((ele) => {
    if (ele) ele.click();
  });
};
