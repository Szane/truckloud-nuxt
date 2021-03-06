// let store = require('~/plugins/store');
// let BootstrapDialog = require('~/plugins/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js');
// window.Parsley
//     .addValidator('phone', {
//         requirementType: 'string',
//         validateString: function (value, requirement) {
//             if (!requirement) return requirement;
//             return /^1[3|4|5|7|8][0-9]\d{8}$/.test(value);
//         },
//         messages: {
//             en: 'input the mobile NO.',
//             'zh-cn': '请输入正确的手机号码'
//         }
//     });

//两端去空格函数
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

exports.addEvent = function (obj, name, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + name, func);
    } else {
        obj.addEventListener(name, func, false);
    }
};

exports.convertBase64StrToArray = function (base64Str) {
    let bytes = window.atob(base64Str); //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return ab
};

exports.aesEncryptModeCFB = function (msg, pwd) {
    let magicNo = exports.generateRandomAlphaNum(32);

    let key = CryptoJS.enc.Hex.parse(CryptoJS.MD5(pwd).toString());
    let iv = CryptoJS.enc.Hex.parse(magicNo);

    let identifyCode = CryptoJS.AES.encrypt(msg, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return [magicNo, identifyCode]
};

exports.generateRandomAlphaNum = function (len) {
    let rdmString = '';
    // toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
    for (; rdmString.length < len;) {
        rdmString += Math.random().toString(16).substr(2)
    }
    return rdmString.substr(0, len)
};

exports.centerModals = function (ele) {
    ele.each(function (i) {
        let $clone = $(this).clone().css('display', 'block').appendTo('body');
        let top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
};

exports.daterangepickerlocale = {
    format: 'YYYY-MM-DD',
    applyLabel: '确定',
    cancelLabel: '取消',
    fromLabel: '起始时间',
    toLabel: '结束时间',
    customRangeLabel: '自定义',
    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    firstDay: 1
};

exports.daterangepickerlocaletime = {
    format: 'YYYY-MM-DD HH:mm',
    applyLabel: '确定',
    cancelLabel: '取消',
    fromLabel: '起始时间',
    toLabel: '结束时间',
    customRangeLabel: '自定义',
    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    firstDay: 1
};

exports.clearStoreData = function (key, value) {
    store.clear()
};

exports.setStoreData = function (key, value) {
    store.set(key, value)
};

function getStoreData(key) {
    return store.get(key)
}
exports.getStoreData = getStoreData;

exports.removeStoreData = function (key) {
    store.remove(key)
};

exports.dealErrorCommon = function (obj, response) {
    if (response.status > 699 && response.status < 800) {
        console.log('700 error')
        BootstrapDialog.show({
            title: '<i class= "fa fa-fw fa-info-circle"></i><strong>错误信息</strong>',
            cssClass: 'modal-danger',
            message: '<i class="text-warning fa fa-fw fa-warning" style="font-size: 40px"></i>' + response.data.msg,
            buttons: [{
                label: '<i class= "fa fa-fw fa-close"></i>关闭',
                cssClass: 'btn-outline',
                action: function (dialogItself) {
                    dialogItself.close()
                }
            }]
        })
    } else if (response.status === 404) {
        obj.$router.push({
            path: '/error404'
        })
    } else if (response.status === 401) {
        obj.$router.push({
            path: '/error401'
        })
    } else {
        console.log('else error');
        console.log(response);
        obj.setError(response.status, response);
        obj.$router.push({
            path: '/error'
        })
    }
}

exports.dealAlertCommon = function (obj, response) {
    if (response.status > 699 && response.status < 800) {
        console.log('700 error');
        alert(response.data.msg)
    } else if (response.status > 401) {
        obj.$router.push({
            path: '/system/error401'
        })
    } else {
        console.log(response.data);
        obj.setError(response.status, response.data.description);
        obj.$router.push({
            path: '/system/error'
        })
    }
}

exports.dealConfrimCommon = function (message, callbackFunc) {
    BootstrapDialog.confirm({
        title: '<i class= "fa fa-fw fa-info-circle"></i><strong>确认信息</strong>',
        message: '<i class="text-warning fa fa-fw fa-question-circle" style="font-size: 40px"></i>' + message,
        cssClass: 'modal-primary',
        btnOKLabel: '确认',
        btnOKClass: 'btn-info',
        btnCancelLabel: '取消',
        btnCancelClass: 'btn-cancel',
        callback: function (result) {
            if (result) {
                callbackFunc()
            }
        }
    })
}

exports.dealSuccessCommon = function (message) {
    BootstrapDialog.show({
        title: '<i class= "fa fa-fw fa-info-circle"></i><strong>提示信息</strong>',
        cssClass: 'modal-success',
        message: '<i class="tex t-warning glyphicon glyphicon-ok" style="font-size: 40px"></i>' + message,
        buttons: [{
            label: '<i class= "fa fa-fw fa-close"></i>关闭',
            cssClass: 'btn-info',
            action: function (dialogItself) {
                dialogItself.close()
            }
        }]
    })
}

exports.dealPromptCommon = function (message) {
    BootstrapDialog.show({
        title: '<i class= "fa fa-fw fa-info-circle"></i><strong>提示信息</strong>',
        cssClass: 'msg-dialog',
        message: '<i class="text-warning fa fa-fw fa-warning" style="font-size: 40px"></i>' + message,
        buttons: [{
            label: '<i class= "fa fa-fw fa-close"></i>关闭',
            cssClass: 'btn-info',
            action: function (dialogItself) {
                dialogItself.close()
            }
        }]
    })
}

exports.dealWarningCommon = function (message) {
    BootstrapDialog.show({
        title: '<i class= "fa fa-fw fa-info-circle"></i><strong>警告信息</strong>',
        cssClass: 'modal-warning',
        message: '<i class="text-warning fa fa-fw fa-warning" style="font-size: 40px"></i>' + message,
        buttons: [{
            label: '<i class= "fa fa-fw fa-close"></i>关闭',
            cssClass: 'btn-outline',
            action: function (dialogItself) {
                dialogItself.close()
            }
        }]
    })
}

exports.changeTableClass = function (tableObj) {
    tableObj.on('click-row.bs.table', function (e, row, $element) {
        $('.success').removeClass('success')
        $($element).addClass('success')
    })
}

exports.reSizeCall = function () {
    let topOffset = 190
    let height = $(window).height()
    let toolbar = $('.panel-toolbar')
    let toolbarHeight = 0
    if (toolbar) {
        toolbarHeight = toolbar.height()
    }
    $('.auto-height').height(height - toolbarHeight - topOffset)
    $('.hidedesk').show()
}

exports.getTableHeight = function () {
    let topOffset = 210
    let height = $(window).height()
    let toolbar = $('.panel-toolbar')
    let toolbarHeight = 0
    if (toolbar) {
        toolbarHeight = toolbar.height()
    }
    let navtabs = $('.nav-tabs')
    let navtabsHeight = 0
    if (navtabs) {
        navtabsHeight = 40
    }
    height = height - toolbarHeight - navtabsHeight - topOffset
    return height
}

exports.initCkeditor = function (textareaID) {
    CKEDITOR.replace(textareaID)
}

exports.selectCheck = function (_self, key, msg) {
    let item = $('#' + key).val()
    if (!item) {
        alert(msg);
        return false
    } else {
        _self.workRow[key] = item[0]
        return true
    }
}

exports.initSelect2 = function (jqItem, sdata) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        tags: false,
        width: '100%',
        data: sdata,
        multiple: true
    })
}
exports.initSelect2Editable = function (jqItem, sdata) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        width: '100%',
        data: sdata,
        multiple: true,
        tags: false
    })
}

