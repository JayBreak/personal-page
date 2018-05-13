/*
 * Add your JavaScript to this file to complete the assignment.
 */

function hide(e) {
     e.classList.add("hidden");
}

function unHide(e) {
     e.classList.remove("hidden");
}

function updateDOM(str) {
     // str is a search query
     // Get an array of all tweet elements
     var arr = document.getElementsByClassName('twit');

     // Toggle hidden on all elements that don't contain the search query
     for (var i = 0; i < arr.length; i++) {
          // Search text content for query. If it doesn't contain the query, make the element invisible!
          if (document.getElementsByClassName('twit')[i].children[1].textContent.indexOf(str) < 0) {
               hide(document.getElementsByClassName('twit')[i]);
          } else {
               unHide(document.getElementsByClassName('twit')[i]);
          }
     }
}

function openModal(event) {

       var modal_backdrop = document.getElementById('modal-backdrop');
       var twit_modal = document.getElementById('create-twit-modal');

       modal_backdrop.classList.remove('hidden');
       twit_modal.classList.remove('hidden');

}

function closeModal(event) {

       var modal_backdrop = document.getElementById('modal-backdrop');
       var twit_modal = document.getElementById('create-twit-modal');

       modal_backdrop.classList.add('hidden');
       twit_modal.classList.add('hidden');

        clearNewTwit();
}

function publishTwit(event) {


       var twit_text = document.getElementById('twit-text-input').value;
       var author = document.getElementById('twit-attribution-input').value;

       if (twit_text == "" || author=="" )
       {
            alert("Missing Text!");
       }
       else
       {

              var twitContainer = document.getElementsByClassName('twit-container')[0];
              var newTwit = formatNewTwit(author, twit_text);

              twitContainer.appendChild(newTwit);

              closeModal();


       }


}

function formatNewTwit(username,twitText) {
       var article = document.createElement('article');
       article.classList.add('twit');

       var div = document.createElement('div');
       div.classList.add('twit-icon');

       article.appendChild(div);

       var i = document.createElement('i');
       i.classList.add('fas','fa-bullhorn');

       div.appendChild(i);

       var twit_content = document.createElement('div');
       twit_content.classList.add('twit-content');

       article.appendChild(twit_content);

       var twit_text = document.createElement('p');
       twit_text.classList.add('twit-text');
       twit_text.innerHTML = twitText;

       twit_content.appendChild(twit_text);

       var twit_user = document.createElement('p');
       twit_user.classList.add('twit-attribution');

       twit_content.appendChild(twit_user);

       var a = document.createElement('a');
       //a.href;
       a.innerHTML = username;

       twit_user.appendChild(a);

       return article;

}

function clearNewTwit() {
     var text_input = document.getElementById('twit-text-input');
     var at_input =  document.getElementById('twit-attribution-input');

     text_input.value = "";
     at_input.value = "";
}

function beginSearch(event) {
     updateDOM(document.getElementById('navbar-search-input').value);
}

function updateSeach(event) {
     //Searched Everytime you hit enter
     /*if (event.keyCode === 13) {
          beginSearch();
     }*/

     //Searches Evertime a new key is input
      beginSearch();
}

function twitHandler (event) {

     if (event.keyCode === 13) {
          publishTwit();
     }
}

// Event Listeners
var createTwit = document.getElementById('create-twit-button');
createTwit.addEventListener('click', openModal);

var cancelBtn = document.getElementsByClassName('modal-cancel-button')[0];
cancelBtn.addEventListener('click', closeModal);

var xBtn = document.getElementsByClassName('modal-close-button')[0];
xBtn.addEventListener('click', closeModal);

var acceptBtn = document.getElementsByClassName('modal-accept-button')[0];
acceptBtn.addEventListener('click', publishTwit);

var searchBtn = document.getElementById('navbar-search-button');
searchBtn.addEventListener('click', beginSearch);

var searchBox = document.getElementById('navbar-search-input');
searchBox.addEventListener('keyup', updateSeach);

var twitBox = document.getElementById('twit-text-input');
twitBox.addEventListener('keyup', twitHandler);

var twitAttripution = document.getElementById('twit-attribution-input');
twitAttripution.addEventListener('keyup', twitHandler);
