var get_distance={
  function get_diatance(){
  map.getDistance({
  start: {
      lon: $api.getStorage('lon'),
      lat: $api.getStorage('lat')
  },
  end: {
      lon: $api.getStorage('task1').building_longitude,
      lat: $api.getStorage('task1').building_latitude
  }
}, function(ret) {
  if (ret.status) {
      alert(ret.distance);
  }
});
}
}