exports.getSelect2Val = function (key) {
    let item = $('#' + key).val()
    if (!item || item.length != 1) {
        return ''
    } else {
        return item[0]
    }
}

exports.initSelect2Width = function (jqItem, sdata, width) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        tags: false,
        width: width,
        data: sdata,
        multiple: true
    })
}

exports.initSelect2Placeholder = function (jqItem, sdata, placeholder) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        placeholder: placeholder,
        tags: false,
        width: '200',
        data: sdata,
        multiple: true
    })
}

exports.initSelect2Single = function (jqItem, sdata) {
    jqItem.select2({
        minimumResultsForSearch: Infinity,
        language: 'zh-CN',
        tags: false,
        width: '100%',
        data: sdata
    })
    jqItem.val("")
}

exports.initSelect2SingleWithSearch = function (jqItem, sdata) {
    jqItem.select2({
        language: 'zh-CN',
        tags: false,
        data: sdata
    })
    jqItem.val("")
}

exports.initSelect2SingleWithSearchPlaceholder = function (jqItem, sdata, placeholder) {
    jqItem.select2({
        language: 'zh-CN',
        placeholder: placeholder,
        data: sdata
    })
}

exports.initDatepicker = function (jqItem) {
    jqItem.datepicker({
        language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd'
    })
}

