function Icon(screenName){
  var self = this;
  self.screenName = screenName;

  self.imageSrc = ko.computed(function(){
    return "http://gadgtwit.appspot.com/twicon/" + self.screenName + "/original";
  });
}


function IconSlideshowViewModel(){
  //Data
  var self = this;
  self.screenNames = ko.observableArray();
  $.getJSON("./data/screenNames.json", function(json){
    self.setData(json);
  });
  
  self.setData = function(json){
    for(var i = 0; i < json.length; i++ ){
      var data = json[i];
      self.screenNames.push(new Icon(data['screenName']));
    }
    //self.startMarquee();
    self.startSlideShow();
  };
  
  self.startSlideShow = function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      speed: 900,
      auto: true,
      autoControls: true,
      ticker: true,
      slideWidth: 400,
      onSlideBefore: function($slideElement, oldIndex, newIndex){ 
        var screenName = $slideElement.children('img').attr('title');
        var bgUrl = 'http://gadgtwit.appspot.com/twbg/' + screenName; 
        $('body').fadeOut(700, function(){
          $('body').css('background-image', 'url(' + bgUrl + ')').fadeIn(700);
          $('#screenName').text('@' + screenName);
          //self.changeScreenName(screenName);
        });
      }
    });
  };
  self.startMarquee = function(){
    self.mqobj = $('#marquee').marquee('screenName opacity-bg');
  };
  self.changeScreenName = function(screenName){
    self.mqobj.children('div').text('@' + screenName);
  };
}
ko.applyBindings(new IconSlideshowViewModel());
