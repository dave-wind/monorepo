export enum ClientType {
  ios = 'ios',
  android = 'android',
  h5 = 'h5',
  pc = 'pc'
}

export interface EnvProps {
  ios: string
  android: string
  h5: string
  pc: string
}

export interface IBaseProps {
  title: string
  color: string
}
