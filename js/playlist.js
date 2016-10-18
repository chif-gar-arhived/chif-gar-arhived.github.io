//<![CDATA[
$(document).ready(function(){

    var cssSelector = {
        jPlayer: "#jquery_jplayer_1", 
        cssSelectorAncestor: "#jp_container_1"
    };

    var playlist = [
        // {
        //     author:"TSP",
        //     title:"Cro Magnon Man",
        //     discription: "Текст песни / описание",
        //     mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
        //     oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
        // },

        {
            author:"Чиф-Гар!",
            title:"Волосы колосья (live)",
            discription: "Текст песни / описание",
            mp3:"../audio/Чиф-Гар!-Волосы-колосья.mp3",
        },

        {
            author:"Чиф-Гар!",
            title:"Хамери Джо (live)",
            discription: "Текст песни / описание",
            mp3:"../audio/Чиф-Гар!-Хамери-Джо.mp3",
        },
        
        {
            author:"Чиф-Гар!",
            title:"Волосы колосья (live)",
            discription: "Текст песни / описание",
            mp3:"../audio/Чиф-Гар!-Волосы-колосья.mp3",
        },

        {
            author:"Чиф-Гар!",
            title:"Хамери Джо (live)",
            discription: "Текст песни / описание",
            mp3:"../audio/Чиф-Гар!-Хамери-Джо.mp3",
        },

        {
            author:"Чиф-Гар!",
            title:"Волосы колосья (live)",
            discription: "Текст песни / описание",
            mp3:"../audio/Чиф-Гар!-Волосы-колосья.mp3",
        },

        {
            author:"Чиф-Гар!",
            title:"Хамери Джо (live)",
            discription: "Текст песни / описание",
            mp3:"../audio/Чиф-Гар!-Хамери-Джо.mp3",
        },

    ];

    var options = {
        swfPath: "js",
        supplied: "oga, mp3",
        wmode: "window",
        smoothPlayBar: false,
        keyEnabled: true
    };

    new jPlayerPlaylist(cssSelector, playlist, options);
});
//]]>