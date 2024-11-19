//프로그래머스 게임 맵 최단거리
function solution(maps) {
  // 거리 2d 배열 초기화
  const dist = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(Infinity)
  );
  //bfs 시작
  const bfs = (row, col) => {
    const q = [[row, col, 1]];
    // 시작지점은 거리가 1
    dist[row][col] = 1;
    // 방문했다는 의미에서 맵의 방문 좌표를 2로 변경
    maps[row][col] = 2;
    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    // dfs순회가 끝날때까지 즉, q가 빌때까지 while루프를 순회
    while (q.length) {
      const current = q.shift();
      dir.map((e) => {
        //현재좌표, 이전까지의 거리를 저장
        const nx = current[1] + e[1];
        const ny = current[0] + e[0];
        const dist = current[2];
        if (
          //맵을 넘기지 않았다면
          nx >= 0 &&
          nx < maps[0].length &&
          ny >= 0 &&
          ny < maps.length &&
          // 현재 좌표의 맵이 1이라면 즉 방문한적도 없고 장애물도 없다면
          maps[ny][nx] === 1
        ) {
          // 조건문을 통과했다면 q에 넣어주고
          q.push([ny, nx, dist + 1]);
          // 방문했다는 의미에서 맵을 바꿔주고
          maps[ny][nx] = 2;
          //거리는 현재 dist와 이전에 기록된 dist중 적은값
          dist[ny][nx] = Math.min(dist[ny][nx], dist + 1);
        }
      });
    }
  };
  bfs(0, 0);
  //만약 거리 배열에 원하는 좌표값이 Infinity라면, 즉 방문한적이 없다면 -1을 리턴하고 아니라면
  //값이 존재한다면 값을 리턴
  return dist[dist.length - 1][dist[0].length - 1] === Infinity
    ? -1
    : dist[dist.length - 1][dist[0].length - 1];
}
