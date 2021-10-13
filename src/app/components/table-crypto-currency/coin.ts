export interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  circulating_supply: number;
  max_supply: number;
}