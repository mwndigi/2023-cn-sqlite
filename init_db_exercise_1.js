const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./cbsDB.sqlite");

// Function to convert HTML to Blob
function htmlToBlob(html) {
  // const blob = new Blob([html], { type: 'text/html' });
  // return blob;
  return Buffer.from(html, "utf-8");
}

// db.run add a specific exercise to the database
const addSpecificExerciseToDatabase = (exercise) => {
  db.run(
    "insert into exercise (number, title, htmlId, htmlClass, htmlSection, exerciseNumber, exerciseId) values (?, ?, ?, ?, ?, ?, ?)",
    [
      exercise[0],
      exercise[1],
      exercise[2],
      exercise[3],
      htmlToBlob(exercise[4]),
      exercise[5],
      exercise[6],
    ],
    function (err) {
      if (err) {
        console.error(err);
      }
    }
  );
};

// Your HTML code
const htmlCode1 = `
<img src="https://mwn.io/cbs/static/content/exercises/1-Express/1-Express-01.png" class="middle" alt="Slide">
`;

const htmlCode2 = `
<header>
  <h2>The cover slide</h2>
</header>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut augue eget neque ultricies posuere. Cras vulputate quis est in vulputate. Ut fringilla interdum purus, in pretium diam tempus non. Nulla fermentum ante eu molestie vehicula. Nam vel ipsum at est porttitor luctus eu ut ex. Aenean lobortis, ex faucibus rutrum auctor, urna mauris ullamcorper augue, eu placerat nibh ipsum vitae ante. Cras urna magna, posuere eget congue vel, fringilla eget augue. Suspendisse vitae diam ut felis aliquam blandit vitae eu tortor. Mauris ac urna vel dolor semper posuere. Maecenas pretium lacus ligula, a suscipit augue mollis sed. In vitae vulputate quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam posuere nibh in dolor cursus tincidunt. Aenean ornare velit quis enim vulputate, sed dapibus diam pulvinar.</p>
`;

const htmlCode3 = `
<img src="https://mwn.io/cbs/static/content/exercises/1-Express/1-Express-01.png" class="middle shadow" height="500" alt="Big image">
`;

htmlCode4 = `
<header>
  <h2>Image slide (left)</h2>
</header>
<img src="https://mwn.io/cbs/static/content/exercises/1-Express/1-Express-01.png" class="left" style="width: 400px!important;" alt="Slide">
<ul class="listing">
  <li class="listing">Item 1</li>
  <li class="listing">Item 2</li>
  <li class="listing">Item 3</li>
</ul>
`;

htmlCode5 = `
<header>
  <h2>code</h2>
</header>
<pre>
<code>var installapp = navigator.mozApps.install(manifestURL);</code>
<code>installapp.&lt;mark&gt;onsuccess&lt;/mark&gt; = function(data) {</code>
<code>  // App is installed</code>
<code>};</code>
<code>installapp.&lt;mark class="important"&gt;onerror&lt;/mark&gt; = function() {</code>
<code>  // App wasn't installed, info is in </code>
<code>  // installapp.error.name</code>
<code>};</code>
</pre>
`;

// Exercise 1
const exercise1 = [
  ["1", "Første slide", "Express-01", "slide cover w", htmlCode1, 1, 1],
  ["2", "Anden slide", "Express-02", "slide", htmlCode2, 1, 1],
  ["3", "Tredje slide", "Express-03", "slide", htmlCode3, 1, 1],
  ["4", "Fjerde slide", "Express-04", "slide", htmlCode4, 1, 1],
  ["5", "Femte slide", "Express-05", "slide", htmlCode5, 1, 1]
];

exercise1.forEach((exercise) => {
  addSpecificExerciseToDatabase(exercise);
});
