/**
 * Created by 224 on 2016/1/12.
 */
(function($){
    $.fn.extend({
        showBtn: function(thisObj){
            if ($(window).scrollTop() > $(window).height() / 4) {
                $(thisObj).fadeIn();
            }else{
                $(thisObj).fadeOut();
            }
        },
        backTop: function (config) {
            var thisObj = this;
            var speed = 1000;
            if (typeof config != 'undefined' && typeof config.speed != 'undefined') {
                speed = config.speed;
            }
            $(this).showBtn(thisObj);
            $(window).scroll(function() {
                $(this).showBtn(thisObj);
            });
            $(this).click(function(){
                $('html,body').animate({'scrollTop': 0}, speed, 'swing');
            });
        }
    });
})(jQuery);
