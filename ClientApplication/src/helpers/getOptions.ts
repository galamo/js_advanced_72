import { IPayload } from "./interface";

enum METHODS {
    POST = "POST",
    GET = "GET"
}

export function getOptions(payload : IPayload) {
    return {
        method: METHODS.POST,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }
}

