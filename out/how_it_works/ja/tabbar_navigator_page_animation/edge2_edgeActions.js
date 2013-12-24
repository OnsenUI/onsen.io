(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_ReplayBox}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ReplayText}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-25584987");