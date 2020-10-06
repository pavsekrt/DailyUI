
function set_open_window(win) {
    if (win == 'sign-up') {
        document.getElementById('sign-in').style.cssText = 'display: none;';
        document.getElementById('sign-up').style.cssText = 'display: flex;';
    } else if (win == 'sign-in') {
        document.getElementById('sign-in').style.cssText = 'display: flex;';
        document.getElementById('sign-up').style.cssText = 'display: none;';
    }
}

function msg_alert(msg) {
    alert(msg + ' clicked!')
}
