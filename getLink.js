/*
 * Get the current Sadler url
 */

function getLink(dining_hall) {

    var jsdom = require('jsdom');

    if (dining_hall == 'sadler')
        the_url = 'https://dining.wm.edu/dining-choices/resident/sadler.html'
    else
        the_url = 'https://dining.wm.edu/dining-choices/resident/commons-dining-hall.html'

    jsdom.env({
        url: the_url,
        scripts: ['http://code.jquery.com/jquery.js'],
        done: function(errors, window) {
            $ = window.$;
            
            var links = [];
            $('a').each(function() {
                links.push($(this).attr('href'));
            })
            for (var i in links) {
                if (links[i].indexOf('/images/Weekly') > -1) {
                    return 'https://dining.wm.edu/' + links[i];
                };
            };          
        }
    })
}

