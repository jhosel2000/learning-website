

// Function to load the learning materials dynamically
function learningMaterials(topic) {
    let content = '';
  
    switch (topic) {
      case 'numbers':
        content = `
        <h2 class="text-2xl font-bold text-green-600 mb-4">Learning Numbers 📚</h2>
<p class="text-lg text-gray-700">Numbers are the foundation of math! Here are some important numbers:</p>
<ul class="list-disc ml-6 text-lg text-gray-700">
  <li><strong>One (1):</strong> The first number. It represents a single unit. You can count one apple, one toy, or one person.</li>
  <li><strong>Two (2):</strong> The second number. It represents a pair. Two eyes, two hands, two shoes!</li>
  <li><strong>Three (3):</strong> A group of three items. Three apples, three balloons, three friends!</li>
  <li><strong>Four (4):</strong> A group of four items. Four cars, four feet, four seasons.</li>
  <li><strong>Five (5):</strong> The number that comes after four. Five fingers on each hand, five flowers, five toys!</li>
  <li><strong>Six (6):</strong> The number that comes after five. Six eggs, six pets, six toys!</li>
  <li><strong>Seven (7):</strong> The number that comes after six. Seven days in a week, seven colors in a rainbow!</li>
  <li><strong>Eight (8):</strong> The number that comes after seven. Eight legs on an octopus, eight slices of pizza!</li>
  <li><strong>Nine (9):</strong> The number that comes after eight. Nine planets (including Pluto) in our solar system!</li>
  <li><strong>Ten (10):</strong> A number that represents a complete set of ten fingers. Ten apples, ten toys!</li>
  <li><strong>Eleven (11):</strong> The number that comes after ten. Eleven players on a football team!</li>
  <li><strong>Twelve (12):</strong> The number that comes after eleven. There are twelve months in a year!</li>
  <li><strong>Thirteen (13):</strong> The number that comes after twelve. Thirteen stripes on the American flag!</li>
  <li><strong>Fourteen (14):</strong> The number that comes after thirteen. Fourteen is two sevens!</li>
  <li><strong>Fifteen (15):</strong> The number that comes after fourteen. You can count to fifteen on your fingers!</li>
  <li><strong>Sixteen (16):</strong> The number that comes after fifteen. Sixteen candles on a birthday cake!</li>
  <li><strong>Seventeen (17):</strong> The number that comes after sixteen. Seventeen is a prime number!</li>
  <li><strong>Eighteen (18):</strong> The number that comes after seventeen. Eighteen is the legal age to vote in some countries!</li>
  <li><strong>Nineteen (19):</strong> The number that comes after eighteen. Nineteen is the last of the teens!</li>
  <li><strong>Twenty (20):</strong> The number that comes after nineteen. Twenty is a round number, a perfect score!</li>
  <li><strong>Twenty-One (21):</strong> The number that comes after twenty. Twenty-one is the age you can legally drink in some countries!</li>
  <li><strong>Twenty-Two (22):</strong> The number that comes after twenty-one. The number of letters in the alphabet!</li>
  <li><strong>Twenty-Three (23):</strong> The number that comes after twenty-two. Twenty-three chromosomes from each parent make a baby!</li>
  <li><strong>Twenty-Four (24):</strong> The number that comes after twenty-three. There are twenty-four hours in a day!</li>
  <li><strong>Twenty-Five (25):</strong> The number that comes after twenty-four. There are twenty-five cents in a quarter!</li>
  <li><strong>Twenty-Six (26):</strong> The number that comes after twenty-five. The number of letters in the alphabet!</li>
  <li><strong>Twenty-Seven (27):</strong> The number that comes after twenty-six. Twenty-seven is a perfect cube: 3 x 3 x 3!</li>
  <li><strong>Twenty-Eight (28):</strong> The number that comes after twenty-seven. Twenty-eight is the number of days in February in a leap year!</li>
  <li><strong>Twenty-Nine (29):</strong> The number that comes after twenty-eight. There are twenty-nine days in February in a leap year!</li>
  <li><strong>Thirty (30):</strong> The number that comes after twenty-nine. There are thirty days in the month of September!</li>
  <li><strong>Thirty-One (31):</strong> The number that comes after thirty. There are thirty-one days in some months like January, March, etc.</li>
  <li><strong>Thirty-Two (32):</strong> The number that comes after thirty-one. Thirty-two is the freezing point of water in Fahrenheit!</li>
  <li><strong>Thirty-Three (33):</strong> The number that comes after thirty-two. Thirty-three is often a lucky number for some!</li>
  <li><strong>Thirty-Four (34):</strong> The number that comes after thirty-three. Thirty-four is a part of the Fibonacci sequence!</li>
  <li><strong>Thirty-Five (35):</strong> The number that comes after thirty-four. Thirty-five is the age you can start taking part in the senior games!</li>
  <li><strong>Thirty-Six (36):</strong> The number that comes after thirty-five. Thirty-six is the square of six: 6 x 6!</li>
  <li><strong>Thirty-Seven (37):</strong> The number that comes after thirty-six. Thirty-seven is a prime number!</li>
  <li><strong>Thirty-Eight (38):</strong> The number that comes after thirty-seven. Thirty-eight is just one less than thirty-nine!</li>
  <li><strong>Thirty-Nine (39):</strong> The number that comes after thirty-eight. Thirty-nine is the next prime number after thirty-seven!</li>
  <li><strong>Forty (40):</strong> The number that comes after thirty-nine. There are forty weeks in a typical pregnancy!</li>
  <li><strong>Forty-One (41):</strong> The number that comes after forty. Forty-one is a prime number!</li>
  <li><strong>Forty-Two (42):</strong> The number that comes after forty-one. Forty-two is often referred to as "the answer to the ultimate question of life, the universe, and everything" in pop culture!</li>
  <li><strong>Forty-Three (43):</strong> The number that comes after forty-two. Forty-three is another prime number!</li>
  <li><strong>Forty-Four (44):</strong> The number that comes after forty-three. Forty-four is a double number: two times twenty-two!</li>
  <li><strong>Forty-Five (45):</strong> The number that comes after forty-four. Forty-five is half of ninety!</li>
  <li><strong>Forty-Six (46):</strong> The number that comes after forty-five. Forty-six is the atomic number of palladium!</li>
  <li><strong>Forty-Seven (47):</strong> The number that comes after forty-six. Forty-seven is a prime number!</li>
  <li><strong>Forty-Eight (48):</strong> The number that comes after forty-seven. Forty-eight is the number of states in the United States before Alaska and Hawaii were added!</li>
  <li><strong>Forty-Nine (49):</strong> The number that comes after forty-eight. Forty-nine is the square of seven!</li>
  <li><strong>Fifty (50):</strong> The number that comes after forty-nine. Fifty is half of one hundred!</li>
</ul>


        `;
        break;
        case 'math':
  content = `
    <h2 class="text-2xl font-bold text-blue-600 mb-4">Learning Basic Math 📚</h2>
    <p class="text-lg text-gray-700">Let's have fun with simple math!</p>
    <ul class="list-disc ml-6 text-lg text-gray-700">
      <li><strong>Counting:</strong> Counting is the first step in math. Let's practice counting together! Start from one, two, three, and keep going!</li>
      <li><strong>Adding:</strong> Adding means putting things together. For example, if you have 2 apples and you get 3 more, you have 5 apples in total!</li>
      <li><strong>Subtraction:</strong> Subtracting means taking things away. If you have 5 balloons and give away 2, you have 3 balloons left!</li>
      <li><strong>Simple Shapes:</strong> Many shapes are part of math. A square, circle, and triangle are all shapes you’ll use in math. Can you find them around you?</li>
      <li><strong>Patterns:</strong> Patterns are like repeated designs! Look for patterns in your clothes, toys, or even nature! You might see patterns like stripes or spots.</li>
      <li><strong>Comparing Numbers:</strong> Sometimes you need to compare numbers to see which is bigger. For example, is 7 bigger than 5? Yes, it is!</li>
    </ul>
  `;
  break;

  
      case 'letters':
        content = `
         <h2 class="text-2xl font-bold text-blue-600 mb-4">Learning Letters 📚</h2>
<p class="text-lg text-gray-700">Letters are the building blocks of words. Let's learn the alphabet!</p>
<ul class="list-disc ml-6 text-lg text-gray-700">
  <li><strong>A:</strong> The first letter of the alphabet. It sounds like "ah". It makes the sound in words like apple and ant.</li>
  <li><strong>B:</strong> The second letter of the alphabet. It sounds like "buh". It makes the sound in words like ball and bear.</li>
  <li><strong>C:</strong> The third letter. It sounds like "kuh". It makes the sound in words like cat and car.</li>
  <li><strong>D:</strong> The fourth letter. It sounds like "duh". It makes the sound in words like dog and door.</li>
  <li><strong>E:</strong> The fifth letter. It sounds like "eh". It makes the sound in words like elephant and egg.</li>
  <li><strong>F:</strong> The sixth letter. It sounds like "fuh". It makes the sound in words like frog and flower.</li>
  <li><strong>G:</strong> The seventh letter. It sounds like "guh". It makes the sound in words like goat and grape.</li>
  <li><strong>H:</strong> The eighth letter. It sounds like "huh". It makes the sound in words like house and hat.</li>
  <li><strong>I:</strong> The ninth letter. It sounds like "ih". It makes the sound in words like igloo and ice.</li>
  <li><strong>J:</strong> The tenth letter. It sounds like "juh". It makes the sound in words like jump and jelly.</li>
  <li><strong>K:</strong> The eleventh letter. It sounds like "kuh". It makes the sound in words like kite and king.</li>
  <li><strong>L:</strong> The twelfth letter. It sounds like "luh". It makes the sound in words like lion and ladder.</li>
  <li><strong>M:</strong> The thirteenth letter. It sounds like "muh". It makes the sound in words like monkey and mountain.</li>
  <li><strong>N:</strong> The fourteenth letter. It sounds like "nuh". It makes the sound in words like nest and nose.</li>
  <li><strong>O:</strong> The fifteenth letter. It sounds like "oh". It makes the sound in words like octopus and orange.</li>
  <li><strong>P:</strong> The sixteenth letter. It sounds like "puh". It makes the sound in words like penguin and pencil.</li>
  <li><strong>Q:</strong> The seventeenth letter. It sounds like "kwuh". It makes the sound in words like queen and question.</li>
  <li><strong>R:</strong> The eighteenth letter. It sounds like "ruh". It makes the sound in words like rabbit and rainbow.</li>
  <li><strong>S:</strong> The nineteenth letter. It sounds like "ss". It makes the sound in words like sun and snake.</li>
  <li><strong>T:</strong> The twentieth letter. It sounds like "tuh". It makes the sound in words like tiger and tree.</li>
  <li><strong>U:</strong> The twenty-first letter. It sounds like "uh". It makes the sound in words like umbrella and up.</li>
  <li><strong>V:</strong> The twenty-second letter. It sounds like "vuh". It makes the sound in words like vase and van.</li>
  <li><strong>W:</strong> The twenty-third letter. It sounds like "wuh". It makes the sound in words like whale and window.</li>
  <li><strong>X:</strong> The twenty-fourth letter. It sounds like "ks". It makes the sound in words like box and fox.</li>
  <li><strong>Y:</strong> The twenty-fifth letter. It sounds like "yuh". It makes the sound in words like yellow and yarn.</li>
  <li><strong>Z:</strong> The twenty-sixth letter. It sounds like "zuh". It makes the sound in words like zebra and zipper.</li>
</ul>

        `;
        break;
  
      case 'shapes':
        content = `
   <h2 class="text-2xl font-bold text-yellow-600 mb-4">Learning Shapes 📚</h2>
<p class="text-lg text-gray-700">Shapes are everywhere! Let's explore some common shapes:</p>
<ul class="list-disc ml-6 text-lg text-gray-700">
  <li><strong>Circle:</strong> A round shape with no corners. The shape of a ball, the moon, or a clock!</li>
  <li><strong>Square:</strong> A shape with four equal sides and four right angles. It’s like a box or a piece of paper.</li>
  <li><strong>Triangle:</strong> A shape with three sides. Like a slice of pizza or a roof on a house.</li>
  <li><strong>Rectangle:</strong> A shape with four sides, two long and two short. A TV screen or a door is rectangular.</li>
  <li><strong>Star:</strong> A shape with five points, like a star in the sky. A symbol for something special!</li>
  <li><strong>Oval:</strong> A shape like a stretched circle. An egg or a watermelon has an oval shape.</li>
  <li><strong>Heart:</strong> A shape that looks like a love symbol, with two rounded sides and a point at the bottom.</li>
  <li><strong>Diamond:</strong> A shape that looks like a tilted square. It’s often used in shapes or patterns.</li>
  <li><strong>Hexagon:</strong> A six-sided shape. Think of honeycombs or the shape of some tiles!</li>
  <li><strong>Octagon:</strong> A shape with eight sides. A stop sign is a perfect example of an octagon.</li>
</ul>

        `;
        break;
  
      case 'animals':
        content = `
<h2 class="text-2xl font-bold text-red-600 mb-4">Learning Animals 📚</h2>
<p class="text-lg text-gray-700">Here are some amazing animals to learn about:</p>
<ul class="list-disc ml-6 text-lg text-gray-700">
  <li><strong>Lion:</strong> A big, strong cat with a golden name. It is called the "King of the Jungle".</li>
  <li><strong>Elephant:</strong> A giant mammal with a trunk and big ears. They are the largest land animals!</li>
  <li><strong>Giraffe:</strong> A tall animal with a long neck. It has spots on its body and can reach high trees to eat leaves.</li>
  <li><strong>Penguin:</strong> A bird that cannot fly but loves to swim. Penguins live in cold places like Antarctica.</li>
  <li><strong>Monkey:</strong> A playful animal that loves bananas! Monkeys are very intelligent and love to swing from tree to tree.</li>
  <li><strong>Dog:</strong> A loyal pet that barks and loves to play fetch.</li>
  <li><strong>Cat:</strong> A furry pet that meows and loves to chase mice!</li>
  <li><strong>Tiger:</strong> A powerful big cat with orange fur and black stripes. Tigers live in forests and are great hunters.</li>
  <li><strong>Bear:</strong> A large, furry animal that loves honey. Bears can be found in forests and mountains.</li>
  <li><strong>Rabbit:</strong> A small, fluffy animal that loves to hop and eat carrots.</li>
  <li><strong>Horse:</strong> A strong and fast animal that is often used for riding and pulling carts.</li>
  <li><strong>Kangaroo:</strong> A marsupial with strong legs that loves to hop. Kangaroos are native to Australia.</li>
  <li><strong>Koala:</strong> A sleepy, tree-dwelling animal from Australia. Koalas love to eat eucalyptus leaves.</li>
  <li><strong>Fish:</strong> A cold-blooded aquatic animal with fins. Fish can be found in oceans, rivers, and lakes.</li>
  <li><strong>Butterfly:</strong> A beautiful insect with colorful wings. Butterflies fly around flowers, spreading pollen.</li>
</ul>


        `;
        break;
  
      case 'fruits':
        content = `
      <h2 class="text-2xl font-bold text-orange-600 mb-4">Learning Fruits 📚</h2>
<p class="text-lg text-gray-700">Fruits are delicious and healthy! Here are some examples:</p>
<ul class="list-disc ml-6 text-lg text-gray-700">
  <li><strong>Apple:</strong> A sweet and crunchy fruit, usually red or green. It's full of vitamins!</li>
  <li><strong>Banana:</strong> A long, yellow fruit that is sweet and soft. Monkeys love bananas!</li>
  <li><strong>Orange:</strong> A citrus fruit that is juicy and tangy. Oranges are full of vitamin C.</li>
  <li><strong>Grape:</strong> Small, round fruits that grow in clusters. Grapes can be green, red, or purple.</li>
  <li><strong>Strawberry:</strong> A red fruit with tiny seeds on the outside. Strawberries are sweet and delicious!</li>
  <li><strong>Pineapple:</strong> A tropical fruit with a spiky outside and sweet, juicy inside.</li>
  <li><strong>Watermelon:</strong> A large fruit that is sweet and full of water. Perfect for hot days!</li>
  <li><strong>Mango:</strong> A sweet and juicy tropical fruit. Mangos are usually yellow or orange.</li>
  <li><strong>Peach:</strong> A soft and fuzzy fruit with a sweet and tangy taste. Peaches are usually yellow or red.</li>
  <li><strong>Cherry:</strong> Small, round, and red fruits that are sweet and juicy. Cherries are often used in desserts!</li>
  <li><strong>Blueberry:</strong> A small, round, blue fruit that grows in clusters. Blueberries are great for snacks!</li>
  <li><strong>Kiwi:</strong> A small, brown, fuzzy fruit with green flesh inside. Kiwis are tangy and refreshing.</li>
  <li><strong>Plum:</strong> A small, round fruit with a smooth skin. Plums are usually purple or red.</li>
  <li><strong>Papaya:</strong> A tropical fruit with orange flesh and black seeds. Papayas are sweet and soft.</li>
  <li><strong>Coconut:</strong> A tropical fruit with a hard outer shell and sweet, milky inside.</li>
</ul>


        `;
        break;
  
      default:
        content = `<p class="text-lg text-gray-700">Select a category to start learning.</p>`;
    }
  
    // Inject the content into the learning-container div
    document.getElementById('learning-content').innerHTML = content;
  }
  
  // Extract the topic from the URL parameters and load the corresponding content
  const params = new URLSearchParams(window.location.search);
  const topic = params.get('topic');
  if (topic) {
    learningMaterials(topic);
  }
  