$(document).ready(function() {
    $('.delFilm').on('click', function(){
        let MaF = $(this).attr('id');
        $.post('home.php', {MaF: MaF}, function(){
            window.location.reload();
        })
    })
    $('.delComment').on('click', function(){
        let MaBL = $(this).attr('id');
        $.post('comment.php', {MaBL: MaBL}, function(){
            window.location.reload();
        })
    })
    $('.delUser').on('click', function(){
        let MaUser = $(this).attr('id');
        $.post('user.php', {MaUser: MaUser}, function(){
            window.location.reload();
        })
    })
    $('.delGenre').on('click', function(){
        let MaTL = $(this).attr('id');
        $.post('', {ma: MaTL}, function(){
            window.location.reload();
        })
    })
    $('#signoutAdmin').on('click', function(){
        $.post('', {signOutAdmin: true}, function(){
        })
    })
})