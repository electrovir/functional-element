(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Fe=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Fe||{});function te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ig(e){return te(e).filter(t=>isNaN(Number(t)))}function xt(e){return ig(e).map(n=>e[n])}var sg=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,og=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ag=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Do={Space_Separator:sg,ID_Start:og,ID_Continue:ag},pe={isSpaceSeparator(e){return typeof e=="string"&&Do.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Do.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Do.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let pa,Me,Pt,as,an,ht,ve,eu,Ur;var ug=function(t,n){pa=String(t),Me="start",Pt=[],as=0,an=1,ht=0,ve=void 0,eu=void 0,Ur=void 0;do ve=lg(),dg[Me]();while(ve.type!=="eof");return typeof n=="function"?ga({"":Ur},"",n):Ur};function ga(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=String(i),o=ga(r,s,n);o===void 0?delete r[s]:Object.defineProperty(r,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const s=ga(r,i,n);s===void 0?delete r[i]:Object.defineProperty(r,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let z,U,Pr,Ft,K;function lg(){for(z="default",U="",Pr=!1,Ft=1;;){K=Rt();const e=md[z]();if(e)return e}}function Rt(){if(pa[as])return String.fromCodePoint(pa.codePointAt(as))}function D(){const e=Rt();return e===`
`?(an++,ht=0):e?ht+=e.length:ht++,e&&(as+=e.length),e}const md={default(){switch(K){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":D();return;case"/":D(),z="comment";return;case void 0:return D(),ie("eof")}if(pe.isSpaceSeparator(K)){D();return}return md[Me]()},comment(){switch(K){case"*":D(),z="multiLineComment";return;case"/":D(),z="singleLineComment";return}throw se(D())},multiLineComment(){switch(K){case"*":D(),z="multiLineCommentAsterisk";return;case void 0:throw se(D())}D()},multiLineCommentAsterisk(){switch(K){case"*":D();return;case"/":D(),z="default";return;case void 0:throw se(D())}D(),z="multiLineComment"},singleLineComment(){switch(K){case`
`:case"\r":case"\u2028":case"\u2029":D(),z="default";return;case void 0:return D(),ie("eof")}D()},value(){switch(K){case"{":case"[":return ie("punctuator",D());case"n":return D(),wn("ull"),ie("null",null);case"t":return D(),wn("rue"),ie("boolean",!0);case"f":return D(),wn("alse"),ie("boolean",!1);case"-":case"+":D()==="-"&&(Ft=-1),z="sign";return;case".":U=D(),z="decimalPointLeading";return;case"0":U=D(),z="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":U=D(),z="decimalInteger";return;case"I":return D(),wn("nfinity"),ie("numeric",1/0);case"N":return D(),wn("aN"),ie("numeric",NaN);case'"':case"'":Pr=D()==='"',U="",z="string";return}throw se(D())},identifierNameStartEscape(){if(K!=="u")throw se(D());D();const e=ya();switch(e){case"$":case"_":break;default:if(!pe.isIdStartChar(e))throw tl();break}U+=e,z="identifierName"},identifierName(){switch(K){case"$":case"_":case"‌":case"‍":U+=D();return;case"\\":D(),z="identifierNameEscape";return}if(pe.isIdContinueChar(K)){U+=D();return}return ie("identifier",U)},identifierNameEscape(){if(K!=="u")throw se(D());D();const e=ya();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!pe.isIdContinueChar(e))throw tl();break}U+=e,z="identifierName"},sign(){switch(K){case".":U=D(),z="decimalPointLeading";return;case"0":U=D(),z="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":U=D(),z="decimalInteger";return;case"I":return D(),wn("nfinity"),ie("numeric",Ft*(1/0));case"N":return D(),wn("aN"),ie("numeric",NaN)}throw se(D())},zero(){switch(K){case".":U+=D(),z="decimalPoint";return;case"e":case"E":U+=D(),z="decimalExponent";return;case"x":case"X":U+=D(),z="hexadecimal";return}return ie("numeric",Ft*0)},decimalInteger(){switch(K){case".":U+=D(),z="decimalPoint";return;case"e":case"E":U+=D(),z="decimalExponent";return}if(pe.isDigit(K)){U+=D();return}return ie("numeric",Ft*Number(U))},decimalPointLeading(){if(pe.isDigit(K)){U+=D(),z="decimalFraction";return}throw se(D())},decimalPoint(){switch(K){case"e":case"E":U+=D(),z="decimalExponent";return}if(pe.isDigit(K)){U+=D(),z="decimalFraction";return}return ie("numeric",Ft*Number(U))},decimalFraction(){switch(K){case"e":case"E":U+=D(),z="decimalExponent";return}if(pe.isDigit(K)){U+=D();return}return ie("numeric",Ft*Number(U))},decimalExponent(){switch(K){case"+":case"-":U+=D(),z="decimalExponentSign";return}if(pe.isDigit(K)){U+=D(),z="decimalExponentInteger";return}throw se(D())},decimalExponentSign(){if(pe.isDigit(K)){U+=D(),z="decimalExponentInteger";return}throw se(D())},decimalExponentInteger(){if(pe.isDigit(K)){U+=D();return}return ie("numeric",Ft*Number(U))},hexadecimal(){if(pe.isHexDigit(K)){U+=D(),z="hexadecimalInteger";return}throw se(D())},hexadecimalInteger(){if(pe.isHexDigit(K)){U+=D();return}return ie("numeric",Ft*Number(U))},string(){switch(K){case"\\":D(),U+=cg();return;case'"':if(Pr)return D(),ie("string",U);U+=D();return;case"'":if(!Pr)return D(),ie("string",U);U+=D();return;case`
`:case"\r":throw se(D());case"\u2028":case"\u2029":hg(K);break;case void 0:throw se(D())}U+=D()},start(){switch(K){case"{":case"[":return ie("punctuator",D())}z="value"},beforePropertyName(){switch(K){case"$":case"_":U=D(),z="identifierName";return;case"\\":D(),z="identifierNameStartEscape";return;case"}":return ie("punctuator",D());case'"':case"'":Pr=D()==='"',z="string";return}if(pe.isIdStartChar(K)){U+=D(),z="identifierName";return}throw se(D())},afterPropertyName(){if(K===":")return ie("punctuator",D());throw se(D())},beforePropertyValue(){z="value"},afterPropertyValue(){switch(K){case",":case"}":return ie("punctuator",D())}throw se(D())},beforeArrayValue(){if(K==="]")return ie("punctuator",D());z="value"},afterArrayValue(){switch(K){case",":case"]":return ie("punctuator",D())}throw se(D())},end(){throw se(D())}};function ie(e,t){return{type:e,value:t,line:an,column:ht}}function wn(e){for(const t of e){if(Rt()!==t)throw se(D());D()}}function cg(){switch(Rt()){case"b":return D(),"\b";case"f":return D(),"\f";case"n":return D(),`
`;case"r":return D(),"\r";case"t":return D(),"	";case"v":return D(),"\v";case"0":if(D(),pe.isDigit(Rt()))throw se(D());return"\0";case"x":return D(),fg();case"u":return D(),ya();case`
`:case"\u2028":case"\u2029":return D(),"";case"\r":return D(),Rt()===`
`&&D(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw se(D());case void 0:throw se(D())}return D()}function fg(){let e="",t=Rt();if(!pe.isHexDigit(t)||(e+=D(),t=Rt(),!pe.isHexDigit(t)))throw se(D());return e+=D(),String.fromCodePoint(parseInt(e,16))}function ya(){let e="",t=4;for(;t-- >0;){const n=Rt();if(!pe.isHexDigit(n))throw se(D());e+=D()}return String.fromCodePoint(parseInt(e,16))}const dg={start(){if(ve.type==="eof")throw bn();vo()},beforePropertyName(){switch(ve.type){case"identifier":case"string":eu=ve.value,Me="afterPropertyName";return;case"punctuator":Ti();return;case"eof":throw bn()}},afterPropertyName(){if(ve.type==="eof")throw bn();Me="beforePropertyValue"},beforePropertyValue(){if(ve.type==="eof")throw bn();vo()},beforeArrayValue(){if(ve.type==="eof")throw bn();if(ve.type==="punctuator"&&ve.value==="]"){Ti();return}vo()},afterPropertyValue(){if(ve.type==="eof")throw bn();switch(ve.value){case",":Me="beforePropertyName";return;case"}":Ti()}},afterArrayValue(){if(ve.type==="eof")throw bn();switch(ve.value){case",":Me="beforeArrayValue";return;case"]":Ti()}},end(){}};function vo(){let e;switch(ve.type){case"punctuator":switch(ve.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=ve.value;break}if(Ur===void 0)Ur=e;else{const t=Pt[Pt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,eu,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Pt.push(e),Array.isArray(e)?Me="beforeArrayValue":Me="beforePropertyName";else{const t=Pt[Pt.length-1];t==null?Me="end":Array.isArray(t)?Me="afterArrayValue":Me="afterPropertyValue"}}function Ti(){Pt.pop();const e=Pt[Pt.length-1];e==null?Me="end":Array.isArray(e)?Me="afterArrayValue":Me="afterPropertyValue"}function se(e){return us(e===void 0?`JSON5: invalid end of input at ${an}:${ht}`:`JSON5: invalid character '${pd(e)}' at ${an}:${ht}`)}function bn(){return us(`JSON5: invalid end of input at ${an}:${ht}`)}function tl(){return ht-=5,us(`JSON5: invalid identifier character at ${an}:${ht}`)}function hg(e){console.warn(`JSON5: '${pd(e)}' in strings is not valid ECMAScript; consider escaping`)}function pd(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function us(e){const t=new SyntaxError(e);return t.lineNumber=an,t.columnNumber=ht,t}var mg=function(t,n,r){const i=[];let s="",o,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){o=[];for(const b of n){let $;typeof b=="string"?$=b:(typeof b=="number"||b instanceof String||b instanceof Number)&&($=String(b)),$!==void 0&&o.indexOf($)<0&&o.push($)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),f("",{"":t});function f(b,$){let v=$[b];switch(v!=null&&(typeof v.toJSON5=="function"?v=v.toJSON5(b):typeof v.toJSON=="function"&&(v=v.toJSON(b))),a&&(v=a.call($,b,v)),v instanceof Number?v=Number(v):v instanceof String?v=String(v):v instanceof Boolean&&(v=v.valueOf()),v){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof v=="string")return c(v);if(typeof v=="number")return String(v);if(typeof v=="object")return Array.isArray(v)?w(v):d(v)}function c(b){const $={"'":.1,'"':.2},v={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let S="";for(let V=0;V<b.length;V++){const J=b[V];switch(J){case"'":case'"':$[J]++,S+=J;continue;case"\0":if(pe.isDigit(b[V+1])){S+="\\x00";continue}}if(v[J]){S+=v[J];continue}if(J<" "){let Te=J.charCodeAt(0).toString(16);S+="\\x"+("00"+Te).substring(Te.length);continue}S+=J}const I=l||Object.keys($).reduce((V,J)=>$[V]<$[J]?V:J);return S=S.replace(new RegExp(I,"g"),v[I]),I+S+I}function d(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let $=s;s=s+u;let v=o||Object.keys(b),S=[];for(const V of v){const J=f(V,b);if(J!==void 0){let Te=p(V)+":";u!==""&&(Te+=" "),Te+=J,S.push(Te)}}let I;if(S.length===0)I="{}";else{let V;if(u==="")V=S.join(","),I="{"+V+"}";else{let J=`,
`+s;V=S.join(J),I=`{
`+s+V+`,
`+$+"}"}}return i.pop(),s=$,I}function p(b){if(b.length===0)return c(b);const $=String.fromCodePoint(b.codePointAt(0));if(!pe.isIdStartChar($))return c(b);for(let v=$.length;v<b.length;v++)if(!pe.isIdContinueChar(String.fromCodePoint(b.codePointAt(v))))return c(b);return b}function w(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let $=s;s=s+u;let v=[];for(let I=0;I<b.length;I++){const V=f(String(I),b);v.push(V!==void 0?V:"null")}let S;if(v.length===0)S="[]";else if(u==="")S="["+v.join(",")+"]";else{let I=`,
`+s,V=v.join(I);S=`[
`+s+V+`,
`+$+"]"}return i.pop(),s=$,S}};const pg={parse:ug,stringify:mg};var gd=pg;function m(e){try{return gd.stringify(e)}catch{return String(e)}}const gg=[".",":",";",",","?","!"],yg=new RegExp(`[${gg.join("")}]+$`);function nl(e){return e.replace(yg,"")}function _e(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}function Ns(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&nl(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:nl(r)).join(": "):""}function Ve(e){return e instanceof Error?e:new Error(_e(e))}function xs(e,t){const n=Ve(e);return n.message=Ns(t,n.message),n}var N;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(N||(N={}));var Cn;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Cn||(Cn={}));const Yi={[Cn.Information]:[N.Continue,N.SwitchingProtocols,N.Processing,N.EarlyHints],[Cn.Success]:[N.Ok,N.Created,N.Accepted,N.NonAuthoritativeInformation,N.NoContent,N.ResetContent,N.PartialContent,N.MultiStatus,N.AlreadyReported,N.ImUsed],[Cn.Redirect]:[N.MultipleChoices,N.MovedPermanently,N.Found,N.SeeOther,N.NotModified,N.UseProxy,N.Unused,N.TemporaryRedirect,N.PermanentRedirect],[Cn.ClientError]:[N.BadRequest,N.Unauthorized,N.PaymentRequired,N.Forbidden,N.NotFound,N.MethodNotAllowed,N.NotAcceptable,N.ProxyAuthenticationRequired,N.RequestTimeout,N.Conflict,N.Gone,N.LengthRequired,N.PreconditionFailed,N.PayloadTooLarge,N.UriTooLong,N.UnsupportedMediaType,N.RangeNotSatisfiable,N.ExpectationFailed,N.ImATeapot,N.MisdirectedRequest,N.UnprocessableContent,N.Locked,N.FailedDependency,N.TooEarly,N.UpgradeRequired,N.PreconditionRequired,N.TooManyRequests,N.RequestHeaderFieldsTooLarge,N.UnavailableForLegalReasons],[Cn.ServerError]:[N.InternalServerError,N.NotImplemented,N.BadGateway,N.ServiceUnavailable,N.GatewayTimeout,N.HttpVersionNotSupported,N.VariantAlsoNegotiates,N.InsufficientStorage,N.LoopDetected,N.NotExtended,N.NetworkAuthenticationRequired]};function yd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}let wd=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Ve(r))}})}};class On extends Error{}class wg extends On{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class bg extends On{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Eg extends On{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Xn extends On{}class bd extends On{constructor(t){super(`Invalid unit ${t}`)}}class Ce extends On{}class Zt extends On{constructor(){super("Zone is an abstract class")}}const M="numeric",pt="short",Ze="long",ls={year:M,month:M,day:M},Ed={year:M,month:pt,day:M},Dg={year:M,month:pt,day:M,weekday:pt},Dd={year:M,month:Ze,day:M},vd={year:M,month:Ze,day:M,weekday:Ze},$d={hour:M,minute:M},Ad={hour:M,minute:M,second:M},Cd={hour:M,minute:M,second:M,timeZoneName:pt},kd={hour:M,minute:M,second:M,timeZoneName:Ze},Sd={hour:M,minute:M,hourCycle:"h23"},Fd={hour:M,minute:M,second:M,hourCycle:"h23"},Td={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:pt},Md={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:Ze},Nd={year:M,month:M,day:M,hour:M,minute:M},xd={year:M,month:M,day:M,hour:M,minute:M,second:M},Pd={year:M,month:pt,day:M,hour:M,minute:M},Bd={year:M,month:pt,day:M,hour:M,minute:M,second:M},vg={year:M,month:pt,day:M,weekday:pt,hour:M,minute:M},Ld={year:M,month:Ze,day:M,hour:M,minute:M,timeZoneName:pt},Id={year:M,month:Ze,day:M,hour:M,minute:M,second:M,timeZoneName:pt},Od={year:M,month:Ze,day:M,weekday:Ze,hour:M,minute:M,timeZoneName:Ze},Rd={year:M,month:Ze,day:M,weekday:Ze,hour:M,minute:M,second:M,timeZoneName:Ze};class hi{get type(){throw new Zt}get name(){throw new Zt}get ianaName(){return this.name}get isUniversal(){throw new Zt}offsetName(t,n){throw new Zt}formatOffset(t,n){throw new Zt}offset(t){throw new Zt}equals(t){throw new Zt}get isValid(){throw new Zt}}let $o=null;class Ps extends hi{static get instance(){return $o===null&&($o=new Ps),$o}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Kd(t,n,r)}formatOffset(t,n){return jr(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Hi={};function $g(e){return Hi[e]||(Hi[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Hi[e]}const Ag={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Cg(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,u,l,f]=r;return[o,i,s,a,u,l,f]}function kg(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=Ag[s];s==="era"?r[a]=o:_(a)||(r[a]=parseInt(o,10))}return r}let Mi={};class Wt extends hi{static create(t){return Mi[t]||(Mi[t]=new Wt(t)),Mi[t]}static resetCache(){Mi={},Hi={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Wt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Kd(t,n,r,this.name)}formatOffset(t,n){return jr(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=$g(this.name);let[i,s,o,a,u,l,f]=r.formatToParts?kg(r,n):Cg(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=Ls({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:f,millisecond:0});let p=+n;const w=p%1e3;return p-=w>=0?w:1e3+w,(d-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let rl={};function Sg(e,t={}){const n=JSON.stringify([e,t]);let r=rl[n];return r||(r=new Intl.ListFormat(e,t),rl[n]=r),r}let wa={};function ba(e,t={}){const n=JSON.stringify([e,t]);let r=wa[n];return r||(r=new Intl.DateTimeFormat(e,t),wa[n]=r),r}let Ea={};function Fg(e,t={}){const n=JSON.stringify([e,t]);let r=Ea[n];return r||(r=new Intl.NumberFormat(e,t),Ea[n]=r),r}let Da={};function Tg(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=Da[i];return s||(s=new Intl.RelativeTimeFormat(e,t),Da[i]=s),s}let Br=null;function Mg(){return Br||(Br=new Intl.DateTimeFormat().resolvedOptions().locale,Br)}let il={};function Ng(e){let t=il[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,il[e]=t}return t}function xg(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=ba(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=ba(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function Pg(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Bg(e){const t=[];for(let n=1;n<=12;n++){const r=W.utc(2009,n,1);t.push(e(r))}return t}function Lg(e){const t=[];for(let n=1;n<=7;n++){const r=W.utc(2016,11,13+n);t.push(e(r))}return t}function Ni(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function Ig(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Og{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=Fg(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):su(t,3);return ge(n,this.padTo)}}}class Rg{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Wt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=ba(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Vg{constructor(t,n,r){this.opts={style:"long",...r},!n&&zd()&&(this.rtf=Tg(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):uy(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const _g={firstDay:1,minimalDays:4,weekend:[6,7]};class X{static fromOpts(t){return X.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const o=t||ae.defaultLocale,a=o||(s?"en-US":Mg()),u=n||ae.defaultNumberingSystem,l=r||ae.defaultOutputCalendar,f=va(i)||ae.defaultWeekSettings;return new X(a,u,l,f,o)}static resetCache(){Br=null,wa={},Ea={},Da={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return X.create(t,n,r,i)}constructor(t,n,r,i,s){const[o,a,u]=xg(t);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=Pg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ig(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:X.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,va(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Ni(this,t,Yd,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Bg(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return Ni(this,t,Xd,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Lg(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ni(this,void 0,()=>eh,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[W.utc(2016,11,13,9),W.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ni(this,t,th,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[W.utc(-40,1,1),W.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(t={}){return new Og(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Rg(t,this.intl,n)}relFormatter(t={}){return new Vg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Sg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Gd()?Ng(this.locale):_g}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Ao=null;class Ne extends hi{static get utcInstance(){return Ao===null&&(Ao=new Ne(0)),Ao}static instance(t){return t===0?Ne.utcInstance:new Ne(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ne(Is(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${jr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${jr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return jr(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Wg extends hi{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function tn(e,t){if(_(e)||e===null)return t;if(e instanceof hi)return e;if(Kg(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Ps.instance:n==="utc"||n==="gmt"?Ne.utcInstance:Ne.parseSpecifier(n)||Wt.create(e)}else return sn(e)?Ne.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Wg(e)}const tu={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},sl={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Ug=tu.hanidec.replace(/[\[|\]]/g,"").split("");function jg(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(tu.hanidec)!==-1)t+=Ug.indexOf(e[n]);else for(const i in sl){const[s,o]=sl[i];r>=s&&r<=o&&(t+=r-s)}}return parseInt(t,10)}else return t}let Jn={};function qg(){Jn={}}function ut({numberingSystem:e},t=""){const n=e||"latn";return Jn[n]||(Jn[n]={}),Jn[n][t]||(Jn[n][t]=new RegExp(`${tu[n]}${t}`)),Jn[n][t]}let ol=()=>Date.now(),al="system",ul=null,ll=null,cl=null,fl=60,dl,hl=null;class ae{static get now(){return ol}static set now(t){ol=t}static set defaultZone(t){al=t}static get defaultZone(){return tn(al,Ps.instance)}static get defaultLocale(){return ul}static set defaultLocale(t){ul=t}static get defaultNumberingSystem(){return ll}static set defaultNumberingSystem(t){ll=t}static get defaultOutputCalendar(){return cl}static set defaultOutputCalendar(t){cl=t}static get defaultWeekSettings(){return hl}static set defaultWeekSettings(t){hl=va(t)}static get twoDigitCutoffYear(){return fl}static set twoDigitCutoffYear(t){fl=t%100}static get throwOnInvalid(){return dl}static set throwOnInvalid(t){dl=t}static resetCaches(){X.resetCache(),Wt.resetCache(),W.resetCache(),qg()}}class ft{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Vd=[0,31,59,90,120,151,181,212,243,273,304,334],_d=[0,31,60,91,121,152,182,213,244,274,305,335];function rt(e,t){return new ft("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function nu(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Wd(e,t,n){return n+(mi(e)?_d:Vd)[t-1]}function Ud(e,t){const n=mi(e)?_d:Vd,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}function ru(e,t){return(e-t+7)%7+1}function cs(e,t=4,n=1){const{year:r,month:i,day:s}=e,o=Wd(r,i,s),a=ru(nu(r,i,s),n);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=r-1,u=Jr(l,t,n)):u>Jr(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Os(e)}}function ml(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,o=ru(nu(r,1,t),n),a=rr(r);let u=i*7+s-o-7+t,l;u<1?(l=r-1,u+=rr(l)):u>a?(l=r+1,u-=rr(r)):l=r;const{month:f,day:c}=Ud(l,u);return{year:l,month:f,day:c,...Os(e)}}function Co(e){const{year:t,month:n,day:r}=e,i=Wd(t,n,r);return{year:t,ordinal:i,...Os(e)}}function pl(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Ud(t,n);return{year:t,month:r,day:i,...Os(e)}}function gl(e,t){if(!_(e.localWeekday)||!_(e.localWeekNumber)||!_(e.localWeekYear)){if(!_(e.weekday)||!_(e.weekNumber)||!_(e.weekYear))throw new Xn("Cannot mix locale-based week fields with ISO-based week fields");return _(e.localWeekday)||(e.weekday=e.localWeekday),_(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),_(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function zg(e,t=4,n=1){const r=Bs(e.weekYear),i=it(e.weekNumber,1,Jr(e.weekYear,t,n)),s=it(e.weekday,1,7);return r?i?s?!1:rt("weekday",e.weekday):rt("week",e.weekNumber):rt("weekYear",e.weekYear)}function Gg(e){const t=Bs(e.year),n=it(e.ordinal,1,rr(e.year));return t?n?!1:rt("ordinal",e.ordinal):rt("year",e.year)}function jd(e){const t=Bs(e.year),n=it(e.month,1,12),r=it(e.day,1,fs(e.year,e.month));return t?n?r?!1:rt("day",e.day):rt("month",e.month):rt("year",e.year)}function qd(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=it(t,0,23)||t===24&&n===0&&r===0&&i===0,o=it(n,0,59),a=it(r,0,59),u=it(i,0,999);return s?o?a?u?!1:rt("millisecond",i):rt("second",r):rt("minute",n):rt("hour",t)}function _(e){return typeof e>"u"}function sn(e){return typeof e=="number"}function Bs(e){return typeof e=="number"&&e%1===0}function Kg(e){return typeof e=="string"}function Zg(e){return Object.prototype.toString.call(e)==="[object Date]"}function zd(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Gd(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Jg(e){return Array.isArray(e)?e:[e]}function yl(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function Yg(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function ur(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function va(e){if(e==null)return null;if(typeof e!="object")throw new Ce("Week settings must be an object");if(!it(e.firstDay,1,7)||!it(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!it(t,1,7)))throw new Ce("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function it(e,t,n){return Bs(e)&&e>=t&&e<=n}function Hg(e,t){return e-t*Math.floor(e/t)}function ge(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Xt(e){if(!(_(e)||e===null||e===""))return parseInt(e,10)}function En(e){if(!(_(e)||e===null||e===""))return parseFloat(e)}function iu(e){if(!(_(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function su(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function mi(e){return e%4===0&&(e%100!==0||e%400===0)}function rr(e){return mi(e)?366:365}function fs(e,t){const n=Hg(t-1,12)+1,r=e+(t-n)/12;return n===2?mi(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Ls(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function wl(e,t,n){return-ru(nu(e,1,t),n)+t-1}function Jr(e,t=4,n=1){const r=wl(e,t,n),i=wl(e+1,t,n);return(rr(e)-r+i)/7}function $a(e){return e>99?e:e>ae.twoDigitCutoffYear?1900+e:2e3+e}function Kd(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Is(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Zd(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ce(`Invalid unit value ${e}`);return t}function ds(e,t){const n={};for(const r in e)if(ur(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Zd(i)}return n}function jr(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ge(n,2)}:${ge(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${ge(n,2)}${ge(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Os(e){return Yg(e,["hour","minute","second","millisecond"])}const Qg=["January","February","March","April","May","June","July","August","September","October","November","December"],Jd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Xg=["J","F","M","A","M","J","J","A","S","O","N","D"];function Yd(e){switch(e){case"narrow":return[...Xg];case"short":return[...Jd];case"long":return[...Qg];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Hd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Qd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ey=["M","T","W","T","F","S","S"];function Xd(e){switch(e){case"narrow":return[...ey];case"short":return[...Qd];case"long":return[...Hd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const eh=["AM","PM"],ty=["Before Christ","Anno Domini"],ny=["BC","AD"],ry=["B","A"];function th(e){switch(e){case"narrow":return[...ry];case"short":return[...ny];case"long":return[...ty];default:return null}}function iy(e){return eh[e.hour<12?0:1]}function sy(e,t){return Xd(t)[e.weekday-1]}function oy(e,t){return Yd(t)[e.month-1]}function ay(e,t){return th(t)[e.year<0?0:1]}function uy(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const c=e==="days";switch(t){case 1:return c?"tomorrow":`next ${i[e][0]}`;case-1:return c?"yesterday":`last ${i[e][0]}`;case 0:return c?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],f=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${f} ago`:`in ${a} ${f}`}function bl(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const ly={D:ls,DD:Ed,DDD:Dd,DDDD:vd,t:$d,tt:Ad,ttt:Cd,tttt:kd,T:Sd,TT:Fd,TTT:Td,TTTT:Md,f:Nd,ff:Pd,fff:Ld,ffff:Od,F:xd,FF:Bd,FFF:Id,FFFF:Rd};class Se{static create(t,n={}){return new Se(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return ly[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return ge(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,w)=>this.loc.extract(t,p,w),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>r?iy(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,w)=>r?oy(t,p):s(w?{month:p}:{month:p,day:"numeric"},"month"),l=(p,w)=>r?sy(t,p):s(w?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),f=p=>{const w=Se.macroTokenToFormatOpts(p);return w?this.formatWithSystemDefault(t,w):p},c=p=>r?ay(t,p):s({era:p},"era"),d=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(p)}};return bl(Se.parseFormat(n),d)}formatDurationFromString(t,n){const r=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const f=r(l);return f?this.num(u.get(f),l.length):l},s=Se.parseFormat(n),o=s.reduce((u,{literal:l,val:f})=>l?u:u.concat(f),[]),a=t.shiftTo(...o.map(r).filter(u=>u));return bl(s,i(a))}}const nh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function wr(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function br(...e){return t=>e.reduce(([n,r,i],s)=>{const[o,a,u]=s(t,i);return[{...n,...o},a||r,u]},[{},null,1]).slice(0,2)}function Er(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function rh(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Xt(t[n+i]);return[r,null,n+i]}}const ih=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,cy=`(?:${ih.source}?(?:\\[(${nh.source})\\])?)?`,ou=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,sh=RegExp(`${ou.source}${cy}`),au=RegExp(`(?:T${sh.source})?`),fy=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,dy=/(\d{4})-?W(\d\d)(?:-?(\d))?/,hy=/(\d{4})-?(\d{3})/,my=rh("weekYear","weekNumber","weekDay"),py=rh("year","ordinal"),gy=/(\d{4})-(\d\d)-(\d\d)/,oh=RegExp(`${ou.source} ?(?:${ih.source}|(${nh.source}))?`),yy=RegExp(`(?: ${oh.source})?`);function ir(e,t,n){const r=e[t];return _(r)?n:Xt(r)}function wy(e,t){return[{year:ir(e,t),month:ir(e,t+1,1),day:ir(e,t+2,1)},null,t+3]}function Dr(e,t){return[{hours:ir(e,t,0),minutes:ir(e,t+1,0),seconds:ir(e,t+2,0),milliseconds:iu(e[t+3])},null,t+4]}function pi(e,t){const n=!e[t]&&!e[t+1],r=Is(e[t+1],e[t+2]),i=n?null:Ne.instance(r);return[{},i,t+3]}function gi(e,t){const n=e[t]?Wt.create(e[t]):null;return[{},n,t+1]}const by=RegExp(`^T?${ou.source}$`),Ey=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Dy(e){const[t,n,r,i,s,o,a,u,l]=e,f=t[0]==="-",c=u&&u[0]==="-",d=(p,w=!1)=>p!==void 0&&(w||p&&f)?-p:p;return[{years:d(En(n)),months:d(En(r)),weeks:d(En(i)),days:d(En(s)),hours:d(En(o)),minutes:d(En(a)),seconds:d(En(u),u==="-0"),milliseconds:d(iu(l),c)}]}const vy={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function uu(e,t,n,r,i,s,o){const a={year:t.length===2?$a(Xt(t)):Xt(t),month:Jd.indexOf(n)+1,day:Xt(r),hour:Xt(i),minute:Xt(s)};return o&&(a.second=Xt(o)),e&&(a.weekday=e.length>3?Hd.indexOf(e)+1:Qd.indexOf(e)+1),a}const $y=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Ay(e){const[,t,n,r,i,s,o,a,u,l,f,c]=e,d=uu(t,i,r,n,s,o,a);let p;return u?p=vy[u]:l?p=0:p=Is(f,c),[d,new Ne(p)]}function Cy(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const ky=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Sy=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Fy=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function El(e){const[,t,n,r,i,s,o,a]=e;return[uu(t,i,r,n,s,o,a),Ne.utcInstance]}function Ty(e){const[,t,n,r,i,s,o,a]=e;return[uu(t,a,n,r,i,s,o),Ne.utcInstance]}const My=wr(fy,au),Ny=wr(dy,au),xy=wr(hy,au),Py=wr(sh),ah=br(wy,Dr,pi,gi),By=br(my,Dr,pi,gi),Ly=br(py,Dr,pi,gi),Iy=br(Dr,pi,gi);function Oy(e){return Er(e,[My,ah],[Ny,By],[xy,Ly],[Py,Iy])}function Ry(e){return Er(Cy(e),[$y,Ay])}function Vy(e){return Er(e,[ky,El],[Sy,El],[Fy,Ty])}function _y(e){return Er(e,[Ey,Dy])}const Wy=br(Dr);function Uy(e){return Er(e,[by,Wy])}const jy=wr(gy,yy),qy=wr(oh),zy=br(Dr,pi,gi);function Gy(e){return Er(e,[jy,ah],[qy,zy])}const Dl="Invalid Duration",uh={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Ky={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...uh},He=146097/400,_n=146097/4800,Zy={years:{quarters:4,months:12,weeks:He/7,days:He,hours:He*24,minutes:He*24*60,seconds:He*24*60*60,milliseconds:He*24*60*60*1e3},quarters:{months:3,weeks:He/28,days:He/4,hours:He*24/4,minutes:He*24*60/4,seconds:He*24*60*60/4,milliseconds:He*24*60*60*1e3/4},months:{weeks:_n/7,days:_n,hours:_n*24,minutes:_n*24*60,seconds:_n*24*60*60,milliseconds:_n*24*60*60*1e3},...uh},Fn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Jy=Fn.slice(0).reverse();function Jt(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Z(r)}function lh(e,t){let n=t.milliseconds??0;for(const r of Jy.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function vl(e,t){const n=lh(e,t)<0?-1:1;Fn.reduceRight((r,i)=>{if(_(t[i]))return r;if(r){const s=t[r]*n,o=e[i][r],a=Math.floor(s/o);t[i]+=a*n,t[r]-=a*o*n}return i},null),Fn.reduce((r,i)=>{if(_(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}function Yy(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class Z{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Zy:Ky;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||X.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return Z.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Ce(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Z({values:ds(t,Z.normalizeUnit),loc:X.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(sn(t))return Z.fromMillis(t);if(Z.isDuration(t))return t;if(typeof t=="object")return Z.fromObject(t);throw new Ce(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=_y(t);return r?Z.fromObject(r,n):Z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Uy(t);return r?Z.fromObject(r,n):Z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Ce("need to specify a reason the Duration is invalid");const r=t instanceof ft?t:new ft(t,n);if(ae.throwOnInvalid)throw new Eg(r);return new Z({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new bd(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Se.create(this.loc,r).formatDurationFromString(this,t):Dl}toHuman(t={}){if(!this.isValid)return Dl;const n=Fn.map(r=>{const i=this.values[r];return _(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=su(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},W.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?lh(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=Z.fromDurationLike(t),r={};for(const i of Fn)(ur(n.values,i)||ur(this.values,i))&&(r[i]=n.get(i)+this.get(i));return Jt(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=Z.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Zd(t(this.values[r],r));return Jt(this,{values:n},!0)}get(t){return this[Z.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...ds(t,Z.normalizeUnit)};return Jt(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return Jt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return vl(this.matrix,t),Jt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Yy(this.normalize().shiftToAll().toObject());return Jt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>Z.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of Fn)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in r)a+=this.matrix[l][o]*r[l],r[l]=0;sn(i[o])&&(a+=i[o]);const u=Math.trunc(a);n[o]=u,r[o]=(a*1e3-u*1e3)/1e3}else sn(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return vl(this.matrix,n),Jt(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return Jt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Fn)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Wn="Invalid Interval";function Hy(e,t){return!e||!e.isValid?de.invalid("missing or invalid start"):!t||!t.isValid?de.invalid("missing or invalid end"):t<e?de.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class de{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Ce("need to specify a reason the Interval is invalid");const r=t instanceof ft?t:new ft(t,n);if(ae.throwOnInvalid)throw new bg(r);return new de({invalid:r})}static fromDateTimes(t,n){const r=kr(t),i=kr(n),s=Hy(r,i);return s??new de({start:r,end:i})}static after(t,n){const r=Z.fromDurationLike(n),i=kr(t);return de.fromDateTimes(i,i.plus(r))}static before(t,n){const r=Z.fromDurationLike(n),i=kr(t);return de.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,o;try{s=W.fromISO(r,n),o=s.isValid}catch{o=!1}let a,u;try{a=W.fromISO(i,n),u=a.isValid}catch{u=!1}if(o&&u)return de.fromDateTimes(s,a);if(o){const l=Z.fromISO(i,n);if(l.isValid)return de.after(s,l)}else if(u){const l=Z.fromISO(r,n);if(l.isValid)return de.before(a,l)}}return de.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?de.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(kr).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(de.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(t){const n=Z.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(de.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:de.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return de.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(de.fromDateTimes(n,u.time)),n=null);return de.merge(i)}difference(...t){return de.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ls,n={}){return this.isValid?Se.create(this.s.loc.clone(n),t).formatInterval(this):Wn}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Wn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wn}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Wn}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Wn}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):Z.invalid(this.invalidReason)}mapEndpoints(t){return de.fromDateTimes(t(this.s),t(this.e))}}class xi{static hasDST(t=ae.defaultZone){const n=W.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Wt.isValidZone(t)}static normalizeZone(t){return tn(t,ae.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||X.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||X.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||X.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||X.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||X.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||X.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||X.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return X.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return X.create(n,null,"gregory").eras(t)}static features(){return{relative:zd(),localeWeek:Gd()}}}function $l(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(Z.fromMillis(r).as("days"))}function Qy(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const f=$l(u,l);return(f-f%7)/7}],["days",$l]],i={},s=e;let o,a;for(const[u,l]of r)n.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Xy(e,t,n,r){let[i,s,o,a]=Qy(e,t,n);const u=t-i,l=n.filter(c=>["hours","minutes","seconds","milliseconds"].indexOf(c)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const f=Z.fromObject(s,r);return l.length>0?Z.fromMillis(u,r).shiftTo(...l).plus(f):f}const ew="missing Intl.DateTimeFormat.formatToParts support";function Y(e,t=n=>n){return{regex:e,deser:([n])=>t(jg(n))}}const tw=" ",ch=`[ ${tw}]`,fh=new RegExp(ch,"g");function nw(e){return e.replace(/\./g,"\\.?").replace(fh,ch)}function Al(e){return e.replace(/\./g,"").replace(fh," ").toLowerCase()}function lt(e,t){return e===null?null:{regex:RegExp(e.map(nw).join("|")),deser:([n])=>e.findIndex(r=>Al(n)===Al(r))+t}}function Cl(e,t){return{regex:e,deser:([,n,r])=>Is(n,r),groups:t}}function Pi(e){return{regex:e,deser:([t])=>t}}function rw(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function iw(e,t){const n=ut(t),r=ut(t,"{2}"),i=ut(t,"{3}"),s=ut(t,"{4}"),o=ut(t,"{6}"),a=ut(t,"{1,2}"),u=ut(t,"{1,3}"),l=ut(t,"{1,6}"),f=ut(t,"{1,9}"),c=ut(t,"{2,4}"),d=ut(t,"{4,6}"),p=$=>({regex:RegExp(rw($.val)),deser:([v])=>v,literal:!0}),b=($=>{if(e.literal)return p($);switch($.val){case"G":return lt(t.eras("short"),0);case"GG":return lt(t.eras("long"),0);case"y":return Y(l);case"yy":return Y(c,$a);case"yyyy":return Y(s);case"yyyyy":return Y(d);case"yyyyyy":return Y(o);case"M":return Y(a);case"MM":return Y(r);case"MMM":return lt(t.months("short",!0),1);case"MMMM":return lt(t.months("long",!0),1);case"L":return Y(a);case"LL":return Y(r);case"LLL":return lt(t.months("short",!1),1);case"LLLL":return lt(t.months("long",!1),1);case"d":return Y(a);case"dd":return Y(r);case"o":return Y(u);case"ooo":return Y(i);case"HH":return Y(r);case"H":return Y(a);case"hh":return Y(r);case"h":return Y(a);case"mm":return Y(r);case"m":return Y(a);case"q":return Y(a);case"qq":return Y(r);case"s":return Y(a);case"ss":return Y(r);case"S":return Y(u);case"SSS":return Y(i);case"u":return Pi(f);case"uu":return Pi(a);case"uuu":return Y(n);case"a":return lt(t.meridiems(),0);case"kkkk":return Y(s);case"kk":return Y(c,$a);case"W":return Y(a);case"WW":return Y(r);case"E":case"c":return Y(n);case"EEE":return lt(t.weekdays("short",!1),1);case"EEEE":return lt(t.weekdays("long",!1),1);case"ccc":return lt(t.weekdays("short",!0),1);case"cccc":return lt(t.weekdays("long",!0),1);case"Z":case"ZZ":return Cl(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Cl(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Pi(/[a-z_+-/]{1,256}?/i);case" ":return Pi(/[^\S\n\r]/);default:return p($)}})(e)||{invalidReason:ew};return b.token=e,b}const sw={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function ow(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[r];let o=r;r==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=sw[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function aw(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function uw(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const o in n)if(ur(n,o)){const a=n[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+u))),s+=u}return[r,i]}else return[r,{}]}function lw(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return _(e.z)||(n=Wt.create(e.z)),_(e.Z)||(n||(n=new Ne(e.Z)),r=e.Z),_(e.q)||(e.M=(e.q-1)*3+1),_(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),_(e.u)||(e.S=iu(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),n,r]}let ko=null;function cw(){return ko||(ko=W.fromMillis(1555555555555)),ko}function fw(e,t){if(e.literal)return e;const n=Se.macroTokenToFormatOpts(e.val),r=ph(n,t);return r==null||r.includes(void 0)?e:r}function dh(e,t){return Array.prototype.concat(...e.map(n=>fw(n,t)))}class hh{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=dh(Se.parseFormat(n),t),this.units=this.tokens.map(r=>iw(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=aw(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=uw(t,this.regex,this.handlers),[i,s,o]=r?lw(r):[null,null,void 0];if(ur(r,"a")&&ur(r,"H"))throw new Xn("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function mh(e,t,n){return new hh(e,n).explainFromTokens(t)}function dw(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=mh(e,t,n);return[r,i,s,o]}function ph(e,t){if(!e)return null;const r=Se.create(t,e).dtFormatter(cw()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>ow(o,e,s))}const So="Invalid DateTime",kl=864e13;function Lr(e){return new ft("unsupported zone",`the zone "${e.name}" is not supported`)}function Fo(e){return e.weekData===null&&(e.weekData=cs(e.c)),e.weekData}function To(e){return e.localWeekData===null&&(e.localWeekData=cs(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Dn(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new W({...n,...t,old:n})}function gh(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Bi(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Qi(e,t,n){return gh(Ls(e),t,n)}function Sl(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,fs(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=Z.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Ls(s);let[u,l]=gh(a,n,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Un(e,t,n,r,i,s){const{setZone:o,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=W.fromObject(e,{...n,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return W.invalid(new ft("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Li(e,t,n=!0){return e.isValid?Se.create(X.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Mo(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=ge(e.c.year,n?6:4),t?(r+="-",r+=ge(e.c.month),r+="-",r+=ge(e.c.day)):(r+=ge(e.c.month),r+=ge(e.c.day)),r}function Fl(e,t,n,r,i,s){let o=ge(e.c.hour);return t?(o+=":",o+=ge(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=":")):o+=ge(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=ge(e.c.second),(e.c.millisecond!==0||!r)&&(o+=".",o+=ge(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=ge(Math.trunc(-e.o/60)),o+=":",o+=ge(Math.trunc(-e.o%60))):(o+="+",o+=ge(Math.trunc(e.o/60)),o+=":",o+=ge(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const yh={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},hw={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},mw={ordinal:1,hour:0,minute:0,second:0,millisecond:0},wh=["year","month","day","hour","minute","second","millisecond"],pw=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],gw=["year","ordinal","hour","minute","second","millisecond"];function yw(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new bd(e);return t}function Tl(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return yw(e)}}function ww(e){return es[e]||(Xi===void 0&&(Xi=ae.now()),es[e]=e.offset(Xi)),es[e]}function Ml(e,t){const n=tn(t.zone,ae.defaultZone);if(!n.isValid)return W.invalid(Lr(n));const r=X.fromObject(t);let i,s;if(_(e.year))i=ae.now();else{for(const u of wh)_(e[u])&&(e[u]=yh[u]);const o=jd(e)||qd(e);if(o)return W.invalid(o);const a=ww(n);[i,s]=Qi(e,a,n)}return new W({ts:i,zone:n,loc:r,o:s})}function Nl(e,t,n){const r=_(n.round)?!0:n.round,i=(o,a)=>(o=su(o,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,n.units[n.units.length-1])}function xl(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let Xi,es={};class W{constructor(t){const n=t.zone||ae.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new ft("invalid input"):null)||(n.isValid?null:Lr(n));this.ts=_(t.ts)?ae.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const a=sn(t.o)&&!t.old?t.o:n.offset(this.ts);i=Bi(this.ts,a),r=Number.isNaN(i.year)?new ft("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=t.loc||X.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new W({})}static local(){const[t,n]=xl(arguments),[r,i,s,o,a,u,l]=n;return Ml({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=xl(arguments),[r,i,s,o,a,u,l]=n;return t.zone=Ne.utcInstance,Ml({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=Zg(t)?t.valueOf():NaN;if(Number.isNaN(r))return W.invalid("invalid input");const i=tn(n.zone,ae.defaultZone);return i.isValid?new W({ts:r,zone:i,loc:X.fromObject(n)}):W.invalid(Lr(i))}static fromMillis(t,n={}){if(sn(t))return t<-kl||t>kl?W.invalid("Timestamp out of range"):new W({ts:t,zone:tn(n.zone,ae.defaultZone),loc:X.fromObject(n)});throw new Ce(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(sn(t))return new W({ts:t*1e3,zone:tn(n.zone,ae.defaultZone),loc:X.fromObject(n)});throw new Ce("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=tn(n.zone,ae.defaultZone);if(!r.isValid)return W.invalid(Lr(r));const i=X.fromObject(n),s=ds(t,Tl),{minDaysInFirstWeek:o,startOfWeek:a}=gl(s,i),u=ae.now(),l=_(n.specificOffset)?r.offset(u):n.specificOffset,f=!_(s.ordinal),c=!_(s.year),d=!_(s.month)||!_(s.day),p=c||d,w=s.weekYear||s.weekNumber;if((p||f)&&w)throw new Xn("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&f)throw new Xn("Can't mix ordinal dates with month/day");const b=w||s.weekday&&!p;let $,v,S=Bi(u,l);b?($=pw,v=hw,S=cs(S,o,a)):f?($=gw,v=mw,S=Co(S)):($=wh,v=yh);let I=!1;for(const bt of $){const yn=s[bt];_(yn)?I?s[bt]=v[bt]:s[bt]=S[bt]:I=!0}const V=b?zg(s,o,a):f?Gg(s):jd(s),J=V||qd(s);if(J)return W.invalid(J);const Te=b?ml(s,o,a):f?pl(s):s,[Kt,Pe]=Qi(Te,l,r),Ue=new W({ts:Kt,zone:r,o:Pe,loc:i});return s.weekday&&p&&t.weekday!==Ue.weekday?W.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Ue.toISO()}`):Ue.isValid?Ue:W.invalid(Ue.invalid)}static fromISO(t,n={}){const[r,i]=Oy(t);return Un(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Ry(t);return Un(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Vy(t);return Un(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(_(t)||_(n))throw new Ce("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=X.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,f]=dw(o,t,n);return f?W.invalid(f):Un(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return W.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=Gy(t);return Un(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Ce("need to specify a reason the DateTime is invalid");const r=t instanceof ft?t:new ft(t,n);if(ae.throwOnInvalid)throw new wg(r);return new W({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=ph(t,X.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return dh(Se.parseFormat(t),X.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Xi=void 0,es={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Fo(this).weekYear:NaN}get weekNumber(){return this.isValid?Fo(this).weekNumber:NaN}get weekday(){return this.isValid?Fo(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?To(this).weekday:NaN}get localWeekNumber(){return this.isValid?To(this).weekNumber:NaN}get localWeekYear(){return this.isValid?To(this).weekYear:NaN}get ordinal(){return this.isValid?Co(this.c).ordinal:NaN}get monthShort(){return this.isValid?xi.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?xi.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?xi.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?xi.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Ls(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const u=r-o*n,l=r-a*n,f=Bi(u,o),c=Bi(l,a);return f.hour===c.hour&&f.minute===c.minute&&f.second===c.second&&f.millisecond===c.millisecond?[Dn(this,{ts:u}),Dn(this,{ts:l})]:[this]}get isInLeapYear(){return mi(this.year)}get daysInMonth(){return fs(this.year,this.month)}get daysInYear(){return this.isValid?rr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Jr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Jr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Se.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ne.instance(t),n)}toLocal(){return this.setZone(ae.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=tn(t,ae.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),o=this.toObject();[i]=Qi(o,s,t)}return Dn(this,{ts:i,zone:t})}else return W.invalid(Lr(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Dn(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=ds(t,Tl),{minDaysInFirstWeek:r,startOfWeek:i}=gl(n,this.loc),s=!_(n.weekYear)||!_(n.weekNumber)||!_(n.weekday),o=!_(n.ordinal),a=!_(n.year),u=!_(n.month)||!_(n.day),l=a||u,f=n.weekYear||n.weekNumber;if((l||o)&&f)throw new Xn("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new Xn("Can't mix ordinal dates with month/day");let c;s?c=ml({...cs(this.c,r,i),...n},r,i):_(n.ordinal)?(c={...this.toObject(),...n},_(n.day)&&(c.day=Math.min(fs(c.year,c.month),c.day))):c=pl({...Co(this.c),...n});const[d,p]=Qi(c,this.o,this.zone);return Dn(this,{ts:d,o:p})}plus(t){if(!this.isValid)return this;const n=Z.fromDurationLike(t);return Dn(this,Sl(this,n))}minus(t){if(!this.isValid)return this;const n=Z.fromDurationLike(t).negate();return Dn(this,Sl(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=Z.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Se.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):So}toLocaleString(t=ls,n={}){return this.isValid?Se.create(this.loc.clone(n),t).formatDateTime(this):So}toLocaleParts(t={}){return this.isValid?Se.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Mo(this,o);return a+="T",a+=Fl(this,o,n,r,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Mo(this,t==="extended"):null}toISOWeekDate(){return Li(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Fl(this,o==="extended",n,t,r,s):null}toRFC2822(){return Li(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Li(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Mo(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Li(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():So}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return Z.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=Jg(n).map(Z.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Xy(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(W.now(),t,n)}until(t){return this.isValid?de.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||W.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Nl(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Nl(t.base||W.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(W.isDateTime))throw new Ce("min requires all arguments be DateTimes");return yl(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(W.isDateTime))throw new Ce("max requires all arguments be DateTimes");return yl(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=X.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return mh(o,t,n)}static fromStringExplain(t,n,r={}){return W.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=X.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new hh(s,t)}static fromFormatParser(t,n,r={}){if(_(t)||_(n))throw new Ce("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=X.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new Ce(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:f}=n.explainFromTokens(t);return f?W.invalid(f):Un(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return ls}static get DATE_MED(){return Ed}static get DATE_MED_WITH_WEEKDAY(){return Dg}static get DATE_FULL(){return Dd}static get DATE_HUGE(){return vd}static get TIME_SIMPLE(){return $d}static get TIME_WITH_SECONDS(){return Ad}static get TIME_WITH_SHORT_OFFSET(){return Cd}static get TIME_WITH_LONG_OFFSET(){return kd}static get TIME_24_SIMPLE(){return Sd}static get TIME_24_WITH_SECONDS(){return Fd}static get TIME_24_WITH_SHORT_OFFSET(){return Td}static get TIME_24_WITH_LONG_OFFSET(){return Md}static get DATETIME_SHORT(){return Nd}static get DATETIME_SHORT_WITH_SECONDS(){return xd}static get DATETIME_MED(){return Pd}static get DATETIME_MED_WITH_SECONDS(){return Bd}static get DATETIME_MED_WITH_WEEKDAY(){return vg}static get DATETIME_FULL(){return Ld}static get DATETIME_FULL_WITH_SECONDS(){return Id}static get DATETIME_HUGE(){return Od}static get DATETIME_HUGE_WITH_SECONDS(){return Rd}}function kr(e){if(W.isDateTime(e))return e;if(e&&e.valueOf&&sn(e.valueOf()))return W.fromJSDate(e);if(e&&typeof e=="object")return W.fromObject(e);throw new Ce(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var O;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(O||(O={}));O.Years+"",O.Quarters+"",O.Months+"",O.Weeks+"",O.Days+"",O.Hours+"",O.Minutes+"",O.Seconds+"",O.Milliseconds+"";O.Years+"",O.Quarters+"",O.Months+"",O.Weeks+"",O.Days+"",O.Hours+"",O.Minutes+"",O.Seconds+"",O.Milliseconds+"";const bh=[O.Milliseconds,O.Seconds,O.Minutes,O.Hours,O.Days,O.Weeks,O.Months,O.Quarters,O.Years];O.Milliseconds+"",O.Seconds+"",O.Minutes+"",O.Hours+"",O.Days+"",O.Weeks+"",O.Months+"",O.Quarters+"",O.Years+"";function bw(e){return bh.filter(t=>e[t])}function Aa(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Ew(e){return Aa(Math.max(e-.4,0),{roundToDigits:0})}function Pl(e){return e===0?0:Math.sign(e)}function gt(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=Z.fromObject(e).as(O.Milliseconds);const u=bw(t).reverse(),l=Pl(a);u.forEach((p,w)=>{const b=w===u.length-1;if(s&&o||s)r[p]=1/0;else if(o)r[p]=-1/0;else if(p===O.Milliseconds)r.milliseconds=Aa(a,i);else{const $=Z.fromObject({milliseconds:a}).as(p),v=Math.sign($),S=Math.abs($),I=b?Aa(S,i):Math.floor(i.roundToDigits==null?S:Ew(S)),V=I===0?0:I*v;r[p]=V,a-=Z.fromObject({[p]:V}).as(O.Milliseconds),l!==Pl(a)&&(a=0)}});let f=!1;const c=[],d=bh.toReversed().filter(p=>r[p]?(f=!0,!0):f?(c.push(p),!1):!0);if(d.length<u.length){const p={};d.forEach(b=>p[b]=!0);const w=gt(e,p,i);return c.forEach(b=>w[b]=0),w}return r}var L;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(L||(L={}));L.Year,L.Hour,L.Minute,L.Second,L.Millisecond;L.Quarter,L.Month,L.Week,L.Day;L.Millisecond,L.Second,L.Minute,L.Hour,L.Day,L.Week,L.Month,L.Quarter,L.Year;var ke;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(ke||(ke={}));ke.Sunday+"",ke.Monday+"",ke.Tuesday+"",ke.Wednesday+"",ke.Thursday+"",ke.Friday+"",ke.Saturday+"";ke.Sunday,ke.Monday,ke.Tuesday,ke.Wednesday,ke.Thursday,ke.Friday,ke.Saturday;var Bl;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Bl||(Bl={}));const Ll={min:1,max:12},Il={min:1,max:31},Ol={min:0,max:23},Rl={min:0,max:59},Vl={min:0,max:59},_l={min:0,max:999};function Yr(e){const t=new wd,n=gt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var Eh=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Ut;(function(e){e.Node="node",e.Web="web"})(Ut||(Ut={}));function Dw(){return Eh?Ut.Node:Ut.Web}const Dh=Dw();function vw(e){return Dh===e}function vh(e){return e[Dh]()}let h=class extends Error{name="AssertionError";constructor(t,n){super(Ns(n,t)||"Assertion failed.")}};const Wl={interval:{milliseconds:100},timeout:{seconds:10}},No=Symbol("not set");async function $h(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=$w(t),a=gt(o.timeout,{milliseconds:!0}).milliseconds,u=gt(o.interval,{milliseconds:!0});let l=No,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=No,f=Ve(p)}}const d=Date.now();for(;l===No;)if(await c(),await Yr(u),Date.now()-d>=a){const w=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw xs(f,w)}return l}function A(e,t=!1){return(...n)=>$h(e,n,t)}function $w(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Ah(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Ah(e){return{interval:e?.interval||Wl.interval,timeout:e?.timeout||Wl.timeout}}const Sr={isFalse(e,t){if(e!==!1)throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new h(`'${m(e)}' is not truthy.`,t)}},Ch={assert:Sr,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new h(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:A(Sr.isFalse),isFalsy:A(Sr.isFalsy),isTrue:A(Sr.isTrue),isTruthy:A(Sr.isTruthy)}};function Aw(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n)}function Cw(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n)}function kw(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n)}function Sw(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n)}const Fr={endsWith:Aw,endsWithout:Cw,startsWith:kw,startsWithout:Sw},kh={assert:Fr,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n);return e},endsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n);return e},startsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n);return e},startsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:A(Fr.endsWith),endsWithout:A(Fr.endsWithout),startsWith:A(Fr.startsWith),startsWithout:A(Fr.startsWithout)}};function Fw(e,t,n){const r=xt(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function Mt(e,t){return xt(t).includes(e)}const xo={isEnumValue(e,t,n){Fw(e,t,n)},isNotEnumValue(e,t,n){const r=xt(t);if(r.includes(e))throw new h(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Sh={assert:xo,check:{isEnumValue:Mt,isNotEnumValue(e,t){return!xt(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=xt(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=xt(t);if(r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(xt(t).includes(e))return e},isNotEnumValue(e,t){if(!xt(t).includes(e))return e}},waitUntil:{isEnumValue:A(xo.isEnumValue),isNotEnumValue:A(xo.isNotEnumValue)}},Po={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new h("Entries are equal.",n)}},Fh={assert:Po,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new h("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:A(Po.entriesEqual),notEntriesEqual:A(Po.notEntriesEqual)}};function hs(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Hr(e,t){if(!(e===t||hs(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!hs(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Hr(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${_e(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Ir(e,t){if(e===t||hs(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!hs(n,r)?!1:Object.keys(e).every(s=>Ir(e[s],t[s]))}return!1}const Bo={jsonEquals(e,t,n){try{Hr(e,t)}catch(r){throw new h(_e(r),n)}},notJsonEquals(e,t,n){try{Hr(e,t)}catch{return}throw new h("Values are JSON equal.",n)}},Th={assert:Bo,check:{jsonEquals(e,t){return Ir(e,t)},notJsonEquals(e,t){return!Ir(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Hr(e,t),e}catch(r){throw new h(_e(r),n)}},notJsonEquals(e,t,n){try{Hr(e,t)}catch{return e}throw new h("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Ir(e,t))return e},notJsonEquals(e,t){if(!Ir(e,t))return e}},waitUntil:{jsonEquals:A(Bo.jsonEquals),notJsonEquals:A(Bo.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Ul(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Mh(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Mh.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Nh=typeof WeakMap=="function"?WeakMap:Mh;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function jl(e,t,n){if(!n||lr(e)||lr(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Ii(e,t,n,r){if(!(!n||lr(e)||lr(t))){var i=n.get(e);i?i.set(t,r):(i=new Nh,i.set(t,r),n.set(e,i))}}function ze(e,t,n){if(n&&n.comparator)return ql(e,t,n);var r=xh(e,t);return r!==null?r:ql(e,t,n)}function xh(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:lr(e)||lr(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function ql(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Nh;var r=n&&n.comparator,i=jl(e,t,n.memoize);if(i!==null)return i;var s=jl(t,e,n.memoize);if(s!==null)return s;if(r){var o=r(e,t);if(o===!1||o===!0)return Ii(e,t,n.memoize,o),o;var a=xh(e,t);if(a!==null)return a}var u=Ul(e);if(u!==Ul(t))return Ii(e,t,n.memoize,!1),!1;Ii(e,t,n.memoize,!0);var l=Tw(e,t,u,n);return Ii(e,t,n.memoize,l),l}function Tw(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return ze(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Ph(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return xn(e,t,r);case"RegExp":return Mw(e,t);case"Generator":return Nw(e,t,r);case"DataView":return xn(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return xn(new Uint8Array(e),new Uint8Array(t),r);case"Set":return zl(e,t,r);case"Map":return zl(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Pw(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function Mw(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function zl(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(o,a){r.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),xn(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function xn(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(ze(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Nw(e,t,n){return xn(Ca(e),Ca(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function xw(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Gl(e){if(xw(e))try{return Ca(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ca(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Kl(e){var t=[];for(var n in e)t.push(n);return t}function Zl(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ph(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(ze(e[n[s]],t[n[s]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Pw(e,t,n){var r=Kl(e),i=Kl(t),s=Zl(e),o=Zl(t);if(r=r.concat(s),i=i.concat(o),r.length&&r.length===i.length)return xn(Jl(r).sort(),Jl(i).sort())===!1?!1:Ph(e,t,r,n);var a=Gl(e),u=Gl(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),xn(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function lr(e){return e===null||typeof e!="object"}function Jl(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}const Qt={strictEquals(e,t,n){if(e!==t)throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n)},deepEquals(e,t,n){if(!ze(e,t))throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(ze(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n)}},Bh=Qt.deepEquals,Lh={assert:Qt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return ze(e,t)},notDeepEquals(e,t){return!ze(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n);return e},deepEquals(e,t,n){if(ze(e,t))return e;throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(ze(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(ze(e,t))return e},notDeepEquals(e,t){if(!ze(e,t))return e}},waitUntil:{strictEquals:A(Qt.strictEquals),notStrictEquals:A(Qt.notStrictEquals),looseEquals:A(Qt.looseEquals),notLooseEquals:A(Qt.notLooseEquals),deepEquals:A(Qt.deepEquals),notDeepEquals:A(Qt.notDeepEquals)}};function qe(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function et(e,t){return typeof t=="string"?t.includes(e):qe(t,e)}const kt={hasValue(e,t,n){if(!qe(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n)},lacksValue(e,t,n){if(qe(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n)},isIn(e,t,n){if(!et(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n)},isNotIn(e,t,n){if(et(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is not empty.`,t)}}},Ih={assert:kt,check:{hasValue(e,t){return qe(e,t)},lacksValue(e,t){return!qe(e,t)},hasValues(e,t){return t.every(n=>qe(e,n))},lacksValues(e,t){return t.every(n=>!qe(e,n))},isIn(e,t){return et(e,t)},isNotIn(e,t){return!et(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!qe(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n);return e},lacksValue(e,t,n){if(qe(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n);return e},isIn(e,t,n){if(!et(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n);return e},isNotIn(e,t,n){if(et(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(qe(e,t))return e},lacksValue(e,t){if(!qe(e,t))return e},hasValues(e,t){if(t.every(n=>qe(e,n)))return e},lacksValues(e,t){if(!t.every(n=>qe(e,n)))return e},isIn(e,t){if(et(e,t))return e},isNotIn(e,t){if(!et(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:A(kt.hasValue),lacksValue:A(kt.lacksValue),hasValues:A(kt.hasValues),lacksValues:A(kt.lacksValues),isIn:A(kt.isIn),isNotIn:A(kt.isNotIn),isEmpty:A(kt.isEmpty),isNotEmpty:A(kt.isNotEmpty)}},Lo={isHttpStatus(e,t){if(!Mt(e,N))throw new h(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(Mt(e,N)){if(!et(e,Yi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n)}},Oh={assert:Lo,check:{isHttpStatus(e){return Mt(e,N)},isHttpStatusCategory(e,t){return Mt(e,N)&&et(e,Yi[t])}},assertWrap:{isHttpStatus(e,t){if(!Mt(e,N))throw new h(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(Mt(e,N)){if(!et(e,Yi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(Mt(e,N))return e},isHttpStatusCategory(e,t){if(Mt(e,N)&&et(e,Yi[t]))return e}},waitUntil:{isHttpStatus:A(Lo.isHttpStatus),isHttpStatusCategory:A(Lo.isHttpStatusCategory)}},Io={instanceOf(e,t,n){if(!(e instanceof t))throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n)}},Rh={assert:Io,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:A(Io.instanceOf),notInstanceOf:A(Io.notInstanceOf)}},Bw=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function oe(e,t){return Bw.some(n=>{try{return n(e,t)}catch{return!1}})}const vn={isKeyOf(e,t,n){if(!oe(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n)},isNotKeyOf(e,t,n){if(oe(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n)},hasKey(e,t,n){if(!oe(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(oe(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!oe(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>oe(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n)}},Vh={assert:vn,check:{isKeyOf(e,t){return oe(t,e)},isNotKeyOf(e,t){return!oe(t,e)},hasKey:oe,lacksKey(e,t){return!oe(e,t)},hasKeys(e,t){return t.every(n=>oe(e,n))},lacksKeys(e,t){return t.every(n=>!oe(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!oe(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(oe(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n);return e},hasKey(e,t,n){if(!oe(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(oe(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!oe(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>oe(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(oe(t,e))return e},isNotKeyOf(e,t){if(!oe(t,e))return e},hasKey(e,t){if(oe(e,t))return e},lacksKey(e,t){if(!oe(e,t))return e},hasKeys(e,t){if(t.every(n=>oe(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!oe(e,n)))return e}},waitUntil:{isKeyOf:A(vn.isKeyOf),isNotKeyOf:A(vn.isNotKeyOf),hasKey:A(vn.hasKey),lacksKey:A(vn.lacksKey),hasKeys:A(vn.hasKeys),lacksKeys:A(vn.lacksKeys)}};function Lw(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n)}function Iw(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n)}const Oo={isLengthAtLeast:Lw,isLengthExactly:Iw},_h={assert:Oo,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:te(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:te(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n);return e},isLengthExactly:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)===t)return e}},waitUntil:{isLengthAtLeast:A(Oo.isLengthAtLeast),isLengthExactly:A(Oo.isLengthExactly)}},Ro={isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new h(`'${m(e)}' is not a nullish.`,t)}},Wh={assert:Ro,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new h(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:A(Ro.isDefined),isNullish:A(Ro.isNullish)}},Be={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r)}},Uh={assert:Be,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:A(Be.isInBounds),isOutBounds:A(Be.isOutBounds),isInteger:A(Be.isInteger),isNotInteger:A(Be.isNotInteger),isAbove:A(Be.isAbove),isAtLeast:A(Be.isAtLeast),isBelow:A(Be.isBelow),isAtMost:A(Be.isAtMost),isNaN:A(Be.isNaN),isFinite:A(Be.isFinite),isInfinite:A(Be.isInfinite),isApproximately:A(Be.isApproximately),isNotApproximately:A(Be.isNotApproximately)}};function Ow(e,t,n,r,i){return yi(...Rs(e,t,n,r,i),!1)}function Rs(e,t,n,r,i){const s=Array.isArray(n);return[s?e:Bh,s?t:e,s?n:t,s?r:n,s?i:r]}function yi(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${_e(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${_e(a)}`,i)}}function Rw(e,t,n,r,i){try{const s=yi(...Rs(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Vw(e,t,n,r,i){return yi(...Rs(e,t,n,r,i),!0)}function _w(e,t,n,r,i){try{const s=yi(...Rs(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const Vo=Symbol("not set");async function Ww(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:Bh,u=o?t:e,l=o?n:t,f=o?r:n,c=Ah(o?i:r),d=o?s:i,p=gt(c.timeout,{milliseconds:!0}).milliseconds,w=gt(c.interval,{milliseconds:!0});let b=Vo,$;async function v(){try{b=await yi(a,u,l,f,void 0,!0)}catch(I){b=Vo,$=Ve(I)}}const S=Date.now();for(;b===Vo;)if(await v(),await Yr(w),Date.now()-S>=p)throw xs($,Ns(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return b}const Uw={output:Ow},jh={assert:Uw,check:{output:Rw},assertWrap:{output:Vw},checkWrap:{output:_w},waitUntil:{output:Ww}},Tr={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t)}},qh={assert:Tr,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:A(Tr.isNotPrimitive),isNotPropertyKey:A(Tr.isNotPropertyKey),isPrimitive:A(Tr.isPrimitive),isPropertyKey:A(Tr.isPropertyKey)}},Mr={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t)}},zh={assert:Mr,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:A(Mr.isPromiseLike,!0),isNotPromiseLike:A(Mr.isNotPromiseLike,!0),isPromise:A(Mr.isPromise,!0),isNotPromise:A(Mr.isNotPromise,!0)}},_o={matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n)}},Gh={assert:_o,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:A(_o.matches,!0),mismatches:A(_o.mismatches,!0)}},me={isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t)}},Kh={assert:me,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:A(me.isArray),isBigInt:A(me.isBigInt),isBoolean:A(me.isBoolean),isFunction:A(me.isFunction),isNull:A(me.isNull),isNumber:A(me.isNumber),isObject:A(me.isObject),isString:A(me.isString),isSymbol:A(me.isSymbol),isUndefined:A(me.isUndefined),isNotArray:A(me.isNotArray),isNotBigInt:A(me.isNotBigInt),isNotBoolean:A(me.isNotBoolean),isNotFunction:A(me.isNotFunction),isNotNull:A(me.isNotNull),isNotNumber:A(me.isNotNumber),isNotObject:A(me.isNotObject),isNotString:A(me.isNotString),isNotSymbol:A(me.isNotSymbol),isNotUndefined:A(me.isNotUndefined)}};var Ie;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ie||(Ie={}));function lu(e,t,n){cu(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n)}function Yl(e,t,n){cu(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,n)}function cu(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new h(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=_e(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new h(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new h(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new h(t.notInstance,r);else throw new h(t.noError,r)}function Hl(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=_e(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Vs(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Ve(u)}try{Yl(i,n,r),e===Ie.Assert?o():e===Ie.Check?o(!0):o(i)}catch(u){e===Ie.CheckWrap?o(void 0):e===Ie.Check?o(!1):a(Ve(u))}})}catch(s){i=Ve(s)}try{return Yl(i,n,r),e===Ie.Check?!0:e!==Ie.Assert?i:void 0}catch(s){if(e===Ie.CheckWrap)return;if(e===Ie.Check)return!1;throw s}}function jw(e,t,n){return Vs(Ie.Assert,e,t,n)}function qw(e,t){return Vs(Ie.Check,e,t)}function zw(e,t,n){return Vs(Ie.AssertWrap,e,t,n)}function Gw(e,t,n){return Vs(Ie.CheckWrap,e,t,n)}const Kw=A(lu);function Zw(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${m(s)}'`);return Kw(i,async()=>{try{await s();return}catch(u){return Ve(u)}},a,o)}const Jw={throws:jw,isError:lu},Zh={assert:Jw,check:{throws:qw,isError(e,t){return Hl(e,t)}},assertWrap:{throws:zw,isError(e,t,n){return cu(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Gw,isError(e,t){if(Hl(e,t))return e}},waitUntil:{throws:Zw,isError:A(lu)}},en=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Wo={isUuid(e,t){if(!String(e).match(en))throw new h(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(en))throw new h(`'${String(e)}' is a UUID.`,t)}},Jh={assert:Wo,check:{isUuid(e){return!!String(e).match(en)},isNotUuid(e){return!String(e).match(en)}},assertWrap:{isUuid(e,t){if(!String(e).match(en))throw new h(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(en))throw new h(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(en))return e},isNotUuid(e){if(!String(e).match(en))return e}},waitUntil:{isUuid:A(Wo.isUuid),isNotUuid:A(Wo.isNotUuid)}},Yw={...Ch.assert,...kh.assert,...Fh.assert,...Sh.assert,...Rh.assert,...Th.assert,...Vh.assert,..._h.assert,...Wh.assert,...Uh.assert,...qh.assert,...zh.assert,...Gh.assert,...Kh.assert,...Lh.assert,...Zh.assert,...Jh.assert,...Ih.assert,...Oh.assert,...jh.assert},_s=[Ch,kh,Fh,Sh,Rh,Th,Vh,_h,Wh,Uh,qh,zh,Gh,Kh,Lh,Zh,Jh,Ih,Oh,jh],Hw=Object.assign({},..._s.map(e=>e.check)),k=Object.assign(function(t){return!!t},Hw);function Qw(e,t,n){return ts(e,t,n,new Set)}function ts(e,t,n,r){if(e=Ql(e),t=Ql(t),k.isObject(e)&&k.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!ts(te(e).sort(),te(t).sort(),n,r))return!1;let i=!1;const s=te(e).map(o=>{const a=ts(e[o],t[o],n,r);return k.isPromise(a)&&(i=!0),a});return Xl(i,s)}else if(k.isArray(e)&&k.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=ts(o,t[a],n,r);return k.isPromise(u)&&(i=!0),u});return Xl(i,s)}else return n(e,t)}function Ql(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Xl(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(k.isTrue))}catch(i){r(Ve(i))}}):t.every(k.isTrue)}const Xw=Object.assign({},..._s.map(e=>e.assertWrap));Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n);return t},Xw);function e1(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const t1={tsType:e1},n1={assert:t1,assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},r1={fail:e=>{throw new h("Failure triggered.",e)}},i1={...n1.assert,...Yw,...r1},vr=Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n)},i1),s1=Object.assign({},..._s.map(e=>e.checkWrap));Object.assign(function(t){if(t)return t},s1);const o1=Object.assign({},..._s.map(e=>e.waitUntil));Object.assign(function(t,n){return $h((r,i)=>{if(!r)throw new h("Assertion failed.",i)},[t,n],!1)},o1);function a1(e,t){return k.hasKey(e,"entryType")&&e.entryType===t}function jn(e,t){return e.controlType===t}var Q=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(Q||{});const Yh=Symbol("any-type"),u1={checkbox:!1,color:"",dropdown:"",hidden:Yh,number:0,text:""};function l1(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const s=u1[i.controlType];s!==Yh&&(typeof s!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function c1(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return k.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(r,a),s(a)}catch(a){o(Ve(a))}}):(e.set(r,i),i)}}function f1(e,t,n){if(t in e)return e[t];{const r=n();return k.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Ve(o))}}):(e[t]=r,r)}}function fu(e){return te(e).map(t=>[t,e[t]])}function ka(e){return Object.fromEntries(e)}function du(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function d1({min:e,max:t}){const{min:n,max:r}=yd({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((f,c,d)=>f+c*256**d,0);while(l>=a);return n+l%i}const ec=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function Hh(e=16){let t="";for(let n=0;n<e;n++){const r=d1({min:0,max:ec.length-1});t+=ec[r]}return t}function Qh(e){if(k.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>_e(t).trim()).join(`
`))}var tc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(tc||(tc={}));function h1(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const m1="modulepreload",p1=function(e){return"/element-vir/vira/"+e},nc={},Xh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=p1(u),u in nc)return;nc[u]=!0;const l=u.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":m1,l||(c.as="script"),c.crossOrigin="",c.href=u,a&&c.setAttribute("nonce",a),document.head.appendChild(c),l)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var Ee;(function(e){e.Standard="stdout",e.Error="stderr"})(Ee||(Ee={}));var G;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(G||(G={}));async function g1(){return await vh({async[Ut.Node](){const e=(await Xh(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[G.Bold]:e.bold.open,[G.Debug]:e.blueBright.open,[G.Error]:e.red.open,[G.Faint]:e.gray.open,[G.Info]:e.cyan.open,[G.Mutate]:e.magenta.open,[G.NormalWeight]:"\x1B[22m",[G.Plain]:"",[G.Reset]:e.reset.open,[G.Success]:e.green.open,[G.Warning]:e.yellow.open}},[Ut.Web](){return Promise.resolve({[G.Bold]:"font-weight: bold",[G.Debug]:"color: blue",[G.Error]:"color: red",[G.Faint]:"color: grey",[G.Info]:"color: teal",[G.Mutate]:"color: magenta",[G.NormalWeight]:"",[G.Plain]:"",[G.Reset]:"",[G.Success]:"color: green",[G.Warning]:"color: orange"})}})}const je=await g1(),y1={[G.Bold]:{colors:[je.bold],logType:Ee.Standard},[G.Debug]:{colors:[je.debug],logType:Ee.Standard},[G.Faint]:{colors:[je.faint],logType:Ee.Standard},[G.Info]:{colors:[je.info],logType:Ee.Standard},[G.Mutate]:{colors:[je.mutate,je.bold],logType:Ee.Standard},[G.NormalWeight]:{colors:[je.normalWeight],logType:Ee.Standard},[G.Plain]:{colors:[],logType:Ee.Standard},[G.Reset]:{colors:[je.reset],logType:Ee.Standard},[G.Success]:{colors:[je.success,je.bold],logType:Ee.Standard},[G.Error]:{colors:[je.error,je.bold],logType:Ee.Error},[G.Warning]:{colors:[je.warning],logType:Ee.Error}};function w1(e){return e.replace(/,/g,"")}function b1(e){return typeof e=="number"?e:Number(typeof e=="string"?w1(e):e)}function rc(e){const t=E1(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function E1(e){const t=b1(e);if(!isNaN(t))return t}const D1="px";function e0(e){return v1({value:e,suffix:D1})}function v1({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function $1({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function A1(){return await vh({async[Ut.Node](){const{inspect:e}=await Xh(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[G.Reset].colors.join("")].join(""),css:void 0}}},[Ut.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:du(n.colorConfig[t].colors,o=>$1({value:o,suffix:";"}),k.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:m(o)).join(`
`),n.omitColors?"":n.colorConfig[G.Reset].colors.join("")].join(""),css:r}}}})}const C1=await A1();function ic({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function k1({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function S1(e,t){try{let n=!1;const r=fu(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(n=!0,o):o?[o.key,o.value]:void 0}).filter(k.isTruthy);return n?new Promise(async(i,s)=>{try{const o=du(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},k.isTruthy);i(ka(o))}catch(o){s(Ve(o))}}):ka(r)}catch(n){throw Ve(n)}}function F1(e,t){return S1(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function t0(e,...t){const n={...e};return t.forEach(r=>{r&&fu(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}const T1={colorConfig:y1,omitColors:!1},M1=n0({[Ee.Error](){},[Ee.Standard](){}});function n0(e,t){const n=t0(T1,t);function r(s){e[n.colorConfig[s.colorKey].logType](C1({...s,options:n}))}const i=F1(G,s=>(...o)=>r({args:o,colorKey:s}));return{...i,if(s){return s?i:M1}}}const N1=vw(Ut.Node)?{[Ee.Error]({text:e}){process.stderr.write(e+`
`)},[Ee.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Ee.Error]({text:e,css:t}){console.error(ic({value:e,prefix:"%c"}),t)},[Ee.Standard]({text:e,css:t}){console.log(ic({value:e,prefix:"%c"}),t)}};n0(N1);function Uo(e,t){const{min:n,max:r}=yd(t);return e>r?n:e<n?r:e}function st(e,t){let n=!1;const r=te(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),i[s]=o,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(te(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(Ve(o))}}):r}function r0(e,t){const n=fu(e).filter(([r,i])=>t(r,i,e));return ka(n)}function x1(e,t){return r0(e,n=>!t.includes(n))}function P1(e,t){return r0(e,n=>t.includes(n))}function B1(e){return te(e).map(t=>e[t])}function L1(e,t){return t.capitalizeFirstLetter?I1(e):e}function I1(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const O1={capitalizeFirstLetter:!1};var cr;(function(e){e.Upper="upper",e.Lower="lower"})(cr||(cr={}));function R1(e){return e.toLowerCase()!==e.toUpperCase()}function sc(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(R1(r)){if(t===cr.Upper&&r!==r.toUpperCase()||t===cr.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function V1(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return L1(r,t0(O1,t))}function _1(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=sc(o,cr.Lower,{rejectNoCaseCharacters:!0})||sc(a,cr.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function W1(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function U1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function i0(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function s0(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}function Ws(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function j1(e){return Ws(e).filter(t=>isNaN(Number(t)))}function o0(e){return j1(e).map(n=>e[n])}function B(e){try{return gd.stringify(e)}catch{return String(e)}}const q1=[".",":",";",",","?","!"],z1=new RegExp(`[${q1.join("")}]+$`);function oc(e){return e.replace(z1,"")}function fr(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:B(e):""}function hu(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&oc(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:oc(r)).join(": "):""}function Vt(e){return e instanceof Error?e:new Error(fr(e))}function a0(e,t){const n=Vt(e);return n.message=hu(t,n.message),n}var x;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(x||(x={}));var kn;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(kn||(kn={}));const G1={[kn.Information]:[x.Continue,x.SwitchingProtocols,x.Processing,x.EarlyHints],[kn.Success]:[x.Ok,x.Created,x.Accepted,x.NonAuthoritativeInformation,x.NoContent,x.ResetContent,x.PartialContent,x.MultiStatus,x.AlreadyReported,x.ImUsed],[kn.Redirect]:[x.MultipleChoices,x.MovedPermanently,x.Found,x.SeeOther,x.NotModified,x.UseProxy,x.Unused,x.TemporaryRedirect,x.PermanentRedirect],[kn.ClientError]:[x.BadRequest,x.Unauthorized,x.PaymentRequired,x.Forbidden,x.NotFound,x.MethodNotAllowed,x.NotAcceptable,x.ProxyAuthenticationRequired,x.RequestTimeout,x.Conflict,x.Gone,x.LengthRequired,x.PreconditionFailed,x.PayloadTooLarge,x.UriTooLong,x.UnsupportedMediaType,x.RangeNotSatisfiable,x.ExpectationFailed,x.ImATeapot,x.MisdirectedRequest,x.UnprocessableContent,x.Locked,x.FailedDependency,x.TooEarly,x.UpgradeRequired,x.PreconditionRequired,x.TooManyRequests,x.RequestHeaderFieldsTooLarge,x.UnavailableForLegalReasons],[kn.ServerError]:[x.InternalServerError,x.NotImplemented,x.BadGateway,x.ServiceUnavailable,x.GatewayTimeout,x.HttpVersionNotSupported,x.VariantAlsoNegotiates,x.InsufficientStorage,x.LoopDetected,x.NotExtended,x.NetworkAuthenticationRequired]};class K1{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Vt(r))}})}}function u0(e){const t=new K1,n=gt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var ms;(function(e){e.Node="node",e.Web="web"})(ms||(ms={}));function Z1(){return Eh?ms.Node:ms.Web}Z1();let C=class extends Error{name="AssertionError";constructor(t,n){super(hu(n,t)||"Assertion failed.")}};const y=Symbol("auto guard");function g(){return y}function Us(e,t,n){return t in e&&e[t]!==y?e[t]:n()}function J1(e,t){$t(e,"array",t)}function Y1(e,t){$t(e,"bigint",t)}function H1(e,t){$t(e,"boolean",t)}function Q1(e,t){$t(e,"function",t)}function X1(e,t){$t(e,"number",t)}function e2(e,t){$t(e,"object",t)}function t2(e,t){$t(e,"string",t)}function n2(e,t){$t(e,"symbol",t)}function r2(e,t){$t(e,"undefined",t)}function i2(e,t){$t(e,"null",t)}function s2(e,t){vt(e,"array",t)}function o2(e,t){vt(e,"bigint",t)}function a2(e,t){vt(e,"boolean",t)}function u2(e,t){vt(e,"function",t)}function l0(e,t){if(vt(e,"number",t),isNaN(e))throw new C("Value is NaN.",t)}function l2(e,t){vt(e,"object",t)}function c2(e,t){vt(e,"string",t)}function f2(e,t){vt(e,"symbol",t)}function d2(e,t){vt(e,"undefined",t)}function h2(e,t){vt(e,"null",t)}const m2={isArray:s2,isBigInt:o2,isBoolean:a2,isFunction:u2,isNull:h2,isNumber:l0,isObject:l2,isString:c2,isSymbol:f2,isUndefined:d2,isNotArray:J1,isNotBigInt:Y1,isNotBoolean:H1,isNotFunction:Q1,isNotNull:i2,isNotNumber:X1,isNotObject:e2,isNotString:t2,isNotSymbol:n2,isNotUndefined:r2},c0={assert:m2,check:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:y,isUndefined:y,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},assertWrap:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:g(),isUndefined:y,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},checkWrap:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:y,isUndefined:void 0,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:void 0},waitUntil:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:y,isUndefined:y,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()}};var ps;(function(e){e.String="string",e.Number="number",e.Bigint="bigint",e.Boolean="boolean",e.Symbol="symbol",e.Undefined="undefined",e.Object="object",e.Function="function",e.Array="array",e.Null="null"})(ps||(ps={}));function f0(e){return e===null?ps.Null:Array.isArray(e)?ps.Array:typeof e}function vt(e,t,n){const r=f0(e);if(r!==t)throw new C(`'${B(e)}' is '${r}', not '${t}'.`,n)}function $t(e,t,n){const r=f0(e);if(r===t)throw new C(`'${B(e)}' is '${r}'.`,n)}function p2(e,t){if(e)throw new C(`'${B(e)}' is not truthy.`,t)}function g2(e,t){if(!e)throw new C(`'${B(e)}' is not truthy.`,t)}function y2(e,t){if(e!==!0)throw new C(`'${B(e)}' is not true.`,t)}function w2(e,t){if(e!==!1)throw new C(`'${B(e)}' is not false.`,t)}const b2={isFalse:w2,isFalsy:p2,isTrue:y2,isTruthy:g2},d0={assert:b2,check:{isFalse:y,isFalsy:y,isTrue:y,isTruthy:g()},assertWrap:{isFalse:y,isFalsy:g(),isTrue:y,isTruthy:g()},checkWrap:{isFalse:y,isFalsy:g(),isTrue:y,isTruthy:g()},waitUntil:{isFalse:y,isFalsy:g(),isTrue:y,isTruthy:g()}};function E2(e,t,n){const r=`${B(e)} does not end with ${B(t)}}`;if(typeof e=="string"){if(!e.endsWith(t))throw new C(r,n)}else if(e[e.length-1]!==t)throw new C(r,n)}function D2(e,t,n){const r=`${B(e)} ends with ${B(t)}}`;if(typeof e=="string"){if(e.endsWith(t))throw new C(r,n)}else if(e[e.length-1]===t)throw new C(r,n)}function v2(e,t,n){const r=`${B(e)} does not start with ${B(t)}}`;if(typeof e=="string"){if(!e.startsWith(t))throw new C(r,n)}else if(e[0]!==t)throw new C(r,n)}function $2(e,t,n){const r=`${B(e)} starts with ${B(t)}}`;if(typeof e=="string"){if(e.startsWith(t))throw new C(r,n)}else if(e[0]===t)throw new C(r,n)}const A2={endsWith:E2,endsWithout:D2,startsWith:v2,startsWithout:$2},h0={assert:A2,check:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},assertWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},checkWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},waitUntil:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()}};function js(e,t,n){const r=o0(t);if(!r.includes(e))throw new C(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function C2(e,t,n){try{js(e,t)}catch{return}const r=o0(t);throw new C(`${String(e)} is an enum value in '${r.join(",")}'`,n)}const k2={isEnumValue:js,isNotEnumValue:C2},m0={assert:k2,check:{isEnumValue:g(),isNotEnumValue:g()},assertWrap:{isEnumValue:g(),isNotEnumValue:g()},checkWrap:{isEnumValue:g(),isNotEnumValue:g()},waitUntil:{isEnumValue:g(),isNotEnumValue:g()}};function p0(e,t,n){if(e!==t)throw new C(`

${B(e)}

does not strictly equal

${B(t)}

`,n)}function S2(e,t,n){if(e===t)throw new C(`

${B(e)}

strictly equals

${B(t)}

`,n)}function F2(e,t,n){if(e!=t)throw new C(`

${B(e)}

does not loosely equal

${B(t)}

`,n)}function T2(e,t,n){if(e==t)throw new C(`

${B(e)}

loosely equals

${B(t)}

`,n)}function mu(e,t,n){if(!ze(e,t))throw new C(`

${B(e)}

does not deeply equal

${B(t)}

`,n)}function M2(e,t,n){if(ze(e,t))throw new C(`

${B(e)}

deeply equals

${B(t)}

`,n)}const N2={strictEquals:p0,notStrictEquals:S2,looseEquals:F2,notLooseEquals:T2,deepEquals:mu,notDeepEquals:M2},g0={assert:N2,check:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y},assertWrap:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y},checkWrap:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y},waitUntil:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y}};function y0(e,t,n){if(!e||typeof e!="object")throw new C(`${B(e)} is not an object.`,n);if(!t||typeof t!="object")throw new C(`${B(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];try{p0(s,o)}catch{throw new C(`Entries are not equal at key '${String(i)}'.`,n)}})}function x2(e,t,n){try{y0(e,t)}catch{return}throw new C("Entries are equal.",n)}const P2={entriesEqual:y0,notEntriesEqual:x2},w0={assert:P2,check:{entriesEqual:g(),notEntriesEqual:y},assertWrap:{entriesEqual:g(),notEntriesEqual:y},checkWrap:{entriesEqual:g(),notEntriesEqual:y},waitUntil:{entriesEqual:g(),notEntriesEqual:y}};function ac(e,t){return JSON.stringify(e)===JSON.stringify(t)}function pu(e,t,n){try{L2(e,t)}catch(r){throw new C(fr(r),n)}}function B2(e,t,n){try{pu(e,t)}catch{return}throw new C("Values are JSON equal.",n)}function L2(e,t){const n=ac(e,t);if(!(e===t||n)){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),i=Object.keys(t).sort();if(r.length||i.length){if(!ac(r,i))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{pu(e[o],t[o])}catch(a){throw new Error(`JSON objects are not equal at key '${o}': ${fr(a)}`)}})}}throw new Error("Values are not JSON equal.")}}const I2={jsonEquals:pu,notJsonEquals:B2},b0={assert:I2,check:{jsonEquals:g(),notJsonEquals:y},assertWrap:{jsonEquals:g(),notJsonEquals:y},checkWrap:{jsonEquals:g(),notJsonEquals:y},waitUntil:{jsonEquals:g(),notJsonEquals:y}};function qs(e,t,n){try{if(!Reflect.ownKeys(e).map(i=>e[i]).includes(t))throw new Error("fail")}catch{throw new C(`'${B(e)}' does not have value '${B(t)}'.`,n)}}function E0(e,t,n){try{qs(e,t)}catch{return}throw new C(`'${B(e)}' has value '${B(t)}'.`,n)}function O2(e,t,n){t.forEach(r=>qs(e,r,n))}function R2(e,t,n){t.forEach(r=>E0(e,r,n))}function gu(e,t,n){if(typeof t=="string"){if(!t.includes(e))throw new C(`${B(e)} is not in '${t}'.`,n)}else qs(t,e,n)}function V2(e,t,n){try{gu(e,t)}catch{return}throw new C(`${B(e)} is not in ${B(t)}.`,n)}function D0(e,t){const n=e;if(n){if(typeof n!="string"&&typeof n!="object")throw new TypeError(`Cannot check if '${B(n)}' is empty.`);if(typeof n=="string"&&n||Array.isArray(n)&&n.length||n instanceof Map&&n.size||n instanceof Set&&n.size||n&&typeof n=="object"&&Object.keys(n).length)throw new C(`'${B(e)}' is not empty.`,t)}else return}function _2(e,t){try{D0(e)}catch{return}throw new C(`'${B(e)}' is empty.`,t)}const W2={hasValue:qs,lacksValue:E0,hasValues:O2,lacksValues:R2,isIn:gu,isNotIn:V2,isEmpty:D0,isNotEmpty:_2},v0={assert:W2,check:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},assertWrap:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},checkWrap:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},waitUntil:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()}};function U2(e,t){try{js(e,x)}catch{throw new C(`${B(e)} is not a valid http status.`,t)}}function j2(e,t,n){try{js(e,x),gu(e,G1[t])}catch{throw new C(`${B(e)} is not a '${t}' http status.`,n)}}const q2={isHttpStatus:U2,isHttpStatusCategory:j2},$0={assert:q2,check:{isHttpStatus:y,isHttpStatusCategory:g()},assertWrap:{isHttpStatus:y,isHttpStatusCategory:g()},checkWrap:{isHttpStatus:y,isHttpStatusCategory:g()},waitUntil:{isHttpStatus:y,isHttpStatusCategory:g()}};function z2(e,t,n){if(!(e instanceof t))throw new C(`'${B(e)}' is not an instance of '${t.name}'`,n)}function G2(e,t,n){if(e instanceof t)throw new C(`'${B(e)}' is an instance of '${t.name}'`,n)}const K2={instanceOf:z2,notInstanceOf:G2},A0={assert:K2,check:{instanceOf:g(),notInstanceOf:g()},assertWrap:{instanceOf:g(),notInstanceOf:g()},checkWrap:{instanceOf:g(),notInstanceOf:g()},waitUntil:{instanceOf:g(),notInstanceOf:g()}};function Z2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Us(t,i,()=>C0(s)),r),{})}function C0(e){return(...t)=>J2(e,...t)}function J2(e,t,...n){try{return e(t,...n),!0}catch{return!1}}function k0(e,t,n){try{zs(t,e)}catch{throw new C(`'${String(e)}' is not a key of '${B(t)}'.`,n)}}function Y2(e,t,n){try{k0(e,t)}catch{return}throw new C(`'${String(e)}' is a key of '${B(t)}'.`,n)}const H2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function zs(e,t,n){const r=`'${B(e)}' does not have key '${String(t)}'.`;if(!H2.some(s=>{try{return s(e,t)}catch{return!1}}))throw new C(r,n)}function Q2(e,t,n){try{zs(e,t)}catch{return}throw new C(`'${B(e)}' has key '${String(t)}'.`,n)}const S0=C0(zs);function X2(e,t,n){const r=t.filter(i=>!S0(e,i));if(r.length)throw new C(`'${B(e)}' does not have keys '${r.join(",")}'.`,n)}function eb(e,t,n){const r=t.filter(i=>S0(e,i));if(r.length)throw new C(`'${B(e)}' does not lack keys '${r.join(",")}'.`,n)}const tb={isKeyOf:k0,isNotKeyOf:Y2,hasKey:zs,lacksKey:Q2,hasKeys:X2,lacksKeys:eb},F0={assert:tb,check:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},assertWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},checkWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},waitUntil:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()}};function nb(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Ws(e).length)<t)throw new C(`Length '${e.length}' is not at least '${t}'.`,n)}function rb(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Ws(e).length)!==t)throw new C(`Length '${e.length}' is not exactly '${t}'.`,n)}const ib={isLengthAtLeast:nb,isLengthExactly:rb},T0={assert:ib,check:{isLengthAtLeast:g(),isLengthExactly:g()},assertWrap:{isLengthAtLeast:g(),isLengthExactly:g()},checkWrap:{isLengthAtLeast:g(),isLengthExactly:g()},waitUntil:{isLengthAtLeast:g(),isLengthExactly:g()}};function sb(e,t){if(e==null)throw new C(`'${B(e)}' is not defined.`,t)}function ob(e,t){if(e!=null)throw new C(`'${B(e)}' is not a nullish.`,t)}const ab={isDefined:sb,isNullish:ob},M0={assert:ab,check:{isDefined:g(),isNullish:y},assertWrap:{isDefined:g(),isNullish:y},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:g(),isNullish:y}};function ub(e,t,n){if(e<=t)throw new C(`${e} is not above ${t}`,n)}function lb(e,t,n){if(e<t)throw new C(`${e} is not at least ${t}`,n)}function cb(e,{max:t,min:n},r){if(e<n||t<e)throw new C(`${e} is not within the bounds ${B({min:n,max:t})}`,r)}function fb(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new C(`${e} is not outside the bounds ${B({min:t,max:n})}`,r)}function db(e,t){if(l0(e),!Number.isInteger(e))throw new C(`${e} is not an integer.`,t)}function hb(e,t){if(Number.isInteger(e))throw new C(`${e} is an integer.`,t)}function mb(e,t,n){if(e>=t)throw new C(`${e} is not below ${t}`,n)}function pb(e,t,n){if(e>t)throw new C(`${e} is not at most ${t}`,n)}function gb(e,t){if(!isNaN(e))throw new C(`${e} is not NaN`,t)}function yb(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new C(`${e} is not finite`,t)}function wb(e,t){if(e!==1/0&&e!==-1/0)throw new C(`${e} is not infinite`,t)}function bb(e,t,n,r){if(e<t-n||e>t+n)throw new C(`${e} is not within ±${n} of ${t}`,r)}function Eb(e,t,n,r){if(e>=t-n&&e<=t+n)throw new C(`${e} is within ±${n} of ${t}`,r)}const Db={isInBounds:cb,isOutBounds:fb,isInteger:db,isNotInteger:hb,isAbove:ub,isAtLeast:lb,isBelow:mb,isAtMost:pb,isNaN:gb,isFinite:yb,isInfinite:wb,isApproximately:bb,isNotApproximately:Eb},N0={assert:Db,check:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y},assertWrap:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y},checkWrap:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y},waitUntil:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y}},uc={interval:{milliseconds:100},timeout:{seconds:10}},jo=Symbol("not set");async function x0(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=$b(t),a=gt(o.timeout,{milliseconds:!0}).milliseconds,u=gt(o.interval,{milliseconds:!0});let l=jo,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=jo,f=Vt(p)}}const d=Date.now();for(;l===jo;)if(await c(),await u0(u),Date.now()-d>=a){const w=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw a0(f,w)}return l}function vb(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Us(t,i,()=>er(s)),r),{})}function er(e,t=!1){return(...n)=>x0(e,n,t)}function $b(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:P0(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function P0(e){return{interval:e?.interval||uc.interval,timeout:e?.timeout||uc.timeout}}function Ab(e,t,n,r,i){return wi(...Gs(e,t,n,r,i),!1)}function Gs(e,t,n,r,i){const s=Array.isArray(n);return[s?e:mu,s?t:e,s?n:t,s?r:n,s?i:r]}function wi(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new C(`Output from '${t.name}' did not produce expected output with input: ${B(n)}: ${fr(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new C(`Output from '${t.name}' did not produce expected output with input: ${B(n)}: ${fr(a)}`,i)}}function Cb(e,t,n,r,i){try{const s=wi(...Gs(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function kb(e,t,n,r,i){return wi(...Gs(e,t,n,r,i),!0)}function Sb(e,t,n,r,i){try{const s=wi(...Gs(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const qo=Symbol("not set");async function Fb(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:mu,u=o?t:e,l=o?n:t,f=o?r:n,c=P0(o?i:r),d=o?s:i,p=gt(c.timeout,{milliseconds:!0}).milliseconds,w=gt(c.interval,{milliseconds:!0});let b=qo,$;async function v(){try{b=await wi(a,u,l,f,void 0,!0)}catch(I){b=qo,$=Vt(I)}}const S=Date.now();for(;b===qo;)if(await v(),await u0(w),Date.now()-S>=p)throw a0($,hu(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return b}const Tb={output:Ab},B0={assert:Tb,check:{output:Cb},assertWrap:{output:kb},checkWrap:{output:Sb},waitUntil:{output:Fb}};function L0(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new C(`'${B(e)}' is not a Primitive.`,t)}function Mb(e,t){try{L0(e)}catch{return}throw new C(`'${B(e)}' is a Primitive.`,t)}function I0(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new C(`'${B(e)}' is not a PropertyKey.`,t)}function Nb(e,t){try{I0(e)}catch{return}throw new C(`'${B(e)}' is a PropertyKey.`,t)}const xb={isPropertyKey:I0,isNotPropertyKey:Nb,isPrimitive:L0,isNotPrimitive:Mb},O0={assert:xb,check:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y},assertWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y},checkWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y},waitUntil:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y}};function yu(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new C(`'${B(e)}' is not a PromiseLike.`,t)}function R0(e,t){try{yu(e)}catch{return}throw new C(`'${B(e)}' is a PromiseLike.`,t)}function V0(e,t){if(!(e instanceof Promise))throw new C(`'${B(e)}' is not a Promise.`,t)}function _0(e,t){if(e instanceof Promise)throw new C(`'${B(e)}' is a Promise.`,t)}const Pb={isPromiseLike:yu,isNotPromiseLike:R0,isPromise:V0,isNotPromise:_0},W0={assert:Pb,check:{isPromiseLike:y,isNotPromiseLike:g(),isPromise:y,isNotPromise:g()},assertWrap:{isPromiseLike:g(),isNotPromiseLike:g(),isPromise:g(),isNotPromise:g()},checkWrap:{isNotPromise:g(),isNotPromiseLike:g(),isPromise:y,isPromiseLike:y},waitUntil:{isPromiseLike:er(yu,!0),isNotPromiseLike:er(R0,!0),isPromise:er(V0,!0),isNotPromise:er(_0,!0)}};function Bb(e,t,n){if(!t.test(e))throw new C(`'${e}' does not match ${t}`,n)}function Lb(e,t,n){if(t.test(e))throw new C(`'${e}' matches ${t}`,n)}const Ib={matches:Bb,mismatches:Lb},U0={assert:Ib,check:{matches:y,mismatches:y},assertWrap:{matches:y,mismatches:y},checkWrap:{matches:y,mismatches:y},waitUntil:{matches:y,mismatches:y}};var Oe;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Oe||(Oe={}));function j0(e,t,n){q0(e,{noError:"No error.",notInstance:`'${B(e)}' is not an error instance.`},t,n)}function lc(e,t,n){q0(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${B(e)}' is not an error instance.`},t,n)}function q0(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new C(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=fr(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new C(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new C(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new C(t.notInstance,r);else throw new C(t.noError,r)}function Ks(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Vt(u)}try{lc(i,n,r),e===Oe.Assert?o():e===Oe.Check?o(!0):o(i)}catch(u){e===Oe.CheckWrap?o(void 0):e===Oe.Check?o(!1):a(Vt(u))}})}catch(s){i=Vt(s)}try{return lc(i,n,r),e===Oe.Check?!0:e!==Oe.Assert?i:void 0}catch(s){if(e===Oe.CheckWrap)return;if(e===Oe.Check)return!1;throw s}}function Ob(e,t,n){return Ks(Oe.Assert,e,t,n)}function Rb(e,t){return Ks(Oe.Check,e,t)}function Vb(e,t,n){return Ks(Oe.AssertWrap,e,t,n)}function _b(e,t,n){return Ks(Oe.CheckWrap,e,t,n)}const Wb=er(j0);function Ub(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${B(s)}'`);return Wb(i,async()=>{try{await s();return}catch(u){return Vt(u)}},a,o)}const jb={throws:Ob,isError:j0},z0={assert:jb,check:{throws:Rb,isError:y},assertWrap:{throws:Vb,isError:y},checkWrap:{throws:_b,isError:y},waitUntil:{throws:Ub,isError:y}},G0=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function qb(e,t){if(!String(e).match(G0))throw new C(`'${String(e)}' is not a UUID.`,t)}function zb(e,t){if(String(e).match(G0))throw new C(`'${String(e)}' is a UUID.`,t)}const Gb={isUuid:qb,isNotUuid:zb},K0={assert:Gb,check:{isUuid:y,isNotUuid:g()},assertWrap:{isUuid:y,isNotUuid:g()},checkWrap:{isUuid:y,isNotUuid:g()},waitUntil:{isUuid:y,isNotUuid:g()}},bi={...d0.assert,...h0.assert,...w0.assert,...m0.assert,...A0.assert,...b0.assert,...F0.assert,...T0.assert,...M0.assert,...N0.assert,...O0.assert,...W0.assert,...U0.assert,...c0.assert,...g0.assert,...z0.assert,...K0.assert,...v0.assert,...$0.assert,...B0.assert},Zs=[d0,h0,w0,m0,A0,b0,F0,T0,M0,N0,O0,W0,U0,c0,g0,z0,K0,v0,$0,B0],Kb=Object.assign({},...Zs.map(e=>e.check)),Zb=Object.assign({},...Zs.map(e=>e.assertWrap)),Jb=Object.assign({},...Zs.map(e=>e.checkWrap)),Yb=Object.assign({},...Zs.map(e=>e.waitUntil)),Hb=Z2(bi,Kb),Sa=Object.assign(function(t){return!!t},Hb);function Qb(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Us(t,i,()=>Xb(s)),r),{})}function Xb(e){return(...t)=>(e(...t),t[0])}const eE=Qb(bi,Zb);Object.assign(function(t,n){if(!t)throw new C("Assertion failed.",n);return t},eE);function tE(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const nE={tsType:tE},rE={assert:nE,assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},iE={fail:e=>{throw new C("Failure triggered.",e)}},sE={...rE.assert,...bi,...iE};Object.assign(function(t,n){if(!t)throw new C("Assertion failed.",n)},sE);function oE(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Us(t,i,()=>aE(s)),r),{})}function aE(e){return(...t)=>{try{return e(...t),t[0]}catch{return}}}const uE=oE(bi,Jb);Object.assign(function(t){if(t)return t},uE);const lE=vb(bi,Yb);Object.assign(function(t,n){return x0((r,i)=>{if(!r)throw new C("Assertion failed.",i)},[t,n],!1)},lE);function cE(e,t,n){if(t in e)return e[t];{const r=n();return Sa.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Vt(o))}}):(e[t]=r,r)}}function cc(e){return Ws(e).map(t=>e[t])}class fE{listeners={};getListenerCount(){return cc(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=Sa.isString(t)?t:t.type;function o(){return i[s]?.delete(n)||!1}function a(u,l){r.once&&o(),n(u,l)}return cE(i,s,()=>new Map).set(n,{listener:a,removeListener:o}),o}removeListener(t,n){const r=Sa.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=cc(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class Z0 extends fE{}function dE(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function fc(e,t,n){return dE(globalThis,e,t,n)}function wu(e,t){return gs(e.title),e.parent?[...wu(e.parent),gs(e.parent.title)].concat([]):[]}function gs(e){return U1(e).toLowerCase().replaceAll(/\s/g,"-")}function hE({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const mE={[Fe.ElementExample]:()=>[],[Fe.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...l1(e.controls,e.title)].filter(k.isTruthy),[Fe.Root]:()=>[]},ys="_isBookTreeNode",J0=new Map;function pE(e){return J0.get(e)}function gE(e,t){c1(J0,e,()=>t)}function sr(e,t){return!!(Y0(e)&&e.entry.entryType===t)}function Y0(e){return!!(k.hasKeys(e,[ys,"entry"])&&e[ys])}function yE(){return{[ys]:!0,entry:{entryType:Fe.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function wE({entries:e,debug:t}){const n=pE(e);if(n)return n;const r=yE();e.forEach(o=>bu({tree:r,newEntry:o,debug:t,manuallyAdded:!0}));const i=H0(r),s={tree:r,flattenedNodes:i};return gE(e,s),t&&console.info("element-book tree:",r),s}function bE(e,t,n){if(!t.parent)return e;const r=Fa(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),bu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Fa(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${wu(t).join(" > ")}`);return i}function bu({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=mE[t.entryType](t);t.errors.push(...i);const s=bE(e,t,n),o=gs(t.title),a=s.children[o];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[ys]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:r};s.children[o]=u,a1(t,Fe.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>bu({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Fa(e,t){const n=Y0(e)?e.fullUrlBreadcrumbs.slice(0,-1):wu(e);return n.length?n.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function H0(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>H0(i));return[e,...n].flat()}function Eu(e,t){return Du(e,["",...t],void 0)}function Du(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const s=e.children[i||""],o=s&&Du(s,r,n);return{...e.controls,...o}}function EE(e,t,n){const r={...e};return Du(r,["",...t],n),r}function Q0(e,t){const n=t?.controls||(sr(e,Fe.Page)?st(e.entry.controls,(i,s)=>s.initValue):{});return{children:st(e.children,(i,s)=>Q0(s,t?.children?.[s.urlBreadcrumb])),controls:n}}function wt(e){const t={...e,entryType:Fe.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,entryType:Fe.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(k.isTruthy)};n.add(r.title),t.elementExamples[gs(i.title)]=i}}),t}var ct=(e=>(e.Search="search",e.Book="book",e))(ct||{});function Ta(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const dr={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=globalThis,vu=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$u=Symbol(),dc=new WeakMap;let X0=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==$u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(vu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=dc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&dc.set(n,t))}return t}toString(){return this.cssText}};const he=e=>new X0(typeof e=="string"?e:e+"",void 0,$u),rs=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new X0(n,e,$u)},DE=(e,t)=>{if(vu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=ns.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},hc=vu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return he(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vE,defineProperty:$E,getOwnPropertyDescriptor:AE,getOwnPropertyNames:CE,getOwnPropertySymbols:kE,getPrototypeOf:SE}=Object,Js=globalThis,mc=Js.trustedTypes,FE=mc?mc.emptyScript:"",TE=Js.reactiveElementPolyfillSupport,qr=(e,t)=>e,ws={toAttribute(e,t){switch(t){case Boolean:e=e?FE:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Au=(e,t)=>!vE(e,t),pc={attribute:!0,type:String,converter:ws,reflect:!1,hasChanged:Au};Symbol.metadata??=Symbol("metadata"),Js.litPropertyMetadata??=new WeakMap;let Yn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=pc){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&$E(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=AE(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pc}static _$Ei(){if(this.hasOwnProperty(qr("elementProperties")))return;const t=SE(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qr("properties"))){const n=this.properties,r=[...CE(n),...kE(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(hc(i))}else t!==void 0&&n.push(hc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return DE(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:ws).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ws;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Au)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};Yn.elementStyles=[],Yn.shadowRootOptions={mode:"open"},Yn[qr("elementProperties")]=new Map,Yn[qr("finalized")]=new Map,TE?.({ReactiveElement:Yn}),(Js.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cu=globalThis,bs=Cu.trustedTypes,gc=bs?bs.createPolicy("lit-html",{createHTML:e=>e}):void 0,ku="$lit$",Bt=`lit$${Math.random().toFixed(9).slice(2)}$`,Su="?"+Bt,ME=`<${Su}>`,Bn=document,Qr=()=>Bn.createComment(""),Xr=e=>e===null||typeof e!="object"&&typeof e!="function",Fu=Array.isArray,em=e=>Fu(e)||typeof e?.[Symbol.iterator]=="function",zo=`[ 	
\f\r]`,Nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yc=/-->/g,wc=/>/g,$n=RegExp(`>|${zo}(?:([^\\s"'>=/]+)(${zo}*=${zo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bc=/'/g,Ec=/"/g,tm=/^(?:script|style|textarea|title)$/i,NE=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),xE=NE(1),Je=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),Dc=new WeakMap,Tn=Bn.createTreeWalker(Bn,129);function nm(e,t){if(!Fu(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return gc!==void 0?gc.createHTML(t):t}const rm=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Nr;for(let a=0;a<n;a++){const u=e[a];let l,f,c=-1,d=0;for(;d<u.length&&(o.lastIndex=d,f=o.exec(u),f!==null);)d=o.lastIndex,o===Nr?f[1]==="!--"?o=yc:f[1]!==void 0?o=wc:f[2]!==void 0?(tm.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=$n):f[3]!==void 0&&(o=$n):o===$n?f[0]===">"?(o=i??Nr,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,l=f[1],o=f[3]===void 0?$n:f[3]==='"'?Ec:bc):o===Ec||o===bc?o=$n:o===yc||o===wc?o=Nr:(o=$n,i=void 0);const p=o===$n&&e[a+1].startsWith("/>")?" ":"";s+=o===Nr?u+ME:c>=0?(r.push(l),u.slice(0,c)+ku+u.slice(c)+Bt+p):u+Bt+(c===-2?a:p)}return[nm(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ei{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,f]=rm(t,n);if(this.el=ei.createElement(l,r),Tn.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Tn.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ku)){const d=f[o++],p=i.getAttribute(c).split(Bt),w=/([.?@])?(.*)/.exec(d);u.push({type:1,index:s,name:w[2],strings:p,ctor:w[1]==="."?sm:w[1]==="?"?om:w[1]==="@"?am:Ei}),i.removeAttribute(c)}else c.startsWith(Bt)&&(u.push({type:6,index:s}),i.removeAttribute(c));if(tm.test(i.tagName)){const c=i.textContent.split(Bt),d=c.length-1;if(d>0){i.textContent=bs?bs.emptyScript:"";for(let p=0;p<d;p++)i.append(c[p],Qr()),Tn.nextNode(),u.push({type:2,index:++s});i.append(c[d],Qr())}}}else if(i.nodeType===8)if(i.data===Su)u.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(Bt,c+1))!==-1;)u.push({type:7,index:s}),c+=Bt.length-1}s++}}static createElement(t,n){const r=Bn.createElement("template");return r.innerHTML=t,r}}function Ln(e,t,n=e,r){if(t===Je)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=Xr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Ln(e,i._$AS(e,t.values),i,r)),t}let im=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Bn).importNode(n,!0);Tn.currentNode=i;let s=Tn.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new $r(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new um(s,this,t)),this._$AV.push(l),u=r[++a]}o!==u?.index&&(s=Tn.nextNode(),o++)}return Tn.currentNode=Bn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class $r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ln(this,t,n),Xr(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==Je&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):em(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==le&&Xr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Bn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ei.createElement(nm(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new im(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=Dc.get(t.strings);return n===void 0&&Dc.set(t.strings,n=new ei(t)),n}k(t){Fu(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new $r(this.O(Qr()),this.O(Qr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ei{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=le}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Ln(this,t,n,0),o=!Xr(t)||t!==this._$AH&&t!==Je,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=Ln(this,a[r+u],n,u),l===Je&&(l=this._$AH[u]),o||=!Xr(l)||l!==this._$AH[u],l===le?t=le:t!==le&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sm extends Ei{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}}class om extends Ei{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==le)}}class am extends Ei{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Ln(this,t,n,0)??le)===Je)return;const r=this._$AH,i=t===le&&r!==le||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==le&&(r===le||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class um{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ln(this,t)}}const PE={M:ku,P:Bt,A:Su,C:1,L:rm,R:im,D:em,V:Ln,I:$r,H:Ei,N:om,U:am,B:sm,F:um},BE=Cu.litHtmlPolyfillSupport;BE?.(ei,$r),(Cu.litHtmlVersions??=[]).push("3.2.1");const LE=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new $r(t.insertBefore(Qr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zr=class extends Yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=LE(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};zr._$litElement$=!0,zr.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:zr});const IE=globalThis.litElementPolyfillSupport;IE?.({LitElement:zr});(globalThis.litElementVersions??=[]).push("4.1.1");function mn(e){if(k.isObject(e))return st(e,(n,r)=>{if(!k.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(_1(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?he(n):n.startsWith("-")?rs`-${he(n)}`:rs`--${he(n)}`;return{name:o,value:rs`var(${o}, ${he(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${mn.name}' function.`)}function OE({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const H=mn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),RE={nav:{hover:{background:H["element-book-nav-hover-background-color"],foreground:H["element-book-nav-hover-foreground-color"]},active:{background:H["element-book-nav-active-background-color"],foreground:H["element-book-nav-active-foreground-color"]},selected:{background:H["element-book-nav-selected-background-color"],foreground:H["element-book-nav-selected-foreground-color"]}},accent:{icon:H["element-book-accent-icon-color"]},page:{background:H["element-book-page-background-color"],backgroundFaint1:H["element-book-page-background-faint-level-1-color"],backgroundFaint2:H["element-book-page-background-faint-level-2-color"],foreground:H["element-book-page-foreground-color"],foregroundFaint1:H["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:H["element-book-page-foreground-faint-level-2-color"]}};function VE(e,t){lm(e,t,RE)}function Ma(e){return k.hasKey(e,"_$cssResult$")}function vc(e){return k.hasKeys(e,["name","value","default"])&&k.isString(e.default)&&Ma(e.name)&&Ma(e.value)}function lm(e,t,n){Object.entries(t).forEach(([r,i])=>{const s=n[r];if(!s)throw new Error(`no nestedCssVar at key '${r}'`);if(Ma(i)){if(!vc(s))throw new Error(`got a CSS result at '${r}' but no CSS var`);OE({forCssVar:s,onElement:e,toValue:String(i)})}else{if(vc(s))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);lm(e,i,s)}})}function ce(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let r=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return n===1&&(s=s[0]),r===1?s.map(o=>o[0]):s}function Di(e){return on(e)==="string"}function on(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Es(e,{precision:t,unit:n}){return un(e)?"none":cm(e,t)+(n??"")}function un(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ye(e){return un(e)?0:e}function cm(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const _E={deg:1,grad:.9,rad:180/Math.PI,turn:360};function fm(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(r),f=u;if(l){let c=l[0],d=f.slice(0,-c.length);c==="%"?(f=new Number(d/100),f.type="<percentage>"):(f=new Number(d*_E[c]),f.type="<angle>",f.unit=c)}else n.test(f)?(f=new Number(f),f.type="<number>"):f==="none"&&(f=new Number(NaN),f.none=!0);a.startsWith("/")&&(f=f instanceof Number?f:new Number(f),f.alpha=!0),typeof f=="object"&&f instanceof Number&&(f.raw=u),o.push(f)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function dm(e){return e[e.length-1]}function ti(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function hm(e,t,n){return(n-e)/(t-e)}function Tu(e,t,n){return ti(t[0],t[1],hm(e[0],e[1],n))}function mm(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function pm(e,t,n){return Math.max(Math.min(n,t),e)}function Ys(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Dt(e,t){return Ys(Math.abs(e)**t,e)}function Mu(e,t){return t===0?0:e/t}function gm(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var WE=Object.freeze({__proto__:null,bisectLeft:gm,clamp:pm,copySign:Ys,interpolate:ti,interpolateInv:hm,isNone:un,isString:Di,last:dm,mapRange:Tu,multiplyMatrices:ce,parseCoordGrammar:mm,parseFunction:fm,serializeNumber:Es,skipNone:ye,spow:Dt,toPrecision:cm,type:on,zdiv:Mu});class UE{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const ln=new UE;var Ye={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const xe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Na(e){return Array.isArray(e)?e:xe[e]}function Ds(e,t,n,r={}){if(e=Na(e),t=Na(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(ln.run("chromatic-adaptation-start",i),i.M||(i.W1===xe.D65&&i.W2===xe.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===xe.D50&&i.W2===xe.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ln.run("chromatic-adaptation-end",i),i.M)return ce(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const jE=new Set(["<number>","<percentage>","<angle>"]);function $c(e,t,n,r){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=r[a],f=l?.type,c;if(l.none?c=u.find(w=>jE.has(w)):c=u.find(w=>w==f),!c){let w=o.name||s;throw new TypeError(`${f??l.raw} not allowed for ${w} in ${n}()`)}let d=c.range;f==="<percentage>"&&(d||=[0,1]);let p=o.range||o.refRange;return d&&p&&(r[a]=Tu(d,p,r[a])),c})}function ym(e,{meta:t}={}){let n={str:String(e)?.trim()};if(ln.run("parse-start",n),n.color)return n.color;if(n.parsed=fm(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let f of P.all){let c=f.getFormat("color");if(c&&(o.includes(c.id)||c.ids?.filter(d=>o.includes(d)).length)){const d=Object.keys(f.coords).map((w,b)=>n.parsed.args[b]||0);let p;return c.coordGrammar&&(p=$c(f,c,"color",d)),t&&Object.assign(t,{formatId:"color",types:p}),c.id.startsWith("--")&&!i.startsWith("--")&&Ye.warn(`${f.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${i}).`),i.startsWith("--")&&!c.id.startsWith("--")&&Ye.warn(`${f.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${i}).`),{spaceId:f.id,coords:d,alpha:a}}}let u="",l=i in P.registry?i:s;if(l in P.registry){let f=P.registry[l].formats?.color?.id;f&&(u=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of P.all){let s=i.getFormat(r);if(s&&s.type==="function"){let o=1;(s.lastAlpha||dm(n.parsed.args).alpha)&&(o=n.parsed.args.pop());let a=n.parsed.args,u;return s.coordGrammar&&(u=$c(i,s,r,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let r of P.all)for(let i in r.formats){let s=r.formats[i];if(s.type!=="custom"||s.test&&!s.test(n.str))continue;let o=s.parse(n.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function q(e){if(Array.isArray(e))return e.map(q);if(!e)throw new TypeError("Empty color reference");Di(e)&&(e=ym(e));let t=e.space||e.spaceId;return t instanceof P||(e.space=P.get(t)),e.alpha===void 0&&(e.alpha=1),e}const qE=75e-6;class P{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?P.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Na(r),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:P.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:zE(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ln.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=qE}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,s)=>{let o=r[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ac(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Ac(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=q(t);[t,n]=[a.space,a.coords]}if(t=P.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,s,o;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)s=r[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>o;a--)n=r[a].toBase(n);for(let a=o+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=q(t);[t,n]=[r.space,r.coords]}return t=P.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(P.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof P)return t;if(on(t)==="string"){let i=P.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return P.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=on(t),i,s;if(r==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=P.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=on(s),r==="number"||r==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=P.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function zE(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Ac(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=mm(e.coords);let n=Object.entries(t).map(([r,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=n[o];return a&&u&&(s=Tu(a,u,s)),s=Es(s,{precision:i,unit:l}),s})}return e}var Ae=new P({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class We extends P{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ae),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=ce(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Ds(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Ds(this.base.white,this.white,n),ce(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function vi(e,t){return e=q(e),!t||e.space.equals(t)?e.coords.slice():(t=P.get(t),t.from(e))}function Ge(e,t){e=q(e);let{space:n,index:r}=P.resolveCoord(t,e.space);return vi(e,n)[r]}function Nu(e,t,n){return e=q(e),t=P.get(t),e.coords=t.to(e.space,n),e}Nu.returns="color";function jt(e,t,n){if(e=q(e),arguments.length===2&&on(arguments[1])==="object"){let r=arguments[1];for(let i in r)jt(e,i,r[i])}else{typeof n=="function"&&(n=n(Ge(e,t)));let{space:r,index:i}=P.resolveCoord(t,e.space),s=vi(e,r);s[i]=n,Nu(e,r,s)}return e}jt.returns="color";var xu=new P({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ae,fromBase:e=>Ds(Ae.white,"D50",e),toBase:e=>Ds("D50",Ae.white,e)});const GE=216/24389,Cc=24/116,Oi=24389/27;let Go=xe.D50;var Ke=new P({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Go,base:xu,fromBase(e){let n=e.map((r,i)=>r/Go[i]).map(r=>r>GE?Math.cbrt(r):(Oi*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Cc?Math.pow(t[0],3):(116*t[0]-16)/Oi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Oi,t[2]>Cc?Math.pow(t[2],3):(116*t[2]-16)/Oi].map((r,i)=>r*Go[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function At(e){return(e%360+360)%360}function KE(e,t){if(e==="raw")return t;let[n,r]=t.map(At),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var ni=new P({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ke,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),At(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const kc=25**7,vs=Math.PI,Sc=180/vs,qn=vs/180;function Fc(e){const t=e*e;return t*t*t*e}function wm(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=q([e,t]);let[s,o,a]=Ke.from(e),u=ni.from(Ke,[s,o,a])[1],[l,f,c]=Ke.from(t),d=ni.from(Ke,[l,f,c])[1];u<0&&(u=0),d<0&&(d=0);let p=(u+d)/2,w=Fc(p),b=.5*(1-Math.sqrt(w/(w+kc))),$=(1+b)*o,v=(1+b)*f,S=Math.sqrt($**2+a**2),I=Math.sqrt(v**2+c**2),V=$===0&&a===0?0:Math.atan2(a,$),J=v===0&&c===0?0:Math.atan2(c,v);V<0&&(V+=2*vs),J<0&&(J+=2*vs),V*=Sc,J*=Sc;let Te=l-s,Kt=I-S,Pe=J-V,Ue=V+J,bt=Math.abs(Pe),yn;S*I===0?yn=0:bt<=180?yn=Pe:Pe>180?yn=Pe-360:Pe<-180?yn=Pe+360:Ye.warn("the unthinkable has happened");let Yu=2*Math.sqrt(I*S)*Math.sin(yn*qn/2),Xp=(s+l)/2,Eo=(S+I)/2,Hu=Fc(Eo),Ct;S*I===0?Ct=Ue:bt<=180?Ct=Ue/2:Ue<360?Ct=(Ue+360)/2:Ct=(Ue-360)/2;let Qu=(Xp-50)**2,eg=1+.015*Qu/Math.sqrt(20+Qu),Xu=1+.045*Eo,Cr=1;Cr-=.17*Math.cos((Ct-30)*qn),Cr+=.24*Math.cos(2*Ct*qn),Cr+=.32*Math.cos((3*Ct+6)*qn),Cr-=.2*Math.cos((4*Ct-63)*qn);let el=1+.015*Eo*Cr,tg=30*Math.exp(-1*((Ct-275)/25)**2),ng=2*Math.sqrt(Hu/(Hu+kc)),rg=-1*Math.sin(2*tg*qn)*ng,Fi=(Te/(n*eg))**2;return Fi+=(Kt/(r*Xu))**2,Fi+=(Yu/(i*el))**2,Fi+=rg*(Kt/(r*Xu))*(Yu/(i*el)),Math.sqrt(Fi)}const ZE=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],JE=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],YE=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],HE=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var hr=new P({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ae,fromBase(e){let n=ce(ZE,e).map(r=>Math.cbrt(r));return ce(YE,n)},toBase(e){let n=ce(HE,e).map(r=>r**3);return ce(JE,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function xa(e,t){[e,t]=q([e,t]);let[n,r,i]=hr.from(e),[s,o,a]=hr.from(t),u=n-s,l=r-o,f=i-a;return Math.sqrt(u**2+l**2+f**2)}const QE=75e-6;function Pn(e,t,{epsilon:n=QE}={}){e=q(e),t||(t=e.space),t=P.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function mr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function bm(e,t,n="lab"){n=P.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function XE(e,t){return bm(e,t,"lab")}const eD=Math.PI,Tc=eD/180;function tD(e,t,{l:n=2,c:r=1}={}){[e,t]=q([e,t]);let[i,s,o]=Ke.from(e),[,a,u]=ni.from(Ke,[i,s,o]),[l,f,c]=Ke.from(t),d=ni.from(Ke,[l,f,c])[1];a<0&&(a=0),d<0&&(d=0);let p=i-l,w=a-d,b=s-f,$=o-c,v=b**2+$**2-w**2,S=.511;i>=16&&(S=.040975*i/(1+.01765*i));let I=.0638*a/(1+.0131*a)+.638,V;Number.isNaN(u)&&(u=0),u>=164&&u<=345?V=.56+Math.abs(.2*Math.cos((u+168)*Tc)):V=.36+Math.abs(.4*Math.cos((u+35)*Tc));let J=Math.pow(a,4),Te=Math.sqrt(J/(J+1900)),Kt=I*(Te*V+1-Te),Pe=(p/(n*S))**2;return Pe+=(w/(r*I))**2,Pe+=v/Kt**2,Math.sqrt(Pe)}const Mc=203;var Pu=new P({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ae,fromBase(e){return e.map(t=>Math.max(t*Mc,0))},toBase(e){return e.map(t=>Math.max(t/Mc,0))}});const Ri=1.15,Vi=.66,Nc=2610/2**14,nD=2**14/2610,xc=3424/2**12,Pc=2413/2**7,Bc=2392/2**7,rD=1.7*2523/2**5,Lc=2**5/(1.7*2523),_i=-.56,Ko=16295499532821565e-27,iD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],sD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],oD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],aD=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Em=new P({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Pu,fromBase(e){let[t,n,r]=e,i=Ri*t-(Ri-1)*r,s=Vi*n-(Vi-1)*t,a=ce(iD,[i,s,r]).map(function(d){let p=xc+Pc*(d/1e4)**Nc,w=1+Bc*(d/1e4)**Nc;return(p/w)**rD}),[u,l,f]=ce(oD,a);return[(1+_i)*u/(1+_i*u)-Ko,l,f]},toBase(e){let[t,n,r]=e,i=(t+Ko)/(1+_i-_i*(t+Ko)),o=ce(aD,[i,n,r]).map(function(d){let p=xc-d**Lc,w=Bc*d**Lc-Pc;return 1e4*(p/w)**nD}),[a,u,l]=ce(sD,o),f=(a+(Ri-1)*l)/Ri,c=(u+(Vi-1)*f)/Vi;return[f,c,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Pa=new P({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Em,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),At(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function uD(e,t){[e,t]=q([e,t]);let[n,r,i]=Pa.from(e),[s,o,a]=Pa.from(t),u=n-s,l=r-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let f=i-a,c=2*Math.sqrt(r*o)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+l**2+c**2)}const Dm=3424/4096,vm=2413/128,$m=2392/128,Ic=2610/16384,lD=2523/32,cD=16384/2610,Oc=32/2523,fD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],dD=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],mD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Ba=new P({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Pu,fromBase(e){let t=ce(fD,e);return pD(t)},toBase(e){let t=gD(e);return ce(mD,t)}});function pD(e){let t=e.map(function(n){let r=Dm+vm*(n/1e4)**Ic,i=1+$m*(n/1e4)**Ic;return(r/i)**lD});return ce(dD,t)}function gD(e){return ce(hD,e).map(function(r){let i=Math.max(r**Oc-Dm,0),s=vm-$m*r**Oc;return 1e4*(i/s)**cD})}function yD(e,t){[e,t]=q([e,t]);let[n,r,i]=Ba.from(e),[s,o,a]=Ba.from(t);return 720*Math.sqrt((n-s)**2+.25*(r-o)**2+(i-a)**2)}const wD=xe.D65,Am=.42,Rc=1/Am,Zo=2*Math.PI,Cm=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],bD=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],ED=[[460,451,288],[460,-891,-261],[460,-220,-6300]],DD={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Sn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},vD=180/Math.PI,Vc=Math.PI/180;function km(e,t){return e.map(r=>{const i=Dt(t*Math.abs(r)*.01,Am);return 400*Ys(i,r)/(i+27.13)})}function $D(e,t){const n=100/t*27.13**Rc;return e.map(r=>{const i=Math.abs(r);return Ys(n*Dt(i/(400-i),Rc),r)})}function AD(e){let t=At(e);t<=Sn.h[0]&&(t+=360);const n=gm(Sn.h,t)-1,[r,i]=Sn.h.slice(n,n+2),[s,o]=Sn.e.slice(n,n+2),a=Sn.H[n],u=(t-r)/s;return a+100*u/(u+(i-t)/o)}function CD(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=Sn.h.slice(n,n+2),[s,o]=Sn.e.slice(n,n+2);return At((t*(o*r-s*i)-100*r*o)/(t*(o-s)-100*o))}function Sm(e,t,n,r,i){const s={};s.discounting=i,s.refWhite=e,s.surround=r;const o=e.map(b=>b*100);s.la=t,s.yb=n;const a=o[1],u=ce(Cm,o);r=DD[s.surround];const l=r[0];s.c=r[1],s.nc=r[2];const c=(1/(5*s.la+1))**4;s.fl=c*s.la+.1*(1-c)*(1-c)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(b=>ti(1,a/b,d)),s.dRgbInv=s.dRgb.map(b=>1/b);const p=u.map((b,$)=>b*s.dRgb[$]),w=km(p,s.fl);return s.aW=s.nbb*(2*w[0]+w[1]+.05*w[2]),s}const _c=Sm(wD,64/Math.PI*.2,20,"average",!1);function La(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=At(e.h)*Vc:n=CD(e.H)*Vc;const r=Math.cos(n),i=Math.sin(n);let s=0;e.J!==void 0?s=Dt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=Dt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*Dt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,c=l/t.nbb,d=23*(c+.305)*Mu(a,23*f+a*(11*r+108*i)),p=d*r,w=d*i,b=$D(ce(ED,[c,p,w]).map($=>$*1/1403),t.fl);return ce(bD,b.map(($,v)=>$*t.dRgbInv[v])).map($=>$/100)}function Fm(e,t){const n=e.map(I=>I*100),r=km(ce(Cm,n).map((I,V)=>I*t.dRgb[V]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,s=(r[0]+r[1]-2*r[2])/9,o=(Math.atan2(s,i)%Zo+Zo)%Zo,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Mu(a*Math.sqrt(i**2+s**2),r[0]+r[1]+1.05*r[2]+.305),l=Dt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*r[0]+r[1]+.05*r[2]),c=Dt(f/t.aW,.5*t.c*t.z),d=100*Dt(c,2),p=4/t.c*c*(t.aW+4)*t.flRoot,w=l*c,b=w*t.flRoot,$=At(o*vD),v=AD($),S=50*Dt(t.c*l/(t.aW+4),1/2);return{J:d,C:w,h:$,s:S,Q:p,M:b,H:v}}var kD=new P({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ae,fromBase(e){const t=Fm(e,_c);return[t.J,t.M,t.h]},toBase(e){return La({J:e[0],M:e[1],h:e[2]},_c)}});const SD=xe.D65,FD=216/24389,Tm=24389/27;function TD(e){return 116*(e>FD?Math.cbrt(e):(Tm*e+16)/116)-16}function Ia(e){return e>8?Math.pow((e+16)/116,3):e/Tm}function MD(e,t){let[n,r,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=Ia(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let f=0,c=1/0;for(;f<=l;){s=La({J:o,C:r,h:n},t);const d=Math.abs(s[1]-a);if(d<c){if(d<=u)return s;c=d}o=o-(s[1]-a)*o/(2*s[1]),f+=1}return La({J:o,C:r,h:n},t)}function ND(e,t){const n=TD(e[1]);if(n===0)return[0,0,0];const r=Fm(e,Bu);return[At(r.h),r.C,n]}const Bu=Sm(SD,200/Math.PI*Ia(50),Ia(50)*100,"average",!1);var ri=new P({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Ae,fromBase(e){return ND(e)},toBase(e){return MD(e,Bu)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const xD=Math.PI/180,Wc=[1,.007,.0228];function Uc(e){e[1]<0&&(e=ri.fromBase(ri.toBase(e)));const t=Math.log(Math.max(1+Wc[2]*e[1]*Bu.flRoot,1))/Wc[2],n=e[0]*xD,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function PD(e,t){[e,t]=q([e,t]);let[n,r,i]=Uc(ri.from(e)),[s,o,a]=Uc(ri.from(t));return Math.sqrt((n-s)**2+(r-o)**2+(i-a)**2)}var pr={deltaE76:XE,deltaECMC:tD,deltaE2000:wm,deltaEJz:uD,deltaEITP:yD,deltaEOK:xa,deltaEHCT:PD};function BD(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const jc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function cn(e,{method:t=Ye.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=q(e),Di(arguments[1])?n=arguments[1]:n||(n=e.space),n=P.get(n),Pn(e,n,{epsilon:0}))return e;let o;if(t==="css")o=LD(e,{space:n});else{if(t!=="clip"&&!Pn(e,n)){Object.prototype.hasOwnProperty.call(jc,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:s}=jc[t]);let a=wm;if(r!==""){for(let l in pr)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=pr[l];break}}let u=cn(ue(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(s).length===3){let S=P.resolveCoord(s.channel),I=Ge(ue(e,S.space),S.id);if(un(I)&&(I=0),I>=s.max)return ue({space:"xyz-d65",coords:xe.D65},e.space);if(I<=s.min)return ue({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=P.resolveCoord(t),f=l.space,c=l.id,d=ue(e,f);d.coords.forEach((S,I)=>{un(S)&&(d.coords[I]=0)});let w=(l.range||l.refRange)[0],b=BD(i),$=w,v=Ge(d,c);for(;v-$>b;){let S=mr(d);S=cn(S,{space:n,method:"clip"}),a(d,S)-i<b?$=Ge(d,c):v=Ge(d,c),jt(d,c,($+v)/2)}o=ue(d,n)}else o=u}else o=ue(e,n);if(t==="clip"||!Pn(o,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[f,c]=a[l];return f!==void 0&&(u=Math.max(f,u)),c!==void 0&&(u=Math.min(u,c)),u})}}return n!==e.space&&(o=ue(o,e.space)),e.coords=o.coords,e}cn.returns="color";const qc={WHITE:{space:hr,coords:[1,0,0]},BLACK:{space:hr,coords:[0,0,0]}};function LD(e,{space:t}={}){e=q(e),t||(t=e.space),t=P.get(t);const i=P.get("oklch");if(t.isUnbounded)return ue(e,t);const s=ue(e,i);let o=s.coords[0];if(o>=1){const w=ue(qc.WHITE,t);return w.alpha=e.alpha,ue(w,t)}if(o<=0){const w=ue(qc.BLACK,t);return w.alpha=e.alpha,ue(w,t)}if(Pn(s,t,{epsilon:0}))return ue(s,t);function a(w){const b=ue(w,t),$=Object.values(t.coords);return b.coords=b.coords.map((v,S)=>{if("range"in $[S]){const[I,V]=$[S].range;return pm(I,v,V)}return v}),b}let u=0,l=s.coords[1],f=!0,c=mr(s),d=a(c),p=xa(d,c);if(p<.02)return d;for(;l-u>1e-4;){const w=(u+l)/2;if(c.coords[1]=w,f&&Pn(c,t,{epsilon:0}))u=w;else if(d=a(c),p=xa(d,c),p<.02){if(.02-p<1e-4)break;f=!1,u=w}else l=w}return d}function ue(e,t,{inGamut:n}={}){e=q(e),t=P.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=cn(i,n===!0?void 0:n)),i}ue.returns="color";function Gr(e,{precision:t=Ye.precision,format:n="default",inGamut:r=!0,...i}={}){let s;e=q(e);let o=n;n=e.space.getFormat(n)??e.space.getFormat("default")??P.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!Pn(e)&&(a=cn(mr(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)s=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>Es(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let f=e.alpha;t!==null&&(f=Es(f,{precision:t}));let c=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${f}`;s=`${u}(${l.join(n.commas?", ":" ")}${c})`}return s}const ID=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],OD=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Hs=new We({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ID,fromXYZ_M:OD});const Wi=1.09929682680944,zc=.018053968510807;var Mm=new We({id:"rec2020",name:"REC.2020",base:Hs,toBase(e){return e.map(function(t){return t<zc*4.5?t/4.5:Math.pow((t+Wi-1)/Wi,1/.45)})},fromBase(e){return e.map(function(t){return t>=zc?Wi*Math.pow(t,.45)-(Wi-1):4.5*t})}});const RD=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],VD=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Nm=new We({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:RD,fromXYZ_M:VD});const _D=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],De=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var xm=new We({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:_D,fromXYZ_M:De}),Gc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Kc=Array(3).fill("<percentage> | <number>[0, 255]"),Zc=Array(3).fill("<number>[0, 255]");var gr=new We({id:"srgb",name:"sRGB",base:xm,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Kc},rgb_number:{name:"rgb",commas:!0,coords:Zc,noAlpha:!0},color:{},rgba:{coords:Kc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Zc},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let r=n&&e.every(s=>s%17===0);return"#"+e.map(s=>r?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Gc.black,t.alpha=0):t.coords=Gc[e],t.coords)return t}}}}),Pm=new We({id:"p3",cssId:"display-p3",name:"P3",base:Nm,fromBase:gr.fromBase,toBase:gr.toBase});Ye.display_space=gr;let WD;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ke,Mm,Pm]){let t=e.getMinCoords(),r=Gr({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){Ye.display_space=e;break}}function UD(e,{space:t=Ye.display_space,...n}={}){let r=Gr(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!Ye.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(un)||un(e.alpha))&&!(WD??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=mr(e),i.coords=i.coords.map(ye),i.alpha=ye(i.alpha),r=Gr(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=ue(i,t),r=new String(Gr(i,n)),r.color=i}return r}function jD(e,t){return e=q(e),t=q(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function fn(e){return Ge(e,[Ae,"y"])}function Bm(e,t){jt(e,[Ae,"y"],t)}function qD(e){Object.defineProperty(e.prototype,"luminance",{get(){return fn(this)},set(t){Bm(this,t)}})}var zD=Object.freeze({__proto__:null,getLuminance:fn,register:qD,setLuminance:Bm});function GD(e,t){e=q(e),t=q(t);let n=Math.max(fn(e),0),r=Math.max(fn(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const KD=.56,ZD=.57,JD=.62,YD=.65,Jc=.022,HD=1.414,QD=.1,XD=5e-4,ev=1.14,Yc=.027,tv=1.14;function Hc(e){return e>=Jc?e:e+(Jc-e)**HD}function zn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function nv(e,t){t=q(t),e=q(e);let n,r,i,s,o,a;t=ue(t,"srgb"),[s,o,a]=t.coords;let u=zn(s)*.2126729+zn(o)*.7151522+zn(a)*.072175;e=ue(e,"srgb"),[s,o,a]=e.coords;let l=zn(s)*.2126729+zn(o)*.7151522+zn(a)*.072175,f=Hc(u),c=Hc(l),d=c>f;return Math.abs(c-f)<XD?r=0:d?(n=c**KD-f**ZD,r=n*ev):(n=c**YD-f**JD,r=n*tv),Math.abs(r)<QD?i=0:r>0?i=r-Yc:i=r+Yc,i*100}function rv(e,t){e=q(e),t=q(t);let n=Math.max(fn(e),0),r=Math.max(fn(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const iv=5e4;function sv(e,t){e=q(e),t=q(t);let n=Math.max(fn(e),0),r=Math.max(fn(t),0);return r>n&&([n,r]=[r,n]),r===0?iv:(n-r)/r}function ov(e,t){e=q(e),t=q(t);let n=Ge(e,[Ke,"l"]),r=Ge(t,[Ke,"l"]);return Math.abs(n-r)}const av=216/24389,Qc=24/116,Ui=24389/27;let Jo=xe.D65;var Oa=new P({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Jo,base:Ae,fromBase(e){let n=e.map((r,i)=>r/Jo[i]).map(r=>r>av?Math.cbrt(r):(Ui*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Qc?Math.pow(t[0],3):(116*t[0]-16)/Ui,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ui,t[2]>Qc?Math.pow(t[2],3):(116*t[2]-16)/Ui].map((r,i)=>r*Jo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Yo=Math.pow(5,.5)*.5+.5;function uv(e,t){e=q(e),t=q(t);let n=Ge(e,[Oa,"l"]),r=Ge(t,[Oa,"l"]),i=Math.abs(Math.pow(n,Yo)-Math.pow(r,Yo)),s=Math.pow(i,1/Yo)*Math.SQRT2-40;return s<7.5?0:s}var is=Object.freeze({__proto__:null,contrastAPCA:nv,contrastDeltaPhi:uv,contrastLstar:ov,contrastMichelson:rv,contrastWCAG21:GD,contrastWeber:sv});function lv(e,t,n={}){Di(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let s=Object.keys(is).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=q(e),t=q(t);for(let s in is)if("contrast"+r.toLowerCase()===s.toLowerCase())return is[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Qs(e){let[t,n,r]=vi(e,Ae),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Lm(e){let[t,n,r]=vi(e,Ae),i=t+n+r;return[t/i,n/i]}function cv(e){Object.defineProperty(e.prototype,"uv",{get(){return Qs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Lm(this)}})}var fv=Object.freeze({__proto__:null,register:cv,uv:Qs,xy:Lm});function Or(e,t,n={}){Di(n)&&(n={method:n});let{method:r=Ye.deltaE,...i}=n;for(let s in pr)if("deltae"+r.toLowerCase()===s.toLowerCase())return pr[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function dv(e,t=.25){let r=[P.get("oklch","lch"),"l"];return jt(e,r,i=>i*(1+t))}function hv(e,t=.25){let r=[P.get("oklch","lch"),"l"];return jt(e,r,i=>i*(1-t))}var mv=Object.freeze({__proto__:null,darken:hv,lighten:dv});function Im(e,t,n=.5,r={}){return[e,t]=[q(e),q(t)],on(n)==="object"&&([n,r]=[.5,n]),$i(e,t,r)(n)}function Om(e,t,n={}){let r;Lu(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[q(e),q(t)],r=$i(e,t,u));let l=Or(e,t),f=i>0?Math.max(o,Math.ceil(l/i)+1):o,c=[];if(a!==void 0&&(f=Math.min(f,a)),f===1)c=[{p:.5,color:r(.5)}];else{let d=1/(f-1);c=Array.from({length:f},(p,w)=>{let b=w*d;return{p:b,color:r(b)}})}if(i>0){let d=c.reduce((p,w,b)=>{if(b===0)return 0;let $=Or(w.color,c[b-1].color,s);return Math.max(p,$)},0);for(;d>i;){d=0;for(let p=1;p<c.length&&c.length<a;p++){let w=c[p-1],b=c[p],$=(b.p+w.p)/2,v=r($);d=Math.max(d,Or(v,w.color),Or(v,b.color)),c.splice(p,0,{p:$,color:r($)}),p++}}}return c=c.map(d=>d.color),c}function $i(e,t,n={}){if(Lu(e)){let[u,l]=[e,t];return $i(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:s,premultiplied:o}=n;e=q(e),t=q(t),e=mr(e),t=mr(t);let a={colors:[e,t],options:n};if(r?r=P.get(r):r=P.registry[Ye.interpolationSpace]||e.space,i=i?P.get(i):r,e=ue(e,r),t=ue(t,r),e=cn(e),t=cn(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[f,c]=[Ge(e,l),Ge(t,l)];isNaN(f)&&!isNaN(c)?f=c:isNaN(c)&&!isNaN(f)&&(c=f),[f,c]=KE(u,[f,c]),jt(e,l,f),jt(t,l,c)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((d,p)=>{let w=t.coords[p];return ti(d,w,u)}),f=ti(e.alpha,t.alpha,u),c={space:r,coords:l,alpha:f};return o&&(c.coords=c.coords.map(d=>d/f)),i!==r&&(c=ue(c,i)),c},{rangeArgs:a})}function Lu(e){return on(e)==="function"&&!!e.rangeArgs}Ye.interpolationSpace="lab";function pv(e){e.defineFunction("mix",Im,{returns:"color"}),e.defineFunction("range",$i,{returns:"function<color>"}),e.defineFunction("steps",Om,{returns:"array<color>"})}var gv=Object.freeze({__proto__:null,isRange:Lu,mix:Im,range:$i,register:pv,steps:Om}),Rm=new P({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,s]=e,[o,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-r)/l+2;break;case s:o=(r-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(s){let o=(s+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Vm=new P({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Rm,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),yv=new P({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Vm,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let s=1-r,o=s===0?0:1-n/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const wv=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],bv=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var _m=new We({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:wv,fromXYZ_M:bv}),Ev=new We({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:_m,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const Dv=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],vv=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Wm=new We({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:xu,toXYZ_M:Dv,fromXYZ_M:vv});const $v=1/512,Av=16/512;var Cv=new We({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Wm,toBase(e){return e.map(t=>t<Av?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=$v?t**(1/1.8):16*t)}}),kv=new P({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:hr,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),At(i)]},toBase(e){let[t,n,r]=e,i,s;return isNaN(r)?(i=0,s=0):(i=n*Math.cos(r*Math.PI/180),s=n*Math.sin(r*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Um=xe.D65;const Sv=216/24389,Xc=24389/27,[ef,tf]=Qs({space:Ae,coords:Um});var jm=new P({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Um,base:Ae,fromBase(e){let t=[ye(e[0]),ye(e[1]),ye(e[2])],n=t[1],[r,i]=Qs({space:Ae,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let s=n<=Sv?Xc*n:116*Math.cbrt(n)-16;return[s,13*s*(r-ef),13*s*(i-tf)]},toBase(e){let[t,n,r]=e;if(t===0||un(t))return[0,0,0];n=ye(n),r=ye(r);let i=n/(13*t)+ef,s=r/(13*t)+tf,o=t<=8?t/Xc:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Iu=new P({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:jm,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),At(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Fv=216/24389,Tv=24389/27,nf=De[0][0],rf=De[0][1],Ho=De[0][2],sf=De[1][0],of=De[1][1],Qo=De[1][2],af=De[2][0],uf=De[2][1],Xo=De[2][2];function Gn(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function $s(e){const t=Math.pow(e+16,3)/1560896,n=t>Fv?t:e/Tv,r=n*(284517*nf-94839*Ho),i=n*(838422*Ho+769860*rf+731718*nf),s=n*(632260*Ho-126452*rf),o=n*(284517*sf-94839*Qo),a=n*(838422*Qo+769860*of+731718*sf),u=n*(632260*Qo-126452*of),l=n*(284517*af-94839*Xo),f=n*(838422*Xo+769860*uf+731718*af),c=n*(632260*Xo-126452*uf);return{r0s:r/s,r0i:i*e/s,r1s:r/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/c,b0i:f*e/c,b1s:l/(c+126452),b1i:(f-769860)*e/(c+126452)}}function lf(e,t){const n=t/360*Math.PI*2,r=Gn(e.r0s,e.r0i,n),i=Gn(e.r1s,e.r1i,n),s=Gn(e.g0s,e.g0i,n),o=Gn(e.g1s,e.g1i,n),a=Gn(e.b0s,e.b0i,n),u=Gn(e.b1s,e.b1i,n);return Math.min(r,i,s,o,a,u)}var Mv=new P({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Iu,gamutSpace:gr,fromBase(e){let[t,n,r]=[ye(e[0]),ye(e[1]),ye(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=$s(t),o=lf(s,r);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[ye(e[0]),ye(e[1]),ye(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=$s(r);i=lf(s,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});De[0][0];De[0][1];De[0][2];De[1][0];De[1][1];De[1][2];De[2][0];De[2][1];De[2][2];function Kn(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function cf(e){let t=Kn(e.r0s,e.r0i),n=Kn(e.r1s,e.r1i),r=Kn(e.g0s,e.g0i),i=Kn(e.g1s,e.g1i),s=Kn(e.b0s,e.b0i),o=Kn(e.b1s,e.b1i);return Math.min(t,n,r,i,s,o)}var Nv=new P({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Iu,gamutSpace:"self",fromBase(e){let[t,n,r]=[ye(e[0]),ye(e[1]),ye(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=$s(t),o=cf(s);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[ye(e[0]),ye(e[1]),ye(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=$s(r);i=cf(s)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ff=203,df=2610/2**14,xv=2**14/2610,Pv=2523/2**5,hf=2**5/2523,mf=3424/2**12,pf=2413/2**7,gf=2392/2**7;var Bv=new We({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Hs,toBase(e){return e.map(function(t){return(Math.max(t**hf-mf,0)/(pf-gf*t**hf))**xv*1e4/ff})},fromBase(e){return e.map(function(t){let n=Math.max(t*ff/1e4,0),r=mf+pf*n**df,i=1+gf*n**df;return(r/i)**Pv})}});const yf=.17883277,wf=.28466892,bf=.55991073,ea=3.7743;var Lv=new We({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Hs,toBase(e){return e.map(function(t){return t<=.5?t**2/3*ea:(Math.exp((t-bf)/yf)+wf)/12*ea})},fromBase(e){return e.map(function(t){return t/=ea,t<=1/12?Math.sqrt(3*t):yf*Math.log(12*t-wf)+bf})}});const qm={};ln.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=zm(e.W1,e.W2,e.options.method))});ln.add("chromatic-adaptation-end",e=>{e.M||(e.M=zm(e.W1,e.W2,e.options.method))});function Xs({id:e,toCone_M:t,fromCone_M:n}){qm[e]=arguments[0]}function zm(e,t,n="Bradford"){let r=qm[n],[i,s,o]=ce(r.toCone_M,e),[a,u,l]=ce(r.toCone_M,t),f=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],c=ce(f,r.toCone_M);return ce(r.fromCone_M,c)}Xs({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Xs({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Xs({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Xs({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(xe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});xe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Iv=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Ov=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Gm=new We({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:xe.ACES,toXYZ_M:Iv,fromXYZ_M:Ov});const ji=2**-16,ta=-.35828683,qi=(Math.log2(65504)+9.72)/17.52;var Rv=new We({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[ta,qi],name:"Red"},g:{range:[ta,qi],name:"Green"},b:{range:[ta,qi],name:"Blue"}},referred:"scene",base:Gm,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-ji)*2:n<qi?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ji)+9.72)/17.52:t<ji?(Math.log2(ji+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Ef=Object.freeze({__proto__:null,A98RGB:Ev,A98RGB_Linear:_m,ACEScc:Rv,ACEScg:Gm,CAM16_JMh:kD,HCT:ri,HPLuv:Nv,HSL:Rm,HSLuv:Mv,HSV:Vm,HWB:yv,ICTCP:Ba,JzCzHz:Pa,Jzazbz:Em,LCH:ni,LCHuv:Iu,Lab:Ke,Lab_D65:Oa,Luv:jm,OKLCH:kv,OKLab:hr,P3:Pm,P3_Linear:Nm,ProPhoto:Cv,ProPhoto_Linear:Wm,REC_2020:Mm,REC_2020_Linear:Hs,REC_2100_HLG:Lv,REC_2100_PQ:Bv,XYZ_ABS_D65:Pu,XYZ_D50:xu,XYZ_D65:Ae,sRGB:gr,sRGB_Linear:xm});let re=class Le{constructor(...t){let n;t.length===1&&(n=q(t[0]));let r,i,s;n?(r=n.space||n.spaceId,i=n.coords,s=n.alpha):[r,i,s]=t,Object.defineProperty(this,"space",{value:P.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Le(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=UD(this,...t);return n.color=new Le(n.color),n}static get(t,...n){return t instanceof Le?t:new Le(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:s}=r,o=function(...a){let u=n(...a);if(s==="color")u=Le.get(u);else if(s==="function<color>"){let l=u;u=function(...f){let c=l(...f);return Le.get(c)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Le.get(l)));return u};t in Le||(Le[t]=o),i&&(Le.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let n in t)Le.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Le);else for(let n in t)Le.defineFunction(n,t[n])}};re.defineFunctions({get:Ge,getAll:vi,set:jt,setAll:Nu,to:ue,equals:jD,inGamut:Pn,toGamut:cn,distance:bm,toString:Gr});Object.assign(re,{util:WE,hooks:ln,WHITES:xe,Space:P,spaces:P.registry,parse:ym,defaults:Ye});for(let e of Object.keys(Ef))P.register(Ef[e]);for(let e in P.registry)Ra(e,P.registry[e]);ln.add("colorspace-init-end",e=>{Ra(e.id,e),e.aliases?.forEach(t=>{Ra(t,e)})});function Ra(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(re.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,s)=>{try{return P.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=P.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=P.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}re.extend(pr);re.extend({deltaE:Or});Object.assign(re,{deltaEMethods:pr});re.extend(mv);re.extend({contrast:lv});re.extend(fv);re.extend(zD);re.extend(gv);re.extend(is);const Vv=Symbol("no update");class na extends i0()("observable-value-update"){}class _v extends s0("observable-destroy"){}class Wv{listenTarget=new Z0;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===Vv||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new na({detail:n})),!0)}listen(t,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(na,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(na,n)}destroy(){this.listenTarget.dispatch(new _v),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function Uv(e,t){return Qw(e,t,(n,r)=>k.isFunction(n)&&k.isFunction(r)?!0:k.strictEquals(n,r))}function jv(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const Km="__vir__shape__definition__key__do__not__use__in__actual__objects";function Zm(e){return k.hasKey(e,Km)}var $e;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})($e||($e={}));const Jm="__vir__shape__specifier__key__do__not__use__in__actual__objects";function qv(...e){return Ar(e,$e.And)}function j(...e){return Ar(e,$e.Exact)}function Ym(...e){return Ar(e,$e.IndexedKeys)}function Yt(...e){return Ar(e,$e.Or)}function zv(e){return Ar([e],$e.Unknown)}function tr(e,t){return Ar([e,t],$e.NumericRange)}function eo(e){return qt(e,$e.And)}function to(e){return qt(e,$e.Class)}function no(e){return qt(e,$e.Enum)}function ro(e){return qt(e,$e.Exact)}function io(e){return qt(e,$e.IndexedKeys)}function Ai(e){return qt(e,$e.Or)}function so(e){return qt(e,$e.Unknown)}function Hm(e){return qt(e,$e.NumericRange)}function As(e){return qt(e,$e.Optional)}function qt(e,t){const n=Ci(e);return!!n&&n.specifierType===t}function Ar(e,t){return{[Jm]:!0,specifierType:t,parts:e}}function Mn(e,t,n,r){const i=Ci(t);if(i){if(Hm(i))return k.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(to(i))return e instanceof i.parts[0];if(eo(i))return i.parts.every(s=>Mn(e,s));if(Ai(i))return i.parts.some(s=>Mn(e,s));if(ro(i))return k.isObject(e)?Mn(e,i.parts[0]):e===i.parts[0];if(no(i))return k.hasValue(Object.values(i.parts[0]),e);if(io(i))return k.isObject(e)?Gv(e,i,!!n)&&B1(e).every(s=>Mn(s,i.parts[0].values)):!1;if(so(i))return!0}return r?t===e:jv(e,t)}function Gv(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=Ou(t);return k.isBoolean(s)?s:s.every(o=>te(e).some(a=>Mn(a,o,!1,!0)))}else return!0;else return te(e).every(s=>Mn(s,i))}function Ou(e){const t=e.parts[0].keys,n=Ci(t);if(k.isPropertyKey(t))return[t];if(n){if(to(n))return!1;if(eo(n))return!1;if(Ai(n)){const r=n.parts.map(s=>Ou(Ym({...e.parts[0],keys:s})));let i;return r.forEach(s=>{if(k.isBoolean(s))s&&i==null?i=!0:i=!1;else return}),k.isBoolean(i)?i:r.flat().filter(k.isPropertyKey)}else if(ro(n)){const r=n.parts.filter(k.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(no(n))return Object.values(n.parts[0]);if(io(n))return!1;if(so(n))return!0}}return!1}function Ci(e){if(k.isObject(e)&&k.hasKey(e,Jm)){if(!k.hasKey(e,"parts")||!k.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!k.hasKey(e,"specifierType")||!k.isEnumValue(e.specifierType,$e))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let Df=class extends TypeError{name="DefaultValueConstructionError"};function Va(e){return Hn(e)}function Hn(e){const t=Ci(e);if(t){if(As(t))return Hn(t.parts[0]);if(Hm(t))return t.parts[0];if(to(t)){const n=t.parts[0];try{return new n}catch(r){throw new Df(`Failed to create default value for classShape for class '${n.name}': ${_e(r)}`)}}else{if(Ai(t)||ro(t))return Hn(t.parts[0]);if(eo(t))return t.parts.reduce((n,r)=>Object.assign(n,Hn(r)),{});if(no(t))return Object.values(t.parts[0])[0];if(io(t)){const n=Ou(t);return!t.parts[0].required||k.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Hn(t.parts[0].values)]))}else{if(so(t))return t.parts[0]??{};throw new Df(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Zm(e)?Va(e.shape):e instanceof RegExp?e:k.isArray(e)?e.map(Hn):k.isObject(e)?st(e,(n,r)=>Va(r)):e}function Rn(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return Va(e)},[Km]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}let Qe=class extends TypeError{name="ShapeMismatchError"};function Kv(e,t,n={}){try{return Zv(e,t,n),!0}catch{return!1}}function Zv(e,t,n={},r=""){try{Et({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?xs(i,r):i}}function _a(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Et({subject:e,shape:t,keys:n,options:r}){if(so(t))return!0;if(Zm(t))return Et({subject:e,shape:t.shape,keys:n,options:r});const i=_a(n);if(Ci(e))throw new Qe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(As(t))return Et({keys:n,options:r,shape:t.parts[0],subject:e});if(Mn(e,t,!r.ignoreExtraKeys)){if(k.isFunction(t))return k.isFunction(e);if(to(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(Ai(t)){const f=[];l=t.parts.some(c=>{try{const d=Et({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof Qe)return f.push(d.message),!1;throw d}}),!l&&k.isLengthAtLeast(f,1)&&u.push(f[0])}else if(eo(t))l=t.parts.every(f=>{try{const c=Et({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Qe)return u.push(c.message),!1;throw c}});else if(ro(t)){const f=Et({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(no(t))throw new Qe(`Cannot compare an enum specifier to an object at ${i}`);if(k.isArray(t)&&k.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return Et({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(w){if(w instanceof Qe)return u.push(w.message),!1;throw w}});return a[c]=d,d});else if(io(t)){const f=st(e,(c,d)=>(r.ignoreExtraKeys||Et({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),Et({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=Jv({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new Qe(Ns(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>_a([...n,d])).join(",")}`;throw new Qe(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new Qe(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new Qe(`Subject does not match shape definition at key ${i}`);return!0}function Jv({keys:e,options:t,shape:n,subject:r}){const i=_a(e),s={};if(k.isObject(n)){const o=new Set(te(n)),a=new Set(te(r));o.forEach(u=>{(u in r||As(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Qe(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=Ai(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new Qe(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&As(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];Et({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new Qe(`Shape definition at ${i} was not an object.`);return s}const Yv=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Hv=Yv.reduce((e,t)=>(e[t]=t,e),{});ae.defaultZone.name;const Qm=Hv.UTC,Qv=Rn({hour:tr(Ol.min,Ol.max),minute:tr(Rl.min,Rl.max),second:tr(Vl.min,Vl.max),millisecond:tr(_l.min,_l.max),timezone:Qm}),Xv=Rn({year:2023,month:tr(Ll.min,Ll.max),day:tr(Il.min,Il.max),timezone:Qm});Rn(qv(Xv,Qv));O.Years+"",O.Quarters+"",O.Months+"",O.Weeks+"",O.Days+"",O.Hours+"",O.Minutes+"",O.Seconds+"",O.Milliseconds+"";Rn(Yt({get:j(L.Month),in:Yt(j(L.Year),j(L.Quarter))},{get:j(L.Week),in:Yt(j(L.Year),j(L.Quarter),j(L.Month))},{get:j(L.Day),in:Yt(j(L.Year),j(L.Quarter),j(L.Month),j(L.Week))},{get:j(L.Hour),in:Yt(j(L.Year),j(L.Quarter),j(L.Month),j(L.Week),j(L.Day))},{get:j(L.Minute),in:Yt(j(L.Year),j(L.Quarter),j(L.Month),j(L.Week),j(L.Day),j(L.Hour))},{get:j(L.Second),in:Yt(j(L.Year),j(L.Quarter),j(L.Month),j(L.Week),j(L.Day),j(L.Hour),j(L.Minute))},{get:j(L.Millisecond),in:Yt(j(L.Year),j(L.Quarter),j(L.Month),j(L.Week),j(L.Day),j(L.Hour),j(L.Minute),j(L.Second))}));var vf;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(vf||(vf={}));var Wa;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Wa||(Wa={}));var $f;(function(e){e.Year="year",e.Month="month",e.Day="day"})($f||($f={}));const e5={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};P1(e5,xt(Wa));ae.defaultLocale;const t5=Rn({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:zv()});function ra(e){return Kv(e,t5,{allowExtraKeys:!0})}class Xm extends Wv{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||Uv}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:n5}=PE,Af=()=>document.createComment(""),xr=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(Af(),i),o=r.insertBefore(Af(),i);n=new n5(s,o,e,e.options)}else{const s=n._$AB.nextSibling,o=n._$AM,a=o!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==o._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},An=(e,t,n=e)=>(e._$AI(t,n),e),r5={},i5=(e,t=r5)=>e._$AH=t,s5=e=>e._$AH,ia=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pn=e=>(...t)=>({_$litDirective$:e,values:t});class zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o5={attribute:!0,type:String,converter:ws,reflect:!1,hasChanged:Au},a5=(e=o5,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+r)};function u5(e){return(t,n)=>typeof n=="object"?a5(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=pn(class extends zt{constructor(e){if(super(e),e.type!==oo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Je}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ep=e=>e??le;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ua extends zt{constructor(t){if(super(t),this.it=le,t.type!==oo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===le||t==null)return this._t=void 0,this.it=t;if(t===Je)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Ua.directiveName="unsafeHTML",Ua.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Cf extends Ua{}Cf.directiveName="unsafeSVG",Cf.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l5(e,t,n){return e?t(e):n?.(e)}class tp extends zr{static assign;static assignedInputs;static tagName;static styles;static render;static inputsType;static stateType;static updateStateType;static events;static stateInitStatic;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function c5(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function ss(e){return k.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ru(e){return k.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function np(e){return du(e,t=>{if(ss(t))return t.definition;if(Ru(t))return t.tagInterpolationKey||t},k.isTruthy)}const rp=new WeakMap;function f5(e,t){const n=np(t);return ip(rp,[e,...n]).value?.template}function d5(e,t,n){const r=np(t);return op(rp,[e,...r],n)}function ip(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=sp(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?ip(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function sp(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function op(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=sp(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),op(u,t,n,r+1)}function ap(e,t,n){const r=f5(e,t),i=r??n();if(!r){const a=d5(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=c5(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function up(e,t,n,r){const i=[],s=[],o=[],a=[];return e.forEach((l,f)=>{const c=i.length-1,d=i[c],p=f-1,w=t[p];r&&r(l);let b,$=[];if(typeof d=="string"&&(b=n(d,l,w),b)){i[c]=[d,b.replacement].join(""),o.push(p);const S=b.getExtraValues;$=S?S(w):[],$.length&&S?(i[c]+=" ",$.forEach((I,V)=>{V&&i.push(" ")}),a.push(I=>{const V=I[p],J=S(V);return{index:p,values:J}}),i.push(l)):i[c]+=l}b||i.push(l);const v=e.raw[f];b?(s[c]=[s[c],b.replacement,v].join(""),$.length&&$.forEach(()=>{s.push("")})):s.push(v)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const f=a.flatMap(c=>c(l));return{valueIndexDeletions:o,valueInsertions:f}}}}function h5(...[e,t,n]){if(Ru(n))return{replacement:n.tagName,getExtraValues:void 0}}function m5(e,t){return up(e,t,h5)}function F(e,...t){const n=ap(e,t,()=>m5(e,t));return rs(n.strings,...n.values)}const p5={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function lp(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof tp?!0:lp(n)}function cp(e,t){const n=e.instanceState;te(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&te(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),g5(e)}function g5(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function kf(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class y5 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Vu(){return e=>class extends y5{static type=e;_type=e;constructor(t){super(e,t)}}}function yt(){return Vu()}function w5(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Vu()([e,r].join("-"));return n[r]=i,n},{}):{}}function b5(e){return e?st(e,t=>t):{}}const Cs=Symbol("element-vir-state-setup");function E5(e){return k.isObject(e)?Cs in e&&k.isFunction(e[Cs]):!1}function fp(e,t){t in e||u5()(e,t)}function D5(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Sf(e,t){const n=e;function r(o){t?D5(o,e,e.tagName):fp(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,u){const l=E5(u)?u[Cs]():u;r(a);const f=n[a];function c(p){o[a]=p,n[a]=p}const d=e.observablePropertyListenerMap[a];if(f!==l&&ra(f)&&d&&f.removeListener(d),ra(l))if(d)l.listen(!1,d);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=p,l.listen(!1,p)}else ra(f)&&(e.observablePropertyListenerMap[a]=void 0);return c(l),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function v5({hostClassNames:e,cssVars:t}){return{hostClasses:st(e,(n,r)=>({name:he(r),selector:he(`:host(.${r})`)})),cssVars:t}}function $5({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&te(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function A5({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(o){te(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:n,slotNames:r,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function C5(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function ao(e){const t=e;if(!k.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");if(!k.isString(t.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!t.render||typeof t.render=="string")throw new Error(`Failed to define element '${t.tagName}': render is not a function`);const n={...p5,...t.options},r=w5(t.tagName,t.events),i=b5(t.hostClasses);t.hostClasses&&kf(t.tagName,t.hostClasses),t.cssVars&&kf(t.tagName,t.cssVars);const s=t.cssVars?mn(t.cssVars):{},o=C5(t.slotNames),a=typeof t.styles=="function"?t.styles(v5({hostClassNames:i,cssVars:s})):t.styles||F``,u=t.render;function l(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:c}}const f=class extends tp{static elementOptions=n;static tagName=t.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return A5({element:this,eventsMap:r,cssVars:s,slotNamesMap:o})}static assign=l;static events=r;static render=u;static hostClasses=i;static cssVars=s;static init=t;static slotNames=o;static stateInitStatic=t.stateInitStatic;get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}_initCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;_haveInputsBeenSet=!1;render(){this._internalRenderCount++;try{lp(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${ao.name}' to define ${t.tagName}.`),this._hasRendered=!0;const c=this.createRenderParams();if(!this._initCalled&&t.init&&(this._initCalled=!0,t.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return $5({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=xs(c,`Failed to render ${t.tagName}`);return console.error(d),this._lastRenderError=d,_e(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&t.init){this._initCalled=!0;const c=this.createRenderParams();if(t.init(c)instanceof Promise)throw new TypeError(`init in '${t.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{k.hasKey(c,"destroy")&&k.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanup){const c=this.createRenderParams();if(t.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${t.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){cp(this,c)}observablePropertyListenerMap={};instanceInputs=Sf(this,!1);instanceState=Sf(this,!n.allowPolymorphicState);constructor(){super();const c=t.stateInitStatic||{};te(c).forEach(d=>{fp(this,d),this.instanceState[d]=c[d]}),this.definition=f}};return Object.defineProperties(f,{name:{value:V1(t.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,f),f}function dp(){return e=>{const t=e;if(!k.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return ao({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ff=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},k5=pn(class extends zt{constructor(e){if(super(e),e.type!==oo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],s=[];let o=0;for(const a of e)i[o]=r?r(a,o):o,s[o]=n(a,o),o++;return{values:s,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=s5(e),{values:s,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,f,c=0,d=i.length-1,p=0,w=s.length-1;for(;c<=d&&p<=w;)if(i[c]===null)c++;else if(i[d]===null)d--;else if(a[c]===o[p])u[p]=An(i[c],s[p]),c++,p++;else if(a[d]===o[w])u[w]=An(i[d],s[w]),d--,w--;else if(a[c]===o[w])u[w]=An(i[c],s[w]),xr(e,u[w+1],i[c]),c++,w--;else if(a[d]===o[p])u[p]=An(i[d],s[p]),xr(e,i[c],i[d]),d--,p++;else if(l===void 0&&(l=Ff(o,p,w),f=Ff(a,c,d)),l.has(a[c]))if(l.has(a[d])){const b=f.get(o[p]),$=b!==void 0?i[b]:null;if($===null){const v=xr(e,i[c]);An(v,s[p]),u[p]=v}else u[p]=An($,s[p]),xr(e,i[c],$),i[b]=null;p++}else ia(i[d]),d--;else ia(i[c]),c++;for(;p<=w;){const b=xr(e,u[w+1]);An(b,s[p]),u[p++]=b}for(;c<=d;){const b=i[c++];b!==null&&ia(b)}return this.ut=o,i5(e,u),Je}}),S5=k5;function uo(e,t){return si(e,t),e.element}function F5(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function si(e,t){const n=F5(e),r=n?`: in ${n}`:"";if(e.type!==oo.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function T5(e){const t=pn(class extends zt{element;constructor(n){super(n),this.element=uo(n,e)}render(n){return this.element.setAttribute(e,n),Je}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function ee(e,t){return M5(e,t)}const M5=pn(class extends zt{element;lastListenerMetaData;constructor(e){super(e),this.element=uo(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),Je}}),Tf="onDomCreated",Mf=pn(class extends zt{element;constructor(e){super(e),si(e,Tf)}update(e,[t]){si(e,Tf);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),sa="onResize",hp=pn(class extends zt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),si(e,sa)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${sa} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){si(e,sa),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function Re(e,t,n){return l5(e,()=>t,()=>n)}const{attributeDirective:N5,attributeSelector:EC,attributeName:DC}=T5("data-test-id"),Rr=N5;te({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",render:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function x5(e){return{[Cs]:e}}function mp(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:()=>r=>(t(r),dp()(n(r))),defineElementNoInputs:r=>(t(r),ao(n(r)))}}function P5(e,t){return B5(void 0,e)}const B5=pn(class extends zt{element;constructor(e){super(e),this.element=uo(e,"assign")}render(e,t){return cp(this.element,t),Je}}),L5={};function I5(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=pp(i,s);if(o&&k.isString(n))return{tagName:n,tagInterpolationKey:f1(L5,n,()=>({tagName:n}))}}return n})}function pp(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function O5(...[e,t,n]){const r=ss(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=pp(e,t),o=Ru(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!s||!o)return;if(i&&r.elementOptions&&!r.elementOptions.ignoreUnsetInputs&&!ss(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const l=ss(u)?u.inputs:void 0;return[i&&l?P5(l):void 0].filter(k.isTruthy)}}}function R5(e){}function V5(e){return up(e.strings,e.values,O5,R5)}function E(e,...t){const n=I5(e,t),r=xE(e,...n),i=ap(e,n,()=>V5(r));return{...r,strings:i.strings,values:i.values}}function gp(e){return st(e,(t,n)=>n instanceof re?he(n.toString({format:"hex"})):gp(n))}const _5="dodgerblue";function ja(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function oa({background:e,foreground:t}){return{background:e??new re(ja(t)),foreground:t??new re(ja(e))}}function W5(e){return e==="black"?"white":"black"}const U5={black:{foregroundFaint1:new re("#ccc"),foregroundFaint2:new re("#eee")},white:{foregroundFaint1:new re("#ccc"),foregroundFaint2:new re("#eee")}},j5={black:{backgroundFaint1:new re("#666"),backgroundFaint2:new re("#444")},white:{backgroundFaint1:new re("#ccc"),backgroundFaint2:new re("#fafafa")}};function Nf({themeColor:e=_5,themeStyle:t="light"}={}){const n=new re(e),r=new re(t==="dark"?"black":"white"),i=ja(r),s=new re(i),o={nav:{hover:oa({background:n.clone().set({"hsl.l":93})}),active:oa({background:n.clone().set({"hsl.l":90})}),selected:oa({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...j5[W5(i)],foreground:s,...U5[i]}};return gp(o)}var It=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(It||{});async function qa(e=1){const t=new wd;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function q5(e){return[...e.children,...e.shadowRoot?.children??[]]}function z5(e){return e.matches(":focus")}function ks(e){if(e instanceof ShadowRoot)return ks(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:ks(t)}function yp(e,t){if(t(e))return e;const n=ks(e);if(n)return yp(n,t)}async function G5(e){return K5(e,1)}async function K5(e,t){return new Promise(n=>{new IntersectionObserver((i,s)=>{vr.isLengthAtLeast(i,1),s.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Vr(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}function Z5(e){const t=ks(e);return t&&yp(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}const J5={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},Y5=Object.keys(J5),H5={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Q5=Object.keys(H5),X5={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},e$=Object.keys(X5);Array.from(new Set([...Y5,...e$,...Q5].sort()));function t$({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<r;o++){const u=s.codePointAt(o);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const n$=Hh(32);function os(e){return e.join(n$)}function wp(e){if(!e.length)return[];const t=os(e),n=wp(e.slice(0,-1));return[t,...n]}const r$=["error","errors"];function i$(e){return r$.includes(e)}function s$({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(o=>(r(o),os(o.fullUrlBreadcrumbs))).forEach(o=>n[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&i$(t),o=os(i.fullUrlBreadcrumbs);if(t$({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||n[o]){const u=wp(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[o]=!1}),e.filter(i=>{const s=os(i.fullUrlBreadcrumbs),o=n[s];if(!k.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class _u extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class xf extends _u{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class o$ extends _u{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}const a$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function u$(e,t){return e?a$.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function l$(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var Pf;(function(e){e.Upper="upper",e.Lower="lower"})(Pf||(Pf={}));var Bf;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Bf||(Bf={}));function c$(e){return e?e instanceof Error?e.message:u$(e,"message")?String(e.message):String(e):""}function Lf(e){return!!e&&typeof e=="object"}function f$(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}f$();class d$ extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const h$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function m$(e,t){return e?h$.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function p$(e){return e instanceof Promise}function Ss(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function ne(e,t){return Ss(e)===t}class g$ extends Error{constructor(t){super(`Failed to compare objects using JSON.stringify: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function aa(e,t){return JSON.stringify(e)===JSON.stringify(t)}function za(e,t){try{if(e===t||aa(e,t))return!0;if(Lf(e)&&Lf(t)){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length||r.length)return aa(n,r)?l$(e).every(s=>za(e[s],t[s])):!1}return aa(e,t)}catch(n){throw new g$(c$(n))}}function y$(e,t){return e===t}function w$(e,t){if(!(ne(e,"string")||ne(e,"number")||ne(e,"symbol")))throw new d$(`value is of type '${Ss(e)}' but expected a PropertyKey.`)}function ua(e){try{return w$(e),!0}catch{return!1}}const b$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Kr(e,t){return e?b$.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function dn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function E$(e){return dn(e).map(t=>e[t])}function D$(e){return!!e}var If;(function(e){e.Upper="upper",e.Lower="lower"})(If||(If={}));var Of;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Of||(Of={}));function v$(e){return e?e.map(Wu).filter(D$).join(`
`):""}function Wu(e){return e?e instanceof Error?e.message:Kr(e,"message")?String(e.message):String(e):""}function $$(e){return e instanceof Error?e:new Error(Wu(e))}function A$(e,t){const n=$$(e);return n.message=`${t}: ${n.message}`,n}function C$(e){return dn(e).filter(t=>isNaN(Number(t)))}function k$(e){return C$(e).map(n=>e[n])}function S$(e,t){return k$(t).includes(e)}function bp(e,t){let n=!1;const r=dn(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(dn(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function F$(e,t){try{return T$(e,t),!0}catch{return!1}}function T$(e,t,n){if(e.length<t)throw new Error(`Array is not at least '${t}' in length.`)}function yr(e){return!!e&&typeof e=="object"}function M$(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}M$();function N$(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1,o=i||s;return Ss(e)===Ss(t)&&o}const Ep="__vir__shape__definition__key__do__not__use__in__actual__objects";function Dp(e){return Kr(e,Ep)}var ot;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(ot||(ot={}));const vp="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Uu(...e){return $p(e,ot.IndexedKeys)}function nr(...e){return $p(e,ot.Or)}function lo(e){return Vn(e,ot.And)}function co(e){return Vn(e,ot.Class)}function fo(e){return Vn(e,ot.Enum)}function ho(e){return Vn(e,ot.Exact)}function mo(e){return Vn(e,ot.IndexedKeys)}function ki(e){return Vn(e,ot.Or)}function po(e){return Vn(e,ot.Unknown)}function Vn(e,t){const n=Si(e);return!!n&&n.specifierType===t}function $p(e,t){return{[vp]:!0,specifierType:t,parts:e}}function Nn(e,t,n,r){const i=Si(t);if(i){if(co(i))return e instanceof i.parts[0];if(lo(i))return i.parts.every(s=>Nn(e,s));if(ki(i))return i.parts.some(s=>Nn(e,s));if(ho(i))return yr(e)?Nn(e,i.parts[0]):e===i.parts[0];if(fo(i))return Object.values(i.parts[0]).some(s=>s===e);if(mo(i))return yr(e)?x$(e,i,!!n)&&E$(e).every(s=>Nn(s,i.parts[0].values)):!1;if(po(i))return!0}return r?t===e:N$(e,t)}function x$(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=ju(t);return ne(s,"boolean")?s:s.every(o=>dn(e).some(a=>Nn(a,o,!1,!0)))}else return!0;else return dn(e).every(s=>Nn(s,i))}function ju(e){const t=e.parts[0].keys,n=Si(t);if(ua(t))return[t];if(n){if(co(n))return!1;if(lo(n))return!1;if(ki(n)){const r=n.parts.map(s=>ju(Uu({...e.parts[0],keys:s})));let i;return r.forEach(s=>{ne(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),ne(i,"boolean")?i:r.flat().filter(ua)}else if(ho(n)){const r=n.parts.filter(ua);return r.length!==n.parts.length?!1:r}else{if(fo(n))return Object.values(n.parts[0]);if(mo(n))return!1;if(po(n))return!0}}return!1}function Si(e){if(yr(e)&&Kr(e,vp)){if(!Kr(e,"parts")||!ne(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Kr(e,"specifierType")||!S$(e.specifierType,ot))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Rf extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Ga(e,t=!1){return _r(e)}function _r(e){const t=Si(e);if(t)if(co(t)){const n=t.parts[0];try{return new n}catch(r){throw new Rf(`Failed to create default value for classShape for class '${n.name}': ${Wu(r)}`)}}else{if(ki(t)||ho(t))return _r(t.parts[0]);if(lo(t))return t.parts.reduce((n,r)=>Object.assign(n,_r(r)),{});if(fo(t))return Object.values(t.parts[0])[0];if(mo(t)){const n=ju(t);return!t.parts[0].required||ne(n,"boolean")?{}:Object.fromEntries(n.map(r=>[r,_r(t.parts[0].values)]))}else{if(po(t))return t.parts[0]??{};throw new Rf(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Dp(e)?Ga(e.shape):e instanceof RegExp?e:ne(e,"array")?e.map(_r):yr(e)?bp(e,(n,r)=>Ga(r)):e}function go(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return Ga(e)},[Ep]:!0};return Object.defineProperty(n,"runTimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}class Xe extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function P$(e,t,n={},r=""){try{Tt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?A$(i,r):i}}function Ka(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Tt({subject:e,shape:t,keys:n,options:r}){if(po(t))return!0;if(Dp(t))return Tt({subject:e,shape:t.shape,keys:n,options:r});const i=Ka(n);if(Si(e))throw new Xe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!Nn(e,t,!r.ignoreExtraKeys))throw new Xe(`Subject does not match shape definition at key ${i}`);if(ne(t,"function"))return ne(e,"function");if(co(t))return e instanceof t.parts[0];if(yr(e)){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(ki(t)){const f=[];l=t.parts.some(c=>{try{const d=Tt({subject:e,shape:c,keys:n,options:{...r}});return Object.assign(a,d),!0}catch(d){if(d instanceof Xe)return f.push(d),!1;throw d}}),!l&&F$(f,1)&&u.push(f[0])}else if(lo(t))l=t.parts.every(f=>{try{const c=Tt({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Xe)return u.push(c),!1;throw c}});else if(ho(t)){const f=Tt({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(fo(t))throw new Xe(`Cannot compare an enum specifier to an object at ${i}`);if(ne(t,"array")&&ne(o,"array"))l=o.every((f,c)=>{const d=t.some(p=>{try{return Tt({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(w){if(w instanceof Xe)return u.push(w),!1;throw w}});return a[c]=d,d});else if(mo(t)){const f=bp(e,(c,d)=>(r.ignoreExtraKeys||Tt({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),Tt({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=B$({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new Xe(v$(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>Ka([...n,d])).join(",")}`;throw new Xe(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new Xe(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t;return!0}function B$({keys:e,options:t,shape:n,subject:r}){const i=Ka(e),s={};if(yr(n)){const o=new Set(dn(n)),a=new Set(dn(r));o.forEach(u=>{u in r&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Xe(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=ki(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new Xe(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];Tt({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new Xe(`shape definition at ${i} was not an object.`);return s}go({paths:[""],search:nr(void 0,Uu({keys:"",values:[""],required:!1})),hash:nr(void 0,"")});var Vf;(function(e){e.Upper="upper",e.Lower="lower"})(Vf||(Vf={}));var _f;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(_f||(_f={}));function L$(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}L$();function Ap({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function la({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}var Wf;(function(e){e.Upper="upper",e.Lower="lower"})(Wf||(Wf={}));var Uf;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Uf||(Uf={}));function I$(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}I$();function O$(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function R$(e,t,n){if(t in e)return e[t];{const r=n();return p$(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(o)}}):(e[t]=r,r)}}const V$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function _$(e,t){return e?V$.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Za(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function W$(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function U$(e){return!!e}var jf;(function(e){e.Upper="upper",e.Lower="lower"})(jf||(jf={}));function j$(e,t){return e.split(t)}var qf;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(qf||(qf={}));function q$(e,t){return Za(e).filter(r=>{const i=e[r];return t(r,i,e)}).reduce((r,i)=>(r[i]=e[i],r),{})}function Ja(e,t){let n=!1;const r=Za(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Za(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function z$(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function G$(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}G$();function _t({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function qu({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}const ca="://";function Cp(...e){const t=e.join("/"),[n,r=""]=t.includes(ca)?t.split(ca):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const f=l[u+1];let c=a;const d=f?.startsWith("?"),p=!a.includes("?")&&d,w=f==="?";if(d||p){i=!0;let b=!1;const $=l.slice(u+2).reduce((v,S)=>(S.includes("#")&&(b=!0),b?v.concat(S):[v,S].join("&")),"");c=[a,f,w?qu({value:$,prefix:"&"}):$].join("")}return o.concat(c)},[]);return[n,n?ca:"",s.join("/")].join("")}var oi;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(oi||(oi={}));var ai;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(ai||(ai={}));function zi(e,t){return e.map(n=>{if(n!=null)return or(String(n),t)}).filter(n=>n!=null)}function or(e,t){return t?.encoding===oi.Decode?decodeURIComponent(e):t?.encoding===oi.Encode?encodeURIComponent(e):e}const K$=go(Uu({keys:"",values:[""],required:!0}));function Z$(e,t,n){const r=n?.searchParamStrategy===ai.Clear?{}:Ja(e,(o,a)=>ne(a,"string")?[a]:a),i=Ja(t,(o,a)=>{if(n?.searchParamStrategy===ai.Append){const u=r[o],l=ne(u,"array")?u:[u];if(a){const f=ne(a,"array")?a:[a];return zi([...l,...f],n)}else return zi(l,n)}else return ne(a,"array")?zi(a,n):a?zi([a],n):void 0});return q$({...r,...i},(o,a)=>!!a)}function kp(e,t){return ne(e,"string")&&!e.includes("?")?{}:(ne(e,"string")?e:e instanceof URL?e.search:e.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(s=>{const[o,...a]=j$(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=Sp({options:t,key:o,value:a}),l=R$(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function J$(e){if(e!=null)return ne(e,"array")?[...e]:e===""?[]:[e]}function Y$(e,t){const n=W$(Object.entries(e),([r,i])=>{const s=J$(i);return s?.length?s.map(o=>{const a=Sp({options:t,key:r,value:o});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?_t({value:n.join("&"),prefix:"?"}):""}function Sp({options:e,key:t,value:n}){return{key:or(t,e),value:or(String(n),e)}}function Fp({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",n?n+"@":"",yo({hostname:t,port:i}),zu({hash:e,pathname:r,search:o})].join("")}function Tp({pathname:e}){const t=qu({value:e,prefix:"/"});return t?t.split("/"):[]}function zu({hash:e,pathname:t,search:n}){return[_t({value:t,prefix:"/"}),n?_t({value:n,prefix:"?"}):"",e?_t({value:e,prefix:"#"}):""].join("")}function yo({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Mp({hostname:e,port:t,protocol:n}){return[n,yo({hostname:e,port:t})].filter(U$).join("://")}function Fs(e,t){const n=ne(e,"string")?e:e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?_t({value:or(r,t),prefix:"#"}):"",s=n.replace(/#.*$/,""),o=s.replace(/^[^\?]*(?:\?|$)/,""),a=o?_t({value:or(o,t),prefix:"?"}):"",u=s.replace(/\?.*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),c=f.replace(/@.*/,""),d=f.replace(/^[^@]*@/,""),p=c!==d,[w,...b]=p?c.split(":").reverse():[],$=b.reverse().join("").replace(/[\/:]/g,"")||"",v=w?.replace(/[\/:]/g,"")||"",S=d.replace(/[:\/].*/,""),I=d.replace(/^[^\/:]*(\:|\/|$)/,"$1"),V=qu({value:I.replace(/\/.*$/,""),prefix:":"}),J=or(I.replace(/^[^\/]*(?:\/|$)/,"/"),t),Te=yo({hostname:S,port:V}),Kt=Mp({hostname:S,port:V,protocol:l}),Pe=Fp({hash:i,hostname:S,password:v,pathname:J,port:V,protocol:l,search:a,username:$}),Ue=kp(a),bt=Tp({pathname:J});return{fullPath:zu({hash:i,pathname:J,search:a}),hash:i,host:Te,hostname:S,href:Pe,origin:Kt,password:v,pathname:J,paths:bt,port:V,protocol:l,search:a,searchParams:Ue,username:$}}function H$(e,t,n){const r=ne(e,"string")?e:e instanceof URL?e.toString():"",i=ne(e,"string")||e instanceof URL?t:e,s=ne(e,"string")||e instanceof URL?n:t,o=Fs(r),a=Ja(o,(d,p)=>{if(!_$(i,d))return p;const w=i[d];return ne(w,"number")?String(w):ne(w,"string")?d==="hash"&&w?_t({value:w,prefix:"#"}):d==="pathname"?_t({value:w,prefix:"/"}):w:p});m$(i,"paths")&&i.paths&&(a.pathname=Cp("",...i.paths));const u=ne(i.search,"string")?kp(_t({value:i.search,prefix:"?"})):z$(i.search||{}),l=Z$(a.searchParams,u,{...s,encoding:oi.None}),f=Y$(l,s);return{...a,searchParams:l,search:f,paths:Tp(a),fullPath:zu(a),host:yo(a),origin:Mp(a),href:Fp({...a,search:f})}}const Q$=go({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:K$,hash:"",fullPath:"/",href:"/"});({...Q$.defaultValue});const X$=go({basePath:nr("",void 0),sanitizeRoute:e=>e,maxListenerCount:nr(1,void 0),disableWarnings:nr(void 0,!1),isPaused:nr(!1,void 0)}),eA=0;function Np(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==eA)}const wo="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const tA=globalThis.history.pushState;function zf(...e){const t=tA.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(wo)),t}const nA=globalThis.history.replaceState;function Gf(...e){const t=nA.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(wo)),t}function rA(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===zf)throw new xf("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Gf)throw new xf("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=zf,globalThis.history.replaceState=Gf,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(wo))})}}function fa(e,t){const n=Fs(e),r=la({value:la({value:n.pathname,prefix:Ap({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],s=Object.keys(n.searchParams).length?n.searchParams:void 0,o=n.hash?la({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class iA{constructor(t){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),P$(t,X$),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new Xm({defaultValue:n,equalityCheck:()=>!1}),rA(),this.removeGlobalListener=O$(globalThis,wo,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new o$("Looping route sanitization detected; aborting window URL change listener.");const r=fa(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);za(i,r)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Cp(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(fa(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n=fa(globalThis.location.href,void 0),r={...n,...t},i=this.sanitizeRoute(r),o=this.routeIncludesBasePath(n)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return H$(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Ap({value:o.hash,prefix:"#"}):"#"},{searchParamStrategy:ai.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=Fs(r);return this.params.isPaused||!n.force&&za(Fs(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Np(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new _u(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function sA(e){return new iA({basePath:e,sanitizeRoute(t){return{paths:oA(t.paths),hash:void 0,search:void 0}}})}function oA(e){const t=e[0];if(k.isEnumValue(t,ct)){if(t===ct.Book)return[ct.Book,...e.slice(1)];if(t===ct.Search)return e[1]?[t,e[1]]:[ct.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return dr.paths}const Ts=Vu()("element-book-change-route"),Kf="vira-",{defineElement:aA,defineElementNoInputs:vC}=mp({assertInputs:e=>{if(!e.tagName.startsWith(Kf))throw new Error(`Tag name should start with '${Kf}' but got '${e.tagName}'`)}}),Gt=aA,T=mn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),uA=re;function lA(e){try{if(!e)throw new Error("invalid empty color");return new uA(e)}catch{throw new Error(`Invalid color: ${m(e)}`)}}function we({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Zf(e,t){const n=te(t).map(r=>{const i=t[r],s=lA(i);return`${T[r].name}: ${s.toString()};`}).join(" ");return we({name:e.name,svgTemplate:E`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const xp=we({name:"Check24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),dt=mn({"vira-form-input-radius":"8px"}),bo=F`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,mt=mn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),In=mn({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":F`calc(${dt["vira-form-input-radius"].value} + 4px)`});function Gu({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=he(e0(r+n+t));return F`
        ${he(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${In["vira-focus-outline-color"].value};
            border-radius: ${In["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const rn=mn({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":In["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),cA=F`
    padding: 0;
    margin: 0;
`,nn=F`
    ${cA};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Jf=F`#e2e2e2`,Pp={menuShadow:F`
        filter: drop-shadow(0px 5px 5px ${Jf});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:F`
        filter: drop-shadow(0px -5px 5px ${Jf});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},ui=F`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,R=Gt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>F`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Lt=Gt()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>F`
        :host {
            display: flex;
            ${ui};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${R} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${R} {
            transition: opacity
                ${mt["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${dt["vira-form-input-radius"].value}
                ${dt["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${dt["vira-form-input-radius"].value}
                ${dt["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return E`
            <div class="option">
                <${R.assign({icon:xp})}></${R}>
                <slot>${e.label}</slot>
            </div>
        `}}),Ya="group";function fA(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}function dA(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:rc(t),yCord:rc(n),isGroup:r===Ya}:{type:"1d",isGroup:t===Ya}}function hA(e,t){Object.entries(t).forEach(([n,r])=>{k.isBoolean(r)&&r?e.setAttribute(n,""):k.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const mA=pn(class extends zt{element;lastKey;constructor(e){super(e),this.element=uo(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Je}}),ar={name:"data-nav",js(e){return e===""?`[${ar.name}]`:`[${ar.name}*="${String(e).replace(/"/g,"'")}"]`},css(e){return F`
            ${he(ar.js(e))}
        `}},Qn="nav-activated",Ha={js:{click(e){return`${e}.${Qn}`},selected(e){return`${e}:focus`}},css:{click(e){return F`
                ${he(Ha.js.click(e))}
            `},selected(e){return F`
                ${he(Ha.js.selected(e))}
            `}}},pA={activateKeys:["Space","Return","Enter"]};function gA(){Bp=h1(pA)}let Bp;gA();function Yf(e){return Bp.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}function yA(e,t){const n=fA(e,t);return mA(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===Ya?{}:{tabindex:0},s={[ar.name]:n,...i};vr.instanceOf(r,HTMLElement),hA(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(Qn)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(Qn)},!0),r.addEventListener("blur",()=>{r.classList.remove(Qn)},!0),r.addEventListener("keydown",o=>{o.target===r&&Yf(o)&&r.classList.add(Qn)},!0),r.addEventListener("keyup",o=>{o.target===r&&Yf(o)&&r.classList.remove(Qn)},!0)})}function wA(e,t){return Lp([],e,t)}function Lp(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?Hf(t.children,t,0,e,n):t.children.some((r,i)=>Hf(r,t,i,e,n))}function Hf(e,t,n,r,i){return e.some((s,o)=>{const a=k.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(a,s,{x:o,y:n})?!0:Lp(a,s,i)})}function bA(e){return e.toReversed().find(t=>!t.isGroup)}function li(e){if(!e)return;let t,n,r;wA(e,(o,a,u)=>z5(a.element)?(t=o,n=a,r=u,!0):!1);const i=t?t[0]||e:void 0,s=t?bA(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}function ci(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function EA(e){if(!e)return{success:!1,reason:"no nav tree"};const t=li(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(ci(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}):{success:!1,reason:"failed to find first child to enter into"}}function DA(e){if(!e)return{success:!1,reason:"no nav tree"};const t=li(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(ci(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element})}function Ip(e){const t=[];return q5(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=Ip(n),i=n.hasAttribute(ar.name)?dA(n.getAttribute(ar.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}function vA(e){const t=Ip(e);return Op(t)}function Op(e){if(!k.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?Op(n.children):void 0;if(n.navValue.isGroup&&!r){const o=new Error("group nav has no children");throw console.error(o,n),o}const i=$A(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(vr.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,n),o}}),t}function $A(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function Qf(e,t){return e>t}function Xf(e,t){return e<t}var tt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(tt||(tt={}));function Ku(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?Ku(t):t}function ed(e,t,n){if(!e)return{success:!1,reason:"no nav tree"};const r=li(e);if(!r){const a=Ku(e);return a?(ci(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Rp(r.parent,t,r.node),o=n?!0:!s;return i&&o?(ci(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function Rp(e,t,n){if(t===tt.Down||t===tt.Up){const i=t===tt.Down?Xf:Qf,s=t===tt.Down?1:-1,o=e.type==="1d"?0:Uo(n.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?Uo(n.coords.x+s,{min:0,max:e.children.length-1}):a&&n.coords.x>=a.length?a.length-1:n.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],f=e.type==="1d"?i(u.x,n.coords.x):i(u.y,n.coords.y);return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:f}}else{const i=t===tt.Right?Xf:Qf,s=t===tt.Right?1:-1,o=e.type==="1d"?e.children:e.children[n.coords.y];vr.isDefined(o,`No current row found at y index: '${n.coords.y}'`);const a={x:Uo(n.coords.x+s,{min:0,max:o.length-1}),y:n.coords.y},u=i(a.x,n.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:u}}}function AA(e,t,n,r){const i=k.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=Rp(i,n,s),u=o?.isGroup?Ku(o):o,l=r?!0:!a;return u?l?(ci(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class Vp{rootElement;constructor(t){this.rootElement=t}getCurrentlyFocused(){return li(this.buildNavTree())}buildNavTree(){return vA(this.rootElement)}navigate({direction:t,allowWrapping:n}){return ed(this.buildNavTree(),t,n)}enterInto(){return EA(this.buildNavTree())}exitOutOf(){return DA(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=li(r);return!i||!r?ed(r,n,t):AA(r,i,n,t)}}const CA={option:"dropdown-option"},Gi=Gt()({tagName:"vira-dropdown-options",events:{selectionChange:yt()},styles:F`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${dt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${rn["vira-form-background-color"].value};
            border: 1px solid ${rn["vira-form-border-color"].value};
            color: ${rn["vira-form-foreground-color"].value};
            ${Pp.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Ha.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${rn["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Lt} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${bo};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||E`
                    <${Lt.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${Lt}>
                `;return E`
                <div
                    class="dropdown-item ${ii({disabled:!!i.disabled})}"
                    ${Rr(CA.option)}
                    title=${ep(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?le:yA()}
                    ${ee("mousedown",o=>{o.stopPropagation()})}
                    ${ee("mouseup",o=>{o.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return E`
            <slot>${r}</slot>
        `}}),kA=we({name:"Chat24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_p=we({name:"ChevronUp24Icon",svgTemplate:E`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${T["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Wp=we({name:"CloseX24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),SA=we({name:"Commit24Icon",svgTemplate:E`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),FA=we({name:"Document24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24">
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Up=we({name:"Element16Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ot=we({name:"Element24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jp=we({name:"EyeClosed24Icon",svgTemplate:E`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${T["vira-icon-fill-color"].value}
            stroke=${T["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),qp=we({name:"EyeOpen24Icon",svgTemplate:E`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${T["vira-icon-fill-color"].value}
            stroke=${T["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),zp=we({name:"Loader24Icon",svgTemplate:E`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),TA=F`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${mt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,fi=we({name:"LoaderAnimated24Icon",svgTemplate:E`
        <style>
            ${TA}
        </style>
        ${zp.svgTemplate}
    `}),Zu=we({name:"Options24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),MA=we({name:"Pencil24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),NA=we({name:"Shield24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24">
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),xA=we({name:"Star24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke-miterlimit="2">
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ms=we({name:"StatusFailure24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),PA=we({name:"StatusInProgress24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),BA=we({name:"StatusSuccess24Icon",svgTemplate:E`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Qa={Chat24Icon:kA,Check24Icon:xp,ChevronUp24Icon:_p,CloseX24Icon:Wp,Commit24Icon:SA,Document24Icon:FA,Element16Icon:Up,Element24Icon:Ot,EyeClosed24Icon:jp,EyeOpen24Icon:qp,Loader24Icon:zp,LoaderAnimated24Icon:fi,Options24Icon:Zu,Pencil24Icon:MA,Shield24Icon:NA,Star24Icon:xA,StatusFailure24Icon:Ms,StatusInProgress24Icon:PA,StatusSuccess24Icon:BA};class LA extends Xm{constructor(){super({defaultValue:document.hidden,equalityCheck:y$}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=n=>this.updateVisibility(n);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=OA.includes(t.type),r=IA.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const IA=["blur","focusout","pagehide"],OA=["focus","focusin","pageshow"],RA=new LA;function VA(e,t){return RA.listen(e,t)}const td={top:0,left:0,right:0,bottom:0};class Gp extends s0("hide-pop-up"){}class Kp extends i0()("nav-select"){}class _A{listenTarget=new Z0;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new Vp(t);this.cleanupCallbacks=[VA(!1,r=>{r||this.removePopUp()}),fc("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),fc("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:tt.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:tt.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:tt.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:tt.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new Kp({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Gp)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=Z5(t);vr.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},f=st(td,p=>s[p]),c=st(td,p=>{const w=l[p],b=f[p];return Math.abs(w-b)}),d=c.top>c.bottom+r.verticalDiffThreshold&&c.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!d,positions:{container:l,root:f,diff:c}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function WA({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}function UA(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${W1(n)}`)}function nd(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}function rd({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}const Ki={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Wr=Gt()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>F`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${In["vira-focus-outline-color"].name}: ${rn["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${nn};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${dt["vira-form-input-radius"].value};
            transition: border-radius
                ${mt["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Gu({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${mt["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${rn["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${ui};
            border-radius: inherit;
            background-color: ${rn["vira-form-background-color"].value};
            color: ${rn["vira-form-foreground-color"].value};
        }

        .open-upwards ${Gi} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Pp.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${bo}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:yt(),openChange:yt()},stateInitStatic:{showPopUpResult:void 0,popUpManager:x5(()=>new _A),navController:void 0},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen(Gp,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");vr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(Kp,o=>{const a=o.detail.x,u=r.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||rd({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(nd(u.id,r.selected,!!r.isMultiSelect)))}),t({navController:new Vp(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){UA(r.options);function o(w){rd(w,{dispatch:b=>{e(new t.openChange(b))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=WA(r),u=r.icon?E`
                  <${R.assign({icon:r.icon})}
                      ${Rr(Ki.icon)}
                  ></${R}>
              `:"",l=n.showPopUpResult?n.showPopUpResult.popDown?F`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:F`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function f(){o({emitEvent:!0,open:!n.showPopUpResult})}const c=!a.length,d=r.selectionPrefix&&!c?E`
                      <span class="selected-label-prefix" ${Rr(Ki.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",p=c?r.placeholder||"":a.map(w=>w.label).join(", ");return E`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${ii({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${Rr(Ki.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${ee("keydown",w=>{!n.showPopUpResult&&w.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${ee("click",w=>{w.detail===0&&f()})}
                ${ee("mousedown",w=>{w.button===0&&f()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${ii({"using-placeholder":c})}"
                        title=${ep(c?p:void 0)}
                    >
                        ${d} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${R.assign({icon:_p})}
                            class="trigger-icon"
                        ></${R}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${Re(!!n.showPopUpResult,E`
                            <${Gi.assign({options:r.options,selectedOptions:a})}
                                ${ee(Gi.events.selectionChange,w=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(nd(w.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${Rr(Ki.options)}
                            ></${Gi}>
                        `)}
                </div>
            </button>
        `}});var Zp=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Zp||{});const be=Gt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>F`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ui};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${In["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${bo};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${nn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${dt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${mt["vira-interaction-animation-duration"].value},
                background-color
                    ${mt["vira-interaction-animation-duration"].value},
                border-color ${mt["vira-interaction-animation-duration"].value};
        }

        ${Gu({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${R} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?E`
                  <${R.assign({icon:e.icon})}></${R}>
              `:"",n=e.text?E`
                  <span class="text-template">${e.text}</span>
              `:"";return E`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),St=Gt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>F`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${nn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${mt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:yt()},stateInitStatic:{contentHeight:0},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?F`
                  height: ${e.contentHeight}px;
              `:F`
                  height: 0;
              `;return E`
            <button
                class="header-wrapper"
                ${ee("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${hp(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Ht=Gt()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:yt(),imageError:yt()},styles:({hostClasses:e})=>F`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?E`
                  <slot class="status-wrapper" name=${s.error}>
                      <${R.assign({icon:Ms})} class="error"></${R}>
                  </slot>
              `:t.loadedUrls[o]?void 0:E`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${R.assign({icon:fi})}></${R}>
                    </slot>
                `;return E`
            ${Re(!!a,a)}
            <img
                class=${ii({hidden:!!a})}
                ${ee("load",async()=>{e._debugLoadDelay&&await Yr(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${ee("error",async u=>{e._debugLoadDelay&&await Yr(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function Xa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Xa({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Jp({value:e,allowed:t,blocked:n}){const r=t?Xa({input:e,matcher:t}):!0,i=n?Xa({input:e,matcher:n}):!1;return r&&!i}function Yp(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(Jp({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function jA({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new TypeError("Text input event was not an InputEvent.");const s=Vr(n,HTMLInputElement),o=n.data,a=t;let u=s.value;if(o)if(o.length===1)Jp({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs})||(u=a,r(o));else{const{filtered:l,blocked:f}=Yp({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u=l,r(f)}s.value!==u&&(s.value=u),a!==u&&i(u)}var Hp=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Hp||{});const fe=Gt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":In["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:yt(),inputBlocked:yt()},styles:({hostClasses:e,cssVars:t})=>F`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${In["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${bo};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${nn};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${ui};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${nn};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${dt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${mt["vira-interaction-animation-duration"].value};
            }

            label {
                ${nn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${dt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Gu({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${nn};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ui};
            }

            button {
                ${nn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${mt["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Yp({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?E`
                  <${R.assign({icon:e.icon})} class="left-side-icon"></${R}>
              `:"",a=e.fitText?F`
                  width: ${n.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type!=="text";return E`
            <label>
                ${o}
                ${Re(!!e.fitText,E`
                        <span
                            class="size-span"
                            ${hp(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${qA(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${ee("input",l=>{jA({inputs:e,filteredValue:s,event:l,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${e.placeholder}
                />
                ${Re(!!(e.showClearButton&&e.value),E`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${ee("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${R.assign({icon:Wp})}></${R}>
                        </button>
                    `)}
                ${Re(e.type==="password",E`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${ee("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${R.assign({icon:n.showPassword?qp:jp})}></${R}>
                        </button>
                    `)}
                ${Re(!!e.suffix,E`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function qA(e,t){return e==="password"&&t?"text":e||"text"}const Zi=Gt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>F`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(n){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo(0,0)}if(e.link?.newTab)return E`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return E`
                <a href=${n} rel="noopener noreferrer" ${ee("click",t)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:at,defineElementNoInputs:$C}=mp(),nt=at()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>F`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return E`
            <a
                href=${n}
                ${ee("click",r=>{(!e.router||Np(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Ts(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function zA(e,t){return e.entry.entryType===Fe.Root?!1:e.entry.entryType===Fe.Page||k.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:k.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Nt=at()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>F`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${H["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${H["element-book-nav-hover-background-color"].value};
            color: ${H["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${H["element-book-nav-active-background-color"].value};
            color: ${H["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${nt.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${H["element-book-nav-selected-background-color"].value};
            color: ${H["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${R} {
            display: inline-flex;
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!zA(n,e.selectedPath))return;const r=F`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return E`
                <li style=${r}>
                    <${nt.assign({router:e.router,route:{paths:[ct.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${ii({"title-row":!0,selected:e.selectedPath?k.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Re(sr(n,Fe.ElementExample),E`
                                    <${R.assign({icon:Up})}></${R}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${nt}>
                </li>
            `});return E`
            <${nt.assign({route:dr,router:e.router})}>
                <slot name=${It.NavHeader}>Book</slot>
            </${nt}>
            <ul>
                ${t}
            </ul>
        `}});async function GA(e){await qa(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await G5(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const hn=at()({tagName:"book-error",styles:F`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(k.isArray(e.message)?e.message:[e.message]).map(n=>E`
                <p>${n}</p>
            `)}}),di=at()({tagName:"book-page-controls",events:{controlValueChange:yt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>F`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${fe} {
            height: 24px;
            max-width: 128px;
        }

        ${R}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],s)=>{if(i.controlType===Q.Hidden)return"";const o=KA(e.currentValues[r],i,a=>{const u=k.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return E`
                    <div class="control-wrapper">
                        ${Re(s===0,E`
                                <${R.assign({icon:Zu})}
                                    class="options-icon"
                                ></${R}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function KA(e,t,n){return jn(t,Q.Hidden)?"":jn(t,Q.Checkbox)?E`
            <input
                type="checkbox"
                .value=${e}
                ${ee("input",r=>{const i=Vr(r,HTMLInputElement);n(i.checked)})}
            />
        `:jn(t,Q.Color)?E`
            <input
                type="color"
                .value=${e}
                ${ee("input",r=>{const i=Vr(r,HTMLInputElement);n(i.value)})}
            />
        `:jn(t,Q.Text)?E`
            <${fe.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${ee(fe.events.valueChange,r=>{n(r.detail)})}
            ></${fe}>
        `:jn(t,Q.Number)?E`
            <input
                type="number"
                .value=${e}
                ${ee("input",r=>{const i=Vr(r,HTMLInputElement);n(i.value)})}
            />
        `:jn(t,Q.Dropdown)?E`
            <select
                .value=${e}
                ${ee("input",r=>{const i=Vr(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>E`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:E`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const id=at()({tagName:"book-breadcrumbs",styles:F`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const s=r>=i.length-1,o=i.slice(0,r+1),a=s?"":E`
                      <span class="spacer">&gt;</span>
                  `;return E`
                <${nt.assign({route:{hash:void 0,search:void 0,paths:[ct.Book,...o]},router:e.router})}>
                    ${n}
                </${nt}>
                ${a}
            `}):E`
                &nbsp;
            `}}),da=at()({tagName:"book-breadcrumbs-bar",styles:F`
        :host {
            border-bottom: 1px solid
                ${H["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${H["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return E`
            ${Re(!!e.currentSearch,E`
                    &nbsp;
                `,E`
                    <${id.assign({currentRoute:e.currentRoute,router:e.router})}></${id}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${ee("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Yr({milliseconds:200}),r.value===i&&(r.value?t(new Ts({paths:[ct.Search,encodeURIComponent(r.value)]})):t(new Ts(dr)))})}
            />
        `}}),sd=at()({tagName:"book-entry-description",styles:F`
        :host {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${H["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>E`
                <p>${t}</p>
            `)}}),od=at()({tagName:"book-page-wrapper",styles:F`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${nt} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?E`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:E`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[ct.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Qh(e.pageNode.entry.errors):void 0;return r&&console.error(r),E`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${nt.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${nt}>
                    ${r?E`
                              <${hn.assign({message:r.message})}></${hn}>
                          `:E`
                              <${sd.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${sd}>
                              <${di.assign({config:e.pageNode.entry.controls,currentValues:Eu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${di}>
                          `}
                </div>
            </div>
        `}}),Ji=at()({tagName:"book-element-example-controls",styles:F`
        :host {
            display: flex;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[ct.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return E`
            <${nt.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${nt}>
        `}}),ad=Symbol("unset-internal-state"),ud=at()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ad},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Qh(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===ad&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return E`
                ${Re(!!t.elementExampleNode.entry.styles,E`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",_e(r)),console.error(r),E`
                <${hn.assign({message:`${t.elementExampleNode.entry.title} failed: ${_e(r)}`})}></${hn}>
            `}},options:{allowPolymorphicState:!0}}),ld=at()({tagName:"book-element-example-wrapper",styles:F`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Ji} {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ji} {
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return E`
            <div class="individual-example-wrapper">
                <${Ji.assign(x1(e,["currentPageControls"]))}></${Ji}>
                <${ud.assign(e)}></${ud}>
            </div>
        `}});function Qp(e,t,n,r){const i=Fa(n,r),s=[];if(i){const o=Qp(e,t,i,r);o&&s.push(o)}if(sr(n,Fe.Page)&&!e.includes(n)){const o=Eu(t,n.fullUrlBreadcrumbs);s.push({config:n.entry.controls,current:o,breadcrumbs:st(o,()=>n.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function ZA({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:s}){if(!e.length&&r)return[E`
                No results
            `];const o=k.isLengthAtLeast(e,1)?Qp(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&k.isLengthAtLeast(e,1)?E`
                  <${di.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${di}>
              `:le,u=S5(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(sr(l,Fe.Page))return E`
                    <${od.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${od}>
                `;if(sr(l,Fe.ElementExample)){const f=Eu(i,l.fullUrlBreadcrumbs.slice(0,-1));return E`
                    <${ld.assign({elementExampleNode:l,currentPageControls:f,router:n})}
                        class="inline-entry"
                    ></${ld}>
                `}else return sr(l,Fe.Root)?le:E`
                    <${hn.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${hn}>
                `});return[a,u]}const Zn=at()({tagName:"book-entry-display",styles:F`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${da} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${mt["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:yt()},stateInitStatic:{lastElement:void 0},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const s=Ta(e.currentRoute.paths),o=ZA({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return E`
            <${da.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${da}>

            ${Re(e.showLoading,E`
                    <div
                        ${Mf(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${R.assign({icon:fi})}></${R}>
                    </div>
                    ${Re(!!r.lastElement,E`
                            ${r.lastElement}
                            <slot name=${It.Footer}></slot>
                        `)}
                `,E`
                    <div
                        ${Mf(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${It.Footer}></slot>
                `)}
        `}});function JA(e,t,n){const r=cd(e,t);return r.length?r:(n(dr),cd(e,dr.paths))}function cd(e,t){return e.filter(n=>hE({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const ha=dp()({tagName:"element-book-app",events:{pathUpdate:yt()},stateInitStatic:{currentRoute:dr,router:void 0,loading:!0,colors:{config:void 0,theme:Nf(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:F`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${H["element-book-page-background-color"].value};
            color: ${H["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Zn} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Nt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await fd(e,Ta(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(f){return{...e.currentRoute,...f}}function a(f){const c=o(f);return!k.jsonEquals(e.currentRoute,c)}function u(f){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(k.isTruthy).join(" - "))}function l(f){if(!a(f))return;const c=o(f);e.router?e.router.setRoute(c):r({currentRoute:{...e.currentRoute,...c}}),t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(c.paths))}try{if(t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const v=sA(t.internalRouterConfig.basePath);r({router:v}),v.listen(!0,S=>{r({currentRoute:S})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!k.jsonEquals(f,e.colors.config)){const v=Nf(f);r({colors:{config:f,theme:v}}),VE(n,v)}const c=t._debug??!1,d=wE({entries:t.pages,debug:c});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Q0(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=Ta(e.currentRoute.paths),b=(p?s$({flattenedNodes:d.flattenedNodes,searchQuery:p}):void 0)??JA(d.flattenedNodes,e.currentRoute.paths,l);u(b[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),E`
                <div
                    class="root"
                    ${ee(Ts,async v=>{const S=v.detail;if(!a(S))return;if(r({loading:!0}),l(S),!(n.shadowRoot.querySelector(Nt.tagName)instanceof Nt))throw new TypeError(`Failed to find child '${Nt.tagName}'`);await fd(n,p,e.currentRoute)})}
                    ${ee(di.events.controlValueChange,v=>{if(!e.treeBasedControls)return;const S=EE($,v.detail.fullUrlBreadcrumbs,v.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:S}})})}
                >
                    <${Nt.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${It.NavHeader}
                            slot=${It.NavHeader}
                        ></slot>
                    </${Nt}>
                    <${Zn.assign({controls:$,currentNodes:b,currentRoute:e.currentRoute,debug:c,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${ee(Zn.events.loadingRender,async v=>{await qa();const S=n.shadowRoot.querySelector(Zn.tagName);S?S.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Zn.tagName}' for scrolling.`),await qa(),r({loading:!v.detail})})}
                    >
                        <slot
                            name=${It.Footer}
                            slot=${It.Footer}
                        ></slot>
                    </${Zn}>
                </div>
            `):E`
                    <${hn.assign({message:"Failed to generate page controls."})}></${hn}>
                `}catch(f){return console.error(f),E`
                <p class="error">${_e(f)}</p>
            `}}});async function fd(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(Nt.tagName);if(!(r instanceof Nt))throw new TypeError(`Failed to find child '${Nt.tagName}'`);await GA(r)}const ma="://";function YA(...e){const t=e.join("/"),[n,r=""]=t.includes(ma)?t.split(ma):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const f=l[u+1];let c=a;const d=f?.startsWith("?"),p=!a.includes("?")&&d,w=f==="?";if(d||p){i=!0;let b=!1;const $=l.slice(u+2).reduce((v,S)=>(S.includes("#")&&(b=!0),b?v.concat(S):[v,S].join("&")),"");c=[a,f,w?k1({value:$,prefix:"&"}):$].join("")}return o.concat(c)},[]);return[n,n?ma:"",s.join("/")].join("")}var dd;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(dd||(dd={}));var hd;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(hd||(hd={}));const HA=Rn(Ym({keys:"",values:[""],required:!0})),QA=Rn({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:HA,hash:"",fullPath:"/",href:"/"});({...QA.defaultValue});const gn=wt({title:"Elements",parent:void 0}),Ju=wt({parent:gn,title:"Dropdown"}),XA=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:E`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:F`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:F`
            ${Lt} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],eC=wt({title:Lt.tagName,parent:Ju,controls:{Selected:{controlType:Q.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Q.Text,initValue:""}},defineExamples({defineExample:e}){XA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs.selected||[]},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?E`
                            <${Lt.assign(r)}>
                                ${t.customTemplate}
                            </${Lt}>
                        `:E`
                            <${Lt.assign(r)}></${Lt}>
                        `}})})}}),Zr=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],tC=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Zr,{id:42,label:"custom template",template:E`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Zr,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:F`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:F`
            ${Wr} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Ot}}],nC=wt({title:Wr.tagName,parent:Ju,controls:{Selected:{controlType:Q.Dropdown,initValue:"",options:["",...Zr.map(e=>e.label)]},Prefix:{controlType:Q.Text,initValue:""},"Force State":{controlType:Q.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Q.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Q.Dropdown,initValue:"",options:["",...Object.keys(Qa)]},Disabled:{controlType:Q.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Q.Text,initValue:"Select something"}},defineExamples({defineExample:e}){tC.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs?.selected||[]},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Zr,selected:i.Selected?[Zr.find(o=>o.label===i.Selected)?.id].filter(k.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?Qa[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return E`
                        <${Wr.assign(s)}
                            ${ee(Wr.events.selectedChange,o=>{r({selected:o.detail})})}
                        ></${Wr}>
                    `}})})}}),rC=wt({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Q.Color,initValue:""},"Fill Color":{controlType:Q.Color,initValue:""},"Stroke Width":{controlType:Q.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(Qa).forEach(t=>{e({title:t.name,styles:F`
                    :host(:hover) ${R} {
                        background-color: #f2f2f2;
                    }

                    ${R} {
                        padding: 8px;
                        border-radius: ${dt["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=F`
                        ${T["vira-icon-fill-color"].name}: ${he(n["Fill Color"]||"inherit")};
                        ${T["vira-icon-stroke-color"].name}: ${he(n["Stroke Color"]||"inherit")};
                        ${T["vira-icon-stroke-width"].name}: ${he(n["Stroke Width"]?e0(n["Stroke Width"]):"inherit")};
                    `;return E`
                        <${R.assign({icon:t})} style=${r}></${R}>
                    `}})})}}),iC=wt({parent:gn,title:be.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Q.Color,initValue:be.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Q.Color,initValue:be.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Q.Color,initValue:be.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Q.Color,initValue:be.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const s=r??F``;e({title:n,styles:s,render({controls:o}){const a=F`
                        ${be.cssVars["vira-button-primary-color"].name}: ${he(o["Primary color"]||"inherit")};
                        ${be.cssVars["vira-button-secondary-color"].name}: ${he(o["Secondary color"]||"inherit")};
                        ${be.cssVars["vira-button-primary-hover-color"].name}: ${he(o["Hover color"]||"inherit")};
                        ${be.cssVars["vira-button-primary-active-color"].name}: ${he(o["Active color"]||"inherit")};
                    `;return E`
                        <${be.assign({text:"hello",...i})}
                            style=${a}
                        ></${be}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Zu}}),t({title:"outline",inputs:{buttonStyle:Zp.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:F`
                ${be} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:F`
                ${be} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:F`
                :host {
                    ${be.cssVars["vira-button-primary-color"].name}: pink;
                    ${be.cssVars["vira-button-secondary-color"].name}: purple;
                    ${be.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${be.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return E`
                    <${be.assign({text:"hello"})}></${be}>
                `}})}}),sC=wt({title:St.tagName,parent:gn,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:F`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>E`
                        <${St.assign({expanded:!!n.expandedStates[i]})}
                            ${ee(St.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${St.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${ee("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Re(!!n.showMoreStates[i],E`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${St}>
                    `)}}),e({title:"wider examples",styles:F`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>E`
                        <${St.assign({expanded:!!n.expandedStates[i]})}
                            ${ee(St.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${St.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${ee("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Re(!!n.showMoreStates[i],E`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${St}>
                    `)}})}}),oC=wt({title:R.tagName,parent:gn,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return E`
                    <${R.assign({icon:Ot})}></${R}>
                `}}),e({title:"using createColoredIcon",render(){return E`
                    <${R.assign({icon:Zf(Ot,{"vira-icon-stroke-color":"red"})})}></${R}>
                `}}),e({title:"fit container",styles:F`
                ${R} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return E`
                    <${R.assign({icon:Zf(Ot,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${R}>
                `}})}}),aC=wt({title:Ht.tagName,parent:gn,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:F`
                    border-radius: 32px;
                `,loadingSlot:E`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${R.assign({icon:fi,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${R}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:F`
                    border-radius: 32px;
                `,errorSlot:E`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${R.assign({icon:Ms,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${R}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:F`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:F`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:F`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:E`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${R.assign({icon:fi,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${R}>
                    </div>
                `,errorSlot:E`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${R.assign({icon:Ms,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${R}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:F`
                    ${Ht} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||F``}
                    }

                    ${n.allowReload?F`
                              ${Ht} {
                                  cursor: pointer;
                              }

                              ${Ht}:hover {
                                  border-color: #0055ff;
                              }
                          `:F``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:n.inputs.imageUrl},render({state:r,updateState:i}){return E`
                        <${Ht.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${ee("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Hh()}`})})}
                        >
                            ${n.loadingSlot?E`
                                      <div class="slot-wrapper" slot=${Ht.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:""}${n.errorSlot?E`
                                      <div class="slot-wrapper" slot=${Ht.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:""}
                        </${Ht}>
                    `}})})}}),uC=wt({title:fe.tagName,parent:gn,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Q.Color,initValue:fe.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:Q.Color,initValue:fe.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:Q.Color,initValue:fe.cssVars["vira-input-border-color"].default},"Focus color":{controlType:Q.Color,initValue:fe.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:Q.Color,initValue:fe.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:s}){e({title:i,styles:F`
                    ${r||F``}
                `,stateInitStatic:{value:s.value},render({state:o,updateState:a,controls:u}){const l={[String(fe.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(fe.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(fe.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(fe.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(fe.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},f=st(l,(d,p)=>p||"inherit"),c=Object.entries(f).map(([d,p])=>[d,p].join(": ")+";").join(`
`);return E`
                        <${fe.assign({...s,value:o.value})}
                            style=${c}
                            ${ee(fe.events.valueChange,d=>{a({value:d.detail})})}
                        ></${fe}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Ot}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:F`
                    ${fe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ot}},{title:"taller height",styles:F`
                    ${fe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Ot}},{title:"shorter height",styles:F`
                    ${fe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ot}},{title:"max width",styles:F`
                    ${fe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:F`
                    ${fe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Hp.Password}}].forEach(t)}}),lC=wt({title:Zi.tagName,parent:gn,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Q.Color,initValue:""},"Hover color":{controlType:Q.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const s=F`
                        ${Zi.cssVars["vira-link-hover-color"].name}: ${he(i["Hover color"]||"inherit")};
                        color: ${he(i["CSS Color"]||"inherit")};
                    `;return E`
                        <${Zi.assign(r)} style=${s}>My Link</${Zi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),cC=[gn,rC,Ju,iC,sC,eC,nC,oC,aC,uC,lC].sort((e,t)=>e.title.localeCompare(t.title));ao({tagName:"vira-book-app",styles:F`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ha} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return E`
            <${ha.assign({internalRouterConfig:{basePath:YA("element-vir","vira"),useInternalRouter:!0},pages:cC,themeColor:"#33ccff"})}>
                <h1 slot=${It.NavHeader}>Vira</h1>
            </${ha}>
        `}});
