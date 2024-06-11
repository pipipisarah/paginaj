function showMessage() {
    hideAll();
    document.getElementById('message').style.display = 'block';
}

function showGallery() {
    hideAll();
    document.getElementById('gallery').style.display = 'block';
}

function showContact() {
    hideAll();
    document.getElementById('contact').style.display = 'block';
}

function hideAll() {
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
}