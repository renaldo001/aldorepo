function solution(N, users) {
    var answer = [];
    for (i = 1; i <= N; i++) {
        let failureRate = 0
        for (j = 1; j <= users.length(); j++) {
            if(users[j] === N[i]){
                failureRate+1;
                users.splice(j,1);
            }
        }
        answer.push[`Stage ${N[i]} failure rate : ${failureRate}/${users.length()}`]
    }
    return answer;
}