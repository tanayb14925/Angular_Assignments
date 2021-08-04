'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Bikes', [{
            name: 'Activa',
            brand: 'Honda',
            createdAt: '2010-10-10.11.11.11.11',
            updatedAt: '2010-10-10.11.11.11.11'

        },
         {
            name: 'Pleasure',
            brand: 'Hero',
            createdAt: '2010-10-10.11.11.11.11',
            updatedAt: '2010-10-10.11.11.11.11'
        },
        {
            name: 'Pulsar',
            brand: 'Bajaj',
            createdAt: '2010-10-10.11.11.11.11',
            updatedAt: '2010-10-10.11.11.11.11'
        },
        {
            name: 'Avenger',
            brand: 'Bajaj',
            createdAt: '2010-10-10.11.11.11.11',
            updatedAt: '2010-10-10.11.11.11.11'
        }], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};