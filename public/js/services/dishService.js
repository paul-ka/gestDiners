// DISH SERVICE
function dishService($http) {
    return {
        get : function() {
            return $http.get('/dishs');
        },
        update : function(id, data){
            return $http.put('/dishs/' + id, data);
        },
        create : function(data) {
            return $http.post('/dishs', data);
        },
        delete : function(id) {
            return $http.delete('/dishs/' + id);
        }
    }
};
