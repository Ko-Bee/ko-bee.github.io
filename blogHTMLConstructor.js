clearAllValues();
new ClipboardJS('.copyButton');
document.getElementById("resetButtonID").addEventListener("click", clearAllValues)
document.getElementById("budget-1").addEventListener("click", iconCheckerFull);
document.getElementById("budget-2").addEventListener("click", iconCheckerFull);
document.getElementById("tool-1").addEventListener("click", iconCheckerFull);
document.getElementById("tool-2").addEventListener("click", iconCheckerFull);
document.getElementById("tool-3").addEventListener("click", iconCheckerFull);
document.getElementById("tool-4").addEventListener("click", iconCheckerFull);
document.getElementById("tool-5").addEventListener("click", iconCheckerFull);
document.getElementById("tool-6").addEventListener("click", iconCheckerFull);
document.getElementById("goButtonID").addEventListener("click", computeValue);
var iconLinkValue;
var userLinkInput;

var linkStorage = ['https://ko-bee.github.io/icons/Gradient-Info.svg',
                   'https://ko-bee.github.io/icons/EquationIcon.svg',
                   'https://ko-bee.github.io/icons/ExampleIcon.svg']

var directoryStorage = ['https://ko-bee.github.io/equations/',
                        'https://ko-bee.github.io/Images/']

