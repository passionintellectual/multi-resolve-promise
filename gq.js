angular.module('gtpWebApp.core')
    .factory('$gq', ['$timeout', '$q', function($timeout, $q) {
        var $gq = {};
        
        var gq = function(key) {
            if ($gq[key]) {
                return $gq[key];
            }

            this.key = key;
            $gq[key] = this;
            
            this.q  = $q.defer();
        };

         
        
        gq.prototype.resolve= function (value) {
            // body...
            this.q.resolve(value);
        }
        
        gq.prototype.then = function (argument) {
            // body...
            this.q.then(argument);
        }
        
        
        return gq;
        
    }]);