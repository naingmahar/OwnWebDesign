$(document).ready(function(){


    var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    var deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

    function stringifyNumber(n) {
        if (n < 20) return special[n];
        if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
        return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
    }
    console.clear();
    for (var i=0; i<=31; i++) console.log(stringifyNumber(i));

    $("#previous").click(function () {
        var pageId = $(`#rPageId`).text()
        pageId = parseInt(pageId) -1
        bookDataReader(pageId)
    })

    $("#next").click(function () {
        var pageId = $(`#rPageId`).text()
        pageId = parseInt(pageId) +1
        bookDataReader(pageId)
    })

    bookDataReader(1)
    function bookDataReader(pageId){
        $.ajax({
            type: "GET" ,
            url: "RetailsData.xml" ,
            dataType: "xml" ,
            success: function(xml) {
                $(xml).find('page').each(function(){
                    var rPageId = $(this).attr('id')
                    var rPageName = $(this).find("title")
                    var rPageImage = $(this).find("img").text()
                    var rDescriptionData = $(this).find("description")
                    var instructionData = $(this).find("instruction")
                    var functionData = $(this).find("function")

                    if(pageId == rPageId){
                        // $( "#pagination ul").toggle( "slow" );
                        // $( "#pagination h4").toggle( "slow" );
                        bookCreator({rDescriptionData,rPageId,rPageName,rPageImage,instructionData,functionData})
                        return false;
                    }

                })
            }
        })
    }


    function bookCreator(xmlData){
        $("#pagination ul").empty();
        $(`#rPageId`).html( xmlData.rPageId)
        $(`#rPageName`).html( xmlData.rPageName)
        $(`#rPageImage`).attr('src',`../assets/images/Retail%20Performance/${xmlData.rPageImage}`)

        if($(xmlData.rDescriptionData).text()){
            $(xmlData.rDescriptionData).find('li').each(function(){
                $(`#rDescriptionData`).append(`<li>${$(this).text()}</li>`)
            })
        }else{
            $(`#rDescription`).hide()
        }

        if($(xmlData.instructionData).text()){
            $(xmlData.instructionData).find('li').each(function(){
                $(`#rInstruction`).show()
                $(`#instructionData`).append(`<li>${$(this).text()}</li>`)
            })
        }else{
            $(`#rInstruction`).hide()
        }

        if($(xmlData.functionData).text()){
            $(xmlData.functionData).find('li').each(function(){
                $(`#functionData`).append(`<li>${$(this).text()}</li>`)
            })
        }else{
            $(`#rFunction`).hide()
        }
        // $( "#pagination ul").toggle( "slow" );
        // $( "#pagination h4").toggle( "slow" );

    }
})

