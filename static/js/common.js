function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
if(inIframe()) {
} else {
    $('.container-fluid').remove();
    $('.lineups-container').toggleClass('container');
    $('.lineups-container').toggleClass('container-iframe');
}
