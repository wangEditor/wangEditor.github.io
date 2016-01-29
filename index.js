$(function (){

    var editor = new wangEditor('divDemo');

    editor.config.uploadImgUrl = '/upload';

    // 设置表情
    editor.config.emotions = {
        'default': {
            title: '默认',
            size: 18,
            imgs: [
                './static/emotions/default/1s.gif',
                './static/emotions/default/2.gif',
                './static/emotions/default/3.gif',
                './static/emotions/default/4.gif',
                './static/emotions/default/5.gif',
                './static/emotions/default/6.gif',
                './static/emotions/default/7.gif',
                './static/emotions/default/8.gif',
                './static/emotions/default/9.gif',
                './static/emotions/default/10.gif',
                './static/emotions/default/11.gif',
                './static/emotions/default/12.gif',
                './static/emotions/default/13.gif',
                './static/emotions/default/14.gif',
                './static/emotions/default/15.gif',
                './static/emotions/default/16.gif',
                './static/emotions/default/17.gif',
                './static/emotions/default/18.gif',
                './static/emotions/default/19.gif',
                './static/emotions/default/20.gif'
            ]
        },
        'jinxing': {
            title: '金星',
            size: 50,
            imgs: [
                './static/emotions/jinxing/1.gif',
                './static/emotions/jinxing/2.gif',
                './static/emotions/jinxing/6.gif'
            ]
        }
    };

    editor.create();
	
});