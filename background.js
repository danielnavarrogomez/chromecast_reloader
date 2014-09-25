var id_array=["boadgeojelhgndaghljhdicfkmllpafd", "dliochdbjfkdbacpmhlcpmleaejidimm", "hfaagokkkhdbgiakmmlclaapfelnkoah", "fmfcbgogabcbclcofgocippekhfcmgfj", "enhhojjnijigcajfphajepfemndkmdlo"];

chrome.browserAction.onClicked.addListener(function (tab) {
    var arrayLength = id_array.length;
    for (var i = 0; i < arrayLength; i++) {
        //alert(myStringArray[i]);
        //Do something
        chrome.management.setEnabled(id_array[i],false);
        chrome.management.setEnabled(id_array[i],true);
    }
    
});