function iconCheckerFull(){
    clearAllValues();
    var portionContainer = document.getElementById("tool-1").checked;
    var contentContainer = document.getElementById("budget-1").checked;
    var buttonContainer = document.getElementById("tool-2").checked;
    var linkContainer = document.getElementById("tool-3").checked;
    var newsLetterContainer = document.getElementById("tool-4").checked;
    var iframeContainer = document.getElementById("tool-5").checked;
    var blogImageContainer = document.getElementById("tool-6").checked;


    if(portionContainer==true){
        document.getElementById('yesNoRadio').style.display='none'
        document.getElementById('imageOrTextButtonClass').style.display='block',
        document.getElementById('fileLocationTypeNo').style.display='block',
        document.getElementById('fileNameConstructor').style.display='block',
        document.getElementById('openInTabHeader').style.display='none'
        document.getElementById('ButtonLabelTitle').style.display='none',
        document.getElementById('ButtonLabelInput').style.display='none',
        document.getElementById('ButtonLinkTitle').style.display='none',
        document.getElementById('ButtonLinkInput').style.display='none',
        document.getElementById('fullContentsLabel').style.display='block',
        document.getElementById('fullContentsButton').style.display='block',
        document.getElementById('fileNameInDiv').style.display='block'
    }    

    if(buttonContainer==true){
        document.getElementById('yesNoRadio').style.display='block',
        document.getElementById('imageOrTextClass').style.display='none',
        document.getElementById('imageOrTextButtonClass').style.display='none',
        document.getElementById('fileLocationTypeNo').style.display='none',
        document.getElementById('fileNameConstructor').style.display='none',
        document.getElementById('linkInputID1').style.display='none',
        document.getElementById('textInputID').style.display='none',
        document.getElementById('linkInputID').style.display='none',
        document.getElementById('openInTabHeader').style.display='block',
        document.getElementById('ButtonLabelTitle').style.display='block',
        document.getElementById('ButtonLabelInput').style.display='block',
        document.getElementById('ButtonLinkTitle').style.display='block',
        document.getElementById('ButtonLinkInput').style.display='block',
        document.getElementById('fullContentsLabel').style.display='block',
        document.getElementById('fullContentsButton').style.display='block',
        document.getElementById('fileNameInDiv').style.display='none',
        document.getElementById('iconLabelID').style.display='none',
        document.getElementById('iconButtonID').style.display='none'
    }    

    if(linkContainer==true){
        document.getElementById('yesNoRadio').style.display='block',
        document.getElementById('imageOrTextClass').style.display='none',
        document.getElementById('imageOrTextButtonClass').style.display='none',
        document.getElementById('fileLocationTypeNo').style.display='none',
        document.getElementById('fileNameConstructor').style.display='none',
        document.getElementById('linkInputID1').style.display='none',
        document.getElementById('textInputID').style.display='none',
        document.getElementById('linkInputID').style.display='none',
        document.getElementById('openInTabHeader').style.display='block',
        document.getElementById('ButtonLabelTitle').style.display='block',
        document.getElementById('ButtonLabelInput').style.display='block',
        document.getElementById('ButtonLinkTitle').style.display='block',
        document.getElementById('ButtonLinkInput').style.display='block',
        document.getElementById('fullContentsLabel').style.display='none',
        document.getElementById('fullContentsButton').style.display='none',
        document.getElementById('fileNameInDiv').style.display='none'
    }

    if(blogImageContainer==true){
        document.getElementById('yesNoRadio').style.display='block',
        document.getElementById('imageOrTextClass').style.display='none',
        document.getElementById('imageOrTextButtonClass').style.display='none',
        document.getElementById('fileLocationTypeNo').style.display='none',
        document.getElementById('fileNameConstructor').style.display='none',
        document.getElementById('linkInputID1').style.display='none',
        document.getElementById('textInputID').style.display='none',
        document.getElementById('linkInputID').style.display='none',
        document.getElementById('openInTabHeader').style.display='block',
        document.getElementById('ButtonLabelTitle').style.display='block',
        document.getElementById('ButtonLabelInput').style.display='block',
        document.getElementById('ButtonLinkTitle').style.display='block',
        document.getElementById('ButtonLinkInput').style.display='block',
        document.getElementById('fullContentsLabel').style.display='none',
        document.getElementById('fullContentsButton').style.display='none',
        document.getElementById('fileNameInDiv').style.display='none'
    }       

    
    if(newsLetterContainer==true){
        document.getElementById('yesNoRadio').style.display='block',
        document.getElementById('imageOrTextClass').style.display='none',
        document.getElementById('imageOrTextButtonClass').style.display='none',
        document.getElementById('fileLocationTypeNo').style.display='none',
        document.getElementById('fileNameConstructor').style.display='none',
        document.getElementById('linkInputID1').style.display='none',
        document.getElementById('textInputID').style.display='none',
        document.getElementById('linkInputID').style.display='none',
        document.getElementById('openInTabHeader').style.display='block',
        document.getElementById('ButtonLabelTitle').style.display='block',
        document.getElementById('ButtonLabelInput').style.display='block',
        document.getElementById('ButtonLinkTitle').style.display='block',
        document.getElementById('ButtonLinkInput').style.display='block',
        document.getElementById('fullContentsLabel').style.display='none',
        document.getElementById('fullContentsButton').style.display='none',
        document.getElementById('fileNameInDiv').style.display='none'
        document.getElementById('openInTabHeader').style.display='none'
        document.getElementById('yesNoRadio').style.display='none'
        document.getElementById('ButtonLabelTitle').style.display='none'
        document.getElementById('ButtonLabelInput').style.display='none'
        document.getElementById('ButtonLinkTitle').style.display='none'
        document.getElementById('ButtonLinkInput').style.display='none'
    }  

    if(iframeContainer==true){
        document.getElementById('yesNoRadio').style.display='block',
        document.getElementById('imageOrTextClass').style.display='none',
        document.getElementById('imageOrTextButtonClass').style.display='none',
        document.getElementById('fileLocationTypeNo').style.display='none',
        document.getElementById('fileNameConstructor').style.display='none',
        document.getElementById('linkInputID1').style.display='none',
        document.getElementById('textInputID').style.display='none',
        document.getElementById('linkInputID').style.display='none',
        document.getElementById('openInTabHeader').style.display='block',
        document.getElementById('ButtonLabelTitle').style.display='block',
        document.getElementById('ButtonLabelInput').style.display='block',
        document.getElementById('ButtonLinkTitle').style.display='block',
        document.getElementById('ButtonLinkInput').style.display='block',
        document.getElementById('fullContentsLabel').style.display='none',
        document.getElementById('fullContentsButton').style.display='none',
        document.getElementById('fileNameInDiv').style.display='none'
        document.getElementById('openInTabHeader').style.display='none'
        document.getElementById('yesNoRadio').style.display='none'
        document.getElementById('ButtonLabelTitle').style.display='none'
        document.getElementById('ButtonLabelInput').style.display='none'
    }  

    if(portionContainer==true&&contentContainer==true){
        document.getElementById('iconLabelID').style.display='block'
        document.getElementById('iconButtonID').style.display='block'
    }
    else{
        document.getElementById('iconLabelID').style.display='none'
        document.getElementById('iconButtonID').style.display='none'
    }
}

