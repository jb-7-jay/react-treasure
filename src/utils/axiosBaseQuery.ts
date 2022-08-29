import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

type queryParams = {
  url: string;
  method?: AxiosRequestConfig['method'];
  body?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
};

type baseQueryParams = { baseUrl: string };

/**
 * Convert an api call into the form that the responve type requires in rtk
 */
export const axiosBaseQuery =
  ({ baseUrl = '' }: baseQueryParams): BaseQueryFn<queryParams, unknown, unknown> =>
  async ({ url, method = 'GET', body, params }: queryParams) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data: body, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
