
const apiHost = 'http://192.168.56.101:9080';
const username = 'wilson';
const password = 'wilson';

const oslcSelect = 'assetid,assetnum,description,siteid,status,location,audited,lastauditdate';


export default {
    async fetchAllAssets() {
        try {
            const queryUri = apiHost
              + '/maximo/oslc/os/mxasset?lean=1&_lid='
              + username + '&_lpwd=' + password
              + '&oslc.select=' + oslcSelect
              + '&oslc.pageSize=20'
            console.log(queryUri);
            const response = await fetch(queryUri);
            const responseJson = await response.json();
            const assets = responseJson.member;
            return assets;
          } catch (error) {
            console.error(error);
          }
    },

}