exports.initDatepickerStart = function (jqItem) {
    jqItem.datepicker({
        language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd',
        startDate: new Date()
    })
}

exports.imagesFileUpload = function (_self, obj, row, url, key, method, tbobj) {
    let maxsize = 2 * 1024 * 1024; //2M
    let files = _self.files
    let oldRow = $.extend(true, {}, row)
    let fileTypes = new Array('jpg', 'jpeg', 'png', 'gif', 'bmp')
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            let filename = files[i].name
            let nameSplit = filename.split('.')
            let postfix = nameSplit[nameSplit.length - 1]
            let fileTypeFlag = '0'
            for (let idx = 0; idx < fileTypes.length; idx++) {
                if (fileTypes[idx] === postfix) {
                    fileTypeFlag = '1'
                }
            }
            if (fileTypeFlag === '0') {
                alert('图片文件必须是jpg、jpeg、png、gif、bmp')
                return
            }
            if (files[i].size > maxsize) {
                alert('最大只允许上传2M的文件')
                return
            }
            let formData = new FormData();
            formData.append('file', files[i])

            obj.$http.post(url + 'upload', formData).then((response) => {
                let fileInfo = response.data.info
                row.images.push(fileInfo)
                let modUrl = ''
                if (method) {
                    modUrl = url + method
                } else {
                    modUrl = url + 'modify'
                }
                obj.$http.post(modUrl, {
                    'old': oldRow,
                    'new': row
                }).then((response) => {
                    let uprow = response.data.info
                    let tb = null
                    if (tbobj) {
                        tb = tbobj
                    } else {
                        tb = $('#table')
                    }
                    tb.bootstrapTable('updateByUniqueId', {
                        id: row[key],
                        row: uprow
                    })
                    console.log('modify success')
                }, (response) => {
                    console.log('modify error')
                    exports.dealErrorCommon(obj, response)
                })
            }, (response) => {
                // error callback
                exports.dealErrorCommon(obj, response)
            })
        }
    }
}

exports.fileFileUpload = function (_self, obj, row, url, method, table, key) {
    let files = _self.files
    let maxsize = 2 * 1024 * 1024; //2M
    let oldRow = $.extend(true, {}, row)
    let fileTypes = new Array('pdf')
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            if (files[i].size > maxsize) {
                alert('最大只允许上传2M的文件')
                return
            }

            let formData = new FormData();
            formData.append('file', files[i])

            obj.$http.post(url + 'upload', formData).then((response) => {
                row.files.push(response.data.info)
                obj.$http.post(url + method, {
                    'old': oldRow,
                    'new': row
                }).then((response) => {
                    // let uprow = response.data.info
                    // table.bootstrapTable('updateByUniqueId', {
                    //     id: row[key],
                    //     row: uprow
                    // })
                    // console.log('modify success')
                    obj.$parent.refreshOrder();
                }, (response) => {
                    console.log('modify error')
                    exports.dealErrorCommon(obj, response)
                })
            }, (response) => {
                // error callback
                exports.dealErrorCommon(obj, response)
            })
        }
    }
}
exports.deleteFiles = function (_self, obj, row, url, method, table, key) {
    let files = row.files;
    let params = {fileIds: []};
    for (let file of files) {
        params.fileIds.push(file.file_id);
    }
    if (files.length > 0) {
        obj.$http.post(url + method, params).then((response) => {
            obj.$parent.refreshOrder();
            // let uprow = response.data.info
            // table.bootstrapTable('updateByUniqueId', {
            //     id: row[key],
            //     row: uprow
            // })
        }, (response) => {
            // error callback
            exports.dealErrorCommon(obj, response)
        })
    }
}

