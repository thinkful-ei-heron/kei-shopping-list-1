'use strict';
$(function(){
  //get the form ID and create submit function (because it is a form, we use submit)
  $('#js-shopping-list-form').submit(function(event) {
    //prevent default behavior of form
    event.preventDefault();
    //grab the user input value
    console.log('hi');
    const userInput = $(this).find('#shopping-list-entry').val();
    //find the unordered list ('shopping-list') and then append to it
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
    //on click of check, strikethrough
    $('.shopping-item-toggle').on('click', function() {
      $(this).closest('li').toggleClass('shopping-item shopping-item__checked');
    });
    //on click of remove, remove
    $('.shopping-item-delete').on('click', function() {
      $(this).closest('li').remove();
    });
  });
});