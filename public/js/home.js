$(function() {
    $("#search").on("keyup", function() {
      $(".users").html("");
      var val = $.trim(this.value);
      if (val) {
        val = val.toLowerCase();
        $.each(usersArray, function(_,obj) {
         // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
          if (obj.name.toLowerCase().indexOf(val) != -1) {
            $(".users").append('<div class="user-card"><span class="user-info">'+obj.name+'</span><br/><img class="user-image" src="'+obj.image+'"/></div>');
          }
        });
      }
      $(".not-found").toggle($(".users").find("img").length==0);
    });
  });
  
  
  var usersArray = [{
      name: "Jhon Doe",
      age: 21,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Jane Doe",
      age: 20,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Milo Westfall",
      age: 31,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Dayna Bennefield",
      age: 27,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Danny Eckhoff",
      age: 18,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Estella Fosdick",
      age: 51,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Farah Benson",
      age: 77,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Keith Gross",
      age: 21,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Malcolm X",
      age: 20,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Jhon Cena",
      age: 31,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Rich Ross",
      age: 27,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Charlie Sheen",
      age: 44,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Lena Donovan",
      age: 51,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Jay Kos",
      age: 77,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Vincent Robert",
      age: 21,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Adam Rodriguez",
      age: 20,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Jhon Travolta",
      age: 31,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Ben Mackferson",
      age: 27,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Stella Cox",
      age: 18,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Jenna Johnson",
      age: 51,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
      name: "Bill Tim",
      age: 77,
      image: "https://placeimg.com/140/140/people?t=" + Math.random()
    }
  ];