
// GEST SERVICE
function guestService($http) {
    return {
        get : function() {
            return $http.get('/guests');
        },
        update : function(id, data){
            return $http.put('/guests/' + id, data);
        },
        create : function(data) {
            return $http.post('/guests', data);
        },
        delete : function(id) {
            return $http.delete('/guests/' + id);
        }
    }
};
