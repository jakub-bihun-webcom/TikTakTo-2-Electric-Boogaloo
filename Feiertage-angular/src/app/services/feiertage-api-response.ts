export type FeiertagApiResponse = Record<FeiertagName, FeiertagInfo>;

type FeiertagName = string;

interface FeiertagInfo {
  datum: string;
  hinweis: string;
}