function iconCheckerButton(){
    
}

function computeValue(){
    var imageLink = document.getElementById("imageIn").value;
    var textInput = document.getElementById("imageIn").value;
    var section1 = document.getElementById("tool-1").checked;
    var section2 = document.getElementById("tool-2").checked;
    var section3 = document.getElementById("tool-3").checked;
    var section4 = document.getElementById("tool-4").checked;
    var section5 = document.getElementById("tool-5").checked;
    var section6 = document.getElementById("tool-6").checked;
    var isFull = document.getElementById("budget-1").checked;
    var isImage = document.getElementById("content-1").checked;
    var infoIcon1 = document.getElementById("icon-1").checked;
    var infoIcon2 = document.getElementById("icon-2").checked;
    var infoIcon3 = document.getElementById("icon-3").checked;
    var infoIcon4 = document.getElementById("icon-4").checked;
    var infoIcon5 = document.getElementById("icon-5").checked;
    var fileNameCheck = document.getElementById("imageString1").checked;
    var fileDirectory = document.getElementById("fileDirectoryName").value;
    var inSeperateTab = document.getElementById("yesyes").checked;

    if(section1==true){
        switch(isFull){
            case true:
                if(infoIcon1==true){
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[0];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="infoBox"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[0];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="infoBox"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            iconLinkValue = linkStorage[0];
                            userHeadingInput = document.getElementById("fileNameIn").value;
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<div class="infoBox"><div class="infoBoxHeading">'+userHeadingInput+'</div>'+userTextInput+'</div>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                else if(infoIcon2==true){
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[1];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[1];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            iconLinkValue = linkStorage[1];
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<div class="equationBox"><div class="equationBoxHeading">'+userHeadingInput+'</div>'+userTextInput+'</div>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                else if(infoIcon4==true){
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[1];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[1];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            iconLinkValue = linkStorage[1];
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<div class="furtherLearningBox"><div class="furtherLearningBoxHeading">'+userHeadingInput+'</div>'+userTextInput+'</div>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                else if(infoIcon5==true){
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[1];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[1];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            iconLinkValue = linkStorage[1];
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<div class="warningBox"><div class="warningBoxHeading">'+userHeadingInput+'</div>'+userTextInput+'</div>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                else{
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[1];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[1];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="attentionInfo-box"><div><img src="'+iconLinkValue+'" width="50px" /></div><div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            iconLinkValue = linkStorage[1];
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<div class="exampleBox"><div class="exampleBoxHeading">'+userHeadingInput+'</div>'+userTextInput+'</div>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
            break
            default:
                if(infoIcon1==true){
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[0];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[0];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<p>'+userTextInput+'</p>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                else if(infoIcon2==true){
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[1];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[1];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<p>'+userTextInput+'</p>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                else{
                    switch(isImage){
                        case true:
                            switch(fileNameCheck){
                                case true:
                                    iconLinkValue = linkStorage[2];
                                    userFileName = document.getElementById("fileNameIn").value;
                                    outPutResult = '<div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+directoryStorage[fileDirectory]+userFileName+'" width="100%" /></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                                default:
                                    iconLinkValue = linkStorage[2];
                                    userLinkInput = document.getElementById("imageIn").value;
                                    outPutResult = '<div class="equationImageDiv" style="text-align: start;"><img class="equationImage" src="'+userLinkInput+'" width="100%" /></div>';
                                    document.getElementById("resultsOuts").value = outPutResult;
                                    break
                            }
                            break
                        default:
                            userTextInput = document.getElementById("textIn").value;
                            outPutResult = '<p>'+userTextInput+'</p>';
                            document.getElementById("resultsOuts").value = outPutResult;
                            break
                    }
                }
                break
        }
    }
    else if(section2==true){
        switch(isFull){
            case true:
                switch(inSeperateTab){
                    case true:
                        var buttonTitle = document.getElementById("buttonLabelIn").value;
                        var buttonLink = document.getElementById("buttonLinkIn").value;
                        outPutResult= '<div class="buttonContainer"><a class="articleButton" href="'+buttonLink+'" target="_blank" rel="noopener noreferrer">'+buttonTitle+'</a></div>'
                        document.getElementById("resultsOuts").value = outPutResult;
                        break
                    default:
                        var buttonTitle = document.getElementById("buttonLabelIn").value;
                        var buttonLink = document.getElementById("buttonLinkIn").value;
                        outPutResult= '<div class="buttonContainer"><a class="articleButton" href='+buttonLink+'" rel="noopener noreferrer">'+buttonTitle+'</a></div>'
                        document.getElementById("resultsOuts").value = outPutResult;
                        break
                }
            break
            default:
                switch(inSeperateTab){
                case true:
                    var buttonTitle = document.getElementById("buttonLabelIn").value;
                    var buttonLink = document.getElementById("buttonLinkIn").value;
                    outPutResult= '<a class="articleButton" href="'+buttonLink+'" target="_blank" rel="noopener noreferrer">'+buttonTitle+'</a>'
                    document.getElementById("resultsOuts").value = outPutResult;
                    break
                default:
                    var buttonTitle = document.getElementById("buttonLabelIn").value;
                    var buttonLink = document.getElementById("buttonLinkIn").value;
                    outPutResult= '<a class="articleButton" href="'+buttonLink+'" rel="noopener noreferrer">'+buttonTitle+'</a>'
                    document.getElementById("resultsOuts").value = outPutResult;
                    break
            }
            break
        }
    }

    if(section3==true){
        switch(inSeperateTab){
            case true:
                var buttonTitle = document.getElementById("buttonLabelIn").value;
                var buttonLink = document.getElementById("buttonLinkIn").value;
                outPutResult= '<a href="http://'+buttonLink+'" target="_blank" title="'+buttonTitle+'" rel="noopener noreferrer" style="text-decoration: underline;" rel="noopener noreferrer">'+buttonTitle+'</a>'
                document.getElementById("resultsOuts").value = outPutResult;
                break
            default:
                var buttonTitle = document.getElementById("buttonLabelIn").value;
                var buttonLink = document.getElementById("buttonLinkIn").value;
                outPutResult= '<a href="http://'+buttonLink+'" title="'+buttonTitle+'" rel="noopener noreferrer" style="text-decoration: underline;" rel="noopener noreferrer">'+buttonTitle+'</a>'
                document.getElementById("resultsOuts").value = outPutResult;
                break
        }
    }

    if(section6==true){
        switch(inSeperateTab){
            case true:
                var imageAltTitle = document.getElementById("buttonLabelIn").value;
                var imageLink = document.getElementById("buttonLinkIn").value;
                outPutResult= '<a href="'+imageLink+'" target="_blank"><img src="'+imageLink+'" style="box-shadow: 0 3px 15px rgb(0 0 0 / 0.4)" title="Click to Enlarge" alt="'+imageAltTitle+'" data-mce-fragment="1" data-mce-src="'+imageLink+'"></a><br>'
                document.getElementById("resultsOuts").value = outPutResult;
                break
            default:
                var buttonTitle = document.getElementById("buttonLabelIn").value;
                var buttonLink = document.getElementById("buttonLinkIn").value;
                outPutResult= '<a href="http://'+buttonLink+'" title="'+buttonTitle+'" rel="noopener noreferrer" style="text-decoration: underline;" rel="noopener noreferrer">'+buttonTitle+'</a>'
                document.getElementById("resultsOuts").value = outPutResult;
                break
        }
    }

    if(section4==true){
        outPutResult = '<iframe src="https://mailchi.mp/6e90ba642953/nreoc8um55" frameborder="0" scrolling="no" height="480px" width="100%"></iframe>'
        document.getElementById("resultsOuts").value = outPutResult;
    }

    if(section5==true){
        var buttonLink = document.getElementById("buttonLinkIn").value;
        outPutResult = '<iframe src="'+buttonLink+'" frameborder="0" scrolling="no" height="240px" width="100%"></iframe>'
        document.getElementById("resultsOuts").value = outPutResult;
    }
}

function clearAllValues(){
    document.getElementById("resultsOuts").value = "";
    document.getElementById("imageIn").value = "";
    document.getElementById("textIn").value = "";
    document.getElementById("fileNameIn").value = "";
    document.getElementById("buttonLabelIn").value = "";
    document.getElementById("buttonLinkIn").value = "";
}
