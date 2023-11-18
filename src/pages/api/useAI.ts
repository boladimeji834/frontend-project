import axios from "axios";
import { useState, useEffect } from 'react'

export default function useAI() {
    const [response, setResponse] = useState()

    useEffect(() => {
        axios.post('https://api.openai.com/v1/chat/completions', {
            'model': 'gpt-3.5-turbo-1106',
            'messages': [{'role': 'user', 'content': 'Say this is a test!'}],
            'temperature': 0.7
        }, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_AUTHORIZATION_KEY
            }
        })
        .then((e) => setResponse(e.data))
    }, [])

  return response;
}
