function solution(record) {
  var answer = [];
  for(i = 0 ; i < record.length() ; i ++ ){
    const [status, userid, nickname] = record[i].split(' ');
    if(status === 'Enter'){
      answer.push[`${nickname} came in`]
    }
    else if (status === 'Leave'){
      answer.push[`${nickname} has leave`]
    }
    else {
      for ( j = 0 ; j < answer.length() ; j++){
        if ( answer[j].userid === userid ){
          answer[j].nickname === nickname
        }
      }
    }
  }
  return answer;
}