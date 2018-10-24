/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    creator: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    resource: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    is_hot: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_banner: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'news'
  });
};
