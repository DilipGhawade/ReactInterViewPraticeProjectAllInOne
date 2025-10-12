const user = {
  name: "Test",
  age: 30,
  address: {
    city: "Pune",
    state: "Mh",
  },
};

const user1 = user;
user1.address.city = "Bangalore";

console.log(user.address.city);

// Object.freeze(user)
