/* =========================================================================
   Esporta un vero file Excel (.xlsx) senza librerie esterne.
   Si apre gia' diviso in colonne su qualsiasi PC (il CSV invece dipende dal
   separatore impostato nel Windows di chi lo apre).
   Uso: window.XLSX_EXPORT.blob(colonne, righe, nomeFoglio, opzioni)
        opzioni (facoltative): {dateCols: ["Data"]  -> testo gg/mm/aaaa diventa data Excel,
          colorScale: ["Punteggio"]  -> scala colori rosso-giallo-verde,
          highlight: {col: "da_rinforzare", value: "Niente!"}  -> cella verde}
        colonne = ["login","punti",...]   righe = [{login:"mario", punti:30}, ...]
   I valori di tipo numero diventano numeri in Excel, tutto il resto testo.
   ========================================================================= */
(function(){
  "use strict";
  var enc = new TextEncoder();

  /* CRC32 per i file dentro lo zip */
  var CRC = (function(){
    var t = new Uint32Array(256);
    for(var n = 0; n < 256; n++){ var c = n; for(var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(b){ var c = 0xFFFFFFFF; for(var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }

  /* zip "store" (senza compressione): sufficiente e affidabile per pochi kB */
  function zip(files){
    var parts = [], central = [], offset = 0;
    var d = new Date();
    var dosTime = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    var dosDate = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    files.forEach(function(f){
      var name = enc.encode(f.name), data = enc.encode(f.data), crc = crc32(data);
      var lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
      lh.setUint16(10, dosTime, true); lh.setUint16(12, dosDate, true); lh.setUint32(14, crc, true);
      lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
      parts.push(new Uint8Array(lh.buffer), name, data);
      var ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true);
      ch.setUint16(12, dosTime, true); ch.setUint16(14, dosDate, true); ch.setUint32(16, crc, true);
      ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true);
      ch.setUint16(30, 0, true); ch.setUint16(32, 0, true); ch.setUint16(34, 0, true); ch.setUint16(36, 0, true); ch.setUint32(38, 0, true);
      ch.setUint32(42, offset, true);
      central.push(new Uint8Array(ch.buffer), name);
      offset += 30 + name.length + data.length;
    });
    var cdSize = central.reduce(function(s, p){ return s + p.length; }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(4, 0, true); end.setUint16(6, 0, true);
    end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
    end.setUint32(12, cdSize, true); end.setUint32(16, offset, true); end.setUint16(20, 0, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]),
      {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  }

  function esc(s){
    return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function colName(i){ var s = ""; i++; while(i > 0){ var m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }

  function toSerial(v){
    var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(v));
    if(!m) return null;
    return (Date.UTC(+m[3], +m[2] - 1, +m[1]) - Date.UTC(1899, 11, 30)) / 86400000;
  }
  function sheetXml(cols, rows, opts){
    opts = opts || {};
    var dateCols = opts.dateCols || [], hl = opts.highlight;
    var widths = cols.map(function(c){
      var w = String(c).length;
      rows.forEach(function(r){ var v = r[c]; if(v != null) w = Math.max(w, String(v).length); });
      return Math.min(Math.max(w + 2, 8), 60);
    });
    var x = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
      '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>' +
      '<cols>' + widths.map(function(w, i){ return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'; }).join("") + '</cols>' +
      '<sheetData>';
    var all = [cols.reduce(function(o, c){ o[c] = c; return o; }, {})].concat(rows);
    all.forEach(function(r, ri){
      x += '<row r="' + (ri + 1) + '">';
      cols.forEach(function(c, ci){
        var v = r[c], ref = colName(ci) + (ri + 1), st = ri === 0 ? ' s="1"' : "";
        if(v == null || v === "") return;
        if(ri > 0 && dateCols.indexOf(c) >= 0){ var sn = toSerial(v); if(sn != null){ x += '<c r="' + ref + '" s="2"><v>' + sn + '</v></c>'; return; } }
        if(ri > 0 && hl && hl.col === c && v === hl.value) st = ' s="3"';
        if(typeof v === "number" && isFinite(v) && ri > 0) x += '<c r="' + ref + '"' + st + '><v>' + v + '</v></c>';
        else x += '<c r="' + ref + '" t="inlineStr"' + st + '><is><t xml:space="preserve">' + esc(v) + '</t></is></c>';
      });
      x += '</row>';
    });
    x += '</sheetData>';
    (opts.colorScale || []).forEach(function(c, k){
      var ci = cols.indexOf(c);
      if(ci < 0 || !rows.length) return;
      var L = colName(ci);
      x += '<conditionalFormatting sqref="' + L + '2:' + L + (rows.length + 1) + '"><cfRule type="colorScale" priority="' + (k + 1) + '"><colorScale>' +
        '<cfvo type="min"/><cfvo type="percentile" val="50"/><cfvo type="max"/>' +
        '<color rgb="FFF8696B"/><color rgb="FFFFEB84"/><color rgb="FF63BE7B"/></colorScale></cfRule></conditionalFormatting>';
    });
    return x + '</worksheet>';
  }

  function blob(cols, rows, sheetName, opts){
    var name = esc(String(sheetName || "Risultati").replace(/[\\\/\?\*\[\]:]/g, " ").slice(0, 31));
    return zip([
      {name: "[Content_Types].xml", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
        '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' +
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
        '</Types>'},
      {name: "_rels/.rels", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
        '</Relationships>'},
      {name: "xl/workbook.xml", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
        '<sheets><sheet name="' + name + '" sheetId="1" r:id="rId1"/></sheets></workbook>'},
      {name: "xl/_rels/workbook.xml.rels", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '</Relationships>'},
      {name: "xl/styles.xml", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
        '<fonts count="3"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font><font><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font></fonts>' +
        '<fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF00B050"/><bgColor indexed="64"/></patternFill></fill></fills>' +
        '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>' +
        '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
        '<cellXfs count="4"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>' +
        '<xf numFmtId="14" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/></cellXfs>' +
        '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>' +
        '</styleSheet>'},
      {name: "xl/worksheets/sheet1.xml", data: sheetXml(cols, rows, opts)}
    ]);
  }

  window.XLSX_EXPORT = {blob: blob};
})();
