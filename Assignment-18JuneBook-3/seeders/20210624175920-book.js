'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books',[
      {bookname:"My Journey",bookauthor:"Dr. A.P.J. Abdul Kalam"},
      {bookname:"Making of New India",bookauthor:"Dr. Bibek Debroy"},
      {bookname:"Happy Dreams",bookauthor:"Jia Pingwa"},
      {bookname:"Across the Universe",bookauthor:"Ajoy Bose"},
      {bookname:"The Overstory",bookauthor:"Richard Powers"},
      {bookname:"The Third Pillar",bookauthor:"Raghuram Rajan"}
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
