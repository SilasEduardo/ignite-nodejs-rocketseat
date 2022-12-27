import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Bank from '../models/Bank';

const models = [Bank];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
