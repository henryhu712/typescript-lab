/**
 * lodash 练习册
 * [](https://github.com/lodash/lodash)
 *
 * https://blog.csdn.net/qq_30638831/article/details/93772900
 */

import _ from 'lodash'

// chunk(array, size = 1)
// 将一个数组切分成多个数组，默认分组大小是1

let arr = [1, 2, 3, 4]
let chunk1 = _.chunk(arr)
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
let chunk2 = _.chunk(arr, 2)
// [ [ 1, 2 ], [ 3, 4 ] ]
let chunk3 = _.chunk(arr, 3)
// [ [ 1, 2, 3 ], [ 4 ] ]


// compact(array)
// 删除数组中判断结果为false的值，包括：
// false, null, 0, '', undefined, NaN
let compact = _.compact([0, '0', 1, false, 2, '', 3])
// [ '0', 1, 2, 3 ]




