export interface IProfile {
  username: string;
  userId: string;
  isLogged: boolean;
}

export interface IUser {
  id: string;
  username: string;
  thumbnailImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRoom {
  id: string;
  opponentId: string;
  userId: string;
  user: IUser;
  createdAt: string;
  updated: string;
}

export interface IChat {
  id: number;
  content: string;
  senderId: string;
  roomId: string;
  user: IUser;
  room: IRoom;
  createdAt: string;
  updatedAt: string;
}
