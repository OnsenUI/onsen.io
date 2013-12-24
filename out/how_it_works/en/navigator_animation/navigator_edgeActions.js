(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2375,function(sym,e){sym.stop();sym.$("Next").html("2. Set Toolbar's title");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5359,function(sym,e){sym.stop();sym.$("Next").html("3. Create Page 1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7750,function(sym,e){sym.stop();sym.$("Next").html("4. Link Page 1 to Navigator");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10864,function(sym,e){sym.stop();sym.$("Next").html("5. Create Page 2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13500,function(sym,e){sym.stop();sym.$("Next").html("6. Push Page 2 to Navigator's stack");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17000,function(sym,e){sym.$("Toolbar_title").html("Page 2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17750,function(sym,e){sym.stop();sym.$("Next").html("7. Pop a page from Navigator");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20301,function(sym,e){sym.$("Toolbar_title").html("Page 1");sym.$("Next").html("Restart");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20500,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Next").html("1. Create Navigator");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","mouseover",function(sym,e){var element=sym.$("NextBox");element.css('backgroundColor','#8aa3ff');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","mouseleave",function(sym,e){var element=sym.$("NextBox");element.css('backgroundColor','#6c8bfc');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-25584987");