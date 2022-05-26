function openAccordion(id) {
    let x = document.getElementById(id);

    if (x.style.visibility == 'visible') {
        x.style.visibility = 'hidden';
        x.style.overflow = 'hidden';
        x.style.maxHeight = 0;
        x.style.display = 'none';


    } else {
        x.style.visibility = 'visible';
        x.style.overflow = 'visible';
        x.style.maxHeight = 'none';
        x.style.display = 'contents';

    }

}

window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }