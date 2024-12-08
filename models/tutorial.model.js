import sql from './dbConnection.js'

const Tutorial = function (tutorial) {
    this.title = tutorial.title
    this.description = tutorial.description
    this.published = tutorial.published
}

Tutorial.create = (newTutorial, response) => {
    const query = `
    INSERT INTO tutorials (title, description, published) 
    VALUES(?,?,?)`
    const params = [newTutorial.title, newTutorial.description, newTutorial.published]

    sql.run(query, params, function (err) {
        if (err) {
            console.error(err.message)
            response(err, null)
            return
        } else {
            console.log("Created the tutorial:", { id: this.lastID, ...newTutorial }) // the last inserted row
            response(null, { id: this.lastID, ...newTutorial })
        }
    })
}

Tutorial.readAll = (title, response) => {
    const query = "Select * from tutorials"
    if (title)
        query += `where title like '%${title}'`

    sql.all(query, (err, result) => {
        if (err) {
            console.error(err.message)
            response(err, null)
            return;
        } else if (result.length) {
            console.log("Reading all tutorials:", result)
            response(null, result);
        } else {
            console.log("No such tutorials found.")
            response(null, result);
        }
    })
}

Tutorial.readPublished = (response) => {
    const query = `Select * from tutorials where published = true`
    sql.all(query, (err, result) => {
        if (err) {
            console.error(err.message)
            response(err, null)
            return;
        } else {
            console.log("Reading all *published tutorials:", result)
            response(null, result);
        }
    })
}

Tutorial.findById = (id, findByIdResponse) => {
    const query = `Select * from tutorials where id = ${id}`
    sql.all(query, (err, result) => {
        if (err) {
            console.error(err.message)
            findByIdResponse(err, null)
            return;
        } else if (result.length) {
            console.log("Found by ID:", result)
            findByIdResponse(null, result)
        } else {
            console.log("No rows found by ID.")
            findByIdResponse(null, { message: "not_found" })
        }
    })
}

Tutorial.updateById = (id, tutorial, updateByIdResponse) => {
    const query = `
    Update tutorials set title = ?, description = ?, published= ?
    where id = ?
    `
    const params = [tutorial.title, tutorial.description, tutorial.published, id]
    sql.run(query, params, function(err) {
        if (err) {
            console.error("Error updating:", err.message)
            updateByIdResponse(null, err)
            return;
        }
        if (this.changes === 0) {
            console.log("No tutorials found with this ID:", id)
            updateByIdResponse({ message: "not_found" })
            return;
        } else {
            console.log("Updated by id", id, tutorial)
            updateByIdResponse(null, { id, ...tutorial })
        }
    })
}

Tutorial.removeById = (id, deleteByIdResponse) => {
    const query = `Delete from tutorials where id = ?`
    sql.run(query, [id], function (err) {
        if (err) {
            console.error("Error deleting by ID:", err.message)
            deleteByIdResponse(null, err)
            return;
        }
        if (this.changes === 0) {
            deleteByIdResponse({ message: "not_found" }, null)
        } else {
            console.log("Deleted tutorial by id", id)
            deleteByIdResponse(null, { message: `Tutorial with id ${id} was deleted successfully.` })
        }
    })
}

Tutorial.removeAll = (deleteByIdResponse) => {
    const query = `Delete from tutorials`
    sql.run(query, function (err) {
        if (err) {
            console.error("Error deleting All:", err.message)
            deleteByIdResponse(null, err)
            return;
        }
        console.log("Deleted all tutorials.")
        deleteByIdResponse(null, { message: `Tutorial .` })
    }
    )
}


export default Tutorial;