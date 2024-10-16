const now = new Date();

export default [

  {
	id: 0,
    start: new Date(2024, 8, 23), // 생리 시작
	end: new Date(2024, 8, 28), // 생리 끝
	period: 5,
	avgCycle: 0, // 평균 주기(데이터가 1개면 평균주기 index 0 빼야함)
	expectedDate: new Date(2024, 9, 25), // end + avgCycle, 날짜로 들어가야 됨
	fertileStart: new Date(2024, 9, 8), // end + avgCycle - 17, 날짜로 들어가야 됨
	fertileEnd: new Date(2024, 9, 14), // end + avgCycle - 11, 날짜로 들어가야 됨
	},
    {
		id: 1,
		start: new Date(2024, 9, 19), 
		end: new Date(2024, 9, 23), 
		period: 4, 
		avgCycle: 22, // 현재 start - 이전 end / 갯수
		expectedDate: new Date(2024, 10, 15),
		fertileStart: new Date(2024, 9, 28),
		fertileEnd: new Date(2024, 10, 4),
	},
	{
		id: 2,
		start: new Date(2024, 10, 17), 
		end: new Date(2024, 10, 21), 
		period: 5, 
		avgCycle: 23, // 이번달 주기 24일 + 저번달 22 / 2개
		expectedDate: new Date(2024, 11, 14), 
		fertileStart: new Date(2024, 10, 28), 
		fertileEnd: new Date(2024, 11, 3), 
		},
		{
			id: 3,
			start: new Date(2024, 11, 20), 
			end: new Date(2024, 11, 26), 
			period: 7, 
			avgCycle: 25.33, // 나중에 반올림 해야함 22 + 24 + 30 / 3
			expectedDate: new Date(2024, 12, 21), 
			fertileStart: new Date(2024, 12, 4), 
			fertileEnd: new Date(2024, 12, 10), 
			},
];
