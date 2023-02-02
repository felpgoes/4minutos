(function () {
    //nCage 
    var main = function ($) {

        var self = $.nCage = new function () { };

        $.extend(self, {
            nCageImgs: [
                'https://img.r7.com/images/croacia-x-brasil-copa-do-mundo-09122022145122740?dimensions=771x420&no_crop=true',
                'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7d847935bd3ad1ed/639351f602b9015c9dff3421/GettyImages-1447951636.jpg',
                'https://img.r7.com/images/croacia-x-brasil-copa-do-mundo-09122022145013908?dimensions=771x420&&amp;&amp;resize=771x420&amp;crop=1280x697+0+101&amp;&amp;resize=771x420&amp;crop=1280x697+0+101',
                'https://www.oitomeia.com.br/wp-content/uploads/2022/12/Brasil-4.jpg',
                'https://s2.glbimg.com/-VvRCkB2g6Mhd-Cl9M0CQgMXrEg=/0x0:1599x897/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/w/WZCfQwTUeRjfMEjP871Q/gol8j.jpg',
                'https://f.i.uol.com.br/fotografia/2022/12/10/16706922006394bd685b1fd_1670692200_3x2_md.jpg',
                'https://www.otempo.com.br/image/contentid/policy:1.2780617:1670703082/croacia-x-brasil-jpg.jpg',
                'https://www.redebrasilatual.com.br/wp-content/uploads/2022/12/BrasilxCroacia_Fifa.jpg',
                'https://static.dw.com/image/64051338_1006.jpg',
                'http://m.lance.com.br/files/admin_slider_thumbnail/uploads/2022/12/09/6393768019a14.jpeg',
            ],
            handleImages: function (lstImgs, time) {
                $.each($('img'), function (i, item) {
                    //Skip if image is already replaced
                    if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                        var h = $(item).height();
                        var w = $(item).width();

                        //If image loaded
                        if (h > 0 && w > 0) {
                            //Replace
                            $(item).css('width', w + 'px').css('height', h + 'px');
                            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                        }
                        else {
                            //Replace when loaded
                            $(item).load(function () {
                                //Prevent 'infinite' loop
                                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                    var h = $(item).height();
                                    var w = $(item).width();
                                    $(item).css('width', w + 'px').css('height', h + 'px');
                                    $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                                }
                            });
                        }
                    }
                });

                //Keep replacing
                if (time > 0)
                    setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        });

        //Run on jQuery ready
        $(function () {
            self.handleImages(self.nCageImgs, 3000);
        });
    };

    //Method to load jQuery
    function loadJS(src, callback) {
        var s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function () {
            var state = s.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                callback.done = true;
                callback();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(s);
    }

    //Add jQuery if not present, then run main
    if (typeof jQuery == 'undefined') {
        loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function () {
            jQuery.noConflict();
            main(jQuery);
        });
    } else {
        main(jQuery);
    }
})();
