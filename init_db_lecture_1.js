const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./cbsDB.sqlite");

const addSlideToDatabase = (slide) => {
    db.run(
      'insert into slides (number, title, uri, lectureNumber, lectureId) values (?, ?, ?, ?, ?)', 
      [slide[0], slide[1], slide[2], slide[3], slide[4]], 
      function(err) {
        if (err) {
          console.error(err);
        }
      }
    );
  };

slides = [
    ['1', 'Introduktion-01', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831818/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-01_vwrqdo.png', '1', '2'],
    ['2', 'Introduktion-02', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831967/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-02_gqnisg.png', '1', '2'],
    ['3', 'Introduktion-03', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831817/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-03_zihsrw.png', '1', '2'],
    ['4', 'Introduktion-04', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831817/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-04_k2vqei.png', '1', '2'],
    ['5', 'Introduktion-05', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831817/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-05_u0zirz.png', '1', '2'],
    ['6', 'Introduktion-06', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831982/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-06_c0fjpx.png', '1', '2'],
    ['7', 'Introduktion-07', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831982/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-07_yxtgix.png', '1', '2'],
    ['8', 'Introduktion-08', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831817/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-08_a8zzom.png', '1', '2'],
    ['9', 'Introduktion-09', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831817/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-09_vsww5w.png', '1', '2'],
    ['10', 'Introduktion-10', 'https://res.cloudinary.com/dx68rf5pj/image/upload/v1690831817/cbs/2023/lectures/1/Forel%C3%A6sning_1_-_Introduktion-10_fzcz9b.png', '1', '2']
]

slides.forEach(slide => {
    addSlideToDatabase(slide);
}
);