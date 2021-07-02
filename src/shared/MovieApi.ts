import React from 'react'
import axios, { Method } from 'axios';

export default function MovieApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `${process.env.REACT_APP_API_URL}${path}${path.includes('?') ? '&' : '?'}api_key=${apiKey}&language=de-DE`;
    axios({
        method: method,
        url: url,
        // headers: { Authorization: process.env.REACT_APP_API_KEY },
        data: data
    }).then(response => callback(response.data));
}
