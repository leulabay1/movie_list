import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movies } from '../../MoviesDto/movie.dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  
  constructor(private http: HttpClient) { }
  getUpComing(): any{
    return this.http.get<{[data: string]: Movies}>('https://movie-list-olive.vercel.app/up-coming')
    .pipe(map((res)=>{
      const product=[];
      for(let data in res){
        if(res.hasOwnProperty(data)){
          product.push({...res[data], id: data})
        }
      }
      return product
    })) 
  }

  getpopular(): any{
    const page=1;
    const limit=10;
    const result= this.http.get<{[data: string]: Movies}>(`https://movie-list-olive.vercel.app/popular?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }
  getpopularfeatured(): any{
    const page=1;
    const limit=4;
    const result= this.http.get<{[data: string]: Movies}>(`https://movie-list-olive.vercel.app/popular?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }

  getTrending(): any{
    const page=1;
    const limit=10;
    const result= this.http.get<{[data: string]: Movies}>(`https://movie-list-olive.vercel.app/trending?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }

  getTrendingfeatured(): any{
    const page=1;
    const limit=4;
    const result= this.http.get<{[data: string]: Movies}>(`https://movie-list-olive.vercel.app/trending?page=${page}&limit=${limit}`)
        .pipe(map((res)=>{
          const product=[];
          for(let data in res){
            if(res.hasOwnProperty(data)){
              product.push({...res[data], id: data})
            }
          }
          return product
        })) 

    return result
  }
  

}
