import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class PublicFunction {

  constructor(
    private http: Http
  ) { }

  /**
   * 格式化日期
   * @param date - 需要格式化的日期
   * @param DateString - 日期格式
   */
  static formatDate(date: string | number | Date, DateString: string): string {
    // yyyy-MM-dd HH:mm:ss
    let con: Date = new Date();
    if (typeof date === 'object') {
      con = date;
    } else {
      con.setTime(+date);
    }
    let yDate: string = DateString.replace('yyyy', con.getFullYear() + '');
    let mouth: number = con.getMonth() + 1;
    let MDate: string = yDate.replace('MM', mouth > 9 ? mouth + '' : '0' + mouth);
    let dDate: string = MDate.replace('dd', con.getDate() > 9 ? con.getDate() + '' : '0' + con.getDate());
    let HDate: string = dDate.replace('HH', con.getHours() > 9 ? con.getHours() + '' : '0' + con.getHours());
    let mDate: string = HDate.replace('mm', con.getMinutes() > 9 ? con.getMinutes() + '' : '0' + con.getMinutes());
    let sDate: string = mDate.replace('ss', con.getSeconds() > 9 ? con.getSeconds() + '' : '0' + con.getSeconds());
    return sDate;
  }

  /**
   * 获取当前日期之前指定天数的日期数组
   * @param date - 天数
   */
  static getDateArray(date: number | string): string[] {
    let con: Date = new Date();
    let dateArray: string[] = [];
    let yDate, MDate, dDate;
    for (var i = 0; i < date; i++) {
      yDate = con.getFullYear();
      let mouth: number = con.getMonth() + 1;
      MDate = mouth > 9 ? mouth : '0' + mouth;
      dDate = con.getDate() > 9 ? con.getDate() : '0' + con.getDate();

      dateArray.push(yDate + '-' + MDate + '-' + dDate);
      con.setDate(con.getDate() - 1);
    }
    return dateArray.reverse();
  }

  /**
   * 获取省份信息
   */
  getProvinces() {
    let url = 'mock-data/provinces.json';
    return this.http.get(url).map(res => res.json());
  }

  /**
   * 获取城市信息
   */
  getCities() {
    let url = 'mock-data/cities.json';
    return this.http.get(url).map(res => res.json());
  }

  /**
   * 获取地区信息
   */
  getAreas() {
    let url = 'mock-data/areas.json';
    return this.http.get(url).map(res => res.json());
  }
}
