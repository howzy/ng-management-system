export class User {
  /** 用户Id */
  id?: string;
  /** 登录凭证 */
  token?: string;
  /** 用户名 */
  userName?: string;
  /** 密码 */
  password?: string;
  /** 头像 */
  headImgUrl?: string;
  /** 记住密码 */
  rememberMe?: boolean;
  /** 权限 */
  permissions?: string[];
  /** 角色 */
  roles?: string;
}
