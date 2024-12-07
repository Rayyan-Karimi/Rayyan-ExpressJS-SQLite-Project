import connection from './db.js'

const Tutorial = function(tutorial) {
    this.title = tutorial.title;
    this.description = tutorial.description,
    this.published = tutorial.published
};

Tutorial.getAll = (title, result) => {
    let query = "SELECT * FROM tutorials";
  
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
  
    connection.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("tutorials: ", res);
      result(null, res);
    });
  };