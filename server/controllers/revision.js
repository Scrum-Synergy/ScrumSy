import RevisionPlan from '../models/revisionPlan.js';


// create a new revision plan 
export const createRevisionPlan = async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.price ||
            !req.body.type
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newRevisionPlan = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,

        };

        const revisionPlan = await RevisionPlan.create(newRevisionPlan);

        return res.status(201).send({ message: "Revision Plan created successfully", data: revisionPlan });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// get all revisions plans
export const getAllRevisionsPlan = async (req, res) => {
    try {
        const revisionPlan = await RevisionPlan.find();

        return res.status(200).send(revisionPlan);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// get a specific revision plan
export const getRevisionPlan = async (req, res) => {
    try {
        const revisionPlan = await RevisionPlan.findById(req.params.id);

        if (!revisionPlan) {
            return res.status(404).send({
                message: 'Revision Plan not found',
            });
        }

        return res.status(200).send(revisionPlan);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// update a specific revision plan
export const updateRevisionPlan = async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.price ||
            !req.body.type ||
            !req.body.description
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const revisionPlan = await RevisionPlan.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                type: req.body.type,

            },
            { new: true }
        );

        return res.status(200).send(revisionPlan);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

// delete a specific revision plan
export const deleteRevisionPlan = async (req, res) => {
    try {
        const revisionPlan = await RevisionPlan.findById(req.params.id);

        if (!revisionPlan) {
            return res.status(404).send({
                message: 'Revision Plan not found',
            });
        }

        await revisionPlan.deleteOne();

        return res.status(200).send({
            message: 'Revision Plan deleted successfully',
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}
