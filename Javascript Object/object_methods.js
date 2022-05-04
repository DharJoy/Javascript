/** ######################### Object methods #########################
 * * JavaScript methods are actions that can be performed on objects.
 *
 * * JavaScript methods are actions that can be performed on objects.
 */

let person = {
  name: "Karim",
  play: function () {
    console.log(`${this.name} play football`);
  },
};

person.play();

/** ######################### this #########################
 * * In JavaScript, the this keyword refers to an object.
 * --- In an object method, this refers to the object.
 * --- Alone, this refers to the global object.
 * --- In a function, this refers to the global object.
 * --- In a function, in strict mode, this is undefined.
 * --- In an event, this refers to the element that received the event.
 * --- Methods like call(), apply(), and bind() can refer this to any object.
 */

// * adding method
person.printName = function () {
  console.log(this.name);
};
