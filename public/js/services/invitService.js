// DISH SERVICE
function invitService($http) {
    return {
        get : function() {
            return $http.get('/invits');
        },
        update : function(id, data){
            return $http.put('/invits/' + id, data);
        },
        create : function(data) {
            return $http.post('/invits', data);
        },
        delete : function(id) {
            return $http.delete('/invits/' + id);
        }
    }
};
