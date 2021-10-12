export interface MessageType {
  MessageType: string;
  MessageTypeDescription: string;
  CreatedDate: Date;
  CreatedBy?: any;
  ModifiedDate: Date;
  ModifiedBy?: any;
  Id: number;
}

export interface MessageDuration {
  MessageDurationText: string;
  MessageDurationDescription: string;
  CreatedDate: Date;
  CreatedBy?: any;
  ModifiedDate: Date;
  ModifiedBy?: any;
  Id: number;
}

export interface CompanyType {
  Id: number;
  CompanyName: string;
  CompanyDescription: string;
}

export interface Messages {
  MessageTypeId: number;
  MessageDurationId: number;
  CompanyID: number;
  MessageContent: string;
}