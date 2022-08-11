import { DataTypes, Model } from 'sequelize';
import db from '.';

class Benefit extends Model {
  public id: number;
  public name: string;
}

Benefit.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
  },

}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Benefit;
