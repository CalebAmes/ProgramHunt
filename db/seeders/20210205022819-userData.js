'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {username: 'demo', email: 'demo@demo.com', hashedPassword: '$2a$08$8AablYgbbj0fknZ/eefBDOssbl68yIFfFe6G.qxFyM.qbXUDHEPM2', profilePictureId: null, createdAt: new Date(), updatedAt: new Date() },
        {username: 'Caleb', email: 'caleb@caleb.com', hashedPassword: '$2a$08$wqD.nyBmc2MRUD.FjeMFD.EiqjsxtQ4QUHmPZkWVAmJo4B4410G7m', profilePictureId: null, createdAt: new Date(), updatedAt: new Date() },
        {username: 'Emad', email: 'emad@emad.com', hashedPassword: '$2a$08$p6OK7alR5x5SsrLmcWwfXer38Xf2dbyIdMzqTuFfsjce.OQaexQ5y', profilePictureId: null, createdAt: new Date(), updatedAt: new Date() },
        {username: 'Tyler', email: 'tyler@tyler.com', hashedPassword: '$2a$08$lzDD4Zd0h10zBRIrSKbBleEQwhyYgvxxDjORfNLlijtpPXrgHYIvq', profilePictureId: null, createdAt: new Date(), updatedAt: new Date() },
        {username: 'Keith', email: 'keith@keith.com', hashedPassword: '$2a$08$WA4i3EUIry0P3IUWduDrtuR/hHZIVE82OA2h/hq4kDChleOgJyT2G', profilePictureId: null, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};