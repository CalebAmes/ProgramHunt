// 'use strict';
// const { response } = require('express');
// const { User } = require('../../db/models');
// const { Program } = require('../../db/models');



// User.findByPk({
//   where: {
//     username: 'Tyler'
//   }
// }).then(result => {
//   dataTyler = response.data
//   return dataTyler
// })
// console.log(dataTyler)

// const keith = User.findOne({
//   where: {
//     username: 'Keith'
//   }
// })
// const emad = User.findOne({
//   where: {
//     username: 'Emad'
//   }
// })
// const caleb = User.findOne({
//   where: {
//     username: 'Caleb'
//   }
// })

// const termScout = Program.findOne({
//   where: {
//     name: 'TermScout'
//   }
// })

// const applePie = Program.findAll({
//   where: {
//     name: "Appy Pie Chatbot"
//   }
// })

// const wellSpeak = Program.findAll({
//   where: {
//     name: "WellSpeak"
//   }
// })

// const scanThing = Program.findAll({
//   where: {
//     name: "Scan Thing"
//   }
// })

// const planMesh = Program.findAll({
//   where: {
//     name: "PlanMesh"
//   }
// })

// const kumu = Program.findAll({
//   where: {
//     name: "Kumu"
//   }
// })

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Comments', [
//           {userId: tyler.id, programId:termScout.id, comment:"This is Smart!"},
//           {userId: tyler.id, programId:applePie.id, comment:"Wow, Thats Cool!"},
//           {userId: tyler.id, programId:wellSpeak.id, comment:"Interesting."},
//           {userId: tyler.id, programId:scanThing.id, comment:"Thats Awesome!"},
//           {userId: keith.id, programId:termScout.id, comment:"Super Cool."},
//           {userId: keith.id, programId:scanThing.id, comment:"I would definately use this!"},
//           {userId: keith.id, programId:planMesh.id, comment:"This will make planning things with friends so much easier!"},
//           {userId: keith.id, programId:kumu.id, comment:"Simple, clean, well done!"},
//           {userId: emad.id, programId:termScout.id, comment:"I like it, seems trustworthy."},
//           {userId: emad.id, programId:scanThing.id, comment:"Super creative!"},
//           {userId: emad.id, programId:planMesh.id, comment:"Thats really cool!"},
//           {userId: emad.id, programId:kumu.id, comment:"Wow, thats awesome!"},
//           {userId: caleb.id, programId:termScout.id, comment:"I'd use it!"},
//           {userId: caleb.id, programId:wellSpeak.id, comment:"Nice Job!"},
//           {userId: caleb.id, programId:scanThing.id, comment:"Awesome job!"},
//           {userId: caleb.id, programId:planMesh.id, comment:"I love this! Cant wait to give it a try."},
//       ], {});
//     },

//     down: (queryInterface, Sequelize) => {
//         return queryInterface.bulkDelete('Comments', null, {});
//     }
//   };
