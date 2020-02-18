// This is the link to the Demo

function demo(stateWrapper, ready) {
    window.open("https://manager.labs.ai/?apiUrl=https%3A%2F%2Fapp.labs.ai"); //Replace URL to change demo link
    ready();
}


var rollbackTo = false;
var originalState = false;

function storeState(stateWrapper) {
    rollbackTo = stateWrapper.current;
    console.log("storeState called: ", rollbackTo);
}

function rollback(stateWrapper) {
    console.log("rollback called: ", rollbackTo, originalState);
    console.log("answers at the time of user input: ", stateWrapper.answers);
    if (rollbackTo != false) {
        if (originalState == false) {
            originalState = stateWrapper.current.next;
            console.log('stored original state');
        }
        stateWrapper.current.next = rollbackTo;
        console.log('changed current.next to rollbackTo');
    }
}

function restore(stateWrapper) {
    if (originalState != false) {
        stateWrapper.current.next = originalState;
        console.log('changed current.next to originalState');
    }
}

jQuery(function ($) {
    var convForm = $('#eddi-chat-sample').convform({
        placeHolder: 'Type your response...',
    });
    console.log(convForm);
});