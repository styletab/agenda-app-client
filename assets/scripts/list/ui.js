'use strict';

//const app = require('../app');

const showAllListsTemplate = require('../templates/get-all-lists.handlebars');
const showNewListTemplate = require ('../templates/get-new-list.handlebars');

// for getting all lists

const myListsSuccess = (data) => {
  console.log('list success data is', data);
  let lists = data;
  // console.log(data);
  $(".content").html(showAllListsTemplate(lists));
};

// for creating a list

const proceedToCreateList = () => {
  $('#new-list-form').removeClass('hide');
};


const newListSuccess = (data) => {
//  console.log('new list data is', data);
//  app.user = data.user;
  let newList = data.list;
  console.log('newlist data is', newList);
  $('#new-list-form').addClass('hide');
  $(".content").html(showNewListTemplate(newList));
};

const failure = () => {
  $('.pw-error').removeClass('hide');
  setTimeout(function() {
   $('.pw-error').fadeOut();
 }, 800);
};


// const proceedToLogin = () => {
//   $('.intro-wrapper').addClass('hide');
//   $('.login-wrapper').removeClass('hide');
// };


module.exports = {
  proceedToCreateList,
  myListsSuccess,
  newListSuccess,
  failure
};
