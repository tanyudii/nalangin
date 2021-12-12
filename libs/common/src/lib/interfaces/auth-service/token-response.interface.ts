export interface ITokenResponse {
  accessToken: string;
  expiresAt: number;
  refreshToken: string | null;
  refreshTokenExpiresAt: string | null;
}
