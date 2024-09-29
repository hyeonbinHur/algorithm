function findPalindromeIndex(s) {
    // 회문 확인 함수
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            // 왼쪽 인덱스를 제거했을 때 회문인 경우
            if (isPalindrome(s, left + 1, right)) {
                return left;
            }
            // 오른쪽 인덱스를 제거했을 때 회문인 경우
            if (isPalindrome(s, left, right - 1)) {
                return right;
            }
            return -1; // 두 경우 모두 회문이 아닌 경우
        }
        left++;
        right--;
    }
    return -1; // 이미 회문인 경우
}

// 문자열 목록
const strings = [
    'quyjjdcgsvvsgcdjjyq',
    'hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh',
    'fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf',
    'bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb',
    'fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf',
    'mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm',
    'tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt',
    'lhrxvssvxrhl',
    'prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp',
    'kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk',
];

// 결과 출력
strings.forEach((str, index) => {
    const result = findPalindromeIndex(str);
    console.log(
        `String ${
            index + 1
        }: '${str}', Index to remove for palindrome: ${result}`
    );
});
