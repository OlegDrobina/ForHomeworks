/*
  HW 10.1. Картка користувача
*/

const userInfo = {
  name: "Max",
  age: 19,
  currentAddress: "Sample address 22",
  getUserProfile: function () {
    return `UserName: ${this.name}, UserAge: ${this.age}, UserAddress: ${this.currentAddress}`;
  },
};

/*
  HW 10.2. Отримання парних чисел з масиву
*/

function getEvenNumbersFromArray(inputArray) {
  inputArray.filter((item) => item % 2 === 0);
}

/*
  HW 10.3. Книга контактів
*/

const contactsBook = {
  contactsList: [],
  addNewContact: function () {
    const contactName = prompt("Enter the contact name");
    const contactPhone = prompt("Enter the contact phone number");
    const contactEmail = prompt("Enter the contact email");
    this.contactsList.push({
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    });
  },
  getContactInformation: function () {
    const nameToSearch = prompt("Enter the contact name to search");
    //Makes the search case insensitive
    const searchResult = this.contactsList.filter(
      (item) =>
        item.name.toLocaleLowerCase() === nameToSearch.toLocaleLowerCase()
    );
    if (searchResult.length == 0) {
      console.log("No contacts found");
    } else {
      searchResult.forEach((item) => {
        console.log(
          `Contact name: ${item.name}; Contact email: ${item.email}; Contact phone: ${item.phone}`
        );
      });
    }
  },
};
