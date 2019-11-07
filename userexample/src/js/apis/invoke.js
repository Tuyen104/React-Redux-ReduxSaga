import config from '../configuration';

const endpoint = config.apiEndpoint;

export function createHeaders(req){
    const headers = req.headers || {};
    return headers;
}

export function createBody(req){
    const{body} = req;
    if(!body){
        return null;
    }
    return typeof body === "string" ? body : JSON.stringify(body);
}

function getContentType(res){
    return res.headers.get("Content-Type")||"";
}

export const invoke = async (req) => {
    const {method, path} = req;
    const headers = createHeaders(req);
    const body = createBody(req);

    try{
        const res = await fetch(`${endpoint}${path}`, {
            method,
            headers,
            cache: "no-cache",
            body,
        });

        const status = res.status;

        if(status === 401 || status === 403){
            //do sth
            return;
        }

        let result = await res.json();

        const contentType = getContentType(res);
        if(contentType.match(/application\/json/)){
            result.body = await res.json();
        } else if(contentType.match(/image\/.+/)){
            result.body = await res.blob();
        }
        return result;

    }
    catch(e){
        return{};
    }
};