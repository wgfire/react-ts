interface BaseProps {
    fontsize?: String;
    color?: string;
    margin?: string;
    padding?: string;
    width?:string,
    height?:string,
    [propName: string]: any;
  }

interface divProps extends BaseProps {
    backGround?: string;
    display?:string,
    borderRudis?:string,
    [propName: string]: any;
}

interface buttonProps extends divProps {}

export type baseType =BaseProps
export type divType = divProps
export type buttonType =buttonProps
