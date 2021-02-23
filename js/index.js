$(function (){
    var E = window.wangEditor
    var editor = new E('#div-demo')

    editor.config.uploadImgShowBase64 = true
    editor.config.height = 800

    editor.create()

    var editor_en = new E('#div-demo1')

    editor_en.config.uploadImgShowBase64 = true
    editor_en.config.height = 800
    
    editor_en.config.lang = 'en'
    editor_en.i18next = window.i18next

    editor_en.create()
    
});
