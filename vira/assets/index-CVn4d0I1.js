(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var ye=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(ye||{});function ae(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Zm(e){return ae(e).filter(t=>isNaN(Number(t)))}function ud(e){return Zm(e).map(r=>e[r])}var Ym=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Jm=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Qm=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,_s={Space_Separator:Ym,ID_Start:Jm,ID_Continue:Qm},oe={isSpaceSeparator(e){return typeof e=="string"&&_s.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||_s.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||_s.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Do,De,ht,xi,Lt,Je,he,na,dn;var Xm=function(t,r){Do=String(t),De="start",ht=[],xi=0,Lt=1,Je=0,he=void 0,na=void 0,dn=void 0;do he=ep(),np[De]();while(he.type!=="eof");return typeof r=="function"?Eo({"":dn},"",r):dn};function Eo(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const s=String(i),o=Eo(n,s,r);o===void 0?delete n[s]:Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const s=Eo(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let R,_,en,lt,U;function ep(){for(R="default",_="",en=!1,lt=1;;){U=wt();const e=ld[R]();if(e)return e}}function wt(){if(Do[xi])return String.fromCodePoint(Do.codePointAt(xi))}function w(){const e=wt();return e===`
`?(Lt++,Je=0):e?Je+=e.length:Je++,e&&(xi+=e.length),e}const ld={default(){switch(U){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":w();return;case"/":w(),R="comment";return;case void 0:return w(),J("eof")}if(oe.isSpaceSeparator(U)){w();return}return ld[De]()},comment(){switch(U){case"*":w(),R="multiLineComment";return;case"/":w(),R="singleLineComment";return}throw Q(w())},multiLineComment(){switch(U){case"*":w(),R="multiLineCommentAsterisk";return;case void 0:throw Q(w())}w()},multiLineCommentAsterisk(){switch(U){case"*":w();return;case"/":w(),R="default";return;case void 0:throw Q(w())}w(),R="multiLineComment"},singleLineComment(){switch(U){case`
`:case"\r":case"\u2028":case"\u2029":w(),R="default";return;case void 0:return w(),J("eof")}w()},value(){switch(U){case"{":case"[":return J("punctuator",w());case"n":return w(),qt("ull"),J("null",null);case"t":return w(),qt("rue"),J("boolean",!0);case"f":return w(),qt("alse"),J("boolean",!1);case"-":case"+":w()==="-"&&(lt=-1),R="sign";return;case".":_=w(),R="decimalPointLeading";return;case"0":_=w(),R="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":_=w(),R="decimalInteger";return;case"I":return w(),qt("nfinity"),J("numeric",1/0);case"N":return w(),qt("aN"),J("numeric",NaN);case'"':case"'":en=w()==='"',_="",R="string";return}throw Q(w())},identifierNameStartEscape(){if(U!=="u")throw Q(w());w();const e=vo();switch(e){case"$":case"_":break;default:if(!oe.isIdStartChar(e))throw uu();break}_+=e,R="identifierName"},identifierName(){switch(U){case"$":case"_":case"‌":case"‍":_+=w();return;case"\\":w(),R="identifierNameEscape";return}if(oe.isIdContinueChar(U)){_+=w();return}return J("identifier",_)},identifierNameEscape(){if(U!=="u")throw Q(w());w();const e=vo();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!oe.isIdContinueChar(e))throw uu();break}_+=e,R="identifierName"},sign(){switch(U){case".":_=w(),R="decimalPointLeading";return;case"0":_=w(),R="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":_=w(),R="decimalInteger";return;case"I":return w(),qt("nfinity"),J("numeric",lt*(1/0));case"N":return w(),qt("aN"),J("numeric",NaN)}throw Q(w())},zero(){switch(U){case".":_+=w(),R="decimalPoint";return;case"e":case"E":_+=w(),R="decimalExponent";return;case"x":case"X":_+=w(),R="hexadecimal";return}return J("numeric",lt*0)},decimalInteger(){switch(U){case".":_+=w(),R="decimalPoint";return;case"e":case"E":_+=w(),R="decimalExponent";return}if(oe.isDigit(U)){_+=w();return}return J("numeric",lt*Number(_))},decimalPointLeading(){if(oe.isDigit(U)){_+=w(),R="decimalFraction";return}throw Q(w())},decimalPoint(){switch(U){case"e":case"E":_+=w(),R="decimalExponent";return}if(oe.isDigit(U)){_+=w(),R="decimalFraction";return}return J("numeric",lt*Number(_))},decimalFraction(){switch(U){case"e":case"E":_+=w(),R="decimalExponent";return}if(oe.isDigit(U)){_+=w();return}return J("numeric",lt*Number(_))},decimalExponent(){switch(U){case"+":case"-":_+=w(),R="decimalExponentSign";return}if(oe.isDigit(U)){_+=w(),R="decimalExponentInteger";return}throw Q(w())},decimalExponentSign(){if(oe.isDigit(U)){_+=w(),R="decimalExponentInteger";return}throw Q(w())},decimalExponentInteger(){if(oe.isDigit(U)){_+=w();return}return J("numeric",lt*Number(_))},hexadecimal(){if(oe.isHexDigit(U)){_+=w(),R="hexadecimalInteger";return}throw Q(w())},hexadecimalInteger(){if(oe.isHexDigit(U)){_+=w();return}return J("numeric",lt*Number(_))},string(){switch(U){case"\\":w(),_+=tp();return;case'"':if(en)return w(),J("string",_);_+=w();return;case"'":if(!en)return w(),J("string",_);_+=w();return;case`
`:case"\r":throw Q(w());case"\u2028":case"\u2029":ip(U);break;case void 0:throw Q(w())}_+=w()},start(){switch(U){case"{":case"[":return J("punctuator",w())}R="value"},beforePropertyName(){switch(U){case"$":case"_":_=w(),R="identifierName";return;case"\\":w(),R="identifierNameStartEscape";return;case"}":return J("punctuator",w());case'"':case"'":en=w()==='"',R="string";return}if(oe.isIdStartChar(U)){_+=w(),R="identifierName";return}throw Q(w())},afterPropertyName(){if(U===":")return J("punctuator",w());throw Q(w())},beforePropertyValue(){R="value"},afterPropertyValue(){switch(U){case",":case"}":return J("punctuator",w())}throw Q(w())},beforeArrayValue(){if(U==="]")return J("punctuator",w());R="value"},afterArrayValue(){switch(U){case",":case"]":return J("punctuator",w())}throw Q(w())},end(){throw Q(w())}};function J(e,t){return{type:e,value:t,line:Lt,column:Je}}function qt(e){for(const t of e){if(wt()!==t)throw Q(w());w()}}function tp(){switch(wt()){case"b":return w(),"\b";case"f":return w(),"\f";case"n":return w(),`
`;case"r":return w(),"\r";case"t":return w(),"	";case"v":return w(),"\v";case"0":if(w(),oe.isDigit(wt()))throw Q(w());return"\0";case"x":return w(),rp();case"u":return w(),vo();case`
`:case"\u2028":case"\u2029":return w(),"";case"\r":return w(),wt()===`
`&&w(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Q(w());case void 0:throw Q(w())}return w()}function rp(){let e="",t=wt();if(!oe.isHexDigit(t)||(e+=w(),t=wt(),!oe.isHexDigit(t)))throw Q(w());return e+=w(),String.fromCodePoint(parseInt(e,16))}function vo(){let e="",t=4;for(;t-- >0;){const r=wt();if(!oe.isHexDigit(r))throw Q(w());e+=w()}return String.fromCodePoint(parseInt(e,16))}const np={start(){if(he.type==="eof")throw Gt();Os()},beforePropertyName(){switch(he.type){case"identifier":case"string":na=he.value,De="afterPropertyName";return;case"punctuator":Qn();return;case"eof":throw Gt()}},afterPropertyName(){if(he.type==="eof")throw Gt();De="beforePropertyValue"},beforePropertyValue(){if(he.type==="eof")throw Gt();Os()},beforeArrayValue(){if(he.type==="eof")throw Gt();if(he.type==="punctuator"&&he.value==="]"){Qn();return}Os()},afterPropertyValue(){if(he.type==="eof")throw Gt();switch(he.value){case",":De="beforePropertyName";return;case"}":Qn()}},afterArrayValue(){if(he.type==="eof")throw Gt();switch(he.value){case",":De="beforeArrayValue";return;case"]":Qn()}},end(){}};function Os(){let e;switch(he.type){case"punctuator":switch(he.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=he.value;break}if(dn===void 0)dn=e;else{const t=ht[ht.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,na,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")ht.push(e),Array.isArray(e)?De="beforeArrayValue":De="beforePropertyName";else{const t=ht[ht.length-1];t==null?De="end":Array.isArray(t)?De="afterArrayValue":De="afterPropertyValue"}}function Qn(){ht.pop();const e=ht[ht.length-1];e==null?De="end":Array.isArray(e)?De="afterArrayValue":De="afterPropertyValue"}function Q(e){return Mi(e===void 0?`JSON5: invalid end of input at ${Lt}:${Je}`:`JSON5: invalid character '${cd(e)}' at ${Lt}:${Je}`)}function Gt(){return Mi(`JSON5: invalid end of input at ${Lt}:${Je}`)}function uu(){return Je-=5,Mi(`JSON5: invalid identifier character at ${Lt}:${Je}`)}function ip(e){console.warn(`JSON5: '${cd(e)}' in strings is not valid ECMAScript; consider escaping`)}function cd(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Mi(e){const t=new SyntaxError(e);return t.lineNumber=Lt,t.columnNumber=Je,t}var sp=function(t,r,n){const i=[];let s="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const y of r){let E;typeof y=="string"?E=y:(typeof y=="number"||y instanceof String||y instanceof Number)&&(E=String(y)),E!==void 0&&o.indexOf(E)<0&&o.push(E)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),d("",{"":t});function d(y,E){let D=E[y];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(y):typeof D.toJSON=="function"&&(D=D.toJSON(y))),a&&(D=a.call(E,y,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return c(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?g(D):f(D)}function c(y){const E={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let A="";for(let P=0;P<y.length;P++){const j=y[P];switch(j){case"'":case'"':E[j]++,A+=j;continue;case"\0":if(oe.isDigit(y[P+1])){A+="\\x00";continue}}if(D[j]){A+=D[j];continue}if(j<" "){let be=j.charCodeAt(0).toString(16);A+="\\x"+("00"+be).substring(be.length);continue}A+=j}const x=l||Object.keys(E).reduce((P,j)=>E[P]<E[j]?P:j);return A=A.replace(new RegExp(x,"g"),D[x]),x+A+x}function f(y){if(i.indexOf(y)>=0)throw TypeError("Converting circular structure to JSON5");i.push(y);let E=s;s=s+u;let D=o||Object.keys(y),A=[];for(const P of D){const j=d(P,y);if(j!==void 0){let be=m(P)+":";u!==""&&(be+=" "),be+=j,A.push(be)}}let x;if(A.length===0)x="{}";else{let P;if(u==="")P=A.join(","),x="{"+P+"}";else{let j=`,
`+s;P=A.join(j),x=`{
`+s+P+`,
`+E+"}"}}return i.pop(),s=E,x}function m(y){if(y.length===0)return c(y);const E=String.fromCodePoint(y.codePointAt(0));if(!oe.isIdStartChar(E))return c(y);for(let D=E.length;D<y.length;D++)if(!oe.isIdContinueChar(String.fromCodePoint(y.codePointAt(D))))return c(y);return y}function g(y){if(i.indexOf(y)>=0)throw TypeError("Converting circular structure to JSON5");i.push(y);let E=s;s=s+u;let D=[];for(let x=0;x<y.length;x++){const P=d(String(x),y);D.push(P!==void 0?P:"null")}let A;if(D.length===0)A="[]";else if(u==="")A="["+D.join(",")+"]";else{let x=`,
`+s,P=D.join(x);A=`[
`+s+P+`,
`+E+"]"}return i.pop(),s=E,A}};const op={parse:Xm,stringify:sp};var ap=op;function F(e){try{return ap.stringify(e)}catch{return String(e)}}const up=[".",":",";",",","?","!"],lp=new RegExp(`[${up.join("")}]+$`);function lu(e){return e.replace(lp,"")}function je(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:F(e):""}function Xi(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&lu(n));return t.length===1?t[0]:t.length?t.map((n,i)=>i===t.length-1?n:lu(n)).join(": "):""}function we(e){return e instanceof Error?e:new Error(je(e))}function es(e,t){const r=we(e);return r.message=Xi(t,r.message),r}var k;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(k||(k={}));var Jt;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Jt||(Jt={}));const cp={[Jt.Information]:[k.Continue,k.SwitchingProtocols,k.Processing,k.EarlyHints],[Jt.Success]:[k.Ok,k.Created,k.Accepted,k.NonAuthoritativeInformation,k.NoContent,k.ResetContent,k.PartialContent,k.MultiStatus,k.AlreadyReported,k.ImUsed],[Jt.Redirect]:[k.MultipleChoices,k.MovedPermanently,k.Found,k.SeeOther,k.NotModified,k.UseProxy,k.Unused,k.TemporaryRedirect,k.PermanentRedirect],[Jt.ClientError]:[k.BadRequest,k.Unauthorized,k.PaymentRequired,k.Forbidden,k.NotFound,k.MethodNotAllowed,k.NotAcceptable,k.ProxyAuthenticationRequired,k.RequestTimeout,k.Conflict,k.Gone,k.LengthRequired,k.PreconditionFailed,k.PayloadTooLarge,k.UriTooLong,k.UnsupportedMediaType,k.RangeNotSatisfiable,k.ExpectationFailed,k.ImATeapot,k.MisdirectedRequest,k.UnprocessableContent,k.Locked,k.FailedDependency,k.TooEarly,k.UpgradeRequired,k.PreconditionRequired,k.TooManyRequests,k.RequestHeaderFieldsTooLarge,k.UnavailableForLegalReasons],[Jt.ServerError]:[k.InternalServerError,k.NotImplemented,k.BadGateway,k.ServiceUnavailable,k.GatewayTimeout,k.HttpVersionNotSupported,k.VariantAlsoNegotiates,k.InsufficientStorage,k.LoopDetected,k.NotExtended,k.NetworkAuthenticationRequired]};class dd{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(we(n))}})}}class lr extends Error{}class dp extends lr{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class fp extends lr{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class hp extends lr{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class $r extends lr{}class fd extends lr{constructor(t){super(`Invalid unit ${t}`)}}class pe extends lr{}class St extends lr{constructor(){super("Zone is an abstract class")}}const S="numeric",Xe="short",Be="long",Ni={year:S,month:S,day:S},hd={year:S,month:Xe,day:S},mp={year:S,month:Xe,day:S,weekday:Xe},md={year:S,month:Be,day:S},pd={year:S,month:Be,day:S,weekday:Be},gd={hour:S,minute:S},yd={hour:S,minute:S,second:S},wd={hour:S,minute:S,second:S,timeZoneName:Xe},bd={hour:S,minute:S,second:S,timeZoneName:Be},Dd={hour:S,minute:S,hourCycle:"h23"},Ed={hour:S,minute:S,second:S,hourCycle:"h23"},vd={hour:S,minute:S,second:S,hourCycle:"h23",timeZoneName:Xe},Ad={hour:S,minute:S,second:S,hourCycle:"h23",timeZoneName:Be},Cd={year:S,month:S,day:S,hour:S,minute:S},$d={year:S,month:S,day:S,hour:S,minute:S,second:S},Sd={year:S,month:Xe,day:S,hour:S,minute:S},kd={year:S,month:Xe,day:S,hour:S,minute:S,second:S},pp={year:S,month:Xe,day:S,weekday:Xe,hour:S,minute:S},Td={year:S,month:Be,day:S,hour:S,minute:S,timeZoneName:Xe},Fd={year:S,month:Be,day:S,hour:S,minute:S,second:S,timeZoneName:Xe},xd={year:S,month:Be,day:S,weekday:Be,hour:S,minute:S,timeZoneName:Be},Md={year:S,month:Be,day:S,weekday:Be,hour:S,minute:S,second:S,timeZoneName:Be};class In{get type(){throw new St}get name(){throw new St}get ianaName(){return this.name}get isUniversal(){throw new St}offsetName(t,r){throw new St}formatOffset(t,r){throw new St}offset(t){throw new St}equals(t){throw new St}get isValid(){throw new St}}let Rs=null;class ts extends In{static get instance(){return Rs===null&&(Rs=new ts),Rs}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Vd(t,r,n)}formatOffset(t,r){return fn(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Di={};function gp(e){return Di[e]||(Di[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Di[e]}const yp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function wp(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,u,l,d]=n;return[o,i,s,a,u,l,d]}function bp(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=yp[s];s==="era"?n[a]=o:L(a)||(n[a]=parseInt(o,10))}return n}let Xn={};class Dt extends In{static create(t){return Xn[t]||(Xn[t]=new Dt(t)),Xn[t]}static resetCache(){Xn={},Di={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Dt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Vd(t,r,n,this.name)}formatOffset(t,r){return fn(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=gp(this.name);let[i,s,o,a,u,l,d]=n.formatToParts?bp(n,r):wp(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=ns({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:d,millisecond:0});let m=+r;const g=m%1e3;return m-=g>=0?g:1e3+g,(f-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let cu={};function Dp(e,t={}){const r=JSON.stringify([e,t]);let n=cu[r];return n||(n=new Intl.ListFormat(e,t),cu[r]=n),n}let Ao={};function Co(e,t={}){const r=JSON.stringify([e,t]);let n=Ao[r];return n||(n=new Intl.DateTimeFormat(e,t),Ao[r]=n),n}let $o={};function Ep(e,t={}){const r=JSON.stringify([e,t]);let n=$o[r];return n||(n=new Intl.NumberFormat(e,t),$o[r]=n),n}let So={};function vp(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=So[i];return s||(s=new Intl.RelativeTimeFormat(e,t),So[i]=s),s}let tn=null;function Ap(){return tn||(tn=new Intl.DateTimeFormat().resolvedOptions().locale,tn)}let du={};function Cp(e){let t=du[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,du[e]=t}return t}function $p(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=Co(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=Co(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function Sp(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function kp(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function Tp(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function ei(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function Fp(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class xp{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Ep(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ua(t,3);return ue(r,this.padTo)}}}class Mp{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Dt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Co(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Np{constructor(t,r,n){this.opts={style:"long",...n},!r&&Od()&&(this.rtf=vp(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):tg(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Bp={firstDay:1,minimalDays:4,weekend:[6,7]};class K{static fromOpts(t){return K.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const o=t||X.defaultLocale,a=o||(s?"en-US":Ap()),u=r||X.defaultNumberingSystem,l=n||X.defaultOutputCalendar,d=ko(i)||X.defaultWeekSettings;return new K(a,u,l,d,o)}static resetCache(){tn=null,Ao={},$o={},So={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return K.create(t,r,n,i)}constructor(t,r,n,i,s){const[o,a,u]=$p(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=Sp(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Fp(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:K.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,ko(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return ei(this,t,jd,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=kp(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return ei(this,t,Gd,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Tp(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return ei(this,void 0,()=>Hd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return ei(this,t,Kd,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new xp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Mp(t,this.intl,r)}relFormatter(t={}){return new Np(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Dp(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Rd()?Cp(this.locale):Bp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Vs=null;class Ee extends In{static get utcInstance(){return Vs===null&&(Vs=new Ee(0)),Vs}static instance(t){return t===0?Ee.utcInstance:new Ee(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Ee(is(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Pp extends In{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function xt(e,t){if(L(e)||e===null)return t;if(e instanceof In)return e;if(Vp(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?ts.instance:r==="utc"||r==="gmt"?Ee.utcInstance:Ee.parseSpecifier(r)||Dt.create(e)}else return Bt(e)?Ee.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Pp(e)}const ia={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},fu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Lp=ia.hanidec.replace(/[\[|\]]/g,"").split("");function Ip(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(ia.hanidec)!==-1)t+=Lp.indexOf(e[r]);else for(const i in fu){const[s,o]=fu[i];n>=s&&n<=o&&(t+=n-s)}}return parseInt(t,10)}else return t}let vr={};function _p(){vr={}}function Ge({numberingSystem:e},t=""){const r=e||"latn";return vr[r]||(vr[r]={}),vr[r][t]||(vr[r][t]=new RegExp(`${ia[r]}${t}`)),vr[r][t]}let hu=()=>Date.now(),mu="system",pu=null,gu=null,yu=null,wu=60,bu,Du=null;class X{static get now(){return hu}static set now(t){hu=t}static set defaultZone(t){mu=t}static get defaultZone(){return xt(mu,ts.instance)}static get defaultLocale(){return pu}static set defaultLocale(t){pu=t}static get defaultNumberingSystem(){return gu}static set defaultNumberingSystem(t){gu=t}static get defaultOutputCalendar(){return yu}static set defaultOutputCalendar(t){yu=t}static get defaultWeekSettings(){return Du}static set defaultWeekSettings(t){Du=ko(t)}static get twoDigitCutoffYear(){return wu}static set twoDigitCutoffYear(t){wu=t%100}static get throwOnInvalid(){return bu}static set throwOnInvalid(t){bu=t}static resetCaches(){K.resetCache(),Dt.resetCache(),I.resetCache(),_p()}}class Ze{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Nd=[0,31,59,90,120,151,181,212,243,273,304,334],Bd=[0,31,60,91,121,152,182,213,244,274,305,335];function Ue(e,t){return new Ze("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function sa(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Pd(e,t,r){return r+(_n(e)?Bd:Nd)[t-1]}function Ld(e,t){const r=_n(e)?Bd:Nd,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function oa(e,t){return(e-t+7)%7+1}function Bi(e,t=4,r=1){const{year:n,month:i,day:s}=e,o=Pd(n,i,s),a=oa(sa(n,i,s),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=wn(l,t,r)):u>wn(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...ss(e)}}function Eu(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,o=oa(sa(n,1,t),r),a=kr(n);let u=i*7+s-o-7+t,l;u<1?(l=n-1,u+=kr(l)):u>a?(l=n+1,u-=kr(n)):l=n;const{month:d,day:c}=Ld(l,u);return{year:l,month:d,day:c,...ss(e)}}function Us(e){const{year:t,month:r,day:n}=e,i=Pd(t,r,n);return{year:t,ordinal:i,...ss(e)}}function vu(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Ld(t,r);return{year:t,month:n,day:i,...ss(e)}}function Au(e,t){if(!L(e.localWeekday)||!L(e.localWeekNumber)||!L(e.localWeekYear)){if(!L(e.weekday)||!L(e.weekNumber)||!L(e.weekYear))throw new $r("Cannot mix locale-based week fields with ISO-based week fields");return L(e.localWeekday)||(e.weekday=e.localWeekday),L(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),L(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Op(e,t=4,r=1){const n=rs(e.weekYear),i=We(e.weekNumber,1,wn(e.weekYear,t,r)),s=We(e.weekday,1,7);return n?i?s?!1:Ue("weekday",e.weekday):Ue("week",e.weekNumber):Ue("weekYear",e.weekYear)}function Rp(e){const t=rs(e.year),r=We(e.ordinal,1,kr(e.year));return t?r?!1:Ue("ordinal",e.ordinal):Ue("year",e.year)}function Id(e){const t=rs(e.year),r=We(e.month,1,12),n=We(e.day,1,Pi(e.year,e.month));return t?r?n?!1:Ue("day",e.day):Ue("month",e.month):Ue("year",e.year)}function _d(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=We(t,0,23)||t===24&&r===0&&n===0&&i===0,o=We(r,0,59),a=We(n,0,59),u=We(i,0,999);return s?o?a?u?!1:Ue("millisecond",i):Ue("second",n):Ue("minute",r):Ue("hour",t)}function L(e){return typeof e>"u"}function Bt(e){return typeof e=="number"}function rs(e){return typeof e=="number"&&e%1===0}function Vp(e){return typeof e=="string"}function Up(e){return Object.prototype.toString.call(e)==="[object Date]"}function Od(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Rd(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Wp(e){return Array.isArray(e)?e:[e]}function Cu(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function jp(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Pr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ko(e){if(e==null)return null;if(typeof e!="object")throw new pe("Week settings must be an object");if(!We(e.firstDay,1,7)||!We(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!We(t,1,7)))throw new pe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function We(e,t,r){return rs(e)&&e>=t&&e<=r}function zp(e,t){return e-t*Math.floor(e/t)}function ue(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Ft(e){if(!(L(e)||e===null||e===""))return parseInt(e,10)}function Ht(e){if(!(L(e)||e===null||e===""))return parseFloat(e)}function aa(e){if(!(L(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ua(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function _n(e){return e%4===0&&(e%100!==0||e%400===0)}function kr(e){return _n(e)?366:365}function Pi(e,t){const r=zp(t-1,12)+1,n=e+(t-r)/12;return r===2?_n(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ns(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function $u(e,t,r){return-oa(sa(e,1,t),r)+t-1}function wn(e,t=4,r=1){const n=$u(e,t,r),i=$u(e+1,t,r);return(kr(e)-n+i)/7}function To(e){return e>99?e:e>X.twoDigitCutoffYear?1900+e:2e3+e}function Vd(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function is(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Ud(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new pe(`Invalid unit value ${e}`);return t}function Li(e,t){const r={};for(const n in e)if(Pr(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Ud(i)}return r}function fn(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ue(r,2)}:${ue(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${ue(r,2)}${ue(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ss(e){return jp(e,["hour","minute","second","millisecond"])}const qp=["January","February","March","April","May","June","July","August","September","October","November","December"],Wd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Gp=["J","F","M","A","M","J","J","A","S","O","N","D"];function jd(e){switch(e){case"narrow":return[...Gp];case"short":return[...Wd];case"long":return[...qp];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const zd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],qd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Hp=["M","T","W","T","F","S","S"];function Gd(e){switch(e){case"narrow":return[...Hp];case"short":return[...qd];case"long":return[...zd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Hd=["AM","PM"],Kp=["Before Christ","Anno Domini"],Zp=["BC","AD"],Yp=["B","A"];function Kd(e){switch(e){case"narrow":return[...Yp];case"short":return[...Zp];case"long":return[...Kp];default:return null}}function Jp(e){return Hd[e.hour<12?0:1]}function Qp(e,t){return Gd(t)[e.weekday-1]}function Xp(e,t){return jd(t)[e.month-1]}function eg(e,t){return Kd(t)[e.year<0?0:1]}function tg(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const c=e==="days";switch(t){case 1:return c?"tomorrow":`next ${i[e][0]}`;case-1:return c?"yesterday":`last ${i[e][0]}`;case 0:return c?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],d=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${d} ago`:`in ${a} ${d}`}function Su(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const rg={D:Ni,DD:hd,DDD:md,DDDD:pd,t:gd,tt:yd,ttt:wd,tttt:bd,T:Dd,TT:Ed,TTT:vd,TTTT:Ad,f:Cd,ff:Sd,fff:Td,ffff:xd,F:$d,FF:kd,FFF:Fd,FFFF:Md};class ge{static create(t,r={}){return new ge(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return rg[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return ue(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(m,g)=>this.loc.extract(t,m,g),o=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?Jp(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,g)=>n?Xp(t,m):s(g?{month:m}:{month:m,day:"numeric"},"month"),l=(m,g)=>n?Qp(t,m):s(g?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),d=m=>{const g=ge.macroTokenToFormatOpts(m);return g?this.formatWithSystemDefault(t,g):m},c=m=>n?eg(t,m):s({era:m},"era"),f=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(m)}};return Su(ge.parseFormat(r),f)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const d=n(l);return d?this.num(u.get(d),l.length):l},s=ge.parseFormat(r),o=s.reduce((u,{literal:l,val:d})=>l?u:u.concat(d),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return Su(s,i(a))}}const Zd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function zr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function qr(...e){return t=>e.reduce(([r,n,i],s)=>{const[o,a,u]=s(t,i);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function Gr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Yd(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=Ft(t[r+i]);return[n,null,r+i]}}const Jd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ng=`(?:${Jd.source}?(?:\\[(${Zd.source})\\])?)?`,la=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Qd=RegExp(`${la.source}${ng}`),ca=RegExp(`(?:T${Qd.source})?`),ig=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,sg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,og=/(\d{4})-?(\d{3})/,ag=Yd("weekYear","weekNumber","weekDay"),ug=Yd("year","ordinal"),lg=/(\d{4})-(\d\d)-(\d\d)/,Xd=RegExp(`${la.source} ?(?:${Jd.source}|(${Zd.source}))?`),cg=RegExp(`(?: ${Xd.source})?`);function Tr(e,t,r){const n=e[t];return L(n)?r:Ft(n)}function dg(e,t){return[{year:Tr(e,t),month:Tr(e,t+1,1),day:Tr(e,t+2,1)},null,t+3]}function Hr(e,t){return[{hours:Tr(e,t,0),minutes:Tr(e,t+1,0),seconds:Tr(e,t+2,0),milliseconds:aa(e[t+3])},null,t+4]}function On(e,t){const r=!e[t]&&!e[t+1],n=is(e[t+1],e[t+2]),i=r?null:Ee.instance(n);return[{},i,t+3]}function Rn(e,t){const r=e[t]?Dt.create(e[t]):null;return[{},r,t+1]}const fg=RegExp(`^T?${la.source}$`),hg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function mg(e){const[t,r,n,i,s,o,a,u,l]=e,d=t[0]==="-",c=u&&u[0]==="-",f=(m,g=!1)=>m!==void 0&&(g||m&&d)?-m:m;return[{years:f(Ht(r)),months:f(Ht(n)),weeks:f(Ht(i)),days:f(Ht(s)),hours:f(Ht(o)),minutes:f(Ht(a)),seconds:f(Ht(u),u==="-0"),milliseconds:f(aa(l),c)}]}const pg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function da(e,t,r,n,i,s,o){const a={year:t.length===2?To(Ft(t)):Ft(t),month:Wd.indexOf(r)+1,day:Ft(n),hour:Ft(i),minute:Ft(s)};return o&&(a.second=Ft(o)),e&&(a.weekday=e.length>3?zd.indexOf(e)+1:qd.indexOf(e)+1),a}const gg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function yg(e){const[,t,r,n,i,s,o,a,u,l,d,c]=e,f=da(t,i,n,r,s,o,a);let m;return u?m=pg[u]:l?m=0:m=is(d,c),[f,new Ee(m)]}function wg(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const bg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Dg=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Eg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ku(e){const[,t,r,n,i,s,o,a]=e;return[da(t,i,n,r,s,o,a),Ee.utcInstance]}function vg(e){const[,t,r,n,i,s,o,a]=e;return[da(t,a,r,n,i,s,o),Ee.utcInstance]}const Ag=zr(ig,ca),Cg=zr(sg,ca),$g=zr(og,ca),Sg=zr(Qd),ef=qr(dg,Hr,On,Rn),kg=qr(ag,Hr,On,Rn),Tg=qr(ug,Hr,On,Rn),Fg=qr(Hr,On,Rn);function xg(e){return Gr(e,[Ag,ef],[Cg,kg],[$g,Tg],[Sg,Fg])}function Mg(e){return Gr(wg(e),[gg,yg])}function Ng(e){return Gr(e,[bg,ku],[Dg,ku],[Eg,vg])}function Bg(e){return Gr(e,[hg,mg])}const Pg=qr(Hr);function Lg(e){return Gr(e,[fg,Pg])}const Ig=zr(lg,cg),_g=zr(Xd),Og=qr(Hr,On,Rn);function Rg(e){return Gr(e,[Ig,ef],[_g,Og])}const Tu="Invalid Duration",tf={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Vg={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...tf},Ie=146097/400,hr=146097/4800,Ug={years:{quarters:4,months:12,weeks:Ie/7,days:Ie,hours:Ie*24,minutes:Ie*24*60,seconds:Ie*24*60*60,milliseconds:Ie*24*60*60*1e3},quarters:{months:3,weeks:Ie/28,days:Ie/4,hours:Ie*24/4,minutes:Ie*24*60/4,seconds:Ie*24*60*60/4,milliseconds:Ie*24*60*60*1e3/4},months:{weeks:hr/7,days:hr,hours:hr*24,minutes:hr*24*60,seconds:hr*24*60*60,milliseconds:hr*24*60*60*1e3},...tf},Xt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Wg=Xt.slice(0).reverse();function kt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new W(n)}function rf(e,t){let r=t.milliseconds??0;for(const n of Wg.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Fu(e,t){const r=rf(e,t)<0?-1:1;Xt.reduceRight((n,i)=>{if(L(t[i]))return n;if(n){const s=t[n]*r,o=e[i][n],a=Math.floor(s/o);t[i]+=a*r,t[n]-=a*o*r}return i},null),Xt.reduce((n,i)=>{if(L(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function jg(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class W{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Ug:Vg;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||K.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return W.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new pe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new W({values:Li(t,W.normalizeUnit),loc:K.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Bt(t))return W.fromMillis(t);if(W.isDuration(t))return t;if(typeof t=="object")return W.fromObject(t);throw new pe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Bg(t);return n?W.fromObject(n,r):W.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Lg(t);return n?W.fromObject(n,r):W.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new pe("need to specify a reason the Duration is invalid");const n=t instanceof Ze?t:new Ze(t,r);if(X.throwOnInvalid)throw new hp(n);return new W({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new fd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ge.create(this.loc,n).formatDurationFromString(this,t):Tu}toHuman(t={}){if(!this.isValid)return Tu;const r=Xt.map(n=>{const i=this.values[n];return L(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ua(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?rf(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=W.fromDurationLike(t),n={};for(const i of Xt)(Pr(r.values,i)||Pr(this.values,i))&&(n[i]=r.get(i)+this.get(i));return kt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=W.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Ud(t(this.values[n],n));return kt(this,{values:r},!0)}get(t){return this[W.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Li(t,W.normalizeUnit)};return kt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return kt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Fu(this.matrix,t),kt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=jg(this.normalize().shiftToAll().toObject());return kt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>W.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of Xt)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;Bt(i[o])&&(a+=i[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else Bt(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return Fu(this.matrix,r),kt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return kt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Xt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const mr="Invalid Interval";function zg(e,t){return!e||!e.isValid?ie.invalid("missing or invalid start"):!t||!t.isValid?ie.invalid("missing or invalid end"):t<e?ie.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ie{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new pe("need to specify a reason the Interval is invalid");const n=t instanceof Ze?t:new Ze(t,r);if(X.throwOnInvalid)throw new fp(n);return new ie({invalid:n})}static fromDateTimes(t,r){const n=Jr(t),i=Jr(r),s=zg(n,i);return s??new ie({start:n,end:i})}static after(t,r){const n=W.fromDurationLike(r),i=Jr(t);return ie.fromDateTimes(i,i.plus(n))}static before(t,r){const n=W.fromDurationLike(r),i=Jr(t);return ie.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,o;try{s=I.fromISO(n,r),o=s.isValid}catch{o=!1}let a,u;try{a=I.fromISO(i,r),u=a.isValid}catch{u=!1}if(o&&u)return ie.fromDateTimes(s,a);if(o){const l=W.fromISO(i,r);if(l.isValid)return ie.after(s,l)}else if(u){const l=W.fromISO(n,r);if(l.isValid)return ie.before(a,l)}}return ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ie.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Jr).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(ie.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(t){const r=W.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(ie.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ie.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ie.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(ie.fromDateTimes(r,u.time)),r=null);return ie.merge(i)}difference(...t){return ie.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:mr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Ni,r={}){return this.isValid?ge.create(this.s.loc.clone(r),t).formatInterval(this):mr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:mr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:mr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:mr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:mr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):W.invalid(this.invalidReason)}mapEndpoints(t){return ie.fromDateTimes(t(this.s),t(this.e))}}class ti{static hasDST(t=X.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Dt.isValidZone(t)}static normalizeZone(t){return xt(t,X.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||K.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||K.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||K.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||K.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||K.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||K.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||K.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return K.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return K.create(r,null,"gregory").eras(t)}static features(){return{relative:Od(),localeWeek:Rd()}}}function xu(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(W.fromMillis(n).as("days"))}function qg(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const d=xu(u,l);return(d-d%7)/7}],["days",xu]],i={},s=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Gg(e,t,r,n){let[i,s,o,a]=qg(e,t,r);const u=t-i,l=r.filter(c=>["hours","minutes","seconds","milliseconds"].indexOf(c)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const d=W.fromObject(s,n);return l.length>0?W.fromMillis(u,n).shiftTo(...l).plus(d):d}const Hg="missing Intl.DateTimeFormat.formatToParts support";function q(e,t=r=>r){return{regex:e,deser:([r])=>t(Ip(r))}}const Kg=" ",nf=`[ ${Kg}]`,sf=new RegExp(nf,"g");function Zg(e){return e.replace(/\./g,"\\.?").replace(sf,nf)}function Mu(e){return e.replace(/\./g,"").replace(sf," ").toLowerCase()}function He(e,t){return e===null?null:{regex:RegExp(e.map(Zg).join("|")),deser:([r])=>e.findIndex(n=>Mu(r)===Mu(n))+t}}function Nu(e,t){return{regex:e,deser:([,r,n])=>is(r,n),groups:t}}function ri(e){return{regex:e,deser:([t])=>t}}function Yg(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Jg(e,t){const r=Ge(t),n=Ge(t,"{2}"),i=Ge(t,"{3}"),s=Ge(t,"{4}"),o=Ge(t,"{6}"),a=Ge(t,"{1,2}"),u=Ge(t,"{1,3}"),l=Ge(t,"{1,6}"),d=Ge(t,"{1,9}"),c=Ge(t,"{2,4}"),f=Ge(t,"{4,6}"),m=E=>({regex:RegExp(Yg(E.val)),deser:([D])=>D,literal:!0}),y=(E=>{if(e.literal)return m(E);switch(E.val){case"G":return He(t.eras("short"),0);case"GG":return He(t.eras("long"),0);case"y":return q(l);case"yy":return q(c,To);case"yyyy":return q(s);case"yyyyy":return q(f);case"yyyyyy":return q(o);case"M":return q(a);case"MM":return q(n);case"MMM":return He(t.months("short",!0),1);case"MMMM":return He(t.months("long",!0),1);case"L":return q(a);case"LL":return q(n);case"LLL":return He(t.months("short",!1),1);case"LLLL":return He(t.months("long",!1),1);case"d":return q(a);case"dd":return q(n);case"o":return q(u);case"ooo":return q(i);case"HH":return q(n);case"H":return q(a);case"hh":return q(n);case"h":return q(a);case"mm":return q(n);case"m":return q(a);case"q":return q(a);case"qq":return q(n);case"s":return q(a);case"ss":return q(n);case"S":return q(u);case"SSS":return q(i);case"u":return ri(d);case"uu":return ri(a);case"uuu":return q(r);case"a":return He(t.meridiems(),0);case"kkkk":return q(s);case"kk":return q(c,To);case"W":return q(a);case"WW":return q(n);case"E":case"c":return q(r);case"EEE":return He(t.weekdays("short",!1),1);case"EEEE":return He(t.weekdays("long",!1),1);case"ccc":return He(t.weekdays("short",!0),1);case"cccc":return He(t.weekdays("long",!0),1);case"Z":case"ZZ":return Nu(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Nu(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return ri(/[a-z_+-/]{1,256}?/i);case" ":return ri(/[^\S\n\r]/);default:return m(E)}})(e)||{invalidReason:Hg};return y.token=e,y}const Qg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Xg(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=Qg[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function e1(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function t1(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const o in r)if(Pr(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+u))),s+=u}return[n,i]}else return[n,{}]}function r1(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return L(e.z)||(r=Dt.create(e.z)),L(e.Z)||(r||(r=new Ee(e.Z)),n=e.Z),L(e.q)||(e.M=(e.q-1)*3+1),L(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),L(e.u)||(e.S=aa(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),r,n]}let Ws=null;function n1(){return Ws||(Ws=I.fromMillis(1555555555555)),Ws}function i1(e,t){if(e.literal)return e;const r=ge.macroTokenToFormatOpts(e.val),n=lf(r,t);return n==null||n.includes(void 0)?e:n}function of(e,t){return Array.prototype.concat(...e.map(r=>i1(r,t)))}class af{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=of(ge.parseFormat(r),t),this.units=this.tokens.map(n=>Jg(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=e1(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=t1(t,this.regex,this.handlers),[i,s,o]=n?r1(n):[null,null,void 0];if(Pr(n,"a")&&Pr(n,"H"))throw new $r("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function uf(e,t,r){return new af(e,r).explainFromTokens(t)}function s1(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=uf(e,t,r);return[n,i,s,o]}function lf(e,t){if(!e)return null;const n=ge.create(t,e).dtFormatter(n1()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>Xg(o,e,s))}const js="Invalid DateTime",Bu=864e13;function rn(e){return new Ze("unsupported zone",`the zone "${e.name}" is not supported`)}function zs(e){return e.weekData===null&&(e.weekData=Bi(e.c)),e.weekData}function qs(e){return e.localWeekData===null&&(e.localWeekData=Bi(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Kt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function cf(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function ni(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Ei(e,t,r){return cf(ns(e),t,r)}function Pu(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,Pi(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=W.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ns(s);let[u,l]=cf(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function pr(e,t,r,n,i,s){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=I.fromObject(e,{...r,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return I.invalid(new Ze("unparsable",`the input "${i}" can't be parsed as ${n}`))}function ii(e,t,r=!0){return e.isValid?ge.create(K.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Gs(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=ue(e.c.year,r?6:4),t?(n+="-",n+=ue(e.c.month),n+="-",n+=ue(e.c.day)):(n+=ue(e.c.month),n+=ue(e.c.day)),n}function Lu(e,t,r,n,i,s){let o=ue(e.c.hour);return t?(o+=":",o+=ue(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=ue(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=ue(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=ue(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=ue(Math.trunc(-e.o/60)),o+=":",o+=ue(Math.trunc(-e.o%60))):(o+="+",o+=ue(Math.trunc(e.o/60)),o+=":",o+=ue(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const df={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},o1={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},a1={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ff=["year","month","day","hour","minute","second","millisecond"],u1=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],l1=["year","ordinal","hour","minute","second","millisecond"];function c1(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new fd(e);return t}function Iu(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return c1(e)}}function d1(e){return Ai[e]||(vi===void 0&&(vi=X.now()),Ai[e]=e.offset(vi)),Ai[e]}function _u(e,t){const r=xt(t.zone,X.defaultZone);if(!r.isValid)return I.invalid(rn(r));const n=K.fromObject(t);let i,s;if(L(e.year))i=X.now();else{for(const u of ff)L(e[u])&&(e[u]=df[u]);const o=Id(e)||_d(e);if(o)return I.invalid(o);const a=d1(r);[i,s]=Ei(e,a,r)}return new I({ts:i,zone:r,loc:n,o:s})}function Ou(e,t,r){const n=L(r.round)?!0:r.round,i=(o,a)=>(o=ua(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,r.units[r.units.length-1])}function Ru(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let vi,Ai={};class I{constructor(t){const r=t.zone||X.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Ze("invalid input"):null)||(r.isValid?null:rn(r));this.ts=L(t.ts)?X.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const a=Bt(t.o)&&!t.old?t.o:r.offset(this.ts);i=ni(this.ts,a),n=Number.isNaN(i.year)?new Ze("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=t.loc||K.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=Ru(arguments),[n,i,s,o,a,u,l]=r;return _u({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Ru(arguments),[n,i,s,o,a,u,l]=r;return t.zone=Ee.utcInstance,_u({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Up(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const i=xt(r.zone,X.defaultZone);return i.isValid?new I({ts:n,zone:i,loc:K.fromObject(r)}):I.invalid(rn(i))}static fromMillis(t,r={}){if(Bt(t))return t<-Bu||t>Bu?I.invalid("Timestamp out of range"):new I({ts:t,zone:xt(r.zone,X.defaultZone),loc:K.fromObject(r)});throw new pe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Bt(t))return new I({ts:t*1e3,zone:xt(r.zone,X.defaultZone),loc:K.fromObject(r)});throw new pe("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=xt(r.zone,X.defaultZone);if(!n.isValid)return I.invalid(rn(n));const i=K.fromObject(r),s=Li(t,Iu),{minDaysInFirstWeek:o,startOfWeek:a}=Au(s,i),u=X.now(),l=L(r.specificOffset)?n.offset(u):r.specificOffset,d=!L(s.ordinal),c=!L(s.year),f=!L(s.month)||!L(s.day),m=c||f,g=s.weekYear||s.weekNumber;if((m||d)&&g)throw new $r("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new $r("Can't mix ordinal dates with month/day");const y=g||s.weekday&&!m;let E,D,A=ni(u,l);y?(E=u1,D=o1,A=Bi(A,o,a)):d?(E=l1,D=a1,A=Us(A)):(E=ff,D=df);let x=!1;for(const rt of E){const zt=s[rt];L(zt)?x?s[rt]=D[rt]:s[rt]=A[rt]:x=!0}const P=y?Op(s,o,a):d?Rp(s):Id(s),j=P||_d(s);if(j)return I.invalid(j);const be=y?Eu(s,o,a):d?vu(s):s,[$t,Ae]=Ei(be,l,n),Fe=new I({ts:$t,zone:n,o:Ae,loc:i});return s.weekday&&m&&t.weekday!==Fe.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Fe.toISO()}`):Fe.isValid?Fe:I.invalid(Fe.invalid)}static fromISO(t,r={}){const[n,i]=xg(t);return pr(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=Mg(t);return pr(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=Ng(t);return pr(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(L(t)||L(r))throw new pe("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=K.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,d]=s1(o,t,r);return d?I.invalid(d):pr(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=Rg(t);return pr(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new pe("need to specify a reason the DateTime is invalid");const n=t instanceof Ze?t:new Ze(t,r);if(X.throwOnInvalid)throw new dp(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=lf(t,K.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return of(ge.parseFormat(t),K.fromObject(r)).map(i=>i.val).join("")}static resetCache(){vi=void 0,Ai={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?zs(this).weekYear:NaN}get weekNumber(){return this.isValid?zs(this).weekNumber:NaN}get weekday(){return this.isValid?zs(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?qs(this).weekday:NaN}get localWeekNumber(){return this.isValid?qs(this).weekNumber:NaN}get localWeekYear(){return this.isValid?qs(this).weekYear:NaN}get ordinal(){return this.isValid?Us(this.c).ordinal:NaN}get monthShort(){return this.isValid?ti.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ti.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ti.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ti.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=ns(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,d=ni(u,o),c=ni(l,a);return d.hour===c.hour&&d.minute===c.minute&&d.second===c.second&&d.millisecond===c.millisecond?[Kt(this,{ts:u}),Kt(this,{ts:l})]:[this]}get isInLeapYear(){return _n(this.year)}get daysInMonth(){return Pi(this.year,this.month)}get daysInYear(){return this.isValid?kr(this.year):NaN}get weeksInWeekYear(){return this.isValid?wn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=ge.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Ee.instance(t),r)}toLocal(){return this.setZone(X.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=xt(t,X.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),o=this.toObject();[i]=Ei(o,s,t)}return Kt(this,{ts:i,zone:t})}else return I.invalid(rn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Kt(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Li(t,Iu),{minDaysInFirstWeek:n,startOfWeek:i}=Au(r,this.loc),s=!L(r.weekYear)||!L(r.weekNumber)||!L(r.weekday),o=!L(r.ordinal),a=!L(r.year),u=!L(r.month)||!L(r.day),l=a||u,d=r.weekYear||r.weekNumber;if((l||o)&&d)throw new $r("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new $r("Can't mix ordinal dates with month/day");let c;s?c=Eu({...Bi(this.c,n,i),...r},n,i):L(r.ordinal)?(c={...this.toObject(),...r},L(r.day)&&(c.day=Math.min(Pi(c.year,c.month),c.day))):c=vu({...Us(this.c),...r});const[f,m]=Ei(c,this.o,this.zone);return Kt(this,{ts:f,o:m})}plus(t){if(!this.isValid)return this;const r=W.fromDurationLike(t);return Kt(this,Pu(this,r))}minus(t){if(!this.isValid)return this;const r=W.fromDurationLike(t).negate();return Kt(this,Pu(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=W.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ge.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):js}toLocaleString(t=Ni,r={}){return this.isValid?ge.create(this.loc.clone(r),t).formatDateTime(this):js}toLocaleParts(t={}){return this.isValid?ge.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Gs(this,o);return a+="T",a+=Lu(this,o,r,n,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Gs(this,t==="extended"):null}toISOWeekDate(){return ii(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Lu(this,o==="extended",r,t,n,s):null}toRFC2822(){return ii(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return ii(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Gs(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),ii(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():js}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return W.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=Wp(r).map(W.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Gg(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ie.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Ou(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Ou(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new pe("min requires all arguments be DateTimes");return Cu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new pe("max requires all arguments be DateTimes");return Cu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=K.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return uf(o,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,s=K.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new af(s,t)}static fromFormatParser(t,r,n={}){if(L(t)||L(r))throw new pe("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=n,o=K.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(r.locale))throw new pe(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:d}=r.explainFromTokens(t);return d?I.invalid(d):pr(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Ni}static get DATE_MED(){return hd}static get DATE_MED_WITH_WEEKDAY(){return mp}static get DATE_FULL(){return md}static get DATE_HUGE(){return pd}static get TIME_SIMPLE(){return gd}static get TIME_WITH_SECONDS(){return yd}static get TIME_WITH_SHORT_OFFSET(){return wd}static get TIME_WITH_LONG_OFFSET(){return bd}static get TIME_24_SIMPLE(){return Dd}static get TIME_24_WITH_SECONDS(){return Ed}static get TIME_24_WITH_SHORT_OFFSET(){return vd}static get TIME_24_WITH_LONG_OFFSET(){return Ad}static get DATETIME_SHORT(){return Cd}static get DATETIME_SHORT_WITH_SECONDS(){return $d}static get DATETIME_MED(){return Sd}static get DATETIME_MED_WITH_SECONDS(){return kd}static get DATETIME_MED_WITH_WEEKDAY(){return pp}static get DATETIME_FULL(){return Td}static get DATETIME_FULL_WITH_SECONDS(){return Fd}static get DATETIME_HUGE(){return xd}static get DATETIME_HUGE_WITH_SECONDS(){return Md}}function Jr(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&Bt(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new pe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var N;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(N||(N={}));N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";const hf=[N.Milliseconds,N.Seconds,N.Minutes,N.Hours,N.Days,N.Weeks,N.Months,N.Quarters,N.Years];N.Milliseconds+"",N.Seconds+"",N.Minutes+"",N.Hours+"",N.Days+"",N.Weeks+"",N.Months+"",N.Quarters+"",N.Years+"";function f1(e){return hf.filter(t=>e[t])}function Fo(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function h1(e){return Fo(Math.max(e-.4,0),{roundToDigits:0})}function Vu(e){return e===0?0:Math.sign(e)}function Lr(e,t,r={}){const n={},i={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=W.fromObject(e).as(N.Milliseconds);const u=f1(t).reverse(),l=Vu(a);u.forEach((m,g)=>{const y=g===u.length-1;if(s&&o||s)n[m]=1/0;else if(o)n[m]=-1/0;else if(m===N.Milliseconds)n.milliseconds=Fo(a,i);else{const E=W.fromObject({milliseconds:a}).as(m),D=Math.sign(E),A=Math.abs(E),x=y?Fo(A,i):Math.floor(i.roundToDigits==null?A:h1(A)),P=x===0?0:x*D;n[m]=P,a-=W.fromObject({[m]:P}).as(N.Milliseconds),l!==Vu(a)&&(a=0)}});let d=!1;const c=[],f=hf.toReversed().filter(m=>n[m]?(d=!0,!0):d?(c.push(m),!1):!0);if(f.length<u.length){const m={};f.forEach(y=>m[y]=!0);const g=Lr(e,m,i);return c.forEach(y=>g[y]=0),g}return n}function bn(e){const t=new dd,r=Lr(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}var m1=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Et;(function(e){e.Node="node",e.Web="web"})(Et||(Et={}));function p1(){return m1?Et.Node:Et.Web}const mf=p1();function g1(e){return mf===e}function pf(e){return e[mf]()}let $=class extends Error{name="AssertionError";constructor(t,r){super(Xi(r,t)||"Assertion failed.")}};const p=Symbol("auto guard");function h(){return p}function os(e,t,r){return t in e&&e[t]!==p?e[t]:r()}function y1(e,t){st(e,"array",t)}function w1(e,t){st(e,"bigint",t)}function b1(e,t){st(e,"boolean",t)}function D1(e,t){st(e,"function",t)}function E1(e,t){st(e,"number",t)}function v1(e,t){st(e,"object",t)}function A1(e,t){st(e,"string",t)}function C1(e,t){st(e,"symbol",t)}function $1(e,t){st(e,"undefined",t)}function S1(e,t){st(e,"null",t)}function k1(e,t){it(e,"array",t)}function T1(e,t){it(e,"bigint",t)}function F1(e,t){it(e,"boolean",t)}function x1(e,t){it(e,"function",t)}function M1(e,t){if(it(e,"number",t),isNaN(e))throw new $("Value is NaN.",t)}function N1(e,t){it(e,"object",t)}function B1(e,t){it(e,"string",t)}function P1(e,t){it(e,"symbol",t)}function L1(e,t){it(e,"undefined",t)}function I1(e,t){it(e,"null",t)}const _1={isArray:k1,isBigInt:T1,isBoolean:F1,isFunction:x1,isNull:I1,isNumber:M1,isObject:N1,isString:B1,isSymbol:P1,isUndefined:L1,isNotArray:y1,isNotBigInt:w1,isNotBoolean:b1,isNotFunction:D1,isNotNull:S1,isNotNumber:E1,isNotObject:v1,isNotString:A1,isNotSymbol:C1,isNotUndefined:$1},gf={assert:_1,check:{isArray:h(),isBigInt:p,isBoolean:p,isFunction:h(),isNull:p,isNumber:p,isObject:p,isString:p,isSymbol:p,isUndefined:p,isNotArray:h(),isNotBigInt:h(),isNotBoolean:h(),isNotFunction:h(),isNotNull:h(),isNotNumber:h(),isNotObject:h(),isNotString:h(),isNotSymbol:h(),isNotUndefined:h()},assertWrap:{isArray:h(),isBigInt:p,isBoolean:p,isFunction:h(),isNull:p,isNumber:p,isObject:p,isString:p,isSymbol:h(),isUndefined:p,isNotArray:h(),isNotBigInt:h(),isNotBoolean:h(),isNotFunction:h(),isNotNull:h(),isNotNumber:h(),isNotObject:h(),isNotString:h(),isNotSymbol:h(),isNotUndefined:h()},checkWrap:{isArray:h(),isBigInt:p,isBoolean:p,isFunction:h(),isNull:p,isNumber:p,isObject:p,isString:p,isSymbol:p,isUndefined:void 0,isNotArray:h(),isNotBigInt:h(),isNotBoolean:h(),isNotFunction:h(),isNotNull:h(),isNotNumber:h(),isNotObject:h(),isNotString:h(),isNotSymbol:h(),isNotUndefined:void 0},waitUntil:{isArray:h(),isBigInt:p,isBoolean:p,isFunction:h(),isNull:p,isNumber:p,isObject:p,isString:p,isSymbol:p,isUndefined:p,isNotArray:h(),isNotBigInt:h(),isNotBoolean:h(),isNotFunction:h(),isNotNull:h(),isNotNumber:h(),isNotObject:h(),isNotString:h(),isNotSymbol:h(),isNotUndefined:h()}};var Ii;(function(e){e.String="string",e.Number="number",e.Bigint="bigint",e.Boolean="boolean",e.Symbol="symbol",e.Undefined="undefined",e.Object="object",e.Function="function",e.Array="array",e.Null="null"})(Ii||(Ii={}));function _i(e){return e===null?Ii.Null:Array.isArray(e)?Ii.Array:typeof e}function it(e,t,r){const n=_i(e);if(n!==t)throw new $(`'${F(e)}' is '${n}', not '${t}'.`,r)}function st(e,t,r){const n=_i(e);if(n===t)throw new $(`'${F(e)}' is '${n}'.`,r)}function O1(e,t){if(e)throw new $(`'${F(e)}' is not truthy.`,t)}function R1(e,t){if(!e)throw new $(`'${F(e)}' is not truthy.`,t)}function V1(e,t){if(e!==!0)throw new $(`'${F(e)}' is not true.`,t)}function U1(e,t){if(e!==!1)throw new $(`'${F(e)}' is not false.`,t)}const W1={isFalse:U1,isFalsy:O1,isTrue:V1,isTruthy:R1},yf={assert:W1,check:{isFalse:p,isFalsy:p,isTrue:p,isTruthy:h()},assertWrap:{isFalse:p,isFalsy:h(),isTrue:p,isTruthy:h()},checkWrap:{isFalse:p,isFalsy:h(),isTrue:p,isTruthy:h()},waitUntil:{isFalse:p,isFalsy:h(),isTrue:p,isTruthy:h()}};function j1(e,t,r){const n=`${F(e)} does not end with ${F(t)}}`;if(typeof e=="string"){if(!e.endsWith(t))throw new $(n,r)}else if(e[e.length-1]!==t)throw new $(n,r)}function z1(e,t,r){const n=`${F(e)} ends with ${F(t)}}`;if(typeof e=="string"){if(e.endsWith(t))throw new $(n,r)}else if(e[e.length-1]===t)throw new $(n,r)}function q1(e,t,r){const n=`${F(e)} does not start with ${F(t)}}`;if(typeof e=="string"){if(!e.startsWith(t))throw new $(n,r)}else if(e[0]!==t)throw new $(n,r)}function G1(e,t,r){const n=`${F(e)} starts with ${F(t)}}`;if(typeof e=="string"){if(e.startsWith(t))throw new $(n,r)}else if(e[0]===t)throw new $(n,r)}const H1={endsWith:j1,endsWithout:z1,startsWith:q1,startsWithout:G1},wf={assert:H1,check:{endsWith:h(),endsWithout:h(),startsWith:h(),startsWithout:h()},assertWrap:{endsWith:h(),endsWithout:h(),startsWith:h(),startsWithout:h()},checkWrap:{endsWith:h(),endsWithout:h(),startsWith:h(),startsWithout:h()},waitUntil:{endsWith:h(),endsWithout:h(),startsWith:h(),startsWithout:h()}};function as(e,t,r){const n=ud(t);if(!n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function K1(e,t,r){try{as(e,t)}catch{return}const n=ud(t);throw new $(`${String(e)} is an enum value in '${n.join(",")}'`,r)}const Z1={isEnumValue:as,isNotEnumValue:K1},bf={assert:Z1,check:{isEnumValue:h(),isNotEnumValue:h()},assertWrap:{isEnumValue:h(),isNotEnumValue:h()},checkWrap:{isEnumValue:h(),isNotEnumValue:h()},waitUntil:{isEnumValue:h(),isNotEnumValue:h()}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Uu(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Df(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Df.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Ef=typeof WeakMap=="function"?WeakMap:Df;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Wu(e,t,r){if(!r||Ir(e)||Ir(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function si(e,t,r,n){if(!(!r||Ir(e)||Ir(t))){var i=r.get(e);i?i.set(t,n):(i=new Ef,i.set(t,n),r.set(e,i))}}function Vn(e,t,r){if(r&&r.comparator)return ju(e,t,r);var n=vf(e,t);return n!==null?n:ju(e,t,r)}function vf(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Ir(e)||Ir(t)?!1:null}/*!
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
*/function ju(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Ef;var n=r&&r.comparator,i=Wu(e,t,r.memoize);if(i!==null)return i;var s=Wu(t,e,r.memoize);if(s!==null)return s;if(n){var o=n(e,t);if(o===!1||o===!0)return si(e,t,r.memoize,o),o;var a=vf(e,t);if(a!==null)return a}var u=Uu(e);if(u!==Uu(t))return si(e,t,r.memoize,!1),!1;si(e,t,r.memoize,!0);var l=Y1(e,t,u,r);return si(e,t,r.memoize,l),l}function Y1(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Vn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Af(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return nr(e,t,n);case"RegExp":return J1(e,t);case"Generator":return Q1(e,t,n);case"DataView":return nr(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return nr(new Uint8Array(e),new Uint8Array(t),n);case"Set":return zu(e,t,n);case"Map":return zu(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return ey(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function J1(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function zu(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),nr(n.sort(),i.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function nr(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(Vn(e[i],t[i],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Q1(e,t,r){return nr(xo(e),xo(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function X1(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function qu(e){if(X1(e))try{return xo(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function xo(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Gu(e){var t=[];for(var r in e)t.push(r);return t}function Hu(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Af(e,t,r,n){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Vn(e[r[s]],t[r[s]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ey(e,t,r){var n=Gu(e),i=Gu(t),s=Hu(e),o=Hu(t);if(n=n.concat(s),i=i.concat(o),n.length&&n.length===i.length)return nr(Ku(n).sort(),Ku(i).sort())===!1?!1:Af(e,t,n,r);var a=qu(e),u=qu(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),nr(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function Ir(e){return e===null||typeof e!="object"}function Ku(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}function Cf(e,t,r){if(e!==t)throw new $(`

${F(e)}

does not strictly equal

${F(t)}

`,r)}function ty(e,t,r){if(e===t)throw new $(`

${F(e)}

strictly equals

${F(t)}

`,r)}function ry(e,t,r){if(e!=t)throw new $(`

${F(e)}

does not loosely equal

${F(t)}

`,r)}function ny(e,t,r){if(e==t)throw new $(`

${F(e)}

loosely equals

${F(t)}

`,r)}function fa(e,t,r){if(!Vn(e,t))throw new $(`

${F(e)}

does not deeply equal

${F(t)}

`,r)}function iy(e,t,r){if(Vn(e,t))throw new $(`

${F(e)}

deeply equals

${F(t)}

`,r)}const sy={strictEquals:Cf,notStrictEquals:ty,looseEquals:ry,notLooseEquals:ny,deepEquals:fa,notDeepEquals:iy},$f={assert:sy,check:{strictEquals:h(),notStrictEquals:p,looseEquals:p,notLooseEquals:p,deepEquals:h(),notDeepEquals:p},assertWrap:{strictEquals:h(),notStrictEquals:p,looseEquals:p,notLooseEquals:p,deepEquals:h(),notDeepEquals:p},checkWrap:{strictEquals:h(),notStrictEquals:p,looseEquals:p,notLooseEquals:p,deepEquals:h(),notDeepEquals:p},waitUntil:{strictEquals:h(),notStrictEquals:p,looseEquals:p,notLooseEquals:p,deepEquals:h(),notDeepEquals:p}};function Sf(e,t,r){if(!e||typeof e!="object")throw new $(`${F(e)} is not an object.`,r);if(!t||typeof t!="object")throw new $(`${F(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];try{Cf(s,o)}catch{throw new $(`Entries are not equal at key '${String(i)}'.`,r)}})}function oy(e,t,r){try{Sf(e,t)}catch{return}throw new $("Entries are equal.",r)}const ay={entriesEqual:Sf,notEntriesEqual:oy},kf={assert:ay,check:{entriesEqual:h(),notEntriesEqual:p},assertWrap:{entriesEqual:h(),notEntriesEqual:p},checkWrap:{entriesEqual:h(),notEntriesEqual:p},waitUntil:{entriesEqual:h(),notEntriesEqual:p}};function Zu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ha(e,t,r){try{ly(e,t)}catch(n){throw new $(je(n),r)}}function uy(e,t,r){try{ha(e,t)}catch{return}throw new $("Values are JSON equal.",r)}function ly(e,t){const r=Zu(e,t);if(!(e===t||r)){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),i=Object.keys(t).sort();if(n.length||i.length){if(!Zu(n,i))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{ha(e[o],t[o])}catch(a){throw new Error(`JSON objects are not equal at key '${o}': ${je(a)}`)}})}}throw new Error("Values are not JSON equal.")}}const cy={jsonEquals:ha,notJsonEquals:uy},Tf={assert:cy,check:{jsonEquals:h(),notJsonEquals:p},assertWrap:{jsonEquals:h(),notJsonEquals:p},checkWrap:{jsonEquals:h(),notJsonEquals:p},waitUntil:{jsonEquals:h(),notJsonEquals:p}};function us(e,t,r){try{if(!Reflect.ownKeys(e).map(i=>e[i]).includes(t))throw new Error("fail")}catch{throw new $(`'${F(e)}' does not have value '${F(t)}'.`,r)}}function Ff(e,t,r){try{us(e,t)}catch{return}throw new $(`'${F(e)}' has value '${F(t)}'.`,r)}function dy(e,t,r){t.forEach(n=>us(e,n,r))}function fy(e,t,r){t.forEach(n=>Ff(e,n,r))}function ma(e,t,r){if(typeof t=="string"){if(!t.includes(e))throw new $(`${F(e)} is not in '${t}'.`,r)}else us(t,e,r)}function hy(e,t,r){try{ma(e,t)}catch{return}throw new $(`${F(e)} is not in ${F(t)}.`,r)}function xf(e,t){const r=e;if(r){if(typeof r!="string"&&typeof r!="object")throw new TypeError(`Cannot check if '${F(r)}' is empty.`);if(typeof r=="string"&&r||Array.isArray(r)&&r.length||r instanceof Map&&r.size||r instanceof Set&&r.size||r&&typeof r=="object"&&Object.keys(r).length)throw new $(`'${F(e)}' is not empty.`,t)}else return}function my(e,t){try{xf(e)}catch{return}throw new $(`'${F(e)}' is empty.`,t)}const py={hasValue:us,lacksValue:Ff,hasValues:dy,lacksValues:fy,isIn:ma,isNotIn:hy,isEmpty:xf,isNotEmpty:my},Mf={assert:py,check:{hasValue:p,lacksValue:p,hasValues:p,lacksValues:p,isIn:h(),isNotIn:h(),isEmpty:h(),isNotEmpty:h()},assertWrap:{hasValue:p,lacksValue:p,hasValues:p,lacksValues:p,isIn:h(),isNotIn:h(),isEmpty:h(),isNotEmpty:h()},checkWrap:{hasValue:p,lacksValue:p,hasValues:p,lacksValues:p,isIn:h(),isNotIn:h(),isEmpty:h(),isNotEmpty:h()},waitUntil:{hasValue:p,lacksValue:p,hasValues:p,lacksValues:p,isIn:h(),isNotIn:h(),isEmpty:h(),isNotEmpty:h()}};function gy(e,t){try{as(e,k)}catch{throw new $(`${F(e)} is not a valid http status.`,t)}}function yy(e,t,r){try{as(e,k),ma(e,cp[t])}catch{throw new $(`${F(e)} is not a '${t}' http status.`,r)}}const wy={isHttpStatus:gy,isHttpStatusCategory:yy},Nf={assert:wy,check:{isHttpStatus:p,isHttpStatusCategory:h()},assertWrap:{isHttpStatus:p,isHttpStatusCategory:h()},checkWrap:{isHttpStatus:p,isHttpStatusCategory:h()},waitUntil:{isHttpStatus:p,isHttpStatusCategory:h()}};function by(e,t,r){if(!(e instanceof t))throw new $(`'${F(e)}' is not an instance of '${t.name}'`,r)}function Dy(e,t,r){if(e instanceof t)throw new $(`'${F(e)}' is an instance of '${t.name}'`,r)}const Ey={instanceOf:by,notInstanceOf:Dy},Bf={assert:Ey,check:{instanceOf:h(),notInstanceOf:h()},assertWrap:{instanceOf:h(),notInstanceOf:h()},checkWrap:{instanceOf:h(),notInstanceOf:h()},waitUntil:{instanceOf:h(),notInstanceOf:h()}};function vy(e,t){return Object.entries(e).reduce((n,[i,s])=>(n[i]=os(t,i,()=>Pf(s)),n),{})}function Pf(e){return(...t)=>Ay(e,...t)}function Ay(e,t,...r){try{return e(t,...r),!0}catch{return!1}}function Lf(e,t,r){try{ls(t,e)}catch{throw new $(`'${String(e)}' is not a key of '${F(t)}'.`,r)}}function Cy(e,t,r){try{Lf(e,t)}catch{return}throw new $(`'${String(e)}' is a key of '${F(t)}'.`,r)}const $y=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ls(e,t,r){const n=`'${F(e)}' does not have key '${String(t)}'.`;if(!$y.some(s=>{try{return s(e,t)}catch{return!1}}))throw new $(n,r)}function Sy(e,t,r){try{ls(e,t)}catch{return}throw new $(`'${F(e)}' has key '${String(t)}'.`,r)}const If=Pf(ls);function ky(e,t,r){const n=t.filter(i=>!If(e,i));if(n.length)throw new $(`'${F(e)}' does not have keys '${n.join(",")}'.`,r)}function Ty(e,t,r){const n=t.filter(i=>If(e,i));if(n.length)throw new $(`'${F(e)}' does not lack keys '${n.join(",")}'.`,r)}const Fy={isKeyOf:Lf,isNotKeyOf:Cy,hasKey:ls,lacksKey:Sy,hasKeys:ky,lacksKeys:Ty},_f={assert:Fy,check:{isKeyOf:h(),isNotKeyOf:h(),hasKey:h(),lacksKey:h(),hasKeys:h(),lacksKeys:h()},assertWrap:{isKeyOf:h(),isNotKeyOf:h(),hasKey:h(),lacksKey:h(),hasKeys:h(),lacksKeys:h()},checkWrap:{isKeyOf:h(),isNotKeyOf:h(),hasKey:h(),lacksKey:h(),hasKeys:h(),lacksKeys:h()},waitUntil:{isKeyOf:h(),isNotKeyOf:h(),hasKey:h(),lacksKey:h(),hasKeys:h(),lacksKeys:h()}};function xy(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ae(e).length)<t)throw new $(`Length '${e.length}' is not at least '${t}'.`,r)}function My(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ae(e).length)!==t)throw new $(`Length '${e.length}' is not exactly '${t}'.`,r)}const Ny={isLengthAtLeast:xy,isLengthExactly:My},Of={assert:Ny,check:{isLengthAtLeast:h(),isLengthExactly:h()},assertWrap:{isLengthAtLeast:h(),isLengthExactly:h()},checkWrap:{isLengthAtLeast:h(),isLengthExactly:h()},waitUntil:{isLengthAtLeast:h(),isLengthExactly:h()}};function By(e,t){if(e==null)throw new $(`'${F(e)}' is not defined.`,t)}function Py(e,t){if(e!=null)throw new $(`'${F(e)}' is not a nullish.`,t)}const Ly={isDefined:By,isNullish:Py},Rf={assert:Ly,check:{isDefined:h(),isNullish:p},assertWrap:{isDefined:h(),isNullish:p},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:h(),isNullish:p}};function Iy(e,t,r){if(e<=t)throw new $(`${e} is not above ${t}`,r)}function _y(e,t,r){if(e<t)throw new $(`${e} is not at least ${t}`,r)}function Oy(e,t,r){if(e>=t)throw new $(`${e} is not below ${t}`,r)}function Ry(e,t,r){if(e>t)throw new $(`${e} is not at most ${t}`,r)}function Vy(e,t){if(!isNaN(e))throw new $(`${e} is not NaN`,t)}function Uy(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new $(`${e} is not finite`,t)}function Wy(e,t){if(e!==1/0&&e!==-1/0)throw new $(`${e} is not infinite`,t)}function jy(e,t,r,n){if(e<t-r||e>t+r)throw new $(`${e} is not within ±${r} of ${t}`,n)}function zy(e,t,r,n){if(e>=t-r&&e<=t+r)throw new $(`${e} is within ±${r} of ${t}`,n)}const qy={isAbove:Iy,isAtLeast:_y,isBelow:Oy,isAtMost:Ry,isNaN:Vy,isFinite:Uy,isInfinite:Wy,isApproximately:jy,isNotApproximately:zy},Vf={assert:qy,check:{isAbove:p,isAtLeast:p,isBelow:p,isAtMost:p,isNaN:p,isFinite:p,isInfinite:p,isApproximately:p,isNotApproximately:p},assertWrap:{isAbove:p,isAtLeast:p,isBelow:p,isAtMost:p,isNaN:p,isFinite:p,isInfinite:p,isApproximately:p,isNotApproximately:p},checkWrap:{isAbove:p,isAtLeast:p,isBelow:p,isAtMost:p,isNaN:p,isFinite:p,isInfinite:p,isApproximately:p,isNotApproximately:p},waitUntil:{isAbove:p,isAtLeast:p,isBelow:p,isAtMost:p,isNaN:p,isFinite:p,isInfinite:p,isApproximately:p,isNotApproximately:p}},Yu={interval:{milliseconds:100},timeout:{seconds:10}},Hs=Symbol("not set");async function Uf(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:s,options:o}=Hy(t),a=Lr(o.timeout,{milliseconds:!0}).milliseconds,u=Lr(o.interval,{milliseconds:!0});let l=Hs,d;async function c(){try{l=r?n():await n(),e(l,...i)}catch(m){l=Hs,d=we(m)}}const f=Date.now();for(;l===Hs;)if(await c(),await bn(u),Date.now()-f>=a){const g=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw es(d,g)}return l}function Gy(e,t){return Object.entries(e).reduce((n,[i,s])=>(n[i]=os(t,i,()=>Sr(s)),n),{})}function Sr(e,t=!1){return(...r)=>Uf(e,r,t)}function Hy(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Wf(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Wf(e){return{interval:e?.interval||Yu.interval,timeout:e?.timeout||Yu.timeout}}function Ky(e,t,r,n,i){return Un(...cs(e,t,r,n,i),!1)}function cs(e,t,r,n,i){const s=Array.isArray(r);return[s?e:fa,s?t:e,s?r:t,s?n:r,s?i:n]}function Un(e,t,r,n,i,s){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),s?a(l):a()}catch(l){u(new $(`Output from '${t.name}' did not produce expected output with input: ${F(r)}: ${je(l)}`,i))}});try{return e(o,n),s?o:void 0}catch(a){throw new $(`Output from '${t.name}' did not produce expected output with input: ${F(r)}: ${je(a)}`,i)}}function Zy(e,t,r,n,i){try{const s=Un(...cs(e,t,r,n,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Yy(e,t,r,n,i){return Un(...cs(e,t,r,n,i),!0)}function Jy(e,t,r,n,i){try{const s=Un(...cs(e,t,r,n,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const Ks=Symbol("not set");async function Qy(e,t,r,n,i,s){const o=Array.isArray(r),a=o?e:fa,u=o?t:e,l=o?r:t,d=o?n:r,c=Wf(o?i:n),f=o?s:i,m=Lr(c.timeout,{milliseconds:!0}).milliseconds,g=Lr(c.interval,{milliseconds:!0});let y=Ks,E;async function D(){try{y=await Un(a,u,l,d,void 0,!0)}catch(x){y=Ks,E=we(x)}}const A=Date.now();for(;y===Ks;)if(await D(),await bn(g),Date.now()-A>=m)throw es(E,Xi(f,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return y}const Xy={output:Ky},jf={assert:Xy,check:{output:Zy},assertWrap:{output:Yy},checkWrap:{output:Jy},waitUntil:{output:Qy}};function zf(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new $(`'${F(e)}' is not a Primitive.`,t)}function ew(e,t){try{zf(e)}catch{return}throw new $(`'${F(e)}' is a Primitive.`,t)}function qf(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new $(`'${F(e)}' is not a PropertyKey.`,t)}function tw(e,t){try{qf(e)}catch{return}throw new $(`'${F(e)}' is a PropertyKey.`,t)}const rw={isPropertyKey:qf,isNotPropertyKey:tw,isPrimitive:zf,isNotPrimitive:ew},Gf={assert:rw,check:{isNotPrimitive:h(),isNotPropertyKey:h(),isPrimitive:p,isPropertyKey:p},assertWrap:{isNotPrimitive:h(),isNotPropertyKey:h(),isPrimitive:p,isPropertyKey:p},checkWrap:{isNotPrimitive:h(),isNotPropertyKey:h(),isPrimitive:p,isPropertyKey:p},waitUntil:{isNotPrimitive:h(),isNotPropertyKey:h(),isPrimitive:p,isPropertyKey:p}};function pa(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new $(`'${F(e)}' is not a PromiseLike.`,t)}function Hf(e,t){try{pa(e)}catch{return}throw new $(`'${F(e)}' is a PromiseLike.`,t)}function Kf(e,t){if(!(e instanceof Promise))throw new $(`'${F(e)}' is not a Promise.`,t)}function Zf(e,t){if(e instanceof Promise)throw new $(`'${F(e)}' is a Promise.`,t)}const nw={isPromiseLike:pa,isNotPromiseLike:Hf,isPromise:Kf,isNotPromise:Zf},Yf={assert:nw,check:{isPromiseLike:p,isNotPromiseLike:h(),isPromise:p,isNotPromise:h()},assertWrap:{isPromiseLike:h(),isNotPromiseLike:h(),isPromise:h(),isNotPromise:h()},checkWrap:{isNotPromise:h(),isNotPromiseLike:h(),isPromise:p,isPromiseLike:p},waitUntil:{isPromiseLike:Sr(pa,!0),isNotPromiseLike:Sr(Hf,!0),isPromise:Sr(Kf,!0),isNotPromise:Sr(Zf,!0)}};function iw(e,t,r){if(!t.test(e))throw new $(`'${e}' does not match ${t}`,r)}function sw(e,t,r){if(t.test(e))throw new $(`'${e}' matches ${t}`,r)}const ow={matches:iw,mismatches:sw},Jf={assert:ow,check:{matches:p,mismatches:p},assertWrap:{matches:p,mismatches:p},checkWrap:{matches:p,mismatches:p},waitUntil:{matches:p,mismatches:p}};var $e;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})($e||($e={}));function Qf(e,t,r){Xf(e,{noError:"No error.",notInstance:`'${F(e)}' is not an error instance.`},t,r)}function Ju(e,t,r){Xf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${F(e)}' is not an error instance.`},t,r)}function Xf(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new $(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=je(e);if(typeof r.matchMessage=="string"){if(!i.includes(r.matchMessage))throw new $(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new $(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new $(t.notInstance,n);else throw new $(t.noError,n)}function ds(e,t,r,n){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=we(u)}try{Ju(i,r,n),e===$e.Assert?o():e===$e.Check?o(!0):o(i)}catch(u){e===$e.CheckWrap?o(void 0):e===$e.Check?o(!1):a(we(u))}})}catch(s){i=we(s)}try{return Ju(i,r,n),e===$e.Check?!0:e!==$e.Assert?i:void 0}catch(s){if(e===$e.CheckWrap)return;if(e===$e.Check)return!1;throw s}}function aw(e,t,r){return ds($e.Assert,e,t,r)}function uw(e,t){return ds($e.Check,e,t)}function lw(e,t,r){return ds($e.AssertWrap,e,t,r)}function cw(e,t,r){return ds($e.CheckWrap,e,t,r)}const dw=Sr(Qf);function fw(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${F(s)}'`);return dw(i,async()=>{try{await s();return}catch(u){return we(u)}},a,o)}const hw={throws:aw,isError:Qf},e0={assert:hw,check:{throws:uw,isError:p},assertWrap:{throws:lw,isError:p},checkWrap:{throws:cw,isError:p},waitUntil:{throws:fw,isError:p}},t0=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function mw(e,t){if(!String(e).match(t0))throw new $(`'${String(e)}' is not a UUID.`,t)}function pw(e,t){if(String(e).match(t0))throw new $(`'${String(e)}' is a UUID.`,t)}const gw={isUuid:mw,isNotUuid:pw},r0={assert:gw,check:{isUuid:p,isNotUuid:h()},assertWrap:{isUuid:p,isNotUuid:h()},checkWrap:{isUuid:p,isNotUuid:h()},waitUntil:{isUuid:p,isNotUuid:h()}},Wn={...yf.assert,...wf.assert,...kf.assert,...bf.assert,...Bf.assert,...Tf.assert,..._f.assert,...Of.assert,...Rf.assert,...Vf.assert,...Gf.assert,...Yf.assert,...Jf.assert,...gf.assert,...$f.assert,...e0.assert,...r0.assert,...Mf.assert,...Nf.assert,...jf.assert},fs=[yf,wf,kf,bf,Bf,Tf,_f,Of,Rf,Vf,Gf,Yf,Jf,gf,$f,e0,r0,Mf,Nf,jf],yw=Object.assign({},...fs.map(e=>e.check)),ww=Object.assign({},...fs.map(e=>e.assertWrap)),bw=Object.assign({},...fs.map(e=>e.checkWrap)),Dw=Object.assign({},...fs.map(e=>e.waitUntil)),Ew=vy(Wn,yw),v=Object.assign(function(t){return!!t},Ew);function vw(e,t,r){return Ci(e,t,r,new Set)}function Ci(e,t,r,n){if(e=Qu(e),t=Qu(t),v.isObject(e)&&v.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Ci(ae(e).sort(),ae(t).sort(),r,n))return!1;let i=!1;const s=ae(e).map(o=>{const a=Ci(e[o],t[o],r,n);return v.isPromise(a)&&(i=!0),a});return Xu(i,s)}else if(v.isArray(e)&&v.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Ci(o,t[a],r,n);return v.isPromise(u)&&(i=!0),u});return Xu(i,s)}else return r(e,t)}function Qu(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Xu(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(v.isTrue))}catch(i){n(we(i))}}):t.every(v.isTrue)}function Aw(e,t){return Object.entries(e).reduce((n,[i,s])=>(n[i]=os(t,i,()=>Cw(s)),n),{})}function Cw(e){return(...t)=>(e(...t),t[0])}const $w=Aw(Wn,ww);Object.assign(function(t,r){if(!t)throw new $("Assertion failed.",r);return t},$w);function Sw(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const kw={tsType:Sw},Tw={assert:kw,assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},Fw={fail:e=>{throw new $("Failure triggered.",e)}},xw={...Tw.assert,...Wn,...Fw},Kr=Object.assign(function(t,r){if(!t)throw new $("Assertion failed.",r)},xw);function Mw(e,t){return Object.entries(e).reduce((n,[i,s])=>(n[i]=os(t,i,()=>Nw(s)),n),{})}function Nw(e){return(...t)=>{try{return e(...t),t[0]}catch{return}}}const Bw=Mw(Wn,bw);Object.assign(function(t){if(t)return t},Bw);const Pw=Gy(Wn,Dw);Object.assign(function(t,r){return Uf((n,i)=>{if(!n)throw new $("Assertion failed.",i)},[t,r],!1)},Pw);function Lw(e,t){return v.hasKey(e,"entryType")&&e.entryType===t}function gr(e,t){return e.controlType===t}var H=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(H||{});const n0=Symbol("any-type"),Iw={checkbox:!1,color:"",dropdown:"",hidden:n0,number:0,text:""};function _w(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const s=Iw[i.controlType];s!==n0&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ow(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return v.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(n,a),s(a)}catch(a){o(we(a))}}):(e.set(n,i),i)}}function ga(e,t,r){if(t in e)return e[t];{const n=r();return v.isPromise(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(we(o))}}):(e[t]=n,n)}}function ya(e){return ae(e).map(t=>[t,e[t]])}function Mo(e){return Object.fromEntries(e)}function wa(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function i0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Rw({min:e,max:t}){const{min:r,max:n}=i0({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((d,c,f)=>d+c*256**f,0);while(l>=a);return r+l%i}const el=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function s0(e=16){let t="";for(let r=0;r<e;r++){const n=Rw({min:0,max:el.length-1});t+=el[n]}return t}function o0(e){if(v.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>je(t).trim()).join(`
`))}var tl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(tl||(tl={}));function Vw(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):v.hasKey(t,"fallbackValue")?t.fallbackValue:we(n)):r}catch(r){return t.handleError?t.handleError(r):v.hasKey(t,"fallbackValue")?t.fallbackValue:we(r)}}function Uw(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Ww="modulepreload",jw=function(e){return"/element-vir/vira/"+e},rl={},a0=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(r.map(u=>{if(u=jw(u),u in rl)return;rl[u]=!0;const l=u.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Ww,l||(c.as="script"),c.crossOrigin="",c.href=u,a&&c.setAttribute("nonce",a),document.head.appendChild(c),l)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var de;(function(e){e.Standard="stdout",e.Error="stderr"})(de||(de={}));var V;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(V||(V={}));async function zw(){return await pf({async[Et.Node](){const e=(await a0(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[V.Bold]:e.bold.open,[V.Debug]:e.blueBright.open,[V.Error]:e.red.open,[V.Faint]:e.gray.open,[V.Info]:e.cyan.open,[V.Mutate]:e.magenta.open,[V.NormalWeight]:"\x1B[22m",[V.Plain]:"",[V.Reset]:e.reset.open,[V.Success]:e.green.open,[V.Warning]:e.yellow.open}},[Et.Web](){return Promise.resolve({[V.Bold]:"font-weight: bold",[V.Debug]:"color: blue",[V.Error]:"color: red",[V.Faint]:"color: grey",[V.Info]:"color: teal",[V.Mutate]:"color: magenta",[V.NormalWeight]:"",[V.Plain]:"",[V.Reset]:"",[V.Success]:"color: green",[V.Warning]:"color: orange"})}})}const xe=await zw(),qw={[V.Bold]:{colors:[xe.bold],logType:de.Standard},[V.Debug]:{colors:[xe.debug],logType:de.Standard},[V.Faint]:{colors:[xe.faint],logType:de.Standard},[V.Info]:{colors:[xe.info],logType:de.Standard},[V.Mutate]:{colors:[xe.mutate,xe.bold],logType:de.Standard},[V.NormalWeight]:{colors:[xe.normalWeight],logType:de.Standard},[V.Plain]:{colors:[],logType:de.Standard},[V.Reset]:{colors:[xe.reset],logType:de.Standard},[V.Success]:{colors:[xe.success,xe.bold],logType:de.Standard},[V.Error]:{colors:[xe.error,xe.bold],logType:de.Error},[V.Warning]:{colors:[xe.warning],logType:de.Error}};function Gw(e){return e.replace(/,/g,"")}function Hw(e){return typeof e=="number"?e:Number(typeof e=="string"?Gw(e):e)}function nl(e){const t=Kw(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function Kw(e){const t=Hw(e);if(!isNaN(t))return t}const Zw="px";function u0(e){return Yw({value:e,suffix:Zw})}function Yw({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Jw({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Qw(){return await pf({async[Et.Node](){const{inspect:e}=await a0(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[V.Reset].colors.join("")].join(""),css:void 0}}},[Et.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:wa(r.colorConfig[t].colors,o=>Jw({value:o,suffix:";"}),v.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:F(o)).join(`
`),r.omitColors?"":r.colorConfig[V.Reset].colors.join("")].join(""),css:n}}}})}const Xw=await Qw();function il({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function e2({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function t2(e,t){try{let r=!1;const n=ya(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(r=!0,o):o?[o.key,o.value]:void 0}).filter(v.isTruthy);return r?new Promise(async(i,s)=>{try{const o=wa(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},v.isTruthy);i(Mo(o))}catch(o){s(we(o))}}):Mo(n)}catch(r){throw we(r)}}function r2(e,t){return t2(e,(r,n)=>{const i=n,s=t(n,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function l0(e,...t){const r={...e};return t.forEach(n=>{n&&ya(n).forEach(([i,s])=>{s!=null&&(r[i]=s)})}),r}const n2={colorConfig:qw,omitColors:!1},i2=c0({[de.Error](){},[de.Standard](){}});function c0(e,t){const r=l0(n2,t);function n(s){e[r.colorConfig[s.colorKey].logType](Xw({...s,options:r}))}const i=r2(V,s=>(...o)=>n({args:o,colorKey:s}));return{...i,if(s){return s?i:i2}}}const s2=g1(Et.Node)?{[de.Error]({text:e}){process.stderr.write(e+`
`)},[de.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[de.Error]({text:e,css:t}){console.error(il({value:e,prefix:"%c"}),t)},[de.Standard]({text:e,css:t}){console.log(il({value:e,prefix:"%c"}),t)}};c0(s2);function Zs(e,t){const{min:r,max:n}=i0(t);return e>n?r:e<r?n:e}function ze(e,t){let r=!1;const n=ae(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),i[s]=o,i},{});return r?new Promise(async(i,s)=>{try{await Promise.all(ae(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(we(o))}}):n}function d0(e,t){const r=ya(e).filter(([n,i])=>t(n,i,e));return Mo(r)}function o2(e,t){return d0(e,r=>!t.includes(r))}function a2(e,t){return d0(e,r=>t.includes(r))}function Dn(e){return ae(e).map(t=>e[t])}function u2(e,t){return t.capitalizeFirstLetter?l2(e):e}function l2(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const c2={capitalizeFirstLetter:!1};var _r;(function(e){e.Upper="upper",e.Lower="lower"})(_r||(_r={}));function d2(e){return e.toLowerCase()!==e.toUpperCase()}function sl(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(d2(n)){if(t===_r.Upper&&n!==n.toUpperCase()||t===_r.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function f2(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return u2(n,l0(c2,t))}function h2(e){return e.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=sl(o,_r.Lower,{rejectNoCaseCharacters:!0})||sl(a,_r.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function m2(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function p2(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function ba(e,t){return Oi(e.title),e.parent?[...ba(e.parent),Oi(e.parent.title)].concat([]):[]}function Oi(e){return p2(e).toLowerCase().replaceAll(/\s/g,"-")}function g2({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const y2={[ye.ElementExample]:()=>[],[ye.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),..._w(e.controls,e.title)].filter(v.isTruthy),[ye.Root]:()=>[]},Ri="_isBookTreeNode",f0=new Map;function w2(e){return f0.get(e)}function b2(e,t){Ow(f0,e,()=>t)}function Fr(e,t){return!!(h0(e)&&e.entry.entryType===t)}function h0(e){return!!(v.hasKeys(e,[Ri,"entry"])&&e[Ri])}function D2(){return{[Ri]:!0,entry:{entryType:ye.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function E2({entries:e,debug:t}){const r=w2(e);if(r)return r;const n=D2();e.forEach(o=>Da({tree:n,newEntry:o,debug:t,manuallyAdded:!0}));const i=m0(n),s={tree:n,flattenedNodes:i};return b2(e,s),t&&console.info("element-book tree:",n),s}function v2(e,t,r){if(!t.parent)return e;const n=No(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Da({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=No(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${ba(t).join(" > ")}`);return i}function Da({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=y2[t.entryType](t);t.errors.push(...i);const s=v2(e,t,r),o=Oi(t.title),a=s.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Ri]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:n};s.children[o]=u,Lw(t,ye.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Da({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function No(e,t){const r=h0(e)?e.fullUrlBreadcrumbs.slice(0,-1):ba(e);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function m0(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>m0(i));return[e,...r].flat()}function Ea(e,t){return va(e,["",...t],void 0)}function va(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const s=e.children[i||""],o=s&&va(s,n,r);return{...e.controls,...o}}function A2(e,t,r){const n={...e};return va(n,["",...t],r),n}function p0(e,t){const r=t?.controls||(Fr(e,ye.Page)?ze(e.entry.controls,(i,s)=>s.initValue):{});return{children:ze(e.children,(i,s)=>p0(s,t?.children?.[s.urlBreadcrumb])),controls:r}}function tt(e){const t={...e,entryType:ye.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,entryType:ye.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(v.isTruthy)};r.add(n.title),t.elementExamples[Oi(i.title)]=i}}),t}var Ke=(e=>(e.Search="search",e.Book="book",e))(Ke||{});function Bo(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const Or={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=globalThis,Aa=$i.ShadowRoot&&($i.ShadyCSS===void 0||$i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ca=Symbol(),ol=new WeakMap;let g0=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ca)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Aa&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ol.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ol.set(r,t))}return t}toString(){return this.cssText}};const se=e=>new g0(typeof e=="string"?e:e+"",void 0,Ca),Si=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new g0(r,e,Ca)},C2=(e,t)=>{if(Aa)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=$i.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},al=Aa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return se(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$2,defineProperty:S2,getOwnPropertyDescriptor:k2,getOwnPropertyNames:T2,getOwnPropertySymbols:F2,getPrototypeOf:x2}=Object,hs=globalThis,ul=hs.trustedTypes,M2=ul?ul.emptyScript:"",N2=hs.reactiveElementPolyfillSupport,hn=(e,t)=>e,Vi={toAttribute(e,t){switch(t){case Boolean:e=e?M2:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$a=(e,t)=>!$2(e,t),ll={attribute:!0,type:String,converter:Vi,reflect:!1,hasChanged:$a};Symbol.metadata??=Symbol("metadata"),hs.litPropertyMetadata??=new WeakMap;let Ar=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ll){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&S2(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=k2(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ll}static _$Ei(){if(this.hasOwnProperty(hn("elementProperties")))return;const t=x2(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hn("properties"))){const r=this.properties,n=[...T2(r),...F2(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(al(i))}else t!==void 0&&r.push(al(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C2(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Vi).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Vi;this._$Em=i,this[i]=o.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??$a)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(t){}firstUpdated(t){}};Ar.elementStyles=[],Ar.shadowRootOptions={mode:"open"},Ar[hn("elementProperties")]=new Map,Ar[hn("finalized")]=new Map,N2?.({ReactiveElement:Ar}),(hs.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sa=globalThis,Ui=Sa.trustedTypes,cl=Ui?Ui.createPolicy("lit-html",{createHTML:e=>e}):void 0,ka="$lit$",mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ta="?"+mt,B2=`<${Ta}>`,sr=document,En=()=>sr.createComment(""),vn=e=>e===null||typeof e!="object"&&typeof e!="function",Fa=Array.isArray,y0=e=>Fa(e)||typeof e?.[Symbol.iterator]=="function",Ys=`[ 	
\f\r]`,Qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dl=/-->/g,fl=/>/g,Zt=RegExp(`>|${Ys}(?:([^\\s"'>=/]+)(${Ys}*=${Ys}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hl=/'/g,ml=/"/g,w0=/^(?:script|style|textarea|title)$/i,P2=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),L2=P2(1),Pe=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),pl=new WeakMap,er=sr.createTreeWalker(sr,129);function b0(e,t){if(!Fa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return cl!==void 0?cl.createHTML(t):t}const D0=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Qr;for(let a=0;a<r;a++){const u=e[a];let l,d,c=-1,f=0;for(;f<u.length&&(o.lastIndex=f,d=o.exec(u),d!==null);)f=o.lastIndex,o===Qr?d[1]==="!--"?o=dl:d[1]!==void 0?o=fl:d[2]!==void 0?(w0.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=Zt):d[3]!==void 0&&(o=Zt):o===Zt?d[0]===">"?(o=i??Qr,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?Zt:d[3]==='"'?ml:hl):o===ml||o===hl?o=Zt:o===dl||o===fl?o=Qr:(o=Zt,i=void 0);const m=o===Zt&&e[a+1].startsWith("/>")?" ":"";s+=o===Qr?u+B2:c>=0?(n.push(l),u.slice(0,c)+ka+u.slice(c)+mt+m):u+mt+(c===-2?a:m)}return[b0(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class An{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,d]=D0(t,r);if(this.el=An.createElement(l,n),er.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=er.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ka)){const f=d[o++],m=i.getAttribute(c).split(mt),g=/([.?@])?(.*)/.exec(f);u.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?v0:g[1]==="?"?A0:g[1]==="@"?C0:jn}),i.removeAttribute(c)}else c.startsWith(mt)&&(u.push({type:6,index:s}),i.removeAttribute(c));if(w0.test(i.tagName)){const c=i.textContent.split(mt),f=c.length-1;if(f>0){i.textContent=Ui?Ui.emptyScript:"";for(let m=0;m<f;m++)i.append(c[m],En()),er.nextNode(),u.push({type:2,index:++s});i.append(c[f],En())}}}else if(i.nodeType===8)if(i.data===Ta)u.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(mt,c+1))!==-1;)u.push({type:7,index:s}),c+=mt.length-1}s++}}static createElement(t,r){const n=sr.createElement("template");return n.innerHTML=t,n}}function or(e,t,r=e,n){if(t===Pe)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=vn(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=or(e,i._$AS(e,t.values),i,n)),t}let E0=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??sr).importNode(r,!0);er.currentNode=i;let s=er.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new Zr(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new $0(s,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(s=er.nextNode(),o++)}return er.currentNode=sr,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Zr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=or(this,t,r),vn(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==Pe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):y0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&vn(this._$AH)?this._$AA.nextSibling.data=t:this.T(sr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=An.createElement(b0(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new E0(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=pl.get(t.strings);return r===void 0&&pl.set(t.strings,r=new An(t)),r}k(t){Fa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new Zr(this.O(En()),this.O(En()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class jn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=te}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=or(this,t,r,0),o=!vn(t)||t!==this._$AH&&t!==Pe,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=or(this,a[n+u],r,u),l===Pe&&(l=this._$AH[u]),o||=!vn(l)||l!==this._$AH[u],l===te?t=te:t!==te&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class v0 extends jn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class A0 extends jn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class C0 extends jn{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=or(this,t,r,0)??te)===Pe)return;const n=this._$AH,i=t===te&&n!==te||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==te&&(n===te||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $0{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){or(this,t)}}const I2={M:ka,P:mt,A:Ta,C:1,L:D0,R:E0,D:y0,V:or,I:Zr,H:jn,N:A0,U:C0,B:v0,F:$0},_2=Sa.litHtmlPolyfillSupport;_2?.(An,Zr),(Sa.litHtmlVersions??=[]).push("3.2.1");const O2=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new Zr(t.insertBefore(En(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mn=class extends Ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=O2(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};mn._$litElement$=!0,mn.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:mn});const R2=globalThis.litElementPolyfillSupport;R2?.({LitElement:mn});(globalThis.litElementVersions??=[]).push("4.1.1");function Ut(e){if(v.isObject(e))return ze(e,(r,n)=>{if(!v.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(h2(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?se(r):r.startsWith("-")?Si`-${se(r)}`:Si`--${se(r)}`;return{name:o,value:Si`var(${o}, ${se(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${Ut.name}' function.`)}function V2({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const G=Ut({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),U2={nav:{hover:{background:G["element-book-nav-hover-background-color"],foreground:G["element-book-nav-hover-foreground-color"]},active:{background:G["element-book-nav-active-background-color"],foreground:G["element-book-nav-active-foreground-color"]},selected:{background:G["element-book-nav-selected-background-color"],foreground:G["element-book-nav-selected-foreground-color"]}},accent:{icon:G["element-book-accent-icon-color"]},page:{background:G["element-book-page-background-color"],backgroundFaint1:G["element-book-page-background-faint-level-1-color"],backgroundFaint2:G["element-book-page-background-faint-level-2-color"],foreground:G["element-book-page-foreground-color"],foregroundFaint1:G["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:G["element-book-page-foreground-faint-level-2-color"]}};function W2(e,t){S0(e,t,U2)}function Po(e){return v.hasKey(e,"_$cssResult$")}function gl(e){return v.hasKeys(e,["name","value","default"])&&v.isString(e.default)&&Po(e.name)&&Po(e.value)}function S0(e,t,r){Object.entries(t).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Po(i)){if(!gl(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);V2({forCssVar:s,onElement:e,toValue:String(i)})}else{if(gl(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);S0(e,i,s)}})}function re(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let n=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return r===1&&(s=s[0]),n===1?s.map(o=>o[0]):s}function zn(e){return Pt(e)==="string"}function Pt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Wi(e,{precision:t,unit:r}){return It(e)?"none":k0(e,t)+(r??"")}function It(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function le(e){return It(e)?0:e}function k0(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const j2={deg:1,grad:.9,rad:180/Math.PI,turn:360};function T0(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(n),d=u;if(l){let c=l[0],f=d.slice(0,-c.length);c==="%"?(d=new Number(f/100),d.type="<percentage>"):(d=new Number(f*j2[c]),d.type="<angle>",d.unit=c)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);a.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=u),o.push(d)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function F0(e){return e[e.length-1]}function Cn(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function x0(e,t,r){return(r-e)/(t-e)}function xa(e,t,r){return Cn(t[0],t[1],x0(e[0],e[1],r))}function M0(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function N0(e,t,r){return Math.max(Math.min(r,t),e)}function ms(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function nt(e,t){return ms(Math.abs(e)**t,e)}function Ma(e,t){return t===0?0:e/t}function B0(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var z2=Object.freeze({__proto__:null,bisectLeft:B0,clamp:N0,copySign:ms,interpolate:Cn,interpolateInv:x0,isNone:It,isString:zn,last:F0,mapRange:xa,multiplyMatrices:re,parseCoordGrammar:M0,parseFunction:T0,serializeNumber:Wi,skipNone:le,spow:nt,toPrecision:k0,type:Pt,zdiv:Ma});class q2{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const _t=new q2;var Le={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const ve={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Lo(e){return Array.isArray(e)?e:ve[e]}function ji(e,t,r,n={}){if(e=Lo(e),t=Lo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(_t.run("chromatic-adaptation-start",i),i.M||(i.W1===ve.D65&&i.W2===ve.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===ve.D50&&i.W2===ve.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),_t.run("chromatic-adaptation-end",i),i.M)return re(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const G2=new Set(["<number>","<percentage>","<angle>"]);function yl(e,t,r,n){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=n[a],d=l?.type,c;if(l.none?c=u.find(g=>G2.has(g)):c=u.find(g=>g==d),!c){let g=o.name||s;throw new TypeError(`${d??l.raw} not allowed for ${g} in ${r}()`)}let f=c.range;d==="<percentage>"&&(f||=[0,1]);let m=o.range||o.refRange;return f&&m&&(n[a]=xa(f,m,n[a])),c})}function P0(e,{meta:t}={}){let r={str:String(e)?.trim()};if(_t.run("parse-start",r),r.color)return r.color;if(r.parsed=T0(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let d of T.all){let c=d.getFormat("color");if(c&&(o.includes(c.id)||c.ids?.filter(f=>o.includes(f)).length)){const f=Object.keys(d.coords).map((g,y)=>r.parsed.args[y]||0);let m;return c.coordGrammar&&(m=yl(d,c,"color",f)),t&&Object.assign(t,{formatId:"color",types:m}),c.id.startsWith("--")&&!i.startsWith("--")&&Le.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${i}).`),i.startsWith("--")&&!c.id.startsWith("--")&&Le.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${i}).`),{spaceId:d.id,coords:f,alpha:a}}}let u="",l=i in T.registry?i:s;if(l in T.registry){let d=T.registry[l].formats?.color?.id;d&&(u=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of T.all){let s=i.getFormat(n);if(s&&s.type==="function"){let o=1;(s.lastAlpha||F0(r.parsed.args).alpha)&&(o=r.parsed.args.pop());let a=r.parsed.args,u;return s.coordGrammar&&(u=yl(i,s,n,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let n of T.all)for(let i in n.formats){let s=n.formats[i];if(s.type!=="custom"||s.test&&!s.test(r.str))continue;let o=s.parse(r.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function O(e){if(Array.isArray(e))return e.map(O);if(!e)throw new TypeError("Empty color reference");zn(e)&&(e=P0(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}const H2=75e-6;class T{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?T.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Lo(n),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:T.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:K2(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),_t.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=H2}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=wl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=wl(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=O(t);[t,r]=[a.space,a.coords]}if(t=T.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,s,o;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)s=n[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=O(t);[t,r]=[n.space,n.coords]}return t=T.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(T.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof T)return t;if(Pt(t)==="string"){let i=T.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return T.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=Pt(t),i,s;if(n==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=T.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Pt(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=T.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function K2(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function wl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=M0(e.coords);let r=Object.entries(t).map(([n,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=r[o];return a&&u&&(s=xa(a,u,s)),s=Wi(s,{precision:i,unit:l}),s})}return e}var me=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ke extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=me),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=re(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ji(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=ji(this.base.white,this.white,r),re(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function qn(e,t){return e=O(e),!t||e.space.equals(t)?e.coords.slice():(t=T.get(t),t.from(e))}function Me(e,t){e=O(e);let{space:r,index:n}=T.resolveCoord(t,e.space);return qn(e,r)[n]}function Na(e,t,r){return e=O(e),t=T.get(t),e.coords=t.to(e.space,r),e}Na.returns="color";function vt(e,t,r){if(e=O(e),arguments.length===2&&Pt(arguments[1])==="object"){let n=arguments[1];for(let i in n)vt(e,i,n[i])}else{typeof r=="function"&&(r=r(Me(e,t)));let{space:n,index:i}=T.resolveCoord(t,e.space),s=qn(e,n);s[i]=r,Na(e,n,s)}return e}vt.returns="color";var Ba=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:me,fromBase:e=>ji(me.white,"D50",e),toBase:e=>ji("D50",me.white,e)});const Z2=216/24389,bl=24/116,oi=24389/27;let Js=ve.D50;var Ne=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Js,base:Ba,fromBase(e){let r=e.map((n,i)=>n/Js[i]).map(n=>n>Z2?Math.cbrt(n):(oi*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>bl?Math.pow(t[0],3):(116*t[0]-16)/oi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/oi,t[2]>bl?Math.pow(t[2],3):(116*t[2]-16)/oi].map((n,i)=>n*Js[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ot(e){return(e%360+360)%360}function Y2(e,t){if(e==="raw")return t;let[r,n]=t.map(ot),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var $n=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ne,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ot(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Dl=25**7,zi=Math.PI,El=180/zi,yr=zi/180;function vl(e){const t=e*e;return t*t*t*e}function L0(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=O([e,t]);let[s,o,a]=Ne.from(e),u=$n.from(Ne,[s,o,a])[1],[l,d,c]=Ne.from(t),f=$n.from(Ne,[l,d,c])[1];u<0&&(u=0),f<0&&(f=0);let m=(u+f)/2,g=vl(m),y=.5*(1-Math.sqrt(g/(g+Dl))),E=(1+y)*o,D=(1+y)*d,A=Math.sqrt(E**2+a**2),x=Math.sqrt(D**2+c**2),P=E===0&&a===0?0:Math.atan2(a,E),j=D===0&&c===0?0:Math.atan2(c,D);P<0&&(P+=2*zi),j<0&&(j+=2*zi),P*=El,j*=El;let be=l-s,$t=x-A,Ae=j-P,Fe=P+j,rt=Math.abs(Ae),zt;A*x===0?zt=0:rt<=180?zt=Ae:Ae>180?zt=Ae-360:Ae<-180?zt=Ae+360:Le.warn("the unthinkable has happened");let nu=2*Math.sqrt(x*A)*Math.sin(zt*yr/2),zm=(s+l)/2,Is=(A+x)/2,iu=vl(Is),at;A*x===0?at=Fe:rt<=180?at=Fe/2:Fe<360?at=(Fe+360)/2:at=(Fe-360)/2;let su=(zm-50)**2,qm=1+.015*su/Math.sqrt(20+su),ou=1+.045*Is,Yr=1;Yr-=.17*Math.cos((at-30)*yr),Yr+=.24*Math.cos(2*at*yr),Yr+=.32*Math.cos((3*at+6)*yr),Yr-=.2*Math.cos((4*at-63)*yr);let au=1+.015*Is*Yr,Gm=30*Math.exp(-1*((at-275)/25)**2),Hm=2*Math.sqrt(iu/(iu+Dl)),Km=-1*Math.sin(2*Gm*yr)*Hm,Jn=(be/(r*qm))**2;return Jn+=($t/(n*ou))**2,Jn+=(nu/(i*au))**2,Jn+=Km*($t/(n*ou))*(nu/(i*au)),Math.sqrt(Jn)}const J2=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Q2=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],X2=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],eb=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Rr=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:me,fromBase(e){let r=re(J2,e).map(n=>Math.cbrt(n));return re(X2,r)},toBase(e){let r=re(eb,e).map(n=>n**3);return re(Q2,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Io(e,t){[e,t]=O([e,t]);let[r,n,i]=Rr.from(e),[s,o,a]=Rr.from(t),u=r-s,l=n-o,d=i-a;return Math.sqrt(u**2+l**2+d**2)}const tb=75e-6;function ir(e,t,{epsilon:r=tb}={}){e=O(e),t||(t=e.space),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Vr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function I0(e,t,r="lab"){r=T.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function rb(e,t){return I0(e,t,"lab")}const nb=Math.PI,Al=nb/180;function ib(e,t,{l:r=2,c:n=1}={}){[e,t]=O([e,t]);let[i,s,o]=Ne.from(e),[,a,u]=$n.from(Ne,[i,s,o]),[l,d,c]=Ne.from(t),f=$n.from(Ne,[l,d,c])[1];a<0&&(a=0),f<0&&(f=0);let m=i-l,g=a-f,y=s-d,E=o-c,D=y**2+E**2-g**2,A=.511;i>=16&&(A=.040975*i/(1+.01765*i));let x=.0638*a/(1+.0131*a)+.638,P;Number.isNaN(u)&&(u=0),u>=164&&u<=345?P=.56+Math.abs(.2*Math.cos((u+168)*Al)):P=.36+Math.abs(.4*Math.cos((u+35)*Al));let j=Math.pow(a,4),be=Math.sqrt(j/(j+1900)),$t=x*(be*P+1-be),Ae=(m/(r*A))**2;return Ae+=(g/(n*x))**2,Ae+=D/$t**2,Math.sqrt(Ae)}const Cl=203;var Pa=new T({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:me,fromBase(e){return e.map(t=>Math.max(t*Cl,0))},toBase(e){return e.map(t=>Math.max(t/Cl,0))}});const ai=1.15,ui=.66,$l=2610/2**14,sb=2**14/2610,Sl=3424/2**12,kl=2413/2**7,Tl=2392/2**7,ob=1.7*2523/2**5,Fl=2**5/(1.7*2523),li=-.56,Qs=16295499532821565e-27,ab=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ub=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],lb=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],cb=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var _0=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Pa,fromBase(e){let[t,r,n]=e,i=ai*t-(ai-1)*n,s=ui*r-(ui-1)*t,a=re(ab,[i,s,n]).map(function(f){let m=Sl+kl*(f/1e4)**$l,g=1+Tl*(f/1e4)**$l;return(m/g)**ob}),[u,l,d]=re(lb,a);return[(1+li)*u/(1+li*u)-Qs,l,d]},toBase(e){let[t,r,n]=e,i=(t+Qs)/(1+li-li*(t+Qs)),o=re(cb,[i,r,n]).map(function(f){let m=Sl-f**Fl,g=Tl*f**Fl-kl;return 1e4*(m/g)**sb}),[a,u,l]=re(ub,o),d=(a+(ai-1)*l)/ai,c=(u+(ui-1)*d)/ui;return[d,c,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),_o=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:_0,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ot(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function db(e,t){[e,t]=O([e,t]);let[r,n,i]=_o.from(e),[s,o,a]=_o.from(t),u=r-s,l=n-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let d=i-a,c=2*Math.sqrt(n*o)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(u**2+l**2+c**2)}const O0=3424/4096,R0=2413/128,V0=2392/128,xl=2610/16384,fb=2523/32,hb=16384/2610,Ml=32/2523,mb=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],pb=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],gb=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],yb=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Oo=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Pa,fromBase(e){let t=re(mb,e);return wb(t)},toBase(e){let t=bb(e);return re(yb,t)}});function wb(e){let t=e.map(function(r){let n=O0+R0*(r/1e4)**xl,i=1+V0*(r/1e4)**xl;return(n/i)**fb});return re(pb,t)}function bb(e){return re(gb,e).map(function(n){let i=Math.max(n**Ml-O0,0),s=R0-V0*n**Ml;return 1e4*(i/s)**hb})}function Db(e,t){[e,t]=O([e,t]);let[r,n,i]=Oo.from(e),[s,o,a]=Oo.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-o)**2+(i-a)**2)}const Eb=ve.D65,U0=.42,Nl=1/U0,Xs=2*Math.PI,W0=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],vb=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Ab=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Cb={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Qt={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},$b=180/Math.PI,Bl=Math.PI/180;function j0(e,t){return e.map(n=>{const i=nt(t*Math.abs(n)*.01,U0);return 400*ms(i,n)/(i+27.13)})}function Sb(e,t){const r=100/t*27.13**Nl;return e.map(n=>{const i=Math.abs(n);return ms(r*nt(i/(400-i),Nl),n)})}function kb(e){let t=ot(e);t<=Qt.h[0]&&(t+=360);const r=B0(Qt.h,t)-1,[n,i]=Qt.h.slice(r,r+2),[s,o]=Qt.e.slice(r,r+2),a=Qt.H[r],u=(t-n)/s;return a+100*u/(u+(i-t)/o)}function Tb(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Qt.h.slice(r,r+2),[s,o]=Qt.e.slice(r,r+2);return ot((t*(o*n-s*i)-100*n*o)/(t*(o-s)-100*o))}function z0(e,t,r,n,i){const s={};s.discounting=i,s.refWhite=e,s.surround=n;const o=e.map(y=>y*100);s.la=t,s.yb=r;const a=o[1],u=re(W0,o);n=Cb[s.surround];const l=n[0];s.c=n[1],s.nc=n[2];const c=(1/(5*s.la+1))**4;s.fl=c*s.la+.1*(1-c)*(1-c)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const f=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(y=>Cn(1,a/y,f)),s.dRgbInv=s.dRgb.map(y=>1/y);const m=u.map((y,E)=>y*s.dRgb[E]),g=j0(m,s.fl);return s.aW=s.nbb*(2*g[0]+g[1]+.05*g[2]),s}const Pl=z0(Eb,64/Math.PI*.2,20,"average",!1);function Ro(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=ot(e.h)*Bl:r=Tb(e.H)*Bl;const n=Math.cos(r),i=Math.sin(r);let s=0;e.J!==void 0?s=nt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=nt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*nt(s,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*u,c=l/t.nbb,f=23*(c+.305)*Ma(a,23*d+a*(11*n+108*i)),m=f*n,g=f*i,y=Sb(re(Ab,[c,m,g]).map(E=>E*1/1403),t.fl);return re(vb,y.map((E,D)=>E*t.dRgbInv[D])).map(E=>E/100)}function q0(e,t){const r=e.map(x=>x*100),n=j0(re(W0,r).map((x,P)=>x*t.dRgb[P]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(s,i)%Xs+Xs)%Xs,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Ma(a*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),l=nt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),c=nt(d/t.aW,.5*t.c*t.z),f=100*nt(c,2),m=4/t.c*c*(t.aW+4)*t.flRoot,g=l*c,y=g*t.flRoot,E=ot(o*$b),D=kb(E),A=50*nt(t.c*l/(t.aW+4),1/2);return{J:f,C:g,h:E,s:A,Q:m,M:y,H:D}}var Fb=new T({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:me,fromBase(e){const t=q0(e,Pl);return[t.J,t.M,t.h]},toBase(e){return Ro({J:e[0],M:e[1],h:e[2]},Pl)}});const xb=ve.D65,Mb=216/24389,G0=24389/27;function Nb(e){return 116*(e>Mb?Math.cbrt(e):(G0*e+16)/116)-16}function Vo(e){return e>8?Math.pow((e+16)/116,3):e/G0}function Bb(e,t){let[r,n,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=Vo(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let d=0,c=1/0;for(;d<=l;){s=Ro({J:o,C:n,h:r},t);const f=Math.abs(s[1]-a);if(f<c){if(f<=u)return s;c=f}o=o-(s[1]-a)*o/(2*s[1]),d+=1}return Ro({J:o,C:n,h:r},t)}function Pb(e,t){const r=Nb(e[1]);if(r===0)return[0,0,0];const n=q0(e,La);return[ot(n.h),n.C,r]}const La=z0(xb,200/Math.PI*Vo(50),Vo(50)*100,"average",!1);var Sn=new T({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:me,fromBase(e){return Pb(e)},toBase(e){return Bb(e,La)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Lb=Math.PI/180,Ll=[1,.007,.0228];function Il(e){e[1]<0&&(e=Sn.fromBase(Sn.toBase(e)));const t=Math.log(Math.max(1+Ll[2]*e[1]*La.flRoot,1))/Ll[2],r=e[0]*Lb,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function Ib(e,t){[e,t]=O([e,t]);let[r,n,i]=Il(Sn.from(e)),[s,o,a]=Il(Sn.from(t));return Math.sqrt((r-s)**2+(n-o)**2+(i-a)**2)}var Ur={deltaE76:rb,deltaECMC:ib,deltaE2000:L0,deltaEJz:db,deltaEITP:Db,deltaEOK:Io,deltaEHCT:Ib};function _b(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const _l={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ot(e,{method:t=Le.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=O(e),zn(arguments[1])?r=arguments[1]:r||(r=e.space),r=T.get(r),ir(e,r,{epsilon:0}))return e;let o;if(t==="css")o=Ob(e,{space:r});else{if(t!=="clip"&&!ir(e,r)){Object.prototype.hasOwnProperty.call(_l,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=_l[t]);let a=L0;if(n!==""){for(let l in Ur)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Ur[l];break}}let u=Ot(ee(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(s).length===3){let A=T.resolveCoord(s.channel),x=Me(ee(e,A.space),A.id);if(It(x)&&(x=0),x>=s.max)return ee({space:"xyz-d65",coords:ve.D65},e.space);if(x<=s.min)return ee({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=T.resolveCoord(t),d=l.space,c=l.id,f=ee(e,d);f.coords.forEach((A,x)=>{It(A)&&(f.coords[x]=0)});let g=(l.range||l.refRange)[0],y=_b(i),E=g,D=Me(f,c);for(;D-E>y;){let A=Vr(f);A=Ot(A,{space:r,method:"clip"}),a(f,A)-i<y?E=Me(f,c):D=Me(f,c),vt(f,c,(E+D)/2)}o=ee(f,r)}else o=u}else o=ee(e,r);if(t==="clip"||!ir(o,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[d,c]=a[l];return d!==void 0&&(u=Math.max(d,u)),c!==void 0&&(u=Math.min(u,c)),u})}}return r!==e.space&&(o=ee(o,e.space)),e.coords=o.coords,e}Ot.returns="color";const Ol={WHITE:{space:Rr,coords:[1,0,0]},BLACK:{space:Rr,coords:[0,0,0]}};function Ob(e,{space:t}={}){e=O(e),t||(t=e.space),t=T.get(t);const i=T.get("oklch");if(t.isUnbounded)return ee(e,t);const s=ee(e,i);let o=s.coords[0];if(o>=1){const g=ee(Ol.WHITE,t);return g.alpha=e.alpha,ee(g,t)}if(o<=0){const g=ee(Ol.BLACK,t);return g.alpha=e.alpha,ee(g,t)}if(ir(s,t,{epsilon:0}))return ee(s,t);function a(g){const y=ee(g,t),E=Object.values(t.coords);return y.coords=y.coords.map((D,A)=>{if("range"in E[A]){const[x,P]=E[A].range;return N0(x,D,P)}return D}),y}let u=0,l=s.coords[1],d=!0,c=Vr(s),f=a(c),m=Io(f,c);if(m<.02)return f;for(;l-u>1e-4;){const g=(u+l)/2;if(c.coords[1]=g,d&&ir(c,t,{epsilon:0}))u=g;else if(f=a(c),m=Io(f,c),m<.02){if(.02-m<1e-4)break;d=!1,u=g}else l=g}return f}function ee(e,t,{inGamut:r}={}){e=O(e),t=T.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=Ot(i,r===!0?void 0:r)),i}ee.returns="color";function pn(e,{precision:t=Le.precision,format:r="default",inGamut:n=!0,...i}={}){let s;e=O(e);let o=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!ir(e)&&(a=Ot(Vr(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)s=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(f=>Wi(f,{precision:t})));let l=[...a];if(u==="color"){let f=r.id||r.ids?.[0]||e.space.id;l.unshift(f)}let d=e.alpha;t!==null&&(d=Wi(d,{precision:t}));let c=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${d}`;s=`${u}(${l.join(r.commas?", ":" ")}${c})`}return s}const Rb=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Vb=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ps=new ke({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Rb,fromXYZ_M:Vb});const ci=1.09929682680944,Rl=.018053968510807;var H0=new ke({id:"rec2020",name:"REC.2020",base:ps,toBase(e){return e.map(function(t){return t<Rl*4.5?t/4.5:Math.pow((t+ci-1)/ci,1/.45)})},fromBase(e){return e.map(function(t){return t>=Rl?ci*Math.pow(t,.45)-(ci-1):4.5*t})}});const Ub=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Wb=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var K0=new ke({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ub,fromXYZ_M:Wb});const jb=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fe=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Z0=new ke({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:jb,fromXYZ_M:fe}),Vl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Ul=Array(3).fill("<percentage> | <number>[0, 255]"),Wl=Array(3).fill("<number>[0, 255]");var Wr=new ke({id:"srgb",name:"sRGB",base:Z0,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Ul},rgb_number:{name:"rgb",commas:!0,coords:Wl,noAlpha:!0},color:{},rgba:{coords:Ul,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Wl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Vl.black,t.alpha=0):t.coords=Vl[e],t.coords)return t}}}}),Y0=new ke({id:"p3",cssId:"display-p3",name:"P3",base:K0,fromBase:Wr.fromBase,toBase:Wr.toBase});Le.display_space=Wr;let zb;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ne,H0,Y0]){let t=e.getMinCoords(),n=pn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Le.display_space=e;break}}function qb(e,{space:t=Le.display_space,...r}={}){let n=pn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Le.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(It)||It(e.alpha))&&!(zb??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Vr(e),i.coords=i.coords.map(le),i.alpha=le(i.alpha),n=pn(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=ee(i,t),n=new String(pn(i,r)),n.color=i}return n}function Gb(e,t){return e=O(e),t=O(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Rt(e){return Me(e,[me,"y"])}function J0(e,t){vt(e,[me,"y"],t)}function Hb(e){Object.defineProperty(e.prototype,"luminance",{get(){return Rt(this)},set(t){J0(this,t)}})}var Kb=Object.freeze({__proto__:null,getLuminance:Rt,register:Hb,setLuminance:J0});function Zb(e,t){e=O(e),t=O(t);let r=Math.max(Rt(e),0),n=Math.max(Rt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Yb=.56,Jb=.57,Qb=.62,Xb=.65,jl=.022,eD=1.414,tD=.1,rD=5e-4,nD=1.14,zl=.027,iD=1.14;function ql(e){return e>=jl?e:e+(jl-e)**eD}function wr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function sD(e,t){t=O(t),e=O(e);let r,n,i,s,o,a;t=ee(t,"srgb"),[s,o,a]=t.coords;let u=wr(s)*.2126729+wr(o)*.7151522+wr(a)*.072175;e=ee(e,"srgb"),[s,o,a]=e.coords;let l=wr(s)*.2126729+wr(o)*.7151522+wr(a)*.072175,d=ql(u),c=ql(l),f=c>d;return Math.abs(c-d)<rD?n=0:f?(r=c**Yb-d**Jb,n=r*nD):(r=c**Xb-d**Qb,n=r*iD),Math.abs(n)<tD?i=0:n>0?i=n-zl:i=n+zl,i*100}function oD(e,t){e=O(e),t=O(t);let r=Math.max(Rt(e),0),n=Math.max(Rt(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const aD=5e4;function uD(e,t){e=O(e),t=O(t);let r=Math.max(Rt(e),0),n=Math.max(Rt(t),0);return n>r&&([r,n]=[n,r]),n===0?aD:(r-n)/n}function lD(e,t){e=O(e),t=O(t);let r=Me(e,[Ne,"l"]),n=Me(t,[Ne,"l"]);return Math.abs(r-n)}const cD=216/24389,Gl=24/116,di=24389/27;let eo=ve.D65;var Uo=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:eo,base:me,fromBase(e){let r=e.map((n,i)=>n/eo[i]).map(n=>n>cD?Math.cbrt(n):(di*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Gl?Math.pow(t[0],3):(116*t[0]-16)/di,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/di,t[2]>Gl?Math.pow(t[2],3):(116*t[2]-16)/di].map((n,i)=>n*eo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const to=Math.pow(5,.5)*.5+.5;function dD(e,t){e=O(e),t=O(t);let r=Me(e,[Uo,"l"]),n=Me(t,[Uo,"l"]),i=Math.abs(Math.pow(r,to)-Math.pow(n,to)),s=Math.pow(i,1/to)*Math.SQRT2-40;return s<7.5?0:s}var ki=Object.freeze({__proto__:null,contrastAPCA:sD,contrastDeltaPhi:dD,contrastLstar:lD,contrastMichelson:oD,contrastWCAG21:Zb,contrastWeber:uD});function fD(e,t,r={}){zn(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(ki).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=O(e),t=O(t);for(let s in ki)if("contrast"+n.toLowerCase()===s.toLowerCase())return ki[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function gs(e){let[t,r,n]=qn(e,me),i=t+15*r+3*n;return[4*t/i,9*r/i]}function Q0(e){let[t,r,n]=qn(e,me),i=t+r+n;return[t/i,r/i]}function hD(e){Object.defineProperty(e.prototype,"uv",{get(){return gs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Q0(this)}})}var mD=Object.freeze({__proto__:null,register:hD,uv:gs,xy:Q0});function nn(e,t,r={}){zn(r)&&(r={method:r});let{method:n=Le.deltaE,...i}=r;for(let s in Ur)if("deltae"+n.toLowerCase()===s.toLowerCase())return Ur[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function pD(e,t=.25){let n=[T.get("oklch","lch"),"l"];return vt(e,n,i=>i*(1+t))}function gD(e,t=.25){let n=[T.get("oklch","lch"),"l"];return vt(e,n,i=>i*(1-t))}var yD=Object.freeze({__proto__:null,darken:gD,lighten:pD});function X0(e,t,r=.5,n={}){return[e,t]=[O(e),O(t)],Pt(r)==="object"&&([r,n]=[.5,r]),Gn(e,t,n)(r)}function eh(e,t,r={}){let n;Ia(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[O(e),O(t)],n=Gn(e,t,u));let l=nn(e,t),d=i>0?Math.max(o,Math.ceil(l/i)+1):o,c=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)c=[{p:.5,color:n(.5)}];else{let f=1/(d-1);c=Array.from({length:d},(m,g)=>{let y=g*f;return{p:y,color:n(y)}})}if(i>0){let f=c.reduce((m,g,y)=>{if(y===0)return 0;let E=nn(g.color,c[y-1].color,s);return Math.max(m,E)},0);for(;f>i;){f=0;for(let m=1;m<c.length&&c.length<a;m++){let g=c[m-1],y=c[m],E=(y.p+g.p)/2,D=n(E);f=Math.max(f,nn(D,g.color),nn(D,y.color)),c.splice(m,0,{p:E,color:n(E)}),m++}}}return c=c.map(f=>f.color),c}function Gn(e,t,r={}){if(Ia(e)){let[u,l]=[e,t];return Gn(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:s,premultiplied:o}=r;e=O(e),t=O(t),e=Vr(e),t=Vr(t);let a={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[Le.interpolationSpace]||e.space,i=i?T.get(i):n,e=ee(e,n),t=ee(t,n),e=Ot(e),t=Ot(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[d,c]=[Me(e,l),Me(t,l)];isNaN(d)&&!isNaN(c)?d=c:isNaN(c)&&!isNaN(d)&&(c=d),[d,c]=Y2(u,[d,c]),vt(e,l,d),vt(t,l,c)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((f,m)=>{let g=t.coords[m];return Cn(f,g,u)}),d=Cn(e.alpha,t.alpha,u),c={space:n,coords:l,alpha:d};return o&&(c.coords=c.coords.map(f=>f/d)),i!==n&&(c=ee(c,i)),c},{rangeArgs:a})}function Ia(e){return Pt(e)==="function"&&!!e.rangeArgs}Le.interpolationSpace="lab";function wD(e){e.defineFunction("mix",X0,{returns:"color"}),e.defineFunction("range",Gn,{returns:"function<color>"}),e.defineFunction("steps",eh,{returns:"array<color>"})}var bD=Object.freeze({__proto__:null,isRange:Ia,mix:X0,range:Gn,register:wD,steps:eh}),th=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Wr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,s]=e,[o,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-n)/l+2;break;case s:o=(n-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(s){let o=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),rh=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:th,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),DD=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:rh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let s=1-n,o=s===0?0:1-r/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ED=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],vD=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var nh=new ke({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:ED,fromXYZ_M:vD}),AD=new ke({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:nh,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const CD=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],$D=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var ih=new ke({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ba,toXYZ_M:CD,fromXYZ_M:$D});const SD=1/512,kD=16/512;var TD=new ke({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:ih,toBase(e){return e.map(t=>t<kD?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=SD?t**(1/1.8):16*t)}}),FD=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Rr,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ot(i)]},toBase(e){let[t,r,n]=e,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let sh=ve.D65;const xD=216/24389,Hl=24389/27,[Kl,Zl]=gs({space:me,coords:sh});var oh=new T({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:sh,base:me,fromBase(e){let t=[le(e[0]),le(e[1]),le(e[2])],r=t[1],[n,i]=gs({space:me,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=xD?Hl*r:116*Math.cbrt(r)-16;return[s,13*s*(n-Kl),13*s*(i-Zl)]},toBase(e){let[t,r,n]=e;if(t===0||It(t))return[0,0,0];r=le(r),n=le(n);let i=r/(13*t)+Kl,s=n/(13*t)+Zl,o=t<=8?t/Hl:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),_a=new T({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:oh,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ot(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const MD=216/24389,ND=24389/27,Yl=fe[0][0],Jl=fe[0][1],ro=fe[0][2],Ql=fe[1][0],Xl=fe[1][1],no=fe[1][2],ec=fe[2][0],tc=fe[2][1],io=fe[2][2];function br(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function qi(e){const t=Math.pow(e+16,3)/1560896,r=t>MD?t:e/ND,n=r*(284517*Yl-94839*ro),i=r*(838422*ro+769860*Jl+731718*Yl),s=r*(632260*ro-126452*Jl),o=r*(284517*Ql-94839*no),a=r*(838422*no+769860*Xl+731718*Ql),u=r*(632260*no-126452*Xl),l=r*(284517*ec-94839*io),d=r*(838422*io+769860*tc+731718*ec),c=r*(632260*io-126452*tc);return{r0s:n/s,r0i:i*e/s,r1s:n/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/c,b0i:d*e/c,b1s:l/(c+126452),b1i:(d-769860)*e/(c+126452)}}function rc(e,t){const r=t/360*Math.PI*2,n=br(e.r0s,e.r0i,r),i=br(e.r1s,e.r1i,r),s=br(e.g0s,e.g0i,r),o=br(e.g1s,e.g1i,r),a=br(e.b0s,e.b0i,r),u=br(e.b1s,e.b1i,r);return Math.min(n,i,s,o,a,u)}var BD=new T({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:_a,gamutSpace:Wr,fromBase(e){let[t,r,n]=[le(e[0]),le(e[1]),le(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=qi(t),o=rc(s,n);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[le(e[0]),le(e[1]),le(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=qi(n);i=rc(s,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});fe[0][0];fe[0][1];fe[0][2];fe[1][0];fe[1][1];fe[1][2];fe[2][0];fe[2][1];fe[2][2];function Dr(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function nc(e){let t=Dr(e.r0s,e.r0i),r=Dr(e.r1s,e.r1i),n=Dr(e.g0s,e.g0i),i=Dr(e.g1s,e.g1i),s=Dr(e.b0s,e.b0i),o=Dr(e.b1s,e.b1i);return Math.min(t,r,n,i,s,o)}var PD=new T({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:_a,gamutSpace:"self",fromBase(e){let[t,r,n]=[le(e[0]),le(e[1]),le(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=qi(t),o=nc(s);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[le(e[0]),le(e[1]),le(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=qi(n);i=nc(s)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ic=203,sc=2610/2**14,LD=2**14/2610,ID=2523/2**5,oc=2**5/2523,ac=3424/2**12,uc=2413/2**7,lc=2392/2**7;var _D=new ke({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:ps,toBase(e){return e.map(function(t){return(Math.max(t**oc-ac,0)/(uc-lc*t**oc))**LD*1e4/ic})},fromBase(e){return e.map(function(t){let r=Math.max(t*ic/1e4,0),n=ac+uc*r**sc,i=1+lc*r**sc;return(n/i)**ID})}});const cc=.17883277,dc=.28466892,fc=.55991073,so=3.7743;var OD=new ke({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ps,toBase(e){return e.map(function(t){return t<=.5?t**2/3*so:(Math.exp((t-fc)/cc)+dc)/12*so})},fromBase(e){return e.map(function(t){return t/=so,t<=1/12?Math.sqrt(3*t):cc*Math.log(12*t-dc)+fc})}});const ah={};_t.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=uh(e.W1,e.W2,e.options.method))});_t.add("chromatic-adaptation-end",e=>{e.M||(e.M=uh(e.W1,e.W2,e.options.method))});function ys({id:e,toCone_M:t,fromCone_M:r}){ah[e]=arguments[0]}function uh(e,t,r="Bradford"){let n=ah[r],[i,s,o]=re(n.toCone_M,e),[a,u,l]=re(n.toCone_M,t),d=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],c=re(d,n.toCone_M);return re(n.fromCone_M,c)}ys({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});ys({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});ys({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});ys({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(ve,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ve.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const RD=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],VD=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var lh=new ke({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ve.ACES,toXYZ_M:RD,fromXYZ_M:VD});const fi=2**-16,oo=-.35828683,hi=(Math.log2(65504)+9.72)/17.52;var UD=new ke({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[oo,hi],name:"Red"},g:{range:[oo,hi],name:"Green"},b:{range:[oo,hi],name:"Blue"}},referred:"scene",base:lh,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-fi)*2:r<hi?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(fi)+9.72)/17.52:t<fi?(Math.log2(fi+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),hc=Object.freeze({__proto__:null,A98RGB:AD,A98RGB_Linear:nh,ACEScc:UD,ACEScg:lh,CAM16_JMh:Fb,HCT:Sn,HPLuv:PD,HSL:th,HSLuv:BD,HSV:rh,HWB:DD,ICTCP:Oo,JzCzHz:_o,Jzazbz:_0,LCH:$n,LCHuv:_a,Lab:Ne,Lab_D65:Uo,Luv:oh,OKLCH:FD,OKLab:Rr,P3:Y0,P3_Linear:K0,ProPhoto:TD,ProPhoto_Linear:ih,REC_2020:H0,REC_2020_Linear:ps,REC_2100_HLG:OD,REC_2100_PQ:_D,XYZ_ABS_D65:Pa,XYZ_D50:Ba,XYZ_D65:me,sRGB:Wr,sRGB_Linear:Z0});let Y=class Ce{constructor(...t){let r;t.length===1&&(r=O(t[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=t,Object.defineProperty(this,"space",{value:T.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Ce(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=qb(this,...t);return r.color=new Ce(r.color),r}static get(t,...r){return t instanceof Ce?t:new Ce(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:s}=n,o=function(...a){let u=r(...a);if(s==="color")u=Ce.get(u);else if(s==="function<color>"){let l=u;u=function(...d){let c=l(...d);return Ce.get(c)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Ce.get(l)));return u};t in Ce||(Ce[t]=o),i&&(Ce.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let r in t)Ce.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ce);else for(let r in t)Ce.defineFunction(r,t[r])}};Y.defineFunctions({get:Me,getAll:qn,set:vt,setAll:Na,to:ee,equals:Gb,inGamut:ir,toGamut:Ot,distance:I0,toString:pn});Object.assign(Y,{util:z2,hooks:_t,WHITES:ve,Space:T,spaces:T.registry,parse:P0,defaults:Le});for(let e of Object.keys(hc))T.register(hc[e]);for(let e in T.registry)Wo(e,T.registry[e]);_t.add("colorspace-init-end",e=>{Wo(e.id,e),e.aliases?.forEach(t=>{Wo(t,e)})});function Wo(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return T.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=T.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=T.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Y.extend(Ur);Y.extend({deltaE:nn});Object.assign(Y,{deltaEMethods:Ur});Y.extend(yD);Y.extend({contrast:fD});Y.extend(mD);Y.extend(Kb);Y.extend(bD);Y.extend(ki);function WD(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function jD(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}let zD=class{listeners={};getListenerCount(){return Dn(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=v.isString(t)?t:t.type;function o(){return i[s]?.delete(r)||!1}function a(u,l){n.once&&o(),r(u,l)}return ga(i,s,()=>new Map).set(r,{listener:a,removeListener:o}),o}removeListener(t,r){const n=v.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=Dn(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}},qD=class extends zD{};const GD=Symbol("no update");class ao extends WD()("observable-value-update"){}class HD extends jD("observable-destroy"){}class KD{listenTarget=new qD;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===GD||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new ao({detail:r})),!0)}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(ao,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(ao,r)}destroy(){this.listenTarget.dispatch(new HD),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function ZD(e,t){return vw(e,t,(r,n)=>v.isFunction(r)&&v.isFunction(n)?!0:v.strictEquals(r,n))}function YD(e,t){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1,o=i||s;return _i(e)===_i(t)&&o}const ch="__vir__shape__definition__key__do__not__use__in__actual__objects";function dh(e){return v.hasKey(e,ch)}const fh=Symbol("and"),hh=Symbol("instance"),mh=Symbol("enum"),ph=Symbol("exact"),Oa=Symbol("indexed-keys"),gh=Symbol("or"),Ra=Symbol("unknown"),JD=[fh,mh,ph,Oa,hh,gh,Ra],yh="__vir__shape__specifier__key__do__not__use__in__actual__objects";function wh(...e){return bh(e,Oa)}function QD(e){return bh([e],Ra)}function ws(e){return cr(e,fh)}function bs(e){return cr(e,hh)}function Ds(e){return cr(e,mh)}function Es(e){return cr(e,ph)}function vs(e){return cr(e,Oa)}function Hn(e){return cr(e,gh)}function As(e){return cr(e,Ra)}function cr(e,t){const r=Kn(e);return!!r&&r.specifierType===t}function bh(e,t){return{[yh]:!0,specifierType:t,parts:e}}function tr(e,t,r,n){const i=Kn(t);if(i){if(bs(i))return e instanceof i.parts[0];if(ws(i))return i.parts.every(s=>tr(e,s));if(Hn(i))return i.parts.some(s=>tr(e,s));if(Es(i))return v.isObject(e)?tr(e,i.parts[0]):e===i.parts[0];if(Ds(i))return v.hasValue(Object.values(i.parts[0]),e);if(vs(i))return v.isObject(e)?XD(e,i,!!r)&&Dn(e).every(s=>tr(s,i.parts[0].values)):!1;if(As(i))return!0}return n?t===e:YD(e,t)}function XD(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys;if(r)if(n){const s=Va(t);return v.isBoolean(s)?s:s.every(o=>ae(e).some(a=>tr(a,o,!1,!0)))}else return!0;else return ae(e).every(s=>tr(s,i))}function Va(e){const t=e.parts[0].keys,r=Kn(t);if(v.isPropertyKey(t))return[t];if(r){if(bs(r))return!1;if(ws(r))return!1;if(Hn(r)){const n=r.parts.map(s=>Va(wh({...e.parts[0],keys:s})));let i;return n.forEach(s=>{if(v.isBoolean(s))s&&i==null?i=!0:i=!1;else return}),v.isBoolean(i)?i:n.flat().filter(v.isPropertyKey)}else if(Es(r)){const n=r.parts.filter(v.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(Ds(r))return Object.values(r.parts[0]);if(vs(r))return!1;if(As(r))return!0}}return!1}function Kn(e){if(v.isObject(e)&&v.hasKey(e,yh)){if(!v.hasKey(e,"parts")||!v.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!v.hasKey(e,"specifierType")||!v.hasValue(JD,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let mc=class extends TypeError{name="DefaultValueConstructionError"};function jo(e){return sn(e)}function sn(e){const t=Kn(e);if(t)if(bs(t)){const r=t.parts[0];try{return new r}catch(n){throw new mc(`Failed to create default value for classShape for class '${r.name}': ${je(n)}`)}}else{if(Hn(t)||Es(t))return sn(t.parts[0]);if(ws(t))return t.parts.reduce((r,n)=>Object.assign(r,sn(n)),{});if(Ds(t))return Object.values(t.parts[0])[0];if(vs(t)){const r=Va(t);return!t.parts[0].required||v.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,sn(t.parts[0].values)]))}else{if(As(t))return t.parts[0]??{};throw new mc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return dh(e)?jo(e.shape):e instanceof RegExp?e:v.isArray(e)?e.map(sn):v.isObject(e)?ze(e,(r,n)=>jo(n)):e}function Ua(e,t=!1){return{shape:e,get runtimeType(){throw new Error("runtimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return jo(e)},[ch]:!0}}let _e=class extends TypeError{name="ShapeMismatchError"};function eE(e,t,r={}){try{return tE(e,t,r),!0}catch{return!1}}function tE(e,t,r={},n=""){try{ct({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?es(i,n):i}}function zo(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ct({subject:e,shape:t,keys:r,options:n}){if(As(t))return!0;if(dh(t))return ct({subject:e,shape:t.shape,keys:r,options:n});const i=zo(r);if(Kn(e))throw new _e(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(tr(e,t,!n.ignoreExtraKeys)){if(v.isFunction(t))return v.isFunction(e);if(bs(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(d=>[d,!1])),u=[];let l=!1;if(Hn(t)){const d=[];l=t.parts.some(c=>{try{const f=ct({subject:e,shape:c,keys:r,options:{...n}});return Object.assign(a,f),!0}catch(f){if(f instanceof _e)return d.push(f.message),!1;throw f}}),!l&&v.isLengthAtLeast(d,1)&&u.push(d[0])}else if(ws(t))l=t.parts.every(d=>{try{const c=ct({subject:e,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof _e)return u.push(c.message),!1;throw c}});else if(Es(t)){const d=ct({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,d),l=!0}else{if(Ds(t))throw new _e(`Cannot compare an enum specifier to an object at ${i}`);if(v.isArray(t)&&v.isArray(o))l=o.every((d,c)=>{const f=t.some(m=>{try{return ct({subject:d,shape:m,keys:[...r,c],options:n}),!0}catch(g){if(g instanceof _e)return u.push(g.message),!1;throw g}});return a[c]=f,f});else if(vs(t)){const d=ze(e,(c,f)=>(n.ignoreExtraKeys||ct({shape:t.parts[0].keys,subject:c,keys:[...r,c],options:n}),ct({shape:t.parts[0].values,subject:f,keys:[...r,c],options:n}),!0));Object.assign(a,d),l=!0}else{const d=rE({keys:r,options:n,shape:t,subject:e});Object.assign(a,d),l=!0}}if(u.length)throw new _e(Xi(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(f=>!a[f]).map(f=>zo([...r,f])).join(",")}`;throw new _e(c)}return n.ignoreExtraKeys||Object.entries(a).forEach(([d,c])=>{if(!c)throw new _e(`subject as extra key '${d}' in ${i}.`)}),a}else if(n.exactValues)return e===t}else throw new _e(`Subject does not match shape definition at key ${i}`);return!0}function rE({keys:e,options:t,shape:r,subject:n}){const i=zo(e),s={};if(v.isObject(r)){const o=new Set(ae(r)),a=new Set(ae(n));o.forEach(u=>{u in n&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new _e(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=r[u],d=Hn(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!d&&!c)throw new _e(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const d=r[u];ct({subject:l,shape:d,keys:[...e,u],options:t}),s[u]=!0})}else throw new _e(`shape definition at ${i} was not an object.`);return s}const nE=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],iE=nE.reduce((e,t)=>(e[t]=t,e),{});X.defaultZone.name;iE.UTC;N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";var pc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(pc||(pc={}));const sE=["hour","minute","second","millisecond"],oE={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};a2(oE,sE);X.defaultLocale;const aE=Ua({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:QD()});function uo(e){return eE(e,aE,{allowExtraKeys:!0})}class Dh extends KD{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||ZD}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:uE}=I2,gc=()=>document.createComment(""),Xr=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(gc(),i),o=n.insertBefore(gc(),i);r=new uE(s,o,e,e.options)}else{const s=r._$AB.nextSibling,o=r._$AM,a=o!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==o._$AU&&r._$AP(u)}if(s!==i||a){let u=r._$AA;for(;u!==s;){const l=u.nextSibling;n.insertBefore(u,i),u=l}}}return r},Yt=(e,t,r=e)=>(e._$AI(t,r),e),lE={},cE=(e,t=lE)=>e._$AH=t,dE=e=>e._$AH,lo=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wt=e=>(...t)=>({_$litDirective$:e,values:t});class At{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fE={attribute:!0,type:String,converter:Vi,reflect:!1,hasChanged:$a},hE=(e=fE,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function mE(e){return(t,r)=>typeof r=="object"?hE(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn=Wt(class extends At{constructor(e){if(super(e),e.type!==Cs.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eh=e=>e??te;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qo extends At{constructor(t){if(super(t),this.it=te,t.type!==Cs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===te||t==null)return this._t=void 0,this.it=t;if(t===Pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}qo.directiveName="unsafeHTML",qo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yc extends qo{}yc.directiveName="unsafeSVG",yc.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pE(e,t,r){return e?t(e):r?.(e)}class vh extends mn{static assign;static assignedInputs;static tagName;static styles;static render;static inputsType;static stateType;static updateStateType;static events;static stateInitStatic;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function gE(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function Ti(e){return v.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Wa(e){return v.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Ah(e){return wa(e,t=>{if(Ti(t))return t.definition;if(Wa(t))return t.tagInterpolationKey||t},v.isTruthy)}const Ch=new WeakMap;function yE(e,t){const r=Ah(t);return $h(Ch,[e,...r]).value?.template}function wE(e,t,r){const n=Ah(t);return kh(Ch,[e,...n],r)}function $h(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Sh(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?$h(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Sh(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function kh(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Sh(e,t,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),kh(u,t,r,n+1)}function Th(e,t,r){const n=yE(e,t),i=n??r();if(!n){const a=wE(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=gE(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Fh(e,t,r,n){const i=[],s=[],o=[],a=[];return e.forEach((l,d)=>{const c=i.length-1,f=i[c],m=d-1,g=t[m];n&&n(l);let y,E=[];if(typeof f=="string"&&(y=r(f,l,g),y)){i[c]=[f,y.replacement].join(""),o.push(m);const A=y.getExtraValues;E=A?A(g):[],E.length&&A?(i[c]+=" ",E.forEach((x,P)=>{P&&i.push(" ")}),a.push(x=>{const P=x[m],j=A(P);return{index:m,values:j}}),i.push(l)):i[c]+=l}y||i.push(l);const D=e.raw[d];y?(s[c]=[s[c],y.replacement,D].join(""),E.length&&E.forEach(()=>{s.push("")})):s.push(D)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const d=a.flatMap(c=>c(l));return{valueIndexDeletions:o,valueInsertions:d}}}}function bE(...[e,t,r]){if(Wa(r))return{replacement:r.tagName,getExtraValues:void 0}}function DE(e,t){return Fh(e,t,bE)}function C(e,...t){const r=Th(e,t,()=>DE(e,t));return Si(r.strings,...r.values)}const EE={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function xh(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof vh?!0:xh(r)}function Mh(e,t){const r=e.instanceState;ae(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ae(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),vE(e)}function vE(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function wc(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class AE extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function ja(){return e=>class extends AE{static type=e;_type=e;constructor(t){super(e,t)}}}function et(){return ja()}function CE(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=ja()([e,n].join("-"));return r[n]=i,r},{}):{}}function $E(e){return e?ze(e,t=>t):{}}const Gi=Symbol("element-vir-state-setup");function SE(e){return v.isObject(e)?Gi in e&&v.isFunction(e[Gi]):!1}function Nh(e,t){t in e||mE()(e,t)}function kE(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function bc(e,t){const r=e;function n(o){t?kE(o,e,e.tagName):Nh(e,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,u){const l=SE(u)?u[Gi]():u;n(a);const d=r[a];function c(m){o[a]=m,r[a]=m}const f=e.observablePropertyListenerMap[a];if(d!==l&&uo(d)&&f&&d.removeListener(f),uo(l))if(f)l.listen(!1,f);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,l.listen(!1,m)}else uo(d)&&(e.observablePropertyListenerMap[a]=void 0);return c(l),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function TE({hostClassNames:e,cssVars:t}){return{hostClasses:ze(e,(r,n)=>({name:se(n),selector:se(`:host(.${n})`)})),cssVars:t}}function FE({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&ae(t).forEach(s=>{const o=t[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function xE({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(o){ae(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function ME(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function $s(e){const t=e;if(!v.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");if(!v.isString(t.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!t.render||typeof t.render=="string")throw new Error(`Failed to define element '${t.tagName}': render is not a function`);const r={...EE,...t.options},n=CE(t.tagName,t.events),i=$E(t.hostClasses);t.hostClasses&&wc(t.tagName,t.hostClasses),t.cssVars&&wc(t.tagName,t.cssVars);const s=t.cssVars?Ut(t.cssVars):{},o=ME(t.slotNames),a=typeof t.styles=="function"?t.styles(TE({hostClassNames:i,cssVars:s})):t.styles||C``,u=t.render;function l(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:c}}const d=class extends vh{static elementOptions=r;static tagName=t.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return xE({element:this,eventsMap:n,cssVars:s,slotNamesMap:o})}static assign=l;static events=n;static render=u;static hostClasses=i;static cssVars=s;static init=t;static slotNames=o;static stateInitStatic=t.stateInitStatic;get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}_initCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;_haveInputsBeenSet=!1;render(){this._internalRenderCount++;try{xh(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${$s.name}' to define ${t.tagName}.`),this._hasRendered=!0;const c=this.createRenderParams();if(!this._initCalled&&t.init&&(this._initCalled=!0,t.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(c);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return FE({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},f}catch(c){const f=es(c,`Failed to render ${t.tagName}`);return console.error(f),this._lastRenderError=f,je(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&t.init){this._initCalled=!0;const c=this.createRenderParams();if(t.init(c)instanceof Promise)throw new TypeError(`init in '${t.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{v.hasKey(c,"destroy")&&v.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanup){const c=this.createRenderParams();if(t.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${t.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){Mh(this,c)}observablePropertyListenerMap={};instanceInputs=bc(this,!1);instanceState=bc(this,!r.allowPolymorphicState);constructor(){super();const c=t.stateInitStatic||{};ae(c).forEach(f=>{Nh(this,f),this.instanceState[f]=c[f]}),this.definition=d}};return Object.defineProperties(d,{name:{value:f2(t.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,d),d}function Bh(){return e=>{const t=e;if(!v.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return $s({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dc=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},NE=Wt(class extends At{constructor(e){if(super(e),e.type!==Cs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,s[o]=r(a,o),o++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=dE(e),{values:s,keys:o}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,d,c=0,f=i.length-1,m=0,g=s.length-1;for(;c<=f&&m<=g;)if(i[c]===null)c++;else if(i[f]===null)f--;else if(a[c]===o[m])u[m]=Yt(i[c],s[m]),c++,m++;else if(a[f]===o[g])u[g]=Yt(i[f],s[g]),f--,g--;else if(a[c]===o[g])u[g]=Yt(i[c],s[g]),Xr(e,u[g+1],i[c]),c++,g--;else if(a[f]===o[m])u[m]=Yt(i[f],s[m]),Xr(e,i[c],i[f]),f--,m++;else if(l===void 0&&(l=Dc(o,m,g),d=Dc(a,c,f)),l.has(a[c]))if(l.has(a[f])){const y=d.get(o[m]),E=y!==void 0?i[y]:null;if(E===null){const D=Xr(e,i[c]);Yt(D,s[m]),u[m]=D}else u[m]=Yt(E,s[m]),Xr(e,i[c],E),i[y]=null;m++}else lo(i[f]),f--;else lo(i[c]),c++;for(;m<=g;){const y=Xr(e,u[g+1]);Yt(y,s[m]),u[m++]=y}for(;c<=f;){const y=i[c++];y!==null&&lo(y)}return this.ut=o,cE(e,u),Pe}}),BE=NE;function Ss(e,t){return Tn(e,t),e.element}function PE(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Tn(e,t){const r=PE(e),n=r?`: in ${r}`:"";if(e.type!==Cs.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function LE(e){const t=Wt(class extends At{element;constructor(r){super(r),this.element=Ss(r,e)}render(r){return this.element.setAttribute(e,r),Pe}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Z(e,t){return IE(e,t)}const IE=Wt(class extends At{element;lastListenerMetaData;constructor(e){super(e),this.element=Ss(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Pe}}),Ec="onDomCreated",vc=Wt(class extends At{element;constructor(e){super(e),Tn(e,Ec)}update(e,[t]){Tn(e,Ec);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),co="onResize",Ph=Wt(class extends At{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Tn(e,co)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${co} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Tn(e,co),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Se(e,t,r){return pE(e,()=>t,()=>r)}const{attributeDirective:_E,attributeSelector:xA,attributeName:MA}=LE("data-test-id"),on=_E;ae({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",render:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function OE(e){return{[Gi]:e}}function Lh(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return{defineElement:()=>n=>(t(n),Bh()(r(n))),defineElementNoInputs:n=>(t(n),$s(r(n)))}}function RE(e,t){return VE(void 0,e)}const VE=Wt(class extends At{element;constructor(e){super(e),this.element=Ss(e,"assign")}render(e,t){return Mh(this.element,t),Pe}}),UE={};function WE(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=Ih(i,s);if(o&&v.isString(r))return{tagName:r,tagInterpolationKey:ga(UE,r,()=>({tagName:r}))}}return r})}function Ih(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function jE(...[e,t,r]){const n=Ti(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=Ih(e,t),o=Wa(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);if(!s||!o)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!Ti(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const l=Ti(u)?u.inputs:void 0;return[i&&l?RE(l):void 0].filter(v.isTruthy)}}}function zE(e){}function qE(e){return Fh(e.strings,e.values,jE,zE)}function b(e,...t){const r=WE(e,t),n=L2(e,...r),i=Th(e,r,()=>qE(n));return{...n,strings:i.strings,values:i.values}}function _h(e){return ze(e,(t,r)=>r instanceof Y?se(r.toString({format:"hex"})):_h(r))}const GE="dodgerblue";function Go(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function fo({background:e,foreground:t}){return{background:e??new Y(Go(t)),foreground:t??new Y(Go(e))}}function HE(e){return e==="black"?"white":"black"}const KE={black:{foregroundFaint1:new Y("#ccc"),foregroundFaint2:new Y("#eee")},white:{foregroundFaint1:new Y("#ccc"),foregroundFaint2:new Y("#eee")}},ZE={black:{backgroundFaint1:new Y("#666"),backgroundFaint2:new Y("#444")},white:{backgroundFaint1:new Y("#ccc"),backgroundFaint2:new Y("#fafafa")}};function Ac({themeColor:e=GE,themeStyle:t="light"}={}){const r=new Y(e),n=new Y(t==="dark"?"black":"white"),i=Go(n),s=new Y(i),o={nav:{hover:fo({background:r.clone().set({"hsl.l":93})}),active:fo({background:r.clone().set({"hsl.l":90})}),selected:fo({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...ZE[HE(i)],foreground:s,...KE[i]}};return _h(o)}var gt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(gt||{});async function Ho(e=1){const t=new dd;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function YE(e){return[...e.children,...e.shadowRoot?.children??[]]}function JE(e){return e.matches(":focus")}function Hi(e){if(e instanceof ShadowRoot)return Hi(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:Hi(t)}function Oh(e,t){if(t(e))return e;const r=Hi(e);if(r)return Oh(r,t)}async function QE(e){return XE(e,1)}async function XE(e,t){return new Promise(r=>{new IntersectionObserver((i,s)=>{Kr.isLengthAtLeast(i,1),s.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function an(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}function e5(e){const t=Hi(e);return t&&Oh(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}const t5={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},r5=Object.keys(t5),n5={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},i5=Object.keys(n5),s5={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},o5=Object.keys(s5);Array.from(new Set([...r5,...o5,...i5].sort()));function a5({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<n;o++){const u=s.codePointAt(o);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const u5=s0(32);function Fi(e){return e.join(u5)}function Rh(e){if(!e.length)return[];const t=Fi(e),r=Rh(e.slice(0,-1));return[t,...r]}const l5=["error","errors"];function c5(e){return l5.includes(e)}function d5({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(o=>(n(o),Fi(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&c5(t),o=Fi(i.fullUrlBreadcrumbs);if(a5({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[o]){const u=Rh(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[o]=!1}),e.filter(i=>{const s=Fi(i.fullUrlBreadcrumbs),o=r[s];if(!v.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class za extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class Cc extends za{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class f5 extends za{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}const h5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function m5(e,t){return e?h5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function p5(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var $c;(function(e){e.Upper="upper",e.Lower="lower"})($c||($c={}));var Sc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Sc||(Sc={}));function g5(e){return e?e instanceof Error?e.message:m5(e,"message")?String(e.message):String(e):""}function kc(e){return!!e&&typeof e=="object"}function y5(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}y5();class w5 extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const b5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function D5(e,t){return e?b5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function E5(e){return e instanceof Promise}function Ki(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function z(e,t){return Ki(e)===t}class v5 extends Error{constructor(t){super(`Failed to compare objects using JSON.stringify: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function ho(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ko(e,t){try{if(e===t||ho(e,t))return!0;if(kc(e)&&kc(t)){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length||n.length)return ho(r,n)?p5(e).every(s=>Ko(e[s],t[s])):!1}return ho(e,t)}catch(r){throw new v5(g5(r))}}function A5(e,t){return e===t}function C5(e,t){if(!(z(e,"string")||z(e,"number")||z(e,"symbol")))throw new w5(`value is of type '${Ki(e)}' but expected a PropertyKey.`)}function xr(e){try{return C5(e),!0}catch{return!1}}const $5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function gn(e,t){return e?$5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ar(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function S5(e){return ar(e).map(t=>e[t])}function k5(e,t){return e.includes(t)}function T5(e){return!!e}var Tc;(function(e){e.Upper="upper",e.Lower="lower"})(Tc||(Tc={}));var Fc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Fc||(Fc={}));function F5(e){return e?e.map(qa).filter(T5).join(`
`):""}function qa(e){return e?e instanceof Error?e.message:gn(e,"message")?String(e.message):String(e):""}function x5(e){return e instanceof Error?e:new Error(qa(e))}function M5(e,t){const r=x5(e);return r.message=`${t}: ${r.message}`,r}function Vh(e,t){let r=!1;const n=ar(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(ar(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function N5(e,t){try{return B5(e,t),!0}catch{return!1}}function B5(e,t,r){if(e.length<t)throw new Error(`Array is not at least '${t}' in length.`)}function jr(e){return!!e&&typeof e=="object"}function P5(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}P5();function L5(e,t){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1,o=i||s;return Ki(e)===Ki(t)&&o}const Uh="__vir__shape__definition__key__do__not__use__in__actual__objects";function Wh(e){return gn(e,Uh)}const jh=Symbol("and"),zh=Symbol("instance"),qh=Symbol("enum"),Gh=Symbol("exact"),Ga=Symbol("indexed-keys"),Ha=Symbol("or"),Hh=Symbol("unknown"),I5=[jh,qh,Gh,Ga,zh,Ha,Hh],Kh="__vir__shape__specifier__key__do__not__use__in__actual__objects";function _5(...e){return Zh(e,Ga)}function mi(...e){return Zh(e,Ha)}function ks(e){return dr(e,jh)}function Ts(e){return dr(e,zh)}function Fs(e){return dr(e,qh)}function xs(e){return dr(e,Gh)}function Ms(e){return dr(e,Ga)}function Zn(e){return dr(e,Ha)}function Ns(e){return dr(e,Hh)}function dr(e,t){const r=Yn(e);return!!r&&r.specifierType===t}function Zh(e,t){return{[Kh]:!0,specifierType:t,parts:e}}function rr(e,t,r,n){const i=Yn(t);if(i){if(Ts(i))return e instanceof i.parts[0];if(ks(i))return i.parts.every(s=>rr(e,s));if(Zn(i))return i.parts.some(s=>rr(e,s));if(xs(i))return jr(e)?rr(e,i.parts[0]):e===i.parts[0];if(Fs(i))return Object.values(i.parts[0]).some(s=>s===e);if(Ms(i))return jr(e)?O5(e,i,!!r)&&S5(e).every(s=>rr(s,i.parts[0].values)):!1;if(Ns(i))return!0}return n?t===e:L5(e,t)}function O5(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys;if(r)if(n){const s=Ka(t);return z(s,"boolean")?s:s.every(o=>ar(e).some(a=>rr(a,o,!1,!0)))}else return!0;else return ar(e).every(s=>rr(s,i))}function Ka(e){const t=e.parts[0].keys,r=Yn(t);if(xr(t))return[t];if(r){if(Ts(r))return!1;if(ks(r))return!1;if(Zn(r)){const n=r.parts.map(s=>Ka(_5({...e.parts[0],keys:s})));let i;return n.forEach(s=>{z(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),z(i,"boolean")?i:n.flat().filter(xr)}else if(xs(r)){const n=r.parts.filter(xr);return n.length!==r.parts.length?!1:n}else{if(Fs(r))return Object.values(r.parts[0]);if(Ms(r))return!1;if(Ns(r))return!0}}return!1}function Yn(e){if(jr(e)&&gn(e,Kh)){if(!gn(e,"parts")||!z(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!gn(e,"specifierType")||!k5(I5,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let xc=class extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}};function Zo(e,t=!1){return un(e)}function un(e){const t=Yn(e);if(t)if(Ts(t)){const r=t.parts[0];try{return new r}catch(n){throw new xc(`Failed to create default value for classShape for class '${r.name}': ${qa(n)}`)}}else{if(Zn(t)||xs(t))return un(t.parts[0]);if(ks(t))return t.parts.reduce((r,n)=>Object.assign(r,un(n)),{});if(Fs(t))return Object.values(t.parts[0])[0];if(Ms(t)){const r=Ka(t);return!t.parts[0].required||z(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,un(t.parts[0].values)]))}else{if(Ns(t))return t.parts[0]??{};throw new xc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Wh(e)?Zo(e.shape):e instanceof RegExp?e:z(e,"array")?e.map(un):jr(e)?Vh(e,(r,n)=>Zo(n)):e}function R5(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return Zo(e)},[Uh]:!0}}class Oe extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function V5(e,t,r={},n=""){try{dt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?M5(i,n):i}}function Yo(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function dt({subject:e,shape:t,keys:r,options:n}){if(Ns(t))return!0;if(Wh(t))return dt({subject:e,shape:t.shape,keys:r,options:n});const i=Yo(r);if(Yn(e))throw new Oe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!rr(e,t,!n.ignoreExtraKeys))throw new Oe(`Subject does not match shape definition at key ${i}`);if(z(t,"function"))return z(e,"function");if(Ts(t))return e instanceof t.parts[0];if(jr(e)){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(d=>[d,!1])),u=[];let l=!1;if(Zn(t)){const d=[];l=t.parts.some(c=>{try{const f=dt({subject:e,shape:c,keys:r,options:{...n}});return Object.assign(a,f),!0}catch(f){if(f instanceof Oe)return d.push(f),!1;throw f}}),!l&&N5(d,1)&&u.push(d[0])}else if(ks(t))l=t.parts.every(d=>{try{const c=dt({subject:e,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Oe)return u.push(c),!1;throw c}});else if(xs(t)){const d=dt({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,d),l=!0}else{if(Fs(t))throw new Oe(`Cannot compare an enum specifier to an object at ${i}`);if(z(t,"array")&&z(o,"array"))l=o.every((d,c)=>{const f=t.some(m=>{try{return dt({subject:d,shape:m,keys:[...r,c],options:n}),!0}catch(g){if(g instanceof Oe)return u.push(g),!1;throw g}});return a[c]=f,f});else if(Ms(t)){const d=Vh(e,(c,f)=>(n.ignoreExtraKeys||dt({shape:t.parts[0].keys,subject:c,keys:[...r,c],options:n}),dt({shape:t.parts[0].values,subject:f,keys:[...r,c],options:n}),!0));Object.assign(a,d),l=!0}else{const d=U5({keys:r,options:n,shape:t,subject:e});Object.assign(a,d),l=!0}}if(u.length)throw new Oe(F5(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(f=>!a[f]).map(f=>Yo([...r,f])).join(",")}`;throw new Oe(c)}return n.ignoreExtraKeys||Object.entries(a).forEach(([d,c])=>{if(!c)throw new Oe(`subject as extra key '${d}' in ${i}.`)}),a}else if(n.exactValues)return e===t;return!0}function U5({keys:e,options:t,shape:r,subject:n}){const i=Yo(e),s={};if(jr(r)){const o=new Set(ar(r)),a=new Set(ar(n));o.forEach(u=>{u in n&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Oe(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=r[u],d=Zn(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!d&&!c)throw new Oe(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const d=r[u];dt({subject:l,shape:d,keys:[...e,u],options:t}),s[u]=!0})}else throw new Oe(`shape definition at ${i} was not an object.`);return s}var Mc;(function(e){e.Upper="upper",e.Lower="lower"})(Mc||(Mc={}));var Nc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Nc||(Nc={}));function W5(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}W5();function Yh({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function mo({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}var Bc;(function(e){e.Upper="upper",e.Lower="lower"})(Bc||(Bc={}));var Pc;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Pc||(Pc={}));function j5(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}j5();function z5(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function q5(e,t,r){if(t in e)return e[t];{const n=r();return E5(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(o)}}):(e[t]=n,n)}}const G5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Mr(e,t){return e?G5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Jo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function H5(e,t){return e.includes(t)}function K5(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Z5(e){return!!e}var Lc;(function(e){e.Upper="upper",e.Lower="lower"})(Lc||(Lc={}));function Y5(e,t){return e.split(t)}var Ic;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ic||(Ic={}));function J5(e){return e?e instanceof Error?e.message:Mr(e,"message")?String(e.message):String(e):""}function Q5(e,t){return Jo(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function Zi(e,t){let r=!1;const n=Jo(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Jo(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Jh(e){return!!e&&typeof e=="object"}function X5(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function ev(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ev();function bt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Za({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}const po="://";function Qh(...e){const t=e.join("/"),[r,n=""]=t.includes(po)?t.split(po):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const d=l[u+1];let c=a;const f=d?.startsWith("?"),m=!a.includes("?")&&f,g=d==="?";if(f||m){i=!0;let y=!1;const E=l.slice(u+2).reduce((D,A)=>(A.includes("#")&&(y=!0),y?D.concat(A):[D,A].join("&")),"");c=[a,d,g?Za({value:E,prefix:"&"}):E].join("")}return o.concat(c)},[]);return[r,r?po:"",s.join("/")].join("")}const Xh="__vir__shape__definition__key__do__not__use__in__actual__objects";function tv(e){return Mr(e,Xh)}const em=Symbol("and"),tm=Symbol("instance"),rm=Symbol("enum"),nm=Symbol("exact"),Ya=Symbol("indexed-keys"),im=Symbol("or"),sm=Symbol("unknown"),rv=[em,rm,nm,Ya,tm,im,sm],om="__vir__shape__specifier__key__do__not__use__in__actual__objects";function am(...e){return nv(e,Ya)}function um(e){return fr(e,em)}function lm(e){return fr(e,tm)}function cm(e){return fr(e,rm)}function dm(e){return fr(e,nm)}function fm(e){return fr(e,Ya)}function hm(e){return fr(e,im)}function mm(e){return fr(e,sm)}function fr(e,t){const r=Ja(e);return!!r&&r.specifierType===t}function nv(e,t){return{[om]:!0,specifierType:t,parts:e}}function pm(e){const t=e.parts[0].keys,r=Ja(t);if(xr(t))return[t];if(r){if(lm(r))return!1;if(um(r))return!1;if(hm(r)){const n=r.parts.map(s=>pm(am({...e.parts[0],keys:s})));let i;return n.forEach(s=>{z(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),z(i,"boolean")?i:n.flat().filter(xr)}else if(dm(r)){const n=r.parts.filter(xr);return n.length!==r.parts.length?!1:n}else{if(cm(r))return Object.values(r.parts[0]);if(fm(r))return!1;if(mm(r))return!0}}return!1}function Ja(e){if(Jh(e)&&Mr(e,om)){if(!Mr(e,"parts")||!z(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Mr(e,"specifierType")||!H5(rv,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class _c extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Qo(e,t=!1){return ln(e)}function ln(e){const t=Ja(e);if(t)if(lm(t)){const r=t.parts[0];try{return new r}catch(n){throw new _c(`Failed to create default value for classShape for class '${r.name}': ${J5(n)}`)}}else{if(hm(t)||dm(t))return ln(t.parts[0]);if(um(t))return t.parts.reduce((r,n)=>Object.assign(r,ln(n)),{});if(cm(t))return Object.values(t.parts[0])[0];if(fm(t)){const r=pm(t);return!t.parts[0].required||z(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,ln(t.parts[0].values)]))}else{if(mm(t))return t.parts[0]??{};throw new _c(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return tv(e)?Qo(e.shape):e instanceof RegExp?e:z(e,"array")?e.map(ln):Jh(e)?Zi(e,(r,n)=>Qo(n)):e}function gm(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return Qo(e)},[Xh]:!0}}var Fn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Fn||(Fn={}));var xn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(xn||(xn={}));function pi(e,t){return e.map(r=>{if(r!=null)return Nr(String(r),t)}).filter(r=>r!=null)}function Nr(e,t){return t?.encoding===Fn.Decode?decodeURIComponent(e):t?.encoding===Fn.Encode?encodeURIComponent(e):e}const iv=gm(am({keys:"",values:[""],required:!0}));function sv(e,t,r){const n=r?.searchParamStrategy===xn.Clear?{}:Zi(e,(o,a)=>z(a,"string")?[a]:a),i=Zi(t,(o,a)=>{if(r?.searchParamStrategy===xn.Append){const u=n[o],l=z(u,"array")?u:[u];if(a){const d=z(a,"array")?a:[a];return pi([...l,...d],r)}else return pi(l,r)}else return z(a,"array")?pi(a,r):a?pi([a],r):void 0});return Q5({...n,...i},(o,a)=>!!a)}function ym(e,t){return z(e,"string")&&!e.includes("?")?{}:(z(e,"string")?e:e instanceof URL?e.search:e.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(s=>{const[o,...a]=Y5(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=wm({options:t,key:o,value:a}),l=q5(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function ov(e){if(e!=null)return z(e,"array")?[...e]:e===""?[]:[e]}function av(e,t){const r=K5(Object.entries(e),([n,i])=>{const s=ov(i);return s?.length?s.map(o=>{const a=wm({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?bt({value:r.join("&"),prefix:"?"}):""}function wm({options:e,key:t,value:r}){return{key:Nr(t,e),value:Nr(String(r),e)}}function bm({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",r?r+"@":"",Bs({hostname:t,port:i}),Qa({hash:e,pathname:n,search:o})].join("")}function Dm({pathname:e}){const t=Za({value:e,prefix:"/"});return t?t.split("/"):[]}function Qa({hash:e,pathname:t,search:r}){return[bt({value:t,prefix:"/"}),r?bt({value:r,prefix:"?"}):"",e?bt({value:e,prefix:"#"}):""].join("")}function Bs({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Em({hostname:e,port:t,protocol:r}){return[r,Bs({hostname:e,port:t})].filter(Z5).join("://")}function Yi(e,t){const r=z(e,"string")?e:e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?bt({value:Nr(n,t),prefix:"#"}):"",s=r.replace(/#.*$/,""),o=s.replace(/^[^\?]*(?:\?|$)/,""),a=o?bt({value:Nr(o,t),prefix:"?"}):"",u=s.replace(/\?.*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",d=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),c=d.replace(/@.*/,""),f=d.replace(/^[^@]*@/,""),m=c!==f,[g,...y]=m?c.split(":").reverse():[],E=y.reverse().join("").replace(/[\/:]/g,"")||"",D=g?.replace(/[\/:]/g,"")||"",A=f.replace(/[:\/].*/,""),x=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),P=Za({value:x.replace(/\/.*$/,""),prefix:":"}),j=Nr(x.replace(/^[^\/]*(?:\/|$)/,"/"),t),be=Bs({hostname:A,port:P}),$t=Em({hostname:A,port:P,protocol:l}),Ae=bm({hash:i,hostname:A,password:D,pathname:j,port:P,protocol:l,search:a,username:E}),Fe=ym(a),rt=Dm({pathname:j});return{fullPath:Qa({hash:i,pathname:j,search:a}),hash:i,host:be,hostname:A,href:Ae,origin:$t,password:D,pathname:j,paths:rt,port:P,protocol:l,search:a,searchParams:Fe,username:E}}function uv(e,t,r){const n=z(e,"string")?e:e instanceof URL?e.toString():"",i=z(e,"string")||e instanceof URL?t:e,s=z(e,"string")||e instanceof URL?r:t,o=Yi(n),a=Zi(o,(f,m)=>{if(!Mr(i,f))return m;const g=i[f];return z(g,"number")?String(g):z(g,"string")?f==="hash"&&g?bt({value:g,prefix:"#"}):f==="pathname"?bt({value:g,prefix:"/"}):g:m});D5(i,"paths")&&i.paths&&(a.pathname=Qh("",...i.paths));const u=z(i.search,"string")?ym(bt({value:i.search,prefix:"?"})):X5(i.search||{}),l=sv(a.searchParams,u,{...s,encoding:Fn.None}),d=av(l,s);return{...a,searchParams:l,search:d,paths:Dm(a),fullPath:Qa(a),host:Bs(a),origin:Em(a),href:bm({...a,search:d})}}const lv=gm({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:iv,hash:"",fullPath:"/",href:"/"});({...lv.defaultValue});const cv=R5({basePath:mi("",void 0),sanitizeRoute:e=>e,maxListenerCount:mi(1,void 0),disableWarnings:mi(void 0,!1),isPaused:mi(!1,void 0)}),dv=0;function vm(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==dv)}const Ps="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const fv=globalThis.history.pushState;function Oc(...e){const t=fv.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ps)),t}const hv=globalThis.history.replaceState;function Rc(...e){const t=hv.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ps)),t}function mv(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===Oc)throw new Cc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Rc)throw new Cc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Oc,globalThis.history.replaceState=Rc,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ps))})}}function go(e,t){const r=Yi(e),n=mo({value:mo({value:r.pathname,prefix:Yh({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?mo({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class pv{constructor(t){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),V5(t,cv),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Dh({defaultValue:r,equalityCheck:()=>!1}),mv(),this.removeGlobalListener=z5(globalThis,Ps,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new f5("Looping route sanitization detected; aborting window URL change listener.");const n=go(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);Ko(i,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Qh(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(go(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r=go(globalThis.location.href,void 0),n={...r,...t},i=this.sanitizeRoute(n),o=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return uv(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Yh({value:o.hash,prefix:"#"}):"#"},{searchParamStrategy:xn.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Yi(n);return this.params.isPaused||!r.force&&Ko(Yi(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return vm(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new za(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function gv(e){return new pv({basePath:e,sanitizeRoute(t){return{paths:yv(t.paths),hash:void 0,search:void 0}}})}function yv(e){const t=e[0];if(v.isEnumValue(t,Ke)){if(t===Ke.Book)return[Ke.Book,...e.slice(1)];if(t===Ke.Search)return e[1]?[t,e[1]]:[Ke.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Or.paths}const Ji=ja()("element-book-change-route"),Vc="vira-",{defineElement:wv,defineElementNoInputs:BA}=Lh({assertInputs:e=>{if(!e.tagName.startsWith(Vc))throw new Error(`Tag name should start with '${Vc}' but got '${e.tagName}'`)}}),Ct=wv,M=Ut({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),bv=Y;function Dv(e){try{if(!e)throw new Error("invalid empty color");return new bv(e)}catch{const t=String(e),r=t.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Vw(()=>JSON.stringify(e),{fallbackValue:t}):t;throw new Error(`Invalid color: ${r}`)}}function Te({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Uc(e,t){const r=ae(t).map(n=>{const i=t[n],s=Dv(i);return`${M[n].name}: ${s.toString()};`}).join(" ");return Te({name:e.name,svgTemplate:b`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const Am=Te({name:"Check24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ye=Ut({"vira-form-input-radius":"8px"}),Ls=C`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Qe=Ut({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ur=Ut({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":C`calc(${Ye["vira-form-input-radius"].value} + 4px)`});function Xa({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=se(u0(n+r+t));return C`
        ${se(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${ur["vira-focus-outline-color"].value};
            border-radius: ${ur["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Nt=Ut({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":ur["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),Ev=C`
    padding: 0;
    margin: 0;
`,Mt=C`
    ${Ev};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Wc=C`#e2e2e2`,Cm={menuShadow:C`
        filter: drop-shadow(0px 5px 5px ${Wc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:C`
        filter: drop-shadow(0px -5px 5px ${Wc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Mn=C`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,B=Ct()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),pt=Ct()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            ${Mn};
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

        ${e["vira-dropdown-item-selected"].selector} ${B} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${B} {
            transition: opacity
                ${Qe["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Ye["vira-form-input-radius"].value}
                ${Ye["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Ye["vira-form-input-radius"].value}
                ${Ye["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return b`
            <div class="option">
                <${B.assign({icon:Am})}></${B}>
                <slot>${e.label}</slot>
            </div>
        `}}),Xo="group";function vv(e,t,r){return[e,t,r].filter(n=>n!==void 0).join(",")||""}function Av(e){const[t,r,n]=e.split(",");return r?{type:"2d",xCord:nl(t),yCord:nl(r),isGroup:n===Xo}:{type:"1d",isGroup:t===Xo}}function Cv(e,t){Object.entries(t).forEach(([r,n])=>{v.isBoolean(n)&&n?e.setAttribute(r,""):v.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const $v=Wt(class extends At{element;lastKey;constructor(e){super(e),this.element=Ss(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Pe}}),Br={name:"data-nav",js(e){return e===""?`[${Br.name}]`:`[${Br.name}*="${String(e).replace(/"/g,"'")}"]`},css(e){return C`
            ${se(Br.js(e))}
        `}},Cr="nav-activated",ea={js:{click(e){return`${e}.${Cr}`},selected(e){return`${e}:focus`}},css:{click(e){return C`
                ${se(ea.js.click(e))}
            `},selected(e){return C`
                ${se(ea.js.selected(e))}
            `}}},Sv={activateKeys:["Space","Return","Enter"]};function kv(){$m=Uw(Sv)}let $m;kv();function jc(e){return $m.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function Tv(e,t){const r=vv(e,t);return $v(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")||e===Xo?{}:{tabindex:0},s={[Br.name]:r,...i};Kr.instanceOf(n,HTMLElement),Cv(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(Cr)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(Cr)},!0),n.addEventListener("blur",()=>{n.classList.remove(Cr)},!0),n.addEventListener("keydown",o=>{o.target===n&&jc(o)&&n.classList.add(Cr)},!0),n.addEventListener("keyup",o=>{o.target===n&&jc(o)&&n.classList.remove(Cr)},!0)})}function Fv(e,t){return Sm([],e,t)}function Sm(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?zc(t.children,t,0,e,r):t.children.some((n,i)=>zc(n,t,i,e,r))}function zc(e,t,r,n,i){return e.some((s,o)=>{const a=v.hasKey(t,"isRoot")&&t.isRoot?n:[t,...n];return i(a,s,{x:o,y:r})?!0:Sm(a,s,i)})}function xv(e){return e.toReversed().find(t=>!t.isGroup)}function Nn(e){if(!e)return;let t,r,n;Fv(e,(o,a,u)=>JE(a.element)?(t=o,r=a,n=u,!0):!1);const i=t?t[0]||e:void 0,s=t?xv(t)||e:void 0;if(!(!r||!i||!n||!s||!t))return{node:r,parent:i,nonGroupParent:s,ancestors:t}}function Bn(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function Mv(e){if(!e)return{success:!1,reason:"no nav tree"};const t=Nn(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const r=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return r?(Bn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function Nv(e){if(!e)return{success:!1,reason:"no nav tree"};const t=Nn(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const r=t.nonGroupParent;return r.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(Bn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element})}function km(e){const t=[];return YE(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=km(r),i=r.hasAttribute(Br.name)?Av(r.getAttribute(Br.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function Bv(e){const t=km(e);return Tm(t)}function Tm(e){if(!v.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(r=>{const n=r.children.length?Tm(r.children):void 0;if(r.navValue.isGroup&&!n){const o=new Error("group nav has no children");throw console.error(o,r),o}const i=Pv(r,t.children),s=n?{element:r.element,children:n.children,type:n.type,isGroup:r.navValue.isGroup,coords:i}:{element:r.element,type:"child",coords:i,isGroup:!1};if(r.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(Kr.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(r.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==r.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,r),o}}),t}function Pv(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function qc(e,t){return e>t}function Gc(e,t){return e<t}var Re;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Re||(Re={}));function eu(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?eu(t):t}function Hc(e,t,r){if(!e)return{success:!1,reason:"no nav tree"};const n=Nn(e);if(!n){const a=eu(e);return a?(Bn(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Fm(n.parent,t,n.node),o=r?!0:!s;return i&&o?(Bn(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function Fm(e,t,r){if(t===Re.Down||t===Re.Up){const i=t===Re.Down?Gc:qc,s=t===Re.Down?1:-1,o=e.type==="1d"?0:Zs(r.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?Zs(r.coords.x+s,{min:0,max:e.children.length-1}):a&&r.coords.x>=a.length?a.length-1:r.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],d=e.type==="1d"?i(u.x,r.coords.x):i(u.y,r.coords.y);return{nextNode:l?.element===r.element?void 0:l,requiresWrapping:d}}else{const i=t===Re.Right?Gc:qc,s=t===Re.Right?1:-1,o=e.type==="1d"?e.children:e.children[r.coords.y];Kr.isDefined(o,`No current row found at y index: '${r.coords.y}'`);const a={x:Zs(r.coords.x+s,{min:0,max:o.length-1}),y:r.coords.y},u=i(a.x,r.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===r.element?void 0:l,requiresWrapping:u}}}function Lv(e,t,r,n){const i=v.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=Fm(i,r,s),u=o?.isGroup?eu(o):o,l=n?!0:!a;return u?l?(Bn(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class xm{rootElement;constructor(t){this.rootElement=t}getCurrentlyFocused(){return Nn(this.buildNavTree())}buildNavTree(){return Bv(this.rootElement)}navigate({direction:t,allowWrapping:r}){return Hc(this.buildNavTree(),t,r)}enterInto(){return Mv(this.buildNavTree())}exitOutOf(){return Nv(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:r}){const n=this.buildNavTree(),i=Nn(n);return!i||!n?Hc(n,r,t):Lv(n,i,r,t)}}const Iv={option:"dropdown-option"},gi=Ct()({tagName:"vira-dropdown-options",events:{selectionChange:et()},styles:C`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Ye["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Nt["vira-form-background-color"].value};
            border: 1px solid ${Nt["vira-form-border-color"].value};
            color: ${Nt["vira-form-foreground-color"].value};
            ${Cm.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${ea.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Nt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${pt} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Ls};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=i.template||b`
                    <${pt.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${pt}>
                `;return b`
                <div
                    class="dropdown-item ${kn({disabled:!!i.disabled})}"
                    ${on(Iv.option)}
                    title=${Eh(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?te:Tv()}
                    ${Z("mousedown",o=>{o.stopPropagation()})}
                    ${Z("mouseup",o=>{o.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return b`
            <slot>${n}</slot>
        `}}),Mm=Te({name:"ChevronUp24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${M["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${M["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Nm=Te({name:"CloseX24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Bm=Te({name:"Element16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),yt=Te({name:"Element24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Pm=Te({name:"EyeClosed24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${M["vira-icon-fill-color"].value}
            stroke=${M["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${M["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Lm=Te({name:"EyeOpen24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${M["vira-icon-fill-color"].value}
            stroke=${M["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${M["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Im=Te({name:"Loader24Icon",svgTemplate:b`
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
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_v=C`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Qe["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Pn=Te({name:"LoaderAnimated24Icon",svgTemplate:b`
        <style>
            ${_v}
        </style>
        ${Im.svgTemplate}
    `}),tu=Te({name:"Options24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Qi=Te({name:"StatusFailure24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ov=Te({name:"StatusInProgress24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${M["vira-icon-stroke-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width="calc(${M["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${M["vira-icon-stroke-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width="calc(${M["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${M["vira-icon-stroke-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width="calc(${M["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Rv=Te({name:"StatusSuccess24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ta={Check24Icon:Am,ChevronUp24Icon:Mm,CloseX24Icon:Nm,Element16Icon:Bm,Element24Icon:yt,EyeClosed24Icon:Pm,EyeOpen24Icon:Lm,Loader24Icon:Im,LoaderAnimated24Icon:Pn,Options24Icon:tu,StatusFailure24Icon:Qi,StatusInProgress24Icon:Ov,StatusSuccess24Icon:Rv};class Vv extends Dh{constructor(){super({defaultValue:document.hidden,equalityCheck:A5}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Wv.includes(t.type),n=Uv.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const Uv=["blur","focusout","pagehide"],Wv=["focus","focusin","pageshow"],jv=new Vv;function zv(e,t){return jv.listen(e,t)}function qv(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Gv(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class Hv{listeners={};getListenerCount(){return Dn(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=v.isString(t)?t:t.type;function o(){return i[s]?.delete(r)||!1}function a(u,l){n.once&&o(),r(u,l)}return ga(i,s,()=>new Map).set(r,{listener:a,removeListener:o}),o}removeListener(t,r){const n=v.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=Dn(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class Kv extends Hv{}function Zv(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Kc(e,t,r){return Zv(globalThis,e,t,r)}const Zc={top:0,left:0,right:0,bottom:0};class _m extends Gv("hide-pop-up"){}class Om extends qv()("nav-select"){}class Yv{listenTarget=new Kv;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const r=new xm(t);this.cleanupCallbacks=[zv(!1,n=>{n||this.removePopUp()}),Kc("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Kc("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Re.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Re.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Re.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Re.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new Om({detail:s.node.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new _m)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=e5(t);Kr.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},d=ze(Zc,m=>s[m]),c=ze(Zc,m=>{const g=l[m],y=d[m];return Math.abs(g-y)}),f=c.top>c.bottom+n.verticalDiffThreshold&&c.bottom<n.minDownSpace;return this.attachGlobalListeners(t),{popDown:!f,positions:{container:l,root:d,diff:c}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function Jv({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),n.slice(0,1)):n}else return[]}function Qv(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${m2(r)}`)}function Yc(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function Jc({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}const yi={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},cn=Ct()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>C`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${ur["vira-focus-outline-color"].name}: ${Nt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Mt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Ye["vira-form-input-radius"].value};
            transition: border-radius
                ${Qe["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Xa({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${Qe["vira-interaction-animation-duration"].value}
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
            border: 1px solid ${Nt["vira-form-border-color"].value};
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
            ${Mn};
            border-radius: inherit;
            background-color: ${Nt["vira-form-background-color"].value};
            color: ${Nt["vira-form-foreground-color"].value};
        }

        .open-upwards ${gi} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Cm.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Ls}
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
    `,events:{selectedChange:et(),openChange:et()},stateInitStatic:{showPopUpResult:void 0,popUpManager:OE(()=>new Yv),navController:void 0},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(_m,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");Kr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(Om,o=>{const a=o.detail.x,u=n.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||Jc({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Yc(u.id,n.selected,!!n.isMultiSelect)))}),t({navController:new xm(r)})},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){Qv(n.options);function o(g){Jc(g,{dispatch:y=>{e(new t.openChange(y))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=Jv(n),u=n.icon?b`
                  <${B.assign({icon:n.icon})}
                      ${on(yi.icon)}
                  ></${B}>
              `:"",l=r.showPopUpResult?r.showPopUpResult.popDown?C`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:C`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function d(){o({emitEvent:!0,open:!r.showPopUpResult})}const c=!a.length,f=n.selectionPrefix&&!c?b`
                      <span class="selected-label-prefix" ${on(yi.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",m=c?n.placeholder||"":a.map(g=>g.label).join(", ");return b`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${kn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                ${on(yi.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Z("keydown",g=>{!r.showPopUpResult&&g.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${Z("click",g=>{g.detail===0&&d()})}
                ${Z("mousedown",g=>{g.button===0&&d()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${kn({"using-placeholder":c})}"
                        title=${Eh(c?m:void 0)}
                    >
                        ${f} ${m}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${B.assign({icon:Mm})}
                            class="trigger-icon"
                        ></${B}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${Se(!!r.showPopUpResult,b`
                            <${gi.assign({options:n.options,selectedOptions:a})}
                                ${Z(gi.events.selectionChange,g=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Yc(g.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${on(yi.options)}
                            ></${gi}>
                        `)}
                </div>
            </button>
        `}});var Rm=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Rm||{});const ce=Ct()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Mn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${ur["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ls};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Mt};
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
            border-radius: ${Ye["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Qe["vira-interaction-animation-duration"].value},
                background-color
                    ${Qe["vira-interaction-animation-duration"].value},
                border-color ${Qe["vira-interaction-animation-duration"].value};
        }

        ${Xa({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${B} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?b`
                  <${B.assign({icon:e.icon})}></${B}>
              `:"",r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:"";return b`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),ut=Ct()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Mt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Qe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:et()},stateInitStatic:{contentHeight:0},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?C`
                  height: ${e.contentHeight}px;
              `:C`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${Z("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${Ph(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Tt=Ct()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:et(),imageError:et()},styles:({hostClasses:e})=>C`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?b`
                  <slot class="status-wrapper" name=${s.error}>
                      <${B.assign({icon:Qi})} class="error"></${B}>
                  </slot>
              `:t.loadedUrls[o]?void 0:b`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${B.assign({icon:Pn})}></${B}>
                    </slot>
                `;return b`
            ${Se(!!a,a)}
            <img
                class=${kn({hidden:!!a})}
                ${Z("load",async()=>{e._debugLoadDelay&&await bn(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new i.imageLoad)})}
                ${Z("error",async u=>{e._debugLoadDelay&&await bn(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function ra({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ra({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Vm({value:e,allowed:t,blocked:r}){const n=t?ra({input:e,matcher:t}):!0,i=r?ra({input:e,matcher:r}):!1;return n&&!i}function Um(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(Vm({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Xv({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new TypeError("Text input event was not an InputEvent.");const s=an(r,HTMLInputElement),o=r.data,a=t;let u=s.value;if(o)if(o.length===1)Vm({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs})||(u=a,n(o));else{const{filtered:l,blocked:d}=Um({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u=l,n(d)}s.value!==u&&(s.value=u),a!==u&&i(u)}var Wm=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Wm||{});const ne=Ct()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":ur["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:et(),inputBlocked:et()},styles:({hostClasses:e,cssVars:t})=>C`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${ur["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ls};
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
                ${Mt};
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
                ${Mn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Mt};
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
                border-radius: ${Ye["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Qe["vira-interaction-animation-duration"].value};
            }

            label {
                ${Mt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Ye["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Xa({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Mt};
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
                ${Mn};
            }

            button {
                ${Mt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Qe["vira-interaction-animation-duration"].value};
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
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=Um({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?b`
                  <${B.assign({icon:e.icon})} class="left-side-icon"></${B}>
              `:"",a=e.fitText?C`
                  width: ${r.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type!=="text";return b`
            <label>
                ${o}
                ${Se(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${Ph(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${eA(e.type,r.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Z("input",l=>{Xv({inputs:e,filteredValue:s,event:l,inputBlockedCallback(d){t(new i.inputBlocked(d))},newValueCallback(d){t(new i.valueChange(d))}})})}
                    placeholder=${e.placeholder}
                />
                ${Se(!!(e.showClearButton&&e.value),b`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Z("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${B.assign({icon:Nm})}></${B}>
                        </button>
                    `)}
                ${Se(e.type==="password",b`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Z("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${B.assign({icon:r.showPassword?Lm:Pm})}></${B}>
                        </button>
                    `)}
                ${Se(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function eA(e,t){return e==="password"&&t?"text":e||"text"}const wi=Ct()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>C`
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
    `,render({inputs:e}){function t(r){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo(0,0)}if(e.link?.newTab)return b`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return b`
                <a href=${r} rel="noopener noreferrer" ${Z("click",t)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:qe,defineElementNoInputs:PA}=Lh(),Ve=qe()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>C`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return b`
            <a
                href=${r}
                ${Z("click",n=>{(!e.router||vm(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Ji(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function tA(e,t){return e.entry.entryType===ye.Root?!1:e.entry.entryType===ye.Page||v.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:v.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const ft=qe()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${G["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${G["element-book-nav-hover-background-color"].value};
            color: ${G["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${G["element-book-nav-active-background-color"].value};
            color: ${G["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Ve.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${G["element-book-nav-selected-background-color"].value};
            color: ${G["element-book-nav-selected-foreground-color"].value};
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

        ${B} {
            display: inline-flex;
            color: ${G["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!tA(r,e.selectedPath))return;const n=C`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return b`
                <li style=${n}>
                    <${Ve.assign({router:e.router,route:{paths:[Ke.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${kn({"title-row":!0,selected:e.selectedPath?v.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Se(Fr(r,ye.ElementExample),b`
                                    <${B.assign({icon:Bm})}></${B}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ve}>
                </li>
            `});return b`
            <${Ve.assign({route:Or,router:e.router})}>
                <slot name=${gt.NavHeader}>Book</slot>
            </${Ve}>
            <ul>
                ${t}
            </ul>
        `}});async function rA(e){await Ho(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await QE(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Vt=qe()({tagName:"book-error",styles:C`
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
    `,render({inputs:e}){return(v.isArray(e.message)?e.message:[e.message]).map(r=>b`
                <p>${r}</p>
            `)}}),Ln=qe()({tagName:"book-page-controls",events:{controlValueChange:et()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
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

        ${ne} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],s)=>{if(i.controlType===H.Hidden)return"";const o=nA(e.currentValues[n],i,a=>{const u=v.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return b`
                    <div class="control-wrapper">
                        ${Se(s===0,b`
                                <${B.assign({icon:tu})}
                                    class="options-icon"
                                ></${B}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function nA(e,t,r){return gr(t,H.Hidden)?"":gr(t,H.Checkbox)?b`
            <input
                type="checkbox"
                .value=${e}
                ${Z("input",n=>{const i=an(n,HTMLInputElement);r(i.checked)})}
            />
        `:gr(t,H.Color)?b`
            <input
                type="color"
                .value=${e}
                ${Z("input",n=>{const i=an(n,HTMLInputElement);r(i.value)})}
            />
        `:gr(t,H.Text)?b`
            <${ne.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Z(ne.events.valueChange,n=>{r(n.detail)})}
            ></${ne}>
        `:gr(t,H.Number)?b`
            <input
                type="number"
                .value=${e}
                ${Z("input",n=>{const i=an(n,HTMLInputElement);r(i.value)})}
            />
        `:gr(t,H.Dropdown)?b`
            <select
                .value=${e}
                ${Z("input",n=>{const i=an(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>b`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:b`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Qc=qe()({tagName:"book-breadcrumbs",styles:C`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const s=n>=i.length-1,o=i.slice(0,n+1),a=s?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${Ve.assign({route:{hash:void 0,search:void 0,paths:[Ke.Book,...o]},router:e.router})}>
                    ${r}
                </${Ve}>
                ${a}
            `}):b`
                &nbsp;
            `}}),yo=qe()({tagName:"book-breadcrumbs-bar",styles:C`
        :host {
            border-bottom: 1px solid
                ${G["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${G["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return b`
            ${Se(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${Qc.assign({currentRoute:e.currentRoute,router:e.router})}></${Qc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Z("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await bn({milliseconds:200}),n.value===i&&(n.value?t(new Ji({paths:[Ke.Search,encodeURIComponent(n.value)]})):t(new Ji(Or)))})}
            />
        `}}),Xc=qe()({tagName:"book-entry-description",styles:C`
        :host {
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${G["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>b`
                <p>${t}</p>
            `)}}),ed=qe()({tagName:"book-page-wrapper",styles:C`
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

        ${Ve} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Ke.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?o0(e.pageNode.entry.errors):void 0;return n&&console.error(n),b`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ve.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ve}>
                    ${n?b`
                              <${Vt.assign({message:n.message})}></${Vt}>
                          `:b`
                              <${Xc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Xc}>
                              <${Ln.assign({config:e.pageNode.entry.controls,currentValues:Ea(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Ln}>
                          `}
                </div>
            </div>
        `}}),bi=qe()({tagName:"book-element-example-controls",styles:C`
        :host {
            display: flex;
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Ke.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${Ve.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ve}>
        `}}),td=Symbol("unset-internal-state"),rd=qe()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:td},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw o0(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===td&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return b`
                ${Se(!!t.elementExampleNode.entry.styles,b`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",je(n)),console.error(n),b`
                <${Vt.assign({message:`${t.elementExampleNode.entry.title} failed: ${je(n)}`})}></${Vt}>
            `}},options:{allowPolymorphicState:!0}}),nd=qe()({tagName:"book-element-example-wrapper",styles:C`
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

        ${bi} {
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${bi} {
            color: ${G["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${bi.assign(o2(e,["currentPageControls"]))}></${bi}>
                <${rd.assign(e)}></${rd}>
            </div>
        `}});function jm(e,t,r,n){const i=No(r,n),s=[];if(i){const o=jm(e,t,i,n);o&&s.push(o)}if(Fr(r,ye.Page)&&!e.includes(r)){const o=Ea(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:o,breadcrumbs:ze(o,()=>r.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function iA({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:s}){if(!e.length&&n)return[b`
                No results
            `];const o=v.isLengthAtLeast(e,1)?jm(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&v.isLengthAtLeast(e,1)?b`
                  <${Ln.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${Ln}>
              `:te,u=BE(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Fr(l,ye.Page))return b`
                    <${ed.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${ed}>
                `;if(Fr(l,ye.ElementExample)){const d=Ea(i,l.fullUrlBreadcrumbs.slice(0,-1));return b`
                    <${nd.assign({elementExampleNode:l,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${nd}>
                `}else return Fr(l,ye.Root)?te:b`
                    <${Vt.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${Vt}>
                `});return[a,u]}const Er=qe()({tagName:"book-entry-display",styles:C`
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

        ${yo} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Qe["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:et()},stateInitStatic:{lastElement:void 0},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const s=Bo(e.currentRoute.paths),o=iA({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return b`
            <${yo.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${yo}>

            ${Se(e.showLoading,b`
                    <div
                        ${vc(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${B.assign({icon:Pn})}></${B}>
                    </div>
                    ${Se(!!n.lastElement,b`
                            ${n.lastElement}
                            <slot name=${gt.Footer}></slot>
                        `)}
                `,b`
                    <div
                        ${vc(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${gt.Footer}></slot>
                `)}
        `}});function sA(e,t,r){const n=id(e,t);return n.length?n:(r(Or),id(e,Or.paths))}function id(e,t){return e.filter(r=>g2({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const wo=Bh()({tagName:"element-book-app",events:{pathUpdate:et()},stateInitStatic:{currentRoute:Or,router:void 0,loading:!0,colors:{config:void 0,theme:Ac(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:C`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${G["element-book-page-background-color"].value};
            color: ${G["element-book-page-foreground-color"].value};
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

        ${Er} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ft} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await sd(e,Bo(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(d){return{...e.currentRoute,...d}}function a(d){const c=o(d);return!v.jsonEquals(e.currentRoute,c)}function u(d){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,d].filter(v.isTruthy).join(" - "))}function l(d){if(!a(d))return;const c=o(d);e.router?e.router.setRoute(c):n({currentRoute:{...e.currentRoute,...c}}),t.elementBookRoutePaths&&!v.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(c.paths))}try{if(t.elementBookRoutePaths&&!v.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=gv(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,A=>{n({currentRoute:A})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const d={themeColor:t.themeColor};if(!v.jsonEquals(d,e.colors.config)){const D=Ac(d);n({colors:{config:d,theme:D}}),W2(r,D)}const c=t._debug??!1,f=E2({entries:t.pages,debug:c});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:p0(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=Bo(e.currentRoute.paths),y=(m?d5({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??sA(f.flattenedNodes,e.currentRoute.paths,l);u(y[0]?.entry.title);const E=e.treeBasedControls?.controls;return E?(t._debug&&console.info({currentControls:E}),b`
                <div
                    class="root"
                    ${Z(Ji,async D=>{const A=D.detail;if(!a(A))return;if(n({loading:!0}),l(A),!(r.shadowRoot.querySelector(ft.tagName)instanceof ft))throw new TypeError(`Failed to find child '${ft.tagName}'`);await sd(r,m,e.currentRoute)})}
                    ${Z(Ln.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const A=A2(E,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:A}})})}
                >
                    <${ft.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${gt.NavHeader}
                            slot=${gt.NavHeader}
                        ></slot>
                    </${ft}>
                    <${Er.assign({controls:E,currentNodes:y,currentRoute:e.currentRoute,debug:c,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${Z(Er.events.loadingRender,async D=>{await Ho();const A=r.shadowRoot.querySelector(Er.tagName);A?A.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Er.tagName}' for scrolling.`),await Ho(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${gt.Footer}
                            slot=${gt.Footer}
                        ></slot>
                    </${Er}>
                </div>
            `):b`
                    <${Vt.assign({message:"Failed to generate page controls."})}></${Vt}>
                `}catch(d){return console.error(d),b`
                <p class="error">${je(d)}</p>
            `}}});async function sd(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ft.tagName);if(!(n instanceof ft))throw new TypeError(`Failed to find child '${ft.tagName}'`);await rA(n)}const bo="://";function oA(...e){const t=e.join("/"),[r,n=""]=t.includes(bo)?t.split(bo):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const d=l[u+1];let c=a;const f=d?.startsWith("?"),m=!a.includes("?")&&f,g=d==="?";if(f||m){i=!0;let y=!1;const E=l.slice(u+2).reduce((D,A)=>(A.includes("#")&&(y=!0),y?D.concat(A):[D,A].join("&")),"");c=[a,d,g?e2({value:E,prefix:"&"}):E].join("")}return o.concat(c)},[]);return[r,r?bo:"",s.join("/")].join("")}var od;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(od||(od={}));var ad;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(ad||(ad={}));const aA=Ua(wh({keys:"",values:[""],required:!0})),uA=Ua({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:aA,hash:"",fullPath:"/",href:"/"});({...uA.defaultValue});const jt=tt({title:"Elements",parent:void 0}),ru=tt({parent:jt,title:"Dropdown"}),lA=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:b`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:C`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:C`
            ${pt} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],cA=tt({title:pt.tagName,parent:ru,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:H.Text,initValue:""}},defineExamples({defineExample:e}){lA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs.selected||[]},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?b`
                            <${pt.assign(n)}>
                                ${t.customTemplate}
                            </${pt}>
                        `:b`
                            <${pt.assign(n)}></${pt}>
                        `}})})}}),yn=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],dA=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...yn,{id:42,label:"custom template",template:b`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...yn,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:C`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:C`
            ${cn} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:yt}}],fA=tt({title:cn.tagName,parent:ru,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["",...yn.map(e=>e.label)]},Prefix:{controlType:H.Text,initValue:""},"Force State":{controlType:H.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:H.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:H.Dropdown,initValue:"",options:["",...Object.keys(ta)]},Disabled:{controlType:H.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:H.Text,initValue:"Select something"}},defineExamples({defineExample:e}){dA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs?.selected||[]},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||yn,selected:i.Selected?[yn.find(o=>o.label===i.Selected)?.id].filter(v.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?ta[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return b`
                        <${cn.assign(s)}
                            ${Z(cn.events.selectedChange,o=>{n({selected:o.detail})})}
                        ></${cn}>
                    `}})})}}),hA=tt({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:H.Color,initValue:""},"Fill Color":{controlType:H.Color,initValue:""},"Stroke Width":{controlType:H.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(ta).forEach(t=>{e({title:t.name,styles:C`
                    :host(:hover) ${B} {
                        background-color: #f2f2f2;
                    }

                    ${B} {
                        padding: 8px;
                        border-radius: ${Ye["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=C`
                        ${M["vira-icon-fill-color"].name}: ${se(r["Fill Color"]||"inherit")};
                        ${M["vira-icon-stroke-color"].name}: ${se(r["Stroke Color"]||"inherit")};
                        ${M["vira-icon-stroke-width"].name}: ${se(r["Stroke Width"]?u0(r["Stroke Width"]):"inherit")};
                    `;return b`
                        <${B.assign({icon:t})} style=${n}></${B}>
                    `}})})}}),mA=tt({parent:jt,title:ce.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:H.Color,initValue:ce.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:H.Color,initValue:ce.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:H.Color,initValue:ce.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:H.Color,initValue:ce.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const s=n??C``;e({title:r,styles:s,render({controls:o}){const a=C`
                        ${ce.cssVars["vira-button-primary-color"].name}: ${se(o["Primary color"]||"inherit")};
                        ${ce.cssVars["vira-button-secondary-color"].name}: ${se(o["Secondary color"]||"inherit")};
                        ${ce.cssVars["vira-button-primary-hover-color"].name}: ${se(o["Hover color"]||"inherit")};
                        ${ce.cssVars["vira-button-primary-active-color"].name}: ${se(o["Active color"]||"inherit")};
                    `;return b`
                        <${ce.assign({text:"hello",...i})}
                            style=${a}
                        ></${ce}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:tu}}),t({title:"outline",inputs:{buttonStyle:Rm.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:C`
                ${ce} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:C`
                ${ce} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:C`
                :host {
                    ${ce.cssVars["vira-button-primary-color"].name}: pink;
                    ${ce.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ce.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ce.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return b`
                    <${ce.assign({text:"hello"})}></${ce}>
                `}})}}),pA=tt({title:ut.tagName,parent:jt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>b`
                        <${ut.assign({expanded:!!r.expandedStates[i]})}
                            ${Z(ut.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${ut.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Z("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Se(!!r.showMoreStates[i],b`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${ut}>
                    `)}}),e({title:"wider examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>b`
                        <${ut.assign({expanded:!!r.expandedStates[i]})}
                            ${Z(ut.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${ut.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Z("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Se(!!r.showMoreStates[i],b`
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
                        </${ut}>
                    `)}})}}),gA=tt({title:B.tagName,parent:jt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${B.assign({icon:yt})}></${B}>
                `}}),e({title:"using createColoredIcon",render(){return b`
                    <${B.assign({icon:Uc(yt,{"vira-icon-stroke-color":"red"})})}></${B}>
                `}}),e({title:"fit container",styles:C`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:Uc(yt,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${B}>
                `}})}}),yA=tt({title:Tt.tagName,parent:jt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:C`
                    border-radius: 32px;
                `,loadingSlot:b`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${B.assign({icon:Pn,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:C`
                    border-radius: 32px;
                `,errorSlot:b`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${B.assign({icon:Qi,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:C`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:C`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:C`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:b`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${B.assign({icon:Pn,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `,errorSlot:b`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${B.assign({icon:Qi,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:C`
                    ${Tt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||C``}
                    }

                    ${r.allowReload?C`
                              ${Tt} {
                                  cursor: pointer;
                              }

                              ${Tt}:hover {
                                  border-color: #0055ff;
                              }
                          `:C``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},render({state:n,updateState:i}){return b`
                        <${Tt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${Z("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${s0()}`})})}
                        >
                            ${r.loadingSlot?b`
                                      <div class="slot-wrapper" slot=${Tt.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?b`
                                      <div class="slot-wrapper" slot=${Tt.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${Tt}>
                    `}})})}}),wA=tt({title:ne.tagName,parent:jt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:H.Color,initValue:ne.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:H.Color,initValue:ne.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:H.Color,initValue:ne.cssVars["vira-input-border-color"].default},"Focus color":{controlType:H.Color,initValue:ne.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:H.Color,initValue:ne.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:s}){e({title:i,styles:C`
                    ${n||C``}
                `,stateInitStatic:{value:s.value},render({state:o,updateState:a,controls:u}){const l={[String(ne.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(ne.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(ne.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(ne.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(ne.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},d=ze(l,(f,m)=>m||"inherit"),c=Object.entries(d).map(([f,m])=>[f,m].join(": ")+";").join(`
`);return b`
                        <${ne.assign({...s,value:o.value})}
                            style=${c}
                            ${Z(ne.events.valueChange,f=>{a({value:f.detail})})}
                        ></${ne}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:yt}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:C`
                    ${ne} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:yt}},{title:"taller height",styles:C`
                    ${ne} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:yt}},{title:"shorter height",styles:C`
                    ${ne} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:yt}},{title:"max width",styles:C`
                    ${ne} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:C`
                    ${ne} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Wm.Password}}].forEach(t)}}),bA=tt({title:wi.tagName,parent:jt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:H.Color,initValue:""},"Hover color":{controlType:H.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const s=C`
                        ${wi.cssVars["vira-link-hover-color"].name}: ${se(i["Hover color"]||"inherit")};
                        color: ${se(i["CSS Color"]||"inherit")};
                    `;return b`
                        <${wi.assign(n)} style=${s}>My Link</${wi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),DA=[jt,hA,ru,mA,pA,cA,fA,gA,yA,wA,bA].sort((e,t)=>e.title.localeCompare(t.title));$s({tagName:"vira-book-app",styles:C`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${wo} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return b`
            <${wo.assign({internalRouterConfig:{basePath:oA("element-vir","vira"),useInternalRouter:!0},pages:DA,themeColor:"#33ccff"})}>
                <h1 slot=${gt.NavHeader}>Vira</h1>
            </${wo}>
        `}});
