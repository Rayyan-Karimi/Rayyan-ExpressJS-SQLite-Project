import Tutorial from "../models/tutorial.model.js";

export const create = (createRequest, createResponse) => {
    if (!createRequest.body) {
        return createResponse.status(400).send({
            message: "Content cannot be empty"
        })
    }
    const tutorial = new Tutorial({
        title: createRequest.body.title,
        description: createRequest.body.description,
        published: createRequest.body.published || false
    })
    Tutorial.create(tutorial, (err, data) => {
        if (err) {
            return createResponse.status(500).send({
                message: err.message || "Some error occurred while creating tutorial."
            })
        }
        createResponse.send(data)
    })
}

export const readAll = (readAllRequest, readAllResponse) => {
    const title = readAllRequest.query.title;
    Tutorial.readAll(title, (err, data) => {
        if (err) {
            readAllResponse.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            })
        } else if(data.length) {
            readAllResponse.send(data);
        }else {
            readAllResponse.send({message: "No tutorials found."});
        }
    })
}

export const readOne = (readOneRequest, readOneResponse) => {
    const id = readOneRequest.query.id;
    Tutorial.findById(readOneRequest.params.id, (err,data) => {
        if(err) {
            readOneResponse.status(500).send(err.message || "Some error occurred.")
        } else if(data.length) {
            readOneResponse.send(data)
        } else {
            readOneResponse.send({message: `No tutorial found with thid id=${id}.`})
        }
    })
}

export const readAllPublished = (readPublishedRequest, readPublishedResponse) => {
    Tutorial.readPublished((err,data) => {
        if(err) {
            readPublishedResponse.status(500).send(err.message || "Some error occurred.")
        } else if(data.length) {
            readPublishedResponse.send(data)
        } else {
            readPublishedResponse.send({message: `No published tutorial found.`})
        }
    })
}

export const update = (updateRequest, updateResponse) => {
    const id = updateRequest.params.id;
    const updatedTutorial = new Tutorial(updateRequest.body)
    Tutorial.updateById(id, updatedTutorial, (err, data) => {
        if(err) {
            updateResponse.status(500).send(err.message || "Some error occurred.")
        } else {
            updateResponse.send({message: `Updated id = ${id}`})
        }
    })
}

export const deleteOne = (deleteOneRequest, deleteOneResponse) => {
    const id = deleteOneRequest.params.id;
    Tutorial.removeById(id, (err, data) => {
        if(err) {
            deleteOneResponse.status(500).send(err.message||"Some error occurred.")
        } else {
            deleteOneResponse.send({message : `Tutorial with id= ${id} deleted successfully.`})
        }
    })

}

export const deleteAll = (deleteAllRequest, deleteAllResponse) => {
    Tutorial.removeAll((err,data) => {
        if(err) {
            deleteAllResponse.status(500).send(err.message || "Some error occurred.")
        } else {
            deleteAllResponse.send({message: "All tutorials deleted successfully."})
        }
    })
}
