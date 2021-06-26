let currentPhoto = 0;

let data = [{
        photo: 'photos/1.jpg',
        title: 'At the beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        photo: 'photos/2.jpg',
        title: 'Abow the clouds',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        photo: 'photos/3.jpg',
        title: 'Under the see',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        photo: 'photos/4.jpg',
        title: 'In the forest',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        photo: 'photos/5.jpg',
        title: 'Look to the mountain',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        photo: 'photos/6.jpg',
        title: 'Winter climbing',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
        photo: 'photos/7.jpg',
        title: 'Palm tree summer',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        photo: 'photos/8.jpg',
        title: 'Green mountain',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
]

function loadPhoto(photoNumber) {
    $('#photo').attr('src', data[currentPhoto].photo);
    $('#photo-title').text(data[currentPhoto].title);
    $('#photo-description').text(data[currentPhoto].description);
}

loadPhoto(currentPhoto);

$('.right-arrow').click(function() {
    currentPhoto++;
    loadPhoto(currentPhoto);
});

$('.left-arrow').click(function() {
    currentPhoto--;
    loadPhoto(currentPhoto);
});

let thumbnailCounter;
let fileName = 1;
for (thumbnailCounter = 0; thumbnailCounter < 8; thumbnailCounter++) {
    $('#thumbnails').append('<div data-number="' + thumbnailCounter + '" class="thumbnail-box"><img class="thumbnail" src="photos/' + fileName + '.jpg"></div>');
    fileName++;
};

$('.thumbnail-box').click(function() {
    currentPhoto = $(this).attr('data-number');
    loadPhoto();
});