exports.fileUpload = function (_self, obj, url, callback) {
    obj.unbind()
    obj.change(function () {
        let files = this.files
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                let formData = new FormData();
                formData.append('file', files[i])
                _self.$http.post(url + 'upload', formData).then((response) => {
                    let fileInfo = response.data.info
                    callback(fileInfo)
                }, (response) => {
                    // error callback
                    exports.dealErrorCommon(_self, response)
                })
            }
        }
    })
}

exports.rowModifyWithT = function (_self, act, row, key, tb) {
    _self.$http.post(act, {
        'old': _self.oldRow,
        'new': row
    }).then((response) => {

        let updaterow = response.data.info
        tb.bootstrapTable('updateByUniqueId', {
            id: row[key],
            row: updaterow
        })
        tb.bootstrapTable('resetView')
        console.log('modify success')
    }, (response) => {
        console.log('modify error')
        exports.dealErrorCommon(this, response)

        tb.bootstrapTable('updateByUniqueId', {
            id: row[key],
            row: _self.oldRow
        })
        tb.bootstrapTable('resetView')

    })
}

exports.rowDeleteWithApi = function (_self, msg, apiUrl, table, row, key, callback) {
    exports.dealConfrimCommon(msg, function () {
        _self.$http.post(apiUrl, row).then((response) => {
            table.bootstrapTable('remove', {
                field: key,
                values: [row[key]]
            })
            if (callback) {
                callback()
            }
            exports.dealSuccessCommon('删除成功')
            console.log('delete success')
        }, (response) => {
            console.log('delete error')
            exports.dealErrorCommon(_self, response)
        })
    })
}
exports.DateFormat = function (date, fmt) {
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

exports.bootstrapTableAjaxOtions = function () {
    let headers = {}
    headers.authorization = getStoreData('token')
    return {
        headers: headers
    }
}

exports.remarkFormatter = function (value, row, index) {
    if (value) {
        let displayName = (value.length > 10) ? (value.substring(0, 7) + '...') : value
        return [
            '<a role="button" data-toggle="popover" data-trigger="hover" data-placement="left" data-html="true" data-content="' +
            '<div class=&quot;box&quot;>' +
            '<div class=&quot;box-body&quot;>' +
            '<div class=&quot;form-group&quot;>' +
            '<div class=&quot;&quot;><span>' + value + '</span></div>' +
            '</div>' +
            '</div>' +
            '</div>">' + displayName + '</a>'
        ].join('')
    }
}

exports.linkFormatter = function (value, row, index) {
    let retString = '<div class="form-inline" role="form">'
    if (value) {
        retString += '<div class="form-group image-set">'
        retString += '<a href="' + value + '" target="_Blank">'
        retString += '<img src="/static/images/link.png" style="max-width: 100%;max-height: 100%;"></a>'
        retString += '</div">'
    }
    retString += '</div>'
    return retString
}

exports.fileFormatter = function (value, row, index) {
    let retString = '<div class="form-inline" role="form">'
    if (value) {
        retString += '<div class="form-group image-set">'
        retString += '<a href="' + value + '" target="_Blank">'
        retString += '<img src="/static/images/file.png" style="max-width: 100%;max-height: 100%;"></a>'
        retString += '</div">'
    }
    retString += '</div>'
    return retString
}

exports.imageViewerFormatter = function (value, row, index) {
    let retString = '<div class="form-inline" role="form">'
    if (value) {
        retString += '<img class="icon-size image" src="' + value + '">'
    }
    retString += '</div>'
    return retString
}

exports.imagesFormatter = function (value, row, index) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="form-group image-set">'
        for (var key in value) {
            retString += '<a class="box-image-link" href="' + value[key] + '" data-lightbox="' + index + '">'
            retString += '<img class="box-image" src="' + value[key] + '"></a>'
        }
        retString += '</div>'
    }
    retString += '<span class="form-group fileupload-button">'
    retString += '<i class="glyphicon glyphicon-plus"></i>'
    retString += '<input class="imageupload" type="file" name="file">'
    retString += '</span></div>'
    return retString
}

