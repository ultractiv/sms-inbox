import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class SmsInbox extends IonicNativePlugin {
    listSMS(filter: any): Promise<any>;
    startWatch(): Observable<any>;
    enableIntercept(on_off: boolean): Promise<any>;
}
