var define;

(function (factory) {
    if (typeof define === 'function') {
        if (define.amd) {
            // AMD模式
            define('wangEditor', ["jquery"], factory);
        } else if (define.cmd) {
            // CMD模式
            define(function (require, exports, module) {
                return factory;
            });
        } else {
            // 全局模式
            factory(window.jQuery);
        }
    } else {
        // 全局模式
        factory(window.jQuery);
    }
})(function($){
    
    // 验证是否引用jquery
    if (!$ || !$.fn || !$.fn.jquery) {
        alert('在引用wangEditor.js之前，先引用jQuery，否则无法使用 wangEditor');
        return;
    }

    // 定义扩展函数
    var _e = function (fn) {
        var E = window.wangEditor;
        if (E) {
            // 执行传入的函数
            fn(E, $);
        }
    };
// 定义构造函数
(function (window, $) {
    if (window.wangEditor) {
        // 重复引用
        return;
    }

    // 编辑器（整体）构造函数
    var E = function (elemId) {

        // ---------------获取基本节点------------------
        var $elem = $('#' + elemId);
        if ($elem.length !== 1) {
            return;
        }
        var nodeName = $elem[0].nodeName;
        if (nodeName !== 'TEXTAREA' && nodeName !== 'DIV') {
            // 只能是 textarea 和 div ，其他类型的元素不行
            return;   
        }
        this.valueNodeName = nodeName.toLowerCase();
        this.$valueContainer = $elem;

        // 记录 elem 的 prev 和 parent（最后渲染 editor 要用到）
        this.$prev = $elem.prev();
        this.$parent = $elem.parent();

        // ------------------初始化------------------
        this.init();
    };

    E.fn = E.prototype;


    E.$body = $('body');
    E.$window = $(window);
    E.userAgent = navigator.userAgent;
    E.getComputedStyle = window.getComputedStyle;
    E.w3cRange = typeof document.createRange === 'function';
    E.website = 'wangEditor.github.io';
    E.docsite = 'wangEditor.github.io/doc/';

    // 暴露给全局对象
    window.wangEditor = E;

    // 注册 ready 事件，用于用户自定义插件
    // 用户在引用 wangEditor.js 之后，还可以通过 E.ready() 注入自定义函数，
    // 该函数将会在 editor.create() 方法的最后一步执行
    E.ready = function (fn) {
        if (!E._readys) {
            E._readys = [];
        }

        if (typeof fn === 'function') {
            E._readys.push(fn);
        }
    };

})(window, $);
// editor 绑定事件
_e(function (E, $) {

    E.fn.init = function () {

        // 初始化 editor 默认配置
        this.initDefaultConfig();

        // 增加container
        this.addEditorContainer();

        // 增加编辑区域
        this.addTxt();

        // 增加menuContainer
        this.addMenuContainer();

        // 初始化菜单集合
        this.menus = {};

        // 初始化commandHooks
        this.commandHooks();

    };

});
// editor api
_e(function (E, $) {

    // 预定义 ready 事件
    E.fn.ready = function (fn) {

        if (!this.readyFns) {
            this.readyFns = [];
        }

        this.readyFns.push(fn);
    };

    // 处理ready事件
    E.fn.readyHeadler = function () {
        var fns = this.readyFns;

        while (fns.length) {
            fns.shift().call(this);
        }
    };

    // 更新内容到 $valueContainer
    E.fn.updateValue = function () {
        var editor = this;
        var $valueContainer = editor.$valueContainer;
        var $txt = editor.txt.$txt;

        if ($valueContainer === $txt) {
            // 传入生成编辑器的div，即是编辑区域
            return;
        }

        var value = $txt.html();
        $valueContainer.val(value);
    };

    // 获取初始化的内容
    E.fn.getInitValue = function () {
        var editor = this;
        var $valueContainer = editor.$valueContainer;
        var currentValue = '';
        var nodeName = editor.valueNodeName;

        if (nodeName === 'div') {
            currentValue = $valueContainer.html();
        } else if (nodeName === 'textarea') {
            currentValue = $valueContainer.val();
        }

        return currentValue;
    };

    // 触发菜单updatestyle
    E.fn.updateMenuStyle = function () {
        var menus = this.menus;

        $.each(menus, function (k, menu) {
            menu.updateSelected();
        });
    };

    // 除了传入的 menuIds，其他全部启用
    E.fn.enableMenusExcept = function (menuIds) {
        // menuIds参数：支持数组和字符串
        menuIds = menuIds || [];
        if (typeof menuIds === 'string') {
            menuIds = [menuIds];
        }

        $.each(this.menus, function (k, menu) {
            if (menuIds.indexOf(k) >= 0) {
                return;
            }
            menu.disabled(false);
        });
    };

    // 除了传入的 menuIds，其他全部禁用
    E.fn.disableMenusExcept = function (menuIds) {
        // menuIds参数：支持数组和字符串
        menuIds = menuIds || [];
        if (typeof menuIds === 'string') {
            menuIds = [menuIds];
        }

        $.each(this.menus, function (k, menu) {
            if (menuIds.indexOf(k) >= 0) {
                return;
            }
            menu.disabled(true);
        });
    };

    // 隐藏所有 dropPanel droplist modal
    E.fn.hideDropPanelAndModal = function () {
        var menus = this.menus;

        $.each(menus, function (k, menu) {
            var m = menu.dropPanel || menu.dropList || menu.modal;
            if (m && m.hide) {
                m.hide();
            }
        });
    };

});
// selection range API
_e(function (E, $) {

    // 用到 w3c range 的函数，如果检测到浏览器不支持 w3c range，则赋值为空函数
    var ieRange = !E.w3cRange;
    function emptyFn() {}

    // 设置或读取当前的range
    E.fn.currentRange = function (cr){
        if (cr) {
            this._rangeData = cr;
        } else {
            return this._rangeData;
        }
    };

    // 将当前选区折叠
    E.fn.collapseRange = function (range, opt) {
        // opt 参数说明：'start'-折叠到开始; 'end'-折叠到结束
        opt = opt || 'end';
        opt = opt === 'start' ? true : false;

        range = range || this.currentRange();
        range.collapse(opt);

        // 保存
        this.currentRange(range);
    };

    // 获取选区的文字
    E.fn.getRangeText = ieRange ? emptyFn : function (range) {
        range = range || this.currentRange();
        if (!range) {
            return;
        }
        return range.toString();
    };

    // 获取选区对应的DOM对象
    E.fn.getRangeElem = ieRange ? emptyFn : function (range) {
        range = range || this.currentRange();
        var dom = range.commonAncestorContainer;

        if (dom.nodeType === 1) {
            return dom;
        } else {
            return dom.parentNode;
        }
    };

    // 选区内容是否为空？
    E.fn.isRangeEmpty = ieRange ? emptyFn : function (range) {
        range = range || this.currentRange();

        if (range && range.startContainer) {
            if (range.startContainer === range.endContainer) {
                if (range.startOffset === range.endOffset) {
                    return true;
                }
            }
        }

        return false;
    };

    // 保存选区数据
    E.fn.saveSelection = ieRange ? emptyFn : function (range) {
        var self = this,
            _parentElem,
            selection,
            txt = self.txt.$txt.get(0);

        if (range) {
            _parentElem = range.commonAncestorContainer;
        } else {
            selection = document.getSelection();
            if (selection.getRangeAt && selection.rangeCount) {
                range = document.getSelection().getRangeAt(0);
                _parentElem = range.commonAncestorContainer;
            }
        }

        // 确定父元素一定要包含在编辑器区域内
        if (_parentElem && (txt.contains(_parentElem) || txt === _parentElem) ) {
            // 保存选择区域
            self.currentRange(range);
        }
    };

    // 恢复选中区域
    E.fn.restoreSelection = ieRange ? emptyFn : function (range) {
        var selection;

        range = range || this.currentRange();

        if (!range) {
            return;
        }

        selection = document.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };

    // 根据elem恢复选区
    E.fn.restoreSelectionByElem = ieRange ? emptyFn : function (elem, opt) {
        // opt参数说明：'start'-折叠到开始，'end'-折叠到结束，'all'-全部选中
        if (!elem) {
            return;
        }
        opt = opt || 'end'; // 默认为折叠到结束

        // 根据elem获取选区
        this.setRangeByElem(elem);

        // 根据 opt 折叠选区
        if (opt === 'start') {
            this.collapseRange(this.currentRange(), 'start');
        }
        if (opt === 'end') {
            this.collapseRange(this.currentRange(), 'end');
        }
        
        // 恢复选区
        this.restoreSelection();
    };

    // 初始化选区
    E.fn.initSelection = ieRange ? emptyFn : function () {
        var editor = this;
        if( editor.currentRange() ){
            //如果currentRange有值，则不用再初始化
            return;
        }

        var range;
        var $txt = editor.txt.$txt;
        var $firstChild = $txt.children().first();
        
        if ($firstChild.length) {
            editor.restoreSelectionByElem($firstChild.get(0));
        }
    };

    // 根据元素创建选区
    E.fn.setRangeByElem = ieRange ? emptyFn : function (elem) {
        var editor = this;
        var txtElem = editor.txt.$txt.get(0);
        if (!elem || !txtElem.contains(elem)) {
            return;
        }

        // 找到elem的第一个 textNode 和 最后一个 textNode
        var firstTextNode = elem.firstChild;
        while (firstTextNode) {
            if (firstTextNode.nodeType === 3) {
                break;
            }
            // 继续向下
            firstTextNode = firstTextNode.firstChild;
        }
        var lastTextNode = elem.lastChild;
        while (lastTextNode) {
            if (lastTextNode.nodeType === 3) {
                break;
            }
            // 继续向下
            lastTextNode = lastTextNode.lastChild;
        }
        
        var range = document.createRange();
        if (firstTextNode && lastTextNode) {
            // 说明 elem 有内容，能取到子元素
            range.setStart(firstTextNode, 0);
            range.setEnd(lastTextNode, lastTextNode.textContent.length);
        } else {
            // 说明 elem 无内容
            range.setStart(elem, 0);
            range.setEnd(elem, 0);
        }

        // 保存选区
        editor.saveSelection(range);
    };

});
// selection range API - IE8及以下
_e(function (E, $) {

    if (E.w3cRange) {
        // 说明支持 W3C 的range方法
        return;
    }

    // -----------------IE8时，需要重写以下方法-------------------

    // 获取选区的文字
    E.fn.getRangeText = function (range) {
        range = range || this.currentRange();
        if (!range) {
            return;
        }
        return range.text;
    };

    // 获取选区对应的DOM对象
    E.fn.getRangeElem = function (range) {
        range = range || this.currentRange();
        if (!range) {
            return;
        }
        var dom = range.parentElement();

        if (dom.nodeType === 1) {
            return dom;
        } else {
            return dom.parentNode;
        }
    };

    // 选区内容是否为空？
    E.fn.isRangeEmpty = function (range) {
        range = range || this.currentRange();

        if (range && range.text) {
            return false;
        }

        return true;
    };

    // 保存选区数据
    E.fn.saveSelection = function (range) {
        var self = this,
            _parentElem,
            selection,
            txt = self.txt.$txt.get(0);

        if (range) {
            _parentElem = range.parentElement();
        } else {
            range = document.selection.createRange();
            if(typeof range.parentElement === 'undefined'){
                //IE6、7中，insertImage后会执行此处
                //由于找不到range.parentElement，所以干脆将_parentElem赋值为null
                _parentElem = null;
            }else{
                _parentElem = range.parentElement();
            }
        }

        // 确定父元素一定要包含在编辑器区域内
        if (_parentElem && (txt.contains(_parentElem) || txt === _parentElem) ) {
            // 保存选择区域
            self.currentRange(range);
        }
    };

    // 恢复选中区域
    E.fn.restoreSelection = function (currentRange){
        var editor = this,
            selection,
            range;

        currentRange = currentRange || editor.currentRange();
        if(!currentRange){
            return;
        }

        range = document.selection.createRange();
        try {
            // 此处，plupload上传上传图片时，IE8-会报一个『参数无效』的错误
            range.setEndPoint('EndToEnd', currentRange);
        } catch (ex) {

        }
        
        if(currentRange.text.length === 0){
            range.collapse(false);
        }else{
            range.setEndPoint('StartToStart', currentRange);
        }
        range.select();
    };

});
// editor command hooks
_e(function (E, $) {
    
    E.fn.commandHooks = function () {
        var editor = this;
        var commandHooks = {};
        
        // insertHtml
        commandHooks.insertHtml = function (html) {
            var $elem = $(html);
            var rangeElem = editor.getRangeElem();
            var targetElem;
            
            targetElem = editor.getLegalTags(rangeElem);
            if (!targetElem) {
                return;
            }

            $(targetElem).after($elem);
        };

        // 保存到对象
        editor.commandHooks = commandHooks;
    };

});
// editor command API
_e(function (E, $) {

    // 基本命令
    E.fn.command = function (e, commandName, commandValue, callback) {
        var editor = this;
        var hooks;
        
        function commandFn() {
            if (!commandName) {
                return;
            }
            if (editor.queryCommandSupported(commandName)) {
                // 默认命令
                document.execCommand(commandName, false, commandValue);
            } else {
                // hooks 命令
                hooks = editor.commandHooks;
                if (commandName in hooks) {
                    hooks[commandName](commandValue);
                }
            }
        }

        this.customCommand(e, commandFn, callback);
    };

    // 针对一个elem对象执行基础命令
    E.fn.commandForElem = function (elemOpt, e, commandName, commandValue, callback) {
        // 取得查询elem的查询条件和验证函数
        var selector;
        var check;
        if (typeof elemOpt === 'string') {
            selector = elemOpt;
        } else {
            selector = elemOpt.selector;
            check = elemOpt.check;
        }

        // 查询elem
        var rangeElem = this.getRangeElem();
        rangeElem = this.getSelfOrParentByName(rangeElem, selector, check);

        // 根据elem设置range
        if (rangeElem) {
            this.setRangeByElem(rangeElem);
        }

        // 然后执行基础命令
        this.command(e, commandName, commandValue, callback);
    };

    // 自定义命令
    E.fn.customCommand = function (e, commandFn, callback) {
        var editor = this;
        var range = editor.currentRange();

        if (!range) {
            // 目前没有选区，则无法执行命令
            e && e.preventDefault();
            return;
        }

        // 恢复选区（有 range 参数）
        this.restoreSelection(range);

        // 执行命令事件
        commandFn.call(editor);

        // 保存选区（无参数，要从浏览器直接获取range信息）
        this.saveSelection();
        // 重新恢复选区（无参数，要取得刚刚从浏览器得到的range信息）
        this.restoreSelection();

        // 执行 callback
        if (callback && typeof callback === 'function') {
            callback.call(editor);
        }

        // 最后插入空行
        editor.txt.insertEmptyP();

        // 更新内容
        editor.updateValue();

        // 更新菜单样式
        editor.updateMenuStyle();

        // 记录内容，以便撤销
        editor.undoRecord();

        // 隐藏 dropPanel dropList modal  设置 200ms 间隔
        function hidePanelAndModal() {
            editor.hideDropPanelAndModal();
        } 
        setTimeout(hidePanelAndModal, 200);

        if (e) {
            e.preventDefault();
        }
    };

    // 封装 document.queryCommandValue 函数
    // IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
    E.fn.queryCommandValue = function (commandName) {
        var result = '';
        try {
            result = document.queryCommandValue(commandName);
        } catch (ex) {

        }
        return result;
    };

    // 封装 document.queryCommandState 函数
    // IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
    E.fn.queryCommandState = function (commandName) {
        var result = false;
        try {
            result = document.queryCommandState(commandName);
        } catch (ex) {

        }
        return result;
    };

    // 封装 document.queryCommandSupported 函数
    E.fn.queryCommandSupported = function (commandName) {
        var result = false;
        try {
            result = document.queryCommandSupported(commandName);
        } catch (ex) {

        }
        return result;
    };

});
// dom selector
_e(function (E, $) {

    var matchesSelector;

    // matchesSelector hook
    function _matchesSelectorForIE(selector) {
        var elem = this;
        var $elems = $(selector);
        var result = false;

        // 用jquery查找 selector 所有对象，如果其中有一个和传入 elem 相同，则证明 elem 符合 selector
        $elems.each(function () {
            if (this === elem) {
                result = true;
                return false;
            }
        });

        return result;
    }

    // 从当前的elem，往上去查找合法标签 如 p head table blockquote ul ol 等
    E.fn.getLegalTags = function (elem) {
        var legalTags = this.config.legalTags;
        if (!legalTags) {
            E.error('配置项中缺少 legalTags 的配置');
            return;
        }
        return this.getSelfOrParentByName(elem, legalTags);
    };

    // 根据条件，查询自身或者父元素，符合即返回
    E.fn.getSelfOrParentByName = function (elem, selector, check) {

        if (!elem || !selector) {
            return;
        }

        if (!matchesSelector) {
            // 定义 matchesSelector 函数
            matchesSelector = elem.webkitMatchesSelector || 
                              elem.mozMatchesSelector ||
                              elem.oMatchesSelector || 
                              elem.matchesSelector;
        }
        if (!matchesSelector) {
            // 如果浏览器本身不支持 matchesSelector 则使用自定义的hook
            matchesSelector = _matchesSelectorForIE;
        }

        var txt = this.txt.$txt.get(0);

        while (elem && txt !== elem && txt.contains(elem)) {
            if (matchesSelector.call(elem, selector)) {
                // 符合 selector 查询条件

                if (!check) {
                    // 没有 check 验证函数，直接返回即可
                    return elem;
                }

                if (check(elem)) {
                    // 如果有 check 验证函数，还需 check 函数的确认
                    return elem;
                }
            }

            // 如果上一步没经过验证，则将跳转到父元素
            elem = elem.parentNode;
        }

        return;
    };

});
// undo redo
_e(function (E, $) {

    var redoList = [];
    var undoList = [];
    var length = 20;  // 缓存的最大长度

    // 数据处理
    function _handle(editor, data) {
        // var range = data.range;
        // var range2 = range.cloneRange && range.cloneRange();
        var val = data.val;

        if(val == null) {
            return;
        }

        // 保存数据
        editor.txt.$txt.html(val);
        editor.updateValue();

        // ?????
        // 注释：$txt 被重新赋值之后，range会被重置，cloneRange() 也不好使
        // // 重置选区
        // if (range2) {
        //     editor.restoreSelection(range2);
        // }
    }

    // 记录
    E.fn.undoRecord = function () {
        var editor = this;
        var $txt = editor.txt.$txt;

        // 清空 redolist
        if (redoList.length) {
            redoList = [];
        }

        // 添加数据到 undoList
        undoList.unshift({
            range: editor.currentRange(),  // 将当前的range也记录下
            val: $txt.html()
        });

        // 限制 undoList 长度
        if (undoList.length > length) {
            undoList.pop();
        }
    };

    // undo 操作
    E.fn.undo = function () {
        if (!undoList.length) {
            return;
        }

        // 取出 undolist 第一个值，加入 redolist
        var data = undoList.shift();
        redoList.unshift(data);

        // 并修改编辑器的内容
        _handle(this, data);
    };

    // redo 操作
    E.fn.redo = function () {
        if (!redoList.length) {
            return;
        }

        // 取出 redolist 第一个值，加入 undolist
        var data = redoList.shift();
        undoList.unshift(data);

        // 并修改编辑器的内容
        _handle(this, data);
    };
});
// 暴露给用户的 API
_e(function (E, $) {

    // 创建编辑器
    E.fn.create = function () {
        var editor = this;

        // 执行 addMenus 之前：
        // 1. 允许用户修改 editor.UI 自定义配置UI
        // 2. 允许用户通过修改 editor.menus 来自定义配置菜单
        // 因此要在 create 时执行，而不是 init           
        editor.addMenus();

        // 渲染
        editor.renderMenus();
        editor.renderMenuContainer();
        editor.renderTxt();
        editor.renderEditorContainer();

        // 绑定事件
        editor.eventMenus();
        editor.eventMenuContainer();
        editor.eventTxt();

        // 处理ready事件
        editor.readyHeadler();

        // 初始化选区
        editor.initSelection();

        // 执行用户自定义事件，通过 E.ready() 添加
        var _readys = E._readys;
        if (_readys && _readys.length) {
            $.each(_readys, function (k, val) {
                val.call(editor);
            });
        }
    };

});
// menuContainer 构造函数
_e(function (E, $) {

    // 定义构造函数
    var MenuContainer = function (editor) {
        this.editor = editor;
        this.init();
    };

    MenuContainer.fn = MenuContainer.prototype;

    // 暴露给 E 即 window.wangEditor
    E.MenuContainer = MenuContainer;

});
// MenuContainer.fn bind fn
_e(function (E, $) {

    var MenuContainer = E.MenuContainer;

    // 初始化
    MenuContainer.fn.init = function () {
        var self = this;
        var $menuContainer = $('<div class="wangEditor-menu-container clearfix"></div>');

        self.$menuContainer = $menuContainer;
    };

});
// MenuContainer.fn API
_e(function (E, $) {

    var MenuContainer = E.MenuContainer;

    MenuContainer.fn.render = function () {
        var $menuContainer = this.$menuContainer;
        var $editorContainer = this.editor.$editorContainer;

        $editorContainer.append($menuContainer);
    };
    
    // 获取菜单栏的高度
    MenuContainer.fn.height = function () {
        var $menuContainer = this.$menuContainer;
        return $menuContainer.height();
    };

    // 添加菜单
    MenuContainer.fn.appendMenu = function (groupIdx, menu) {
        // 判断是否需要新增一个菜单组
        this._addGroup(groupIdx);
        // 增加菜单（返回 $menuItem）
        return this._addOneMenu(menu);
    };
    MenuContainer.fn._addGroup = function (groupIdx) {
        var $menuContainer = this.$menuContainer;
        var $menuGroup;
        if (!this.$currentGroup || this.currentGroupIdx !== groupIdx) {
            $menuGroup = $('<div class="menu-group clearfix"></div>');
            $menuContainer.append($menuGroup);

            this.$currentGroup = $menuGroup;
            this.currentGroupIdx = groupIdx;
        }
    };
    MenuContainer.fn._addOneMenu = function (menu) {
        var $menuNormal = menu.$domNormal;
        var $menuSelected = menu.$domSelected;

        var $menuGroup = this.$currentGroup;
        var $item = $('<div class="menu-item clearfix"></div>');
        $menuSelected.hide();
        $item.append($menuNormal).append($menuSelected);
        $menuGroup.append($item);

        return $item;
    };

});
// menu 构造函数
_e(function (E, $) {

    // 定义构造函数
    var Menu = function (opt) {
        this.editor = opt.editor;
        this.id = opt.id;
        this.title = opt.title;

        // document.execCommand 的参数
        this.commandName = opt.commandName;
        this.commandValue = opt.commandValue;
        this.commandNameSelected = opt.commandNameSelected || opt.commandName;
        this.commandValueSelected = opt.commandValueSelected || opt.commandValue;
    };

    Menu.fn = Menu.prototype;

    // 暴露给 E 即 window.wangEditor
    E.Menu = Menu;
});
// Menu.fn 初始化绑定的事件
_e(function (E, $) {

    var Menu = E.Menu;

    // 初始化UI
    Menu.fn.initUI = function () {
        var editor = this.editor;
        var uiConfig = editor.UI.menus;
        var menuId = this.id;
        var menuUI = uiConfig[menuId];

        if (menuUI == null) {
            E.warn('editor.UI配置中，没有菜单 "' + menuId + '" 的UI配置，只能取默认值');
            
            // 必须写成 uiConfig['default'];
            // 写成 uiConfig.default IE8会报错
            menuUI = uiConfig['default'];
        }

        // 正常状态
        this.$domNormal = $(menuUI.normal);

        // 选中状态
        if (/^\./.test(menuUI.selected)) {
            // 增加一个样式
            this.$domSelected = this.$domNormal.clone().addClass(menuUI.selected.slice(1));
        } else {
            // 一个新的dom对象
            this.$domSelected = $(menuUI.selected);
        }
    };

});
// Menu.fn API
_e(function (E, $) {

    var Menu = E.Menu;

    // 渲染菜单
    Menu.fn.render = function (groupIdx) {
        // 渲染UI
        this.initUI();
        
        var editor = this.editor;
        var menuContainer = editor.menuContainer;
        var $menuItem = menuContainer.appendMenu(groupIdx, this);
        var onRender = this.onRender;

        // 渲染tip
        this._renderTip($menuItem);

        // 执行 onRender 函数
        if (onRender && typeof onRender === 'function') {
            onRender.call(this);
        }
    };
    Menu.fn._renderTip = function ($menuItem) {
        var self = this;
        var editor = self.editor;
        var title = self.title;
        var $tip = $('<div class="menu-tip"></div>');
        // var $triangle = $('<i class="tip-triangle"></i>'); // 小三角

        // 计算 tip 宽度
        var $tempDiv;
        if (!self.tipWidth) {
            $tempDiv = $('<p style="opacity:0; filter:Alpha(opacity=0); position:absolute;">' + title + '</p>');
            editor.$editorContainer.append($tempDiv);
            editor.ready(function () {
                var editor = this;
                var titleWidth = $tempDiv.outerWidth() + 5; // 多出 5px 的冗余
                var currentWidth = $tip.outerWidth();
                var currentMarginLeft = parseFloat($tip.css('margin-left'), 10);
                $tempDiv.remove();
                $tempDiv = null;

                // 重新设置样式
                $tip.css({
                    width: titleWidth,
                    'margin-left': currentMarginLeft + (currentWidth - titleWidth)/2
                });

                // 存储
                self.tipWidth = titleWidth;
            });
        }

        // $tip.append($triangle);
        $tip.append(title);
        $menuItem.append($tip);

        function show() {
            $tip.show();
        }
        function hide() {
            $tip.hide();
        }

        var timeoutId;
        $menuItem.find('a').on('mouseenter', function (e) {
            if (!self.active() && !self.disabled()) {
                timeoutId = setTimeout(show, 200);
            }
        }).on('mouseleave', function (e) {
            timeoutId && clearTimeout(timeoutId);
            hide();
        }).on('click', hide);
    };

    // 绑定事件
    Menu.fn.bindEvent = function () {
        var self = this;

        var $domNormal = self.$domNormal;
        var $domSelected = self.$domSelected;

        // 试图获取该菜单定义的事件（未selected），没有则自己定义
        var clickEvent = self.clickEvent;
        if (!clickEvent) {
            clickEvent = function (e) {
                // -----------dropPanel dropList modal-----------
                var dropObj = self.dropPanel || self.dropList || self.modal;
                if (dropObj && dropObj.show) {
                    if (dropObj.isShowing) {
                        dropObj.hide();
                    } else {
                        dropObj.show();
                    }
                    return;
                }

                // -----------command-----------
                var editor = self.editor;
                var commandName;
                var commandValue;

                var selected = self.selected;
                if (selected) {
                    commandName = self.commandNameSelected;
                    commandValue = self.commandValueSelected;
                } else {
                    commandName = self.commandName;
                    commandValue = self.commandValue;
                }

                if (commandName) {
                    // 执行命令
                    editor.command(e, commandName, commandValue);
                } else {
                    // 提示
                    E.warn('菜单 "' + self.id + '" 未定义click事件');
                    e.preventDefault();
                }
            };
        }
        // 获取菜单定义的selected情况下的点击事件
        var clickEventSelected = self.clickEventSelected || clickEvent;

        // 将事件绑定到菜单dom上
        $domNormal.click(function (e) {
            if (!self.disabled()) {
                clickEvent.call(self, e);
                self.updateSelected();
            }
            e.preventDefault();
        });
        $domSelected.click(function (e) {
            if (!self.disabled()) {
                clickEventSelected.call(self, e);
                self.updateSelected();
            }
            e.preventDefault();
        });
    };

    // 更新选中状态
    Menu.fn.updateSelected = function () {
        var self = this;
        var editor = self.editor;

        // 试图获取用户自定义的判断事件
        var updateSelectedEvent = self.updateSelectedEvent;
        if (!updateSelectedEvent) {
            // 用户未自定义，则设置默认值
            updateSelectedEvent = function () {
                var self = this;
                var editor = self.editor;
                var commandName = self.commandName;
                var commandValue = self.commandValue;

                if (commandValue) {
                    if (editor.queryCommandValue(commandName).toLowerCase() === commandValue.toLowerCase()) {
                        return true;
                    }
                } else if (editor.queryCommandState(commandName)) {
                    return true;
                }

                return false;
            };
        }

        // 获取结果
        var result = updateSelectedEvent.call(self);
        result = !!result;

        // 存储结果、显示效果
        self.changeSelectedState(result);
    };

    // 切换选中状态、显示效果
    Menu.fn.changeSelectedState = function (state) {
        var self = this;
        var selected = self.selected;

        if (state != null && typeof state === 'boolean') {
            if (selected === state) {
                // 计算结果和当前的状态一样
                return;
            }
            // 存储结果
            self.selected = state;

            // 切换菜单的显示
            if (state) {
                // 选中
                self.$domNormal.hide();
                self.$domSelected.show();
            } else {
                // 未选中
                self.$domNormal.show();
                self.$domSelected.hide();
            }
        } // if
    };

    // 点击菜单，显示了 dropPanel modal 时，菜单的状态 
    Menu.fn.active = function (active) {
        if (active == null) {
            return this._activeState;
        }
        this._activeState = active;
    };
    Menu.fn.activeStyle = function (active) {
        var selected = this.selected;
        var $dom = this.$domNormal;
        var $domSelected = this.$domSelected;

        if (active) {
            $dom.addClass('active');
            $domSelected.addClass('active');
        } else {
            $dom.removeClass('active');
            $domSelected.removeClass('active');
        }

        // 记录状态 （ menu hover 时会取状态用 ）
        this.active(active);
    };

    // 菜单的启用和禁用
    Menu.fn.disabled = function (opt) {
        // 参数为空，取值
        if (opt == null) {
            return !!this._disabled;
        }

        if (this._disabled === opt) {
            // 要设置的参数值和当前参数只一样，无需再次设置
            return;
        }

        var $dom = this.$domNormal;
        var $domSelected = this.$domSelected;

        // 设置样式
        if (opt) {
            $dom.addClass('disable');
            $domSelected.addClass('disable');
        } else {
            $dom.removeClass('disable');
            $domSelected.removeClass('disable');
        }

        // 存储
        this._disabled = opt;
    };

});
// dropList 构造函数
_e(function (E, $) {

    // 定义构造函数
    var DropList = function (editor, menu, opt) {
        this.editor = editor;
        this.menu = menu;

        // list 的数据源，格式 {'commandValue': 'title', ...}
        this.data = opt.data;
        // 要为每个item自定义的模板
        this.tpl = opt.tpl;
        // 为了执行 editor.commandForElem 而传入的elem查询方式
        this.selectorForELemCommand = opt.selectorForELemCommand;

        // 初始化
        this.init();
    };

    DropList.fn = DropList.prototype;

    // 暴露给 E 即 window.wangEditor
    E.DropList = DropList;
});
// dropList fn bind
_e(function (E, $) {

    var DropList = E.DropList;

    // init
    DropList.fn.init = function () {
        var self = this;

        // 生成dom对象
        self.initDOM();

        // 绑定command事件
        self.bindEvent();

        // 声明隐藏的事件
        self.initHideEvent();
    };

    // 初始化dom结构
    DropList.fn.initDOM = function () {
        var self = this;
        var data = self.data;
        var tpl = self.tpl || '<span>{#title}</span>';
        var $list = $('<div class="wangEditor-drop-list clearfix"></div>');

        var itemContent;
        var $item;
        $.each(data, function (commandValue, title) {
            itemContent = tpl.replace(/{#commandValue}/ig, commandValue).replace(/{#title}/ig, title);
            $item = $('<a href="#" commandValue="' + commandValue + '"></a>');
            $item.append(itemContent);
            $list.append($item);
        });

        self.$list = $list;
    };

    // 绑定事件
    DropList.fn.bindEvent = function () {
        var self = this;
        var editor = self.editor;
        var menu = self.menu;
        var commandName = menu.commandName;
        var selectorForELemCommand = self.selectorForELemCommand;
        var $list = self.$list;

        $list.on('click', 'a[commandValue]', function (e) {
            // 执行命令

            var commandValue = $(e.currentTarget).attr('commandValue');
            if (menu.selected && editor.isRangeEmpty() && selectorForELemCommand) {
                // 当前处于选中状态，并且选中内容为空
                editor.commandForElem(selectorForELemCommand, e, commandName, commandValue);
            } else {
                // 当前未处于选中状态，或者有选中内容。则执行默认命令
                editor.command(e, commandName, commandValue);
            }
        });
    };

    // 点击其他地方，立即隐藏 droplist
    DropList.fn.initHideEvent = function () {
        var self = this;

        // 获取 list elem
        var thisList = self.$list.get(0);

        E.$body.on('click', function (e) {
            var trigger = e.target;

            // 获取菜单elem
            var menu = self.menu;
            var menuDom;
            if (menu.selected) {
                menuDom = menu.$domSelected.get(0);
            } else {
                menuDom = menu.$domNormal.get(0);
            }

            if (menuDom === trigger || menuDom.contains(trigger)) {
                // 说明由本菜单点击触发的
                return;
            }

            if (thisList === trigger || thisList.contains(trigger)) {
                // 说明由本list点击触发的
                return;
            }

            // 其他情况，隐藏 list
            self.hide();
        });
    };

});
// dropListfn api
_e(function (E, $) {
    
    var DropList = E.DropList;

    // 渲染
    DropList.fn._render = function () {
        var self = this;
        var editor = self.editor;
        var $list = self.$list;

        // 渲染到页面
        editor.$editorContainer.append($list);

        // 记录状态
        self.rendered = true;
    };

    // 定位
    DropList.fn._position = function () {
        var self = this;
        var $list = self.$list;
        var editor = self.editor;
        var menu = self.menu;
        var $menuDom = menu.selected ? menu.$domSelected : menu.$domNormal;
        // 注意这里的 offsetParent() 要返回 .menu-item 的 position
        // 因为 .menu-item 是 position:relative
        var menuPosition = $menuDom.offsetParent().position();

        // 取得 menu 的位置、尺寸属性
        var menuTop = menuPosition.top;
        var menuLeft = menuPosition.left;
        var menuHeight = $menuDom.offsetParent().height();
        var menuWidth = $menuDom.offsetParent().width();

        // 取得 list 的尺寸属性
        var listWidth = $list.outerWidth();
        // var listHeight = $list.outerHeight();

        // 取得 $txt 的尺寸
        var txtWidth = editor.txt.$txt.outerWidth();

        // ------------开始计算-------------

        // 初步计算 list 位置属性
        var top = menuTop + menuHeight;
        var left = menuLeft + menuWidth/2;
        var marginLeft = 0 - menuWidth/2;

        // 如果超出了有边界，则要左移（且和右侧有间隙）
        var valWithTxt = (left + listWidth) - txtWidth;
        if (valWithTxt > -10) {
            marginLeft = marginLeft - valWithTxt - 10;
        }

        // 设置样式
        $list.css({
            top: top,
            left: left,
            'margin-left': marginLeft
        });
    };

    // 显示
    DropList.fn.show = function () {
        var self = this;
        var menu = self.menu;
        if (!self.rendered) {
            // 第一次show之前，先渲染
            self._render();
        }

        if (self.isShowing) {
            return;
        }

        var $list = self.$list;
        $list.show();

        // 定位
        self._position();

        // 记录状态
        self.isShowing = true;

        // 菜单状态
        menu.activeStyle(true);
    };

    // 隐藏
    DropList.fn.hide = function () {
        var self = this;
        var menu = self.menu;
        if (!self.isShowing) {
            return;
        }

        var $list = self.$list;
        $list.hide();

        // 记录状态
        self.isShowing = false;

        // 菜单状态
        menu.activeStyle(false);
    };
});
// dropPanel 构造函数
_e(function (E, $) {

    // 定义构造函数
    var DropPanel = function (editor, menu, opt) {
        this.editor = editor;
        this.menu = menu;
        this.$content = opt.$content;
        this.width = opt.width || 200;
        this.height = opt.height;

        // init
        this.init();
    };

    DropPanel.fn = DropPanel.prototype;

    // 暴露给 E 即 window.wangEditor
    E.DropPanel = DropPanel;
});
// dropPanel fn bind
_e(function (E, $) {

    var DropPanel = E.DropPanel;

    // init
    DropPanel.fn.init = function () {
        var self = this;

        // 生成dom对象
        self.initDOM();

        // 声明隐藏的事件
        self.initHideEvent();
    };

    // init DOM
    DropPanel.fn.initDOM = function () {
        var self = this;
        var $content = self.$content;
        var width = self.width;
        var height = self.height;
        var $panel = $('<div class="wangEditor-drop-panel clearfix"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');

        $panel.css({
            width: width,
            height: height ? height : 'auto'
        });
        $panel.append($triangle);
        $panel.append($content);

        // 添加对象数据
        self.$panel = $panel;
        self.$triangle = $triangle;
    };

    // 点击其他地方，立即隐藏 dropPanel
    DropPanel.fn.initHideEvent = function () {
        var self = this;

        // 获取 panel elem
        var thisPanle = self.$panel.get(0);

        E.$body.on('click', function (e) {
            var trigger = e.target;

            // 获取菜单elem
            var menu = self.menu;
            var menuDom;
            if (menu.selected) {
                menuDom = menu.$domSelected.get(0);
            } else {
                menuDom = menu.$domNormal.get(0);
            }

            if (menuDom === trigger || menuDom.contains(trigger)) {
                // 说明由本菜单点击触发的
                return;
            }

            if (thisPanle === trigger || thisPanle.contains(trigger)) {
                // 说明由本panel点击触发的
                return;
            }

            // 其他情况，隐藏 panel
            self.hide();
        });
    };

});
// dropPanel fn api
_e(function (E, $) {
   
    var DropPanel = E.DropPanel;

    // 渲染
    DropPanel.fn._render = function () {
        var self = this;
        var editor = self.editor;
        var $panel = self.$panel;

        // 渲染到页面
        editor.$editorContainer.append($panel);

        // 记录状态
        self.rendered = true;
    };

    // 定位
    DropPanel.fn._position = function () {
        var self = this;
        var $panel = self.$panel;
        var $triangle = self.$triangle;
        var editor = self.editor;
        var menu = self.menu;
        var $menuDom = menu.selected ? menu.$domSelected : menu.$domNormal;
        // 注意这里的 offsetParent() 要返回 .menu-item 的 position
        // 因为 .menu-item 是 position:relative
        var menuPosition = $menuDom.offsetParent().position();

        // 取得 menu 的位置、尺寸属性
        var menuTop = menuPosition.top;
        var menuLeft = menuPosition.left;
        var menuHeight = $menuDom.offsetParent().height();
        var menuWidth = $menuDom.offsetParent().width();

        // 取得 panel 的尺寸属性
        var panelWidth = $panel.outerWidth();
        // var panelHeight = $panel.outerHeight();

        // 取得 $txt 的尺寸
        var txtWidth = editor.txt.$txt.outerWidth();

        // ------------开始计算-------------

        // 初步计算 panel 位置属性
        var top = menuTop + menuHeight;
        var left = menuLeft + menuWidth/2;
        var marginLeft = 0 - panelWidth/2;
        var marginLeft2 = marginLeft;  // 下文用于和 marginLeft 比较，来设置三角形tip的位置

        // 如果超出了左边界，则移动回来（要和左侧有10px间隙）
        if ((0 - marginLeft) > (left - 10)) {
            marginLeft = 0 - (left - 10);
        }

        // 如果超出了有边界，则要左移（且和右侧有10px间隙）
        var valWithTxt = (left + panelWidth + marginLeft) - txtWidth;
        if (valWithTxt > -10) {
            marginLeft = marginLeft - valWithTxt - 10;
        }

        // 设置样式
        $panel.css({
            top: top,
            left: left,
            'margin-left': marginLeft
        });

        // 设置三角形 tip 的位置
        $triangle.css({
            'margin-left': marginLeft2 - marginLeft - 5
        });
    };

    // focus 第一个 input
    DropPanel.fn.focusFirstInput = function () {
        var self = this;
        var $panel = self.$panel;
        $panel.find('input[type=text],textarea').each(function () {
            var $input = $(this);
            if ($input.attr('disabled') == null) {
                $input.focus();
                return false;
            }
        });
    };

    // 显示
    DropPanel.fn.show = function () {
        var self = this;
        var menu = self.menu;
        if (!self.rendered) {
            // 第一次show之前，先渲染
            self._render();
        }

        if (self.isShowing) {
            return;
        }

        var $panel = self.$panel;
        $panel.show();

        // 定位
        self._position();

        // 记录状态
        self.isShowing = true;

        // 菜单状态
        menu.activeStyle(true);

        if (E.w3cRange) {
            // 高级浏览器
            self.focusFirstInput();
        } else {
            // 兼容 IE8 input placeholder
            E.placeholderForIE8($panel);
        }
    };

    // 隐藏
    DropPanel.fn.hide = function () {
        var self = this;
        var menu = self.menu;
        if (!self.isShowing) {
            return;
        }

        var $panel = self.$panel;
        $panel.hide();

        // 记录状态
        self.isShowing = false;

        // 菜单状态
        menu.activeStyle(false);
    };

});
// modal 构造函数
_e(function (E, $) {

    // 定义构造函数
    var Modal = function () {

    };

    Modal.fn = Modal.prototype;

    // 暴露给 E 即 window.wangEditor
    E.Modal = Modal;
});
// txt 构造函数
_e(function (E, $) {

    // 定义构造函数
    var Txt = function (editor) {
        this.editor = editor;

        // 初始化
        this.init();
    };

    Txt.fn = Txt.prototype;

    // 暴露给 E 即 window.wangEditor
    E.Txt = Txt;
});
// Txt.fn bind fn
_e(function (E, $) {

    var Txt = E.Txt;

    // 初始化
    Txt.fn.init = function () {
        var self = this;
        var editor = self.editor;
        var $valueContainer = editor.$valueContainer;
        var currentValue = editor.getInitValue();
        var $txt;

        if ($valueContainer.get(0).nodeName === 'DIV') {
            // 如果传入生成编辑器的元素就是div，则直接使用
            $txt = $valueContainer;
            $txt.addClass("wangEditor-txt");
            $txt.attr('contentEditable', 'true');
        } else {
            // 如果不是div（是textarea），则创建一个div
            $txt = $(
                '<div class="wangEditor-txt" contentEditable="true">' +
                    currentValue +
                '</div>'
            );
        }

        // 试图最后插入一个空行，ready之后才行
        editor.ready(function () {
            self.insertEmptyP();
        });

        self.$txt = $txt;

        // 删除时，如果没有内容了，就添加一个 <p><br></p>
        self.contentEmptyHandle();

        // enter时，不能使用 div 换行
        self.bindEnterForDiv();

        // tab 插入4个空格
        self.bindTabEvent();

        // 处理粘贴内容
        self.bindPasteFilter();
    };

    // 删除时，如果没有内容了，就添加一个 <p><br></p>
    Txt.fn.contentEmptyHandle = function () {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;
        var $p;

        $txt.on('keyup', function (e) {
            if (e.keyCode !== 8) {
                return;
            }
            var txtHtml = $.trim($txt.html());
            // ff时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断
            if (!txtHtml || txtHtml === '<br>') {
                // 内容空了
                $p = $('<p><br/></p>');
                $txt.html(''); // 一定要先清空，否则在 ff 下有问题
                $txt.append($p);
                editor.restoreSelectionByElem($p.get(0));
            }
        });
    };

    // enter时，不能使用 div 换行
    Txt.fn.bindEnterForDiv = function () {
        var tags = E.config.legalTags; // 配置中编辑器要求的合法标签，如 p head table blockquote ul ol 等
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;

        var $keydownDivElem;
        function divHandler() {
            if (!$keydownDivElem) {
                return;
            }

            var $pElem = $('<p>' + $keydownDivElem.html() + '</p>');
            $keydownDivElem.after($pElem);
            $keydownDivElem.remove();
        }

        $txt.on('keydown keyup', function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            // 查找合法标签
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getLegalTags(rangeElem);
            var $targetElem;
            var $pElem;

            if (!targetElem) {
                // 没找到合法标签，就去查找 div
                targetElem = editor.getSelfOrParentByName(rangeElem, 'div');
                if (!targetElem) {
                    return;
                }
                $targetElem = $(targetElem);

                if (e.type === 'keydown') {
                    // 异步执行（同步执行会出现问题）
                    $keydownDivElem = $targetElem;
                    setTimeout(divHandler, 0);
                }

                if (e.type === 'keyup') {
                    // 将 div 的内容移动到 p 里面，并移除 div
                    $pElem = $('<p>' + $targetElem.html() + '</p>');
                    $targetElem.after($pElem);
                    $targetElem.remove();

                    // 如果是回车结束，将选区定位到行首
                    editor.restoreSelectionByElem($pElem.get(0), 'start');
                }
            }
        });
    };

    // tab 时，插入4个空格
    Txt.fn.bindTabEvent = function () {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;

        $txt.on('keydown', function (e) {
            if (e.keyCode !== 9) {
                // 只监听 tab 按钮
                return;
            }
            // 如果浏览器支持 insertHtml 则插入4个空格。如果不支持，就不管了
            if (editor.queryCommandSupported('insertHtml')) {
                editor.command(e, 'insertHtml', '&nbsp;&nbsp;&nbsp;&nbsp;');
            }
        });
    };

    // 处理粘贴内容
    Txt.fn.bindPasteFilter = function () {
        var self = this;
        var editor = self.editor;
        var resultHtml;
        var $txt = self.$txt;
        $txt.on('paste', function (e) {
            if (!editor.config.pasteFilter) {
                // 配置中取消了粘贴过滤
                return;
            }

            var data = e.clipboardData || e.originalEvent.clipboardData;
            var pasteHtml, $paste;
            if (data == null || data.getData == null) {
                return;
            }
            // 获取粘贴过来的 html
            pasteHtml = data.getData('text/html');
            $paste = $('<div>' + pasteHtml + '</div>');
            
            // 处理，并将结果存储到 resultHtml 变量
            resultHtml = '';
            handle($paste.get(0));

            // 执行命令
            if (resultHtml) {
                editor.command(e, 'insertHtml', resultHtml);
            }
        });

        // 处理粘贴的内容
        function handle(elem) {
            if (!elem || !elem.nodeType || !elem.nodeName) {
                return;
            }
            var $elem;
            var nodeName = elem.nodeName.toLowerCase();
            var nodeType = elem.nodeType;
            var children, length, i;

            // 只处理文本标签和node标签
            if (nodeType !== 3 && nodeType !== 1) {
                return;
            }

            // 链接
            if (nodeName === 'a' && elem.href) {
                resultHtml = resultHtml + '<p><a href="' + elem.href + '" >' + (elem.textContent || elem.innerHTML) + '</a></p>';
                return;
            }

            // 图片节点
            if (nodeName === 'img' && elem.src) {
                resultHtml = resultHtml + '<p><img src="' + elem.src + '" style="max-width:100%"/></p>';
                return;
            }

            // head
            if (/^h\d$/.test(nodeName)) {
                resultHtml = resultHtml + '<' + nodeName + '>' + (elem.textContent || elem.innerHTML) + '</' + nodeName + '>';
                return;
            }

            // 表格、列表
            if (nodeName === 'table' || nodeName === 'ul' || nodeName === 'ol') {
                $elem = $(removeAttrs(elem));
                resultHtml += ($('<div></div>').append($elem)).html();
                return;
            }

            // 文本标签
            if (nodeType === 3) {
                resultHtml = resultHtml + '<p>' + (elem.textContent || elem.innerHTML) + '</p>';
                return;
            }

            // 其他情况，即不是 text、img、合法标签。但是有子元素
            children = elem.childNodes;
            length = children.length;
            if (!length) {
                // 无子元素，则忽略
                return;
            }
            // 有子元素，则继续递归
            for (i = 0; i < length; i++) {
                handle(children[i]);
            }
        }

        // 移除一个元素（子元素）的attr
        function removeAttrs(elem) {
            var attrs = elem.attributes || [];
            var attrNames = [];

            // 先存储下elem中所有 attr 的名称
            $.each(attrs, function (key, attr) {
                if (attr && attr.nodeType === 2) {
                    attrNames.push(attr.nodeName);
                }
            });
            // 再根据名称删除所有attr
            $.each(attrNames, function (key, attr) {
                elem.removeAttribute(attr);
            });


            // 递归子节点
            var children = elem.childNodes;
            if (children.length) {
                $.each(children, function (key, value) {
                    removeAttrs(value);
                });
            }

            return elem;
        }
    };
});
// Txt.fn api
_e(function (E, $) {

    var Txt = E.Txt;

    var txtChangeEventNames = 'propertychange change click keyup input paste';

    // 渲染
    Txt.fn.render = function () {
        var $txt = this.$txt;
        var $editorContainer = this.editor.$editorContainer;
        $editorContainer.append($txt);
    };

    // 计算高度
    Txt.fn.initHeight = function () {
        var editor = this.editor;
        var valueContainerHeight = editor.$valueContainer.height();
        var menuHeight = editor.menuContainer.height();
        var txtHeight = valueContainerHeight - menuHeight;

        // 限制最小为 50px
        txtHeight = txtHeight < 50 ? 50 : txtHeight;

        this.$txt.height(txtHeight);
    };

    // 保存选区
    Txt.fn.saveSelectionEvent = function () {
        var $txt = this.$txt;
        var editor = this.editor;

        // txt change 、focus、blur 时随时保存选区
        $txt.on(txtChangeEventNames + ' focus blur', function (e) {
            editor.saveSelection();
        });

        // 鼠标拖拽选择时，可能会拖拽到编辑器区域外面再松手，此时 $txt 就监听不到 click事件了
        $txt.on('mousedown', function () {
            $txt.on('mouseleave.saveSelection', function (e) {
                editor.saveSelection();

                // 顺道吧菜单状态也更新了
                editor.updateMenuStyle();
            });
        }).on('mouseup', function () {
            $txt.off('mouseleave.saveSelection');
        });
        
    };

    // 随时更新 value
    Txt.fn.updateValueEvent = function () {
        var $txt = this.$txt;
        var editor = this.editor;

        // txt change 时随时更新内容
        $txt.on(txtChangeEventNames, function (e) {
            editor.updateValue();
        });
    };

    // 随时更新 menustyle
    Txt.fn.updateMenuStyleEvent = function () {
        var $txt = this.$txt;
        var editor = this.editor;

        // txt change 时随时更新内容
        $txt.on(txtChangeEventNames, function (e) {
            editor.updateMenuStyle();
        });
    };

    // 最后插入试图插入 <p><br><p>
    Txt.fn.insertEmptyP = function () {
        var $txt = this.$txt;
        var $children = $txt.children();

        if ($children.length === 0) {
            $txt.append($('<p><br></p>'));
            return;
        }

        if ($children.last().html() !== '<br>') {
            $txt.append($('<p><br></p>'));
        }
    };

    // 鼠标hover时候，显示p、head的高度
    Txt.fn.showHeightOnHover = function () {
        var editor = this.editor;
        var $editorContainer = editor.$editorContainer;
        var menuContainer = editor.menuContainer;
        var $txt = this.$txt;
        var $tip = $('<i class="height-tip"><i>');
        var isTipInTxt = false;

        function addAndShowTip($target) {
            if (!isTipInTxt) {
                $editorContainer.append($tip);
                isTipInTxt = true;
            }

            var txtTop = $txt.position().top;
            var txtHeight = $txt.outerHeight();

            var height = $target.height();
            var top = $target.position().top;
            var marginTop = parseInt($target.css('margin-top'), 10);
            var paddingTop = parseInt($target.css('padding-top'), 10);
            var marginBottom = parseInt($target.css('margin-bottom'), 10);
            var paddingBottom = parseInt($target.css('padding-bottom'), 10);

            // 计算初步的结果
            var resultHeight = height + paddingTop + marginTop + paddingBottom + marginBottom;
            var resultTop = top + menuContainer.height();
            
            // var spaceValue;

            // // 判断是否超出下边界
            // spaceValue = (resultTop + resultHeight) - (txtTop + txtHeight);
            // if (spaceValue > 0) {
            //     resultHeight = resultHeight - spaceValue;
            // }

            // // 判断是否超出了下边界
            // spaceValue = txtTop > resultTop;
            // if (spaceValue) {
            //     resultHeight = resultHeight - spaceValue;
            //     top = top + spaceValue;
            // }

            // 按照最终结果渲染
            $tip.css({
                height: height + paddingTop + marginTop + paddingBottom + marginBottom,
                top: top + menuContainer.height()
            });
        }
        function removeTip() {
            if (!isTipInTxt) {
                return;
            }
            $tip.remove();
            isTipInTxt = false;
        }

        $txt.on('mouseenter', 'ul,ol,blockquote,p,h1,h2,h3,h4,h5,table,pre', function (e) {
            addAndShowTip($(e.currentTarget));
        }).on('mouseleave', function () {
            removeTip();
        });
    };

});
// 工具函数
_e(function (E, $) {

    // IE8 [].indexOf()
    if(!Array.prototype.indexOf){
        //IE低版本不支持 arr.indexOf 
        Array.prototype.indexOf = function(elem){
            var i = 0,
                length = this.length;
            for(; i<length; i++){
                if(this[i] === elem){
                    return i;
                }
            }
            return -1;
        };
        //IE低版本不支持 arr.lastIndexOf
        Array.prototype.lastIndexOf = function(elem){
            var length = this.length;
            for(length = length - 1; length >= 0; length--){
                if(this[length] === elem){
                    return length;
                }
            }
            return -1;
        };
    }

    // IE8 Date.now()
    if (!Date.now) {
        Date.now = function () {
            return new Date().valueOf(); 
        };
    }

    // console.log && console.warn && console.error
    var console = window.console;
    var emptyFn = function () {};
    $.each(['info', 'log', 'warn', 'error'], function (key, value) {
        if (console == null) {
            E[value] = emptyFn;
        } else {
            E[value] = function (info) {
                // 通过配置来控制打印输出
                if (E.config && E.config.printLog) {
                    console[value]('wangEditor提示: ' + info);
                }
            };
        }
    });

    // 获取随机数
    E.random = function () {
        return Math.random().toString().slice(2);
    };

    // 浏览器是否支持 placeholder
    E.placeholder = 'placeholder' in document.createElement('input');

    // 兼容IE8的 input placeholder
    E.placeholderForIE8 = function ($container) {
        if (E.placeholder) {
            return;
        }
        $container.find('input[placeholder]').each(function () {
            var $input = $(this);
            var placeholder = $input.attr('placeholder');

            if ($input.val() === '') {
                $input.css('color', '#666');
                $input.val(placeholder);

                $input.on('focus.placeholder click.placeholder', function () {
                    $input.val('');
                    $input.css('color', '#333');
                    $input.off('focus.placeholder click.placeholder');
                });
            }
        });
    };
});
// 语言包
_e(function (E, $) {
    E.langs = {};
    
    // 中文
    E.langs['zh-cn'] = {
        bold: '粗体',
        underline: '下划线',
        italic: '斜体',
        forecolor: '文字颜色',
        bgcolor: '背景色',
        strikethrough: '删除线',
        eraser: '清空格式',
        source: '源码',
        quote: '引用',
        fontfamily: '字体',
        fontsize: '字号',
        head: '标题',
        orderlist: '有序列表',
        unorderlist: '无序列表',
        alignleft: '左对齐',
        aligncenter: '居中',
        alignright: '右对齐',
        link: '链接',
        text: '文本',
        submit: '提交',
        cancel: '取消',
        unlink: '取消链接',
        table: '表格',
        emotion: '表情',
        img: '图片',
        vedio: '视频',
        'width': '宽',
        'height': '高',
        location: '位置',
        loading: '加载中',
        searchlocation: '搜索位置',
        dynamicMap: '动态地图',
        clearLocation: '清除位置',
        langDynamicOneLocation: '动态地图只能显示一个位置',
        insertcode: '插入代码',
        undo: '撤销',
        redo: '重复',
        fullscreen: '全屏'
    };

    // 英文
    E.langs.en = {
        bold: 'Bold',
        underline: 'Underline',
        italic: 'Italic',
        forecolor: 'Color',
        bgcolor: 'Backcolor',
        strikethrough: 'Strikethrough',
        eraser: 'Eraser',
        source: 'Codeview',
        quote: 'Quote',
        fontfamily: 'Font family',
        fontsize: 'Font size',
        head: 'Head',
        orderlist: 'Ordered list',
        unorderlist: 'Unordered list',
        alignleft: 'Align left',
        aligncenter: 'Align center',
        alignright: 'Align right',
        link: 'Insert link',
        text: 'Text',
        submit: 'Submit',
        cancel: 'Cancel',
        unlink: 'Unlink',
        table: 'Table',
        emotion: 'Emotions',
        img: 'Image',
        vedio: 'Vedio',
        'width': 'width',
        'height': 'height',
        location: 'Location',
        loading: 'Loading',
        searchlocation: 'search',
        dynamicMap: 'Dynamic',
        clearLocation: 'Clear',
        langDynamicOneLocation: 'Only one location in dynamic map',
        insertcode: 'Insert Code',
        undo: 'Undo',
        redo: 'Redo',
        fullscreen: 'Full screnn'
    };
});
// 全局配置
_e(function (E, $) {

    E.config = {};

    // 是否打印log
    E.config.printLog = true;

    // 菜单吸顶：false - 不吸顶；number - 吸顶，值为top值
    E.config.menuFixed = 0;

    // 编辑器允许的标签
    E.config.legalTags = 'p,h1,h2,h3,h4,h5,h6,blockquote,table,ul,ol,pre';

    // 语言包
    E.config.lang = E.langs['zh-cn'];

    // 菜单配置
    E.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        'emotion',
        '|',
        'img',
        'vedio',
        'location',
        'insertcode',
        '|',
        'undo',
        'redo',
        'fullscreen'
    ];

    E.config.colors = {
        // 'value': 'title'
        '#880000': '暗红色',
        '#800080': '紫色',
        '#ff0000': '红色',
        '#ff00ff': '鲜粉色',
        '#000080': '深蓝色',
        '#0000ff': '蓝色',
        '#00ffff': '湖蓝色',
        '#008080': '蓝绿色',
        '#008000': '绿色',
        '#808000': '橄榄色',
        '#00ff00': '浅绿色',
        '#ffcc00': '橙黄色',
        '#808080': '灰色',
        '#c0c0c0': '银色',
        '#000000': '黑色',
        '#ffffff': '白色'
    };

    E.config.familys = [
        '宋体', '黑体', '楷体', '微软雅黑',
        'Arial', 'Verdana', 'Georgia',
        'Times New Roman', 'Microsoft JhengHei',
        'Trebuchet MS', 'Courier New', 'Impact', 'Comic Sans MS'
    ];

    E.config.fontsizes = {
        // 格式：'value': 'title'
        1: '10px',
        2: '13px',
        3: '16px',
        4: '19px',
        5: '22px',
        6: '25px',
        7: '28px'
    };

    // 表情包
    E.config.emotions = {
        'default': {
            title: '默认',
            size: 18,
            imgs: [
                '../static/emotions/default/1.gif',
                '../static/emotions/default/2.gif',
                '../static/emotions/default/3.gif',
                '../static/emotions/default/4.gif',
                '../static/emotions/default/5.gif',
                '../static/emotions/default/6.gif',
                '../static/emotions/default/7.gif',
                '../static/emotions/default/8.gif',
                '../static/emotions/default/9.gif',
                '../static/emotions/default/10.gif',
                '../static/emotions/default/11.gif',
                '../static/emotions/default/12.gif',
                '../static/emotions/default/13.gif',
                '../static/emotions/default/14.gif',
                '../static/emotions/default/15.gif',
                '../static/emotions/default/16.gif',
                '../static/emotions/default/17.gif',
                '../static/emotions/default/18.gif',
                '../static/emotions/default/19.gif',
                '../static/emotions/default/20.gif',
                '../static/emotions/default/21.gif',
                '../static/emotions/default/22.gif',
                '../static/emotions/default/23.gif',
                '../static/emotions/default/24.gif',
                '../static/emotions/default/25.gif',
                '../static/emotions/default/26.gif',
                '../static/emotions/default/27.gif',
                '../static/emotions/default/28.gif',
                '../static/emotions/default/29.gif',
                '../static/emotions/default/30.gif',
                '../static/emotions/default/31.gif',
                '../static/emotions/default/32.gif',
                '../static/emotions/default/33.gif',
                '../static/emotions/default/34.gif',
                '../static/emotions/default/35.gif',
                '../static/emotions/default/36.gif',
                '../static/emotions/default/37.gif',
                '../static/emotions/default/38.gif',
                '../static/emotions/default/39.gif',
                '../static/emotions/default/40.gif',
                '../static/emotions/default/41.gif',
                '../static/emotions/default/42.gif',
                '../static/emotions/default/43.gif',
                '../static/emotions/default/44.gif',
                '../static/emotions/default/45.gif',
                '../static/emotions/default/46.gif',
                '../static/emotions/default/47.gif',
                '../static/emotions/default/48.gif',
                '../static/emotions/default/49.gif',
                '../static/emotions/default/50.gif'
            ]
        },
        'jinxing': {
            title: '金星',
            size: 50,
            imgs: [
                '../static/emotions/jinxing/1.gif',
                '../static/emotions/jinxing/2.gif',
                '../static/emotions/jinxing/3.gif',
                '../static/emotions/jinxing/4.gif',
                '../static/emotions/jinxing/5.gif',
                '../static/emotions/jinxing/6.gif'
            ]
        }
    };

    // 百度地图的key
    E.config.mapAk = 'TVhjYjq1ICT2qqL5LdS8mwas';

    // 上传图片的配置
    // server地址
    E.config.uploadImgUrl = '';
    // 超时时间
    E.config.uploadTimeout = 20 * 1000;

    // 是否过滤粘贴内容
    E.config.pasteFilter = true;
     
});
// 全局UI
_e(function (E, $) {

     E.UI = {};

     // 为菜单自定义配置的UI
     E.UI.menus = {
        // 这个 default 不加引号，在 IE8 会报错
        'default': {
            normal: '<a href="#"><i class="wangeditor-menu-img-command"></i></a>',
            selected: '.selected'
        },
        bold: {
            normal: '<a href="#"><i class="wangeditor-menu-img-bold"></i></a>',
            selected: '.selected'
        },
        underline: {
            normal: '<a href="#"><i class="wangeditor-menu-img-underline"></i></a>',
            selected: '.selected'
        },
        italic: {
            normal: '<a href="#"><i class="wangeditor-menu-img-italic"></i></a>',
            selected: '.selected'
        },
        forecolor: {
            normal: '<a href="#"><i class="wangeditor-menu-img-pencil"></i></a>',
            selected: '.selected'
        },
        bgcolor: {
            normal: '<a href="#"><i class="wangeditor-menu-img-brush"></i></a>',
            selected: '.selected'
        },
        strikethrough: {
            normal: '<a href="#"><i class="wangeditor-menu-img-strikethrough"></i></a>',
            selected: '.selected'
        },
        eraser: {
            normal: '<a href="#"><i class="wangeditor-menu-img-eraser"></i></a>',
            selected: '.selected'
        },
        quote: {
            normal: '<a href="#"><i class="wangeditor-menu-img-quotes-left"></i></a>',
            selected: '.selected'
        },
        source: {
            normal: '<a href="#"><i class="wangeditor-menu-img-code"></i></a>',
            selected: '.selected'
        },
        fontfamily: {
            normal: '<a href="#"><i class="wangeditor-menu-img-font2"></i></a>',
            selected: '.selected'
        },
        fontsize: {
            normal: '<a href="#"><i class="wangeditor-menu-img-text-height"></i></a>',
            selected: '.selected'
        },
        head: {
            normal: '<a href="#"><i class="wangeditor-menu-img-header"></i></a>',
            selected: '.selected'
        },
        orderlist: {
            normal: '<a href="#"><i class="wangeditor-menu-img-list-numbered"></i></a>',
            selected: '.selected'
        },
        unorderlist: {
            normal: '<a href="#"><i class="wangeditor-menu-img-list-bullet"></i></a>',
            selected: '.selected'
        },
        alignleft: {
            normal: '<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>',
            selected: '.selected'
        },
        aligncenter: {
            normal: '<a href="#"><i class="wangeditor-menu-img-align-center"></i></a>',
            selected: '.selected'
        },
        alignright: {
            normal: '<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>',
            selected: '.selected'
        },
        link: {
            normal: '<a href="#"><i class="wangeditor-menu-img-link"></i></a>',
            selected: '.selected'
        },
        unlink: {
            normal: '<a href="#"><i class="wangeditor-menu-img-unlink"></i></a>',
            selected: '.selected'
        },
        table: {
            normal: '<a href="#"><i class="wangeditor-menu-img-table"></i></a>',
            selected: '.selected'
        },
        emotion: {
            normal: '<a href="#"><i class="wangeditor-menu-img-happy"></i></a>',
            selected: '.selected'
        },
        img: {
            normal: '<a href="#"><i class="wangeditor-menu-img-picture"></i></a>',
            selected: '.selected'
        },
        vedio: {
            normal: '<a href="#"><i class="wangeditor-menu-img-play"></i></a>',
            selected: '.selected'
        },
        location: {
            normal: '<a href="#"><i class="wangeditor-menu-img-location"></i></a>',
            selected: '.selected'
        },
        insertcode: {
            normal: '<a href="#"><i class="wangeditor-menu-img-terminal"></i></a>',
            selected: '.selected'
        },
        undo: {
            normal: '<a href="#"><i class="wangeditor-menu-img-ccw"></i></a>',
            selected: '.selected'
        },
        redo: {
            normal: '<a href="#"><i class="wangeditor-menu-img-cw"></i></a>',
            selected: '.selected'
        },
        fullscreen: {
            normal: '<a href="#"><i class="wangeditor-menu-img-enlarge2"></i></a>',
            selected: '<a href="#" class="selected"><i class="wangeditor-menu-img-shrink2"></i></a>'
        }
     };
     
});
// 对象配置
_e(function (E, $) {

    E.fn.initDefaultConfig = function () {
        var editor = this;
        editor.config = $.extend({}, E.config);
        editor.UI = $.extend({}, E.UI);
    };

});
// 增加 container
_e(function (E, $) {

    E.fn.addEditorContainer = function () {
        this.$editorContainer = $('<div class="wangEditor-container"></div>');
    };

});
// 增加编辑区域对象
_e(function (E, $) {

    E.fn.addTxt = function () {
        var editor = this;
        var txt = new E.Txt(editor);

        editor.txt = txt;
    };

});
// 增加menuContainer对象
_e(function (E, $) {

    E.fn.addMenuContainer = function () {
        var editor = this;
        editor.menuContainer = new E.MenuContainer(editor);
    };

});
// 增加menus
_e(function (E, $) {

    // 存储创建菜单的函数
    E.createMenuFns = [];
    E.createMenu = function (fn) {
        E.createMenuFns.push(fn);
    };

    // 创建所有菜单
    E.fn.addMenus = function () {
        var editor = this;
        var menuIds = editor.config.menus;

        // 检验 menuId 是否在配置中存在
        function check(menuId) {
            if (menuIds.indexOf(menuId) >= 0) {
                return true;
            }
            return false;
        }

        // 遍历所有的菜单创建函数，并执行
        $.each(E.createMenuFns, function (k, createMenuFn) {
            createMenuFn.call(editor, check);
        });
    };

});
// bold菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'bold';
        if (!check(menuId)) {
            return;
        }

        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.bold,
            commandName: 'Bold'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'Bold');
            } else {
                // 如果选区没有内容
                editor.commandForElem('b,strong,h1,h2,h3,h4,h5', e, 'Bold');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// underline菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'underline';
        if (!check(menuId)) {
            return;
        }

        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.underline,
            commandName: 'Underline'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'Underline');
            } else {
                // 如果选区没有内容
                editor.commandForElem('u,a', e, 'Underline');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// italic 菜单
_e(function (E, $) {
    
    E.createMenu(function (check) {
        var menuId = 'italic';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.italic,
            commandName: 'Italic'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'Italic');
            } else {
                // 如果选区没有内容
                editor.commandForElem('i', e, 'Italic');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// forecolor 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'forecolor';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configColors = editor.config.colors;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.forecolor
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        $.each(configColors, function (k, v) {
            $content.append(
                [
                    '<a href="#" class="color-item"',
                    '    title="' + v + '" commandValue="' + k + '" ',
                    '    style="color: ' + k + '" ',
                    '><i class="wangeditor-menu-img-pencil"></i></a>'
                ].join('')
            );
        });
        $content.on('click', 'a[commandValue]', function (e) {
            // 执行命令
            var $elem = $(this);
            var commandValue = $elem.attr('commandValue');

            if (menu.selected && editor.isRangeEmpty()) {
                // 当前处于选中状态，并且选中内容为空
                editor.commandForElem('font[color]', e, 'forecolor', commandValue);
            } else {
                // 当前未处于选中状态，或者有选中内容。则执行默认命令
                editor.command(e, 'forecolor', commandValue);
            }
        });
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 125
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[color]');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// bgcolor 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'bgcolor';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configColors = editor.config.colors;

        // 检查元素是否有 background-color: 内联样式
        function checkElemFn(elem) {
            var cssText;
            if (elem && elem.style && elem.style.cssText != null) {
                cssText = elem.style.cssText;
                if (cssText && cssText.indexOf('background-color:') >= 0) {
                    return true;
                }
            }
            return false;
        }

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.bgcolor
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        $.each(configColors, function (k, v) {
            $content.append(
                [
                    '<a href="#" class="color-item"',
                    '    title="' + v + '" commandValue="' + k + '" ',
                    '    style="color: ' + k + '" ',
                    '><i class="wangeditor-menu-img-brush"></i></a>'
                ].join('')
            );
        });
        $content.on('click', 'a[commandValue]', function (e) {
            // 执行命令

            var $elem = $(this);
            var commandValue = $elem.attr('commandValue');

            if (menu.selected && editor.isRangeEmpty()) {
                // 当前处于选中状态，并且选中内容为空。使用 commandForElem 执行命令
                editor.commandForElem({
                    selector: 'span,font',
                    check: checkElemFn
                }, e, 'BackColor', commandValue);
            } else {
                // 当前未处于选中状态，或者有选中内容。则执行默认命令
                editor.command(e, 'BackColor', commandValue);
            }
        });
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 125
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'span,font', checkElemFn);
            
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// strikethrough 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'strikethrough';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.strikethrough,
            commandName: 'StrikeThrough'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'StrikeThrough');
            } else {
                // 如果选区没有内容
                editor.commandForElem('strike', e, 'StrikeThrough');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// eraser 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'eraser';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.eraser,
            commandName: 'RemoveFormat'
        });

        // 定义点击事件
        menu.clickEvent = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();

            if (!isRangeEmpty) {
                // 选区不是空的，则执行默认命令
                editor.command(e, 'RemoveFormat');
                return;
            }

            var $clearElem;

            // 自定义的命令函数
            function commandFn() {
                var editor = this;
                var rangeElem;
                var pElem, $pElem;
                var quoteElem, $quoteElem;
                var listElem, $listElem;

                // 获取选区 elem
                rangeElem = editor.getRangeElem();
                // 第一步，获取 quote 父元素
                quoteElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
                if (quoteElem) {
                    $quoteElem = $(quoteElem);
                    $clearElem = $('<p>' + $quoteElem.text() + '</p>');
                    $quoteElem.after($clearElem).remove();
                }
                // 第二步，获取 p h 父元素
                pElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5');
                if (pElem) {
                    $pElem = $(pElem);
                    $clearElem = $('<p>' + $pElem.text() + '</p>');
                    $pElem.after($clearElem).remove();
                }
                // 第三步，获取list
                listElem = editor.getSelfOrParentByName(rangeElem, 'ul,ol');
                if (listElem) {
                    $listElem = $(listElem);
                    $clearElem = $('<p>' + $listElem.text() + '</p>');
                    $listElem.after($clearElem).remove();
                }
            }

            // 自定义 callback 事件
            function callback() {
                // callback中，设置range为clearElem
                var editor = this;
                if ($clearElem) {
                    editor.restoreSelectionByElem($clearElem.get(0));
                }
            }

            // 执行自定义命令
            editor.customCommand(e, commandFn, callback);
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// source 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'source';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.source
        });

        menu.isShowCode = false;

        // 定义click事件
        menu.clickEvent = function (e) {
            var self = this;
            var editor = self.editor;
            var $txt = editor.txt.$txt;
            var txtOuterHeight = $txt.outerHeight();
            var txtHeight = $txt.height();

            if (!self.$codeTextarea) {
                self.$codeTextarea = $('<textarea class="code-textarea"></textarea>');
            }
            var $code = self.$codeTextarea;
            $code.css({
                height: txtHeight,
                'margin-top': txtOuterHeight - txtHeight
            });

            // 赋值
            $code.val($txt.html());

            // 渲染
            $txt.after($code).hide();
            $code.show();

            // 更新状态
            menu.isShowCode = true;

            // 执行 updateSelected 事件
            this.updateSelected();

            // 禁用其他菜单
            editor.disableMenusExcept('source');
        };

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var self = this;
            var editor = self.editor;
            var $txt = editor.txt.$txt;
            var $code = self.$codeTextarea;

            if (!$code) {
                return;
            }

            // 赋值
            $txt.html($code.val());

            // 渲染
            $code.after($txt).hide();
            $txt.show();

            // 更新状态
            menu.isShowCode = false;

            // 执行 updateSelected 事件
            this.updateSelected();

            // 启用其他菜单
            editor.enableMenusExcept('source');
        };

        // 定义切换选中状态事件
        menu.updateSelectedEvent = function () {
            return this.isShowCode;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// quote 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'quote';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.quote,
            commandName: 'formatBlock',
            commandValue: 'blockquote'
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            var rangeElem = editor.getRangeElem();
            var $rangeElem;
            if (!rangeElem) {
                e.preventDefault();
                return;
            }
            var currentQuote = editor.getSelfOrParentByName(rangeElem, 'blockquote');
            var $currentQuote;
            var $quote;

            if (currentQuote) {
                // 说明当前在quote之内，不做任何处理
                e.preventDefault();
                return;
            }

            rangeElem = editor.getLegalTags(rangeElem);
            if (!rangeElem) {
                // 执行默认命令
                // IE8 下执行此处（不过，经测试代码无效，也不报错）
                editor.command(e, 'formatBlock', 'blockquote');
                return;
            }

            // 自定义command事件
            function commandFn() {
                $rangeElem = $(rangeElem);
                $quote = $('<p>' + $rangeElem.text() + '</p>');
                $rangeElem.after($quote).remove();
                $quote.wrap('<blockquote>');
            }

            // 自定义 callback 事件
            function callback() {
                // callback中，设置range为quote
                var editor = this;
                if ($quote) {
                    editor.restoreSelectionByElem($quote.get(0));
                }
            }

            // 执行自定义命令
            editor.customCommand(e, commandFn, callback);
        };

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var rangeElem;
            var quoteElem;
            var $lastChild;

            // 获取当前选区的elem，并试图往上找 quote 元素
            rangeElem = editor.getRangeElem();
            quoteElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
            if (!quoteElem) {
                // 没找到，则返回
                e.preventDefault();
                return;
            }

            // 自定义的command事件
            function commandFn() {
                var $quoteElem;
                var $children;

                $quoteElem = $(quoteElem);
                $children = $quoteElem.children();
                if ($children.length) {
                    $children.each(function (k) {
                        var $item = $(this);
                        if ($item.get(0).nodeName === 'P') {
                            $quoteElem.after($item);
                        } else {
                            $quoteElem.after('<p>' + $item.text() + '</p>');
                        }
                        $lastChild = $item;  // 记录最后一个子元素，用于callback中的range定位
                    });
                    $quoteElem.remove();
                    return;
                }
            }

            // 自定义的callback函数
            function callback() {
                // callback中，设置range为lastChild
                var editor = this;
                if ($lastChild) {
                    editor.restoreSelectionByElem($lastChild.get(0));
                }
            }

            // 执行自定义命令
            editor.customCommand(e, commandFn, callback);
        };

        // 定义更新选中状态的事件
        menu.updateSelectedEvent = function () {
            var self = this; //菜单对象
            var editor = self.editor;
            var rangeElem;

            rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');

            if (rangeElem) {
                return true;
            }

            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;

        // 两次点击 enter 跳出引用
        editor.ready(function () {
            var editor = this;
            var $txt = editor.txt.$txt;
            var isPrevEnter = false;  // 是不是刚刚在quote中按了 enter 键
            $txt.on('keydown', function (e) {
                if (e.keyCode !== 13) {
                    // 不是 enter 键
                    isPrevEnter = false;
                    return;
                }

                var rangeElem = editor.getRangeElem();
                rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
                if (!rangeElem) {
                    // 选区不是 quote
                    isPrevEnter = false;
                    return;
                }

                if (!isPrevEnter) {
                    // 最近没有在qote中按enter键
                    isPrevEnter = true;
                    return;
                }

                var currentRangeElem = editor.getRangeElem();
                var $currentRangeElem = $(currentRangeElem);
                if ($currentRangeElem.length) {
                    $currentRangeElem.parent().after($currentRangeElem);
                }

                // 设置选区
                editor.restoreSelectionByElem(currentRangeElem, 'start');

                isPrevEnter = false;
                // 阻止默认行文
                e.preventDefault();

            });
        }); // editor.ready(
    });

});
// 字体 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'fontfamily';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configFamilys = editor.config.familys;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.fontfamily,
            commandName: 'fontName'
        });

        // 初始化数据
        var data  = {};
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */
        $.each(configFamilys, function (k, v) {
            // configFamilys 是数组，data 是对象
            data[v] = v;
        });

        // 创建droplist
        var tpl = '<span style="font-family:{#commandValue};">{#title}</span>';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,
            tpl: tpl,
            selectorForELemCommand: 'font[face]'  // 为了执行 editor.commandForElem 而传入的elem查询方式
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[face]');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
});
// 字号 菜单
_e(function (E, $) {
    E.createMenu(function (check) {
        var menuId = 'fontsize';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configSize = editor.config.fontsizes;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.fontsize,
            commandName: 'fontSize'
        });

        // 初始化数据
        var data  = configSize;
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */

        // 创建droplist
        var tpl = '<span style="font-size:{#title};">{#title}</span>';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,
            tpl: tpl,
            selectorForELemCommand: 'font[size]'  // 为了执行 editor.commandForElem 而传入的elem查询方式
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[size]');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
});
// head 菜单
_e(function (E, $) {
    E.createMenu(function (check) {
        var menuId = 'head';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.head,
            commandName: 'formatBlock'
        });

        // 初始化数据
        var data  = {
            '<h1>': '标题1',
            '<h2>': '标题2',
            '<h3>': '标题3',
            '<h4>': '标题4',
            '<h5>': '标题5'
        };
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */

        // 创建droplist
        var tpl = '{#commandValue}{#title}';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,
            tpl: tpl
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'h1,h2,h3,h4,h5');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
});
// unorderlist 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'unorderlist';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.unorderlist,
            commandName: 'InsertUnorderedList'
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// orderlist 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'orderlist';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.orderlist,
            commandName: 'InsertOrderedList'
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// alignleft 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'alignleft';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.alignleft,
            commandName: 'JustifyLeft'
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,li', function (elem) {
                var cssText;
                if (elem && elem.style && elem.style.cssText != null) {
                    cssText = elem.style.cssText;
                    if (cssText && /text-align:\s*left;/.test(cssText)) {
                        return true;
                    }
                }
                return false;
            });
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// aligncenter 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'aligncenter';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.aligncenter,
            commandName: 'JustifyCenter'
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,li', function (elem) {
                var cssText;
                if (elem && elem.style && elem.style.cssText != null) {
                    cssText = elem.style.cssText;
                    if (cssText && /text-align:\s*center;/.test(cssText)) {
                        return true;
                    }
                }
                return false;
            });
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// alignright 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'alignright';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.alignright,
            commandName: 'JustifyRight'
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,li', function (elem) {
                var cssText;
                if (elem && elem.style && elem.style.cssText != null) {
                    cssText = elem.style.cssText;
                    if (cssText && /text-align:\s*right;/.test(cssText)) {
                        return true;
                    }
                }
                return false;
            });
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// link 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'link';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.link
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        var $div1 = $('<div style="margin:20px 10px;" class="clearfix"></div>');
        var $div2 = $div1.clone();
        var $div3 = $div1.clone().css('margin', '0 10px');
        var $textInput = $('<input type="text" class="block" placeholder="' + lang.text + '"/>');
        var $urlInput = $('<input type="text" class="block" placeholder="' + lang.link + '"/>');
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');

        $div1.append($textInput);
        $div2.append($urlInput);
        $div3.append($btnSubmit).append($btnCancel);
        $content.append($div1).append($div2).append($div3);
        
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 300
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // -------------隐藏----------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示----------------

            // 重置 input
            $textInput.val('');
            $urlInput.val('');

            // 获取url
            var url = '';
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (rangeElem) {
                url = rangeElem.href || '';
            }

            // 获取 text
            var text = '';
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 选区不是空
                text = editor.getRangeText() || '';
            } else if (rangeElem) {
                // 如果选区空，并且在 a 标签之内
                text = rangeElem.textContent || rangeElem.innerHTML;
            }

            // 设置 url 和 text
            url && $urlInput.val(url);
            text && $textInput.val(text);

            // 如果有选区内容，textinput 不能修改
            if (!isRangeEmpty) {
                $textInput.attr('disabled', true);
            } else {
                $textInput.removeAttr('disabled');
            }

            // 显示（要设置好了所有input的值和属性之后再显示）
            dropPanel.show();
        };

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 『取消』 按钮
        $btnCancel.click(function () {
            menu.dropPanel.hide();
        });

        // 『确定』按钮
        $btnSubmit.click(function (e) {
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'a');
            var isRangeEmpty = editor.isRangeEmpty();

            var $linkElem, linkHtml;
            var commandFn, callback;
            var $txt = editor.txt.$txt;
            var $oldLinks, $newLinks;
            var uniqId = 'link' + E.random();

            // 获取数据
            var url = $.trim($urlInput.val());
            var text = $.trim($textInput.val());

            if (!url) {
                menu.dropPanel.focusFirstInput();
                return;
            }
            if (!text) {
                text = url;
            }

            if (!isRangeEmpty) {
                // 选中区域有内容，则执行默认命令

                // 获取目前 txt 内所有链接，并为当前链接做一个标记
                $oldLinks = $txt.find('a');
                $oldLinks.attr(uniqId, '1');

                // 执行命令 
                editor.command(e, 'createLink', url);

                // 去的没有标记的链接，即刚刚插入的链接
                $newLinks = $txt.find('a').not('[' + uniqId + ']');
                $newLinks.attr('target', '_blank'); // 增加 _blank

                // 去掉之前做的标记
                $oldLinks.removeAttr(uniqId);

            } else if (targetElem) {
                // 无选中区域，在 a 标签之内，修改该 a 标签的内容和链接
                $linkElem = $(targetElem);
                commandFn = function () {
                    $linkElem.attr('href', url);
                    $linkElem.text(text);
                };
                callback = function () {
                    var editor = this;
                    editor.restoreSelectionByElem(targetElem);
                };
                // 执行命令
                editor.customCommand(e, commandFn, callback);
            } else {
                // 无选中区域，不在 a 标签之内，插入新的链接

                linkHtml = '<a href="' + url + '" target="_blank">' + text + '</a>';
                if (E.userAgent.indexOf('Firefox') > 0) {
                    linkHtml += '<span>&nbsp;</span>';
                }
                editor.command(e, 'insertHtml', linkHtml);
            }

        });
        
        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// unlink 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'unlink';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.unlink,
            commandName: 'unLink'
        });

        // click 事件
        menu.clickEvent = function  (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 有选中区域，或者IE8，执行默认命令
                editor.command(e, 'unLink');
                return;
            }

            // 无选中区域...

            var rangeElem = editor.getRangeElem();
            var aElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (!aElem) {
                // 不在 a 之内，返回
                e.preventDefault();
                return;
            }

            // 在 a 之内
            var $a = $(aElem);
            var $span = $('<span>' + $a.text() + '</span>');
            function commandFn() {
                $a.after($span).remove();
            }
            function callback() {
                editor.restoreSelectionByElem($span.get(0));
            }
            editor.customCommand(e, commandFn, callback);
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// table 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'table';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.table
        });

        // dropPanel 内容
        var $content = $('<div style="font-size: 14px; color: #666; text-align:right;"></div>');
        var $table = $('<table class="choose-table" style="margin-bottom:10px;margin-top:5px;">');
        var $row = $('<span>0</span>');
        var $rowspan = $('<span> 行 </span>');
        var $col = $('<span>0</span>');
        var $colspan = $('<span> 列</span>');
        var $tr;
        var i, j;

        // 创建一个10行10列的表格
        for (i = 0; i < 10; i++) {
            $tr = $('<tr index="' + (i + 1) + '">');
            for (j = 0; j < 10; j++) {
                $tr.append($('<td index="' + (j + 1) + '">'));
            }
            $table.append($tr);
        }
        $content.append($table);
        $content.append($row).append($rowspan).append($col).append($colspan);

        // 定义table事件
        $table.on('mouseenter', 'td', function (e) {
            var $currentTd = $(e.currentTarget);
            var currentTdIndex = $currentTd.attr('index');
            var $currentTr = $currentTd.parent();
            var currentTrIndex = $currentTr.attr('index');

            // 显示
            $row.text(currentTrIndex);
            $col.text(currentTdIndex);

            // 遍历设置背景颜色
            $table.find('tr').each(function () {
                var $tr = $(this);
                var trIndex = $tr.attr('index');
                if (parseInt(trIndex, 10) <= parseInt(currentTrIndex, 10)) {
                    // 该行需要可能需要设置背景色
                    $tr.find('td').each(function () {
                        var $td = $(this);
                        var tdIndex = $td.attr('index');
                        if (parseInt(tdIndex, 10) <= parseInt(currentTdIndex, 10)) {
                            // 需要设置背景色
                            $td.addClass('active');
                        } else {
                            // 需要移除背景色
                            $td.removeClass('active');
                        }
                    });
                } else {
                    // 改行不需要设置背景色
                    $tr.find('td').removeClass('active');
                }
            });
        }).on('mouseleave', function (e) {
            // mouseleave 删除背景色
            $table.find('td').removeClass('active');
        });

        // 插入表格
        $table.on('click', 'td', function (e) {
            var $currentTd = $(e.currentTarget);
            var currentTdIndex = $currentTd.attr('index');
            var $currentTr = $currentTd.parent();
            var currentTrIndex = $currentTr.attr('index');

            var rownum = parseInt(currentTrIndex, 10);
            var colnum = parseInt(currentTdIndex, 10);

            // -------- 拼接tabel html --------

            var i, j;
            var tableHtml = '\n<table>';
            for (i = 0; i < rownum; i++) {
                tableHtml += '\n  <tr>';

                for (j = 0; j < colnum; j++) {
                    tableHtml += '\n    <td><span>&nbsp;</span></td>';
                }
                tableHtml += '\n  </tr>';
            }
            tableHtml += '\n</table>\n';

            // -------- 执行命令 --------
            editor.command(e, 'insertHtml', tableHtml);
        });

        // 创建 panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 181
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// emotion 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'emotion';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configEmotions = editor.config.emotions;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.emotion
        });

        // 拼接 dropPanel 内容
        var $panelContent = $('<div class="panel-tab"></div>');
        var $tabContainer = $('<div class="tab-container"></div>');
        var $contentContainer = $('<div class="content-container"></div>');
        $.each(configEmotions, function (k, val) {
            var title = val.title;
            var size = val.size;
            var imgs = val.imgs;

            var $tab = $('<a href="#">' + title +' </a>');
            $tabContainer.append($tab);
            var $tabContent = $('<div class="content"></div>');
            $contentContainer.append($tabContent);

            // 添加表情图片
            $.each(imgs, function (k, src) {
                var $command = $('<a href="#" commandValue="' + src + '"></a>');
                var $img = $('<img>');
                $img.css({
                    width: size + 'px',
                    height: size + 'px'
                });
                $img.attr('_src', src);  // 先将 src 复制到 '_src' 属性，先不加载

                $command.append($img);
                $tabContent.append($command);
            });

            // tab 切换事件
            $tab.click(function (e) {
                $tabContainer.children().removeClass('selected');
                $contentContainer.children().removeClass('selected');
                $tabContent.addClass('selected');
                $tab.addClass('selected');
                e.preventDefault();
            });
        });
        $panelContent.append($tabContainer).append($contentContainer);

        // 默认显示第一个tab
        $tabContainer.children().first().addClass('selected');
        $contentContainer.children().first().addClass('selected');

        // 插入表情command事件
        $contentContainer.on('click', 'a[commandValue]', function (e) {
            var $a = $(e.currentTarget);
            var src = $a.attr('commandValue');

            editor.command(e, 'InsertImage', src);
        });

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $panelContent,
            width: 350
        });

        // 定义click事件（异步加载表情图片）
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // -------------隐藏-------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示-------------
            dropPanel.show();

            // 异步加载图片
            if (menu.imgLoaded) {
                return;
            }
            $contentContainer.find('img').each(function () {
                var $img = $(this);
                var _src = $img.attr('_src');
                $img.on('error', function () {
                    E.error('加载不出表情图片 ' + _src);
                });
                $img.attr('src', _src);
                $img.removeAttr('_src');
            });
            menu.imgLoaded = true;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// img 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'img';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.img
        });

        // 创建 panel content
        var $panelContent = $('<div class="panel-tab"></div>');
        var $tabContainer = $('<div class="tab-container"></div>');
        var $contentContainer = $('<div class="content-container"></div>');
        $panelContent.append($tabContainer).append($contentContainer);

        // tab
        var $uploadTab = $('<a href="#">上传图片</a>');
        var $linkTab = $('<a href="#">网络图片</a>');
        $tabContainer.append($uploadTab).append($linkTab);

        // 上传图片 content
        var $uploadContent = $('<div class="content"></div>');
        $contentContainer.append($uploadContent);

        // 网络图片 content
        var $linkContent = $('<div class="content"></div>');
        $contentContainer.append($linkContent);
        linkContentHandler(editor, menu, $linkContent);

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $panelContent,
            width: 400
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;

        // tab 切换事件
        function tabToggle() {
            $uploadTab.click(function (e) {
                $tabContainer.children().removeClass('selected');
                $contentContainer.children().removeClass('selected');
                $uploadContent.addClass('selected');
                $uploadTab.addClass('selected');
                e.preventDefault();
            });
            $linkTab.click(function (e) {
                $tabContainer.children().removeClass('selected');
                $contentContainer.children().removeClass('selected');
                $linkContent.addClass('selected');
                $linkTab.addClass('selected');
                e.preventDefault();

                // focus input
                if (E.placeholder) {
                    $linkContent.find('input[type=text]').focus();
                }
            });

            // 默认情况
            // $uploadTab.addClass('selected');
            // $uploadContent.addClass('selected');
            $uploadTab.click();
        }

        // 隐藏上传图片
        function hideUploadImg() {
            $tabContainer.remove();
            $uploadContent.remove();
            $linkContent.addClass('selected');
        }

        // 判断用户是否配置了上传图片
        editor.ready(function () {
            var editor = this;
            var config = editor.config;
            var uploadImgUrl = config.uploadImgUrl;
            var $uploadImgPanel;

            if (uploadImgUrl) {
                // 第一，暴露出 $uploadContent 以便用户自定义 ！！！重要
                editor.$uploadContent = $uploadContent;

                // 第二，绑定tab切换事件
                tabToggle();
            } else {
                // 未配置上传图片功能
                hideUploadImg();
            }
        });
    });

    // --------------- 处理上传图片content ---------------
    function linkContentHandler (editor, menu, $linkContent) {
        var lang = editor.config.lang;
        var $urlContainer = $('<div style="margin:20px 10px 10px 10px;"></div>');
        var $urlInput = $('<input type="text" class="block" placeholder="http://"/>');
        $urlContainer.append($urlInput);
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');

        $linkContent.append($urlContainer).append($btnSubmit).append($btnCancel);

        // 取消
        $btnCancel.click(function () {
            menu.dropPanel.hide();
        });

        // callback 
        function callback() {
            $urlInput.val('');
        }

        // 确定
        $btnSubmit.click(function (e) {
            var url = $.trim($urlInput.val());
            if (!url) {
                // 无内容
                e.preventDefault();
                $urlInput.focus();
                return;
            }

            var imgHtml = '<img style="max-width:100%;" src="' + url + '"/>';
            editor.command(e, 'insertHtml', imgHtml, callback);
        });
    }

});
// vedio 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'vedio';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var reg = /^\s*(http:\/\/|https:\/\/).+(\.swf|\.ogg|\.mp4|\.webm)/i;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.vedio,
            commandName: 'unLink'
        });

        // 视频代码模板 - flash
        var vedioTplFlash = [
            '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ',
            '        codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" ',
            '        width="#{width}" ',
            '        height="#{height}" >',
            '   <param name="movie" ',
            '          value="#{vedioUrl}" />',
            '   <param name="allowFullScreen" value="true" />',
            '   <param name="allowScriptAccess" value="always" />',
            '   <param value="transparent" name="wmode" />',
            '   <embed src="#{vedioUrl}"',
            '          width="#{width}" ',
            '          height="#{height}" ',
            '          name="cc_8E6888CDEA7087C49C33DC5901307461" ',
            '          allowFullScreen="true" ',
            '          wmode="transparent" ',
            '          allowScriptAccess="always" ',
            '          pluginspage="http://www.macromedia.com/go/getflashplayer" ',
            '          type="application/x-shockwave-flash"/>',
            '</object>',
            '<p><br></p>'
        ].join('');

        // 视频代码模板 - h5
        var vedioTplH5 = [
            '<video src="#{vedioUrl}" controls="controls" width="#{width}" height="#{height}">',
            '</video>',
            '<p><br></p>'
        ].join('');

        // 创建 panel 内容
        var $content = $('<div></div>');
        var $urlInputContainer = $('<div style="margin:20px 10px;"></div>');
        var $urlInput = $('<input type="text" class="block" placeholder="*.swf, *.mp4, *.ogg, *.webm"/>');
        $urlInputContainer.append($urlInput);
        var $sizeContainer = $('<div style="margin:20px 10px;"></div>');
        var $widthInput = $('<input type="text" value="480" style="width:50px;text-align:center;"/>');
        var $heightInput = $('<input type="text" value="360" style="width:50px;text-align:center;"/>');
        $sizeContainer.append('<span> ' + lang.width + ' </span>')
                      .append($widthInput)
                      .append('<span> px &nbsp;&nbsp;&nbsp;</span>')
                      .append('<span> ' + lang.height + ' </span>')
                      .append($heightInput)
                      .append('<span> px </span>');
        var $btnContainer = $('<div></div>');
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');
        $btnContainer.append($btnSubmit).append($btnCancel);
        $content.append($urlInputContainer).append($sizeContainer).append($btnContainer);

        // 取消按钮
        $btnCancel.click(function () {
            $urlInput.val('');
            menu.dropPanel.hide();
        });

        // 确定按钮
        $btnSubmit.click(function (e) {
            var url = $.trim($urlInput.val());
            var width = parseInt($widthInput.val());
            var height = parseInt($heightInput.val());
            var html;

            // 验证数据
            if (!url) {
                menu.dropPanel.focusFirstInput();
                return;
            }

            if (!reg.test(url)) {
                alert('视频链接格式错误！');
                menu.dropPanel.focusFirstInput();
                return;
            }

            if (isNaN(width) || isNaN(height)) {
                alert('宽度或高度不是数字！');
                return;
            }

            // 拼接 vedio 代码
            if ((/.swf/i).test(url)) {
                // swf 格式
                html = vedioTplFlash.replace(/#{vedioUrl}/ig, url)
                                    .replace(/#{width}/ig, width)
                                    .replace(/#{height}/ig, height);
            } else {
                // 其他格式，如ogg mp4 webm
                html = vedioTplH5.replace(/#{vedioUrl}/ig, url)
                                 .replace(/#{width}/ig, width)
                                 .replace(/#{height}/ig, height);
            }

            // 执行命令
            editor.command(e, 'insertHtml', html);
            $urlInput.val('');
        });

        // 创建panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 400
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// location 菜单
_e(function (E, $) {

    // 百度地图的key
    E.baiduMapAk = 'TVhjYjq1ICT2qqL5LdS8mwas';

    var index = 1;

    E.createMenu(function (check) {
        if (index++ > 1) {
            E.error('目前不支持在一个页面多个编辑器上同时使用地图，可通过自定义菜单配置去掉地图菜单');
            return;
        }

        var menuId = 'location';
        if (!check(menuId)) {
            return;
        }

        var editor = this;
        var config = editor.config;
        var lang = config.lang;
        var ak = config.mapAk;

        // 地图的变量存储到这个地方
        editor.mapData = {};
        var mapData = editor.mapData;

        // ---------- 地图事件 ----------
        mapData.markers = [];
        mapData.mapContainerId = 'map' + E.random();

        mapData.clearLocations = function () {
            var map = mapData.map;
            if (!map) {
                return;
            }
            map.clearOverlays();

            //同时，清空marker数组
            mapData.markers = [];
        };

        mapData.searchMap = function () {
            var map = mapData.map;
            if (!map) {
                return;
            }

            var BMap = window.BMap;
            var cityName = $cityInput.val();
            var locationName = $searchInput.val();
            var myGeo, marker;

            if(cityName !== ''){
                if(!locationName || locationName === ''){
                    map.centerAndZoom(cityName, 11);
                }

                //地址解析
                if(locationName && locationName !== ''){
                    myGeo = new BMap.Geocoder();
                    // 将地址解析结果显示在地图上,并调整地图视野
                    myGeo.getPoint(locationName, function(point){
                        if (point) {
                            map.centerAndZoom(point, 13);
                            marker = new BMap.Marker(point);
                            map.addOverlay(marker);
                            marker.enableDragging();  //允许拖拽
                            mapData.markers.push(marker);  //将marker加入到数组中
                        }else{
                            // alert('未找到');
                            map.centerAndZoom(cityName, 11);  //找不到则重新定位到城市
                        }
                    }, cityName);
                }
            } // if(cityName !== '')
        };

        // load script 之后的 callback
        window.baiduMapCallBack = function(){
            var BMap = window.BMap;
            if (!mapData.map) {
                // 创建Map实例
                mapData.map = new BMap.Map(mapData.mapContainerId);
            }
            var map = mapData.map;

            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

            //根据IP定位
            function locationFun(result){
                var cityName = result.name;
                map.setCenter(cityName);

                // 设置城市名称
                $cityInput.val(cityName);
                if (E.placeholder) {
                    $searchInput.focus();
                }
                // 并绑定搜索事件
                var timeoutId;
                function search(e) {
                    if (e.type === 'keyup' && e.keyCode === 13) {
                        e.preventDefault();
                    }
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    timeoutId = setTimeout(mapData.searchMap, 500);
                }
                $cityInput.on('keyup change paste', search);
                $searchInput.on('keyup change paste', search);
            }
            var myCity = new BMap.LocalCity();
            myCity.get(locationFun);

            //鼠标点击，创建位置
            map.addEventListener("click", function(e){
                var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat)); 
                map.addOverlay(marker);  
                marker.enableDragging();
                mapData.markers.push(marker);  //加入到数组中
            });
        };

        mapData.loadMapScript = function () {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "http://api.map.baidu.com/api?v=2.0&ak=" + ak + "&callback=baiduMapCallBack";  // baiduMapCallBack是一个本地函数
            document.body.appendChild(script);
        };

        // 初始化地图
        mapData.initMap = function () {
            if (window.BMap) {
                // 不是第一次，直接处理地图即可
                window.baiduMapCallBack();
            } else {
                // 第一次，先加载地图 script，再处理地图（script加载完自动执行处理）
                mapData.loadMapScript();
            }
        };

        // ---------- 创建 menu 对象 ----------

        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.location
        });

        editor.menus[menuId] = menu;

        // ---------- 构建UI ----------

        // panel content 
        var $content = $('<div></div>');

        // 搜索框
        var $inputContainer = $('<div style="margin:10px 0;"></div>');
        var $cityInput = $('<input type="text"/>');
        $cityInput.css({
            width: '80px',
            'text-align': 'center'
        });
        var $searchInput = $('<input type="text"/>');
        $searchInput.css({
            width: '300px',
            'margin-left': '10px'
        }).attr('placeholder', lang.searchlocation);
        var $clearBtn = $('<button class="right link">' + lang.clearLocation + '</button>');
        $inputContainer.append($clearBtn)
                       .append($cityInput)
                       .append($searchInput);
        $content.append($inputContainer);

        // 清除位置按钮
        $clearBtn.click(function (e) {
            $searchInput.val('');
            $searchInput.focus();
            mapData.clearLocations();
            e.preventDefault();
        });

        // 地图
        var $map = $('<div id="' + mapData.mapContainerId + '"></div>');
        $map.css({
            height: '260px',
            width: '100%',
            position: 'relative',
            'margin-top': '10px',
            border: '1px solid #f1f1f1'
        });
        var $mapLoading = $('<span>' + lang.loading + '</span>');
        $mapLoading.css({
            position: 'absolute',
            width: '100px',
            'text-align': 'center',
            top: '45%',
            left: '50%',
            'margin-left': '-50px'
        });
        $map.append($mapLoading);
        $content.append($map);

        // 按钮
        var $btnContainer = $('<div style="margin:10px 0;"></div>');
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');
        var $checkLabel = $('<label style="display:inline-block;margin-top:10px;color:#666;"></label>');
        var $check = $('<input type="checkbox">');
        $checkLabel.append($check).append('<span style="display:inline-block;margin-left:5px;">  ' + lang.dynamicMap + '</span>');
        $btnContainer.append($checkLabel)
                     .append($btnSubmit)
                     .append($btnCancel);
        $content.append($btnContainer);

        function callback() {
            $searchInput.val('');
        }

        // 『取消』按钮事件
        $btnCancel.click(function (e) {
            callback();
            menu.dropPanel.hide();
            e.preventDefault();
        });

        // 『确定』按钮事件
        $btnSubmit.click(function (e) {
            var map = mapData.map,
                isDynamic = $check.is(':checked'),
                markers =  mapData.markers,

                center = map.getCenter(),
                centerLng = center.lng,
                centerLat = center.lat,

                zoom = map.getZoom(),

                size = map.getSize(),
                sizeWidth = size.width,
                sizeHeight = size.height,

                position,
                src,
                iframe;

            if(isDynamic){
                //动态地址
                src = 'http://ueditor.baidu.com/ueditor/dialogs/map/show.html#';
            }else{
                //静态地址
                src = 'http://api.map.baidu.com/staticimage?';
            }

            //src参数
            src = src +'center=' + centerLng + ',' + centerLat +
                '&zoom=' + zoom +
                '&width=' + sizeWidth +
                '&height=' + sizeHeight;
            if(markers.length > 0){
                src = src + '&markers=';

                //添加所有的marker
                $.each(markers, function(key, value){
                    position = value.getPosition();
                    if(key > 0){
                        src = src + '|';
                    }
                    src = src + position.lng + ',' + position.lat;
                });
            }

            if(isDynamic){
                if(markers.length > 1){
                    alert( lang.langDynamicOneLocation );
                    return;
                }

                src += '&markerStyles=l,A';

                //插入iframe
                iframe = '<iframe class="ueditor_baidumap" src="{src}" frameborder="0" width="' + sizeWidth + '" height="' + sizeHeight + '"></iframe>';
                iframe = iframe.replace('{src}', src);
                editor.command(e, 'insertHTML', iframe, callback);
            }else{
                //插入图片
                editor.command(e, 'insertHTML', '<img style="max-width:100%;" src="' + src + '"/>', callback);
            }
        });

        // 根据 UI 创建菜单 panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 500
        });

        // ---------- 事件 ----------

        // render 时执行事件
        menu.onRender = function () {
            if (ak === E.baiduMapAk) {
                E.warn('建议在配置中自定义百度地图的mapAk，否则可能影响地图功能');
            }
        };

        // click 事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;
            var firstTime = false;

            // -------------隐藏-------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示-------------
            if (!mapData.map) {
                // 第一次，先加载地图
                firstTime = true;
            }
            mapData.initMap();
            dropPanel.show();

            if (!firstTime) {
                $searchInput.focus();
            }
        };

    });

});
// insertcode 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'insertcode';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var $txt = editor.txt.$txt;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.insertcode
        });

        // click 事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // 隐藏
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // 显示
            $textarea.val('');
            dropPanel.show();
        };

        // 选中状态下的 click 事件
        menu.clickEventSelected = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // 隐藏
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // 显示
            dropPanel.show();

            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'pre');
            var $targetElem;
            var className;
            if (targetElem) {
                // 确定找到 pre 之后，再找 code
                targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
            }
            if (!targetElem) {
                return;
            }
            $targetElem = $(targetElem);

            // 赋值内容
            $textarea.val($targetElem.text());
            if ($langSelect) {
                // 赋值语言
                className = $targetElem.attr('class');
                if (className) {
                    $langSelect.val(className.split(' ')[0]);
                }
            }
        };

        // 定义更新选中状态的事件
        menu.updateSelectedEvent = function () {
            var self = this; //菜单对象
            var editor = self.editor;
            var rangeElem;

            rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'pre');

            if (rangeElem) {
                return true;
            }

            return false;
        };

        // 创建 panel
        var $content = $('<div></div>');
        var $textarea = $('<textarea></textarea>');
        var $langSelect;
        contentHandle($content);
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 500
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;

        // ------ 增加 content 内容 ------
        function contentHandle($content) {
            // textarea 区域
            var $textareaContainer = $('<div></div>');
            $textareaContainer.css({
                margin: '15px 5px 5px 5px',
                height: '160px',
                'text-align': 'center'
            });
            $textarea.css({
                width: '100%',
                height: '100%',
                padding: '10px'
            });
            $textarea.on('keydown', function (e) {
                // 取消 tab 键默认行为
                if (e.keyCode === 9) {
                    e.preventDefault();
                }
            });
            $textareaContainer.append($textarea);
            $content.append($textareaContainer);

            // 按钮区域
            var $btnContainer = $('<div></div>');
            var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
            var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');
            
            // highlightjs 语言列表
            var hljs = window.hljs;
            if (hljs && hljs.listLanguages) {
                $langSelect = $('<select></select>');
                $langSelect.css({
                    'margin-top': '9px',
                    'margin-left': '5px'
                });
                $.each(hljs.listLanguages(), function (key, lang) {
                    $langSelect.append('<option value="' + lang + '">' + lang + '</option>');
                });
            }

            $btnContainer.append($btnSubmit).append($btnCancel);
            $langSelect && $btnContainer.append($langSelect);
            $content.append($btnContainer);

            // 取消按钮
            $btnCancel.click(function () {
                menu.dropPanel.hide();
            });

            // 确定按钮
            var codeTpl = '<pre style="max-width:100%;overflow-x:auto;"><code{#langClass}>{#content}</code></pre>';
            $btnSubmit.click(function (e) {
                var val = $textarea.val();
                if (!val) {
                    // 无内容
                    $textarea.focus();
                    return;
                }

                var lang = $langSelect ? $langSelect.val() : ''; // 获取高亮语言
                var langClass = '';
                var doHightlight = function () {
                    $('pre code').each(function(i, block) {
                        if (window.hljs) {
                            hljs.highlightBlock(block);
                        }
                    });
                };

                // 语言高亮样式
                if (lang) {
                    langClass = ' class="' + lang + ' hljs"';
                }

                // 替换标签
                val = val.replace(/&/gm, '&amp;')
                         .replace(/</gm, '&lt;')
                         .replace(/>/gm, '&gt;');

                // ---- menu 未选中状态 ----
                if (!menu.selected) {
                    // 拼接html
                    var html = codeTpl.replace('{#langClass}', langClass).replace('{#content}', val);
                    editor.command(e, 'insertHtml', html, doHightlight);
                    return;
                }

                // ---- menu 选中状态 ----
                var rangeElem = editor.getRangeElem();
                var targetElem = editor.getSelfOrParentByName(rangeElem, 'pre');
                var $targetElem;
                if (targetElem) {
                    // 确定找到 pre 之后，再找 code
                    targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
                }
                if (!targetElem) {
                    return;
                }
                $targetElem = $(targetElem);

                function commandFn() {
                    var className;
                    if (lang) {
                        className = $targetElem.attr('class');
                        if (className !== lang + ' hljs') {
                            $targetElem.attr('class', lang + ' hljs');
                        }
                    }
                    $targetElem.html(val);
                }
                function callback() {
                    editor.restoreSelectionByElem(targetElem);
                    doHightlight();
                }
                editor.customCommand(e, commandFn, callback);
            });
        }

        // ------ enter 时，不另起标签，只换行 ------
        $txt.on('keydown', function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
            if (!targetElem) {
                return;
            }

            editor.command(e, 'insertHtml', '\n');
        });

        // ------ 点击时，禁用其他标签 ------
        function updateMenu() {
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
            if (targetElem) {
                // 在 code 之内，禁用其他菜单
                editor.disableMenusExcept('insertcode');
            } else {
                // 不是在 code 之内，启用其他菜单
                editor.enableMenusExcept('insertcode');
            }
        }
        $txt.on('keyup click', function (e) {
            // 此处必须使用 setTimeout 异步处理，否则不对
            setTimeout(updateMenu); 
        });
    });

});
// undo 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'undo';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.undo
        });

        // click 事件
        menu.clickEvent = function (e) {
            editor.undo();
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;


        // ------------ enter 时，做记录 ------------
        editor.ready(function () {
            var editor = this;
            var $txt = editor.txt.$txt;
            $txt.on('keydown', function (e) {
                if (e.keyCode !== 13) {
                    // 只监听 tab 按钮
                    return;
                }
                editor.undoRecord();
            });
        });
    });

});
// redo 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'redo';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.redo
        });

        // click 事件
        menu.clickEvent = function (e) {
            editor.redo();
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// 全屏 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'fullscreen';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        var isSelected = false;
        var txtHeight;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.fullscreen
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            // 增加样式
            var $editorContainer = editor.$editorContainer;
            $editorContainer.addClass('wangEditor-fullscreen');

            // 记录高度
            var $txt = editor.txt.$txt;
            txtHeight = $txt.height();

            // 重新设置高度
            var menuContainer = editor.menuContainer;
            $txt.height(E.$window.height() - menuContainer.height());

            // 取消menuContainer的内联样式（menu吸顶时，会为 menuContainer 设置一些内联样式）
            editor.menuContainer.$menuContainer.attr('style', '');

            // 保存状态
            isSelected = true;

            // 记录编辑器是否全屏
            editor.isFullScreen = true;
        };

        // 定义选中状态的 click 事件
        menu.clickEventSelected = function (e) {
            // 取消样式
            var $editorContainer = editor.$editorContainer;
            $editorContainer.removeClass('wangEditor-fullscreen');

            // 还原高度
            var $txt = editor.txt.$txt;
            if (txtHeight) {
                $txt.height(txtHeight);
            }

            // 保存状态
            isSelected = false;

            // 记录编辑器是否全屏
            editor.isFullScreen = false;
        };

        // 定义选中事件
        menu.updateSelectedEvent = function (e) {
            return isSelected;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// 渲染menus
_e(function (E, $) {

    E.fn.renderMenus = function () {

        var editor = this;
        var menus = editor.menus;
        var menuIds = editor.config.menus;
        var menuContainer = editor.menuContainer;

        var menu;
        var groupIdx = 0;
        $.each(menuIds, function (k, v) {
            if (v === '|') {
                groupIdx++;
                return;
            }

            menu = menus[v];
            if (menu) {
                menu.render(groupIdx);
            }
        });
    };

});
// 渲染menus
_e(function (E, $) {

    E.fn.renderMenuContainer = function () {

        var editor = this;
        var menuContainer = editor.menuContainer;
        var $editorContainer = editor.$editorContainer;

        menuContainer.render();

    };

});
// 渲染 txt
_e(function (E, $) {

    E.fn.renderTxt = function () {

        var editor = this;
        var txt = editor.txt;

        txt.render();

        // ready 时候，计算txt的高度
        editor.ready(function () {
            txt.initHeight();
        });
    };

});
// 渲染 container
_e(function (E, $) {

    E.fn.renderEditorContainer = function () {

        var editor = this;
        var $valueContainer = editor.$valueContainer;
        var $editorContainer = editor.$editorContainer;
        var $txt = editor.txt.$txt;
        var $prev, $parent;

        // 将编辑器渲染到页面中
        if ($valueContainer === $txt) {
            $prev = editor.$prev;
            $parent = editor.$parent;

            if ($prev && $prev.length) {
                // 有前置节点，就插入到前置节点的后面
                $prev.after($editorContainer);
            } else {
                // 没有前置节点，就直接插入到父元素
                $parent.prepend($editorContainer);
            }

        } else {
            $valueContainer.after($editorContainer);
            $valueContainer.hide();
        }
    };

});
// 菜单事件
_e(function (E, $) {

    // 绑定每个菜单的click事件
    E.fn.eventMenus = function () {

        var menus = this.menus;

        // 绑定菜单的点击事件
        $.each(menus, function (k, v) {
            v.bindEvent();
        });

    };

});
// 菜单container事件
_e(function (E, $) {

    E.fn.eventMenuContainer = function () {

    };

});
// 编辑区域事件
_e(function (E, $) {

    E.fn.eventTxt = function () {

        var txt = this.txt;

        // txt内容变化时，保存选区
        txt.saveSelectionEvent();

        // txt内容变化时，随时更新 value
        txt.updateValueEvent();

        // txt内容变化时，随时更新 menu style
        txt.updateMenuStyleEvent();

        // // 鼠标hover时，显示 p head 高度（暂时关闭这个功能）
        // if (!/ie/i.test(E.userAgent)) {
        //     // 暂时不支持IE
        //     txt.showHeightOnHover();
        // }
    };

});
// upload img 插件
(function (window, E, $) {

    E.ready(function () {
        var editor = this;
        var config = editor.config;
        var uploadImgUrl = config.uploadImgUrl;
        var uploadTimeout = config.uploadTimeout;
        var event;

        if (!uploadImgUrl) {
            return;
        }

        // 获取editor的上传dom
        var $uploadContent = editor.$uploadContent;

        // 自定义UI，并添加到上传dom节点上
        var $uploadIcon = $('<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>');
        $uploadContent.append($uploadIcon);

        // ---------- 构建上传对象 ----------
        var upfile = new E.UploadFile({
            uploadUrl: uploadImgUrl,
            timeout: uploadTimeout,
            fileAccept: 'image/*'    // 只允许选择图片 
        });

        // 成功事件
        upfile.onSuccess = function (result) {
            var html = '<img src="' + result + '" style="max-width:100%"/>';
            editor.command(event, 'insertHtml', html);
        };

        // 失败事件
        upfile.onFailed = function (error) {
            alert('上传图片错误: \n' + error);
        };

        // 超时事件
        upfile.onTimeout = function () {
            alert('上传超时，请重试');
            if (location.hostname.toLowerCase() === 'wangeditor.github.io') {
                // 官网demo的特殊提示
                alert('提示：wangEditor官网demo没有后台服务，因此超时（该alert在实际项目中不会出现）');
            }
        };

        // 选择本地文件，上传
        $uploadIcon.click(function (e) {
            event = e;
            upfile.selectFiles();
        });
    });

})(window, window.wangEditor, window.jQuery);
(function (window, E, $) {

    if (!window.FileReader || !window.FormData) {
        // 如果不支持html5的文档操作，直接返回
        return;
    }

    // 构造函数
    var UploadFile = function (opt) {
        this.uploadUrl = opt.uploadUrl;
        this.timeout = opt.timeout;
        this.fileAccept = opt.fileAccept;
        this.multiple = true;
    };

    // 将以base64的图片url数据转换为Blob
    UploadFile.convertBase64UrlToBlob = function (urlData, filetype){
        //去掉url的头，并转换为byte
        var bytes = window.atob(urlData.split(',')[1]);
        
        //处理异常,将ascii码小于0的转换为大于0
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        var i;
        for (i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }

        // 类型
        if (filetype === '' || !filetype) {
            filetype = 'image/png';
        }

        return new Blob([ab], {type : filetype});
    };

    UploadFile.fn = UploadFile.prototype;

    // clear
    UploadFile.fn.clear = function () {
        this.$input.val('');
        E.log('input value 已清空');
    };

    // 渲染
    UploadFile.fn.render = function () {
        var self = this;
        if (self._hasRender) {
            // 不要重复渲染
            return;
        }

        E.log('渲染dom');

        var fileAccept = self.fileAccept;
        var acceptTpl = fileAccept ? 'accept="' + fileAccept + '"' : '';
        var multiple = self.multiple;
        var multipleTpl = multiple ? 'multiple="multiple"' : '';
        var $input = $('<input type="file" ' + acceptTpl + ' ' + multipleTpl + '/>');
        var $container = $('<div style="display:none;"></div>');

        $container.append($input);
        E.$body.append($container);

        // onchange 事件
        $input.on('change', function (e) {
            self.selected(e, $input.get(0));
        });

        // 记录对象数据
        self.$input = $input;

        // 记录
        self._hasRender = true;
    };

    // 选择
    UploadFile.fn.selectFiles = function () {
        var self = this;

        E.log('使用 html5 方式上传');

        // 先渲染
        self.render();

        // 选择
        E.log('选择文件');
        self.$input.click();
    };

    // 选中文件之后
    UploadFile.fn.selected = function (e, input) {
        var self = this;
        var files = input.files || [];
        if (files.length === 0) {
            return;
        }

        E.log('选中 ' + files.length + ' 个文件');

        // 遍历选中的文件，预览、上传
        $.each(files, function (key, value) {
            self.upload(value);
        });
    };

    // 上传单个文件
    UploadFile.fn.upload = function (file) {
        var self = this;
        var timeout = self.timeout;
        var timeoutFn = self.onTimeout;
        var uploadUrl = self.uploadUrl;
        var failedFn = self.onFailed;
        var successFn = self.onSuccess;
        var filename = file.name || '';
        var fileType = file.type || '';
        var reader = new FileReader();
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        var timeoutId;

        // ------------ begin 预览模拟上传 ------------
        if (location.hostname.toLowerCase() === 'wangeditor.github.io') {
            E.log('预览模拟上传');

            if (window.URL && window.URL.createObjectURL) {
                if (successFn) {
                    successFn.call(self, window.URL.createObjectURL(file));
                } else {
                    alert('上传成功，图片为 ' + window.URL.createObjectURL(file));
                }
            }
            return;
        }
        // ------------ end 预览模拟上传 ------------

        E.log('开始执行 ' + filename + ' 文件的上传');

        // 访问超时
        function timeoutCallback() {
            if (xhr.abort) {
                xhr.abort();
            }

            E.log('上传超时，已终止操作。超时时间为 ' + timeout);
            
            if (timeoutFn) {
                timeoutFn.call(self);
            }

            self.clear();
        }

        // onload事件
        reader.onload = function (e) {
            E.log('已读取' + filename + '文件');

            var base64 = e.target.result || this.result;
            formData.append('wangEditorH5File', UploadFile.convertBase64UrlToBlob(base64, fileType));

            // 上传准备中...
            xhr.open('POST', uploadUrl, true);

            // onload callback
            xhr.onload = function () {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // 服务器应该返回 url 地址
                var resultSrc = xhr.responseText;

                E.log('上传完成，返回结果为 ' + resultSrc);

                if (resultSrc.indexOf('error|') === 0) {
                    // 提示错误
                    if (failedFn) {
                        failedFn.call(self, resultSrc.split('|')[1]);
                    }
                } else {
                    if (successFn) {
                        successFn.call(self, resultSrc);
                    } else {
                        alert('图片上传成功，返回结果是 ' + resultSrc);
                    }
                }

                self.clear();
            };

            // 开始上传
            xhr.send(formData);
            // 开始计时
            timeoutId = setTimeout(timeoutCallback, timeout);

            E.log('上传' + filename + '文件，并开始超时计算');
        };

        // 开始取文件
        reader.readAsDataURL(file);
    };

    // 暴露给 E
    E.UploadFile = UploadFile;

})(window, window.wangEditor, window.jQuery);
(function (window, E, $) {

    if (window.FileReader && window.FormData) {
        // 如果支持 html5 上传，则返回
        return;
    }

    // 构造函数
    var UploadFile = function (opt) {
        this.uploadUrl = opt.uploadUrl;
        this.timeout = opt.timeout;
        this.fileAccept = opt.fileAccept;
        this.multiple = false;
    };

    UploadFile.fn = UploadFile.prototype;

    // clear
    UploadFile.fn.clear = function () {
        this.$input.val('');
        E.log('input value 已清空');
    };

    // 渲染
    UploadFile.fn.render = function () {
        var self = this;
        if (self._hasRender) {
            // 不要重复渲染
            return;
        }

        var uploadUrl = self.uploadUrl;

        E.log('渲染dom');

        var iframeId = 'iframe' + E.random();
        var $iframe = $('<iframe name="' + iframeId + '" id="' + iframeId + '" frameborder="0" width="0" height="0"></iframe>');
        var fileAccept = self.fileAccept;
        var acceptTpl = fileAccept ? 'accept="' + fileAccept + '"' : '';
        var multiple = self.multiple;
        var multipleTpl = multiple ? 'multiple="multiple"' : '';
        var $input = $('<input type="file" ' + acceptTpl + ' ' + multipleTpl + ' name="wangEditorFormFile"/>');
        var $form = $('<form enctype="multipart/form-data" method="post" action="' + uploadUrl + '" target="' + iframeId + '"></form>');
        var $container = $('<div style="display:none;"></div>');

        $form.append($input).append($('<input type="submit" value="Submit"/>'));
        $container.append($form);
        $container.append($iframe);
        E.$body.append($container);

        // onchange 事件
        $input.on('change', function (e) {
            self.selected(e, $input.get(0));
        });

        // 记录对象数据
        self.$input = $input;
        self.$form = $form;
        self.$iframe = $iframe;

        // 记录
        self._hasRender = true;
    };

    // 选择
    UploadFile.fn.selectFiles = function () {
        var self = this;

        E.log('使用 form 方式上传');

        // 先渲染
        self.render();

        // 选择
        E.log('选择文件');
        self.$input.click();
    };

    // 选中文件之后
    UploadFile.fn.selected = function (e, input) {
        var self = this;
        var $iframe = self.$iframe;
        var iframe = $iframe.get(0);
        var iframeWindow = iframe.contentWindow;
        var $form = self.$form;
        var timeoutFn = self.onTimeout;
        var failedFn = self.onFailed;
        var successFn = self.onSuccess;
        var timeout = self.timeout;
        var timeoutId;

        // 超时处理
        function timeoutCallback() {
            iframeWindow.onload = null;

            E.log('上传超时，已终止操作。超时时间为 ' + timeout);

            if (timeoutFn) {
                timeoutFn.call(self);
            }

            self.clear();
        }

        // iframe onload 事件
        iframe.onload = function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            var resultSrc = iframeWindow.document.body.innerHTML;

            E.log('上传结束，返回结果为 ' + resultSrc);

            if (resultSrc.indexOf('error|') === 0) {
                // 提示错误
                if (failedFn) {
                    failedFn.call(self, resultSrc.split('|')[1]);
                }
            } else {
                if (successFn) {
                    successFn.call(self, resultSrc);
                } else {
                    alert('图片上传成功，返回结果是 ' + resultSrc);
                }
            }

            self.clear();
        };

        E.log('提交form，并开始超时计算，等待返回结果...');
        $form.submit();
        timeoutId = setTimeout(timeoutCallback, timeout);

        return false;
    };

    // 暴露给 E
    E.UploadFile = UploadFile;

})(window, window.wangEditor, window.jQuery);
// upload img 插件 粘贴图片
(function (window, E, $) {
    
    E.ready(function () {
        var editor = this;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var config = editor.config;
        var uploadImgUrl = config.uploadImgUrl;
        var uploadTimeout = config.uploadTimeout;

        // 未配置上传图片url，则忽略
        if (!uploadImgUrl) {
            return;
        }

        $txt.on('paste', function (pasteEvent) {
            var data = pasteEvent.clipboardData || pasteEvent.originalEvent.clipboardData;
            if (data == null) {
                // IE8
                return;
            }

            var items = data.items;
            if (!items) {
                return;
            }

            function insertImg(src) {
                var html = '<img src="' + src + '" style="max-width:100%;"/>';
                //执行插入
                editor.command(pasteEvent, 'insertHtml', html);

                E.log('已插入图片，地址 ' + src);
            }

            $.each(items, function (key, value) {
                var fileType = value.type || '';
                if(fileType.indexOf('image') < 0) {
                    // 不是图片
                    return;
                }

                var file = value.getAsFile();
                var reader = new FileReader();
                var xhr;
                var timeoutId;

                E.log('得到一个粘贴图片');

                // 超时处理
                function timeoutCallback() {
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    if (xhr && xhr.abort) {
                        xhr.abort();
                    }

                    E.log('上传超时，超时时间 ' + uploadTimeout);
                    alert('粘贴图片上传超时');
                }

                reader.onload = function (e) {
                    E.log('读取到粘贴的图片');

                    var base64 = e.target.result || this.result;
                    var formData = new FormData();
                    var src;
                    xhr = new XMLHttpRequest();

                    // ------------ begin 预览模拟上传 ------------
                    if (location.hostname.toLowerCase() === 'wangeditor.github.io') {
                        E.log('预览模拟上传');
                        insertImg(base64);
                        return;
                    }
                    // ------------ end 预览模拟上传 ------------

                    xhr.open('POST', uploadImgUrl, true);
                    xhr.onload = function () {
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                        //服务器端要返回图片url地址
                        src = xhr.responseText;
                        E.log('上传完成 得到结果 ' + src);

                        insertImg(src);
                    };

                    formData.append('wangEditorPasteFile', E.UploadFile.convertBase64UrlToBlob(base64, fileType));
                    xhr.send(formData);
                    timeoutId = setTimeout(timeoutCallback, uploadTimeout);

                    E.log('开始上传...并开始超时计算');
                };

                //读取粘贴的文件
                reader.readAsDataURL(file);
            });
        });

    });

})(window, window.wangEditor, window.jQuery);
// 编辑器区域 img toolbar
(function (window, E, $) {

    if (E.userAgent.indexOf('MSIE') > 0) {
        // 暂时不兼容IE环境（IE环境下有自带的图片处理）
        return;
    }
    
    E.ready(function () {
        var editor = this;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var $editorContainer = editor.$editorContainer;
        var $currentImg;

        // 用到的dom节点
        var isRendered = false;
        var $dragPoint = $('<div class="img-drag-point"></div>');
        var $toolbar = $('<div class="txt-toolbar"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');
        var $delete = $('<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>');
        var $zoomSmall = $('<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>');
        var $zoomBig = $('<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>');
        var $floatLeft = $('<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>');
        var $noFloat = $('<a href="#"><i class="wangeditor-menu-img-align-justify"></i></a>');
        var $floatRight = $('<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>');

        // 渲染到页面
        function render() {
            if (isRendered) {
                return;
            }
            
            // 绑定事件
            bindToolbarEvent();
            bindDragEvent();

            // 拼接 渲染到页面上
            $toolbar.append($triangle)
                    .append($delete)
                    .append($zoomSmall)
                    .append($zoomBig)
                    .append($floatLeft)
                    .append($noFloat)
                    .append($floatRight);
            editor.$editorContainer.append($toolbar).append($dragPoint);
            isRendered = true;
        }

        // 绑定toolbar事件
        function bindToolbarEvent() {
            // 统一执行命令的方法
            var commandFn;
            function command(e, callback) {
                if (commandFn) {
                    editor.customCommand(e, commandFn, callback);
                }
            }

            // 删除
            $delete.click(function (e) {
                commandFn = function () {
                    $currentImg.remove();
                };
                command(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // 放大
            $zoomBig.click(function (e) {
                commandFn = function () {
                    var img = $currentImg.get(0);
                    var width = img.width;
                    var height = img.height;
                    width = width * 1.1;
                    height = height * 1.1;

                    $currentImg.css({
                        width: width + 'px',
                        height: height + 'px'
                    });
                };
                command(e, function () {
                    setTimeout(show);
                });
            });

            // 缩小
            $zoomSmall.click(function (e) {
                commandFn = function () {
                    var img = $currentImg.get(0);
                    var width = img.width;
                    var height = img.height;
                    width = width * 0.9;
                    height = height * 0.9;

                    $currentImg.css({
                        width: width + 'px',
                        height: height + 'px'
                    });
                };
                command(e, function () {
                    setTimeout(show);
                });
            });

            // 左浮动
            $floatLeft.click(function (e) {
                commandFn = function () {
                    $currentImg.css({
                        float: 'left'
                    });
                };
                command(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // 右浮动
            $floatRight.click(function (e) {
                commandFn = function () {
                    $currentImg.css({
                        float: 'right'
                    });
                };
                command(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // 无浮动
            $noFloat.click(function (e) {
                commandFn = function () {
                    $currentImg.css({
                        float: 'none'
                    });
                };
                command(e, function () {
                    setTimeout(hide, 100);
                });
            });
        }

        // 绑定drag事件
        function bindDragEvent() {
            var _x, _y;
            var dragMarginLeft, dragMarginTop;
            var imgWidth, imgHeight;

            function mousemove(e) {
                var diffX, diffY;

                // 计算差额
                diffX = e.pageX - _x;
                diffY = e.pageY - _y;

                // --------- 计算拖拽点的位置 ---------
                var currentDragMarginLeft = dragMarginLeft + diffX;
                var currentDragMarginTop = dragMarginTop + diffY;
                $dragPoint.css({
                    'margin-left': currentDragMarginLeft,
                    'margin-top': currentDragMarginTop
                });

                // --------- 计算图片的大小 ---------
                var currentImgWidth = imgWidth + diffX;
                var currentImggHeight = imgHeight + diffY;
                $currentImg.css({
                    width: currentImgWidth,
                    height: currentImggHeight
                });
            }

            $dragPoint.on('mousedown', function(e){
                if (!$currentImg) {
                    return;
                }
                // 当前鼠标位置
                _x = e.pageX;
                _y = e.pageY;

                // 当前拖拽点的位置
                dragMarginLeft = parseFloat($dragPoint.css('margin-left'), 10);
                dragMarginTop = parseFloat($dragPoint.css('margin-top'), 10);

                // 当前图片的大小
                imgWidth = $currentImg.width();
                imgHeight = $currentImg.height();

                // 隐藏 $toolbar
                $toolbar.hide();

                // 绑定计算事件
                E.$body.on('mousemove._dragResizeImg', mousemove);
                E.$body.on('mouseup._dragResizeImg', function (e) {
                    // 取消绑定
                    E.$body.off('mousemove._dragResizeImg');
                    E.$body.off('mouseup._dragResizeImg');

                    // 隐藏，并还原拖拽点的位置
                    hide();
                    $dragPoint.css({
                        'margin-left': dragMarginLeft,
                        'margin-top': dragMarginTop
                    });
                });
            });
        }

        // 显示 toolbar
        function show() {
            if ($currentImg == null) {
                return;
            }
            $currentImg.addClass('clicked');
            var imgPosition = $currentImg.position();
            var imgTop = imgPosition.top;
            var imgLeft = imgPosition.left;
            var imgHeight = $currentImg.outerHeight();
            var imgWidth = $currentImg.outerWidth();

            // --- 定位 dragpoint ---
            $dragPoint.css({
                top: imgTop + imgHeight,
                left: imgLeft + imgWidth
            });
            $dragPoint.show();

            // --- 定位 toolbar ---

            // 计算初步结果
            var top = imgTop + imgHeight;
            var left = imgLeft;
            var marginLeft = 0;

            var txtTop = $txt.position().top;
            var txtHeight = $txt.outerHeight();
            if (top > (txtTop + txtHeight)) {
                // top 不得超出编辑范围
                top = txtTop + txtHeight;
            }

            // 显示（方便计算 margin）
            $toolbar.show();

            // 计算 margin
            var width = $toolbar.outerWidth();
            marginLeft = imgWidth / 2 - width / 2;

            // 定位
            $toolbar.css({
                top: top + 5,
                left: left,
                'margin-left': marginLeft
            });

            // disable 菜单
            editor.disableMenusExcept();
        }
        
        // 隐藏 toolbar
        function hide() {
            if ($currentImg == null) {
                return;
            }
            $currentImg.removeClass('clicked');
            $currentImg = null;

            $toolbar.hide();
            $dragPoint.hide();

            // enable 菜单
            editor.enableMenusExcept();
        }

        // 判断img是否是一个表情
        var emotionConfig = editor.config.emotions;
        function isEmotion(imgSrc) {
            var result = false;
            $.each(emotionConfig, function (k, conf) {
                var flag = false;
                $.each(conf.imgs, function (idx, val) {
                    if (imgSrc === val) {
                        result = true;
                        flag = true;
                        return false;
                    }
                });
                if (flag) {
                    return false;
                }
            });
            return result;
        }

        // click img 事件
        $txt.on('click', 'img', function (e) {
            var $img = $(e.currentTarget);
            var src = $img.attr('src');

            if (!src || isEmotion(src)) {
                // 是一个表情图标
                return;
            }

            // ---------- 不是表情图标 ---------- 

            // 渲染
            render();

            if ($currentImg && ($currentImg.get(0) === $img.get(0))) {
                setTimeout(hide, 100);
                return;
            }

            // 显示 toolbar
            $currentImg = $img;
            show();

            // 阻止冒泡
            e.preventDefault();
            e.stopPropagation();
            
        }).on('click keypress scroll', function (e) {
            setTimeout(hide, 100);
        });

    });

})(window, window.wangEditor, window.jQuery);
// 编辑器区域 table toolbar
(function (window, E, $) {

    E.ready(function () {
        var editor = this;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var $currentTable;

        // 用到的dom节点
        var isRendered = false;
        var $toolbar = $('<div class="txt-toolbar"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');
        var $delete = $('<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>');
        var $zoomSmall = $('<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>');
        var $zoomBig = $('<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>');

        // 渲染到页面
        function render() {
            if (isRendered) {
                return;
            }
            
            // 绑定事件
            bindEvent();

            // 拼接 渲染到页面上
            $toolbar.append($triangle)
                    .append($delete)
                    .append($zoomSmall)
                    .append($zoomBig);
            editor.$editorContainer.append($toolbar);
            isRendered = true;
        }

        // 绑定事件
        function bindEvent() {
            // 统一执行命令的方法
            var commandFn;
            function command(e, callback) {
                if (commandFn) {
                    editor.customCommand(e, commandFn, callback);
                }
            }

            // 删除
            $delete.click(function (e) {
                commandFn = function () {
                    $currentTable.remove();
                };
                command(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // 放大
            $zoomBig.click(function (e) {
                commandFn = function () {
                    $currentTable.css({
                        width: '100%'
                    });
                };
                command(e, function () {
                    setTimeout(show);
                });
            });

            // 缩小
            $zoomSmall.click(function (e) {
                commandFn = function () {
                    $currentTable.css({
                        width: 'auto'
                    });
                };
                command(e, function () {
                    setTimeout(show);
                });
            });
        }

        // 显示 toolbar
        function show() {
            if ($currentTable == null) {
                return;
            }
            $currentTable.addClass('clicked');
            var tablePosition = $currentTable.position();
            var tableTop = tablePosition.top;
            var tableLeft = tablePosition.left;
            var tableHeight = $currentTable.outerHeight();
            var tableWidth = $currentTable.outerWidth();

            // --- 定位 toolbar ---

            // 计算初步结果
            var top = tableTop + tableHeight;
            var left = tableLeft;
            var marginLeft = 0;

            var txtTop = $txt.position().top;
            var txtHeight = $txt.outerHeight();
            if (top > (txtTop + txtHeight)) {
                // top 不得超出编辑范围
                top = txtTop + txtHeight;
            }

            // 显示（方便计算 margin）
            $toolbar.show();

            // 计算 margin
            var width = $toolbar.outerWidth();
            marginLeft = tableWidth / 2 - width / 2;

            // 定位
            $toolbar.css({
                top: top + 5,
                left: left,
                'margin-left': marginLeft
            });
        }
        
        // 隐藏 toolbar
        function hide() {
            if ($currentTable == null) {
                return;
            }
            $currentTable.removeClass('clicked');
            $currentTable = null;
            $toolbar.hide();
        }

        // click table 事件
        $txt.on('click', 'table', function (e) {
            var $table = $(e.currentTarget);

            // 渲染
            render();

            if ($currentTable && ($currentTable.get(0) === $table.get(0))) {
                setTimeout(hide, 100);
                return;
            }

            // 显示 toolbar
            $currentTable = $table;
            show();

            // 阻止冒泡
            e.preventDefault();
            e.stopPropagation();
            
        }).on('click keypress scroll', function (e) {
            setTimeout(hide, 100);
        });
        E.$body.on('click keypress scroll', function (e) {
            setTimeout(hide, 100);
        });
    });

})(window, window.wangEditor, window.jQuery);
// menu吸顶
(function (window, E, $) {

    E.ready(function () {
        var editor = this;
        var menuFixed = editor.config.menuFixed;
        if (menuFixed === false || typeof menuFixed !== 'number') {
            // 没有配置菜单吸顶
            return;
        }
        var bodyMarginTop = parseFloat(E.$body.css('margin-top'), 10);
        if (isNaN(bodyMarginTop)) {
            bodyMarginTop = 0;
        }

        var $editorContainer = editor.$editorContainer;
        var editorTop = $editorContainer.offset().top;
        var editorHeight = $editorContainer.outerHeight();

        var $menuContainer = editor.menuContainer.$menuContainer;
        var menuCssPosition = $menuContainer.css('position');
        var menuCssTop = $menuContainer.css('top');
        var menuWidth = $menuContainer.width();
        var menuHeight = $menuContainer.outerHeight();
        var menuTop = $menuContainer.offset().top;

        var $txt = editor.txt.$txt;

        E.$window.scroll(function () {
            //全屏模式不支持
            if (editor.isFullScreen) {
                return;
            }

            var sTop = $(window).scrollTop();
            if (sTop >= menuTop && sTop + menuFixed + menuHeight + 30 < editorTop + editorHeight) {
                // 吸顶
                $menuContainer.css({
                    position: 'fixed',
                    top: menuFixed
                });

                // 固定宽度
                $menuContainer.width(menuWidth);

                // 增加body margin-top
                E.$body.css({
                    'margin-top': bodyMarginTop + menuHeight
                });
            } else {
                // 取消吸顶
                $menuContainer.css({
                    position: menuCssPosition,
                    top: menuCssTop
                });

                // 取消宽度固定
                $menuContainer.css('width', '100%');

                // 还原 body margin-top
                E.$body.css({
                    'margin-top': bodyMarginTop
                });
            }
        });
    });

})(window, window.wangEditor, window.jQuery);
// 版权提示
_e(function (E, $) {
    E.info('本页面富文本编辑器由 wangEditor 提供 http://wangeditor.github.io/ ');
});
});