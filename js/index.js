$(function (){
    var E = window.wangEditor
    var editor = new E('#div-demo')

    editor.config.uploadImgShowBase64 = true
    editor.config.height = 800

    editor.create()
});
