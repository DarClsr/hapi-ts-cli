import { Request, ResponseToolkit } from '@hapi/hapi'


export interface iRoute {
    method: string | string[],
    path: string,
    handler(request: Request, h: ResponseToolkit): any
}