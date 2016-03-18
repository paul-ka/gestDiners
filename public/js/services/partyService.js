function partyService($http) {
	return {
        get : function() {
            return $http.get('/party');
        },
        update : function(id, data){
            return $http.put('/party/' + id, data);
        },
        create : function(data) {
            return $http.post('/party', data);
        },
        delete : function(id) {
            return $http.delete('/party/' + id);
        }
    }
};