// date type 을 yyyy-mm-dd로 String 반환
export const convertDateToStr = (date) => {
	const year = date.getFullYear(); // 2023
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 06
	const day = date.getDate().toString().padStart(2, '0'); // 18
  
	const dateString = year + '-' + month + '-' + day; // 2023-06-18
  
	return dateString;
}

// 두 날짜 사이 모든 날짜
export function getDatesStartToLast(startDate, lastDate) {
  var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (!(regex.test(startDate) && regex.test(lastDate)))
	return "Not Date Format";
  var result = [];
  var curDate = new Date(startDate);
  while (curDate <= new Date(lastDate)) {
	result.push(curDate.toISOString().split("T")[0]);
	curDate.setDate(curDate.getDate() + 1);
  }
  return result;
}

// 두 날짜 사이의 일수 계산하기
export const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = date1.getTime() - date2.getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
}
