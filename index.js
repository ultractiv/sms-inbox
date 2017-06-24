var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name SmsInbox
 * @description
 * This plugin helps to operate on SMS on Android phones.
 *
 * @usage
 * ```typescript
 * import { SmsInbox } from '@ionic-native/sms-inbox';
 *
 *
 * constructor(private sms_inbox: SmsInbox) { }
 *
 * ...
 * this.sms_inbox.listSMS({ addresses:['Google', 'Facebook'] })
 *    .then(messages => console.log(`Found ${messages.length} from Google and Facebook`))
 *    .catch(error => console.log('Error getting messages', error))
 * ```
 */
var SmsInbox = (function (_super) {
    __extends(SmsInbox, _super);
    function SmsInbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsInbox.prototype.listSMS = function (filter) { return; };
    SmsInbox.prototype.startWatch = function () { return; };
    SmsInbox.prototype.enableIntercept = function (on_off) { return; };
    return SmsInbox;
}(IonicNativePlugin));
SmsInbox.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SmsInbox.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SmsInbox.prototype, "listSMS", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'stopWatch'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], SmsInbox.prototype, "startWatch", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], SmsInbox.prototype, "enableIntercept", null);
SmsInbox = __decorate([
    Plugin({
        pluginName: 'SmsInbox',
        plugin: 'cordova-plugin-sms',
        pluginRef: 'SMS',
        repo: 'https://github.com/ultractiv/cordova-plugin-sms',
        platforms: ['Android']
    })
], SmsInbox);
export { SmsInbox };
//# sourceMappingURL=index.js.map