if(Meteor.isServer){
    Meteor.startup(function(){
        if(Images.find().count() === 0){
            for(var i=1;i<23;i++){
                Images.insert(
                {
                    img_src:"img_"+i+".jpg",
                    img_alt:"image Numer "+i
                }
            );
        } //End of for insert images
         console.log("Startup,js says "+Images.find().count());
        } // End of : if have no images
    });
}
