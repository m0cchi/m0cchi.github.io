var index = index || {};
(function(){
    document.addEventListener('DOMContentLoaded', init, false);
    var inner,topPane;
    function init(){
        topPane = document.getElementById('top-pane');
        inner = document.createElement('div');
        inner.style.width = 'calc(100% - 20px)';
        inner.style.height = 'calc(100% - 20px)';
        inner.style.padding = '10px';
        topPane.appendChild(inner);
        github.users(showProfile);
    }

    function showProfile(users){
        var avatar_url = users.avatar_url;
        var avatar = document.createElement('img');
        avatar.src = avatar_url;
        avatar.style.width = 'auto';
        avatar.style.height = '100%';
        inner.appendChild(avatar);
    }
})();