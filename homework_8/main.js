/*
  HW 8.1. Сходи
*/

let ladder = {
  currentStep: 0,
  up: function () {
    this.currentStep += 1;
    return this;
  },
  down: function () {
    this.currentStep -= 1;
    return this;
  },
  showStep: function () {
    //console.log here if we want to continue calling other functions after the showStep function is called
    return this.currentStep;
  },
};
