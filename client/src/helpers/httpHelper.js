import uiHelper from './uiHelper';
import Promise from 'bluebird';
import config from './clientConfig';
import $ from 'jquery';

export default {
    get: httpGet,
    post: httpPost,
    put: httpPut,
    delete: httpDelete
};

function ajaxRequest(httpVerb, url, data) {
    let fullUrl = config.isDevLocal ? config.proxy + url : url;

    return new Promise((resolve, reject) => {
        $.ajax({
            type: httpVerb,
            url: fullUrl,
            dataType: 'json',
            cache: false,
            data: data,
            timeout: 0,
            success: function (response) {
                if (response.status === 'failure') {
                    let message = response.message;
                    if (!message) message = 'Server Error';

                    uiHelper.showError(message);
                    
                    reject(new Error(message));
                } else {
                    resolve(response.data);
                }
            },
            error: function (err) {
                let errMessage = getErrorMessage(err);
                uiHelper.showError(errMessage);
            }
        });
    });
}

function getErrorMessage(err) {
    if (err.status === 404 || err.data.error) return err.data.error;
    return 'API error';
}

function httpGet(url, data) {
    return ajaxRequest('GET', url, data);
}

function httpPost(url, data) {
    return ajaxRequest('POST', url, data);
}

function httpPut(url, data) {
    return ajaxRequest('PUT', url, data);
}

function httpDelete(url, data) {
    return ajaxRequest('DELETE', url, data);
}