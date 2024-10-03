/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const arr = s.split('');
    const fre = Array(26).fill(0);
    for (let i = 0; i < arr.length; i++) {
        const idx = arr[i].charCodeAt() - 97;
        fre[idx]++;
    }
    const ans = [];
    let count = 0;
    let pre = null;
    let max = 0;
    let idx = 0;

    while (1) {
        max = 0;

        for (let i = 0; i < 26; i++) {
            if (max <= fre[i] && i !== pre) {
                max = fre[i];
                idx = i;
            }
        }

        if (max === 0) {
            break;
        }

        ans.push(String.fromCharCode(idx + 97));
        fre[idx]--;
        pre = idx;
    }
    if (Math.max(...fre) > 0) {
        console.log('');
        return '';
    } else {
        console.log(ans);
        return ans;
    }
};
reorganizeString('aaab');

// const a = 97;
// console.log(String.fromCharCode(a));
