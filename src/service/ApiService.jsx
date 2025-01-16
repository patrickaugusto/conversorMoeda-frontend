import axios from 'axios';

const API_URL = 'https://conversormoeda-production.up.railway.app/api/conversor';

export const fetchMoedas = async () => {
  try {
    const response = await axios.get('https://v6.exchangerate-api.com/v6/5f3feed4bcc18739616e67c9/latest/BRL');
    return Object.keys(response.data.conversion_rates);
  } catch (error) {
    console.error('Erro ao carregar moedas', error);
    throw error;
  }
};

export const converterMoeda = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/converter`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao converter moedas', error);
    throw error;
  }
};
