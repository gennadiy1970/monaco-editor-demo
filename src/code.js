export const code = {
  js: `const hello = "Hello";
// write your code below



// write your code above
const space = " ";
const word = "World";

console.log(hello + space + word);
// Hello World

const isTrue = true;
const number = 12345.678;
`,
  ts: `type TPosition = 'junior' | 'middle' | 'senior';
// write your code below



// write your code above
const getPosition = (position: TPosition) => {
    returm position.toUpperCase();
}

console.log(getPosition('junior'));
// JUNIOR
`,
  html: `<h1 class="hello">Hello World!<h1>
<!-- write your code below -->



<!--  write your code above -->
<ul>
	<li>item-01</li>
	<li>item-02</li>
	<li>item-03</li>
</ul>
  `,
  css: `h1 {
/* write your code below */



/* write your code above */
    font-family: Tahoma;
    font-size: 40px;
    font-weight: normal;
    margin: 50px;
    color: #a0a0a0;
}

h2 {
    font-family: Tahoma;
    font-size: 30px;
    font-weight: normal;
    margin: 50px;
    color: #fff;
}

p {
    font-family: Tahoma;
    font-size: 17px;
    font-weight: normal;
    margin: 0px 200px;
    color: #fff;
}

.center {
    text-align: center;
}

.blue {
    padding: 50px;
    background-color: #7bd2ff;
}

button {
    font-family: Tahoma;
    font-size: 17px;
    font-weight: normal;
    margin-top: 100px;
    padding: 10px 50px;
    background-color: #727272;
    color: #fff;
    outline: 0;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #898888;
}

button:active {
    background-color: #636161;
}
  `,
  java: `public class Main {
// write your code below



// write your code above
    int x = 5;
    string hello = "Hello World";
    boolean isJavaFun = true;

    public static void main(String[] args) {
      Main myObj = new Main();
      System.out.println(myObj.x);
      System.out.println(myObj.hello);
      System.out.println(isJavaFun);
      // Outputs true
    }
  }
    `,
  python: `def scope_test():
#  write your code below



#  write your code above
      def do_local():
          spam = "local spam"
          num = 12345.678
          bul = True

      def do_nonlocal():
          nonlocal spam
          spam = "nonlocal spam"

      def do_global():
          global spam
          spam = "global spam"

      spam = "test spam"
      do_local()
      print("After local assignment:", spam)
      do_nonlocal()
      print("After nonlocal assignment:", spam)
      do_global()
      print("After global assignment:", spam)

  scope_test()
  print("In global scope:", spam)
    `,
    less: `@primarycolor: #FF7F50;
@color:#800080;

h2{
    color: @primarycolor;
}

h3{
    color: @color;
}
`
};
