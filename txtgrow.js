(function($){
	$.fn.initgrowth=function(options){
		domelem = this.filter("textarea");
		var settings = $.extend({
            width:200
        }, options );
		domelem.addClass('txtgrowjs');
		domelem.attr('rows',1);
		domelem.css({'resize':'none','height':4*domelem.height()/5,'overflow':'hidden','word-wrap':'break-word','white-space':'pre-wrap'});
		$('body').append('<div id="'+domelem.attr('id')+'_ghost"></div>');
		$('#'+domelem.attr('id')+'_ghost').css({'z-index':-1,'font-size':domelem.css('font-size'),'font-family':domelem.css('font-family'),'position':'absolute','left':domelem.offset().left,'top':domelem.offset().top,'width':settings.width,'min-height':domelem.height(),'word-wrap':'break-word','white-space':'pre-wrap','padding':domelem.css('padding-top')+' '+domelem.css('padding-right')+' '+domelem.css('padding-bottom')+' '+domelem.css('padding-left'),'border':domelem.css('border')});
		
		return this.css({width:settings.width});
	}
	
	$('.txtgrowjs').live('keypress', function (e) 
	{
		var id=$(this).attr('id');
		var c = String.fromCharCode(e.which);
		$('#'+id+'_ghost').append(c);
		$(this).css('height',  $('#'+id+'_ghost').height());
	
	});


	$('.txtgrowjs').live('keydown', function (e)
    {
		var id=$(this).attr('id');
        str = $(this).val(); 
        if (e.which == 8 && str != '') 
		{

            str = str.substring(0, str.length - 1);
			$('#'+id+'_ghost').empty().append(str);
            $(this).css('height', $('#'+id+'_ghost').height());
		}
    });
	
	$('.txtgrowjs').live('paste', function ()
	{
		var elem = $(this);
		var id=elem.attr('id');
		setTimeout(function()
		{
			str = elem.val();
			$('#'+id+'_ghost').append(str);
			elem.css('height', $('#'+id+'_ghost').height());
		},5);
		
	});
	
	$('.txtgrowjs').live('select',function()
	{
		var elem = $(this);
		var id=elem.attr('id');
		elem.keyup(function()
		{
			setTimeout(function()
			{
				str=elem.val();
				$('#'+id+'_ghost').empty().append(str);
				elem.css('height', $('#'+id+'_ghost').height());
			},5);
		});
	});
	
	
}(jQuery));



