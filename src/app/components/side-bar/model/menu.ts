export class Menu {
  icon: string;
  title: string;
  ord: number;
  subs?: SubMenu[]
}

export class SubMenu {
  title: string;
  path: string;
  subs?: SubMenu[]
}

export class SideBar {
  icon: string;
  title: string;
  subTitle: string;
  tertiaryTitle?: string;
}