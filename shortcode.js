(function() {
    tinymce.create('tinymce.plugins.code', {
        init : function(ed, url) {

            ed.addButton('codebutton', {
                title : 'Code',
                cmd : 'codebutton',
				//text: 'B',
                //icon: 'icon dashicons-editor-code',
				image: url + '/img/userinfo.gif'
            });

            ed.addCommand('codebutton', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<code>' + selected_text + '</code>';
                ed.execCommand('mceInsertContent', 0, return_text);
            });			
			
            ed.addButton('codebutton2', {
                title : 'Code',
                cmd : 'codebutton2',
				text: 'B',
                //icon: 'icon dashicons-editor-code',
				//image: url + '/userinfo.gif'
            });

            ed.addCommand('codebutton2', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<code>' + selected_text + '</code>';
                ed.execCommand('mceInsertContent', 0, return_text);
            });			
			
            ed.addButton('codebutton3', {
                title : 'Code',
                cmd : 'codebutton3',
                icon: 'mce-ico mce-i-bold',

            });

            ed.addCommand('codebutton3', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<code>' + selected_text + '</code>';
                ed.execCommand('mceInsertContent', 0, return_text);
            });			

			ed.addButton('codebutton4', {
                title : 'Code',
                cmd : 'codebutton4',				
                icon: 'insert-tweet is-dashicon dashicons dashicons-twitter',                
				onPostRender: function () {
                jQuery( '.is-dashicon' ).css( 'font-family', 'dashicons' );
            },
            });

            ed.addCommand('codebutton4', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<code>' + selected_text + '</code>';
                ed.execCommand('mceInsertContent', 0, return_text);
            });
		},
        // ... Hidden code
    });
    // Register plugin
    tinymce.PluginManager.add( 'mycodebutton', tinymce.plugins.code );
})();