abstract class _Base {
  getter(property?: string) { if(property) { return this[property]; } return this; }
  setter(property: string, value: any) { this[property] = value; }
}

export class User extends _Base {
  private uName:    string;
  private fName:    string;
  private lName:    string;
  private address1: string;
  private address2: string;
  private province: string;
  private postal:   string;
  private note:     string;

  constructor(object?: User) {
    super();
    this.uName    = object && object.uName    || '';
    this.fName    = object && object.fName    || '';
    this.lName    = object && object.lName    || '';
    this.address1 = object && object.address1 || '';
    this.address2 = object && object.address2 || '';
    this.province = object && object.province || '';
    this.postal   = object && object.postal   || '';
    this.note     = object && object.note     || '';
  }
}

export class Product extends _Base {
  private pId:          string;
  private name:         string;
  private brand:        string;
  private category:     string;
  private price:        string;
  private stock:        number;
  private offer:        number;
  private description:  string;

  private imgPath:      string;
  
  constructor(object?: Product) {
    super();
    this.pId          = object && object.pId          || '';
    this.name         = object && object.name         || '';
    this.brand        = object && object.brand        || '';
    this.category     = object && object.category     || '';
    this.price        = object && object.price        || '';
    this.stock        = object && object.stock        || 0;
    this.offer        = object && object.offer        || 0;
    this.description  = object && object.description  || '';
    this.imgPath      = object && object.imgPath      || '';
  }
}

export class Board extends _Base {
  private bID:      number;
  private title:    string;
  private writer:   User;
  private contents: string;
  private comments: Comment[];
  private date:     Date;

  constructor(object?: Board) {
    super();
    this.bID      = object && object.bID              || 0;
    this.title    = object && object.title            || "";
    this.writer   = object && new User(object.writer) || new User();
    this.contents = object && object.contents         || "";
    object && object.comments.length > 0 ? object.comments.map(x => this.comments.push(new Comment(x))) : this.comments = new Array<Comment>();
    this.date     = object && object.date             || new Date();
  }
}

export class Comment extends _Base {
  private cID:      number;
  private bID:      number;
  private contents: string;
  private writer:   User;
  private date:     Date;

  constructor(object?: Comment) {
    super();
    this.cID      = object && object.cID              || 0;
    this.bID      = object && object.bID              || 0;
    this.contents = object && object.contents         || "";
    this.writer   = object && new User(object.writer) || new User();
    this.date     = object && object.date             || new Date();
  }
}