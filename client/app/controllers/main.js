angular.module('mainCtrl', [])

.controller('mainController', function (Rooms, Users, DirectMessage, Visualization, $rootScope, $stateParams, $http) {

	var vm = this;
  console.log('main', $stateParams);
  console.log('rootScope', $rootScope.logInfo);
  vm.org = $stateParams.org;
  if ($rootScope && $rootScope.logInfo) {
    vm.currentUser = $rootScope.logInfo;
  }

  // Get the rooms from the roomFactory.
  vm.rooms = Rooms.getRooms(vm.org);
  // Get all users except for the current user from the userFactory.
  vm.users = Users.getDisplayUsers(vm.currentUser.username, vm.org);

  $http({
     method: 'POST', 
     url: '/organization', 
     data: $.param({ org: vm.org}), 
     headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
  });
  // $http.post('/organization', {"org": "hello"})
  //   .success(function(data, status, headers, config) {
  //     console.log("successfully added org");
  //   })
  //   .error(function(data, status, headers, config) {
  //     console.log("failed to add org");
  //   });

  // Send new room to the roomFactory.
  vm.addRoom = function(e) {
    if (e.keyCode === 13) {
      var nameOfRoomToAdd = vm.nameOfRoomToAdd || 'new room';
      if (vm.rooms.indexOf(nameOfRoomToAdd) === -1) {
        console.log('Adding room ', nameOfRoomToAdd);
        Rooms.addRoom(nameOfRoomToAdd, vm.org);
        vm.nameOfRoomToAdd = '';
        // update the list of chatrooms
        vm.rooms = Rooms.getRooms(vm.org);
      } else {
        console.log('this room already exists');
      }
    }
  };
});

