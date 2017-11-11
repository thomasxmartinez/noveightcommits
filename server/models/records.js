module.exports = (sequelize, DataTypes) => {
  const records = sequelize.define('records', {
    GivenName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StreetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CountryFull: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EmailAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Occupation: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return records;
};
