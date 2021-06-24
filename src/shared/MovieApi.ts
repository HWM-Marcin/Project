import React, { useEffect, useState } from 'react'
import axios, { Method } from 'axios';

export default function MovieApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
    const apiKey = "af3815aff7ba2b7007750f5ddfe7b68a"
    const url = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&language=de-DE`;
    axios({
        method: method,
        url: url,
        // headers: { Authorization: 'Bearer af3815aff7ba2b7007750f5ddfe7b68a' },
        data: data
    }).then(response => callback(response.data));
}
