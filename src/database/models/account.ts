import { DataTypes, Model } from 'sequelize';
import db from '.';

class Account extends Model {
  public id: number;
  public accountOwner: string;
  public salary: string;
}

Account.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  accountOwner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Account;
