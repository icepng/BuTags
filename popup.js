

function save(e){
	clear() ;
	chrome.windows.getCurrent(function(wnd){ 
		//alert(wnd.id) ;
        chrome.tabs.getAllInWindow(wnd.id, function(tabs){ 
        	//alert(tabs.length) ;
            for(var i = 0; i < tabs.length; i++){
            	var key = tabs[i].title ;
            	var value = tabs[i].url ;
            	chrome.storage.local.set({[key]: value}, function(){
            		//alert("success..") ;
            	}) ; 
            }
            alert("success...") ;
        }); 
    }); 
}

function restore(e){
	
	//chrome.tabs.create({url: 'www.baidu.com'}) ;
	//chrome.tabs.create({url: 'www.baidu.com'}) ;
	chrome.storage.local.get(null, function(result){
		for( keys in result){
			chrome.tabs.create({url: result[keys]})
		}
    });
}

function clear(e){
	chrome.storage.local.clear(function(){
	});
}
//alert("222") ;
document.addEventListener('DOMContentLoaded', function () {
  	document.getElementById("btnSave").addEventListener('click', save) ;
  	document.getElementById("btnRestore").addEventListener('click', restore) ;
});
