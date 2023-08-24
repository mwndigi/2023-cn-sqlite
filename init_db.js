const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cbsDB.sqlite');

// create lectures based on titles of all 12 sub folders in public/content/lectures
// just make the folders names as a object in the array
const lectures = [
    ["1", "Introduktion", '2023-09-06', 1],
    ["2", "Internettet og 5-lagsmodellen", '2023-09-13',0],
    ["3", "Applikationslaget del 1", '2023-09-20',0],
    ["4", "Applikationslaget del 2", '2023-09-27',0],
    ["5", "Transportlaget", '2023-10-04', 0],
    ["6", "Netværkslaget: Dataplan", '2023-10-09', 0],
    ["7", "Netværkslaget: Kontrolplan", '2023-10-11', 0],
    ["8", "Linklaget og lokale netværk", '2023-10-25', 0],
    ["9", "Trådløse og mobile netværk", '2023-11-01', 0],
    ["10", "Netværkssikkerhed del 1", '2023-11-08', 0],
    ["11", "Netværkssikkerhed del 2", '2023-11-22', 0],
    ["12", "Re-cap", '2023-11-29', 0]
];

const exercises = [
    ["1", "Opsætning af udviklingsmiljø", '2023-09-06', 1],
    ["2", "Opsætning af webserver",'2023-09-13', 0],
    ["3", "Webapplikationer, HTTP og API'er", '2023-09-20', 0],
    ["4", "Webapplikationer, DNS og SMTP", '2023-09-27', 0],
    ["5", "Socket-programmering og Pinger", '2023-10-04', 0],
    ["6", "HTTP, TCP, IP og ICMP med Wireshark", '2023-10-09', 0],
    ["7", "Load balancing og loadtest",'2023-10-11', 0],
    ["8", "Netflix case, Content Delivery Networks, mv.", '2023-10-25', 0],
    ["9", "SMS og WhatsApp med Twilio", '2023-11-01', 0],
    ["10", "SSL/TLS for HTTPS", '2023-11-08', 0],
    ["11", "Kryptografi, hashing, mv.", '2023-11-22', 0],
    ["12", "Re-cap", '2023-11-29', 0]
];

const events = [
    ["1", "Deadline for obligatorisk opgave 1", '2023-09-22', 0],
    ["2", "Deadline for obligatorisk opgave 2", '2023-10-13', 0],
    ["3", "Deadline for obligatorisk opgave 3", '2023-10-23', 0],
    ["4", "Deadline for obligatorisk opgave 4", '2023-11-10', 0],
    ["5", "Deadline for obligatorisk opgave 5", '2023-11-24', 0],
    ['6', 'Efterårsferie', '2023-10-16', 0],
    ['7', 'Efterårsferie', '2023-10-17', 0],
    ['8', 'Efterårsferie', '2023-10-18', 0],
    ['9', 'Efterårsferie', '2023-10-19', 0],
    ['10', 'Efterårsferie', '2023-10-20', 0],
    ["11", "Spørgetime", '2023-12-06', 0],
    ["12", "Deadline for eksamensopgave", '2023-12-20', 0],
    ["13", "Mundtlig eksamen", '2024-01-08', 0],
    ["14", "Mundtlig eksamen", '2024-01-09', 0],
    ["15", "Mundtlig eksamen", '2024-01-10', 0],
    ["16", "Mundtlig eksamen", '2024-01-11', 0],
    ["17", "Mundtlig eksamen", '2024-01-12', 0]
];

db.serialize(function() {
    console.log('Creating database if it doesn\'t exist');
    db.run('CREATE TABLE if not exists lectures (id integer primary key, number text not null, title text, date text, active int)'); 
    db.run('CREATE TABLE if not exists exercises (id integer primary key, number text not null, title text, date text, active int)'); 
    db.run('CREATE TABLE if not exists slides (id integer primary key, number int, title text, uri text not null, lectureNumber int, lectureId int, foreign key (lectureId) references lectures(id))'); 
    db.run('CREATE TABLE if not exists exercise (id integer primary key, number int, title text, htmlId text, htmlClass text, htmlSection blob, exerciseNumber int, exerciseId int, foreign key (exerciseId) references exercises(id))'); 
    db.run('CREATE TABLE if not exists events (id integer primary key, number text not null, title text, date text, active int)');
  });

const addLectureToDatabase = (lecture) => {
    db.run(
      'insert into lectures (number, title, date, active) values (?, ?, ?, ?)', 
      [lecture[0], lecture[1], lecture[2], lecture[3]], 
      function(err) {
        if (err) {
          console.error(err);
        }
      }
    );
  }

  // db.run add all exercises to database
const addExerciseToDatabase = (exercise) => {
    db.run(
      'insert into exercises (number, title, date, active) values (?, ?, ?, ?)', 
      [exercise[0], exercise[1], exercise[2], exercise[3]], 
      function(err) {
        if (err) {
          console.error(err);
        }
      }
    );
  }

    // db.run add all exercises to database
const addEventsToDatabase = (event) => {
  db.run(
    'insert into events (number, title, date, active) values (?, ?, ?, ?)', 
    [event[0], event[1], event[2], event[3]], 
    function(err) {
      if (err) {
        console.error(err);
      }
    }
  );
}

lectures.forEach((lecture) => {
    addLectureToDatabase(lecture)
}
);

exercises.forEach((exercise) => {
    addExerciseToDatabase(exercise)
}
);

events.forEach((event) => {
  addEventsToDatabase(event)
}
);