export class Merchant {
  id: string;
  /** 地址 */
  address_detail: Date;
  /** 创建日期 */
  create_date: string;
  /** 昵称 */
  nickname: string;
  /** 推荐人账号 */
  recommend_member_no: string;
  /** 推荐人昵称 */
  recommend_nickname: string;
  /** 推荐人手机号 */
  recommend_phone: string;
  /** 门店图片 */
  merchant_img: string;
  /** 门店二维码 */
  merchant_QRCode: string;
  /** 门店名称 */
  merchant_name: string;
  /** 门店简介 */
  merchant_desc: string;
  /** 联系电话 */
  phone: string;
  /** 门店折扣 */
  discount: number;
  /** 门店分组 */
  shop_type: string;
  /** 省编码 */
  provinceCode: string;
  /** 市编码 */
  cityCode: string;
  /** 区编码 */
  areaCode: string;
  /** 经度 */
  coordinate_x: string;
  /** 维度 */
  coordinate_y: string;
  checked?: boolean;
}