import { request } from 'graphql-request';

export const fetchProducts = async () => {
  try {
    const query = `
      query {
        launchesPast(limit: 5) {
          mission_name
          launch_date_utc
          rocket {
            rocket_name
          }
        }
      }
    `;
    const response: any = await request('https://api.spacex.land/graphql/', query);
    console.log(response);
    return response?.launchesPast; // Retorne os dados de lançamentos passados
  } catch (er) {
    console.log(er);
    return []; // Retorne um array vazio em caso de erro
  }
};
