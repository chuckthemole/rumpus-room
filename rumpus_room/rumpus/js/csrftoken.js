import React from 'react';

export default function CSRFToken() {

    var csrftoken = getCookie('csrftoken');
    if(csrftoken === null) {
        csrftoken = '';
    }

    // can put this in a common helper location later
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
}