const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async create(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return response.json(dev);
  },

  async update(request, response) {
    const { github } = request.params;

    let dev = await Dev.findOne({ github });

    const { name, bio, latitude, longitude, techs, ...rest } = request.body;
    rest.github = github;

    if (latitude && longitude)
      var newLocation = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

    if (techs) var techsArray = parseStringAsArray(techs);

    const newDev = await Dev.updateOne(
      { github },
      {
        name: name ? name : dev.name,
        bio: bio ? bio : dev.bio,
        location: latitude && longitude ? newLocation : dev.location,
        techs: techs ? techsArray : dev.techs,
        ...rest,
      }
    );

    return response.json({
      modifiedCount: newDev.nModified,
      ok: newDev.ok,
    });
  },

  async delete(request, response) {
    const { _id } = request.params;

    const dev = await Dev.findOneAndDelete({ _id });

    if (!dev) {
      return response.status(404).json({ error: `Dev not found` });
    }
    return response.status(200).json({ message: `Dev deleted!` });
  },
};
