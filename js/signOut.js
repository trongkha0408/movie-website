$(document).ready(function() {
    $('#signout').on('click', function(){
        $.post('', {signOut: true}, function(){
        })
    })
})