import { loginUser, loginWithGoogle, logout, registerUser } from './auth';

export const server = {
  // actions

  // Auth
  registerUser,
  logout,
  loginUser,
  loginWithGoogle,
};
