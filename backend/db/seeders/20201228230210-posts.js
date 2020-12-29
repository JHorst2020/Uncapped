'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert(
        "Posts",
        [
          {
            drink_id: 10,
            user_id: 1,
            userRating: 4,
            userReview:
              "I love scotch. Scotch, scotch, scotch. Here it goes down. Down into my belly. Mhmmm mhmmm mhmmm.",
              location:"Home",
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
