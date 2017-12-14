/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./mention-list.component");
var styles_MentionListComponent = ['.scrollable-menu[_ngcontent-%COMP%] {\n        display: block;\n        height: auto;\n        max-height: 300px;\n        overflow: auto;\n      }',
    '[hidden][_ngcontent-%COMP%] {\n        display: none;\n      }', 'li.active[_ngcontent-%COMP%] {\n        background-color: #f7f7f9;\n      }'];
exports.RenderType_MentionListComponent = i0.ɵcrt({ encapsulation: 0,
    styles: styles_MentionListComponent, data: {} });
function View_MentionListComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(0, null, ['\n      ', '\n    ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.item[_co.labelKey];
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_MentionListComponent_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null);
}
function View_MentionListComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, 'li', [], [[2, 'active', null]], null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n            '])), (_l()(), i0.ɵeld(2, 0, null, null, 5, 'a', [['class', 'dropdown-item']], null, [[null,
                'mousedown']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('mousedown' === en)) {
                _co.activeIndex = _v.context.index;
                _co.itemClick.emit();
                var pd_0 = ($event.preventDefault() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['\n              '])),
        (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MentionListComponent_3)),
        i0.ɵdid(5, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0,
                'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] }, null),
        i0.ɵpod(6, { 'item': 0 }), (_l()(), i0.ɵted(-1, null, ['\n            '])),
        (_l()(), i0.ɵted(-1, null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _ck(_v, 6, 0, _v.context.$implicit);
        var currVal_2 = _co.itemTemplate;
        _ck(_v, 5, 0, currVal_1, currVal_2);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.activeIndex == _v.context.index);
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_MentionListComponent_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { list: 0 }), i0.ɵqud(402653184, 2, { defaultItemTemplate: 0 }),
        (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵand(0, [[2, 2], ['defaultItemTemplate',
                2]], null, 0, null, View_MentionListComponent_1)), (_l()(),
            i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(5, 0, [[1, 0], ['list',
                1]], null, 4, 'ul', [['class', 'dropdown-menu scrollable-menu']], [[8,
                'hidden', 0]], null, null, null, null)), (_l()(),
            i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MentionListComponent_2)), i0.ɵdid(8, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵted(-1, null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.items;
        _ck(_v, 8, 0, currVal_1);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.hidden;
        _ck(_v, 5, 0, currVal_0);
    });
}
exports.View_MentionListComponent_0 = View_MentionListComponent_0;
function View_MentionListComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'mention-list', [], null, null, null, View_MentionListComponent_0, exports.RenderType_MentionListComponent)), i0.ɵdid(1, 114688, null, 0, i2.MentionListComponent, [i0.ElementRef], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_MentionListComponent_Host_0 = View_MentionListComponent_Host_0;
exports.MentionListComponentNgFactory = i0.ɵccf('mention-list', i2.MentionListComponent, View_MentionListComponent_Host_0, { labelKey: 'labelKey',
    itemTemplate: 'itemTemplate' }, { itemClick: 'itemClick' }, []);