# txtgrow
A simple jQuery Plugin that initialises textareas that grow as your text overflows.
## Documentation
Just download and include _txtgrow.js_ in your project
Call method **_initgrowth([options])_** on the textarea you want to handle overflows, like

    $("#elementid").initgrowth();
and voila!, you are all set.
####initgrowth()
By default, the textarea will span a width of _200px_ but the optional argument **options** takes width as a parameter :
 
    $("#elementid").initgrowth({width: _width_ });
