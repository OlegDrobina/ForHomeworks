export function getBatteryLevel() {
  //TODO: add processing of this method in different browsers. Currently overcomed with try/catch
  try {
    const newBatteryPromise = navigator.getBattery();
    newBatteryPromise.then((result) => {
      const bateryInfoEl = document.getElementById("batery-info");
      const bateryLevel = result.level * 100;
      bateryInfoEl.textContent = `Batery level: ${bateryLevel}%`;
    });
  } catch (exception) {
    console.log(exception);
  }
}