exports.imagesFormatterNoA = function (value, row, index) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="form-group image-set">'
        for (var key in value) {
            retString += '<a class="box-image-link" href="' + value[key] + '" data-lightbox="' + index + '">'
            retString += '<img class="box-image" src="' + value[key] + '"></a>'
        }
        retString += '</div">'
    }
    retString += '</div>'
    return retString
}

exports.filesFormatterWithUpload = function (value, row) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="btn-group">'
        retString += '<button type="button" class="btn btn-xs btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>&nbsp;&nbsp;&nbsp;'
        retString += '<ul class="dropdown-menu" style="min-width: 0; border:2px solid #3c8dbc;">'
        for (let i = 0; i < value.length; i++) {
            //获取后缀
            if (value[i].file_url) {
                let a = getFileExt(value[i].file_url).toLowerCase();
                if (a === 'jpg' || a === 'jpeg' || a === 'png') {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><img src="' + value[i].file_url + '?width=30&height=30&quality=10' + '"></i>'
                } else {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><i class="glyphicon glyphicon-save-file"></i>'
                }
            }
            retString += '</a></li>'
        }
        retString += '</ul></div>'
    }
    retString += '<span class="form-group fileupload-button">'
    retString += '<i class="glyphicon glyphicon-plus"></i>'
    retString += '<input class="fileupload" type="file" name="file">'
    if (value.length > 0) {
        retString += '</span> &nbsp;&nbsp;'
        retString += '<span class="form-group delete-button delete-file">'
        retString += '<i class="fa fa-2x fa-trash-o"></i>'
    }
    retString += '</span></div>'
    return retString
}

//获取文件后缀名
function getFileExt(str) {
    let index1 = str.lastIndexOf(".");
    if (index1 === -1) {
        return '';
    }
    let index2 = str.length;
    let postf = str.substring(index1 + 1, index2);
    return postf;
}

exports.filesFormatter = function (value, row) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="btn-group">'
        retString += '<button type="button" class="btn btn-xs btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>&nbsp;&nbsp;&nbsp;'
        retString += '<ul class="dropdown-menu" style="min-width: 0; border:2px solid #3c8dbc;">'
        for (let i = 0; i < value.length; i++) {
            //获取后缀
            if (value[i].file_url) {
                let a = getFileExt(value[i].file_url).toLowerCase();
                if (a === 'jpg' || a === 'jpeg' || a === 'png') {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><img src="' + value[i].file_url + '?width=30&height=30&quality=10' + '"></i>'
                } else {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><i class="glyphicon glyphicon-save-file"></i>'
                }
            }
            retString += '</a></li>'
        }
        retString += '</ul></div>'
    }
    retString += '</div>'
    return retString
}

exports.operateFormatter = function (value, row, index) {
    return [
        '<a class="tableDelete" title="删除">',
        '<i class="glyphicon glyphicon-remove"></i>',
        '</a>',
        // '<a class="btn btn-primary btn-xs m-r-5 tableDelete btn-info-delete">删除</a>',
    ].join('')
}

exports.BTRowFormat = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatAlignLeft = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'left',
        valign: 'middle'
    }
}

exports.BTRowFormatWrap = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        align: 'left',
        valign: 'middle'
    }
}

exports.BTRowFormatEditable = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            emptytext: '无'
        }
    }
}

