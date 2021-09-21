import { iRoute } from '../../interface/router.interface';
import {  HomeService } from './home.service'
const homeService=new HomeService;
export const HomeRoutes:iRoute[]=[
    {
        path: '/',
        method: 'GET',
        handler: homeService.index
    }
]