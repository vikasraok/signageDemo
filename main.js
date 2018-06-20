(function () {
    'use strict';

    var videoArray = ["1.mp4", "2.mp4"];
    var index = 0;
    $(document).ready(function () {
        $('#player').on('ended', function () {
            if (index >= videoArray.length - 1)
                index = 0;
            else
                index++;
            $('#player source').attr('src', "videos/" + videoArray[index]);
            $("#player")[0].load();
        })
    });
})()
