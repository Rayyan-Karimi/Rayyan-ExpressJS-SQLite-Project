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
    Tutorial.readAll(title, (err, data => {
        if (err) {
            readAllResponse(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            })
        } else {
            readAllResponse.send(data);
        }
    }))
}

export const readOne = (readOneRequest, readOneResponse) => {
    // const id = readOneRequest.query.id;
    // Tutorial.findById(readOneRequest.params.id, (err,data) => {
    //     if(err) {

    //     }
    // })
}

export const readAllPublished = (readPublishedRequest, readPublishedResponse) => {

}

export const update = (updateRequest, updateResponse) => {

}

export const deleteOne = (deleteOneRequest, deleteOneResponse) => {

}

export const deleteAll = (deleteAllRequest, deleteAllResponse) => {

}
