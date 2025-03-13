export const getApiUrl = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  );
  const data = await response.json();

  return `https://ddragon.leagueoflegends.com/cdn/${data[0]}/data/ko_KR`;
};
