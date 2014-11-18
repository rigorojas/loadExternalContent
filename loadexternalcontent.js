		$.fn.loadExternalContent = function( jsonUrl, templateUrl ){
			var element = this;
			$.when(
				$.ajax({
					crossOrigin: true,
					url: jsonUrl,
					dataType: "json",
					context: {}
				}),
				$.ajax({
					crossOrigin: true,
					dataType: 'html',
					url: templateUrl,
					context: {}
				})
			).then(function(data, html){
				var dataJSON = $.parseJSON( data[0] );
				var template = Handlebars.compile( html[0] );
				var externalContent = template( dataJSON );
				element.append( externalContent );
			}).done(function(){});
			return this;
		}//end fn.loadExternalContent
