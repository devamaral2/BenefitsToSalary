import { DataTypes, Model } from 'sequelize';
import db from '.';
import Benefit from './benefit';
import Account from './account';

class AccountBenefit extends Model {
  public id: number;
  public accountOwner: string;
  public salary: string;
}

AccountBenefit.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    field: 'account_id',
    type: DataTypes.INTEGER,
  },
  accountId: {
    field: 'account_id',
    type: DataTypes.INTEGER,
  },
  benefitId: {
    field: 'benefit_id',
    type: DataTypes.INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Account.belongsToMany(Benefit, {
  foreignKey: 'benefitId', as: 'beneficios', through: AccountBenefit, otherKey: 'accountId',
});

Benefit.belongsToMany(Account, {
  foreignKey: 'accountId', as: 'contas', through: AccountBenefit, otherKey: 'benefitId',
});

export default AccountBenefit;
