import { DataTypes, Model } from 'sequelize';
import db from '.';

class Admin extends Model {
  public id: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

Admin.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Admin;
