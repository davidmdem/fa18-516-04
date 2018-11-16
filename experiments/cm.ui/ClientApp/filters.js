import Vue from 'vue'
import moment from 'moment'


/**
 * Format a date with [moment](https://momentjs.com/)
 *
 * Example Usage:
 * ```
 * {{ myDate | moment }}
 * {{ myDate | moment('calendar') }}
 * {{ myDate | moment('YYYY-MM-DD') }}
 * ```
 *
 * @param {any} date A date string or timestamp moment can [parse](https://momentjs.com/docs/#/parsing/)
 * @param {string} fmt A format string. Default: `MMMM Do YYYY, h:mm a``
 */
Vue.filter('moment', (date, fmt = 'MMMM Do YYYY, h:mm a') => {
    if (!date) return ''
    return fmt === 'calendar' ? moment(date).calendar() : moment(date).format(fmt)
})


/**
 * Changes truthy/falsy values to Yes/No
 * 
 * Example Usage:
 * ```
 * {{ myBool | yesNo }}
 * ```
 *
 * @param {any} val A value
 */
Vue.filter('yesNo', val => val ? 'Yes' : 'No')
