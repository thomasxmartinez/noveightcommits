const records = require('../models').records;

module.exports = {
  create(req, res) {
    return records
      .create({
        GivenName: req.body.GivenName,
        Surname: req.body.Surname,
        StreetAddress: req.body.StreetAddress,
        City: req.body.City,
        ZipCode: req.body.ZipCode,
        CountryFull: req.body.CountryFull,
        EmailAddress: req.body.EmailAddress,
        Username: req.body.Username,
        Age: req.body.Age,
        Occupation: req.body.Occupation
      })
      .then(records => res.status(201).send(records))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return records
      .all()
      .then(records => res.status(200).send(records))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return records
      .findById(req.params.id)
      .then(records => {
        if (!records) {
          return res.status(404).send({
            message: 'record Not Found'
          });
        }
        return res.status(200).send(records);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return records
      .find({
        where: {
          id: req.params.id
        }
      })
      .then(records => {
        if (!records) {
          return res.status(404).send({
            message: 'Record Not Found'
          });
        }

        return records
          .update({
            GivenName: req.body.GivenName || records.GivenName,
            Surname: req.body.Surname || records.Surname,
            StreetAddress: req.body.StreetAddress || records.StreetAddress,
            City: req.body.City || records.City,
            ZipCode: req.body.ZipCode || records.ZipCode,
            CountryFull: req.body.CountryFull || records.CountryFull,
            EmailAddress: req.body.EmailAddress || records.EmailAddress,
            Username: req.body.Username || records.Username,
            Age: req.body.Age || records.Age,
            Occupation: req.body.Occupation || records.Occupation
          })
          .then(updatedrecord => res.status(200).send(updatedrecord))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return records
      .find({
        where: {
          id: req.params.id
        }
      })
      .then(records => {
        if (!records) {
          return res.status(404).send({
            message: 'Record Not Found'
          });
        }

        return records
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
