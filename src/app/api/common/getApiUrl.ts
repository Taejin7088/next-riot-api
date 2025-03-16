//받아온 버전으로 URL을 만들어주는 함수
export const getApiUrl = async () => {
  const response = await fetch('http://localhost:3000/api/version');
  const data = await response.json();

  return `https://ddragon.leagueoflegends.com/cdn/${data}/data/ko_KR`;
};
