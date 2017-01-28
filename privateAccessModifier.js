function Container(param) {
    this.member = param;
    var secret = 3;
    var that = this;
}


var cont = new Container('abc')
console.log(cont.member);


/*So private is something that is specific to the function?

  Let's see, private members are param , secret and that

 They are attached to the object, but they are not accessible to the outside, nor are they accessible to the object's own public methods

 They are accessible to only private methods. Ta da !!

 Private methods cannot be called by public methods. To make private methods useful, we need to introduce a privileged method.

 You need to see this http://www.crockford.com/javascript/private.html

 */


function Animal(name, age) {
    this.name = name;
    this.age = age;

    let owner = "Default Owner";

    this.modifyOwnerifAllowed = function(ownerName) {

      ownerName.length == 5 ? owner = ownerName : console.log('Not Permitted');

    }

    this.getOwner = function(){

      return owner;
    }

}

let cheetah = new Animal("Jinga " , 5);
console.log(cheetah.getOwner());
cheetah.modifyOwnerifAllowed("Hasan");
console.log(cheetah.getOwner());

let dog = new Animal("Zeeza", 3);
console.log(dog.getOwner());
dog.modifyOwnerifAllowed("GOD");
