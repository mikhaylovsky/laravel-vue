(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://laravel-auth.lh',
            routes : [{"host":null,"methods":["GET","POST","HEAD"],"uri":"broadcasting\/auth","name":null,"action":"\Illuminate\Broadcasting\BroadcastController@authenticate"},{"host":null,"methods":["POST"],"uri":"api\/auth\/register","name":"register","action":"App\Http\Controllers\Api\Auth\AuthController@register"},{"host":null,"methods":["POST"],"uri":"api\/auth\/login","name":"login","action":"App\Http\Controllers\Api\Auth\AuthController@login"},{"host":null,"methods":["POST"],"uri":"api\/auth\/password\/reset\/request","name":"password-reset-request","action":"App\Http\Controllers\Api\Auth\ForgottenPasswordController@reset"},{"host":null,"methods":["POST"],"uri":"api\/auth\/password\/reset\/check","name":"password-reset-check","action":"App\Http\Controllers\Api\Auth\ForgottenPasswordController@check"},{"host":null,"methods":["POST"],"uri":"api\/auth\/password\/reset\/confirm","name":"password-reset-confirm","action":"App\Http\Controllers\Api\Auth\ForgottenPasswordController@confirm"},{"host":null,"methods":["POST"],"uri":"api\/auth\/logout","name":"logout","action":"App\Http\Controllers\Api\Auth\AuthController@logout"},{"host":null,"methods":["POST"],"uri":"api\/auth\/refresh","name":"refresh","action":"App\Http\Controllers\Api\Auth\AuthController@refresh"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/auth\/my-account","name":"my-account","action":"App\Http\Controllers\Api\Auth\AccountController@getUser"},{"host":null,"methods":["PUT"],"uri":"api\/auth\/my-account","name":"update-account","action":"App\Http\Controllers\Api\Auth\AccountController@updateUser"},{"host":null,"methods":["POST"],"uri":"api\/chat","name":"channel-get-all","action":"App\Http\Controllers\Api\Chat\ChannelController@getAll"},{"host":null,"methods":["POST"],"uri":"api\/chat\/save","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"{any}","name":null,"action":"Closure"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

