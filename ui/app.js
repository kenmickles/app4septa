var LL = null;

if ( navigator.geolocation ) {
  navigator.geolocation.getCurrentPosition(function(pos){
    LL =  pos.coords.latitude + ',' + pos.coords.longitude;
  });
}    

$(function(){
  // Where you going?
  $('#train_destination').change(function(){
    var $this = $(this);
    
    if ( $this.val() == '' ) {
      $('#train blockquote p').html($('#train blockquote').attr('title'));
      return false;
    }
    
    $.get('index.php?action=next_train', {ll: LL, destination: $this.val()}, function(data){
      var $div = $('#train .answer');
      $div.find('.route').text(data.route);
      $div.find('.train').text(data.train);
      $div.find('.time').text(data.arrives_at);
      
      $('#train blockquote p').html($div.html());
    }, 'json');
  });
  
  // When's your flight?
  $('#airport_time').change(function(){
    var $this = $(this);
    
    if ( $this.val() == '' ) {
      $('#airport blockquote p').html($('#airport blockquote').attr('title'));
      return false;
    }
    
    $.get('index.php?action=airport', {ll: LL, by: $this.val()}, function(data){
      var $div = $('#airport .answer');
      $div.find('.time').text(data.time);
      
       $('#airport blockquote p').html($div.html());
    }, 'json');
  });
});