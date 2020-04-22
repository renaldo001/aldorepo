function solution(N,users) {
    var answer = [];
    for (i = 1; i <= N; i++) {
        let failureRate = 0 ;
        let stage = N ;
        for (j = 1; j < users.length; j++) {
            if(users[j] === i){
                failureRate++;
                users.splice(j,1);
            }
            stage--;
        }
        answer.push(`${failureRate}/${users.length}`)
    }
    return answer;
}
