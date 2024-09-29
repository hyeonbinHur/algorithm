function countPaths(n, m) {
    // (n+1) x (m+1) 크기의 DP 테이블을 생성
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // 시작 지점 (0, 0) 초기화
    dp[0][0] = 1;

    // 모든 셀에 대해 경로 수 계산
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i > 0) dp[i][j] += dp[i - 1][j];
            if (j > 0) dp[i][j] += dp[i][j - 1];
            console.log(dp);
        }
    }

    // 결과 반환
    return dp[n][m];
}

// n = 2, m = 2 인 경우의 경로 수 계산
console.log(countPaths(2, 2)); // 6
