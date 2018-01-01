
import Toast from '../core/toast';
const basePath = 'https://api.modbtc.com';

const getToken = (): string => {
    return 'VmlBTE1YR0pLM0UwcHF6RkJaSmxLd3ZGMUtkb2FTRXN0Z21xeVlVdnV1Rks3SjcxV3lieGQzNW9COHRqRTJDZg=='
};
const removeToken = (): void => {
    alert(1);
};

const request: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify('{}')
};

export function postJson<T>(path: string, data: {}, callback?: {}): Promise<T> {
    var fullPath = basePath + path;
    if (path.indexOf('/') !== 0) { fullPath = basePath + '/' + path; }

    // tslint:disable-next-line:typedef
    return new Promise<T>(function (resolve, reject) {
        var token = getToken();
        if (request.headers) {
            request.headers['X-Token'] = token;
        }
        request.body = JSON.stringify(data);

        fetch(fullPath, request).then((resp) => {
            if (resp.status === 200) {
                resolve(resp.json());
            } else if (resp.status === 403) {
                removeToken();
                window.location.href = '/login';
            } else {
                resp.json().then(d => {
                    Toast.error(d.detail);
                    reject(d);
                },               () => {
                    Toast.error('json error');
                    reject('json error');
                });
            }
        },                            e => {
            reject(e.message);
        }).catch(e => {
            reject(e.message);
        });
    });
}