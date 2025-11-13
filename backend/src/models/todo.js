import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class Todo extends Model {}

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      timestamps: true,
    }
  );

  return Todo;
};
