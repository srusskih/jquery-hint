///////////////////////////////////////////////////////\\
///////////////////////////////////////////////////////\\
//***************************************************\\\\
//                    hint v1.0                      \\\\
//                ExpBuilder.com                     \\\\
//                elkadrey@gmail.com                 \\\\
//              Auther: Ahmed Elkadrey               \\\\
//***************************************************\\\\
///////////////////////////////////////////////////////\\
///////////////////////////////////////////////////////\\

(function( $ ){

$.fn.hint = function(options){
    var Config = {
                   backgroundcolor: "#000000",
                   color          : '#f1f1f1',
                   border         : '#e1e1e1',
                   size           : 11,
                   curved         : 10,
                   width          : 400,
                   font           : 'tahoma',
                   opacity        : 80,
                   img            : 'hint.png',
                   attr           : 'title'
                };
    if(options)
    {
		jQuery.extend(Config, options);
	};

    function brwstester()
    {
        return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
    }

    var counts = 0;
    this.each(function()
    {
        counts++;
        var hints = $(this).attr(Config.attr);
        var optcy = Config.opacity / 100;
        $("body").append('<div id="hints_expbuilder_hiddendata_' + counts + '" style="filter:alpha(opacity=' + Config.opacity + ');opacity: ' + optcy + ';-moz-opacity: ' + optcy + ';font-size: ' + Config.size + 'px;font-family: ' + Config.font + ';-moz-border-radius: ' + Config.curved + 'px;-webkit-border-radius: ' + Config.curved + 'px;-khtml-border-radius: ' + Config.curved + 'px;border-radius: ' + Config.curved + 'px;padding: 0 ' + Config.curved + 'px 0 ' + Config.curved + 'px;border: 3px solid ' + Config.border + ';background-color: ' + Config.backgroundcolor + ';color: ' + Config.color + ';z-index: 550;position: absolute;display: none;width: ' + Config.width + 'px;"><table><tr><td><img src="' + Config.img + '" alt="" /></td><td>' + hints + '</td></tr></table></div>');
        $(this).attr('ids', counts).attr('title', '').bind('mousemove', function(e)
        {
            var top = $(this).offset().top - 30;
            if(top <= (brwstester().scrollTop))
            {
                top +=50;
            }
            var left = e.pageX + 10;
            if((left + Config.width) >= (brwstester().scrollLeft + screen.width))
            {
                left -=(Config.width + 20);
            }

            $("#hints_expbuilder_hiddendata_" + $(this).attr('ids')).css({top: (top) + "px", left: (left) + "px"}).show();
        }).mouseleave(function()
        {
            $("#hints_expbuilder_hiddendata_" + $(this).attr('ids')).hide();
        });
    });
}

})( jQuery );