exports.BTRowFormatEditableOpt = function (rowid, rowname, enabled = true, rFormatter) {
    let element = {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    };
    if (enabled) {
        element.editable = {
            type: 'text',
            emptytext: '无'
        };
    }
    return element;
}

exports.BTRowFormatEditablePop = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'textarea',
            emptytext: '无'
        }
    }
}

exports.BTRowFormatEditableDatePicker = function (rowid, rowname, placement = 'top', rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            title: '选择签约日期',
            type: 'combodate',
            placement: placement,
            emptytext: '无',
            clear: '清除',
            format: 'YYYY-MM-DD',
            viewformat: 'YYYY-MM-DD',
            template: 'YYYY / MMMM / D',
            combodate: {
                language: 'zh-CN',
                minYear: new Date().getFullYear(),
                maxYear: new Date().getFullYear() + 1,
                minuteStep: 1
            }
        }
    }
}

exports.BTRowFormatEditableWF = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        class: 'over-hide',
        width: width,
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            emptytext: '无'
        }
    }
}

exports.BTRowFormatEdSelect = function (_self, rowid, rowname, paraIndex) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select',
            emptytext: '无',
            source: _self.pagePara[paraIndex],
            display: function (value, sourceData) {
                let showText = ''
                $(sourceData).each(function () {
                    if (this.id == value) {
                        showText = this.text
                        return false
                    }
                })
                $(this).html(showText)
            }
        }
    }
}

exports.BTRowFormatEditableW = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            mode: 'inline',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            display: function (value, sourceData) {
                $(this).html('<div class="form-control">' + value + '</div>')
            }
        }
    }
}

exports.BTRowFormatEnumberW = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'number',
            mode: 'inline',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            display: function (value, sourceData) {
                $(this).html('<div class="form-control">' + value + '</div>')
            }
        }
    }
}
exports.BTRowFormatEnumberWMin = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'number',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            min: 0,
            display: function (value, sourceData) {
                $(this).html(value)
            }
        }
    }
}
exports.BTRowFormatEnumberWMinEnable = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'number',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            min: 0,
            display: function (value, sourceData) {
                $(this).html(value)
            }
        }
    }
}
exports.BTRowFormatEdSelectW = function (_self, rowid, rowname, paraIndex, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select',
            mode: 'inline',
            emptyclass: 'form-control',
            emptytext: '',
            unsavedclass: null,
            showbuttons: false,
            source: _self.pagePara[paraIndex],
            display: function (value, sourceData) {
                let showText = ''
                $(sourceData).each(function () {
                    if (this.id == value) {
                        showText = this.text
                        return false
                    }
                })
                $(this).html('<div class="form-control">' + showText + '</div>')
            }
        }
    }
}

exports.BTRowFormatEdSelect2 = function (_self, rowid, rowname, paraIndex, width = 200) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select2',
            emptytext: '无',
            select2: {
                data: _self.pagePara[paraIndex],
                width: width
            },
            display: function (value) {
                let showText = ''
                $(_self.pagePara[paraIndex]).each(function () {
                    if (this.id == value) {
                        if (this.name) {
                            showText = this.name
                        } else {
                            showText = this.text
                        }
                        return false
                    }
                })
                $(this).html(showText)
            }
        }
    }
}

exports.BTRowFormatEdSelect2Disabled = function (_self, rowid, rowname, paraIndex, width = 200) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select2',
            emptytext: '无',
            disabled: true,
            select2: {
                data: _self.pagePara[paraIndex],
                width: width
            },
            display: function (value) {
                let showText = ''
                $(_self.pagePara[paraIndex]).each(function () {
                    if (this.id == value) {
                        if (this.name) {
                            showText = this.name
                        } else {
                            showText = this.text
                        }
                        return false
                    }
                })
                $(this).html(showText)
            }
        }
    }
}


exports.BTRowFormatEdNum = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            validate: function (value) {
                value = $.trim(value)
                if (!value) {
                    return '请输入金额'
                }
                if (!/^\d+\.\d{2}$|^\d+$/.test(value)) {
                    return '请输入正确的金额格式如: 0.00.'
                }

                return ''
            }
        }
    }
}

