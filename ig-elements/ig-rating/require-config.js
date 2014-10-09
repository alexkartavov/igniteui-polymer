require.config({
	baseUrl: 'lib',
    paths: {
	    jquery: 'bower_components/jquery/jquery.min',
	    'jquery-ui': 'bower_components/jquery-ui/ui/minified/jquery-ui.min',
	    'ig-core': 'ig/js/infragistics.core',
	    'ig-lob': 'ig/js/infragistics.lob',
	    'ig-dv': 'ig/js/infragistics.dv',
    },
    shim: {
    	'jquery': {
    		exports: '$'
    	},
    	'jquery-ui': {
    		deps: ['jquery'],
    		exports: '$'
    	},
    	'ig-core': {
    		deps: ['jquery-ui']
    	},
    	'ig-lob': {
    		deps: ['ig-core']
    	},
    	'ig-dv': {
    		deps: ['ig-core']
    	}
    }
});
