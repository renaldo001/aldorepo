function solution(relation) {
    var answer = 0;
    for( i = 1 ; i <= relation.length; i++){
        for( j = 1 ; j <= relation.length; j++){
            if(relation[i,1] === relation[j,1]){
                answer+1;
            }
        }
    }
    return answer;
}