exports.BTRowFormatEdTextarea = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'auto-line',
        width: 80,
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'textarea',
            disabled: false,
            emptytext: '无',
            display: function (value, sourceData) {
                let ele = value.toString()
                if (ele) {
                    let displayName = (ele.length > 10) ? (ele.substring(0, 7) + '...') : ele
                    $(this).html(displayName)
                }
            }
        }
    }
}

exports.BTRowFormatWidth = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        width: width,
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatWithFormatter = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatWithFormatterAlignLeft = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'left',
        valign: 'middle'
    }
}

exports.BTRowFormatWithFW = function (rowid, rowname, rFormatter, width) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatWithFE = function (rowid, rowname, rFormatter, e) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        events: e,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatWithFEW = function (rowid, rowname, rFormatter, e, width) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        events: e,
        width,
        width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatEvent = function (rowid, rowname, rFormatter, tableEvents) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        events: tableEvents,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.actFormatter = function (rowid, rFormatter, e) {
    return {
        field: rowid,
        events: e,
        formatter: rFormatter,
        align: 'center',
        valign: 'middle',
        class: 'text-nowrap '
    }
}

exports.BTRowFormatWithFormatterWidth = function (rowid, rowname, rFormatter, width = '60px') {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.BTRowFormatWithIndex = function (rowname) {
    return {
        field: 'Number',
        title: rowname,
        formatter: function (value, row, index) {
            return index + 1;
        },
        width: '30px',
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

exports.DynamicEditableByDomain = function (_self, table) {
    $("[data-uniqueid]").each(function () {
        $(this).editable({
            disabled: true
        })
        let actrow = table.bootstrapTable('getRowByUniqueId', this.getAttribute('data-uniqueid'))
        if (actrow.domain_id) {
            if (actrow.domain_id != _self.userinfo.domain_id) {
                $(this).find('[data-name]').each(function () {
                    $(this).attr("data-disabled", true)
                })
            }
        }
    })

}

exports.getApiName = function (apiUrl) {
    let path = apiUrl.substr(0, apiUrl.indexOf("?"));
    let patha = path.split('/')
    let func = patha[patha.length - 1].toUpperCase()
    return func;
}

//取浏览器参数值
exports.getUrlParams = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//table当前选中页样式（解决跳转到指定页，页数不能选中问题）
exports.setTablePageActive = function (nowPage) {
    $(".pagination").find(".page-number").each(function () {
        let val = parseInt($(this).children().html());
        if (val == nowPage) {
            $(this).addClass("active");
            return false;
        }
    })
}

exports.getUrl = function () {
    return window.location.protocol + '//' + window.location.host;
}

let checkAuth = (auth, menulist) => {
    for (let i = 0; i < menulist.length; i++) {
        let m = menulist[i]
        if (m.menu_type === '00' && m.sub_menu.length > 0) {
            if (checkAuth(auth, m.sub_menu)) return true
        } else {
            if (m.menu_path) {
                let ma = m.menu_path.split('/');
                if (ma[ma.length - 1].toUpperCase() === auth.toUpperCase()) return true
            }
        }
    }
    return false
}

exports.checkAuth = checkAuth

//初始化图片浏览插件
exports.initImageViewer = function () {
    window.setTimeout(function () {
        $('.image').viewer();
    }, 500)
}
//分转元
exports.unitConversion = function (value, row) {
    let returnData = 0;
    if (!isNaN(value)) {
        returnData = value / 100;
    }
    return returnData
}

exports.dateFormat = function (value, type) {
    if (value) {
        let date = new Date(value);
        let year = date.getFullYear();
        let month = (date.getMonth()+1)<10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 ;
        let day = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
        if (type === 'min') {
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        } else {
            return year + '-' + month + '-' + day;
        }
    }
};

exports.isVehicleNumber = function (number) {
    let result = false;
    if (number.length == 7){
        let express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        result = express.test(number);
    }
    return result;
};

//判断是否是手机
exports.isMobile = function() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
};

exports.baiduSeoAutoPush = function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else{
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
};
