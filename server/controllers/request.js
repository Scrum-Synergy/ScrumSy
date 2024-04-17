import Request from '../models/request.js';

// create a new request
export const createRequest = async (req, res) => {
    try {
        if (
            !req.body.email ||
            !req.body.subject ||
            !req.body.degree ||
            !req.body.description
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newRequest = {
            email: req.body.email,
            subject: req.body.subject,
            degree: req.body.degree,
            description: req.body.description,
        };

        const request = await Request.create(newRequest);

        return res.status(201).send({ message: "Request created successfully", data: request });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// get all requests
export const getAllRequests = async (req, res) => {
    try {
        const request = await Request.find();

        return res.status(200).send(request);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// update a request
export const updateRequest = async (req, res) => {
    try {
        const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!request) {
            return res.status(404).send({
                message: 'Request not found',
            });
        } else {
            return res.status(200).send(request);
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// delete a request
export const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findByIdAndDelete(req.params.id);

        if (!request) {
            return res.status(404).send({
                message: 'Request not found',
            });
        } else {
            return res.status(200).send({
                message: 'Request deleted successfully',
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// get a specific request
export const getRequest = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);

        if (!request) {
            return res.status(404).send({
                message: 'Request not found',
            });
        }

        return res.status(200).send(request);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// update a specific request status
export const updateRequestStatus = async (req, res) => {
    try {
        const request = await Request.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });

        if (!request) {
            return res.status(404).send({
                message: 'Request not found',
            });
        } else {
            return res.status(200).send(request);
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

}

// get all requests by status 'pending'
export const getPendingRequests = async (req, res) => {
    try {
        const request = await Request.find({ status: 'pending' });

        return res.status(200).send(request);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}



