var img;
var img2;
var img3;

function setup() {
  createCanvas(300, 300);
  img = createImg('http://lilysstayabroad.yolasite.com/resources/eat-fast-food.jpg');
  img.hide(); 
  // This is where I put the background of my code
  img2 = createImg('http://3z489t2p9kbdv4il24as7q51.wpengine.netdna-cdn.com/wp-content/uploads/2015/10/pizza-emjoi.png');
  img2.hide();
  //This is my pizza photo that was placed in the top left
  img = createImg('http://lilysstayabroad.yolasite.com/resources/eat-fast-food.jpg');
  img.hide();
  img3 = createImg('http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/hot-dog.png');
  img3.hide();
  //This is how the hot dog in the bottom right was displayed
  background(100);
}

function draw() {
  image(img, 0, 0, width/1, height/1); 
  image(img2, 0, 0, width/3, height/3);
  image(img3, 200, 200, width/3, height/3); 
	//This is how I figured out how to make the photos big or small
  //the bigger the number the smaller the photo

textSize(32)
  //The text size
text("1500 Pounds",50,100)
fill (500,100,150)
  //the color of the words
}
