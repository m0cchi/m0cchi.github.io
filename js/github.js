//github api util
//author: m0cchi
var github = github || {};
(function(user){
    var URL ={
        'users':'https://api.github.com/users/' + user,
        'gist_all':'https://api.github.com/users/' + user + '/gists'
    }

    github.users = function (func){
        github.call(URL.users,func);
    }

    github.gist_all = function (func){
        github.call(URL.gist_all,func)
    }

    github.call = function (url,func){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200){
                func(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(null);
    }
})('m0cchi');
