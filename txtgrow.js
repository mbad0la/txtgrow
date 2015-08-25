(function($){
	$.fn.initgrowth=function(){
		domelem = this.filter("textarea");
		domelem.addClass('txtgrowjs');
		domelem.css('font-size','18px');
		domelem.css({'resize':'none','height':domelem.height()/2,'font-family':'Helvetica','overflow':'hidden','word-wrap':'break-word','white-space':'pre-wrap'});
		$('body').append('<div id="'+domelem.attr('id')+'_ghost"></div>');
		$('#'+domelem.attr('id')+'_ghost').css({'z-index':-1,'font-size':'18px','font-family':'Helvetica','position':'absolute','left':domelem.offset().left,'top':domelem.offset().top,'width':domelem.width(),'min-height':domelem.height(),'word-wrap':'break-word','white-space':'pre-wrap','padding':2,'border':'1px solid black'});
		
		return this;
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
	
	
}(jQuery));



