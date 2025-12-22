$(document).ready(function() {

    $('.question').click(function() {
        $(this).next('.answer').toggle(300); 
        $(this).toggleClass('expanded');
    });

    $('.question').hover(
        function() {
            $(this).addClass('question-hover');
        },
        function() {
            $(this).removeClass('question-hover');
        }
         
    );

});
