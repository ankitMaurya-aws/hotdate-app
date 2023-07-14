const model = require("../Model/model")

module.exports = {
    async addModel(req, res) {
        try {
            const { firstName, lastName, DOB, lookingFor, marital_status, body_type, language } = req.body
            console.log(req.body)
            if (!firstName, !lastName, !DOB, !lookingFor, !marital_status, !body_type, !language) {
                return res.status(400).send("Required data is missing.")
            }
            let images = [];
            let videos = [];

            // Check if images were uploaded
            if (req.files['images']) {
                for (const image of req.files['images']) {
                    images.push(image.filename);
                }
            }

            // Check if videos were uploaded
            if (req.files['videos']) {
                for (const video of req.files['videos']) {
                    videos.push(video.filename);
                }
            }
            const data = await model.create({
                firstName: firstName, lastName: lastName,
                DOB: DOB, lookingFor: lookingFor,
                marital_status: marital_status, body_type: body_type,
                language: language, images: images, videos: videos
            })
            if (!data) {
                return res.status(400).send("something went wrong")
            } else {
                return res.status(200).send(data)
            }
        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
    async find(req, res) {
        try {  
            const { limit, q, page } = req.query
            const data = await model.find().limit(limit || 7).skip(page > 0 ? ((page - 1) * limit) : 0);
            const total = await model.count();
            console.log(total, "total")
            if (q) {
                let result = await model.find({
                    $or: [
                        { firstName: { $regex: q, "$options": "i" } },
                        { lastName: { $regex: q, "$options": "i" } }
                    ]
                }).limit(limit || 7).skip(page > 0 ? ((page - 1) * limit) : 0);
                console.log(q, result);

                return res.status(200).send({ "data": result, "total": total })
            }

            res.status(200).send({ data, "total": total })

        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
    async update(req, res) {
        try {

            const { modelId } = req.body
            if (!modelId) {
                return res.status(404).send("required the modelId")
            }
            const exist = await model.findOne({ _id: modelId })
            if (!exist) {
                return res.status(404).send("model not found")
            }
            let images = exist.images;
            if (req.files['images'] && req.files['images'].length > 0) {
              const newImages = req.files['images'].map(image => image.filename);
              images = [...images, ...newImages];
            }
        
            if (req.body.removeImages && req.body.removeImages.length > 0) {
              const imagesToRemove = req.body.removeImages;
              images = images.filter(image => !imagesToRemove.includes(image));
            }
        
            let videos = exist.videos;
            if (req.files['videos'] && req.files['videos'].length > 0) {
              const newVideos = req.files['videos'].map(video => video.filename);
              videos = [...videos, ...newVideos];
            }
        
            if (req.body.removeVideos && req.body.removeVideos.length > 0) {
              const videosToRemove = req.body.removeVideos;
              videos = videos.filter(video => !videosToRemove.includes(video));
            }
            const data = await model.findOneAndUpdate({ _id: modelId }, {
                ...req.body, images: images, videos: videos
            }, { new: true })
            if (!data) {
                return res.status(400).send("something went wrong")
            } else {
                return res.status(200).send(data)
            }


        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                return res.status(404).send("required the modelId")
            }
            const exist = await model.findOne({ _id: id })
            if (!exist) {
                return res.status(404).send("model not found")
            }
            const data = await model.findByIdAndDelete({ _id: id })
            if (!data) {
                return res.status(400).send("something went wrong")
            } else {
                return res.status(200).send("delete successfully")
            }
        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
}


 
  
  
  