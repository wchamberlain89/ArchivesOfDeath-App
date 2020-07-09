import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class testApiService {
  [x:string]: any;

  public constructor (config?: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  public get<T> (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config)
  }

  public post<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config)
  }

  public put<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put(url, data, config)
  }

  public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete(url, config)
  }
}